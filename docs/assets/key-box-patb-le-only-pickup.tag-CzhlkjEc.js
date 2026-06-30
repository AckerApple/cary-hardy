var Z0=Object.defineProperty;var eb=(t,e,n)=>e in t?Z0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ht=(t,e,n)=>eb(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function pi(t){return t.renderCount=t.renderCount||0,t.varCounter=0,t.state={newer:{state:[],states:[]}},t.global={blocked:[]}}function mo(){return Te.stateConfig.support}function qo(t){return Ke(t.context),Te.stateConfig.support=t}const Je=function(){};let gt=[];const Ot=[];let bt=[],Go=[],mn=[],kl=!1;const pn=[],tb=400;let Lr=0;const jc=new Map,we={locks:0};function nb(t,e){const n=jc.get(t);if(n!==void 0&&n>=Lr){pn[n]=e;return}const r=pn.length;pn.push(e),jc.set(t,r)}function rb(t,e){e.textContent=t}function ot(){we.locks>0||sb()}function sb(){++we.locks,Ep(),--we.locks,Tp(),ib()}function Tp(){ab();const t=mn;mn=[];for(const e of t)e[0](...e[1])}function ib(){kl||!pn.length||ob()}function ob(){kl=!0,requestAnimationFrame(Ip)}function Ip(){++we.locks;let t=0;for(;Lr<pn.length&&t<tb;){const e=pn[Lr];++Lr,e[0](...e[1]),++t}if(Ep(),Tp(),--we.locks,Lr<pn.length){requestAnimationFrame(Ip);return}pn.length=0,Lr=0,jc.clear(),kl=!1}function Ep(){const t=Ot.length;for(let e=0;e<t;++e){const n=Ot[e];n[0](...n[1])}if(t===Ot.length)Ot.length=0;else{let e=0;for(let n=t;n<Ot.length;++n)Ot[e]=Ot[n],++e;Ot.length=e}for(const e of bt)e[0](...e[1]);for(const e of Go)e[0](...e[1]);for(const e of gt)e[0](...e[1])}function ab(){gt=[],bt=[],Go=[]}function ti(t,e){Ot.push([cb,[t,e]])}function cb(t,e){t||console.debug("no element by",{_caller:e,element:t});const n=t.parentNode;n||console.debug("no parentNode by",{_caller:e,element:t}),n.removeChild(t)}function Sl(t,e,n){t.parentNode.insertBefore(e,t)}function Pl(t,e){t.appendChild(e)}typeof document=="object"&&document.createElement("div");function lb(t){return document.createTextNode(t)}function vp(t,e,n=Je,r){const s=lb(e);Sl(t,s),n(s)}const gi="";var ch;(function(t){t.string="string",t.number="number",t.boolean="boolean",t.undefined="undefined"})(ch||(ch={}));var pe;(function(t){t.function="function",t.date="date",t.unknown="unknown",t.object="object"})(pe||(pe={}));const ub=Date.now(),fe={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",stateRender:"stateRender",version:ub};function Ap(t){if(!t)return!1;switch(t.tagJsType){case fe.dom:case fe.tag:case fe.templater:return!0}return!1}function mi(t){const e=t==null?void 0:t.tagJsType;return e===fe.tagComponent||e===fe.stateRender}function db(t){return Wo(t)&&typeof t.subscribe===pe.function}function dr(t){return t&&ir(t.then)}function ir(t){return typeof t===pe.function}function Wo(t){return typeof t===pe.object&&t!==null}function it(t){return Array.isArray(t)}function xl(t){const e=t.state;if(e&&e.newest&&e.newest)return e.newest;if(t.parentContext)return xl(t.parentContext)}function Jo(t){let e=t;for(;e.ownerSupport&&!mi(e.templater);)e=e.ownerSupport;const r=e.context.state;return r&&r.newest||e}function hb(...t){return t}function Cp(t){const e=Te.stateConfig;return e.states[e.statesIndex]=t,++e.statesIndex,t(hb)}function fb(t){const e=Te.stateConfig,n=e.statesIndex,l=Jo(e.prevSupport).context.state.older.states[n];let u=[];l(function(...g){return u=g,l.lastValues=u,g});const h=function(...g){return u};return e.states[e.statesIndex]=t,++e.statesIndex,t(h)}function Rp(t){Ke(t);const e=Te.stateConfig;e.handlers.handler=kp,e.handlers.statesHandler=Cp,e.rearray=[];const n=e.state=[],r=e.states=[];e.statesIndex=0;const s=t.state=t.state||{};s.newer={state:n,states:r}}class pb{}function gb(t){const[e]=t(pb),[n]=t(e);return[e,n]}function mb(t){const e=t.callback;if(!e)return t.defaultValue;const[n]=gb(e);return n}function yb(){const t=Te.stateConfig,n=t.rearray[t.state.length];return t.state.push(n),n.defaultValue}function kp(t){var o,c;const e=Te.stateConfig,n=xt();if(!n||!n.state){const l="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(l,{config:e,context:n,function:(c=(o=e.support)==null?void 0:o.templater.wrapper)==null?void 0:c.original}),new Error(l)}const r=n.state.newer;e.state=r.state;let s=t;if(typeof t===pe.function&&(s=t()),typeof s===pe.function){const l=s;s=function(...h){return l(...h)},s.original=l}const i={get:function(){return mb(i)},defaultValue:s};return e.state.push(i),s}function _b(t){const e=new le,n=r=>{const s=[],i=[],o=(f,g)=>{if(s[g]=!0,i[g]=f,s.length===t.length){for(const E of s)if(!E)return;r(i,u)}},c=[...t],u=c.shift().subscribe(f=>o(f,0)),h=c.map((f,g)=>f.subscribe(w=>o(w,g+1)));return u.subscriptions=h,u};return e.subscribeWith=n,e}function bb(t,e){const n=t.findIndex(r=>r.callback===e);n!==-1&&t.splice(n,1)}function wb(t,e,n){const r=le.globalSubCount$;le.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=e,s.subscriptions=[],s.unsubscribe=function(){return Tb(s,n,e)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{e(i,s)},s}function Sp(t,e,n){const r=[...e],s=r.shift(),i=h=>{if(r.length)return Sp(h,r,n);n(h)};let o=i;const u=s(t,{setHandler:h=>o=h,next:i});o(u)}function Tb(t,e,n){bb(e,n);const r=le.globalSubCount$;le.globalSubCount$.next(r.value-1),t.unsubscribe=()=>t;const s=t.subscriptions;for(const i of s)i.unsubscribe();return t}const $r=class $r{constructor(e,n){ht(this,"onSubscription");ht(this,"methods",[]);ht(this,"isSubject",!0);ht(this,"subscribers",[]);ht(this,"subscribeWith");ht(this,"value");ht(this,"set",this.next.bind(this));this.onSubscription=n,arguments.length>0&&(this.value=e)}subscribe(e){const n=wb(this,e,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=e;e=i=>{Sp(i,this.methods,o=>s(o,n))}}return r(e)}return this.subscribers.push(n),this.onSubscription&&this.onSubscription(n),n}next(e){this.value=e,this.emit()}emit(){const e=this.value,n=this.subscribers;for(const r of n)r.callback(e,r)}toPromise(){return new Promise(e=>{this.subscribe((n,r)=>{r.unsubscribe(),e(n)})})}toCallback(e){const n=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>{n.unsubscribe()},0),e(r)});return n}pipe(...e){const n=[];"value"in this&&n.push(this.value);const r=new $r(...n);return r.setMethods(e),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(e){this.methods=e}static all(e){const n=e.map(r=>db(r)?r:new $r(r,i=>(i.next(r),i)));return _b(n)}};ht($r,"globalSubCount$",new $r(0));let le=$r;const Ib=new le(void 0,function(e){mo()||e.next()}),Te={stateConfig:{state:[],version:Date.now(),handlers:{handler:kp,statesHandler:Cp}},tagClosed$:Ib};function Eb(t,e){++t.updateCount;const n=t.subContext,r=Pp(n,e);return delete t.subContext,r}function Pp(t,e){t.deleted=!0;const n=t.appendMarker;if(n&&(ti(n,"deleteSubContext"),delete t.appendMarker),!t.hasEmitted)return;const r=t.contextItem;return r.tagJsVar.destroy(r,e),76}function vb(t,e,n,r,s){const i=e.context;if(i.locked=3,n.target=n.target||r,Ke(n),n.inputsHandler){const o=e.propsConfig;n.inputsHandler(o)}n.tagJsVar.processInit(t,n,e,s,r),Me(),n.value=t,delete i.locked}function Ko(t){switch(t){case void 0:case!1:case null:return gi}return t}function Ab(t,e){const n=Ko(t);if(e.paint){e.paint[1][1]=n;return}const r=e.simpleValueElm;bt.push([rb,[n,r]])}function Cb(t,e){e.value=t,e.oldTagJsVar=e.tagJsVar,e.tagJsVar=Np(t);const n=e.placeholder,r=Ko(t),s=e.paint=[vp,[n,r,function(o){e.simpleValueElm=o,delete e.paint},"processNowRegularValue"]];gt.push(s)}function Qo(t,e){if(t.startsWith("class."))return"class";if(t.startsWith("style."))return"style";const n=Rb(t);return n!==!1?n:t==="value"&&e==="SELECT"?"value":!1}function Rb(t){switch(t){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function kb(t,e,n){typeof t[e]!="object"&&(t[e]={});for(const r in n){const s=n[r];bt.push([Vb,[t,e,r,s]])}if(t[e].setProperty)for(const r in n){const s=n[r];bt.push([xb,[t,e,r,s]])}}function Sb(t,e,n){t.setAttribute(e,"")}function Ht(t,e,n){if(Wo(n))return kb(t,e,n);xp(t,e,n)}function Pb(t,e,n){n?t[e]=!0:t[e]=!1}function xp(t,e,n){if(t[e]=n,n===void 0||n===!1||n===null){t.removeAttribute(e);return}t.setAttribute(e,n)}function xb(t,e,n,r){t[e].setProperty(n,r)}function Vb(t,e,n,r){t[e][n]=r}function Vp(t,e,n,r){switch(r){case"autofocus":mn.push([Ub,[n]]);return;case"autoselect":mn.push([Ob,[n]]);return;case"style":{const s=t.split(".");bt.push([Db,[n,s,e]]);return}case"class":Nb(t,e,n);return;case"value":Ht(n,t,e),mn.push([s=>{s.value=e},[n]]);return}throw new Error(`Invalid special attribute of ${r}. ${t}`)}function Db(t,e,n){const r=e[1];t.style[r]=n,t.style.setProperty(r,n)}function Nb(t,e,n){const r=t.split(".");if(r.shift(),e){for(const s of r)bt.push([Lb,[n,s]]);return}for(const s of r)bt.push([Mb,[n,s]])}function Lb(t,e){t.classList.add(e)}function Mb(t,e){t.classList.remove(e)}function Ob(t){t.select()}function Ub(t){t.focus()}function Fb(t,e,n,r,s){const i=t(),o={component:!1,tagJsType:"dynamic-attr",matchesInjection:u=>{const h=c.tagJsVar;if(h.matchesInjection)return h.matchesInjection(u,c)},hasValueChanged:(u,h,f)=>{const g=t();return c.tagJsVar.hasValueChanged(g,c,f)},processInit:Je,processInitAttribute:Je,destroy:(u,h)=>{c.tagJsVar.destroy(c,h)},processUpdate:(u,h,f,g)=>{++h.updateCount;const w=u();c.tagJsVar.processUpdate(w,c,f,g),c.value=w}},c={description:"sub-context",updateCount:0,isAttr:!0,target:r,parentContext:e,value:i,tagJsVar:Pn(i),withinOwnerElement:!0,destroy$:new le,render$:new le},l={description:"override-context",updateCount:0,isAttr:!0,contexts:[c],target:r,parentContext:e,value:t,tagJsVar:o,withinOwnerElement:!0,destroy$:new le,render$:new le};return c.tagJsVar.processInitAttribute(n,i,r,c.tagJsVar,c,{},s),l}function $b(t,e,n,r,s,i,o){return n.target=r,n.howToSet=s,n.attrName=t,n.isSpecial=o,e!=null&&e.tagJsType?Bb(t,e,n,i,r):Yo(t,e,r,s,o,n)}function Bb(t,e,n,r,s){e.processInitAttribute(t,e,s,e,n,r,Ht),n.tagJsVar=e}function Yo(t,e,n,r,s,i){if(typeof e=="function")return Fb(e,i,t,n,r);if(s)return Vp(t,e,n,s);r(n,t,e)}function Dp(t,e,n,r,s,i){const o=e.tagJsVar,c=t;if(o.hasValueChanged(c,e,n)>0){o.destroy(e,n),r.removeAttribute(s);const u=Pn(t);u.isAttr=!0,u.processInitAttribute(s,t,r,u,e,n,i),e.tagJsVar=u;return}}function jb(t,e,n,r,s,i,o){r.destroy=zb,r.hasValueChanged=Gb,r.processUpdate=(l,u,h)=>Dp(l,u,h,n,t,o);const c=Qo(t,n.tagName);Yo(t,e,n,o,c,s),s.tagJsVar=r}function zb(t){const e=t.target,n=t.attrName;e.removeAttribute(n)}function Np(t){return{component:!1,tagJsType:"simple",value:t,processInitAttribute:jb,processInit:qb,destroy:Lp,hasValueChanged:Wb,processUpdate:Hb}}function Hb(t,e,n){return t===e.value?0:qp(e,t,n)}function qb(t,e,n,r,s){const i=Ko(t);r=e.placeholder;const o=e.paint=[vp,[r,i,function(l){e.simpleValueElm=l,delete e.paint},"processSimpleValueInit"]];gt.push(o)}function Lp(t){const e=t.simpleValueElm;if(!e){if(t.paint){t.paint[0]=Je;return}if(t.value===void 0||t.value===!1||t.value===null)return}delete t.simpleValueElm,ti(e,"deleteSimpleValue")}function Gb(t,e){return t==null||t===e.value?0:6}function Wb(t,e){return t==null||![pe.object,pe.function].includes(typeof t)?(Ab(t,e),0):(Lp(e),6)}function Jb(t,e){return it(t)?0:9}function hr(t,e,n){const r=e.tagJsVar.processUpdate(t,e,n,[]);return e.value=t,r||0}function Mp(t,e){const n=t.context.providers;if(n)for(const r of n)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===e&&r.children.splice(s,1);t.context.destroy$.next(),t.context.renderCount=0}function zc(t,e){for(const n of t){const r=n.lastArray;if(r){zc(r,e);continue}const s=n.value;if((s==null?void 0:s.tagJsType)===fe.subscribe){s.destroy(n,e),n.deleted=!0;continue}const i=n.global;if(!i)continue;const o=n.state.newest,c=i.subscriptions;c&&c.forEach(Up),mi(o.templater)&&Mp(o,i);const l=n.contexts;zc(l,o),i.deleted=!0}}function Op(t,e=[],n=[]){for(const r of t){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){e.push(i);const c=s.subscriptions;c&&n.push(...c)}const o=r.contexts;o&&Op(o,e,n)}return{tags:e,subs:n}}function Up(t){t.unsubscribe()}function Fp(t){++t.updateCount;const e=t.lastArray;e&&$p(t,e)}function $p(t,e){for(let n=0;n<e.length;++n)Dl(e[n]);delete t.lastArray}function ni(t){for(let e=t.length-1;e>=0;--e){const n=t[e];Kb(n),t.splice(e,1)}}function Kb(t){const e=t.marker;e&&ti(e,"destroyMarker");const n=t.domElement;ti(n,"destroyClone")}function Vl(t,e){t.contexts&&Qb(t.contexts,e),t.htmlDomMeta&&ni(t.htmlDomMeta)}function Qb(t,e){var n;for(const r of t){if(r.withinOwnerElement){const l=r.tagJsVar;if(l&&l.tagJsType==="host"){const u=r.supportOwner,h=l.destroy(r,u);dr(h)&&e.push(h)}continue}const s=r.lastArray;if(s){$p(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,ti(i,"smartRemoveByContext");continue}const o=r.global;if(o===void 0)continue;if(o.deleted=!0,(n=r.state)==null?void 0:n.oldest){Vl(r,e);continue}}}function yi(t,e){const n=t.context;e.deleted=!0,n.renderCount=0;const r=[],s=n.contexts;return zc(s,t),t.templater.wrapper&&Mp(t,e),Vl(n,r),delete n.state,delete n.contexts,delete n.returnValue,delete n.providers,r}function Yb(t,e,n,r,s){const i=e==null?void 0:e.arrayValue;let c=t!==(i||s);return c===!1&&i===void 0&&n.tagJsVar.hasValueChanged(e,n,void 0)&&(c=!0),c?(Dl(n),r.splice(s,1),2):0}function Dl(t){const e=t.global;Xb(e,t)}function Xb(t,e){var n;if(t&&((n=e.state)!=null&&n.oldest)){const r=e.state.oldest;yi(r,t);return}e.tagJsVar.destroy(e,{})}const lh=Symbol("not-casted"),Zb=[];function yo(t,e,n,r){const s=t.lastArray===void 0;s&&(t.lastArray=[]);const i=t.lastArray;let o=t.placeholder;const c=e.length,l=new Array(c).fill(lh),u=function(w){const E=l[w];if(E!==lh)return E;const v=iw(e[w]);return l[w]=v,v};let h=s?!1:c!==i.length;s||(h=ew(i,e,t,h,u).batchUpdates);const f=t.lastArray;for(let g=0;g<c;++g)o=tw(g,f,n,h,u,o,r).placeholder}function ew(t,e,n,r,s){const i=[];let o=0;const c=e.length-1;for(let l=0;l<t.length;++l){const u=t[l];if(u.locked===1&&(r=!0),u.value===null){i.push(u);continue}const h=rw(l,t,o,c,s);if(h===0){i.push(u);continue}if(h===2){l=l-1;continue}o=o+h}return n.lastArray=i,{batchUpdates:r}}function tw(t,e,n,r,s,i,o){const c=s(t),l=e[t];if(l)return nw(c,l,n,r);const u=fg(c,n,e,i,o);return e.push(u),c&&(u.arrayValue=c.arrayValue||u.arrayValue),u}function nw(t,e,n,r,s,i){return r?(nb(e,[sw,[t,e,n]]),e.value=t,e):Array.isArray(t)?(e.tagJsVar.processUpdate(t,e,n,Zb),e.value=t,e):(hr(t,e,n),e)}function rw(t,e,n,r,s){const i=t-n,o=i<0||r<i,c=e[t];if(o)return Dl(c),1;c.arrayValue===void 0&&(c.arrayValue=t);const l=c.arrayValue,u=s(t);return Yb(l,u,c,e,t)}function sw(t,e,n){hr(t,e,n)}function iw(t){if(typeof t!="function")return t;const e=t;return e.tagJsType!==void 0?t:e()}function ow(t,e){const r=t.templater.tag.values;for(const s of e)aw(r,s,t);return e}function aw(t,e,n){if(e.deleted)return;const r=e.tagJsVar;Ke(e),r.processUpdate("",e,n,t),Me()}function Bp(t,e){if(!t)return;const r=t.context.contexts;cw(t,e),++we.locks,ow(t,r),--we.locks,ot()}function cw(t,e){const n=e.templater,r=e.templater.tag,s=n.values||r.values,i=t.templater.tag;i.values=s}function lw(t,e){return Hc(t,e)}function Hc(t,e){if(t===null||typeof t!==pe.object||e<0)return t;if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const n=it(t)?[]:Object.create(Object.getPrototypeOf(t));if(it(t))for(let r=0;r<t.length;r++)n[r]=Hc(t[r],e-1);else for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Hc(t[r],e-1));return n}function uw(t,e,n){return Nl(t,e,n)}function Nl(t,e,n){return t===e||fw(t,e)||n<0?!0:typeof t===pe.object&&typeof e===pe.object?t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():it(t)&&it(e)?hw(t,e,n-1):it(t)||it(e)?!1:dw(t,e,n-1):!1}function dw(t,e,n){const r=Object.keys(t),s=Object.keys(e);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!Nl(t[i],e[i],n-1))return!1;return!0}function hw(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!Nl(t[r],e[r],n-1))return!1;return!0}function fw(t,e){return ir(t)&&ir(e)&&t.toString()===e.toString()}function uh(t){return t.map(Ll)}function Ll(t,e){const n=t,r=t==null?void 0:t.tagJsType;if(r)switch(r){case fe.signal:case fe.subscribe:case fe.stateRender:return;case fe.dom:case fe.tag:case fe.templater:return uh(n.values)}return it(t)?uh(n):lw(t,e)}function pw(t,e){const n=t.length;for(let r=0;r<n;++r){const s=t[r],i=e[r];if(it(s)&&it(i)){if(s===i)continue;return 3}if(!(typeof s===pe.function&&typeof i===pe.function)){if(typeof s===pe.object){if(!s&&!i)continue;if(typeof e===pe.object){const o=Object.entries(s);for(const c of o)if(!gw(c,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function gw([t,e],n){const r=n[t];return typeof e===pe.function&&typeof r===pe.function?!0:r===e}function Ml(t,e,n){return t}function mw(t){return typeof t!==pe.object||!t||t.tagJsType}function yw(t,e,n,r,s,i){var c;const o=Object.keys(t);for(const l of o){const u=t[l],h=e[l],f=Ol(h,u,n,r,i,s+1);u===f||(c=Object.getOwnPropertyDescriptor(t,l))!=null&&c.set||(t[l]=f)}return t}function _w(t,e,n,r,s,i){for(let o=t.length-1;o>=0;--o){const c=t[o],l=e[o];t[o]=Ol(l,c,n,r,i,s+1)}return t}function Ol(t,e,n,r,s,i){return t==null||i>s?e:typeof t===pe.function?e.mem?(t.mem=e.mem,e):(t.mem=e,t):mw(e)?e:it(e)?_w(e,t,n,r,i,s):yw(e,t,n,r,i,s)}function bw(t,e,n,r,s,i=-1){const o=e.context;if(!o.global||!o.state.newest){const w=Ml(r);r.push(...w);const E=t.propsConfig;return E.castProps=w,r}e=o.state.newest||e;const h=e.propsConfig.castProps,f=[];for(let w=0;w<r.length;++w){const E=r[w],v=h[w],N=Ol(v,E,t,n,s,i+1);f.push(N)}const g=t.propsConfig;return g.castProps=f,f}function ww(t,e){const n=t.context,r=n.global;let s=-1;const i=n.providers=n.providers||[],o=i.length-1;for(;s++<o;){const c=i[s];let l=-1;const u=c.children.length-1;for(;l++<u;){const h=c.children[l];if(r===h.context.global){c.children.splice(l,1),c.children.push(e);return}}}}function qc(t){const e=t.context,n=e.global,r=e.contexts;if(r){const{subs:s,tags:i}=Op(r);for(const c of i){if(c.context.global.deleted===!0)return;dh(c.context)}n.subscriptions&&s.forEach(Up)}dh(e),pi(e)}function dh(t){t.global.deleted=!0,Vl(t,[]),delete t.contexts}function jp(t,e,n,r){const s=e.original,i=t.tagJsType===fe.stateRender,o=Te.stateConfig;qo(n);let c;if(i?c=t():(c=s(...r),typeof c===pe.function&&c.tagJsType===void 0&&(c=[c])),!c)throw new Error(`A tag cannot return a value of type ${c===null?"null":typeof c}`);const l=n.context;return l.returnValue=c,n.returnValue=c,t.tag=c,l.state.newer={...o},Me(),n}function Tw(t,e){const n=t.context;++n.renderCount,Iw(t.context),Te.tagClosed$.next(e)}function Iw(t){Ew(t),vw()}function Ew(t){const e=Te.stateConfig,n=t||e.context;n.state=n.state||{},n.state.newer={...e};const r=e.support;n.state.newest=r}function vw(){const t=Te.stateConfig;delete t.prevSupport,delete t.support,delete t.state,delete t.states,Me()}function zp(t,e,n,r){let s;const i=t.templater;if(i.tagJsType===fe.stateRender){const o=i;s=ea(i,n,r,t.appSupport),jp(i,o,s)}else{const o=i.wrapper;s=o(t,n,e)}return Tw(s,r),s.ownerSupport=t.ownerSupport,s}function Aw(t){const e=Te.stateConfig;return e.rearray=t,e.state=[],e.states=[],e.statesIndex=0,e.handlers.handler=yb,e.handlers.statesHandler=fb,e}function Cw(t,e,n){Aw(n);const r=Te.stateConfig;r.prevSupport=e,qo(t)}function Rw(t,e,n,r){const i=n.state.older.state;return Cw(t,e,i),zp(t,e,n,r)}function Hp(t,e,n,r){Rp(t.context),qo(t);const s=zp(t,e,n,r);return Me(),s}function kw(t){var r;const e=t==null?void 0:t.context,n=e==null?void 0:e.state;return(r=n==null?void 0:n.older)==null?void 0:r.state}function Ul(t,e){var r;const n=hh(t,e);if(!n&&((r=e.templater.tag)!=null&&r._innerHTML)){const s=t.outerHTML;if(hh(s,e))return!0}return n}function hh(t,e){const n=t.templater,r=e.templater,s=(n==null?void 0:n.tag)||t,i=r.tag;if((n==null?void 0:n.tagJsType)===fe.stateRender)return n.dom===r.dom;if(!i&&!s.returnValue)return!0;if(!s.returnValue)return!1;throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function Sw(t,e,n){let r;kw(e)?r=Rw(t,e,n):r=Hp(t,e,n);const i=!e||Ul(e,r);if(i){if(e){const o=e.templater.tag;if(o&&n.renderCount>0){const c=e==null?void 0:e.templater,l=c==null?void 0:c.tag;Pw(o,e,l)}}}else{ww(e,r),qc(e);const o=r.context;o.state.oldest=r,o.state.newest=r}return r.ownerSupport=t.ownerSupport,{support:r,wasLikeTags:i}}function Pw(t,e,n){if(t.tagJsType===fe.dom){const r=n==null?void 0:n.dom,s=t.dom;r!==s&&qc(e);return}if(n){const r=n.strings;if(r){const s=r==null?void 0:r.length,i=t.strings.length;s!==i&&qc(e)}}}function xw(t,e,n){const r=Sw(e,t,n);if(r.wasLikeTags){const s=n.state.oldest;return Bp(s,r.support),r.support}}function Vw(t){const e=t.context;return xw(t,t,e)}function K(t){if(!t)return Je;const e=xt();if(!e)throw new Error("output must be used in render sync with a parent context");const n=xl(e);if(!n)throw new Error("output must be used in render sync fashion");if(t.wrapped===!0)return t;const r=(...s)=>{const i=n.ownerSupport;return Dw(s,t,i.context)};return r.wrapped=!0,r}function Dw(t,e,n){Ke(n);const r=e(...t);return Nw(r,n)}function Nw(t,e){Me();const r=()=>{const s=e.global;if(s===void 0||s.deleted===!0){++we.locks;const o=e;o.tagJsVar.processUpdate(o.value,o,void 0,[]),--we.locks,ot();return}++we.locks,Vw(void 0),--we.locks,ot()};return dr(t)&&t.then(()=>{mn.push([r,[]])}),mn.push([r,[]]),t}function Lw(t,e,n,r){const s=e.tagJsType;if(!e||!s||s!==t)return r.tagJsVar.destroy(r,n),ns(e,r,n,99),99}function Mw(t,e,n){const r=e.subContext,s=Lw(fe.subscribe,t,n,e);return s||(!r||!r.hasEmitted||(r.tagJsVar=t,r.valuesHandler(r.lastValues,0)),0)}function qp(t,e,n){const s=t.tagJsVar.hasValueChanged(e,t,n);return s===0?0:(ns(e,t,n,s),s)}function Gp(t,e,n){var o;++e.updateCount;const s=t.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(o=e.subContext)==null?void 0:o.contextItem;qp(i,s,n)}function Ow(t,e,n,r,s){e.subContext={},t.processUpdate=Gp,Uw(t,n,e,r,s)}function Uw(t,e,n,r,s){const{appendMarker:i,insertBefore:o}=gg(s,r),c=n.subContext;c.appendMarker=i;const u=t.owner._innerHTML;u.processInit=u.oldProcessInit,pg(u,c,e,o)}function Wp(){return{component:!1,tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:Je,processInit:Ow,processUpdate:Gp,destroy:Eb}}function Xo(t){++t.updateCount;const e=t.global,r=t.state.newest;delete t.inputsHandler,delete t.updatesHandler,yi(r,e),Fw(t)}function Fw(t){t.htmlDomMeta=[],delete t.contexts,delete t.state,delete t.global,t.renderCount=0}function $w(t,e){var o;const n=(o=e.state)==null?void 0:o.newest,r=Ap(t),s=t;if(r)return Ul(s,n)?0:7;if(t==null?void 0:t.tagJsType){const c=e.value;if(!c&&t)return 88;const l=c.wrapper,u=t.wrapper;return(u==null?void 0:u.original)===(l==null?void 0:l.original)?0:88}return 8}function Zo(t,e){var c;const n=e.global,r=(c=e.state)==null?void 0:c.newest,s=Ap(t),i=t;if(s)return Ul(i,r)?(Gc(e,t,r),0):(yi(r,n),pi(e),7);if(t==null?void 0:t.tagJsType){const h=e.state.newest.ownerSupport;return Gc(e,t,h)===!0?0:88}return Xo(e),8}function Jp(t){return Fl(t)}function Bw(t){return t.render()}function jw(t){const e=zw(t.attributes),n=Kp(t.innerHTML);return`<${t.tagName}${e}>${n}</${t.tagName}>`}function zw(t){if(!t||t.length===0)return"";const e=[];return t.forEach(n=>{const r=n[0];if(typeof r!="string"||r.length===0)return;const s=Yp(n[1]);if(s===!0){e.push(r);return}s===!1||s===void 0||s===null||e.push(`${r}="${Qp(String(s))}"`)}),e.length>0?` ${e.join(" ")}`:""}function Kp(t){return!t||t.length===0?"":t.map(Fl).join("")}function Fl(t){const e=Yp(t);return Hw(e)?Bw(e):qw(e)?Gw(e):Array.isArray(e)?Kp(e):e==null||e===!1?"":Qp(String(e))}function Hw(t){return!!t&&typeof t=="object"&&typeof t.tagName=="string"}function qw(t){return!!t&&typeof t=="object"&&t.tagJsType===fe.tagComponent}function Gw(t){var r;const e=(r=t.wrapper)==null?void 0:r.original;if(typeof e!="function")return"";let n=e(...t.props);return typeof n===pe.function&&n.tagJsType===void 0&&(n=n()),Fl(n)}function Qp(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Yp(t){return typeof t=="function"?t():t}function Ww(t,e){const n={component:!1,tagJsType:fe.templater,processInit:"",processInitAttribute:Je,processUpdate:hr,hasValueChanged:Zo,destroy:Xo,propWatch:t,props:e,get outerHTML(){return Jp(this)},key:function(s){return n.arrayValue=s,n},matchesInjection(r,s){var i;if(n.wrapper===r||((i=n.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return n}const ri=[];function Jw(t,e){return function(s,i,o){const c=Xp(t,s,o),l=s.ownerSupport,u=ea(t,i,l,s.appSupport,c);return jp(t,e,u,c)}}function Xp(t,e,n){const r=t.propWatch===wt.DEEP?$l:lg,s=t.props,i=e.propsConfig;let o=i.castProps;const c=n==null?void 0:n.propsConfig,l=c==null?void 0:c.castProps;return l&&(i.castProps=l,o=bw(e,n,n.ownerSupport,s,r)),o||Ml(s)}function Kw(t,e,n,r,s){const i=LT(t,e,n,r,s);return i.hasEmitted||Zp(t,i),i}function Zp(t,e){const r=t.Observables[0];if(!e.hasEmitted){if("withDefault"in t){e.subValueHandler(t.withDefault,0);return}if("value"in r){e.subValueHandler(r.value,0);return}return}const s=e.lastValues[0].value;e.subValueHandler(s,0)}function Qw(t,e,n,r,s,i){e.destroy=yg;const o=Qo(t,n.tagName),c=function(h,f){Yo(t,h,n,Ht,o,s),Wc(f)},l=mg(e.Observables,i,c,e,s);return s.subContext=l,s.value=e,s.tagJsVar=e,e.processUpdate=function(h,f,g){return Dp(h,s,g,n,t,Ht)},{subContext:l,onOutput:c}}function Yw(t,e,n,r,s,i){const{subContext:o}=Qw(t,e,n,e,s,i);o.hasEmitted||Xw(e,o)}function Xw(t,e){var o;const r=e.tagJsVar.onOutput;let i=((o=t.Observables[0])==null?void 0:o.value)||t.withDefault;t.callback&&(i=t.callback(i)),r(i,!0,e)}function Zw(t,e,n){return{component:!1,onOutput:Je,tagJsType:fe.subscribe,processInitAttribute:Yw,processInit:Kw,hasValueChanged:eT,processUpdate:Je,destroy:MT,callback:n,withDefault:e,Observables:[t]}}function eT(t,e){if(!(t!=null&&t.tagJsType))return 1;const n=t.Observables;if(!n)return 2;const s=e.value.Observables;return!s||s.length!==n.length?3:n.every((o,c)=>o===s[c])?0:4}function tT(t,e,n,r){const s={component:!1,tagJsType:"tag-conversion",processInitAttribute:Je,processInit:(i,o,c)=>{const l=t.returnValue;return e.tagJsVar.processInit(l,e,n,r.placeholder)},processUpdate:(i,o,c)=>{if(o.locked||o.deleted)return;++o.updateCount;const l=o.value,u=l==null?void 0:l.tagJsType,f=(i==null?void 0:i.tagJsType)!==u;if($w(i,o)||f||s.hasValueChanged(i,o,n)){s.destroy(o,n),ns(i,o,c,789);return}o.locked=467,o.render$.next();const E=o.returnValue;nT(e,i,o,E,n),delete o.locked},hasValueChanged:(i,o,c)=>{const l=t.returnValue;return e.tagJsVar.hasValueChanged(l,e,c)},destroy:(i,o)=>{++t.updateCount,t.deleted=!0,delete t.returnValue;const c=e.tagJsVar.destroy(e,n);return dr(c)?c.then(()=>{const l=fh(t);return ot(),l}):(t.destroy$.next(),fh(t))}};return s}function eg(t,e,n){const r=t.context,s=t.returnValue,i=Pn(s);delete r.global,r.contexts=[];const o={updateCount:0,value:s,tagJsVar:i,destroy$:new le,render$:new le,placeholder:r.placeholder,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},c=tT(r,o,t,n);return r.subContext=o,r.tagJsVar=c,i.processInit(s,o,t,n.placeholder),t}function tg(t,e,n){const r=ea(t,e,n,n==null?void 0:n.appSupport),s=r.propsConfig;if(s){const o=t.tagJsType!==fe.tagComponent?[]:Xp(t,r);s.castProps=o}return Hp(r,e.state.newest,e)}function ng(t,e,n){const r=tg(t,e,n);return r.templater.tag?eg(r,r.ownerSupport,e):r}function nT(t,e,n,r,s){const i=Ml(e.props),o=t.value;o.props=i;const c=s.propsConfig;if(c&&(c.castProps=i),(e==null?void 0:e.tagJsType)==="tagComponent"){if(t.inputsHandler=n.inputsHandler,t.updatesHandler=n.updatesHandler,n.value=e,n.inputsHandler){Ke(n);const l=n.inputsHandler;l(i),Me()}if(n.updatesHandler){Ke(n);const l=n.updatesHandler;l(i),Me()}}t.tagJsVar.processUpdate(r,t,s,[]),t.value=r}function fh(t,e){delete t.returnValue,delete t.global,t.contexts=[],t.htmlDomMeta=[],delete t.inputsHandler,delete t.updatesHandler}function rT(t,e,n,r){const s=tg(t,e,n);return eg(s,n,e)}function rg(t,e,n,r,s){return pi(e),s?rT(t,e,n):ng(t,e,n)}function sT(t){var s,i;const e=xt();if(!e)throw new Error("tag.inject can only be called within a tag or host context");let n=e.parentContext;for(;n;){const o=n.contexts;if(o){for(const c of o)if(c.isAttr&&((s=c.tagJsVar)!=null&&s.matchesInjection)){const l=c.tagJsVar.matchesInjection(t,c);if(l!==void 0)return l.returnValue}}if((i=n.tagJsVar)!=null&&i.matchesInjection&&n.tagJsVar.matchesInjection(t,n))return n.returnValue;n=n.parentContext}const r=`Could not find parent context for tag.inject ${t}`;throw console.error(r,{targetItem:t,context:e}),new Error(r)}function iT(t,e){return oT(t,e)}function oT(t,e,n=[]){const r=t.context;n.push({support:t,renderCount:r.renderCount,provider:e});const s=e.children;for(let i=s.length-1;i>=0;--i){const o=s[i],c=o.context;n.push({support:o,renderCount:c.renderCount,provider:e})}return n}function aT(t){const n=t.context.providers;if(!n)return[];const r=[];for(const s of n){const i=s.owner,o=iT(i,s);r.push(...o.map(cT))}return r}function cT(t){return t.support}function lT(t){return fe.templater===t.tagJsType}function uT(t,e){const n=e.context.global;return n&&n.deleted?!1:!!dT(t,e)}function dT(t,e){const n=t.props,s=e.propsConfig.latest;if(hT(n,s))return!0;switch(t.propWatch){case wt.IMMUTABLE:return AT(n,s);case wt.SHALLOW:return pw(n,s)}return!uw(n,s,$l)}function hT(t,e){const n=t.length,r=e.length;return n!==r}function _o(t,e=[]){const n=t.context,r=t.templater,s=lT(r),i=t.ownerSupport;if(n.locked)return e.push(t),e;if(s)return _o(i,e);const o=t.context.global;if(o&&o.deleted===!0)return e;const c=t,l=mi(c.templater),u=t.templater.tagJsType,f=i&&u!==fe.stateRender&&(!l||uT(c.templater,c));if(c.context.providers){const w=aT(c);e.push(...w)}return f?(_o(i,e),l&&e.push(c),e):(e.push(c),e)}const fT=[];function sg(t){++we.locks;for(let e=0;e<t.length;++e)ig(t[e]);--we.locks,ot()}function pT(t){++we.locks,ig(t),--we.locks,ot()}function ig(t){const e=t.context;e.tagJsVar.processUpdate(e.value,e,t.ownerSupport,fT)}function og(t,e,{resolvePromise:n,resolveValue:r}){return dr(t)?t.then(gT(e,n)):r(t)}function gT(t,e){return n=>{const r=t.context,s=r.global;if(r.deleted===!0||(s==null?void 0:s.deleted)===!0)return e(n);const i=_o(t);return sg(i),e(n)}}function Ue(t){return Te.stateConfig.handlers.handler(t)}function mT(t){return Ue(()=>{var r;const e=t(),n=mo();return(r=n==null?void 0:n.context)!=null&&r.global?og(e,n,{resolvePromise:yT,resolveValue:_T}):e}),O}function yT(t){return t}function _T(t){return t}function Kt(t){return Ue(function(){xt().destroy$.toCallback(t)}),O}function bT(t,e,n,...r){const s=n(...r),i=xl(t);if(!i)return s;if(!i.context.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}return dr(s)&&s.finally(()=>{if(!t.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}}),s}function ge(t){const e=xt(),n=Ue({callback:t}),r=Ue(()=>ag(e,Te.stateConfig,n));return n.callback=t,r}function ag(t,e,n){const r=e.states;return function(...i){const o=bT(t,r,n.callback,...i);return ot(),o}}function wT(t){const e=xt(),n=i=>{Ke(e);const o=t();return Me(),o},r=e.render$.subscribe(()=>{n()}),s=n();return O.onDestroy(()=>r.unsubscribe()),s}let TT=0;const Js=cg("click"),Br=cg("mousedown");function cg(t){return function(n){const r=ge(n);return Ue(()=>{bg().addEventListener(t,r)}),r}}const IT={get:bg,onclick:Js,click:Js,onClick:Js,mousedown:Br,onmousedown:Br,onMouseDown:Br};_i("onclick",Js);_i("click",Js);_i("onMouseDown",Br);_i("onmousedown",Br);_i("mousedown",Br);function _i(t,e){Object.defineProperty(O,t,{get(){return e},set(n){return e(n)}})}var wt;(function(t){t.DEEP="deep",t.SHALLOW="shallow",t.NONE="none",t.IMMUTABLE="immutable"})(wt||(wt={}));function O(t,e=wt.SHALLOW){const n=function(...o){const c=Ww(e,o);c.tagJsType=fe.tagComponent,c.processInit=rg,c.hasValueChanged=Zo;const l=Jw(c,n);return l.original=t,c.wrapper=l,c},r=t;n.original=t,r.tags=ri,r.setUse=Te,r.ValueTypes=fe,r.tagIndex=TT++,ri.push(n);const s=n;return s.inputs=function(o){const c=xt();c.inputsHandler=o;const l=c.tagJsVar;return o(l.props),!0},s.updates=function(o){const c=xt();return c.updatesHandler=o,!0},s.getInnerHTML=Wp,s}function ET(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function vT(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}O.element=IT;O.use=vT;O.deepPropWatch=O;O.route=ET;O.inject=sT;O.output=K;O.onInit=mT;O.onDestroy=Kt;O.callback=ge;O.onRender=wT;O.getInnerHTML=Wp;O.app=function(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};O.immutableProps=function(e){return O(e,wt.IMMUTABLE)};O.watchProps=function(e){return O(e,wt.SHALLOW)};Object.defineProperty(O,"use",{set(t){t.original={setUse:Te,tags:ri},t.tagJsType=fe.stateRender,t.processInit=rg,t.processUpdate=hr,t.hasValueChanged=Zo,t.destroy=Xo}});Object.defineProperty(O,"promise",{set(t){$T(t)}});function AT(t,e){const n=t.length;for(let r=0;r<n;++r){const s=t[r],i=e[r];if(s!==i)return 2}return!1}const lg=3,$l=10;function CT(t,e,n){const r=t.templater;if(r.tagJsType!==fe.stateRender){switch(r.propWatch){case wt.IMMUTABLE:return t.propsConfig={latest:e,castProps:n};case wt.SHALLOW:return t.propsConfig={latest:e.map(RT),castProps:n}}return t.propsConfig={latest:e.map(kT),castProps:n}}}function RT(t){return Ll(t,lg)}function kT(t){return Ll(t,$l)}function ug(t,e,n){const r={templater:t,context:e,castedProps:n,appSupport:void 0},s=e.global;return s.blocked=[],e.state||(e.state={newer:{state:[],states:[]}}),r}function dg(t,e,n,r){e.appSupport=n||e;const s=t.props;return s&&(e.propsConfig=CT(e,s,r)),e}function ea(t,e,n,r,s){const i=ug(t,e,s);return i.ownerSupport=n||i,i.ownerSupport.appSupport=r||i.ownerSupport,dg(t,i,r,s)}function ST(t,e,n,r){let s=n.templater||n;const i=t.templater.tag;i&&i._innerHTML&&(s=n._innerHTML);const o=ea(s,e,r,r.appSupport),l=t.context.state.oldest;Bp(l,o)}function Gc(t,e,n){if(mi(e))return t.global===void 0&&pi(t),t.oldTagJsVar=t.tagJsVar,t.tagJsVar=e,PT(e,t,n),!0;if(t.global){t.oldTagJsVar=t.tagJsVar,t.tagJsVar=e;const i=t.state.newest;if(i)return typeof e===pe.function||ST(i,t,e,n),!0}if(t.inputsHandler){const i=n.propsConfig;t.inputsHandler(i)}return e.processInit(e,t,n,t.placeholder),t.oldTagJsVar=t.tagJsVar,t.tagJsVar=e,!0}function PT(t,e,n){if(!e.state.newest){if(e.inputsHandler){const r=n.propsConfig;e.inputsHandler(r)}t.processInit(t,e,n,e.placeholder);return}}function ns(t,e,n,r){const s=t&&t.tagJsType;if(delete e.deleted,s){Gc(e,t,n);return}if(it(t)){yo(e,t,n),e.oldTagJsVar=e.tagJsVar,e.tagJsVar=hg(t);return}if(typeof t===pe.function){e.value=t;return}r&&Cb(t,e)}function hg(t){return{component:!1,tagJsType:"array",value:t,processInitAttribute:Je,processInit:VT,processUpdate:xT,hasValueChanged:Jb,destroy:Fp}}function xT(t,e,n){++e.updateCount;const s=e.tagJsVar.hasValueChanged(t,e,n);return s?(Fp(e),ns(t,e,n,s),s):Array.isArray(t)||hr(t,e,n)===0?(yo(e,t,n),0):1}function VT(t,e,n,r,s){yo(e,t,n,s)}function Pn(t){return(t==null?void 0:t.tagJsType)?t:DT(t)}function DT(t){return it(t)?hg(t):Np(t)}function ta(t,e,n,r,s){return{description:"getNewContext",updateCount:0,value:t,destroy$:new le,render$:new le,tagJsVar:s||Pn(t),withinOwnerElement:n,parentContext:r}}function fg(t,e,n,r,s){const i=document.createTextNode(gi),o=ta(t,n,!0,e.context);return o.withinOwnerElement=!1,o.placeholder=i,s||(o.placeholder=r),vb(t,e,o,s,r),s&&Go.push([Pl,[s,i]]),o}function pg(t,e,n,r){return e.hasEmitted=!0,e.contextItem=fg(t,n,[],r)}function gg(t,e){let n;return t&&(n=e=document.createTextNode(gi),Go.push([Pl,[t,e]])),{appendMarker:n,insertBefore:e}}function NT(t,e,n){const r=Mw(t,e,n);if(e.hasEmitted!==!0){const s=e.value.Observables;if(!s||!("value"in s[0]))return}if(r===0&&t.callback){const s=e.subContext;Zp(t,s)}}function LT(t,e,n,r,s){const i=t.Observables,{appendMarker:o,insertBefore:c}=gg(s,r);let l=function(f,g,w){pg(f,w,n,c),Wc(g),l=w.tagJsVar.onOutput=function(v,N,D){const x=D.contextItem,F=x.tagJsVar.hasValueChanged(v,x,n);F&&(x.tagJsVar.destroy(x,n),ns(v,x,n,F)),x.tagJsVar.processUpdate(v,x,n,[v]),x.value=v,Wc(N)}};const u=mg(i,n,(h,f,g)=>l(h,f,g),t,e);return u.appendMarker=o,e.subContext=u,t.processUpdate=NT,t.onOutput=l,u}function mg(t,e,n,r,s){function i(u,h){var f;l.lastValues[h]={value:u,tagJsVar:Pn(u),oldTagJsVar:(f=l.lastValues[h])==null?void 0:f.tagJsVar},o(l.lastValues,h)}function o(u,h){const f=l.tagJsVar;if(f==null?void 0:f.callback){Ke(s);const E=f.callback(...u.map(v=>v.value));n(E,c,l),Me();return}const w=u[h].value;n(w,c,l)}let c=!0;const l={lastValues:[],subValueHandler:i,valuesHandler:o,tagJsVar:r,subscriptions:[]};return t.forEach((u,h)=>{c=!0,l.subscriptions.push(u.subscribe(f=>i(f,h))),c=!1}),r.onOutput=n,l}function yg(t){const e=t.subContext;if(!e)return;e.subscriptions.forEach(r=>r.unsubscribe()),delete t.subContext}function MT(t,e){++t.updateCount;const n=t.subContext;return yg(t),Pp(n,e)}function Wc(t){return t||Te.stateConfig.support?!1:(ot(),!0)}class Et extends le{constructor(n){super(n);ht(this,"value");this.value=n}subscribe(n){const r=super.subscribe(n);return n(this.value,r),r}}const _g=((t,e)=>Bl(t,e).pastResult),OT=t=>t;function UT(t){const e=(n,r)=>Bl(n,r,t).pastResult;return e.setup=t,jl(()=>e,e),e}const Bl=(t,e,{init:n,before:r,final:s=OT}={})=>{const i=Ue({pastResult:void 0,values:void 0}),c=typeof t=="function"?t():t,l=i.values===void 0;let u=0;l&&typeof t=="function"&&O.onRender(()=>{if(++u,u===1)return;const f=t();h(f)});function h(f){if(i.values===void 0){if(r&&!r(f))return i.values=f,i;const v=(n||e)(f,i.values);return i.pastResult=s(v),i.values=f,i}if(f.every((E,v)=>E===i.values[v]))return i;if(r&&!r(f))return i.values=f,i;const w=e(f,i.values);return i.pastResult=s(w),i.values.length=0,i.values.push(...f),i}return h(c)};function jl(t,e){return Object.defineProperty(e,"noInit",{get(){const n=t();return n.setup.init=()=>{},n}}),Object.defineProperty(e,"asSubject",{get(){const n=t(),r=Ue(()=>mo()),s=Ue(()=>new Et(void 0));Ue(()=>({state:Te.stateConfig.state,states:Te.stateConfig.states}));const i=(o,c)=>(Bl(o,(u,h)=>{const f=mo(),g=c(u,h);f!==r&&r.context.state.older,s.next(g)},n.setup),s);return i.setup=n.setup,jl(()=>i,i),i}}),Object.defineProperty(e,"truthy",{get(){const n=t();return n.setup.before=r=>r.every(s=>s),n}}),e}jl(()=>UT({}),_g);class zl extends Error{constructor(n,r,s={}){super(n);ht(this,"details");this.name=zl.name,this.details={...s,errorCode:r}}}class Hl extends zl{constructor(e,n){super(e,"sync-callback-error",n),this.name=Hl.name}}new Hl("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const FT=()=>{};function $T(t){const e=xt(),n=Ue({callback:FT}),r=Ue({current:void 0}),s=Ue(()=>ag(e,Te.stateConfig,n));if(r.current!==t){r.current=t;const i=t;t.then(()=>{r.current===i&&s()})}}function xt(){return Te.stateConfig.context}function bg(){return xt().target}const ro=[];function Ke(t){return ro.push(t),Te.stateConfig.context=t}function Me(){ro.pop(),Te.stateConfig.context=ro[ro.length-1]}function BT(t,e,n,r,s,i,o){const c=document.createTextNode(gi);if(ri.push(n.wrapper||{original:n}),i.placeholder=c,e.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const f=i.events;for(const w in f){const E=f[w];s.removeEventListener(w,E)}i.events={},++we.locks;const g=yi(h,e);return--we.locks,ot(),g},++we.locks;const l=document.createDocumentFragment();l.appendChild(c);const h=ng(n,i,{appSupport:{appElement:s,context:i},appElement:s,context:i,isRoot:!0});return h.appElement=s,o&&(r.tag=h.templater.tag),--we.locks,ot(),s.appendChild(l),{support:h,tags:ri,ValueTypes:fe}}function jT(t,e,n){const r=ug(t,e);return dg(t,r,r),r.appElement=n,r.context=e,e.state.oldest||(e.state.oldest=r,e.state.older=e.state.newer),e.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const nc=[],ph="__taggedjs_tag_element__";function zT(t,e,n){const r=e[ph],s=nc.findIndex(w=>w.element===e);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:e}),s>=0){const w=nc[s].support;yi(w,w.context.global),nc.splice(s,1)}e[ph]=!0,e.innerHTML="";let i=(()=>h(...n));i.propWatch=wt.NONE,i.tagJsType=fe.stateRender,i.processUpdate=hr,i.props=[n],i.isApp=!0;const o=HT(i,e),c=o.global,l=o.state.newest;Rp(l.context),qo(l);let h=t(...n||[]);const f=typeof h==pe.function;f||(mi(h)?(o.state.newest.propsConfig={latest:[n],castProps:[n]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=t));const g=BT(t,c,i,h,e,o,f);return Me(),g}function HT(t,e){const n={component:!1,tagJsType:"templater",hasValueChanged:Zo,destroy:Xo,processInitAttribute:Je,processInit:function(){console.debug("do nothing app function")},processUpdate:hr},r={updateCount:0,value:t,varCounter:0,destroy$:new le,render$:new le,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:n};return pi(r),r.events={},jT(t,r,e),r}const wg=":tagvar",qT=":";function GT(t){return Array.isArray(t)&&Object.prototype.hasOwnProperty.call(t,"raw")}function WT(t,e){return function(r,s,i){if(GT(s)){const o=[];for(let l=0;l<s.length;++l)o.push(s[l]),l<i.length&&o.push(String(i[l]??""));const c=o.join("");return e(r,[t,c])}return e(r,[t,s])}}const JT=[["alt","alt"],["ariaLabel","aria-label"],["ariaHidden","aria-hidden"],["referrerPolicy","referrerpolicy"],["autoFocus","autoFocus"],["border","border"],["id","id"],["for","for"],["fill","fill"],["content","content"],["charset","charset"],["cellPadding","cellpadding"],["cellSpacing","cellspacing"],["class","class"],["href","href"],["lang","lang"],["label","label"],["loading","loading"],["value","value"],["placeholder","placeholder"],["src","src"],["title","title"],["width","width"],["height","height"],["type","type"],["min","min"],["max","max"],["step","step"],["name","name"],["wrap","wrap"],["checked","checked"],["disabled","disabled"],["selected","selected"],["minLength","minLength"],["maxLength","maxLength"],["inputMode","inputMode"],["open","open"],["rel","rel"],["required","required"],["readonly","readonly"],["readOnly","readonly"],["rows","rows"],["style","style"],["target","target"],["viewBox","viewBox"],["valign","valign"]];function KT(t,e,n){const r=bi(t,t.elementFunctions);return Tg(r,e,n)}function Tg(t,e,n){function r(s){return r.toCallback(s)}return r.toCallback=n,t.listeners.push([e,r]),t.allListeners.push([e,r]),t}function Ig(t,e){const n=bi(t,t.elementFunctions);return rI(e[0],e[1],n),n}function QT(t,e){const n=bi(t,t.elementFunctions);for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const s=e[r];n.attributes.push([r,s]),vg(n,s),si(r)?wo(r,n):si(s)&&wo(s,n)}return n}const YT=Object.fromEntries(JT.map(([t,e])=>[t,WT(e,Ig)])),XT=[["onClose","onclose"],["onCancel","oncancel"],["onDoubleClick","ondblclick"],["onClick","click"],["onBlur","onblur"],["onChange","onchange"],["onSubmit","onsubmit"],["onInput","oninput"],["contextMenu","contextmenu"],["onMouseDown","onmousedown"],["onMouseUp","onmouseup"],["onMouseOver","onmouseover"],["onMouseOut","onmouseout"],["onKeyDown","onkeydown"],["onKeyUp","onkeyup"]];function Eg(t,e){return t.attributes.push(e),vg(t,e[1]),si(e[0])?wo(e[0],t):si(e[1])&&wo(e[1],t),t}const ZT=(()=>{const t=Object.fromEntries(XT.map(([r,s])=>[r,function(o){return KT(this,s,o)}])),e=Object.fromEntries(Object.entries(YT).map(([r,s])=>[r,eI(s)])),n=e.id;return e.id=function(...s){const i=s[0];return this.arrayValue=typeof i=="function"?i():i,n.apply(this,s)},{...t,attr:function(...s){return Ig(this,s)},attrs:function(s){return QT(this,s)},key:function(r){return this.arrayValue=r,this},...e}})();function bo(t){return ZT}function vg(t,e){let n=1;e!=null&&typeof e!="function"&&typeof e.length=="number"&&(n+=e.length),t.contentId+=n}function eI(t){return(function(n,...r){return t(this,n,r)})}function tI(t,e,n){if(Wo(n)){for(const r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;n[r]?t.classList.add(r):t.classList.remove(r)}return}xp(t,e,n)}function wo(t,e){e.contexts||(e.contexts=[]),e.contexts.push(t),++e.contentId}function si(t){return Array.isArray(t)||ir(t)||(t==null?void 0:t.tagJsType)}function gh(t,e){return(n,r)=>Eg(n,[t,r,!1,e])}function Ae(t){return(e,n)=>Tg(e,t,n)}const nI=Object.fromEntries([["onClick",Ae("click")],["onDoubleClick",Ae("ondblclick")],["onDblClick",Ae("ondblclick")],["onDblClick",Ae("ondblclick")],["onBlur",Ae("onblur")],["onChange",Ae("onchange")],["onCancel",Ae("oncancel")],["onClose",Ae("onclose")],["onInput",Ae("oninput")],["onMousedown",Ae("onmousedown")],["onMouseDown",Ae("onmousedown")],["onMouseup",Ae("onmouseup")],["onMouseUp",Ae("onmouseup")],["onMouseover",Ae("onmouseover")],["onMouseOver",Ae("onmouseup")],["onMouseout",Ae("onmouseout")],["onMouseOut",Ae("onmouseout")],["onKeyup",Ae("onkeyup")],["onKeyUp",Ae("onkeyup")],["onKeydown",Ae("onkeydown")],["onKeyDown",Ae("onkeydown")]]),mh=Object.assign(Object.fromEntries(["checked","disabled","selected"].map(t=>[t,gh(t,Pb)])),{class:gh("class",tI)},nI);function rI(t,e,n){return t in mh?mh[t](n,e):Eg(n,[t,e,!1,Ht])}function Ag(t,e){++t.updateCount;const n=t.contexts,r=[];if(t.paintCommands){for(let s=gt.length-1;s>=0;--s){const i=gt[s],o=t.paintCommands.indexOf(i);if(o>=0&&(gt.splice(s,1),t.paintCommands.splice(o,1),t.paintCommands.length===0))break}delete t.paintCommands,rc(t);return}if(n.length&&(To(n,e,r),n.length=0,r.length)){const s=t.htmlDomMeta;return t.deleted=!0,Promise.all(r).then(()=>{++we.locks,ni(s),rc(t),--we.locks,ot()})}ni(t.htmlDomMeta),rc(t)}function rc(t){t.htmlDomMeta=[],delete t.contexts,t.deleted=!0}function To(t,e,n){const r=t[0],s=r.tagJsVar.destroy(r,e);if(r.deleted=!0,dr(s))return n.push(s.then(()=>{if(t.length>1)return To(t.slice(1,t.length),e,n)}));if(r.htmlDomMeta&&(ni(r.htmlDomMeta),delete r.htmlDomMeta),t.length>1)return To(t.slice(1,t.length),e,n)}function Cg(t,e,n){if(e.deleted===!0)return;if(++e.updateCount,ql(t,e)){Ag(e,n),e.htmlDomMeta=[],delete e.deleted,ns(t,e,n,789);return}const i=e.contexts,o=t.contexts||[],c=e.tagJsVar,l=t,u=c.allListeners,h=l.allListeners;for(let f=0;f<h.length;++f){const g=h[f],w=u[f][1];w.toCallback=g[1].toCallback}if(i.length!==o.length){const f=new Array(i.length);for(let g=0;g<i.length;++g)f[g]=i[g].value;throw console.info("context mismatch",{value:t,context:e,conValues:f,vContexts:o,deleted:e.deleted,contexts:i}),new Error(`Expected ${i.length} contexts but got ${o.length}`)}e.locked=79;for(let f=0;f<i.length;++f){const g=i[f];g.tagJsVar.processUpdate(o[f],g,n)}delete e.locked}function ql(t,e){if(!t)return 1;const n=e.value;if(n===t)return 0;if(t.tagJsType!=="element"||n===null)return 1;const r=t,s=n,i=r.contentId,o=s.contentId;if(i!==o)return 1;const c=r.innerHTML.length,l=s.innerHTML.length;return c!==l?1:0}function Rg(t,e,n){const r=n[e];if(r){let i=!1;if(t.originalStopPropagation=t.stopPropagation,t.stopPropagation=function(){i=!0,t.originalStopPropagation.call(t),t.stopPropagation=t.originalStopPropagation,delete t.originalStopPropagation},r(t),t.defaultPrevented||i)return}const s=n.parentNode;s&&Rg(t,e,s)}function kg(t,e,n,r){const s=t.appElement,i=sI(e);e==="blur"&&(e="focusout");const c=t.context.events;if(!c[e]){const l=function(h){Rg(h,i,h.target)};c[e]=l,s.addEventListener(e,l)}n[i]=r,n[e]=r}function sI(t){return t==="blur"&&(t="focusout"),"_"+t}function iI(t,e){const n=e.context.global,r=function(i,o){if(n.deleted!==!0)return oI(r.tagFunction,r.support,i,o)};return r.tagFunction=t,r.support=e,r}function oI(t,e,n,r){const s=Jo(e),i=s.context;i.locked=1;const o=t.apply(n,r);return delete i.locked,Sg(o,s)}function Sg(t,e){const n=e.context.global;if(n!=null&&n.deleted)return;const r=_o(e);return sg(r),og(t,e,{resolvePromise:lI,resolveValue:uI})}const aI="no-data-ever",cI="promise-no-data-ever";function lI(){return cI}function uI(){return aI}function Pg(t,e,n,r){const s=function(...i){return s.tagFunction(t,i)};s.tagFunction=e,s.support=n,kg(n.appSupport,r,t,s)}function xg(t){return t==null||t===!1}function Vg(t,e,n,r,s,i,o,c,l){const u=ta(t,[],!0,n);return u.description="tagJsVar-attr",u.target=c,u.isAttr=!0,u.isNameOnly=l,u.stateOwner=Jo(i),u.supportOwner=i,Ke(u),r.processInitAttribute(o,t,c,r,u,i,Ht),Me(),u.oldTagJsVar=u.tagJsVar,u.tagJsVar=r,u}function Dg(t,e,n,r,s,i,o,c){if(xg(e))return;const l=typeof e;if(l===pe.object){for(const u in e)yh(u,n,e,t,r,i,o,i);return i}if(l==="function"){const u=dI(c);c.tagJsVar=u,Ke(c);const h=e(c),f=Pn(h);if(Me(),f!=null&&f.tagJsType){c.state={newer:{state:[],states:[]}};const g=Vg(f,i,o,f,-1,r,"attr",n,!0);return g.tagJsVar=f,c.subContext=g,i}return yh("attr",n,e,t||[],r,i,o,i),i}e.length!==0&&s(n,e,gi)}function yh(t,e,n,r,s,i,o,c){const l=Qo(t,e.tagName),u=n[t],f=Lg(t,u,r,e,s,Ht,i,o,l);f!==void 0&&(Array.isArray(f)?c.push(...f):c.push(f))}function dI(t){return{tagJsType:"relay",component:!1,hasValueChanged:(n,r,s)=>r.subContext.tagJsVar.hasValueChanged(n,r.subContext,s),processInitAttribute:(n,r,s,i,o,c,l)=>o.subContext.tagJsVar.processInitAttribute(n,r,s,i,o.subContext,c,l),destroy:(n,r)=>n.subContext.tagJsVar.destroy(n.subContext,r),processUpdate:(n,r,s,i)=>{const o=n(r.subContext);return r.subContext.tagJsVar.processUpdate(o,r.subContext,s,i)},processInit:(n,r,s,i,o)=>r.subContext.tagJsVar.processInit(n,r.subContext,s,i,o),matchesInjection:n=>t.subContext.tagJsVar.matchesInjection(n,t.subContext)}}function hI(t,e,n,r,s,i,o,c,l){if(n){if(xg(e)||e===""){r.removeAttribute(n);return}if(typeof n===pe.object)if(typeof e===pe.object)for(const f in n)f in e||bt.push([_h,[r,f]]);else for(const f in n)bt.push([_h,[r,f]])}const u=Dg(t,e,r,s,i,o,c,l);u&&o.push(...u)}function _h(t,e){t.removeAttribute(e)}function fI(t,e,n,r){const s=e,i=t;if(i!=null&&i.tagJsType){const c=e.value;if(!(c!=null&&c.tagJsType)){i.isAttr=!0,Ke(e),i.processInitAttribute(s.attrName,t,s.target,i,s,n,Ht),Me(),s.tagJsVar=i;return}c.hasValueChanged(i,e,n);return}if(s.isNameOnly){hI(r,t,s.value,s.target,n,s.howToSet,[],s.parentContext,s),s.value=t;return}const o=s.target;_I(t,s.attrName,s,o,n,s.howToSet,s.isSpecial),e.value=t}const pI=new RegExp(wg+"(\\d+)"+qT,"g");function Ng(t){return t.search&&t.startsWith(wg)?t.search(pI):-1}function gI(t,e,n,r,s,i,o){const c=r.length,l=[];e.forEach(h=>{if(Ng(h)>=0){const g=r.length,w=Pn(h),E={description:"attribute-array-item",updateCount:0,isAttr:!0,target:n,attrName:t,withinOwnerElement:!0,tagJsVar:w,parentContext:o,destroy$:new le,render$:new le};w.processUpdate=function(D,x,R,F){++x.updateCount,u(F)};const v=i[g];E.value=v,l.push(E),++o.varCounter}});function u(h){const f=mI(e,h,c).join("");s(n,t,f)}return u(i),l}function mI(t,e,n){return t.reduce((r,s)=>{if(Ng(s)>=0){const o=n++,c=e[o];return r.push(c),r}return r.push(s),r},[])}function yI(t,e,n,r,s,i,o,c,l){if(typeof e===pe.function)return++s.varCounter,Mg(e,o,t,n);const u=Pn(e),h={description:"dynamic-attribute",updateCount:0,isAttr:!0,target:n,attrName:t,howToSet:i,value:e,withinOwnerElement:!0,tagJsVar:u,destroy$:new le,render$:new le,parentContext:s};return r.push(h),u.processUpdate=fI,$b(t,e,h,n,i,o,c),h.value=e,h}function bh(t){return Wo(t)&&"TagJsTag"in t?t.tagJsVar:-1}function Lg(t,e,n,r,s,i,o,c,l){const u=bh(t);let h=u>=0||e===void 0&&typeof t!="string",f=n[u];e!=null&&e.tagJsType?f=e:(t!=null&&t.tagJsType||typeof t=="function")&&(h=!0,f=t,e=t);const g=f;if(g!=null&&g.tagJsType)return Vg(e,o,c,g,u,s,t,r,h);if(h){u===-1&&h&&(f=t);const E=ta(f,[],!0,c);return E.description="processAttribute",E.isAttr=!0,E.target=r,E.isNameOnly=!0,E.howToSet=i,Dg(n,f,r,s,i,o,c,E),E}if(Array.isArray(e))return gI(t,e,r,[],i,n,s.context);const w=bh(e);if(w>=0){const E=n[w];return yI(t,E,r,[],c,i,s,l)}return Yo(t,e,r,i,l,c)}function _I(t,e,n,r,s,i,o){return ir(t)?wI(s,t,r,e):bI(t,r,e,o,i,s)}function bI(t,e,n,r,s,i){if(r!==!1){Vp(n,t,e,r);return}switch(t){case void 0:case!1:case null:bt.push([TI,[e,n]]);return}if(ir(t))return Pg(e,t,i,n);s(e,n,t)}function wI(t,e,n,r){return Mg(e,t,r,n)}function Mg(t,e,n,r){return t=iI(t,e),Pg(r,t,e,n)}function TI(t,e){t.removeAttribute(e)}function II(t,e,n,r,s){for(const i of t){const o=i[0],c=i[1],l=i[2]||!1;let u=i.length>1?Ht:Sb;i[3]&&(u=i[3]);const h=s.contexts,f=Lg(o,c,e,n,r,u,h,s,l)||void 0;typeof f=="object"&&(h.push(f),++s.varCounter)}}function EI(t,e,n,r,s){const i=[],o={updateCount:0,parentContext:n,contexts:i,target:e,value:t,htmlDomMeta:[],tagJsVar:{component:!1,tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:Je,processInitAttribute:Je,destroy:(f,g)=>{++o.updateCount,i.forEach(w=>w.tagJsVar.destroy(w,g))},processUpdate:(f,g,w,E)=>{++o.updateCount,Ke(u);let v=f(u);const N=o.underFunction;delete o.underFunction,v instanceof Function&&!v.tagJsType&&(N&&v.toString()===N.toString()?v=u.value:(o.underFunction=v,v=v()));const D=u.tagJsVar.processUpdate(v,u,w,E);return u.value=v,g.value=f,Me(),D}},withinOwnerElement:!0,destroy$:new le,render$:new le};Ke(o);let c=t();ir(c)&&!c.tagJsType&&(o.underFunction=c,c=c());const u=Ug(c,o,e,r,s);return n.contexts.push(o),o.subContext=u,Me(),u}function Og(t,e,n,r,s){t.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return wh(i,r,s);case"function":{if(i.tagJsType==="element")break;return EI(i,r,e,n,s)}}if(i==null)return wh(i,r,s);if(i.tagJsType==="element"){const c=Fg(i,e,n,e.contexts);gt.push([s,[r,c]]),e.htmlDomMeta.push({nn:c.tagName,domElement:c,at:[]});return}return Ug(i,e,r,n,s)})}function Ug(t,e,n,r,s){const i=ta(t,[],!0,e);if(e.contexts.push(i),i.target=n,i.placeholder=document.createTextNode(""),gt.push([s,[n,i.placeholder]]),Ke(i),i.inputsHandler){const c=r.propsConfig;i.inputsHandler(c)}return i.tagJsVar.processInit(t,i,r,i.placeholder),Me(),i}function wh(t,e,n){const r=Ko(t),s=document.createTextNode(r);return gt.push([n,[e,s]]),s}function Fg(t,e,n,r){const s=t.tagName,i=document.createElement(s);e.target=i;const o=t.attributes;for(let l=0;l<o.length;++l){const u=o[l],h=u[0];typeof h=="string"&&(u[2]=Qo(h,s))}II(o,[],i,n,e),Og(t.innerHTML,e,n,i,Pl);const c=t.listeners;for(let l=0;l<c.length;++l)vI(t,l,n,c[l],i);return i}function vI(t,e,n,r,s){const i=r[0],o=(...c)=>{const u=t.listeners[e][1],h=Jo(n),f=h.context,g=f.updateCount;f.locked=1,++we.locks,Ke(f);const w=u(...c);return--we.locks,delete f.locked,Me(),g===f.updateCount?Sg(w,h):(ot(),dr(w)?w.then(()=>{const v=h.context.state.newest;return pT(v),"promise-no-data-ever"}):"no-data-ever")};kg(n.appSupport,i,s,o)}function AI(t,e,n,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],e.locked=34;const s=Fg(t,e,n,e.contexts);delete e.locked;const i=[Sl,[r,s,"htmlTag.processInit"]];gt.push(i),e.paintCommands=[i],mn.push([()=>{delete e.paintCommands},[]]);const o={nn:t.tagName,domElement:s,at:t.attributes};return e.htmlDomMeta=[o],s}function H(t){const n=bi({component:!1,tagJsType:"element",processInitAttribute:Je,processInit:AI,destroy:Ag,processUpdate:Cg,hasValueChanged:ql,tagName:t,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:bo,render:function(){return jw(this)}},bo);return n.tagName=t,n}function bi(t,e){const n=function r(...s){const i={...r};i.attributes=Er(r.attributes),i.listeners=Er(r.listeners),i.allListeners=Er(r.allListeners);let o=i.contexts;i.innerHTML=s;for(let c=0;c<s.length;++c){const l=s[c];if(si(l)){if(l.tagJsType==="element"){Th(i.allListeners,l.allListeners),l.contexts&&(o||(o=[],i.contexts=o),Th(o,l.contexts),++i.contentId);continue}o||(o=[],i.contexts=o),o.push(l)}}return i};return Object.assign(n,t),CI(n,e(n)),n.attributes=Er(t.attributes),n.listeners=Er(t.listeners),n.allListeners=Er(t.allListeners),n.toString=function(){return Jp(this)},n}function Er(t){return t.length?t.slice():[]}function Th(t,e){for(let n=0;n<e.length;++n)t.push(e[n])}function CI(t,e){for(const n in e){const r=e[n];try{t[n]=r}catch{Object.defineProperty(t,n,{value:r,writable:!0,configurable:!0,enumerable:!1})}}}const ve=RI();function RI(){const e=bi({component:!1,tagJsType:"element",processInitAttribute:Je,processInit:kI,destroy:SI,processUpdate:Cg,hasValueChanged:ql,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],render(){return this.innerHTML.map(n=>n).join("")},elementFunctions:bo},bo);return e.tagName="no-element",e}function kI(t,e,n,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],Og(t.innerHTML,e,n,r,Sl)}function SI(t,e){++t.updateCount;const n=t.contexts,r=[];if(n.length&&(To(n,e,r),n.length=0,r.length)){const s=t.htmlDomMeta;return Promise.all(r).then(()=>{++we.locks,ni(s),--we.locks,ot()})}}const G=H("button"),Gl=H("select"),nr=H("option"),PI=H("optgroup"),ue=H("input"),rs=H("textarea");H("html");H("head");const $g=H("title");H("meta");H("link");const Vt=H("style");H("body");H("script");H("noscript");const Bg=H("hr"),Wl=H("h1"),qe=H("h2"),tt=H("h3");H("h4");H("h5");H("h6");H("ol");const Ih=H("ul"),vr=H("li"),m=H("div");H("main");const sc=H("section");H("header");H("footer");H("form");const na=H("fieldset");H("legend");H("dialog");H("pre");H("table");H("tr");H("td");H("th");H("thead");H("tbody");H("tfoot");const jg=H("iframe"),q=H("a"),xI=H("u"),Y=H("img"),he=H("br"),ce=H("label"),oe=H("p"),z=H("small"),Z=H("span"),fr=H("strong"),VI=H("b");H("sup");H("nav");H("figure");H("figcaption");H("code");H("canvas");const so=H("svg"),Mt=H("path"),Gi=H("polygon"),DI=H("rect");H("details");H("summary");const zg=O(({date:t})=>{const e=performance.now().toString().replace(/\./g,"_"),n=`${e}-days-plus`,r=LI();let s;o(),zg.updates(f=>{const g=t;[{date:t}]=f,t!=g&&(l(),i())}),t=t||new Date;function i(){const g=t-new Date;if(g<0){h({days:0,hours:0,minutes:0,seconds:0}),c();return}let w=Math.floor(g/(1e3*60*60*24));const E=Math.floor(g%(1e3*60*60*24)/(1e3*60*60)),v=Math.floor(g%(1e3*60*60)/(1e3*60)),N=Math.floor(g%(1e3*60)/1e3);h({days:w,hours:E,minutes:v,seconds:N})}function o(){s=setInterval(i,Ut)}function c(){clearInterval(s),s=void 0}O.onDestroy(c);function l(){c(),o()}function u(f,g,w){const E=document.createElement("span");if(E.classList.add("wrap"),E.innerText=g,f.appendChild(E),f.children.length===1)return;function v(){requestAnimationFrame(()=>{E.classList.add("changed"),requestAnimationFrame(()=>{setTimeout(()=>{f.removeChild(E)},200)})})}setTimeout(v,w.speed-1)}const h=ge(f=>{const g={...f};let{days:w}=g;const E=document.getElementById(n);E&&(w>99?(g.days=99,E.style.display=""):E.style.display="none",Object.entries(g).forEach(([v,N])=>{const D=NI(N),x=r[v];D[0]!=x[0].value$.value&&(x[0].value$.next(D[0]),u(document.getElementById(`${e}-${v}-0`),D[0],x[0])),D[1]!=x[1].value$.value&&(x[1].value$.next(D[1]),u(document.getElementById(`${e}-${v}-1`),D[1],x[1]))}))});return ve(Vt(`
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
    `),m.class`countdown`(m(m.class`digit-container`(Z.class`digit`(m.class`line`,Z.id`${e}-days-0`,Z.class`placeholder`("0")),Z.class`digit`(m.class`line`,Z.id`${e}-days-1`,Z.class`placeholder`("0")),Z.id`${e}-days-plus`.class`label`.style`display:none`("+")),m.class`label`("Days")),m(m.class`digit-container`(Z.class`digit`(m.class`line`,Z.id`${e}-hours-0`,Z.class`placeholder`("0")),Z.class`digit`(m.class`line`,Z.id`${e}-hours-1`,Z.class`placeholder`("0"))),m.class`label`("Hours")),m(m.class`digit-container`(Z.class`digit`(m.class`line`,Z.id`${e}-minutes-0`,Z.class`placeholder`("0")),Z.class`digit`(m.class`line`,Z.id`${e}-minutes-1`,Z.class`placeholder`("0"))),m.class`label`.contextMenu(l)("Minutes")),m(m.class`digit-container`(Z.class`digit`(m.class`line`,Z.id`${e}-seconds-0`,Z.class`placeholder`("0")),Z.class`digit`(m.class`line`,Z.id`${e}-seconds-1`,Z.class`placeholder`("0"))),m.class`label`.contextMenu(c)("Seconds"))))});function NI(t){const e=t%10;return[Math.floor(t/10),e]}const Ut=1e3;function LI(){return{days:[{speed:Ut*60*60*24*10,value$:new le},{speed:Ut*60*60*24,value$:new le}],hours:[{speed:Ut*60*60*10,value$:new le},{speed:Ut*60*60,value$:new le}],minutes:[{speed:Ut*60*10,value$:new le},{speed:Ut*60,value$:new le}],seconds:[{speed:Ut*10,value$:new le},{speed:Ut,value$:new le}]}}const MI=()=>{};var Eh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,w=u&63;l||(w=64,o||(g=64)),r.push(n[h],n[f],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||f==null)throw new UI;const g=i<<2|c>>4;if(r.push(g),u!==64){const w=c<<4&240|u>>2;if(r.push(w),f!==64){const E=u<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class UI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FI=function(t){const e=Hg(t);return qg.encodeByteArray(e,!0)},Io=function(t){return FI(t).replace(/\./g,"")},Gg=function(t){try{return qg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $I(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const BI=()=>$I().__FIREBASE_DEFAULTS__,jI=()=>{if(typeof process>"u"||typeof Eh>"u")return;const t=Eh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gg(t[1]);return e&&JSON.parse(e)},ra=()=>{try{return MI()||BI()||jI()||zI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wg=t=>{var e,n;return(n=(e=ra())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},HI=t=>{const e=Wg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jg=()=>{var t;return(t=ra())==null?void 0:t.config},Kg=t=>{var e;return(e=ra())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ss(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function GI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Io(JSON.stringify(n)),Io(JSON.stringify(o)),""].join(".")}const Ks={};function WI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ks))Ks[e]?t.emulator.push(e):t.prod.push(e);return t}function JI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vh=!1;function Yg(t,e){if(typeof window>"u"||typeof document>"u"||!ss(window.location.host)||Ks[t]===e||Ks[t]||vh)return;Ks[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=WI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{vh=!0,o()},g}function h(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function f(){const g=JI(r),w=n("text"),E=document.getElementById(w)||document.createElement("span"),v=n("learnmore"),N=document.getElementById(v)||document.createElement("a"),D=n("preprendIcon"),x=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const R=g.element;c(R),h(N,v);const F=u();l(x,D),R.append(x,E,N,F),document.body.appendChild(R)}i?(E.innerText="Preview backend disconnected.",x.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Qe())}function QI(){var e;const t=(e=ra())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eE(){const t=Qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tE(){return!QI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nE(){try{return typeof indexedDB=="object"}catch{return!1}}function rE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="FirebaseError";class Qt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sE,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?iE(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Qt(s,c,r)}}function iE(t,e){return t.replace(oE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const oE=/\{\$([^}]+)}/g;function aE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function or(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ah(i)&&Ah(o)){if(!or(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ah(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cE(t,e){const n=new lE(t,e);return n.subscribe.bind(n)}class lE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ic),s.error===void 0&&(s.error=ic),s.complete===void 0&&(s.complete=ic);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ic(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class dE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fE(e))try{this.getOrInitializeService({instanceIdentifier:Xn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xn){return this.instances.has(e)}getOptions(e=Xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xn){return this.component?this.component.multipleInstances?e:Xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hE(t){return t===Xn?void 0:t}function fE(t){return t.instantiationMode==="EAGER"}/**
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
 */class pE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const gE={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},mE=re.INFO,yE={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},_E=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Jl{constructor(e){this.name=e,this._logLevel=mE,this._logHandler=_E,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const bE=(t,e)=>e.some(n=>t instanceof n);let Ch,Rh;function wE(){return Ch||(Ch=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function TE(){return Rh||(Rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,Jc=new WeakMap,Zg=new WeakMap,oc=new WeakMap,Kl=new WeakMap;function IE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xg.set(n,t)}).catch(()=>{}),Kl.set(e,t),e}function EE(t){if(Jc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Jc.set(t,e)}let Kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vE(t){Kc=t(Kc)}function AE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return Zg.set(r,e.sort?e.sort():[e]),yn(r)}:TE().includes(t)?function(...e){return t.apply(ac(this),e),yn(Xg.get(this))}:function(...e){return yn(t.apply(ac(this),e))}}function CE(t){return typeof t=="function"?AE(t):(t instanceof IDBTransaction&&EE(t),bE(t,wE())?new Proxy(t,Kc):t)}function yn(t){if(t instanceof IDBRequest)return IE(t);if(oc.has(t))return oc.get(t);const e=CE(t);return e!==t&&(oc.set(t,e),Kl.set(e,t)),e}const ac=t=>Kl.get(t);function RE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const kE=["get","getKey","getAll","getAllKeys","count"],SE=["put","add","delete","clear"],cc=new Map;function kh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cc.get(e))return cc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=SE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||kE.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return cc.set(e,i),i}vE(t=>({...t,get:(e,n,r)=>kh(e,n)||t.get(e,n,r),has:(e,n)=>!!kh(e,n)||t.has(e,n)}));/**
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
 */class PE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",Sh="0.14.7";/**
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
 */const qt=new Jl("@firebase/app"),VE="@firebase/app-compat",DE="@firebase/analytics-compat",NE="@firebase/analytics",LE="@firebase/app-check-compat",ME="@firebase/app-check",OE="@firebase/auth",UE="@firebase/auth-compat",FE="@firebase/database",$E="@firebase/data-connect",BE="@firebase/database-compat",jE="@firebase/functions",zE="@firebase/functions-compat",HE="@firebase/installations",qE="@firebase/installations-compat",GE="@firebase/messaging",WE="@firebase/messaging-compat",JE="@firebase/performance",KE="@firebase/performance-compat",QE="@firebase/remote-config",YE="@firebase/remote-config-compat",XE="@firebase/storage",ZE="@firebase/storage-compat",e1="@firebase/firestore",t1="@firebase/ai",n1="@firebase/firestore-compat",r1="firebase",s1="12.8.0";/**
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
 */const Yc="[DEFAULT]",i1={[Qc]:"fire-core",[VE]:"fire-core-compat",[NE]:"fire-analytics",[DE]:"fire-analytics-compat",[ME]:"fire-app-check",[LE]:"fire-app-check-compat",[OE]:"fire-auth",[UE]:"fire-auth-compat",[FE]:"fire-rtdb",[$E]:"fire-data-connect",[BE]:"fire-rtdb-compat",[jE]:"fire-fn",[zE]:"fire-fn-compat",[HE]:"fire-iid",[qE]:"fire-iid-compat",[GE]:"fire-fcm",[WE]:"fire-fcm-compat",[JE]:"fire-perf",[KE]:"fire-perf-compat",[QE]:"fire-rc",[YE]:"fire-rc-compat",[XE]:"fire-gcs",[ZE]:"fire-gcs-compat",[e1]:"fire-fst",[n1]:"fire-fst-compat",[t1]:"fire-vertex","fire-js":"fire-js",[r1]:"fire-js-all"};/**
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
 */const Eo=new Map,o1=new Map,Xc=new Map;function Ph(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wr(t){const e=t.name;if(Xc.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Xc.set(e,t);for(const n of Eo.values())Ph(n,t);for(const n of o1.values())Ph(n,t);return!0}function Ql(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t==null?!1:t.settings!==void 0}/**
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
 */const a1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new wi("app","Firebase",a1);/**
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
 */class c1{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const is=s1;function em(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Yc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});if(n||(n=Jg()),!n)throw _n.create("no-options");const i=Eo.get(s);if(i){if(or(n,i.options)&&or(r,i.config))return i;throw _n.create("duplicate-app",{appName:s})}const o=new pE(s);for(const l of Xc.values())o.addComponent(l);const c=new c1(n,r,o);return Eo.set(s,c),c}function tm(t=Yc){const e=Eo.get(t);if(!e&&t===Yc&&Jg())return em();if(!e)throw _n.create("no-app",{appName:t});return e}function bn(t,e,n){let r=i1[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(o.join(" "));return}Wr(new ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const l1="firebase-heartbeat-database",u1=1,ii="firebase-heartbeat-store";let lc=null;function nm(){return lc||(lc=RE(l1,u1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ii)}catch(n){console.warn(n)}}}}).catch(t=>{throw _n.create("idb-open",{originalErrorMessage:t.message})})),lc}async function d1(t){try{const n=(await nm()).transaction(ii),r=await n.objectStore(ii).get(rm(t));return await n.done,r}catch(e){if(e instanceof Qt)qt.warn(e.message);else{const n=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function xh(t,e){try{const r=(await nm()).transaction(ii,"readwrite");await r.objectStore(ii).put(e,rm(t)),await r.done}catch(n){if(n instanceof Qt)qt.warn(n.message);else{const r=_n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function rm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const h1=1024,f1=30;class p1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new m1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>f1){const o=y1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){qt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vh(),{heartbeatsToSend:r,unsentEntries:s}=g1(this._heartbeatsCache.heartbeats),i=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qt.warn(n),""}}}function Vh(){return new Date().toISOString().substring(0,10)}function g1(t,e=h1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Dh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Dh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class m1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nE()?rE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await d1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return xh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Dh(t){return Io(JSON.stringify({version:2,heartbeats:t})).length}function y1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function _1(t){Wr(new ar("platform-logger",e=>new PE(e),"PRIVATE")),Wr(new ar("heartbeat",e=>new p1(e),"PRIVATE")),bn(Qc,Sh,t),bn(Qc,Sh,"esm2020"),bn("fire-js","")}_1("");var b1="firebase",w1="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(b1,w1,"app");function sm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const T1=sm,im=new wi("auth","Firebase",sm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Jl("@firebase/auth");function I1(t,...e){vo.logLevel<=re.WARN&&vo.warn(`Auth (${is}): ${t}`,...e)}function io(t,...e){vo.logLevel<=re.ERROR&&vo.error(`Auth (${is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,...e){throw Xl(t,...e)}function mt(t,...e){return Xl(t,...e)}function Yl(t,e,n){const r={...T1(),[e]:n};return new wi("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return Yl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function om(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(t,"argument-error"),Yl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return im.create(t,...e)}function Q(t,e,...n){if(!t)throw Xl(e,...n)}function Bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw io(e),new Error(e)}function Gt(t,e){t||Bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function E1(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||XI()||"connection"in navigator)?navigator.onLine:!0}function A1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=KI()||ZI()}get(){return v1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],k1=new Ii(3e4,6e4);function eu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function os(t,e,n,r,s={}){return cm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ti({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return YI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ss(t.emulatorConfig.host)&&(u.credentials="include"),am.fetch()(await lm(t,t.config.apiHost,n,c),u)})}async function cm(t,e,n){t._canInitEmulator=!1;const r={...C1,...e};try{const s=new P1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wi(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yl(t,h,u);Dt(t,h)}}catch(s){if(s instanceof Qt)throw s;Dt(t,"network-request-failed",{message:String(s)})}}async function S1(t,e,n,r,s={}){const i=await os(t,e,n,r,s);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function lm(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Zl(t.config,s):`${t.config.apiScheme}://${s}`;return R1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class P1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),k1.get())})}}function Wi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=mt(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(t,e){return os(t,"POST","/v1/accounts:delete",e)}async function Ao(t,e){return os(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function V1(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=tu(r);Q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qs(uc(s.auth_time)),issuedAtTime:Qs(uc(s.iat)),expirationTime:Qs(uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function uc(t){return Number(t)*1e3}function tu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return io("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gg(n);return s?JSON.parse(s):(io("Failed to decode base64 JWT payload"),null)}catch(s){return io("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Lh(t){const e=tu(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Qt&&D1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function D1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Co(t){var f;const e=t.auth,n=await t.getIdToken(),r=await oi(t,Ao(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?um(s.providerUserInfo):[],o=M1(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new el(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function L1(t){const e=Ye(t);await Co(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function um(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e){const n=await cm(t,{},async()=>{const r=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await lm(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&ss(t.emulatorConfig.host)&&(l.credentials="include"),am.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function U1(t,e){return os(t,"POST","/v2/accounts:revokeToken",eu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Lh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await O1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new jr;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ft{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new N1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new el(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await oi(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return V1(this,e)}reload(){return L1(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Co(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await oi(this,x1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:g,isAnonymous:w,providerData:E,stsTokenManager:v}=n;Q(f&&v,e,"internal-error");const N=jr.fromJSON(this.name,v);Q(typeof f=="string",e,"internal-error"),on(r,e.name),on(s,e.name),Q(typeof g=="boolean",e,"internal-error"),Q(typeof w=="boolean",e,"internal-error"),on(i,e.name),on(o,e.name),on(c,e.name),on(l,e.name),on(u,e.name),on(h,e.name);const D=new ft({uid:f,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:w,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:N,createdAt:u,lastLoginAt:h});return E&&Array.isArray(E)&&(D.providerData=E.map(x=>({...x}))),l&&(D._redirectEventId=l),D}static async _fromIdTokenResponse(e,n,r=!1){const s=new jr;s.updateFromServerResponse(n);const i=new ft({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Co(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?um(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new jr;c.updateFromIdToken(r);const l=new ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new el(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new Map;function jt(t){Gt(t instanceof Function,"Expected a class definition");let e=Mh.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mh.set(t,e),e)}/**
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
 */class dm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dm.type="NONE";const Oh=dm;/**
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
 */function oo(t,e,n){return`firebase:${t}:${e}:${n}`}class zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=oo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ao(this.auth,{idToken:e}).catch(()=>{});return n?ft._fromGetAccountInfoResponse(this.auth,n,e):null}return ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zr(jt(Oh),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||jt(Oh);const o=oo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const g=await Ao(e,{idToken:h}).catch(()=>{});if(!g)break;f=await ft._fromGetAccountInfoResponse(e,g,h)}else f=ft._fromJSON(e,h);u!==i&&(c=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new zr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new zr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ym(e))return"Blackberry";if(_m(e))return"Webos";if(fm(e))return"Safari";if((e.includes("chrome/")||pm(e))&&!e.includes("edge/"))return"Chrome";if(mm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hm(t=Qe()){return/firefox\//i.test(t)}function fm(t=Qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pm(t=Qe()){return/crios\//i.test(t)}function gm(t=Qe()){return/iemobile/i.test(t)}function mm(t=Qe()){return/android/i.test(t)}function ym(t=Qe()){return/blackberry/i.test(t)}function _m(t=Qe()){return/webos/i.test(t)}function nu(t=Qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F1(t=Qe()){var e;return nu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function $1(){return eE()&&document.documentMode===10}function bm(t=Qe()){return nu(t)||mm(t)||_m(t)||ym(t)||/windows phone/i.test(t)||gm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t,e=[]){let n;switch(t){case"Browser":n=Uh(Qe());break;case"Worker":n=`${Uh(Qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
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
 */class B1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function j1(t,e={}){return os(t,"GET","/v2/passwordPolicy",eu(t,e))}/**
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
 */const z1=6;class H1{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??z1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fh(this),this.idTokenSubscription=new Fh(this),this.beforeStateQueue=new B1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=im,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=jt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ao(this,{idToken:e}),r=await ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Co(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(wn(this));const n=e?Ye(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await j1(this),n=new H1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await U1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&jt(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&I1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function as(t){return Ye(t)}class Fh{constructor(e){this.auth=e,this.observer=null,this.addObserver=cE(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function G1(t){ru=t}function W1(t){return ru.loadJS(t)}function J1(){return ru.gapiScript}function K1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(t,e){const n=Ql(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(or(i,e??{}))return s;Dt(s,"already-initialized")}return n.initialize({options:e})}function Y1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function X1(t,e,n){const r=as(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Tm(e),{host:o,port:c}=Z1(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(or(u,r.config.emulator)&&or(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,ss(o)?(Qg(`${i}//${o}${l}`),Yg("Auth",!0)):ev()}function Tm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Z1(t){const e=Tm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$h(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:$h(o)}}}function $h(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ev(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,n){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return S1(t,"POST","/v1/accounts:signInWithIdp",eu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="http://localhost";class cr extends Im{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new cr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:tv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ei extends sa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $t extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fn extends Ei{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ft._fromIdTokenResponse(e,r,s),o=Bh(r);return new Jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bh(r);return new Jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Qt{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ro.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ro(e,n,r,s)}}function Em(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ro._fromErrorAndOperation(t,i,e,r):i})}async function nv(t,e,n=!1){const r=await oi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",r)}/**
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
 */async function rv(t,e,n=!1){const{auth:r}=t;if(at(r.app))return Promise.reject(wn(r));const s="reauthenticate";try{const i=await oi(t,Em(r,s,e,t),n);Q(i.idToken,r,"internal-error");const o=tu(i.idToken);Q(o,r,"internal-error");const{sub:c}=o;return Q(t.uid===c,r,"user-mismatch"),Jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(t,e,n=!1){if(at(t.app))return Promise.reject(wn(t));const r="signIn",s=await Em(t,r,e),i=await Jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(t,e){return Ye(t).setPersistence(e)}function ov(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function av(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function cv(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function lv(t){return Ye(t).signOut()}const ko="__sak";/**
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
 */class vm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=1e3,dv=10;class Am extends vm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dv):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Am.type="LOCAL";const Cm=Am;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm extends vm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rm.type="SESSION";const su=Rm;/**
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
 */function hv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ia(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await hv(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=iu("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function pv(t){Rt().location.href=t}/**
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
 */function km(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function gv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function yv(){return km()?self:null}/**
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
 */const Sm="firebaseLocalStorageDb",_v=1,So="firebaseLocalStorage",Pm="fbase_key";class vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function oa(t,e){return t.transaction([So],e?"readwrite":"readonly").objectStore(So)}function bv(){const t=indexedDB.deleteDatabase(Sm);return new vi(t).toPromise()}function tl(){const t=indexedDB.open(Sm,_v);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(So,{keyPath:Pm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(So)?e(r):(r.close(),await bv(),e(await tl()))})})}async function jh(t,e,n){const r=oa(t,!0).put({[Pm]:e,value:n});return new vi(r).toPromise()}async function wv(t,e){const n=oa(t,!1).get(e),r=await new vi(n).toPromise();return r===void 0?null:r.value}function zh(t,e){const n=oa(t,!0).delete(e);return new vi(n).toPromise()}const Tv=800,Iv=3;class xm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Iv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return km()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ia._getInstance(yv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await gv(),!this.activeServiceWorker)return;this.sender=new fv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tl();return await jh(e,ko,"1"),await zh(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wv(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=oa(s,!1).getAll();return new vi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Tv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xm.type="LOCAL";const Vm=xm;new Ii(3e4,6e4);/**
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
 */function ou(t,e){return e?jt(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class au extends Im{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ev(t){return sv(t.auth,new au(t),t.bypassAuthState)}function vv(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),rv(n,new au(t),t.bypassAuthState)}async function Av(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),nv(n,new au(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ev;case"linkViaPopup":case"linkViaRedirect":return Av;case"reauthViaPopup":case"reauthViaRedirect":return vv;default:Dt(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=new Ii(2e3,1e4);async function Rv(t,e,n){if(at(t.app))return Promise.reject(mt(t,"operation-not-supported-in-this-environment"));const r=as(t);om(t,e,sa);const s=ou(r,n);return new er(r,"signInViaPopup",e,s).executeNotNull()}class er extends Dm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,er.currentPopupAction&&er.currentPopupAction.cancel(),er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=iu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Cv.get())};e()}}er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="pendingRedirect",ao=new Map;class Sv extends Dm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ao.get(this.auth._key());if(!e){try{const r=await Pv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pv(t,e){const n=Lm(e),r=Nm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function xv(t,e){return Nm(t)._set(Lm(e),"true")}function Vv(t,e){ao.set(t._key(),e)}function Nm(t){return jt(t._redirectPersistence)}function Lm(t){return oo(kv,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t,e,n){return Nv(t,e,n)}async function Nv(t,e,n){if(at(t.app))return Promise.reject(wn(t));const r=as(t);om(t,e,sa),await r._initializationPromise;const s=ou(r,n);return await xv(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function Lv(t,e){return await as(t)._initializationPromise,Mm(t,e,!1)}async function Mm(t,e,n=!1){if(at(t.app))return Promise.reject(wn(t));const r=as(t),s=ou(r,e),o=await new Sv(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=600*1e3;class Ov{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Uv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Om(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hh(e))}saveEventToCache(e){this.cachedEventUids.add(Hh(e)),this.lastProcessedEventTime=Date.now()}}function Hh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Om({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Uv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Om(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(t,e={}){return os(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bv=/^https?/;async function jv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Fv(t);for(const n of e)try{if(zv(n))return}catch{}Dt(t,"unauthorized-domain")}function zv(t){const e=Zc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Bv.test(n))return!1;if($v.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Hv=new Ii(3e4,6e4);function qh(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qv(t){return new Promise((e,n)=>{var s,i,o;function r(){qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qh(),n(mt(t,"network-request-failed"))},timeout:Hv.get()})}if((i=(s=Rt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Rt().gapi)!=null&&o.load)r();else{const c=K1("iframefcb");return Rt()[c]=()=>{gapi.load?r():n(mt(t,"network-request-failed"))},W1(`${J1()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw co=null,e})}let co=null;function Gv(t){return co=co||qv(t),co}/**
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
 */const Wv=new Ii(5e3,15e3),Jv="__/auth/iframe",Kv="emulator/auth/iframe",Qv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Xv(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zl(e,Kv):`https://${t.config.authDomain}/${Jv}`,r={apiKey:e.apiKey,appName:t.name,v:is},s=Yv.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ti(r).slice(1)}`}async function Zv(t){const e=await Gv(t),n=Rt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:Xv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qv,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),c=Rt().setTimeout(()=>{i(o)},Wv.get());function l(){Rt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const eA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tA=500,nA=600,rA="_blank",sA="http://localhost";class Gh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iA(t,e,n,r=tA,s=nA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...eA,width:r.toString(),height:s.toString(),top:i,left:o},u=Qe().toLowerCase();n&&(c=pm(u)?rA:n),hm(u)&&(e=e||sA,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[w,E])=>`${g}${w}=${E},`,"");if(F1(u)&&c!=="_self")return oA(e||"",c),new Gh(null);const f=window.open(e||"",c,h);Q(f,t,"popup-blocked");try{f.focus()}catch{}return new Gh(f)}function oA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const aA="__/auth/handler",cA="emulator/auth/handler",lA=encodeURIComponent("fac");async function Wh(t,e,n,r,s,i){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:s};if(e instanceof sa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",aE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ei){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await t._getAppCheckToken(),u=l?`#${lA}=${encodeURIComponent(l)}`:"";return`${uA(t)}?${Ti(c).slice(1)}${u}`}function uA({config:t}){return t.emulator?Zl(t,cA):`https://${t.authDomain}/${aA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="webStorageSupport";class dA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=su,this._completeRedirectFn=Mm,this._overrideRedirectResult=Vv}async _openPopup(e,n,r,s){var o;Gt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Wh(e,n,r,Zc(),s);return iA(e,i,iu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wh(e,n,r,Zc(),s);return pv(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Gt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Zv(e),r=new Ov(e);return n.register("authEvent",s=>(Q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dc,{type:dc},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[dc];i!==void 0&&n(!!i),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jv(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bm()||fm()||nu()}}const hA=dA;var Jh="@firebase/auth",Kh="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gA(t){Wr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wm(t)},u=new q1(r,s,i,l);return Y1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new ar("auth-internal",e=>{const n=as(e.getProvider("auth").getImmediate());return(r=>new fA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(Jh,Kh,pA(t)),bn(Jh,Kh,"esm2020")}/**
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
 */const mA=300,yA=Kg("authIdTokenMaxAge")||mA;let Qh=null;const _A=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yA)return;const s=n==null?void 0:n.token;Qh!==s&&(Qh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bA(t=tm()){const e=Ql(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Q1(t,{popupRedirectResolver:hA,persistence:[Vm,Cm,su]}),r=Kg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=_A(i.toString());av(n,o,()=>o(n.currentUser)),ov(n,c=>o(c))}}const s=Wg("auth");return s&&X1(n,`http://${s}`),n}function wA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}G1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=mt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",wA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gA("Browser");var Yh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,Um;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function I(){}I.prototype=_.prototype,T.F=_.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(C,A,S){for(var b=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)b[ne-2]=arguments[ne];return _.prototype[A].apply(C,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,I){I||(I=0);const C=Array(16);if(typeof _=="string")for(var A=0;A<16;++A)C[A]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(A=0;A<16;++A)C[A]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=T.g[0],I=T.g[1],A=T.g[2];let S=T.g[3],b;b=_+(S^I&(A^S))+C[0]+3614090360&4294967295,_=I+(b<<7&4294967295|b>>>25),b=S+(A^_&(I^A))+C[1]+3905402710&4294967295,S=_+(b<<12&4294967295|b>>>20),b=A+(I^S&(_^I))+C[2]+606105819&4294967295,A=S+(b<<17&4294967295|b>>>15),b=I+(_^A&(S^_))+C[3]+3250441966&4294967295,I=A+(b<<22&4294967295|b>>>10),b=_+(S^I&(A^S))+C[4]+4118548399&4294967295,_=I+(b<<7&4294967295|b>>>25),b=S+(A^_&(I^A))+C[5]+1200080426&4294967295,S=_+(b<<12&4294967295|b>>>20),b=A+(I^S&(_^I))+C[6]+2821735955&4294967295,A=S+(b<<17&4294967295|b>>>15),b=I+(_^A&(S^_))+C[7]+4249261313&4294967295,I=A+(b<<22&4294967295|b>>>10),b=_+(S^I&(A^S))+C[8]+1770035416&4294967295,_=I+(b<<7&4294967295|b>>>25),b=S+(A^_&(I^A))+C[9]+2336552879&4294967295,S=_+(b<<12&4294967295|b>>>20),b=A+(I^S&(_^I))+C[10]+4294925233&4294967295,A=S+(b<<17&4294967295|b>>>15),b=I+(_^A&(S^_))+C[11]+2304563134&4294967295,I=A+(b<<22&4294967295|b>>>10),b=_+(S^I&(A^S))+C[12]+1804603682&4294967295,_=I+(b<<7&4294967295|b>>>25),b=S+(A^_&(I^A))+C[13]+4254626195&4294967295,S=_+(b<<12&4294967295|b>>>20),b=A+(I^S&(_^I))+C[14]+2792965006&4294967295,A=S+(b<<17&4294967295|b>>>15),b=I+(_^A&(S^_))+C[15]+1236535329&4294967295,I=A+(b<<22&4294967295|b>>>10),b=_+(A^S&(I^A))+C[1]+4129170786&4294967295,_=I+(b<<5&4294967295|b>>>27),b=S+(I^A&(_^I))+C[6]+3225465664&4294967295,S=_+(b<<9&4294967295|b>>>23),b=A+(_^I&(S^_))+C[11]+643717713&4294967295,A=S+(b<<14&4294967295|b>>>18),b=I+(S^_&(A^S))+C[0]+3921069994&4294967295,I=A+(b<<20&4294967295|b>>>12),b=_+(A^S&(I^A))+C[5]+3593408605&4294967295,_=I+(b<<5&4294967295|b>>>27),b=S+(I^A&(_^I))+C[10]+38016083&4294967295,S=_+(b<<9&4294967295|b>>>23),b=A+(_^I&(S^_))+C[15]+3634488961&4294967295,A=S+(b<<14&4294967295|b>>>18),b=I+(S^_&(A^S))+C[4]+3889429448&4294967295,I=A+(b<<20&4294967295|b>>>12),b=_+(A^S&(I^A))+C[9]+568446438&4294967295,_=I+(b<<5&4294967295|b>>>27),b=S+(I^A&(_^I))+C[14]+3275163606&4294967295,S=_+(b<<9&4294967295|b>>>23),b=A+(_^I&(S^_))+C[3]+4107603335&4294967295,A=S+(b<<14&4294967295|b>>>18),b=I+(S^_&(A^S))+C[8]+1163531501&4294967295,I=A+(b<<20&4294967295|b>>>12),b=_+(A^S&(I^A))+C[13]+2850285829&4294967295,_=I+(b<<5&4294967295|b>>>27),b=S+(I^A&(_^I))+C[2]+4243563512&4294967295,S=_+(b<<9&4294967295|b>>>23),b=A+(_^I&(S^_))+C[7]+1735328473&4294967295,A=S+(b<<14&4294967295|b>>>18),b=I+(S^_&(A^S))+C[12]+2368359562&4294967295,I=A+(b<<20&4294967295|b>>>12),b=_+(I^A^S)+C[5]+4294588738&4294967295,_=I+(b<<4&4294967295|b>>>28),b=S+(_^I^A)+C[8]+2272392833&4294967295,S=_+(b<<11&4294967295|b>>>21),b=A+(S^_^I)+C[11]+1839030562&4294967295,A=S+(b<<16&4294967295|b>>>16),b=I+(A^S^_)+C[14]+4259657740&4294967295,I=A+(b<<23&4294967295|b>>>9),b=_+(I^A^S)+C[1]+2763975236&4294967295,_=I+(b<<4&4294967295|b>>>28),b=S+(_^I^A)+C[4]+1272893353&4294967295,S=_+(b<<11&4294967295|b>>>21),b=A+(S^_^I)+C[7]+4139469664&4294967295,A=S+(b<<16&4294967295|b>>>16),b=I+(A^S^_)+C[10]+3200236656&4294967295,I=A+(b<<23&4294967295|b>>>9),b=_+(I^A^S)+C[13]+681279174&4294967295,_=I+(b<<4&4294967295|b>>>28),b=S+(_^I^A)+C[0]+3936430074&4294967295,S=_+(b<<11&4294967295|b>>>21),b=A+(S^_^I)+C[3]+3572445317&4294967295,A=S+(b<<16&4294967295|b>>>16),b=I+(A^S^_)+C[6]+76029189&4294967295,I=A+(b<<23&4294967295|b>>>9),b=_+(I^A^S)+C[9]+3654602809&4294967295,_=I+(b<<4&4294967295|b>>>28),b=S+(_^I^A)+C[12]+3873151461&4294967295,S=_+(b<<11&4294967295|b>>>21),b=A+(S^_^I)+C[15]+530742520&4294967295,A=S+(b<<16&4294967295|b>>>16),b=I+(A^S^_)+C[2]+3299628645&4294967295,I=A+(b<<23&4294967295|b>>>9),b=_+(A^(I|~S))+C[0]+4096336452&4294967295,_=I+(b<<6&4294967295|b>>>26),b=S+(I^(_|~A))+C[7]+1126891415&4294967295,S=_+(b<<10&4294967295|b>>>22),b=A+(_^(S|~I))+C[14]+2878612391&4294967295,A=S+(b<<15&4294967295|b>>>17),b=I+(S^(A|~_))+C[5]+4237533241&4294967295,I=A+(b<<21&4294967295|b>>>11),b=_+(A^(I|~S))+C[12]+1700485571&4294967295,_=I+(b<<6&4294967295|b>>>26),b=S+(I^(_|~A))+C[3]+2399980690&4294967295,S=_+(b<<10&4294967295|b>>>22),b=A+(_^(S|~I))+C[10]+4293915773&4294967295,A=S+(b<<15&4294967295|b>>>17),b=I+(S^(A|~_))+C[1]+2240044497&4294967295,I=A+(b<<21&4294967295|b>>>11),b=_+(A^(I|~S))+C[8]+1873313359&4294967295,_=I+(b<<6&4294967295|b>>>26),b=S+(I^(_|~A))+C[15]+4264355552&4294967295,S=_+(b<<10&4294967295|b>>>22),b=A+(_^(S|~I))+C[6]+2734768916&4294967295,A=S+(b<<15&4294967295|b>>>17),b=I+(S^(A|~_))+C[13]+1309151649&4294967295,I=A+(b<<21&4294967295|b>>>11),b=_+(A^(I|~S))+C[4]+4149444226&4294967295,_=I+(b<<6&4294967295|b>>>26),b=S+(I^(_|~A))+C[11]+3174756917&4294967295,S=_+(b<<10&4294967295|b>>>22),b=A+(_^(S|~I))+C[2]+718787259&4294967295,A=S+(b<<15&4294967295|b>>>17),b=I+(S^(A|~_))+C[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.v=function(T,_){_===void 0&&(_=T.length);const I=_-this.blockSize,C=this.C;let A=this.h,S=0;for(;S<_;){if(A==0)for(;S<=I;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<_;)if(C[A++]=T.charCodeAt(S++),A==this.blockSize){s(this,C),A=0;break}}else for(;S<_;)if(C[A++]=T[S++],A==this.blockSize){s(this,C),A=0;break}}this.h=A,this.o+=_},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;_=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=_&255,_/=256;for(this.v(T),T=Array(16),_=0,I=0;I<4;++I)for(let C=0;C<32;C+=8)T[_++]=this.g[I]>>>C&255;return T};function i(T,_){var I=c;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=_(T)}function o(T,_){this.h=_;const I=[];let C=!0;for(let A=T.length-1;A>=0;A--){const S=T[A]|0;C&&S==_||(I[A]=S,C=!1)}this.g=I}var c={};function l(T){return-128<=T&&T<128?i(T,function(_){return new o([_|0],_<0?-1:0)}):new o([T|0],T<0?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return f;if(T<0)return N(u(-T));const _=[];let I=1;for(let C=0;T>=I;C++)_[C]=T/I|0,I*=4294967296;return new o(_,0)}function h(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return N(h(T.substring(1),_));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=u(Math.pow(_,8));let C=f;for(let S=0;S<T.length;S+=8){var A=Math.min(8,T.length-S);const b=parseInt(T.substring(S,S+A),_);A<8?(A=u(Math.pow(_,A)),C=C.j(A).add(u(b))):(C=C.j(I),C=C.add(u(b)))}return C}var f=l(0),g=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(v(this))return-N(this).m();let T=0,_=1;for(let I=0;I<this.g.length;I++){const C=this.i(I);T+=(C>=0?C:4294967296+C)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(E(this))return"0";if(v(this))return"-"+N(this).toString(T);const _=u(Math.pow(T,6));var I=this;let C="";for(;;){const A=F(I,_).g;I=D(I,A.j(_));let S=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=A,E(I))return S+C;for(;S.length<6;)S="0"+S;C=S+C}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function E(T){if(T.h!=0)return!1;for(let _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function v(T){return T.h==-1}t.l=function(T){return T=D(this,T),v(T)?-1:E(T)?0:1};function N(T){const _=T.g.length,I=[];for(let C=0;C<_;C++)I[C]=~T.g[C];return new o(I,~T.h).add(g)}t.abs=function(){return v(this)?N(this):this},t.add=function(T){const _=Math.max(this.g.length,T.g.length),I=[];let C=0;for(let A=0;A<=_;A++){let S=C+(this.i(A)&65535)+(T.i(A)&65535),b=(S>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);C=b>>>16,S&=65535,b&=65535,I[A]=b<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function D(T,_){return T.add(N(_))}t.j=function(T){if(E(this)||E(T))return f;if(v(this))return v(T)?N(this).j(N(T)):N(N(this).j(T));if(v(T))return N(this.j(N(T)));if(this.l(w)<0&&T.l(w)<0)return u(this.m()*T.m());const _=this.g.length+T.g.length,I=[];for(var C=0;C<2*_;C++)I[C]=0;for(C=0;C<this.g.length;C++)for(let A=0;A<T.g.length;A++){const S=this.i(C)>>>16,b=this.i(C)&65535,ne=T.i(A)>>>16,Be=T.i(A)&65535;I[2*C+2*A]+=b*Be,x(I,2*C+2*A),I[2*C+2*A+1]+=S*Be,x(I,2*C+2*A+1),I[2*C+2*A+1]+=b*ne,x(I,2*C+2*A+1),I[2*C+2*A+2]+=S*ne,x(I,2*C+2*A+2)}for(T=0;T<_;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=_;T<2*_;T++)I[T]=0;return new o(I,0)};function x(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function R(T,_){this.g=T,this.h=_}function F(T,_){if(E(_))throw Error("division by zero");if(E(T))return new R(f,f);if(v(T))return _=F(N(T),_),new R(N(_.g),N(_.h));if(v(_))return _=F(T,N(_)),new R(N(_.g),_.h);if(T.g.length>30){if(v(T)||v(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,C=_;C.l(T)<=0;)I=P(I),C=P(C);var A=U(I,1),S=U(C,1);for(C=U(C,2),I=U(I,2);!E(C);){var b=S.add(C);b.l(T)<=0&&(A=A.add(I),S=b),C=U(C,1),I=U(I,1)}return _=D(T,A.j(_)),new R(A,_)}for(A=f;T.l(_)>=0;){for(I=Math.max(1,Math.floor(T.m()/_.m())),C=Math.ceil(Math.log(I)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),S=u(I),b=S.j(_);v(b)||b.l(T)>0;)I-=C,S=u(I),b=S.j(_);E(S)&&(S=g),A=A.add(S),T=D(T,b)}return new R(A,T)}t.B=function(T){return F(this,T).h},t.and=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let C=0;C<_;C++)I[C]=this.i(C)&T.i(C);return new o(I,this.h&T.h)},t.or=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let C=0;C<_;C++)I[C]=this.i(C)|T.i(C);return new o(I,this.h|T.h)},t.xor=function(T){const _=Math.max(this.g.length,T.g.length),I=[];for(let C=0;C<_;C++)I[C]=this.i(C)^T.i(C);return new o(I,this.h^T.h)};function P(T){const _=T.g.length+1,I=[];for(let C=0;C<_;C++)I[C]=T.i(C)<<1|T.i(C-1)>>>31;return new o(I,T.h)}function U(T,_){const I=_>>5;_%=32;const C=T.g.length-I,A=[];for(let S=0;S<C;S++)A[S]=_>0?T.i(S+I)>>>_|T.i(S+I+1)<<32-_:T.i(S+I);return new o(A,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Um=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Tn=o}).apply(typeof Yh<"u"?Yh:typeof self<"u"?self:typeof window<"u"?window:{});var Ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fm,zs,$m,lo,nl,Bm,jm,zm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ji=="object"&&Ji];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var k=a[y];if(!(k in p))break e;p=p[k]}a=a[a.length-1],y=p[a],d=d(y),d!=y&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var p=[],y;for(y in d)Object.prototype.hasOwnProperty.call(d,y)&&p.push([y,d[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function l(a,d,p){return a.call.apply(a.bind,arguments)}function u(a,d,p){return u=l,u.apply(null,arguments)}function h(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function f(a,d){function p(){}p.prototype=d.prototype,a.Z=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,k,V){for(var $=Array(arguments.length-2),te=2;te<arguments.length;te++)$[te-2]=arguments[te];return d.prototype[k].apply(y,$)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function w(a){const d=a.length;if(d>0){const p=Array(d);for(let y=0;y<d;y++)p[y]=a[y];return p}return[]}function E(a,d){for(let y=1;y<arguments.length;y++){const k=arguments[y];var p=typeof k;if(p=p!="object"?p:k?Array.isArray(k)?"array":p:"null",p=="array"||p=="object"&&typeof k.length=="number"){p=a.length||0;const V=k.length||0;a.length=p+V;for(let $=0;$<V;$++)a[p+$]=k[$]}else a.push(k)}}class v{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function N(a){o.setTimeout(()=>{throw a},0)}function D(){var a=T;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class x{constructor(){this.h=this.g=null}add(d,p){const y=R.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var R=new v(()=>new F,a=>a.reset());class F{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let P,U=!1,T=new x,_=()=>{const a=Promise.resolve(void 0);P=()=>{a.then(I)}};function I(){for(var a;a=D();){try{a.h.call(a.g)}catch(p){N(p)}var d=R;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}U=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return a})();function b(a){return/^[\s\xa0]*$/.test(a)}function ne(a,d){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}f(ne,A),ne.prototype.init=function(a,d){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ne.Z.h.call(this)},ne.prototype.h=function(){ne.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Be="closure_listenable_"+(Math.random()*1e6|0),T0=0;function I0(a,d,p,y,k){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=k,this.key=++T0,this.da=this.fa=!1}function xi(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vi(a,d,p){for(const y in a)d.call(p,a[y],y,a)}function E0(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function ad(a){const d={};for(const p in a)d[p]=a[p];return d}const cd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ld(a,d){let p,y;for(let k=1;k<arguments.length;k++){y=arguments[k];for(p in y)a[p]=y[p];for(let V=0;V<cd.length;V++)p=cd[V],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function Di(a){this.src=a,this.g={},this.h=0}Di.prototype.add=function(a,d,p,y,k){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const $=Da(a,d,y,k);return $>-1?(d=a[$],p||(d.fa=!1)):(d=new I0(d,this.src,V,!!y,k),d.fa=p,a.push(d)),d};function Va(a,d){const p=d.type;if(p in a.g){var y=a.g[p],k=Array.prototype.indexOf.call(y,d,void 0),V;(V=k>=0)&&Array.prototype.splice.call(y,k,1),V&&(xi(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Da(a,d,p,y){for(let k=0;k<a.length;++k){const V=a[k];if(!V.da&&V.listener==d&&V.capture==!!p&&V.ha==y)return k}return-1}var Na="closure_lm_"+(Math.random()*1e6|0),La={};function ud(a,d,p,y,k){if(Array.isArray(d)){for(let V=0;V<d.length;V++)ud(a,d[V],p,y,k);return null}return p=fd(p),a&&a[Be]?a.J(d,p,c(y)?!!y.capture:!1,k):v0(a,d,p,!1,y,k)}function v0(a,d,p,y,k,V){if(!d)throw Error("Invalid event type");const $=c(k)?!!k.capture:!!k;let te=Oa(a);if(te||(a[Na]=te=new Di(a)),p=te.add(d,p,y,$,V),p.proxy)return p;if(y=A0(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)S||(k=$),k===void 0&&(k=!1),a.addEventListener(d.toString(),y,k);else if(a.attachEvent)a.attachEvent(hd(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function A0(){function a(p){return d.call(a.src,a.listener,p)}const d=C0;return a}function dd(a,d,p,y,k){if(Array.isArray(d))for(var V=0;V<d.length;V++)dd(a,d[V],p,y,k);else y=c(y)?!!y.capture:!!y,p=fd(p),a&&a[Be]?(a=a.i,V=String(d).toString(),V in a.g&&(d=a.g[V],p=Da(d,p,y,k),p>-1&&(xi(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete a.g[V],a.h--)))):a&&(a=Oa(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Da(d,p,y,k)),(p=a>-1?d[a]:null)&&Ma(p))}function Ma(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Be])Va(d.i,a);else{var p=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(p,y,a.capture):d.detachEvent?d.detachEvent(hd(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=Oa(d))?(Va(p,a),p.h==0&&(p.src=null,d[Na]=null)):xi(a)}}}function hd(a){return a in La?La[a]:La[a]="on"+a}function C0(a,d){if(a.da)a=!0;else{d=new ne(d,this);const p=a.listener,y=a.ha||a.src;a.fa&&Ma(a),a=p.call(y,d)}return a}function Oa(a){return a=a[Na],a instanceof Di?a:null}var Ua="__closure_events_fn_"+(Math.random()*1e9>>>0);function fd(a){return typeof a=="function"?a:(a[Ua]||(a[Ua]=function(d){return a.handleEvent(d)}),a[Ua])}function je(){C.call(this),this.i=new Di(this),this.M=this,this.G=null}f(je,C),je.prototype[Be]=!0,je.prototype.removeEventListener=function(a,d,p,y){dd(this,a,d,p,y)};function Ze(a,d){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new A(d,a);else if(d instanceof A)d.target=d.target||a;else{var k=d;d=new A(y,a),ld(d,k)}k=!0;let V,$;if(p)for($=p.length-1;$>=0;$--)V=d.g=p[$],k=Ni(V,y,!0,d)&&k;if(V=d.g=a,k=Ni(V,y,!0,d)&&k,k=Ni(V,y,!1,d)&&k,p)for($=0;$<p.length;$++)V=d.g=p[$],k=Ni(V,y,!1,d)&&k}je.prototype.N=function(){if(je.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const p=a.g[d];for(let y=0;y<p.length;y++)xi(p[y]);delete a.g[d],a.h--}}this.G=null},je.prototype.J=function(a,d,p,y){return this.i.add(String(a),d,!1,p,y)},je.prototype.K=function(a,d,p,y){return this.i.add(String(a),d,!0,p,y)};function Ni(a,d,p,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let k=!0;for(let V=0;V<d.length;++V){const $=d[V];if($&&!$.da&&$.capture==p){const te=$.listener,Ve=$.ha||$.src;$.fa&&Va(a.i,$),k=te.call(Ve,y)!==!1&&k}}return k&&!y.defaultPrevented}function R0(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function pd(a){a.g=R0(()=>{a.g=null,a.i&&(a.i=!1,pd(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class k0 extends C{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:pd(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bs(a){C.call(this),this.h=a,this.g={}}f(bs,C);var gd=[];function md(a){Vi(a.g,function(d,p){this.g.hasOwnProperty(p)&&Ma(d)},a),a.g={}}bs.prototype.N=function(){bs.Z.N.call(this),md(this)},bs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fa=o.JSON.stringify,S0=o.JSON.parse,P0=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function yd(){}function _d(){}var ws={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function $a(){A.call(this,"d")}f($a,A);function Ba(){A.call(this,"c")}f(Ba,A);var xn={},bd=null;function Li(){return bd=bd||new je}xn.Ia="serverreachability";function wd(a){A.call(this,xn.Ia,a)}f(wd,A);function Ts(a){const d=Li();Ze(d,new wd(d))}xn.STAT_EVENT="statevent";function Td(a,d){A.call(this,xn.STAT_EVENT,a),this.stat=d}f(Td,A);function et(a){const d=Li();Ze(d,new Td(d,a))}xn.Ja="timingevent";function Id(a,d){A.call(this,xn.Ja,a),this.size=d}f(Id,A);function Is(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function Es(){this.g=!0}Es.prototype.ua=function(){this.g=!1};function x0(a,d,p,y,k,V){a.info(function(){if(a.g)if(V){var $="",te=V.split("&");for(let me=0;me<te.length;me++){var Ve=te[me].split("=");if(Ve.length>1){const Ne=Ve[0];Ve=Ve[1];const At=Ne.split("_");$=At.length>=2&&At[1]=="type"?$+(Ne+"="+Ve+"&"):$+(Ne+"=redacted&")}}}else $=null;else $=V;return"XMLHTTP REQ ("+y+") [attempt "+k+"]: "+d+`
`+p+`
`+$})}function V0(a,d,p,y,k,V,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+k+"]: "+d+`
`+p+`
`+V+" "+$})}function wr(a,d,p,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+N0(a,p)+(y?" "+y:"")})}function D0(a,d){a.info(function(){return"TIMEOUT: "+d})}Es.prototype.info=function(){};function N0(a,d){if(!a.g)return d;if(!d)return null;try{const V=JSON.parse(d);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var k=y[0];if(k!="noop"&&k!="stop"&&k!="close")for(let $=1;$<y.length;$++)y[$]=""}}}}return Fa(V)}catch{return d}}var Mi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ed={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},vd;function ja(){}f(ja,yd),ja.prototype.g=function(){return new XMLHttpRequest},vd=new ja;function vs(a){return encodeURIComponent(String(a))}function L0(a){var d=1;a=a.split(":");const p=[];for(;d>0&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function Zt(a,d,p,y){this.j=a,this.i=d,this.l=p,this.S=y||1,this.V=new bs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ad}function Ad(){this.i=null,this.g="",this.h=!1}var Cd={},za={};function Ha(a,d,p){a.M=1,a.A=Ui(vt(d)),a.u=p,a.R=!0,Rd(a,null)}function Rd(a,d){a.F=Date.now(),Oi(a),a.B=vt(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),$d(p.i,"t",y),a.C=0,p=a.j.L,a.h=new Ad,a.g=sh(a.j,p?d:null,!a.u),a.P>0&&(a.O=new k0(u(a.Y,a,a.g),a.P)),d=a.V,p=a.g,y=a.ba;var k="readystatechange";Array.isArray(k)||(k&&(gd[0]=k.toString()),k=gd);for(let V=0;V<k.length;V++){const $=ud(p,k[V],y||d.handleEvent,!1,d.h||d);if(!$)break;d.g[$.key]=$}d=a.J?ad(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Ts(),x0(a.i,a.v,a.B,a.l,a.S,a.u)}Zt.prototype.ba=function(a){a=a.target;const d=this.O;d&&nn(a)==3?d.j():this.Y(a)},Zt.prototype.Y=function(a){try{if(a==this.g)e:{const te=nn(this.g),Ve=this.g.ya(),me=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Wd(this.g)))){this.K||te!=4||Ve==7||(Ve==8||me<=0?Ts(3):Ts(2)),qa(this);var d=this.g.ca();this.X=d;var p=M0(this);if(this.o=d==200,V0(this.i,this.v,this.B,this.l,this.S,te,d),this.o){if(this.U&&!this.L){t:{if(this.g){var y,k=this.g;if((y=k.g?k.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(y)){var V=y;break t}}V=null}if(a=V)wr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ga(this,a);else{this.o=!1,this.m=3,et(12),Vn(this),As(this);break e}}if(this.R){a=!0;let Ne;for(;!this.K&&this.C<p.length;)if(Ne=O0(this,p),Ne==za){te==4&&(this.m=4,et(14),a=!1),wr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ne==Cd){this.m=4,et(15),wr(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else wr(this.i,this.l,Ne,null),Ga(this,Ne);if(kd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||p.length!=0||this.h.h||(this.m=1,et(16),a=!1),this.o=this.o&&a,!a)wr(this.i,this.l,p,"[Invalid Chunked Response]"),Vn(this),As(this);else if(p.length>0&&!this.W){this.W=!0;var $=this.j;$.g==this&&$.aa&&!$.P&&($.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ec($),$.P=!0,et(11))}}else wr(this.i,this.l,p,null),Ga(this,p);te==4&&Vn(this),this.o&&!this.K&&(te==4?eh(this.j,this):(this.o=!1,Oi(this)))}else Y0(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,et(12)):(this.m=0,et(13)),Vn(this),As(this)}}}catch{}finally{}};function M0(a){if(!kd(a))return a.g.la();const d=Wd(a.g);if(d==="")return"";let p="";const y=d.length,k=nn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Vn(a),As(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<y;V++)a.h.h=!0,p+=a.h.i.decode(d[V],{stream:!(k&&V==y-1)});return d.length=0,a.h.g+=p,a.C=0,a.h.g}function kd(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function O0(a,d){var p=a.C,y=d.indexOf(`
`,p);return y==-1?za:(p=Number(d.substring(p,y)),isNaN(p)?Cd:(y+=1,y+p>d.length?za:(d=d.slice(y,y+p),a.C=y+p,d)))}Zt.prototype.cancel=function(){this.K=!0,Vn(this)};function Oi(a){a.T=Date.now()+a.H,Sd(a,a.H)}function Sd(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Is(u(a.aa,a),d)}function qa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Zt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(D0(this.i,this.B),this.M!=2&&(Ts(),et(17)),Vn(this),this.m=2,As(this)):Sd(this,this.T-a)};function As(a){a.j.I==0||a.K||eh(a.j,a)}function Vn(a){qa(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,md(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function Ga(a,d){try{var p=a.j;if(p.I!=0&&(p.g==a||Wa(p.h,a))){if(!a.L&&Wa(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var k=y;if(k[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)zi(p),Bi(p);else break e;Za(p),et(18)}}else p.xa=k[1],0<p.xa-p.K&&k[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Is(u(p.Va,p),6e3));Vd(p.h)<=1&&p.ta&&(p.ta=void 0)}else Nn(p,11)}else if((a.L||p.g==a)&&zi(p),!b(d))for(k=p.Ba.g.parse(d),d=0;d<k.length;d++){let me=k[d];const Ne=me[0];if(!(Ne<=p.K))if(p.K=Ne,me=me[1],p.I==2)if(me[0]=="c"){p.M=me[1],p.ba=me[2];const At=me[3];At!=null&&(p.ka=At,p.j.info("VER="+p.ka));const Ln=me[4];Ln!=null&&(p.za=Ln,p.j.info("SVER="+p.za));const rn=me[5];rn!=null&&typeof rn=="number"&&rn>0&&(y=1.5*rn,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const sn=a.g;if(sn){const qi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qi){var V=y.h;V.g||qi.indexOf("spdy")==-1&&qi.indexOf("quic")==-1&&qi.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ja(V,V.h),V.h=null))}if(y.G){const tc=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;tc&&(y.wa=tc,_e(y.J,y.G,tc))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var $=a;if(y.na=rh(y,y.L?y.ba:null,y.W),$.L){Dd(y.h,$);var te=$,Ve=y.O;Ve&&(te.H=Ve),te.D&&(qa(te),Oi(te)),y.g=$}else Xd(y);p.i.length>0&&ji(p)}else me[0]!="stop"&&me[0]!="close"||Nn(p,7);else p.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Nn(p,7):Xa(p):me[0]!="noop"&&p.l&&p.l.qa(me),p.A=0)}}Ts(4)}catch{}}var U0=class{constructor(a,d){this.g=a,this.map=d}};function Pd(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function xd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vd(a){return a.h?1:a.g?a.g.size:0}function Wa(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Ja(a,d){a.g?a.g.add(d):a.h=d}function Dd(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Pd.prototype.cancel=function(){if(this.i=Nd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Nd(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.G);return d}return w(a.i)}var Ld=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function F0(a,d){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let k,V=null;y>=0?(k=a[p].substring(0,y),V=a[p].substring(y+1)):k=a[p],d(k,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function en(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof en?(this.l=a.l,Cs(this,a.j),this.o=a.o,this.g=a.g,Rs(this,a.u),this.h=a.h,Ka(this,Bd(a.i)),this.m=a.m):a&&(d=String(a).match(Ld))?(this.l=!1,Cs(this,d[1]||"",!0),this.o=ks(d[2]||""),this.g=ks(d[3]||"",!0),Rs(this,d[4]),this.h=ks(d[5]||"",!0),Ka(this,d[6]||"",!0),this.m=ks(d[7]||"")):(this.l=!1,this.i=new Ps(null,this.l))}en.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Ss(d,Md,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Ss(d,Md,!0),"@"),a.push(vs(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ss(p,p.charAt(0)=="/"?j0:B0,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ss(p,H0)),a.join("")},en.prototype.resolve=function(a){const d=vt(this);let p=!!a.j;p?Cs(d,a.j):p=!!a.o,p?d.o=a.o:p=!!a.g,p?d.g=a.g:p=a.u!=null;var y=a.h;if(p)Rs(d,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var k=d.h.lastIndexOf("/");k!=-1&&(y=d.h.slice(0,k+1)+y)}if(k=y,k==".."||k==".")y="";else if(k.indexOf("./")!=-1||k.indexOf("/.")!=-1){y=k.lastIndexOf("/",0)==0,k=k.split("/");const V=[];for(let $=0;$<k.length;){const te=k[$++];te=="."?y&&$==k.length&&V.push(""):te==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),y&&$==k.length&&V.push("")):(V.push(te),y=!0)}y=V.join("/")}else y=k}return p?d.h=y:p=a.i.toString()!=="",p?Ka(d,Bd(a.i)):p=!!a.m,p&&(d.m=a.m),d};function vt(a){return new en(a)}function Cs(a,d,p){a.j=p?ks(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Rs(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function Ka(a,d,p){d instanceof Ps?(a.i=d,q0(a.i,a.l)):(p||(d=Ss(d,z0)),a.i=new Ps(d,a.l))}function _e(a,d,p){a.i.set(d,p)}function Ui(a){return _e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ks(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ss(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,$0),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function $0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Md=/[#\/\?@]/g,B0=/[#\?:]/g,j0=/[#\?]/g,z0=/[#\?@]/g,H0=/#/g;function Ps(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&F0(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Ps.prototype,t.add=function(a,d){Dn(this),this.i=null,a=Tr(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function Od(a,d){Dn(a),d=Tr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Ud(a,d){return Dn(a),d=Tr(a,d),a.g.has(d)}t.forEach=function(a,d){Dn(this),this.g.forEach(function(p,y){p.forEach(function(k){a.call(d,k,y,this)},this)},this)};function Fd(a,d){Dn(a);let p=[];if(typeof d=="string")Ud(a,d)&&(p=p.concat(a.g.get(Tr(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)p=p.concat(a[d]);return p}t.set=function(a,d){return Dn(this),this.i=null,a=Tr(this,a),Ud(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Fd(this,a),a.length>0?String(a[0]):d):d};function $d(a,d,p){Od(a,d),p.length>0&&(a.i=null,a.g.set(Tr(a,d),w(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let y=0;y<d.length;y++){var p=d[y];const k=vs(p);p=Fd(this,p);for(let V=0;V<p.length;V++){let $=k;p[V]!==""&&($+="="+vs(p[V])),a.push($)}}return this.i=a.join("&")};function Bd(a){const d=new Ps;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function Tr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function q0(a,d){d&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(p,y){const k=y.toLowerCase();y!=k&&(Od(this,y),$d(this,k,p))},a)),a.j=d}function G0(a,d){const p=new Es;if(o.Image){const y=new Image;y.onload=h(tn,p,"TestLoadImage: loaded",!0,d,y),y.onerror=h(tn,p,"TestLoadImage: error",!1,d,y),y.onabort=h(tn,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=h(tn,p,"TestLoadImage: timeout",!1,d,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function W0(a,d){const p=new Es,y=new AbortController,k=setTimeout(()=>{y.abort(),tn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(V=>{clearTimeout(k),V.ok?tn(p,"TestPingServer: ok",!0,d):tn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(k),tn(p,"TestPingServer: error",!1,d)})}function tn(a,d,p,y,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),y(p)}catch{}}function J0(){this.g=new P0}function Qa(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Qa,yd),Qa.prototype.g=function(){return new Fi(this.i,this.h)};function Fi(a,d){je.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(Fi,je),t=Fi.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Vs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;jd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function jd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?xs(this):Vs(this),this.readyState==3&&jd(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,xs(this))},t.Na=function(a){this.g&&(this.response=a,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Vs(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Vs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zd(a){let d="";return Vi(a,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function Ya(a,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=zd(p),typeof a=="string"?p!=null&&vs(p):_e(a,d,p))}function Ee(a){je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ee,je);var K0=/^https?$/i,Q0=["POST","PUT"];t=Ee.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():vd.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(V){Hd(this,V);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var k in y)p.set(k,y[k]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const V of y.keys())p.set(V,y.get(V));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),k=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Q0,d,void 0)>=0)||y||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,$]of p)this.g.setRequestHeader(V,$);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Hd(this,V)}};function Hd(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,qd(a),$i(a)}function qd(a){a.A||(a.A=!0,Ze(a,"complete"),Ze(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ze(this,"complete"),Ze(this,"abort"),$i(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$i(this,!0)),Ee.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Gd(this):this.Xa())},t.Xa=function(){Gd(this)};function Gd(a){if(a.h&&typeof i<"u"){if(a.v&&nn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ze(a,"readystatechange"),nn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=V===0){let $=String(a.D).match(Ld)[1]||null;!$&&o.self&&o.self.location&&($=o.self.location.protocol.slice(0,-1)),y=!K0.test($?$.toLowerCase():"")}p=y}if(p)Ze(a,"complete"),Ze(a,"success");else{a.o=6;try{var k=nn(a)>2?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.ca()+"]",qd(a)}}finally{$i(a)}}}}function $i(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,d||Ze(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function nn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return nn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),S0(d)}};function Wd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Y0(a){const d={};a=(a.g&&nn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(b(a[y]))continue;var p=L0(a[y]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=d[k]||[];d[k]=V,V.push(p)}E0(d,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Jd(a){this.za=0,this.i=[],this.j=new Es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ds("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ds("baseRetryDelayMs",5e3,a),this.Za=Ds("retryDelaySeedMs",1e4,a),this.Ta=Ds("forwardChannelMaxRetries",2,a),this.va=Ds("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Pd(a&&a.concurrentRequestLimit),this.Ba=new J0,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Jd.prototype,t.ka=8,t.I=1,t.connect=function(a,d,p,y){et(0),this.W=a,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=rh(this,null,this.W),ji(this)};function Xa(a){if(Kd(a),a.I==3){var d=a.V++,p=vt(a.J);if(_e(p,"SID",a.M),_e(p,"RID",d),_e(p,"TYPE","terminate"),Ns(a,p),d=new Zt(a,a.j,d),d.M=2,d.A=Ui(vt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=sh(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Oi(d)}nh(a)}function Bi(a){a.g&&(ec(a),a.g.cancel(),a.g=null)}function Kd(a){Bi(a),a.v&&(o.clearTimeout(a.v),a.v=null),zi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ji(a){if(!xd(a.h)&&!a.m){a.m=!0;var d=a.Ea;P||_(),U||(P(),U=!0),T.add(d,a),a.D=0}}function X0(a,d){return Vd(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Is(u(a.Ea,a,d),th(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const k=new Zt(this,this.j,a);let V=this.o;if(this.U&&(V?(V=ad(V),ld(V,this.U)):V=this.U),this.u!==null||this.R||(k.J=V,V=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Yd(this,k,d),p=vt(this.J),_e(p,"RID",a),_e(p,"CVER",22),this.G&&_e(p,"X-HTTP-Session-Id",this.G),Ns(this,p),V&&(this.R?d="headers="+vs(zd(V))+"&"+d:this.u&&Ya(p,this.u,V)),Ja(this.h,k),this.Ra&&_e(p,"TYPE","init"),this.S?(_e(p,"$req",d),_e(p,"SID","null"),k.U=!0,Ha(k,p,null)):Ha(k,p,d),this.I=2}}else this.I==3&&(a?Qd(this,a):this.i.length==0||xd(this.h)||Qd(this))};function Qd(a,d){var p;d?p=d.l:p=a.V++;const y=vt(a.J);_e(y,"SID",a.M),_e(y,"RID",p),_e(y,"AID",a.K),Ns(a,y),a.u&&a.o&&Ya(y,a.u,a.o),p=new Zt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Yd(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ja(a.h,p),Ha(p,y,d)}function Ns(a,d){a.H&&Vi(a.H,function(p,y){_e(d,y,p)}),a.l&&Vi({},function(p,y){_e(d,y,p)})}function Yd(a,d,p){p=Math.min(a.i.length,p);const y=a.l?u(a.l.Ka,a.l,a):null;e:{var k=a.i;let te=-1;for(;;){const Ve=["count="+p];te==-1?p>0?(te=k[0].g,Ve.push("ofs="+te)):te=0:Ve.push("ofs="+te);let me=!0;for(let Ne=0;Ne<p;Ne++){var V=k[Ne].g;const At=k[Ne].map;if(V-=te,V<0)te=Math.max(0,k[Ne].g-100),me=!1;else try{V="req"+V+"_"||"";try{var $=At instanceof Map?At:Object.entries(At);for(const[Ln,rn]of $){let sn=rn;c(rn)&&(sn=Fa(rn)),Ve.push(V+Ln+"="+encodeURIComponent(sn))}}catch(Ln){throw Ve.push(V+"type="+encodeURIComponent("_badmap")),Ln}}catch{y&&y(At)}}if(me){$=Ve.join("&");break e}}$=void 0}return a=a.i.splice(0,p),d.G=a,$}function Xd(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;P||_(),U||(P(),U=!0),T.add(d,a),a.A=0}}function Za(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Is(u(a.Da,a),th(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Zd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Is(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,et(10),Bi(this),Zd(this))};function ec(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Zd(a){a.g=new Zt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=vt(a.na);_e(d,"RID","rpc"),_e(d,"SID",a.M),_e(d,"AID",a.K),_e(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&_e(d,"TO",a.ia),_e(d,"TYPE","xmlhttp"),Ns(a,d),a.u&&a.o&&Ya(d,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Ui(vt(d)),p.u=null,p.R=!0,Rd(p,a)}t.Va=function(){this.C!=null&&(this.C=null,Bi(this),Za(this),et(19))};function zi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function eh(a,d){var p=null;if(a.g==d){zi(a),ec(a),a.g=null;var y=2}else if(Wa(a.h,d))p=d.G,Dd(a.h,d),y=1;else return;if(a.I!=0){if(d.o)if(y==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var k=a.D;y=Li(),Ze(y,new Id(y,p)),ji(a)}else Xd(a);else if(k=d.m,k==3||k==0&&d.X>0||!(y==1&&X0(a,d)||y==2&&Za(a)))switch(p&&p.length>0&&(d=a.h,d.i=d.i.concat(p)),k){case 1:Nn(a,5);break;case 4:Nn(a,10);break;case 3:Nn(a,6);break;default:Nn(a,2)}}}function th(a,d){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*d}function Nn(a,d){if(a.j.info("Error code "+d),d==2){var p=u(a.bb,a),y=a.Ua;const k=!y;y=new en(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Cs(y,"https"),Ui(y),k?G0(y.toString(),p):W0(y.toString(),p)}else et(2);a.I=0,a.l&&a.l.pa(d),nh(a),Kd(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function nh(a){if(a.I=0,a.ja=[],a.l){const d=Nd(a.h);(d.length!=0||a.i.length!=0)&&(E(a.ja,d),E(a.ja,a.i),a.h.i.length=0,w(a.i),a.i.length=0),a.l.oa()}}function rh(a,d,p){var y=p instanceof en?vt(p):new en(p);if(y.g!="")d&&(y.g=d+"."+y.g),Rs(y,y.u);else{var k=o.location;y=k.protocol,d=d?d+"."+k.hostname:k.hostname,k=+k.port;const V=new en(null);y&&Cs(V,y),d&&(V.g=d),k&&Rs(V,k),p&&(V.h=p),y=V}return p=a.G,d=a.wa,p&&d&&_e(y,p,d),_e(y,"VER",a.ka),Ns(a,y),y}function sh(a,d,p){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Ee(new Qa({ab:p})):new Ee(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ih(){}t=ih.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Hi(){}Hi.prototype.g=function(a,d){return new st(a,d)};function st(a,d){je.call(this),this.g=new Jd(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!b(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!b(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ir(this)}f(st,je),st.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},st.prototype.close=function(){Xa(this.g)},st.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Fa(a),a=p);d.i.push(new U0(d.Ya++,a)),d.I==3&&ji(d)},st.prototype.N=function(){this.g.l=null,delete this.j,Xa(this.g),delete this.g,st.Z.N.call(this)};function oh(a){$a.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}f(oh,$a);function ah(){Ba.call(this),this.status=1}f(ah,Ba);function Ir(a){this.g=a}f(Ir,ih),Ir.prototype.ra=function(){Ze(this.g,"a")},Ir.prototype.qa=function(a){Ze(this.g,new oh(a))},Ir.prototype.pa=function(a){Ze(this.g,new ah)},Ir.prototype.oa=function(){Ze(this.g,"b")},Hi.prototype.createWebChannel=Hi.prototype.g,st.prototype.send=st.prototype.o,st.prototype.open=st.prototype.m,st.prototype.close=st.prototype.close,zm=function(){return new Hi},jm=function(){return Li()},Bm=xn,nl={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,lo=Mi,Ed.COMPLETE="complete",$m=Ed,_d.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",je.prototype.listen=je.prototype.J,zs=_d,Ee.prototype.listenOnce=Ee.prototype.K,Ee.prototype.getLastError=Ee.prototype.Ha,Ee.prototype.getLastErrorCode=Ee.prototype.ya,Ee.prototype.getStatus=Ee.prototype.ca,Ee.prototype.getResponseJson=Ee.prototype.La,Ee.prototype.getResponseText=Ee.prototype.la,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Fa,Fm=Ee}).apply(typeof Ji<"u"?Ji:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cs="12.8.0";function TA(t){cs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const lr=new Jl("@firebase/firestore");function Mr(){return lr.logLevel}function j(t,...e){if(lr.logLevel<=re.DEBUG){const n=e.map(cu);lr.debug(`Firestore (${cs}): ${t}`,...n)}}function Wt(t,...e){if(lr.logLevel<=re.ERROR){const n=e.map(cu);lr.error(`Firestore (${cs}): ${t}`,...n)}}function Kr(t,...e){if(lr.logLevel<=re.WARN){const n=e.map(cu);lr.warn(`Firestore (${cs}): ${t}`,...n)}}function cu(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Hm(t,r,n)}function Hm(t,e,n){let r=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Wt(r),new Error(r)}function de(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Hm(e,s,r)}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Qt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ge.UNAUTHENTICATED)))}shutdown(){}}class EA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class vA{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new zt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zt)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new qm(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new Ge(e)}}class AA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class CA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new AA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Ge.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,at(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Xh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Xh(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=kA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function rl(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return hc(s)===hc(i)?se(s,i):hc(s)?1:-1}return se(t.length,e.length)}const SA=55296,PA=57343;function hc(t){const e=t.charCodeAt(0);return e>=SA&&e<=PA}function Qr(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="__name__";class Ct{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Ct.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return se(e.length,n.length)}static compareSegments(e,n){const r=Ct.isNumericId(e),s=Ct.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ct.extractNumericId(e).compare(Ct.extractNumericId(n)):rl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tn.fromString(e.substring(4,e.length-2))}}class ye extends Ct{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new ye(n)}static emptyPath(){return new ye([])}}const xA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Ct{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return xA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zh}static keyField(){return new Fe([Zh])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ye.fromString(e))}static fromName(e){return new W(ye.fromString(e).popFirst(5))}static empty(){return new W(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VA(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ef(t){if(!W.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tf(t){if(W.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wm(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function aa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function ut(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=aa(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ai(t,e){if(!Wm(t))throw new B(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new B(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf=-62135596800,rf=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*rf);return new be(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<nf)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rf}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ai(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Pe("string",be._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ai=-1;function DA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new En(s,W.empty(),e)}function NA(t){return new En(t.readTime,t.key,ai)}class En{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new En(X.min(),W.empty(),ai)}static max(){return new En(X.max(),W.empty(),ai)}}function LA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==MA)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):M.reject(n)}static resolve(e){return new M(((n,r)=>{n(e)}))}static reject(e){return new M(((n,r)=>{r(e)}))}static waitFor(e){return new M(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next((s=>s?M.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new M(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((h=>{o[u]=h,++c,c===i&&r(o)}),(h=>s(h)))}}))}static doWhile(e,n){return new M(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function UA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function us(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ca{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ca.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=-1;function la(t){return t==null}function Po(t){return t===0&&1/t==-1/0}function FA(t){return typeof t=="number"&&Number.isInteger(t)&&!Po(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="";function $A(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sf(e)),e=BA(t.get(n),e);return sf(e)}function BA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Jm:n+="";break;default:n+=i}}return n}function sf(t){return t+Jm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Km(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ki(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ki(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ki(this.root,e,this.comparator,!0)}}class Ki{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=s??Oe.EMPTY,this.right=i??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Oe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Oe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new af(this.data.getIterator())}getIteratorFrom(e){return new af(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class af{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new pt([])}unionWith(e){let n=new De(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qr(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Qm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qm("Invalid base64 string: "+i):i}})(e);return new $e(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const jA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vn(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=jA.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function An(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="server_timestamp",Xm="__type__",Zm="__previous_value__",ey="__local_write_time__";function du(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Xm])==null?void 0:r.stringValue)===Ym}function ua(t){const e=t.mapValue.fields[Zm];return du(e)?ua(e):e}function ci(t){const e=vn(t.mapValue.fields[ey].timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,s,i,o,c,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=f}}const xo="(default)";class li{constructor(e,n){this.projectId=e,this.database=n||xo}static empty(){return new li("","")}get isDefaultDatabase(){return this.database===xo}isEqual(e){return e instanceof li&&e.projectId===this.projectId&&e.database===this.database}}function HA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new li(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="__type__",qA="__max__",Qi={mapValue:{}},ny="__vector__",Vo="value";function Cn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?du(t)?4:WA(t)?9007199254740991:GA(t)?10:11:J(28295,{value:t})}function Nt(t,e){if(t===e)return!0;const n=Cn(t);if(n!==Cn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ci(t).isEqual(ci(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=vn(s.timestampValue),c=vn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return An(s.bytesValue).isEqual(An(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ce(s.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(s.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ce(s.integerValue)===Ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ce(s.doubleValue),c=Ce(i.doubleValue);return o===c?Po(o)===Po(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Qr(t.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(of(o)!==of(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Nt(o[l],c[l])))return!1;return!0})(t,e);default:return J(52216,{left:t})}}function ui(t,e){return(t.values||[]).find((n=>Nt(n,e)))!==void 0}function Yr(t,e){if(t===e)return 0;const n=Cn(t),r=Cn(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Ce(i.integerValue||i.doubleValue),l=Ce(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return cf(t.timestampValue,e.timestampValue);case 4:return cf(ci(t),ci(e));case 5:return rl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=An(i),l=An(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=se(c[u],l[u]);if(h!==0)return h}return se(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=se(Ce(i.latitude),Ce(o.latitude));return c!==0?c:se(Ce(i.longitude),Ce(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return lf(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var g,w,E,v;const c=i.fields||{},l=o.fields||{},u=(g=c[Vo])==null?void 0:g.arrayValue,h=(w=l[Vo])==null?void 0:w.arrayValue,f=se(((E=u==null?void 0:u.values)==null?void 0:E.length)||0,((v=h==null?void 0:h.values)==null?void 0:v.length)||0);return f!==0?f:lf(u,h)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Qi.mapValue&&o===Qi.mapValue)return 0;if(i===Qi.mapValue)return 1;if(o===Qi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const g=rl(l[f],h[f]);if(g!==0)return g;const w=Yr(c[l[f]],u[h[f]]);if(w!==0)return w}return se(l.length,h.length)})(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function cf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=vn(t),r=vn(e),s=se(n.seconds,r.seconds);return s!==0?s:se(n.nanos,r.nanos)}function lf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Yr(n[s],r[s]);if(i)return i}return se(n.length,r.length)}function Xr(t){return sl(t)}function sl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=vn(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return An(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return W.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=sl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${sl(n.fields[o])}`;return s+"}"})(t.mapValue):J(61005,{value:t})}function uo(t){switch(Cn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ua(t);return e?16+uo(e):16;case 5:return 2*t.stringValue.length;case 6:return An(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+uo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return pr(r.fields,((i,o)=>{s+=i.length+uo(o)})),s})(t.mapValue);default:throw J(13486,{value:t})}}function uf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function il(t){return!!t&&"integerValue"in t}function hu(t){return!!t&&"arrayValue"in t}function df(t){return!!t&&"nullValue"in t}function hf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ho(t){return!!t&&"mapValue"in t}function GA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[ty])==null?void 0:r.stringValue)===ny}function Ys(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return pr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ys(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return{...t}}function WA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===qA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=Fe.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ys(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){pr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new ct(Ys(this.value))}}function ry(t){const e=[];return pr(t.fields,((n,r)=>{const s=new Fe([n]);if(ho(r)){const i=ry(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new We(e,0,X.min(),X.min(),X.min(),ct.empty(),0)}static newFoundDocument(e,n,r,s){return new We(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new We(e,2,n,X.min(),X.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new We(e,3,n,X.min(),X.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof We&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new We(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Do{constructor(e,n){this.position=e,this.inclusive=n}}function ff(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Yr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function pf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class No{constructor(e,n="asc"){this.field=e,this.dir=n}}function JA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class sy{}class Se extends sy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QA(e,n,r):n==="array-contains"?new ZA(e,r):n==="in"?new eC(e,r):n==="not-in"?new tC(e,r):n==="array-contains-any"?new nC(e,r):new Se(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new YA(e,r):new XA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Yr(n,this.value)):n!==null&&Cn(this.value)===Cn(n)&&this.matchesComparison(Yr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Tt extends sy{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Tt(e,n)}matches(e){return iy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function iy(t){return t.op==="and"}function oy(t){return KA(t)&&iy(t)}function KA(t){for(const e of t.filters)if(e instanceof Tt)return!1;return!0}function ol(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+Xr(t.value);if(oy(t))return t.filters.map((e=>ol(e))).join(",");{const e=t.filters.map((n=>ol(n))).join(",");return`${t.op}(${e})`}}function ay(t,e){return t instanceof Se?(function(r,s){return s instanceof Se&&r.op===s.op&&r.field.isEqual(s.field)&&Nt(r.value,s.value)})(t,e):t instanceof Tt?(function(r,s){return s instanceof Tt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&ay(o,s.filters[c])),!0):!1})(t,e):void J(19439)}function cy(t){return t instanceof Se?(function(n){return`${n.field.canonicalString()} ${n.op} ${Xr(n.value)}`})(t):t instanceof Tt?(function(n){return n.op.toString()+" {"+n.getFilters().map(cy).join(" ,")+"}"})(t):"Filter"}class QA extends Se{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class YA extends Se{constructor(e,n){super(e,"in",n),this.keys=ly("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class XA extends Se{constructor(e,n){super(e,"not-in",n),this.keys=ly("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function ly(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>W.fromName(r.referenceValue)))}class ZA extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return hu(n)&&ui(n.arrayValue,this.value)}}class eC extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ui(this.value.arrayValue,n)}}class tC extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ui(this.value.arrayValue,n)}}class nC extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>ui(this.value.arrayValue,r)))}}/**
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
 */class rC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function gf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new rC(t,e,n,r,s,i,o)}function fu(t){const e=ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>ol(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),la(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Xr(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Xr(r))).join(",")),e.Te=n}return e.Te}function pu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ay(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pf(t.startAt,e.startAt)&&pf(t.endAt,e.endAt)}function al(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function sC(t,e,n,r,s,i,o,c){return new Ci(t,e,n,r,s,i,o,c)}function da(t){return new Ci(t)}function mf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iC(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function uy(t){return t.collectionGroup!==null}function Xs(t){const e=ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new De(Fe.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new No(i,r))})),n.has(Fe.keyField().canonicalString())||e.Ie.push(new No(Fe.keyField(),r))}return e.Ie}function kt(t){const e=ee(t);return e.Ee||(e.Ee=oC(e,Xs(t))),e.Ee}function oC(t,e){if(t.limitType==="F")return gf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new No(s.field,i)}));const n=t.endAt?new Do(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Do(t.startAt.position,t.startAt.inclusive):null;return gf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function cl(t,e){const n=t.filters.concat([e]);return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ll(t,e,n){return new Ci(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ha(t,e){return pu(kt(t),kt(e))&&t.limitType===e.limitType}function dy(t){return`${fu(kt(t))}|lt:${t.limitType}`}function Or(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>cy(s))).join(", ")}]`),la(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Xr(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Xr(s))).join(",")),`Target(${r})`})(kt(t))}; limitType=${t.limitType})`}function fa(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=ff(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Xs(r),s)||r.endAt&&!(function(o,c,l){const u=ff(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Xs(r),s))})(t,e)}function aC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function hy(t){return(e,n)=>{let r=!1;for(const s of Xs(t)){const i=cC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cC(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Yr(l,u):J(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Km(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=new Ie(W.comparator);function Jt(){return lC}const fy=new Ie(W.comparator);function Hs(...t){let e=fy;for(const n of t)e=e.insert(n.key,n);return e}function py(t){let e=fy;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function tr(){return Zs()}function gy(){return Zs()}function Zs(){return new gr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const uC=new Ie(W.comparator),dC=new De(W.comparator);function ie(...t){let e=dC;for(const n of t)e=e.add(n);return e}const hC=new De(se);function fC(){return hC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Po(e)?"-0":e}}function my(t){return{integerValue:""+t}}function pC(t,e){return FA(e)?my(e):gu(t,e)}/**
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
 */class pa{constructor(){this._=void 0}}function gC(t,e,n){return t instanceof di?(function(s,i){const o={fields:{[Xm]:{stringValue:Ym},[ey]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&du(i)&&(i=ua(i)),i&&(o.fields[Zm]=i),{mapValue:o}})(n,e):t instanceof hi?_y(t,e):t instanceof fi?by(t,e):(function(s,i){const o=yy(s,i),c=yf(o)+yf(s.Ae);return il(o)&&il(s.Ae)?my(c):gu(s.serializer,c)})(t,e)}function mC(t,e,n){return t instanceof hi?_y(t,e):t instanceof fi?by(t,e):n}function yy(t,e){return t instanceof Lo?(function(r){return il(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class di extends pa{}class hi extends pa{constructor(e){super(),this.elements=e}}function _y(t,e){const n=wy(e);for(const r of t.elements)n.some((s=>Nt(s,r)))||n.push(r);return{arrayValue:{values:n}}}class fi extends pa{constructor(e){super(),this.elements=e}}function by(t,e){let n=wy(e);for(const r of t.elements)n=n.filter((s=>!Nt(s,r)));return{arrayValue:{values:n}}}class Lo extends pa{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function yf(t){return Ce(t.integerValue||t.doubleValue)}function wy(t){return hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e,n){this.field=e,this.transform=n}}function _C(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof hi&&s instanceof hi||r instanceof fi&&s instanceof fi?Qr(r.elements,s.elements,Nt):r instanceof Lo&&s instanceof Lo?Nt(r.Ae,s.Ae):r instanceof di&&s instanceof di})(t.transform,e.transform)}class bC{constructor(e,n){this.version=e,this.transformResults=n}}class yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yt}static exists(e){return new yt(void 0,e)}static updateTime(e){return new yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ga{}function Ty(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new mu(t.key,yt.none()):new Ri(t.key,t.data,yt.none());{const n=t.data,r=ct.empty();let s=new De(Fe.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new mr(t.key,r,new pt(s.toArray()),yt.none())}}function wC(t,e,n){t instanceof Ri?(function(s,i,o){const c=s.value.clone(),l=bf(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof mr?(function(s,i,o){if(!fo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=bf(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Iy(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function ei(t,e,n,r){return t instanceof Ri?(function(i,o,c,l){if(!fo(i.precondition,o))return c;const u=i.value.clone(),h=wf(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof mr?(function(i,o,c,l){if(!fo(i.precondition,o))return c;const u=wf(i.fieldTransforms,l,o),h=o.data;return h.setAll(Iy(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(t,e,n,r):(function(i,o,c){return fo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function TC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=yy(r.transform,s||null);i!=null&&(n===null&&(n=ct.empty()),n.set(r.field,i))}return n||null}function _f(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qr(r,s,((i,o)=>_C(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ri extends ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mr extends ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Iy(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function bf(t,e,n){const r=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,mC(o,c,n[s]))}return r}function wf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,gC(i,o,e))}return r}class mu extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IC extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Ty(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ie())}isEqual(e){return this.batchId===e.batchId&&Qr(this.mutations,e.mutations,((n,r)=>_f(n,r)))&&Qr(this.baseMutations,e.baseMutations,((n,r)=>_f(n,r)))}}class yu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return uC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new yu(e,n,r,s)}}/**
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
 */class vC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class AC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,ae;function CC(t){switch(t){case L.OK:return J(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function Ey(t){if(t===void 0)return Wt("GRPC error has no .code"),L.UNKNOWN;switch(t){case ke.OK:return L.OK;case ke.CANCELLED:return L.CANCELLED;case ke.UNKNOWN:return L.UNKNOWN;case ke.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ke.INTERNAL:return L.INTERNAL;case ke.UNAVAILABLE:return L.UNAVAILABLE;case ke.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ke.NOT_FOUND:return L.NOT_FOUND;case ke.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ke.ABORTED:return L.ABORTED;case ke.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ke.DATA_LOSS:return L.DATA_LOSS;default:return J(39323,{code:t})}}(ae=ke||(ke={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RC(){return new TextEncoder}/**
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
 */const kC=new Tn([4294967295,4294967295],0);function Tf(t){const e=RC().encode(t),n=new Um;return n.update(e),new Uint8Array(n.digest())}function If(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tn([n,r],0),new Tn([s,i],0)]}class _u{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Tn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Tn.fromNumber(r)));return s.compare(kC)===1&&(s=new Tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Tf(e),[r,s]=If(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _u(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const n=Tf(e),[r,s]=If(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ki.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ma(X.min(),s,new Ie(se),Jt(),ie())}}class ki{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ki(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class vy{constructor(e,n){this.targetId=e,this.Ce=n}}class Ay{constructor(e,n,r=$e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ef{constructor(){this.ve=0,this.Fe=vf(),this.Me=$e.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J(38017,{changeType:i})}})),new ki(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=vf()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class SC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Jt(),this.He=Yi(),this.Je=Yi(),this.Ze=new Ie(se)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:J(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(al(i))if(r===0){const o=new W(i.path);this.et(n,o,We.newNoDocument(o,X.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=An(r).toUint8Array()}catch(l){if(l instanceof Qm)return Kr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new _u(o,s,i)}catch(l){return Kr(l instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const c=this.ot(o);if(c){if(i.current&&al(c.target)){const l=new W(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,We.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}}));let r=ie();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new ma(e,n,this.Ze,this.je,r);return this.je=Jt(),this.He=Yi(),this.Je=Yi(),this.Ze=new Ie(se),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Ef,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new De(se),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new De(se),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ef),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Yi(){return new Ie(W.comparator)}function vf(){return new Ie(W.comparator)}const PC={asc:"ASCENDING",desc:"DESCENDING"},xC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VC={and:"AND",or:"OR"};class DC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ul(t,e){return t.useProto3Json||la(e)?e:{value:e}}function Mo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NC(t,e){return Mo(t,e.toTimestamp())}function St(t){return de(!!t,49232),X.fromTimestamp((function(n){const r=vn(n);return new be(r.seconds,r.nanos)})(t))}function bu(t,e){return dl(t,e).canonicalString()}function dl(t,e){const n=(function(s){return new ye(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Ry(t){const e=ye.fromString(t);return de(Vy(e),10190,{key:e.toString()}),e}function hl(t,e){return bu(t.databaseId,e.path)}function fc(t,e){const n=Ry(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(Sy(n))}function ky(t,e){return bu(t.databaseId,e)}function LC(t){const e=Ry(t);return e.length===4?ye.emptyPath():Sy(e)}function fl(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sy(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Af(t,e,n){return{name:hl(t,e),fields:n.value.mapValue.fields}}function MC(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(de(h===void 0||typeof h=="string",58123),$e.fromBase64String(h||"")):(de(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),$e.fromUint8Array(h||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const h=u.code===void 0?L.UNKNOWN:Ey(u.code);return new B(h,u.message||"")})(o);n=new Ay(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=fc(t,r.document.name),i=St(r.document.updateTime),o=r.document.createTime?St(r.document.createTime):X.min(),c=new ct({mapValue:{fields:r.document.fields}}),l=We.newFoundDocument(s,i,o,c),u=r.targetIds||[],h=r.removedTargetIds||[];n=new po(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=fc(t,r.document),i=r.readTime?St(r.readTime):X.min(),o=We.newNoDocument(s,i),c=r.removedTargetIds||[];n=new po([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=fc(t,r.document),i=r.removedTargetIds||[];n=new po([],i,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new AC(s,i),c=r.targetId;n=new vy(c,o)}}return n}function OC(t,e){let n;if(e instanceof Ri)n={update:Af(t,e.key,e.value)};else if(e instanceof mu)n={delete:hl(t,e.key)};else if(e instanceof mr)n={update:Af(t,e.key,e.data),updateMask:GC(e.fieldMask)};else{if(!(e instanceof IC))return J(16599,{dt:e.type});n={verify:hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof di)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof hi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Lo)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw J(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:NC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J(27497)})(t,e.precondition)),n}function UC(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?St(s.updateTime):St(i);return o.isEqual(X.min())&&(o=St(i)),new bC(o,s.transformResults||[])})(n,e)))):[]}function FC(t,e){return{documents:[ky(t,e.path)]}}function $C(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ky(t,s);const i=(function(u){if(u.length!==0)return xy(Tt.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(g){return{field:Ur(g.field),direction:zC(g.dir)}})(h)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ul(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function BC(t){let e=LC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){de(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=(function(f){const g=Py(f);return g instanceof Tt&&oy(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(f){return f.map((g=>(function(E){return new No(Fr(E.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(g)))})(n.orderBy));let c=null;n.limit&&(c=(function(f){let g;return g=typeof f=="object"?f.value:f,la(g)?null:g})(n.limit));let l=null;n.startAt&&(l=(function(f){const g=!!f.before,w=f.values||[];return new Do(w,g)})(n.startAt));let u=null;return n.endAt&&(u=(function(f){const g=!f.before,w=f.values||[];return new Do(w,g)})(n.endAt)),sC(e,s,o,i,c,"F",l,u)}function jC(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Py(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return Se.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return Se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return Se.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fr(n.unaryFilter.field);return Se.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Se.create(Fr(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Tt.create(n.compositeFilter.filters.map((r=>Py(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(n.compositeFilter.op))})(t):J(30097,{filter:t})}function zC(t){return PC[t]}function HC(t){return xC[t]}function qC(t){return VC[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Fr(t){return Fe.fromServerFormat(t.fieldPath)}function xy(t){return t instanceof Se?(function(n){if(n.op==="=="){if(hf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(df(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hf(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(df(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:HC(n.op),value:n.value}}})(t):t instanceof Tt?(function(n){const r=n.getFilters().map((s=>xy(s)));return r.length===1?r[0]:{compositeFilter:{op:qC(n.op),filters:r}}})(t):J(54877,{filter:t})}function GC(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Vy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Dy(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n,r,s,i=X.min(),o=X.min(),c=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.yt=e}}function JC(t){const e=BC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ll(e,e.limit,"L"):e}/**
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
 */class KC{constructor(){this.Sn=new QC}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(En.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(En.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class QC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new De(ye.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new De(ye.comparator)).toArray()}}/**
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
 */const Cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ny=41943040;class nt{static withCacheSize(e){return new nt(e,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt.DEFAULT_COLLECTION_PERCENTILE=10,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nt.DEFAULT=new nt(Ny,nt.DEFAULT_COLLECTION_PERCENTILE,nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nt.DISABLED=new nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Rf="LruGarbageCollector",YC=1048576;function kf([t,e],[n,r]){const s=se(t,n);return s===0?se(e,r):s}class XC{constructor(e){this.Pr=e,this.buffer=new De(kf),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();kf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ZC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){j(Rf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){us(n)?j(Rf,"Ignoring IndexedDB error during garbage collection: ",n):await ls(n)}await this.Ar(3e5)}))}}class e2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return M.resolve(ca.ce);const r=new XC(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Cf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cf):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(r=f,c=Date.now(),this.removeTargets(e,r,n)))).next((f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((f=>(u=Date.now(),Mr()<=re.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function t2(t,e){return new e2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.changes=new gr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,We.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class r2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ei(r.mutation,s,pt.empty(),be.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,ie()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=ie()){const s=tr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Hs();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=tr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,ie())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Jt();const o=Zs(),c=(function(){return Zs()})();return n.forEach(((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof mr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ei(h.mutation,u,h.mutation.getFieldMask(),be.now())):o.set(u.key,pt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,h)=>o.set(u,h))),n.forEach(((u,h)=>c.set(u,new r2(h,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=Zs();let s=new Ie(((o,c)=>o-c)),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||pt.empty();h=c.applyToLocalView(u,h),r.set(l,h);const f=(s.get(c.batchId)||ie()).add(l);s=s.insert(c.batchId,f)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,f=gy();h.forEach((g=>{if(!i.has(g)){const w=Ty(n.get(g),r.get(g));w!==null&&f.set(g,w),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return M.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return iC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(tr());let c=ai,l=i;return o.next((u=>M.forEach(u,((h,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),i.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next((g=>{l=l.insert(h,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,ie()))).next((h=>({batchId:c,changes:py(h)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next((r=>{let s=Hs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Hs();return this.indexManager.getCollectionParents(e,i).next((c=>M.forEach(c,(l=>{const u=(function(f,g){return new Ci(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((h=>{h.forEach(((f,g)=>{o=o.insert(f,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,We.newInvalidDocument(h)))}));let c=Hs();return o.forEach(((l,u)=>{const h=i.get(l);h!==void 0&&ei(h.mutation,u,pt.empty(),be.now()),fa(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:St(s.createTime)}})(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:JC(s.bundledQuery),readTime:St(s.readTime)}})(n)),M.resolve()}}/**
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
 */class o2{constructor(){this.overlays=new Ie(W.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=tr();return M.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.bt(e,n,i)})),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=tr(),i=n.length+1,o=new W(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ie(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=tr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=tr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>c.set(u,h))),!(c.size()>=s)););return M.resolve(c)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vC(n,r));let i=this.Lr.get(n);i===void 0&&(i=ie(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class a2{constructor(){this.sessionToken=$e.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.kr=new De(Le.Kr),this.qr=new De(Le.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Le(e,n))}Qr(e,n){e.forEach((r=>this.removeReference(r,n)))}Gr(e){const n=new W(new ye([])),r=new Le(n,e),s=new Le(n,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new W(new ye([])),r=new Le(n,e),s=new Le(n,e+1);let i=ie();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Le(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return W.comparator(e.key,n.key)||se(e.Hr,n.Hr)}static Ur(e,n){return se(e.Hr,n.Hr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new De(Le.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new EC(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Le(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?uu:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(se);return n.forEach((s=>{const i=new Le(s,0),o=new Le(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Le(new W(i),0);let c=new De(se);return this.Jr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),M.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,(s=>{const i=new Le(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,n){const r=new Le(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.ti=e,this.docs=(function(){return new Ie(W.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():We.newInvalidDocument(n))}getEntries(e,n){let r=Jt();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():We.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Jt();const o=n.path,c=new W(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||LA(NA(h),r)<=0||(s.has(h.key)||fa(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J(9500)}ni(e,n){return M.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new u2(this)}getSize(e){return M.resolve(this.size)}}class u2 extends n2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.persistence=e,this.ri=new gr((n=>fu(n)),pu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.ii=0,this.si=new wu,this.targetCount=0,this.oi=Zr._r()}forEachTarget(e,n){return this.ri.forEach(((r,s)=>n(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Zr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){this._i={},this.overlays={},this.ai=new ca(0),this.ui=!1,this.ui=!0,this.ci=new a2,this.referenceDelegate=e(this),this.li=new d2(this),this.indexManager=new KC,this.remoteDocumentCache=(function(s){return new l2(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new WC(n),this.Pi=new i2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new o2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new c2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new h2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return M.or(Object.values(this._i).map((r=>()=>r.containsKey(e,n))))}}class h2 extends OA{constructor(e){super(),this.currentSequenceNumber=e}}class Tu{constructor(e){this.persistence=e,this.Ri=new wu,this.Ai=null}static Vi(e){return new Tu(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,(r=>{const s=W.fromPath(r);return this.mi(e,s).next((i=>{i||n.removeEntry(s,X.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Oo{constructor(e,n){this.persistence=e,this.fi=new gr((r=>$A(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=t2(this,n)}static Vi(e,n){return new Oo(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}pr(e){let n=0;return this.mr(e,(r=>{n++})).next((()=>n))}mr(e,n){return M.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?M.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,X.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=uo(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Iu(e,n.fromCache,r,s)}}/**
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
 */class f2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class p2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return tE()?8:UA(Qe())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new f2;return this.ys(e,n,o).next((c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)}))})).next((()=>i.result))}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Mr()<=re.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Or(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Mr()<=re.DEBUG&&j("QueryEngine","Query:",Or(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Mr()<=re.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Or(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kt(n))):M.resolve())}gs(e,n){if(mf(n))return M.resolve(null);let r=kt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=ll(n,null,"F"),r=kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ie(...i);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(n,c);return this.Ss(n,u,o,l.readTime)?this.gs(e,ll(n,null,"F")):this.Ds(e,u,n,l)}))))})))))}ps(e,n,r,s){return mf(n)||s.isEqual(X.min())?M.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(Mr()<=re.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(n)),this.Ds(e,o,n,DA(s,ai)).next((c=>c)))}))}bs(e,n){let r=new De(hy(e));return n.forEach(((s,i)=>{fa(e,i)&&(r=r.add(i))})),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Mr()<=re.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Or(n)),this.fs.getDocumentsMatchingQuery(e,n,En.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="LocalStore",g2=3e8;class m2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ie(se),this.Fs=new gr((i=>fu(i)),pu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new s2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function y2(t,e,n,r){return new m2(t,e,n,r)}async function My(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=ie();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function _2(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,h){const f=u.batch,g=f.keys();let w=M.resolve();return g.forEach((E=>{w=w.next((()=>h.getEntry(l,E))).next((v=>{const N=u.docVersions.get(E);de(N!==null,48541),v.version.compareTo(N)<0&&(f.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),h.addEntry(v)))}))})),w.next((()=>c.mutationQueue.removeMutationBatch(l,f)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=ie();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function Oy(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function b2(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach(((h,f)=>{const g=s.get(f);if(!g)return;c.push(n.li.removeMatchingKeys(i,h.removedDocuments,f).next((()=>n.li.addMatchingKeys(i,h.addedDocuments,f))));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken($e.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(h.resumeToken,r)),s=s.insert(f,w),(function(v,N,D){return v.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=g2?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(g,w,h)&&c.push(n.li.updateTargetData(i,w))}));let l=Jt(),u=ie();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))})),c.push(w2(i,o,e.documentUpdates).next((h=>{l=h.Bs,u=h.Ls}))),!r.isEqual(X.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next((f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(h)}return M.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.vs=s,i)))}function w2(t,e,n){let r=ie(),s=ie();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Jt();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):j(Eu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function T2(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=uu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function I2(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.li.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next((o=>(s=new gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r}))}async function pl(t,e,n){const r=ee(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!us(o))throw o;j(Eu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Sf(t,e,n){const r=ee(t);let s=X.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const f=ee(l),g=f.Fs.get(h);return g!==void 0?M.resolve(f.vs.get(g)):f.li.getTargetData(u,h)})(r,o,kt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:ie()))).next((c=>(E2(r,aC(e),c),{documents:c,ks:i})))))}function E2(t,e,n){let r=t.Ms.get(e)||X.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Ms.set(e,r)}class Pf{constructor(){this.activeTargetIds=fC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class v2{constructor(){this.vo=new Pf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Pf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class A2{Mo(e){}shutdown(){}}/**
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
 */const xf="ConnectivityMonitor";class Vf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){j(xf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){j(xf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xi=null;function gl(){return Xi===null?Xi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xi++,"0x"+Xi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="RestConnection",C2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class R2{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===xo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=gl(),c=this.Qo(e,n.toUriEncodedString());j(pc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,i);const{host:u}=new URL(c),h=ss(u);return this.zo(e,c,l,r,h).then((f=>(j(pc,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw Kr(pc,`RPC '${e}' ${o} failed with error: `,f,"url: ",c,"request:",r),f}))}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+cs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,n){const r=C2[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection",Ls=(t,e,n)=>{t.listen(e,(r=>{try{n(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class qr extends R2{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qr.c_){const e=jm();Ls(e,Bm.STAT_EVENT,(n=>{n.stat===nl.PROXY?j(ze,"STAT_EVENT: detected buffering proxy"):n.stat===nl.NOPROXY&&j(ze,"STAT_EVENT: detected no buffering proxy")})),qr.c_=!0}}zo(e,n,r,s,i){const o=gl();return new Promise(((c,l)=>{const u=new Fm;u.setWithCredentials(!0),u.listenOnce($m.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case lo.NO_ERROR:const f=u.getResponseJson();j(ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),c(f);break;case lo.TIMEOUT:j(ze,`RPC '${e}' ${o} timed out`),l(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case lo.HTTP_ERROR:const g=u.getStatus();if(j(ze,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const E=w==null?void 0:w.error;if(E&&E.status&&E.message){const v=(function(D){const x=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(x)>=0?x:L.UNKNOWN})(E.status);l(new B(v,E.message))}else l(new B(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new B(L.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{j(ze,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(s);j(ze,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)}))}T_(e,n,r){const s=gl(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");j(ze,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);this.I_(h);let f=!1,g=!1;const w=new k2({Ho:E=>{g?j(ze,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(f||(j(ze,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),j(ze,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},Jo:()=>h.close()});return Ls(h,zs.EventType.OPEN,(()=>{g||(j(ze,`RPC '${e}' stream ${s} transport opened.`),w.i_())})),Ls(h,zs.EventType.CLOSE,(()=>{g||(g=!0,j(ze,`RPC '${e}' stream ${s} transport closed`),w.o_(),this.E_(h))})),Ls(h,zs.EventType.ERROR,(E=>{g||(g=!0,Kr(ze,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),w.o_(new B(L.UNAVAILABLE,"The operation could not be completed")))})),Ls(h,zs.EventType.MESSAGE,(E=>{var v;if(!g){const N=E.data[0];de(!!N,16349);const D=N,x=(D==null?void 0:D.error)||((v=D[0])==null?void 0:v.error);if(x){j(ze,`RPC '${e}' stream ${s} received error:`,x);const R=x.status;let F=(function(T){const _=ke[T];if(_!==void 0)return Ey(_)})(R),P=x.message;F===void 0&&(F=L.INTERNAL,P="Unknown error status: "+R+" with message "+x.message),g=!0,w.o_(new B(F,P)),h.close()}else j(ze,`RPC '${e}' stream ${s} received:`,N),w.__(N)}})),qr.u_(),setTimeout((()=>{w.s_()}),0),w}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return zm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t){return new qr(t)}function gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t){return new DC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr.c_=!1;class Uy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="PersistentStream";class Fy{constructor(e,n,r,s,i,o,c,l){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Uy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return j(Df,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(j(Df,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class P2 extends Fy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=MC(this.serializer,e),r=(function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?St(o.readTime):X.min()})(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=fl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=al(l)?{documents:FC(i,l)}:{query:$C(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Cy(i,o.resumeToken);const u=ul(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(X.min())>0){c.readTime=Mo(i,o.snapshotVersion.toTimestamp());const u=ul(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=jC(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=fl(this.serializer),n.removeTarget=e,this.K_(n)}}class x2 extends Fy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=UC(e.writeResults,e.commitTime),r=St(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=fl(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>OC(this.serializer,r)))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{}class D2 extends V2{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,dl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(L.UNKNOWN,i.toString())}))}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,dl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(L.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function N2(t,e,n,r){return new D2(t,e,n,r)}class L2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Wt(n),this.aa=!1):j("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="RemoteStore";class M2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{yr(this)&&(j(ur,"Restarting streams for network reachability change."),await(async function(l){const u=ee(l);u.Ea.add(4),await Si(u),u.Va.set("Unknown"),u.Ea.delete(4),await _a(u)})(this))}))})),this.Va=new L2(r,s)}}async function _a(t){if(yr(t))for(const e of t.Ra)await e(!0)}async function Si(t){for(const e of t.Ra)await e(!1)}function $y(t,e){const n=ee(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Ru(n)?Cu(n):ds(n).O_()&&Au(n,e))}function vu(t,e){const n=ee(t),r=ds(n);n.Ia.delete(e),r.O_()&&By(n,e),n.Ia.size===0&&(r.O_()?r.L_():yr(n)&&n.Va.set("Unknown"))}function Au(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).Z_(e)}function By(t,e){t.da.$e(e),ds(t).X_(e)}function Cu(t){t.da=new SC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.Va.ua()}function Ru(t){return yr(t)&&!ds(t).x_()&&t.Ia.size>0}function yr(t){return ee(t).Ea.size===0}function jy(t){t.da=void 0}async function O2(t){t.Va.set("Online")}async function U2(t){t.Ia.forEach(((e,n)=>{Au(t,e)}))}async function F2(t,e){jy(t),Ru(t)?(t.Va.ha(e),Cu(t)):t.Va.set("Unknown")}async function $2(t,e,n){if(t.Va.set("Online"),e instanceof Ay&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(t,e)}catch(r){j(ur,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uo(t,r)}else if(e instanceof po?t.da.Xe(e):e instanceof vy?t.da.st(e):t.da.tt(e),!n.isEqual(X.min()))try{const r=await Oy(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const h=i.Ia.get(l);if(!h)return;i.Ia.set(l,h.withResumeToken($e.EMPTY_BYTE_STRING,h.snapshotVersion)),By(i,l);const f=new gn(h.target,l,u,h.sequenceNumber);Au(i,f)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){j(ur,"Failed to raise snapshot:",r),await Uo(t,r)}}async function Uo(t,e,n){if(!us(e))throw e;t.Ea.add(1),await Si(t),t.Va.set("Offline"),n||(n=()=>Oy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{j(ur,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await _a(t)}))}function zy(t,e){return e().catch((n=>Uo(t,n,e)))}async function ba(t){const e=ee(t),n=Rn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:uu;for(;B2(e);)try{const s=await T2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,j2(e,s)}catch(s){await Uo(e,s)}Hy(e)&&qy(e)}function B2(t){return yr(t)&&t.Ta.length<10}function j2(t,e){t.Ta.push(e);const n=Rn(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Hy(t){return yr(t)&&!Rn(t).x_()&&t.Ta.length>0}function qy(t){Rn(t).start()}async function z2(t){Rn(t).ra()}async function H2(t){const e=Rn(t);for(const n of t.Ta)e.ea(n.mutations)}async function q2(t,e,n){const r=t.Ta.shift(),s=yu.from(r,e,n);await zy(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ba(t)}async function G2(t,e){e&&Rn(t).Y_&&await(async function(r,s){if((function(o){return CC(o)&&o!==L.ABORTED})(s.code)){const i=r.Ta.shift();Rn(r).B_(),await zy(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await ba(r)}})(t,e),Hy(t)&&qy(t)}async function Nf(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),j(ur,"RemoteStore received new credentials");const r=yr(n);n.Ea.add(3),await Si(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await _a(n)}async function W2(t,e){const n=ee(t);e?(n.Ea.delete(2),await _a(n)):e||(n.Ea.add(2),await Si(n),n.Va.set("Unknown"))}function ds(t){return t.ma||(t.ma=(function(n,r,s){const i=ee(n);return i.sa(),new P2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:O2.bind(null,t),Yo:U2.bind(null,t),t_:F2.bind(null,t),J_:$2.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),Ru(t)?Cu(t):t.Va.set("Unknown")):(await t.ma.stop(),jy(t))}))),t.ma}function Rn(t){return t.fa||(t.fa=(function(n,r,s){const i=ee(n);return i.sa(),new x2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:z2.bind(null,t),t_:G2.bind(null,t),ta:H2.bind(null,t),na:q2.bind(null,t)}),t.Ra.push((async e=>{e?(t.fa.B_(),await ba(t)):(await t.fa.stop(),t.Ta.length>0&&(j(ur,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new ku(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Su(t,e){if(Wt("AsyncQueue",`${e}: ${t}`),us(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{static emptySet(e){return new Gr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Hs(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.ga=new Ie(W.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class es{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new es(e,n,Gr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class K2{constructor(){this.queries=Mf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ee(n),i=s.queries;s.queries=Mf(),i.forEach(((o,c)=>{for(const l of c.ba)l.onError(r)}))})(this,new B(L.ABORTED,"Firestore shutting down"))}}function Mf(){return new gr((t=>dy(t)),ha)}async function Pu(t,e){const n=ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new J2,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Su(o,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Vu(n)}async function xu(t,e){const n=ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Q2(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.ba)c.Fa(s)&&(r=!0);o.wa=s}}r&&Vu(n)}function Y2(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function Vu(t){t.Ca.forEach((e=>{e.next()}))}var ml,Of;(Of=ml||(ml={})).Ma="default",Of.Cache="cache";class Du{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ml.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.key=e}}class Wy{constructor(e){this.key=e}}class X2{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ie(),this.mutatedKeys=ie(),this.eu=hy(e),this.tu=new Gr(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Lf,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((h,f)=>{const g=s.get(h),w=fa(this.query,f)?f:null,E=!!g&&this.mutatedKeys.has(g.key),v=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;g&&w?g.data.isEqual(w.data)?E!==v&&(r.track({type:3,doc:w}),N=!0):this.su(g,w)||(r.track({type:2,doc:w}),N=!0,(l&&this.eu(w,l)>0||u&&this.eu(w,u)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),N=!0):g&&!w&&(r.track({type:1,doc:g}),N=!0,(l||u)&&(c=!0)),N&&(w?(o=o.add(w),i=v?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,f)=>(function(w,E){const v=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:N})}};return v(w)-v(E)})(h.type,f.type)||this.eu(h.doc,f.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new es(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Lf,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const n=[];return e.forEach((r=>{this.Ya.has(r)||n.push(new Wy(r))})),this.Ya.forEach((r=>{e.has(r)||n.push(new Gy(r))})),n}cu(e){this.Za=e.ks,this.Ya=ie();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return es.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Nu="SyncEngine";class Z2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class eR{constructor(e){this.key=e,this.hu=!1}}class tR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new gr((c=>dy(c)),ha),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ie(W.comparator),this.Au=new Map,this.Vu=new wu,this.du={},this.mu=new Map,this.fu=Zr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function nR(t,e,n=!0){const r=Zy(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Jy(r,e,n,!0),s}async function rR(t,e){const n=Zy(t);await Jy(n,e,!0,!1)}async function Jy(t,e,n,r){const s=await I2(t.localStore,kt(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await sR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&$y(t.remoteStore,s),c}async function sR(t,e,n,r,s){t.pu=(f,g,w)=>(async function(v,N,D,x){let R=N.view.ru(D);R.Ss&&(R=await Sf(v.localStore,N.query,!1).then((({documents:T})=>N.view.ru(T,R))));const F=x&&x.targetChanges.get(N.targetId),P=x&&x.targetMismatches.get(N.targetId)!=null,U=N.view.applyChanges(R,v.isPrimaryClient,F,P);return Ff(v,N.targetId,U.au),U.snapshot})(t,f,g,w);const i=await Sf(t.localStore,e,!0),o=new X2(e,i.ks),c=o.ru(i.documents),l=ki.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Ff(t,n,u.au);const h=new Z2(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function iR(t,e,n){const r=ee(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!ha(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&vu(r.remoteStore,s.targetId),yl(r,s.targetId)})).catch(ls)):(yl(r,s.targetId),await pl(r.localStore,s.targetId,!0))}async function oR(t,e){const n=ee(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),vu(n.remoteStore,r.targetId))}async function aR(t,e,n){const r=pR(t);try{const s=await(function(o,c){const l=ee(o),u=be.now(),h=c.reduce(((w,E)=>w.add(E.key)),ie());let f,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(w=>{let E=Jt(),v=ie();return l.xs.getEntries(w,h).next((N=>{E=N,E.forEach(((D,x)=>{x.isValidDocument()||(v=v.add(D))}))})).next((()=>l.localDocuments.getOverlayedDocuments(w,E))).next((N=>{f=N;const D=[];for(const x of c){const R=TC(x,f.get(x.key).overlayedDocument);R!=null&&D.push(new mr(x.key,R,ry(R.value.mapValue),yt.exists(!0)))}return l.mutationQueue.addMutationBatch(w,u,D,c)})).next((N=>{g=N;const D=N.applyToLocalDocumentSet(f,v);return l.documentOverlayCache.saveOverlays(w,N.batchId,D)}))})).then((()=>({batchId:g.batchId,changes:py(f)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.du[o.currentUser.toKey()];u||(u=new Ie(se)),u=u.insert(c,l),o.du[o.currentUser.toKey()]=u})(r,s.batchId,n),await Pi(r,s.changes),await ba(r.remoteStore)}catch(s){const i=Su(s,"Failed to persist write");n.reject(i)}}async function Ky(t,e){const n=ee(t);try{const r=await b2(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?de(o.hu,14607):s.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))})),await Pi(n,r,e)}catch(r){await ls(r)}}function Uf(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ee(o);l.onlineState=c;let u=!1;l.queries.forEach(((h,f)=>{for(const g of f.ba)g.va(c)&&(u=!0)})),u&&Vu(l)})(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cR(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ie(W.comparator);o=o.insert(i,We.newNoDocument(i,X.min()));const c=ie().add(i),l=new ma(X.min(),new Map,new Ie(se),o,c);await Ky(r,l),r.Ru=r.Ru.remove(i),r.Au.delete(e),Lu(r)}else await pl(r.localStore,e,!1).then((()=>yl(r,e,n))).catch(ls)}async function lR(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await _2(n.localStore,e);Yy(n,r,null),Qy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pi(n,s)}catch(s){await ls(s)}}async function uR(t,e,n){const r=ee(t);try{const s=await(function(o,c){const l=ee(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next((f=>(de(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(r.localStore,e);Yy(r,e,n),Qy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pi(r,s)}catch(s){await ls(s)}}function Qy(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Yy(t,e,n){const r=ee(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function yl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((r=>{t.Vu.containsKey(r)||Xy(t,r)}))}function Xy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(vu(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Lu(t))}function Ff(t,e,n){for(const r of n)r instanceof Gy?(t.Vu.addReference(r.key,e),dR(t,r)):r instanceof Wy?(j(Nu,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Xy(t,r.key)):J(19791,{wu:r})}function dR(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(j(Nu,"New document in limbo: "+n),t.Eu.add(r),Lu(t))}function Lu(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new W(ye.fromString(e)),r=t.fu.next();t.Au.set(r,new eR(n)),t.Ru=t.Ru.insert(n,r),$y(t.remoteStore,new gn(kt(da(n.path)),r,"TargetPurposeLimboResolution",ca.ce))}}async function Pi(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{o.push(r.pu(l,e,n).then((u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Iu.Es(l.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.J_(s),await(async function(l,u){const h=ee(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>M.forEach(u,(g=>M.forEach(g.Ts,(w=>h.persistence.referenceDelegate.addReference(f,g.targetId,w))).next((()=>M.forEach(g.Is,(w=>h.persistence.referenceDelegate.removeReference(f,g.targetId,w)))))))))}catch(f){if(!us(f))throw f;j(Eu,"Failed to update sequence numbers: "+f)}for(const f of u){const g=f.targetId;if(!f.fromCache){const w=h.vs.get(g),E=w.snapshotVersion,v=w.withLastLimboFreeSnapshotVersion(E);h.vs=h.vs.insert(g,v)}}})(r.localStore,i))}async function hR(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){j(Nu,"User change. New user:",e.toKey());const r=await My(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new B(L.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pi(n,r.Ns)}}function fR(t,e){const n=ee(t),r=n.Au.get(e);if(r&&r.hu)return ie().add(r.key);{let s=ie();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Zy(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ky.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cR.bind(null,e),e.Pu.J_=Q2.bind(null,e.eventManager),e.Pu.yu=Y2.bind(null,e.eventManager),e}function pR(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=lR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=uR.bind(null,e),e}class Fo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ya(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return y2(this.persistence,new p2,e.initialUser,this.serializer)}Cu(e){return new Ly(Tu.Vi,this.serializer)}Du(e){return new v2}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fo.provider={build:()=>new Fo};class gR extends Fo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){de(this.persistence.referenceDelegate instanceof Oo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ZC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?nt.withCacheSize(this.cacheSizeBytes):nt.DEFAULT;return new Ly((r=>Oo.Vi(r,n)),this.serializer)}}class _l{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hR.bind(null,this.syncEngine),await W2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new K2})()}createDatastore(e){const n=ya(e.databaseInfo.databaseId),r=S2(e.databaseInfo);return N2(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new M2(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Uf(this.syncEngine,n,0)),(function(){return Vf.v()?new Vf:new A2})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,h){const f=new tR(s,i,o,c,l,u);return h&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=ee(s);j(ur,"RemoteStore shutting down."),i.Ea.add(5),await Si(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}_l.provider={build:()=>new _l};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Wt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="FirestoreClient";class mR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Ge.UNAUTHENTICATED,this.clientId=lu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{j(kn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(j(kn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Su(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function mc(t,e){t.asyncQueue.verifyOperationInProgress(),j(kn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await My(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function $f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yR(t);j(kn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Nf(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Nf(e.remoteStore,s))),t._onlineComponents=e}async function yR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j(kn,"Using user provided OfflineComponentProvider");try{await mc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Kr("Error using user provided cache. Falling back to memory cache: "+n),await mc(t,new Fo)}}else j(kn,"Using default OfflineComponentProvider"),await mc(t,new gR(void 0));return t._offlineComponents}async function e_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j(kn,"Using user provided OnlineComponentProvider"),await $f(t,t._uninitializedComponentsProvider._online)):(j(kn,"Using default OnlineComponentProvider"),await $f(t,new _l))),t._onlineComponents}function _R(t){return e_(t).then((e=>e.syncEngine))}async function $o(t){const e=await e_(t),n=e.eventManager;return n.onListen=nR.bind(null,e.syncEngine),n.onUnlisten=iR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=rR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=oR.bind(null,e.syncEngine),n}function bR(t,e,n,r){const s=new Mu(r),i=new Du(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>Pu(await $o(t),i))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>xu(await $o(t),i)))}}function wR(t,e,n={}){const r=new zt;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const h=new Mu({next:g=>{h.Nu(),o.enqueueAndForget((()=>xu(i,f)));const w=g.docs.has(c);!w&&g.fromCache?u.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Du(da(c.path),h,{includeMetadataChanges:!0,Ka:!0});return Pu(i,f)})(await $o(t),t.asyncQueue,e,n,r))),r.promise}function TR(t,e,n={}){const r=new zt;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const h=new Mu({next:g=>{h.Nu(),o.enqueueAndForget((()=>xu(i,f))),g.fromCache&&l.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),f=new Du(c,h,{includeMetadataChanges:!0,Ka:!0});return Pu(i,f)})(await $o(t),t.asyncQueue,e,n,r))),r.promise}function IR(t,e){const n=new zt;return t.asyncQueue.enqueueAndForget((async()=>aR(await _R(t),e,n))),n.promise}/**
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
 */function t_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER="ComponentProvider",Bf=new Map;function vR(t,e,n,r,s){return new zA(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,t_(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="firestore.googleapis.com",jf=!0;class zf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=n_,this.ssl=jf}else this.host=e.host,this.ssl=e.ssl??jf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Ny;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YC)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=t_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new IA;switch(r.type){case"firstParty":return new CA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Bf.get(n);r&&(j(ER,"Removing Datastore"),Bf.delete(n),r.terminate())})(this),Promise.resolve()}}function AR(t,e,n,r={}){var u;t=ut(t,wa);const s=ss(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Qg(`https://${c}`),Yg("Firestore",!0)),i.host!==n_&&i.host!==c&&Kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!or(l,o)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Ge.MOCK_USER;else{h=GI(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ge(g)}t._authCredentials=new EA(new qm(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class Re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ai(n,Re._jsonSchema))return new Re(e,r||null,new W(ye.fromString(n.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:Pe("string",Re._jsonSchemaVersion),referencePath:Pe("string")};class In extends _r{constructor(e,n,r){super(e,n,da(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new W(e))}withConverter(e){return new In(this.firestore,e,this._path)}}function hs(t,e,...n){if(t=Ye(t),Gm("collection","path",e),t instanceof wa){const r=ye.fromString(e,...n);return tf(r),new In(t,null,r)}{if(!(t instanceof Re||t instanceof In))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return tf(r),new In(t.firestore,null,r)}}function Yt(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=lu.newId()),Gm("doc","path",e),t instanceof wa){const r=ye.fromString(e,...n);return ef(r),new Re(t,null,new W(r))}{if(!(t instanceof Re||t instanceof In))throw new B(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return ef(r),new Re(t.firestore,t instanceof In?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="AsyncQueue";class qf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Uy(this,"async_queue_retry"),this._c=()=>{const r=gc();r&&j(Hf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=gc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new zt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!us(e))throw e;j(Hf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Wt("INTERNAL UNHANDLED ERROR: ",Gf(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=ku.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:Gf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Gf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Sn extends wa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new qf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qf(e),this._firestoreClient=void 0,await e}}}function CR(t,e){const n=typeof t=="object"?t:tm(),r=typeof t=="string"?t:xo,s=Ql(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=HI("firestore");i&&AR(s,...i)}return s}function Ta(t){if(t._terminated)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||RR(t),t._firestoreClient}function RR(t){var r,s,i,o;const e=t._freezeSettings(),n=vR(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new mR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lt($e.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new lt($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ai(e,lt._jsonSchema))return lt.fromBase64String(e.bytes)}}lt._jsonSchemaVersion="firestore/bytes/1.0",lt._jsonSchema={type:Pe("string",lt._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pt._jsonSchemaVersion}}static fromJSON(e){if(Ai(e,Pt._jsonSchema))return new Pt(e.latitude,e.longitude)}}Pt._jsonSchemaVersion="firestore/geoPoint/1.0",Pt._jsonSchema={type:Pe("string",Pt._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
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
 */class _t{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ai(e,_t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new _t(e.vectorValues);throw new B(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_t._jsonSchemaVersion="firestore/vectorValue/1.0",_t._jsonSchema={type:Pe("string",_t._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=/^__.*__$/;class SR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ri(e,this.data,n,this.fieldTransforms)}}function s_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:t})}}class Uu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Uu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Bo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(s_(this.dataSource)&&kR.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class PR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ya(e)}createContext(e,n,r,s=!1){return new Uu({dataSource:e,methodName:n,targetDoc:r,path:Fe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fu(t){const e=t._freezeSettings(),n=ya(t._databaseId);return new PR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function i_(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);c_("Data must be an object, but it was:",o,r);const c=o_(r,o);let l,u;if(i.merge)l=new pt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const g=Ia(e,f,n);if(!o.contains(g))throw new B(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);NR(h,g)||h.push(g)}l=new pt(h),u=o.fieldTransforms.filter((f=>l.covers(f.field)))}else l=null,u=o.fieldTransforms;return new SR(new ct(c),l,u)}class $u extends Ou{_toFieldTransform(e){return new yC(e.path,new di)}isEqual(e){return e instanceof $u}}function xR(t,e,n,r=!1){return Bu(n,t.createContext(r?4:3,e))}function Bu(t,e){if(a_(t=Ye(t)))return c_("Unsupported field value:",e,t),o_(t,e);if(t instanceof Ou)return(function(r,s){if(!s_(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Bu(c,s.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=be.fromDate(r);return{timestampValue:Mo(s.serializer,i)}}if(r instanceof be){const i=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mo(s.serializer,i)}}if(r instanceof Pt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof lt)return{bytesValue:Cy(s.serializer,r._byteString)};if(r instanceof Re){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _t)return(function(o,c){const l=o instanceof _t?o.toArray():o;return{mapValue:{fields:{[ty]:{stringValue:ny},[Vo]:{arrayValue:{values:l.map((h=>{if(typeof h!="number")throw c.createError("VectorValues must only contain numeric values.");return gu(c.serializer,h)}))}}}}}})(r,s);if(Dy(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${aa(r)}`)})(t,e)}function o_(t,e){const n={};return Km(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(t,((r,s)=>{const i=Bu(s,e.childContextForField(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function a_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Pt||t instanceof lt||t instanceof Re||t instanceof Ou||t instanceof _t||Dy(t))}function c_(t,e,n){if(!a_(n)||!Wm(n)){const r=aa(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Ia(t,e,n){if((e=Ye(e))instanceof r_)return e._internalPath;if(typeof e=="string")return DR(t,e);throw Bo("Field path arguments must be of type string or ",t,!1,void 0,n)}const VR=new RegExp("[~\\*/\\[\\]]");function DR(t,e,n){if(e.search(VR)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new r_(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new B(L.INVALID_ARGUMENT,c+t+l)}function NR(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{convertValue(e,n="none"){switch(Cn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(An(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return pr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Vo].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>Ce(o.doubleValue)));return new _t(n)}convertGeoPoint(e){return new Pt(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ua(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const n=vn(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);de(Vy(r),9688,{name:e});const s=new li(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||Wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class ju extends LR{constructor(e){super(),this.firestore=e}convertBytes(e){return new lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,n)}}function xe(){return new $u("serverTimestamp")}const Wf="@firebase/firestore",Jf="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new MR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ia("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class MR extends l_{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zu{}class OR extends zu{}function Ea(t,e,...n){let r=[];e instanceof zu&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Hu)).length,c=i.filter((l=>l instanceof va)).length;if(o>1||o>0&&c>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class va extends OR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new va(e,n,r)}_apply(e){const n=this._parse(e);return d_(e._query,n),new _r(e.firestore,e.converter,cl(e._query,n))}_parse(e){const n=Fu(e.firestore);return(function(i,o,c,l,u,h,f){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Yf(f,h);const E=[];for(const v of f)E.push(Qf(l,i,v));g={arrayValue:{values:E}}}else g=Qf(l,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Yf(f,h),g=xR(c,o,f,h==="in"||h==="not-in");return Se.create(u,h,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Aa(t,e,n){const r=e,s=Ia("where",t);return va._create(s,r,n)}class Hu extends zu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Hu(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Tt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)d_(o,l),o=cl(o,l)})(e._query,n),new _r(e.firestore,e.converter,cl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Qf(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!uy(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!W.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return uf(t,new W(r))}if(n instanceof Re)return uf(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${aa(n)}.`)}function Yf(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function d_(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function h_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Gs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rr extends l_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ia("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=rr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",rr._jsonSchema={type:Pe("string",rr._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class go extends rr{data(e={}){return super.data(e)}}class sr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Gs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new go(this._firestore,this._userDataWriter,r.key,r,new Gs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new go(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Gs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:UR(c.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=sr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=lu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function UR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
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
 */function fs(t){t=ut(t,Re);const e=ut(t.firestore,Sn),n=Ta(e);return wR(n,t._key).then((r=>f_(e,t,r)))}function ps(t){t=ut(t,_r);const e=ut(t.firestore,Sn),n=Ta(e),r=new ju(e);return u_(t._query),TR(n,t._query).then((s=>new sr(e,r,t,s)))}function It(t,e,n){t=ut(t,Re);const r=ut(t.firestore,Sn),s=h_(t.converter,e,n),i=Fu(r);return Gu(r,[i_(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,yt.none())])}function gs(t){return Gu(ut(t.firestore,Sn),[new mu(t._key,yt.none())])}function qu(t,e){const n=ut(t.firestore,Sn),r=Yt(t),s=h_(t.converter,e),i=Fu(t.firestore);return Gu(n,[i_(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,yt.exists(!1))]).then((()=>r))}function Xt(t,...e){var u,h,f;t=Ye(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Kf(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Kf(e[r])){const g=e[r];e[r]=(u=g.next)==null?void 0:u.bind(g),e[r+1]=(h=g.error)==null?void 0:h.bind(g),e[r+2]=(f=g.complete)==null?void 0:f.bind(g)}let i,o,c;if(t instanceof Re)o=ut(t.firestore,Sn),c=da(t._key.path),i={next:g=>{e[r]&&e[r](f_(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=ut(t,_r);o=ut(g.firestore,Sn),c=g._query;const w=new ju(o);i={next:E=>{e[r]&&e[r](new sr(o,w,g,E))},error:e[r+1],complete:e[r+2]},u_(t._query)}const l=Ta(o);return bR(l,c,s,i)}function Gu(t,e){const n=Ta(t);return IR(n,e)}function f_(t,e,n){const r=n.docs.get(e._key),s=new ju(t);return new rr(t,s,e._key,r,new Gs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){TA(is),Wr(new ar("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Sn(new vA(r.getProvider("auth-internal")),new RA(o,r.getProvider("app-check-internal")),HA(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),bn(Wf,Jf,e),bn(Wf,Jf,"esm2020")})();const FR={apiKey:"AIzaSyCvK7ounDvKzgKGHK30uCFqDUbqZkoOGJc",authDomain:"cardy-hardy.firebaseapp.com",projectId:"cardy-hardy",storageBucket:"cardy-hardy.firebasestorage.app",messagingSenderId:"756160918063",appId:"1:756160918063:web:830975f45634054dfe8cda",measurementId:"G-MXM77YZD95"};let yc=null,_c=null,bc=null,wc=null;const p_=()=>(yc||(yc=em(FR)),yc),ts=()=>(_c||(_c=bA(p_())),_c),Xf=()=>(bc||(bc=new $t),bc),rt=()=>(wc||(wc=CR(p_())),wc),g_=()=>Yt(rt(),"admins","list"),m_=()=>Yt(rt(),"config","site"),Wu=t=>Yt(rt(),"users",t),y_=()=>hs(rt(),"users"),__=()=>hs(rt(),"games"),jo=t=>Yt(rt(),"games",t),Ju=()=>hs(rt(),"manufacturers"),b_=t=>Yt(rt(),"manufacturers",t),Ku=()=>hs(rt(),"gameRatings"),bl=t=>Yt(rt(),"gameRatings",t),Ca=()=>hs(rt(),"currentGames"),w_=t=>Yt(rt(),"currentGames",t),Ra=()=>hs(rt(),"pastOwnedGames"),T_=t=>Yt(rt(),"pastOwnedGames",t),wl=(t="")=>t.trim().toLowerCase(),$R=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),BR=async()=>{const t=[{key:"indexedDB",value:Vm},{key:"local",value:Cm},{key:"session",value:su}];let e=null;for(const n of t)try{return await iv(ts(),n.value),{persistence:n.key,error:null}}catch(r){e=r,console.warn(`Failed to set ${n.key} persistence`,r)}return{persistence:"none",error:e}},jR=async()=>{let t=null,e=null;try{e=await Lv(ts())}catch(r){t=r,console.error("Firebase redirect sign-in failed",r)}const n=await BR();return{redirectError:t,redirectResult:e,persistence:n}},Qu=async()=>{try{return await Rv(ts(),Xf())}catch(t){if(!$R())throw t;return console.warn("Popup sign-in failed on iOS, falling back to redirect",t),Dv(ts(),Xf())}},dt=()=>(console.log("start signout"),lv(ts()).then(()=>{console.log("signout completed")})),zR=t=>cv(ts(),t),I_=async()=>{const t=await fs(g_());if(!t.exists())return[];const e=t.data();return Array.isArray(e.items)?e.items:[]},HR=async(t="")=>(await I_()).map(wl).includes(wl(t)),qR=async t=>It(g_(),{items:t.map(wl).filter(Boolean),updatedAt:xe()},{merge:!0}),ka=async()=>{const t=await fs(m_());if(!t.exists())return null;const e=t.data();return typeof e.nextMeetupDate=="number"?e.nextMeetupDate:null},GR=async t=>It(m_(),{nextMeetupDate:t,updatedAt:xe()},{merge:!0}),WR=async t=>{const e=Wu(t.id),n=await fs(e),r={email:t.email,firstName:t.firstName,lastName:t.lastName,...t.userType?{userType:t.userType}:{},updatedAt:xe()};return n.exists()?It(e,r,{merge:!0}):It(e,{...r,createdAt:xe()})},JR=async t=>{const e=t==null?void 0:t.uid;if(!e)return!1;const n=Wu(e);if((await fs(n)).exists())return!0;const s=(t.email||"").trim().toLowerCase();if(s&&!(await ps(Ea(y_(),Aa("email","==",s)))).empty)return!0;const i=t.displayName||"",[o="",...c]=i.trim().split(/\s+/),l=c.join(" ");return await It(n,{email:s,firstName:o,lastName:l,userType:"unverified",createdAt:xe(),updatedAt:xe()}),!0},KR=()=>{const t=new Et([]),e=Xt(y_(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));r.sort((s,i)=>{var l,u,h,f,g,w,E,v,N,D;const o=(l=s==null?void 0:s.createdAt)!=null&&l.seconds?s.createdAt.seconds*1e3:((g=(f=(h=(u=s==null?void 0:s.createdAt)==null?void 0:u.toDate)==null?void 0:h.call(u))==null?void 0:f.getTime)==null?void 0:g.call(f))??0;return((w=i==null?void 0:i.createdAt)!=null&&w.seconds?i.createdAt.seconds*1e3:((D=(N=(v=(E=i==null?void 0:i.createdAt)==null?void 0:E.toDate)==null?void 0:v.call(E))==null?void 0:N.getTime)==null?void 0:D.call(N))??0)-o}),t.next(r)},n=>{console.error("Failed to listen to users",n)});return t.unsubscribe=e,t},QR=async t=>t?(await gs(Wu(t)),!0):!1,ms=()=>{const t=new Et([]),e=Xt(__(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(R_(r))},n=>{console.error("Failed to listen to games",n)});return t.unsubscribe=e,t},E_=()=>{const t=new Et([]),e=Xt(Ju(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(k_(r))},n=>{console.error("Failed to listen to manufacturers",n)});return t.unsubscribe=e,t},YR=async()=>{const e=(await ps(Ju())).docs.map(n=>({id:n.id,...n.data()}));return k_(e)},XR=async t=>{const e=mk(t);return t.id?It(b_(t.id),{...e,updatedAt:xe()},{merge:!0}):qu(Ju(),{...e,createdAt:xe(),updatedAt:xe()})},Zf=async t=>t?(await gs(b_(t)),!0):!1,Yu=async()=>{const e=(await ps(__())).docs.map(n=>({id:n.id,...n.data()}));return R_(e)},v_=async t=>{const e=gk(t);if(t.id)return It(jo(t.id),{...e,updatedAt:xe()},{merge:!0});const n=await bk(e.title);return await It(jo(n),{...e,createdAt:xe(),updatedAt:xe()}),{id:n}},ep=async t=>t?(await gs(jo(t)),!0):!1,ZR=()=>{const t=new Et([]),e=Xt(Ku(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(ed(r))},n=>{console.error("Failed to listen to game ratings",n)});return t.unsubscribe=e,t},ek=()=>{const t=new Et([]),e=Xt(Ea(Ku(),Aa("isVisible","==",!0)),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(ed(r))},n=>{console.error("Failed to listen to visible game ratings",n)});return t.unsubscribe=e,t},tk=async()=>{const e=(await ps(Ku())).docs.map(n=>({id:n.id,...n.data()}));return ed(e)},nk=async t=>{const e=yk(t),n=t.id||t.gameId;if(!n)throw new Error("Game rating requires a gameId.");const r=await fs(bl(n));return It(bl(n),{...e,updatedAt:xe(),...r.exists()?{}:{createdAt:xe()}},{merge:!0})},rk=async t=>t?(await gs(bl(t)),!0):!1,sk=()=>{const t=new Et([]),e=Xt(Ca(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Xu(r))},n=>{console.error("Failed to listen to current games",n)});return t.unsubscribe=e,t},ik=()=>{const t=new Et([]),e=Xt(Ea(Ca(),Aa("isVisible","==",!0)),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Xu(r))},n=>{console.error("Failed to listen to visible current games",n)});return t.unsubscribe=e,t},ok=async()=>{const e=(await ps(Ca())).docs.map(n=>({id:n.id,...n.data()}));return Xu(e)},ak=async t=>{const e=fk(t);return t.id?It(w_(t.id),{...e,updatedAt:xe()},{merge:!0}):qu(Ca(),{...e,createdAt:xe(),updatedAt:xe()})},ck=async t=>t?(await gs(w_(t)),!0):!1,lk=()=>{const t=new Et([]),e=Xt(Ra(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Zu(r))},n=>{console.error("Failed to listen to past owned games",n)});return t.unsubscribe=e,t},uk=()=>{const t=new Et([]),e=Xt(Ea(Ra(),Aa("isVisible","==",!0)),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Zu(r))},n=>{console.error("Failed to listen to visible past owned games",n)});return t.unsubscribe=e,t},A_=async()=>{const e=(await ps(Ra())).docs.map(n=>({id:n.id,...n.data()}));return Zu(e)},C_=async t=>{const e=pk(t);return t.id?It(T_(t.id),{...e,updatedAt:xe()},{merge:!0}):qu(Ra(),{...e,createdAt:xe(),updatedAt:xe()})},dk=async t=>t?(await gs(T_(t)),!0):!1,hk=async(t,e=[])=>{const n=await A_(),r=new Set(n.flatMap(c=>tp(c))),s=wk(e);let i=0,o=0;for(const c of t){const l=(c.title||"").trim();if(!l){o+=1;continue}const u=tp(c);if(u.some(g=>r.has(g))){o+=1;continue}const f=await Tk({title:l,manufacturer:c.manufacturer||"",yearReleased:c.yearReleased??null,imageUrl:c.imageUrl||"",notes:c.pinsideUrl?`Imported from ${c.pinsideUrl}`:""},s);await C_({gameId:f.id,title:"",imageUrl:"",manufacturer:"",yearReleased:null,dateAddedToCollection:c.dateAddedToCollection||"",dateRemovedFromCollection:c.dateRemovedFromCollection||"",notes:"",isVisible:!0,pinsideUrl:c.pinsideUrl||"",pinsideId:c.pinsideId||"",sourceTitle:l,source:"pinside"}),u.forEach(g=>r.add(g)),i+=1}return{added:i,skipped:o,total:t.length}},fk=t=>{const e={gameId:(t.gameId||"").trim(),dateAddedToCollection:t.dateAddedToCollection,notes:(t.notes||"").trim(),isVisible:t.isVisible!==!1};return t.title&&(e.title=t.title.trim()),t.imageUrl&&(e.imageUrl=t.imageUrl.trim()),t.manufacturer&&(e.manufacturer=t.manufacturer.trim()),typeof t.yearReleased=="number"&&!Number.isNaN(t.yearReleased)&&(e.yearReleased=t.yearReleased),e},pk=t=>{const e={gameId:(t.gameId||"").trim(),title:(t.title||"").trim(),dateAddedToCollection:(t.dateAddedToCollection||"").trim(),dateRemovedFromCollection:(t.dateRemovedFromCollection||"").trim(),notes:(t.notes||"").trim(),isVisible:t.isVisible!==!1,pinsideUrl:(t.pinsideUrl||"").trim(),pinsideId:(t.pinsideId||"").trim(),sourceTitle:(t.sourceTitle||"").trim(),source:(t.source||"").trim()};return t.imageUrl&&(e.imageUrl=t.imageUrl.trim()),t.manufacturer&&(e.manufacturer=t.manufacturer.trim()),typeof t.yearReleased=="number"&&!Number.isNaN(t.yearReleased)?e.yearReleased=t.yearReleased:e.yearReleased=null,e},gk=t=>{const e=Array.isArray(t.dataLinks)?t.dataLinks.map(r=>({title:((r==null?void 0:r.title)||"").trim(),url:((r==null?void 0:r.url)||"").trim()})).filter(r=>r.title||r.url):[],n={title:(t.title||"").trim(),manufacturerId:(t.manufacturerId||"").trim(),imageUrl:(t.imageUrl||"").trim(),manufacturer:(t.manufacturer||"").trim(),notes:(t.notes||"").trim(),dataLinks:e};return typeof t.yearReleased=="number"&&!Number.isNaN(t.yearReleased)?n.yearReleased=t.yearReleased:n.yearReleased=null,n},mk=t=>({name:(t.name||"").trim(),logoUrl:(t.logoUrl||"").trim(),opinions:(t.opinions||"").trim()}),yk=t=>{const e=typeof t.rating=="number"&&!Number.isNaN(t.rating)?Math.max(0,Math.min(10,t.rating)):null,n=Array.isArray(t.videos)?t.videos.map(r=>({url:((r==null?void 0:r.url)||"").trim(),description:((r==null?void 0:r.description)||"").trim()})).filter(r=>r.url||r.description):[];return{gameId:(t.gameId||"").trim(),rating:e,review:(t.review||"").trim(),videos:n,isVisible:t.isVisible!==!1}},zo=t=>{if(!t)return 0;if(typeof t.toDate=="function")return t.toDate().getTime();if(typeof t=="number")return t;if(t.seconds)return t.seconds*1e3;const e=new Date(t).getTime();return Number.isNaN(e)?0:e},Xu=t=>[...t].sort((e,n)=>zo(n.dateAddedToCollection)-zo(e.dateAddedToCollection)),Zu=t=>[...t].sort((e,n)=>zo(n.dateRemovedFromCollection||n.dateAddedToCollection)-zo(e.dateRemovedFromCollection||e.dateAddedToCollection)||String(e.title||"").localeCompare(String(n.title||""),void 0,{sensitivity:"base"})),R_=t=>[...t].sort((e,n)=>String(e.title||"").localeCompare(String(n.title||""),void 0,{sensitivity:"base"})),k_=t=>[...t].sort((e,n)=>String(e.name||"").localeCompare(String(n.name||""),void 0,{sensitivity:"base"})),ed=t=>[...t].sort((e,n)=>Number(n.rating||0)-Number(e.rating||0)||String(e.gameId||"").localeCompare(String(n.gameId||""),void 0,{sensitivity:"base"})),td=t=>String(t||"").toLowerCase().replace(/\([^)]*\)/g,"").replace(/[^a-z0-9]+/g," ").trim(),_k=t=>String(t||"").trim().toLowerCase().replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"game",bk=async t=>{const e=_k(t);let n=e,r=2;for(;(await fs(jo(n))).exists();)n=`${e}-${r}`,r+=1;return n},wk=t=>new Map(t.map(e=>[td(e.title),e]).filter(([e])=>e)),Tk=async(t,e)=>{const n=td(t.title),r=e.get(n);if(r)return r;const i={id:(await v_({title:t.title,manufacturer:t.manufacturer||"",yearReleased:t.yearReleased??null,imageUrl:t.imageUrl||"",notes:t.notes||""})).id,title:t.title,manufacturer:t.manufacturer||"",yearReleased:t.yearReleased??null,imageUrl:t.imageUrl||"",notes:t.notes||""};return e.set(n,i),i},tp=t=>{const e=td(t.title||t.sourceTitle),n=!!(t.pinsideUrl||t.pinsideId),r=!!(t.dateAddedToCollection||t.dateRemovedFromCollection),s=[e,String(t.dateAddedToCollection||"").trim(),String(t.dateRemovedFromCollection||"").trim()].filter(Boolean).join("|");return[t.pinsideUrl?`url:${String(t.pinsideUrl).trim().toLowerCase()}`:"",t.pinsideId?`pinside:${String(t.pinsideId).trim().toLowerCase()}`:"",r&&s?`history:${s}`:"",!n&&!r&&e?`title:${e}`:""].filter(Boolean)},nd=({onUser:t,toast:e})=>{if(typeof t!="function")throw new Error("startAuthFlow requires an onUser callback.");jR().then(({redirectError:n,redirectResult:r,persistence:s})=>{var i,o;n&&((i=e==null?void 0:e.error)==null||i.call(e,"Sign-in failed after redirect. Try again.")),s!=null&&s.error&&((o=e==null?void 0:e.error)==null||o.call(e,"Safari blocked login storage. Check cookie settings.")),r!=null&&r.user&&t(r.user,"redirectResult")}).catch(n=>{var r;console.error("Failed to prepare auth",n),(r=e==null?void 0:e.error)==null||r.call(e,"Sign-in setup failed. Try again.")}),zR(n=>{t(n,"onAuthChanged")})},Ik=async({user:t,mountSso:e,toast:n,onDenied:r,onPermissionsError:s}={})=>{var o,c;let i=!1;try{i=await HR((t==null?void 0:t.email)||"")}catch(l){return console.error("Failed to load admin list",l),s==null||s(l),(o=n==null?void 0:n.error)==null||o.call(n,"Unable to verify access. Check Firestore rules."),e==null||e("denied",(t==null?void 0:t.email)||"","auth:permissions"),!1}return i?!0:(r==null||r(),(c=n==null?void 0:n.error)==null||c.call(n,`Signed in as ${(t==null?void 0:t.email)||"unknown"} but not authorized.`),e==null||e("denied",(t==null?void 0:t.email)||"","auth:denied"),!1)},rd=async({user:t,mountSso:e,toast:n,setCurrentUser:r,onSignedOut:s,onDenied:i,onAuthorized:o,reason:c=""}={})=>{if(!t)return r==null||r(null),s==null||s(),e==null||e("login","","auth:logged-out"),!1;try{await JR(t)}catch(u){console.warn("Failed to ensure user profile",u)}return await Ik({user:t,mountSso:e,toast:n,onDenied:i,onPermissionsError:i})?(r==null||r(t),o==null||o(t,c),!0):!1},Sa=O(({status:t,userEmail:e,adminEmail:n,onSignIn:r,onSignOut:s})=>(Sa.inputs(i=>{[{status:t,userEmail:e,adminEmail:n,onSignIn:r,onSignOut:s}]=i,r=K(r),s=K(s)}),[()=>t==="loading"?sc.class`panel auth-panel`(oe("Checking login...")):t==="denied"?sc.class`panel auth-panel`(qe("Access denied"),oe.class`auth-warning`(()=>e||"This account"," is not authorized."),oe("Please be patient as we review your account to become verified status."),m.class`auth-actions`(G.type`button`.class`add-button`.onClick(s)("Sign out"))):sc.class`panel auth-panel`(qe("Sign in"),oe("Use Google to access admin tools."),m.class`auth-actions`(G.type`button`.class`add-button`.onClick(r)("Sign in with Google")))])),Ek=O(()=>{let t=[];const e=ge(()=>{});O.promise=I_().then(o=>{t=Array.isArray(o)?o:[],e()}).catch(o=>{console.error("Failed to load admin list",o)});const n=(o,c)=>{t=t.map((l,u)=>u===o?c:l),e()},r=()=>{t=[...t,""],e()},s=o=>{t=t.filter((c,l)=>l!==o),e()},i=()=>qR(t).then(()=>{alert("saved")}).catch(o=>{console.error("Failed to save admin list",o)});return na.style`border:0;padding:0;margin:0;`(m.style`display:flex;flex-direction:column;gap:0.6em;`(o=>(t.length?t:[""]).map((c,l)=>m.style`display:flex;gap:0.6em;align-items:center;`(ue.type`text`.value(u=>c).onInput(u=>n(l,u.target.value)).style`width:100%`,G.onClick(()=>s(l))("🗑️ remove")))),m.style`display:flex;gap:0.6em;align-items:center;margin-top:0.8em;flex-wrap:wrap;`(G.onClick(r)("add"),G.onClick(i)("save to firestore")))});function S_({startDateTime:t,message:e,subject:n}){t=new Date(t);const{year:r,month:s}=sd(t),i=("0"+(t.getDate()+1)).slice(-2),o=Ho(t),c=new Date(new Date(t).setHours(t.getHours()+2)),l=Ho(c),u=encodeURIComponent(e),h=encodeURIComponent(n);return`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${r}${s}${i}${o}%2F${r}${s}${i}${l}&details=${u}&location=&text=${h}`}function P_({startDateTime:t,message:e,subject:n}){t=new Date(t);const{year:r,month:s,day:i,hours:o}=sd(t),l=new Date(new Date(t).setHours(t.getHours()+2)).getHours(),u=encodeURIComponent(e.replace(/\n/g,"<br>")),h=encodeURIComponent(n);return`https://outlook.live.com/calendar/0/action/compose?allday=false&body=${u}&enddt=${r}-${s}-${i}T${l}%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${r}-${s}-${i}T${o}%3A00%3A00&subject=${h}`}function x_({startDateTime:t,message:e,subject:n}){t=new Date(t);const{year:r,month:s}=sd(t),i=("0"+(t.getDate()+1)).slice(-2),o=Ho(t),c=new Date(new Date(t).setHours(t.getHours()+2)),l=Ho(c);return`BEGIN:VCALENDAR
VERSION:2.0
PRODID:${n}
BEGIN:VEVENT
DTSTART:${r}${s}${i}${o}
DTEND:${r}${s}${i}${l}
DTSTAMP:${r}${s}14T181547Z
SUMMARY:${n}
DESCRIPTION:${e.replace(/\n/g,"\\n")}
UID:79992
END:VEVENT
END:VCALENDAR`}function sd(t){t=new Date(t);const e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),r=("0"+t.getDate()).slice(-2),s=t.getHours();return{year:e,month:n,day:r,hours:s}}function Ho(t){const e=String(t.getUTCHours()).padStart(2,"0"),n=String(t.getUTCMinutes()).padStart(2,"0"),r=String(t.getUTCSeconds()).padStart(2,"0");return`T${e}${n}${r}Z`}const V_=O(t=>{V_.updates(n=>[t]=n);const e=new Date(t);return m.style`text-align:center;`(m(Z("🗓️ ",e.toLocaleString("default",{weekday:"long"}),", ",e.toLocaleString("default",{month:"long"})," ",e.getDate(),D_(e))),n=>zg({date:t}),vk(e))});function vk(t){return m.style`font-size:.65em;opacity:.7`(Ak(t))}function Tc(t,e){const n={hour:"numeric",minute:"numeric",hour12:!0,timeZone:e,timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",n).format(t)}function Ak(t){const e=Tc(t,"America/New_York"),n=Tc(t,"America/Chicago"),r=Tc(t,"America/Los_Angeles");return`${e} / ${n} / ${r}`}const He={subject:"Cary Hardy Patreon meetup",message:`
    Link to virtual meeting is posted to Patreon on a day of meeting
  
    https://www.patreon.com/caryhardy
  `.trim().replace(/    /g,"")},Pa=O(({date:t,showLearnMore:e=!0})=>{t=new Date(t),Pa.updates(u=>{[{date:t,showLearnMore:e}]=u});let n=!1;const r=S_({startDateTime:t,message:He.message,subject:He.subject}),s=P_({startDateTime:t,message:He.message,subject:He.subject}),i=[{type:"google",url:r},{type:"outlook",url:s}],o=x_({startDateTime:t,message:He.message,subject:He.subject});var c=new Blob([o],{type:"text/calendar"});const l=window.URL.createObjectURL(c);return ve(m.style`padding:.5em;`("Countdown until the next, Patreon LE only, group meetup"),()=>V_(t),m.style`white-space:nowrap;font-size:.7em;opacity:.8`("save meetup to your calendar using links below 👇"),m.style`background-color:black;padding:0 0 .2em 0;`(m.style`white-space:nowrap;font-size:.5em;opacity:.6`("choose your calendar type below"),m.style`display:flex;gap:1em;justify-content: center;`(i.map(u=>np(u.type,{href:u.url},u.type==="google"?Y.src`assets/media/gmail-logo-2.png`.width`48`.height`48`.border`0`:Y.src`assets/media/outlook-icon.png`.width`48`.height`48`.border`0`).key(u)),np("ical",{href:l,download:"cary-hardy-meetup.ics"},so.viewBox`0 0 170 170`.fill`currentColor`.width`48`.height`48`($g("Apple Logo"),Y.src`assets/media/ical.png`.width`48`.height`48`.border`0`))),he,m(z.style`font-size:0.7em;`(xI(q.onClick(()=>n=!n).style`color:white;`("⬜️ qr invite codes here"))))),oe.style`font-size:0.8em;opacity:0.7;line-height:0.9em;`(z("🔗 A link to virtual meetup is posted on day of meetup,",he,"in the LE ONLY 💬 chat on Patreon.")),()=>e&&m.style`padding:.8em;font-size: .7em;`(q.class`no-a-style`.href`meetup.html`(G.type`button`("learn more"))))});function D_(t){var e=t.getDate(),n="th";return e===1||e===21||e===31?"st":e===2||e===22?"nd":e===3||e===23?"rd":n}const np=(t,e,n)=>{const r=q.class`small-icon-link`.href`${e.href}`.attr("target","_blank");return(e.download?r.attr("download",e.download):r)(m.class`small-icon`(n),z.style`font-size:0.5em;`(t))};function Ic(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}const N_=O(({nextMeetupDate:t,onQrUrlChange:e})=>{N_.inputs(i=>{[{nextMeetupDate:t,onQrUrlChange:e}]=i,e=K(e)});const n=S_({startDateTime:t,message:He.message,subject:He.subject}),r=P_({startDateTime:t,message:He.message,subject:He.subject}),s=x_({startDateTime:t,message:He.message,subject:He.subject});return na.style`border:0;padding:0;margin:0;`(m(m.style`display:flex;flex-wrap:wrap;gap:1em`(m(ce("Message"),m(ue.type`text`.value(i=>He.message).onChange(i=>He.message=i.target.value).style`width:100%`)),m(ce("Subject"),m(ue.type`text`.value(i=>He.subject).onChange(i=>He.subject=i.target.value).style`width:100%`))),he,he,m.style`display:flex;flex-wrap:wrap;gap:1em;flex-direction:column;`(m.style`display:flex;flex-grow:1`(so.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(DI.attr("width","22").attr("height","22").attr("x","13").attr("y","13").attr("fill","#fff"),Gi.attr("fill","#1e88e5").attr("points","25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"),Mt.attr("fill","#1e88e5").attr("d","M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"),Gi.attr("fill","#fbc02d").attr("points","34,42 14,42 13,38 14,34 34,34 35,38"),Gi.attr("fill","#4caf50").attr("points","38,35 42,34 42,14 38,13 34,14 34,34"),Mt.attr("fill","#1e88e5").attr("d","M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"),Gi.attr("fill","#e53935").attr("points","34,34 34,42 42,34"),Mt.attr("fill","#1565c0").attr("d","M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"),Mt.attr("fill","#1565c0").attr("d","M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z")),ue.type`text`.style`width:100%`.value(n),G.onClick(()=>Ic(n))("copy"),G.onClick(()=>e(n))("qr")),m.style`display:flex;flex:1`(so.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(Mt.attr("fill","#03A9F4").attr("d","M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z"),Mt.attr("fill","#B3E5FC").attr("d","M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z"),Mt.attr("fill","#0277BD").attr("d","M27 41.46L6 37.46 6 9.46 27 5.46z"),Mt.attr("fill","#FFF").attr("d","M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z")),ue.type`text`.style`width:100%`.value(r),G.onClick(()=>Ic(r))("copy"),G.onClick(()=>e(r))("qr")),m.style`display:flex;flex:1`(so.attr("viewBox","0 0 170 170").attr("fill","currentColor").attr("width","48").attr("height","48")($g("Apple Logo"),Mt.attr("d","M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z")),ue.type`text`.style`width:100%`.value(s),G.onClick(()=>Ic(s))("copy")))))});let rp=!1;const L_=O(t=>{let e=Date.now();return L_.inputs(([n])=>{K(n)}),rp||(rp=!0,O.promise=ka().then(n=>{typeof n=="number"&&(e=n)}).catch(n=>{console.error("Failed to load next meetup date",n)})),m.style`max-width:1200px;margin:0 auto;padding:0 1em;`(tt(Y.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,"Hardy Tools"),m.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(Ft({href:"/admin/qr-maker.html",title:"🔗 QR Maker",description:"Create a QR code from any link and preview the encoded URL before using it."}),n=>Tl({labelText:"Calendar Links",flex:"2",contentNode:N_({nextMeetupDate:e,onQrUrlChange:r=>{window.location.href=`/admin/qr-maker.html?url=${encodeURIComponent(r)}`}})}),Ft({href:"/admin/meeting-tools.html",title:"📅 Meeting Tools",description:"Update the next meetup date, save it to Firestore, and preview the public countdown."}),n=>Tl({labelText:"admin users",flex:"1",contentNode:Ek}),Ft({href:"/admin/user.html",title:"👥 Open Users Admin",description:"Manage authorized admin users and account access."}),Ft({href:"/admin/current-games.html",title:"⚪️ Current Game Lineup",description:"Choose which games appear in the public current lineup."}),Ft({href:"/admin/past-owned-games.html",title:"📜 Past Games Owned",description:"Track previously owned games and sync new items from Pinside history."}),Ft({href:"/admin/games.html",title:"🕹️ Games Database",description:"Maintain canonical game details used by lineup and ratings."}),Ft({href:"/admin/manufacturers.html",title:"🏭 Manufacturers Database",description:"Edit manufacturer records and logos for the game database."}),Ft({href:"/admin/game-ratings.html",title:"⭐ Game Ratings",description:"Create and update public ratings, reviews, and related videos."})),he)}),Ft=O(({href:t,title:e,description:n})=>(Ft.inputs(r=>{[{href:t,title:e,description:n}]=r}),m.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(q.href`${t}`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;`(m.style`font-weight:800;text-align:center;`(e),oe.style`margin:0.45em 0 0;color:rgba(255,255,255,0.72);font-size:0.82em;line-height:1.35;text-align:center;`(n))))),Tl=O(({labelText:t,flex:e,contentNode:n})=>{Tl.inputs(i=>[{labelText:t,flex:e,contentNode:n}]=i);let r=!1;const s=()=>{r=!r};return m.style`flex:${e};min-width:min(500px, 100%);background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(m.onClick(s).style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`(m.style`width:1em;text-align:center;`(()=>r?"▼":"▶"),m(t)),()=>r?m.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(i=>n):"")}),Lt=O(t=>{Lt.inputs(([i])=>{t=K(i)});let e=!1;const n=ge(()=>{}),r=()=>{e=!1,n()},s=()=>{e=!e,n()};return ve(m.class`admin-nav-layout`(m.class`admin-nav-left`(G.type`button`.class`top-nav-pill`.attr("aria-expanded",i=>e?"true":"false").onClick(s)("☰ menu")),m(),m.class`admin-nav-right`(q.href`/index.html`.class`top-nav-pill`("🏠 home"),G.type`button`.class`top-nav-pill`.onClick(t)("🚪 logout"))),i=>e?ve(G.type`button`.class`admin-menu-backdrop`.onClick(r).attr("aria-label","Close menu")(""),m.class`admin-menu-panel`.attr("role","menu")(q.href`/admin.html`.class`top-nav-pill`.attr("role","menuitem")("🏠 admin home"),q.href`/admin/qr-maker.html`.class`top-nav-pill`.attr("role","menuitem")("🔗 qr maker"),q.href`/admin/meeting-tools.html`.class`top-nav-pill`.attr("role","menuitem")("📅 meeting tools"),q.href`/admin/current-games.html`.class`top-nav-pill`.attr("role","menuitem")("⚪️ current lineup"),q.href`/admin/past-owned-games.html`.class`top-nav-pill`.attr("role","menuitem")("📜 past games"),q.href`/admin/games.html`.class`top-nav-pill`.attr("role","menuitem")("🕹️ games"),q.href`/admin/manufacturers.html`.class`top-nav-pill`.attr("role","menuitem")("🏭 manufacturers"),q.href`/admin/game-ratings.html`.class`top-nav-pill`.attr("role","menuitem")("⭐ ratings"),q.href`/admin/user.html`.class`top-nav-pill`.attr("role","menuitem")("👥 users"),q.href`https://github.com/AckerApple/cary-hardy`.class`top-nav-pill`.attr("role","menuitem").attr("target","_blank").attr("rel","noopener noreferrer")("🔗 code base"))):"")});let sp=!1;const Ck=O(()=>sp?"":(sp=!0,Vt(`
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
  `))),M_=O(({className:t="top-nav",content:e})=>(M_.inputs(n=>{[{className:t,content:e}]=n}),m.class`${t}`(m.class`top-nav-row`(typeof e=="function"?e():e)))),Xe=O(t=>(Xe.inputs(e=>{[t]=e}),ve(Ck(),m.class`top-nav-shell top-nav-fixed`(M_({className:"top-nav top-nav-inner",content:t}))))),O_=O(({nextMeetupDate:t,date:e,time:n,onDate:r,onSave:s})=>(O_.inputs(i=>{[{nextMeetupDate:t,date:e,time:n,onDate:r,onSave:s}]=i,r=K(r),s=K(s)}),na.style`border:0;padding:0;margin:0;`(i=>U_({date:e,time:n,onDate:r}),m.style`margin-top:0.6em;`(G.onClick(s)("save to firestore")),Bg,m.style`text-align:center;`(i=>Pa({date:t}))))),U_=O(({date:t,time:e,onDate:n})=>{let r=new Date(t+" "+e).getTime();U_.inputs(o=>{[{date:t,time:e,onDate:n}]=o,n=K(n),r=new Date(t+" "+e).getTime()});const s=o=>{const c=o.target.value;n(new Date(c+" "+e).getTime())},i=o=>{const c=o.target.value;n(new Date(t+" "+c).getTime())};return m.style`display:flex;flex-wrap:wrap;gap:1em`(m(ce("Date"),m(ue.type`date`.value(o=>t).onChange(s).style`width:100%`)),m(ce.attr("for","time")("Time"),m(ue.type`time`.value(o=>e).onChange(i).style`width:100%`)),m(ce.attr("for","time")("UTC"),m(o=>r)))});function ip(t){const e=new Date(t),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return{date:`${n}-${r}-${s}`,time:`${i}:${o}`}}let op=!1;const ES=O(()=>{let t="loading",e="",n=null;const r=ge((c,l="",u="")=>{t=c,e=l}),s=ge(c=>{n=c,console.log("currentUser",n),c||(t="login")}),i=()=>{r("login","","auth:logged-out"),t="login"},o=ge((c,l="")=>{t="authorized",e=(c==null?void 0:c.email)||""});return op||(op=!0,nd({onUser:(c,l)=>{rd({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(n==null?void 0:n.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),ve(Vt(`
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
    `),c=>F_(t,e,i))}),F_=O((t,e,n)=>{F_.inputs(s=>{[t,e,n]=s,n=K(n)});const r=()=>dt().then(n).catch(s=>{console.error("Failed to sign out",s)});return[()=>t==="authorized"?ve(Xe(()=>Lt(r)),L_(n)):m(Sa({status:t,userEmail:e,adminEmail:"",onSignIn:()=>Qu().catch(s=>{console.error("Failed to sign in",s)}),onSignOut:()=>(t="login",dt().catch(s=>{console.error("Failed to sign out",s)}))}))]}),$_=O(({user:t,onEdit:e,formatCreatedAt:n})=>($_.inputs(r=>{[{user:t,onEdit:e,formatCreatedAt:n}]=r}),m.style`display:grid;grid-template-columns:1.1fr 1.4fr 0.7fr 0.7fr auto;gap:0.6em;align-items:center;padding:0.4em 0;`(m(r=>`${t.firstName||""} ${t.lastName||""}`.trim()||"—"),m.style`opacity:0.85;`(r=>t.email||"—"),z.style`opacity:0.85;color:${t.userType==="verified"?"#6fe3a1":"#f26d6d"};`(r=>t.userType||"unverified"),z.style`opacity:0.7;`(r=>n(t.createdAt)),G.type`button`.onClick(e).style`border:0;background:transparent;color:#fff;cursor:pointer;font-size:1.1em;`.attr("title","Edit user")("✏️")))),B_=O(({userId:t,createdAtLabel:e,editUser:n,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l})=>{B_.inputs(h=>{[{userId:t,createdAtLabel:e,editUser:n,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:c,onCancel:l}]=h});const u=h=>{i({...n,...h})};return m.style`margin-top:1em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.15);display:grid;gap:0.6em;`(m.style`font-weight:600;`("Edit User"),z.style`opacity:0.6;`("User ID: ",h=>t),z.style`opacity:0.6;`("Created at: ",h=>e),m.style`display:grid;grid-template-columns:120px 1fr;gap:0.6em;align-items:center;`(z.style`opacity:0.7;`("Email"),ue.type`email`.value(h=>(n==null?void 0:n.email)||"").onInput(h=>{var f;u({email:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),z.style`opacity:0.7;`("First name"),ue.type`text`.value(h=>(n==null?void 0:n.firstName)||"").onInput(h=>{var f;u({firstName:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),z.style`opacity:0.7;`("Last name"),ue.type`text`.value(h=>(n==null?void 0:n.lastName)||"").onInput(h=>{var f;u({lastName:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),z.style`opacity:0.7;`("Status"),Gl.value(h=>(n==null?void 0:n.userType)==="verified"?"verified":"unverified").onChange(h=>{var f;u({userType:((f=h==null?void 0:h.target)==null?void 0:f.value)==="verified"?"verified":"unverified"})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(h=>nr.value`unverified`.selected(f=>n.userType==="unverified")("unverified"),h=>nr.value`verified`.selected(f=>n.userType==="verified")("verified"))),m.style`display:flex;gap:0.6em;`(G.type`button`.onClick(o).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#1b1b1b;color:#fff;cursor:pointer;`(h=>r?"Saving...":"Save to Firestore"),G.type`button`.onClick(c).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#4b1111;color:#fff;cursor:pointer;`(h=>s?"🗑️ Deleting...":"🗑️ Delete"),G.type`button`.onClick(l).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;cursor:pointer;`("Cancel")))});let ap=!1,Ec=!1,Ms=new Et(null),an=null;const vS=O(()=>{let t="loading",e="",n=null;const r=ge((c,l="",u="")=>{t=c,e=l}),s=ge(c=>{n=c,c||(t="login")}),i=()=>{r("login","","auth:logged-out"),t="login"},o=ge((c,l="")=>{t="authorized",e=(c==null?void 0:c.email)||""});return ap||(ap=!0,nd({onUser:(c,l)=>{rd({user:c,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(n==null?void 0:n.email)||"","auth:denied")},onAuthorized:o,reason:l})},toast:{error:c=>console.warn(c)}})),ve(Vt(`
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
    `),c=>j_(t,e,i))}),j_=O((t,e,n)=>(j_.inputs(r=>{[t,e,n]=r,n=K(n)}),[()=>t==="authorized"?z_(n):m(Sa({status:t,userEmail:e,adminEmail:"",onSignIn:()=>Qu().catch(r=>{console.error("Failed to sign in",r)}),onSignOut:()=>(t="login",dt().catch(r=>{console.error("Failed to sign out",r)}))}))])),z_=O(t=>{z_.inputs(([D])=>{t=K(D)});const e=()=>dt().then(t).catch(D=>{console.error("Failed to sign out",D)});let n=!1,r=!1,s=!1,i="",o=null,c=null,l=null;const u=ge(()=>{}),h=D=>D?typeof D.toDate=="function"?D.toDate().toLocaleDateString():typeof D=="number"?new Date(D).toLocaleDateString():D.seconds?new Date(D.seconds*1e3).toLocaleDateString():"-":"-",f=D=>{if(!D)return"-";let x=null;return typeof D.toDate=="function"?x=D.toDate():typeof D=="number"?x=new Date(D):D.seconds&&(x=new Date(D.seconds*1e3)),x?x.toLocaleString():"-"},g=()=>{an&&(an(),an=null),n=!0,i="",u(),Ms=KR(),an=(Ms==null?void 0:Ms.unsubscribe)||null},w=D=>{o=D.id,c=D.createdAt??null,l={...D},u()},E=()=>{o=null,c=null,l=null,u()},v=()=>{if(!o||r)return;r=!0,i="",u();const D={id:o,email:((l==null?void 0:l.email)||"").trim(),firstName:((l==null?void 0:l.firstName)||"").trim(),lastName:((l==null?void 0:l.lastName)||"").trim(),userType:(l==null?void 0:l.userType)==="verified"?"verified":"unverified"};O.promise=WR(D).then(()=>{E()}).catch(x=>{console.error("Failed to save user",x),i="Failed to save user.",u()}).finally(()=>{r=!1,u()})},N=()=>{!o||s||confirm("Delete this user?")&&(s=!0,i="",u(),O.promise=QR(o).then(()=>{E()}).catch(D=>{console.error("Failed to delete user",D),i="Failed to delete user.",u()}).finally(()=>{s=!1,u()}))};return Ec||(Ec=!0,an?n=!0:g()),Kt(()=>{an&&(an(),an=null),Ec=!1}),ve(Xe(()=>Lt(e)),m.class`users-page`(tt("👥 Users Admin"),m.class`users-card`(m.style`margin-top:0.75em;display:grid;gap:0.5em;`(D=>i?oe.style`color:#f6c177;`(i):"",Zw(Ms,null,D=>D===null?z.style`opacity:0.7;`("Loading users..."):(n=!1,console.log("user items",{items:D,isLoading:n}),D.length?D.map(x=>$_({user:x,onEdit:()=>w(x),formatCreatedAt:h}).key(x.id)):z.style`opacity:0.7;`("No users found.")))),D=>o?B_({userId:o,createdAtLabel:f(c),editUser:l,isSaving:r,isDeleting:s,onChange:x=>{l=x,u()},onSave:v,onDelete:N,onCancel:E}):"",he,m.class`users-actions`(q.href`../admin.html`("Back to Admin Tools")))))}),Rk=`
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
`,br=(t,e="")=>{let n=!1;return O(()=>{let r="loading",s="",i=null;const o=ge((h,f="",g="")=>{r=h,s=f}),c=ge(h=>{i=h,h||(r="login")}),l=()=>{o("login","","auth:logged-out"),r="login"},u=ge((h,f="")=>{r="authorized",s=(h==null?void 0:h.email)||""});return n||(n=!0,nd({onUser:(h,f)=>{rd({user:h,mountSso:o,setCurrentUser:c,onSignedOut:l,onDenied:()=>o("denied",(i==null?void 0:i.email)||"","auth:denied"),onAuthorized:u,reason:f})},toast:{error:h=>console.warn(h)}})),ve(Vt(`${Rk}
${e}`),h=>H_(r,s,l,t))})},H_=O((t,e,n,r)=>(H_.inputs(s=>{[t,e,n,r]=s,n=K(n)}),[()=>t==="authorized"?r(n):m(Sa({status:t,userEmail:e,adminEmail:"",onSignIn:()=>Qu().catch(s=>console.error("Failed to sign in",s)),onSignOut:()=>(t="login",dt().catch(s=>console.error("Failed to sign out",s)))}))])),xa=O(({value:t,games:e,isLoaded:n,fieldError:r,onChange:s})=>{xa.inputs(o=>{[{value:t,games:e,isLoaded:n,fieldError:r,onChange:s}]=o,s=K(s)});const i=()=>r?"#f87171":"rgba(255,255,255,0.2)";return m.class`admin-field-with-link`(Gl.value(o=>t||"").onChange(o=>{var c;s(((c=o==null?void 0:o.target)==null?void 0:c.value)||"")}).attr("aria-invalid",o=>r?"true":"false").attr("title",o=>r||"").attr("style.borderColor",o=>i())(o=>kk(t,e,n)),q.href`/admin/games.html`.class`admin-inline-edit-link`("edit games"))}),kk=(t,e,n)=>{const r=Pk(e),s=!t||e.some(i=>i.id===t);return[nr.value``(i=>Sk(e,n)),s?"":nr.value`${t}`(`Missing game: ${t}`),r.map(({manufacturer:i,items:o})=>PI.label(i)(o.map(c=>nr.value`${c.id}`(xk(c)))))]},Sk=(t,e)=>e?t.length?"Select a game":"Add games first":"Loading games...",Pk=t=>{const e=new Map;return t.forEach(n=>{const r=String(n.manufacturer||"Unknown Manufacturer").trim()||"Unknown Manufacturer";e.set(r,[...e.get(r)||[],n])}),[...e.entries()].sort(([n],[r])=>n.localeCompare(r,void 0,{sensitivity:"base"})).map(([n,r])=>({manufacturer:n,items:[...r].sort((s,i)=>String(s.title||"").localeCompare(String(i.title||""),void 0,{sensitivity:"base"}))}))},xk=t=>[t.title||"Untitled game",t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" - "),vc=()=>({gameId:"",dateAddedToCollection:"",notes:"",isVisible:!0});let Ac=!1,Os=null,cn=null,Mn=null,Zi=null,ln=null,On=null;const AS=br(t=>q_(t)),q_=O(t=>{q_.inputs(([P])=>{t=K(P)});const e=()=>dt().then(t).catch(P=>{console.error("Failed to sign out",P)});let n=!1,r=!1,s="",i={},o=!1,c=null,l=vc(),u=Os,h=Zi;const f=ge(()=>{}),g=()=>{cn&&(cn(),cn=null),Mn&&(Mn(),Mn=null),u=null,Os=null,s="",f();const P=sk();cn=(P==null?void 0:P.unsubscribe)||null;const U=P.subscribe(T=>{u=T,Os=T,console.debug("Current games list updated",{count:(T==null?void 0:T.length)||0,items:T}),f()});Mn=()=>U.unsubscribe()},w=()=>{ln&&(ln(),ln=null),On&&(On(),On=null),h=null,Zi=null,f();const P=ms();ln=(P==null?void 0:P.unsubscribe)||null;const U=P.subscribe(T=>{h=T,Zi=T,console.debug("Game library updated",{count:(T==null?void 0:T.length)||0,items:T}),f()});On=()=>U.unsubscribe()},E=()=>ok().then(P=>{console.debug("Current games list refreshed",{count:P.length,items:P}),u=P,Os=P,f()}).catch(P=>{console.error("Failed to refresh current games list",P),s="Saved, but failed to refresh the game list. Reload the page to confirm.",f()}),v=()=>{c=null,l=vc(),s="",i={},o=!0,f()},N=P=>{c=P.id,l={id:P.id,gameId:P.gameId||"",title:P.title||"",dateAddedToCollection:J_(P.dateAddedToCollection),imageUrl:P.imageUrl||"",manufacturer:P.manufacturer||"",yearReleased:cp(P.yearReleased),notes:P.notes||"",isVisible:P.isVisible!==!1},s="",i={},o=!0,f()},D=()=>{n||r||(c=null,l=vc(),s="",i={},o=!1,f())},x=()=>{const P={};!l.gameId&&!(l.title||"").trim()&&(P.gameId="Game is required."),l.dateAddedToCollection||(P.dateAddedToCollection="Date Added to Collection is required."),l.yearReleased!==null&&typeof l.yearReleased<"u"&&Number.isNaN(Number(l.yearReleased))&&(P.yearReleased="Year Released must be numeric."),i=P;const U=Object.values(P);return U.length?U[0]:""},R=()=>{if(n){console.debug("Current game save ignored because a save is already running");return}const P=x();if(P){s=P,console.warn("Current game save blocked by validation",{fieldErrors:i,game:l}),f();return}n=!0,s="",i={},f(),console.debug("Saving current game",{id:c||null,game:l}),O.promise=ak({...l,id:c||void 0,gameId:(l.gameId||"").trim(),title:(l.title||"").trim(),imageUrl:(l.imageUrl||"").trim(),manufacturer:(l.manufacturer||"").trim(),notes:(l.notes||"").trim(),yearReleased:cp(l.yearReleased),isVisible:l.isVisible!==!1}).then(()=>(console.debug("Current game saved",{id:c||null}),n=!1,D(),E())).catch(U=>{console.error("Failed to save current game",U),s="Failed to save game. Check the fields and try again.",f()}).finally(()=>{n=!1,f()})},F=()=>{!c||r||confirm("Delete this game from the current lineup?")&&(r=!0,s="",f(),O.promise=ck(c).then(()=>(r=!1,D(),E())).catch(P=>{console.error("Failed to delete current game",P),s="Failed to delete game.",f()}).finally(()=>{r=!1,f()}))};return Ac||(Ac=!0,cn||g(),ln||w()),Kt(()=>{cn&&(cn(),cn=null),Mn&&(Mn(),Mn=null),ln&&(ln(),ln=null),On&&(On(),On=null),Ac=!1,Os=null,Zi=null}),ve(Xe(()=>Lt(e)),m.class`admin-crud-page`(m.class`admin-crud-header`(tt("⚪️ Current Game Lineup"),G.type`button`.class`admin-pill-button`.onClick(v)("Add")),m.class`admin-crud-card`(oe.style`margin-top:0;opacity:0.78;`("Manage the Firestore currentGames collection used by the public lineup page."),P=>s&&!o?oe.style`color:#f6c177;`(s):"",m.class`admin-crud-list`(P=>u===null?z.style`opacity:0.7;`("Loading games..."):u.length?u.map(U=>G_({game:Vk(U,h||[]),onClick:N}).key(U.id)):z.style`opacity:0.7;`("No games found. Use Add Game to create the first one.")),m.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(q.href`../lineup.html`.class`admin-secondary-button`("View Public Lineup"))),P=>o?W_({isEditing:!!c,editGame:l,gameLibrary:h||[],isGameLibraryLoaded:h!==null,errorMessage:s,fieldErrors:i,isSaving:n,isDeleting:r,onChange:U=>{var T;l=U,i={...i,gameId:U.gameId||(T=U.title)!=null&&T.trim()?"":i.gameId,dateAddedToCollection:U.dateAddedToCollection?"":i.dateAddedToCollection,yearReleased:U.yearReleased===null||!Number.isNaN(Number(U.yearReleased))?"":i.yearReleased},f()},onSave:R,onDelete:F,onCancel:D}):""))}),G_=O(({game:t,onClick:e})=>(G_.inputs(n=>{[{game:t,onClick:e}]=n,e=K(e)}),G.type`button`.class`admin-crud-row`.onClick(()=>e(t))(n=>t.imageUrl?Y.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",r=>t.title||"Game image"):m.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),m(fr(n=>t.title||"Untitled game"),m.style`margin-top:0.15em;opacity:0.74;`(z(n=>[t.manufacturer||"",t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year"))),z.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Collected Date"),Z(n=>[Dk(t.dateAddedToCollection),t.isVisible===!1?" · Hidden":""].join("")))))),Vk=(t,e)=>{const n=e.find(r=>r.id===t.gameId);return{...t,title:(n==null?void 0:n.title)||t.title||"",imageUrl:(n==null?void 0:n.imageUrl)||t.imageUrl||"",manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null}},W_=O(({isEditing:t,editGame:e,gameLibrary:n,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f})=>{W_.inputs(v=>{[{isEditing:t,editGame:e,gameLibrary:n,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f}]=v,l=K(l),u=K(u),h=K(h),f=K(f)});const g=v=>{l({...e,...v})},w=v=>i[v]?"#f87171":"rgba(255,255,255,0.2)",E=v=>i[v]?"#fca5a5":"inherit";return m.class`admin-crud-modal-backdrop`(m.class`admin-crud-modal`(m.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(m(tt.style`margin:0;`(t?"Edit Game":"Add Game"),z.style`opacity:0.72;`(t?"Update this current lineup entry.":"Create a new current lineup entry.")),G.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),v=>s?oe.style`color:#f6c177;`(s):"",v=>Object.values(i).filter(Boolean).length?m.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(i).filter(Boolean).map(N=>z(N))):"",m.class`admin-crud-form-grid`.style`margin-top:1em;`(ce.attr("style.color",v=>E("gameId"))("Game"),v=>xa({value:e.gameId||"",games:n,isLoaded:r,fieldError:i.gameId,onChange:N=>g({gameId:N})}).key(`${r?"loaded":"loading"}-${n.length}`),ce.attr("style.color",v=>E("dateAddedToCollection"))("Date Added to Collection"),ue.type`date`.value(v=>e.dateAddedToCollection||"").onInput(v=>{var N;g({dateAddedToCollection:((N=v==null?void 0:v.target)==null?void 0:N.value)||""})}).attr("aria-invalid",v=>i.dateAddedToCollection?"true":"false").attr("title",v=>i.dateAddedToCollection||"").attr("style.borderColor",v=>w("dateAddedToCollection"))(),ce("Notes"),rs.value(v=>e.notes||"").onInput(v=>{var N;g({notes:((N=v==null?void 0:v.target)==null?void 0:N.value)||""})})(),ce("Visible on public page"),ce.style`display:flex;gap:0.5em;align-items:center;`(ue.type`checkbox`.attr("checked",v=>e.isVisible!==!1?"checked":null).onChange(v=>{var N;g({isVisible:!!((N=v==null?void 0:v.target)!=null&&N.checked)})})(),Z(v=>e.isVisible!==!1?"Visible":"Hidden"))),m.class`admin-crud-modal-actions`(m.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",v=>o?"disabled":null).onClick(u)(v=>o?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",v=>o?"disabled":null).onClick(f)("Cancel")),v=>t?G.type`button`.class`admin-danger-button`.attr("disabled",N=>c?"disabled":null).onClick(h)(N=>c?"🗑️ Deleting...":"🗑️ Delete"):"")))}),cp=t=>{if(typeof t=="number"&&!Number.isNaN(t))return t;if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},J_=t=>t?typeof t=="string"?t.slice(0,10):typeof t.toDate=="function"?t.toDate().toISOString().slice(0,10):t.seconds?new Date(t.seconds*1e3).toISOString().slice(0,10):"":"",Dk=t=>{const e=J_(t);if(!e)return"No date";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},Cc=()=>({title:"",imageUrl:"",manufacturerId:"",manufacturer:"",yearReleased:null,notes:"",dataLinks:[]});let Rc=!1,Us=null,Un=null,Ar=null,eo=null,Fn=null,Cr=null;const CS=br(t=>K_(t)),K_=O(t=>{K_.inputs(([P])=>{t=K(P)});const e=()=>dt().then(t).catch(P=>console.error("Failed to sign out",P));let n=Us,r=eo,s=!1,i=null,o=Cc(),c=!1,l=!1,u="",h={};const f=ge(()=>{}),g=()=>{Un&&Un(),Ar&&Ar(),n=null,Us=null,f();const P=ms();Un=(P==null?void 0:P.unsubscribe)||null;const U=P.subscribe(T=>{n=T,Us=T,f()});Ar=()=>U.unsubscribe()},w=()=>Yu().then(P=>{n=P,Us=P,f()}).catch(P=>{console.error("Failed to refresh games",P),u="Saved, but failed to refresh games. Reload the page to confirm.",f()}),E=()=>{Fn&&Fn(),Cr&&Cr(),r=null,eo=null,f();const P=E_();Fn=(P==null?void 0:P.unsubscribe)||null;const U=P.subscribe(T=>{r=T,eo=T,f()});Cr=()=>U.unsubscribe()},v=()=>{i=null,o=Cc(),u="",h={},s=!0,f()},N=P=>{i=P.id,o={id:P.id,title:P.title||"",imageUrl:P.imageUrl||"",manufacturerId:P.manufacturerId||"",manufacturer:P.manufacturer||"",yearReleased:up(P.yearReleased),notes:P.notes||"",dataLinks:Zn(P.dataLinks)},u="",h={},s=!0,f()},D=()=>{c||l||(i=null,o=Cc(),u="",h={},s=!1,f())},x=()=>{const P={},U=(o.id||"").trim();i&&!U&&(P.id="Game ID is required."),i&&U.includes("/")&&(P.id="Game ID cannot include /."),i&&U!==i&&(n||[]).some(_=>_.id===U)&&(P.id="A game with this ID already exists."),o.title.trim()||(P.title="Game Title is required."),o.yearReleased!==null&&Number.isNaN(Number(o.yearReleased))&&(P.yearReleased="Year Released must be numeric."),h=P;const T=Object.values(P);return T.length?T[0]:""},R=()=>{if(c)return;const P=x();if(P){u=P,f();return}c=!0,u="",h={},f();const U=(r||[]).find(_=>_.id===o.manufacturerId),T=i?(o.id||"").trim():void 0;O.promise=v_({...o,id:T||void 0,title:o.title.trim(),imageUrl:(o.imageUrl||"").trim(),manufacturerId:(o.manufacturerId||"").trim(),manufacturer:((U==null?void 0:U.name)||o.manufacturer||"").trim(),yearReleased:up(o.yearReleased),notes:(o.notes||"").trim(),dataLinks:Zn(o.dataLinks)}).then(()=>{if(i&&T&&T!==i)return ep(i)}).then(()=>(c=!1,D(),w())).catch(_=>{console.error("Failed to save game",_),u="Failed to save game. Check the fields and try again.",f()}).finally(()=>{c=!1,f()})},F=()=>{!i||l||confirm("Delete this game from the games collection? Existing lineup entries or ratings may still reference it.")&&(l=!0,u="",f(),O.promise=ep(i).then(()=>(l=!1,D(),w())).catch(P=>{console.error("Failed to delete game",P),u="Failed to delete game.",f()}).finally(()=>{l=!1,f()}))};return Rc||(Rc=!0,Un||g(),Fn||E()),Kt(()=>{Un&&Un(),Ar&&Ar(),Fn&&Fn(),Cr&&Cr(),Un=null,Ar=null,Fn=null,Cr=null,Us=null,eo=null,Rc=!1}),ve(Xe(()=>Lt(e)),m.class`admin-crud-page`(m.class`admin-crud-header`(tt("🕹️ Games Database"),G.type`button`.class`admin-pill-button`.onClick(v)("Add")),m.class`admin-crud-card`(oe.style`margin-top:0;opacity:0.78;`("Manage canonical games used by lineup and ratings."),P=>u&&!s?oe.style`color:#f6c177;`(u):"",m.class`admin-crud-list`(P=>{if(r===null)return z.style`opacity:0.7;`("Loading manufacturers...");if(!r.length)return z.style`opacity:0.7;`("No manufacturers found. Add a manufacturer first.");if(n===null)return z.style`opacity:0.7;`("Loading games...");const U=n.filter(T=>!r.some(_=>Q_(T,_)));return[...r.map(T=>Il({manufacturer:T,games:Nk(T,n||[]),onGameClick:N}).key(T.id)),U.length?Il({manufacturer:{id:"unmatched",name:"Unmatched Games",logoUrl:"",opinions:"Games without a matching manufacturer link."},games:U,onGameClick:N}).key("unmatched"):""]}),m.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(q.href`../admin/current-games.html`.class`admin-secondary-button`("Lineup Admin"),q.href`../admin/manufacturers.html`.class`admin-secondary-button`("Manufacturers Admin"),q.href`../admin/game-ratings.html`.class`admin-secondary-button`("Ratings Admin"))),P=>s?Z_({isEditing:!!i,originalGameId:i||"",editGame:o,manufacturers:r||[],errorMessage:u,fieldErrors:h,isSaving:c,isDeleting:l,onChange:U=>{var T,_,I;o=U,h={...h,id:(T=U.id)!=null&&T.trim()?"":h.id,title:(_=U.title)!=null&&_.trim()?"":h.title,manufacturerId:U.manufacturerId||(I=U.manufacturer)!=null&&I.trim()?"":h.manufacturerId,yearReleased:U.yearReleased===null||!Number.isNaN(Number(U.yearReleased))?"":h.yearReleased},f()},onSave:R,onDelete:F,onCancel:D}):""))}),Il=O(({manufacturer:t,games:e,onGameClick:n})=>(Il.inputs(r=>{[{manufacturer:t,games:e,onGameClick:n}]=r,n=K(n)}),m.style`display:grid;gap:0.55em;padding:0.85em 0;border-top:1px solid rgba(255,255,255,0.12);`(m.style`display:flex;align-items:center;justify-content:space-between;gap:1em;flex-wrap:wrap;`(m.style`display:flex;align-items:center;gap:0.75em;min-width:0;`(r=>t.logoUrl?Y.class`admin-crud-thumb`.style`width:46px;height:46px;`.src`${t.logoUrl}`.attr("alt",s=>t.name||"Manufacturer logo"):m.class`admin-crud-thumb admin-crud-thumb-placeholder`.style`width:46px;height:46px;font-size:1em;`(s=>(t.name||"?").slice(0,2).toUpperCase()),m.style`min-width:0;`(fr(r=>t.name||"Untitled manufacturer"),m.style`margin-top:0.12em;opacity:0.66;`(z(r=>`${e.length} game${e.length===1?"":"s"}`))))),r=>e.length?m.style`display:grid;gap:0.55em;`(e.map(s=>Y_({game:s,manufacturers:[t],onClick:n}).key(s.id))):z.style`opacity:0.7;`("No games for this manufacturer yet.")))),Nk=(t,e)=>e.filter(n=>Q_(n,t)),Q_=(t,e)=>t.manufacturerId===e.id||lp(t.manufacturer)===lp(e.name),Y_=O(({game:t,manufacturers:e,onClick:n})=>(Y_.inputs(r=>{[{game:t,manufacturers:e,onClick:n}]=r,n=K(n)}),G.type`button`.class`admin-crud-row`.onClick(()=>n(t))(r=>t.imageUrl?Y.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",s=>t.title||"Game image"):m.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),m(fr(r=>t.title||"Untitled game"),m.style`margin-top:0.15em;opacity:0.74;`(z(r=>[Lk(t,e),t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),z.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Game ID"),Z(r=>t.id))))),Lk=(t,e)=>{const n=e.find(r=>r.id===t.manufacturerId);return(n==null?void 0:n.name)||t.manufacturer||""},lp=t=>String(t||"").trim().toLowerCase(),X_=t=>`${t} pinball machine backglass`,Mk=t=>`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(X_(t))}`,Ok=t=>`https://pinside.com/pinball/machine/${encodeURIComponent(t)}`,Z_=O(({isEditing:t,originalGameId:e,editGame:n,manufacturers:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f})=>{Z_.inputs(R=>{[{isEditing:t,originalGameId:e,editGame:n,manufacturers:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f}]=R,l=K(l),u=K(u),h=K(h),f=K(f)});const g=R=>l({...n,...R}),w=(R,F)=>{var U,T;const P=Zn(n.dataLinks,!0);P[R]={title:((U=P[R])==null?void 0:U.title)||"",url:((T=P[R])==null?void 0:T.url)||"",...F},g({dataLinks:P})},E=()=>{g({dataLinks:[...Zn(n.dataLinks,!0),{title:"",url:""}]})},v=R=>{g({dataLinks:Zn(n.dataLinks,!0).filter((F,P)=>P!==R)})},N=R=>i[R]?"#f87171":"rgba(255,255,255,0.2)",D=R=>i[R]?"#fca5a5":"inherit",x=R=>{var F;R.key!=="Enter"||R.shiftKey||R.metaKey||R.ctrlKey||R.altKey||String(((F=R.target)==null?void 0:F.tagName)||"").toLowerCase()!=="textarea"&&(R.preventDefault(),u())};return m.class`admin-crud-modal-backdrop`(m.class`admin-crud-modal`.onKeyDown(x)(m.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(m(tt.style`margin:0;`(t?"Edit Game":"Add Game"),z.style`opacity:0.72;`("Manage the canonical machine record.")),G.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),R=>s?oe.style`color:#f6c177;`(s):"",R=>Object.values(i).filter(Boolean).length?m.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(i).filter(Boolean).map(F=>z(F))):"",m.class`admin-crud-form-grid`.style`margin-top:1em;`(R=>t?[ce.attr("style.color",F=>D("id"))("Game ID"),m.style`display:grid;gap:0.28em;`(ue.type`text`.value(F=>n.id||"").onInput(F=>{var P;g({id:((P=F==null?void 0:F.target)==null?void 0:P.value)||""})}).attr("aria-invalid",F=>i.id?"true":"false").attr("title",F=>i.id||"").attr("style.borderColor",F=>N("id"))(),F=>(n.id||"").trim()!==e?z.style`color:#f6c177;line-height:1.35;`("Changing this value can change or break links to this game."):"",F=>(n.id||"").trim()?z(q.href`${Ok((n.id||"").trim())}`.class`admin-inline-edit-link`.attr("target","_blank").attr("rel","noopener noreferrer").style`justify-self:start;`("pinside link")):"")]:"",ce.attr("style.color",R=>D("title"))("Game Title"),ue.type`text`.value(R=>n.title||"").onInput(R=>{var F;g({title:((F=R==null?void 0:R.target)==null?void 0:F.value)||""})}).attr("aria-invalid",R=>i.title?"true":"false").attr("title",R=>i.title||"").attr("style.borderColor",R=>N("title"))(),ce("Image URL"),m.style`display:grid;gap:0.5em;`(m.style`display:grid;grid-template-columns:minmax(0,1fr) auto;gap:0.5em;align-items:stretch;`(ue.type`url`.value(R=>n.imageUrl||"").onInput(R=>{var F;g({imageUrl:((F=R==null?void 0:R.target)==null?void 0:F.value)||""})})(),R=>n.imageUrl?Y.src`${n.imageUrl}`.attr("alt",F=>`${n.title||"Game"} image preview`).style`width:64px;height:42px;object-fit:cover;border:1px solid rgba(255,255,255,0.2);border-radius:0.5em;background:#101010;`:""),R=>(n.title||"").trim()?q.href`${Mk(n.title||"")}`.class`admin-inline-edit-link`.attr("target","_blank").attr("rel","noopener noreferrer").style`justify-self:start;`.attr("title",F=>X_(n.title||""))("view google images"):z.style`opacity:0.72;`("Add a game title to view Google Images.")),ce.attr("style.color",R=>D("manufacturerId"))("Manufacturer"),m.class`admin-field-with-link`(Gl.value(R=>n.manufacturerId||"").onChange(R=>{var F;g({manufacturerId:((F=R==null?void 0:R.target)==null?void 0:F.value)||""})}).attr("aria-invalid",R=>i.manufacturerId?"true":"false").attr("title",R=>i.manufacturerId||"").attr("style.borderColor",R=>N("manufacturerId"))([nr.value``(r.length?"Select a manufacturer":"Add a manufacturer first"),...r.map(R=>nr.value`${R.id}`(R.name||"Untitled manufacturer"))]),q.href`/admin/manufacturers.html`.class`admin-inline-edit-link`("edit manufacturers")),ce.attr("style.color",R=>D("yearReleased"))("Year Released"),ue.type`number`.value(R=>n.yearReleased??"").onInput(R=>{var F;g({yearReleased:Uk((F=R==null?void 0:R.target)==null?void 0:F.value)})}).attr("aria-invalid",R=>i.yearReleased?"true":"false").attr("title",R=>i.yearReleased||"").attr("style.borderColor",R=>N("yearReleased"))(),ce("Notes"),rs.value(R=>n.notes||"").onInput(R=>{var F;g({notes:((F=R==null?void 0:R.target)==null?void 0:F.value)||""})})(),ce("Data Links"),m.style`display:grid;gap:0.55em;`(R=>Zn(n.dataLinks,!0).length?Zn(n.dataLinks,!0).map((F,P)=>m.style`display:grid;grid-template-columns:1fr 1fr auto;gap:0.45em;align-items:center;`(ue.type`text`.placeholder`Title`.value(U=>F.title||"").onInput(U=>{var T;w(P,{title:((T=U==null?void 0:U.target)==null?void 0:T.value)||""})})(),ue.type`url`.placeholder`URL`.value(U=>F.url||"").onInput(U=>{var T;w(P,{url:((T=U==null?void 0:U.target)==null?void 0:T.value)||""})})(),G.type`button`.class`admin-danger-button`.onClick(()=>v(P))("🗑️ Delete")).key(`data-link-${P}`)):z.style`opacity:0.72;`("No data links added."),m(G.type`button`.class`admin-secondary-button`.onClick(E)("Add Data Link")))),m.class`admin-crud-modal-actions`(m.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",R=>o?"disabled":null).onClick(u)(R=>o?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",R=>o?"disabled":null).onClick(f)("Cancel")),R=>t?G.type`button`.class`admin-danger-button`.attr("disabled",F=>c?"disabled":null).onClick(h)(F=>c?"🗑️ Deleting...":"🗑️ Delete"):"")))}),Uk=t=>{if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},up=t=>{if(typeof t=="number"&&!Number.isNaN(t))return t;if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},Zn=(t,e=!1)=>Array.isArray(t)?t.map(n=>({title:((n==null?void 0:n.title)||"").trim(),url:((n==null?void 0:n.url)||"").trim()})).filter(n=>e||n.title||n.url):[],Fk=new URL(""+new URL("rating-badge-CCDAE7Ja.png",import.meta.url).href,import.meta.url).href,id=O(({rating:t,size:e=82})=>{id.inputs(r=>{[{rating:t,size:e=82}]=r});const n=$k(t);return m.class`rating-badge`.attr("aria-label",r=>n?`Rating ${n} out of 10`:"Not rated").attr("title",r=>n?`${n}/10`:"Not rated").style`
      width:${e}px;
      height:${e}px;
      position:relative;
      display:inline-block;
      flex:0 0 auto;
    `(Y.src`${Fk}`.attr("alt","").attr("aria-hidden","true").style`
          width:100%;
          height:100%;
          display:block;
          object-fit:contain;
        `(),n?Z.style`
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
          `(n):"")}),$k=t=>typeof t!="number"||Number.isNaN(t)?"":t.toFixed(1).replace(/\.0$/,""),kc=()=>({gameId:"",rating:null,review:"",videos:[],isVisible:!0});let Sc=!1,Fs=null,$s=null,$n=null,Rr=null,Bn=null,kr=null;const RS=br(t=>e0(t)),e0=O(t=>{e0.inputs(([_])=>{t=K(_)});const e=()=>dt().then(t).catch(_=>console.error("Failed to sign out",_));let n=Fs,r=$s,s=!1,i=null,o=kc(),c=!1,l=!1,u="",h={};const f=ge(()=>{}),g=()=>{$n&&$n(),Rr&&Rr(),r=null,$s=null,f();const _=ZR();$n=(_==null?void 0:_.unsubscribe)||null;const I=_.subscribe(ge(C=>{r=C,$s=C}));Rr=()=>I.unsubscribe()},w=()=>{Bn&&Bn(),kr&&kr(),n=null,Fs=null,f();const _=ms();Bn=(_==null?void 0:_.unsubscribe)||null;const I=_.subscribe(ge(C=>{n=C,Fs=C}));kr=()=>I.unsubscribe()},E=()=>tk().then(_=>{r=_,$s=_,f()}).catch(_=>{console.error("Failed to refresh game ratings",_),u="Saved, but failed to refresh ratings. Reload the page to confirm.",f()}),v=()=>Yu().then(_=>{n=_,Fs=_,f()}).catch(_=>{console.error("Failed to refresh games",_)}),N=()=>n!==null?Promise.resolve(n):(f(),v().then(()=>n||[])),D=()=>{i=null,o={...kc()},u="",h={},s=!0,f(),O.promise=N()},x=_=>{const I=_.id||_.gameId;i=I||null,o={id:I,gameId:_.gameId||_.id||"",rating:typeof _.rating=="number"?_.rating:null,review:_.review||"",videos:Array.isArray(_.videos)?_.videos:[],isVisible:_.isVisible!==!1},u="",h={},s=!0,f(),O.promise=N()},R=()=>{c||l||(i=null,o=kc(),h={},u="",s=!1,f())},F=()=>{const _={};o.gameId||(_.gameId="Game is required."),o.rating===null||Number.isNaN(Number(o.rating))?_.rating="Rating is required.":(Number(o.rating)<0||Number(o.rating)>10)&&(_.rating="Rating must be between 0 and 10."),h=_;const I=Object.values(_);return I.length?I[0]:""},P=()=>{if(c)return;const _=F();if(_){u=_,f();return}c=!0,u="",f(),O.promise=nk({...o,id:o.gameId,rating:Number(o.rating),review:(o.review||"").trim(),videos:jk(o.videos),isVisible:o.isVisible!==!1}).then(()=>(c=!1,R(),E())).catch(I=>{console.error("Failed to save game rating",I),u="Failed to save rating. Check the fields and try again.",f()}).finally(()=>{c=!1,f()})},U=()=>{!i||l||confirm("Delete this game rating?")&&(l=!0,u="",f(),O.promise=rk(i).then(()=>(l=!1,R(),E())).catch(_=>{console.error("Failed to delete game rating",_),u="Failed to delete rating.",f()}).finally(()=>{l=!1,f()}))};Sc||(Sc=!0,$n||g(),Bn||w()),Kt(()=>{$n&&$n(),Rr&&Rr(),Bn&&Bn(),kr&&kr(),$n=null,Rr=null,Bn=null,kr=null,Fs=null,$s=null,Sc=!1});const T=()=>r===null?z.style`opacity:0.7;`("Loading ratings..."):r.length?r.map(_=>t0({rating:_,game:Bk(_,n||[]),onClick:x}).key(_.id||_.gameId)):"";return ve(Xe(()=>Lt(e)),m.class`admin-crud-page`(m.class`admin-crud-header`(tt("⭐ Game Ratings"),G.type`button`.class`admin-pill-button`.onClick(D)("Add")),m.class`admin-crud-card`(_=>u&&!s?oe.style`color:#f6c177;`(u):"",m.class`admin-crud-list`(_=>T()),m.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(q.href`../ratings.html`.class`admin-secondary-button`("View Public Ratings"))),_=>s?n0({isEditing:!!i,editRating:o,games:n||[],isGamesLoaded:n!==null,errorMessage:u,fieldErrors:h,isSaving:c,isDeleting:l,onChange:I=>{o=I,h={...h,gameId:I.gameId?"":h.gameId,rating:I.rating!==null&&!Number.isNaN(Number(I.rating))?"":h.rating},f()},onSave:P,onDelete:U,onCancel:R}):""))}),t0=O(({game:t,rating:e,onClick:n})=>(t0.inputs(r=>{[{game:t,rating:e,onClick:n}]=r,n=K(n)}),G.type`button`.class`admin-crud-row`.onClick(()=>n(e))(r=>t!=null&&t.imageUrl?Y.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",s=>t.title||"Game image"):m.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),m(fr(r=>(t==null?void 0:t.title)||e.gameId||e.id||"Untitled game"),m.style`margin-top:0.15em;opacity:0.74;`(z(r=>[(t==null?void 0:t.manufacturer)||"",t!=null&&t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),m.class`admin-rating-badge-cell`.style`display:grid;justify-items:end;gap:0.25em;`(r=>typeof(e==null?void 0:e.rating)=="number"&&!Number.isNaN(e.rating)?id({rating:e.rating}):z.style`opacity:0.72;`("Not rated"),r=>(e==null?void 0:e.isVisible)===!1?z.style`opacity:0.72;`("Hidden"):"")))),n0=O(({isEditing:t,editRating:e,games:n,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f})=>{n0.inputs(x=>{[{isEditing:t,editRating:e,games:n,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f}]=x,l=K(l),u=K(u),h=K(h),f=K(f)});const g=x=>{l({...e,...x})},w=(x,R)=>{var P,U;const F=[...e.videos||[]];F[x]={url:((P=F[x])==null?void 0:P.url)||"",description:((U=F[x])==null?void 0:U.description)||"",...R},g({videos:F})},E=()=>{g({videos:[...e.videos||[],{url:"",description:""}]})},v=x=>{g({videos:(e.videos||[]).filter((R,F)=>F!==x)})},N=x=>i[x]?"#f87171":"rgba(255,255,255,0.2)",D=x=>i[x]?"#fca5a5":"inherit";return m.class`admin-crud-modal-backdrop`(m.class`admin-crud-modal`(m.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(m(tt.style`margin:0;`(x=>t?"Edit Rating":"Add Rating"),z.style`opacity:0.72;`("Create or update the public rating for this game.")),G.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),x=>s?oe.style`color:#f6c177;`(s):"",x=>Object.values(i).filter(Boolean).length?m.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(i).filter(Boolean).map(R=>z(R))):"",m.class`admin-crud-form-grid`.style`margin-top:1em;`(ce.attr("style.color",x=>D("gameId"))("Game"),x=>xa({value:e.gameId||"",games:n,isLoaded:r,fieldError:i.gameId,onChange:R=>g({gameId:R})}).key(`${r?"loaded":"loading"}-${n.length}`),ce.attr("style.color",x=>D("rating"))("Rating"),ue.type`number`.attr("min","0").attr("max","10").attr("step","0.1").value(x=>e.rating??"").onInput(x=>{var R;g({rating:zk((R=x==null?void 0:x.target)==null?void 0:R.value)})}).attr("aria-invalid",x=>i.rating?"true":"false").attr("title",x=>i.rating||"").attr("style.borderColor",x=>N("rating"))(),ce("Review"),rs.value(x=>e.review||"").onInput(x=>{var R;g({review:((R=x==null?void 0:x.target)==null?void 0:R.value)||""})})(),ce("Videos"),m.style`display:grid;gap:0.6em;`(x=>(e.videos||[]).length?(e.videos||[]).map((R,F)=>m.style`display:grid;gap:0.45em;border:1px solid rgba(255,255,255,0.12);border-radius:0.55em;padding:0.65em;background:rgba(0,0,0,0.18);`(m.style`display:grid;grid-template-columns:1fr auto;gap:0.45em;align-items:center;`(ue.type`url`.style`width:100%;`.value(P=>R.url||"").attr("placeholder","YouTube video URL").onInput(P=>{var U;w(F,{url:((U=P==null?void 0:P.target)==null?void 0:U.value)||""})})(),P=>R.url?q.href`${R.url}`.class`admin-secondary-button`.style`text-decoration:none;`.attr("target","_blank").attr("rel","noopener noreferrer").attr("title","Open video link")("🔗"):""),ue.type`text`.style`width:100%;`.value(P=>R.description||"").attr("placeholder","Description").onInput(P=>{var U;w(F,{description:((U=P==null?void 0:P.target)==null?void 0:U.value)||""})})(),m.style`display:flex;justify-content:flex-end;`(G.type`button`.class`admin-secondary-button`.onClick(()=>v(F))("🗑️ Remove")))):z.style`opacity:0.72;`("No videos linked."),G.type`button`.class`admin-secondary-button`.onClick(E)("Add Video")),ce("Visible on public page"),ce.style`display:flex;gap:0.5em;align-items:center;`(ue.type`checkbox`.attr("checked",x=>e.isVisible!==!1?"checked":null).onChange(x=>{var R;g({isVisible:!!((R=x==null?void 0:x.target)!=null&&R.checked)})})(),Z(x=>e.isVisible!==!1?"Visible":"Hidden"))),m.class`admin-crud-modal-actions`(m.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",x=>o?"disabled":null).onClick(u)(x=>o?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",x=>o?"disabled":null).onClick(f)("Cancel")),x=>t?G.type`button`.class`admin-danger-button`.attr("disabled",R=>c?"disabled":null).onClick(h)(R=>c?"🗑️ Deleting...":"🗑️ Delete"):"")))}),Bk=(t,e)=>{const n=t.gameId||t.id;return e.find(r=>r.id===n)||null},jk=t=>Array.isArray(t)?t.map(e=>({url:((e==null?void 0:e.url)||"").trim(),description:((e==null?void 0:e.description)||"").trim()})).filter(e=>e.url||e.description):[],zk=t=>{if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},Pc=()=>({name:"",logoUrl:"",opinions:""});let xc=!1,jn=null,zn=null,Sr=null;const kS=br(t=>r0(t)),r0=O(t=>{r0.inputs(([R])=>{t=K(R)});const e=()=>dt().then(t).catch(R=>console.error("Failed to sign out",R));let n=jn,r=!1,s=null,i=Pc(),o=!1,c=!1,l="",u={};const h=()=>{zn&&zn(),Sr&&Sr(),n=null,jn=null;const R=E_();zn=(R==null?void 0:R.unsubscribe)||null;const F=R.subscribe(P=>{n=P,jn=P});Sr=()=>F.unsubscribe()},f=()=>YR().then(R=>{n=R,jn=R}).catch(R=>{console.error("Failed to refresh manufacturers",R),l="Saved, but failed to refresh manufacturers. Reload the page to confirm."});O.promise=f();const g=(R,F)=>{const P=n||jn||[],U={...P.find(I=>I.id===R)||{},...F,id:R},T=P.some(I=>I.id===R),_=Hk(T?P.map(I=>I.id===R?U:I):[...P,U]);n=_,jn=_},w=()=>{s=null,i=Pc(),l="",u={},r=!0},E=R=>{s=R.id,i={id:R.id,name:R.name||"",logoUrl:R.logoUrl||"",opinions:R.opinions||""},l="",u={},r=!0},v=()=>{o||c||(s=null,i=Pc(),l="",u={},r=!1)},N=()=>{const R={},F=(i.id||"").trim();s&&!F&&(R.id="Manufacturer ID is required."),s&&F.includes("/")&&(R.id="Manufacturer ID cannot include /."),s&&F!==s&&(n||[]).some(U=>U.id===F)&&(R.id="A manufacturer with this ID already exists."),i.name.trim()||(R.name="Manufacturer Name is required."),u=R;const P=Object.values(R);return P.length?P[0]:""},D=()=>{if(o)return;const R=N();if(R){l=R;return}o=!0,l="",u={};const F={...i,id:s?(i.id||"").trim():void 0,name:i.name.trim(),logoUrl:(i.logoUrl||"").trim(),opinions:(i.opinions||"").trim()},P=s;return XR(F).then(U=>{const T=F.id||P||(U==null?void 0:U.id);if(T&&g(T,F),P&&T&&T!==P)return Zf(P)}).then(()=>(o=!1,v(),f())).catch(U=>{console.error("Failed to save manufacturer",U),l="Failed to save manufacturer. Check the fields and try again."}).finally(()=>{o=!1})},x=()=>{!s||c||confirm("Delete this manufacturer? Existing games may still reference it.")&&(c=!0,l="",O.promise=Zf(s).then(()=>(c=!1,v(),f())).catch(R=>{console.error("Failed to delete manufacturer",R),l="Failed to delete manufacturer."}).finally(()=>{c=!1}))};return xc||(xc=!0,zn||h()),Kt(()=>{zn&&zn(),Sr&&Sr(),zn=null,Sr=null,jn=null,xc=!1}),ve(Xe(()=>Lt(e)),m.class`admin-crud-page`(m.class`admin-crud-header`(tt("🏭 Manufacturers Database"),G.type`button`.class`admin-pill-button`.onClick(w)("Add")),m.class`admin-crud-card`(R=>l&&!r?oe.style`color:#f6c177;`(l):"",m.class`admin-crud-list`(R=>n===null?z.style`opacity:0.7;`("Loading manufacturers..."):n.length?n.map(F=>s0({manufacturer:F,onClick:E}).key(F.id)):z.style`opacity:0.7;`("No manufacturers found. Use Add Manufacturer to create the first one.")),m.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(q.href`../admin/games.html`.class`admin-secondary-button`("Games Admin"))),R=>r?o0({isEditing:!!s,editManufacturer:i,errorMessage:l,fieldErrors:u,isSaving:o,isDeleting:c,onChange:F=>{var P,U;i=F,u={...u,id:(P=F.id)!=null&&P.trim()?"":u.id,name:(U=F.name)!=null&&U.trim()?"":u.name}},onSave:D,onDelete:x,onCancel:v}):""))}),Hk=t=>[...t].sort((e,n)=>String(e.name||"").localeCompare(String(n.name||""),void 0,{sensitivity:"base"})),s0=O(({manufacturer:t,onClick:e})=>(s0.inputs(n=>{[{manufacturer:t,onClick:e}]=n,e=K(e)}),G.type`button`.class`admin-crud-row`.onClick(()=>e(t))(n=>t.logoUrl?Y.class`admin-crud-thumb`.src`${t.logoUrl}`.attr("alt",r=>t.name||"Manufacturer logo"):m.class`admin-crud-thumb admin-crud-thumb-placeholder`(r=>qk(t.name)),m(fr(n=>t.name||"Untitled manufacturer"),m.style`margin-top:0.15em;opacity:0.74;`(z(n=>t.opinions||"No opinions"))),z.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Manufacturer ID"),Z(n=>t.id))))),qk=(t="")=>(t.trim().charAt(0)||"M").toUpperCase(),i0=t=>`${t} manufacturer logo`,Gk=t=>`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(i0(t))}`,o0=O(({isEditing:t,editManufacturer:e,errorMessage:n,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:c,onDelete:l,onCancel:u})=>{o0.inputs(E=>{[{isEditing:t,editManufacturer:e,errorMessage:n,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:c,onDelete:l,onCancel:u}]=E,o=K(o),c=K(c),l=K(l),u=K(u)});const h=E=>o({...e,...E}),f=E=>r[E]?"#f87171":"rgba(255,255,255,0.2)",g=E=>r[E]?"#fca5a5":"inherit",w=E=>{var v;E.key!=="Enter"||E.shiftKey||E.metaKey||E.ctrlKey||E.altKey||String(((v=E.target)==null?void 0:v.tagName)||"").toLowerCase()!=="textarea"&&(E.preventDefault(),c())};return m.class`admin-crud-modal-backdrop`(m.class`admin-crud-modal`.onKeyDown(w)(m.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(m(tt.style`margin:0;`(t?"Edit Manufacturer":"Add Manufacturer"),z.style`opacity:0.72;`("Manage the canonical manufacturer record.")),G.type`button`.class`admin-secondary-button`.onClick(u)("Cancel")),E=>n?oe.style`color:#f6c177;`(n):"",E=>Object.values(r).filter(Boolean).length?m.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(r).filter(Boolean).map(v=>z(v))):"",m.class`admin-crud-form-grid`.style`margin-top:1em;`(E=>t?[ce.attr("style.color",v=>g("id"))("Manufacturer ID"),m.style`display:grid;gap:0.28em;`(ue.type`text`.value(v=>e.id||"").onInput(v=>{var N;h({id:((N=v==null?void 0:v.target)==null?void 0:N.value)||""})}).attr("aria-invalid",v=>r.id?"true":"false").attr("title",v=>r.id||"").attr("style.borderColor",v=>f("id"))(),z.style`color:#f6c177;line-height:1.35;`("Changing this value can change or break links to this manufacturer."))]:"",ce.attr("style.color",E=>g("name"))("Manufacturer Name"),ue.type`text`.value(E=>e.name||"").onInput(E=>{var v;h({name:((v=E==null?void 0:E.target)==null?void 0:v.value)||""})}).attr("aria-invalid",E=>r.name?"true":"false").attr("title",E=>r.name||"").attr("style.borderColor",E=>f("name"))(),ce("Logo URL"),m.style`display:grid;gap:0.5em;`(ue.type`url`.value(E=>e.logoUrl||"").onInput(E=>{var v;h({logoUrl:((v=E==null?void 0:E.target)==null?void 0:v.value)||""})})(),E=>(e.name||"").trim()?q.href`${Gk(e.name||"")}`.class`admin-inline-edit-link`.attr("target","_blank").attr("rel","noopener noreferrer").style`justify-self:start;`.attr("title",v=>i0(e.name||""))("google images"):z.style`opacity:0.72;`("Add a manufacturer name to view Google Images.")),ce("Opinions"),rs.value(E=>e.opinions||"").onInput(E=>{var v;h({opinions:((v=E==null?void 0:E.target)==null?void 0:v.value)||""})})()),m.class`admin-crud-modal-actions`(m.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",E=>s?"disabled":null).onClick(c)(E=>s?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",E=>s?"disabled":null).onClick(u)("Cancel")),E=>t?G.type`button`.class`admin-danger-button`.attr("disabled",v=>i?"disabled":null).onClick(l)(v=>i?"🗑️ Deleting...":"🗑️ Delete"):"")))});let dp=!1,to=null;const SS=br(t=>a0(t)),a0=O(t=>(e=to||Date.now(),{date:n,time:r}=ip(Number(e)))=>{a0.inputs(([l])=>{t=K(l)});const s=ge(()=>{});function i(){const l=ip(Number(e));n=l.date,r=l.time}dp||(dp=!0,O.promise=ka().then(l=>{typeof l=="number"&&(e=l,to=l,i(),s())}).catch(l=>{console.error("Failed to load next meetup date",l)}));const o=()=>dt().then(t).catch(l=>{console.error("Failed to sign out",l)}),c=()=>GR(Number(e)).then(()=>{to=Number(e),alert("saved")}).catch(l=>{console.error("Failed to save meetup date",l)});return ve(Xe(()=>Lt(o)),m.class`admin-crud-page`(m.class`admin-crud-header`(tt(Y.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,"📅 Meeting Tools")),m.class`admin-crud-card`(O_({nextMeetupDate:e,date:n,time:r,onDate:l=>{e=l,to=l,i(),s()},onSave:c}))))}),Wk="https://pinside.com/pinball/community/pinsiders/thecapn/collection/history",Vc=()=>({gameId:"",title:"",dateAddedToCollection:"",dateRemovedFromCollection:"",notes:"",isVisible:!0,pinsideUrl:"",pinsideId:"",source:""});let Dc=!1,Bs=null,Hn=null,Pr=null,js=null,qn=null,xr=null;const PS=br(t=>c0(t)),c0=O(t=>{c0.inputs(([b])=>{t=K(b)});const e=()=>dt().then(t).catch(b=>console.error("Failed to sign out",b));let n=!1,r=!1,s=!1,i="",o="",c="",l=!1,u={},h=!1,f=null,g=Vc(),w=Bs,E=js;const v=ge(()=>{}),N=()=>{Hn&&Hn(),Pr&&Pr(),w=null,Bs=null,i="",v();const b=lk();Hn=(b==null?void 0:b.unsubscribe)||null;const ne=b.subscribe(Be=>{w=Be,Bs=Be,v()});Pr=()=>ne.unsubscribe()},D=()=>{qn&&qn(),xr&&xr(),E=null,js=null,v();const b=ms();qn=(b==null?void 0:b.unsubscribe)||null;const ne=b.subscribe(Be=>{E=Be,js=Be,v()});xr=()=>ne.unsubscribe()},x=()=>A_().then(b=>{w=b,Bs=b,v()}).catch(b=>{console.error("Failed to refresh past owned games list",b),i="Saved, but failed to refresh the game list. Reload the page to confirm.",v()}),R=()=>Yu().then(b=>{E=b,js=b,v()}).catch(b=>{console.error("Failed to refresh games library",b),i="Saved, but failed to refresh the games library. Reload the page to confirm.",v()}),F=()=>{f=null,g=Vc(),i="",u={},h=!0,v()},P=b=>{f=b.id,g={id:b.id,gameId:b.gameId||"",title:"",dateAddedToCollection:vl(b.dateAddedToCollection),dateRemovedFromCollection:vl(b.dateRemovedFromCollection),imageUrl:b.imageUrl||"",manufacturer:b.manufacturer||"",yearReleased:pp(b.yearReleased),notes:b.notes||"",isVisible:b.isVisible!==!1,pinsideUrl:b.pinsideUrl||"",pinsideId:b.pinsideId||"",source:b.source||""},i="",u={},h=!0,v()},U=()=>{n||r||(f=null,g=Vc(),i="",u={},h=!1,v())},T=()=>{const b={};return g.gameId||(b.gameId="Game is required."),g.yearReleased!==null&&typeof g.yearReleased<"u"&&Number.isNaN(Number(g.yearReleased))&&(b.yearReleased="Year must be numeric."),u=b,Object.values(b)[0]||""},_=()=>{if(n)return;const b=T();if(b){i=b,v();return}n=!0,i="",u={},v(),O.promise=C_({...g,id:f||void 0,gameId:(g.gameId||"").trim(),title:"",imageUrl:(g.imageUrl||"").trim(),manufacturer:(g.manufacturer||"").trim(),notes:(g.notes||"").trim(),pinsideUrl:(g.pinsideUrl||"").trim(),pinsideId:(g.pinsideId||"").trim(),source:(g.source||"").trim(),yearReleased:pp(g.yearReleased),isVisible:g.isVisible!==!1}).then(()=>(n=!1,U(),x())).catch(ne=>{console.error("Failed to save past owned game",ne),i="Failed to save game. Check the fields and try again.",v()}).finally(()=>{n=!1,v()})},I=()=>{!f||r||confirm("Delete this past owned game?")&&(r=!0,i="",v(),O.promise=dk(f).then(()=>(r=!1,U(),x())).catch(b=>{console.error("Failed to delete past owned game",b),i="Failed to delete game.",v()}).finally(()=>{r=!1,v()}))},C=b=>{if(!b.length){o="No Pinside games were found. Paste the copied Pinside history text and try again.",v();return}s=!0,o=`Found ${b.length} Pinside game${b.length===1?"":"s"}. Syncing new items only...`,v(),O.promise=hk(b,E||[]).then(ne=>(o=`Sync complete. Added ${ne.added}; skipped ${ne.skipped} already-present item${ne.skipped===1?"":"s"}.`,R().then(x))).catch(ne=>{console.error("Failed to sync Pinside games",ne),o="Sync failed while writing to Firestore. Check permissions and try again.",v()}).finally(()=>{s=!1,v()})},A=()=>{const b=Xk(c);C(b)},S=()=>{l=!l,v()};return Dc||(Dc=!0,Hn||N(),qn||D()),Kt(()=>{Hn&&Hn(),Pr&&Pr(),qn&&qn(),xr&&xr(),Hn=null,Pr=null,qn=null,xr=null,Dc=!1,Bs=null,js=null}),ve(Xe(()=>Lt(e)),m.class`admin-crud-page`(m.class`admin-crud-header`(tt("📜 Past Games Owned"),m.style`display:flex;gap:0.75em;align-items:center;flex-wrap:wrap;`(z.style`opacity:0.72;`(b=>w===null?"Loading count...":`${w.length} past game${w.length===1?"":"s"}`),G.type`button`.class`admin-pill-button`.onClick(F)("Add"))),m.class`admin-crud-card`.style`margin-bottom:1em;`(m.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(G.type`button`.class`admin-secondary-button`.attr("aria-expanded",b=>l?"true":"false").onClick(S)("Pinside Sync")),b=>l?m.style`margin-top:0.9em;`(oe.style`margin-top:0;opacity:0.78;`("Paste copied Pinside history text to add missing past-owned games. Imported games are created in the games database and linked here."),m.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(q.href`${Wk}`.class`admin-secondary-button`.attr("target","_blank").attr("rel","noopener noreferrer")("Open Pinside History"),G.type`button`.class`admin-pill-button`.attr("disabled",ne=>s?"disabled":null).onClick(A)("Sync Pasted Text")),ne=>o?oe.style`color:#f6c177;`(o):"",rs.placeholder`Paste copied Pinside history text here.`.value(ne=>c).onInput(ne=>{var Be;c=((Be=ne==null?void 0:ne.target)==null?void 0:Be.value)||"",v()}).style`margin-top:0.8em;width:100%;min-height:120px;`()):""),m.class`admin-crud-card`(oe.style`margin-top:0;opacity:0.78;`("Manage the Firestore pastOwnedGames collection."),b=>i&&!h?oe.style`color:#f6c177;`(i):"",m.class`admin-crud-list`(b=>w===null?z.style`opacity:0.7;`("Loading games..."):w.length?Yk(w).map(ne=>l0({game:Jk(ne,E||[]),onClick:P}).key(ne.id)):z.style`opacity:0.7;`("No past owned games found. Use Add or paste Pinside history text."))),b=>h?u0({isEditing:!!f,editGame:g,gameLibrary:E||[],isGameLibraryLoaded:E!==null,errorMessage:i,fieldErrors:u,isSaving:n,isDeleting:r,onChange:ne=>{g=ne,u={...u,gameId:ne.gameId?"":u.gameId},v()},onSave:_,onDelete:I,onCancel:U}):""))}),l0=O(({game:t,onClick:e})=>(l0.inputs(n=>{[{game:t,onClick:e}]=n,e=K(e)}),G.type`button`.class`admin-crud-row`.onClick(()=>e(t))(n=>t.imageUrl?Y.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",r=>t.title||"Game image"):m.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),m(fr(n=>t.title||"Untitled game"),m.style`margin-top:0.15em;opacity:0.74;`(z(n=>[t.manufacturer||"",t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year",n=>t.gameId&&t.isMissingGame?Z.style`color:#f87171;font-weight:700;`(` · Missing game: ${t.gameId}`):"",n=>t.source==="pinside"?" · Pinside":""))),z.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Past Owned"),Z(n=>[gp(t.dateAddedToCollection),t.dateRemovedFromCollection?` to ${gp(t.dateRemovedFromCollection)}`:"",t.isVisible===!1?" · Hidden":""].join("")))))),Jk=(t,e)=>{const n=Kk(e,t);return{...t,title:(n==null?void 0:n.title)||t.title||t.sourceTitle||"",imageUrl:Qk(n,t),manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null,isMissingGame:!!(t.gameId&&!n)}},Kk=(t,e)=>Nc(t,e.gameId)||Nc(t,e.title)||Nc(t,e.sourceTitle)||null,Nc=(t,e)=>{const n=El(e),r=Lc(e);return n&&(t.find(s=>s.id===e)||t.find(s=>El(s.id)===n)||t.find(s=>Lc(s.id)===r)||t.find(s=>Lc(s.title)===r))||null},El=t=>String(t||"").trim().toLowerCase(),Lc=t=>El(t).replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Qk=(t,e)=>String((t==null?void 0:t.imageUrl)||(t==null?void 0:t.gameImageUrl)||(t==null?void 0:t.backglassUrl)||(t==null?void 0:t.image)||e.imageUrl||e.gameImageUrl||e.backglassUrl||e.image||"").trim(),Yk=t=>[...t].sort((e,n)=>{const r=(e.gameId||"").localeCompare(n.gameId||"",void 0,{sensitivity:"base"});return r||(e.id||"").localeCompare(n.id||"",void 0,{sensitivity:"base"})}),u0=O(({isEditing:t,editGame:e,gameLibrary:n,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f})=>{u0.inputs(w=>{[{isEditing:t,editGame:e,gameLibrary:n,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:c,onChange:l,onSave:u,onDelete:h,onCancel:f}]=w,l=K(l),u=K(u),h=K(h),f=K(f)});const g=w=>{l({...e,...w})};return m.class`admin-crud-modal-backdrop`(m.class`admin-crud-modal`(m.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(m(tt.style`margin:0;`(t?"Edit Past Game":"Add Past Game"),z.style`opacity:0.72;`(t?"Update this past owned entry.":"Create a new past owned entry.")),G.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),w=>s?oe.style`color:#f6c177;`(s):"",m.class`admin-crud-form-grid`.style`margin-top:1em;`(ce("Game"),w=>xa({value:e.gameId||"",games:n,isLoaded:r,fieldError:i.gameId,onChange:E=>g({gameId:E})}).key(`${r?"loaded":"loading"}-${n.length}`),ce("Date Added to Collection"),ue.type`date`.value(w=>e.dateAddedToCollection||"").onInput(w=>{var E;g({dateAddedToCollection:((E=w==null?void 0:w.target)==null?void 0:E.value)||""})})(),ce("Date Removed from Collection"),ue.type`date`.value(w=>e.dateRemovedFromCollection||"").onInput(w=>{var E;g({dateRemovedFromCollection:((E=w==null?void 0:w.target)==null?void 0:E.value)||""})})(),ce("Pinside URL"),ue.type`url`.value(w=>e.pinsideUrl||"").onInput(w=>{var E;g({pinsideUrl:((E=w==null?void 0:w.target)==null?void 0:E.value)||""})})(),ce("Notes"),rs.value(w=>e.notes||"").onInput(w=>{var E;g({notes:((E=w==null?void 0:w.target)==null?void 0:E.value)||""})})(),ce("Visible on public page"),ce.style`display:flex;gap:0.5em;align-items:center;`(ue.type`checkbox`.attr("checked",w=>e.isVisible!==!1?"checked":null).onChange(w=>{var E;g({isVisible:!!((E=w==null?void 0:w.target)!=null&&E.checked)})})(),Z(w=>e.isVisible!==!1?"Visible":"Hidden"))),m.class`admin-crud-modal-actions`(m.style`display:flex;gap:0.7em;flex-wrap:wrap;`(G.type`button`.class`admin-pill-button`.attr("disabled",w=>o?"disabled":null).onClick(u)(w=>o?"Saving...":"Save"),G.type`button`.class`admin-secondary-button`.attr("disabled",w=>o?"disabled":null).onClick(f)("Cancel")),w=>t?G.type`button`.class`admin-danger-button`.attr("disabled",E=>c?"disabled":null).onClick(h)(E=>c?"🗑️ Deleting...":"🗑️ Delete"):"")))}),Xk=t=>{if(!t.trim())return[];const e=Zk(t);return e.length?e:eS(t)},Zk=t=>{const e=new DOMParser().parseFromString(t,"text/html"),n=Array.from(e.querySelectorAll('a[href*="/pinball/machine/"]')),r=new Map;return n.forEach(s=>{var E;const i=d0(s.textContent||s.getAttribute("title")||"");if(!i||i.length<2)return;const o=s.getAttribute("href")||"",c=o.startsWith("http")?o:`https://pinside.com${o}`,l=s.closest("tr, li, article, .game, .machine, .collection-item")||s.parentElement,u=l==null?void 0:l.querySelector("img"),h=(u==null?void 0:u.getAttribute("src"))||(u==null?void 0:u.getAttribute("data-src"))||"",g=((l==null?void 0:l.textContent)||"").match(/\b(19\d{2}|20\d{2})\b/),w=((E=c.split("/pinball/machine/")[1])==null?void 0:E.split(/[/?#]/)[0])||"";r.set(c,{title:i,pinsideUrl:c,pinsideId:w,imageUrl:h.startsWith("//")?`https:${h}`:h,yearReleased:g?Number(g[1]):null})}),[...r.values()].sort((s,i)=>s.title.localeCompare(i.title,void 0,{sensitivity:"base"}))},eS=t=>{const e=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean),n=[];let r=0;for(;r<e.length;){const s=d0(e[r]||""),i=e[r+1]||"",o=hp(i);if(!s||!o){r+=1;continue}const c={title:s,manufacturer:o.manufacturer,yearReleased:o.yearReleased};for(r+=2;r<e.length;){const l=e[r];if(hp(e[r+1]||"")&&!tS(l))break;const h=fp(l,"Purchased"),f=fp(l,"Sold");h?c.dateAddedToCollection=h:f&&(c.dateRemovedFromCollection=f),r+=1}n.push(c)}return n},hp=t=>{const e=t.match(/^(.+),\s*(19\d{2}|20\d{2})$/);return e?{manufacturer:e[1].trim(),yearReleased:Number(e[2])}:null},tS=t=>/^(Purchased|Sold)\s+[A-Za-z]+\s+\d{4}$/i.test(t),fp=(t,e)=>{const n=t.match(new RegExp(`^${e}\\s+([A-Za-z]+)\\s+(\\d{4})$`,"i"));if(!n)return"";const r=nS.findIndex(s=>s.toLowerCase()===n[1].toLowerCase());return r<0?"":`${n[2]}-${String(r+1).padStart(2,"0")}-01`},nS=["January","February","March","April","May","June","July","August","September","October","November","December"],d0=t=>t.replace(/\s+/g," ").replace(/\b(details|machine|view)\b/gi,"").trim(),pp=t=>{if(typeof t=="number"&&!Number.isNaN(t))return t;if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},vl=t=>t?typeof t=="string"?t.slice(0,10):typeof t.toDate=="function"?t.toDate().toISOString().slice(0,10):t.seconds?new Date(t.seconds*1e3).toISOString().slice(0,10):"":"",gp=t=>{const e=vl(t);if(!e)return"No date";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};let no=null;const rS=()=>window.QRCode?Promise.resolve():no||(no=new Promise((t,e)=>{const n=document.createElement("script");n.type="text/javascript",n.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",n.onload=()=>t(),n.onerror=()=>e(new Error("Failed to load QRCode library")),document.head.appendChild(n)}),no),h0=O(t=>{const e=`qr-code-${Math.random().toString(36).slice(2,12)}`,n=()=>{window.requestAnimationFrame(s)},r=()=>{const i=window.QRCode;if(!i||!t)return;const o=document.getElementById(e);o&&(o.innerHTML="",new i(o,{text:t,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.CorrectLevel.L}))},s=()=>{rS().then(r).catch(i=>{console.error("Failed to render QR code",i)})};return h0.updates(i=>{i[0]!==t&&([t]=i,n())}),_g([t],n),m.id`${e}`.attr("oninit",n).style`display:flex;justify-content:center;align-items:center;margin-top:1em;min-height:300px;`()}),f0=O(({qrUrl:t,onQrUrlChange:e})=>{f0.inputs(r=>{[{qrUrl:t,onQrUrlChange:e}]=r,e=K(e)});const n=r=>{t=r,e(r)};return na.style`border:0;padding:0;margin:0;`(ue.type`text`.placeholder`paste website address`.value(r=>t).maxLength`1000`.onInput(r=>{n(r.target.value)}),m.style`display:flex;flex-direction:column;align-items:center;gap:0.5em;`(r=>(console.log("qrUrl check display",{qrUrl:t}),t&&h0(t)),r=>t&&z.style`max-width:300px;overflow-wrap:anywhere;text-align:center;opacity:0.75;line-height:1.3;`(s=>t)))}),xS=br(t=>p0(t)),p0=O(t=>{let e=new URLSearchParams(window.location.search).get("url")||"";p0.inputs(([r])=>{t=K(r)});const n=()=>dt().then(t).catch(r=>{console.error("Failed to sign out",r)});return ve(Xe(()=>Lt(n)),m.class`admin-crud-page`(m.class`admin-crud-header`(tt(Y.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,"🔗 QR Maker")),m.class`admin-crud-card`(r=>f0({qrUrl:e,onQrUrlChange:s=>{e=s,console.log("set qrUrl",{qrUrl:e})}}))))}),ys=O(()=>[q.href`/index.html`.class`top-nav-pill`("🏠"),q.href`/meetup.html`.class`top-nav-pill`("🗓️ meetups"),q.href`/lineup.html`.class`top-nav-pill`("⚪️ games"),q.href`/ratings.html`.class`top-nav-pill`("⭐ ratings"),q.href`/index.html#links`.class`top-nav-pill`("🔗 links"),q.href`/index.html#merch`.class`top-nav-pill`("👕 merch & more"),q.href`/index.html#youtube`.class`top-nav-pill`("📺 youtube"),q.href`/index.html#awards`.class`top-nav-pill`("🏆 awards"),q.href`/admin.html`.class`top-nav-pill`("👤")]);let mp=!1;const sS=O(()=>mp?"":(mp=!0,Vt(`
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
  `))),_s=O(()=>ve(sS(),m.class`public-footer`(m.class`public-footer-inner`(q.href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`("📧 hardypinball@gmail.com"),q.href`#top`.onClick(t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})("⬆️ Top")))));let Mc=!1,un=null,Gn=null,Wn=null,Jn=null,Kn=null,Qn=null;const VS=O((t=null,e=null,n=null,r=ge(()=>{}))=>{const s=()=>{un&&(un(),un=null),Gn&&(Gn(),Gn=null),Wn&&(Wn(),Wn=null),Jn&&(Jn(),Jn=null),Kn&&(Kn(),Kn=null),Qn&&(Qn(),Qn=null);const i=ik();un=(i==null?void 0:i.unsubscribe)||null;const o=i.subscribe(f=>{t=f,console.debug("Visible current lineup games",{count:(f==null?void 0:f.length)||0,games:f}),r()});Gn=()=>o.unsubscribe();const c=uk();Wn=(c==null?void 0:c.unsubscribe)||null;const l=c.subscribe(f=>{e=f,console.debug("Visible past owned games",{count:(f==null?void 0:f.length)||0,games:f}),r()});Jn=()=>l.unsubscribe();const u=ms();Kn=(u==null?void 0:u.unsubscribe)||null;const h=u.subscribe(f=>{n=f,console.debug("Current lineup game library",{count:(f==null?void 0:f.length)||0,games:f}),r()});Qn=()=>h.unsubscribe()};return Mc||(Mc=!0,un||s()),Kt(()=>{un&&(un(),un=null),Gn&&(Gn(),Gn=null),Wn&&(Wn(),Wn=null),Jn&&(Jn(),Jn=null),Kn&&(Kn(),Kn=null),Qn&&(Qn(),Qn=null),Mc=!1}),ve(Xe(()=>ys()),Vt(`
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
    `),m.class`lineup-page`(m.class`lineup-brand-strip`(),m.class`lineup-hero`(qe.class`lineup-title`("Cary's Current Lineup"),oe.class`lineup-subtitle`("A list of my current games.")),i=>{if(t===null||n===null)return m.class`lineup-results`(m.class`lineup-empty`("Loading current lineup..."));const o=t.filter(c=>c.isVisible!==!1).map(c=>iS(c,n||[]));return o.length?m.class`lineup-results`(m.class`lineup-grid`(o.map(c=>Cl({game:c,detail:[`Collected ${lS(c.dateAddedToCollection)}`,dS(c)]}).key(c.id)))):m.class`lineup-results`(m.class`lineup-empty`("No current lineup games are visible yet."))},Bg.class`lineup-section-break`(),qe.class`lineup-section-title`("Past Games Owned"),i=>{if(e===null||n===null)return m.class`lineup-results`(m.class`lineup-empty`("Loading past games..."));const o=e.filter(c=>c.isVisible!==!1).sort(oS).map(c=>aS(c,n||[]));return o.length?m.class`lineup-results`(m.class`lineup-grid`(o.map(c=>Cl({game:c,detail:uS(c)}).key(`past-${c.id}`)))):m.class`lineup-results`(m.class`lineup-empty`("No past owned games are visible yet."))}),_s())}),iS=(t,e)=>{const n=Ws(e,t.gameId);return{...t,title:(n==null?void 0:n.title)||t.title||"",imageUrl:g0(n,t),manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null}},oS=(t,e)=>String(t.gameId||"").localeCompare(String(e.gameId||""),void 0,{sensitivity:"base"})||String(t.id||"").localeCompare(String(e.id||""),void 0,{sensitivity:"base"}),aS=(t,e)=>{const n=cS(e,t),r=m0(t.gameId||t.id);return{...t,title:(n==null?void 0:n.title)||t.title||t.sourceTitle||r,imageUrl:g0(n,t),manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null}},cS=(t,e)=>Ws(t,e.gameId)||Ws(t,e.title)||Ws(t,e.sourceTitle)||Ws(t,m0(e.gameId||e.id))||null,Ws=(t,e)=>{const n=Al(e),r=Oc(e);return n&&(t.find(s=>s.id===e)||t.find(s=>Al(s.id)===n)||t.find(s=>Oc(s.id)===r)||t.find(s=>Oc(s.title)===r))||null},Al=t=>String(t||"").trim().toLowerCase(),Oc=t=>Al(t).replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),g0=(t,e)=>String((t==null?void 0:t.imageUrl)||(t==null?void 0:t.gameImageUrl)||(t==null?void 0:t.backglassUrl)||(t==null?void 0:t.image)||e.imageUrl||e.gameImageUrl||e.backglassUrl||e.image||"").trim(),m0=t=>String(t||"").trim().replace(/[-_]+/g," ").replace(/\s+/g," ").replace(/\b\w/g,e=>e.toUpperCase()),Cl=O(({game:t,detail:e})=>(Cl.inputs(n=>{[{game:t,detail:e}]=n}),m.class`lineup-game-item bounce-in`(m.class`lineup-game-card`(n=>t.imageUrl?Y.src`${t.imageUrl}`.attr("alt",t.title||"Pinball game"):m.class`lineup-placeholder`(Z(hS(t.title))),m.class`lineup-card-copy`(fr.class`lineup-card-title`(t.title||"Untitled Game"))),z.class`lineup-card-date`(Array.isArray(e)?e.map(n=>m(n)):e)))),y0=t=>t?typeof t=="string"?t.slice(0,10):typeof t.toDate=="function"?t.toDate().toISOString().slice(0,10):t.seconds?new Date(t.seconds*1e3).toISOString().slice(0,10):"":"",lS=t=>{const e=y0(t);if(!e)return"recently";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},uS=t=>{const e=Rl(t.dateAddedToCollection),n=Rl(t.dateRemovedFromCollection);if(!e||!n)return"Time not recorded";const r=Math.max(0,(n.getTime()-e.getTime())/(365.2425*24*60*60*1e3)),s=Math.floor(r);if(s>=1)return`${s} year${s===1?"":"s"} owned`;const i=Math.max(1,Math.round(r*12));return`${i} month${i===1?"":"s"} owned`},dS=t=>{const e=Rl(t.dateAddedToCollection);if(!e)return"Ownership date unknown";const n=Math.max(0,(Date.now()-e.getTime())/(365.2425*24*60*60*1e3));if(n<1)return"first year owned";const r=Math.floor(n);return`${r} year${r===1?"":"s"} owned`},hS=t=>{const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length>=2?`${e[0][0]}${e[1][0]}`.toUpperCase():(e[0]||"PB").slice(0,2).toUpperCase()},Rl=t=>{const e=y0(t);if(!e)return null;const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?null:n};let Uc=!1,Yn=null,Vr=null,Dr=null,Nr=null,Fc=!1,$c=!1;const DS=O((t=null,e=null,n=ge(()=>{}))=>{const r=()=>{Yn&&Yn(),Vr&&Vr(),Dr&&Dr(),Nr&&Nr();const s=ek();let i=!1;Yn=(s==null?void 0:s.unsubscribe)||null;const o=s.subscribe(h=>{if(!i&&t===null&&Array.isArray(h)&&!h.length){i=!0;return}i=!0,t=h,Fc=!0,console.debug("Visible game ratings",{count:(h==null?void 0:h.length)||0,ratings:h}),n()});Vr=()=>o.unsubscribe();const c=ms();let l=!1;Dr=(c==null?void 0:c.unsubscribe)||null;const u=c.subscribe(h=>{if(!l&&e===null&&Array.isArray(h)&&!h.length){l=!0;return}l=!0,e=h,$c=!0,console.debug("Game ratings library",{count:(h==null?void 0:h.length)||0,games:h}),n()});Nr=()=>u.unsubscribe()};return Uc||(Uc=!0,Yn||r()),Kt(()=>{Yn&&Yn(),Vr&&Vr(),Dr&&Dr(),Nr&&Nr(),Yn=null,Vr=null,Dr=null,Nr=null,Uc=!1,Fc=!1,$c=!1}),ve(Xe(()=>ys()),Vt(`
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
    `),m.class`ratings-page`(m.class`ratings-brand-strip`(),m.class`ratings-hero`(qe.class`ratings-title`("Cary's Game Ratings")),s=>{if(!Fc||!$c||t===null||e===null)return m.class`ratings-empty`("Loading game ratings...");const i=t.filter(o=>o.isVisible!==!1).map(o=>fS(o,e||[]));return i.length?m.class`ratings-grid`(i.map(o=>_0(o).key(o.id))):m.class`ratings-empty`("No public game ratings are visible yet.")}),_s())}),fS=(t,e)=>{const n=t.gameId||t.id;return{...t,gameId:n,game:e.find(r=>r.id===n)}},_0=O(t=>{_0.inputs(([o])=>{t=o});const e=t.game||{},n=String(e.title||"Untitled game"),r=gS(t),s=mS(r),i=s?r.filter(o=>o!==s).reverse():r.reverse();return m.class`rating-card bounce-in`(m.class`rating-card-media`(s?w0(s):m.class`rating-card-placeholder`(n.slice(0,2).toUpperCase())),m.class`rating-card-copy`(m.class`rating-summary`(m.class`rating-score`(typeof t.rating=="number"&&!Number.isNaN(t.rating)?id({rating:t.rating,size:108}):z.style`color:#f6c177;font-weight:900;`("Not rated")),m.class`rating-details`(e.title?z.class`rating-meta`([e.manufacturer||"",e.yearReleased?String(e.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"):"",t.review?oe.class`rating-review`(t.review):"")),i.length?pS(i):""))}),pS=t=>t.length?m.class`rating-videos`(t.map(e=>b0(e).key(e.url))):"",gS=t=>Array.isArray(t.videos)?t.videos.filter(e=>!!(e!=null&&e.url)):[],mS=t=>[...t].reverse().find(e=>od(e.url))||null,b0=O(t=>{b0.inputs(([r])=>{t=r});const e=od(t.url),n=t.description||"Watch video";return m.class`rating-video`(e?w0(t):"",q.href`${t.url}`.class`rating-video-link`.attr("target","_blank").attr("rel","noopener noreferrer")(n))}),w0=t=>jg.class`rating-video-frame`.attr("src",od(t.url)).attr("title",t.description||"Watch video").attr("loading","lazy").attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share").attr("allowfullscreen","")(),od=t=>{const e=yS(t);return e?`https://www.youtube.com/embed/${e}`:""},yS=t=>{try{const e=new URL(t),n=e.hostname.replace(/^www\./,"");if(n==="youtu.be")return Bc(e.pathname.split("/").filter(Boolean)[0]);if(n==="youtube.com"||n==="m.youtube.com"){if(e.pathname==="/watch")return Bc(e.searchParams.get("v")||"");const[r,s]=e.pathname.split("/").filter(Boolean);if(r==="embed"||r==="shorts"||r==="live")return Bc(s)}}catch(e){console.warn("Invalid rating video URL",{url:t,error:e})}return""},Bc=(t="")=>/^[a-zA-Z0-9_-]{6,}$/.test(t)?t:"";let yp=!1;const NS=O((t=0,e=!0,n=Ue(!1),r=Ue(!1),s=Ue(!1),i=Ue(!1),o=Ue(!1),c=Date.now()-1e3,l=ge(()=>{}),u=ge(()=>{}),h=()=>{n=!n,l()},f=()=>{r=!r,l()},g=()=>{s=!s,l()},w=()=>{i=!i,l()},E=()=>{o=!o,l()},v=setTimeout(ge(()=>e=!1),5e3),N=!yp&&(()=>{yp=!0,O.promise=ka().then(D=>{typeof D=="number"&&(c=D,u())}).catch(D=>{console.error("Failed to load next meetup date",D)})})())=>m(Xe(()=>ys()),m(m.style`
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
    `),Y.attr("src","assets/media/sticker.png").class`sticker-callout`.style`transition: opacity 0.5s ease;`.attr("style.opacity",D=>e?1:0).onClick(()=>window.scrollTo({top:document.querySelector(".merch-section").offsetTop,behavior:"smooth"})).attr("alt","Super Wow Limited Edition"),m.onClick(()=>++t)(Vt(`
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
      `),m.class`bounce-in`.style`--fx-index:5;`(m.class`carousel-3d-wrapper`(m.class`carousel-3d`(m.class`carousel-3d-item`(Y.attr("src","assets/media/unnamed.jpg").attr("alt","Cary Hardy")),m.class`carousel-3d-item`(Y.attr("src","assets/media/Cary-Hardy.jpg").attr("alt","Cary Hardy")),m.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/CH_chill.jpg").attr("alt","Cary Hardy Chill")),m.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/CH_kong.jpg").attr("alt","Cary Hardy Kong")),m.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/CH_machines.jpg").attr("alt","Cary Hardy Machines")),m.class`carousel-3d-item`(Y.attr("src","assets/media/cool_shots/playfield_red.jpg").attr("alt","Playfield")))),D=>t>4&&m.style`text-align: center; margin-top: 2em;`(q.href`./admin.html`.style`color:white; text-decoration: underline;`("🔨 admin tools")))),m.class`bounce-in`.style`--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;`(qe.class`welcome-text`("Welcome to where I talk and do everything pinball")),he,m.style`text-align: center;`(Y.attr("src","assets/media/pewpew+cary.png").attr("alt","Pew Pew Cary Hardy").style`max-width: 900px; width: 100%; height: auto;`),he,he,he,m.class`bounce-in section-anchor`.attr("id","merch").style`--fx-index:3;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",D=>o?"true":"false").onClick(E)(qe.class`hero-text`("👕 PINBALL MERCH & MORE"),m.class`fold-section-icon`(D=>o?"▲":"▼"))),D=>o?m.class`merch-section bounce-in fold-section-content`.style`--fx-index:2;`(m.style`display: flex; flex-direction: column; align-items: center; gap: 3em;`(m.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(m.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(q.href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.attr("target","_blank")(Y.attr("src","assets/media/wrong_kong_shirts.jpg").attr("alt","Wrong Kong Shirt"))),q.attr("target","_blank").href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(x=>x.target.style.transform="scale(1.1)").onMouseOut(x=>x.target.style.transform="scale(1)")("Get your 'Wrong Kong!' T-Shirt"),q.attr("target","_blank").href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(x=>x.target.style.transform="scale(1.1)").onMouseOut(x=>x.target.style.transform="scale(1)")("🇦🇺 Wrong Kong for Australia residents")),m.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(m.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(q.href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.attr("target","_blank")(Y.attr("src","assets/media/merch-on-glass.jpg").attr("alt","Pinball Merchandise"))),q.attr("target","_blank").href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.class`bounce-in`.style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(x=>x.target.style.transform="scale(1.1)").onMouseOut(x=>x.target.style.transform="scale(1)")("More guns than Wick T-shirt"))),m.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(q.attr("target","_blank").href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in`.style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(x=>x.target.style.transform="scale(1.1)").onMouseOut(x=>x.target.style.transform="scale(1)")("SHOP SILVERBALL SWAG"))):"",he,m.class`bounce-in section-anchor`.attr("id","links").style`--fx-index:4;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",D=>i?"true":"false").onClick(w)(qe.class`hero-text`("🔗 LINKS"),m.class`fold-section-icon`(D=>i?"▲":"▼"))),D=>i?m.class`fold-section-content`.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;padding-top:1em;`(q.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in link-icon`.style`--fx-index: 2;`(Y.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://rumble.com/c/c-2975430`.class`bounce-in link-icon`.style`--fx-index: 3;`(Y.attr("src","https://rumble.com/i/favicon-v4.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://twitter.com/cary_hardy`.class`bounce-in link-icon`.style`--fx-index: 4;`(Y.attr("src","https://cdn-icons-png.flaticon.com/512/124/124021.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://www.instagram.com/caryhardypinball/`.class`bounce-in link-icon`.style`--fx-index: 5;`(Y.attr("src","https://cdn-icons-png.flaticon.com/256/1409/1409946.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://www.patreon.com/caryhardy`.class`bounce-in link-icon`.style`--fx-index: 6;`(Y.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII=").attr("alt","Patreon").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in link-icon`.style`--fx-index: 7;`(Y.attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719").attr("alt","silverball_swag").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),q.href`https://www.facebook.com/hardypinball`.class`bounce-in link-icon`.style`--fx-index: 8;`(Y.attr("src","https://cdn-icons-png.flaticon.com/256/124/124010.png").attr("alt","Facebook").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`)):"",he,m.class`bounce-in section-anchor`.attr("id","youtube").style`--fx-index:5;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",D=>s?"true":"false").onClick(g)(qe.class`hero-text`("📺 YOUTUBE CHANNEL"),m.class`fold-section-actions`(m.class`fold-section-badge`("+12K subs"),m.class`fold-section-icon`(D=>s?"▲":"▼")))),he,D=>s?m.class`fold-section-content`.style`text-align: center; margin-top: 2em;`(m.class`bounce-in`.style`max-width: 900px;padding-top:1em;margin:auto;--fx-index:2`(jg.attr("src","https://www.youtube.com/embed/JFkiAk44Ntk").attr("frameborder","0").attr("allowfullscreen","").style`width: 100%;height: 500px;`),m.style`text-align: center; margin-top: 2em;`(q.attr("target","_blank").href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in`.style`--fx-index: 5; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(x=>x.target.style.transform="scale(1.1)").onMouseOut(x=>x.target.style.transform="scale(1)")("Goto My Channel")),he,he):"",m.class`fade-in`.style`--fx-index:6`(D=>Date.now()<c&&ve(m.class`bounce-in section-anchor`.attr("id","live-meetups").style`--fx-index:5;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",x=>r?"true":"false").onClick(f)(qe.class`hero-text`("🗓️ LIVE MEETUPS"),m.class`fold-section-actions`(m.class`fold-section-badge`(x=>_S(c)),m.class`fold-section-icon`(x=>r?"▲":"▼")))),x=>r?m.class`fold-section-content bounce-in`.style`--fx-index:2;`(m.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(m.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(m.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,Y.attr("src","assets/media/meetup-screenshot.jpg").attr("alt","Pinball Community Live Meetup").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,m.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(m.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Monthly Live Meetups"))),m.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(m.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,100,0.2), rgba(0,255,255,0.2)); animation: shimmer 4s infinite; animation-delay: 2s;`,Y.attr("src","assets/media/meetup-screenshot2.jpg").attr("alt","Pinball Community Live Meetup 2").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,m.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(m.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Live Discussion & Q&A")))),m.style`margin-top: 2em;`(R=>Pa({date:c,showLearnMore:!0}))):"")),he,m.class`bounce-in section-anchor`.attr("id","awards").style`--fx-index:7;`(G.type`button`.class`fold-section-toggle`.attr("aria-expanded",D=>n?"true":"false").onClick(h)(qe.class`hero-text`("🏆 AWARD WINNING WORK & CONTENT"),m.class`fold-section-icon`(D=>n?"▲":"▼"))),D=>n?m.class`merch-section bounce-in fold-section-content`.style`margin: 2em auto; --fx-index:2;`(m.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(m.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","PATB Award").attr("src","assets/media/awards/PBaTB award.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("PATB Award")),m.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Twipy Award").attr("src","assets/media/awards/Twipy.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("Twipy Award")),m.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","PATB Awards").attr("src","assets/media/awards/PatB awards.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("PATB Awards")),m.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy and Steve Ritchie handshaking").attr("src","assets/media/awards/photo0.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2024")),m.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo2.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2024")),m.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Earth Shaker award").attr("src","assets/media/awards/EarthShakerAward.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2024")),m.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","TPF 2022").attr("src","assets/media/awards/TPF 2022.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2022")),m.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy owned pinball machine").attr("src","assets/media/awards/photo3.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2022")),m.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Y.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo1.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,z.style`color: white; display: block; text-align: center;`("TPF 2022")))):"",he,m.class`bounce-in section-anchor`.attr("id","games").style`--fx-index:8;`(q.href`/lineup.html`.class`fold-section-toggle`.style`text-decoration:none;box-sizing:border-box;`(qe.class`hero-text`("⚪️ GAMES"))),he,m.class`bounce-in section-anchor`.attr("id","ratings").style`--fx-index:9;`(q.href`/ratings.html`.class`fold-section-toggle`.style`text-decoration:none;box-sizing:border-box;`(qe.class`hero-text`("⭐ RATINGS"))),he,he,Y.class`bounce-in reflection`.attr("alt","Cary Hardy logo").attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png").style`--fx-index:8;width: 55vw;min-width: 200px;max-width: 400px;`,D=>_s()))),_S=t=>`${Math.max(0,Math.ceil((t-Date.now())/864e5))}d`,bS=H("img");let _p=!1;const LS=O(()=>{let t=Date.now()-1e3;const e=ge(()=>{}),n=()=>new Date(t),r=()=>{const s=document.getElementById("count-clock");s&&zT(Pa,s,{date:n(),showLearnMore:!window.location.href.includes("meetup.html")})};return setTimeout(r,0),_p||(_p=!0,O.promise=ka().then(s=>{typeof s=="number"&&(t=s,e(),r())}).catch(s=>{console.error("Failed to load next meetup date",s)})),ve(Xe(()=>ys()),bS.class`bounce-in reflection`.alt`Cary Hardy logo`.src`https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png`.style`--fx-index:0;width: 55vw;min-width: 200px;max-width: 400px;`,m.class`bounce-in`.style`--fx-index:1`(Wl.style`line-height: 1.3;`("Meet & talk everything pinball!"),oe("for Patreon LE supporters"),m.style`font-size:.8em;opacity: .7;`("😎 come experience the hype")),he,m.class`bounce-in`.style`--fx-index:2`(m.id`count-clock`),he,m.class`bounce-in`.style`--fx-index:3;text-align: center;`(m.style`display: inline-block;`(m.style`\n          max-width: 900px;\n          background-color:#333;border-radius: .7em;\n          margin:.5em;text-align: justify;\n          border:1px solid rgba(255,255,255,.5);\n          color:rgba(255,255,255,.85);\n        `(m.style`padding:0em 2em;`(m.style`line-height: 1.5em;`(oe("And if that sounds interesting to you, consider joining us!"),oe("By becoming a ",q.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Cary Hardy LE supporter")," before ",s=>n().toLocaleString("default",{month:"long"})," ",s=>n().getDate(),s=>D_(n()),", you will receive an LE only Patreon ",Z.style`white-space: nowrap;`("💬 message"),", ",VI("before the meeting start time"),", with an invite ",Z.style`white-space: nowrap;`("🔗 link")," to join this very exclusive meeting.")),he,qe("How does the meeting work?"),Ih(vr("🍺 It mostly works because of beer. Come 🍻 cheers with us!"),vr("🛎️ Make sure you have Patreon notifications turned on to ensure you receive invite link 1 hour before meeting"),vr("Meeting software is Google Meets, which is a browser based application. No installation will be required."),vr("Link to meeting is provided 1 hour before meeting. Must be ",q.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon LE member"))),he,qe("😮 When issues arise"),Ih(vr("Watch your Patreon messages."),vr("In the event of meeting cancellation or disruption due to unforeseen circumstances, a makeup meeting will be communicated directly from Cary Hardy."))),m.style`text-align: center;`("⚪️ ",q.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon memberships")," ⚪️")))),he,he,m.class`bounce-in`.style`--fx-index:4;text-align: center;`(m.style`padding:.8em;font-size: .7em;`(q.class`no-a-style`.href`index.html`(G.type`button`("🔙 home")))),_s())}),MS=O(()=>{const n=new URLSearchParams(window.location.search).get("session_id")||""||"not found";return m(Xe(()=>ys()),m.class`wrap`(m.class`card`(Wl("Thank you!"),oe("✅ Your payment was received successfully."),he,oe("We really appreciate your support as we grow CaryHardy.com"),he,oe("At Pinball at the Beach, please find Cary or Acker or email ",q.href`mailto:acker.dawn.apple@gmail.com?subject=PATB Cary key box`("acker.dawn.apple@gmail.com")),he,oe.class`muted`("Session ID: ",Z.class`session-id`(r=>n)),q.class`cta`.href`/index.html`("Back to CaryHardy.com"))),_s())}),bp=["/assets/media/product-images/key-box/IMG_1477.heic.jpeg","/assets/media/product-images/key-box/Main.jpg","/assets/media/product-images/key-box/IMG_1472.heic.jpeg","/assets/media/product-images/key-box/IMG_1474.heic.jpeg","/assets/media/product-images/key-box/IMG_1475.heic.jpeg"],wp="https://buy.stripe.com/aFabJ02XDe7K7GrgXv4F202",wS=O(()=>{let t=bp[0],e=wp;return wS.inputs(n=>{[{checkoutUrl:e=wp}={}]=n}),m(Xe(()=>ys()),m.class`product-wrap`(m.class`product-hero`(m.class`product-info`(Wl("Cary Hardy Key Box"),tt("🏖️ PATB Pickup only. Priced for LE only members only"),oe("Cary Hardy Key Box"),oe("LE Members only pricing"),qe("$15.00 ",Z.style`font-size:0.6em;opacity:0.75;font-weight:400;`("+ $1 processing + tax")),oe.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🇺🇸 Made in America"),oe.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🚫 🤖 No artificial intellegence used"),oe.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🥳 Fun to assemble Cary Hardy logo that is then functional as your pinball keys holder!"),q.href(n=>e).class`buy-button`.attr("target","_blank")("Buy Now")),m.class`product-media`(Y.attr("src",n=>t).attr("alt","Key Box main photo").class`main-image`,m.class`gallery`(bp.map(n=>m.class`gallery-item`.class(r=>n===t?"is-active":"").onClick(()=>{t=n})(Y.attr("src",n).attr("alt","Key Box photo").class`gallery-image`)))))),_s())});export{ES as a,vS as b,AS as c,kS as d,RS as e,VS as f,CS as g,NS as h,DS as i,LS as j,MS as k,wS as l,SS as m,PS as p,xS as q,zT as t};

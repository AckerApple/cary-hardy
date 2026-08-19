var Ob=Object.defineProperty;var Fb=(t,e,n)=>e in t?Ob(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var It=(t,e,n)=>Fb(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ui(t){return t.renderCount=t.renderCount||0,t.varCounter=0,t.state={newer:{state:[],states:[]}},t.global={blocked:[]}}function Ho(){return Ae.stateConfig.support}function wa(t){return et(t.context),Ae.stateConfig.support=t}const Ze=function(){};let yt=[];const Qt=[];let Ct=[],Ai=[],Nn=[],cu=!1;const Pn=[],Ub=400;let is=0;const Ic=new Map,ve={locks:0};function $b(t,e){const n=Ic.get(t);if(n!==void 0&&n>=is){Pn[n]=e;return}const r=Pn.length;Pn.push(e),Ic.set(t,r)}function Bb(t,e){e.textContent=t}function ht(){ve.locks>0||jb()}function jb(){++ve.locks,am(),--ve.locks,im(),zb()}function im(){qb();const t=Nn;Nn=[];for(const e of t)e[0](...e[1])}function zb(){cu||!Pn.length||Hb()}function Hb(){cu=!0,requestAnimationFrame(om)}function om(){++ve.locks;let t=0;for(;is<Pn.length&&t<Ub;){const e=Pn[is];++is,e[0](...e[1]),++t}if(am(),im(),--ve.locks,is<Pn.length){requestAnimationFrame(om);return}Pn.length=0,is=0,Ic.clear(),cu=!1}function am(){const t=Qt.length;for(let e=0;e<t;++e){const n=Qt[e];n[0](...n[1])}if(t===Qt.length)Qt.length=0;else{let e=0;for(let n=t;n<Qt.length;++n)Qt[e]=Qt[n],++e;Qt.length=e}for(const e of Ct)e[0](...e[1]);for(const e of Ai)e[0](...e[1]);for(const e of yt)e[0](...e[1])}function qb(){yt=[],Ct=[],Ai=[]}function kr(t,e){Qt.push([Gb,[t,e]])}function Gb(t,e){t||console.debug("no element by",{_caller:e,element:t});const n=t.parentNode;n||console.debug("no parentNode by",{_caller:e,element:t}),n.removeChild(t)}function uu(t,e,n){t.parentNode.insertBefore(e,t)}function lm(t,e){t.appendChild(e)}typeof document=="object"&&document.createElement("div");function Wb(t){return document.createTextNode(t)}function cm(t,e,n=Ze,r){const s=Wb(e);uu(t,s),n(s)}const ys="";var Uh;(function(t){t.string="string",t.number="number",t.boolean="boolean",t.undefined="undefined"})(Uh||(Uh={}));var ge;(function(t){t.function="function",t.date="date",t.unknown="unknown",t.object="object"})(ge||(ge={}));const Jb=Date.now(),me={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",stateRender:"stateRender",version:Jb};function um(t){if(!t)return!1;switch(t.tagJsType){case me.dom:case me.tag:case me.templater:return!0}return!1}function $i(t){const e=t==null?void 0:t.tagJsType;return e===me.tagComponent||e===me.stateRender}function Kb(t){return Ta(t)&&typeof t.subscribe===ge.function}function Mr(t){return t&&Sr(t.then)}function Sr(t){return typeof t===ge.function}function Ta(t){return typeof t===ge.object&&t!==null}function ct(t){return Array.isArray(t)}function du(t){const e=t.state;if(e&&e.newest&&e.newest)return e.newest;if(t.parentContext)return du(t.parentContext)}function Ia(t){let e=t;for(;e.ownerSupport&&!$i(e.templater);)e=e.ownerSupport;const r=e.context.state;return r&&r.newest||e}function Qb(...t){return t}function dm(t){const e=Ae.stateConfig;return e.states[e.statesIndex]=t,++e.statesIndex,t(Qb)}function Yb(t){const e=Ae.stateConfig,n=e.statesIndex,c=Ia(e.prevSupport).context.state.older.states[n];let u=[];c(function(...m){return u=m,c.lastValues=u,m});const h=function(...m){return u};return e.states[e.statesIndex]=t,++e.statesIndex,t(h)}function hm(t){et(t);const e=Ae.stateConfig;e.handlers.handler=fm,e.handlers.statesHandler=dm,e.rearray=[];const n=e.state=[],r=e.states=[];e.statesIndex=0;const s=t.state=t.state||{};s.newer={state:n,states:r}}class Xb{}function Zb(t){const[e]=t(Xb),[n]=t(e);return[e,n]}function ew(t){const e=t.callback;if(!e)return t.defaultValue;const[n]=Zb(e);return n}function tw(){const t=Ae.stateConfig,n=t.rearray[t.state.length];return t.state.push(n),n.defaultValue}function fm(t){var o,l;const e=Ae.stateConfig,n=Ut();if(!n||!n.state){const c="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(c,{config:e,context:n,function:(l=(o=e.support)==null?void 0:o.templater.wrapper)==null?void 0:l.original}),new Error(c)}const r=n.state.newer;e.state=r.state;let s=t;if(typeof t===ge.function&&(s=t()),typeof s===ge.function){const c=s;s=function(...h){return c(...h)},s.original=c}const i={get:function(){return ew(i)},defaultValue:s};return e.state.push(i),s}function nw(t){const e=new he,n=r=>{const s=[],i=[],o=(f,m)=>{if(s[m]=!0,i[m]=f,s.length===t.length){for(const T of s)if(!T)return;r(i,u)}},l=[...t],u=l.shift().subscribe(f=>o(f,0)),h=l.map((f,m)=>f.subscribe(v=>o(v,m+1)));return u.subscriptions=h,u};return e.subscribeWith=n,e}function rw(t,e){const n=t.findIndex(r=>r.callback===e);n!==-1&&t.splice(n,1)}function sw(t,e,n){const r=he.globalSubCount$;he.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=e,s.subscriptions=[],s.unsubscribe=function(){return iw(s,n,e)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{e(i,s)},s}function pm(t,e,n){const r=[...e],s=r.shift(),i=h=>{if(r.length)return pm(h,r,n);n(h)};let o=i;const u=s(t,{setHandler:h=>o=h,next:i});o(u)}function iw(t,e,n){rw(e,n);const r=he.globalSubCount$;he.globalSubCount$.next(r.value-1),t.unsubscribe=()=>t;const s=t.subscriptions;for(const i of s)i.unsubscribe();return t}const us=class us{constructor(e,n){It(this,"onSubscription");It(this,"methods",[]);It(this,"isSubject",!0);It(this,"subscribers",[]);It(this,"subscribeWith");It(this,"value");It(this,"set",this.next.bind(this));this.onSubscription=n,arguments.length>0&&(this.value=e)}subscribe(e){const n=sw(this,e,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=e;e=i=>{pm(i,this.methods,o=>s(o,n))}}return r(e)}return this.subscribers.push(n),this.onSubscription&&this.onSubscription(n),n}next(e){this.value=e,this.emit()}emit(){const e=this.value,n=this.subscribers;for(const r of n)r.callback(e,r)}toPromise(){return new Promise(e=>{this.subscribe((n,r)=>{r.unsubscribe(),e(n)})})}toCallback(e){const n=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>{n.unsubscribe()},0),e(r)});return n}pipe(...e){const n=[];"value"in this&&n.push(this.value);const r=new us(...n);return r.setMethods(e),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(e){this.methods=e}static all(e){const n=e.map(r=>Kb(r)?r:new us(r,i=>(i.next(r),i)));return nw(n)}};It(us,"globalSubCount$",new us(0));let he=us;const ow=new he(void 0,function(e){Ho()||e.next()}),Ae={stateConfig:{state:[],version:Date.now(),handlers:{handler:fm,statesHandler:dm}},tagClosed$:ow};function aw(t,e){++t.updateCount;const n=t.subContext,r=mm(n,e);return delete t.subContext,r}function mm(t,e){t.deleted=!0;const n=t.appendMarker;if(n&&(kr(n,"deleteSubContext"),delete t.appendMarker),!t.hasEmitted)return;const r=t.contextItem;return r.tagJsVar.destroy(r,e),76}function lw(t,e,n,r,s){const i=e.context;if(i.locked=3,n.target=n.target||r,et(n),n.inputsHandler){const o=e.propsConfig;n.inputsHandler(o)}n.tagJsVar.processInit(t,n,e,s,r),$e(),n.value=t,delete i.locked}function va(t){switch(t){case void 0:case!1:case null:return ys}return t}function cw(t,e){const n=va(t);if(e.paint){e.paint[1][1]=n;return}const r=e.simpleValueElm;Ct.push([Bb,[n,r]])}function uw(t,e){e.value=t,e.oldTagJsVar=e.tagJsVar,e.tagJsVar=bm(t);const n=e.placeholder,r=va(t),s=e.paint=[cm,[n,r,function(o){e.simpleValueElm=o,delete e.paint},"processNowRegularValue"]];yt.push(s)}function Ea(t,e){if(t.startsWith("class."))return"class";if(t.startsWith("style."))return"style";const n=dw(t);return n!==!1?n:t==="value"&&e==="SELECT"?"value":!1}function dw(t){switch(t){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function hw(t,e,n){typeof t[e]!="object"&&(t[e]={});for(const r in n){const s=n[r];Ct.push([gw,[t,e,r,s]])}if(t[e].setProperty)for(const r in n){const s=n[r];Ct.push([mw,[t,e,r,s]])}}function fw(t,e,n){t.setAttribute(e,"")}function nn(t,e,n){if(Ta(n))return hw(t,e,n);gm(t,e,n)}function pw(t,e,n){n?t[e]=!0:t[e]=!1}function gm(t,e,n){if(t[e]=n,n===void 0||n===!1||n===null){t.removeAttribute(e);return}t.setAttribute(e,n)}function mw(t,e,n,r){t[e].setProperty(n,r)}function gw(t,e,n,r){t[e][n]=r}function ym(t,e,n,r){switch(r){case"autofocus":Nn.push([Iw,[n]]);return;case"autoselect":Nn.push([Tw,[n]]);return;case"style":{const s=t.split(".");Ct.push([yw,[n,s,e]]);return}case"class":_w(t,e,n);return;case"value":nn(n,t,e),Nn.push([s=>{s.value=e},[n]]);return}throw new Error(`Invalid special attribute of ${r}. ${t}`)}function yw(t,e,n){const r=e[1];t.style[r]=n,t.style.setProperty(r,n)}function _w(t,e,n){const r=t.split(".");if(r.shift(),e){for(const s of r)Ct.push([bw,[n,s]]);return}for(const s of r)Ct.push([ww,[n,s]])}function bw(t,e){t.classList.add(e)}function ww(t,e){t.classList.remove(e)}function Tw(t){t.select()}function Iw(t){t.focus()}function vw(t,e,n,r,s){const i=t(),o={component:!1,tagJsType:"dynamic-attr",matchesInjection:u=>{const h=l.tagJsVar;if(h.matchesInjection)return h.matchesInjection(u,l)},hasValueChanged:(u,h,f)=>{const m=t();return l.tagJsVar.hasValueChanged(m,l,f)},processInit:Ze,processInitAttribute:Ze,destroy:(u,h)=>{l.tagJsVar.destroy(l,h)},processUpdate:(u,h,f,m)=>{++h.updateCount;const v=u();l.tagJsVar.processUpdate(v,l,f,m),l.value=v}},l={description:"sub-context",updateCount:0,isAttr:!0,target:r,parentContext:e,value:i,tagJsVar:Gn(i),withinOwnerElement:!0,destroy$:new he,render$:new he},c={description:"override-context",updateCount:0,isAttr:!0,contexts:[l],target:r,parentContext:e,value:t,tagJsVar:o,withinOwnerElement:!0,destroy$:new he,render$:new he};return l.tagJsVar.processInitAttribute(n,i,r,l.tagJsVar,l,{},s),c}function Ew(t,e,n,r,s,i,o){return n.target=r,n.howToSet=s,n.attrName=t,n.isSpecial=o,e!=null&&e.tagJsType?Aw(t,e,n,i,r):Aa(t,e,r,s,o,n)}function Aw(t,e,n,r,s){e.processInitAttribute(t,e,s,e,n,r,nn),n.tagJsVar=e}function Aa(t,e,n,r,s,i){if(typeof e=="function")return vw(e,i,t,n,r);if(s)return ym(t,e,n,s);r(n,t,e)}function _m(t,e,n,r,s,i){const o=e.tagJsVar,l=t;if(o.hasValueChanged(l,e,n)>0){o.destroy(e,n),r.removeAttribute(s);const u=Gn(t);u.isAttr=!0,u.processInitAttribute(s,t,r,u,e,n,i),e.tagJsVar=u;return}}function Cw(t,e,n,r,s,i,o){r.destroy=Rw,r.hasValueChanged=xw,r.processUpdate=(c,u,h)=>_m(c,u,h,n,t,o);const l=Ea(t,n.tagName);Aa(t,e,n,o,l,s),s.tagJsVar=r}function Rw(t){const e=t.target,n=t.attrName;e.removeAttribute(n)}function bm(t){return{component:!1,tagJsType:"simple",value:t,processInitAttribute:Cw,processInit:Sw,destroy:wm,hasValueChanged:Pw,processUpdate:kw}}function kw(t,e,n){return t===e.value?0:Pm(e,t,n)}function Sw(t,e,n,r,s){const i=va(t);r=e.placeholder;const o=e.paint=[cm,[r,i,function(c){e.simpleValueElm=c,delete e.paint},"processSimpleValueInit"]];yt.push(o)}function wm(t){const e=t.simpleValueElm;if(!e){if(t.paint){t.paint[0]=Ze;return}if(t.value===void 0||t.value===!1||t.value===null)return}delete t.simpleValueElm,kr(e,"deleteSimpleValue")}function xw(t,e){return t==null||t===e.value?0:6}function Pw(t,e){return t==null||![ge.object,ge.function].includes(typeof t)?(cw(t,e),0):(wm(e),6)}function Vw(t,e){return ct(t)?0:9}function Lr(t,e,n){const r=e.tagJsVar.processUpdate(t,e,n,[]);return e.value=t,r||0}function Tm(t,e){const n=t.context.providers;if(n)for(const r of n)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===e&&r.children.splice(s,1);t.context.destroy$.next(),t.context.renderCount=0}function vc(t,e){for(const n of t){const r=n.lastArray;if(r){vc(r,e);continue}const s=n.value;if((s==null?void 0:s.tagJsType)===me.subscribe){s.destroy(n,e),n.deleted=!0;continue}const i=n.global;if(!i)continue;const o=n.state.newest,l=i.subscriptions;l&&l.forEach(vm),$i(o.templater)&&Tm(o,i);const c=n.contexts;vc(c,o),i.deleted=!0}}function Im(t,e=[],n=[]){for(const r of t){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){e.push(i);const l=s.subscriptions;l&&n.push(...l)}const o=r.contexts;o&&Im(o,e,n)}return{tags:e,subs:n}}function vm(t){t.unsubscribe()}function Em(t){++t.updateCount;const e=t.lastArray;e&&Am(t,e)}function Am(t,e){for(let n=0;n<e.length;++n)Cm(e[n]);delete t.lastArray}function Ci(t){for(let e=t.length-1;e>=0;--e){const n=t[e];Nw(n),t.splice(e,1)}}function Nw(t){const e=t.marker;e&&kr(e,"destroyMarker");const n=t.domElement;kr(n,"destroyClone")}function hu(t,e){t.contexts&&Dw(t.contexts,e),t.htmlDomMeta&&Ci(t.htmlDomMeta)}function Dw(t,e){var n;for(const r of t){if(r.withinOwnerElement){const c=r.tagJsVar;if(c&&c.tagJsType==="host"){const u=r.supportOwner,h=c.destroy(r,u);Mr(h)&&e.push(h)}continue}const s=r.lastArray;if(s){Am(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,kr(i,"smartRemoveByContext");continue}const o=r.global;if(o===void 0)continue;if(o.deleted=!0,(n=r.state)==null?void 0:n.oldest){hu(r,e);continue}}}function Bi(t,e){const n=t.context;e.deleted=!0,n.renderCount=0;const r=[],s=n.contexts;return vc(s,t),t.templater.wrapper&&Tm(t,e),hu(n,r),delete n.state,delete n.contexts,delete n.returnValue,delete n.providers,r}function Cm(t){const e=t.global,n=Mw(e,t);return Lw(t),n}function Mw(t,e){var n;if(t&&((n=e.state)!=null&&n.oldest)){const r=e.state.oldest;return Bi(r,t)}return e.tagJsVar.destroy(e,{})}function Lw(t){t.arrayMarkersDeleted=!0;const e=t.arrayStartMarker;e!=null&&e.parentNode&&kr(e,"destroyArrayStartMarker");const n=t.placeholder;n!=null&&n.parentNode&&kr(n,"destroyArrayEndMarker")}const $h=Symbol("not-casted"),Ow=[];function qo(t,e,n,r){const s=t.lastArray===void 0;s&&(t.lastArray=[]);const i=t.lastArray,o=e.length,l=new Array(o).fill($h),c=function(m){const v=l[m];if(v!==$h)return v;const T=zw(e[m]);return l[m]=T,T},u=!s&&(o!==i.length||i.some(f=>f.locked===1)),h=s?i:Uw(i,o,c);t.lastArray=h;for(let f=0;f<o;++f){const m=Fw(h,f+1)||t.placeholder;$w(f,h,n,u,c,m,r)}}function Fw(t,e){var n;for(let r=e;r<t.length;++r){const s=(n=t[r])==null?void 0:n.arrayStartMarker;if(s)return s}}function Uw(t,e,n){const r=new Array(e),s=new Set,i=new Map;for(let o=0;o<t.length;++o){const l=t[o],c=Bh(l);if(c===void 0)continue;const u=i.get(c);u?u.push(l):i.set(c,[l])}for(let o=0;o<e;++o){const l=Go(n(o));if(l===void 0)continue;const c=i.get(l),u=c==null?void 0:c.shift();u&&(r[o]=u,s.add(u))}for(let o=0;o<e;++o){if(r[o])continue;const l=t[o],c=n(o),u=Bh(l),h=Go(c);l&&!s.has(l)&&(u===void 0&&h===void 0||jh(l.value)||jh(c))&&(r[o]=l,s.add(l))}for(let o=0;o<t.length;++o){const l=t[o];s.has(l)||Cm(l)}return r}function Bh(t){return t==null?void 0:t.arrayValue}function Go(t){return t==null?void 0:t.arrayValue}function jh(t){return t==null}function $w(t,e,n,r,s,i,o){const l=s(t),c=e[t];if(c){const f=Go(l);return f===void 0?delete c.arrayValue:c.arrayValue=f,Bw(l,c,n,r&&c.locked!==1)}const u=Zm(l,n,e,i,o);e[t]=u;const h=Go(l);return h!==void 0&&(u.arrayValue=h),u}function Bw(t,e,n,r,s,i){return r?($b(e,[jw,[t,e,n]]),e):Array.isArray(t)?(e.tagJsVar.processUpdate(t,e,n,Ow),e.value=t,e):(Lr(t,e,n),e)}function jw(t,e,n){Lr(t,e,n)}function zw(t){if(typeof t!="function")return t;const e=t;return e.tagJsType!==void 0?t:e()}function Hw(t,e){const r=t.templater.tag.values;for(const s of e)qw(r,s,t);return e}function qw(t,e,n){if(e.deleted)return;const r=e.tagJsVar;et(e),r.processUpdate("",e,n,t),$e()}function Rm(t,e){if(!t)return;const r=t.context.contexts;Gw(t,e),++ve.locks,Hw(t,r),--ve.locks,ht()}function Gw(t,e){const n=e.templater,r=e.templater.tag,s=n.values||r.values,i=t.templater.tag;i.values=s}function Ww(t,e){return Ec(t,e)}function Ec(t,e){if(t===null||typeof t!==ge.object||e<0)return t;if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const n=ct(t)?[]:Object.create(Object.getPrototypeOf(t));if(ct(t))for(let r=0;r<t.length;r++)n[r]=Ec(t[r],e-1);else for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=Ec(t[r],e-1));return n}function Jw(t,e,n){return fu(t,e,n)}function fu(t,e,n){return t===e||Yw(t,e)||n<0?!0:typeof t===ge.object&&typeof e===ge.object?t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():ct(t)&&ct(e)?Qw(t,e,n-1):ct(t)||ct(e)?!1:Kw(t,e,n-1):!1}function Kw(t,e,n){const r=Object.keys(t),s=Object.keys(e);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!fu(t[i],e[i],n-1))return!1;return!0}function Qw(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!fu(t[r],e[r],n-1))return!1;return!0}function Yw(t,e){return Sr(t)&&Sr(e)&&t.toString()===e.toString()}function zh(t){return t.map(pu)}function pu(t,e){const n=t,r=t==null?void 0:t.tagJsType;if(r)switch(r){case me.signal:case me.subscribe:case me.stateRender:return;case me.dom:case me.tag:case me.templater:return zh(n.values)}return ct(t)?zh(n):Ww(t,e)}function Xw(t,e){const n=t.length;for(let r=0;r<n;++r){const s=t[r],i=e[r];if(ct(s)&&ct(i)){if(s===i)continue;return 3}if(!(typeof s===ge.function&&typeof i===ge.function)){if(typeof s===ge.object){if(!s&&!i)continue;if(typeof e===ge.object){const o=Object.entries(s);for(const l of o)if(!Zw(l,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function Zw([t,e],n){const r=n[t];return typeof e===ge.function&&typeof r===ge.function?!0:r===e}function mu(t,e,n){return t}function eT(t){return typeof t!==ge.object||!t||t.tagJsType}function tT(t,e,n,r,s,i){var l;const o=Object.keys(t);for(const c of o){const u=t[c],h=e[c],f=gu(h,u,n,r,i,s+1);u===f||(l=Object.getOwnPropertyDescriptor(t,c))!=null&&l.set||(t[c]=f)}return t}function nT(t,e,n,r,s,i){for(let o=t.length-1;o>=0;--o){const l=t[o],c=e[o];t[o]=gu(c,l,n,r,i,s+1)}return t}function gu(t,e,n,r,s,i){return t==null||i>s?e:typeof t===ge.function?e.mem?(t.mem=e.mem,e):(t.mem=e,t):eT(e)?e:ct(e)?nT(e,t,n,r,i,s):tT(e,t,n,r,i,s)}function rT(t,e,n,r,s,i=-1){const o=e.context;if(!o.global||!o.state.newest){const v=mu(r);r.push(...v);const T=t.propsConfig;return T.castProps=v,r}e=o.state.newest||e;const h=e.propsConfig.castProps,f=[];for(let v=0;v<r.length;++v){const T=r[v],R=h[v],P=gu(R,T,t,n,s,i+1);f.push(P)}const m=t.propsConfig;return m.castProps=f,f}function sT(t,e){const n=t.context,r=n.global;let s=-1;const i=n.providers=n.providers||[],o=i.length-1;for(;s++<o;){const l=i[s];let c=-1;const u=l.children.length-1;for(;c++<u;){const h=l.children[c];if(r===h.context.global){l.children.splice(c,1),l.children.push(e);return}}}}function Ac(t){const e=t.context,n=e.global,r=e.contexts;if(r){const{subs:s,tags:i}=Im(r);for(const l of i){if(l.context.global.deleted===!0)return;Hh(l.context)}n.subscriptions&&s.forEach(vm)}Hh(e),Ui(e)}function Hh(t){t.global.deleted=!0,hu(t,[]),delete t.contexts}function km(t,e,n,r){const s=e.original,i=t.tagJsType===me.stateRender,o=Ae.stateConfig;wa(n);let l;if(i?l=t():(l=s(...r),typeof l===ge.function&&l.tagJsType===void 0&&(l=[l])),!l)throw new Error(`A tag cannot return a value of type ${l===null?"null":typeof l}`);const c=n.context;return c.returnValue=l,n.returnValue=l,t.tag=l,c.state.newer={...o},$e(),n}function iT(t,e){const n=t.context;++n.renderCount,oT(t.context),Ae.tagClosed$.next(e)}function oT(t){aT(t),lT()}function aT(t){const e=Ae.stateConfig,n=t||e.context;n.state=n.state||{},n.state.newer={...e};const r=e.support;n.state.newest=r}function lT(){const t=Ae.stateConfig;delete t.prevSupport,delete t.support,delete t.state,delete t.states,$e()}function Sm(t,e,n,r){let s;const i=t.templater;if(i.tagJsType===me.stateRender){const o=i;s=ka(i,n,r,t.appSupport),km(i,o,s)}else{const o=i.wrapper;s=o(t,n,e)}return iT(s,r),s.ownerSupport=t.ownerSupport,s}function cT(t){const e=Ae.stateConfig;return e.rearray=t,e.state=[],e.states=[],e.statesIndex=0,e.handlers.handler=tw,e.handlers.statesHandler=Yb,e}function uT(t,e,n){cT(n);const r=Ae.stateConfig;r.prevSupport=e,wa(t)}function dT(t,e,n,r){const i=n.state.older.state;return uT(t,e,i),Sm(t,e,n,r)}function xm(t,e,n,r){hm(t.context),wa(t);const s=Sm(t,e,n,r);return $e(),s}function hT(t){var r;const e=t==null?void 0:t.context,n=e==null?void 0:e.state;return(r=n==null?void 0:n.older)==null?void 0:r.state}function yu(t,e){var r;const n=qh(t,e);if(!n&&((r=e.templater.tag)!=null&&r._innerHTML)){const s=t.outerHTML;if(qh(s,e))return!0}return n}function qh(t,e){const n=t.templater,r=e.templater,s=(n==null?void 0:n.tag)||t,i=r.tag;if((n==null?void 0:n.tagJsType)===me.stateRender)return n.dom===r.dom;if(!i&&!s.returnValue)return!0;if(!s.returnValue)return!1;throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function fT(t,e,n){let r;hT(e)?r=dT(t,e,n):r=xm(t,e,n);const i=!e||yu(e,r);if(i){if(e){const o=e.templater.tag;if(o&&n.renderCount>0){const l=e==null?void 0:e.templater,c=l==null?void 0:l.tag;pT(o,e,c)}}}else{sT(e,r),Ac(e);const o=r.context;o.state.oldest=r,o.state.newest=r}return r.ownerSupport=t.ownerSupport,{support:r,wasLikeTags:i}}function pT(t,e,n){if(t.tagJsType===me.dom){const r=n==null?void 0:n.dom,s=t.dom;r!==s&&Ac(e);return}if(n){const r=n.strings;if(r){const s=r==null?void 0:r.length,i=t.strings.length;s!==i&&Ac(e)}}}function mT(t,e,n){const r=fT(e,t,n);if(r.wasLikeTags){const s=n.state.oldest;return Rm(s,r.support),r.support}}function gT(t){const e=t.context;return mT(t,t,e)}function K(t){if(!t)return Ze;const e=Ut();if(!e)throw new Error("output must be used in render sync with a parent context");const n=du(e);if(!n)throw new Error("output must be used in render sync fashion");if(t.wrapped===!0)return t;const r=(...s)=>{const i=n.ownerSupport;return yT(s,t,i.context)};return r.wrapped=!0,r}function yT(t,e,n){et(n);const r=e(...t);return _T(r,n)}function _T(t,e){$e();const r=()=>{const s=e.global;if(s===void 0||s.deleted===!0){++ve.locks;const o=e;o.tagJsVar.processUpdate(o.value,o,void 0,[]),--ve.locks,ht();return}++ve.locks,gT(void 0),--ve.locks,ht()};return Mr(t)&&t.then(()=>{Nn.push([r,[]])}),Nn.push([r,[]]),t}function bT(t,e,n,r){const s=e.tagJsType;if(!e||!s||s!==t)return r.tagJsVar.destroy(r,n),ks(e,r,n,99),99}function wT(t,e,n){const r=e.subContext,s=bT(me.subscribe,t,n,e);return s||(!r||!r.hasEmitted||(r.tagJsVar=t,r.valuesHandler(r.lastValues,0)),0)}function Pm(t,e,n){const s=t.tagJsVar.hasValueChanged(e,t,n);return s===0?0:(ks(e,t,n,s),s)}function Vm(t,e,n){var o;++e.updateCount;const s=t.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(o=e.subContext)==null?void 0:o.contextItem;Pm(i,s,n)}function TT(t,e,n,r,s){e.subContext={},t.processUpdate=Vm,IT(t,n,e,r,s)}function IT(t,e,n,r,s){const{appendMarker:i,insertBefore:o}=tg(s,r),l=n.subContext;l.appendMarker=i;const u=t.owner._innerHTML;u.processInit=u.oldProcessInit,eg(u,l,e,o)}function Nm(){return{component:!1,tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:Ze,processInit:TT,processUpdate:Vm,destroy:aw}}function Ca(t){++t.updateCount;const e=t.global,r=t.state.newest;delete t.inputsHandler,delete t.updatesHandler,Bi(r,e),vT(t)}function vT(t){t.htmlDomMeta=[],delete t.contexts,delete t.state,delete t.global,t.renderCount=0}function ET(t,e){var o;const n=(o=e.state)==null?void 0:o.newest,r=um(t),s=t;if(r)return yu(s,n)?0:7;if(t==null?void 0:t.tagJsType){const l=e.value;if(!l&&t)return 88;const c=l.wrapper,u=t.wrapper;return(u==null?void 0:u.original)===(c==null?void 0:c.original)?0:88}return 8}function Ra(t,e){var l;const n=e.global,r=(l=e.state)==null?void 0:l.newest,s=um(t),i=t;if(s)return yu(i,r)?(Cc(e,t,r),0):(Bi(r,n),Ui(e),7);if(t==null?void 0:t.tagJsType){const h=e.state.newest.ownerSupport;return Cc(e,t,h)===!0?0:88}return Ca(e),8}function Dm(t){return _u(t)}function AT(t){return t.render()}function CT(t){const e=RT(t.attributes),n=Mm(t.innerHTML);return`<${t.tagName}${e}>${n}</${t.tagName}>`}function RT(t){if(!t||t.length===0)return"";const e=[];return t.forEach(n=>{const r=n[0];if(typeof r!="string"||r.length===0)return;const s=Om(n[1]);if(s===!0){e.push(r);return}s===!1||s===void 0||s===null||e.push(`${r}="${Lm(String(s))}"`)}),e.length>0?` ${e.join(" ")}`:""}function Mm(t){return!t||t.length===0?"":t.map(_u).join("")}function _u(t){const e=Om(t);return kT(e)?AT(e):ST(e)?xT(e):Array.isArray(e)?Mm(e):e==null||e===!1?"":Lm(String(e))}function kT(t){return!!t&&typeof t=="object"&&typeof t.tagName=="string"}function ST(t){return!!t&&typeof t=="object"&&t.tagJsType===me.tagComponent}function xT(t){var r;const e=(r=t.wrapper)==null?void 0:r.original;if(typeof e!="function")return"";let n=e(...t.props);return typeof n===ge.function&&n.tagJsType===void 0&&(n=n()),_u(n)}function Lm(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Om(t){return typeof t=="function"?t():t}function PT(t,e){const n={component:!1,tagJsType:me.templater,processInit:"",processInitAttribute:Ze,processUpdate:Lr,hasValueChanged:Ra,destroy:Ca,propWatch:t,props:e,get outerHTML(){return Dm(this)},key:function(s){return n.arrayValue=s,n},matchesInjection(r,s){var i;if(n.wrapper===r||((i=n.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return n}const Ri=[];function VT(t,e){return function(s,i,o){const l=Fm(t,s,o),c=s.ownerSupport,u=ka(t,i,c,s.appSupport,l);return km(t,e,u,l)}}function Fm(t,e,n){const r=t.propWatch===Rt.DEEP?bu:Km,s=t.props,i=e.propsConfig;let o=i.castProps;const l=n==null?void 0:n.propsConfig,c=l==null?void 0:l.castProps;return c&&(i.castProps=c,o=rT(e,n,n.ownerSupport,s,r)),o||mu(s)}function NT(t,e,n,r,s){const i=bI(t,e,n,r,s);return i.hasEmitted||Um(t,i),i}function Um(t,e){const r=t.Observables[0];if(!e.hasEmitted){if("withDefault"in t){e.subValueHandler(t.withDefault,0);return}if("value"in r){e.subValueHandler(r.value,0);return}return}const s=e.lastValues[0].value;e.subValueHandler(s,0)}function DT(t,e,n,r,s,i){e.destroy=rg;const o=Ea(t,n.tagName),l=function(h,f){Aa(t,h,n,nn,o,s),Rc(f)},c=ng(e.Observables,i,l,e,s);return s.subContext=c,s.value=e,s.tagJsVar=e,e.processUpdate=function(h,f,m){return _m(h,s,m,n,t,nn)},{subContext:c,onOutput:l}}function MT(t,e,n,r,s,i){const{subContext:o}=DT(t,e,n,e,s,i);o.hasEmitted||LT(e,o)}function LT(t,e){var o;const r=e.tagJsVar.onOutput;let i=((o=t.Observables[0])==null?void 0:o.value)||t.withDefault;t.callback&&(i=t.callback(i)),r(i,!0,e)}function OT(t,e,n){return{component:!1,onOutput:Ze,tagJsType:me.subscribe,processInitAttribute:MT,processInit:NT,hasValueChanged:FT,processUpdate:Ze,destroy:wI,callback:n,withDefault:e,Observables:[t]}}function FT(t,e){if(!(t!=null&&t.tagJsType))return 1;const n=t.Observables;if(!n)return 2;const s=e.value.Observables;return!s||s.length!==n.length?3:n.every((o,l)=>o===s[l])?0:4}function UT(t,e,n,r){const s={component:!1,tagJsType:"tag-conversion",processInitAttribute:Ze,processInit:(i,o,l)=>{const c=t.returnValue;return e.tagJsVar.processInit(c,e,n,r.placeholder)},processUpdate:(i,o,l)=>{if(o.locked||o.deleted)return;++o.updateCount;const c=o.value,u=c==null?void 0:c.tagJsType,f=(i==null?void 0:i.tagJsType)!==u;if(ET(i,o)||f||s.hasValueChanged(i,o,n)){s.destroy(o,n),ks(i,o,l,789);return}o.locked=467,o.render$.next();const T=o.returnValue;$T(e,i,o,T,n),delete o.locked},hasValueChanged:(i,o,l)=>{const c=t.returnValue;return e.tagJsVar.hasValueChanged(c,e,l)},destroy:(i,o)=>{++t.updateCount,t.deleted=!0,delete t.returnValue;const l=e.tagJsVar.destroy(e,n);return Mr(l)?l.then(()=>{const c=Gh(t);return ht(),c}):(t.destroy$.next(),Gh(t))}};return s}function $m(t,e,n){const r=t.context,s=t.returnValue,i=Gn(s);delete r.global,r.contexts=[];const o={updateCount:0,value:s,tagJsVar:i,destroy$:new he,render$:new he,placeholder:r.placeholder,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},l=UT(r,o,t,n);return r.subContext=o,r.tagJsVar=l,i.processInit(s,o,t,n.placeholder),t}function Bm(t,e,n){const r=ka(t,e,n,n==null?void 0:n.appSupport),s=r.propsConfig;if(s){const o=t.tagJsType!==me.tagComponent?[]:Fm(t,r);s.castProps=o}return xm(r,e.state.newest,e)}function jm(t,e,n){const r=Bm(t,e,n);return r.templater.tag?$m(r,r.ownerSupport,e):r}function $T(t,e,n,r,s){const i=mu(e.props),o=t.value;o.props=i;const l=s.propsConfig;if(l&&(l.castProps=i),(e==null?void 0:e.tagJsType)==="tagComponent"){if(t.inputsHandler=n.inputsHandler,t.updatesHandler=n.updatesHandler,n.value=e,n.inputsHandler){et(n);const c=n.inputsHandler;c(i),$e()}if(n.updatesHandler){et(n);const c=n.updatesHandler;c(i),$e()}}t.tagJsVar.processUpdate(r,t,s,[]),t.value=r}function Gh(t,e){delete t.returnValue,delete t.global,t.contexts=[],t.htmlDomMeta=[],delete t.inputsHandler,delete t.updatesHandler}function BT(t,e,n,r){const s=Bm(t,e,n);return $m(s,n,e)}function zm(t,e,n,r,s){return Ui(e),s?BT(t,e,n):jm(t,e,n)}function jT(t){var s,i;const e=Ut();if(!e)throw new Error("tag.inject can only be called within a tag or host context");let n=e.parentContext;for(;n;){const o=n.contexts;if(o){for(const l of o)if(l.isAttr&&((s=l.tagJsVar)!=null&&s.matchesInjection)){const c=l.tagJsVar.matchesInjection(t,l);if(c!==void 0)return c.returnValue}}if((i=n.tagJsVar)!=null&&i.matchesInjection&&n.tagJsVar.matchesInjection(t,n))return n.returnValue;n=n.parentContext}const r=`Could not find parent context for tag.inject ${t}`;throw console.error(r,{targetItem:t,context:e}),new Error(r)}function zT(t,e){return HT(t,e)}function HT(t,e,n=[]){const r=t.context;n.push({support:t,renderCount:r.renderCount,provider:e});const s=e.children;for(let i=s.length-1;i>=0;--i){const o=s[i],l=o.context;n.push({support:o,renderCount:l.renderCount,provider:e})}return n}function qT(t){const n=t.context.providers;if(!n)return[];const r=[];for(const s of n){const i=s.owner,o=zT(i,s);r.push(...o.map(GT))}return r}function GT(t){return t.support}function WT(t){return me.templater===t.tagJsType}function JT(t,e){const n=e.context.global;return n&&n.deleted?!1:!!KT(t,e)}function KT(t,e){const n=t.props,s=e.propsConfig.latest;if(QT(n,s))return!0;switch(t.propWatch){case Rt.IMMUTABLE:return cI(n,s);case Rt.SHALLOW:return Xw(n,s)}return!Jw(n,s,bu)}function QT(t,e){const n=t.length,r=e.length;return n!==r}function Wo(t,e=[]){const n=t.context,r=t.templater,s=WT(r),i=t.ownerSupport;if(n.locked)return e.push(t),e;if(s)return Wo(i,e);const o=t.context.global;if(o&&o.deleted===!0)return e;const l=t,c=$i(l.templater),u=t.templater.tagJsType,f=i&&u!==me.stateRender&&(!c||JT(l.templater,l));if(l.context.providers){const v=qT(l);e.push(...v)}return f?(Wo(i,e),c&&e.push(l),e):(e.push(l),e)}const YT=[];function Hm(t){++ve.locks;for(let e=0;e<t.length;++e)qm(t[e]);--ve.locks,ht()}function XT(t){++ve.locks,qm(t),--ve.locks,ht()}function qm(t){const e=t.context;e.tagJsVar.processUpdate(e.value,e,t.ownerSupport,YT)}function Gm(t,e,{resolvePromise:n,resolveValue:r}){return Mr(t)?t.then(ZT(e,n)):r(t)}function ZT(t,e){return n=>{const r=t.context,s=r.global;if(r.deleted===!0||(s==null?void 0:s.deleted)===!0)return e(n);const i=Wo(t);return Hm(i),e(n)}}function _t(t){return Ae.stateConfig.handlers.handler(t)}function eI(t){return _t(()=>{var r;const e=t(),n=Ho();return(r=n==null?void 0:n.context)!=null&&r.global?Gm(e,n,{resolvePromise:tI,resolveValue:nI}):e}),O}function tI(t){return t}function nI(t){return t}function zt(t){return _t(function(){Ut().destroy$.toCallback(t)}),O}function rI(t,e,n,...r){const s=n(...r),i=du(t);if(!i)return s;if(!i.context.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}return Mr(s)&&s.finally(()=>{if(!t.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}}),s}function ye(t){const e=Ut(),n=_t({callback:t}),r=_t(()=>Wm(e,Ae.stateConfig,n));return n.callback=t,r}function Wm(t,e,n){const r=e.states;return function(...i){const o=rI(t,r,n.callback,...i);return ht(),o}}function sI(t){const e=Ut(),n=i=>{et(e);const o=t();return $e(),o},r=e.render$.subscribe(()=>{n()}),s=n();return O.onDestroy(()=>r.unsubscribe()),s}let iI=0;const _i=Jm("click"),ds=Jm("mousedown");function Jm(t){return function(n){const r=ye(n);return _t(()=>{ig().addEventListener(t,r)}),r}}const oI={get:ig,onclick:_i,click:_i,onClick:_i,mousedown:ds,onmousedown:ds,onMouseDown:ds};ji("onclick",_i);ji("click",_i);ji("onMouseDown",ds);ji("onmousedown",ds);ji("mousedown",ds);function ji(t,e){Object.defineProperty(O,t,{get(){return e},set(n){return e(n)}})}var Rt;(function(t){t.DEEP="deep",t.SHALLOW="shallow",t.NONE="none",t.IMMUTABLE="immutable"})(Rt||(Rt={}));function O(t,e=Rt.SHALLOW){const n=function(...o){const l=PT(e,o);l.tagJsType=me.tagComponent,l.processInit=zm,l.hasValueChanged=Ra;const c=VT(l,n);return c.original=t,l.wrapper=c,l},r=t;n.original=t,r.tags=Ri,r.setUse=Ae,r.ValueTypes=me,r.tagIndex=iI++,Ri.push(n);const s=n;return s.inputs=function(o){const l=Ut();l.inputsHandler=o;const c=l.tagJsVar;return o(c.props),!0},s.updates=function(o){const l=Ut();return l.updatesHandler=o,!0},s.getInnerHTML=Nm,s}function aI(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function lI(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}O.element=oI;O.use=lI;O.deepPropWatch=O;O.route=aI;O.inject=jT;O.output=K;O.onInit=eI;O.onDestroy=zt;O.callback=ye;O.onRender=sI;O.getInnerHTML=Nm;O.app=function(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};O.immutableProps=function(e){return O(e,Rt.IMMUTABLE)};O.watchProps=function(e){return O(e,Rt.SHALLOW)};Object.defineProperty(O,"use",{set(t){t.original={setUse:Ae,tags:Ri},t.tagJsType=me.stateRender,t.processInit=zm,t.processUpdate=Lr,t.hasValueChanged=Ra,t.destroy=Ca}});Object.defineProperty(O,"promise",{set(t){EI(t)}});function cI(t,e){const n=t.length;for(let r=0;r<n;++r){const s=t[r],i=e[r];if(s!==i)return 2}return!1}const Km=3,bu=10;function uI(t,e,n){const r=t.templater;if(r.tagJsType!==me.stateRender){switch(r.propWatch){case Rt.IMMUTABLE:return t.propsConfig={latest:e,castProps:n};case Rt.SHALLOW:return t.propsConfig={latest:e.map(dI),castProps:n}}return t.propsConfig={latest:e.map(hI),castProps:n}}}function dI(t){return pu(t,Km)}function hI(t){return pu(t,bu)}function Qm(t,e,n){const r={templater:t,context:e,castedProps:n,appSupport:void 0},s=e.global;return s.blocked=[],e.state||(e.state={newer:{state:[],states:[]}}),r}function Ym(t,e,n,r){e.appSupport=n||e;const s=t.props;return s&&(e.propsConfig=uI(e,s,r)),e}function ka(t,e,n,r,s){const i=Qm(t,e,s);return i.ownerSupport=n||i,i.ownerSupport.appSupport=r||i.ownerSupport,Ym(t,i,r,s)}function fI(t,e,n,r){let s=n.templater||n;const i=t.templater.tag;i&&i._innerHTML&&(s=n._innerHTML);const o=ka(s,e,r,r.appSupport),c=t.context.state.oldest;Rm(c,o)}function Cc(t,e,n){if($i(e))return t.global===void 0&&Ui(t),t.oldTagJsVar=t.tagJsVar,t.tagJsVar=e,pI(e,t,n),!0;if(t.global){t.oldTagJsVar=t.tagJsVar,t.tagJsVar=e;const i=t.state.newest;if(i)return typeof e===ge.function||fI(i,t,e,n),!0}if(t.inputsHandler){const i=n.propsConfig;t.inputsHandler(i)}return e.processInit(e,t,n,t.placeholder),t.oldTagJsVar=t.tagJsVar,t.tagJsVar=e,!0}function pI(t,e,n){if(!e.state.newest){if(e.inputsHandler){const r=n.propsConfig;e.inputsHandler(r)}t.processInit(t,e,n,e.placeholder);return}}function ks(t,e,n,r){const s=t&&t.tagJsType;if(delete e.deleted,s){Cc(e,t,n);return}if(ct(t)){qo(e,t,n),e.oldTagJsVar=e.tagJsVar,e.tagJsVar=Xm(t);return}if(typeof t===ge.function){e.value=t;return}r&&uw(t,e)}function Xm(t){return{component:!1,tagJsType:"array",value:t,processInitAttribute:Ze,processInit:gI,processUpdate:mI,hasValueChanged:Vw,destroy:Em}}function mI(t,e,n){++e.updateCount;const s=e.tagJsVar.hasValueChanged(t,e,n);return s?(Em(e),ks(t,e,n,s),s):Array.isArray(t)||Lr(t,e,n)===0?(qo(e,t,n),0):1}function gI(t,e,n,r,s){qo(e,t,n,s)}function Gn(t){return(t==null?void 0:t.tagJsType)?t:yI(t)}function yI(t){return ct(t)?Xm(t):bm(t)}function Sa(t,e,n,r,s){return{description:"getNewContext",updateCount:0,value:t,destroy$:new he,render$:new he,tagJsVar:s||Gn(t),withinOwnerElement:n,parentContext:r}}function Zm(t,e,n,r,s){const i=document.createTextNode(ys),o=document.createTextNode(ys),l=Sa(t,n,!0,e.context);if(l.withinOwnerElement=!1,l.arrayStartMarker=i,l.placeholder=o,s)Ai.push([Wh,[s,i,l]]);else{const c=[Jh,[r,i,l]],u=[Jh,[r,o,l]];yt.push(c,u)}return lw(t,e,l,s,o),s&&Ai.push([Wh,[s,o,l]]),l}function Wh(t,e,n){n.arrayMarkersDeleted||t.appendChild(e)}function Jh(t,e,n){if(n.arrayMarkersDeleted)return;t.parentNode.insertBefore(e,t)}function eg(t,e,n,r){return e.hasEmitted=!0,e.contextItem=Zm(t,n,[],r)}function tg(t,e){let n;return t&&(n=e=document.createTextNode(ys),Ai.push([lm,[t,e]])),{appendMarker:n,insertBefore:e}}function _I(t,e,n){const r=wT(t,e,n);if(e.hasEmitted!==!0){const s=e.value.Observables;if(!s||!("value"in s[0]))return}if(r===0&&t.callback){const s=e.subContext;Um(t,s)}}function bI(t,e,n,r,s){const i=t.Observables,{appendMarker:o,insertBefore:l}=tg(s,r);let c=function(f,m,v){eg(f,v,n,l),Rc(m),c=v.tagJsVar.onOutput=function(R,P,S){const k=S.contextItem,G=k.tagJsVar.hasValueChanged(R,k,n);G&&(k.tagJsVar.destroy(k,n),ks(R,k,n,G)),k.tagJsVar.processUpdate(R,k,n,[R]),k.value=R,Rc(P)}};const u=ng(i,n,(h,f,m)=>c(h,f,m),t,e);return u.appendMarker=o,e.subContext=u,t.processUpdate=_I,t.onOutput=c,u}function ng(t,e,n,r,s){function i(u,h){var f;c.lastValues[h]={value:u,tagJsVar:Gn(u),oldTagJsVar:(f=c.lastValues[h])==null?void 0:f.tagJsVar},o(c.lastValues,h)}function o(u,h){const f=c.tagJsVar;if(f==null?void 0:f.callback){et(s);const T=f.callback(...u.map(R=>R.value));n(T,l,c),$e();return}const v=u[h].value;n(v,l,c)}let l=!0;const c={lastValues:[],subValueHandler:i,valuesHandler:o,tagJsVar:r,subscriptions:[]};return t.forEach((u,h)=>{l=!0,c.subscriptions.push(u.subscribe(f=>i(f,h))),l=!1}),r.onOutput=n,c}function rg(t){const e=t.subContext;if(!e)return;e.subscriptions.forEach(r=>r.unsubscribe()),delete t.subContext}function wI(t,e){++t.updateCount;const n=t.subContext;return rg(t),mm(n,e)}function Rc(t){return t||Ae.stateConfig.support?!1:(ht(),!0)}class wt extends he{constructor(n){super(n);It(this,"value");this.value=n}subscribe(n){const r=super.subscribe(n);return n(this.value,r),r}}const sg=((t,e)=>wu(t,e).pastResult),TI=t=>t;function II(t){const e=(n,r)=>wu(n,r,t).pastResult;return e.setup=t,Tu(()=>e,e),e}const wu=(t,e,{init:n,before:r,final:s=TI}={})=>{const i=_t({pastResult:void 0,values:void 0}),l=typeof t=="function"?t():t,c=i.values===void 0;let u=0;c&&typeof t=="function"&&O.onRender(()=>{if(++u,u===1)return;const f=t();h(f)});function h(f){if(i.values===void 0){if(r&&!r(f))return i.values=f,i;const R=(n||e)(f,i.values);return i.pastResult=s(R),i.values=f,i}if(f.every((T,R)=>T===i.values[R]))return i;if(r&&!r(f))return i.values=f,i;const v=e(f,i.values);return i.pastResult=s(v),i.values.length=0,i.values.push(...f),i}return h(l)};function Tu(t,e){return Object.defineProperty(e,"noInit",{get(){const n=t();return n.setup.init=()=>{},n}}),Object.defineProperty(e,"asSubject",{get(){const n=t(),r=_t(()=>Ho()),s=_t(()=>new wt(void 0));_t(()=>({state:Ae.stateConfig.state,states:Ae.stateConfig.states}));const i=(o,l)=>(wu(o,(u,h)=>{const f=Ho(),m=l(u,h);f!==r&&r.context.state.older,s.next(m)},n.setup),s);return i.setup=n.setup,Tu(()=>i,i),i}}),Object.defineProperty(e,"truthy",{get(){const n=t();return n.setup.before=r=>r.every(s=>s),n}}),e}Tu(()=>II({}),sg);class Iu extends Error{constructor(n,r,s={}){super(n);It(this,"details");this.name=Iu.name,this.details={...s,errorCode:r}}}class vu extends Iu{constructor(e,n){super(e,"sync-callback-error",n),this.name=vu.name}}new vu("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const vI=()=>{};function EI(t){const e=Ut(),n=_t({callback:vI}),r=_t({current:void 0}),s=_t(()=>Wm(e,Ae.stateConfig,n));if(r.current!==t){r.current=t;const i=t;t.then(()=>{r.current===i&&s()})}}function Ut(){return Ae.stateConfig.context}function ig(){return Ut().target}const Vo=[];function et(t){return Vo.push(t),Ae.stateConfig.context=t}function $e(){Vo.pop(),Ae.stateConfig.context=Vo[Vo.length-1]}function AI(t,e,n,r,s,i,o){const l=document.createTextNode(ys);if(Ri.push(n.wrapper||{original:n}),i.placeholder=l,e.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const f=i.events;for(const v in f){const T=f[v];s.removeEventListener(v,T)}i.events={},++ve.locks;const m=Bi(h,e);return--ve.locks,ht(),m},++ve.locks;const c=document.createDocumentFragment();c.appendChild(l);const h=jm(n,i,{appSupport:{appElement:s,context:i},appElement:s,context:i,isRoot:!0});return h.appElement=s,o&&(r.tag=h.templater.tag),--ve.locks,ht(),s.appendChild(c),{support:h,tags:Ri,ValueTypes:me}}function CI(t,e,n){const r=Qm(t,e);return Ym(t,r,r),r.appElement=n,r.context=e,e.state.oldest||(e.state.oldest=r,e.state.older=e.state.newer),e.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const Nl=[],Kh="__taggedjs_tag_element__";function ux(t,e,n){const r=e[Kh],s=Nl.findIndex(v=>v.element===e);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:e}),s>=0){const v=Nl[s].support;Bi(v,v.context.global),Nl.splice(s,1)}e[Kh]=!0,e.innerHTML="";let i=(()=>h(...n));i.propWatch=Rt.NONE,i.tagJsType=me.stateRender,i.processUpdate=Lr,i.props=[n],i.isApp=!0;const o=RI(i,e),l=o.global,c=o.state.newest;hm(c.context),wa(c);let h=t(...n||[]);const f=typeof h==ge.function;f||($i(h)?(o.state.newest.propsConfig={latest:[n],castProps:[n]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=t));const m=AI(t,l,i,h,e,o,f);return $e(),m}function RI(t,e){const n={component:!1,tagJsType:"templater",hasValueChanged:Ra,destroy:Ca,processInitAttribute:Ze,processInit:function(){console.debug("do nothing app function")},processUpdate:Lr},r={updateCount:0,value:t,varCounter:0,destroy$:new he,render$:new he,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:n};return Ui(r),r.events={},CI(t,r,e),r}const og=":tagvar",kI=":";function SI(t){return Array.isArray(t)&&Object.prototype.hasOwnProperty.call(t,"raw")}function xI(t,e){return function(r,s,i){if(SI(s)){const o=[];for(let c=0;c<s.length;++c)o.push(s[c]),c<i.length&&o.push(String(i[c]??""));const l=o.join("");return e(r,[t,l])}return e(r,[t,s])}}const PI=[["alt","alt"],["ariaLabel","aria-label"],["ariaHidden","aria-hidden"],["referrerPolicy","referrerpolicy"],["autoFocus","autoFocus"],["border","border"],["id","id"],["for","for"],["fill","fill"],["content","content"],["charset","charset"],["cellPadding","cellpadding"],["cellSpacing","cellspacing"],["class","class"],["href","href"],["lang","lang"],["label","label"],["loading","loading"],["value","value"],["placeholder","placeholder"],["src","src"],["title","title"],["width","width"],["height","height"],["type","type"],["min","min"],["max","max"],["step","step"],["name","name"],["wrap","wrap"],["checked","checked"],["disabled","disabled"],["selected","selected"],["minLength","minLength"],["maxLength","maxLength"],["inputMode","inputMode"],["open","open"],["rel","rel"],["required","required"],["readonly","readonly"],["readOnly","readonly"],["rows","rows"],["style","style"],["target","target"],["viewBox","viewBox"],["valign","valign"]];function VI(t,e,n){const r=zi(t,t.elementFunctions);return ag(r,e,n)}function ag(t,e,n){function r(s){return r.toCallback(s)}return r.toCallback=n,t.listeners.push([e,r]),t.allListeners.push([e,r]),t}function lg(t,e){const n=zi(t,t.elementFunctions);return $I(e[0],e[1],n),n}function NI(t,e){const n=zi(t,t.elementFunctions);for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const s=e[r];n.attributes.push([r,s]),ug(n,s),ki(r)?Ko(r,n):ki(s)&&Ko(s,n)}return n}const DI=Object.fromEntries(PI.map(([t,e])=>[t,xI(e,lg)])),MI=[["onClose","onclose"],["onCancel","oncancel"],["onDoubleClick","ondblclick"],["onClick","click"],["onDragStart","ondragend"],["onDragEnd","ondragstart"],["onDragOver","ondragover"],["onDrop","ondrop"],["onPointerDown","onpointerdown"],["onBlur","onblur"],["onChange","onchange"],["onSubmit","onsubmit"],["onInput","oninput"],["contextMenu","contextmenu"],["onMouseDown","onmousedown"],["onMouseUp","onmouseup"],["onMouseOver","onmouseover"],["onMouseOut","onmouseout"],["onKeyDown","onkeydown"],["onKeyUp","onkeyup"]];function cg(t,e){return t.attributes.push(e),ug(t,e[1]),ki(e[0])?Ko(e[0],t):ki(e[1])&&Ko(e[1],t),t}const LI=(()=>{const t=Object.fromEntries(MI.map(([r,s])=>[r,function(o){return VI(this,s,o)}])),e=Object.fromEntries(Object.entries(DI).map(([r,s])=>[r,OI(s)])),n=e.id;return e.id=function(...s){const i=s[0];return this.arrayValue=typeof i=="function"?i():i,n.apply(this,s)},{...t,attr:function(...s){return lg(this,s)},attrs:function(s){return NI(this,s)},key:function(r){return this.arrayValue=r,this},...e}})();function Jo(t){return LI}function ug(t,e){let n=1;e!=null&&typeof e!="function"&&typeof e.length=="number"&&(n+=e.length),t.contentId+=n}function OI(t){return(function(n,...r){return t(this,n,r)})}function FI(t,e,n){if(Ta(n)){for(const r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;n[r]?t.classList.add(r):t.classList.remove(r)}return}gm(t,e,n)}function Ko(t,e){e.contexts||(e.contexts=[]),e.contexts.push(t),++e.contentId}function ki(t){return Array.isArray(t)||Sr(t)||(t==null?void 0:t.tagJsType)}function Qh(t,e){return(n,r)=>cg(n,[t,r,!1,e])}function Te(t){return(e,n)=>ag(e,t,n)}const UI=Object.fromEntries([["onClick",Te("click")],["onDoubleClick",Te("ondblclick")],["onDblClick",Te("ondblclick")],["onDragStart",Te("ondragstart")],["onDragEnd",Te("ondragend")],["onDrop",Te("ondrop")],["onDragOver",Te("ondragover")],["onPointerDown",Te("onpointerdown")],["onBlur",Te("onblur")],["onChange",Te("onchange")],["onCancel",Te("oncancel")],["onClose",Te("onclose")],["onInput",Te("oninput")],["onMousedown",Te("onmousedown")],["onMouseDown",Te("onmousedown")],["onMouseup",Te("onmouseup")],["onMouseUp",Te("onmouseup")],["onMouseover",Te("onmouseover")],["onMouseOver",Te("onmouseup")],["onMouseout",Te("onmouseout")],["onMouseOut",Te("onmouseout")],["onKeyup",Te("onkeyup")],["onKeyUp",Te("onkeyup")],["onKeydown",Te("onkeydown")],["onKeyDown",Te("onkeydown")]]),Yh=Object.assign(Object.fromEntries(["checked","disabled","selected"].map(t=>[t,Qh(t,pw)])),{class:Qh("class",FI)},UI);function $I(t,e,n){return t in Yh?Yh[t](n,e):cg(n,[t,e,!1,nn])}function dg(t,e){++t.updateCount;const n=t.contexts,r=[];if(t.paintCommands){for(let s=yt.length-1;s>=0;--s){const i=yt[s],o=t.paintCommands.indexOf(i);if(o>=0&&(yt.splice(s,1),t.paintCommands.splice(o,1),t.paintCommands.length===0))break}delete t.paintCommands,Dl(t);return}if(n.length&&(Qo(n,e,r),n.length=0,r.length)){const s=t.htmlDomMeta;return t.deleted=!0,Promise.all(r).then(()=>{++ve.locks,Ci(s),Dl(t),--ve.locks,ht()})}Ci(t.htmlDomMeta),Dl(t)}function Dl(t){t.htmlDomMeta=[],delete t.contexts,t.deleted=!0}function Qo(t,e,n){const r=t[0],s=r.tagJsVar.destroy(r,e);if(r.deleted=!0,Mr(s))return n.push(s.then(()=>{if(t.length>1)return Qo(t.slice(1,t.length),e,n)}));if(r.htmlDomMeta&&(Ci(r.htmlDomMeta),delete r.htmlDomMeta),t.length>1)return Qo(t.slice(1,t.length),e,n)}function hg(t,e,n){if(e.deleted===!0)return;++e.updateCount;const s=Eu(t,e);function i(){dg(e,n),e.htmlDomMeta=[],delete e.deleted,ks(t,e,n,789)}if(s){i();return}const o=e.contexts,l=t.contexts||[],c=e.tagJsVar,u=t,h=c.allListeners,f=u.allListeners;for(let m=0;m<f.length;++m){const v=f[m],T=h[m][1];T.toCallback=v[1].toCallback}if(o.length!==l.length){const m=new Array(o.length);for(let v=0;v<o.length;++v)m[v]=o[v].value;i();return}e.locked=79;for(let m=0;m<o.length;++m){const v=o[m];v.tagJsVar.processUpdate(l[m],v,n)}delete e.locked}function Eu(t,e){if(!t)return 1;const n=e.value;if(n===t)return 0;if(t.tagJsType!=="element"||n===null)return 1;const r=t,s=n,i=r.contentId,o=s.contentId;if(i!==o)return 1;const l=r.innerHTML.length,c=s.innerHTML.length;return l!==c?1:0}function fg(t,e,n){const r=n[e];if(r){let i=!1;if(t.originalStopPropagation=t.stopPropagation,t.stopPropagation=function(){i=!0,t.originalStopPropagation.call(t),t.stopPropagation=t.originalStopPropagation,delete t.originalStopPropagation},r(t),t.defaultPrevented||i)return}const s=n.parentNode;s&&fg(t,e,s)}function pg(t,e,n,r){const s=t.appElement,i=BI(e);e==="blur"&&(e="focusout");const l=t.context.events;if(!l[e]){const c=function(h){fg(h,i,h.target)};l[e]=c,s.addEventListener(e,c)}n[i]=r,n[e]=r}function BI(t){return t==="blur"&&(t="focusout"),"_"+t}function jI(t,e){const n=e.context.global,r=function(i,o){if(n.deleted!==!0)return zI(r.tagFunction,r.support,i,o)};return r.tagFunction=t,r.support=e,r}function zI(t,e,n,r){const s=Ia(e),i=s.context;i.locked=1;const o=t.apply(n,r);return delete i.locked,mg(o,s)}function mg(t,e){const n=e.context.global;if(n!=null&&n.deleted)return;const r=Wo(e);return Hm(r),Gm(t,e,{resolvePromise:GI,resolveValue:WI})}const HI="no-data-ever",qI="promise-no-data-ever";function GI(){return qI}function WI(){return HI}function gg(t,e,n,r){const s=function(...i){return s.tagFunction(t,i)};s.tagFunction=e,s.support=n,pg(n.appSupport,r,t,s)}function yg(t){return t==null||t===!1}function _g(t,e,n,r,s,i,o,l,c){const u=Sa(t,[],!0,n);return u.description="tagJsVar-attr",u.target=l,u.isAttr=!0,u.isNameOnly=c,u.stateOwner=Ia(i),u.supportOwner=i,et(u),r.processInitAttribute(o,t,l,r,u,i,nn),$e(),u.oldTagJsVar=u.tagJsVar,u.tagJsVar=r,u}function bg(t,e,n,r,s,i,o,l){if(yg(e))return;const c=typeof e;if(c===ge.object){for(const u in e)Xh(u,n,e,t,r,i,o,i);return i}if(c==="function"){const u=JI(l);l.tagJsVar=u,et(l);const h=e(l),f=Gn(h);if($e(),f!=null&&f.tagJsType){l.state={newer:{state:[],states:[]}};const m=_g(f,i,o,f,-1,r,"attr",n,!0);return m.tagJsVar=f,l.subContext=m,i}return Xh("attr",n,e,t||[],r,i,o,i),i}e.length!==0&&s(n,e,ys)}function Xh(t,e,n,r,s,i,o,l){const c=Ea(t,e.tagName),u=n[t],f=Tg(t,u,r,e,s,nn,i,o,c);f!==void 0&&(Array.isArray(f)?l.push(...f):l.push(f))}function JI(t){return{tagJsType:"relay",component:!1,hasValueChanged:(n,r,s)=>r.subContext.tagJsVar.hasValueChanged(n,r.subContext,s),processInitAttribute:(n,r,s,i,o,l,c)=>o.subContext.tagJsVar.processInitAttribute(n,r,s,i,o.subContext,l,c),destroy:(n,r)=>n.subContext.tagJsVar.destroy(n.subContext,r),processUpdate:(n,r,s,i)=>{const o=n(r.subContext);return r.subContext.tagJsVar.processUpdate(o,r.subContext,s,i)},processInit:(n,r,s,i,o)=>r.subContext.tagJsVar.processInit(n,r.subContext,s,i,o),matchesInjection:n=>t.subContext.tagJsVar.matchesInjection(n,t.subContext)}}function KI(t,e,n,r,s,i,o,l,c){if(n){if(yg(e)||e===""){r.removeAttribute(n);return}if(typeof n===ge.object)if(typeof e===ge.object)for(const f in n)f in e||Ct.push([Zh,[r,f]]);else for(const f in n)Ct.push([Zh,[r,f]])}const u=bg(t,e,r,s,i,o,l,c);u&&o.push(...u)}function Zh(t,e){t.removeAttribute(e)}function QI(t,e,n,r){const s=e,i=t;if(i!=null&&i.tagJsType){const l=e.value;if(!(l!=null&&l.tagJsType)){i.isAttr=!0,et(e),i.processInitAttribute(s.attrName,t,s.target,i,s,n,nn),$e(),s.tagJsVar=i;return}l.hasValueChanged(i,e,n);return}if(s.isNameOnly){KI(r,t,s.value,s.target,n,s.howToSet,[],s.parentContext,s),s.value=t;return}const o=s.target;tv(t,s.attrName,s,o,n,s.howToSet,s.isSpecial),e.value=t}const YI=new RegExp(og+"(\\d+)"+kI,"g");function wg(t){return t.search&&t.startsWith(og)?t.search(YI):-1}function XI(t,e,n,r,s,i,o){const l=r.length,c=[];e.forEach(h=>{if(wg(h)>=0){const m=r.length,v=Gn(h),T={description:"attribute-array-item",updateCount:0,isAttr:!0,target:n,attrName:t,withinOwnerElement:!0,tagJsVar:v,parentContext:o,destroy$:new he,render$:new he};v.processUpdate=function(S,k,L,G){++k.updateCount,u(G)};const R=i[m];T.value=R,c.push(T),++o.varCounter}});function u(h){const f=ZI(e,h,l).join("");s(n,t,f)}return u(i),c}function ZI(t,e,n){return t.reduce((r,s)=>{if(wg(s)>=0){const o=n++,l=e[o];return r.push(l),r}return r.push(s),r},[])}function ev(t,e,n,r,s,i,o,l,c){if(typeof e===ge.function)return++s.varCounter,Ig(e,o,t,n);const u=Gn(e),h={description:"dynamic-attribute",updateCount:0,isAttr:!0,target:n,attrName:t,howToSet:i,value:e,withinOwnerElement:!0,tagJsVar:u,destroy$:new he,render$:new he,parentContext:s};return r.push(h),u.processUpdate=QI,Ew(t,e,h,n,i,o,l),h.value=e,h}function ef(t){return Ta(t)&&"TagJsTag"in t?t.tagJsVar:-1}function Tg(t,e,n,r,s,i,o,l,c){const u=ef(t);let h=u>=0||e===void 0&&typeof t!="string",f=n[u];e!=null&&e.tagJsType?f=e:(t!=null&&t.tagJsType||typeof t=="function")&&(h=!0,f=t,e=t);const m=f;if(m!=null&&m.tagJsType)return _g(e,o,l,m,u,s,t,r,h);if(h){u===-1&&h&&(f=t);const T=Sa(f,[],!0,l);return T.description="processAttribute",T.isAttr=!0,T.target=r,T.isNameOnly=!0,T.howToSet=i,bg(n,f,r,s,i,o,l,T),T}if(Array.isArray(e))return XI(t,e,r,[],i,n,s.context);const v=ef(e);if(v>=0){const T=n[v];return ev(t,T,r,[],l,i,s,c)}return Aa(t,e,r,i,c,l)}function tv(t,e,n,r,s,i,o){return Sr(t)?rv(s,t,r,e):nv(t,r,e,o,i,s)}function nv(t,e,n,r,s,i){if(r!==!1){ym(n,t,e,r);return}switch(t){case void 0:case!1:case null:Ct.push([sv,[e,n]]);return}if(Sr(t))return gg(e,t,i,n);s(e,n,t)}function rv(t,e,n,r){return Ig(e,t,r,n)}function Ig(t,e,n,r){return t=jI(t,e),gg(r,t,e,n)}function sv(t,e){t.removeAttribute(e)}function iv(t,e,n,r,s){for(const i of t){const o=i[0],l=i[1],c=i[2]||!1;let u=i.length>1?nn:fw;i[3]&&(u=i[3]);const h=s.contexts,f=Tg(o,l,e,n,r,u,h,s,c)||void 0;typeof f=="object"&&(h.push(f),++s.varCounter)}}function ov(t,e,n,r,s){const i=[],o={updateCount:0,parentContext:n,contexts:i,target:e,value:t,htmlDomMeta:[],tagJsVar:{component:!1,tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:Ze,processInitAttribute:Ze,destroy:(f,m)=>{++o.updateCount,i.forEach(v=>v.tagJsVar.destroy(v,m))},processUpdate:(f,m,v,T)=>{++o.updateCount,et(u);let R=f(u);const P=o.underFunction;delete o.underFunction,R instanceof Function&&!R.tagJsType&&(P&&R.toString()===P.toString()?R=u.value:(o.underFunction=R,R=R()));const S=u.tagJsVar.processUpdate(R,u,v,T);return u.value=R,m.value=f,$e(),S}},withinOwnerElement:!0,destroy$:new he,render$:new he};et(o);let l=t();Sr(l)&&!l.tagJsType&&(o.underFunction=l,l=l());const u=Eg(l,o,e,r,s);return n.contexts.push(o),o.subContext=u,$e(),u}function vg(t,e,n,r,s){t.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return tf(i,r,s);case"function":{if(i.tagJsType==="element")break;return ov(i,r,e,n,s)}}if(i==null)return tf(i,r,s);if(i.tagJsType==="element"){const l=Ag(i,e,n,e.contexts);yt.push([s,[r,l]]),e.htmlDomMeta.push({nn:l.tagName,domElement:l,at:[]});return}return Eg(i,e,r,n,s)})}function Eg(t,e,n,r,s){const i=Sa(t,[],!0,e);if(e.contexts.push(i),i.target=n,i.placeholder=document.createTextNode(""),yt.push([s,[n,i.placeholder]]),et(i),i.inputsHandler){const l=r.propsConfig;i.inputsHandler(l)}return i.tagJsVar.processInit(t,i,r,i.placeholder),$e(),i}function tf(t,e,n){const r=va(t),s=document.createTextNode(r);return yt.push([n,[e,s]]),s}function Ag(t,e,n,r){const s=t.tagName,i=document.createElement(s);e.target=i;const o=t.attributes;for(let c=0;c<o.length;++c){const u=o[c],h=u[0];typeof h=="string"&&(u[2]=Ea(h,s))}iv(o,[],i,n,e),vg(t.innerHTML,e,n,i,lm);const l=t.listeners;for(let c=0;c<l.length;++c)av(t,c,n,l[c],i);return i}function av(t,e,n,r,s){const i=r[0],o=(...l)=>{const u=t.listeners[e][1],h=Ia(n),f=h.context,m=f.updateCount;f.locked=1,++ve.locks,et(f);const v=u(...l);return--ve.locks,delete f.locked,$e(),m===f.updateCount?mg(v,h):(ht(),Mr(v)?v.then(()=>{const R=h.context.state.newest;return XT(R),"promise-no-data-ever"}):"no-data-ever")};pg(n.appSupport,i,s,o)}function lv(t,e,n,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],e.locked=34;const s=Ag(t,e,n,e.contexts);delete e.locked;const i=[uu,[r,s,"htmlTag.processInit"]];yt.push(i),e.paintCommands=[i],Nn.push([()=>{delete e.paintCommands},[]]);const o={nn:t.tagName,domElement:s,at:t.attributes};return e.htmlDomMeta=[o],s}function W(t){const n=zi({component:!1,tagJsType:"element",processInitAttribute:Ze,processInit:lv,destroy:dg,processUpdate:hg,hasValueChanged:Eu,tagName:t,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:Jo,render:function(){return CT(this)}},Jo);return n.tagName=t,n}function zi(t,e){const n=function r(...s){const i={...r};i.attributes=Gr(r.attributes),i.listeners=Gr(r.listeners),i.allListeners=Gr(r.allListeners);let o=i.contexts;i.innerHTML=s;for(let l=0;l<s.length;++l){const c=s[l];if(ki(c)){if(c.tagJsType==="element"){nf(i.allListeners,c.allListeners),c.contexts&&(o||(o=[],i.contexts=o),nf(o,c.contexts),++i.contentId);continue}o||(o=[],i.contexts=o),o.push(c)}}return i};return Object.assign(n,t),cv(n,e(n)),n.attributes=Gr(t.attributes),n.listeners=Gr(t.listeners),n.allListeners=Gr(t.allListeners),n.toString=function(){return Dm(this)},n}function Gr(t){return t.length?t.slice():[]}function nf(t,e){for(let n=0;n<e.length;++n)t.push(e[n])}function cv(t,e){for(const n in e){const r=e[n];try{t[n]=r}catch{Object.defineProperty(t,n,{value:r,writable:!0,configurable:!0,enumerable:!1})}}}const Ce=uv();function uv(){const e=zi({component:!1,tagJsType:"element",processInitAttribute:Ze,processInit:dv,destroy:hv,processUpdate:hg,hasValueChanged:Eu,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],render(){return this.innerHTML.map(n=>n).join("")},elementFunctions:Jo},Jo);return e.tagName="no-element",e}function dv(t,e,n,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],vg(t.innerHTML,e,n,r,uu)}function hv(t,e){++t.updateCount;const n=t.contexts,r=[];if(n.length&&(Qo(n,e,r),n.length=0,r.length)){const s=t.htmlDomMeta;return Promise.all(r).then(()=>{++ve.locks,Ci(s),--ve.locks,ht()})}}const q=W("button"),Si=W("select"),Dt=W("option"),fv=W("optgroup"),ce=W("input"),Ss=W("textarea");W("html");W("head");const Cg=W("title");W("meta");W("link");const $t=W("style");W("body");W("script");W("noscript");const Rg=W("hr"),Au=W("h1"),Qe=W("h2"),ze=W("h3");W("h4");W("h5");W("h6");W("ol");const rf=W("ul"),Wr=W("li"),_=W("div");W("main");const Ml=W("section");W("header");W("footer");W("form");const xa=W("fieldset");W("legend");W("dialog");W("pre");W("table");W("tr");W("td");W("th");W("thead");W("tbody");W("tfoot");const kg=W("iframe"),z=W("a"),pv=W("u"),Z=W("img"),pe=W("br"),re=W("label"),se=W("p"),j=W("small"),Y=W("span"),Wn=W("strong"),mv=W("b");W("sup");W("nav");W("figure");W("figcaption");W("code");W("canvas");const No=W("svg"),Gt=W("path"),yo=W("polygon"),gv=W("rect");W("details");W("summary");const Sg=O(({date:t})=>{const e=performance.now().toString().replace(/\./g,"_"),n=`${e}-days-plus`,r=_v();let s;o(),Sg.inputs(f=>{const m=t;[{date:t}]=f,t!=m&&(c(),i())});function i(){if(t==null){l();return}const m=t-new Date;if(m<0){h({days:0,hours:0,minutes:0,seconds:0}),l();return}let v=Math.floor(m/(1e3*60*60*24));const T=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),R=Math.floor(m%(1e3*60*60)/(1e3*60)),P=Math.floor(m%(1e3*60)/1e3);h({days:v,hours:T,minutes:R,seconds:P})}function o(){s=setInterval(i,Yt)}function l(){clearInterval(s),s=void 0}O.onDestroy(l);function c(){l(),o()}function u(f,m,v){const T=document.createElement("span");if(T.classList.add("wrap"),T.innerText=m,f.appendChild(T),f.children.length===1)return;function R(){requestAnimationFrame(()=>{T.classList.add("changed"),requestAnimationFrame(()=>{setTimeout(()=>{f.removeChild(T)},200)})})}setTimeout(R,v.speed-1)}const h=ye(f=>{const m={...f};let{days:v}=m;const T=document.getElementById(n);T&&(v>99?(m.days=99,T.style.display=""):T.style.display="none",Object.entries(m).forEach(([R,P])=>{const S=yv(P),k=r[R];S[0]!=k[0].value$.value&&(k[0].value$.next(S[0]),u(document.getElementById(`${e}-${R}-0`),S[0],k[0])),S[1]!=k[1].value$.value&&(k[1].value$.next(S[1]),u(document.getElementById(`${e}-${R}-1`),S[1],k[1]))}))});return Ce($t(`
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
    `),_.class`countdown`(_(_.class`digit-container`(Y.class`digit`(_.class`line`,Y.id`${e}-days-0`,Y.class`placeholder`("0")),Y.class`digit`(_.class`line`,Y.id`${e}-days-1`,Y.class`placeholder`("0")),Y.id`${e}-days-plus`.class`label`.style`display:none`("+")),_.class`label`("Days")),_(_.class`digit-container`(Y.class`digit`(_.class`line`,Y.id`${e}-hours-0`,Y.class`placeholder`("0")),Y.class`digit`(_.class`line`,Y.id`${e}-hours-1`,Y.class`placeholder`("0"))),_.class`label`("Hours")),_(_.class`digit-container`(Y.class`digit`(_.class`line`,Y.id`${e}-minutes-0`,Y.class`placeholder`("0")),Y.class`digit`(_.class`line`,Y.id`${e}-minutes-1`,Y.class`placeholder`("0"))),_.class`label`.contextMenu(c)("Minutes")),_(_.class`digit-container`(Y.class`digit`(_.class`line`,Y.id`${e}-seconds-0`,Y.class`placeholder`("0")),Y.class`digit`(_.class`line`,Y.id`${e}-seconds-1`,Y.class`placeholder`("0"))),_.class`label`.contextMenu(l)("Seconds"))))});function yv(t){const e=t%10;return[Math.floor(t/10),e]}const Yt=1e3;function _v(){return{days:[{speed:Yt*60*60*24*10,value$:new he},{speed:Yt*60*60*24,value$:new he}],hours:[{speed:Yt*60*60*10,value$:new he},{speed:Yt*60*60,value$:new he}],minutes:[{speed:Yt*60*10,value$:new he},{speed:Yt*60,value$:new he}],seconds:[{speed:Yt*10,value$:new he},{speed:Yt,value$:new he}]}}const bv=()=>{};var sf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),r.push(n[h],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new Tv;const m=i<<2|l>>4;if(r.push(m),u!==64){const v=l<<4&240|u>>2;if(r.push(v),f!==64){const T=u<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Tv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iv=function(t){const e=xg(t);return Pg.encodeByteArray(e,!0)},Yo=function(t){return Iv(t).replace(/\./g,"")},Vg=function(t){try{return Pg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ev=()=>vv().__FIREBASE_DEFAULTS__,Av=()=>{if(typeof process>"u"||typeof sf>"u")return;const t=sf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vg(t[1]);return e&&JSON.parse(e)},Pa=()=>{try{return bv()||Ev()||Av()||Cv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ng=t=>{var e,n;return(n=(e=Pa())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Rv=t=>{const e=Ng(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dg=()=>{var t;return(t=Pa())==null?void 0:t.config},Mg=t=>{var e;return(e=Pa())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Lg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Sv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Yo(JSON.stringify(n)),Yo(JSON.stringify(o)),""].join(".")}const bi={};function xv(){const t={prod:[],emulator:[]};for(const e of Object.keys(bi))bi[e]?t.emulator.push(e):t.prod.push(e);return t}function Pv(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let of=!1;function Og(t,e){if(typeof window>"u"||typeof document>"u"||!xs(window.location.host)||bi[t]===e||bi[t]||of)return;bi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=xv().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,v){m.setAttribute("width","24"),m.setAttribute("id",v),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{of=!0,o()},m}function h(m,v){m.setAttribute("id",v),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=Pv(r),v=n("text"),T=document.getElementById(v)||document.createElement("span"),R=n("learnmore"),P=document.getElementById(R)||document.createElement("a"),S=n("preprendIcon"),k=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const L=m.element;l(L),h(P,R);const G=u();c(k,S),L.append(k,T,P,G),document.body.appendChild(L)}i?(T.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function Nv(){var e;const t=(e=Pa())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ov(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fv(){return!Nv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Uv(){try{return typeof indexedDB=="object"}catch{return!1}}function $v(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Bv,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jv(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new cn(s,l,r)}}function jv(t,e){return t.replace(zv,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zv=/\{\$([^}]+)}/g;function Hv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(af(i)&&af(o)){if(!xr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qv(t,e){const n=new Gv(t,e);return n.subscribe.bind(n)}class Gv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wv(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ll),s.error===void 0&&(s.error=Ll),s.complete===void 0&&(s.complete=Ll);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ll(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ir="[DEFAULT]";/**
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
 */class Jv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qv(e))try{this.getOrInitializeService({instanceIdentifier:Ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ir){return this.instances.has(e)}getOptions(e=Ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Kv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ir){return this.component?this.component.multipleInstances?e:Ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kv(t){return t===Ir?void 0:t}function Qv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Xv={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Zv=ie.INFO,eE={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},tE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=Zv,this._logHandler=tE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const nE=(t,e)=>e.some(n=>t instanceof n);let lf,cf;function rE(){return lf||(lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sE(){return cf||(cf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fg=new WeakMap,kc=new WeakMap,Ug=new WeakMap,Ol=new WeakMap,Ru=new WeakMap;function iE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Dn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Fg.set(n,t)}).catch(()=>{}),Ru.set(e,t),e}function oE(t){if(kc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kc.set(t,e)}let Sc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ug.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aE(t){Sc=t(Sc)}function lE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fl(this),e,...n);return Ug.set(r,e.sort?e.sort():[e]),Dn(r)}:sE().includes(t)?function(...e){return t.apply(Fl(this),e),Dn(Fg.get(this))}:function(...e){return Dn(t.apply(Fl(this),e))}}function cE(t){return typeof t=="function"?lE(t):(t instanceof IDBTransaction&&oE(t),nE(t,rE())?new Proxy(t,Sc):t)}function Dn(t){if(t instanceof IDBRequest)return iE(t);if(Ol.has(t))return Ol.get(t);const e=cE(t);return e!==t&&(Ol.set(t,e),Ru.set(e,t)),e}const Fl=t=>Ru.get(t);function uE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Dn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Dn(o.result),c.oldVersion,c.newVersion,Dn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const dE=["get","getKey","getAll","getAllKeys","count"],hE=["put","add","delete","clear"],Ul=new Map;function uf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ul.get(e))return Ul.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=hE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dE.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Ul.set(e,i),i}aE(t=>({...t,get:(e,n,r)=>uf(e,n)||t.get(e,n,r),has:(e,n)=>!!uf(e,n)||t.has(e,n)}));/**
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
 */class fE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",df="0.14.7";/**
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
 */const rn=new Cu("@firebase/app"),mE="@firebase/app-compat",gE="@firebase/analytics-compat",yE="@firebase/analytics",_E="@firebase/app-check-compat",bE="@firebase/app-check",wE="@firebase/auth",TE="@firebase/auth-compat",IE="@firebase/database",vE="@firebase/data-connect",EE="@firebase/database-compat",AE="@firebase/functions",CE="@firebase/functions-compat",RE="@firebase/installations",kE="@firebase/installations-compat",SE="@firebase/messaging",xE="@firebase/messaging-compat",PE="@firebase/performance",VE="@firebase/performance-compat",NE="@firebase/remote-config",DE="@firebase/remote-config-compat",ME="@firebase/storage",LE="@firebase/storage-compat",OE="@firebase/firestore",FE="@firebase/ai",UE="@firebase/firestore-compat",$E="firebase",BE="12.8.0";/**
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
 */const Pc="[DEFAULT]",jE={[xc]:"fire-core",[mE]:"fire-core-compat",[yE]:"fire-analytics",[gE]:"fire-analytics-compat",[bE]:"fire-app-check",[_E]:"fire-app-check-compat",[wE]:"fire-auth",[TE]:"fire-auth-compat",[IE]:"fire-rtdb",[vE]:"fire-data-connect",[EE]:"fire-rtdb-compat",[AE]:"fire-fn",[CE]:"fire-fn-compat",[RE]:"fire-iid",[kE]:"fire-iid-compat",[SE]:"fire-fcm",[xE]:"fire-fcm-compat",[PE]:"fire-perf",[VE]:"fire-perf-compat",[NE]:"fire-rc",[DE]:"fire-rc-compat",[ME]:"fire-gcs",[LE]:"fire-gcs-compat",[OE]:"fire-fst",[UE]:"fire-fst-compat",[FE]:"fire-vertex","fire-js":"fire-js",[$E]:"fire-js-all"};/**
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
 */const Xo=new Map,zE=new Map,Vc=new Map;function hf(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(Vc.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Vc.set(e,t);for(const n of Xo.values())hf(n,t);for(const n of zE.values())hf(n,t);return!0}function ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const HE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new Hi("app","Firebase",HE);/**
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
 */class qE{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ps=BE;function $g(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Pc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(n||(n=Dg()),!n)throw Mn.create("no-options");const i=Xo.get(s);if(i){if(xr(n,i.options)&&xr(r,i.config))return i;throw Mn.create("duplicate-app",{appName:s})}const o=new Yv(s);for(const c of Vc.values())o.addComponent(c);const l=new qE(n,r,o);return Xo.set(s,l),l}function Bg(t=Pc){const e=Xo.get(t);if(!e&&t===Pc&&Dg())return $g();if(!e)throw Mn.create("no-app",{appName:t});return e}function Ln(t,e,n){let r=jE[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(o.join(" "));return}_s(new Pr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const GE="firebase-heartbeat-database",WE=1,xi="firebase-heartbeat-store";let $l=null;function jg(){return $l||($l=uE(GE,WE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Mn.create("idb-open",{originalErrorMessage:t.message})})),$l}async function JE(t){try{const n=(await jg()).transaction(xi),r=await n.objectStore(xi).get(zg(t));return await n.done,r}catch(e){if(e instanceof cn)rn.warn(e.message);else{const n=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(n.message)}}}async function ff(t,e){try{const r=(await jg()).transaction(xi,"readwrite");await r.objectStore(xi).put(e,zg(t)),await r.done}catch(n){if(n instanceof cn)rn.warn(n.message);else{const r=Mn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(r.message)}}}function zg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KE=1024,QE=30;class YE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ZE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>QE){const o=e1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=pf(),{heartbeatsToSend:r,unsentEntries:s}=XE(this._heartbeatsCache.heartbeats),i=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return rn.warn(n),""}}}function pf(){return new Date().toISOString().substring(0,10)}function XE(t,e=KE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),mf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),mf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ZE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uv()?$v().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ff(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ff(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function mf(t){return Yo(JSON.stringify({version:2,heartbeats:t})).length}function e1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function t1(t){_s(new Pr("platform-logger",e=>new fE(e),"PRIVATE")),_s(new Pr("heartbeat",e=>new YE(e),"PRIVATE")),Ln(xc,df,t),Ln(xc,df,"esm2020"),Ln("fire-js","")}t1("");var n1="firebase",r1="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ln(n1,r1,"app");function Hg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s1=Hg,qg=new Hi("auth","Firebase",Hg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Cu("@firebase/auth");function i1(t,...e){Zo.logLevel<=ie.WARN&&Zo.warn(`Auth (${Ps}): ${t}`,...e)}function Do(t,...e){Zo.logLevel<=ie.ERROR&&Zo.error(`Auth (${Ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw xu(t,...e)}function Et(t,...e){return xu(t,...e)}function Su(t,e,n){const r={...s1(),[e]:n};return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function On(t){return Su(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gg(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Bt(t,"argument-error"),Su(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qg.create(t,...e)}function X(t,e,...n){if(!t)throw xu(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Do(e),new Error(e)}function sn(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function o1(){return gf()==="http:"||gf()==="https:"}function gf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o1()||Mv()||"connection"in navigator)?navigator.onLine:!0}function l1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=Vv()||Lv()}get(){return a1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],d1=new Gi(3e4,6e4);function Vu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Vs(t,e,n,r,s={}){return Jg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=qi({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return Dv()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&xs(t.emulatorConfig.host)&&(u.credentials="include"),Wg.fetch()(await Kg(t,t.config.apiHost,n,l),u)})}async function Jg(t,e,n){t._canInitEmulator=!1;const r={...c1,...e};try{const s=new f1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _o(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Su(t,h,u);Bt(t,h)}}catch(s){if(s instanceof cn)throw s;Bt(t,"network-request-failed",{message:String(s)})}}async function h1(t,e,n,r,s={}){const i=await Vs(t,e,n,r,s);return"mfaPendingCredential"in i&&Bt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Kg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Pu(t.config,s):`${t.config.apiScheme}://${s}`;return u1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class f1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),d1.get())})}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Et(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(t,e){return Vs(t,"POST","/v1/accounts:delete",e)}async function ea(t,e){return Vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function m1(t,e=!1){const n=De(t),r=await n.getIdToken(e),s=Nu(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wi(Bl(s.auth_time)),issuedAtTime:wi(Bl(s.iat)),expirationTime:wi(Bl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Bl(t){return Number(t)*1e3}function Nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Do("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vg(n);return s?JSON.parse(s):(Do("Failed to decode base64 JWT payload"),null)}catch(s){return Do("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function yf(t){const e=Nu(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&g1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function g1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ta(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Pi(t,ea(e,{idToken:n}));X(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?Qg(s.providerUserInfo):[],o=b1(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Dc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function _1(t){const e=De(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function b1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Qg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(t,e){const n=await Jg(t,{},async()=>{const r=qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Kg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&xs(t.emulatorConfig.host)&&(c.credentials="include"),Wg.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function T1(t,e){return Vs(t,"POST","/v2/accounts:revokeToken",Vu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=yf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await w1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new hs;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hs,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new y1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return m1(this,e)}reload(){return _1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(On(this.auth));const e=await this.getIdToken();return await Pi(this,p1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:v,providerData:T,stsTokenManager:R}=n;X(f&&R,e,"internal-error");const P=hs.fromJSON(this.name,R);X(typeof f=="string",e,"internal-error"),_n(r,e.name),_n(s,e.name),X(typeof m=="boolean",e,"internal-error"),X(typeof v=="boolean",e,"internal-error"),_n(i,e.name),_n(o,e.name),_n(l,e.name),_n(c,e.name),_n(u,e.name),_n(h,e.name);const S=new vt({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:v,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:P,createdAt:u,lastLoginAt:h});return T&&Array.isArray(T)&&(S.providerData=T.map(k=>({...k}))),c&&(S._redirectEventId=c),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new hs;s.updateFromServerResponse(n);const i=new vt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Qg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new hs;l.updateFromIdToken(r);const c=new vt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new Map;function en(t){sn(t instanceof Function,"Expected a class definition");let e=_f.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_f.set(t,e),e)}/**
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
 */class Yg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yg.type="NONE";const bf=Yg;/**
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
 */function Mo(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Mo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ea(this.auth,{idToken:e}).catch(()=>{});return n?vt._fromGetAccountInfoResponse(this.auth,n,e):null}return vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(en(bf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||en(bf);const o=Mo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const m=await ea(e,{idToken:h}).catch(()=>{});if(!m)break;f=await vt._fromGetAccountInfoResponse(e,m,h)}else f=vt._fromJSON(e,h);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new fs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ty(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ry(e))return"Blackberry";if(sy(e))return"Webos";if(Zg(e))return"Safari";if((e.includes("chrome/")||ey(e))&&!e.includes("edge/"))return"Chrome";if(ny(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xg(t=tt()){return/firefox\//i.test(t)}function Zg(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ey(t=tt()){return/crios\//i.test(t)}function ty(t=tt()){return/iemobile/i.test(t)}function ny(t=tt()){return/android/i.test(t)}function ry(t=tt()){return/blackberry/i.test(t)}function sy(t=tt()){return/webos/i.test(t)}function Du(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function I1(t=tt()){var e;return Du(t)&&!!((e=window.navigator)!=null&&e.standalone)}function v1(){return Ov()&&document.documentMode===10}function iy(t=tt()){return Du(t)||ny(t)||sy(t)||ry(t)||/windows phone/i.test(t)||ty(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e=[]){let n;switch(t){case"Browser":n=wf(tt());break;case"Worker":n=`${wf(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${r}`}/**
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
 */class E1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function A1(t,e={}){return Vs(t,"GET","/v2/passwordPolicy",Vu(t,e))}/**
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
 */const C1=6;class R1{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??C1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new E1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ea(this,{idToken:e}),r=await vt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(On(this));const n=e?De(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(On(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(On(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await A1(this),n=new R1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await T1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&i1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ns(t){return De(t)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=qv(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function S1(t){Mu=t}function x1(t){return Mu.loadJS(t)}function P1(){return Mu.gapiScript}function V1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t,e){const n=ku(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xr(i,e??{}))return s;Bt(s,"already-initialized")}return n.initialize({options:e})}function D1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M1(t,e,n){const r=Ns(t);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ay(e),{host:o,port:l}=L1(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(xr(u,r.config.emulator)&&xr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,xs(o)?(Lg(`${i}//${o}${c}`),Og("Auth",!0)):O1()}function ay(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function L1(t){const e=ay(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:If(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:If(o)}}}function If(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function O1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e){return h1(t,"POST","/v1/accounts:signInWithIdp",Vu(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="http://localhost";class Vr extends ly{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ps(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ps(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ps(e,n)}buildRequest(){const e={requestUri:F1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wi extends Va{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Wi{constructor(){super("facebook.com")}static credential(e){return Vr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Wi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vr._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Wi{constructor(){super("github.com")}static credential(e){return Vr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Wi{constructor(){super("twitter.com")}static credential(e,n){return Vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await vt._fromIdTokenResponse(e,r,s),o=vf(r);return new bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=vf(r);return new bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function vf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends cn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new na(e,n,r,s)}}function cy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,r):i})}async function U1(t,e,n=!1){const r=await Pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bs._forOperation(t,"link",r)}/**
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
 */async function $1(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(On(r));const s="reauthenticate";try{const i=await Pi(t,cy(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Nu(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),bs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e,n=!1){if(mt(t.app))return Promise.reject(On(t));const r="signIn",s=await cy(t,r,e),i=await bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e){return De(t).setPersistence(e)}function z1(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function H1(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function q1(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function G1(t){return De(t).signOut()}const ra="__sak";/**
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
 */class uy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=1e3,J1=10;class dy extends uy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);v1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,J1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dy.type="LOCAL";const hy=dy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends uy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fy.type="SESSION";const Lu=fy;/**
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
 */function K1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Na(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await K1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Q1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Ou("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function Y1(t){Mt().location.href=t}/**
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
 */function py(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function X1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function eA(){return py()?self:null}/**
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
 */const my="firebaseLocalStorageDb",tA=1,sa="firebaseLocalStorage",gy="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function nA(){const t=indexedDB.deleteDatabase(my);return new Ji(t).toPromise()}function Mc(){const t=indexedDB.open(my,tA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sa,{keyPath:gy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await nA(),e(await Mc()))})})}async function Ef(t,e,n){const r=Da(t,!0).put({[gy]:e,value:n});return new Ji(r).toPromise()}async function rA(t,e){const n=Da(t,!1).get(e),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function Af(t,e){const n=Da(t,!0).delete(e);return new Ji(n).toPromise()}const sA=800,iA=3;class yy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return py()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(eA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await X1(),!this.activeServiceWorker)return;this.sender=new Q1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Z1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await Ef(e,ra,"1"),await Af(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ef(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Da(s,!1).getAll();return new Ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yy.type="LOCAL";const _y=yy;new Gi(3e4,6e4);/**
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
 */function Fu(t,e){return e?en(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uu extends ly{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ps(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ps(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ps(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oA(t){return B1(t.auth,new Uu(t),t.bypassAuthState)}function aA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),$1(n,new Uu(t),t.bypassAuthState)}async function lA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),U1(n,new Uu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oA;case"linkViaPopup":case"linkViaRedirect":return lA;case"reauthViaPopup":case"reauthViaRedirect":return aA;default:Bt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=new Gi(2e3,1e4);async function uA(t,e,n){if(mt(t.app))return Promise.reject(Et(t,"operation-not-supported-in-this-environment"));const r=Ns(t);Gg(t,e,Va);const s=Fu(r,n);return new Er(r,"signInViaPopup",e,s).executeNotNull()}class Er extends by{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cA.get())};e()}}Er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="pendingRedirect",Lo=new Map;class hA extends by{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lo.get(this.auth._key());if(!e){try{const r=await fA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lo.set(this.auth._key(),e)}return this.bypassAuthState||Lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fA(t,e){const n=Ty(e),r=wy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function pA(t,e){return wy(t)._set(Ty(e),"true")}function mA(t,e){Lo.set(t._key(),e)}function wy(t){return en(t._redirectPersistence)}function Ty(t){return Mo(dA,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t,e,n){return yA(t,e,n)}async function yA(t,e,n){if(mt(t.app))return Promise.reject(On(t));const r=Ns(t);Gg(t,e,Va),await r._initializationPromise;const s=Fu(r,n);return await pA(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function _A(t,e){return await Ns(t)._initializationPromise,Iy(t,e,!1)}async function Iy(t,e,n=!1){if(mt(t.app))return Promise.reject(On(t));const r=Ns(t),s=Fu(r,e),o=await new hA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=600*1e3;class wA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vy(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cf(e))}saveEventToCache(e){this.cachedEventUids.add(Cf(e)),this.lastProcessedEventTime=Date.now()}}function Cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IA(t,e={}){return Vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EA=/^https?/;async function AA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IA(t);for(const n of e)try{if(CA(n))return}catch{}Bt(t,"unauthorized-domain")}function CA(t){const e=Nc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!EA.test(n))return!1;if(vA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const RA=new Gi(3e4,6e4);function Rf(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kA(t){return new Promise((e,n)=>{var s,i,o;function r(){Rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rf(),n(Et(t,"network-request-failed"))},timeout:RA.get()})}if((i=(s=Mt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Mt().gapi)!=null&&o.load)r();else{const l=V1("iframefcb");return Mt()[l]=()=>{gapi.load?r():n(Et(t,"network-request-failed"))},x1(`${P1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Oo=null,e})}let Oo=null;function SA(t){return Oo=Oo||kA(t),Oo}/**
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
 */const xA=new Gi(5e3,15e3),PA="__/auth/iframe",VA="emulator/auth/iframe",NA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MA(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pu(e,VA):`https://${t.config.authDomain}/${PA}`,r={apiKey:e.apiKey,appName:t.name,v:Ps},s=DA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qi(r).slice(1)}`}async function LA(t){const e=await SA(t),n=Mt().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:MA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),l=Mt().setTimeout(()=>{i(o)},xA.get());function c(){Mt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const OA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FA=500,UA=600,$A="_blank",BA="http://localhost";class kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jA(t,e,n,r=FA,s=UA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...OA,width:r.toString(),height:s.toString(),top:i,left:o},u=tt().toLowerCase();n&&(l=ey(u)?$A:n),Xg(u)&&(e=e||BA,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[v,T])=>`${m}${v}=${T},`,"");if(I1(u)&&l!=="_self")return zA(e||"",l),new kf(null);const f=window.open(e||"",l,h);X(f,t,"popup-blocked");try{f.focus()}catch{}return new kf(f)}function zA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const HA="__/auth/handler",qA="emulator/auth/handler",GA=encodeURIComponent("fac");async function Sf(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ps,eventId:s};if(e instanceof Va){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Wi){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${GA}=${encodeURIComponent(c)}`:"";return`${WA(t)}?${qi(l).slice(1)}${u}`}function WA({config:t}){return t.emulator?Pu(t,qA):`https://${t.authDomain}/${HA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="webStorageSupport";class JA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lu,this._completeRedirectFn=Iy,this._overrideRedirectResult=mA}async _openPopup(e,n,r,s){var o;sn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Sf(e,n,r,Nc(),s);return jA(e,i,Ou())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Sf(e,n,r,Nc(),s);return Y1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LA(e),r=new wA(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jl,{type:jl},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[jl];i!==void 0&&n(!!i),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return iy()||Zg()||Du()}}const KA=JA;var xf="@firebase/auth",Pf="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XA(t){_s(new Pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oy(t)},u=new k1(r,s,i,c);return D1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_s(new Pr("auth-internal",e=>{const n=Ns(e.getProvider("auth").getImmediate());return(r=>new QA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(xf,Pf,YA(t)),Ln(xf,Pf,"esm2020")}/**
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
 */const ZA=300,eC=Mg("authIdTokenMaxAge")||ZA;let Vf=null;const tC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>eC)return;const s=n==null?void 0:n.token;Vf!==s&&(Vf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function nC(t=Bg()){const e=ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=N1(t,{popupRedirectResolver:KA,persistence:[_y,hy,Lu]}),r=Mg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=tC(i.toString());H1(n,o,()=>o(n.currentUser)),z1(n,l=>o(l))}}const s=Ng("auth");return s&&M1(n,`http://${s}`),n}function rC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}S1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XA("Browser");var Nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fn,Ey;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function y(){}y.prototype=g.prototype,b.F=g.prototype,b.prototype=new y,b.prototype.constructor=b,b.D=function(E,A,C){for(var I=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)I[ue-2]=arguments[ue];return g.prototype[A].apply(E,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,g,y){y||(y=0);const E=Array(16);if(typeof g=="string")for(var A=0;A<16;++A)E[A]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(A=0;A<16;++A)E[A]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=b.g[0],y=b.g[1],A=b.g[2];let C=b.g[3],I;I=g+(C^y&(A^C))+E[0]+3614090360&4294967295,g=y+(I<<7&4294967295|I>>>25),I=C+(A^g&(y^A))+E[1]+3905402710&4294967295,C=g+(I<<12&4294967295|I>>>20),I=A+(y^C&(g^y))+E[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=y+(g^A&(C^g))+E[3]+3250441966&4294967295,y=A+(I<<22&4294967295|I>>>10),I=g+(C^y&(A^C))+E[4]+4118548399&4294967295,g=y+(I<<7&4294967295|I>>>25),I=C+(A^g&(y^A))+E[5]+1200080426&4294967295,C=g+(I<<12&4294967295|I>>>20),I=A+(y^C&(g^y))+E[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=y+(g^A&(C^g))+E[7]+4249261313&4294967295,y=A+(I<<22&4294967295|I>>>10),I=g+(C^y&(A^C))+E[8]+1770035416&4294967295,g=y+(I<<7&4294967295|I>>>25),I=C+(A^g&(y^A))+E[9]+2336552879&4294967295,C=g+(I<<12&4294967295|I>>>20),I=A+(y^C&(g^y))+E[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=y+(g^A&(C^g))+E[11]+2304563134&4294967295,y=A+(I<<22&4294967295|I>>>10),I=g+(C^y&(A^C))+E[12]+1804603682&4294967295,g=y+(I<<7&4294967295|I>>>25),I=C+(A^g&(y^A))+E[13]+4254626195&4294967295,C=g+(I<<12&4294967295|I>>>20),I=A+(y^C&(g^y))+E[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=y+(g^A&(C^g))+E[15]+1236535329&4294967295,y=A+(I<<22&4294967295|I>>>10),I=g+(A^C&(y^A))+E[1]+4129170786&4294967295,g=y+(I<<5&4294967295|I>>>27),I=C+(y^A&(g^y))+E[6]+3225465664&4294967295,C=g+(I<<9&4294967295|I>>>23),I=A+(g^y&(C^g))+E[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=y+(C^g&(A^C))+E[0]+3921069994&4294967295,y=A+(I<<20&4294967295|I>>>12),I=g+(A^C&(y^A))+E[5]+3593408605&4294967295,g=y+(I<<5&4294967295|I>>>27),I=C+(y^A&(g^y))+E[10]+38016083&4294967295,C=g+(I<<9&4294967295|I>>>23),I=A+(g^y&(C^g))+E[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=y+(C^g&(A^C))+E[4]+3889429448&4294967295,y=A+(I<<20&4294967295|I>>>12),I=g+(A^C&(y^A))+E[9]+568446438&4294967295,g=y+(I<<5&4294967295|I>>>27),I=C+(y^A&(g^y))+E[14]+3275163606&4294967295,C=g+(I<<9&4294967295|I>>>23),I=A+(g^y&(C^g))+E[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=y+(C^g&(A^C))+E[8]+1163531501&4294967295,y=A+(I<<20&4294967295|I>>>12),I=g+(A^C&(y^A))+E[13]+2850285829&4294967295,g=y+(I<<5&4294967295|I>>>27),I=C+(y^A&(g^y))+E[2]+4243563512&4294967295,C=g+(I<<9&4294967295|I>>>23),I=A+(g^y&(C^g))+E[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=y+(C^g&(A^C))+E[12]+2368359562&4294967295,y=A+(I<<20&4294967295|I>>>12),I=g+(y^A^C)+E[5]+4294588738&4294967295,g=y+(I<<4&4294967295|I>>>28),I=C+(g^y^A)+E[8]+2272392833&4294967295,C=g+(I<<11&4294967295|I>>>21),I=A+(C^g^y)+E[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=y+(A^C^g)+E[14]+4259657740&4294967295,y=A+(I<<23&4294967295|I>>>9),I=g+(y^A^C)+E[1]+2763975236&4294967295,g=y+(I<<4&4294967295|I>>>28),I=C+(g^y^A)+E[4]+1272893353&4294967295,C=g+(I<<11&4294967295|I>>>21),I=A+(C^g^y)+E[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=y+(A^C^g)+E[10]+3200236656&4294967295,y=A+(I<<23&4294967295|I>>>9),I=g+(y^A^C)+E[13]+681279174&4294967295,g=y+(I<<4&4294967295|I>>>28),I=C+(g^y^A)+E[0]+3936430074&4294967295,C=g+(I<<11&4294967295|I>>>21),I=A+(C^g^y)+E[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=y+(A^C^g)+E[6]+76029189&4294967295,y=A+(I<<23&4294967295|I>>>9),I=g+(y^A^C)+E[9]+3654602809&4294967295,g=y+(I<<4&4294967295|I>>>28),I=C+(g^y^A)+E[12]+3873151461&4294967295,C=g+(I<<11&4294967295|I>>>21),I=A+(C^g^y)+E[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=y+(A^C^g)+E[2]+3299628645&4294967295,y=A+(I<<23&4294967295|I>>>9),I=g+(A^(y|~C))+E[0]+4096336452&4294967295,g=y+(I<<6&4294967295|I>>>26),I=C+(y^(g|~A))+E[7]+1126891415&4294967295,C=g+(I<<10&4294967295|I>>>22),I=A+(g^(C|~y))+E[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=y+(C^(A|~g))+E[5]+4237533241&4294967295,y=A+(I<<21&4294967295|I>>>11),I=g+(A^(y|~C))+E[12]+1700485571&4294967295,g=y+(I<<6&4294967295|I>>>26),I=C+(y^(g|~A))+E[3]+2399980690&4294967295,C=g+(I<<10&4294967295|I>>>22),I=A+(g^(C|~y))+E[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=y+(C^(A|~g))+E[1]+2240044497&4294967295,y=A+(I<<21&4294967295|I>>>11),I=g+(A^(y|~C))+E[8]+1873313359&4294967295,g=y+(I<<6&4294967295|I>>>26),I=C+(y^(g|~A))+E[15]+4264355552&4294967295,C=g+(I<<10&4294967295|I>>>22),I=A+(g^(C|~y))+E[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=y+(C^(A|~g))+E[13]+1309151649&4294967295,y=A+(I<<21&4294967295|I>>>11),I=g+(A^(y|~C))+E[4]+4149444226&4294967295,g=y+(I<<6&4294967295|I>>>26),I=C+(y^(g|~A))+E[11]+3174756917&4294967295,C=g+(I<<10&4294967295|I>>>22),I=A+(g^(C|~y))+E[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=y+(C^(A|~g))+E[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.v=function(b,g){g===void 0&&(g=b.length);const y=g-this.blockSize,E=this.C;let A=this.h,C=0;for(;C<g;){if(A==0)for(;C<=y;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<g;)if(E[A++]=b.charCodeAt(C++),A==this.blockSize){s(this,E),A=0;break}}else for(;C<g;)if(E[A++]=b[C++],A==this.blockSize){s(this,E),A=0;break}}this.h=A,this.o+=g},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var y=b.length-8;y<b.length;++y)b[y]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,y=0;y<4;++y)for(let E=0;E<32;E+=8)b[g++]=this.g[y]>>>E&255;return b};function i(b,g){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=g(b)}function o(b,g){this.h=g;const y=[];let E=!0;for(let A=b.length-1;A>=0;A--){const C=b[A]|0;E&&C==g||(y[A]=C,E=!1)}this.g=y}var l={};function c(b){return-128<=b&&b<128?i(b,function(g){return new o([g|0],g<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(b<0)return P(u(-b));const g=[];let y=1;for(let E=0;b>=y;E++)g[E]=b/y|0,y*=4294967296;return new o(g,0)}function h(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return P(h(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(g,8));let E=f;for(let C=0;C<b.length;C+=8){var A=Math.min(8,b.length-C);const I=parseInt(b.substring(C,C+A),g);A<8?(A=u(Math.pow(g,A)),E=E.j(A).add(u(I))):(E=E.j(y),E=E.add(u(I)))}return E}var f=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(R(this))return-P(this).m();let b=0,g=1;for(let y=0;y<this.g.length;y++){const E=this.i(y);b+=(E>=0?E:4294967296+E)*g,g*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(T(this))return"0";if(R(this))return"-"+P(this).toString(b);const g=u(Math.pow(b,6));var y=this;let E="";for(;;){const A=G(y,g).g;y=S(y,A.j(g));let C=((y.g.length>0?y.g[0]:y.h)>>>0).toString(b);if(y=A,T(y))return C+E;for(;C.length<6;)C="0"+C;E=C+E}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function T(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function R(b){return b.h==-1}t.l=function(b){return b=S(this,b),R(b)?-1:T(b)?0:1};function P(b){const g=b.g.length,y=[];for(let E=0;E<g;E++)y[E]=~b.g[E];return new o(y,~b.h).add(m)}t.abs=function(){return R(this)?P(this):this},t.add=function(b){const g=Math.max(this.g.length,b.g.length),y=[];let E=0;for(let A=0;A<=g;A++){let C=E+(this.i(A)&65535)+(b.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);E=I>>>16,C&=65535,I&=65535,y[A]=I<<16|C}return new o(y,y[y.length-1]&-2147483648?-1:0)};function S(b,g){return b.add(P(g))}t.j=function(b){if(T(this)||T(b))return f;if(R(this))return R(b)?P(this).j(P(b)):P(P(this).j(b));if(R(b))return P(this.j(P(b)));if(this.l(v)<0&&b.l(v)<0)return u(this.m()*b.m());const g=this.g.length+b.g.length,y=[];for(var E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(let A=0;A<b.g.length;A++){const C=this.i(E)>>>16,I=this.i(E)&65535,ue=b.i(A)>>>16,$=b.i(A)&65535;y[2*E+2*A]+=I*$,k(y,2*E+2*A),y[2*E+2*A+1]+=C*$,k(y,2*E+2*A+1),y[2*E+2*A+1]+=I*ue,k(y,2*E+2*A+1),y[2*E+2*A+2]+=C*ue,k(y,2*E+2*A+2)}for(b=0;b<g;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=g;b<2*g;b++)y[b]=0;return new o(y,0)};function k(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function L(b,g){this.g=b,this.h=g}function G(b,g){if(T(g))throw Error("division by zero");if(T(b))return new L(f,f);if(R(b))return g=G(P(b),g),new L(P(g.g),P(g.h));if(R(g))return g=G(b,P(g)),new L(P(g.g),g.h);if(b.g.length>30){if(R(b)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var y=m,E=g;E.l(b)<=0;)y=N(y),E=N(E);var A=F(y,1),C=F(E,1);for(E=F(E,2),y=F(y,2);!T(E);){var I=C.add(E);I.l(b)<=0&&(A=A.add(y),C=I),E=F(E,1),y=F(y,1)}return g=S(b,A.j(g)),new L(A,g)}for(A=f;b.l(g)>=0;){for(y=Math.max(1,Math.floor(b.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),C=u(y),I=C.j(g);R(I)||I.l(b)>0;)y-=E,C=u(y),I=C.j(g);T(C)&&(C=m),A=A.add(C),b=S(b,I)}return new L(A,b)}t.B=function(b){return G(this,b).h},t.and=function(b){const g=Math.max(this.g.length,b.g.length),y=[];for(let E=0;E<g;E++)y[E]=this.i(E)&b.i(E);return new o(y,this.h&b.h)},t.or=function(b){const g=Math.max(this.g.length,b.g.length),y=[];for(let E=0;E<g;E++)y[E]=this.i(E)|b.i(E);return new o(y,this.h|b.h)},t.xor=function(b){const g=Math.max(this.g.length,b.g.length),y=[];for(let E=0;E<g;E++)y[E]=this.i(E)^b.i(E);return new o(y,this.h^b.h)};function N(b){const g=b.g.length+1,y=[];for(let E=0;E<g;E++)y[E]=b.i(E)<<1|b.i(E-1)>>>31;return new o(y,b.h)}function F(b,g){const y=g>>5;g%=32;const E=b.g.length-y,A=[];for(let C=0;C<E;C++)A[C]=g>0?b.i(C+y)>>>g|b.i(C+y+1)<<32-g:b.i(C+y);return new o(A,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Ey=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Fn=o}).apply(typeof Nf<"u"?Nf:typeof self<"u"?self:typeof window<"u"?window:{});var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ay,fi,Cy,Fo,Lc,Ry,ky,Sy;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bo=="object"&&bo];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var x=a[w];if(!(x in p))break e;p=p[x]}a=a[a.length-1],w=p[a],d=d(w),d!=w&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var p=[],w;for(w in d)Object.prototype.hasOwnProperty.call(d,w)&&p.push([w,d[w]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function c(a,d,p){return a.call.apply(a.bind,arguments)}function u(a,d,p){return u=c,u.apply(null,arguments)}function h(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var w=p.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function f(a,d){function p(){}p.prototype=d.prototype,a.Z=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(w,x,V){for(var U=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)U[ne-2]=arguments[ne];return d.prototype[x].apply(w,U)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function v(a){const d=a.length;if(d>0){const p=Array(d);for(let w=0;w<d;w++)p[w]=a[w];return p}return[]}function T(a,d){for(let w=1;w<arguments.length;w++){const x=arguments[w];var p=typeof x;if(p=p!="object"?p:x?Array.isArray(x)?"array":p:"null",p=="array"||p=="object"&&typeof x.length=="number"){p=a.length||0;const V=x.length||0;a.length=p+V;for(let U=0;U<V;U++)a[p+U]=x[U]}else a.push(x)}}class R{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function P(a){o.setTimeout(()=>{throw a},0)}function S(){var a=b;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class k{constructor(){this.h=this.g=null}add(d,p){const w=L.get();w.set(d,p),this.h?this.h.next=w:this.g=w,this.h=w}}var L=new R(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let N,F=!1,b=new k,g=()=>{const a=Promise.resolve(void 0);N=()=>{a.then(y)}};function y(){for(var a;a=S();){try{a.h.call(a.g)}catch(p){P(p)}var d=L;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}F=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return a})();function I(a){return/^[\s\xa0]*$/.test(a)}function ue(a,d){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}f(ue,A),ue.prototype.init=function(a,d){const p=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ue.Z.h.call(this)},ue.prototype.h=function(){ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var $="closure_listenable_"+(Math.random()*1e6|0),le=0;function Oe(a,d,p,w,x){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!w,this.ha=x,this.key=++le,this.da=this.fa=!1}function Yn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Xn(a,d,p){for(const w in a)d.call(p,a[w],w,a)}function js(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function nt(a){const d={};for(const p in a)d[p]=a[p];return d}const pt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tt(a,d){let p,w;for(let x=1;x<arguments.length;x++){w=arguments[x];for(p in w)a[p]=w[p];for(let V=0;V<pt.length;V++)p=pt[V],Object.prototype.hasOwnProperty.call(w,p)&&(a[p]=w[p])}}function un(a){this.src=a,this.g={},this.h=0}un.prototype.add=function(a,d,p,w,x){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const U=ul(a,d,w,x);return U>-1?(d=a[U],p||(d.fa=!1)):(d=new Oe(d,this.src,V,!!w,x),d.fa=p,a.push(d)),d};function dn(a,d){const p=d.type;if(p in a.g){var w=a.g[p],x=Array.prototype.indexOf.call(w,d,void 0),V;(V=x>=0)&&Array.prototype.splice.call(w,x,1),V&&(Yn(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function ul(a,d,p,w){for(let x=0;x<a.length;++x){const V=a[x];if(!V.da&&V.listener==d&&V.capture==!!p&&V.ha==w)return x}return-1}var dl="closure_lm_"+(Math.random()*1e6|0),hl={};function Bd(a,d,p,w,x){if(Array.isArray(d)){for(let V=0;V<d.length;V++)Bd(a,d[V],p,w,x);return null}return p=Hd(p),a&&a[$]?a.J(d,p,l(w)?!!w.capture:!1,x):lb(a,d,p,!1,w,x)}function lb(a,d,p,w,x,V){if(!d)throw Error("Invalid event type");const U=l(x)?!!x.capture:!!x;let ne=pl(a);if(ne||(a[dl]=ne=new un(a)),p=ne.add(d,p,w,U,V),p.proxy)return p;if(w=cb(),p.proxy=w,w.src=a,w.listener=p,a.addEventListener)C||(x=U),x===void 0&&(x=!1),a.addEventListener(d.toString(),w,x);else if(a.attachEvent)a.attachEvent(zd(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return p}function cb(){function a(p){return d.call(a.src,a.listener,p)}const d=ub;return a}function jd(a,d,p,w,x){if(Array.isArray(d))for(var V=0;V<d.length;V++)jd(a,d[V],p,w,x);else w=l(w)?!!w.capture:!!w,p=Hd(p),a&&a[$]?(a=a.i,V=String(d).toString(),V in a.g&&(d=a.g[V],p=ul(d,p,w,x),p>-1&&(Yn(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete a.g[V],a.h--)))):a&&(a=pl(a))&&(d=a.g[d.toString()],a=-1,d&&(a=ul(d,p,w,x)),(p=a>-1?d[a]:null)&&fl(p))}function fl(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[$])dn(d.i,a);else{var p=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(p,w,a.capture):d.detachEvent?d.detachEvent(zd(p),w):d.addListener&&d.removeListener&&d.removeListener(w),(p=pl(d))?(dn(p,a),p.h==0&&(p.src=null,d[dl]=null)):Yn(a)}}}function zd(a){return a in hl?hl[a]:hl[a]="on"+a}function ub(a,d){if(a.da)a=!0;else{d=new ue(d,this);const p=a.listener,w=a.ha||a.src;a.fa&&fl(a),a=p.call(w,d)}return a}function pl(a){return a=a[dl],a instanceof un?a:null}var ml="__closure_events_fn_"+(Math.random()*1e9>>>0);function Hd(a){return typeof a=="function"?a:(a[ml]||(a[ml]=function(d){return a.handleEvent(d)}),a[ml])}function We(){E.call(this),this.i=new un(this),this.M=this,this.G=null}f(We,E),We.prototype[$]=!0,We.prototype.removeEventListener=function(a,d,p,w){jd(this,a,d,p,w)};function rt(a,d){var p,w=a.G;if(w)for(p=[];w;w=w.G)p.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new A(d,a);else if(d instanceof A)d.target=d.target||a;else{var x=d;d=new A(w,a),Tt(d,x)}x=!0;let V,U;if(p)for(U=p.length-1;U>=0;U--)V=d.g=p[U],x=so(V,w,!0,d)&&x;if(V=d.g=a,x=so(V,w,!0,d)&&x,x=so(V,w,!1,d)&&x,p)for(U=0;U<p.length;U++)V=d.g=p[U],x=so(V,w,!1,d)&&x}We.prototype.N=function(){if(We.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const p=a.g[d];for(let w=0;w<p.length;w++)Yn(p[w]);delete a.g[d],a.h--}}this.G=null},We.prototype.J=function(a,d,p,w){return this.i.add(String(a),d,!1,p,w)},We.prototype.K=function(a,d,p,w){return this.i.add(String(a),d,!0,p,w)};function so(a,d,p,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let x=!0;for(let V=0;V<d.length;++V){const U=d[V];if(U&&!U.da&&U.capture==p){const ne=U.listener,Me=U.ha||U.src;U.fa&&dn(a.i,U),x=ne.call(Me,w)!==!1&&x}}return x&&!w.defaultPrevented}function db(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function qd(a){a.g=db(()=>{a.g=null,a.i&&(a.i=!1,qd(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class hb extends E{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:qd(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zs(a){E.call(this),this.h=a,this.g={}}f(zs,E);var Gd=[];function Wd(a){Xn(a.g,function(d,p){this.g.hasOwnProperty(p)&&fl(d)},a),a.g={}}zs.prototype.N=function(){zs.Z.N.call(this),Wd(this)},zs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gl=o.JSON.stringify,fb=o.JSON.parse,pb=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jd(){}function Kd(){}var Hs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yl(){A.call(this,"d")}f(yl,A);function _l(){A.call(this,"c")}f(_l,A);var Zn={},Qd=null;function io(){return Qd=Qd||new We}Zn.Ia="serverreachability";function Yd(a){A.call(this,Zn.Ia,a)}f(Yd,A);function qs(a){const d=io();rt(d,new Yd(d))}Zn.STAT_EVENT="statevent";function Xd(a,d){A.call(this,Zn.STAT_EVENT,a),this.stat=d}f(Xd,A);function st(a){const d=io();rt(d,new Xd(d,a))}Zn.Ja="timingevent";function Zd(a,d){A.call(this,Zn.Ja,a),this.size=d}f(Zd,A);function Gs(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function Ws(){this.g=!0}Ws.prototype.ua=function(){this.g=!1};function mb(a,d,p,w,x,V){a.info(function(){if(a.g)if(V){var U="",ne=V.split("&");for(let _e=0;_e<ne.length;_e++){var Me=ne[_e].split("=");if(Me.length>1){const Fe=Me[0];Me=Me[1];const Pt=Fe.split("_");U=Pt.length>=2&&Pt[1]=="type"?U+(Fe+"="+Me+"&"):U+(Fe+"=redacted&")}}}else U=null;else U=V;return"XMLHTTP REQ ("+w+") [attempt "+x+"]: "+d+`
`+p+`
`+U})}function gb(a,d,p,w,x,V,U){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+x+"]: "+d+`
`+p+`
`+V+" "+U})}function zr(a,d,p,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+_b(a,p)+(w?" "+w:"")})}function yb(a,d){a.info(function(){return"TIMEOUT: "+d})}Ws.prototype.info=function(){};function _b(a,d){if(!a.g)return d;if(!d)return null;try{const V=JSON.parse(d);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var w=p[1];if(Array.isArray(w)&&!(w.length<1)){var x=w[0];if(x!="noop"&&x!="stop"&&x!="close")for(let U=1;U<w.length;U++)w[U]=""}}}}return gl(V)}catch{return d}}var oo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},eh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},th;function bl(){}f(bl,Jd),bl.prototype.g=function(){return new XMLHttpRequest},th=new bl;function Js(a){return encodeURIComponent(String(a))}function bb(a){var d=1;a=a.split(":");const p=[];for(;d>0&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function hn(a,d,p,w){this.j=a,this.i=d,this.l=p,this.S=w||1,this.V=new zs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new nh}function nh(){this.i=null,this.g="",this.h=!1}var rh={},wl={};function Tl(a,d,p){a.M=1,a.A=lo(xt(d)),a.u=p,a.R=!0,sh(a,null)}function sh(a,d){a.F=Date.now(),ao(a),a.B=xt(a.A);var p=a.B,w=a.S;Array.isArray(w)||(w=[String(w)]),yh(p.i,"t",w),a.C=0,p=a.j.L,a.h=new nh,a.g=Mh(a.j,p?d:null,!a.u),a.P>0&&(a.O=new hb(u(a.Y,a,a.g),a.P)),d=a.V,p=a.g,w=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(Gd[0]=x.toString()),x=Gd);for(let V=0;V<x.length;V++){const U=Bd(p,x[V],w||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.J?nt(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),qs(),mb(a.i,a.v,a.B,a.l,a.S,a.u)}hn.prototype.ba=function(a){a=a.target;const d=this.O;d&&mn(a)==3?d.j():this.Y(a)},hn.prototype.Y=function(a){try{if(a==this.g)e:{const ne=mn(this.g),Me=this.g.ya(),_e=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||Eh(this.g)))){this.K||ne!=4||Me==7||(Me==8||_e<=0?qs(3):qs(2)),Il(this);var d=this.g.ca();this.X=d;var p=wb(this);if(this.o=d==200,gb(this.i,this.v,this.B,this.l,this.S,ne,d),this.o){if(this.U&&!this.L){t:{if(this.g){var w,x=this.g;if((w=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(w)){var V=w;break t}}V=null}if(a=V)zr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,vl(this,a);else{this.o=!1,this.m=3,st(12),er(this),Ks(this);break e}}if(this.R){a=!0;let Fe;for(;!this.K&&this.C<p.length;)if(Fe=Tb(this,p),Fe==wl){ne==4&&(this.m=4,st(14),a=!1),zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==rh){this.m=4,st(15),zr(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else zr(this.i,this.l,Fe,null),vl(this,Fe);if(ih(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||p.length!=0||this.h.h||(this.m=1,st(16),a=!1),this.o=this.o&&a,!a)zr(this.i,this.l,p,"[Invalid Chunked Response]"),er(this),Ks(this);else if(p.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Pl(U),U.P=!0,st(11))}}else zr(this.i,this.l,p,null),vl(this,p);ne==4&&er(this),this.o&&!this.K&&(ne==4?Ph(this.j,this):(this.o=!1,ao(this)))}else Mb(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,st(12)):(this.m=0,st(13)),er(this),Ks(this)}}}catch{}finally{}};function wb(a){if(!ih(a))return a.g.la();const d=Eh(a.g);if(d==="")return"";let p="";const w=d.length,x=mn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return er(a),Ks(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<w;V++)a.h.h=!0,p+=a.h.i.decode(d[V],{stream:!(x&&V==w-1)});return d.length=0,a.h.g+=p,a.C=0,a.h.g}function ih(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Tb(a,d){var p=a.C,w=d.indexOf(`
`,p);return w==-1?wl:(p=Number(d.substring(p,w)),isNaN(p)?rh:(w+=1,w+p>d.length?wl:(d=d.slice(w,w+p),a.C=w+p,d)))}hn.prototype.cancel=function(){this.K=!0,er(this)};function ao(a){a.T=Date.now()+a.H,oh(a,a.H)}function oh(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Gs(u(a.aa,a),d)}function Il(a){a.D&&(o.clearTimeout(a.D),a.D=null)}hn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(yb(this.i,this.B),this.M!=2&&(qs(),st(17)),er(this),this.m=2,Ks(this)):oh(this,this.T-a)};function Ks(a){a.j.I==0||a.K||Ph(a.j,a)}function er(a){Il(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Wd(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function vl(a,d){try{var p=a.j;if(p.I!=0&&(p.g==a||El(p.h,a))){if(!a.L&&El(p.h,a)&&p.I==3){try{var w=p.Ba.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var x=w;if(x[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)po(p),ho(p);else break e;xl(p),st(18)}}else p.xa=x[1],0<p.xa-p.K&&x[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Gs(u(p.Va,p),6e3));ch(p.h)<=1&&p.ta&&(p.ta=void 0)}else nr(p,11)}else if((a.L||p.g==a)&&po(p),!I(d))for(x=p.Ba.g.parse(d),d=0;d<x.length;d++){let _e=x[d];const Fe=_e[0];if(!(Fe<=p.K))if(p.K=Fe,_e=_e[1],p.I==2)if(_e[0]=="c"){p.M=_e[1],p.ba=_e[2];const Pt=_e[3];Pt!=null&&(p.ka=Pt,p.j.info("VER="+p.ka));const rr=_e[4];rr!=null&&(p.za=rr,p.j.info("SVER="+p.za));const gn=_e[5];gn!=null&&typeof gn=="number"&&gn>0&&(w=1.5*gn,p.O=w,p.j.info("backChannelRequestTimeoutMs_="+w)),w=p;const yn=a.g;if(yn){const go=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(go){var V=w.h;V.g||go.indexOf("spdy")==-1&&go.indexOf("quic")==-1&&go.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Al(V,V.h),V.h=null))}if(w.G){const Vl=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vl&&(w.wa=Vl,we(w.J,w.G,Vl))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),w=p;var U=a;if(w.na=Dh(w,w.L?w.ba:null,w.W),U.L){uh(w.h,U);var ne=U,Me=w.O;Me&&(ne.H=Me),ne.D&&(Il(ne),ao(ne)),w.g=U}else Sh(w);p.i.length>0&&fo(p)}else _e[0]!="stop"&&_e[0]!="close"||nr(p,7);else p.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?nr(p,7):Sl(p):_e[0]!="noop"&&p.l&&p.l.qa(_e),p.A=0)}}qs(4)}catch{}}var Ib=class{constructor(a,d){this.g=a,this.map=d}};function ah(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function lh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ch(a){return a.h?1:a.g?a.g.size:0}function El(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Al(a,d){a.g?a.g.add(d):a.h=d}function uh(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}ah.prototype.cancel=function(){if(this.i=dh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function dh(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.G);return d}return v(a.i)}var hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vb(a,d){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const w=a[p].indexOf("=");let x,V=null;w>=0?(x=a[p].substring(0,w),V=a[p].substring(w+1)):x=a[p],d(x,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function fn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof fn?(this.l=a.l,Qs(this,a.j),this.o=a.o,this.g=a.g,Ys(this,a.u),this.h=a.h,Cl(this,_h(a.i)),this.m=a.m):a&&(d=String(a).match(hh))?(this.l=!1,Qs(this,d[1]||"",!0),this.o=Xs(d[2]||""),this.g=Xs(d[3]||"",!0),Ys(this,d[4]),this.h=Xs(d[5]||"",!0),Cl(this,d[6]||"",!0),this.m=Xs(d[7]||"")):(this.l=!1,this.i=new ei(null,this.l))}fn.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Zs(d,fh,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Zs(d,fh,!0),"@"),a.push(Js(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Zs(p,p.charAt(0)=="/"?Cb:Ab,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Zs(p,kb)),a.join("")},fn.prototype.resolve=function(a){const d=xt(this);let p=!!a.j;p?Qs(d,a.j):p=!!a.o,p?d.o=a.o:p=!!a.g,p?d.g=a.g:p=a.u!=null;var w=a.h;if(p)Ys(d,a.u);else if(p=!!a.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var x=d.h.lastIndexOf("/");x!=-1&&(w=d.h.slice(0,x+1)+w)}if(x=w,x==".."||x==".")w="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){w=x.lastIndexOf("/",0)==0,x=x.split("/");const V=[];for(let U=0;U<x.length;){const ne=x[U++];ne=="."?w&&U==x.length&&V.push(""):ne==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),w&&U==x.length&&V.push("")):(V.push(ne),w=!0)}w=V.join("/")}else w=x}return p?d.h=w:p=a.i.toString()!=="",p?Cl(d,_h(a.i)):p=!!a.m,p&&(d.m=a.m),d};function xt(a){return new fn(a)}function Qs(a,d,p){a.j=p?Xs(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ys(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function Cl(a,d,p){d instanceof ei?(a.i=d,Sb(a.i,a.l)):(p||(d=Zs(d,Rb)),a.i=new ei(d,a.l))}function we(a,d,p){a.i.set(d,p)}function lo(a){return we(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Xs(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zs(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,Eb),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Eb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var fh=/[#\/\?@]/g,Ab=/[#\?:]/g,Cb=/[#\?]/g,Rb=/[#\?@]/g,kb=/#/g;function ei(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function tr(a){a.g||(a.g=new Map,a.h=0,a.i&&vb(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=ei.prototype,t.add=function(a,d){tr(this),this.i=null,a=Hr(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function ph(a,d){tr(a),d=Hr(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function mh(a,d){return tr(a),d=Hr(a,d),a.g.has(d)}t.forEach=function(a,d){tr(this),this.g.forEach(function(p,w){p.forEach(function(x){a.call(d,x,w,this)},this)},this)};function gh(a,d){tr(a);let p=[];if(typeof d=="string")mh(a,d)&&(p=p.concat(a.g.get(Hr(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)p=p.concat(a[d]);return p}t.set=function(a,d){return tr(this),this.i=null,a=Hr(this,a),mh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=gh(this,a),a.length>0?String(a[0]):d):d};function yh(a,d,p){ph(a,d),p.length>0&&(a.i=null,a.g.set(Hr(a,d),v(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let w=0;w<d.length;w++){var p=d[w];const x=Js(p);p=gh(this,p);for(let V=0;V<p.length;V++){let U=x;p[V]!==""&&(U+="="+Js(p[V])),a.push(U)}}return this.i=a.join("&")};function _h(a){const d=new ei;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function Hr(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Sb(a,d){d&&!a.j&&(tr(a),a.i=null,a.g.forEach(function(p,w){const x=w.toLowerCase();w!=x&&(ph(this,w),yh(this,x,p))},a)),a.j=d}function xb(a,d){const p=new Ws;if(o.Image){const w=new Image;w.onload=h(pn,p,"TestLoadImage: loaded",!0,d,w),w.onerror=h(pn,p,"TestLoadImage: error",!1,d,w),w.onabort=h(pn,p,"TestLoadImage: abort",!1,d,w),w.ontimeout=h(pn,p,"TestLoadImage: timeout",!1,d,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function Pb(a,d){const p=new Ws,w=new AbortController,x=setTimeout(()=>{w.abort(),pn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(V=>{clearTimeout(x),V.ok?pn(p,"TestPingServer: ok",!0,d):pn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(x),pn(p,"TestPingServer: error",!1,d)})}function pn(a,d,p,w,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),w(p)}catch{}}function Vb(){this.g=new pb}function Rl(a){this.i=a.Sb||null,this.h=a.ab||!1}f(Rl,Jd),Rl.prototype.g=function(){return new co(this.i,this.h)};function co(a,d){We.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(co,We),t=co.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,ni(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function bh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ti(this):ni(this),this.readyState==3&&bh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ti(this))},t.Na=function(a){this.g&&(this.response=a,ti(this))},t.ga=function(){this.g&&ti(this)};function ti(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ni(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function ni(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function wh(a){let d="";return Xn(a,function(p,w){d+=w,d+=":",d+=p,d+=`\r
`}),d}function kl(a,d,p){e:{for(w in p){var w=!1;break e}w=!0}w||(p=wh(p),typeof a=="string"?p!=null&&Js(p):we(a,d,p))}function ke(a){We.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(ke,We);var Nb=/^https?$/i,Db=["POST","PUT"];t=ke.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,p,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():th.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(V){Th(this,V);return}if(a=p||"",p=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var x in w)p.set(x,w[x]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const V of w.keys())p.set(V,w.get(V));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Db,d,void 0)>=0)||w||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of p)this.g.setRequestHeader(V,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){Th(this,V)}};function Th(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Ih(a),uo(a)}function Ih(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),uo(this,!0)),ke.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?vh(this):this.Xa())},t.Xa=function(){vh(this)};function vh(a){if(a.h&&typeof i<"u"){if(a.v&&mn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),mn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var w;if(w=V===0){let U=String(a.D).match(hh)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),w=!Nb.test(U?U.toLowerCase():"")}p=w}if(p)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var x=mn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",Ih(a)}}finally{uo(a)}}}}function uo(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,d||rt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function mn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return mn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),fb(d)}};function Eh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Mb(a){const d={};a=(a.g&&mn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(I(a[w]))continue;var p=bb(a[w]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=d[x]||[];d[x]=V,V.push(p)}js(d,function(w){return w.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ri(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function Ah(a){this.za=0,this.i=[],this.j=new Ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ri("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ri("baseRetryDelayMs",5e3,a),this.Za=ri("retryDelaySeedMs",1e4,a),this.Ta=ri("forwardChannelMaxRetries",2,a),this.va=ri("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ah(a&&a.concurrentRequestLimit),this.Ba=new Vb,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ah.prototype,t.ka=8,t.I=1,t.connect=function(a,d,p,w){st(0),this.W=a,this.H=d||{},p&&w!==void 0&&(this.H.OSID=p,this.H.OAID=w),this.F=this.X,this.J=Dh(this,null,this.W),fo(this)};function Sl(a){if(Ch(a),a.I==3){var d=a.V++,p=xt(a.J);if(we(p,"SID",a.M),we(p,"RID",d),we(p,"TYPE","terminate"),si(a,p),d=new hn(a,a.j,d),d.M=2,d.A=lo(xt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=Mh(d.j,null),d.g.ea(d.A)),d.F=Date.now(),ao(d)}Nh(a)}function ho(a){a.g&&(Pl(a),a.g.cancel(),a.g=null)}function Ch(a){ho(a),a.v&&(o.clearTimeout(a.v),a.v=null),po(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function fo(a){if(!lh(a.h)&&!a.m){a.m=!0;var d=a.Ea;N||g(),F||(N(),F=!0),b.add(d,a),a.D=0}}function Lb(a,d){return ch(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Gs(u(a.Ea,a,d),Vh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new hn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=nt(V),Tt(V,this.U)):V=this.U),this.u!==null||this.R||(x.J=V,V=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var w=this.i[p];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=kh(this,x,d),p=xt(this.J),we(p,"RID",a),we(p,"CVER",22),this.G&&we(p,"X-HTTP-Session-Id",this.G),si(this,p),V&&(this.R?d="headers="+Js(wh(V))+"&"+d:this.u&&kl(p,this.u,V)),Al(this.h,x),this.Ra&&we(p,"TYPE","init"),this.S?(we(p,"$req",d),we(p,"SID","null"),x.U=!0,Tl(x,p,null)):Tl(x,p,d),this.I=2}}else this.I==3&&(a?Rh(this,a):this.i.length==0||lh(this.h)||Rh(this))};function Rh(a,d){var p;d?p=d.l:p=a.V++;const w=xt(a.J);we(w,"SID",a.M),we(w,"RID",p),we(w,"AID",a.K),si(a,w),a.u&&a.o&&kl(w,a.u,a.o),p=new hn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),d&&(a.i=d.G.concat(a.i)),d=kh(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Al(a.h,p),Tl(p,w,d)}function si(a,d){a.H&&Xn(a.H,function(p,w){we(d,w,p)}),a.l&&Xn({},function(p,w){we(d,w,p)})}function kh(a,d,p){p=Math.min(a.i.length,p);const w=a.l?u(a.l.Ka,a.l,a):null;e:{var x=a.i;let ne=-1;for(;;){const Me=["count="+p];ne==-1?p>0?(ne=x[0].g,Me.push("ofs="+ne)):ne=0:Me.push("ofs="+ne);let _e=!0;for(let Fe=0;Fe<p;Fe++){var V=x[Fe].g;const Pt=x[Fe].map;if(V-=ne,V<0)ne=Math.max(0,x[Fe].g-100),_e=!1;else try{V="req"+V+"_"||"";try{var U=Pt instanceof Map?Pt:Object.entries(Pt);for(const[rr,gn]of U){let yn=gn;l(gn)&&(yn=gl(gn)),Me.push(V+rr+"="+encodeURIComponent(yn))}}catch(rr){throw Me.push(V+"type="+encodeURIComponent("_badmap")),rr}}catch{w&&w(Pt)}}if(_e){U=Me.join("&");break e}}U=void 0}return a=a.i.splice(0,p),d.G=a,U}function Sh(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;N||g(),F||(N(),F=!0),b.add(d,a),a.A=0}}function xl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Gs(u(a.Da,a),Vh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,xh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Gs(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,st(10),ho(this),xh(this))};function Pl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function xh(a){a.g=new hn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=xt(a.na);we(d,"RID","rpc"),we(d,"SID",a.M),we(d,"AID",a.K),we(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&we(d,"TO",a.ia),we(d,"TYPE","xmlhttp"),si(a,d),a.u&&a.o&&kl(d,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=lo(xt(d)),p.u=null,p.R=!0,sh(p,a)}t.Va=function(){this.C!=null&&(this.C=null,ho(this),xl(this),st(19))};function po(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ph(a,d){var p=null;if(a.g==d){po(a),Pl(a),a.g=null;var w=2}else if(El(a.h,d))p=d.G,uh(a.h,d),w=1;else return;if(a.I!=0){if(d.o)if(w==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var x=a.D;w=io(),rt(w,new Zd(w,p)),fo(a)}else Sh(a);else if(x=d.m,x==3||x==0&&d.X>0||!(w==1&&Lb(a,d)||w==2&&xl(a)))switch(p&&p.length>0&&(d=a.h,d.i=d.i.concat(p)),x){case 1:nr(a,5);break;case 4:nr(a,10);break;case 3:nr(a,6);break;default:nr(a,2)}}}function Vh(a,d){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*d}function nr(a,d){if(a.j.info("Error code "+d),d==2){var p=u(a.bb,a),w=a.Ua;const x=!w;w=new fn(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Qs(w,"https"),lo(w),x?xb(w.toString(),p):Pb(w.toString(),p)}else st(2);a.I=0,a.l&&a.l.pa(d),Nh(a),Ch(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function Nh(a){if(a.I=0,a.ja=[],a.l){const d=dh(a.h);(d.length!=0||a.i.length!=0)&&(T(a.ja,d),T(a.ja,a.i),a.h.i.length=0,v(a.i),a.i.length=0),a.l.oa()}}function Dh(a,d,p){var w=p instanceof fn?xt(p):new fn(p);if(w.g!="")d&&(w.g=d+"."+w.g),Ys(w,w.u);else{var x=o.location;w=x.protocol,d=d?d+"."+x.hostname:x.hostname,x=+x.port;const V=new fn(null);w&&Qs(V,w),d&&(V.g=d),x&&Ys(V,x),p&&(V.h=p),w=V}return p=a.G,d=a.wa,p&&d&&we(w,p,d),we(w,"VER",a.ka),si(a,w),w}function Mh(a,d,p){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new ke(new Rl({ab:p})):new ke(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lh(){}t=Lh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function mo(){}mo.prototype.g=function(a,d){return new lt(a,d)};function lt(a,d){We.call(this),this.g=new Ah(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!I(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!I(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new qr(this)}f(lt,We),lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},lt.prototype.close=function(){Sl(this.g)},lt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=gl(a),a=p);d.i.push(new Ib(d.Ya++,a)),d.I==3&&fo(d)},lt.prototype.N=function(){this.g.l=null,delete this.j,Sl(this.g),delete this.g,lt.Z.N.call(this)};function Oh(a){yl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}f(Oh,yl);function Fh(){_l.call(this),this.status=1}f(Fh,_l);function qr(a){this.g=a}f(qr,Lh),qr.prototype.ra=function(){rt(this.g,"a")},qr.prototype.qa=function(a){rt(this.g,new Oh(a))},qr.prototype.pa=function(a){rt(this.g,new Fh)},qr.prototype.oa=function(){rt(this.g,"b")},mo.prototype.createWebChannel=mo.prototype.g,lt.prototype.send=lt.prototype.o,lt.prototype.open=lt.prototype.m,lt.prototype.close=lt.prototype.close,Sy=function(){return new mo},ky=function(){return io()},Ry=Zn,Lc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},oo.NO_ERROR=0,oo.TIMEOUT=8,oo.HTTP_ERROR=6,Fo=oo,eh.COMPLETE="complete",Cy=eh,Kd.EventType=Hs,Hs.OPEN="a",Hs.CLOSE="b",Hs.ERROR="c",Hs.MESSAGE="d",We.prototype.listen=We.prototype.J,fi=Kd,ke.prototype.listenOnce=ke.prototype.K,ke.prototype.getLastError=ke.prototype.Ha,ke.prototype.getLastErrorCode=ke.prototype.ya,ke.prototype.getStatus=ke.prototype.ca,ke.prototype.getResponseJson=ke.prototype.La,ke.prototype.getResponseText=ke.prototype.la,ke.prototype.send=ke.prototype.ea,ke.prototype.setWithCredentials=ke.prototype.Fa,Ay=ke}).apply(typeof bo<"u"?bo:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds="12.8.0";function sC(t){Ds=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Nr=new Cu("@firebase/firestore");function os(){return Nr.logLevel}function H(t,...e){if(Nr.logLevel<=ie.DEBUG){const n=e.map($u);Nr.debug(`Firestore (${Ds}): ${t}`,...n)}}function on(t,...e){if(Nr.logLevel<=ie.ERROR){const n=e.map($u);Nr.error(`Firestore (${Ds}): ${t}`,...n)}}function ws(t,...e){if(Nr.logLevel<=ie.WARN){const n=e.map($u);Nr.warn(`Firestore (${Ds}): ${t}`,...n)}}function $u(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,xy(t,r,n)}function xy(t,e,n){let r=`FIRESTORE (${Ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw on(r),new Error(r)}function fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||xy(e,s,r)}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ye.UNAUTHENTICATED)))}shutdown(){}}class oC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class aC{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new tn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string",31837,{l:r}),new Py(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class lC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class cC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new lC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Ye.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Df{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){fe(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Df(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Df(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=dC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Oc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return zl(s)===zl(i)?oe(s,i):zl(s)?1:-1}return oe(t.length,e.length)}const hC=55296,fC=57343;function zl(t){const e=t.charCodeAt(0);return e>=hC&&e<=fC}function Ts(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="__name__";class Nt{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Nt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Nt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return oe(e.length,n.length)}static compareSegments(e,n){const r=Nt.isNumericId(e),s=Nt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Nt.extractNumericId(e).compare(Nt.extractNumericId(n)):Oc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fn.fromString(e.substring(4,e.length-2))}}class be extends Nt{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new be(n)}static emptyPath(){return new be([])}}const pC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Nt{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return pC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mf}static keyField(){return new je([Mf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new B(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new B(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(be.fromString(e))}static fromName(e){return new J(be.fromString(e).popFirst(5))}static empty(){return new J(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new be(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t,e,n){if(!n)throw new B(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mC(t,e,n,r){if(e===!0&&r===!0)throw new B(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Lf(t){if(!J.isDocumentKey(t))throw new B(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Of(t){if(J.isDocumentKey(t))throw new B(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ny(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ma(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function dt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ma(t);throw new B(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ki(t,e){if(!Ny(t))throw new B(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new B(D.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=-62135596800,Uf=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Uf);return new Ie(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ff)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uf}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ki(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ff;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:Ne("string",Ie._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ie(0,0))}static max(){return new ee(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Vi=-1;function gC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ie(n+1,0):new Ie(n,r));return new $n(s,J.empty(),e)}function yC(t){return new $n(t.readTime,t.key,Vi)}class $n{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $n(ee.min(),J.empty(),Vi)}static max(){return new $n(ee.max(),J.empty(),Vi)}}function _C(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==bC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):M.reject(n)}static resolve(e){return new M(((n,r)=>{n(e)}))}static reject(e){return new M(((n,r)=>{r(e)}))}static waitFor(e){return new M(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next((s=>s?M.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new M(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((h=>{o[u]=h,++l,l===i&&r(o)}),(h=>s(h)))}}))}static doWhile(e,n){return new M(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function TC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ls(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class La{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}La.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=-1;function Oa(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function IC(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="";function vC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=$f(e)),e=EC(t.get(n),e);return $f(e)}function EC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Dy:n+="";break;default:n+=i}}return n}function $f(t){return t+Dy+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function My(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jf(this.data.getIterator())}getIteratorFrom(e){return new jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new ut([])}unionWith(e){let n=new Le(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Ly extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ly("Invalid base64 string: "+i):i}})(e);return new He(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const AC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(fe(!!t,39018),typeof t=="string"){let e=0;const n=AC.exec(t);if(fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jn(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="server_timestamp",Fy="__type__",Uy="__previous_value__",$y="__local_write_time__";function zu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Fy])==null?void 0:r.stringValue)===Oy}function Fa(t){const e=t.mapValue.fields[Uy];return zu(e)?Fa(e):e}function Ni(t){const e=Bn(t.mapValue.fields[$y].timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n,r,s,i,o,l,c,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=f}}const oa="(default)";class Di{constructor(e,n){this.projectId=e,this.database=n||oa}static empty(){return new Di("","")}get isDefaultDatabase(){return this.database===oa}isEqual(e){return e instanceof Di&&e.projectId===this.projectId&&e.database===this.database}}function RC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new B(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Di(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By="__type__",kC="__max__",To={mapValue:{}},jy="__vector__",aa="value";function zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zu(t)?4:xC(t)?9007199254740991:SC(t)?10:11:Q(28295,{value:t})}function jt(t,e){if(t===e)return!0;const n=zn(t);if(n!==zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ni(t).isEqual(Ni(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Bn(s.timestampValue),l=Bn(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return jn(s.bytesValue).isEqual(jn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Se(s.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Se(s.integerValue)===Se(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Se(s.doubleValue),l=Se(i.doubleValue);return o===l?ia(o)===ia(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Bf(o)!==Bf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!jt(o[c],l[c])))return!1;return!0})(t,e);default:return Q(52216,{left:t})}}function Mi(t,e){return(t.values||[]).find((n=>jt(n,e)))!==void 0}function Is(t,e){if(t===e)return 0;const n=zn(t),r=zn(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Se(i.integerValue||i.doubleValue),c=Se(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return zf(t.timestampValue,e.timestampValue);case 4:return zf(Ni(t),Ni(e));case 5:return Oc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=jn(i),c=jn(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=oe(l[u],c[u]);if(h!==0)return h}return oe(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=oe(Se(i.latitude),Se(o.latitude));return l!==0?l:oe(Se(i.longitude),Se(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Hf(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,v,T,R;const l=i.fields||{},c=o.fields||{},u=(m=l[aa])==null?void 0:m.arrayValue,h=(v=c[aa])==null?void 0:v.arrayValue,f=oe(((T=u==null?void 0:u.values)==null?void 0:T.length)||0,((R=h==null?void 0:h.values)==null?void 0:R.length)||0);return f!==0?f:Hf(u,h)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===To.mapValue&&o===To.mapValue)return 0;if(i===To.mapValue)return 1;if(o===To.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=Oc(c[f],h[f]);if(m!==0)return m;const v=Is(l[c[f]],u[h[f]]);if(v!==0)return v}return oe(c.length,h.length)})(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function zf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Bn(t),r=Bn(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function Hf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Is(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function vs(t){return Fc(t)}function Fc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Bn(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return jn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return J.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fc(n.fields[o])}`;return s+"}"})(t.mapValue):Q(61005,{value:t})}function Uo(t){switch(zn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fa(t);return e?16+Uo(e):16;case 5:return 2*t.stringValue.length;case 6:return jn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Uo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Jn(r.fields,((i,o)=>{s+=i.length+Uo(o)})),s})(t.mapValue);default:throw Q(13486,{value:t})}}function qf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Uc(t){return!!t&&"integerValue"in t}function Hu(t){return!!t&&"arrayValue"in t}function Gf(t){return!!t&&"nullValue"in t}function Wf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $o(t){return!!t&&"mapValue"in t}function SC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[By])==null?void 0:r.stringValue)===jy}function Ti(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Jn(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ti(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ti(t.arrayValue.values[n]);return e}return{...t}}function xC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===kC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.value=e}static empty(){return new ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$o(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ti(n)}setAll(e){let n=je.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Ti(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$o(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$o(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Jn(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new ot(Ti(this.value))}}function zy(t){const e=[];return Jn(t.fields,((n,r)=>{const s=new je([n]);if($o(r)){const i=zy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new ut(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Xe(e,0,ee.min(),ee.min(),ee.min(),ot.empty(),0)}static newFoundDocument(e,n,r,s){return new Xe(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new Xe(e,2,n,ee.min(),ee.min(),ot.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,ee.min(),ee.min(),ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class la{constructor(e,n){this.position=e,this.inclusive=n}}function Jf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Kf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function PC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hy{}class Ve extends Hy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NC(e,n,r):n==="array-contains"?new LC(e,r):n==="in"?new OC(e,r):n==="not-in"?new FC(e,r):n==="array-contains-any"?new UC(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DC(e,r):new MC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Is(n,this.value)):n!==null&&zn(this.value)===zn(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends Hy{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new kt(e,n)}matches(e){return qy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qy(t){return t.op==="and"}function Gy(t){return VC(t)&&qy(t)}function VC(t){for(const e of t.filters)if(e instanceof kt)return!1;return!0}function $c(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+vs(t.value);if(Gy(t))return t.filters.map((e=>$c(e))).join(",");{const e=t.filters.map((n=>$c(n))).join(",");return`${t.op}(${e})`}}function Wy(t,e){return t instanceof Ve?(function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&jt(r.value,s.value)})(t,e):t instanceof kt?(function(r,s){return s instanceof kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&Wy(o,s.filters[l])),!0):!1})(t,e):void Q(19439)}function Jy(t){return t instanceof Ve?(function(n){return`${n.field.canonicalString()} ${n.op} ${vs(n.value)}`})(t):t instanceof kt?(function(n){return n.op.toString()+" {"+n.getFilters().map(Jy).join(" ,")+"}"})(t):"Filter"}class NC extends Ve{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class DC extends Ve{constructor(e,n){super(e,"in",n),this.keys=Ky("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class MC extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=Ky("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Ky(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>J.fromName(r.referenceValue)))}class LC extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hu(n)&&Mi(n.arrayValue,this.value)}}class OC extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Mi(this.value.arrayValue,n)}}class FC extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Mi(this.value.arrayValue,n)}}class UC extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Mi(this.value.arrayValue,r)))}}/**
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
 */class $C{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Qf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new $C(t,e,n,r,s,i,o)}function qu(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>$c(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Oa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>vs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>vs(r))).join(",")),e.Te=n}return e.Te}function Gu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Kf(t.startAt,e.startAt)&&Kf(t.endAt,e.endAt)}function Bc(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function BC(t,e,n,r,s,i,o,l){return new Qi(t,e,n,r,s,i,o,l)}function Ua(t){return new Qi(t)}function Yf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jC(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Qy(t){return t.collectionGroup!==null}function Ii(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le(je.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ca(i,r))})),n.has(je.keyField().canonicalString())||e.Ie.push(new ca(je.keyField(),r))}return e.Ie}function Lt(t){const e=te(t);return e.Ee||(e.Ee=zC(e,Ii(t))),e.Ee}function zC(t,e){if(t.limitType==="F")return Qf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new ca(s.field,i)}));const n=t.endAt?new la(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new la(t.startAt.position,t.startAt.inclusive):null;return Qf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jc(t,e){const n=t.filters.concat([e]);return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function zc(t,e,n){return new Qi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $a(t,e){return Gu(Lt(t),Lt(e))&&t.limitType===e.limitType}function Yy(t){return`${qu(Lt(t))}|lt:${t.limitType}`}function as(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Jy(s))).join(", ")}]`),Oa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>vs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>vs(s))).join(",")),`Target(${r})`})(Lt(t))}; limitType=${t.limitType})`}function Ba(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Ii(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=Jf(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,Ii(r),s)||r.endAt&&!(function(o,l,c){const u=Jf(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,Ii(r),s))})(t,e)}function HC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xy(t){return(e,n)=>{let r=!1;for(const s of Ii(t)){const i=qC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qC(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Is(c,u):Q(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return My(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=new Re(J.comparator);function an(){return GC}const Zy=new Re(J.comparator);function pi(...t){let e=Zy;for(const n of t)e=e.insert(n.key,n);return e}function e_(t){let e=Zy;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Ar(){return vi()}function t_(){return vi()}function vi(){return new Or((t=>t.toString()),((t,e)=>t.isEqual(e)))}const WC=new Re(J.comparator),JC=new Le(J.comparator);function ae(...t){let e=JC;for(const n of t)e=e.add(n);return e}const KC=new Le(oe);function QC(){return KC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function n_(t){return{integerValue:""+t}}function YC(t,e){return IC(e)?n_(e):Wu(t,e)}/**
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
 */class ja{constructor(){this._=void 0}}function XC(t,e,n){return t instanceof Li?(function(s,i){const o={fields:{[Fy]:{stringValue:Oy},[$y]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zu(i)&&(i=Fa(i)),i&&(o.fields[Uy]=i),{mapValue:o}})(n,e):t instanceof Oi?s_(t,e):t instanceof Fi?i_(t,e):(function(s,i){const o=r_(s,i),l=Xf(o)+Xf(s.Ae);return Uc(o)&&Uc(s.Ae)?n_(l):Wu(s.serializer,l)})(t,e)}function ZC(t,e,n){return t instanceof Oi?s_(t,e):t instanceof Fi?i_(t,e):n}function r_(t,e){return t instanceof ua?(function(r){return Uc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Li extends ja{}class Oi extends ja{constructor(e){super(),this.elements=e}}function s_(t,e){const n=o_(e);for(const r of t.elements)n.some((s=>jt(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Fi extends ja{constructor(e){super(),this.elements=e}}function i_(t,e){let n=o_(e);for(const r of t.elements)n=n.filter((s=>!jt(s,r)));return{arrayValue:{values:n}}}class ua extends ja{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Xf(t){return Se(t.integerValue||t.doubleValue)}function o_(t){return Hu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n){this.field=e,this.transform=n}}function t2(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Oi&&s instanceof Oi||r instanceof Fi&&s instanceof Fi?Ts(r.elements,s.elements,jt):r instanceof ua&&s instanceof ua?jt(r.Ae,s.Ae):r instanceof Li&&s instanceof Li})(t.transform,e.transform)}class n2{constructor(e,n){this.version=e,this.transformResults=n}}class at{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class za{}function a_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ha(t.key,at.none()):new Yi(t.key,t.data,at.none());{const n=t.data,r=ot.empty();let s=new Le(je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Kn(t.key,r,new ut(s.toArray()),at.none())}}function r2(t,e,n){t instanceof Yi?(function(s,i,o){const l=s.value.clone(),c=ep(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof Kn?(function(s,i,o){if(!Bo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ep(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(l_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ei(t,e,n,r){return t instanceof Yi?(function(i,o,l,c){if(!Bo(i.precondition,o))return l;const u=i.value.clone(),h=tp(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Kn?(function(i,o,l,c){if(!Bo(i.precondition,o))return l;const u=tp(i.fieldTransforms,c,o),h=o.data;return h.setAll(l_(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(t,e,n,r):(function(i,o,l){return Bo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function s2(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=r_(r.transform,s||null);i!=null&&(n===null&&(n=ot.empty()),n.set(r.field,i))}return n||null}function Zf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ts(r,s,((i,o)=>t2(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yi extends za{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kn extends za{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function l_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ep(t,e,n){const r=new Map;fe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,ZC(o,l,n[s]))}return r}function tp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,XC(i,o,e))}return r}class Ha extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i2 extends za{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&r2(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ei(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=t_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=a_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ae())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,((n,r)=>Zf(n,r)))&&Ts(this.baseMutations,e.baseMutations,((n,r)=>Zf(n,r)))}}class Ju{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){fe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return WC})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ju(e,n,r,s)}}/**
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
 */class a2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class l2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,de;function c2(t){switch(t){case D.OK:return Q(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function c_(t){if(t===void 0)return on("GRPC error has no .code"),D.UNKNOWN;switch(t){case Pe.OK:return D.OK;case Pe.CANCELLED:return D.CANCELLED;case Pe.UNKNOWN:return D.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return D.INTERNAL;case Pe.UNAVAILABLE:return D.UNAVAILABLE;case Pe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Pe.NOT_FOUND:return D.NOT_FOUND;case Pe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Pe.ABORTED:return D.ABORTED;case Pe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Pe.DATA_LOSS:return D.DATA_LOSS;default:return Q(39323,{code:t})}}(de=Pe||(Pe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function u2(){return new TextEncoder}/**
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
 */const d2=new Fn([4294967295,4294967295],0);function np(t){const e=u2().encode(t),n=new Ey;return n.update(e),new Uint8Array(n.digest())}function rp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fn([n,r],0),new Fn([s,i],0)]}class Ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mi(`Invalid padding: ${n}`);if(r<0)throw new mi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mi(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Fn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Fn.fromNumber(r)));return s.compare(d2)===1&&(s=new Fn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=np(e),[r,s]=rp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ku(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=np(e),[r,s]=rp(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new qa(ee.min(),s,new Re(oe),an(),ae())}}class Xi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xi(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class u_{constructor(e,n){this.targetId=e,this.Ce=n}}class d_{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sp{constructor(){this.ve=0,this.Fe=ip(),this.Me=He.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q(38017,{changeType:i})}})),new Xi(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=ip()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class h2{constructor(e){this.Ge=e,this.ze=new Map,this.je=an(),this.He=Io(),this.Je=Io(),this.Ze=new Re(oe)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Bc(i))if(r===0){const o=new J(i.path);this.et(n,o,Xe.newNoDocument(o,ee.min()))}else fe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=jn(r).toUint8Array()}catch(c){if(c instanceof Ly)return ws("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Ku(o,s,i)}catch(c){return ws(c instanceof mi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Bc(l.target)){const c=new J(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Xe.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}}));let r=ae();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new qa(e,n,this.Ze,this.je,r);return this.je=an(),this.He=Io(),this.Je=Io(),this.Ze=new Re(oe),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new sp,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Le(oe),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Le(oe),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new sp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Io(){return new Re(J.comparator)}function ip(){return new Re(J.comparator)}const f2={asc:"ASCENDING",desc:"DESCENDING"},p2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m2={and:"AND",or:"OR"};class g2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hc(t,e){return t.useProto3Json||Oa(e)?e:{value:e}}function da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function h_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function y2(t,e){return da(t,e.toTimestamp())}function Ot(t){return fe(!!t,49232),ee.fromTimestamp((function(n){const r=Bn(n);return new Ie(r.seconds,r.nanos)})(t))}function Qu(t,e){return qc(t,e).canonicalString()}function qc(t,e){const n=(function(s){return new be(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function f_(t){const e=be.fromString(t);return fe(__(e),10190,{key:e.toString()}),e}function Gc(t,e){return Qu(t.databaseId,e.path)}function Hl(t,e){const n=f_(e);if(n.get(1)!==t.databaseId.projectId)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(m_(n))}function p_(t,e){return Qu(t.databaseId,e)}function _2(t){const e=f_(t);return e.length===4?be.emptyPath():m_(e)}function Wc(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m_(t){return fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function op(t,e,n){return{name:Gc(t,e),fields:n.value.mapValue.fields}}function b2(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:Q(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(fe(h===void 0||typeof h=="string",58123),He.fromBase64String(h||"")):(fe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),He.fromUint8Array(h||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const h=u.code===void 0?D.UNKNOWN:c_(u.code);return new B(h,u.message||"")})(o);n=new d_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hl(t,r.document.name),i=Ot(r.document.updateTime),o=r.document.createTime?Ot(r.document.createTime):ee.min(),l=new ot({mapValue:{fields:r.document.fields}}),c=Xe.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new jo(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Hl(t,r.document),i=r.readTime?Ot(r.readTime):ee.min(),o=Xe.newNoDocument(s,i),l=r.removedTargetIds||[];n=new jo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Hl(t,r.document),i=r.removedTargetIds||[];n=new jo([],i,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new l2(s,i),l=r.targetId;n=new u_(l,o)}}return n}function w2(t,e){let n;if(e instanceof Yi)n={update:op(t,e.key,e.value)};else if(e instanceof Ha)n={delete:Gc(t,e.key)};else if(e instanceof Kn)n={update:op(t,e.key,e.data),updateMask:S2(e.fieldMask)};else{if(!(e instanceof i2))return Q(16599,{dt:e.type});n={verify:Gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Oi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ua)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Q(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:y2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q(27497)})(t,e.precondition)),n}function T2(t,e){return t&&t.length>0?(fe(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Ot(s.updateTime):Ot(i);return o.isEqual(ee.min())&&(o=Ot(i)),new n2(o,s.transformResults||[])})(n,e)))):[]}function I2(t,e){return{documents:[p_(t,e.path)]}}function v2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=p_(t,s);const i=(function(u){if(u.length!==0)return y_(kt.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(m){return{field:ls(m.field),direction:C2(m.dir)}})(h)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Hc(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function E2(t){let e=_2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){fe(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=(function(f){const m=g_(f);return m instanceof kt&&Gy(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(f){return f.map((m=>(function(T){return new ca(cs(T.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(T.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(f){let m;return m=typeof f=="object"?f.value:f,Oa(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(f){const m=!!f.before,v=f.values||[];return new la(v,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(f){const m=!f.before,v=f.values||[];return new la(v,m)})(n.endAt)),BC(e,s,o,i,l,"F",c,u)}function A2(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function g_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=cs(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cs(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=cs(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ve.create(cs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return kt.create(n.compositeFilter.filters.map((r=>g_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}})(n.compositeFilter.op))})(t):Q(30097,{filter:t})}function C2(t){return f2[t]}function R2(t){return p2[t]}function k2(t){return m2[t]}function ls(t){return{fieldPath:t.canonicalString()}}function cs(t){return je.fromServerFormat(t.fieldPath)}function y_(t){return t instanceof Ve?(function(n){if(n.op==="=="){if(Wf(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NAN"}};if(Gf(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wf(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NAN"}};if(Gf(n.value))return{unaryFilter:{field:ls(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ls(n.field),op:R2(n.op),value:n.value}}})(t):t instanceof kt?(function(n){const r=n.getFilters().map((s=>y_(s)));return r.length===1?r[0]:{compositeFilter:{op:k2(n.op),filters:r}}})(t):Q(54877,{filter:t})}function S2(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function __(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function b_(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n,r,s,i=ee.min(),o=ee.min(),l=He.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.yt=e}}function P2(t){const e=E2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zc(e,e.limit,"L"):e}/**
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
 */class V2{constructor(){this.Sn=new N2}addToCollectionParentIndex(e,n){return this.Sn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve($n.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve($n.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class N2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Le(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(be.comparator)).toArray()}}/**
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
 */const ap={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},w_=41943040;class it{static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(w_,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Es(0)}static ar(){return new Es(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="LruGarbageCollector",D2=1048576;function cp([t,e],[n,r]){const s=oe(t,n);return s===0?oe(e,r):s}class M2{constructor(e){this.Pr=e,this.buffer=new Le(cp),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class L2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(lp,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ls(n)?H(lp,"Ignoring IndexedDB error during garbage collection: ",n):await Ms(n)}await this.Ar(3e5)}))}}class O2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return M.resolve(La.ce);const r=new M2(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(ap)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ap):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(r=f,l=Date.now(),this.removeTargets(e,r,n)))).next((f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((f=>(u=Date.now(),os()<=ie.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function F2(t,e){return new O2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.changes=new Or((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ei(r.mutation,s,ut.empty(),Ie.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,ae()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=ae()){const s=Ar();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=pi();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,ae())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=an();const o=vi(),l=(function(){return vi()})();return n.forEach(((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof Kn)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ei(h.mutation,u,h.mutation.getFieldMask(),Ie.now())):o.set(u.key,ut.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,h)=>o.set(u,h))),n.forEach(((u,h)=>l.set(u,new $2(h,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=vi();let s=new Re(((o,l)=>o-l)),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||ut.empty();h=l.applyToLocalView(u,h),r.set(c,h);const f=(s.get(l.batchId)||ae()).add(c);s=s.insert(l.batchId,f)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,f=t_();h.forEach((m=>{if(!i.has(m)){const v=a_(n.get(m),r.get(m));v!==null&&f.set(m,v),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return M.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return jC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Qy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Ar());let l=Vi,c=i;return o.next((u=>M.forEach(u,((h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next((m=>{c=c.insert(h,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,ae()))).next((h=>({batchId:l,changes:e_(h)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next((r=>{let s=pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=pi();return this.indexManager.getCollectionParents(e,i).next((l=>M.forEach(l,(c=>{const u=(function(f,m){return new Qi(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((h=>{h.forEach(((f,m)=>{o=o.insert(f,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Xe.newInvalidDocument(h)))}));let l=pi();return o.forEach(((c,u)=>{const h=i.get(c);h!==void 0&&Ei(h.mutation,u,ut.empty(),Ie.now()),Ba(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Ot(s.createTime)}})(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:P2(s.bundledQuery),readTime:Ot(s.readTime)}})(n)),M.resolve()}}/**
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
 */class z2{constructor(){this.overlays=new Re(J.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return M.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.bt(e,n,i)})),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new J(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Ar(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Ar(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,h)=>l.set(u,h))),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a2(n,r));let i=this.Lr.get(n);i===void 0&&(i=ae(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class H2{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.kr=new Le(Ue.Kr),this.qr=new Le(Ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Ue(e,n))}Qr(e,n){e.forEach((r=>this.removeReference(r,n)))}Gr(e){const n=new J(new be([])),r=new Ue(n,e),s=new Ue(n,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new J(new be([])),r=new Ue(n,e),s=new Ue(n,e+1);let i=ae();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Ue(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return J.comparator(e.key,n.key)||oe(e.Hr,n.Hr)}static Ur(e,n){return oe(e.Hr,n.Hr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Le(Ue.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o2(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Ue(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?ju:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),s=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(oe);return n.forEach((s=>{const i=new Ue(s,0),o=new Ue(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new J(i),0);let l=new Le(oe);return this.Jr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){fe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return M.forEach(n.mutations,(s=>{const i=new Ue(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,n){const r=new Ue(n,0),s=this.Jr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.ti=e,this.docs=(function(){return new Re(J.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Xe.newInvalidDocument(s))})),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=an();const o=n.path,l=new J(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_C(yC(h),r)<=0||(s.has(h.key)||Ba(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Q(9500)}ni(e,n){return M.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new W2(this)}getSize(e){return M.resolve(this.size)}}class W2 extends U2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.persistence=e,this.ri=new Or((n=>qu(n)),Gu),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new Yu,this.targetCount=0,this.oi=Es._r()}forEachTarget(e,n){return this.ri.forEach(((r,s)=>n(s))),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Es(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),M.waitFor(i).next((()=>s))}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,n){this._i={},this.overlays={},this.ai=new La(0),this.ui=!1,this.ui=!0,this.ci=new H2,this.referenceDelegate=e(this),this.li=new J2(this),this.indexManager=new V2,this.remoteDocumentCache=(function(s){return new G2(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new x2(n),this.Pi=new j2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new z2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new q2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new K2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return M.or(Object.values(this._i).map((r=>()=>r.containsKey(e,n))))}}class K2 extends wC{constructor(e){super(),this.currentSequenceNumber=e}}class Xu{constructor(e){this.persistence=e,this.Ri=new Yu,this.Ai=null}static Vi(e){return new Xu(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,(r=>{const s=J.fromPath(r);return this.mi(e,s).next((i=>{i||n.removeEntry(s,ee.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ha{constructor(e,n){this.persistence=e,this.fi=new Or((r=>vC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=F2(this,n)}static Vi(e,n){return new ha(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}pr(e){let n=0;return this.mr(e,(r=>{n++})).next((()=>n))}mr(e,n){return M.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?M.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,ee.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Uo(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ae(),s=ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Zu(e,n.fromCache,r,s)}}/**
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
 */class Q2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Y2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Fv()?8:TC(tt())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new Q2;return this.ys(e,n,o).next((l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)}))})).next((()=>i.result))}ws(e,n,r,s){return r.documentReadCount<this.Vs?(os()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",as(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(os()<=ie.DEBUG&&H("QueryEngine","Query:",as(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(os()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",as(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lt(n))):M.resolve())}gs(e,n){if(Yf(n))return M.resolve(null);let r=Lt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=zc(n,null,"F"),r=Lt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ae(...i);return this.fs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ss(n,u,o,c.readTime)?this.gs(e,zc(n,null,"F")):this.Ds(e,u,n,c)}))))})))))}ps(e,n,r,s){return Yf(n)||s.isEqual(ee.min())?M.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?M.resolve(null):(os()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),as(n)),this.Ds(e,o,n,gC(s,Vi)).next((l=>l)))}))}bs(e,n){let r=new Le(Xy(e));return n.forEach(((s,i)=>{Ba(e,i)&&(r=r.add(i))})),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return os()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",as(n)),this.fs.getDocumentsMatchingQuery(e,n,$n.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="LocalStore",X2=3e8;class Z2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Re(oe),this.Fs=new Or((i=>qu(i)),Gu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new B2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function eR(t,e,n,r){return new Z2(t,e,n,r)}async function I_(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=ae();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function tR(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,h){const f=u.batch,m=f.keys();let v=M.resolve();return m.forEach((T=>{v=v.next((()=>h.getEntry(c,T))).next((R=>{const P=u.docVersions.get(T);fe(P!==null,48541),R.version.compareTo(P)<0&&(f.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))}))})),v.next((()=>l.mutationQueue.removeMutationBatch(c,f)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function v_(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function nR(t,e){const n=te(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach(((h,f)=>{const m=s.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(i,h.removedDocuments,f).next((()=>n.li.addMatchingKeys(i,h.addedDocuments,f))));let v=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(He.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),s=s.insert(f,v),(function(R,P,S){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=X2?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0})(m,v,h)&&l.push(n.li.updateTargetData(i,v))}));let c=an(),u=ae();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))})),l.push(rR(i,o,e.documentUpdates).next((h=>{c=h.Bs,u=h.Ls}))),!r.isEqual(ee.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next((f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(h)}return M.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.vs=s,i)))}function rR(t,e,n){let r=ae(),s=ae();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=an();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):H(ed,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Bs:o,Ls:s}}))}function sR(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=ju),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function iR(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.li.getTargetData(r,e).next((i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next((o=>(s=new Vn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r}))}async function Jc(t,e,n){const r=te(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ls(o))throw o;H(ed,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function up(t,e,n){const r=te(t);let s=ee.min(),i=ae();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,h){const f=te(c),m=f.Fs.get(h);return m!==void 0?M.resolve(f.vs.get(m)):f.li.getTargetData(u,h)})(r,o,Lt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ae()))).next((l=>(oR(r,HC(e),l),{documents:l,ks:i})))))}function oR(t,e,n){let r=t.Ms.get(e)||ee.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Ms.set(e,r)}class dp{constructor(){this.activeTargetIds=QC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aR{constructor(){this.vo=new dp,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new dp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lR{Mo(e){}shutdown(){}}/**
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
 */const hp="ConnectivityMonitor";class fp{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(hp,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(hp,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let vo=null;function Kc(){return vo===null?vo=(function(){return 268435456+Math.round(2147483648*Math.random())})():vo++,"0x"+vo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="RestConnection",cR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class uR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===oa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Kc(),l=this.Qo(e,n.toUriEncodedString());H(ql,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:u}=new URL(l),h=xs(u);return this.zo(e,l,c,r,h).then((f=>(H(ql,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw ws(ql,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f}))}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ds})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,n){const r=cR[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je="WebChannelConnection",ii=(t,e,n)=>{t.listen(e,(r=>{try{n(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ms extends uR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ms.c_){const e=ky();ii(e,Ry.STAT_EVENT,(n=>{n.stat===Lc.PROXY?H(Je,"STAT_EVENT: detected buffering proxy"):n.stat===Lc.NOPROXY&&H(Je,"STAT_EVENT: detected no buffering proxy")})),ms.c_=!0}}zo(e,n,r,s,i){const o=Kc();return new Promise(((l,c)=>{const u=new Ay;u.setWithCredentials(!0),u.listenOnce(Cy.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Fo.NO_ERROR:const f=u.getResponseJson();H(Je,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case Fo.TIMEOUT:H(Je,`RPC '${e}' ${o} timed out`),c(new B(D.DEADLINE_EXCEEDED,"Request time out"));break;case Fo.HTTP_ERROR:const m=u.getStatus();if(H(Je,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const T=v==null?void 0:v.error;if(T&&T.status&&T.message){const R=(function(S){const k=S.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(k)>=0?k:D.UNKNOWN})(T.status);c(new B(R,T.message))}else c(new B(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new B(D.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{H(Je,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(s);H(Je,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)}))}T_(e,n,r){const s=Kc(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");H(Je,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);this.I_(h);let f=!1,m=!1;const v=new dR({Ho:T=>{m?H(Je,`Not sending because RPC '${e}' stream ${s} is closed:`,T):(f||(H(Je,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),H(Je,`RPC '${e}' stream ${s} sending:`,T),h.send(T))},Jo:()=>h.close()});return ii(h,fi.EventType.OPEN,(()=>{m||(H(Je,`RPC '${e}' stream ${s} transport opened.`),v.i_())})),ii(h,fi.EventType.CLOSE,(()=>{m||(m=!0,H(Je,`RPC '${e}' stream ${s} transport closed`),v.o_(),this.E_(h))})),ii(h,fi.EventType.ERROR,(T=>{m||(m=!0,ws(Je,`RPC '${e}' stream ${s} transport errored. Name:`,T.name,"Message:",T.message),v.o_(new B(D.UNAVAILABLE,"The operation could not be completed")))})),ii(h,fi.EventType.MESSAGE,(T=>{var R;if(!m){const P=T.data[0];fe(!!P,16349);const S=P,k=(S==null?void 0:S.error)||((R=S[0])==null?void 0:R.error);if(k){H(Je,`RPC '${e}' stream ${s} received error:`,k);const L=k.status;let G=(function(b){const g=Pe[b];if(g!==void 0)return c_(g)})(L),N=k.message;G===void 0&&(G=D.INTERNAL,N="Unknown error status: "+L+" with message "+k.message),m=!0,v.o_(new B(G,N)),h.close()}else H(Je,`RPC '${e}' stream ${s} received:`,P),v.__(P)}})),ms.u_(),setTimeout((()=>{v.s_()}),0),v}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Sy()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){return new ms(t)}function Gl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){return new g2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ms.c_=!1;class E_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="PersistentStream";class A_{constructor(e,n,r,s,i,o,l,c){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new E_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new B(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(pp,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(H(pp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fR extends A_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=b2(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Ot(o.readTime):ee.min()})(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=Wc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Bc(c)?{documents:I2(i,c)}:{query:v2(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=h_(i,o.resumeToken);const u=Hc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=da(i,o.snapshotVersion.toTimestamp());const u=Hc(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=A2(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Wc(this.serializer),n.removeTarget=e,this.K_(n)}}class pR extends A_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=T2(e.writeResults,e.commitTime),r=Ot(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Wc(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>w2(this.serializer,r)))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{}class gR extends mR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,qc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(D.UNKNOWN,i.toString())}))}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.jo(e,qc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(D.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function yR(t,e,n,r){return new gR(t,e,n,r)}class _R{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(on(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="RemoteStore";class bR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{Fr(this)&&(H(Dr,"Restarting streams for network reachability change."),await(async function(c){const u=te(c);u.Ea.add(4),await Zi(u),u.Va.set("Unknown"),u.Ea.delete(4),await Wa(u)})(this))}))})),this.Va=new _R(r,s)}}async function Wa(t){if(Fr(t))for(const e of t.Ra)await e(!0)}async function Zi(t){for(const e of t.Ra)await e(!1)}function C_(t,e){const n=te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),sd(n)?rd(n):Os(n).O_()&&nd(n,e))}function td(t,e){const n=te(t),r=Os(n);n.Ia.delete(e),r.O_()&&R_(n,e),n.Ia.size===0&&(r.O_()?r.L_():Fr(n)&&n.Va.set("Unknown"))}function nd(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Os(t).Z_(e)}function R_(t,e){t.da.$e(e),Os(t).X_(e)}function rd(t){t.da=new h2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Os(t).start(),t.Va.ua()}function sd(t){return Fr(t)&&!Os(t).x_()&&t.Ia.size>0}function Fr(t){return te(t).Ea.size===0}function k_(t){t.da=void 0}async function wR(t){t.Va.set("Online")}async function TR(t){t.Ia.forEach(((e,n)=>{nd(t,e)}))}async function IR(t,e){k_(t),sd(t)?(t.Va.ha(e),rd(t)):t.Va.set("Unknown")}async function vR(t,e,n){if(t.Va.set("Online"),e instanceof d_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))})(t,e)}catch(r){H(Dr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fa(t,r)}else if(e instanceof jo?t.da.Xe(e):e instanceof u_?t.da.st(e):t.da.tt(e),!n.isEqual(ee.min()))try{const r=await v_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(He.EMPTY_BYTE_STRING,h.snapshotVersion)),R_(i,c);const f=new Vn(h.target,c,u,h.sequenceNumber);nd(i,f)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){H(Dr,"Failed to raise snapshot:",r),await fa(t,r)}}async function fa(t,e,n){if(!Ls(e))throw e;t.Ea.add(1),await Zi(t),t.Va.set("Offline"),n||(n=()=>v_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{H(Dr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Wa(t)}))}function S_(t,e){return e().catch((n=>fa(t,n,e)))}async function Ja(t){const e=te(t),n=Hn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ju;for(;ER(e);)try{const s=await sR(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,AR(e,s)}catch(s){await fa(e,s)}x_(e)&&P_(e)}function ER(t){return Fr(t)&&t.Ta.length<10}function AR(t,e){t.Ta.push(e);const n=Hn(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function x_(t){return Fr(t)&&!Hn(t).x_()&&t.Ta.length>0}function P_(t){Hn(t).start()}async function CR(t){Hn(t).ra()}async function RR(t){const e=Hn(t);for(const n of t.Ta)e.ea(n.mutations)}async function kR(t,e,n){const r=t.Ta.shift(),s=Ju.from(r,e,n);await S_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ja(t)}async function SR(t,e){e&&Hn(t).Y_&&await(async function(r,s){if((function(o){return c2(o)&&o!==D.ABORTED})(s.code)){const i=r.Ta.shift();Hn(r).B_(),await S_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ja(r)}})(t,e),x_(t)&&P_(t)}async function mp(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H(Dr,"RemoteStore received new credentials");const r=Fr(n);n.Ea.add(3),await Zi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Wa(n)}async function xR(t,e){const n=te(t);e?(n.Ea.delete(2),await Wa(n)):e||(n.Ea.add(2),await Zi(n),n.Va.set("Unknown"))}function Os(t){return t.ma||(t.ma=(function(n,r,s){const i=te(n);return i.sa(),new fR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:wR.bind(null,t),Yo:TR.bind(null,t),t_:IR.bind(null,t),J_:vR.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),sd(t)?rd(t):t.Va.set("Unknown")):(await t.ma.stop(),k_(t))}))),t.ma}function Hn(t){return t.fa||(t.fa=(function(n,r,s){const i=te(n);return i.sa(),new pR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:CR.bind(null,t),t_:SR.bind(null,t),ta:RR.bind(null,t),na:kR.bind(null,t)}),t.Ra.push((async e=>{e?(t.fa.B_(),await Ja(t)):(await t.fa.stop(),t.Ta.length>0&&(H(Dr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new id(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function od(t,e){if(on("AsyncQueue",`${e}: ${t}`),Ls(t))return new B(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{static emptySet(e){return new gs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=pi(),this.sortedSet=new Re(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.ga=new Re(J.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class As{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new As(e,n,gs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$a(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class VR{constructor(){this.queries=yp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=te(n),i=s.queries;s.queries=yp(),i.forEach(((o,l)=>{for(const c of l.ba)c.onError(r)}))})(this,new B(D.ABORTED,"Firestore shutting down"))}}function yp(){return new Or((t=>Yy(t)),$a)}async function ad(t,e){const n=te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new PR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=od(o,`Initialization of query '${as(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&cd(n)}async function ld(t,e){const n=te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NR(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&cd(n)}function DR(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function cd(t){t.Ca.forEach((e=>{e.next()}))}var Qc,_p;(_p=Qc||(Qc={})).Ma="default",_p.Cache="cache";class ud{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Qc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(e){this.key=e}}class N_{constructor(e){this.key=e}}class MR{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ae(),this.mutatedKeys=ae(),this.eu=Xy(e),this.tu=new gs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new gp,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((h,f)=>{const m=s.get(h),v=Ba(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),R=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let P=!1;m&&v?m.data.isEqual(v.data)?T!==R&&(r.track({type:3,doc:v}),P=!0):this.su(m,v)||(r.track({type:2,doc:v}),P=!0,(c&&this.eu(v,c)>0||u&&this.eu(v,u)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),P=!0):m&&!v&&(r.track({type:1,doc:m}),P=!0,(c||u)&&(l=!0)),P&&(v?(o=o.add(v),i=R?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,f)=>(function(v,T){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:P})}};return R(v)-R(T)})(h.type,f.type)||this.eu(h.doc,f.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new As(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gp,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ae(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const n=[];return e.forEach((r=>{this.Ya.has(r)||n.push(new N_(r))})),this.Ya.forEach((r=>{e.has(r)||n.push(new V_(r))})),n}cu(e){this.Za=e.ks,this.Ya=ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return As.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const dd="SyncEngine";class LR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OR{constructor(e){this.key=e,this.hu=!1}}class FR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Or((l=>Yy(l)),$a),this.Iu=new Map,this.Eu=new Set,this.Ru=new Re(J.comparator),this.Au=new Map,this.Vu=new Yu,this.du={},this.mu=new Map,this.fu=Es.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function UR(t,e,n=!0){const r=U_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await D_(r,e,n,!0),s}async function $R(t,e){const n=U_(t);await D_(n,e,!0,!1)}async function D_(t,e,n,r){const s=await iR(t.localStore,Lt(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await BR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&C_(t.remoteStore,s),l}async function BR(t,e,n,r,s){t.pu=(f,m,v)=>(async function(R,P,S,k){let L=P.view.ru(S);L.Ss&&(L=await up(R.localStore,P.query,!1).then((({documents:b})=>P.view.ru(b,L))));const G=k&&k.targetChanges.get(P.targetId),N=k&&k.targetMismatches.get(P.targetId)!=null,F=P.view.applyChanges(L,R.isPrimaryClient,G,N);return wp(R,P.targetId,F.au),F.snapshot})(t,f,m,v);const i=await up(t.localStore,e,!0),o=new MR(e,i.ks),l=o.ru(i.documents),c=Xi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);wp(t,n,u.au);const h=new LR(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function jR(t,e,n){const r=te(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!$a(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&td(r.remoteStore,s.targetId),Yc(r,s.targetId)})).catch(Ms)):(Yc(r,s.targetId),await Jc(r.localStore,s.targetId,!0))}async function zR(t,e){const n=te(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),td(n.remoteStore,r.targetId))}async function HR(t,e,n){const r=YR(t);try{const s=await(function(o,l){const c=te(o),u=Ie.now(),h=l.reduce(((v,T)=>v.add(T.key)),ae());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(v=>{let T=an(),R=ae();return c.xs.getEntries(v,h).next((P=>{T=P,T.forEach(((S,k)=>{k.isValidDocument()||(R=R.add(S))}))})).next((()=>c.localDocuments.getOverlayedDocuments(v,T))).next((P=>{f=P;const S=[];for(const k of l){const L=s2(k,f.get(k.key).overlayedDocument);L!=null&&S.push(new Kn(k.key,L,zy(L.value.mapValue),at.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,S,l)})).next((P=>{m=P;const S=P.applyToLocalDocumentSet(f,R);return c.documentOverlayCache.saveOverlays(v,P.batchId,S)}))})).then((()=>({batchId:m.batchId,changes:e_(f)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new Re(oe)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u})(r,s.batchId,n),await eo(r,s.changes),await Ja(r.remoteStore)}catch(s){const i=od(s,"Failed to persist write");n.reject(i)}}async function M_(t,e){const n=te(t);try{const r=await nR(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?fe(o.hu,14607):s.removedDocuments.size>0&&(fe(o.hu,42227),o.hu=!1))})),await eo(n,r,e)}catch(r){await Ms(r)}}function bp(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=te(o);c.onlineState=l;let u=!1;c.queries.forEach(((h,f)=>{for(const m of f.ba)m.va(l)&&(u=!0)})),u&&cd(c)})(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qR(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Re(J.comparator);o=o.insert(i,Xe.newNoDocument(i,ee.min()));const l=ae().add(i),c=new qa(ee.min(),new Map,new Re(oe),o,l);await M_(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),hd(r)}else await Jc(r.localStore,e,!1).then((()=>Yc(r,e,n))).catch(Ms)}async function GR(t,e){const n=te(t),r=e.batch.batchId;try{const s=await tR(n.localStore,e);O_(n,r,null),L_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await eo(n,s)}catch(s){await Ms(s)}}async function WR(t,e,n){const r=te(t);try{const s=await(function(o,l){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next((f=>(fe(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>c.localDocuments.getDocuments(u,h)))}))})(r.localStore,e);O_(r,e,n),L_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await eo(r,s)}catch(s){await Ms(s)}}function L_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function O_(t,e,n){const r=te(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Yc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((r=>{t.Vu.containsKey(r)||F_(t,r)}))}function F_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(td(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),hd(t))}function wp(t,e,n){for(const r of n)r instanceof V_?(t.Vu.addReference(r.key,e),JR(t,r)):r instanceof N_?(H(dd,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||F_(t,r.key)):Q(19791,{wu:r})}function JR(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(H(dd,"New document in limbo: "+n),t.Eu.add(r),hd(t))}function hd(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new J(be.fromString(e)),r=t.fu.next();t.Au.set(r,new OR(n)),t.Ru=t.Ru.insert(n,r),C_(t.remoteStore,new Vn(Lt(Ua(n.path)),r,"TargetPurposeLimboResolution",La.ce))}}async function eo(t,e,n){const r=te(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Zu.Es(c.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.J_(s),await(async function(c,u){const h=te(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>M.forEach(u,(m=>M.forEach(m.Ts,(v=>h.persistence.referenceDelegate.addReference(f,m.targetId,v))).next((()=>M.forEach(m.Is,(v=>h.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))))))}catch(f){if(!Ls(f))throw f;H(ed,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const v=h.vs.get(m),T=v.snapshotVersion,R=v.withLastLimboFreeSnapshotVersion(T);h.vs=h.vs.insert(m,R)}}})(r.localStore,i))}async function KR(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H(dd,"User change. New user:",e.toKey());const r=await I_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new B(D.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await eo(n,r.Ns)}}function QR(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return ae().add(r.key);{let s=ae();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function U_(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=M_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qR.bind(null,e),e.Pu.J_=NR.bind(null,e.eventManager),e.Pu.yu=DR.bind(null,e.eventManager),e}function YR(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WR.bind(null,e),e}class pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ga(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return eR(this.persistence,new Y2,e.initialUser,this.serializer)}Cu(e){return new T_(Xu.Vi,this.serializer)}Du(e){return new aR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pa.provider={build:()=>new pa};class XR extends pa{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){fe(this.persistence.referenceDelegate instanceof ha,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new L2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new T_((r=>ha.Vi(r,n)),this.serializer)}}class Xc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KR.bind(null,this.syncEngine),await xR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new VR})()}createDatastore(e){const n=Ga(e.databaseInfo.databaseId),r=hR(e.databaseInfo);return yR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new bR(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>bp(this.syncEngine,n,0)),(function(){return fp.v()?new fp:new lR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,h){const f=new FR(s,i,o,l,c,u);return h&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=te(s);H(Dr,"RemoteStore shutting down."),i.Ea.add(5),await Zi(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Xc.provider={build:()=>new Xc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="FirestoreClient";class ZR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Ye.UNAUTHENTICATED,this.clientId=Bu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{H(qn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(H(qn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=od(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Wl(t,e){t.asyncQueue.verifyOperationInProgress(),H(qn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await I_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Tp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ek(t);H(qn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>mp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>mp(e.remoteStore,s))),t._onlineComponents=e}async function ek(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(qn,"Using user provided OfflineComponentProvider");try{await Wl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ws("Error using user provided cache. Falling back to memory cache: "+n),await Wl(t,new pa)}}else H(qn,"Using default OfflineComponentProvider"),await Wl(t,new XR(void 0));return t._offlineComponents}async function $_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(qn,"Using user provided OnlineComponentProvider"),await Tp(t,t._uninitializedComponentsProvider._online)):(H(qn,"Using default OnlineComponentProvider"),await Tp(t,new Xc))),t._onlineComponents}function tk(t){return $_(t).then((e=>e.syncEngine))}async function ma(t){const e=await $_(t),n=e.eventManager;return n.onListen=UR.bind(null,e.syncEngine),n.onUnlisten=jR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$R.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zR.bind(null,e.syncEngine),n}function nk(t,e,n,r){const s=new fd(r),i=new ud(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>ad(await ma(t),i))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>ld(await ma(t),i)))}}function rk(t,e,n={}){const r=new tn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const h=new fd({next:m=>{h.Nu(),o.enqueueAndForget((()=>ld(i,f)));const v=m.docs.has(l);!v&&m.fromCache?u.reject(new B(D.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?u.reject(new B(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new ud(Ua(l.path),h,{includeMetadataChanges:!0,Ka:!0});return ad(i,f)})(await ma(t),t.asyncQueue,e,n,r))),r.promise}function sk(t,e,n={}){const r=new tn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const h=new fd({next:m=>{h.Nu(),o.enqueueAndForget((()=>ld(i,f))),m.fromCache&&c.source==="server"?u.reject(new B(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new ud(l,h,{includeMetadataChanges:!0,Ka:!0});return ad(i,f)})(await ma(t),t.asyncQueue,e,n,r))),r.promise}function ik(t,e){const n=new tn;return t.asyncQueue.enqueueAndForget((async()=>HR(await tk(t),e,n))),n.promise}/**
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
 */function B_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok="ComponentProvider",Ip=new Map;function ak(t,e,n,r,s){return new CC(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,B_(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="firestore.googleapis.com",vp=!0;class Ep{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=j_,this.ssl=vp}else this.host=e.host,this.ssl=e.ssl??vp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=w_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<D2)throw new B(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(D.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ka{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ep({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ep(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new iC;switch(r.type){case"firstParty":return new cC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Ip.get(n);r&&(H(ok,"Removing Datastore"),Ip.delete(n),r.terminate())})(this),Promise.resolve()}}function lk(t,e,n,r={}){var u;t=dt(t,Ka);const s=xs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Lg(`https://${l}`),Og("Firestore",!0)),i.host!==j_&&i.host!==l&&ws("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!xr(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Ye.MOCK_USER;else{h=Sv(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new B(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ye(m)}t._authCredentials=new oC(new Py(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Un(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ki(n,xe._jsonSchema))return new xe(e,r||null,new J(be.fromString(n.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:Ne("string",xe._jsonSchemaVersion),referencePath:Ne("string")};class Un extends Ur{constructor(e,n,r){super(e,n,Ua(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new J(e))}withConverter(e){return new Un(this.firestore,e,this._path)}}function $r(t,e,...n){if(t=De(t),Vy("collection","path",e),t instanceof Ka){const r=be.fromString(e,...n);return Of(r),new Un(t,null,r)}{if(!(t instanceof xe||t instanceof Un))throw new B(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Of(r),new Un(t.firestore,null,r)}}function Ht(t,e,...n){if(t=De(t),arguments.length===1&&(e=Bu.newId()),Vy("doc","path",e),t instanceof Ka){const r=be.fromString(e,...n);return Lf(r),new xe(t,null,new J(r))}{if(!(t instanceof xe||t instanceof Un))throw new B(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Lf(r),new xe(t.firestore,t instanceof Un?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="AsyncQueue";class Cp{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new E_(this,"async_queue_retry"),this._c=()=>{const r=Gl();r&&H(Ap,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Gl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new tn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ls(e))throw e;H(Ap,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,on("INTERNAL UNHANDLED ERROR: ",Rp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=id.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:Rp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Rp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ln extends Ka{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Cp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Cp(e),this._firestoreClient=void 0,await e}}}function ck(t,e){const n=typeof t=="object"?t:Bg(),r=typeof t=="string"?t:oa,s=ku(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rv("firestore");i&&lk(s,...i)}return s}function to(t){if(t._terminated)throw new B(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||uk(t),t._firestoreClient}function uk(t){var r,s,i,o;const e=t._freezeSettings(),n=ak(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ZR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gt(He.fromBase64String(e))}catch(n){throw new B(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gt(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ki(e,gt._jsonSchema))return gt.fromBase64String(e.bytes)}}gt._jsonSchemaVersion="firestore/bytes/1.0",gt._jsonSchema={type:Ne("string",gt._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ft._jsonSchemaVersion}}static fromJSON(e){if(Ki(e,Ft._jsonSchema))return new Ft(e.latitude,e.longitude)}}Ft._jsonSchemaVersion="firestore/geoPoint/1.0",Ft._jsonSchema={type:Ne("string",Ft._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
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
 */class At{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:At._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ki(e,At._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new At(e.vectorValues);throw new B(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}At._jsonSchemaVersion="firestore/vectorValue/1.0",At._jsonSchema={type:Ne("string",At._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk=/^__.*__$/;class hk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Kn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yi(e,this.data,n,this.fieldTransforms)}}class z_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Kn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function H_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class md{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new md({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return ga(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(H_(this.dataSource)&&dk.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class fk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ga(e)}createContext(e,n,r,s=!1){return new md({dataSource:e,methodName:n,targetDoc:r,path:je.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ya(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new fk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gd(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);_d("Data must be an object, but it was:",o,r);const l=q_(r,o);let c,u;if(i.merge)c=new ut(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=Cs(e,f,n);if(!o.contains(m))throw new B(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);J_(h,m)||h.push(m)}c=new ut(h),u=o.fieldTransforms.filter((f=>c.covers(f.field)))}else c=null,u=o.fieldTransforms;return new hk(new ot(l),c,u)}class Xa extends Qa{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xa}}class yd extends Qa{_toFieldTransform(e){return new e2(e.path,new Li)}isEqual(e){return e instanceof yd}}function pk(t,e,n,r){const s=t.createContext(1,e,n);_d("Data must be an object, but it was:",s,r);const i=[],o=ot.empty();Jn(r,((c,u)=>{const h=W_(e,c,n);u=De(u);const f=s.childContextForFieldPath(h);if(u instanceof Xa)i.push(h);else{const m=no(u,f);m!=null&&(i.push(h),o.set(h,m))}}));const l=new ut(i);return new z_(o,l,s.fieldTransforms)}function mk(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[Cs(e,r,n)],c=[s];if(i.length%2!=0)throw new B(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Cs(e,i[m])),c.push(i[m+1]);const u=[],h=ot.empty();for(let m=l.length-1;m>=0;--m)if(!J_(u,l[m])){const v=l[m];let T=c[m];T=De(T);const R=o.childContextForFieldPath(v);if(T instanceof Xa)u.push(v);else{const P=no(T,R);P!=null&&(u.push(v),h.set(v,P))}}const f=new ut(u);return new z_(h,f,o.fieldTransforms)}function gk(t,e,n,r=!1){return no(n,t.createContext(r?4:3,e))}function no(t,e){if(G_(t=De(t)))return _d("Unsupported field value:",e,t),q_(t,e);if(t instanceof Qa)return(function(r,s){if(!H_(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=no(l,s.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return YC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ie.fromDate(r);return{timestampValue:da(s.serializer,i)}}if(r instanceof Ie){const i=new Ie(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:da(s.serializer,i)}}if(r instanceof Ft)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof gt)return{bytesValue:h_(s.serializer,r._byteString)};if(r instanceof xe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof At)return(function(o,l){const c=o instanceof At?o.toArray():o;return{mapValue:{fields:{[By]:{stringValue:jy},[aa]:{arrayValue:{values:c.map((h=>{if(typeof h!="number")throw l.createError("VectorValues must only contain numeric values.");return Wu(l.serializer,h)}))}}}}}})(r,s);if(b_(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ma(r)}`)})(t,e)}function q_(t,e){const n={};return My(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(t,((r,s)=>{const i=no(s,e.childContextForField(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function G_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof Ft||t instanceof gt||t instanceof xe||t instanceof Qa||t instanceof At||b_(t))}function _d(t,e,n){if(!G_(n)||!Ny(n)){const r=Ma(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Cs(t,e,n){if((e=De(e))instanceof pd)return e._internalPath;if(typeof e=="string")return W_(t,e);throw ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const yk=new RegExp("[~\\*/\\[\\]]");function W_(t,e,n){if(e.search(yk)>=0)throw ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pd(...e.split("."))._internalPath}catch{throw ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ga(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new B(D.INVALID_ARGUMENT,l+t+c)}function J_(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{convertValue(e,n="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jn(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[aa].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>Se(o.doubleValue)));return new At(n)}convertGeoPoint(e){return new Ft(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ni(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);fe(__(r),9688,{name:e});const s=new Di(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class bd extends _k{constructor(e){super(),this.firestore=e}convertBytes(e){return new gt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function Ee(){return new yd("serverTimestamp")}const kp="@firebase/firestore",Sp="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Cs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bk extends K_{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wd{}class wk extends wd{}function Za(t,e,...n){let r=[];e instanceof wd&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof Td)).length,l=i.filter((c=>c instanceof el)).length;if(o>1||o>0&&l>0)throw new B(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class el extends wk{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new el(e,n,r)}_apply(e){const n=this._parse(e);return Y_(e._query,n),new Ur(e.firestore,e.converter,jc(e._query,n))}_parse(e){const n=Ya(e.firestore);return(function(i,o,l,c,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Vp(f,h);const T=[];for(const R of f)T.push(Pp(c,i,R));m={arrayValue:{values:T}}}else m=Pp(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Vp(f,h),m=gk(l,o,f,h==="in"||h==="not-in");return Ve.create(u,h,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function tl(t,e,n){const r=e,s=Cs("where",t);return el._create(s,r,n)}class Td extends wd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Td(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:kt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)Y_(o,c),o=jc(o,c)})(e._query,n),new Ur(e.firestore,e.converter,jc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Pp(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new B(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qy(e)&&n.indexOf("/")!==-1)throw new B(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!J.isDocumentKey(r))throw new B(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return qf(t,new J(r))}if(n instanceof xe)return qf(t,n._key);throw new B(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ma(n)}.`)}function Vp(t,e){if(!Array.isArray(t)||t.length===0)throw new B(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Y_(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new B(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Id(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class gi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cr extends K_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Cs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Cr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Cr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Cr._jsonSchema={type:Ne("string",Cr._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class zo extends Cr{data(e={}){return super.data(e)}}class Rr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new gi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new zo(this._firestore,this._userDataWriter,r.key,r,new gi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new zo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new gi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:Tk(l.type),doc:c,oldIndex:u,newIndex:h}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Rr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Tk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */Rr._jsonSchemaVersion="firestore/querySnapshot/1.0",Rr._jsonSchema={type:Ne("string",Rr._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ya(e)}set(e,n,r){this._verifyNotCommitted();const s=Jl(e,this._firestore),i=Id(s.converter,n,r),o=gd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,at.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Jl(e,this._firestore);let o;return o=typeof(n=De(n))=="string"||n instanceof pd?mk(this._dataReader,"WriteBatch.update",i._key,n,r,s):pk(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,at.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Jl(e,this._firestore);return this._mutations=this._mutations.concat(new Ha(n._key,at.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Jl(t,e){if((t=De(t)).firestore!==e)throw new B(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){t=dt(t,xe);const e=dt(t.firestore,ln),n=to(e);return rk(n,t._key).then((r=>X_(e,t,r)))}function Br(t){t=dt(t,Ur);const e=dt(t.firestore,ln),n=to(e),r=new bd(e);return Q_(t._query),sk(n,t._query).then((s=>new Rr(e,r,t,s)))}function bt(t,e,n){t=dt(t,xe);const r=dt(t.firestore,ln),s=Id(t.converter,e,n),i=Ya(r);return rl(r,[gd(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,at.none())])}function jr(t){return rl(dt(t.firestore,ln),[new Ha(t._key,at.none())])}function nl(t,e){const n=dt(t.firestore,ln),r=Ht(t),s=Id(t.converter,e),i=Ya(t.firestore);return rl(n,[gd(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,at.exists(!1))]).then((()=>r))}function qt(t,...e){var u,h,f;t=De(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||xp(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(xp(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,o,l;if(t instanceof xe)o=dt(t.firestore,ln),l=Ua(t._key.path),i={next:m=>{e[r]&&e[r](X_(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=dt(t,Ur);o=dt(m.firestore,ln),l=m._query;const v=new bd(o);i={next:T=>{e[r]&&e[r](new Rr(o,v,m,T))},error:e[r+1],complete:e[r+2]},Q_(t._query)}const c=to(o);return nk(c,l,s,i)}function rl(t,e){const n=to(t);return ik(n,e)}function X_(t,e,n){const r=n.docs.get(e._key),s=new bd(t);return new Cr(t,s,e._key,r,new gi(n.hasPendingWrites,n.fromCache),e.converter)}function vk(t){return t=dt(t,ln),to(t),new Ik(t,(e=>rl(t,e)))}(function(e,n=!0){sC(Ps),_s(new Pr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new ln(new aC(r.getProvider("auth-internal")),new uC(o,r.getProvider("app-check-internal")),RC(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Ln(kp,Sp,e),Ln(kp,Sp,"esm2020")})();const Ek={apiKey:"AIzaSyCvK7ounDvKzgKGHK30uCFqDUbqZkoOGJc",authDomain:"cardy-hardy.firebaseapp.com",projectId:"cardy-hardy",storageBucket:"cardy-hardy.firebasestorage.app",messagingSenderId:"756160918063",appId:"1:756160918063:web:830975f45634054dfe8cda",measurementId:"G-MXM77YZD95"};let Kl=null,Ql=null,Yl=null,Xl=null;const Z_=()=>(Kl||(Kl=$g(Ek)),Kl),Rs=()=>(Ql||(Ql=nC(Z_())),Ql),Np=()=>(Yl||(Yl=new Xt),Yl),qe=()=>(Xl||(Xl=ck(Z_())),Xl),e0=()=>Ht(qe(),"admins","list"),t0=()=>Ht(qe(),"config","site"),vd=t=>Ht(qe(),"users",t),n0=()=>$r(qe(),"users"),r0=()=>$r(qe(),"games"),ya=t=>Ht(qe(),"games",t),Ed=()=>$r(qe(),"manufacturers"),s0=t=>Ht(qe(),"manufacturers",t),Ad=()=>$r(qe(),"gameTiers"),Cd=t=>Ht(qe(),"gameTiers",t),Rd=()=>$r(qe(),"gameRatings"),Zc=t=>Ht(qe(),"gameRatings",t),sl=()=>$r(qe(),"currentGames"),i0=t=>Ht(qe(),"currentGames",t),il=()=>$r(qe(),"pastOwnedGames"),o0=t=>Ht(qe(),"pastOwnedGames",t),eu=(t="")=>t.trim().toLowerCase(),Ak=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),Ck=async()=>{const t=[{key:"indexedDB",value:_y},{key:"local",value:hy},{key:"session",value:Lu}];let e=null;for(const n of t)try{return await j1(Rs(),n.value),{persistence:n.key,error:null}}catch(r){e=r,console.warn(`Failed to set ${n.key} persistence`,r)}return{persistence:"none",error:e}},Rk=async()=>{let t=null,e=null;try{e=await _A(Rs())}catch(r){t=r,console.error("Firebase redirect sign-in failed",r)}const n=await Ck();return{redirectError:t,redirectResult:e,persistence:n}},kd=async()=>{try{return await uA(Rs(),Np())}catch(t){if(!Ak())throw t;return console.warn("Popup sign-in failed on iOS, falling back to redirect",t),gA(Rs(),Np())}},ft=()=>(console.log("start signout"),G1(Rs()).then(()=>{console.log("signout completed")})),kk=t=>q1(Rs(),t),a0=async()=>{const t=await Fs(e0());if(!t.exists())return[];const e=t.data();return Array.isArray(e.items)?e.items:[]},Sk=async(t="")=>(await a0()).map(eu).includes(eu(t)),xk=async t=>bt(e0(),{items:t.map(eu).filter(Boolean),updatedAt:Ee()},{merge:!0}),ol=async()=>{const t=await Fs(t0());if(!t.exists())return null;const e=t.data();return typeof e.nextMeetupDate=="number"?e.nextMeetupDate:null},Pk=async t=>bt(t0(),{nextMeetupDate:t,updatedAt:Ee()},{merge:!0}),Vk=async t=>{const e=vd(t.id),n=await Fs(e),r={email:t.email,firstName:t.firstName,lastName:t.lastName,...t.userType?{userType:t.userType}:{},updatedAt:Ee()};return n.exists()?bt(e,r,{merge:!0}):bt(e,{...r,createdAt:Ee()})},Nk=async t=>{const e=t==null?void 0:t.uid;if(!e)return!1;const n=vd(e);if((await Fs(n)).exists())return!0;const s=(t.email||"").trim().toLowerCase();if(s&&!(await Br(Za(n0(),tl("email","==",s)))).empty)return!0;const i=t.displayName||"",[o="",...l]=i.trim().split(/\s+/),c=l.join(" ");return await bt(n,{email:s,firstName:o,lastName:c,userType:"unverified",createdAt:Ee(),updatedAt:Ee()}),!0},Dk=()=>{const t=new wt([]),e=qt(n0(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));r.sort((s,i)=>{var c,u,h,f,m,v,T,R,P,S;const o=(c=s==null?void 0:s.createdAt)!=null&&c.seconds?s.createdAt.seconds*1e3:((m=(f=(h=(u=s==null?void 0:s.createdAt)==null?void 0:u.toDate)==null?void 0:h.call(u))==null?void 0:f.getTime)==null?void 0:m.call(f))??0;return((v=i==null?void 0:i.createdAt)!=null&&v.seconds?i.createdAt.seconds*1e3:((S=(P=(R=(T=i==null?void 0:i.createdAt)==null?void 0:T.toDate)==null?void 0:R.call(T))==null?void 0:P.getTime)==null?void 0:S.call(P))??0)-o}),t.next(r)},n=>{console.error("Failed to listen to users",n)});return t.unsubscribe=e,t},Mk=async t=>t?(await jr(vd(t)),!0):!1,Us=()=>{const t=new wt([]),e=qt(r0(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(f0(r))},n=>{console.error("Failed to listen to games",n)});return t.unsubscribe=e,t},l0=()=>{const t=new wt([]),e=qt(Ed(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(p0(r))},n=>{console.error("Failed to listen to manufacturers",n)});return t.unsubscribe=e,t},Lk=async()=>{const e=(await Br(Ed())).docs.map(n=>({id:n.id,...n.data()}));return p0(e)},Ok=async t=>{const e=sS(t);return t.id?bt(s0(t.id),{...e,updatedAt:Ee()},{merge:!0}):nl(Ed(),{...e,createdAt:Ee(),updatedAt:Ee()})},Dp=async t=>t?(await jr(s0(t)),!0):!1,ro=()=>{const t=new wt,e=qt(Ad(),n=>t.next(h0(n.docs.map(r=>({id:r.id,...r.data()})))),n=>console.error("Failed to listen to game tiers",n));return t.unsubscribe=e,t},Fk=async()=>{const t=await Br(Ad());return h0(t.docs.map(e=>({id:e.id,...e.data()})))},Uk=async t=>{const e={shortName:(t.shortName||"").trim().toUpperCase(),longName:(t.longName||"").trim(),order:typeof t.order=="number"?t.order:0};return t.id?bt(Cd(t.id),{...e,updatedAt:Ee()},{merge:!0}):nl(Ad(),{...e,createdAt:Ee(),updatedAt:Ee()})},$k=async t=>{const e=vk(qe());return t.forEach((n,r)=>{e.update(Cd(n),{order:r,updatedAt:Ee()})}),await e.commit(),!0},Mp=async t=>t?(await jr(Cd(t)),!0):!1,Sd=async()=>{const e=(await Br(r0())).docs.map(n=>({id:n.id,...n.data()}));return f0(e)},c0=async t=>{const e=rS(t);if(t.id)return bt(ya(t.id),{...e,updatedAt:Ee()},{merge:!0});const n=await aS(e.title);return await bt(ya(n),{...e,createdAt:Ee(),updatedAt:Ee()}),{id:n}},Lp=async t=>t?(await jr(ya(t)),!0):!1,Bk=()=>{const t=new wt([]),e=qt(Rd(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Vd(r))},n=>{console.error("Failed to listen to game ratings",n)});return t.unsubscribe=e,t},jk=()=>{const t=new wt([]),e=qt(Za(Rd(),tl("isVisible","==",!0)),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Vd(r))},n=>{console.error("Failed to listen to visible game ratings",n)});return t.unsubscribe=e,t},zk=async()=>{const e=(await Br(Rd())).docs.map(n=>({id:n.id,...n.data()}));return Vd(e)},Hk=async t=>{const e=iS(t),n=t.id||t.gameId;if(!n)throw new Error("Game rating requires a gameId.");const r=await Fs(Zc(n));return bt(Zc(n),{...e,updatedAt:Ee(),...r.exists()?{}:{createdAt:Ee()}},{merge:!0})},qk=async t=>t?(await jr(Zc(t)),!0):!1,Gk=()=>{const t=new wt([]),e=qt(sl(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(xd(r))},n=>{console.error("Failed to listen to current games",n)});return t.unsubscribe=e,t},Wk=()=>{const t=new wt([]),e=qt(Za(sl(),tl("isVisible","==",!0)),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(xd(r))},n=>{console.error("Failed to listen to visible current games",n)});return t.unsubscribe=e,t},Jk=async()=>{const e=(await Br(sl())).docs.map(n=>({id:n.id,...n.data()}));return xd(e)},Kk=async t=>{const e=tS(t);return t.id?bt(i0(t.id),{...e,updatedAt:Ee()},{merge:!0}):nl(sl(),{...e,createdAt:Ee(),updatedAt:Ee()})},Qk=async t=>t?(await jr(i0(t)),!0):!1,Yk=()=>{const t=new wt([]),e=qt(il(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Pd(r))},n=>{console.error("Failed to listen to past owned games",n)});return t.unsubscribe=e,t},Xk=()=>{const t=new wt([]),e=qt(Za(il(),tl("isVisible","==",!0)),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Pd(r))},n=>{console.error("Failed to listen to visible past owned games",n)});return t.unsubscribe=e,t},u0=async()=>{const e=(await Br(il())).docs.map(n=>({id:n.id,...n.data()}));return Pd(e)},d0=async t=>{const e=nS(t);return t.id?bt(o0(t.id),{...e,updatedAt:Ee()},{merge:!0}):nl(il(),{...e,createdAt:Ee(),updatedAt:Ee()})},Zk=async t=>t?(await jr(o0(t)),!0):!1,eS=async(t,e=[])=>{const n=await u0(),r=new Set(n.flatMap(l=>Op(l))),s=lS(e);let i=0,o=0;for(const l of t){const c=(l.title||"").trim();if(!c){o+=1;continue}const u=Op(l);if(u.some(m=>r.has(m))){o+=1;continue}const f=await cS({title:c,manufacturer:l.manufacturer||"",yearReleased:l.yearReleased??null,imageUrl:l.imageUrl||"",notes:l.pinsideUrl?`Imported from ${l.pinsideUrl}`:""},s);await d0({gameId:f.id,title:"",imageUrl:"",manufacturer:"",yearReleased:null,dateAddedToCollection:l.dateAddedToCollection||"",dateRemovedFromCollection:l.dateRemovedFromCollection||"",notes:"",isVisible:!0,pinsideUrl:l.pinsideUrl||"",pinsideId:l.pinsideId||"",sourceTitle:c,source:"pinside"}),u.forEach(m=>r.add(m)),i+=1}return{added:i,skipped:o,total:t.length}},tS=t=>{const e={gameId:(t.gameId||"").trim(),tierId:(t.tierId||"").trim(),dateAddedToCollection:t.dateAddedToCollection,notes:(t.notes||"").trim(),isVisible:t.isVisible!==!1};return t.title&&(e.title=t.title.trim()),t.imageUrl&&(e.imageUrl=t.imageUrl.trim()),t.manufacturer&&(e.manufacturer=t.manufacturer.trim()),typeof t.yearReleased=="number"&&!Number.isNaN(t.yearReleased)&&(e.yearReleased=t.yearReleased),e},nS=t=>{const e={gameId:(t.gameId||"").trim(),tierId:(t.tierId||"").trim(),title:(t.title||"").trim(),dateAddedToCollection:(t.dateAddedToCollection||"").trim(),dateRemovedFromCollection:(t.dateRemovedFromCollection||"").trim(),notes:(t.notes||"").trim(),isVisible:t.isVisible!==!1,pinsideUrl:(t.pinsideUrl||"").trim(),pinsideId:(t.pinsideId||"").trim(),sourceTitle:(t.sourceTitle||"").trim(),source:(t.source||"").trim()};return t.imageUrl&&(e.imageUrl=t.imageUrl.trim()),t.manufacturer&&(e.manufacturer=t.manufacturer.trim()),typeof t.yearReleased=="number"&&!Number.isNaN(t.yearReleased)?e.yearReleased=t.yearReleased:e.yearReleased=null,e},rS=t=>{const e=Array.isArray(t.dataLinks)?t.dataLinks.map(r=>({title:((r==null?void 0:r.title)||"").trim(),url:((r==null?void 0:r.url)||"").trim()})).filter(r=>r.title||r.url):[],n={title:(t.title||"").trim(),manufacturerId:(t.manufacturerId||"").trim(),imageUrl:(t.imageUrl||"").trim(),manufacturer:(t.manufacturer||"").trim(),notes:(t.notes||"").trim(),dataLinks:e,tierIds:Array.isArray(t.tierIds)?[...new Set(t.tierIds.map(r=>String(r||"").trim()).filter(Boolean))]:[]};return typeof t.yearReleased=="number"&&!Number.isNaN(t.yearReleased)?n.yearReleased=t.yearReleased:n.yearReleased=null,n},sS=t=>({name:(t.name||"").trim(),logoUrl:(t.logoUrl||"").trim(),opinions:(t.opinions||"").trim()}),h0=t=>[...t].sort((e,n)=>{const r=typeof e.order=="number",s=typeof n.order=="number";return r&&s&&e.order!==n.order?e.order-n.order:r!==s?r?-1:1:String(e.shortName||"").localeCompare(String(n.shortName||""),void 0,{sensitivity:"base"})}),iS=t=>{const e=typeof t.rating=="number"&&!Number.isNaN(t.rating)?Math.max(0,Math.min(10,t.rating)):null,n=Array.isArray(t.videos)?t.videos.map(r=>({url:((r==null?void 0:r.url)||"").trim(),description:((r==null?void 0:r.description)||"").trim()})).filter(r=>r.url||r.description):[];return{gameId:(t.gameId||"").trim(),rating:e,review:(t.review||"").trim(),videos:n,isVisible:t.isVisible!==!1}},_a=t=>{if(!t)return 0;if(typeof t.toDate=="function")return t.toDate().getTime();if(typeof t=="number")return t;if(t.seconds)return t.seconds*1e3;const e=new Date(t).getTime();return Number.isNaN(e)?0:e},xd=t=>[...t].sort((e,n)=>_a(n.dateAddedToCollection)-_a(e.dateAddedToCollection)),Pd=t=>[...t].sort((e,n)=>_a(n.dateRemovedFromCollection||n.dateAddedToCollection)-_a(e.dateRemovedFromCollection||e.dateAddedToCollection)||String(e.title||"").localeCompare(String(n.title||""),void 0,{sensitivity:"base"})),f0=t=>[...t].sort((e,n)=>String(e.title||"").localeCompare(String(n.title||""),void 0,{sensitivity:"base"})),p0=t=>[...t].sort((e,n)=>String(e.name||"").localeCompare(String(n.name||""),void 0,{sensitivity:"base"})),Vd=t=>[...t].sort((e,n)=>Number(n.rating||0)-Number(e.rating||0)||String(e.gameId||"").localeCompare(String(n.gameId||""),void 0,{sensitivity:"base"})),Nd=t=>String(t||"").toLowerCase().replace(/\([^)]*\)/g,"").replace(/[^a-z0-9]+/g," ").trim(),oS=t=>String(t||"").trim().toLowerCase().replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"game",aS=async t=>{const e=oS(t);let n=e,r=2;for(;(await Fs(ya(n))).exists();)n=`${e}-${r}`,r+=1;return n},lS=t=>new Map(t.map(e=>[Nd(e.title),e]).filter(([e])=>e)),cS=async(t,e)=>{const n=Nd(t.title),r=e.get(n);if(r)return r;const i={id:(await c0({title:t.title,manufacturer:t.manufacturer||"",yearReleased:t.yearReleased??null,imageUrl:t.imageUrl||"",notes:t.notes||""})).id,title:t.title,manufacturer:t.manufacturer||"",yearReleased:t.yearReleased??null,imageUrl:t.imageUrl||"",notes:t.notes||""};return e.set(n,i),i},Op=t=>{const e=Nd(t.title||t.sourceTitle),n=!!(t.pinsideUrl||t.pinsideId),r=!!(t.dateAddedToCollection||t.dateRemovedFromCollection),s=[e,String(t.dateAddedToCollection||"").trim(),String(t.dateRemovedFromCollection||"").trim()].filter(Boolean).join("|");return[t.pinsideUrl?`url:${String(t.pinsideUrl).trim().toLowerCase()}`:"",t.pinsideId?`pinside:${String(t.pinsideId).trim().toLowerCase()}`:"",r&&s?`history:${s}`:"",!n&&!r&&e?`title:${e}`:""].filter(Boolean)},Dd=({onUser:t,toast:e})=>{if(typeof t!="function")throw new Error("startAuthFlow requires an onUser callback.");Rk().then(({redirectError:n,redirectResult:r,persistence:s})=>{var i,o;n&&((i=e==null?void 0:e.error)==null||i.call(e,"Sign-in failed after redirect. Try again.")),s!=null&&s.error&&((o=e==null?void 0:e.error)==null||o.call(e,"Safari blocked login storage. Check cookie settings.")),r!=null&&r.user&&t(r.user,"redirectResult")}).catch(n=>{var r;console.error("Failed to prepare auth",n),(r=e==null?void 0:e.error)==null||r.call(e,"Sign-in setup failed. Try again.")}),kk(n=>{t(n,"onAuthChanged")})},uS=async({user:t,mountSso:e,toast:n,onDenied:r,onPermissionsError:s}={})=>{var o,l;let i=!1;try{i=await Sk((t==null?void 0:t.email)||"")}catch(c){return console.error("Failed to load admin list",c),s==null||s(c),(o=n==null?void 0:n.error)==null||o.call(n,"Unable to verify access. Check Firestore rules."),e==null||e("denied",(t==null?void 0:t.email)||"","auth:permissions"),!1}return i?!0:(r==null||r(),(l=n==null?void 0:n.error)==null||l.call(n,`Signed in as ${(t==null?void 0:t.email)||"unknown"} but not authorized.`),e==null||e("denied",(t==null?void 0:t.email)||"","auth:denied"),!1)},Md=async({user:t,mountSso:e,toast:n,setCurrentUser:r,onSignedOut:s,onDenied:i,onAuthorized:o,reason:l=""}={})=>{if(!t)return r==null||r(null),s==null||s(),e==null||e("login","","auth:logged-out"),!1;try{await Nk(t)}catch(u){console.warn("Failed to ensure user profile",u)}return await uS({user:t,mountSso:e,toast:n,onDenied:i,onPermissionsError:i})?(r==null||r(t),o==null||o(t,l),!0):!1},al=O(({status:t,userEmail:e,adminEmail:n,onSignIn:r,onSignOut:s})=>(al.inputs(i=>{[{status:t,userEmail:e,adminEmail:n,onSignIn:r,onSignOut:s}]=i,r=K(r),s=K(s)}),[()=>t==="loading"?Ml.class`panel auth-panel`(se("Checking login...")):t==="denied"?Ml.class`panel auth-panel`(Qe("Access denied"),se.class`auth-warning`(()=>e||"This account"," is not authorized."),se("Please be patient as we review your account to become verified status."),_.class`auth-actions`(q.type`button`.class`add-button`.onClick(s)("Sign out"))):Ml.class`panel auth-panel`(Qe("Sign in"),se("Use Google to access admin tools."),_.class`auth-actions`(q.type`button`.class`add-button`.onClick(r)("Sign in with Google")))])),dS=O(()=>{let t=[];const e=ye(()=>{});O.promise=a0().then(o=>{t=Array.isArray(o)?o:[],e()}).catch(o=>{console.error("Failed to load admin list",o)});const n=(o,l)=>{t=t.map((c,u)=>u===o?l:c),e()},r=()=>{t=[...t,""],e()},s=o=>{t=t.filter((l,c)=>c!==o),e()},i=()=>xk(t).then(()=>{alert("saved")}).catch(o=>{console.error("Failed to save admin list",o)});return xa.style`border:0;padding:0;margin:0;`(_.style`display:flex;flex-direction:column;gap:0.6em;`(o=>(t.length?t:[""]).map((l,c)=>_.style`display:flex;gap:0.6em;align-items:center;`(ce.type`text`.value(u=>l).onInput(u=>n(c,u.target.value)).style`width:100%`,q.onClick(()=>s(c))("🗑️ remove")))),_.style`display:flex;gap:0.6em;align-items:center;margin-top:0.8em;flex-wrap:wrap;`(q.onClick(r)("add"),q.onClick(i)("save to firestore")))});function m0({startDateTime:t,message:e,subject:n}){t=new Date(t);const{year:r,month:s}=Ld(t),i=("0"+(t.getDate()+1)).slice(-2),o=ba(t),l=new Date(new Date(t).setHours(t.getHours()+2)),c=ba(l),u=encodeURIComponent(e),h=encodeURIComponent(n);return`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${r}${s}${i}${o}%2F${r}${s}${i}${c}&details=${u}&location=&text=${h}`}function g0({startDateTime:t,message:e,subject:n}){t=new Date(t);const{year:r,month:s,day:i,hours:o}=Ld(t),c=new Date(new Date(t).setHours(t.getHours()+2)).getHours(),u=encodeURIComponent(e.replace(/\n/g,"<br>")),h=encodeURIComponent(n);return`https://outlook.live.com/calendar/0/action/compose?allday=false&body=${u}&enddt=${r}-${s}-${i}T${c}%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${r}-${s}-${i}T${o}%3A00%3A00&subject=${h}`}function y0({startDateTime:t,message:e,subject:n}){t=new Date(t);const{year:r,month:s}=Ld(t),i=("0"+(t.getDate()+1)).slice(-2),o=ba(t),l=new Date(new Date(t).setHours(t.getHours()+2)),c=ba(l);return`BEGIN:VCALENDAR
VERSION:2.0
PRODID:${n}
BEGIN:VEVENT
DTSTART:${r}${s}${i}${o}
DTEND:${r}${s}${i}${c}
DTSTAMP:${r}${s}14T181547Z
SUMMARY:${n}
DESCRIPTION:${e.replace(/\n/g,"\\n")}
UID:79992
END:VEVENT
END:VCALENDAR`}function Ld(t){t=new Date(t);const e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),r=("0"+t.getDate()).slice(-2),s=t.getHours();return{year:e,month:n,day:r,hours:s}}function ba(t){const e=String(t.getUTCHours()).padStart(2,"0"),n=String(t.getUTCMinutes()).padStart(2,"0"),r=String(t.getUTCSeconds()).padStart(2,"0");return`T${e}${n}${r}Z`}const _0=O(t=>(_0.inputs(e=>[t]=e),_.style`text-align:center;`(e=>{const n=new Date(t);return _(Y("🗓️ ",n.toLocaleString("default",{weekday:"long"}),", ",n.toLocaleString("default",{month:"long"})," ",n.getDate(),b0(n)))},e=>Sg({date:t}),e=>hS(new Date(t)))));function hS(t){return _.style`font-size:.65em;opacity:.7`(fS(t))}function Zl(t,e){const n={hour:"numeric",minute:"numeric",hour12:!0,timeZone:e,timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",n).format(t)}function fS(t){const e=Zl(t,"America/New_York"),n=Zl(t,"America/Chicago"),r=Zl(t,"America/Los_Angeles");return`${e} / ${n} / ${r}`}const Ke={subject:"Cary Hardy Patreon meetup",message:`
    Link to virtual meeting is posted to Patreon on a day of meeting
  
    https://www.patreon.com/caryhardy
  `.trim().replace(/    /g,"")},ll=O(({date:t,showLearnMore:e=!0})=>{t=new Date(t),ll.inputs(u=>{[{date:t,showLearnMore:e}]=u});let n=!1;const r=m0({startDateTime:t,message:Ke.message,subject:Ke.subject}),s=g0({startDateTime:t,message:Ke.message,subject:Ke.subject}),i=[{type:"google",url:r},{type:"outlook",url:s}],o=y0({startDateTime:t,message:Ke.message,subject:Ke.subject});var l=new Blob([o],{type:"text/calendar"});const c=window.URL.createObjectURL(l);return Ce(_.style`padding:.5em;`("Countdown until the next, Patreon LE only, group meetup"),()=>_0(t),_.style`white-space:nowrap;font-size:.7em;opacity:.8`("save meetup to your calendar using links below 👇"),_.style`background-color:black;padding:0 0 .2em 0;`(_.style`white-space:nowrap;font-size:.5em;opacity:.6`("choose your calendar type below"),_.style`display:flex;gap:1em;justify-content: center;`(i.map(u=>Fp(u.type,{href:u.url},u.type==="google"?Z.src`assets/media/gmail-logo-2.png`.width`48`.height`48`.border`0`:Z.src`assets/media/outlook-icon.png`.width`48`.height`48`.border`0`).key(u)),Fp("ical",{href:c,download:"cary-hardy-meetup.ics"},No.viewBox`0 0 170 170`.fill`currentColor`.width`48`.height`48`(Cg("Apple Logo"),Z.src`assets/media/ical.png`.width`48`.height`48`.border`0`))),pe,_(j.style`font-size:0.7em;`(pv(z.onClick(()=>n=!n).style`color:white;`("⬜️ qr invite codes here"))))),se.style`font-size:0.8em;opacity:0.7;line-height:0.9em;`(j("🔗 A link to virtual meetup is posted on day of meetup,",pe,"in the LE ONLY 💬 chat on Patreon.")),()=>e&&_.style`padding:.8em;font-size: .7em;`(z.class`no-a-style`.href`meetup.html`(q.type`button`("learn more"))))});function b0(t){var e=t.getDate(),n="th";return e===1||e===21||e===31?"st":e===2||e===22?"nd":e===3||e===23?"rd":n}const Fp=(t,e,n)=>{const r=z.class`small-icon-link`.href`${e.href}`.attr("target","_blank");return(e.download?r.attr("download",e.download):r)(_.class`small-icon`(n),j.style`font-size:0.5em;`(t))};function ec(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}const w0=O(({nextMeetupDate:t,onQrUrlChange:e})=>{w0.inputs(i=>{[{nextMeetupDate:t,onQrUrlChange:e}]=i,e=K(e)});const n=m0({startDateTime:t,message:Ke.message,subject:Ke.subject}),r=g0({startDateTime:t,message:Ke.message,subject:Ke.subject}),s=y0({startDateTime:t,message:Ke.message,subject:Ke.subject});return xa.style`border:0;padding:0;margin:0;`(_(_.style`display:flex;flex-wrap:wrap;gap:1em`(_(re("Message"),_(ce.type`text`.value(i=>Ke.message).onChange(i=>Ke.message=i.target.value).style`width:100%`)),_(re("Subject"),_(ce.type`text`.value(i=>Ke.subject).onChange(i=>Ke.subject=i.target.value).style`width:100%`))),pe,pe,_.style`display:flex;flex-wrap:wrap;gap:1em;flex-direction:column;`(_.style`display:flex;flex-grow:1`(No.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(gv.attr("width","22").attr("height","22").attr("x","13").attr("y","13").attr("fill","#fff"),yo.attr("fill","#1e88e5").attr("points","25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"),Gt.attr("fill","#1e88e5").attr("d","M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"),yo.attr("fill","#fbc02d").attr("points","34,42 14,42 13,38 14,34 34,34 35,38"),yo.attr("fill","#4caf50").attr("points","38,35 42,34 42,14 38,13 34,14 34,34"),Gt.attr("fill","#1e88e5").attr("d","M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"),yo.attr("fill","#e53935").attr("points","34,34 34,42 42,34"),Gt.attr("fill","#1565c0").attr("d","M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"),Gt.attr("fill","#1565c0").attr("d","M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z")),ce.type`text`.style`width:100%`.value(n),q.onClick(()=>ec(n))("copy"),q.onClick(()=>e(n))("qr")),_.style`display:flex;flex:1`(No.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(Gt.attr("fill","#03A9F4").attr("d","M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z"),Gt.attr("fill","#B3E5FC").attr("d","M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z"),Gt.attr("fill","#0277BD").attr("d","M27 41.46L6 37.46 6 9.46 27 5.46z"),Gt.attr("fill","#FFF").attr("d","M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z")),ce.type`text`.style`width:100%`.value(r),q.onClick(()=>ec(r))("copy"),q.onClick(()=>e(r))("qr")),_.style`display:flex;flex:1`(No.attr("viewBox","0 0 170 170").attr("fill","currentColor").attr("width","48").attr("height","48")(Cg("Apple Logo"),Gt.attr("d","M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z")),ce.type`text`.style`width:100%`.value(s),q.onClick(()=>ec(s))("copy")))))});let Up=!1,$p=null;const T0=O(t=>{let e=$p;return T0.inputs(([n])=>{K(n)}),Up||(Up=!0,O.promise=ol().then(n=>{typeof n=="number"&&(e=n,$p=n)}).catch(n=>{console.error("Failed to load next meetup date",n)})),_.style`max-width:1200px;margin:0 auto;padding:0 1em;`(ze(Z.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,"Hardy Tools"),_.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(Vt({href:"/admin/qr-maker.html",title:"🔗 QR Maker",description:"Create a QR code from any link and preview the encoded URL before using it."}),n=>tu({labelText:"Calendar Links",flex:"2",contentNode:e===null?_.style`opacity:0.7;`("Loading saved meetup time..."):w0({nextMeetupDate:e,onQrUrlChange:r=>{window.location.href=`/admin/qr-maker.html?url=${encodeURIComponent(r)}`}})}),Vt({href:"/admin/meeting-tools.html",title:"📅 Meeting Tools",description:"Update the next meetup date, save it to Firestore, and preview the public countdown."}),n=>tu({labelText:"admin users",flex:"1",contentNode:dS}),Vt({href:"/admin/user.html",title:"👥 Open Users Admin",description:"Manage authorized admin users and account access."}),Vt({href:"/admin/current-games.html",title:"⚪️ Current Game Lineup",description:"Choose which games appear in the public current lineup."}),Vt({href:"/admin/past-owned-games.html",title:"📜 Past Games Owned",description:"Track previously owned games and sync new items from Pinside history."}),Vt({href:"/admin/games.html",title:"🕹️ Games Database",description:"Maintain canonical game details used by lineup and ratings."}),Vt({href:"/admin/manufacturers.html",title:"🏭 Manufacturers Database",description:"Edit manufacturer records and logos for the game database."}),Vt({href:"/admin/game-tiers.html",title:"🏷️ Game Tiers Database",description:"Manage game edition abbreviations and full names."}),Vt({href:"/admin/game-ratings.html",title:"⭐ Game Ratings",description:"Create and update public ratings, reviews, and related videos."})),pe)}),Vt=O(({href:t,title:e,description:n})=>(Vt.inputs(r=>{[{href:t,title:e,description:n}]=r}),_.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(z.href`${t}`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;`(_.style`font-weight:800;text-align:center;`(e),se.style`margin:0.45em 0 0;color:rgba(255,255,255,0.72);font-size:0.82em;line-height:1.35;text-align:center;`(n))))),tu=O(({labelText:t,flex:e,contentNode:n})=>{tu.inputs(i=>[{labelText:t,flex:e,contentNode:n}]=i);let r=!1;const s=()=>{r=!r};return _.style`flex:${e};min-width:min(500px, 100%);background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(_.onClick(s).style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`(_.style`width:1em;text-align:center;`(()=>r?"▼":"▶"),_(t)),()=>r?_.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(i=>n):"")}),St=O(t=>{St.inputs(([i])=>{t=K(i)});let e=!1;const n=ye(()=>{}),r=()=>{e=!1,n()},s=()=>{e=!e,n()};return Ce(_.class`admin-nav-layout`(_.class`admin-nav-left`(q.type`button`.class`top-nav-pill`.attr("aria-expanded",i=>e?"true":"false").onClick(s)("☰ menu")),_(),_.class`admin-nav-right`(z.href`/index.html`.class`top-nav-pill`("🏠 home"),q.type`button`.class`top-nav-pill`.onClick(t)("🚪 logout"))),i=>e?Ce(q.type`button`.class`admin-menu-backdrop`.onClick(r).attr("aria-label","Close menu")(""),_.class`admin-menu-panel`.attr("role","menu")(z.href`/admin.html`.class`top-nav-pill`.attr("role","menuitem")("🏠 admin home"),z.href`/admin/qr-maker.html`.class`top-nav-pill`.attr("role","menuitem")("🔗 qr maker"),z.href`/admin/meeting-tools.html`.class`top-nav-pill`.attr("role","menuitem")("📅 meeting tools"),z.href`/admin/current-games.html`.class`top-nav-pill`.attr("role","menuitem")("⚪️ current lineup"),z.href`/admin/past-owned-games.html`.class`top-nav-pill`.attr("role","menuitem")("📜 past games"),z.href`/admin/games.html`.class`top-nav-pill`.attr("role","menuitem")("🕹️ games"),z.href`/admin/manufacturers.html`.class`top-nav-pill`.attr("role","menuitem")("🏭 manufacturers"),z.href`/admin/game-tiers.html`.class`top-nav-pill`.attr("role","menuitem")("🏷️ game tiers"),z.href`/admin/game-ratings.html`.class`top-nav-pill`.attr("role","menuitem")("⭐ ratings"),z.href`/admin/user.html`.class`top-nav-pill`.attr("role","menuitem")("👥 users"),z.href`https://github.com/AckerApple/cary-hardy`.class`top-nav-pill`.attr("role","menuitem").attr("target","_blank").attr("rel","noopener noreferrer")("🔗 code base"))):"")});let Bp=!1;const pS=O(()=>Bp?"":(Bp=!0,$t(`
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
  `))),I0=O(({className:t="top-nav",content:e})=>(I0.inputs(n=>{[{className:t,content:e}]=n}),_.class`${t}`(_.class`top-nav-row`(typeof e=="function"?e():e)))),Ge=O(t=>(Ge.inputs(e=>{[t]=e}),Ce(pS(),_.class`top-nav-shell top-nav-fixed`(I0({className:"top-nav top-nav-inner",content:t}))))),v0=O(({nextMeetupDate:t,date:e,time:n,onDate:r,onSave:s})=>(v0.inputs(i=>{[{nextMeetupDate:t,date:e,time:n,onDate:r,onSave:s}]=i,r=K(r),s=K(s)}),xa.style`border:0;padding:0;margin:0;`(i=>E0({date:e,time:n,onDate:r}),_.style`margin-top:0.6em;`(q.onClick(s)("save to firestore")),Rg,_.style`text-align:center;`(i=>ll({date:t}))))),E0=O(({date:t,time:e,onDate:n})=>{let r=new Date(t+" "+e).getTime();E0.inputs(o=>{[{date:t,time:e,onDate:n}]=o,n=K(n),r=new Date(t+" "+e).getTime()});const s=o=>{const l=o.target.value;n(new Date(l+" "+e).getTime())},i=o=>{const l=o.target.value;n(new Date(t+" "+l).getTime())};return _.style`display:flex;flex-wrap:wrap;gap:1em`(_(re("Date"),_(ce.type`date`.value(o=>t).onChange(s).style`width:100%`)),_(re.attr("for","time")("Time"),_(ce.type`time`.value(o=>e).onChange(i).style`width:100%`)),_(re.attr("for","time")("UTC"),_(o=>r)))});function jp(t){const e=new Date(t),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return{date:`${n}-${r}-${s}`,time:`${i}:${o}`}}let zp=!1;const hx=O(()=>{let t="loading",e="",n=null;const r=ye((l,c="",u="")=>{t=l,e=c}),s=ye(l=>{n=l,console.log("currentUser",n),l||(t="login")}),i=()=>{r("login","","auth:logged-out"),t="login"},o=ye((l,c="")=>{t="authorized",e=(l==null?void 0:l.email)||""});return zp||(zp=!0,Dd({onUser:(l,c)=>{Md({user:l,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(n==null?void 0:n.email)||"","auth:denied")},onAuthorized:o,reason:c})},toast:{error:l=>console.warn(l)}})),Ce($t(`
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
    `),l=>A0(t,e,i))}),A0=O((t,e,n)=>{A0.inputs(s=>{[t,e,n]=s,n=K(n)});const r=()=>ft().then(n).catch(s=>{console.error("Failed to sign out",s)});return[()=>t==="authorized"?Ce(Ge(()=>St(r)),T0(n)):_(al({status:t,userEmail:e,adminEmail:"",onSignIn:()=>kd().catch(s=>{console.error("Failed to sign in",s)}),onSignOut:()=>(t="login",ft().catch(s=>{console.error("Failed to sign out",s)}))}))]}),C0=O(({user:t,onEdit:e,formatCreatedAt:n})=>(C0.inputs(r=>{[{user:t,onEdit:e,formatCreatedAt:n}]=r}),_.style`display:grid;grid-template-columns:1.1fr 1.4fr 0.7fr 0.7fr auto;gap:0.6em;align-items:center;padding:0.4em 0;`(_(r=>`${t.firstName||""} ${t.lastName||""}`.trim()||"—"),_.style`opacity:0.85;`(r=>t.email||"—"),j.style`opacity:0.85;color:${t.userType==="verified"?"#6fe3a1":"#f26d6d"};`(r=>t.userType||"unverified"),j.style`opacity:0.7;`(r=>n(t.createdAt)),q.type`button`.onClick(e).style`border:0;background:transparent;color:#fff;cursor:pointer;font-size:1.1em;`.attr("title","Edit user")("✏️")))),R0=O(({userId:t,createdAtLabel:e,editUser:n,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:l,onCancel:c})=>{R0.inputs(h=>{[{userId:t,createdAtLabel:e,editUser:n,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:l,onCancel:c}]=h});const u=h=>{i({...n,...h})};return _.style`margin-top:1em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.15);display:grid;gap:0.6em;`(_.style`font-weight:600;`("Edit User"),j.style`opacity:0.6;`("User ID: ",h=>t),j.style`opacity:0.6;`("Created at: ",h=>e),_.style`display:grid;grid-template-columns:120px 1fr;gap:0.6em;align-items:center;`(j.style`opacity:0.7;`("Email"),ce.type`email`.value(h=>(n==null?void 0:n.email)||"").onInput(h=>{var f;u({email:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),j.style`opacity:0.7;`("First name"),ce.type`text`.value(h=>(n==null?void 0:n.firstName)||"").onInput(h=>{var f;u({firstName:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),j.style`opacity:0.7;`("Last name"),ce.type`text`.value(h=>(n==null?void 0:n.lastName)||"").onInput(h=>{var f;u({lastName:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),j.style`opacity:0.7;`("Status"),Si.value(h=>(n==null?void 0:n.userType)==="verified"?"verified":"unverified").onChange(h=>{var f;u({userType:((f=h==null?void 0:h.target)==null?void 0:f.value)==="verified"?"verified":"unverified"})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(h=>Dt.value`unverified`.selected(f=>n.userType==="unverified")("unverified"),h=>Dt.value`verified`.selected(f=>n.userType==="verified")("verified"))),_.style`display:flex;gap:0.6em;`(q.type`button`.onClick(o).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#1b1b1b;color:#fff;cursor:pointer;`(h=>r?"Saving...":"Save to Firestore"),q.type`button`.onClick(l).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#4b1111;color:#fff;cursor:pointer;`(h=>s?"🗑️ Deleting...":"🗑️ Delete"),q.type`button`.onClick(c).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;cursor:pointer;`("Cancel")))});let Hp=!1,tc=!1,oi=new wt(null),bn=null;const fx=O(()=>{let t="loading",e="",n=null;const r=ye((l,c="",u="")=>{t=l,e=c}),s=ye(l=>{n=l,l||(t="login")}),i=()=>{r("login","","auth:logged-out"),t="login"},o=ye((l,c="")=>{t="authorized",e=(l==null?void 0:l.email)||""});return Hp||(Hp=!0,Dd({onUser:(l,c)=>{Md({user:l,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(n==null?void 0:n.email)||"","auth:denied")},onAuthorized:o,reason:c})},toast:{error:l=>console.warn(l)}})),Ce($t(`
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
    `),l=>k0(t,e,i))}),k0=O((t,e,n)=>(k0.inputs(r=>{[t,e,n]=r,n=K(n)}),[()=>t==="authorized"?S0(n):_(al({status:t,userEmail:e,adminEmail:"",onSignIn:()=>kd().catch(r=>{console.error("Failed to sign in",r)}),onSignOut:()=>(t="login",ft().catch(r=>{console.error("Failed to sign out",r)}))}))])),S0=O(t=>{S0.inputs(([S])=>{t=K(S)});const e=()=>ft().then(t).catch(S=>{console.error("Failed to sign out",S)});let n=!1,r=!1,s=!1,i="",o=null,l=null,c=null;const u=ye(()=>{}),h=S=>S?typeof S.toDate=="function"?S.toDate().toLocaleDateString():typeof S=="number"?new Date(S).toLocaleDateString():S.seconds?new Date(S.seconds*1e3).toLocaleDateString():"-":"-",f=S=>{if(!S)return"-";let k=null;return typeof S.toDate=="function"?k=S.toDate():typeof S=="number"?k=new Date(S):S.seconds&&(k=new Date(S.seconds*1e3)),k?k.toLocaleString():"-"},m=()=>{bn&&(bn(),bn=null),n=!0,i="",u(),oi=Dk(),bn=(oi==null?void 0:oi.unsubscribe)||null},v=S=>{o=S.id,l=S.createdAt??null,c={...S},u()},T=()=>{o=null,l=null,c=null,u()},R=()=>{if(!o||r)return;r=!0,i="",u();const S={id:o,email:((c==null?void 0:c.email)||"").trim(),firstName:((c==null?void 0:c.firstName)||"").trim(),lastName:((c==null?void 0:c.lastName)||"").trim(),userType:(c==null?void 0:c.userType)==="verified"?"verified":"unverified"};O.promise=Vk(S).then(()=>{T()}).catch(k=>{console.error("Failed to save user",k),i="Failed to save user.",u()}).finally(()=>{r=!1,u()})},P=()=>{!o||s||confirm("Delete this user?")&&(s=!0,i="",u(),O.promise=Mk(o).then(()=>{T()}).catch(S=>{console.error("Failed to delete user",S),i="Failed to delete user.",u()}).finally(()=>{s=!1,u()}))};return tc||(tc=!0,bn?n=!0:m()),zt(()=>{bn&&(bn(),bn=null),tc=!1}),Ce(Ge(()=>St(e)),_.class`users-page`(ze("👥 Users Admin"),_.class`users-card`(_.style`margin-top:0.75em;display:grid;gap:0.5em;`(S=>i?se.style`color:#f6c177;`(i):"",OT(oi,null,S=>S===null?j.style`opacity:0.7;`("Loading users..."):(n=!1,console.log("user items",{items:S,isLoading:n}),S.length?S.map(k=>C0({user:k,onEdit:()=>v(k),formatCreatedAt:h}).key(k.id)):j.style`opacity:0.7;`("No users found.")))),S=>o?R0({userId:o,createdAtLabel:f(l),editUser:c,isSaving:r,isDeleting:s,onChange:k=>{c=k,u()},onSave:R,onDelete:P,onCancel:T}):"",pe,_.class`users-actions`(z.href`../admin.html`("Back to Admin Tools")))))}),mS=`
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
`,Qn=(t,e="")=>{let n=!1;return O(()=>{let r="loading",s="",i=null;const o=ye((h,f="",m="")=>{r=h,s=f}),l=ye(h=>{i=h,h||(r="login")}),c=()=>{o("login","","auth:logged-out"),r="login"},u=ye((h,f="")=>{r="authorized",s=(h==null?void 0:h.email)||""});return n||(n=!0,Dd({onUser:(h,f)=>{Md({user:h,mountSso:o,setCurrentUser:l,onSignedOut:c,onDenied:()=>o("denied",(i==null?void 0:i.email)||"","auth:denied"),onAuthorized:u,reason:f})},toast:{error:h=>console.warn(h)}})),Ce($t(`${mS}
${e}`),h=>x0(r,s,c,t))})},x0=O((t,e,n,r)=>(x0.inputs(s=>{[t,e,n,r]=s,n=K(n)}),[()=>t==="authorized"?r(n):_(al({status:t,userEmail:e,adminEmail:"",onSignIn:()=>kd().catch(s=>console.error("Failed to sign in",s)),onSignOut:()=>(t="login",ft().catch(s=>console.error("Failed to sign out",s)))}))])),cl=O(({value:t,games:e,isLoaded:n,fieldError:r,editSelectedGame:s=!1,onChange:i})=>{cl.inputs(l=>{[{value:t,games:e,isLoaded:n,fieldError:r,editSelectedGame:s=!1,onChange:i}]=l,i=K(i)});const o=()=>r?"#f87171":"rgba(255,255,255,0.2)";return _.class`admin-field-with-link`(Si.value(l=>t||"").onChange(l=>{var c;i(((c=l==null?void 0:l.target)==null?void 0:c.value)||"")}).attr("aria-invalid",l=>r?"true":"false").attr("title",l=>r||"").attr("style.borderColor",l=>o())(l=>gS(t,e,n)),z.href(l=>s&&t?`/admin/games.html?editGame=${encodeURIComponent(t)}`:"/admin/games.html").class`admin-inline-edit-link`(l=>s&&t?"edit game":"edit games"))}),gS=(t,e,n)=>{const r=_S(e),s=!t||e.some(i=>i.id===t);return[Dt.value``(i=>yS(e,n)),s?"":Dt.value`${t}`(`Missing game: ${t}`),r.map(({manufacturer:i,items:o})=>fv.label(i)(o.map(l=>Dt.value`${l.id}`(bS(l)))))]},yS=(t,e)=>e?t.length?"Select a game":"Add games first":"Loading games...",_S=t=>{const e=new Map;return t.forEach(n=>{const r=String(n.manufacturer||"Unknown Manufacturer").trim()||"Unknown Manufacturer";e.set(r,[...e.get(r)||[],n])}),[...e.entries()].sort(([n],[r])=>n.localeCompare(r,void 0,{sensitivity:"base"})).map(([n,r])=>({manufacturer:n,items:[...r].sort((s,i)=>String(s.title||"").localeCompare(String(i.title||""),void 0,{sensitivity:"base"}))}))},bS=t=>[t.title||"Untitled game",t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" - "),Od=(t,e,n)=>{const r=e.find(i=>i.id===t);return(Array.isArray(r==null?void 0:r.tierIds)?r.tierIds:[]).map(i=>n.find(o=>o.id===i)).filter(Boolean)},Fd=O(({gameId:t,tierId:e,games:n,gameTiers:r,isLoaded:s,fieldError:i,radioName:o="game-tier",onChange:l})=>(Fd.inputs(c=>{[{gameId:t,tierId:e,games:n,gameTiers:r,isLoaded:s,fieldError:i,radioName:o="game-tier",onChange:l}]=c,l=K(l)}),Ce(re.style`text-align:left;justify-self:start;`.attr("style.color",c=>i?"#fca5a5":"inherit")("Game Tier"),c=>{const u=Od(t,n,r);return _.style`text-align:left;justify-self:stretch;width:100%;`(u.length?_.style`display:grid;gap:0.45em;text-align:left;`(u.map(h=>re.style`display:flex;gap:0.5em;align-items:center;text-align:left;justify-content:flex-start;`(ce.type`radio`.attr("name",o).value`${h.id}`.attr("checked",f=>e===h.id?"checked":null).onChange(()=>l(h.id))(),Y(`${h.shortName} — ${h.longName}`)).key(h.id))):s?t?Si.style`text-align:left;width:100%;`.value(h=>e||"").onChange(h=>{var f;l(((f=h==null?void 0:h.target)==null?void 0:f.value)||"")}).attr("aria-invalid",h=>i?"true":"false").attr("title",h=>i||"")([Dt.value``(r.length?"Select a game tier":"No game tiers available"),...r.map(h=>Dt.value`${h.id}`(`${h.shortName} — ${h.longName}`))]):j.style`opacity:0.72;`("Select a game first."):j.style`opacity:0.72;`("Loading game tiers..."))}))),nc=()=>({gameId:"",tierId:"",dateAddedToCollection:"",notes:"",isVisible:!0});let rc=!1,ai=null,wn=null,sr=null,Eo=null,Tn=null,ir=null,Ao=null,Wt=null,In=null;const px=Qn(t=>P0(t)),P0=O(t=>{P0.inputs(([b])=>{t=K(b)});const e=()=>ft().then(t).catch(b=>{console.error("Failed to sign out",b)});let n=!1,r=!1,s="",i={},o=!1,l=null,c=nc(),u=ai,h=Eo,f=Ao;const m=ye(()=>{}),v=()=>{wn&&(wn(),wn=null),sr&&(sr(),sr=null),u=null,ai=null,s="",m();const b=Gk();wn=(b==null?void 0:b.unsubscribe)||null;const g=b.subscribe(y=>{u=y,ai=y,console.debug("Current games list updated",{count:(y==null?void 0:y.length)||0,items:y}),m()});sr=()=>g.unsubscribe()},T=()=>{Tn&&(Tn(),Tn=null),ir&&(ir(),ir=null),h=null,Eo=null,m();const b=Us();Tn=(b==null?void 0:b.unsubscribe)||null;const g=b.subscribe(y=>{h=y,Eo=y,console.debug("Game library updated",{count:(y==null?void 0:y.length)||0,items:y}),m()});ir=()=>g.unsubscribe()},R=()=>{Wt==null||Wt(),In==null||In(),f=null,Ao=null;const b=ro();Wt=(b==null?void 0:b.unsubscribe)||null;const g=b.subscribe(y=>{Array.isArray(y)&&(f=y,Ao=f,m())});In=()=>g.unsubscribe()},P=()=>Jk().then(b=>{console.debug("Current games list refreshed",{count:b.length,items:b}),u=b,ai=b,m()}).catch(b=>{console.error("Failed to refresh current games list",b),s="Saved, but failed to refresh the game list. Reload the page to confirm.",m()}),S=()=>{l=null,c=nc(),s="",i={},o=!0,m()},k=b=>{l=b.id,c={id:b.id,gameId:b.gameId||"",tierId:b.tierId||"",title:b.title||"",dateAddedToCollection:D0(b.dateAddedToCollection),imageUrl:b.imageUrl||"",manufacturer:b.manufacturer||"",yearReleased:qp(b.yearReleased),notes:b.notes||"",isVisible:b.isVisible!==!1},s="",i={},o=!0,m()},L=()=>{n||r||(l=null,c=nc(),s="",i={},o=!1,m())},G=()=>{const b={};!c.gameId&&!(c.title||"").trim()&&(b.gameId="Game is required."),c.dateAddedToCollection||(b.dateAddedToCollection="Date Added to Collection is required.");const g=Od(c.gameId||"",h||[],f||[]);g.length&&!g.some(E=>E.id===c.tierId)&&(b.tierId="Select the tier for this current game."),c.yearReleased!==null&&typeof c.yearReleased<"u"&&Number.isNaN(Number(c.yearReleased))&&(b.yearReleased="Year Released must be numeric."),i=b;const y=Object.values(b);return y.length?y[0]:""},N=()=>{if(n){console.debug("Current game save ignored because a save is already running");return}const b=G();if(b){s=b,console.warn("Current game save blocked by validation",{fieldErrors:i,game:c}),m();return}n=!0,s="",i={},m(),console.debug("Saving current game",{id:l||null,game:c}),O.promise=Kk({...c,id:l||void 0,gameId:(c.gameId||"").trim(),tierId:(c.tierId||"").trim(),title:(c.title||"").trim(),imageUrl:(c.imageUrl||"").trim(),manufacturer:(c.manufacturer||"").trim(),notes:(c.notes||"").trim(),yearReleased:qp(c.yearReleased),isVisible:c.isVisible!==!1}).then(()=>(console.debug("Current game saved",{id:l||null}),n=!1,L(),P())).catch(g=>{console.error("Failed to save current game",g),s="Failed to save game. Check the fields and try again.",m()}).finally(()=>{n=!1,m()})},F=()=>{!l||r||confirm("Delete this game from the current lineup?")&&(r=!0,s="",m(),O.promise=Qk(l).then(()=>(r=!1,L(),P())).catch(b=>{console.error("Failed to delete current game",b),s="Failed to delete game.",m()}).finally(()=>{r=!1,m()}))};return rc||(rc=!0,wn||v(),Tn||T(),Wt||R()),zt(()=>{wn&&(wn(),wn=null),sr&&(sr(),sr=null),Tn&&(Tn(),Tn=null),ir&&(ir(),ir=null),Wt==null||Wt(),In==null||In(),Wt=null,In=null,Ao=null,rc=!1,ai=null,Eo=null}),Ce(Ge(()=>St(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(ze("⚪️ Current Game Lineup"),q.type`button`.class`admin-pill-button`.onClick(S)("Add")),_.class`admin-crud-card`(se.style`margin-top:0;opacity:0.78;`("Manage the Firestore currentGames collection used by the public lineup page."),b=>s&&!o?se.style`color:#f6c177;`(s):"",_.class`admin-crud-list`(b=>u===null?j.style`opacity:0.7;`("Loading games..."):u.length?u.map(g=>V0({game:wS(g,h||[]),onClick:k}).key(g.id)):j.style`opacity:0.7;`("No games found. Use Add Game to create the first one.")),_.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(z.href`../lineup.html`.class`admin-secondary-button`("View Public Lineup"))),b=>o?N0({isEditing:!!l,editGame:c,gameLibrary:h||[],gameTiers:f||[],isGameTiersLoaded:f!==null,isGameLibraryLoaded:h!==null,errorMessage:s,fieldErrors:i,isSaving:n,isDeleting:r,onChange:g=>{var y;c=g,i={...i,gameId:g.gameId||(y=g.title)!=null&&y.trim()?"":i.gameId,tierId:g.tierId?"":i.tierId,dateAddedToCollection:g.dateAddedToCollection?"":i.dateAddedToCollection,yearReleased:g.yearReleased===null||!Number.isNaN(Number(g.yearReleased))?"":i.yearReleased},m()},onSave:N,onDelete:F,onCancel:L}):""))}),V0=O(({game:t,onClick:e})=>(V0.inputs(n=>{[{game:t,onClick:e}]=n,e=K(e)}),q.type`button`.class`admin-crud-row`.onClick(()=>e(t))(n=>t.imageUrl?Z.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",r=>t.title||"Game image"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),_(Wn(n=>t.title||"Untitled game"),_.style`margin-top:0.15em;opacity:0.74;`(j(n=>[t.manufacturer||"",t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year"))),j.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Y.style`font-size:0.78em;text-transform:uppercase;`("Collected Date"),Y(n=>[TS(t.dateAddedToCollection),t.isVisible===!1?" · Hidden":""].join("")))))),wS=(t,e)=>{const n=e.find(r=>r.id===t.gameId);return{...t,title:(n==null?void 0:n.title)||t.title||"",imageUrl:(n==null?void 0:n.imageUrl)||t.imageUrl||"",manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null}},N0=O(({isEditing:t,editGame:e,gameLibrary:n,gameTiers:r,isGameTiersLoaded:s,isGameLibraryLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:v})=>{N0.inputs(S=>{[{isEditing:t,editGame:e,gameLibrary:n,gameTiers:r,isGameTiersLoaded:s,isGameLibraryLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:v}]=S,h=K(h),f=K(f),m=K(m),v=K(v)});const T=S=>{h({...e,...S})},R=S=>l[S]?"#f87171":"rgba(255,255,255,0.2)",P=S=>l[S]?"#fca5a5":"inherit";return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(ze.style`margin:0;`(t?"Edit Game":"Add Game"),j.style`opacity:0.72;`(t?"Update this current lineup entry.":"Create a new current lineup entry.")),q.type`button`.class`admin-secondary-button`.onClick(v)("Cancel")),S=>o?se.style`color:#f6c177;`(o):"",S=>Object.values(l).filter(Boolean).length?_.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(l).filter(Boolean).map(k=>j(k))):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(re.attr("style.color",S=>P("gameId"))("Game"),S=>cl({value:e.gameId||"",games:n,isLoaded:i,fieldError:l.gameId,editSelectedGame:!0,onChange:k=>T({gameId:k,tierId:""})}).key(`${i?"loaded":"loading"}-${n.length}`),S=>Fd({gameId:e.gameId||"",tierId:e.tierId||"",games:n,gameTiers:r,isLoaded:s,fieldError:l.tierId,radioName:"current-game-tier",onChange:k=>T({tierId:k})}).key(`${e.gameId||"no-game"}-${s?"loaded":"loading"}-${r.length}`),re.attr("style.color",S=>P("dateAddedToCollection"))("Date Added to Collection"),ce.type`date`.value(S=>e.dateAddedToCollection||"").onInput(S=>{var k;T({dateAddedToCollection:((k=S==null?void 0:S.target)==null?void 0:k.value)||""})}).attr("aria-invalid",S=>l.dateAddedToCollection?"true":"false").attr("title",S=>l.dateAddedToCollection||"").attr("style.borderColor",S=>R("dateAddedToCollection"))(),re("Notes"),Ss.value(S=>e.notes||"").onInput(S=>{var k;T({notes:((k=S==null?void 0:S.target)==null?void 0:k.value)||""})})(),re("Visible on public page"),re.style`display:flex;gap:0.5em;align-items:center;`(ce.type`checkbox`.attr("checked",S=>e.isVisible!==!1?"checked":null).onChange(S=>{var k;T({isVisible:!!((k=S==null?void 0:S.target)!=null&&k.checked)})})(),Y(S=>e.isVisible!==!1?"Visible":"Hidden"))),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",S=>c?"disabled":null).onClick(f)(S=>c?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",S=>c?"disabled":null).onClick(v)("Cancel")),S=>t?q.type`button`.class`admin-danger-button`.attr("disabled",k=>u?"disabled":null).onClick(m)(k=>u?"🗑️ Deleting...":"🗑️ Delete"):"")))}),qp=t=>{if(typeof t=="number"&&!Number.isNaN(t))return t;if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},D0=t=>t?typeof t=="string"?t.slice(0,10):typeof t.toDate=="function"?t.toDate().toISOString().slice(0,10):t.seconds?new Date(t.seconds*1e3).toISOString().slice(0,10):"":"",TS=t=>{const e=D0(t);if(!e)return"No date";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},sc=()=>({title:"",imageUrl:"",manufacturerId:"",manufacturer:"",yearReleased:null,notes:"",dataLinks:[],tierIds:[]});let ic=!1,li=null,or=null,Jr=null,Co=null,ar=null,Kr=null,Ro=null,Jt=null,vn=null;const mx=Qn(t=>M0(t)),M0=O(t=>{M0.inputs(([y])=>{t=K(y)});const e=()=>ft().then(t).catch(y=>console.error("Failed to sign out",y));let n=li,r=Co,s=Ro,i=!1,o=null,l=sc(),c=!1,u=!1,h="",f={};const m=new URLSearchParams(window.location.search).get("editGame")||"";let v=!1;const T=ye(()=>{}),R=()=>{or&&or(),Jr&&Jr(),n=null,li=null,T();const y=Us();or=(y==null?void 0:y.unsubscribe)||null;const E=y.subscribe(A=>{if(n=A,li=A,m&&!v){const C=A.find(I=>I.id===m);C&&(v=!0,G(C))}T()});Jr=()=>E.unsubscribe()},P=()=>Sd().then(y=>{n=y,li=y,T()}).catch(y=>{console.error("Failed to refresh games",y),h="Saved, but failed to refresh games. Reload the page to confirm.",T()}),S=()=>{ar&&ar(),Kr&&Kr(),r=null,Co=null,T();const y=l0();ar=(y==null?void 0:y.unsubscribe)||null;const E=y.subscribe(A=>{r=A,Co=A,T()});Kr=()=>E.unsubscribe()},k=()=>{Jt==null||Jt(),vn==null||vn(),s=null,Ro=null;const y=ro();Jt=(y==null?void 0:y.unsubscribe)||null;const E=y.subscribe(A=>{Array.isArray(A)&&(s=A,Ro=s,T())});vn=()=>E.unsubscribe()},L=()=>{o=null,l=sc(),h="",f={},i=!0,T()},G=y=>{o=y.id,l={id:y.id,title:y.title||"",imageUrl:y.imageUrl||"",manufacturerId:y.manufacturerId||"",manufacturer:y.manufacturer||"",yearReleased:Wp(y.yearReleased),notes:y.notes||"",dataLinks:vr(y.dataLinks),tierIds:ru(y.tierIds)},h="",f={},i=!0,T()},N=()=>{c||u||(o=null,l=sc(),h="",f={},i=!1,T())},F=()=>{const y={},E=(l.id||"").trim();o&&!E&&(y.id="Game ID is required."),o&&E.includes("/")&&(y.id="Game ID cannot include /."),o&&E!==o&&(n||[]).some(C=>C.id===E)&&(y.id="A game with this ID already exists."),l.title.trim()||(y.title="Game Title is required."),l.yearReleased!==null&&Number.isNaN(Number(l.yearReleased))&&(y.yearReleased="Year Released must be numeric."),f=y;const A=Object.values(y);return A.length?A[0]:""},b=()=>{if(c)return;const y=F();if(y){h=y,T();return}c=!0,h="",f={},T();const E=(r||[]).find(C=>C.id===l.manufacturerId),A=o?(l.id||"").trim():void 0;O.promise=c0({...l,id:A||void 0,title:l.title.trim(),imageUrl:(l.imageUrl||"").trim(),manufacturerId:(l.manufacturerId||"").trim(),manufacturer:((E==null?void 0:E.name)||l.manufacturer||"").trim(),yearReleased:Wp(l.yearReleased),notes:(l.notes||"").trim(),dataLinks:vr(l.dataLinks),tierIds:ru(l.tierIds)}).then(()=>{if(o&&A&&A!==o)return Lp(o)}).then(()=>(c=!1,N(),P())).catch(C=>{console.error("Failed to save game",C),h="Failed to save game. Check the fields and try again.",T()}).finally(()=>{c=!1,T()})},g=()=>{!o||u||confirm("Delete this game from the games collection? Existing lineup entries or ratings may still reference it.")&&(u=!0,h="",T(),O.promise=Lp(o).then(()=>(u=!1,N(),P())).catch(y=>{console.error("Failed to delete game",y),h="Failed to delete game.",T()}).finally(()=>{u=!1,T()}))};return ic||(ic=!0,or||R(),ar||S(),Jt||k()),zt(()=>{or&&or(),Jr&&Jr(),ar&&ar(),Kr&&Kr(),Jt==null||Jt(),vn==null||vn(),or=null,Jr=null,ar=null,Kr=null,li=null,Co=null,Jt=null,vn=null,Ro=null,ic=!1}),Ce(Ge(()=>St(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(ze("🕹️ Games Database"),q.type`button`.class`admin-pill-button`.onClick(L)("Add")),_.class`admin-crud-card`(se.style`margin-top:0;opacity:0.78;`("Manage canonical games used by lineup and ratings."),y=>h&&!i?se.style`color:#f6c177;`(h):"",_.class`admin-crud-list`(y=>{if(r===null)return j.style`opacity:0.7;`("Loading manufacturers...");if(!r.length)return j.style`opacity:0.7;`("No manufacturers found. Add a manufacturer first.");if(n===null)return j.style`opacity:0.7;`("Loading games...");const E=r,A=n.filter(C=>!E.some(I=>L0(C,I)));return[...E.map(C=>nu({manufacturer:C,games:IS(C,n||[]),onGameClick:G}).key(C.id)),A.length?nu({manufacturer:{id:"unmatched",name:"Unmatched Games",logoUrl:"",opinions:"Games without a matching manufacturer link."},games:A,onGameClick:G}).key("unmatched"):""]}),_.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(z.href`../admin/current-games.html`.class`admin-secondary-button`("Lineup Admin"),z.href`../admin/manufacturers.html`.class`admin-secondary-button`("Manufacturers Admin"),z.href`../admin/game-tiers.html`.class`admin-secondary-button`("Game Tiers Admin"),z.href`../admin/game-ratings.html`.class`admin-secondary-button`("Ratings Admin"))),y=>i?U0({isEditing:!!o,originalGameId:o||"",editGame:l,manufacturers:r||[],gameTiers:s||[],isGameTiersLoaded:s!==null,errorMessage:h,fieldErrors:f,isSaving:c,isDeleting:u,onChange:E=>{var A,C,I;l=E,f={...f,id:(A=E.id)!=null&&A.trim()?"":f.id,title:(C=E.title)!=null&&C.trim()?"":f.title,manufacturerId:E.manufacturerId||(I=E.manufacturer)!=null&&I.trim()?"":f.manufacturerId,yearReleased:E.yearReleased===null||!Number.isNaN(Number(E.yearReleased))?"":f.yearReleased},T()},onSave:b,onDelete:g,onCancel:N}):""))}),nu=O(({manufacturer:t,games:e,onGameClick:n})=>(nu.inputs(r=>{[{manufacturer:t,games:e,onGameClick:n}]=r,n=K(n)}),_.style`display:grid;gap:0.55em;padding:0.85em 0;border-top:1px solid rgba(255,255,255,0.12);`(_.style`display:flex;align-items:center;justify-content:space-between;gap:1em;flex-wrap:wrap;`(_.style`display:flex;align-items:center;gap:0.75em;min-width:0;`(r=>t.logoUrl?Z.class`admin-crud-thumb`.style`width:46px;height:46px;`.src`${t.logoUrl}`.attr("alt",s=>t.name||"Manufacturer logo"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`.style`width:46px;height:46px;font-size:1em;`(s=>(t.name||"?").slice(0,2).toUpperCase()),_.style`min-width:0;`(Wn(r=>t.name||"Untitled manufacturer"),_.style`margin-top:0.12em;opacity:0.66;`(j(r=>`${e.length} game${e.length===1?"":"s"}`))))),r=>e.length?_.style`display:grid;gap:0.55em;`(e.map(s=>O0({game:s,manufacturers:[t],onClick:n}).key(s.id))):j.style`opacity:0.7;`("No games for this manufacturer yet.")))),IS=(t,e)=>e.filter(n=>L0(n,t)),L0=(t,e)=>t.manufacturerId===e.id||Gp(t.manufacturer)===Gp(e.name),O0=O(({game:t,manufacturers:e,onClick:n})=>(O0.inputs(r=>{[{game:t,manufacturers:e,onClick:n}]=r,n=K(n)}),q.type`button`.class`admin-crud-row`.onClick(()=>n(t))(r=>t.imageUrl?Z.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",s=>t.title||"Game image"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),_(Wn(r=>t.title||"Untitled game"),_.style`margin-top:0.15em;opacity:0.74;`(j(r=>[vS(t,e),t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),j.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Y.style`font-size:0.78em;text-transform:uppercase;`("Game ID"),Y(r=>t.id))))),vS=(t,e)=>{const n=e.find(r=>r.id===t.manufacturerId);return(n==null?void 0:n.name)||t.manufacturer||""},Gp=t=>String(t||"").trim().toLowerCase(),F0=t=>`${t} pinball machine backglass`,ES=t=>`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(F0(t))}`,AS=t=>`https://pinside.com/pinball/machine/${encodeURIComponent(t)}`,U0=O(({isEditing:t,originalGameId:e,editGame:n,manufacturers:r,gameTiers:s,isGameTiersLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:v})=>{U0.inputs(N=>{[{isEditing:t,originalGameId:e,editGame:n,manufacturers:r,gameTiers:s,isGameTiersLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:v}]=N,h=K(h),f=K(f),m=K(m),v=K(v)});const T=N=>h({...n,...N}),R=(N,F)=>{var g,y;const b=vr(n.dataLinks,!0);b[N]={title:((g=b[N])==null?void 0:g.title)||"",url:((y=b[N])==null?void 0:y.url)||"",...F},T({dataLinks:b})},P=()=>{T({dataLinks:[...vr(n.dataLinks,!0),{title:"",url:""}]})},S=N=>{T({dataLinks:vr(n.dataLinks,!0).filter((F,b)=>b!==N)})},k=N=>l[N]?"#f87171":"rgba(255,255,255,0.2)",L=N=>l[N]?"#fca5a5":"inherit",G=N=>{var F;N.key!=="Enter"||N.shiftKey||N.metaKey||N.ctrlKey||N.altKey||String(((F=N.target)==null?void 0:F.tagName)||"").toLowerCase()!=="textarea"&&(N.preventDefault(),f())};return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`.onKeyDown(G)(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(ze.style`margin:0;`(t?"Edit Game":"Add Game"),j.style`opacity:0.72;`("Manage the canonical machine record.")),q.type`button`.class`admin-secondary-button`.onClick(v)("Cancel")),N=>o?se.style`color:#f6c177;`(o):"",N=>Object.values(l).filter(Boolean).length?_.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(l).filter(Boolean).map(F=>j(F))):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(N=>t?[re.attr("style.color",F=>L("id"))("Game ID"),_.style`display:grid;gap:0.28em;`(ce.type`text`.value(F=>n.id||"").onInput(F=>{var b;T({id:((b=F==null?void 0:F.target)==null?void 0:b.value)||""})}).attr("aria-invalid",F=>l.id?"true":"false").attr("title",F=>l.id||"").attr("style.borderColor",F=>k("id"))(),F=>(n.id||"").trim()!==e?j.style`color:#f6c177;line-height:1.35;`("Changing this value can change or break links to this game."):"",F=>(n.id||"").trim()?j(z.href`${AS((n.id||"").trim())}`.class`admin-inline-edit-link`.attr("target","_blank").attr("rel","noopener noreferrer").style`justify-self:start;`("pinside link")):"")]:"",re.attr("style.color",N=>L("title"))("Game Title"),ce.type`text`.value(N=>n.title||"").onInput(N=>{var F;T({title:((F=N==null?void 0:N.target)==null?void 0:F.value)||""})}).attr("aria-invalid",N=>l.title?"true":"false").attr("title",N=>l.title||"").attr("style.borderColor",N=>k("title"))(),re("Image URL"),_.style`display:grid;gap:0.5em;`(_.style`display:grid;grid-template-columns:minmax(0,1fr) auto;gap:0.5em;align-items:stretch;`(ce.type`url`.value(N=>n.imageUrl||"").onInput(N=>{var F;T({imageUrl:((F=N==null?void 0:N.target)==null?void 0:F.value)||""})})(),N=>n.imageUrl?Z.src`${n.imageUrl}`.attr("alt",F=>`${n.title||"Game"} image preview`).style`width:64px;height:42px;object-fit:cover;border:1px solid rgba(255,255,255,0.2);border-radius:0.5em;background:#101010;`:""),N=>(n.title||"").trim()?z.href`${ES(n.title||"")}`.class`admin-inline-edit-link`.attr("target","_blank").attr("rel","noopener noreferrer").style`justify-self:start;`.attr("title",F=>F0(n.title||""))("view google images"):j.style`opacity:0.72;`("Add a game title to view Google Images.")),re.attr("style.color",N=>L("manufacturerId"))("Manufacturer"),_.class`admin-field-with-link`(Si.value(N=>n.manufacturerId||"").onChange(N=>{var F;T({manufacturerId:((F=N==null?void 0:N.target)==null?void 0:F.value)||""})}).attr("aria-invalid",N=>l.manufacturerId?"true":"false").attr("title",N=>l.manufacturerId||"").attr("style.borderColor",N=>k("manufacturerId"))([Dt.value``(r.length?"Select a manufacturer":"Add a manufacturer first"),...r.map(N=>Dt.value`${N.id}`(N.name||"Untitled manufacturer"))]),z.href`/admin/manufacturers.html`.class`admin-inline-edit-link`("edit manufacturers")),re.attr("style.color",N=>L("yearReleased"))("Year Released"),ce.type`number`.value(N=>n.yearReleased??"").onInput(N=>{var F;T({yearReleased:CS((F=N==null?void 0:N.target)==null?void 0:F.value)})}).attr("aria-invalid",N=>l.yearReleased?"true":"false").attr("title",N=>l.yearReleased||"").attr("style.borderColor",N=>k("yearReleased"))(),re("Game Tiers"),_.class`admin-field-with-link`(N=>s.length?Si.attr("multiple","multiple").attr("size",F=>String(Math.min(6,Math.max(2,s.length)))).onChange(F=>{var b;T({tierIds:Array.from(((b=F==null?void 0:F.target)==null?void 0:b.selectedOptions)||[]).map(g=>g.value)})})(s.map(F=>Dt.value`${F.id}`.attr("selected",b=>ru(n.tierIds).includes(F.id)?"selected":null)(`${F.shortName} — ${F.longName}`))):j.style`opacity:0.72;`(i?"No game tiers available.":"Loading game tiers..."),z.href`/admin/game-tiers.html`.class`admin-inline-edit-link`("edit game tiers")),re("Notes"),Ss.value(N=>n.notes||"").onInput(N=>{var F;T({notes:((F=N==null?void 0:N.target)==null?void 0:F.value)||""})})(),re("Data Links"),_.style`display:grid;gap:0.55em;`(N=>vr(n.dataLinks,!0).length?vr(n.dataLinks,!0).map((F,b)=>_.style`display:grid;grid-template-columns:1fr 1fr auto;gap:0.45em;align-items:center;`(ce.type`text`.placeholder`Title`.value(g=>F.title||"").onInput(g=>{var y;R(b,{title:((y=g==null?void 0:g.target)==null?void 0:y.value)||""})})(),ce.type`url`.placeholder`URL`.value(g=>F.url||"").onInput(g=>{var y;R(b,{url:((y=g==null?void 0:g.target)==null?void 0:y.value)||""})})(),q.type`button`.class`admin-danger-button`.onClick(()=>S(b))("🗑️ Delete")).key(`data-link-${b}`)):j.style`opacity:0.72;`("No data links added."),_(q.type`button`.class`admin-secondary-button`.onClick(P)("Add Data Link")))),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",N=>c?"disabled":null).onClick(f)(N=>c?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",N=>c?"disabled":null).onClick(v)("Cancel")),N=>t?q.type`button`.class`admin-danger-button`.attr("disabled",F=>u?"disabled":null).onClick(m)(F=>u?"🗑️ Deleting...":"🗑️ Delete"):"")))}),CS=t=>{if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},Wp=t=>{if(typeof t=="number"&&!Number.isNaN(t))return t;if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},vr=(t,e=!1)=>Array.isArray(t)?t.map(n=>({title:((n==null?void 0:n.title)||"").trim(),url:((n==null?void 0:n.url)||"").trim()})).filter(n=>e||n.title||n.url):[],ru=t=>Array.isArray(t)?[...new Set(t.map(e=>String(e||"").trim()).filter(Boolean))]:[],RS=new URL(""+new URL("rating-badge-CCDAE7Ja.png",import.meta.url).href,import.meta.url).href,Ud=O(({rating:t,size:e=82})=>{Ud.inputs(r=>{[{rating:t,size:e=82}]=r});const n=kS(t);return _.class`rating-badge`.attr("aria-label",r=>n?`Rating ${n} out of 10`:"Not rated").attr("title",r=>n?`${n}/10`:"Not rated").style`
      width:${e}px;
      height:${e}px;
      position:relative;
      display:inline-block;
      flex:0 0 auto;
    `(Z.src`${RS}`.attr("alt","").attr("aria-hidden","true").style`
          width:100%;
          height:100%;
          display:block;
          object-fit:contain;
        `(),n?Y.style`
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
          `(n):"")}),kS=t=>typeof t!="number"||Number.isNaN(t)?"":t.toFixed(1).replace(/\.0$/,""),oc=()=>({gameId:"",rating:null,review:"",videos:[],isVisible:!0});let ac=!1,ci=null,ui=null,lr=null,Qr=null,cr=null,Yr=null;const gx=Qn(t=>$0(t)),$0=O(t=>{$0.inputs(([g])=>{t=K(g)});const e=()=>ft().then(t).catch(g=>console.error("Failed to sign out",g));let n=ci,r=ui,s=!1,i=null,o=oc(),l=!1,c=!1,u="",h={};const f=ye(()=>{}),m=()=>{lr&&lr(),Qr&&Qr(),r=null,ui=null,f();const g=Bk();lr=(g==null?void 0:g.unsubscribe)||null;const y=g.subscribe(ye(E=>{r=E,ui=E}));Qr=()=>y.unsubscribe()},v=()=>{cr&&cr(),Yr&&Yr(),n=null,ci=null,f();const g=Us();cr=(g==null?void 0:g.unsubscribe)||null;const y=g.subscribe(ye(E=>{n=E,ci=E}));Yr=()=>y.unsubscribe()},T=()=>zk().then(g=>{r=g,ui=g,f()}).catch(g=>{console.error("Failed to refresh game ratings",g),u="Saved, but failed to refresh ratings. Reload the page to confirm.",f()}),R=()=>Sd().then(g=>{n=g,ci=g,f()}).catch(g=>{console.error("Failed to refresh games",g)}),P=()=>n!==null?Promise.resolve(n):(f(),R().then(()=>n||[])),S=()=>{i=null,o={...oc()},u="",h={},s=!0,f(),O.promise=P()},k=g=>{const y=g.id||g.gameId;i=y||null,o={id:y,gameId:g.gameId||g.id||"",rating:typeof g.rating=="number"?g.rating:null,review:g.review||"",videos:Array.isArray(g.videos)?g.videos:[],isVisible:g.isVisible!==!1},u="",h={},s=!0,f(),O.promise=P()},L=()=>{l||c||(i=null,o=oc(),h={},u="",s=!1,f())},G=()=>{const g={};o.gameId||(g.gameId="Game is required."),o.rating===null||Number.isNaN(Number(o.rating))?g.rating="Rating is required.":(Number(o.rating)<0||Number(o.rating)>10)&&(g.rating="Rating must be between 0 and 10."),h=g;const y=Object.values(g);return y.length?y[0]:""},N=()=>{if(l)return;const g=G();if(g){u=g,f();return}l=!0,u="",f(),O.promise=Hk({...o,id:o.gameId,rating:Number(o.rating),review:(o.review||"").trim(),videos:xS(o.videos),isVisible:o.isVisible!==!1}).then(()=>(l=!1,L(),T())).catch(y=>{console.error("Failed to save game rating",y),u="Failed to save rating. Check the fields and try again.",f()}).finally(()=>{l=!1,f()})},F=()=>{!i||c||confirm("Delete this game rating?")&&(c=!0,u="",f(),O.promise=qk(i).then(()=>(c=!1,L(),T())).catch(g=>{console.error("Failed to delete game rating",g),u="Failed to delete rating.",f()}).finally(()=>{c=!1,f()}))};ac||(ac=!0,lr||m(),cr||v()),zt(()=>{lr&&lr(),Qr&&Qr(),cr&&cr(),Yr&&Yr(),lr=null,Qr=null,cr=null,Yr=null,ci=null,ui=null,ac=!1});const b=()=>r===null?j.style`opacity:0.7;`("Loading ratings..."):r.length?r.map(g=>B0({rating:g,game:SS(g,n||[]),onClick:k}).key(g.id||g.gameId)):"";return Ce(Ge(()=>St(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(ze("⭐ Game Ratings"),q.type`button`.class`admin-pill-button`.onClick(S)("Add")),_.class`admin-crud-card`(g=>u&&!s?se.style`color:#f6c177;`(u):"",_.class`admin-crud-list`(g=>b()),_.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(z.href`../ratings.html`.class`admin-secondary-button`("View Public Ratings"))),g=>s?j0({isEditing:!!i,editRating:o,games:n||[],isGamesLoaded:n!==null,errorMessage:u,fieldErrors:h,isSaving:l,isDeleting:c,onChange:y=>{o=y,h={...h,gameId:y.gameId?"":h.gameId,rating:y.rating!==null&&!Number.isNaN(Number(y.rating))?"":h.rating},f()},onSave:N,onDelete:F,onCancel:L}):""))}),B0=O(({game:t,rating:e,onClick:n})=>(B0.inputs(r=>{[{game:t,rating:e,onClick:n}]=r,n=K(n)}),q.type`button`.class`admin-crud-row`.onClick(()=>n(e))(r=>t!=null&&t.imageUrl?Z.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",s=>t.title||"Game image"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),_(Wn(r=>(t==null?void 0:t.title)||e.gameId||e.id||"Untitled game"),_.style`margin-top:0.15em;opacity:0.74;`(j(r=>[(t==null?void 0:t.manufacturer)||"",t!=null&&t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),_.class`admin-rating-badge-cell`.style`display:grid;justify-items:end;gap:0.25em;`(r=>typeof(e==null?void 0:e.rating)=="number"&&!Number.isNaN(e.rating)?Ud({rating:e.rating}):j.style`opacity:0.72;`("Not rated"),r=>(e==null?void 0:e.isVisible)===!1?j.style`opacity:0.72;`("Hidden"):"")))),j0=O(({isEditing:t,editRating:e,games:n,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:l,onChange:c,onSave:u,onDelete:h,onCancel:f})=>{j0.inputs(k=>{[{isEditing:t,editRating:e,games:n,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:l,onChange:c,onSave:u,onDelete:h,onCancel:f}]=k,c=K(c),u=K(u),h=K(h),f=K(f)});const m=k=>{c({...e,...k})},v=(k,L)=>{var N,F;const G=[...e.videos||[]];G[k]={url:((N=G[k])==null?void 0:N.url)||"",description:((F=G[k])==null?void 0:F.description)||"",...L},m({videos:G})},T=()=>{m({videos:[...e.videos||[],{url:"",description:""}]})},R=k=>{m({videos:(e.videos||[]).filter((L,G)=>G!==k)})},P=k=>i[k]?"#f87171":"rgba(255,255,255,0.2)",S=k=>i[k]?"#fca5a5":"inherit";return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(ze.style`margin:0;`(k=>t?"Edit Rating":"Add Rating"),j.style`opacity:0.72;`("Create or update the public rating for this game.")),q.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),k=>s?se.style`color:#f6c177;`(s):"",k=>Object.values(i).filter(Boolean).length?_.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(i).filter(Boolean).map(L=>j(L))):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(re.attr("style.color",k=>S("gameId"))("Game"),k=>cl({value:e.gameId||"",games:n,isLoaded:r,fieldError:i.gameId,onChange:L=>m({gameId:L})}).key(`${r?"loaded":"loading"}-${n.length}`),re.attr("style.color",k=>S("rating"))("Rating"),ce.type`number`.attr("min","0").attr("max","10").attr("step","0.1").value(k=>e.rating??"").onInput(k=>{var L;m({rating:PS((L=k==null?void 0:k.target)==null?void 0:L.value)})}).attr("aria-invalid",k=>i.rating?"true":"false").attr("title",k=>i.rating||"").attr("style.borderColor",k=>P("rating"))(),re("Review"),Ss.value(k=>e.review||"").onInput(k=>{var L;m({review:((L=k==null?void 0:k.target)==null?void 0:L.value)||""})})(),re("Videos"),_.style`display:grid;gap:0.6em;`(k=>(e.videos||[]).length?(e.videos||[]).map((L,G)=>_.style`display:grid;gap:0.45em;border:1px solid rgba(255,255,255,0.12);border-radius:0.55em;padding:0.65em;background:rgba(0,0,0,0.18);`(_.style`display:grid;grid-template-columns:1fr auto;gap:0.45em;align-items:center;`(ce.type`url`.style`width:100%;`.value(N=>L.url||"").attr("placeholder","YouTube video URL").onInput(N=>{var F;v(G,{url:((F=N==null?void 0:N.target)==null?void 0:F.value)||""})})(),N=>L.url?z.href`${L.url}`.class`admin-secondary-button`.style`text-decoration:none;`.attr("target","_blank").attr("rel","noopener noreferrer").attr("title","Open video link")("🔗"):""),ce.type`text`.style`width:100%;`.value(N=>L.description||"").attr("placeholder","Description").onInput(N=>{var F;v(G,{description:((F=N==null?void 0:N.target)==null?void 0:F.value)||""})})(),_.style`display:flex;justify-content:flex-end;`(q.type`button`.class`admin-secondary-button`.onClick(()=>R(G))("🗑️ Remove")))):j.style`opacity:0.72;`("No videos linked."),q.type`button`.class`admin-secondary-button`.onClick(T)("Add Video")),re("Visible on public page"),re.style`display:flex;gap:0.5em;align-items:center;`(ce.type`checkbox`.attr("checked",k=>e.isVisible!==!1?"checked":null).onChange(k=>{var L;m({isVisible:!!((L=k==null?void 0:k.target)!=null&&L.checked)})})(),Y(k=>e.isVisible!==!1?"Visible":"Hidden"))),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",k=>o?"disabled":null).onClick(u)(k=>o?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",k=>o?"disabled":null).onClick(f)("Cancel")),k=>t?q.type`button`.class`admin-danger-button`.attr("disabled",L=>l?"disabled":null).onClick(h)(L=>l?"🗑️ Deleting...":"🗑️ Delete"):"")))}),SS=(t,e)=>{const n=t.gameId||t.id;return e.find(r=>r.id===n)||null},xS=t=>Array.isArray(t)?t.map(e=>({url:((e==null?void 0:e.url)||"").trim(),description:((e==null?void 0:e.description)||"").trim()})).filter(e=>e.url||e.description):[],PS=t=>{if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},lc=()=>({name:"",logoUrl:"",opinions:""});let cc=!1,ur=null,dr=null,Xr=null;const yx=Qn(t=>z0(t)),z0=O(t=>{z0.inputs(([L])=>{t=K(L)});const e=()=>ft().then(t).catch(L=>console.error("Failed to sign out",L));let n=ur,r=!1,s=null,i=lc(),o=!1,l=!1,c="",u={};const h=()=>{dr&&dr(),Xr&&Xr(),n=null,ur=null;const L=l0();dr=(L==null?void 0:L.unsubscribe)||null;const G=L.subscribe(N=>{n=N,ur=N});Xr=()=>G.unsubscribe()},f=()=>Lk().then(L=>{n=L,ur=L}).catch(L=>{console.error("Failed to refresh manufacturers",L),c="Saved, but failed to refresh manufacturers. Reload the page to confirm."});O.promise=f();const m=(L,G)=>{const N=n||ur||[],F={...N.find(y=>y.id===L)||{},...G,id:L},b=N.some(y=>y.id===L),g=VS(b?N.map(y=>y.id===L?F:y):[...N,F]);n=g,ur=g},v=()=>{s=null,i=lc(),c="",u={},r=!0},T=L=>{s=L.id,i={id:L.id,name:L.name||"",logoUrl:L.logoUrl||"",opinions:L.opinions||""},c="",u={},r=!0},R=()=>{o||l||(s=null,i=lc(),c="",u={},r=!1)},P=()=>{const L={},G=(i.id||"").trim();s&&!G&&(L.id="Manufacturer ID is required."),s&&G.includes("/")&&(L.id="Manufacturer ID cannot include /."),s&&G!==s&&(n||[]).some(F=>F.id===G)&&(L.id="A manufacturer with this ID already exists."),i.name.trim()||(L.name="Manufacturer Name is required."),u=L;const N=Object.values(L);return N.length?N[0]:""},S=()=>{if(o)return;const L=P();if(L){c=L;return}o=!0,c="",u={};const G={...i,id:s?(i.id||"").trim():void 0,name:i.name.trim(),logoUrl:(i.logoUrl||"").trim(),opinions:(i.opinions||"").trim()},N=s;return Ok(G).then(F=>{const b=G.id||N||(F==null?void 0:F.id);if(b&&m(b,G),N&&b&&b!==N)return Dp(N)}).then(()=>(o=!1,R(),f())).catch(F=>{console.error("Failed to save manufacturer",F),c="Failed to save manufacturer. Check the fields and try again."}).finally(()=>{o=!1})},k=()=>{!s||l||confirm("Delete this manufacturer? Existing games may still reference it.")&&(l=!0,c="",O.promise=Dp(s).then(()=>(l=!1,R(),f())).catch(L=>{console.error("Failed to delete manufacturer",L),c="Failed to delete manufacturer."}).finally(()=>{l=!1}))};return cc||(cc=!0,dr||h()),zt(()=>{dr&&dr(),Xr&&Xr(),dr=null,Xr=null,ur=null,cc=!1}),Ce(Ge(()=>St(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(ze("🏭 Manufacturers Database"),q.type`button`.class`admin-pill-button`.onClick(v)("Add")),_.class`admin-crud-card`(L=>c&&!r?se.style`color:#f6c177;`(c):"",_.class`admin-crud-list`(L=>n===null?j.style`opacity:0.7;`("Loading manufacturers..."):n.length?n.map(G=>H0({manufacturer:G,onClick:T}).key(G.id)):j.style`opacity:0.7;`("No manufacturers found. Use Add Manufacturer to create the first one.")),_.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(z.href`../admin/games.html`.class`admin-secondary-button`("Games Admin"))),L=>r?G0({isEditing:!!s,editManufacturer:i,errorMessage:c,fieldErrors:u,isSaving:o,isDeleting:l,onChange:G=>{var N,F;i=G,u={...u,id:(N=G.id)!=null&&N.trim()?"":u.id,name:(F=G.name)!=null&&F.trim()?"":u.name}},onSave:S,onDelete:k,onCancel:R}):""))}),VS=t=>[...t].sort((e,n)=>String(e.name||"").localeCompare(String(n.name||""),void 0,{sensitivity:"base"})),H0=O(({manufacturer:t,onClick:e})=>(H0.inputs(n=>{[{manufacturer:t,onClick:e}]=n,e=K(e)}),q.type`button`.class`admin-crud-row`.onClick(()=>e(t))(n=>t.logoUrl?Z.class`admin-crud-thumb`.src`${t.logoUrl}`.attr("alt",r=>t.name||"Manufacturer logo"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`(r=>NS(t.name)),_(Wn(n=>t.name||"Untitled manufacturer"),_.style`margin-top:0.15em;opacity:0.74;`(j(n=>t.opinions||"No opinions"))),j.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Y.style`font-size:0.78em;text-transform:uppercase;`("Manufacturer ID"),Y(n=>t.id))))),NS=(t="")=>(t.trim().charAt(0)||"M").toUpperCase(),q0=t=>`${t} manufacturer logo`,DS=t=>`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(q0(t))}`,G0=O(({isEditing:t,editManufacturer:e,errorMessage:n,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:l,onDelete:c,onCancel:u})=>{G0.inputs(T=>{[{isEditing:t,editManufacturer:e,errorMessage:n,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:l,onDelete:c,onCancel:u}]=T,o=K(o),l=K(l),c=K(c),u=K(u)});const h=T=>o({...e,...T}),f=T=>r[T]?"#f87171":"rgba(255,255,255,0.2)",m=T=>r[T]?"#fca5a5":"inherit",v=T=>{var R;T.key!=="Enter"||T.shiftKey||T.metaKey||T.ctrlKey||T.altKey||String(((R=T.target)==null?void 0:R.tagName)||"").toLowerCase()!=="textarea"&&(T.preventDefault(),l())};return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`.onKeyDown(v)(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(ze.style`margin:0;`(t?"Edit Manufacturer":"Add Manufacturer"),j.style`opacity:0.72;`("Manage the canonical manufacturer record.")),q.type`button`.class`admin-secondary-button`.onClick(u)("Cancel")),T=>n?se.style`color:#f6c177;`(n):"",T=>Object.values(r).filter(Boolean).length?_.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(r).filter(Boolean).map(R=>j(R))):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(T=>t?[re.attr("style.color",R=>m("id"))("Manufacturer ID"),_.style`display:grid;gap:0.28em;`(ce.type`text`.value(R=>e.id||"").onInput(R=>{var P;h({id:((P=R==null?void 0:R.target)==null?void 0:P.value)||""})}).attr("aria-invalid",R=>r.id?"true":"false").attr("title",R=>r.id||"").attr("style.borderColor",R=>f("id"))(),j.style`color:#f6c177;line-height:1.35;`("Changing this value can change or break links to this manufacturer."))]:"",re.attr("style.color",T=>m("name"))("Manufacturer Name"),ce.type`text`.value(T=>e.name||"").onInput(T=>{var R;h({name:((R=T==null?void 0:T.target)==null?void 0:R.value)||""})}).attr("aria-invalid",T=>r.name?"true":"false").attr("title",T=>r.name||"").attr("style.borderColor",T=>f("name"))(),re("Logo URL"),_.style`display:grid;gap:0.5em;`(ce.type`url`.value(T=>e.logoUrl||"").onInput(T=>{var R;h({logoUrl:((R=T==null?void 0:T.target)==null?void 0:R.value)||""})})(),T=>(e.name||"").trim()?z.href`${DS(e.name||"")}`.class`admin-inline-edit-link`.attr("target","_blank").attr("rel","noopener noreferrer").style`justify-self:start;`.attr("title",R=>q0(e.name||""))("google images"):j.style`opacity:0.72;`("Add a manufacturer name to view Google Images.")),re("Opinions"),Ss.value(T=>e.opinions||"").onInput(T=>{var R;h({opinions:((R=T==null?void 0:T.target)==null?void 0:R.value)||""})})()),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",T=>s?"disabled":null).onClick(l)(T=>s?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",T=>s?"disabled":null).onClick(u)("Cancel")),T=>t?q.type`button`.class`admin-danger-button`.attr("disabled",R=>i?"disabled":null).onClick(c)(R=>i?"🗑️ Deleting...":"🗑️ Delete"):"")))}),uc=()=>({shortName:"",longName:""});let dc=!1,Zr=null,En=null,An=null;const _x=Qn(t=>W0(t)),W0=O(t=>{W0.inputs(([b])=>{t=K(b)});let e=Zr,n=!1,r=null,s=uc(),i=!1,o=!1,l="",c=!1,u=null,h=null;const f=ye(()=>{}),m=()=>ft().then(t).catch(b=>console.error("Failed to sign out",b)),v=()=>{En==null||En(),An==null||An(),e=null,Zr=null;const b=ro();En=(b==null?void 0:b.unsubscribe)||null;const g=b.subscribe(y=>{Array.isArray(y)&&(e=y,Zr=e,f())});An=()=>g.unsubscribe()},T=()=>Fk().then(b=>{e=b,Zr=e,f()}),R=()=>{r=null,s={...uc(),order:(e||[]).length},l="",n=!0,f()},P=b=>{r=b.id,s={id:b.id,shortName:b.shortName||"",longName:b.longName||"",order:b.order},l="",n=!0,f()},S=()=>{i||o||(n=!1,r=null,s=uc(),f())},k=()=>{const b={};s.shortName.trim()||(b.shortName="Short form is required."),s.longName.trim()||(b.longName="Long form is required.");const g=(s.id||"").trim();if(r&&!g&&(b.id="Tier ID is required."),r&&g.includes("/")&&(b.id="Tier ID cannot include /."),r&&g!==r&&(e||[]).some(E=>E.id===g)&&(b.id="A tier with this ID already exists."),l=Object.values(b)[0]||"",l||i)return f();i=!0,f();const y={...s,id:r?g:void 0};O.promise=Uk(y).then(()=>r&&g!==r?Mp(r):void 0).then(()=>(i=!1,S(),T())).catch(E=>{console.error("Failed to save game tier",E),l="Failed to save game tier.",f()}).finally(()=>{i=!1,f()})},L=()=>{!r||o||!confirm("Delete this game tier? Existing games may still reference it.")||(o=!0,f(),O.promise=Mp(r).then(()=>(o=!1,S(),T())).catch(b=>{console.error("Failed to delete game tier",b),l="Failed to delete game tier.",f()}).finally(()=>{o=!1,f()}))},G=()=>{document.querySelectorAll('[data-tier-drop-target="true"]').forEach(b=>{b.removeAttribute("data-tier-drop-target"),b.style.boxShadow=""})},N=(b,g)=>{if(!e)return;const y=[...e],E=y.findIndex(C=>C.id===b);if(E<0)return;const[A]=y.splice(E,1);y.splice(Math.max(0,Math.min(g,y.length)),0,A),!y.every((C,I)=>{var ue;return C.id===((ue=e==null?void 0:e[I])==null?void 0:ue.id)})&&(e=y.map((C,I)=>({...C,order:I})),Zr=e,u=null,c=!0,l="",f(),O.promise=$k(y.map(C=>C.id)).catch(C=>(console.error("Failed to save game tier order",C),l="The new tier order could not be saved. Please try again.",T())).finally(()=>{c=!1,f()}))},F=(b,g)=>{if(c||b.button!==0)return;b.preventDefault();const y=b.currentTarget.closest("[data-tier-id]"),E=y==null?void 0:y.closest("[data-tier-list]");if(!y||!E)return;h==null||h(),u=null;const A=y.getBoundingClientRect(),C=E.getBoundingClientRect(),I=b.clientY-A.top,ue=y.cloneNode(!0);ue.removeAttribute("data-tier-id"),ue.style.position="fixed",ue.style.left=`${C.left}px`,ue.style.width=`${C.width}px`,ue.style.height=`${A.height}px`,ue.style.margin="0",ue.style.zIndex="10000",ue.style.pointerEvents="none",ue.style.opacity="0.92",ue.style.boxSizing="border-box",ue.style.boxShadow="0 12px 30px rgba(0,0,0,0.5)",document.body.appendChild(ue),y.style.opacity="0.28";const $=nt=>{const pt=Math.max(C.top,Math.min(nt-I,C.bottom-A.height));ue.style.top=`${pt}px`},le=nt=>{G();const pt=Array.from(E.querySelectorAll("[data-tier-id]")).filter(dn=>dn!==y),Tt=pt.findIndex(dn=>nt<dn.getBoundingClientRect().top+dn.getBoundingClientRect().height/2);u=Tt<0?pt.length:Tt;const un=Tt<0?pt[pt.length-1]:pt[Tt];un&&(un.setAttribute("data-tier-drop-target","true"),un.style.boxShadow=Tt<0?"inset 0 -4px 0 #f6c177":"inset 0 4px 0 #f6c177")},Oe=()=>{G(),ue.remove(),y.style.opacity="",window.removeEventListener("pointermove",Yn),window.removeEventListener("pointerup",Xn),window.removeEventListener("pointercancel",js),h=null},Yn=nt=>{nt.preventDefault(),$(nt.clientY),le(Math.max(C.top,Math.min(nt.clientY,C.bottom)))},Xn=nt=>{const pt=nt.clientX>=C.left&&nt.clientX<=C.right&&nt.clientY>=C.top&&nt.clientY<=C.bottom,Tt=u;Oe(),u=null,pt&&Tt!==null&&N(g,Tt)},js=()=>{Oe(),u=null};h=js,$(b.clientY),le(b.clientY),window.addEventListener("pointermove",Yn,{passive:!1}),window.addEventListener("pointerup",Xn),window.addEventListener("pointercancel",js)};return dc||(dc=!0,v()),zt(()=>{h==null||h(),En==null||En(),An==null||An(),En=null,An=null,Zr=null,dc=!1}),Ce(Ge(()=>St(m)),_.class`admin-crud-page`(_.class`admin-crud-header`(ze("🏷️ Game Tiers Database"),q.type`button`.class`admin-pill-button`.onClick(R)("Add")),_.class`admin-crud-card`(se.style`margin-top:0;opacity:0.78;`("Manage edition abbreviations and their full names. Drag the handle to reorder tiers."),b=>c?se.style`color:#f6c177;`("Saving tier order..."):"",b=>l&&!n?se.style`color:#f87171;`(l):"",_.class`admin-crud-list`.attr("data-tier-list","true")(b=>e===null?j.style`opacity:0.7;`("Loading game tiers..."):e.length?e.map(g=>_.class`admin-crud-row`.attr("data-tier-id",g.id)(q.type`button`.attr("aria-label",`Drag ${g.shortName||"tier"} to reorder`).attr("title","Drag to reorder").style`cursor:grab;font-size:1.35em;background:transparent;border:0;color:inherit;padding:0.5em;touch-action:none;user-select:none;`.onPointerDown(y=>F(y,g.id))("☰"),q.type`button`.style`display:contents;color:inherit;`.onClick(()=>P(g))(_.class`admin-crud-thumb admin-crud-thumb-placeholder`(y=>g.shortName||"?"),_(Wn(y=>g.shortName||"Untitled tier"),_.style`margin-top:0.15em;opacity:0.74;`(j(y=>g.longName||"No long form"))))).key(`${g.id}-${g.order??"unordered"}`)):j.style`opacity:0.7;`("No game tiers found. Use Add to create the first one.")),_.style`margin-top:1em;`(z.href`/admin/games.html`.class`admin-secondary-button`("Games Admin"))),b=>n?_.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`(_.style`display:flex;justify-content:space-between;gap:1em;`(ze.style`margin:0;`(r?"Edit Game Tier":"Add Game Tier"),q.type`button`.class`admin-secondary-button`.onClick(S)("Cancel")),g=>l?se.style`color:#f6c177;`(l):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(g=>r?[re("Tier ID"),ce.type`text`.value(y=>s.id||"").onInput(y=>{s={...s,id:y.target.value},f()})()]:"",re("Short Form"),ce.type`text`.placeholder`LE`.value(g=>s.shortName).onInput(g=>{s={...s,shortName:g.target.value},f()})(),re("Long Form"),ce.type`text`.placeholder`Limited Edition`.value(g=>s.longName).onInput(g=>{s={...s,longName:g.target.value},f()})()),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;`(q.type`button`.class`admin-pill-button`.onClick(k)(g=>i?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.onClick(S)("Cancel")),g=>r?q.type`button`.class`admin-danger-button`.onClick(L)(y=>o?"🗑️ Deleting...":"🗑️ Delete"):""))):""))});let Jp=!1,ko=null;const bx=Qn(t=>J0(t)),J0=O(t=>{let e=ko,{date:n,time:r}=e===null?{date:"",time:""}:jp(e);J0.inputs(([l])=>{t=K(l)});function s(){if(e===null)return;const l=jp(e);n=l.date,r=l.time}Jp||(Jp=!0,O.promise=ol().then(l=>{typeof l=="number"&&(e=l,ko=l,s(),console.log("nextMeetupDate",{nextMeetupDate:e}))}).catch(l=>{console.error("Failed to load next meetup date",l)}));const i=()=>ft().then(t).catch(l=>{console.error("Failed to sign out",l)}),o=()=>{if(e!==null)return Pk(e).then(()=>{ko=e,alert("saved")}).catch(l=>{console.error("Failed to save meetup date",l)})};return Ce(Ge(()=>St(i)),_.class`admin-crud-page`(_.class`admin-crud-header`(ze(Z.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,"📅 Meeting Tools")),_.class`admin-crud-card`(l=>e===null?_.style`opacity:0.7;`("Loading saved meetup time..."):v0({nextMeetupDate:e,date:n,time:r,onDate:c=>{e=c,ko=c,s()},onSave:o}))))}),MS="https://pinside.com/pinball/community/pinsiders/thecapn/collection/history",hc=()=>({gameId:"",tierId:"",title:"",dateAddedToCollection:"",dateRemovedFromCollection:"",notes:"",isVisible:!0,pinsideUrl:"",pinsideId:"",source:""});let fc=!1,di=null,hr=null,es=null,hi=null,fr=null,ts=null,So=null,Kt=null,Cn=null;const wx=Qn(t=>K0(t)),K0=O(t=>{K0.inputs(([$])=>{t=K($)});const e=()=>ft().then(t).catch($=>console.error("Failed to sign out",$));let n=!1,r=!1,s=!1,i="",o="",l="",c=!1,u={},h=!1,f=null,m=hc(),v=di,T=hi,R=So;const P=ye(()=>{}),S=()=>{hr&&hr(),es&&es(),v=null,di=null,i="",P();const $=Yk();hr=($==null?void 0:$.unsubscribe)||null;const le=$.subscribe(Oe=>{v=Oe,di=Oe,P()});es=()=>le.unsubscribe()},k=()=>{fr&&fr(),ts&&ts(),T=null,hi=null,P();const $=Us();fr=($==null?void 0:$.unsubscribe)||null;const le=$.subscribe(Oe=>{T=Oe,hi=Oe,P()});ts=()=>le.unsubscribe()},L=()=>{Kt==null||Kt(),Cn==null||Cn(),R=null,So=null;const $=ro();Kt=($==null?void 0:$.unsubscribe)||null;const le=$.subscribe(Oe=>{Array.isArray(Oe)&&(R=Oe,So=R,P())});Cn=()=>le.unsubscribe()},G=()=>u0().then($=>{v=$,di=$,P()}).catch($=>{console.error("Failed to refresh past owned games list",$),i="Saved, but failed to refresh the game list. Reload the page to confirm.",P()}),N=()=>Sd().then($=>{T=$,hi=$,P()}).catch($=>{console.error("Failed to refresh games library",$),i="Saved, but failed to refresh the games library. Reload the page to confirm.",P()}),F=()=>{f=null,m=hc(),i="",u={},h=!0,P()},b=$=>{f=$.id,m={id:$.id,gameId:$.gameId||"",tierId:$.tierId||"",title:"",dateAddedToCollection:iu($.dateAddedToCollection),dateRemovedFromCollection:iu($.dateRemovedFromCollection),imageUrl:$.imageUrl||"",manufacturer:$.manufacturer||"",yearReleased:Yp($.yearReleased),notes:$.notes||"",isVisible:$.isVisible!==!1,pinsideUrl:$.pinsideUrl||"",pinsideId:$.pinsideId||"",source:$.source||""},i="",u={},h=!0,P()},g=()=>{n||r||(f=null,m=hc(),i="",u={},h=!1,P())},y=()=>{const $={};m.gameId||($.gameId="Game is required.");const le=Od(m.gameId||"",T||[],R||[]);return le.length&&!le.some(Oe=>Oe.id===m.tierId)&&($.tierId="Select the tier for this past game."),m.yearReleased!==null&&typeof m.yearReleased<"u"&&Number.isNaN(Number(m.yearReleased))&&($.yearReleased="Year must be numeric."),u=$,Object.values($)[0]||""},E=()=>{if(n)return;const $=y();if($){i=$,P();return}n=!0,i="",u={},P(),O.promise=d0({...m,id:f||void 0,gameId:(m.gameId||"").trim(),tierId:(m.tierId||"").trim(),title:"",imageUrl:(m.imageUrl||"").trim(),manufacturer:(m.manufacturer||"").trim(),notes:(m.notes||"").trim(),pinsideUrl:(m.pinsideUrl||"").trim(),pinsideId:(m.pinsideId||"").trim(),source:(m.source||"").trim(),yearReleased:Yp(m.yearReleased),isVisible:m.isVisible!==!1}).then(()=>(n=!1,g(),G())).catch(le=>{console.error("Failed to save past owned game",le),i="Failed to save game. Check the fields and try again.",P()}).finally(()=>{n=!1,P()})},A=()=>{!f||r||confirm("Delete this past owned game?")&&(r=!0,i="",P(),O.promise=Zk(f).then(()=>(r=!1,g(),G())).catch($=>{console.error("Failed to delete past owned game",$),i="Failed to delete game.",P()}).finally(()=>{r=!1,P()}))},C=$=>{if(!$.length){o="No Pinside games were found. Paste the copied Pinside history text and try again.",P();return}s=!0,o=`Found ${$.length} Pinside game${$.length===1?"":"s"}. Syncing new items only...`,P(),O.promise=eS($,T||[]).then(le=>(o=`Sync complete. Added ${le.added}; skipped ${le.skipped} already-present item${le.skipped===1?"":"s"}.`,N().then(G))).catch(le=>{console.error("Failed to sync Pinside games",le),o="Sync failed while writing to Firestore. Check permissions and try again.",P()}).finally(()=>{s=!1,P()})},I=()=>{const $=$S(l);C($)},ue=()=>{c=!c,P()};return fc||(fc=!0,hr||S(),fr||k(),Kt||L()),zt(()=>{hr&&hr(),es&&es(),fr&&fr(),ts&&ts(),Kt==null||Kt(),Cn==null||Cn(),hr=null,es=null,fr=null,ts=null,Kt=null,Cn=null,fc=!1,di=null,hi=null,So=null}),Ce(Ge(()=>St(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(ze("📜 Past Games Owned"),_.style`display:flex;gap:0.75em;align-items:center;flex-wrap:wrap;`(j.style`opacity:0.72;`($=>v===null?"Loading count...":`${v.length} past game${v.length===1?"":"s"}`),q.type`button`.class`admin-pill-button`.onClick(F)("Add"))),_.class`admin-crud-card`.style`margin-bottom:1em;`(_.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(q.type`button`.class`admin-secondary-button`.attr("title","Import missing past-owned games from pasted Pinside collection history without duplicating existing entries.").attr("aria-expanded",$=>c?"true":"false").onClick(ue)("Pinside Sync")),$=>c?_.style`margin-top:0.9em;`(se.style`margin-top:0;opacity:0.78;`("Paste copied Pinside history text to add missing past-owned games. Imported games are created in the games database and linked here."),_.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(z.href`${MS}`.class`admin-secondary-button`.attr("target","_blank").attr("rel","noopener noreferrer")("Open Pinside History"),q.type`button`.class`admin-pill-button`.attr("disabled",le=>s?"disabled":null).onClick(I)("Sync Pasted Text")),le=>o?se.style`color:#f6c177;`(o):"",Ss.placeholder`Paste copied Pinside history text here.`.value(le=>l).onInput(le=>{var Oe;l=((Oe=le==null?void 0:le.target)==null?void 0:Oe.value)||"",P()}).style`margin-top:0.8em;width:100%;min-height:120px;`()):""),_.class`admin-crud-card`(se.style`margin-top:0;opacity:0.78;`("Manage the Firestore pastOwnedGames collection."),$=>i&&!h?se.style`color:#f6c177;`(i):"",_.class`admin-crud-list`($=>v===null?j.style`opacity:0.7;`("Loading games..."):v.length?US(v).map(le=>Q0({game:LS(le,T||[]),onClick:b}).key(le.id)):j.style`opacity:0.7;`("No past owned games found. Use Add or paste Pinside history text."))),$=>h?Y0({isEditing:!!f,editGame:m,gameLibrary:T||[],gameTiers:R||[],isGameTiersLoaded:R!==null,isGameLibraryLoaded:T!==null,errorMessage:i,fieldErrors:u,isSaving:n,isDeleting:r,onChange:le=>{m=le,u={...u,gameId:le.gameId?"":u.gameId,tierId:le.tierId?"":u.tierId},P()},onSave:E,onDelete:A,onCancel:g}):""))}),Q0=O(({game:t,onClick:e})=>(Q0.inputs(n=>{[{game:t,onClick:e}]=n,e=K(e)}),q.type`button`.class`admin-crud-row`.onClick(()=>e(t))(n=>t.imageUrl?Z.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",r=>t.title||"Game image"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),_(Wn(n=>t.title||"Untitled game"),_.style`margin-top:0.15em;opacity:0.74;`(j(n=>[t.manufacturer||"",t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year",n=>t.gameId&&t.isMissingGame?Y.style`color:#f87171;font-weight:700;`(` · Missing game: ${t.gameId}`):"",n=>t.source==="pinside"?" · Pinside":""))),j.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Y.style`font-size:0.78em;text-transform:uppercase;`("Past Owned"),Y(n=>[Xp(t.dateAddedToCollection),t.dateRemovedFromCollection?` to ${Xp(t.dateRemovedFromCollection)}`:"",t.isVisible===!1?" · Hidden":""].join("")))))),LS=(t,e)=>{const n=OS(e,t);return{...t,title:(n==null?void 0:n.title)||t.title||t.sourceTitle||"",imageUrl:FS(n,t),manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null,isMissingGame:!!(t.gameId&&!n)}},OS=(t,e)=>pc(t,e.gameId)||pc(t,e.title)||pc(t,e.sourceTitle)||null,pc=(t,e)=>{const n=su(e),r=mc(e);return n&&(t.find(s=>s.id===e)||t.find(s=>su(s.id)===n)||t.find(s=>mc(s.id)===r)||t.find(s=>mc(s.title)===r))||null},su=t=>String(t||"").trim().toLowerCase(),mc=t=>su(t).replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),FS=(t,e)=>String((t==null?void 0:t.imageUrl)||(t==null?void 0:t.gameImageUrl)||(t==null?void 0:t.backglassUrl)||(t==null?void 0:t.image)||e.imageUrl||e.gameImageUrl||e.backglassUrl||e.image||"").trim(),US=t=>[...t].sort((e,n)=>{const r=(e.gameId||"").localeCompare(n.gameId||"",void 0,{sensitivity:"base"});return r||(e.id||"").localeCompare(n.id||"",void 0,{sensitivity:"base"})}),Y0=O(({isEditing:t,editGame:e,gameLibrary:n,gameTiers:r,isGameLibraryLoaded:s,isGameTiersLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:v})=>{Y0.inputs(R=>{[{isEditing:t,editGame:e,gameLibrary:n,gameTiers:r,isGameLibraryLoaded:s,isGameTiersLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:v}]=R,h=K(h),f=K(f),m=K(m),v=K(v)});const T=R=>{h({...e,...R})};return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(ze.style`margin:0;`(t?"Edit Past Game":"Add Past Game"),j.style`opacity:0.72;`(t?"Update this past owned entry.":"Create a new past owned entry.")),q.type`button`.class`admin-secondary-button`.onClick(v)("Cancel")),R=>o?se.style`color:#f6c177;`(o):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(re("Game"),R=>cl({value:e.gameId||"",games:n,isLoaded:s,fieldError:l.gameId,editSelectedGame:!0,onChange:P=>T({gameId:P,tierId:""})}).key(`${s?"loaded":"loading"}-${n.length}`),R=>Fd({gameId:e.gameId||"",tierId:e.tierId||"",games:n,gameTiers:r,isLoaded:i,fieldError:l.tierId,radioName:"past-game-tier",onChange:P=>T({tierId:P})}).key(`${e.gameId||"no-game"}-${i?"loaded":"loading"}-${r.length}`),re("Date Added to Collection"),ce.type`date`.value(R=>e.dateAddedToCollection||"").onInput(R=>{var P;T({dateAddedToCollection:((P=R==null?void 0:R.target)==null?void 0:P.value)||""})})(),re("Date Removed from Collection"),ce.type`date`.value(R=>e.dateRemovedFromCollection||"").onInput(R=>{var P;T({dateRemovedFromCollection:((P=R==null?void 0:R.target)==null?void 0:P.value)||""})})(),re("Pinside URL"),ce.type`url`.value(R=>e.pinsideUrl||"").onInput(R=>{var P;T({pinsideUrl:((P=R==null?void 0:R.target)==null?void 0:P.value)||""})})(),re("Notes"),Ss.value(R=>e.notes||"").onInput(R=>{var P;T({notes:((P=R==null?void 0:R.target)==null?void 0:P.value)||""})})(),re("Visible on public page"),re.style`display:flex;gap:0.5em;align-items:center;`(ce.type`checkbox`.attr("checked",R=>e.isVisible!==!1?"checked":null).onChange(R=>{var P;T({isVisible:!!((P=R==null?void 0:R.target)!=null&&P.checked)})})(),Y(R=>e.isVisible!==!1?"Visible":"Hidden"))),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",R=>c?"disabled":null).onClick(f)(R=>c?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",R=>c?"disabled":null).onClick(v)("Cancel")),R=>t?q.type`button`.class`admin-danger-button`.attr("disabled",P=>u?"disabled":null).onClick(m)(P=>u?"🗑️ Deleting...":"🗑️ Delete"):"")))}),$S=t=>{if(!t.trim())return[];const e=BS(t);return e.length?e:jS(t)},BS=t=>{const e=new DOMParser().parseFromString(t,"text/html"),n=Array.from(e.querySelectorAll('a[href*="/pinball/machine/"]')),r=new Map;return n.forEach(s=>{var T;const i=X0(s.textContent||s.getAttribute("title")||"");if(!i||i.length<2)return;const o=s.getAttribute("href")||"",l=o.startsWith("http")?o:`https://pinside.com${o}`,c=s.closest("tr, li, article, .game, .machine, .collection-item")||s.parentElement,u=c==null?void 0:c.querySelector("img"),h=(u==null?void 0:u.getAttribute("src"))||(u==null?void 0:u.getAttribute("data-src"))||"",m=((c==null?void 0:c.textContent)||"").match(/\b(19\d{2}|20\d{2})\b/),v=((T=l.split("/pinball/machine/")[1])==null?void 0:T.split(/[/?#]/)[0])||"";r.set(l,{title:i,pinsideUrl:l,pinsideId:v,imageUrl:h.startsWith("//")?`https:${h}`:h,yearReleased:m?Number(m[1]):null})}),[...r.values()].sort((s,i)=>s.title.localeCompare(i.title,void 0,{sensitivity:"base"}))},jS=t=>{const e=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean),n=[];let r=0;for(;r<e.length;){const s=X0(e[r]||""),i=e[r+1]||"",o=Kp(i);if(!s||!o){r+=1;continue}const l={title:s,manufacturer:o.manufacturer,yearReleased:o.yearReleased};for(r+=2;r<e.length;){const c=e[r];if(Kp(e[r+1]||"")&&!zS(c))break;const h=Qp(c,"Purchased"),f=Qp(c,"Sold");h?l.dateAddedToCollection=h:f&&(l.dateRemovedFromCollection=f),r+=1}n.push(l)}return n},Kp=t=>{const e=t.match(/^(.+),\s*(19\d{2}|20\d{2})$/);return e?{manufacturer:e[1].trim(),yearReleased:Number(e[2])}:null},zS=t=>/^(Purchased|Sold)\s+[A-Za-z]+\s+\d{4}$/i.test(t),Qp=(t,e)=>{const n=t.match(new RegExp(`^${e}\\s+([A-Za-z]+)\\s+(\\d{4})$`,"i"));if(!n)return"";const r=HS.findIndex(s=>s.toLowerCase()===n[1].toLowerCase());return r<0?"":`${n[2]}-${String(r+1).padStart(2,"0")}-01`},HS=["January","February","March","April","May","June","July","August","September","October","November","December"],X0=t=>t.replace(/\s+/g," ").replace(/\b(details|machine|view)\b/gi,"").trim(),Yp=t=>{if(typeof t=="number"&&!Number.isNaN(t))return t;if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},iu=t=>t?typeof t=="string"?t.slice(0,10):typeof t.toDate=="function"?t.toDate().toISOString().slice(0,10):t.seconds?new Date(t.seconds*1e3).toISOString().slice(0,10):"":"",Xp=t=>{const e=iu(t);if(!e)return"No date";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};let xo=null;const qS=()=>window.QRCode?Promise.resolve():xo||(xo=new Promise((t,e)=>{const n=document.createElement("script");n.type="text/javascript",n.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",n.onload=()=>t(),n.onerror=()=>e(new Error("Failed to load QRCode library")),document.head.appendChild(n)}),xo),Z0=O(t=>{const e=`qr-code-${Math.random().toString(36).slice(2,12)}`,n=()=>{window.requestAnimationFrame(s)},r=()=>{const i=window.QRCode;if(!i||!t)return;const o=document.getElementById(e);o&&(o.innerHTML="",new i(o,{text:t,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.CorrectLevel.L}))},s=()=>{qS().then(r).catch(i=>{console.error("Failed to render QR code",i)})};return Z0.inputs(i=>{i[0]!==t&&([t]=i,n())}),sg([t],n),_.id`${e}`.attr("oninit",n).style`display:flex;justify-content:center;align-items:center;margin-top:1em;min-height:300px;`()}),eb=O(({qrUrl:t,onQrUrlChange:e})=>{eb.inputs(r=>{[{qrUrl:t,onQrUrlChange:e}]=r,e=K(e)});const n=r=>{t=r,e(r)};return xa.style`border:0;padding:0;margin:0;`(ce.type`text`.placeholder`paste website address`.value(r=>t).maxLength`1000`.onInput(r=>{n(r.target.value)}),_.style`display:flex;flex-direction:column;align-items:center;gap:0.5em;`(r=>(console.log("qrUrl check display",{qrUrl:t}),t&&Z0(t)),r=>t&&j.style`max-width:300px;overflow-wrap:anywhere;text-align:center;opacity:0.75;line-height:1.3;`(s=>t)))}),Tx=Qn(t=>tb(t)),tb=O(t=>{let e=new URLSearchParams(window.location.search).get("url")||"";tb.inputs(([r])=>{t=K(r)});const n=()=>ft().then(t).catch(r=>{console.error("Failed to sign out",r)});return Ce(Ge(()=>St(n)),_.class`admin-crud-page`(_.class`admin-crud-header`(ze(Z.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,"🔗 QR Maker")),_.class`admin-crud-card`(r=>eb({qrUrl:e,onQrUrlChange:s=>{e=s,console.log("set qrUrl",{qrUrl:e})}}))))}),$s=O(()=>[z.href`/index.html`.class`top-nav-pill`("🏠"),z.href`/meetup.html`.class`top-nav-pill`("🗓️ meetups"),z.href`/lineup.html`.class`top-nav-pill`("⚪️ games"),z.href`/ratings.html`.class`top-nav-pill`("⭐ ratings"),z.href`/index.html#links`.class`top-nav-pill`("🔗 links"),z.href`/index.html#merch`.class`top-nav-pill`("👕 merch & more"),z.href`/index.html#youtube`.class`top-nav-pill`("📺 youtube"),z.href`/index.html#awards`.class`top-nav-pill`("🏆 awards"),z.href`/admin.html`.class`top-nav-pill`("👤")]);let Zp=!1;const GS=O(()=>Zp?"":(Zp=!0,$t(`
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
  `))),Bs=O(()=>Ce(GS(),_.class`public-footer`(_.class`public-footer-inner`(z.href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`("📧 hardypinball@gmail.com"),z.href`#top`.onClick(t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})("⬆️ Top")))));let gc=!1,Rn=null,pr=null,mr=null,gr=null,yr=null,_r=null,br=null,wr=null;const Ix=O((t=null,e=null,n=null,r=null,s=ye(()=>{}))=>{const i=()=>{Rn&&(Rn(),Rn=null),pr&&(pr(),pr=null),mr&&(mr(),mr=null),gr&&(gr(),gr=null),yr&&(yr(),yr=null),_r&&(_r(),_r=null),br&&(br(),br=null),wr&&(wr(),wr=null);const o=Wk();Rn=(o==null?void 0:o.unsubscribe)||null;const l=o.subscribe(T=>{t=T,console.debug("Visible current lineup games",{count:(T==null?void 0:T.length)||0,games:T}),s()});pr=()=>l.unsubscribe();const c=Xk();mr=(c==null?void 0:c.unsubscribe)||null;const u=c.subscribe(T=>{e=T,console.debug("Visible past owned games",{count:(T==null?void 0:T.length)||0,games:T}),s()});gr=()=>u.unsubscribe();const h=Us();yr=(h==null?void 0:h.unsubscribe)||null;const f=h.subscribe(T=>{n=T,console.debug("Current lineup game library",{count:(T==null?void 0:T.length)||0,games:T}),s()});_r=()=>f.unsubscribe();const m=ro();br=(m==null?void 0:m.unsubscribe)||null;const v=m.subscribe(T=>{Array.isArray(T)&&(r=T,s())});wr=()=>v.unsubscribe()};return gc||(gc=!0,Rn||i()),zt(()=>{Rn&&(Rn(),Rn=null),pr&&(pr(),pr=null),mr&&(mr(),mr=null),gr&&(gr(),gr=null),yr&&(yr(),yr=null),_r&&(_r(),_r=null),br&&(br(),br=null),wr&&(wr(),wr=null),gc=!1}),Ce(Ge(()=>$s()),$t(`
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

      .lineup-card-date .lineup-tier-detail {
        color: #fff;
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
    `),_.class`lineup-page`(_.class`lineup-brand-strip`(),_.class`lineup-hero`(Qe.class`lineup-title`("Cary's Current Lineup"),se.class`lineup-subtitle`("A list of my current games.")),o=>{if(t===null||n===null||r===null)return _.class`lineup-results`(_.class`lineup-empty`("Loading current lineup..."));const l=r,c=t.filter(u=>u.isVisible!==!1).map(u=>WS(u,n||[]));return c.length?_.class`lineup-results`(_.class`lineup-grid`(c.map(u=>au({game:u,detail:[Po(u.tierId,l)?Y.class`lineup-tier-detail`(Po(u.tierId,l)):"",`Collected ${YS(u.dateAddedToCollection)}`,ZS(u)].filter(Boolean)}).key(u.id)))):_.class`lineup-results`(_.class`lineup-empty`("No current lineup games are visible yet."))},Rg.class`lineup-section-break`(),Qe.class`lineup-section-title`("Past Games Owned"),o=>{if(e===null||n===null||r===null)return _.class`lineup-results`(_.class`lineup-empty`("Loading past games..."));const l=r,c=e.filter(u=>u.isVisible!==!1).sort(JS).map(u=>KS(u,n||[]));return c.length?_.class`lineup-results`(_.class`lineup-grid`(c.map(u=>au({game:u,detail:[Po(u.tierId,l)?Y.class`lineup-tier-detail`(Po(u.tierId,l)):"",XS(u)].filter(Boolean)}).key(`past-${u.id}`)))):_.class`lineup-results`(_.class`lineup-empty`("No past owned games are visible yet."))}),Bs())}),WS=(t,e)=>{const n=yi(e,t.gameId);return{...t,title:(n==null?void 0:n.title)||t.title||"",imageUrl:nb(n,t),manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null}},Po=(t,e)=>{if(!t)return"";const n=e.find(r=>r.id===t);return n&&(n.longName||n.shortName)||""},JS=(t,e)=>String(t.gameId||"").localeCompare(String(e.gameId||""),void 0,{sensitivity:"base"})||String(t.id||"").localeCompare(String(e.id||""),void 0,{sensitivity:"base"}),KS=(t,e)=>{const n=QS(e,t),r=rb(t.gameId||t.id);return{...t,title:(n==null?void 0:n.title)||t.title||t.sourceTitle||r,imageUrl:nb(n,t),manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null}},QS=(t,e)=>yi(t,e.gameId)||yi(t,e.title)||yi(t,e.sourceTitle)||yi(t,rb(e.gameId||e.id))||null,yi=(t,e)=>{const n=ou(e),r=yc(e);return n&&(t.find(s=>s.id===e)||t.find(s=>ou(s.id)===n)||t.find(s=>yc(s.id)===r)||t.find(s=>yc(s.title)===r))||null},ou=t=>String(t||"").trim().toLowerCase(),yc=t=>ou(t).replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),nb=(t,e)=>String((t==null?void 0:t.imageUrl)||(t==null?void 0:t.gameImageUrl)||(t==null?void 0:t.backglassUrl)||(t==null?void 0:t.image)||e.imageUrl||e.gameImageUrl||e.backglassUrl||e.image||"").trim(),rb=t=>String(t||"").trim().replace(/[-_]+/g," ").replace(/\s+/g," ").replace(/\b\w/g,e=>e.toUpperCase()),au=O(({game:t,detail:e})=>(au.inputs(n=>{[{game:t,detail:e}]=n}),_.class`lineup-game-item bounce-in`(_.class`lineup-game-card`(n=>t.imageUrl?Z.src`${t.imageUrl}`.attr("alt",t.title||"Pinball game"):_.class`lineup-placeholder`(Y(ex(t.title))),_.class`lineup-card-copy`(Wn.class`lineup-card-title`(n=>t.title||"Untitled Game"))),j.class`lineup-card-date`(n=>Array.isArray(e)?e.map(r=>_(r)):e)))),sb=t=>t?typeof t=="string"?t.slice(0,10):typeof t.toDate=="function"?t.toDate().toISOString().slice(0,10):t.seconds?new Date(t.seconds*1e3).toISOString().slice(0,10):"":"",YS=t=>{const e=sb(t);if(!e)return"recently";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},XS=t=>{const e=lu(t.dateAddedToCollection),n=lu(t.dateRemovedFromCollection);if(!e||!n)return"Time not recorded";const r=Math.max(0,(n.getTime()-e.getTime())/(365.2425*24*60*60*1e3)),s=Math.floor(r);if(s>=1)return`${s} year${s===1?"":"s"} owned`;const i=Math.max(1,Math.round(r*12));return`${i} month${i===1?"":"s"} owned`},ZS=t=>{const e=lu(t.dateAddedToCollection);if(!e)return"Ownership date unknown";const n=Math.max(0,(Date.now()-e.getTime())/(365.2425*24*60*60*1e3));if(n<1)return"first year owned";const r=Math.floor(n);return`${r} year${r===1?"":"s"} owned`},ex=t=>{const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length>=2?`${e[0][0]}${e[1][0]}`.toUpperCase():(e[0]||"PB").slice(0,2).toUpperCase()},lu=t=>{const e=sb(t);if(!e)return null;const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?null:n};let _c=!1,Tr=null,ns=null,rs=null,ss=null,bc=!1,wc=!1;const vx=O((t=null,e=null,n=ye(()=>{}))=>{const r=()=>{Tr&&Tr(),ns&&ns(),rs&&rs(),ss&&ss();const s=jk();let i=!1;Tr=(s==null?void 0:s.unsubscribe)||null;const o=s.subscribe(h=>{if(!i&&t===null&&Array.isArray(h)&&!h.length){i=!0;return}i=!0,t=h,bc=!0,console.debug("Visible game ratings",{count:(h==null?void 0:h.length)||0,ratings:h}),n()});ns=()=>o.unsubscribe();const l=Us();let c=!1;rs=(l==null?void 0:l.unsubscribe)||null;const u=l.subscribe(h=>{if(!c&&e===null&&Array.isArray(h)&&!h.length){c=!0;return}c=!0,e=h,wc=!0,console.debug("Game ratings library",{count:(h==null?void 0:h.length)||0,games:h}),n()});ss=()=>u.unsubscribe()};return _c||(_c=!0,Tr||r()),zt(()=>{Tr&&Tr(),ns&&ns(),rs&&rs(),ss&&ss(),Tr=null,ns=null,rs=null,ss=null,_c=!1,bc=!1,wc=!1}),Ce(Ge(()=>$s()),$t(`
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
    `),_.class`ratings-page`(_.class`ratings-brand-strip`(),_.class`ratings-hero`(Qe.class`ratings-title`("Cary's Game Ratings")),s=>{if(!bc||!wc||t===null||e===null)return _.class`ratings-empty`("Loading game ratings...");const i=t.filter(o=>o.isVisible!==!1).map(o=>tx(o,e||[]));return i.length?_.class`ratings-grid`(i.map(o=>ib(o).key(o.id))):_.class`ratings-empty`("No public game ratings are visible yet.")}),Bs())}),tx=(t,e)=>{const n=t.gameId||t.id;return{...t,gameId:n,game:e.find(r=>r.id===n)}},ib=O(t=>{ib.inputs(([o])=>{t=o});const e=t.game||{},n=String(e.title||"Untitled game"),r=rx(t),s=sx(r),i=s?r.filter(o=>o!==s).reverse():r.reverse();return _.class`rating-card bounce-in`(_.class`rating-card-media`(s?ab(s):_.class`rating-card-placeholder`(n.slice(0,2).toUpperCase())),_.class`rating-card-copy`(_.class`rating-summary`(_.class`rating-score`(typeof t.rating=="number"&&!Number.isNaN(t.rating)?Ud({rating:t.rating,size:108}):j.style`color:#f6c177;font-weight:900;`("Not rated")),_.class`rating-details`(e.title?j.class`rating-meta`([e.manufacturer||"",e.yearReleased?String(e.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"):"",t.review?se.class`rating-review`(t.review):"")),i.length?nx(i):""))}),nx=t=>t.length?_.class`rating-videos`(t.map(e=>ob(e).key(e.url))):"",rx=t=>Array.isArray(t.videos)?t.videos.filter(e=>!!(e!=null&&e.url)):[],sx=t=>[...t].reverse().find(e=>$d(e.url))||null,ob=O(t=>{ob.inputs(([r])=>{t=r});const e=$d(t.url),n=t.description||"Watch video";return _.class`rating-video`(e?ab(t):"",z.href`${t.url}`.class`rating-video-link`.attr("target","_blank").attr("rel","noopener noreferrer")(n))}),ab=t=>kg.class`rating-video-frame`.attr("src",$d(t.url)).attr("title",t.description||"Watch video").attr("loading","lazy").attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share").attr("allowfullscreen","")(),$d=t=>{const e=ix(t);return e?`https://www.youtube.com/embed/${e}`:""},ix=t=>{try{const e=new URL(t),n=e.hostname.replace(/^www\./,"");if(n==="youtu.be")return Tc(e.pathname.split("/").filter(Boolean)[0]);if(n==="youtube.com"||n==="m.youtube.com"){if(e.pathname==="/watch")return Tc(e.searchParams.get("v")||"");const[r,s]=e.pathname.split("/").filter(Boolean);if(r==="embed"||r==="shorts"||r==="live")return Tc(s)}}catch(e){console.warn("Invalid rating video URL",{url:t,error:e})}return""},Tc=(t="")=>/^[a-zA-Z0-9_-]{6,}$/.test(t)?t:"";let em=!1;const Ex=O((t=0,e=!0,n=!1,r=!1,s=!1,i=!1,o=!1,l=null,c=ye(()=>{}),u=ye(()=>{}),h=()=>{n=!n,c()},f=()=>{r=!r,c()},m=()=>{s=!s,c()},v=()=>{i=!i,c()},T=()=>{o=!o,c()},R=setTimeout(ye(()=>e=!1),5e3),P=!em&&(()=>{em=!0,O.promise=ol().then(S=>{typeof S=="number"&&(l=S,u())}).catch(S=>{console.error("Failed to load next meetup date",S)})})())=>_(Ge(()=>$s()),_(_.style`
      width: 100%;
      height: 175px;
      background-image: url('assets/media/youtube-channel-banner.jpg');
      background-size: contain;
      background-position: top center;
      background-repeat: repeat-x;
    `,$t(`
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
    `),Z.attr("src","assets/media/sticker.png").class`sticker-callout`.style`transition: opacity 0.5s ease;`.attr("style.opacity",S=>e?1:0).onClick(()=>window.scrollTo({top:document.querySelector(".merch-section").offsetTop,behavior:"smooth"})).attr("alt","Super Wow Limited Edition"),_.onClick(()=>++t)($t(`
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
      `),_.class`bounce-in`.style`--fx-index:5;`(_.class`carousel-3d-wrapper`(_.class`carousel-3d`(_.class`carousel-3d-item`(Z.attr("src","assets/media/unnamed.jpg").attr("alt","Cary Hardy")),_.class`carousel-3d-item`(Z.attr("src","assets/media/Cary-Hardy.jpg").attr("alt","Cary Hardy")),_.class`carousel-3d-item`(Z.attr("src","assets/media/cool_shots/CH_chill.jpg").attr("alt","Cary Hardy Chill")),_.class`carousel-3d-item`(Z.attr("src","assets/media/cool_shots/CH_kong.jpg").attr("alt","Cary Hardy Kong")),_.class`carousel-3d-item`(Z.attr("src","assets/media/cool_shots/CH_machines.jpg").attr("alt","Cary Hardy Machines")),_.class`carousel-3d-item`(Z.attr("src","assets/media/cool_shots/playfield_red.jpg").attr("alt","Playfield")))),S=>t>4&&_.style`text-align: center; margin-top: 2em;`(z.href`./admin.html`.style`color:white; text-decoration: underline;`("🔨 admin tools")))),_.class`bounce-in`.style`--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;`(Qe.class`welcome-text`("Welcome to where I talk and do everything pinball")),pe,_.style`text-align: center;`(Z.attr("src","assets/media/pewpew+cary.png").attr("alt","Pew Pew Cary Hardy").style`max-width: 900px; width: 100%; height: auto;`),pe,pe,pe,_.class`bounce-in section-anchor`.attr("id","merch").style`--fx-index:3;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",S=>o?"true":"false").onClick(T)(Qe.class`hero-text`("👕 PINBALL MERCH & MORE"),_.class`fold-section-icon`(S=>o?"▲":"▼"))),S=>o?_.class`merch-section bounce-in fold-section-content`.style`--fx-index:2;`(_.style`display: flex; flex-direction: column; align-items: center; gap: 3em;`(_.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(_.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(z.href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.attr("target","_blank")(Z.attr("src","assets/media/wrong_kong_shirts.jpg").attr("alt","Wrong Kong Shirt"))),z.attr("target","_blank").href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(k=>k.target.style.transform="scale(1.1)").onMouseOut(k=>k.target.style.transform="scale(1)")("Get your 'Wrong Kong!' T-Shirt"),z.attr("target","_blank").href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(k=>k.target.style.transform="scale(1.1)").onMouseOut(k=>k.target.style.transform="scale(1)")("🇦🇺 Wrong Kong for Australia residents")),_.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(_.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(z.href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.attr("target","_blank")(Z.attr("src","assets/media/merch-on-glass.jpg").attr("alt","Pinball Merchandise"))),z.attr("target","_blank").href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.class`bounce-in`.style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(k=>k.target.style.transform="scale(1.1)").onMouseOut(k=>k.target.style.transform="scale(1)")("More guns than Wick T-shirt"))),_.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(z.attr("target","_blank").href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in`.style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(k=>k.target.style.transform="scale(1.1)").onMouseOut(k=>k.target.style.transform="scale(1)")("SHOP SILVERBALL SWAG"))):"",pe,_.class`bounce-in section-anchor`.attr("id","links").style`--fx-index:4;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",S=>i?"true":"false").onClick(v)(Qe.class`hero-text`("🔗 LINKS"),_.class`fold-section-icon`(S=>i?"▲":"▼"))),S=>i?_.class`fold-section-content`.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;padding-top:1em;`(z.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in link-icon`.style`--fx-index: 2;`(Z.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),z.href`https://rumble.com/c/c-2975430`.class`bounce-in link-icon`.style`--fx-index: 3;`(Z.attr("src","https://rumble.com/i/favicon-v4.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),z.href`https://twitter.com/cary_hardy`.class`bounce-in link-icon`.style`--fx-index: 4;`(Z.attr("src","https://cdn-icons-png.flaticon.com/512/124/124021.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),z.href`https://www.instagram.com/caryhardypinball/`.class`bounce-in link-icon`.style`--fx-index: 5;`(Z.attr("src","https://cdn-icons-png.flaticon.com/256/1409/1409946.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),z.href`https://www.patreon.com/caryhardy`.class`bounce-in link-icon`.style`--fx-index: 6;`(Z.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII=").attr("alt","Patreon").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),z.href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in link-icon`.style`--fx-index: 7;`(Z.attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719").attr("alt","silverball_swag").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),z.href`https://www.facebook.com/hardypinball`.class`bounce-in link-icon`.style`--fx-index: 8;`(Z.attr("src","https://cdn-icons-png.flaticon.com/256/124/124010.png").attr("alt","Facebook").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`)):"",pe,_.class`bounce-in section-anchor`.attr("id","youtube").style`--fx-index:5;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",S=>s?"true":"false").onClick(m)(Qe.class`hero-text`("📺 YOUTUBE CHANNEL"),_.class`fold-section-actions`(_.class`fold-section-badge`("+12K subs"),_.class`fold-section-icon`(S=>s?"▲":"▼")))),pe,S=>s?_.class`fold-section-content`.style`text-align: center; margin-top: 2em;`(_.class`bounce-in`.style`max-width: 900px;padding-top:1em;margin:auto;--fx-index:2`(kg.attr("src","https://www.youtube.com/embed/JFkiAk44Ntk").attr("frameborder","0").attr("allowfullscreen","").style`width: 100%;height: 500px;`),_.style`text-align: center; margin-top: 2em;`(z.attr("target","_blank").href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in`.style`--fx-index: 5; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(k=>k.target.style.transform="scale(1.1)").onMouseOut(k=>k.target.style.transform="scale(1)")("Goto My Channel")),pe,pe):"",_.class`fade-in`.style`--fx-index:6`(S=>l!==null&&Date.now()<l&&Ce(_.class`bounce-in section-anchor`.attr("id","live-meetups").style`--fx-index:5;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",k=>r?"true":"false").onClick(f)(Qe.class`hero-text`("🗓️ LIVE MEETUPS"),_.class`fold-section-actions`(_.class`fold-section-badge`(k=>ox(l)),_.class`fold-section-icon`(k=>r?"▲":"▼")))),k=>r?_.class`fold-section-content bounce-in`.style`--fx-index:2;`(_.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(_.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(_.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,Z.attr("src","assets/media/meetup-screenshot.jpg").attr("alt","Pinball Community Live Meetup").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,_.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(_.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Monthly Live Meetups"))),_.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(_.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,100,0.2), rgba(0,255,255,0.2)); animation: shimmer 4s infinite; animation-delay: 2s;`,Z.attr("src","assets/media/meetup-screenshot2.jpg").attr("alt","Pinball Community Live Meetup 2").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,_.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(_.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Live Discussion & Q&A")))),_.style`margin-top: 2em;`(L=>ll({date:l,showLearnMore:!0}))):"")),pe,_.class`bounce-in section-anchor`.attr("id","awards").style`--fx-index:7;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",S=>n?"true":"false").onClick(h)(Qe.class`hero-text`("🏆 AWARD WINNING WORK & CONTENT"),_.class`fold-section-icon`(S=>n?"▲":"▼"))),S=>n?_.class`merch-section bounce-in fold-section-content`.style`margin: 2em auto; --fx-index:2;`(_.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","PATB Award").attr("src","assets/media/awards/PBaTB award.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,j.style`color: white; display: block; text-align: center;`("PATB Award")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Twipy Award").attr("src","assets/media/awards/Twipy.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,j.style`color: white; display: block; text-align: center;`("Twipy Award")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","PATB Awards").attr("src","assets/media/awards/PatB awards.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,j.style`color: white; display: block; text-align: center;`("PATB Awards")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Cary Hardy and Steve Ritchie handshaking").attr("src","assets/media/awards/photo0.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,j.style`color: white; display: block; text-align: center;`("TPF 2024")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo2.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,j.style`color: white; display: block; text-align: center;`("TPF 2024")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Earth Shaker award").attr("src","assets/media/awards/EarthShakerAward.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,j.style`color: white; display: block; text-align: center;`("TPF 2024")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","TPF 2022").attr("src","assets/media/awards/TPF 2022.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,j.style`color: white; display: block; text-align: center;`("TPF 2022")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Cary Hardy owned pinball machine").attr("src","assets/media/awards/photo3.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,j.style`color: white; display: block; text-align: center;`("TPF 2022")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(Z.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo1.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,j.style`color: white; display: block; text-align: center;`("TPF 2022")))):"",pe,_.class`bounce-in section-anchor`.attr("id","games").style`--fx-index:8;`(z.href`/lineup.html`.class`fold-section-toggle`.style`text-decoration:none;box-sizing:border-box;`(Qe.class`hero-text`("⚪️ GAMES"))),pe,_.class`bounce-in section-anchor`.attr("id","ratings").style`--fx-index:9;`(z.href`/ratings.html`.class`fold-section-toggle`.style`text-decoration:none;box-sizing:border-box;`(Qe.class`hero-text`("⭐ RATINGS"))),pe,pe,Z.class`bounce-in reflection`.attr("alt","Cary Hardy logo").attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png").style`--fx-index:8;width: 55vw;min-width: 200px;max-width: 400px;`,S=>Bs()))),ox=t=>`${Math.max(0,Math.ceil((t-Date.now())/864e5))}d`,ax=W("img");let tm=!1,nm=null;const Ax=O(()=>{let t=nm;const e=ye(()=>{}),n=()=>new Date(t);return tm||(tm=!0,O.promise=ol().then(r=>{typeof r=="number"&&(t=r,nm=r,e())}).catch(r=>{console.error("Failed to load next meetup date",r)})),Ce(Ge(()=>$s()),ax.class`bounce-in reflection`.alt`Cary Hardy logo`.src`https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png`.style`--fx-index:0;width: 55vw;min-width: 200px;max-width: 400px;`,_.class`bounce-in`.style`--fx-index:1`(Au.style`line-height: 1.3;`("Meet & talk everything pinball!"),se("for Patreon LE supporters"),_.style`font-size:.8em;opacity: .7;`("😎 come experience the hype")),pe,_.class`bounce-in`.style`--fx-index:2`(_.id`count-clock`(r=>t===null?_.style`opacity:0.7;`("Loading meetup time..."):ll({date:n(),showLearnMore:!1}))),pe,_.class`bounce-in`.style`--fx-index:3;text-align: center;`(_.style`display: inline-block;`(_.style`\n          max-width: 900px;\n          background-color:#333;border-radius: .7em;\n          margin:.5em;text-align: justify;\n          border:1px solid rgba(255,255,255,.5);\n          color:rgba(255,255,255,.85);\n        `(_.style`padding:0em 2em;`(_.style`line-height: 1.5em;`(se("And if that sounds interesting to you, consider joining us!"),se("By becoming a ",z.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Cary Hardy LE supporter")," before ",r=>t===null?"":n().toLocaleString("default",{month:"long"})," ",r=>t===null?"":n().getDate(),r=>t===null?"":b0(n()),", you will receive an LE only Patreon ",Y.style`white-space: nowrap;`("💬 message"),", ",mv("before the meeting start time"),", with an invite ",Y.style`white-space: nowrap;`("🔗 link")," to join this very exclusive meeting.")),pe,Qe("How does the meeting work?"),rf(Wr("🍺 It mostly works because of beer. Come 🍻 cheers with us!"),Wr("🛎️ Make sure you have Patreon notifications turned on to ensure you receive invite link 1 hour before meeting"),Wr("Meeting software is Google Meets, which is a browser based application. No installation will be required."),Wr("Link to meeting is provided 1 hour before meeting. Must be ",z.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon LE member"))),pe,Qe("😮 When issues arise"),rf(Wr("Watch your Patreon messages."),Wr("In the event of meeting cancellation or disruption due to unforeseen circumstances, a makeup meeting will be communicated directly from Cary Hardy."))),_.style`text-align: center;`("⚪️ ",z.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon memberships")," ⚪️")))),pe,pe,_.class`bounce-in`.style`--fx-index:4;text-align: center;`(_.style`padding:.8em;font-size: .7em;`(z.class`no-a-style`.href`index.html`(q.type`button`("🔙 home")))),Bs())}),Cx=O(()=>{const n=new URLSearchParams(window.location.search).get("session_id")||""||"not found";return _(Ge(()=>$s()),_.class`wrap`(_.class`card`(Au("Thank you!"),se("✅ Your payment was received successfully."),pe,se("We really appreciate your support as we grow CaryHardy.com"),pe,se("At Pinball at the Beach, please find Cary or Acker or email ",z.href`mailto:acker.dawn.apple@gmail.com?subject=PATB Cary key box`("acker.dawn.apple@gmail.com")),pe,se.class`muted`("Session ID: ",Y.class`session-id`(r=>n)),z.class`cta`.href`/index.html`("Back to CaryHardy.com"))),Bs())}),rm=["/assets/media/product-images/key-box/IMG_1477.heic.jpeg","/assets/media/product-images/key-box/Main.jpg","/assets/media/product-images/key-box/IMG_1472.heic.jpeg","/assets/media/product-images/key-box/IMG_1474.heic.jpeg","/assets/media/product-images/key-box/IMG_1475.heic.jpeg"],sm="https://buy.stripe.com/aFabJ02XDe7K7GrgXv4F202",lx=O(()=>{let t=rm[0],e=sm;return lx.inputs(n=>{[{checkoutUrl:e=sm}={}]=n}),_(Ge(()=>$s()),_.class`product-wrap`(_.class`product-hero`(_.class`product-info`(Au("Cary Hardy Key Box"),ze("🏖️ PATB Pickup only. Priced for LE only members only"),se("Cary Hardy Key Box"),se("LE Members only pricing"),Qe("$15.00 ",Y.style`font-size:0.6em;opacity:0.75;font-weight:400;`("+ $1 processing + tax")),se.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🇺🇸 Made in America"),se.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🚫 🤖 No artificial intellegence used"),se.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🥳 Fun to assemble Cary Hardy logo that is then functional as your pinball keys holder!"),z.href(n=>e).class`buy-button`.attr("target","_blank")("Buy Now")),_.class`product-media`(Z.attr("src",n=>t).attr("alt","Key Box main photo").class`main-image`,_.class`gallery`(rm.map(n=>_.class`gallery-item`.class(r=>n===t?"is-active":"").onClick(()=>{t=n})(Z.attr("src",n).attr("alt","Key Box photo").class`gallery-image`)))))),Bs())});export{hx as a,fx as b,px as c,yx as d,_x as e,gx as f,mx as g,Ex as h,Ix as i,vx as j,Ax as k,Cx as l,bx as m,lx as n,wx as p,Tx as q,ux as t};

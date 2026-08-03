var xb=Object.defineProperty;var Pb=(t,e,n)=>e in t?xb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var wt=(t,e,n)=>Pb(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Mi(t){return t.renderCount=t.renderCount||0,t.varCounter=0,t.state={newer:{state:[],states:[]}},t.global={blocked:[]}}function Uo(){return Ee.stateConfig.support}function ma(t){return Xe(t.context),Ee.stateConfig.support=t}const Ye=function(){};let mt=[];const Wt=[];let vt=[],Ti=[],Sn=[],iu=!1;const Rn=[],Vb=400;let ts=0;const _c=new Map,Te={locks:0};function Nb(t,e){const n=_c.get(t);if(n!==void 0&&n>=ts){Rn[n]=e;return}const r=Rn.length;Rn.push(e),_c.set(t,r)}function Db(t,e){e.textContent=t}function ut(){Te.locks>0||Mb()}function Mb(){++Te.locks,em(),--Te.locks,Xp(),Lb()}function Xp(){Fb();const t=Sn;Sn=[];for(const e of t)e[0](...e[1])}function Lb(){iu||!Rn.length||Ob()}function Ob(){iu=!0,requestAnimationFrame(Zp)}function Zp(){++Te.locks;let t=0;for(;ts<Rn.length&&t<Vb;){const e=Rn[ts];++ts,e[0](...e[1]),++t}if(em(),Xp(),--Te.locks,ts<Rn.length){requestAnimationFrame(Zp);return}Rn.length=0,ts=0,_c.clear(),iu=!1}function em(){const t=Wt.length;for(let e=0;e<t;++e){const n=Wt[e];n[0](...n[1])}if(t===Wt.length)Wt.length=0;else{let e=0;for(let n=t;n<Wt.length;++n)Wt[e]=Wt[n],++e;Wt.length=e}for(const e of vt)e[0](...e[1]);for(const e of Ti)e[0](...e[1]);for(const e of mt)e[0](...e[1])}function Fb(){mt=[],vt=[],Ti=[]}function vr(t,e){Wt.push([Ub,[t,e]])}function Ub(t,e){t||console.debug("no element by",{_caller:e,element:t});const n=t.parentNode;n||console.debug("no parentNode by",{_caller:e,element:t}),n.removeChild(t)}function ou(t,e,n){t.parentNode.insertBefore(e,t)}function tm(t,e){t.appendChild(e)}typeof document=="object"&&document.createElement("div");function $b(t){return document.createTextNode(t)}function nm(t,e,n=Ye,r){const s=$b(e);ou(t,s),n(s)}const fs="";var Nh;(function(t){t.string="string",t.number="number",t.boolean="boolean",t.undefined="undefined"})(Nh||(Nh={}));var pe;(function(t){t.function="function",t.date="date",t.unknown="unknown",t.object="object"})(pe||(pe={}));const Bb=Date.now(),fe={tag:"html",dom:"dom",templater:"templater",tagComponent:"tagComponent",tagArray:"tagArray",host:"host",subscribe:"subscribe",signal:"signal",stateRender:"stateRender",version:Bb};function rm(t){if(!t)return!1;switch(t.tagJsType){case fe.dom:case fe.tag:case fe.templater:return!0}return!1}function Li(t){const e=t==null?void 0:t.tagJsType;return e===fe.tagComponent||e===fe.stateRender}function jb(t){return ga(t)&&typeof t.subscribe===pe.function}function Pr(t){return t&&Ar(t.then)}function Ar(t){return typeof t===pe.function}function ga(t){return typeof t===pe.object&&t!==null}function at(t){return Array.isArray(t)}function au(t){const e=t.state;if(e&&e.newest&&e.newest)return e.newest;if(t.parentContext)return au(t.parentContext)}function ya(t){let e=t;for(;e.ownerSupport&&!Li(e.templater);)e=e.ownerSupport;const r=e.context.state;return r&&r.newest||e}function zb(...t){return t}function sm(t){const e=Ee.stateConfig;return e.states[e.statesIndex]=t,++e.statesIndex,t(zb)}function Hb(t){const e=Ee.stateConfig,n=e.statesIndex,c=ya(e.prevSupport).context.state.older.states[n];let u=[];c(function(...m){return u=m,c.lastValues=u,m});const h=function(...m){return u};return e.states[e.statesIndex]=t,++e.statesIndex,t(h)}function im(t){Xe(t);const e=Ee.stateConfig;e.handlers.handler=om,e.handlers.statesHandler=sm,e.rearray=[];const n=e.state=[],r=e.states=[];e.statesIndex=0;const s=t.state=t.state||{};s.newer={state:n,states:r}}class qb{}function Gb(t){const[e]=t(qb),[n]=t(e);return[e,n]}function Wb(t){const e=t.callback;if(!e)return t.defaultValue;const[n]=Gb(e);return n}function Jb(){const t=Ee.stateConfig,n=t.rearray[t.state.length];return t.state.push(n),n.defaultValue}function om(t){var o,l;const e=Ee.stateConfig,n=Ot();if(!n||!n.state){const c="State requested but TaggedJs is not currently rendering a tag or host";throw console.error(c,{config:e,context:n,function:(l=(o=e.support)==null?void 0:o.templater.wrapper)==null?void 0:l.original}),new Error(c)}const r=n.state.newer;e.state=r.state;let s=t;if(typeof t===pe.function&&(s=t()),typeof s===pe.function){const c=s;s=function(...h){return c(...h)},s.original=c}const i={get:function(){return Wb(i)},defaultValue:s};return e.state.push(i),s}function Kb(t){const e=new ue,n=r=>{const s=[],i=[],o=(f,m)=>{if(s[m]=!0,i[m]=f,s.length===t.length){for(const I of s)if(!I)return;r(i,u)}},l=[...t],u=l.shift().subscribe(f=>o(f,0)),h=l.map((f,m)=>f.subscribe(E=>o(E,m+1)));return u.subscriptions=h,u};return e.subscribeWith=n,e}function Qb(t,e){const n=t.findIndex(r=>r.callback===e);n!==-1&&t.splice(n,1)}function Yb(t,e,n){const r=ue.globalSubCount$;ue.globalSubCount$.next(r.value+1);const s=function(){s.unsubscribe()};return s.callback=e,s.subscriptions=[],s.unsubscribe=function(){return Xb(s,n,e)},s.add=i=>(s.subscriptions.push(i),s),s.next=i=>{e(i,s)},s}function am(t,e,n){const r=[...e],s=r.shift(),i=h=>{if(r.length)return am(h,r,n);n(h)};let o=i;const u=s(t,{setHandler:h=>o=h,next:i});o(u)}function Xb(t,e,n){Qb(e,n);const r=ue.globalSubCount$;ue.globalSubCount$.next(r.value-1),t.unsubscribe=()=>t;const s=t.subscriptions;for(const i of s)i.unsubscribe();return t}const os=class os{constructor(e,n){wt(this,"onSubscription");wt(this,"methods",[]);wt(this,"isSubject",!0);wt(this,"subscribers",[]);wt(this,"subscribeWith");wt(this,"value");wt(this,"set",this.next.bind(this));this.onSubscription=n,arguments.length>0&&(this.value=e)}subscribe(e){const n=Yb(this,e,this.subscribers),r=this.subscribeWith;if(r){if(this.methods.length){const s=e;e=i=>{am(i,this.methods,o=>s(o,n))}}return r(e)}return this.subscribers.push(n),this.onSubscription&&this.onSubscription(n),n}next(e){this.value=e,this.emit()}emit(){const e=this.value,n=this.subscribers;for(const r of n)r.callback(e,r)}toPromise(){return new Promise(e=>{this.subscribe((n,r)=>{r.unsubscribe(),e(n)})})}toCallback(e){const n=this.subscribe((r,s)=>{const i=s==null?void 0:s.unsubscribe;i?i():setTimeout(()=>{n.unsubscribe()},0),e(r)});return n}pipe(...e){const n=[];"value"in this&&n.push(this.value);const r=new os(...n);return r.setMethods(e),r.subscribeWith=s=>this.subscribe(s),r.next=s=>this.next(s),r}setMethods(e){this.methods=e}static all(e){const n=e.map(r=>jb(r)?r:new os(r,i=>(i.next(r),i)));return Kb(n)}};wt(os,"globalSubCount$",new os(0));let ue=os;const Zb=new ue(void 0,function(e){Uo()||e.next()}),Ee={stateConfig:{state:[],version:Date.now(),handlers:{handler:om,statesHandler:sm}},tagClosed$:Zb};function ew(t,e){++t.updateCount;const n=t.subContext,r=lm(n,e);return delete t.subContext,r}function lm(t,e){t.deleted=!0;const n=t.appendMarker;if(n&&(vr(n,"deleteSubContext"),delete t.appendMarker),!t.hasEmitted)return;const r=t.contextItem;return r.tagJsVar.destroy(r,e),76}function tw(t,e,n,r,s){const i=e.context;if(i.locked=3,n.target=n.target||r,Xe(n),n.inputsHandler){const o=e.propsConfig;n.inputsHandler(o)}n.tagJsVar.processInit(t,n,e,s,r),Fe(),n.value=t,delete i.locked}function _a(t){switch(t){case void 0:case!1:case null:return fs}return t}function nw(t,e){const n=_a(t);if(e.paint){e.paint[1][1]=n;return}const r=e.simpleValueElm;vt.push([Db,[n,r]])}function rw(t,e){e.value=t,e.oldTagJsVar=e.tagJsVar,e.tagJsVar=hm(t);const n=e.placeholder,r=_a(t),s=e.paint=[nm,[n,r,function(o){e.simpleValueElm=o,delete e.paint},"processNowRegularValue"]];mt.push(s)}function ba(t,e){if(t.startsWith("class."))return"class";if(t.startsWith("style."))return"style";const n=sw(t);return n!==!1?n:t==="value"&&e==="SELECT"?"value":!1}function sw(t){switch(t){case"autoselect":case"autoSelect":return"autoselect";case"autofocus":case"autoFocus":return"autofocus"}return!1}function iw(t,e,n){typeof t[e]!="object"&&(t[e]={});for(const r in n){const s=n[r];vt.push([cw,[t,e,r,s]])}if(t[e].setProperty)for(const r in n){const s=n[r];vt.push([lw,[t,e,r,s]])}}function ow(t,e,n){t.setAttribute(e,"")}function Zt(t,e,n){if(ga(n))return iw(t,e,n);cm(t,e,n)}function aw(t,e,n){n?t[e]=!0:t[e]=!1}function cm(t,e,n){if(t[e]=n,n===void 0||n===!1||n===null){t.removeAttribute(e);return}t.setAttribute(e,n)}function lw(t,e,n,r){t[e].setProperty(n,r)}function cw(t,e,n,r){t[e][n]=r}function um(t,e,n,r){switch(r){case"autofocus":Sn.push([mw,[n]]);return;case"autoselect":Sn.push([pw,[n]]);return;case"style":{const s=t.split(".");vt.push([uw,[n,s,e]]);return}case"class":dw(t,e,n);return;case"value":Zt(n,t,e),Sn.push([s=>{s.value=e},[n]]);return}throw new Error(`Invalid special attribute of ${r}. ${t}`)}function uw(t,e,n){const r=e[1];t.style[r]=n,t.style.setProperty(r,n)}function dw(t,e,n){const r=t.split(".");if(r.shift(),e){for(const s of r)vt.push([hw,[n,s]]);return}for(const s of r)vt.push([fw,[n,s]])}function hw(t,e){t.classList.add(e)}function fw(t,e){t.classList.remove(e)}function pw(t){t.select()}function mw(t){t.focus()}function gw(t,e,n,r,s){const i=t(),o={component:!1,tagJsType:"dynamic-attr",matchesInjection:u=>{const h=l.tagJsVar;if(h.matchesInjection)return h.matchesInjection(u,l)},hasValueChanged:(u,h,f)=>{const m=t();return l.tagJsVar.hasValueChanged(m,l,f)},processInit:Ye,processInitAttribute:Ye,destroy:(u,h)=>{l.tagJsVar.destroy(l,h)},processUpdate:(u,h,f,m)=>{++h.updateCount;const E=u();l.tagJsVar.processUpdate(E,l,f,m),l.value=E}},l={description:"sub-context",updateCount:0,isAttr:!0,target:r,parentContext:e,value:i,tagJsVar:jn(i),withinOwnerElement:!0,destroy$:new ue,render$:new ue},c={description:"override-context",updateCount:0,isAttr:!0,contexts:[l],target:r,parentContext:e,value:t,tagJsVar:o,withinOwnerElement:!0,destroy$:new ue,render$:new ue};return l.tagJsVar.processInitAttribute(n,i,r,l.tagJsVar,l,{},s),c}function yw(t,e,n,r,s,i,o){return n.target=r,n.howToSet=s,n.attrName=t,n.isSpecial=o,e!=null&&e.tagJsType?_w(t,e,n,i,r):wa(t,e,r,s,o,n)}function _w(t,e,n,r,s){e.processInitAttribute(t,e,s,e,n,r,Zt),n.tagJsVar=e}function wa(t,e,n,r,s,i){if(typeof e=="function")return gw(e,i,t,n,r);if(s)return um(t,e,n,s);r(n,t,e)}function dm(t,e,n,r,s,i){const o=e.tagJsVar,l=t;if(o.hasValueChanged(l,e,n)>0){o.destroy(e,n),r.removeAttribute(s);const u=jn(t);u.isAttr=!0,u.processInitAttribute(s,t,r,u,e,n,i),e.tagJsVar=u;return}}function bw(t,e,n,r,s,i,o){r.destroy=ww,r.hasValueChanged=Ew,r.processUpdate=(c,u,h)=>dm(c,u,h,n,t,o);const l=ba(t,n.tagName);wa(t,e,n,o,l,s),s.tagJsVar=r}function ww(t){const e=t.target,n=t.attrName;e.removeAttribute(n)}function hm(t){return{component:!1,tagJsType:"simple",value:t,processInitAttribute:bw,processInit:Iw,destroy:fm,hasValueChanged:vw,processUpdate:Tw}}function Tw(t,e,n){return t===e.value?0:vm(e,t,n)}function Iw(t,e,n,r,s){const i=_a(t);r=e.placeholder;const o=e.paint=[nm,[r,i,function(c){e.simpleValueElm=c,delete e.paint},"processSimpleValueInit"]];mt.push(o)}function fm(t){const e=t.simpleValueElm;if(!e){if(t.paint){t.paint[0]=Ye;return}if(t.value===void 0||t.value===!1||t.value===null)return}delete t.simpleValueElm,vr(e,"deleteSimpleValue")}function Ew(t,e){return t==null||t===e.value?0:6}function vw(t,e){return t==null||![pe.object,pe.function].includes(typeof t)?(nw(t,e),0):(fm(e),6)}function Aw(t,e){return at(t)?0:9}function Vr(t,e,n){const r=e.tagJsVar.processUpdate(t,e,n,[]);return e.value=t,r||0}function pm(t,e){const n=t.context.providers;if(n)for(const r of n)for(let s=r.children.length-1;s>=0;--s)r.children[s].context.global===e&&r.children.splice(s,1);t.context.destroy$.next(),t.context.renderCount=0}function bc(t,e){for(const n of t){const r=n.lastArray;if(r){bc(r,e);continue}const s=n.value;if((s==null?void 0:s.tagJsType)===fe.subscribe){s.destroy(n,e),n.deleted=!0;continue}const i=n.global;if(!i)continue;const o=n.state.newest,l=i.subscriptions;l&&l.forEach(gm),Li(o.templater)&&pm(o,i);const c=n.contexts;bc(c,o),i.deleted=!0}}function mm(t,e=[],n=[]){for(const r of t){const s=r.global;if(!s)continue;const i=r.state.newest;if(i){e.push(i);const l=s.subscriptions;l&&n.push(...l)}const o=r.contexts;o&&mm(o,e,n)}return{tags:e,subs:n}}function gm(t){t.unsubscribe()}function ym(t){++t.updateCount;const e=t.lastArray;e&&_m(t,e)}function _m(t,e){for(let n=0;n<e.length;++n)bm(e[n]);delete t.lastArray}function Ii(t){for(let e=t.length-1;e>=0;--e){const n=t[e];Cw(n),t.splice(e,1)}}function Cw(t){const e=t.marker;e&&vr(e,"destroyMarker");const n=t.domElement;vr(n,"destroyClone")}function lu(t,e){t.contexts&&Rw(t.contexts,e),t.htmlDomMeta&&Ii(t.htmlDomMeta)}function Rw(t,e){var n;for(const r of t){if(r.withinOwnerElement){const c=r.tagJsVar;if(c&&c.tagJsType==="host"){const u=r.supportOwner,h=c.destroy(r,u);Pr(h)&&e.push(h)}continue}const s=r.lastArray;if(s){_m(r,s);continue}const i=r.simpleValueElm;if(i){delete r.simpleValueElm,vr(i,"smartRemoveByContext");continue}const o=r.global;if(o===void 0)continue;if(o.deleted=!0,(n=r.state)==null?void 0:n.oldest){lu(r,e);continue}}}function Oi(t,e){const n=t.context;e.deleted=!0,n.renderCount=0;const r=[],s=n.contexts;return bc(s,t),t.templater.wrapper&&pm(t,e),lu(n,r),delete n.state,delete n.contexts,delete n.returnValue,delete n.providers,r}function bm(t){const e=t.global,n=kw(e,t);return Sw(t),n}function kw(t,e){var n;if(t&&((n=e.state)!=null&&n.oldest)){const r=e.state.oldest;return Oi(r,t)}return e.tagJsVar.destroy(e,{})}function Sw(t){t.arrayMarkersDeleted=!0;const e=t.arrayStartMarker;e!=null&&e.parentNode&&vr(e,"destroyArrayStartMarker");const n=t.placeholder;n!=null&&n.parentNode&&vr(n,"destroyArrayEndMarker")}const Dh=Symbol("not-casted"),xw=[];function $o(t,e,n,r){const s=t.lastArray===void 0;s&&(t.lastArray=[]);const i=t.lastArray,o=e.length,l=new Array(o).fill(Dh),c=function(m){const E=l[m];if(E!==Dh)return E;const I=Lw(e[m]);return l[m]=I,I},u=!s&&(o!==i.length||i.some(f=>f.locked===1)),h=s?i:Vw(i,o,c);t.lastArray=h;for(let f=0;f<o;++f){const m=Pw(h,f+1)||t.placeholder;Nw(f,h,n,u,c,m,r)}}function Pw(t,e){var n;for(let r=e;r<t.length;++r){const s=(n=t[r])==null?void 0:n.arrayStartMarker;if(s)return s}}function Vw(t,e,n){const r=new Array(e),s=new Set,i=new Map;for(let o=0;o<t.length;++o){const l=t[o],c=Mh(l);if(c===void 0)continue;const u=i.get(c);u?u.push(l):i.set(c,[l])}for(let o=0;o<e;++o){const l=Bo(n(o));if(l===void 0)continue;const c=i.get(l),u=c==null?void 0:c.shift();u&&(r[o]=u,s.add(u))}for(let o=0;o<e;++o){if(r[o])continue;const l=t[o],c=n(o),u=Mh(l),h=Bo(c);l&&!s.has(l)&&(u===void 0&&h===void 0||Lh(l.value)||Lh(c))&&(r[o]=l,s.add(l))}for(let o=0;o<t.length;++o){const l=t[o];s.has(l)||bm(l)}return r}function Mh(t){return t==null?void 0:t.arrayValue}function Bo(t){return t==null?void 0:t.arrayValue}function Lh(t){return t==null}function Nw(t,e,n,r,s,i,o){const l=s(t),c=e[t];if(c){const f=Bo(l);return f===void 0?delete c.arrayValue:c.arrayValue=f,Dw(l,c,n,r&&c.locked!==1)}const u=Gm(l,n,e,i,o);e[t]=u;const h=Bo(l);return h!==void 0&&(u.arrayValue=h),u}function Dw(t,e,n,r,s,i){return r?(Nb(e,[Mw,[t,e,n]]),e):Array.isArray(t)?(e.tagJsVar.processUpdate(t,e,n,xw),e.value=t,e):(Vr(t,e,n),e)}function Mw(t,e,n){Vr(t,e,n)}function Lw(t){if(typeof t!="function")return t;const e=t;return e.tagJsType!==void 0?t:e()}function Ow(t,e){const r=t.templater.tag.values;for(const s of e)Fw(r,s,t);return e}function Fw(t,e,n){if(e.deleted)return;const r=e.tagJsVar;Xe(e),r.processUpdate("",e,n,t),Fe()}function wm(t,e){if(!t)return;const r=t.context.contexts;Uw(t,e),++Te.locks,Ow(t,r),--Te.locks,ut()}function Uw(t,e){const n=e.templater,r=e.templater.tag,s=n.values||r.values,i=t.templater.tag;i.values=s}function $w(t,e){return wc(t,e)}function wc(t,e){if(t===null||typeof t!==pe.object||e<0)return t;if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const n=at(t)?[]:Object.create(Object.getPrototypeOf(t));if(at(t))for(let r=0;r<t.length;r++)n[r]=wc(t[r],e-1);else for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=wc(t[r],e-1));return n}function Bw(t,e,n){return cu(t,e,n)}function cu(t,e,n){return t===e||Hw(t,e)||n<0?!0:typeof t===pe.object&&typeof e===pe.object?t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():at(t)&&at(e)?zw(t,e,n-1):at(t)||at(e)?!1:jw(t,e,n-1):!1}function jw(t,e,n){const r=Object.keys(t),s=Object.keys(e);if(r.length===0&&s.length===0)return!0;if(r.length!==s.length)return!1;for(const i of r)if(!s.includes(i)||!cu(t[i],e[i],n-1))return!1;return!0}function zw(t,e,n){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!cu(t[r],e[r],n-1))return!1;return!0}function Hw(t,e){return Ar(t)&&Ar(e)&&t.toString()===e.toString()}function Oh(t){return t.map(uu)}function uu(t,e){const n=t,r=t==null?void 0:t.tagJsType;if(r)switch(r){case fe.signal:case fe.subscribe:case fe.stateRender:return;case fe.dom:case fe.tag:case fe.templater:return Oh(n.values)}return at(t)?Oh(n):$w(t,e)}function qw(t,e){const n=t.length;for(let r=0;r<n;++r){const s=t[r],i=e[r];if(at(s)&&at(i)){if(s===i)continue;return 3}if(!(typeof s===pe.function&&typeof i===pe.function)){if(typeof s===pe.object){if(!s&&!i)continue;if(typeof e===pe.object){const o=Object.entries(s);for(const l of o)if(!Gw(l,i))return 3.1}continue}if(s!==i)return 3.3}}return!1}function Gw([t,e],n){const r=n[t];return typeof e===pe.function&&typeof r===pe.function?!0:r===e}function du(t,e,n){return t}function Ww(t){return typeof t!==pe.object||!t||t.tagJsType}function Jw(t,e,n,r,s,i){var l;const o=Object.keys(t);for(const c of o){const u=t[c],h=e[c],f=hu(h,u,n,r,i,s+1);u===f||(l=Object.getOwnPropertyDescriptor(t,c))!=null&&l.set||(t[c]=f)}return t}function Kw(t,e,n,r,s,i){for(let o=t.length-1;o>=0;--o){const l=t[o],c=e[o];t[o]=hu(c,l,n,r,i,s+1)}return t}function hu(t,e,n,r,s,i){return t==null||i>s?e:typeof t===pe.function?e.mem?(t.mem=e.mem,e):(t.mem=e,t):Ww(e)?e:at(e)?Kw(e,t,n,r,i,s):Jw(e,t,n,r,i,s)}function Qw(t,e,n,r,s,i=-1){const o=e.context;if(!o.global||!o.state.newest){const E=du(r);r.push(...E);const I=t.propsConfig;return I.castProps=E,r}e=o.state.newest||e;const h=e.propsConfig.castProps,f=[];for(let E=0;E<r.length;++E){const I=r[E],k=h[E],D=hu(k,I,t,n,s,i+1);f.push(D)}const m=t.propsConfig;return m.castProps=f,f}function Yw(t,e){const n=t.context,r=n.global;let s=-1;const i=n.providers=n.providers||[],o=i.length-1;for(;s++<o;){const l=i[s];let c=-1;const u=l.children.length-1;for(;c++<u;){const h=l.children[c];if(r===h.context.global){l.children.splice(c,1),l.children.push(e);return}}}}function Tc(t){const e=t.context,n=e.global,r=e.contexts;if(r){const{subs:s,tags:i}=mm(r);for(const l of i){if(l.context.global.deleted===!0)return;Fh(l.context)}n.subscriptions&&s.forEach(gm)}Fh(e),Mi(e)}function Fh(t){t.global.deleted=!0,lu(t,[]),delete t.contexts}function Tm(t,e,n,r){const s=e.original,i=t.tagJsType===fe.stateRender,o=Ee.stateConfig;ma(n);let l;if(i?l=t():(l=s(...r),typeof l===pe.function&&l.tagJsType===void 0&&(l=[l])),!l)throw new Error(`A tag cannot return a value of type ${l===null?"null":typeof l}`);const c=n.context;return c.returnValue=l,n.returnValue=l,t.tag=l,c.state.newer={...o},Fe(),n}function Xw(t,e){const n=t.context;++n.renderCount,Zw(t.context),Ee.tagClosed$.next(e)}function Zw(t){eT(t),tT()}function eT(t){const e=Ee.stateConfig,n=t||e.context;n.state=n.state||{},n.state.newer={...e};const r=e.support;n.state.newest=r}function tT(){const t=Ee.stateConfig;delete t.prevSupport,delete t.support,delete t.state,delete t.states,Fe()}function Im(t,e,n,r){let s;const i=t.templater;if(i.tagJsType===fe.stateRender){const o=i;s=Ea(i,n,r,t.appSupport),Tm(i,o,s)}else{const o=i.wrapper;s=o(t,n,e)}return Xw(s,r),s.ownerSupport=t.ownerSupport,s}function nT(t){const e=Ee.stateConfig;return e.rearray=t,e.state=[],e.states=[],e.statesIndex=0,e.handlers.handler=Jb,e.handlers.statesHandler=Hb,e}function rT(t,e,n){nT(n);const r=Ee.stateConfig;r.prevSupport=e,ma(t)}function sT(t,e,n,r){const i=n.state.older.state;return rT(t,e,i),Im(t,e,n,r)}function Em(t,e,n,r){im(t.context),ma(t);const s=Im(t,e,n,r);return Fe(),s}function iT(t){var r;const e=t==null?void 0:t.context,n=e==null?void 0:e.state;return(r=n==null?void 0:n.older)==null?void 0:r.state}function fu(t,e){var r;const n=Uh(t,e);if(!n&&((r=e.templater.tag)!=null&&r._innerHTML)){const s=t.outerHTML;if(Uh(s,e))return!0}return n}function Uh(t,e){const n=t.templater,r=e.templater,s=(n==null?void 0:n.tag)||t,i=r.tag;if((n==null?void 0:n.tagJsType)===fe.stateRender)return n.dom===r.dom;if(!i&&!s.returnValue)return!0;if(!s.returnValue)return!1;throw new Error(`unknown tagJsType of ${s.tagJsType}`)}function oT(t,e,n){let r;iT(e)?r=sT(t,e,n):r=Em(t,e,n);const i=!e||fu(e,r);if(i){if(e){const o=e.templater.tag;if(o&&n.renderCount>0){const l=e==null?void 0:e.templater,c=l==null?void 0:l.tag;aT(o,e,c)}}}else{Yw(e,r),Tc(e);const o=r.context;o.state.oldest=r,o.state.newest=r}return r.ownerSupport=t.ownerSupport,{support:r,wasLikeTags:i}}function aT(t,e,n){if(t.tagJsType===fe.dom){const r=n==null?void 0:n.dom,s=t.dom;r!==s&&Tc(e);return}if(n){const r=n.strings;if(r){const s=r==null?void 0:r.length,i=t.strings.length;s!==i&&Tc(e)}}}function lT(t,e,n){const r=oT(e,t,n);if(r.wasLikeTags){const s=n.state.oldest;return wm(s,r.support),r.support}}function cT(t){const e=t.context;return lT(t,t,e)}function Q(t){if(!t)return Ye;const e=Ot();if(!e)throw new Error("output must be used in render sync with a parent context");const n=au(e);if(!n)throw new Error("output must be used in render sync fashion");if(t.wrapped===!0)return t;const r=(...s)=>{const i=n.ownerSupport;return uT(s,t,i.context)};return r.wrapped=!0,r}function uT(t,e,n){Xe(n);const r=e(...t);return dT(r,n)}function dT(t,e){Fe();const r=()=>{const s=e.global;if(s===void 0||s.deleted===!0){++Te.locks;const o=e;o.tagJsVar.processUpdate(o.value,o,void 0,[]),--Te.locks,ut();return}++Te.locks,cT(void 0),--Te.locks,ut()};return Pr(t)&&t.then(()=>{Sn.push([r,[]])}),Sn.push([r,[]]),t}function hT(t,e,n,r){const s=e.tagJsType;if(!e||!s||s!==t)return r.tagJsVar.destroy(r,n),vs(e,r,n,99),99}function fT(t,e,n){const r=e.subContext,s=hT(fe.subscribe,t,n,e);return s||(!r||!r.hasEmitted||(r.tagJsVar=t,r.valuesHandler(r.lastValues,0)),0)}function vm(t,e,n){const s=t.tagJsVar.hasValueChanged(e,t,n);return s===0?0:(vs(e,t,n,s),s)}function Am(t,e,n){var o;++e.updateCount;const s=t.owner._innerHTML;s.processInit=s.oldProcessInit;const i=(o=e.subContext)==null?void 0:o.contextItem;vm(i,s,n)}function pT(t,e,n,r,s){e.subContext={},t.processUpdate=Am,mT(t,n,e,r,s)}function mT(t,e,n,r,s){const{appendMarker:i,insertBefore:o}=Jm(s,r),l=n.subContext;l.appendMarker=i;const u=t.owner._innerHTML;u.processInit=u.oldProcessInit,Wm(u,l,e,o)}function Cm(){return{component:!1,tagJsType:"innerHTML",hasValueChanged:()=>0,processInitAttribute:Ye,processInit:pT,processUpdate:Am,destroy:ew}}function Ta(t){++t.updateCount;const e=t.global,r=t.state.newest;delete t.inputsHandler,delete t.updatesHandler,Oi(r,e),gT(t)}function gT(t){t.htmlDomMeta=[],delete t.contexts,delete t.state,delete t.global,t.renderCount=0}function yT(t,e){var o;const n=(o=e.state)==null?void 0:o.newest,r=rm(t),s=t;if(r)return fu(s,n)?0:7;if(t==null?void 0:t.tagJsType){const l=e.value;if(!l&&t)return 88;const c=l.wrapper,u=t.wrapper;return(u==null?void 0:u.original)===(c==null?void 0:c.original)?0:88}return 8}function Ia(t,e){var l;const n=e.global,r=(l=e.state)==null?void 0:l.newest,s=rm(t),i=t;if(s)return fu(i,r)?(Ic(e,t,r),0):(Oi(r,n),Mi(e),7);if(t==null?void 0:t.tagJsType){const h=e.state.newest.ownerSupport;return Ic(e,t,h)===!0?0:88}return Ta(e),8}function Rm(t){return pu(t)}function _T(t){return t.render()}function bT(t){const e=wT(t.attributes),n=km(t.innerHTML);return`<${t.tagName}${e}>${n}</${t.tagName}>`}function wT(t){if(!t||t.length===0)return"";const e=[];return t.forEach(n=>{const r=n[0];if(typeof r!="string"||r.length===0)return;const s=xm(n[1]);if(s===!0){e.push(r);return}s===!1||s===void 0||s===null||e.push(`${r}="${Sm(String(s))}"`)}),e.length>0?` ${e.join(" ")}`:""}function km(t){return!t||t.length===0?"":t.map(pu).join("")}function pu(t){const e=xm(t);return TT(e)?_T(e):IT(e)?ET(e):Array.isArray(e)?km(e):e==null||e===!1?"":Sm(String(e))}function TT(t){return!!t&&typeof t=="object"&&typeof t.tagName=="string"}function IT(t){return!!t&&typeof t=="object"&&t.tagJsType===fe.tagComponent}function ET(t){var r;const e=(r=t.wrapper)==null?void 0:r.original;if(typeof e!="function")return"";let n=e(...t.props);return typeof n===pe.function&&n.tagJsType===void 0&&(n=n()),pu(n)}function Sm(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function xm(t){return typeof t=="function"?t():t}function vT(t,e){const n={component:!1,tagJsType:fe.templater,processInit:"",processInitAttribute:Ye,processUpdate:Vr,hasValueChanged:Ia,destroy:Ta,propWatch:t,props:e,get outerHTML(){return Rm(this)},key:function(s){return n.arrayValue=s,n},matchesInjection(r,s){var i;if(n.wrapper===r||((i=n.wrapper)==null?void 0:i.original)===(r==null?void 0:r.original))return s}};return n}const Ei=[];function AT(t,e){return function(s,i,o){const l=Pm(t,s,o),c=s.ownerSupport,u=Ea(t,i,c,s.appSupport,l);return Tm(t,e,u,l)}}function Pm(t,e,n){const r=t.propWatch===At.DEEP?mu:jm,s=t.props,i=e.propsConfig;let o=i.castProps;const l=n==null?void 0:n.propsConfig,c=l==null?void 0:l.castProps;return c&&(i.castProps=c,o=Qw(e,n,n.ownerSupport,s,r)),o||du(s)}function CT(t,e,n,r,s){const i=hI(t,e,n,r,s);return i.hasEmitted||Vm(t,i),i}function Vm(t,e){const r=t.Observables[0];if(!e.hasEmitted){if("withDefault"in t){e.subValueHandler(t.withDefault,0);return}if("value"in r){e.subValueHandler(r.value,0);return}return}const s=e.lastValues[0].value;e.subValueHandler(s,0)}function RT(t,e,n,r,s,i){e.destroy=Qm;const o=ba(t,n.tagName),l=function(h,f){wa(t,h,n,Zt,o,s),Ec(f)},c=Km(e.Observables,i,l,e,s);return s.subContext=c,s.value=e,s.tagJsVar=e,e.processUpdate=function(h,f,m){return dm(h,s,m,n,t,Zt)},{subContext:c,onOutput:l}}function kT(t,e,n,r,s,i){const{subContext:o}=RT(t,e,n,e,s,i);o.hasEmitted||ST(e,o)}function ST(t,e){var o;const r=e.tagJsVar.onOutput;let i=((o=t.Observables[0])==null?void 0:o.value)||t.withDefault;t.callback&&(i=t.callback(i)),r(i,!0,e)}function xT(t,e,n){return{component:!1,onOutput:Ye,tagJsType:fe.subscribe,processInitAttribute:kT,processInit:CT,hasValueChanged:PT,processUpdate:Ye,destroy:fI,callback:n,withDefault:e,Observables:[t]}}function PT(t,e){if(!(t!=null&&t.tagJsType))return 1;const n=t.Observables;if(!n)return 2;const s=e.value.Observables;return!s||s.length!==n.length?3:n.every((o,l)=>o===s[l])?0:4}function VT(t,e,n,r){const s={component:!1,tagJsType:"tag-conversion",processInitAttribute:Ye,processInit:(i,o,l)=>{const c=t.returnValue;return e.tagJsVar.processInit(c,e,n,r.placeholder)},processUpdate:(i,o,l)=>{if(o.locked||o.deleted)return;++o.updateCount;const c=o.value,u=c==null?void 0:c.tagJsType,f=(i==null?void 0:i.tagJsType)!==u;if(yT(i,o)||f||s.hasValueChanged(i,o,n)){s.destroy(o,n),vs(i,o,l,789);return}o.locked=467,o.render$.next();const I=o.returnValue;NT(e,i,o,I,n),delete o.locked},hasValueChanged:(i,o,l)=>{const c=t.returnValue;return e.tagJsVar.hasValueChanged(c,e,l)},destroy:(i,o)=>{++t.updateCount,t.deleted=!0,delete t.returnValue;const l=e.tagJsVar.destroy(e,n);return Pr(l)?l.then(()=>{const c=$h(t);return ut(),c}):(t.destroy$.next(),$h(t))}};return s}function Nm(t,e,n){const r=t.context,s=t.returnValue,i=jn(s);delete r.global,r.contexts=[];const o={updateCount:0,value:s,tagJsVar:i,destroy$:new ue,render$:new ue,placeholder:r.placeholder,withinOwnerElement:!0,parentContext:r,contexts:r.contexts},l=VT(r,o,t,n);return r.subContext=o,r.tagJsVar=l,i.processInit(s,o,t,n.placeholder),t}function Dm(t,e,n){const r=Ea(t,e,n,n==null?void 0:n.appSupport),s=r.propsConfig;if(s){const o=t.tagJsType!==fe.tagComponent?[]:Pm(t,r);s.castProps=o}return Em(r,e.state.newest,e)}function Mm(t,e,n){const r=Dm(t,e,n);return r.templater.tag?Nm(r,r.ownerSupport,e):r}function NT(t,e,n,r,s){const i=du(e.props),o=t.value;o.props=i;const l=s.propsConfig;if(l&&(l.castProps=i),(e==null?void 0:e.tagJsType)==="tagComponent"){if(t.inputsHandler=n.inputsHandler,t.updatesHandler=n.updatesHandler,n.value=e,n.inputsHandler){Xe(n);const c=n.inputsHandler;c(i),Fe()}if(n.updatesHandler){Xe(n);const c=n.updatesHandler;c(i),Fe()}}t.tagJsVar.processUpdate(r,t,s,[]),t.value=r}function $h(t,e){delete t.returnValue,delete t.global,t.contexts=[],t.htmlDomMeta=[],delete t.inputsHandler,delete t.updatesHandler}function DT(t,e,n,r){const s=Dm(t,e,n);return Nm(s,n,e)}function Lm(t,e,n,r,s){return Mi(e),s?DT(t,e,n):Mm(t,e,n)}function MT(t){var s,i;const e=Ot();if(!e)throw new Error("tag.inject can only be called within a tag or host context");let n=e.parentContext;for(;n;){const o=n.contexts;if(o){for(const l of o)if(l.isAttr&&((s=l.tagJsVar)!=null&&s.matchesInjection)){const c=l.tagJsVar.matchesInjection(t,l);if(c!==void 0)return c.returnValue}}if((i=n.tagJsVar)!=null&&i.matchesInjection&&n.tagJsVar.matchesInjection(t,n))return n.returnValue;n=n.parentContext}const r=`Could not find parent context for tag.inject ${t}`;throw console.error(r,{targetItem:t,context:e}),new Error(r)}function LT(t,e){return OT(t,e)}function OT(t,e,n=[]){const r=t.context;n.push({support:t,renderCount:r.renderCount,provider:e});const s=e.children;for(let i=s.length-1;i>=0;--i){const o=s[i],l=o.context;n.push({support:o,renderCount:l.renderCount,provider:e})}return n}function FT(t){const n=t.context.providers;if(!n)return[];const r=[];for(const s of n){const i=s.owner,o=LT(i,s);r.push(...o.map(UT))}return r}function UT(t){return t.support}function $T(t){return fe.templater===t.tagJsType}function BT(t,e){const n=e.context.global;return n&&n.deleted?!1:!!jT(t,e)}function jT(t,e){const n=t.props,s=e.propsConfig.latest;if(zT(n,s))return!0;switch(t.propWatch){case At.IMMUTABLE:return nI(n,s);case At.SHALLOW:return qw(n,s)}return!Bw(n,s,mu)}function zT(t,e){const n=t.length,r=e.length;return n!==r}function jo(t,e=[]){const n=t.context,r=t.templater,s=$T(r),i=t.ownerSupport;if(n.locked)return e.push(t),e;if(s)return jo(i,e);const o=t.context.global;if(o&&o.deleted===!0)return e;const l=t,c=Li(l.templater),u=t.templater.tagJsType,f=i&&u!==fe.stateRender&&(!c||BT(l.templater,l));if(l.context.providers){const E=FT(l);e.push(...E)}return f?(jo(i,e),c&&e.push(l),e):(e.push(l),e)}const HT=[];function Om(t){++Te.locks;for(let e=0;e<t.length;++e)Fm(t[e]);--Te.locks,ut()}function qT(t){++Te.locks,Fm(t),--Te.locks,ut()}function Fm(t){const e=t.context;e.tagJsVar.processUpdate(e.value,e,t.ownerSupport,HT)}function Um(t,e,{resolvePromise:n,resolveValue:r}){return Pr(t)?t.then(GT(e,n)):r(t)}function GT(t,e){return n=>{const r=t.context,s=r.global;if(r.deleted===!0||(s==null?void 0:s.deleted)===!0)return e(n);const i=jo(t);return Om(i),e(n)}}function gt(t){return Ee.stateConfig.handlers.handler(t)}function WT(t){return gt(()=>{var r;const e=t(),n=Uo();return(r=n==null?void 0:n.context)!=null&&r.global?Um(e,n,{resolvePromise:JT,resolveValue:KT}):e}),F}function JT(t){return t}function KT(t){return t}function Bt(t){return gt(function(){Ot().destroy$.toCallback(t)}),F}function QT(t,e,n,...r){const s=n(...r),i=au(t);if(!i)return s;if(!i.context.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}return Pr(s)&&s.finally(()=>{if(!t.global){const o=i.context;o.tagJsVar.processUpdate(o.value,o,i.ownerSupport,[])}}),s}function me(t){const e=Ot(),n=gt({callback:t}),r=gt(()=>$m(e,Ee.stateConfig,n));return n.callback=t,r}function $m(t,e,n){const r=e.states;return function(...i){const o=QT(t,r,n.callback,...i);return ut(),o}}function YT(t){const e=Ot(),n=i=>{Xe(e);const o=t();return Fe(),o},r=e.render$.subscribe(()=>{n()}),s=n();return F.onDestroy(()=>r.unsubscribe()),s}let XT=0;const pi=Bm("click"),as=Bm("mousedown");function Bm(t){return function(n){const r=me(n);return gt(()=>{Xm().addEventListener(t,r)}),r}}const ZT={get:Xm,onclick:pi,click:pi,onClick:pi,mousedown:as,onmousedown:as,onMouseDown:as};Fi("onclick",pi);Fi("click",pi);Fi("onMouseDown",as);Fi("onmousedown",as);Fi("mousedown",as);function Fi(t,e){Object.defineProperty(F,t,{get(){return e},set(n){return e(n)}})}var At;(function(t){t.DEEP="deep",t.SHALLOW="shallow",t.NONE="none",t.IMMUTABLE="immutable"})(At||(At={}));function F(t,e=At.SHALLOW){const n=function(...o){const l=vT(e,o);l.tagJsType=fe.tagComponent,l.processInit=Lm,l.hasValueChanged=Ia;const c=AT(l,n);return c.original=t,l.wrapper=c,l},r=t;n.original=t,r.tags=Ei,r.setUse=Ee,r.ValueTypes=fe,r.tagIndex=XT++,Ei.push(n);const s=n;return s.inputs=function(o){const l=Ot();l.inputsHandler=o;const c=l.tagJsVar;return o(c.props),!0},s.updates=function(o){const l=Ot();return l.updatesHandler=o,!0},s.getInnerHTML=Cm,s}function eI(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")}function tI(){throw new Error("Do not call tag.use as a function but instead set it as: `(props) => tag.use = (use) => html`` `")}F.element=ZT;F.use=tI;F.deepPropWatch=F;F.route=eI;F.inject=MT;F.output=Q;F.onInit=WT;F.onDestroy=Bt;F.callback=me;F.onRender=YT;F.getInnerHTML=Cm;F.app=function(t){throw new Error("Do not call tag.route as a function but instead set it as: `tag.route = (routeProps: RouteProps) => (state) => html`` `")};F.immutableProps=function(e){return F(e,At.IMMUTABLE)};F.watchProps=function(e){return F(e,At.SHALLOW)};Object.defineProperty(F,"use",{set(t){t.original={setUse:Ee,tags:Ei},t.tagJsType=fe.stateRender,t.processInit=Lm,t.processUpdate=Vr,t.hasValueChanged=Ia,t.destroy=Ta}});Object.defineProperty(F,"promise",{set(t){yI(t)}});function nI(t,e){const n=t.length;for(let r=0;r<n;++r){const s=t[r],i=e[r];if(s!==i)return 2}return!1}const jm=3,mu=10;function rI(t,e,n){const r=t.templater;if(r.tagJsType!==fe.stateRender){switch(r.propWatch){case At.IMMUTABLE:return t.propsConfig={latest:e,castProps:n};case At.SHALLOW:return t.propsConfig={latest:e.map(sI),castProps:n}}return t.propsConfig={latest:e.map(iI),castProps:n}}}function sI(t){return uu(t,jm)}function iI(t){return uu(t,mu)}function zm(t,e,n){const r={templater:t,context:e,castedProps:n,appSupport:void 0},s=e.global;return s.blocked=[],e.state||(e.state={newer:{state:[],states:[]}}),r}function Hm(t,e,n,r){e.appSupport=n||e;const s=t.props;return s&&(e.propsConfig=rI(e,s,r)),e}function Ea(t,e,n,r,s){const i=zm(t,e,s);return i.ownerSupport=n||i,i.ownerSupport.appSupport=r||i.ownerSupport,Hm(t,i,r,s)}function oI(t,e,n,r){let s=n.templater||n;const i=t.templater.tag;i&&i._innerHTML&&(s=n._innerHTML);const o=Ea(s,e,r,r.appSupport),c=t.context.state.oldest;wm(c,o)}function Ic(t,e,n){if(Li(e))return t.global===void 0&&Mi(t),t.oldTagJsVar=t.tagJsVar,t.tagJsVar=e,aI(e,t,n),!0;if(t.global){t.oldTagJsVar=t.tagJsVar,t.tagJsVar=e;const i=t.state.newest;if(i)return typeof e===pe.function||oI(i,t,e,n),!0}if(t.inputsHandler){const i=n.propsConfig;t.inputsHandler(i)}return e.processInit(e,t,n,t.placeholder),t.oldTagJsVar=t.tagJsVar,t.tagJsVar=e,!0}function aI(t,e,n){if(!e.state.newest){if(e.inputsHandler){const r=n.propsConfig;e.inputsHandler(r)}t.processInit(t,e,n,e.placeholder);return}}function vs(t,e,n,r){const s=t&&t.tagJsType;if(delete e.deleted,s){Ic(e,t,n);return}if(at(t)){$o(e,t,n),e.oldTagJsVar=e.tagJsVar,e.tagJsVar=qm(t);return}if(typeof t===pe.function){e.value=t;return}r&&rw(t,e)}function qm(t){return{component:!1,tagJsType:"array",value:t,processInitAttribute:Ye,processInit:cI,processUpdate:lI,hasValueChanged:Aw,destroy:ym}}function lI(t,e,n){++e.updateCount;const s=e.tagJsVar.hasValueChanged(t,e,n);return s?(ym(e),vs(t,e,n,s),s):Array.isArray(t)||Vr(t,e,n)===0?($o(e,t,n),0):1}function cI(t,e,n,r,s){$o(e,t,n,s)}function jn(t){return(t==null?void 0:t.tagJsType)?t:uI(t)}function uI(t){return at(t)?qm(t):hm(t)}function va(t,e,n,r,s){return{description:"getNewContext",updateCount:0,value:t,destroy$:new ue,render$:new ue,tagJsVar:s||jn(t),withinOwnerElement:n,parentContext:r}}function Gm(t,e,n,r,s){const i=document.createTextNode(fs),o=document.createTextNode(fs),l=va(t,n,!0,e.context);if(l.withinOwnerElement=!1,l.arrayStartMarker=i,l.placeholder=o,s)Ti.push([Bh,[s,i,l]]);else{const c=[jh,[r,i,l]],u=[jh,[r,o,l]];mt.push(c,u)}return tw(t,e,l,s,o),s&&Ti.push([Bh,[s,o,l]]),l}function Bh(t,e,n){n.arrayMarkersDeleted||t.appendChild(e)}function jh(t,e,n){if(n.arrayMarkersDeleted)return;t.parentNode.insertBefore(e,t)}function Wm(t,e,n,r){return e.hasEmitted=!0,e.contextItem=Gm(t,n,[],r)}function Jm(t,e){let n;return t&&(n=e=document.createTextNode(fs),Ti.push([tm,[t,e]])),{appendMarker:n,insertBefore:e}}function dI(t,e,n){const r=fT(t,e,n);if(e.hasEmitted!==!0){const s=e.value.Observables;if(!s||!("value"in s[0]))return}if(r===0&&t.callback){const s=e.subContext;Vm(t,s)}}function hI(t,e,n,r,s){const i=t.Observables,{appendMarker:o,insertBefore:l}=Jm(s,r);let c=function(f,m,E){Wm(f,E,n,l),Ec(m),c=E.tagJsVar.onOutput=function(k,D,S){const R=S.contextItem,z=R.tagJsVar.hasValueChanged(k,R,n);z&&(R.tagJsVar.destroy(R,n),vs(k,R,n,z)),R.tagJsVar.processUpdate(k,R,n,[k]),R.value=k,Ec(D)}};const u=Km(i,n,(h,f,m)=>c(h,f,m),t,e);return u.appendMarker=o,e.subContext=u,t.processUpdate=dI,t.onOutput=c,u}function Km(t,e,n,r,s){function i(u,h){var f;c.lastValues[h]={value:u,tagJsVar:jn(u),oldTagJsVar:(f=c.lastValues[h])==null?void 0:f.tagJsVar},o(c.lastValues,h)}function o(u,h){const f=c.tagJsVar;if(f==null?void 0:f.callback){Xe(s);const I=f.callback(...u.map(k=>k.value));n(I,l,c),Fe();return}const E=u[h].value;n(E,l,c)}let l=!0;const c={lastValues:[],subValueHandler:i,valuesHandler:o,tagJsVar:r,subscriptions:[]};return t.forEach((u,h)=>{l=!0,c.subscriptions.push(u.subscribe(f=>i(f,h))),l=!1}),r.onOutput=n,c}function Qm(t){const e=t.subContext;if(!e)return;e.subscriptions.forEach(r=>r.unsubscribe()),delete t.subContext}function fI(t,e){++t.updateCount;const n=t.subContext;return Qm(t),lm(n,e)}function Ec(t){return t||Ee.stateConfig.support?!1:(ut(),!0)}class _t extends ue{constructor(n){super(n);wt(this,"value");this.value=n}subscribe(n){const r=super.subscribe(n);return n(this.value,r),r}}const Ym=((t,e)=>gu(t,e).pastResult),pI=t=>t;function mI(t){const e=(n,r)=>gu(n,r,t).pastResult;return e.setup=t,yu(()=>e,e),e}const gu=(t,e,{init:n,before:r,final:s=pI}={})=>{const i=gt({pastResult:void 0,values:void 0}),l=typeof t=="function"?t():t,c=i.values===void 0;let u=0;c&&typeof t=="function"&&F.onRender(()=>{if(++u,u===1)return;const f=t();h(f)});function h(f){if(i.values===void 0){if(r&&!r(f))return i.values=f,i;const k=(n||e)(f,i.values);return i.pastResult=s(k),i.values=f,i}if(f.every((I,k)=>I===i.values[k]))return i;if(r&&!r(f))return i.values=f,i;const E=e(f,i.values);return i.pastResult=s(E),i.values.length=0,i.values.push(...f),i}return h(l)};function yu(t,e){return Object.defineProperty(e,"noInit",{get(){const n=t();return n.setup.init=()=>{},n}}),Object.defineProperty(e,"asSubject",{get(){const n=t(),r=gt(()=>Uo()),s=gt(()=>new _t(void 0));gt(()=>({state:Ee.stateConfig.state,states:Ee.stateConfig.states}));const i=(o,l)=>(gu(o,(u,h)=>{const f=Uo(),m=l(u,h);f!==r&&r.context.state.older,s.next(m)},n.setup),s);return i.setup=n.setup,yu(()=>i,i),i}}),Object.defineProperty(e,"truthy",{get(){const n=t();return n.setup.before=r=>r.every(s=>s),n}}),e}yu(()=>mI({}),Ym);class _u extends Error{constructor(n,r,s={}){super(n);wt(this,"details");this.name=_u.name,this.details={...s,errorCode:r}}}class bu extends _u{constructor(e,n){super(e,"sync-callback-error",n),this.name=bu.name}}new bu("callback() was called outside of synchronous rendering. Use `callback = callbackMaker()` to create a callback that could be called out of sync with rendering");const gI=()=>{};function yI(t){const e=Ot(),n=gt({callback:gI}),r=gt({current:void 0}),s=gt(()=>$m(e,Ee.stateConfig,n));if(r.current!==t){r.current=t;const i=t;t.then(()=>{r.current===i&&s()})}}function Ot(){return Ee.stateConfig.context}function Xm(){return Ot().target}const Ro=[];function Xe(t){return Ro.push(t),Ee.stateConfig.context=t}function Fe(){Ro.pop(),Ee.stateConfig.context=Ro[Ro.length-1]}function _I(t,e,n,r,s,i,o){const l=document.createTextNode(fs);if(Ei.push(n.wrapper||{original:n}),i.placeholder=l,e.isApp=!0,!s)throw new Error(`Cannot tagElement, element received is type ${typeof s} and not type Element`);s.destroy=function(){const f=i.events;for(const E in f){const I=f[E];s.removeEventListener(E,I)}i.events={},++Te.locks;const m=Oi(h,e);return--Te.locks,ut(),m},++Te.locks;const c=document.createDocumentFragment();c.appendChild(l);const h=Mm(n,i,{appSupport:{appElement:s,context:i},appElement:s,context:i,isRoot:!0});return h.appElement=s,o&&(r.tag=h.templater.tag),--Te.locks,ut(),s.appendChild(c),{support:h,tags:Ei,ValueTypes:fe}}function bI(t,e,n){const r=zm(t,e);return Hm(t,r,r),r.appElement=n,r.context=e,e.state.oldest||(e.state.oldest=r,e.state.older=e.state.newer),e.state.newest=r,r}typeof document=="object"&&(document.taggedJs&&console.warn("🏷️🏷️ Multiple versions of taggedjs are loaded. May cause issues."),document.taggedJs=!0);const Sl=[],zh="__taggedjs_tag_element__";function rx(t,e,n){const r=e[zh],s=Sl.findIndex(E=>E.element===e);if((r||s>=0)&&console.warn("tagElement called multiple times for the same element",{element:e}),s>=0){const E=Sl[s].support;Oi(E,E.context.global),Sl.splice(s,1)}e[zh]=!0,e.innerHTML="";let i=(()=>h(...n));i.propWatch=At.NONE,i.tagJsType=fe.stateRender,i.processUpdate=Vr,i.props=[n],i.isApp=!0;const o=wI(i,e),l=o.global,c=o.state.newest;im(c.context),ma(c);let h=t(...n||[]);const f=typeof h==pe.function;f||(Li(h)?(o.state.newest.propsConfig={latest:[n],castProps:[n]},i.propWatch=h.propWatch,i.tagJsType=h.tagJsType,i.wrapper=h.wrapper,i=h):(i.tag=h,h=t));const m=_I(t,l,i,h,e,o,f);return Fe(),m}function wI(t,e){const n={component:!1,tagJsType:"templater",hasValueChanged:Ia,destroy:Ta,processInitAttribute:Ye,processInit:function(){console.debug("do nothing app function")},processUpdate:Vr},r={updateCount:0,value:t,varCounter:0,destroy$:new ue,render$:new ue,withinOwnerElement:!1,renderCount:0,global:void 0,state:{},tagJsVar:n};return Mi(r),r.events={},bI(t,r,e),r}const Zm=":tagvar",TI=":";function II(t){return Array.isArray(t)&&Object.prototype.hasOwnProperty.call(t,"raw")}function EI(t,e){return function(r,s,i){if(II(s)){const o=[];for(let c=0;c<s.length;++c)o.push(s[c]),c<i.length&&o.push(String(i[c]??""));const l=o.join("");return e(r,[t,l])}return e(r,[t,s])}}const vI=[["alt","alt"],["ariaLabel","aria-label"],["ariaHidden","aria-hidden"],["referrerPolicy","referrerpolicy"],["autoFocus","autoFocus"],["border","border"],["id","id"],["for","for"],["fill","fill"],["content","content"],["charset","charset"],["cellPadding","cellpadding"],["cellSpacing","cellspacing"],["class","class"],["href","href"],["lang","lang"],["label","label"],["loading","loading"],["value","value"],["placeholder","placeholder"],["src","src"],["title","title"],["width","width"],["height","height"],["type","type"],["min","min"],["max","max"],["step","step"],["name","name"],["wrap","wrap"],["checked","checked"],["disabled","disabled"],["selected","selected"],["minLength","minLength"],["maxLength","maxLength"],["inputMode","inputMode"],["open","open"],["rel","rel"],["required","required"],["readonly","readonly"],["readOnly","readonly"],["rows","rows"],["style","style"],["target","target"],["viewBox","viewBox"],["valign","valign"]];function AI(t,e,n){const r=Ui(t,t.elementFunctions);return eg(r,e,n)}function eg(t,e,n){function r(s){return r.toCallback(s)}return r.toCallback=n,t.listeners.push([e,r]),t.allListeners.push([e,r]),t}function tg(t,e){const n=Ui(t,t.elementFunctions);return NI(e[0],e[1],n),n}function CI(t,e){const n=Ui(t,t.elementFunctions);for(const r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;const s=e[r];n.attributes.push([r,s]),rg(n,s),vi(r)?Ho(r,n):vi(s)&&Ho(s,n)}return n}const RI=Object.fromEntries(vI.map(([t,e])=>[t,EI(e,tg)])),kI=[["onClose","onclose"],["onCancel","oncancel"],["onDoubleClick","ondblclick"],["onClick","click"],["onDragStart","ondragend"],["onDragEnd","ondragstart"],["onDragOver","ondragover"],["onDrop","ondrop"],["onPointerDown","onpointerdown"],["onBlur","onblur"],["onChange","onchange"],["onSubmit","onsubmit"],["onInput","oninput"],["contextMenu","contextmenu"],["onMouseDown","onmousedown"],["onMouseUp","onmouseup"],["onMouseOver","onmouseover"],["onMouseOut","onmouseout"],["onKeyDown","onkeydown"],["onKeyUp","onkeyup"]];function ng(t,e){return t.attributes.push(e),rg(t,e[1]),vi(e[0])?Ho(e[0],t):vi(e[1])&&Ho(e[1],t),t}const SI=(()=>{const t=Object.fromEntries(kI.map(([r,s])=>[r,function(o){return AI(this,s,o)}])),e=Object.fromEntries(Object.entries(RI).map(([r,s])=>[r,xI(s)])),n=e.id;return e.id=function(...s){const i=s[0];return this.arrayValue=typeof i=="function"?i():i,n.apply(this,s)},{...t,attr:function(...s){return tg(this,s)},attrs:function(s){return CI(this,s)},key:function(r){return this.arrayValue=r,this},...e}})();function zo(t){return SI}function rg(t,e){let n=1;e!=null&&typeof e!="function"&&typeof e.length=="number"&&(n+=e.length),t.contentId+=n}function xI(t){return(function(n,...r){return t(this,n,r)})}function PI(t,e,n){if(ga(n)){for(const r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;n[r]?t.classList.add(r):t.classList.remove(r)}return}cm(t,e,n)}function Ho(t,e){e.contexts||(e.contexts=[]),e.contexts.push(t),++e.contentId}function vi(t){return Array.isArray(t)||Ar(t)||(t==null?void 0:t.tagJsType)}function Hh(t,e){return(n,r)=>ng(n,[t,r,!1,e])}function be(t){return(e,n)=>eg(e,t,n)}const VI=Object.fromEntries([["onClick",be("click")],["onDoubleClick",be("ondblclick")],["onDblClick",be("ondblclick")],["onDragStart",be("ondragstart")],["onDragEnd",be("ondragend")],["onDrop",be("ondrop")],["onDragOver",be("ondragover")],["onPointerDown",be("onpointerdown")],["onBlur",be("onblur")],["onChange",be("onchange")],["onCancel",be("oncancel")],["onClose",be("onclose")],["onInput",be("oninput")],["onMousedown",be("onmousedown")],["onMouseDown",be("onmousedown")],["onMouseup",be("onmouseup")],["onMouseUp",be("onmouseup")],["onMouseover",be("onmouseover")],["onMouseOver",be("onmouseup")],["onMouseout",be("onmouseout")],["onMouseOut",be("onmouseout")],["onKeyup",be("onkeyup")],["onKeyUp",be("onkeyup")],["onKeydown",be("onkeydown")],["onKeyDown",be("onkeydown")]]),qh=Object.assign(Object.fromEntries(["checked","disabled","selected"].map(t=>[t,Hh(t,aw)])),{class:Hh("class",PI)},VI);function NI(t,e,n){return t in qh?qh[t](n,e):ng(n,[t,e,!1,Zt])}function sg(t,e){++t.updateCount;const n=t.contexts,r=[];if(t.paintCommands){for(let s=mt.length-1;s>=0;--s){const i=mt[s],o=t.paintCommands.indexOf(i);if(o>=0&&(mt.splice(s,1),t.paintCommands.splice(o,1),t.paintCommands.length===0))break}delete t.paintCommands,xl(t);return}if(n.length&&(qo(n,e,r),n.length=0,r.length)){const s=t.htmlDomMeta;return t.deleted=!0,Promise.all(r).then(()=>{++Te.locks,Ii(s),xl(t),--Te.locks,ut()})}Ii(t.htmlDomMeta),xl(t)}function xl(t){t.htmlDomMeta=[],delete t.contexts,t.deleted=!0}function qo(t,e,n){const r=t[0],s=r.tagJsVar.destroy(r,e);if(r.deleted=!0,Pr(s))return n.push(s.then(()=>{if(t.length>1)return qo(t.slice(1,t.length),e,n)}));if(r.htmlDomMeta&&(Ii(r.htmlDomMeta),delete r.htmlDomMeta),t.length>1)return qo(t.slice(1,t.length),e,n)}function ig(t,e,n){if(e.deleted===!0)return;++e.updateCount;const s=wu(t,e);function i(){sg(e,n),e.htmlDomMeta=[],delete e.deleted,vs(t,e,n,789)}if(s){i();return}const o=e.contexts,l=t.contexts||[],c=e.tagJsVar,u=t,h=c.allListeners,f=u.allListeners;for(let m=0;m<f.length;++m){const E=f[m],I=h[m][1];I.toCallback=E[1].toCallback}if(o.length!==l.length){const m=new Array(o.length);for(let E=0;E<o.length;++E)m[E]=o[E].value;i();return}e.locked=79;for(let m=0;m<o.length;++m){const E=o[m];E.tagJsVar.processUpdate(l[m],E,n)}delete e.locked}function wu(t,e){if(!t)return 1;const n=e.value;if(n===t)return 0;if(t.tagJsType!=="element"||n===null)return 1;const r=t,s=n,i=r.contentId,o=s.contentId;if(i!==o)return 1;const l=r.innerHTML.length,c=s.innerHTML.length;return l!==c?1:0}function og(t,e,n){const r=n[e];if(r){let i=!1;if(t.originalStopPropagation=t.stopPropagation,t.stopPropagation=function(){i=!0,t.originalStopPropagation.call(t),t.stopPropagation=t.originalStopPropagation,delete t.originalStopPropagation},r(t),t.defaultPrevented||i)return}const s=n.parentNode;s&&og(t,e,s)}function ag(t,e,n,r){const s=t.appElement,i=DI(e);e==="blur"&&(e="focusout");const l=t.context.events;if(!l[e]){const c=function(h){og(h,i,h.target)};l[e]=c,s.addEventListener(e,c)}n[i]=r,n[e]=r}function DI(t){return t==="blur"&&(t="focusout"),"_"+t}function MI(t,e){const n=e.context.global,r=function(i,o){if(n.deleted!==!0)return LI(r.tagFunction,r.support,i,o)};return r.tagFunction=t,r.support=e,r}function LI(t,e,n,r){const s=ya(e),i=s.context;i.locked=1;const o=t.apply(n,r);return delete i.locked,lg(o,s)}function lg(t,e){const n=e.context.global;if(n!=null&&n.deleted)return;const r=jo(e);return Om(r),Um(t,e,{resolvePromise:UI,resolveValue:$I})}const OI="no-data-ever",FI="promise-no-data-ever";function UI(){return FI}function $I(){return OI}function cg(t,e,n,r){const s=function(...i){return s.tagFunction(t,i)};s.tagFunction=e,s.support=n,ag(n.appSupport,r,t,s)}function ug(t){return t==null||t===!1}function dg(t,e,n,r,s,i,o,l,c){const u=va(t,[],!0,n);return u.description="tagJsVar-attr",u.target=l,u.isAttr=!0,u.isNameOnly=c,u.stateOwner=ya(i),u.supportOwner=i,Xe(u),r.processInitAttribute(o,t,l,r,u,i,Zt),Fe(),u.oldTagJsVar=u.tagJsVar,u.tagJsVar=r,u}function hg(t,e,n,r,s,i,o,l){if(ug(e))return;const c=typeof e;if(c===pe.object){for(const u in e)Gh(u,n,e,t,r,i,o,i);return i}if(c==="function"){const u=BI(l);l.tagJsVar=u,Xe(l);const h=e(l),f=jn(h);if(Fe(),f!=null&&f.tagJsType){l.state={newer:{state:[],states:[]}};const m=dg(f,i,o,f,-1,r,"attr",n,!0);return m.tagJsVar=f,l.subContext=m,i}return Gh("attr",n,e,t||[],r,i,o,i),i}e.length!==0&&s(n,e,fs)}function Gh(t,e,n,r,s,i,o,l){const c=ba(t,e.tagName),u=n[t],f=pg(t,u,r,e,s,Zt,i,o,c);f!==void 0&&(Array.isArray(f)?l.push(...f):l.push(f))}function BI(t){return{tagJsType:"relay",component:!1,hasValueChanged:(n,r,s)=>r.subContext.tagJsVar.hasValueChanged(n,r.subContext,s),processInitAttribute:(n,r,s,i,o,l,c)=>o.subContext.tagJsVar.processInitAttribute(n,r,s,i,o.subContext,l,c),destroy:(n,r)=>n.subContext.tagJsVar.destroy(n.subContext,r),processUpdate:(n,r,s,i)=>{const o=n(r.subContext);return r.subContext.tagJsVar.processUpdate(o,r.subContext,s,i)},processInit:(n,r,s,i,o)=>r.subContext.tagJsVar.processInit(n,r.subContext,s,i,o),matchesInjection:n=>t.subContext.tagJsVar.matchesInjection(n,t.subContext)}}function jI(t,e,n,r,s,i,o,l,c){if(n){if(ug(e)||e===""){r.removeAttribute(n);return}if(typeof n===pe.object)if(typeof e===pe.object)for(const f in n)f in e||vt.push([Wh,[r,f]]);else for(const f in n)vt.push([Wh,[r,f]])}const u=hg(t,e,r,s,i,o,l,c);u&&o.push(...u)}function Wh(t,e){t.removeAttribute(e)}function zI(t,e,n,r){const s=e,i=t;if(i!=null&&i.tagJsType){const l=e.value;if(!(l!=null&&l.tagJsType)){i.isAttr=!0,Xe(e),i.processInitAttribute(s.attrName,t,s.target,i,s,n,Zt),Fe(),s.tagJsVar=i;return}l.hasValueChanged(i,e,n);return}if(s.isNameOnly){jI(r,t,s.value,s.target,n,s.howToSet,[],s.parentContext,s),s.value=t;return}const o=s.target;JI(t,s.attrName,s,o,n,s.howToSet,s.isSpecial),e.value=t}const HI=new RegExp(Zm+"(\\d+)"+TI,"g");function fg(t){return t.search&&t.startsWith(Zm)?t.search(HI):-1}function qI(t,e,n,r,s,i,o){const l=r.length,c=[];e.forEach(h=>{if(fg(h)>=0){const m=r.length,E=jn(h),I={description:"attribute-array-item",updateCount:0,isAttr:!0,target:n,attrName:t,withinOwnerElement:!0,tagJsVar:E,parentContext:o,destroy$:new ue,render$:new ue};E.processUpdate=function(S,R,M,z){++R.updateCount,u(z)};const k=i[m];I.value=k,c.push(I),++o.varCounter}});function u(h){const f=GI(e,h,l).join("");s(n,t,f)}return u(i),c}function GI(t,e,n){return t.reduce((r,s)=>{if(fg(s)>=0){const o=n++,l=e[o];return r.push(l),r}return r.push(s),r},[])}function WI(t,e,n,r,s,i,o,l,c){if(typeof e===pe.function)return++s.varCounter,mg(e,o,t,n);const u=jn(e),h={description:"dynamic-attribute",updateCount:0,isAttr:!0,target:n,attrName:t,howToSet:i,value:e,withinOwnerElement:!0,tagJsVar:u,destroy$:new ue,render$:new ue,parentContext:s};return r.push(h),u.processUpdate=zI,yw(t,e,h,n,i,o,l),h.value=e,h}function Jh(t){return ga(t)&&"TagJsTag"in t?t.tagJsVar:-1}function pg(t,e,n,r,s,i,o,l,c){const u=Jh(t);let h=u>=0||e===void 0&&typeof t!="string",f=n[u];e!=null&&e.tagJsType?f=e:(t!=null&&t.tagJsType||typeof t=="function")&&(h=!0,f=t,e=t);const m=f;if(m!=null&&m.tagJsType)return dg(e,o,l,m,u,s,t,r,h);if(h){u===-1&&h&&(f=t);const I=va(f,[],!0,l);return I.description="processAttribute",I.isAttr=!0,I.target=r,I.isNameOnly=!0,I.howToSet=i,hg(n,f,r,s,i,o,l,I),I}if(Array.isArray(e))return qI(t,e,r,[],i,n,s.context);const E=Jh(e);if(E>=0){const I=n[E];return WI(t,I,r,[],l,i,s,c)}return wa(t,e,r,i,c,l)}function JI(t,e,n,r,s,i,o){return Ar(t)?QI(s,t,r,e):KI(t,r,e,o,i,s)}function KI(t,e,n,r,s,i){if(r!==!1){um(n,t,e,r);return}switch(t){case void 0:case!1:case null:vt.push([YI,[e,n]]);return}if(Ar(t))return cg(e,t,i,n);s(e,n,t)}function QI(t,e,n,r){return mg(e,t,r,n)}function mg(t,e,n,r){return t=MI(t,e),cg(r,t,e,n)}function YI(t,e){t.removeAttribute(e)}function XI(t,e,n,r,s){for(const i of t){const o=i[0],l=i[1],c=i[2]||!1;let u=i.length>1?Zt:ow;i[3]&&(u=i[3]);const h=s.contexts,f=pg(o,l,e,n,r,u,h,s,c)||void 0;typeof f=="object"&&(h.push(f),++s.varCounter)}}function ZI(t,e,n,r,s){const i=[],o={updateCount:0,parentContext:n,contexts:i,target:e,value:t,htmlDomMeta:[],tagJsVar:{component:!1,tagJsType:"dynamic-text",hasValueChanged:()=>0,processInit:Ye,processInitAttribute:Ye,destroy:(f,m)=>{++o.updateCount,i.forEach(E=>E.tagJsVar.destroy(E,m))},processUpdate:(f,m,E,I)=>{++o.updateCount,Xe(u);let k=f(u);const D=o.underFunction;delete o.underFunction,k instanceof Function&&!k.tagJsType&&(D&&k.toString()===D.toString()?k=u.value:(o.underFunction=k,k=k()));const S=u.tagJsVar.processUpdate(k,u,E,I);return u.value=k,m.value=f,Fe(),S}},withinOwnerElement:!0,destroy$:new ue,render$:new ue};Xe(o);let l=t();Ar(l)&&!l.tagJsType&&(o.underFunction=l,l=l());const u=yg(l,o,e,r,s);return n.contexts.push(o),o.subContext=u,Fe(),u}function gg(t,e,n,r,s){t.forEach(i=>{switch(typeof i){case"string":case"boolean":case"number":return Kh(i,r,s);case"function":{if(i.tagJsType==="element")break;return ZI(i,r,e,n,s)}}if(i==null)return Kh(i,r,s);if(i.tagJsType==="element"){const l=_g(i,e,n,e.contexts);mt.push([s,[r,l]]),e.htmlDomMeta.push({nn:l.tagName,domElement:l,at:[]});return}return yg(i,e,r,n,s)})}function yg(t,e,n,r,s){const i=va(t,[],!0,e);if(e.contexts.push(i),i.target=n,i.placeholder=document.createTextNode(""),mt.push([s,[n,i.placeholder]]),Xe(i),i.inputsHandler){const l=r.propsConfig;i.inputsHandler(l)}return i.tagJsVar.processInit(t,i,r,i.placeholder),Fe(),i}function Kh(t,e,n){const r=_a(t),s=document.createTextNode(r);return mt.push([n,[e,s]]),s}function _g(t,e,n,r){const s=t.tagName,i=document.createElement(s);e.target=i;const o=t.attributes;for(let c=0;c<o.length;++c){const u=o[c],h=u[0];typeof h=="string"&&(u[2]=ba(h,s))}XI(o,[],i,n,e),gg(t.innerHTML,e,n,i,tm);const l=t.listeners;for(let c=0;c<l.length;++c)eE(t,c,n,l[c],i);return i}function eE(t,e,n,r,s){const i=r[0],o=(...l)=>{const u=t.listeners[e][1],h=ya(n),f=h.context,m=f.updateCount;f.locked=1,++Te.locks,Xe(f);const E=u(...l);return--Te.locks,delete f.locked,Fe(),m===f.updateCount?lg(E,h):(ut(),Pr(E)?E.then(()=>{const k=h.context.state.newest;return qT(k),"promise-no-data-ever"}):"no-data-ever")};ag(n.appSupport,i,s,o)}function tE(t,e,n,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],e.locked=34;const s=_g(t,e,n,e.contexts);delete e.locked;const i=[ou,[r,s,"htmlTag.processInit"]];mt.push(i),e.paintCommands=[i],Sn.push([()=>{delete e.paintCommands},[]]);const o={nn:t.tagName,domElement:s,at:t.attributes};return e.htmlDomMeta=[o],s}function G(t){const n=Ui({component:!1,tagJsType:"element",processInitAttribute:Ye,processInit:tE,destroy:sg,processUpdate:ig,hasValueChanged:wu,tagName:t,innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],elementFunctions:zo,render:function(){return bT(this)}},zo);return n.tagName=t,n}function Ui(t,e){const n=function r(...s){const i={...r};i.attributes=jr(r.attributes),i.listeners=jr(r.listeners),i.allListeners=jr(r.allListeners);let o=i.contexts;i.innerHTML=s;for(let l=0;l<s.length;++l){const c=s[l];if(vi(c)){if(c.tagJsType==="element"){Qh(i.allListeners,c.allListeners),c.contexts&&(o||(o=[],i.contexts=o),Qh(o,c.contexts),++i.contentId);continue}o||(o=[],i.contexts=o),o.push(c)}}return i};return Object.assign(n,t),nE(n,e(n)),n.attributes=jr(t.attributes),n.listeners=jr(t.listeners),n.allListeners=jr(t.allListeners),n.toString=function(){return Rm(this)},n}function jr(t){return t.length?t.slice():[]}function Qh(t,e){for(let n=0;n<e.length;++n)t.push(e[n])}function nE(t,e){for(const n in e){const r=e[n];try{t[n]=r}catch{Object.defineProperty(t,n,{value:r,writable:!0,configurable:!0,enumerable:!1})}}}const ve=rE();function rE(){const e=Ui({component:!1,tagJsType:"element",processInitAttribute:Ye,processInit:sE,destroy:iE,processUpdate:ig,hasValueChanged:wu,tagName:"no-element",innerHTML:[],attributes:[],contentId:0,listeners:[],allListeners:[],render(){return this.innerHTML.map(n=>n).join("")},elementFunctions:zo},zo);return e.tagName="no-element",e}function sE(t,e,n,r){e.contexts=e.contexts||[],e.htmlDomMeta=[],gg(t.innerHTML,e,n,r,ou)}function iE(t,e){++t.updateCount;const n=t.contexts,r=[];if(n.length&&(qo(n,e,r),n.length=0,r.length)){const s=t.htmlDomMeta;return Promise.all(r).then(()=>{++Te.locks,Ii(s),--Te.locks,ut()})}}const q=G("button"),Ai=G("select"),Vt=G("option"),oE=G("optgroup"),le=G("input"),As=G("textarea");G("html");G("head");const bg=G("title");G("meta");G("link");const Ft=G("style");G("body");G("script");G("noscript");const wg=G("hr"),Tu=G("h1"),Je=G("h2"),Be=G("h3");G("h4");G("h5");G("h6");G("ol");const Yh=G("ul"),zr=G("li"),_=G("div");G("main");const Pl=G("section");G("header");G("footer");G("form");const Aa=G("fieldset");G("legend");G("dialog");G("pre");G("table");G("tr");G("td");G("th");G("thead");G("tbody");G("tfoot");const Tg=G("iframe"),j=G("a"),aE=G("u"),X=G("img"),he=G("br"),re=G("label"),se=G("p"),B=G("small"),Z=G("span"),zn=G("strong"),lE=G("b");G("sup");G("nav");G("figure");G("figcaption");G("code");G("canvas");const ko=G("svg"),Ht=G("path"),po=G("polygon"),cE=G("rect");G("details");G("summary");const Ig=F(({date:t})=>{const e=performance.now().toString().replace(/\./g,"_"),n=`${e}-days-plus`,r=dE();let s;o(),Ig.updates(f=>{const m=t;[{date:t}]=f,t!=m&&(c(),i())}),t=t||new Date;function i(){const m=t-new Date;if(m<0){h({days:0,hours:0,minutes:0,seconds:0}),l();return}let E=Math.floor(m/(1e3*60*60*24));const I=Math.floor(m%(1e3*60*60*24)/(1e3*60*60)),k=Math.floor(m%(1e3*60*60)/(1e3*60)),D=Math.floor(m%(1e3*60)/1e3);h({days:E,hours:I,minutes:k,seconds:D})}function o(){s=setInterval(i,Jt)}function l(){clearInterval(s),s=void 0}F.onDestroy(l);function c(){l(),o()}function u(f,m,E){const I=document.createElement("span");if(I.classList.add("wrap"),I.innerText=m,f.appendChild(I),f.children.length===1)return;function k(){requestAnimationFrame(()=>{I.classList.add("changed"),requestAnimationFrame(()=>{setTimeout(()=>{f.removeChild(I)},200)})})}setTimeout(k,E.speed-1)}const h=me(f=>{const m={...f};let{days:E}=m;const I=document.getElementById(n);I&&(E>99?(m.days=99,I.style.display=""):I.style.display="none",Object.entries(m).forEach(([k,D])=>{const S=uE(D),R=r[k];S[0]!=R[0].value$.value&&(R[0].value$.next(S[0]),u(document.getElementById(`${e}-${k}-0`),S[0],R[0])),S[1]!=R[1].value$.value&&(R[1].value$.next(S[1]),u(document.getElementById(`${e}-${k}-1`),S[1],R[1]))}))});return ve(Ft(`
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
    `),_.class`countdown`(_(_.class`digit-container`(Z.class`digit`(_.class`line`,Z.id`${e}-days-0`,Z.class`placeholder`("0")),Z.class`digit`(_.class`line`,Z.id`${e}-days-1`,Z.class`placeholder`("0")),Z.id`${e}-days-plus`.class`label`.style`display:none`("+")),_.class`label`("Days")),_(_.class`digit-container`(Z.class`digit`(_.class`line`,Z.id`${e}-hours-0`,Z.class`placeholder`("0")),Z.class`digit`(_.class`line`,Z.id`${e}-hours-1`,Z.class`placeholder`("0"))),_.class`label`("Hours")),_(_.class`digit-container`(Z.class`digit`(_.class`line`,Z.id`${e}-minutes-0`,Z.class`placeholder`("0")),Z.class`digit`(_.class`line`,Z.id`${e}-minutes-1`,Z.class`placeholder`("0"))),_.class`label`.contextMenu(c)("Minutes")),_(_.class`digit-container`(Z.class`digit`(_.class`line`,Z.id`${e}-seconds-0`,Z.class`placeholder`("0")),Z.class`digit`(_.class`line`,Z.id`${e}-seconds-1`,Z.class`placeholder`("0"))),_.class`label`.contextMenu(l)("Seconds"))))});function uE(t){const e=t%10;return[Math.floor(t/10),e]}const Jt=1e3;function dE(){return{days:[{speed:Jt*60*60*24*10,value$:new ue},{speed:Jt*60*60*24,value$:new ue}],hours:[{speed:Jt*60*60*10,value$:new ue},{speed:Jt*60*60,value$:new ue}],minutes:[{speed:Jt*60*10,value$:new ue},{speed:Jt*60,value$:new ue}],seconds:[{speed:Jt*10,value$:new ue},{speed:Jt,value$:new ue}]}}const hE=()=>{};var Xh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},fE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,E=u&63;c||(E=64,o||(m=64)),r.push(n[h],n[f],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Eg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):fE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||f==null)throw new pE;const m=i<<2|l>>4;if(r.push(m),u!==64){const E=l<<4&240|u>>2;if(r.push(E),f!==64){const I=u<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mE=function(t){const e=Eg(t);return vg.encodeByteArray(e,!0)},Go=function(t){return mE(t).replace(/\./g,"")},Ag=function(t){try{return vg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yE=()=>gE().__FIREBASE_DEFAULTS__,_E=()=>{if(typeof process>"u"||typeof Xh>"u")return;const t=Xh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ag(t[1]);return e&&JSON.parse(e)},Ca=()=>{try{return hE()||yE()||_E()||bE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Cg=t=>{var e,n;return(n=(e=Ca())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},wE=t=>{const e=Cg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rg=()=>{var t;return(t=Ca())==null?void 0:t.config},kg=t=>{var e;return(e=Ca())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Cs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function IE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Go(JSON.stringify(n)),Go(JSON.stringify(o)),""].join(".")}const mi={};function EE(){const t={prod:[],emulator:[]};for(const e of Object.keys(mi))mi[e]?t.emulator.push(e):t.prod.push(e);return t}function vE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Zh=!1;function xg(t,e){if(typeof window>"u"||typeof document>"u"||!Cs(window.location.host)||mi[t]===e||mi[t]||Zh)return;mi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=EE().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,E){m.setAttribute("width","24"),m.setAttribute("id",E),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Zh=!0,o()},m}function h(m,E){m.setAttribute("id",E),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function f(){const m=vE(r),E=n("text"),I=document.getElementById(E)||document.createElement("span"),k=n("learnmore"),D=document.getElementById(k)||document.createElement("a"),S=n("preprendIcon"),R=document.getElementById(S)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const M=m.element;l(M),h(D,k);const z=u();c(R,S),M.append(R,I,D,z),document.body.appendChild(M)}i?(I.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,I.innerText="Preview backend running in this workspace."),I.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function CE(){var e;const t=(e=Ca())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xE(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PE(){return!CE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VE(){try{return typeof indexedDB=="object"}catch{return!1}}function NE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DE,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ME(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new on(s,l,r)}}function ME(t,e){return t.replace(LE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LE=/\{\$([^}]+)}/g;function OE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ef(i)&&ef(o)){if(!Cr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ef(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function FE(t,e){const n=new UE(t,e);return n.subscribe.bind(n)}class UE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$E(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Vl),s.error===void 0&&(s.error=Vl),s.complete===void 0&&(s.complete=Vl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $E(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Vl(){}/**
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
 */function Ve(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _r="[DEFAULT]";/**
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
 */class BE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new TE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zE(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jE(t){return t===_r?void 0:t}function zE(t){return t.instantiationMode==="EAGER"}/**
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
 */class HE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const qE={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},GE=ie.INFO,WE={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},JE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=WE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Iu{constructor(e){this.name=e,this._logLevel=GE,this._logHandler=JE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const KE=(t,e)=>e.some(n=>t instanceof n);let tf,nf;function QE(){return tf||(tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YE(){return nf||(nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pg=new WeakMap,vc=new WeakMap,Vg=new WeakMap,Nl=new WeakMap,Eu=new WeakMap;function XE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pg.set(n,t)}).catch(()=>{}),Eu.set(e,t),e}function ZE(t){if(vc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vc.set(t,e)}let Ac={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ev(t){Ac=t(Ac)}function tv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dl(this),e,...n);return Vg.set(r,e.sort?e.sort():[e]),xn(r)}:YE().includes(t)?function(...e){return t.apply(Dl(this),e),xn(Pg.get(this))}:function(...e){return xn(t.apply(Dl(this),e))}}function nv(t){return typeof t=="function"?tv(t):(t instanceof IDBTransaction&&ZE(t),KE(t,QE())?new Proxy(t,Ac):t)}function xn(t){if(t instanceof IDBRequest)return XE(t);if(Nl.has(t))return Nl.get(t);const e=nv(t);return e!==t&&(Nl.set(t,e),Eu.set(e,t)),e}const Dl=t=>Eu.get(t);function rv(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=xn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(xn(o.result),c.oldVersion,c.newVersion,xn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const sv=["get","getKey","getAll","getAllKeys","count"],iv=["put","add","delete","clear"],Ml=new Map;function rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ml.get(e))return Ml.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=iv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sv.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return Ml.set(e,i),i}ev(t=>({...t,get:(e,n,r)=>rf(e,n)||t.get(e,n,r),has:(e,n)=>!!rf(e,n)||t.has(e,n)}));/**
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
 */class ov{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(av(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function av(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cc="@firebase/app",sf="0.14.7";/**
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
 */const en=new Iu("@firebase/app"),lv="@firebase/app-compat",cv="@firebase/analytics-compat",uv="@firebase/analytics",dv="@firebase/app-check-compat",hv="@firebase/app-check",fv="@firebase/auth",pv="@firebase/auth-compat",mv="@firebase/database",gv="@firebase/data-connect",yv="@firebase/database-compat",_v="@firebase/functions",bv="@firebase/functions-compat",wv="@firebase/installations",Tv="@firebase/installations-compat",Iv="@firebase/messaging",Ev="@firebase/messaging-compat",vv="@firebase/performance",Av="@firebase/performance-compat",Cv="@firebase/remote-config",Rv="@firebase/remote-config-compat",kv="@firebase/storage",Sv="@firebase/storage-compat",xv="@firebase/firestore",Pv="@firebase/ai",Vv="@firebase/firestore-compat",Nv="firebase",Dv="12.8.0";/**
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
 */const Rc="[DEFAULT]",Mv={[Cc]:"fire-core",[lv]:"fire-core-compat",[uv]:"fire-analytics",[cv]:"fire-analytics-compat",[hv]:"fire-app-check",[dv]:"fire-app-check-compat",[fv]:"fire-auth",[pv]:"fire-auth-compat",[mv]:"fire-rtdb",[gv]:"fire-data-connect",[yv]:"fire-rtdb-compat",[_v]:"fire-fn",[bv]:"fire-fn-compat",[wv]:"fire-iid",[Tv]:"fire-iid-compat",[Iv]:"fire-fcm",[Ev]:"fire-fcm-compat",[vv]:"fire-perf",[Av]:"fire-perf-compat",[Cv]:"fire-rc",[Rv]:"fire-rc-compat",[kv]:"fire-gcs",[Sv]:"fire-gcs-compat",[xv]:"fire-fst",[Vv]:"fire-fst-compat",[Pv]:"fire-vertex","fire-js":"fire-js",[Nv]:"fire-js-all"};/**
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
 */const Wo=new Map,Lv=new Map,kc=new Map;function of(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(kc.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;kc.set(e,t);for(const n of Wo.values())of(n,t);for(const n of Lv.values())of(n,t);return!0}function vu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ft(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Ov={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new $i("app","Firebase",Ov);/**
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
 */class Fv{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=Dv;function Ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Rc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(n||(n=Rg()),!n)throw Pn.create("no-options");const i=Wo.get(s);if(i){if(Cr(n,i.options)&&Cr(r,i.config))return i;throw Pn.create("duplicate-app",{appName:s})}const o=new HE(s);for(const c of kc.values())o.addComponent(c);const l=new Fv(n,r,o);return Wo.set(s,l),l}function Dg(t=Rc){const e=Wo.get(t);if(!e&&t===Rc&&Rg())return Ng();if(!e)throw Pn.create("no-app",{appName:t});return e}function Vn(t,e,n){let r=Mv[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(o.join(" "));return}ps(new Rr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Uv="firebase-heartbeat-database",$v=1,Ci="firebase-heartbeat-store";let Ll=null;function Mg(){return Ll||(Ll=rv(Uv,$v,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Ll}async function Bv(t){try{const n=(await Mg()).transaction(Ci),r=await n.objectStore(Ci).get(Lg(t));return await n.done,r}catch(e){if(e instanceof on)en.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function af(t,e){try{const r=(await Mg()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,Lg(t)),await r.done}catch(n){if(n instanceof on)en.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function Lg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jv=1024,zv=30;class Hv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Gv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>zv){const o=Wv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=lf(),{heartbeatsToSend:r,unsentEntries:s}=qv(this._heartbeatsCache.heartbeats),i=Go(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return en.warn(n),""}}}function lf(){return new Date().toISOString().substring(0,10)}function qv(t,e=jv){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Gv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VE()?NE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return af(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return af(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cf(t){return Go(JSON.stringify({version:2,heartbeats:t})).length}function Wv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function Jv(t){ps(new Rr("platform-logger",e=>new ov(e),"PRIVATE")),ps(new Rr("heartbeat",e=>new Hv(e),"PRIVATE")),Vn(Cc,sf,t),Vn(Cc,sf,"esm2020"),Vn("fire-js","")}Jv("");var Kv="firebase",Qv="12.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(Kv,Qv,"app");function Og(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yv=Og,Fg=new $i("auth","Firebase",Og());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Iu("@firebase/auth");function Xv(t,...e){Jo.logLevel<=ie.WARN&&Jo.warn(`Auth (${Rs}): ${t}`,...e)}function So(t,...e){Jo.logLevel<=ie.ERROR&&Jo.error(`Auth (${Rs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,...e){throw Cu(t,...e)}function It(t,...e){return Cu(t,...e)}function Au(t,e,n){const r={...Yv(),[e]:n};return new $i("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return Au(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ug(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ut(t,"argument-error"),Au(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fg.create(t,...e)}function Y(t,e,...n){if(!t)throw Cu(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function tn(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Zv(){return uf()==="http:"||uf()==="https:"}function uf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zv()||kE()||"connection"in navigator)?navigator.onLine:!0}function t1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=AE()||SE()}get(){return e1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],s1=new ji(3e4,6e4);function ku(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ks(t,e,n,r,s={}){return Bg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Bi({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:c,...i};return RE()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(u.credentials="include"),$g.fetch()(await jg(t,t.config.apiHost,n,l),u)})}async function Bg(t,e,n){t._canInitEmulator=!1;const r={...n1,...e};try{const s=new o1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mo(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Au(t,h,u);Ut(t,h)}}catch(s){if(s instanceof on)throw s;Ut(t,"network-request-failed",{message:String(s)})}}async function i1(t,e,n,r,s={}){const i=await ks(t,e,n,r,s);return"mfaPendingCredential"in i&&Ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function jg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ru(t.config,s):`${t.config.apiScheme}://${s}`;return r1.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class o1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),s1.get())})}}function mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=It(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){return ks(t,"POST","/v1/accounts:delete",e)}async function Ko(t,e){return ks(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function l1(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),s=Su(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gi(Ol(s.auth_time)),issuedAtTime:gi(Ol(s.iat)),expirationTime:gi(Ol(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ol(t){return Number(t)*1e3}function Su(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ag(n);return s?JSON.parse(s):(So("Failed to decode base64 JWT payload"),null)}catch(s){return So("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function df(t){const e=Su(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&c1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function c1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(t){var f;const e=t.auth,n=await t.getIdToken(),r=await Ri(t,Ko(e,{idToken:n}));Y(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(f=s.providerUserInfo)!=null&&f.length?zg(s.providerUserInfo):[],o=h1(t.providerData,i),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new xc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function d1(t){const e=Ve(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t,e){const n=await Bg(t,{},async()=>{const r=Bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await jg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&Cs(t.emulatorConfig.host)&&(c.credentials="include"),$g.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function p1(t,e){return ks(t,"POST","/v2/accounts:revokeToken",ku(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):df(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=df(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await f1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ls;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ls,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new u1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ri(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return l1(this,e)}reload(){return d1(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ft(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await Ri(this,a1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:f,emailVerified:m,isAnonymous:E,providerData:I,stsTokenManager:k}=n;Y(f&&k,e,"internal-error");const D=ls.fromJSON(this.name,k);Y(typeof f=="string",e,"internal-error"),mn(r,e.name),mn(s,e.name),Y(typeof m=="boolean",e,"internal-error"),Y(typeof E=="boolean",e,"internal-error"),mn(i,e.name),mn(o,e.name),mn(l,e.name),mn(c,e.name),mn(u,e.name),mn(h,e.name);const S=new Tt({uid:f,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:D,createdAt:u,lastLoginAt:h});return I&&Array.isArray(I)&&(S.providerData=I.map(R=>({...R}))),c&&(S._redirectEventId=c),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new ls;s.updateFromServerResponse(n);const i=new Tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?zg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ls;l.updateFromIdToken(r);const c=new Tt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;function Yt(t){tn(t instanceof Function,"Expected a class definition");let e=hf.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hf.set(t,e),e)}/**
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
 */class Hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hg.type="NONE";const ff=Hg;/**
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
 */function xo(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xo(this.userKey,s.apiKey,i),this.fullPersistenceKey=xo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ko(this.auth,{idToken:e}).catch(()=>{});return n?Tt._fromGetAccountInfoResponse(this.auth,n,e):null}return Tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(Yt(ff),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Yt(ff);const o=xo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const m=await Ko(e,{idToken:h}).catch(()=>{});if(!m)break;f=await Tt._fromGetAccountInfoResponse(e,m,h)}else f=Tt._fromJSON(e,h);u!==i&&(l=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cs(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qg(e))return"Blackberry";if(Yg(e))return"Webos";if(Gg(e))return"Safari";if((e.includes("chrome/")||Wg(e))&&!e.includes("edge/"))return"Chrome";if(Kg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qg(t=Ze()){return/firefox\//i.test(t)}function Gg(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wg(t=Ze()){return/crios\//i.test(t)}function Jg(t=Ze()){return/iemobile/i.test(t)}function Kg(t=Ze()){return/android/i.test(t)}function Qg(t=Ze()){return/blackberry/i.test(t)}function Yg(t=Ze()){return/webos/i.test(t)}function xu(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function m1(t=Ze()){var e;return xu(t)&&!!((e=window.navigator)!=null&&e.standalone)}function g1(){return xE()&&document.documentMode===10}function Xg(t=Ze()){return xu(t)||Kg(t)||Yg(t)||Qg(t)||/windows phone/i.test(t)||Jg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e=[]){let n;switch(t){case"Browser":n=pf(Ze());break;case"Worker":n=`${pf(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
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
 */class y1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _1(t,e={}){return ks(t,"GET","/v2/passwordPolicy",ku(t,e))}/**
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
 */const b1=6;class w1{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??b1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mf(this),this.idTokenSubscription=new mf(this),this.beforeStateQueue=new y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ko(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ft(this.app))return Promise.reject(Nn(this));const n=e?Ve(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ft(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ft(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _1(this),n=new w1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await p1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Xv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ss(t){return Ve(t)}class mf{constructor(e){this.auth=e,this.observer=null,this.addObserver=FE(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function I1(t){Pu=t}function E1(t){return Pu.loadJS(t)}function v1(){return Pu.gapiScript}function A1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t,e){const n=vu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cr(i,e??{}))return s;Ut(s,"already-initialized")}return n.initialize({options:e})}function R1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function k1(t,e,n){const r=Ss(t);Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ey(e),{host:o,port:l}=S1(e),c=l===null?"":`:${l}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){Y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Y(Cr(u,r.config.emulator)&&Cr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Cs(o)?(Sg(`${i}//${o}${c}`),xg("Auth",!0)):x1()}function ey(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function S1(t){const e=ey(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gf(o)}}}function gf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function x1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e){return i1(t,"POST","/v1/accounts:signInWithIdp",ku(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="http://localhost";class kr extends ty{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,us(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:P1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zi extends Ra{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends zi{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kt.credential(n,r)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends zi{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends zi{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tt._fromIdTokenResponse(e,r,s),o=yf(r);return new ms({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=yf(r);return new ms({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function yf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends on{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yo(e,n,r,s)}}function ny(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,r):i})}async function V1(t,e,n=!1){const r=await Ri(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
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
 */async function N1(t,e,n=!1){const{auth:r}=t;if(ft(r.app))return Promise.reject(Nn(r));const s="reauthenticate";try{const i=await Ri(t,ny(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Su(i.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),ms._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(t,e,n=!1){if(ft(t.app))return Promise.reject(Nn(t));const r="signIn",s=await ny(t,r,e),i=await ms._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t,e){return Ve(t).setPersistence(e)}function L1(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function O1(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function F1(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function U1(t){return Ve(t).signOut()}const Xo="__sak";/**
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
 */class ry{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=1e3,B1=10;class sy extends ry{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);g1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,B1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sy.type="LOCAL";const iy=sy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy extends ry{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oy.type="SESSION";const Vu=oy;/**
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
 */function j1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await j1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Nu("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function H1(t){Nt().location.href=t}/**
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
 */function ay(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function q1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function G1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function W1(){return ay()?self:null}/**
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
 */const ly="firebaseLocalStorageDb",J1=1,Zo="firebaseLocalStorage",cy="fbase_key";class Hi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sa(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function K1(){const t=indexedDB.deleteDatabase(ly);return new Hi(t).toPromise()}function Pc(){const t=indexedDB.open(ly,J1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zo,{keyPath:cy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zo)?e(r):(r.close(),await K1(),e(await Pc()))})})}async function _f(t,e,n){const r=Sa(t,!0).put({[cy]:e,value:n});return new Hi(r).toPromise()}async function Q1(t,e){const n=Sa(t,!1).get(e),r=await new Hi(n).toPromise();return r===void 0?null:r.value}function bf(t,e){const n=Sa(t,!0).delete(e);return new Hi(n).toPromise()}const Y1=800,X1=3;class uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>X1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(W1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await q1(),!this.activeServiceWorker)return;this.sender=new z1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||G1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pc();return await _f(e,Xo,"1"),await bf(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_f(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Q1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sa(s,!1).getAll();return new Hi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uy.type="LOCAL";const dy=uy;new ji(3e4,6e4);/**
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
 */function Du(t,e){return e?Yt(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mu extends ty{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Z1(t){return D1(t.auth,new Mu(t),t.bypassAuthState)}function eA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),N1(n,new Mu(t),t.bypassAuthState)}async function tA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),V1(n,new Mu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Z1;case"linkViaPopup":case"linkViaRedirect":return tA;case"reauthViaPopup":case"reauthViaRedirect":return eA;default:Ut(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=new ji(2e3,1e4);async function rA(t,e,n){if(ft(t.app))return Promise.reject(It(t,"operation-not-supported-in-this-environment"));const r=Ss(t);Ug(t,e,Ra);const s=Du(r,n);return new wr(r,"signInViaPopup",e,s).executeNotNull()}class wr extends hy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=Nu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nA.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="pendingRedirect",Po=new Map;class iA extends hy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const r=await oA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oA(t,e){const n=py(e),r=fy(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function aA(t,e){return fy(t)._set(py(e),"true")}function lA(t,e){Po.set(t._key(),e)}function fy(t){return Yt(t._redirectPersistence)}function py(t){return xo(sA,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t,e,n){return uA(t,e,n)}async function uA(t,e,n){if(ft(t.app))return Promise.reject(Nn(t));const r=Ss(t);Ug(t,e,Ra),await r._initializationPromise;const s=Du(r,n);return await aA(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function dA(t,e){return await Ss(t)._initializationPromise,my(t,e,!1)}async function my(t,e,n=!1){if(ft(t.app))return Promise.reject(Nn(t));const r=Ss(t),s=Du(r,e),o=await new iA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=600*1e3;class fA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gy(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hA&&this.cachedEventUids.clear(),this.cachedEventUids.has(wf(e))}saveEventToCache(e){this.cachedEventUids.add(wf(e)),this.lastProcessedEventTime=Date.now()}}function wf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e={}){return ks(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yA=/^https?/;async function _A(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mA(t);for(const n of e)try{if(bA(n))return}catch{}Ut(t,"unauthorized-domain")}function bA(t){const e=Sc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yA.test(n))return!1;if(gA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const wA=new ji(3e4,6e4);function Tf(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function TA(t){return new Promise((e,n)=>{var s,i,o;function r(){Tf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tf(),n(It(t,"network-request-failed"))},timeout:wA.get()})}if((i=(s=Nt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=Nt().gapi)!=null&&o.load)r();else{const l=A1("iframefcb");return Nt()[l]=()=>{gapi.load?r():n(It(t,"network-request-failed"))},E1(`${v1()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function IA(t){return Vo=Vo||TA(t),Vo}/**
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
 */const EA=new ji(5e3,15e3),vA="__/auth/iframe",AA="emulator/auth/iframe",CA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kA(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ru(e,AA):`https://${t.config.authDomain}/${vA}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},s=RA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bi(r).slice(1)}`}async function SA(t){const e=await IA(t),n=Nt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:kA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),l=Nt().setTimeout(()=>{i(o)},EA.get());function c(){Nt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const xA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PA=500,VA=600,NA="_blank",DA="http://localhost";class If{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MA(t,e,n,r=PA,s=VA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c={...xA,width:r.toString(),height:s.toString(),top:i,left:o},u=Ze().toLowerCase();n&&(l=Wg(u)?NA:n),qg(u)&&(e=e||DA,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[E,I])=>`${m}${E}=${I},`,"");if(m1(u)&&l!=="_self")return LA(e||"",l),new If(null);const f=window.open(e||"",l,h);Y(f,t,"popup-blocked");try{f.focus()}catch{}return new If(f)}function LA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OA="__/auth/handler",FA="emulator/auth/handler",UA=encodeURIComponent("fac");async function Ef(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:s};if(e instanceof Ra){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof zi){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const c=await t._getAppCheckToken(),u=c?`#${UA}=${encodeURIComponent(c)}`:"";return`${$A(t)}?${Bi(l).slice(1)}${u}`}function $A({config:t}){return t.emulator?Ru(t,FA):`https://${t.authDomain}/${OA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="webStorageSupport";class BA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vu,this._completeRedirectFn=my,this._overrideRedirectResult=lA}async _openPopup(e,n,r,s){var o;tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Ef(e,n,r,Sc(),s);return MA(e,i,Nu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ef(e,n,r,Sc(),s);return H1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await SA(e),r=new fA(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fl,{type:Fl},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Fl];i!==void 0&&n(!!i),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_A(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xg()||Gg()||xu()}}const jA=BA;var vf="@firebase/auth",Af="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qA(t){ps(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zg(t)},u=new T1(r,s,i,c);return R1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ps(new Rr("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(r=>new zA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(vf,Af,HA(t)),Vn(vf,Af,"esm2020")}/**
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
 */const GA=300,WA=kg("authIdTokenMaxAge")||GA;let Cf=null;const JA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WA)return;const s=n==null?void 0:n.token;Cf!==s&&(Cf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function KA(t=Dg()){const e=vu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C1(t,{popupRedirectResolver:jA,persistence:[dy,iy,Vu]}),r=kg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=JA(i.toString());O1(n,o,()=>o(n.currentUser)),L1(n,l=>o(l))}}const s=Cg("auth");return s&&k1(n,`http://${s}`),n}function QA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}I1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=It("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",QA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qA("Browser");var Rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dn,yy;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,g){function y(){}y.prototype=g.prototype,b.F=g.prototype,b.prototype=new y,b.prototype.constructor=b,b.D=function(v,A,C){for(var T=Array(arguments.length-2),W=2;W<arguments.length;W++)T[W-2]=arguments[W];return g.prototype[A].apply(v,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,g,y){y||(y=0);const v=Array(16);if(typeof g=="string")for(var A=0;A<16;++A)v[A]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(A=0;A<16;++A)v[A]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=b.g[0],y=b.g[1],A=b.g[2];let C=b.g[3],T;T=g+(C^y&(A^C))+v[0]+3614090360&4294967295,g=y+(T<<7&4294967295|T>>>25),T=C+(A^g&(y^A))+v[1]+3905402710&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(y^C&(g^y))+v[2]+606105819&4294967295,A=C+(T<<17&4294967295|T>>>15),T=y+(g^A&(C^g))+v[3]+3250441966&4294967295,y=A+(T<<22&4294967295|T>>>10),T=g+(C^y&(A^C))+v[4]+4118548399&4294967295,g=y+(T<<7&4294967295|T>>>25),T=C+(A^g&(y^A))+v[5]+1200080426&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(y^C&(g^y))+v[6]+2821735955&4294967295,A=C+(T<<17&4294967295|T>>>15),T=y+(g^A&(C^g))+v[7]+4249261313&4294967295,y=A+(T<<22&4294967295|T>>>10),T=g+(C^y&(A^C))+v[8]+1770035416&4294967295,g=y+(T<<7&4294967295|T>>>25),T=C+(A^g&(y^A))+v[9]+2336552879&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(y^C&(g^y))+v[10]+4294925233&4294967295,A=C+(T<<17&4294967295|T>>>15),T=y+(g^A&(C^g))+v[11]+2304563134&4294967295,y=A+(T<<22&4294967295|T>>>10),T=g+(C^y&(A^C))+v[12]+1804603682&4294967295,g=y+(T<<7&4294967295|T>>>25),T=C+(A^g&(y^A))+v[13]+4254626195&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(y^C&(g^y))+v[14]+2792965006&4294967295,A=C+(T<<17&4294967295|T>>>15),T=y+(g^A&(C^g))+v[15]+1236535329&4294967295,y=A+(T<<22&4294967295|T>>>10),T=g+(A^C&(y^A))+v[1]+4129170786&4294967295,g=y+(T<<5&4294967295|T>>>27),T=C+(y^A&(g^y))+v[6]+3225465664&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^y&(C^g))+v[11]+643717713&4294967295,A=C+(T<<14&4294967295|T>>>18),T=y+(C^g&(A^C))+v[0]+3921069994&4294967295,y=A+(T<<20&4294967295|T>>>12),T=g+(A^C&(y^A))+v[5]+3593408605&4294967295,g=y+(T<<5&4294967295|T>>>27),T=C+(y^A&(g^y))+v[10]+38016083&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^y&(C^g))+v[15]+3634488961&4294967295,A=C+(T<<14&4294967295|T>>>18),T=y+(C^g&(A^C))+v[4]+3889429448&4294967295,y=A+(T<<20&4294967295|T>>>12),T=g+(A^C&(y^A))+v[9]+568446438&4294967295,g=y+(T<<5&4294967295|T>>>27),T=C+(y^A&(g^y))+v[14]+3275163606&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^y&(C^g))+v[3]+4107603335&4294967295,A=C+(T<<14&4294967295|T>>>18),T=y+(C^g&(A^C))+v[8]+1163531501&4294967295,y=A+(T<<20&4294967295|T>>>12),T=g+(A^C&(y^A))+v[13]+2850285829&4294967295,g=y+(T<<5&4294967295|T>>>27),T=C+(y^A&(g^y))+v[2]+4243563512&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^y&(C^g))+v[7]+1735328473&4294967295,A=C+(T<<14&4294967295|T>>>18),T=y+(C^g&(A^C))+v[12]+2368359562&4294967295,y=A+(T<<20&4294967295|T>>>12),T=g+(y^A^C)+v[5]+4294588738&4294967295,g=y+(T<<4&4294967295|T>>>28),T=C+(g^y^A)+v[8]+2272392833&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^y)+v[11]+1839030562&4294967295,A=C+(T<<16&4294967295|T>>>16),T=y+(A^C^g)+v[14]+4259657740&4294967295,y=A+(T<<23&4294967295|T>>>9),T=g+(y^A^C)+v[1]+2763975236&4294967295,g=y+(T<<4&4294967295|T>>>28),T=C+(g^y^A)+v[4]+1272893353&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^y)+v[7]+4139469664&4294967295,A=C+(T<<16&4294967295|T>>>16),T=y+(A^C^g)+v[10]+3200236656&4294967295,y=A+(T<<23&4294967295|T>>>9),T=g+(y^A^C)+v[13]+681279174&4294967295,g=y+(T<<4&4294967295|T>>>28),T=C+(g^y^A)+v[0]+3936430074&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^y)+v[3]+3572445317&4294967295,A=C+(T<<16&4294967295|T>>>16),T=y+(A^C^g)+v[6]+76029189&4294967295,y=A+(T<<23&4294967295|T>>>9),T=g+(y^A^C)+v[9]+3654602809&4294967295,g=y+(T<<4&4294967295|T>>>28),T=C+(g^y^A)+v[12]+3873151461&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^y)+v[15]+530742520&4294967295,A=C+(T<<16&4294967295|T>>>16),T=y+(A^C^g)+v[2]+3299628645&4294967295,y=A+(T<<23&4294967295|T>>>9),T=g+(A^(y|~C))+v[0]+4096336452&4294967295,g=y+(T<<6&4294967295|T>>>26),T=C+(y^(g|~A))+v[7]+1126891415&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~y))+v[14]+2878612391&4294967295,A=C+(T<<15&4294967295|T>>>17),T=y+(C^(A|~g))+v[5]+4237533241&4294967295,y=A+(T<<21&4294967295|T>>>11),T=g+(A^(y|~C))+v[12]+1700485571&4294967295,g=y+(T<<6&4294967295|T>>>26),T=C+(y^(g|~A))+v[3]+2399980690&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~y))+v[10]+4293915773&4294967295,A=C+(T<<15&4294967295|T>>>17),T=y+(C^(A|~g))+v[1]+2240044497&4294967295,y=A+(T<<21&4294967295|T>>>11),T=g+(A^(y|~C))+v[8]+1873313359&4294967295,g=y+(T<<6&4294967295|T>>>26),T=C+(y^(g|~A))+v[15]+4264355552&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~y))+v[6]+2734768916&4294967295,A=C+(T<<15&4294967295|T>>>17),T=y+(C^(A|~g))+v[13]+1309151649&4294967295,y=A+(T<<21&4294967295|T>>>11),T=g+(A^(y|~C))+v[4]+4149444226&4294967295,g=y+(T<<6&4294967295|T>>>26),T=C+(y^(g|~A))+v[11]+3174756917&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~y))+v[2]+718787259&4294967295,A=C+(T<<15&4294967295|T>>>17),T=y+(C^(A|~g))+v[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,b.g[2]=b.g[2]+A&4294967295,b.g[3]=b.g[3]+C&4294967295}r.prototype.v=function(b,g){g===void 0&&(g=b.length);const y=g-this.blockSize,v=this.C;let A=this.h,C=0;for(;C<g;){if(A==0)for(;C<=y;)s(this,b,C),C+=this.blockSize;if(typeof b=="string"){for(;C<g;)if(v[A++]=b.charCodeAt(C++),A==this.blockSize){s(this,v),A=0;break}}else for(;C<g;)if(v[A++]=b[C++],A==this.blockSize){s(this,v),A=0;break}}this.h=A,this.o+=g},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var y=b.length-8;y<b.length;++y)b[y]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,y=0;y<4;++y)for(let v=0;v<32;v+=8)b[g++]=this.g[y]>>>v&255;return b};function i(b,g){var y=l;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=g(b)}function o(b,g){this.h=g;const y=[];let v=!0;for(let A=b.length-1;A>=0;A--){const C=b[A]|0;v&&C==g||(y[A]=C,v=!1)}this.g=y}var l={};function c(b){return-128<=b&&b<128?i(b,function(g){return new o([g|0],g<0?-1:0)}):new o([b|0],b<0?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(b<0)return D(u(-b));const g=[];let y=1;for(let v=0;b>=y;v++)g[v]=b/y|0,y*=4294967296;return new o(g,0)}function h(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return D(h(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(g,8));let v=f;for(let C=0;C<b.length;C+=8){var A=Math.min(8,b.length-C);const T=parseInt(b.substring(C,C+A),g);A<8?(A=u(Math.pow(g,A)),v=v.j(A).add(u(T))):(v=v.j(y),v=v.add(u(T)))}return v}var f=c(0),m=c(1),E=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-D(this).m();let b=0,g=1;for(let y=0;y<this.g.length;y++){const v=this.i(y);b+=(v>=0?v:4294967296+v)*g,g*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(I(this))return"0";if(k(this))return"-"+D(this).toString(b);const g=u(Math.pow(b,6));var y=this;let v="";for(;;){const A=z(y,g).g;y=S(y,A.j(g));let C=((y.g.length>0?y.g[0]:y.h)>>>0).toString(b);if(y=A,I(y))return C+v;for(;C.length<6;)C="0"+C;v=C+v}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function I(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=S(this,b),k(b)?-1:I(b)?0:1};function D(b){const g=b.g.length,y=[];for(let v=0;v<g;v++)y[v]=~b.g[v];return new o(y,~b.h).add(m)}t.abs=function(){return k(this)?D(this):this},t.add=function(b){const g=Math.max(this.g.length,b.g.length),y=[];let v=0;for(let A=0;A<=g;A++){let C=v+(this.i(A)&65535)+(b.i(A)&65535),T=(C>>>16)+(this.i(A)>>>16)+(b.i(A)>>>16);v=T>>>16,C&=65535,T&=65535,y[A]=T<<16|C}return new o(y,y[y.length-1]&-2147483648?-1:0)};function S(b,g){return b.add(D(g))}t.j=function(b){if(I(this)||I(b))return f;if(k(this))return k(b)?D(this).j(D(b)):D(D(this).j(b));if(k(b))return D(this.j(D(b)));if(this.l(E)<0&&b.l(E)<0)return u(this.m()*b.m());const g=this.g.length+b.g.length,y=[];for(var v=0;v<2*g;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(let A=0;A<b.g.length;A++){const C=this.i(v)>>>16,T=this.i(v)&65535,W=b.i(A)>>>16,Ne=b.i(A)&65535;y[2*v+2*A]+=T*Ne,R(y,2*v+2*A),y[2*v+2*A+1]+=C*Ne,R(y,2*v+2*A+1),y[2*v+2*A+1]+=T*W,R(y,2*v+2*A+1),y[2*v+2*A+2]+=C*W,R(y,2*v+2*A+2)}for(b=0;b<g;b++)y[b]=y[2*b+1]<<16|y[2*b];for(b=g;b<2*g;b++)y[b]=0;return new o(y,0)};function R(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function M(b,g){this.g=b,this.h=g}function z(b,g){if(I(g))throw Error("division by zero");if(I(b))return new M(f,f);if(k(b))return g=z(D(b),g),new M(D(g.g),D(g.h));if(k(g))return g=z(b,D(g)),new M(D(g.g),g.h);if(b.g.length>30){if(k(b)||k(g))throw Error("slowDivide_ only works with positive integers.");for(var y=m,v=g;v.l(b)<=0;)y=P(y),v=P(v);var A=O(y,1),C=O(v,1);for(v=O(v,2),y=O(y,2);!I(v);){var T=C.add(v);T.l(b)<=0&&(A=A.add(y),C=T),v=O(v,1),y=O(y,1)}return g=S(b,A.j(g)),new M(A,g)}for(A=f;b.l(g)>=0;){for(y=Math.max(1,Math.floor(b.m()/g.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),C=u(y),T=C.j(g);k(T)||T.l(b)>0;)y-=v,C=u(y),T=C.j(g);I(C)&&(C=m),A=A.add(C),b=S(b,T)}return new M(A,b)}t.B=function(b){return z(this,b).h},t.and=function(b){const g=Math.max(this.g.length,b.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)&b.i(v);return new o(y,this.h&b.h)},t.or=function(b){const g=Math.max(this.g.length,b.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)|b.i(v);return new o(y,this.h|b.h)},t.xor=function(b){const g=Math.max(this.g.length,b.g.length),y=[];for(let v=0;v<g;v++)y[v]=this.i(v)^b.i(v);return new o(y,this.h^b.h)};function P(b){const g=b.g.length+1,y=[];for(let v=0;v<g;v++)y[v]=b.i(v)<<1|b.i(v-1)>>>31;return new o(y,b.h)}function O(b,g){const y=g>>5;g%=32;const v=b.g.length-y,A=[];for(let C=0;C<v;C++)A[C]=g>0?b.i(C+y)>>>g|b.i(C+y+1)<<32-g:b.i(C+y);return new o(A,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,yy=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Dn=o}).apply(typeof Rf<"u"?Rf:typeof self<"u"?self:typeof window<"u"?window:{});var go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _y,ci,by,No,Vc,wy,Ty,Iy;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof go=="object"&&go];for(var d=0;d<a.length;++d){var p=a[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var p=r;a=a.split(".");for(var w=0;w<a.length-1;w++){var x=a[w];if(!(x in p))break e;p=p[x]}a=a[a.length-1],w=p[a],d=d(w),d!=w&&d!=null&&e(p,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var p=[],w;for(w in d)Object.prototype.hasOwnProperty.call(d,w)&&p.push([w,d[w]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function c(a,d,p){return a.call.apply(a.bind,arguments)}function u(a,d,p){return u=c,u.apply(null,arguments)}function h(a,d){var p=Array.prototype.slice.call(arguments,1);return function(){var w=p.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function f(a,d){function p(){}p.prototype=d.prototype,a.Z=d.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(w,x,V){for(var U=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)U[ne-2]=arguments[ne];return d.prototype[x].apply(w,U)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function E(a){const d=a.length;if(d>0){const p=Array(d);for(let w=0;w<d;w++)p[w]=a[w];return p}return[]}function I(a,d){for(let w=1;w<arguments.length;w++){const x=arguments[w];var p=typeof x;if(p=p!="object"?p:x?Array.isArray(x)?"array":p:"null",p=="array"||p=="object"&&typeof x.length=="number"){p=a.length||0;const V=x.length||0;a.length=p+V;for(let U=0;U<V;U++)a[p+U]=x[U]}else a.push(x)}}class k{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(a){o.setTimeout(()=>{throw a},0)}function S(){var a=b;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class R{constructor(){this.h=this.g=null}add(d,p){const w=M.get();w.set(d,p),this.h?this.h.next=w:this.g=w,this.h=w}}var M=new k(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let P,O=!1,b=new R,g=()=>{const a=Promise.resolve(void 0);P=()=>{a.then(y)}};function y(){for(var a;a=S();){try{a.h.call(a.g)}catch(p){D(p)}var d=M;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}O=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,d),o.removeEventListener("test",p,d)}catch{}return a})();function T(a){return/^[\s\xa0]*$/.test(a)}function W(a,d){A.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}f(W,A),W.prototype.init=function(a,d){const p=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(p=="mouseover"?d=a.fromElement:p=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&W.Z.h.call(this)},W.prototype.h=function(){W.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ne="closure_listenable_"+(Math.random()*1e6|0),Zi=0;function eo(a,d,p,w,x){this.listener=a,this.proxy=null,this.src=d,this.type=p,this.capture=!!w,this.ha=x,this.key=++Zi,this.da=this.fa=!1}function Wn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Jn(a,d,p){for(const w in a)d.call(p,a[w],w,a)}function Fs(a,d){for(const p in a)d.call(void 0,a[p],p,a)}function et(a){const d={};for(const p in a)d[p]=a[p];return d}const ht="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bt(a,d){let p,w;for(let x=1;x<arguments.length;x++){w=arguments[x];for(p in w)a[p]=w[p];for(let V=0;V<ht.length;V++)p=ht[V],Object.prototype.hasOwnProperty.call(w,p)&&(a[p]=w[p])}}function an(a){this.src=a,this.g={},this.h=0}an.prototype.add=function(a,d,p,w,x){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const U=ol(a,d,w,x);return U>-1?(d=a[U],p||(d.fa=!1)):(d=new eo(d,this.src,V,!!w,x),d.fa=p,a.push(d)),d};function ln(a,d){const p=d.type;if(p in a.g){var w=a.g[p],x=Array.prototype.indexOf.call(w,d,void 0),V;(V=x>=0)&&Array.prototype.splice.call(w,x,1),V&&(Wn(d),a.g[p].length==0&&(delete a.g[p],a.h--))}}function ol(a,d,p,w){for(let x=0;x<a.length;++x){const V=a[x];if(!V.da&&V.listener==d&&V.capture==!!p&&V.ha==w)return x}return-1}var al="closure_lm_"+(Math.random()*1e6|0),ll={};function Md(a,d,p,w,x){if(Array.isArray(d)){for(let V=0;V<d.length;V++)Md(a,d[V],p,w,x);return null}return p=Fd(p),a&&a[Ne]?a.J(d,p,l(w)?!!w.capture:!1,x):tb(a,d,p,!1,w,x)}function tb(a,d,p,w,x,V){if(!d)throw Error("Invalid event type");const U=l(x)?!!x.capture:!!x;let ne=ul(a);if(ne||(a[al]=ne=new an(a)),p=ne.add(d,p,w,U,V),p.proxy)return p;if(w=nb(),p.proxy=w,w.src=a,w.listener=p,a.addEventListener)C||(x=U),x===void 0&&(x=!1),a.addEventListener(d.toString(),w,x);else if(a.attachEvent)a.attachEvent(Od(d.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return p}function nb(){function a(p){return d.call(a.src,a.listener,p)}const d=rb;return a}function Ld(a,d,p,w,x){if(Array.isArray(d))for(var V=0;V<d.length;V++)Ld(a,d[V],p,w,x);else w=l(w)?!!w.capture:!!w,p=Fd(p),a&&a[Ne]?(a=a.i,V=String(d).toString(),V in a.g&&(d=a.g[V],p=ol(d,p,w,x),p>-1&&(Wn(d[p]),Array.prototype.splice.call(d,p,1),d.length==0&&(delete a.g[V],a.h--)))):a&&(a=ul(a))&&(d=a.g[d.toString()],a=-1,d&&(a=ol(d,p,w,x)),(p=a>-1?d[a]:null)&&cl(p))}function cl(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Ne])ln(d.i,a);else{var p=a.type,w=a.proxy;d.removeEventListener?d.removeEventListener(p,w,a.capture):d.detachEvent?d.detachEvent(Od(p),w):d.addListener&&d.removeListener&&d.removeListener(w),(p=ul(d))?(ln(p,a),p.h==0&&(p.src=null,d[al]=null)):Wn(a)}}}function Od(a){return a in ll?ll[a]:ll[a]="on"+a}function rb(a,d){if(a.da)a=!0;else{d=new W(d,this);const p=a.listener,w=a.ha||a.src;a.fa&&cl(a),a=p.call(w,d)}return a}function ul(a){return a=a[al],a instanceof an?a:null}var dl="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fd(a){return typeof a=="function"?a:(a[dl]||(a[dl]=function(d){return a.handleEvent(d)}),a[dl])}function qe(){v.call(this),this.i=new an(this),this.M=this,this.G=null}f(qe,v),qe.prototype[Ne]=!0,qe.prototype.removeEventListener=function(a,d,p,w){Ld(this,a,d,p,w)};function tt(a,d){var p,w=a.G;if(w)for(p=[];w;w=w.G)p.push(w);if(a=a.M,w=d.type||d,typeof d=="string")d=new A(d,a);else if(d instanceof A)d.target=d.target||a;else{var x=d;d=new A(w,a),bt(d,x)}x=!0;let V,U;if(p)for(U=p.length-1;U>=0;U--)V=d.g=p[U],x=to(V,w,!0,d)&&x;if(V=d.g=a,x=to(V,w,!0,d)&&x,x=to(V,w,!1,d)&&x,p)for(U=0;U<p.length;U++)V=d.g=p[U],x=to(V,w,!1,d)&&x}qe.prototype.N=function(){if(qe.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const p=a.g[d];for(let w=0;w<p.length;w++)Wn(p[w]);delete a.g[d],a.h--}}this.G=null},qe.prototype.J=function(a,d,p,w){return this.i.add(String(a),d,!1,p,w)},qe.prototype.K=function(a,d,p,w){return this.i.add(String(a),d,!0,p,w)};function to(a,d,p,w){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let x=!0;for(let V=0;V<d.length;++V){const U=d[V];if(U&&!U.da&&U.capture==p){const ne=U.listener,De=U.ha||U.src;U.fa&&ln(a.i,U),x=ne.call(De,w)!==!1&&x}}return x&&!w.defaultPrevented}function sb(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function Ud(a){a.g=sb(()=>{a.g=null,a.i&&(a.i=!1,Ud(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class ib extends v{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Ud(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Us(a){v.call(this),this.h=a,this.g={}}f(Us,v);var $d=[];function Bd(a){Jn(a.g,function(d,p){this.g.hasOwnProperty(p)&&cl(d)},a),a.g={}}Us.prototype.N=function(){Us.Z.N.call(this),Bd(this)},Us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hl=o.JSON.stringify,ob=o.JSON.parse,ab=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function jd(){}function zd(){}var $s={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function fl(){A.call(this,"d")}f(fl,A);function pl(){A.call(this,"c")}f(pl,A);var Kn={},Hd=null;function no(){return Hd=Hd||new qe}Kn.Ia="serverreachability";function qd(a){A.call(this,Kn.Ia,a)}f(qd,A);function Bs(a){const d=no();tt(d,new qd(d))}Kn.STAT_EVENT="statevent";function Gd(a,d){A.call(this,Kn.STAT_EVENT,a),this.stat=d}f(Gd,A);function nt(a){const d=no();tt(d,new Gd(d,a))}Kn.Ja="timingevent";function Wd(a,d){A.call(this,Kn.Ja,a),this.size=d}f(Wd,A);function js(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function zs(){this.g=!0}zs.prototype.ua=function(){this.g=!1};function lb(a,d,p,w,x,V){a.info(function(){if(a.g)if(V){var U="",ne=V.split("&");for(let ge=0;ge<ne.length;ge++){var De=ne[ge].split("=");if(De.length>1){const Le=De[0];De=De[1];const St=Le.split("_");U=St.length>=2&&St[1]=="type"?U+(Le+"="+De+"&"):U+(Le+"=redacted&")}}}else U=null;else U=V;return"XMLHTTP REQ ("+w+") [attempt "+x+"]: "+d+`
`+p+`
`+U})}function cb(a,d,p,w,x,V,U){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+x+"]: "+d+`
`+p+`
`+V+" "+U})}function Ur(a,d,p,w){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+db(a,p)+(w?" "+w:"")})}function ub(a,d){a.info(function(){return"TIMEOUT: "+d})}zs.prototype.info=function(){};function db(a,d){if(!a.g)return d;if(!d)return null;try{const V=JSON.parse(d);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var p=V[a];if(!(p.length<2)){var w=p[1];if(Array.isArray(w)&&!(w.length<1)){var x=w[0];if(x!="noop"&&x!="stop"&&x!="close")for(let U=1;U<w.length;U++)w[U]=""}}}}return hl(V)}catch{return d}}var ro={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Jd={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Kd;function ml(){}f(ml,jd),ml.prototype.g=function(){return new XMLHttpRequest},Kd=new ml;function Hs(a){return encodeURIComponent(String(a))}function hb(a){var d=1;a=a.split(":");const p=[];for(;d>0&&a.length;)p.push(a.shift()),d--;return a.length&&p.push(a.join(":")),p}function cn(a,d,p,w){this.j=a,this.i=d,this.l=p,this.S=w||1,this.V=new Us(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Qd}function Qd(){this.i=null,this.g="",this.h=!1}var Yd={},gl={};function yl(a,d,p){a.M=1,a.A=io(kt(d)),a.u=p,a.R=!0,Xd(a,null)}function Xd(a,d){a.F=Date.now(),so(a),a.B=kt(a.A);var p=a.B,w=a.S;Array.isArray(w)||(w=[String(w)]),dh(p.i,"t",w),a.C=0,p=a.j.L,a.h=new Qd,a.g=Sh(a.j,p?d:null,!a.u),a.P>0&&(a.O=new ib(u(a.Y,a,a.g),a.P)),d=a.V,p=a.g,w=a.ba;var x="readystatechange";Array.isArray(x)||(x&&($d[0]=x.toString()),x=$d);for(let V=0;V<x.length;V++){const U=Md(p,x[V],w||d.handleEvent,!1,d.h||d);if(!U)break;d.g[U.key]=U}d=a.J?et(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Bs(),lb(a.i,a.v,a.B,a.l,a.S,a.u)}cn.prototype.ba=function(a){a=a.target;const d=this.O;d&&hn(a)==3?d.j():this.Y(a)},cn.prototype.Y=function(a){try{if(a==this.g)e:{const ne=hn(this.g),De=this.g.ya(),ge=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||_h(this.g)))){this.K||ne!=4||De==7||(De==8||ge<=0?Bs(3):Bs(2)),_l(this);var d=this.g.ca();this.X=d;var p=fb(this);if(this.o=d==200,cb(this.i,this.v,this.B,this.l,this.S,ne,d),this.o){if(this.U&&!this.L){t:{if(this.g){var w,x=this.g;if((w=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(w)){var V=w;break t}}V=null}if(a=V)Ur(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bl(this,a);else{this.o=!1,this.m=3,nt(12),Qn(this),qs(this);break e}}if(this.R){a=!0;let Le;for(;!this.K&&this.C<p.length;)if(Le=pb(this,p),Le==gl){ne==4&&(this.m=4,nt(14),a=!1),Ur(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Yd){this.m=4,nt(15),Ur(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Ur(this.i,this.l,Le,null),bl(this,Le);if(Zd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||p.length!=0||this.h.h||(this.m=1,nt(16),a=!1),this.o=this.o&&a,!a)Ur(this.i,this.l,p,"[Invalid Chunked Response]"),Qn(this),qs(this);else if(p.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Rl(U),U.P=!0,nt(11))}}else Ur(this.i,this.l,p,null),bl(this,p);ne==4&&Qn(this),this.o&&!this.K&&(ne==4?Ah(this.j,this):(this.o=!1,so(this)))}else kb(this.g),d==400&&p.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),Qn(this),qs(this)}}}catch{}finally{}};function fb(a){if(!Zd(a))return a.g.la();const d=_h(a.g);if(d==="")return"";let p="";const w=d.length,x=hn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Qn(a),qs(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<w;V++)a.h.h=!0,p+=a.h.i.decode(d[V],{stream:!(x&&V==w-1)});return d.length=0,a.h.g+=p,a.C=0,a.h.g}function Zd(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function pb(a,d){var p=a.C,w=d.indexOf(`
`,p);return w==-1?gl:(p=Number(d.substring(p,w)),isNaN(p)?Yd:(w+=1,w+p>d.length?gl:(d=d.slice(w,w+p),a.C=w+p,d)))}cn.prototype.cancel=function(){this.K=!0,Qn(this)};function so(a){a.T=Date.now()+a.H,eh(a,a.H)}function eh(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=js(u(a.aa,a),d)}function _l(a){a.D&&(o.clearTimeout(a.D),a.D=null)}cn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(ub(this.i,this.B),this.M!=2&&(Bs(),nt(17)),Qn(this),this.m=2,qs(this)):eh(this,this.T-a)};function qs(a){a.j.I==0||a.K||Ah(a.j,a)}function Qn(a){_l(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,Bd(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function bl(a,d){try{var p=a.j;if(p.I!=0&&(p.g==a||wl(p.h,a))){if(!a.L&&wl(p.h,a)&&p.I==3){try{var w=p.Ba.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var x=w;if(x[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)uo(p),lo(p);else break e;Cl(p),nt(18)}}else p.xa=x[1],0<p.xa-p.K&&x[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=js(u(p.Va,p),6e3));rh(p.h)<=1&&p.ta&&(p.ta=void 0)}else Xn(p,11)}else if((a.L||p.g==a)&&uo(p),!T(d))for(x=p.Ba.g.parse(d),d=0;d<x.length;d++){let ge=x[d];const Le=ge[0];if(!(Le<=p.K))if(p.K=Le,ge=ge[1],p.I==2)if(ge[0]=="c"){p.M=ge[1],p.ba=ge[2];const St=ge[3];St!=null&&(p.ka=St,p.j.info("VER="+p.ka));const Zn=ge[4];Zn!=null&&(p.za=Zn,p.j.info("SVER="+p.za));const fn=ge[5];fn!=null&&typeof fn=="number"&&fn>0&&(w=1.5*fn,p.O=w,p.j.info("backChannelRequestTimeoutMs_="+w)),w=p;const pn=a.g;if(pn){const fo=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fo){var V=w.h;V.g||fo.indexOf("spdy")==-1&&fo.indexOf("quic")==-1&&fo.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Tl(V,V.h),V.h=null))}if(w.G){const kl=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;kl&&(w.wa=kl,_e(w.J,w.G,kl))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),w=p;var U=a;if(w.na=kh(w,w.L?w.ba:null,w.W),U.L){sh(w.h,U);var ne=U,De=w.O;De&&(ne.H=De),ne.D&&(_l(ne),so(ne)),w.g=U}else Eh(w);p.i.length>0&&co(p)}else ge[0]!="stop"&&ge[0]!="close"||Xn(p,7);else p.I==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?Xn(p,7):Al(p):ge[0]!="noop"&&p.l&&p.l.qa(ge),p.A=0)}}Bs(4)}catch{}}var mb=class{constructor(a,d){this.g=a,this.map=d}};function th(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function nh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rh(a){return a.h?1:a.g?a.g.size:0}function wl(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function Tl(a,d){a.g?a.g.add(d):a.h=d}function sh(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}th.prototype.cancel=function(){if(this.i=ih(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ih(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const p of a.g.values())d=d.concat(p.G);return d}return E(a.i)}var oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gb(a,d){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const w=a[p].indexOf("=");let x,V=null;w>=0?(x=a[p].substring(0,w),V=a[p].substring(w+1)):x=a[p],d(x,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function un(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof un?(this.l=a.l,Gs(this,a.j),this.o=a.o,this.g=a.g,Ws(this,a.u),this.h=a.h,Il(this,hh(a.i)),this.m=a.m):a&&(d=String(a).match(oh))?(this.l=!1,Gs(this,d[1]||"",!0),this.o=Js(d[2]||""),this.g=Js(d[3]||"",!0),Ws(this,d[4]),this.h=Js(d[5]||"",!0),Il(this,d[6]||"",!0),this.m=Js(d[7]||"")):(this.l=!1,this.i=new Qs(null,this.l))}un.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Ks(d,ah,!0),":");var p=this.g;return(p||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Ks(d,ah,!0),"@"),a.push(Hs(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ks(p,p.charAt(0)=="/"?bb:_b,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ks(p,Tb)),a.join("")},un.prototype.resolve=function(a){const d=kt(this);let p=!!a.j;p?Gs(d,a.j):p=!!a.o,p?d.o=a.o:p=!!a.g,p?d.g=a.g:p=a.u!=null;var w=a.h;if(p)Ws(d,a.u);else if(p=!!a.h){if(w.charAt(0)!="/")if(this.g&&!this.h)w="/"+w;else{var x=d.h.lastIndexOf("/");x!=-1&&(w=d.h.slice(0,x+1)+w)}if(x=w,x==".."||x==".")w="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){w=x.lastIndexOf("/",0)==0,x=x.split("/");const V=[];for(let U=0;U<x.length;){const ne=x[U++];ne=="."?w&&U==x.length&&V.push(""):ne==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),w&&U==x.length&&V.push("")):(V.push(ne),w=!0)}w=V.join("/")}else w=x}return p?d.h=w:p=a.i.toString()!=="",p?Il(d,hh(a.i)):p=!!a.m,p&&(d.m=a.m),d};function kt(a){return new un(a)}function Gs(a,d,p){a.j=p?Js(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Ws(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function Il(a,d,p){d instanceof Qs?(a.i=d,Ib(a.i,a.l)):(p||(d=Ks(d,wb)),a.i=new Qs(d,a.l))}function _e(a,d,p){a.i.set(d,p)}function io(a){return _e(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Js(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ks(a,d,p){return typeof a=="string"?(a=encodeURI(a).replace(d,yb),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ah=/[#\/\?@]/g,_b=/[#\?:]/g,bb=/[#\?]/g,wb=/[#\?@]/g,Tb=/#/g;function Qs(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function Yn(a){a.g||(a.g=new Map,a.h=0,a.i&&gb(a.i,function(d,p){a.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Qs.prototype,t.add=function(a,d){Yn(this),this.i=null,a=$r(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(d),this.h+=1,this};function lh(a,d){Yn(a),d=$r(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function ch(a,d){return Yn(a),d=$r(a,d),a.g.has(d)}t.forEach=function(a,d){Yn(this),this.g.forEach(function(p,w){p.forEach(function(x){a.call(d,x,w,this)},this)},this)};function uh(a,d){Yn(a);let p=[];if(typeof d=="string")ch(a,d)&&(p=p.concat(a.g.get($r(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)p=p.concat(a[d]);return p}t.set=function(a,d){return Yn(this),this.i=null,a=$r(this,a),ch(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=uh(this,a),a.length>0?String(a[0]):d):d};function dh(a,d,p){lh(a,d),p.length>0&&(a.i=null,a.g.set($r(a,d),E(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let w=0;w<d.length;w++){var p=d[w];const x=Hs(p);p=uh(this,p);for(let V=0;V<p.length;V++){let U=x;p[V]!==""&&(U+="="+Hs(p[V])),a.push(U)}}return this.i=a.join("&")};function hh(a){const d=new Qs;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function $r(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Ib(a,d){d&&!a.j&&(Yn(a),a.i=null,a.g.forEach(function(p,w){const x=w.toLowerCase();w!=x&&(lh(this,w),dh(this,x,p))},a)),a.j=d}function Eb(a,d){const p=new zs;if(o.Image){const w=new Image;w.onload=h(dn,p,"TestLoadImage: loaded",!0,d,w),w.onerror=h(dn,p,"TestLoadImage: error",!1,d,w),w.onabort=h(dn,p,"TestLoadImage: abort",!1,d,w),w.ontimeout=h(dn,p,"TestLoadImage: timeout",!1,d,w),o.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else d(!1)}function vb(a,d){const p=new zs,w=new AbortController,x=setTimeout(()=>{w.abort(),dn(p,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:w.signal}).then(V=>{clearTimeout(x),V.ok?dn(p,"TestPingServer: ok",!0,d):dn(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(x),dn(p,"TestPingServer: error",!1,d)})}function dn(a,d,p,w,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),w(p)}catch{}}function Ab(){this.g=new ab}function El(a){this.i=a.Sb||null,this.h=a.ab||!1}f(El,jd),El.prototype.g=function(){return new oo(this.i,this.h)};function oo(a,d){qe.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(oo,qe),t=oo.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Xs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ys(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Xs(this)),this.g&&(this.readyState=3,Xs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function fh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Ys(this):Xs(this),this.readyState==3&&fh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Ys(this))},t.Na=function(a){this.g&&(this.response=a,Ys(this))},t.ga=function(){this.g&&Ys(this)};function Ys(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Xs(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=d.next();return a.join(`\r
`)};function Xs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ph(a){let d="";return Jn(a,function(p,w){d+=w,d+=":",d+=p,d+=`\r
`}),d}function vl(a,d,p){e:{for(w in p){var w=!1;break e}w=!0}w||(p=ph(p),typeof a=="string"?p!=null&&Hs(p):_e(a,d,p))}function Ce(a){qe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ce,qe);var Cb=/^https?$/i,Rb=["POST","PUT"];t=Ce.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,p,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Kd.g(),this.g.onreadystatechange=m(u(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(V){mh(this,V);return}if(a=p||"",p=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var x in w)p.set(x,w[x]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const V of w.keys())p.set(V,w.get(V));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Rb,d,void 0)>=0)||w||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,U]of p)this.g.setRequestHeader(V,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){mh(this,V)}};function mh(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,gh(a),ao(a)}function gh(a){a.A||(a.A=!0,tt(a,"complete"),tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,tt(this,"complete"),tt(this,"abort"),ao(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ao(this,!0)),Ce.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?yh(this):this.Xa())},t.Xa=function(){yh(this)};function yh(a){if(a.h&&typeof i<"u"){if(a.v&&hn(a)==4)setTimeout(a.Ca.bind(a),0);else if(tt(a,"readystatechange"),hn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var w;if(w=V===0){let U=String(a.D).match(oh)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),w=!Cb.test(U?U.toLowerCase():"")}p=w}if(p)tt(a,"complete"),tt(a,"success");else{a.o=6;try{var x=hn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",gh(a)}}finally{ao(a)}}}}function ao(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,d||tt(a,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return hn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),ob(d)}};function _h(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kb(a){const d={};a=(a.g&&hn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(T(a[w]))continue;var p=hb(a[w]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=d[x]||[];d[x]=V,V.push(p)}Fs(d,function(w){return w.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(a,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||d}function bh(a){this.za=0,this.i=[],this.j=new zs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zs("baseRetryDelayMs",5e3,a),this.Za=Zs("retryDelaySeedMs",1e4,a),this.Ta=Zs("forwardChannelMaxRetries",2,a),this.va=Zs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new th(a&&a.concurrentRequestLimit),this.Ba=new Ab,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=bh.prototype,t.ka=8,t.I=1,t.connect=function(a,d,p,w){nt(0),this.W=a,this.H=d||{},p&&w!==void 0&&(this.H.OSID=p,this.H.OAID=w),this.F=this.X,this.J=kh(this,null,this.W),co(this)};function Al(a){if(wh(a),a.I==3){var d=a.V++,p=kt(a.J);if(_e(p,"SID",a.M),_e(p,"RID",d),_e(p,"TYPE","terminate"),ei(a,p),d=new cn(a,a.j,d),d.M=2,d.A=io(kt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=d.A,p=!0),p||(d.g=Sh(d.j,null),d.g.ea(d.A)),d.F=Date.now(),so(d)}Rh(a)}function lo(a){a.g&&(Rl(a),a.g.cancel(),a.g=null)}function wh(a){lo(a),a.v&&(o.clearTimeout(a.v),a.v=null),uo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function co(a){if(!nh(a.h)&&!a.m){a.m=!0;var d=a.Ea;P||g(),O||(P(),O=!0),b.add(d,a),a.D=0}}function Sb(a,d){return rh(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=js(u(a.Ea,a,d),Ch(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new cn(this,this.j,a);let V=this.o;if(this.U&&(V?(V=et(V),bt(V,this.U)):V=this.U),this.u!==null||this.R||(x.J=V,V=null),this.S)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var w=this.i[p];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,d>4096){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=Ih(this,x,d),p=kt(this.J),_e(p,"RID",a),_e(p,"CVER",22),this.G&&_e(p,"X-HTTP-Session-Id",this.G),ei(this,p),V&&(this.R?d="headers="+Hs(ph(V))+"&"+d:this.u&&vl(p,this.u,V)),Tl(this.h,x),this.Ra&&_e(p,"TYPE","init"),this.S?(_e(p,"$req",d),_e(p,"SID","null"),x.U=!0,yl(x,p,null)):yl(x,p,d),this.I=2}}else this.I==3&&(a?Th(this,a):this.i.length==0||nh(this.h)||Th(this))};function Th(a,d){var p;d?p=d.l:p=a.V++;const w=kt(a.J);_e(w,"SID",a.M),_e(w,"RID",p),_e(w,"AID",a.K),ei(a,w),a.u&&a.o&&vl(w,a.u,a.o),p=new cn(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Ih(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Tl(a.h,p),yl(p,w,d)}function ei(a,d){a.H&&Jn(a.H,function(p,w){_e(d,w,p)}),a.l&&Jn({},function(p,w){_e(d,w,p)})}function Ih(a,d,p){p=Math.min(a.i.length,p);const w=a.l?u(a.l.Ka,a.l,a):null;e:{var x=a.i;let ne=-1;for(;;){const De=["count="+p];ne==-1?p>0?(ne=x[0].g,De.push("ofs="+ne)):ne=0:De.push("ofs="+ne);let ge=!0;for(let Le=0;Le<p;Le++){var V=x[Le].g;const St=x[Le].map;if(V-=ne,V<0)ne=Math.max(0,x[Le].g-100),ge=!1;else try{V="req"+V+"_"||"";try{var U=St instanceof Map?St:Object.entries(St);for(const[Zn,fn]of U){let pn=fn;l(fn)&&(pn=hl(fn)),De.push(V+Zn+"="+encodeURIComponent(pn))}}catch(Zn){throw De.push(V+"type="+encodeURIComponent("_badmap")),Zn}}catch{w&&w(St)}}if(ge){U=De.join("&");break e}}U=void 0}return a=a.i.splice(0,p),d.G=a,U}function Eh(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;P||g(),O||(P(),O=!0),b.add(d,a),a.A=0}}function Cl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=js(u(a.Da,a),Ch(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,vh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=js(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),lo(this),vh(this))};function Rl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vh(a){a.g=new cn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=kt(a.na);_e(d,"RID","rpc"),_e(d,"SID",a.M),_e(d,"AID",a.K),_e(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&_e(d,"TO",a.ia),_e(d,"TYPE","xmlhttp"),ei(a,d),a.u&&a.o&&vl(d,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=io(kt(d)),p.u=null,p.R=!0,Xd(p,a)}t.Va=function(){this.C!=null&&(this.C=null,lo(this),Cl(this),nt(19))};function uo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ah(a,d){var p=null;if(a.g==d){uo(a),Rl(a),a.g=null;var w=2}else if(wl(a.h,d))p=d.G,sh(a.h,d),w=1;else return;if(a.I!=0){if(d.o)if(w==1){p=d.u?d.u.length:0,d=Date.now()-d.F;var x=a.D;w=no(),tt(w,new Wd(w,p)),co(a)}else Eh(a);else if(x=d.m,x==3||x==0&&d.X>0||!(w==1&&Sb(a,d)||w==2&&Cl(a)))switch(p&&p.length>0&&(d=a.h,d.i=d.i.concat(p)),x){case 1:Xn(a,5);break;case 4:Xn(a,10);break;case 3:Xn(a,6);break;default:Xn(a,2)}}}function Ch(a,d){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*d}function Xn(a,d){if(a.j.info("Error code "+d),d==2){var p=u(a.bb,a),w=a.Ua;const x=!w;w=new un(w||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gs(w,"https"),io(w),x?Eb(w.toString(),p):vb(w.toString(),p)}else nt(2);a.I=0,a.l&&a.l.pa(d),Rh(a),wh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Rh(a){if(a.I=0,a.ja=[],a.l){const d=ih(a.h);(d.length!=0||a.i.length!=0)&&(I(a.ja,d),I(a.ja,a.i),a.h.i.length=0,E(a.i),a.i.length=0),a.l.oa()}}function kh(a,d,p){var w=p instanceof un?kt(p):new un(p);if(w.g!="")d&&(w.g=d+"."+w.g),Ws(w,w.u);else{var x=o.location;w=x.protocol,d=d?d+"."+x.hostname:x.hostname,x=+x.port;const V=new un(null);w&&Gs(V,w),d&&(V.g=d),x&&Ws(V,x),p&&(V.h=p),w=V}return p=a.G,d=a.wa,p&&d&&_e(w,p,d),_e(w,"VER",a.ka),ei(a,w),w}function Sh(a,d,p){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Ce(new El({ab:p})):new Ce(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xh(){}t=xh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ho(){}ho.prototype.g=function(a,d){return new ot(a,d)};function ot(a,d){qe.call(this),this.g=new bh(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!T(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Br(this)}f(ot,qe),ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){Al(this.g)},ot.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=hl(a),a=p);d.i.push(new mb(d.Ya++,a)),d.I==3&&co(d)},ot.prototype.N=function(){this.g.l=null,delete this.j,Al(this.g),delete this.g,ot.Z.N.call(this)};function Ph(a){fl.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const p in d){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}f(Ph,fl);function Vh(){pl.call(this),this.status=1}f(Vh,pl);function Br(a){this.g=a}f(Br,xh),Br.prototype.ra=function(){tt(this.g,"a")},Br.prototype.qa=function(a){tt(this.g,new Ph(a))},Br.prototype.pa=function(a){tt(this.g,new Vh)},Br.prototype.oa=function(){tt(this.g,"b")},ho.prototype.createWebChannel=ho.prototype.g,ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,Iy=function(){return new ho},Ty=function(){return no()},wy=Kn,Vc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ro.NO_ERROR=0,ro.TIMEOUT=8,ro.HTTP_ERROR=6,No=ro,Jd.COMPLETE="complete",by=Jd,zd.EventType=$s,$s.OPEN="a",$s.CLOSE="b",$s.ERROR="c",$s.MESSAGE="d",qe.prototype.listen=qe.prototype.J,ci=zd,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,_y=Ce}).apply(typeof go<"u"?go:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs="12.8.0";function YA(t){xs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Sr=new Iu("@firebase/firestore");function ns(){return Sr.logLevel}function H(t,...e){if(Sr.logLevel<=ie.DEBUG){const n=e.map(Lu);Sr.debug(`Firestore (${xs}): ${t}`,...n)}}function nn(t,...e){if(Sr.logLevel<=ie.ERROR){const n=e.map(Lu);Sr.error(`Firestore (${xs}): ${t}`,...n)}}function gs(t,...e){if(Sr.logLevel<=ie.WARN){const n=e.map(Lu);Sr.warn(`Firestore (${xs}): ${t}`,...n)}}function Lu(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ey(t,r,n)}function Ey(t,e,n){let r=`FIRESTORE (${xs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw nn(r),new Error(r)}function de(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Ey(e,s,r)}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ke.UNAUTHENTICATED)))}shutdown(){}}class ZA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class eC{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Xt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xt,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xt)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new vy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new Ke(e)}}class tC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class nC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new tC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Ke.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class kf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new kf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new kf(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function Nc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Ul(s)===Ul(i)?oe(s,i):Ul(s)?1:-1}return oe(t.length,e.length)}const iC=55296,oC=57343;function Ul(t){const e=t.charCodeAt(0);return e>=iC&&e<=oC}function ys(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="__name__";class Pt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Pt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return oe(e.length,n.length)}static compareSegments(e,n){const r=Pt.isNumericId(e),s=Pt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Pt.extractNumericId(e).compare(Pt.extractNumericId(n)):Nc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dn.fromString(e.substring(4,e.length-2))}}class ye extends Pt{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new ye(n)}static emptyPath(){return new ye([])}}const aC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends Pt{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return aC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Sf}static keyField(){return new $e([Sf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new $(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new $(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(ye.fromString(e))}static fromName(e){return new J(ye.fromString(e).popFirst(5))}static empty(){return new J(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new ye(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t,e,n){if(!n)throw new $(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lC(t,e,n,r){if(e===!0&&r===!0)throw new $(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xf(t){if(!J.isDocumentKey(t))throw new $(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Pf(t){if(J.isDocumentKey(t))throw new $(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cy(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function xa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function ct(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xa(t);throw new $(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Pe(t,e){const n={typeString:t};return e&&(n.value=e),n}function qi(t,e){if(!Cy(t))throw new $(N.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new $(N.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=-62135596800,Nf=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Nf);return new we(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Vf)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Nf}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qi(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Vf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:Pe("string",we._jsonSchemaVersion),seconds:Pe("number"),nanoseconds:Pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{static fromTimestamp(e){return new ee(e)}static min(){return new ee(new we(0,0))}static max(){return new ee(new we(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ki=-1;function cC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Ln(s,J.empty(),e)}function uC(t){return new Ln(t.readTime,t.key,ki)}class Ln{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ln(ee.min(),J.empty(),ki)}static max(){return new Ln(ee.max(),J.empty(),ki)}}function dC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==hC)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,r)=>{n(e)}))}static reject(e){return new L(((n,r)=>{r(e)}))}static waitFor(e){return new L(((n,r)=>{let s=0,i=0,o=!1;e.forEach((l=>{++s,l.next((()=>{++i,o&&i===s&&n()}),(c=>r(c)))})),o=!0,i===s&&n()}))}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next((s=>s?L.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new L(((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next((h=>{o[u]=h,++l,l===i&&r(o)}),(h=>s(h)))}}))}static doWhile(e,n){return new L(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function pC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Pa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Pa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=-1;function Va(t){return t==null}function ea(t){return t===0&&1/t==-1/0}function mC(t){return typeof t=="number"&&Number.isInteger(t)&&!ea(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="";function gC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Df(e)),e=yC(t.get(n),e);return Df(e)}function yC(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ry:n+="";break;default:n+=i}}return n}function Df(t){return t+Ry+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ky(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}}class yo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=s??Ue.EMPTY,this.right=i??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ue(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lf(this.data.getIterator())}getIteratorFrom(e){return new Lf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Lf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new lt([])}unionWith(e){let n=new Me($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class Sy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Sy("Invalid base64 string: "+i):i}})(e);return new je(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new je(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}je.EMPTY_BYTE_STRING=new je("");const _C=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=_C.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fn(t){return typeof t=="string"?je.fromBase64String(t):je.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="server_timestamp",Py="__type__",Vy="__previous_value__",Ny="__local_write_time__";function Uu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Py])==null?void 0:r.stringValue)===xy}function Na(t){const e=t.mapValue.fields[Vy];return Uu(e)?Na(e):e}function Si(t){const e=On(t.mapValue.fields[Ny].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,r,s,i,o,l,c,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=f}}const ta="(default)";class xi{constructor(e,n){this.projectId=e,this.database=n||ta}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database===ta}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}function wC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new $(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="__type__",TC="__max__",_o={mapValue:{}},My="__vector__",na="value";function Un(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uu(t)?4:EC(t)?9007199254740991:IC(t)?10:11:K(28295,{value:t})}function $t(t,e){if(t===e)return!0;const n=Un(t);if(n!==Un(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Si(t).isEqual(Si(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=On(s.timestampValue),l=On(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Fn(s.bytesValue).isEqual(Fn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Re(s.geoPointValue.latitude)===Re(i.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Re(s.integerValue)===Re(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Re(s.doubleValue),l=Re(i.doubleValue);return o===l?ea(o)===ea(l):isNaN(o)&&isNaN(l)}return!1})(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],$t);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Mf(o)!==Mf(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!$t(o[c],l[c])))return!1;return!0})(t,e);default:return K(52216,{left:t})}}function Pi(t,e){return(t.values||[]).find((n=>$t(n,e)))!==void 0}function _s(t,e){if(t===e)return 0;const n=Un(t),r=Un(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const l=Re(i.integerValue||i.doubleValue),c=Re(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(t,e);case 3:return Of(t.timestampValue,e.timestampValue);case 4:return Of(Si(t),Si(e));case 5:return Nc(t.stringValue,e.stringValue);case 6:return(function(i,o){const l=Fn(i),c=Fn(o);return l.compareTo(c)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const h=oe(l[u],c[u]);if(h!==0)return h}return oe(l.length,c.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const l=oe(Re(i.latitude),Re(o.latitude));return l!==0?l:oe(Re(i.longitude),Re(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Ff(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var m,E,I,k;const l=i.fields||{},c=o.fields||{},u=(m=l[na])==null?void 0:m.arrayValue,h=(E=c[na])==null?void 0:E.arrayValue,f=oe(((I=u==null?void 0:u.values)==null?void 0:I.length)||0,((k=h==null?void 0:h.values)==null?void 0:k.length)||0);return f!==0?f:Ff(u,h)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===_o.mapValue&&o===_o.mapValue)return 0;if(i===_o.mapValue)return 1;if(o===_o.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=Nc(c[f],h[f]);if(m!==0)return m;const E=_s(l[c[f]],u[h[f]]);if(E!==0)return E}return oe(c.length,h.length)})(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function Of(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=On(t),r=On(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function Ff(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function bs(t){return Dc(t)}function Dc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=On(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Fn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return J.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Dc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Dc(n.fields[o])}`;return s+"}"})(t.mapValue):K(61005,{value:t})}function Do(t){switch(Un(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Na(t);return e?16+Do(e):16;case 5:return 2*t.stringValue.length;case 6:return Fn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Do(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Hn(r.fields,((i,o)=>{s+=i.length+Do(o)})),s})(t.mapValue);default:throw K(13486,{value:t})}}function Uf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Mc(t){return!!t&&"integerValue"in t}function $u(t){return!!t&&"arrayValue"in t}function $f(t){return!!t&&"nullValue"in t}function Bf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function IC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Dy])==null?void 0:r.stringValue)===My}function yi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Hn(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=yi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yi(t.arrayValue.values[n]);return e}return{...t}}function EC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===TC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(n)}setAll(e){let n=$e.emptyPath(),r={},s=[];e.forEach(((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=yi(o):s.push(l.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return $t(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Hn(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new st(yi(this.value))}}function Ly(t){const e=[];return Hn(t.fields,((n,r)=>{const s=new $e([n]);if(Mo(r)){const i=Ly(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Qe(e,0,ee.min(),ee.min(),ee.min(),st.empty(),0)}static newFoundDocument(e,n,r,s){return new Qe(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new Qe(e,2,n,ee.min(),ee.min(),st.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,ee.min(),ee.min(),st.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ra{constructor(e,n){this.position=e,this.inclusive=n}}function jf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function zf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!$t(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class sa{constructor(e,n="asc"){this.field=e,this.dir=n}}function vC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Oy{}class xe extends Oy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new CC(e,n,r):n==="array-contains"?new SC(e,r):n==="in"?new xC(e,r):n==="not-in"?new PC(e,r):n==="array-contains-any"?new VC(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RC(e,r):new kC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(_s(n,this.value)):n!==null&&Un(this.value)===Un(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ct extends Oy{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ct(e,n)}matches(e){return Fy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fy(t){return t.op==="and"}function Uy(t){return AC(t)&&Fy(t)}function AC(t){for(const e of t.filters)if(e instanceof Ct)return!1;return!0}function Lc(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+bs(t.value);if(Uy(t))return t.filters.map((e=>Lc(e))).join(",");{const e=t.filters.map((n=>Lc(n))).join(",");return`${t.op}(${e})`}}function $y(t,e){return t instanceof xe?(function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&$t(r.value,s.value)})(t,e):t instanceof Ct?(function(r,s){return s instanceof Ct&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,l)=>i&&$y(o,s.filters[l])),!0):!1})(t,e):void K(19439)}function By(t){return t instanceof xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${bs(n.value)}`})(t):t instanceof Ct?(function(n){return n.op.toString()+" {"+n.getFilters().map(By).join(" ,")+"}"})(t):"Filter"}class CC extends xe{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class RC extends xe{constructor(e,n){super(e,"in",n),this.keys=jy("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class kC extends xe{constructor(e,n){super(e,"not-in",n),this.keys=jy("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function jy(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>J.fromName(r.referenceValue)))}class SC extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $u(n)&&Pi(n.arrayValue,this.value)}}class xC extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pi(this.value.arrayValue,n)}}class PC extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Pi(this.value.arrayValue,n)}}class VC extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$u(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Pi(this.value.arrayValue,r)))}}/**
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
 */class NC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Hf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new NC(t,e,n,r,s,i,o)}function Bu(t){const e=te(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Lc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Va(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>bs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>bs(r))).join(",")),e.Te=n}return e.Te}function ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!vC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$y(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zf(t.startAt,e.startAt)&&zf(t.endAt,e.endAt)}function Oc(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function DC(t,e,n,r,s,i,o,l){return new Gi(t,e,n,r,s,i,o,l)}function Da(t){return new Gi(t)}function qf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MC(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function zy(t){return t.collectionGroup!==null}function _i(t){const e=te(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me($e.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((u=>{u.isInequality()&&(l=l.add(u.field))}))})),l})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new sa(i,r))})),n.has($e.keyField().canonicalString())||e.Ie.push(new sa($e.keyField(),r))}return e.Ie}function Dt(t){const e=te(t);return e.Ee||(e.Ee=LC(e,_i(t))),e.Ee}function LC(t,e){if(t.limitType==="F")return Hf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new sa(s.field,i)}));const n=t.endAt?new ra(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ra(t.startAt.position,t.startAt.inclusive):null;return Hf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fc(t,e){const n=t.filters.concat([e]);return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Uc(t,e,n){return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ma(t,e){return ju(Dt(t),Dt(e))&&t.limitType===e.limitType}function Hy(t){return`${Bu(Dt(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>By(s))).join(", ")}]`),Va(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>bs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>bs(s))).join(",")),`Target(${r})`})(Dt(t))}; limitType=${t.limitType})`}function La(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):J.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of _i(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,l,c){const u=jf(o,l,c);return o.inclusive?u<=0:u<0})(r.startAt,_i(r),s)||r.endAt&&!(function(o,l,c){const u=jf(o,l,c);return o.inclusive?u>=0:u>0})(r.endAt,_i(r),s))})(t,e)}function OC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qy(t){return(e,n)=>{let r=!1;for(const s of _i(t)){const i=FC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FC(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):(function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?_s(c,u):K(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hn(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return ky(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=new Ae(J.comparator);function rn(){return UC}const Gy=new Ae(J.comparator);function ui(...t){let e=Gy;for(const n of t)e=e.insert(n.key,n);return e}function Wy(t){let e=Gy;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Tr(){return bi()}function Jy(){return bi()}function bi(){return new Nr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const $C=new Ae(J.comparator),BC=new Me(J.comparator);function ae(...t){let e=BC;for(const n of t)e=e.add(n);return e}const jC=new Me(oe);function zC(){return jC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ea(e)?"-0":e}}function Ky(t){return{integerValue:""+t}}function HC(t,e){return mC(e)?Ky(e):zu(t,e)}/**
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
 */class Oa{constructor(){this._=void 0}}function qC(t,e,n){return t instanceof Vi?(function(s,i){const o={fields:{[Py]:{stringValue:xy},[Ny]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uu(i)&&(i=Na(i)),i&&(o.fields[Vy]=i),{mapValue:o}})(n,e):t instanceof Ni?Yy(t,e):t instanceof Di?Xy(t,e):(function(s,i){const o=Qy(s,i),l=Gf(o)+Gf(s.Ae);return Mc(o)&&Mc(s.Ae)?Ky(l):zu(s.serializer,l)})(t,e)}function GC(t,e,n){return t instanceof Ni?Yy(t,e):t instanceof Di?Xy(t,e):n}function Qy(t,e){return t instanceof ia?(function(r){return Mc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Vi extends Oa{}class Ni extends Oa{constructor(e){super(),this.elements=e}}function Yy(t,e){const n=Zy(e);for(const r of t.elements)n.some((s=>$t(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Di extends Oa{constructor(e){super(),this.elements=e}}function Xy(t,e){let n=Zy(e);for(const r of t.elements)n=n.filter((s=>!$t(s,r)));return{arrayValue:{values:n}}}class ia extends Oa{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Gf(t){return Re(t.integerValue||t.doubleValue)}function Zy(t){return $u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n){this.field=e,this.transform=n}}function JC(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Ni&&s instanceof Ni||r instanceof Di&&s instanceof Di?ys(r.elements,s.elements,$t):r instanceof ia&&s instanceof ia?$t(r.Ae,s.Ae):r instanceof Vi&&s instanceof Vi})(t.transform,e.transform)}class KC{constructor(e,n){this.version=e,this.transformResults=n}}class it{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new it}static exists(e){return new it(void 0,e)}static updateTime(e){return new it(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fa{}function e_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ua(t.key,it.none()):new Wi(t.key,t.data,it.none());{const n=t.data,r=st.empty();let s=new Me($e.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new qn(t.key,r,new lt(s.toArray()),it.none())}}function QC(t,e,n){t instanceof Wi?(function(s,i,o){const l=s.value.clone(),c=Jf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):t instanceof qn?(function(s,i,o){if(!Lo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Jf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(t_(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function wi(t,e,n,r){return t instanceof Wi?(function(i,o,l,c){if(!Lo(i.precondition,o))return l;const u=i.value.clone(),h=Kf(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof qn?(function(i,o,l,c){if(!Lo(i.precondition,o))return l;const u=Kf(i.fieldTransforms,c,o),h=o.data;return h.setAll(t_(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(t,e,n,r):(function(i,o,l){return Lo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(t,e,n)}function YC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Qy(r.transform,s||null);i!=null&&(n===null&&(n=st.empty()),n.set(r.field,i))}return n||null}function Wf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ys(r,s,((i,o)=>JC(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wi extends Fa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qn extends Fa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function t_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Jf(t,e,n){const r=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,GC(o,l,n[s]))}return r}function Kf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,qC(i,o,e))}return r}class Ua extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XC extends Fa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Jy();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=e_(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ae())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,((n,r)=>Wf(n,r)))&&ys(this.baseMutations,e.baseMutations,((n,r)=>Wf(n,r)))}}class Hu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return $C})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hu(e,n,r,s)}}/**
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
 */class e2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class t2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,ce;function n2(t){switch(t){case N.OK:return K(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function n_(t){if(t===void 0)return nn("GRPC error has no .code"),N.UNKNOWN;switch(t){case Se.OK:return N.OK;case Se.CANCELLED:return N.CANCELLED;case Se.UNKNOWN:return N.UNKNOWN;case Se.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Se.INTERNAL:return N.INTERNAL;case Se.UNAVAILABLE:return N.UNAVAILABLE;case Se.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Se.NOT_FOUND:return N.NOT_FOUND;case Se.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Se.ABORTED:return N.ABORTED;case Se.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Se.DATA_LOSS:return N.DATA_LOSS;default:return K(39323,{code:t})}}(ce=Se||(Se={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function r2(){return new TextEncoder}/**
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
 */const s2=new Dn([4294967295,4294967295],0);function Qf(t){const e=r2().encode(t),n=new yy;return n.update(e),new Uint8Array(n.digest())}function Yf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dn([n,r],0),new Dn([s,i],0)]}class qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new di(`Invalid padding: ${n}`);if(r<0)throw new di(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new di(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new di(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Dn.fromNumber(r)));return s.compare(s2)===1&&(s=new Dn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qf(e),[r,s]=Yf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qu(i,s,n);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const n=Qf(e),[r,s]=Yf(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $a(ee.min(),s,new Ae(oe),rn(),ae())}}class Ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ji(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.De=s}}class r_{constructor(e,n){this.targetId=e,this.Ce=n}}class s_{constructor(e,n,r=je.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Xf{constructor(){this.ve=0,this.Fe=Zf(),this.Me=je.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ae(),n=ae(),r=ae();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K(38017,{changeType:i})}})),new Ji(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Zf()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class i2{constructor(e){this.Ge=e,this.ze=new Map,this.je=rn(),this.He=bo(),this.Je=bo(),this.Ze=new Ae(oe)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Oc(i))if(r===0){const o=new J(i.path);this.et(n,o,Qe.newNoDocument(o,ee.min()))}else de(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Fn(r).toUint8Array()}catch(c){if(c instanceof Sy)return gs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new qu(o,s,i)}catch(c){return gs(c instanceof di?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Oc(l.target)){const c=new J(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Qe.newNoDocument(c,e))}i.Be&&(n.set(o,i.ke()),i.Ke())}}));let r=ae();this.Je.forEach(((i,o)=>{let l=!0;o.forEachWhile((c=>{const u=this.ot(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.je.forEach(((i,o)=>o.setReadTime(e)));const s=new $a(e,n,this.Ze,this.je,r);return this.je=rn(),this.He=bo(),this.Je=bo(),this.Ze=new Ae(oe),s}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Xf,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Me(oe),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Me(oe),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xf),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function bo(){return new Ae(J.comparator)}function Zf(){return new Ae(J.comparator)}const o2={asc:"ASCENDING",desc:"DESCENDING"},a2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},l2={and:"AND",or:"OR"};class c2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $c(t,e){return t.useProto3Json||Va(e)?e:{value:e}}function oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function i_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function u2(t,e){return oa(t,e.toTimestamp())}function Mt(t){return de(!!t,49232),ee.fromTimestamp((function(n){const r=On(n);return new we(r.seconds,r.nanos)})(t))}function Gu(t,e){return Bc(t,e).canonicalString()}function Bc(t,e){const n=(function(s){return new ye(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function o_(t){const e=ye.fromString(t);return de(d_(e),10190,{key:e.toString()}),e}function jc(t,e){return Gu(t.databaseId,e.path)}function $l(t,e){const n=o_(e);if(n.get(1)!==t.databaseId.projectId)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(l_(n))}function a_(t,e){return Gu(t.databaseId,e)}function d2(t){const e=o_(t);return e.length===4?ye.emptyPath():l_(e)}function zc(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function l_(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ep(t,e,n){return{name:jc(t,e),fields:n.value.mapValue.fields}}function h2(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:K(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,h){return u.useProto3Json?(de(h===void 0||typeof h=="string",58123),je.fromBase64String(h||"")):(de(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),je.fromUint8Array(h||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(u){const h=u.code===void 0?N.UNKNOWN:n_(u.code);return new $(h,u.message||"")})(o);n=new s_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$l(t,r.document.name),i=Mt(r.document.updateTime),o=r.document.createTime?Mt(r.document.createTime):ee.min(),l=new st({mapValue:{fields:r.document.fields}}),c=Qe.newFoundDocument(s,i,o,l),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Oo(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$l(t,r.document),i=r.readTime?Mt(r.readTime):ee.min(),o=Qe.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Oo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$l(t,r.document),i=r.removedTargetIds||[];n=new Oo([],i,s,null)}else{if(!("filter"in e))return K(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new t2(s,i),l=r.targetId;n=new r_(l,o)}}return n}function f2(t,e){let n;if(e instanceof Wi)n={update:ep(t,e.key,e.value)};else if(e instanceof Ua)n={delete:jc(t,e.key)};else if(e instanceof qn)n={update:ep(t,e.key,e.data),updateMask:I2(e.fieldMask)};else{if(!(e instanceof XC))return K(16599,{dt:e.type});n={verify:jc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const l=o.transform;if(l instanceof Vi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ni)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Di)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ia)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:u2(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K(27497)})(t,e.precondition)),n}function p2(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Mt(s.updateTime):Mt(i);return o.isEqual(ee.min())&&(o=Mt(i)),new KC(o,s.transformResults||[])})(n,e)))):[]}function m2(t,e){return{documents:[a_(t,e.path)]}}function g2(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=a_(t,s);const i=(function(u){if(u.length!==0)return u_(Ct.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((h=>(function(m){return{field:ss(m.field),direction:b2(m.dir)}})(h)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=$c(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:n,parent:s}}function y2(t){let e=d2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){de(r===1,65062);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=(function(f){const m=c_(f);return m instanceof Ct&&Uy(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(f){return f.map((m=>(function(I){return new sa(is(I.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(m)))})(n.orderBy));let l=null;n.limit&&(l=(function(f){let m;return m=typeof f=="object"?f.value:f,Va(m)?null:m})(n.limit));let c=null;n.startAt&&(c=(function(f){const m=!!f.before,E=f.values||[];return new ra(E,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(f){const m=!f.before,E=f.values||[];return new ra(E,m)})(n.endAt)),DC(e,s,o,i,l,"F",c,u)}function _2(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function c_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=is(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=is(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=is(n.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}})(t):t.fieldFilter!==void 0?(function(n){return xe.create(is(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Ct.create(n.compositeFilter.filters.map((r=>c_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}})(n.compositeFilter.op))})(t):K(30097,{filter:t})}function b2(t){return o2[t]}function w2(t){return a2[t]}function T2(t){return l2[t]}function ss(t){return{fieldPath:t.canonicalString()}}function is(t){return $e.fromServerFormat(t.fieldPath)}function u_(t){return t instanceof xe?(function(n){if(n.op==="=="){if(Bf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NAN"}};if($f(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bf(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NAN"}};if($f(n.value))return{unaryFilter:{field:ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(n.field),op:w2(n.op),value:n.value}}})(t):t instanceof Ct?(function(n){const r=n.getFilters().map((s=>u_(s)));return r.length===1?r[0]:{compositeFilter:{op:T2(n.op),filters:r}}})(t):K(54877,{filter:t})}function I2(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function d_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function h_(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n,r,s,i=ee.min(),o=ee.min(),l=je.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.yt=e}}function v2(t){const e=y2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uc(e,e.limit,"L"):e}/**
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
 */class A2{constructor(){this.Sn=new C2}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Ln.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class C2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Me(ye.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(ye.comparator)).toArray()}}/**
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
 */const tp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},f_=41943040;class rt{static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(f_,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ws(0)}static ar(){return new ws(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="LruGarbageCollector",R2=1048576;function rp([t,e],[n,r]){const s=oe(t,n);return s===0?oe(e,r):s}class k2{constructor(e){this.Pr=e,this.buffer=new Me(rp),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();rp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class S2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(np,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vs(n)?H(np,"Ignoring IndexedDB error during garbage collection: ",n):await Ps(n)}await this.Ar(3e5)}))}}class x2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Pa.ce);const r=new k2(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(tp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tp):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,l,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s)))).next((f=>(r=f,l=Date.now(),this.removeTargets(e,r,n)))).next((f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((f=>(u=Date.now(),ns()<=ie.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f}))))}}function P2(t,e){return new x2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.changes=new Nr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class N2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&wi(r.mutation,s,lt.empty(),we.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,ae()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=ae()){const s=Tr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ui();return i.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,ae())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,l)=>{n.set(o,l)}))}))}computeViews(e,n,r,s){let i=rn();const o=bi(),l=(function(){return bi()})();return n.forEach(((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof qn)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),wi(h.mutation,u,h.mutation.getFieldMask(),we.now())):o.set(u.key,lt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((u,h)=>o.set(u,h))),n.forEach(((u,h)=>l.set(u,new N2(h,o.get(u)??null)))),l)))}recalculateAndSaveOverlays(e,n){const r=bi();let s=new Ae(((o,l)=>o-l)),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const l of o)l.keys().forEach((c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||lt.empty();h=l.applyToLocalView(u,h),r.set(c,h);const f=(s.get(l.batchId)||ae()).add(c);s=s.insert(l.batchId,f)}))})).next((()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,h=c.value,f=Jy();h.forEach((m=>{if(!i.has(m)){const E=e_(n.get(m),r.get(m));E!==null&&f.set(m,E),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return L.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return MC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Tr());let l=ki,c=i;return o.next((u=>L.forEach(u,((h,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),i.get(h)?L.resolve():this.remoteDocumentCache.getEntry(e,h).next((m=>{c=c.insert(h,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,c,u,ae()))).next((h=>({batchId:l,changes:Wy(h)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next((r=>{let s=ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ui();return this.indexManager.getCollectionParents(e,i).next((l=>L.forEach(l,(c=>{const u=(function(f,m){return new Gi(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((h=>{h.forEach(((f,m)=>{o=o.insert(f,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Qe.newInvalidDocument(h)))}));let l=ui();return o.forEach(((c,u)=>{const h=i.get(c);h!==void 0&&wi(h.mutation,u,lt.empty(),we.now()),La(n,u)&&(l=l.insert(c,u))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Mt(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:v2(s.bundledQuery),readTime:Mt(s.readTime)}})(n)),L.resolve()}}/**
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
 */class L2{constructor(){this.overlays=new Ae(J.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return L.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.bt(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Tr(),i=n.length+1,o=new J(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ae(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Tr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const l=Tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((u,h)=>l.set(u,h))),!(l.size()>=s)););return L.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new e2(n,r));let i=this.Lr.get(n);i===void 0&&(i=ae(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
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
 */class O2{constructor(){this.sessionToken=je.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.kr=new Me(Oe.Kr),this.qr=new Me(Oe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Oe(e,n))}Qr(e,n){e.forEach((r=>this.removeReference(r,n)))}Gr(e){const n=new J(new ye([])),r=new Oe(n,e),s=new Oe(n,e+1),i=[];return this.qr.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new J(new ye([])),r=new Oe(n,e),s=new Oe(n,e+1);let i=ae();return this.qr.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Oe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return J.comparator(e.key,n.key)||oe(e.Hr,n.Hr)}static Ur(e,n){return oe(e.Hr,n.Hr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Me(Oe.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ZC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Jr=this.Jr.add(new Oe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Fu:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),s=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],(o=>{const l=this.Zr(o.Hr);i.push(l)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(oe);return n.forEach((s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,o],(l=>{r=r.add(l.Hr)}))})),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;J.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new J(i),0);let l=new Me(oe);return this.Jr.forEachWhile((c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Hr)),!0)}),o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return L.forEach(n.mutations,(s=>{const i=new Oe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,n){const r=new Oe(n,0),s=this.Jr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e){this.ti=e,this.docs=(function(){return new Ae(J.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let r=rn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qe.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=rn();const o=n.path,l=new J(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dC(uC(h),r)<=0||(s.has(h.key)||La(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K(9500)}ni(e,n){return L.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new $2(this)}getSize(e){return L.resolve(this.size)}}class $2 extends V2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(e){this.persistence=e,this.ri=new Nr((n=>Bu(n)),ju),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.ii=0,this.si=new Wu,this.targetCount=0,this.oi=ws._r()}forEachTarget(e,n){return this.ri.forEach(((r,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach(((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n){this._i={},this.overlays={},this.ai=new Pa(0),this.ui=!1,this.ui=!0,this.ci=new O2,this.referenceDelegate=e(this),this.li=new B2(this),this.indexManager=new A2,this.remoteDocumentCache=(function(s){return new U2(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new E2(n),this.Pi=new M2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new L2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new F2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new j2(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((i=>this.referenceDelegate.Ii(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return L.or(Object.values(this._i).map((r=>()=>r.containsKey(e,n))))}}class j2 extends fC{constructor(e){super(),this.currentSequenceNumber=e}}class Ju{constructor(e){this.persistence=e,this.Ri=new Wu,this.Ai=null}static Vi(e){return new Ju(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.di.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(r=>{const s=J.fromPath(r);return this.mi(e,s).next((i=>{i||n.removeEntry(s,ee.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class aa{constructor(e,n){this.persistence=e,this.fi=new Nr((r=>gC(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=P2(this,n)}static Vi(e,n){return new aa(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}pr(e){let n=0;return this.mr(e,(r=>{n++})).next((()=>n))}mr(e,n){return L.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((i=>i?L.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,n).next((l=>{l||(r++,i.removeEntry(o,ee.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Do(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=s}static Es(e,n){let r=ae(),s=ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ku(e,n.fromCache,r,s)}}/**
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
 */class z2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class H2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return PE()?8:pC(Ze())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ps(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new z2;return this.ys(e,n,o).next((l=>{if(i.result=l,this.As)return this.ws(e,n,o,l.size)}))})).next((()=>i.result))}ws(e,n,r,s){return r.documentReadCount<this.Vs?(ns()<=ie.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(ns()<=ie.DEBUG&&H("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(ns()<=ie.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(n))):L.resolve())}gs(e,n){if(qf(n))return L.resolve(null);let r=Dt(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Uc(n,null,"F"),r=Dt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ae(...i);return this.fs.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const u=this.bs(n,l);return this.Ss(n,u,o,c.readTime)?this.gs(e,Uc(n,null,"F")):this.Ds(e,u,n,c)}))))})))))}ps(e,n,r,s){return qf(n)||s.isEqual(ee.min())?L.resolve(null):this.fs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ss(n,o,r,s)?L.resolve(null):(ns()<=ie.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rs(n)),this.Ds(e,o,n,cC(s,ki)).next((l=>l)))}))}bs(e,n){let r=new Me(qy(e));return n.forEach(((s,i)=>{La(e,i)&&(r=r.add(i))})),r}Ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return ns()<=ie.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",rs(n)),this.fs.getDocumentsMatchingQuery(e,n,Ln.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu="LocalStore",q2=3e8;class G2{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Ae(oe),this.Fs=new Nr((i=>Bu(i)),ju),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new D2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function W2(t,e,n,r){return new G2(t,e,n,r)}async function m_(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],l=[];let c=ae();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){l.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:l})))}))}))}function J2(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return(function(l,c,u,h){const f=u.batch,m=f.keys();let E=L.resolve();return m.forEach((I=>{E=E.next((()=>h.getEntry(c,I))).next((k=>{const D=u.docVersions.get(I);de(D!==null,48541),k.version.compareTo(D)<0&&(f.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))}))})),E.next((()=>l.mutationQueue.removeMutationBatch(c,f)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=ae();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function g_(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function K2(t,e){const n=te(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const l=[];e.targetChanges.forEach(((h,f)=>{const m=s.get(f);if(!m)return;l.push(n.li.removeMatchingKeys(i,h.removedDocuments,f).next((()=>n.li.addMatchingKeys(i,h.addedDocuments,f))));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(je.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(h.resumeToken,r)),s=s.insert(f,E),(function(k,D,S){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=q2?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0})(m,E,h)&&l.push(n.li.updateTargetData(i,E))}));let c=rn(),u=ae();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))})),l.push(Q2(i,o,e.documentUpdates).next((h=>{c=h.Bs,u=h.Ls}))),!r.isEqual(ee.min())){const h=n.li.getLastRemoteSnapshotVersion(i).next((f=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(h)}return L.waitFor(l).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,c,u))).next((()=>c))})).then((i=>(n.vs=s,i)))}function Q2(t,e,n){let r=ae(),s=ae();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=rn();return n.forEach(((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):H(Qu,"Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)})),{Bs:o,Ls:s}}))}function Y2(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Fu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function X2(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.li.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):n.li.allocateTargetId(r).next((o=>(s=new kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r}))}async function Hc(t,e,n){const r=te(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Vs(o))throw o;H(Qu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function sp(t,e,n){const r=te(t);let s=ee.min(),i=ae();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,u,h){const f=te(c),m=f.Fs.get(h);return m!==void 0?L.resolve(f.vs.get(m)):f.li.getTargetData(u,h)})(r,o,Dt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ae()))).next((l=>(Z2(r,OC(e),l),{documents:l,ks:i})))))}function Z2(t,e,n){let r=t.Ms.get(e)||ee.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Ms.set(e,r)}class ip{constructor(){this.activeTargetIds=zC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eR{constructor(){this.vo=new ip,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new ip,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tR{Mo(e){}shutdown(){}}/**
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
 */const op="ConnectivityMonitor";class ap{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(op,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(op,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wo=null;function qc(){return wo===null?wo=(function(){return 268435456+Math.round(2147483648*Math.random())})():wo++,"0x"+wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="RestConnection",nR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class rR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ta?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=qc(),l=this.Qo(e,n.toUriEncodedString());H(Bl,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,s,i);const{host:u}=new URL(l),h=Cs(u);return this.zo(e,l,c,r,h).then((f=>(H(Bl,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw gs(Bl,`RPC '${e}' ${o} failed with error: `,f,"url: ",l,"request:",r),f}))}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+xs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Qo(e,n){const r=nR[e];let s=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="WebChannelConnection",ti=(t,e,n)=>{t.listen(e,(r=>{try{n(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ds extends rR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ds.c_){const e=Ty();ti(e,wy.STAT_EVENT,(n=>{n.stat===Vc.PROXY?H(Ge,"STAT_EVENT: detected buffering proxy"):n.stat===Vc.NOPROXY&&H(Ge,"STAT_EVENT: detected no buffering proxy")})),ds.c_=!0}}zo(e,n,r,s,i){const o=qc();return new Promise(((l,c)=>{const u=new _y;u.setWithCredentials(!0),u.listenOnce(by.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case No.NO_ERROR:const f=u.getResponseJson();H(Ge,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),l(f);break;case No.TIMEOUT:H(Ge,`RPC '${e}' ${o} timed out`),c(new $(N.DEADLINE_EXCEEDED,"Request time out"));break;case No.HTTP_ERROR:const m=u.getStatus();if(H(Ge,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const I=E==null?void 0:E.error;if(I&&I.status&&I.message){const k=(function(S){const R=S.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(R)>=0?R:N.UNKNOWN})(I.status);c(new $(k,I.message))}else c(new $(N.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new $(N.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{H(Ge,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(s);H(Ge,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",h,r,15)}))}T_(e,n,r){const s=qc(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");H(Ge,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);this.I_(h);let f=!1,m=!1;const E=new sR({Ho:I=>{m?H(Ge,`Not sending because RPC '${e}' stream ${s} is closed:`,I):(f||(H(Ge,`Opening RPC '${e}' stream ${s} transport.`),h.open(),f=!0),H(Ge,`RPC '${e}' stream ${s} sending:`,I),h.send(I))},Jo:()=>h.close()});return ti(h,ci.EventType.OPEN,(()=>{m||(H(Ge,`RPC '${e}' stream ${s} transport opened.`),E.i_())})),ti(h,ci.EventType.CLOSE,(()=>{m||(m=!0,H(Ge,`RPC '${e}' stream ${s} transport closed`),E.o_(),this.E_(h))})),ti(h,ci.EventType.ERROR,(I=>{m||(m=!0,gs(Ge,`RPC '${e}' stream ${s} transport errored. Name:`,I.name,"Message:",I.message),E.o_(new $(N.UNAVAILABLE,"The operation could not be completed")))})),ti(h,ci.EventType.MESSAGE,(I=>{var k;if(!m){const D=I.data[0];de(!!D,16349);const S=D,R=(S==null?void 0:S.error)||((k=S[0])==null?void 0:k.error);if(R){H(Ge,`RPC '${e}' stream ${s} received error:`,R);const M=R.status;let z=(function(b){const g=Se[b];if(g!==void 0)return n_(g)})(M),P=R.message;z===void 0&&(z=N.INTERNAL,P="Unknown error status: "+M+" with message "+R.message),m=!0,E.o_(new $(z,P)),h.close()}else H(Ge,`RPC '${e}' stream ${s} received:`,D),E.__(D)}})),ds.u_(),setTimeout((()=>{E.s_()}),0),E}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Iy()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){return new ds(t)}function jl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return new c2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ds.c_=!1;class y_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="PersistentStream";class __{constructor(e,n,r,s,i,o,l,c){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new y_(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(nn(n.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new $(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(lp,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(H(lp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oR extends __{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=h2(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Mt(o.readTime):ee.min()})(e);return this.listener.J_(n,r)}Z_(e){const n={};n.database=zc(this.serializer),n.addTarget=(function(i,o){let l;const c=o.target;if(l=Oc(c)?{documents:m2(i,c)}:{query:g2(i,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=i_(i,o.resumeToken);const u=$c(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=oa(i,o.snapshotVersion.toTimestamp());const u=$c(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l})(this.serializer,e);const r=_2(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=zc(this.serializer),n.removeTarget=e,this.K_(n)}}class aR extends __{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=p2(e.writeResults,e.commitTime),r=Mt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=zc(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>f2(this.serializer,r)))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{}class cR extends lR{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Bc(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(N.UNKNOWN,i.toString())}))}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.jo(e,Bc(n,r),s,o,l,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(N.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function uR(t,e,n,r){return new cR(t,e,n,r)}class dR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(nn(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr="RemoteStore";class hR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{Dr(this)&&(H(xr,"Restarting streams for network reachability change."),await(async function(c){const u=te(c);u.Ea.add(4),await Ki(u),u.Va.set("Unknown"),u.Ea.delete(4),await ja(u)})(this))}))})),this.Va=new dR(r,s)}}async function ja(t){if(Dr(t))for(const e of t.Ra)await e(!0)}async function Ki(t){for(const e of t.Ra)await e(!1)}function b_(t,e){const n=te(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ed(n)?Zu(n):Ns(n).O_()&&Xu(n,e))}function Yu(t,e){const n=te(t),r=Ns(n);n.Ia.delete(e),r.O_()&&w_(n,e),n.Ia.size===0&&(r.O_()?r.L_():Dr(n)&&n.Va.set("Unknown"))}function Xu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).Z_(e)}function w_(t,e){t.da.$e(e),Ns(t).X_(e)}function Zu(t){t.da=new i2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.Va.ua()}function ed(t){return Dr(t)&&!Ns(t).x_()&&t.Ia.size>0}function Dr(t){return te(t).Ea.size===0}function T_(t){t.da=void 0}async function fR(t){t.Va.set("Online")}async function pR(t){t.Ia.forEach(((e,n)=>{Xu(t,e)}))}async function mR(t,e){T_(t),ed(t)?(t.Va.ha(e),Zu(t)):t.Va.set("Unknown")}async function gR(t,e,n){if(t.Va.set("Online"),e instanceof s_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.da.removeTarget(l))})(t,e)}catch(r){H(xr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await la(t,r)}else if(e instanceof Oo?t.da.Xe(e):e instanceof r_?t.da.st(e):t.da.tt(e),!n.isEqual(ee.min()))try{const r=await g_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const l=i.da.Tt(o);return l.targetChanges.forEach(((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ia.get(u);h&&i.Ia.set(u,h.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,u)=>{const h=i.Ia.get(c);if(!h)return;i.Ia.set(c,h.withResumeToken(je.EMPTY_BYTE_STRING,h.snapshotVersion)),w_(i,c);const f=new kn(h.target,c,u,h.sequenceNumber);Xu(i,f)})),i.remoteSyncer.applyRemoteEvent(l)})(t,n)}catch(r){H(xr,"Failed to raise snapshot:",r),await la(t,r)}}async function la(t,e,n){if(!Vs(e))throw e;t.Ea.add(1),await Ki(t),t.Va.set("Offline"),n||(n=()=>g_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{H(xr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ja(t)}))}function I_(t,e){return e().catch((n=>la(t,n,e)))}async function za(t){const e=te(t),n=$n(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Fu;for(;yR(e);)try{const s=await Y2(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,_R(e,s)}catch(s){await la(e,s)}E_(e)&&v_(e)}function yR(t){return Dr(t)&&t.Ta.length<10}function _R(t,e){t.Ta.push(e);const n=$n(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function E_(t){return Dr(t)&&!$n(t).x_()&&t.Ta.length>0}function v_(t){$n(t).start()}async function bR(t){$n(t).ra()}async function wR(t){const e=$n(t);for(const n of t.Ta)e.ea(n.mutations)}async function TR(t,e,n){const r=t.Ta.shift(),s=Hu.from(r,e,n);await I_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await za(t)}async function IR(t,e){e&&$n(t).Y_&&await(async function(r,s){if((function(o){return n2(o)&&o!==N.ABORTED})(s.code)){const i=r.Ta.shift();$n(r).B_(),await I_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await za(r)}})(t,e),E_(t)&&v_(t)}async function cp(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),H(xr,"RemoteStore received new credentials");const r=Dr(n);n.Ea.add(3),await Ki(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ja(n)}async function ER(t,e){const n=te(t);e?(n.Ea.delete(2),await ja(n)):e||(n.Ea.add(2),await Ki(n),n.Va.set("Unknown"))}function Ns(t){return t.ma||(t.ma=(function(n,r,s){const i=te(n);return i.sa(),new oR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:fR.bind(null,t),Yo:pR.bind(null,t),t_:mR.bind(null,t),J_:gR.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),ed(t)?Zu(t):t.Va.set("Unknown")):(await t.ma.stop(),T_(t))}))),t.ma}function $n(t){return t.fa||(t.fa=(function(n,r,s){const i=te(n);return i.sa(),new aR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bR.bind(null,t),t_:IR.bind(null,t),ta:wR.bind(null,t),na:TR.bind(null,t)}),t.Ra.push((async e=>{e?(t.fa.B_(),await za(t)):(await t.fa.stop(),t.Ta.length>0&&(H(xr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new td(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nd(t,e){if(nn("AsyncQueue",`${e}: ${t}`),Vs(t))return new $(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{static emptySet(e){return new hs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=ui(),this.sortedSet=new Ae(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.ga=new Ae(J.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ts{constructor(e,n,r,s,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((l=>{o.push({type:0,doc:l})})),new Ts(e,n,hs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class AR{constructor(){this.queries=dp(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=te(n),i=s.queries;s.queries=dp(),i.forEach(((o,l)=>{for(const c of l.ba)c.onError(r)}))})(this,new $(N.ABORTED,"Firestore shutting down"))}}function dp(){return new Nr((t=>Hy(t)),Ma)}async function rd(t,e){const n=te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new vR,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=nd(o,`Initialization of query '${rs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.ba.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&id(n)}async function sd(t,e){const n=te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.ba.indexOf(e);o>=0&&(i.ba.splice(o,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function CR(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.ba)l.Fa(s)&&(r=!0);o.wa=s}}r&&id(n)}function RR(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(n);r.queries.delete(e)}function id(t){t.Ca.forEach((e=>{e.next()}))}var Gc,hp;(hp=Gc||(Gc={})).Ma="default",hp.Cache="cache";class od{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Gc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.key=e}}class C_{constructor(e){this.key=e}}class kR{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ae(),this.mutatedKeys=ae(),this.eu=qy(e),this.tu=new hs(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new up,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((h,f)=>{const m=s.get(h),E=La(this.query,f)?f:null,I=!!m&&this.mutatedKeys.has(m.key),k=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;m&&E?m.data.isEqual(E.data)?I!==k&&(r.track({type:3,doc:E}),D=!0):this.su(m,E)||(r.track({type:2,doc:E}),D=!0,(c&&this.eu(E,c)>0||u&&this.eu(E,u)<0)&&(l=!0)):!m&&E?(r.track({type:0,doc:E}),D=!0):m&&!E&&(r.track({type:1,doc:m}),D=!0,(c||u)&&(l=!0)),D&&(E?(o=o.add(E),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{tu:o,iu:r,Ss:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,f)=>(function(E,I){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Vt:D})}};return k(E)-k(I)})(h.type,f.type)||this.eu(h.doc,f.doc))),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],c=this.Ya.size===0&&this.current&&!s?1:0,u=c!==this.Xa;return this.Xa=c,o.length!==0||u?{snapshot:new Ts(this.query,e.tu,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new up,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ae(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const n=[];return e.forEach((r=>{this.Ya.has(r)||n.push(new C_(r))})),this.Ya.forEach((r=>{e.has(r)||n.push(new A_(r))})),n}cu(e){this.Za=e.ks,this.Ya=ae();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ts.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ad="SyncEngine";class SR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xR{constructor(e){this.key=e,this.hu=!1}}class PR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Nr((l=>Hy(l)),Ma),this.Iu=new Map,this.Eu=new Set,this.Ru=new Ae(J.comparator),this.Au=new Map,this.Vu=new Wu,this.du={},this.mu=new Map,this.fu=ws.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function VR(t,e,n=!0){const r=V_(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await R_(r,e,n,!0),s}async function NR(t,e){const n=V_(t);await R_(n,e,!0,!1)}async function R_(t,e,n,r){const s=await X2(t.localStore,Dt(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await DR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&b_(t.remoteStore,s),l}async function DR(t,e,n,r,s){t.pu=(f,m,E)=>(async function(k,D,S,R){let M=D.view.ru(S);M.Ss&&(M=await sp(k.localStore,D.query,!1).then((({documents:b})=>D.view.ru(b,M))));const z=R&&R.targetChanges.get(D.targetId),P=R&&R.targetMismatches.get(D.targetId)!=null,O=D.view.applyChanges(M,k.isPrimaryClient,z,P);return pp(k,D.targetId,O.au),O.snapshot})(t,f,m,E);const i=await sp(t.localStore,e,!0),o=new kR(e,i.ks),l=o.ru(i.documents),c=Ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(l,t.isPrimaryClient,c);pp(t,n,u.au);const h=new SR(e,n,o);return t.Tu.set(e,h),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function MR(t,e,n){const r=te(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((o=>!Ma(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Hc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yu(r.remoteStore,s.targetId),Wc(r,s.targetId)})).catch(Ps)):(Wc(r,s.targetId),await Hc(r.localStore,s.targetId,!0))}async function LR(t,e){const n=te(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yu(n.remoteStore,r.targetId))}async function OR(t,e,n){const r=HR(t);try{const s=await(function(o,l){const c=te(o),u=we.now(),h=l.reduce(((E,I)=>E.add(I.key)),ae());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(E=>{let I=rn(),k=ae();return c.xs.getEntries(E,h).next((D=>{I=D,I.forEach(((S,R)=>{R.isValidDocument()||(k=k.add(S))}))})).next((()=>c.localDocuments.getOverlayedDocuments(E,I))).next((D=>{f=D;const S=[];for(const R of l){const M=YC(R,f.get(R.key).overlayedDocument);M!=null&&S.push(new qn(R.key,M,Ly(M.value.mapValue),it.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,S,l)})).next((D=>{m=D;const S=D.applyToLocalDocumentSet(f,k);return c.documentOverlayCache.saveOverlays(E,D.batchId,S)}))})).then((()=>({batchId:m.batchId,changes:Wy(f)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,l,c){let u=o.du[o.currentUser.toKey()];u||(u=new Ae(oe)),u=u.insert(l,c),o.du[o.currentUser.toKey()]=u})(r,s.batchId,n),await Qi(r,s.changes),await za(r.remoteStore)}catch(s){const i=nd(s,"Failed to persist write");n.reject(i)}}async function k_(t,e){const n=te(t);try{const r=await K2(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Au.get(i);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?de(o.hu,14607):s.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))})),await Qi(n,r,e)}catch(r){await Ps(r)}}function fp(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(o,l){const c=te(o);c.onlineState=l;let u=!1;c.queries.forEach(((h,f)=>{for(const m of f.ba)m.va(l)&&(u=!0)})),u&&id(c)})(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function FR(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ae(J.comparator);o=o.insert(i,Qe.newNoDocument(i,ee.min()));const l=ae().add(i),c=new $a(ee.min(),new Map,new Ae(oe),o,l);await k_(r,c),r.Ru=r.Ru.remove(i),r.Au.delete(e),ld(r)}else await Hc(r.localStore,e,!1).then((()=>Wc(r,e,n))).catch(Ps)}async function UR(t,e){const n=te(t),r=e.batch.batchId;try{const s=await J2(n.localStore,e);x_(n,r,null),S_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Qi(n,s)}catch(s){await Ps(s)}}async function $R(t,e,n){const r=te(t);try{const s=await(function(o,l){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return c.mutationQueue.lookupMutationBatch(u,l).next((f=>(de(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f)))).next((()=>c.mutationQueue.performConsistencyCheck(u))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>c.localDocuments.getDocuments(u,h)))}))})(r.localStore,e);x_(r,e,n),S_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Qi(r,s)}catch(s){await Ps(s)}}function S_(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function x_(t,e,n){const r=te(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Wc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((r=>{t.Vu.containsKey(r)||P_(t,r)}))}function P_(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Yu(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),ld(t))}function pp(t,e,n){for(const r of n)r instanceof A_?(t.Vu.addReference(r.key,e),BR(t,r)):r instanceof C_?(H(ad,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||P_(t,r.key)):K(19791,{wu:r})}function BR(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(H(ad,"New document in limbo: "+n),t.Eu.add(r),ld(t))}function ld(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new J(ye.fromString(e)),r=t.fu.next();t.Au.set(r,new xR(n)),t.Ru=t.Ru.insert(n,r),b_(t.remoteStore,new kn(Dt(Da(n.path)),r,"TargetPurposeLimboResolution",Pa.ce))}}async function Qi(t,e,n){const r=te(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,n).then((u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))==null?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=Ku.Es(c.targetId,u);i.push(f)}})))})),await Promise.all(o),r.Pu.J_(s),await(async function(c,u){const h=te(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>L.forEach(u,(m=>L.forEach(m.Ts,(E=>h.persistence.referenceDelegate.addReference(f,m.targetId,E))).next((()=>L.forEach(m.Is,(E=>h.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))))))}catch(f){if(!Vs(f))throw f;H(Qu,"Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const E=h.vs.get(m),I=E.snapshotVersion,k=E.withLastLimboFreeSnapshotVersion(I);h.vs=h.vs.insert(m,k)}}})(r.localStore,i))}async function jR(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){H(ad,"User change. New user:",e.toKey());const r=await m_(n.localStore,e);n.currentUser=e,(function(i,o){i.mu.forEach((l=>{l.forEach((c=>{c.reject(new $(N.CANCELLED,o))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Qi(n,r.Ns)}}function zR(t,e){const n=te(t),r=n.Au.get(e);if(r&&r.hu)return ae().add(r.key);{let s=ae();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function V_(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=k_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FR.bind(null,e),e.Pu.J_=CR.bind(null,e.eventManager),e.Pu.yu=RR.bind(null,e.eventManager),e}function HR(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$R.bind(null,e),e}class ca{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ba(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return W2(this.persistence,new H2,e.initialUser,this.serializer)}Cu(e){return new p_(Ju.Vi,this.serializer)}Du(e){return new eR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ca.provider={build:()=>new ca};class qR extends ca{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){de(this.persistence.referenceDelegate instanceof aa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new S2(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new p_((r=>aa.Vi(r,n)),this.serializer)}}class Jc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jR.bind(null,this.syncEngine),await ER(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new AR})()}createDatastore(e){const n=Ba(e.databaseInfo.databaseId),r=iR(e.databaseInfo);return uR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,l){return new hR(r,s,i,o,l)})(this.localStore,this.datastore,e.asyncQueue,(n=>fp(this.syncEngine,n,0)),(function(){return ap.v()?new ap:new tR})())}createSyncEngine(e,n){return(function(s,i,o,l,c,u,h){const f=new PR(s,i,o,l,c,u);return h&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=te(s);H(xr,"RemoteStore shutting down."),i.Ea.add(5),await Ki(i),i.Aa.shutdown(),i.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Jc.provider={build:()=>new Jc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):nn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="FirestoreClient";class GR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=Ke.UNAUTHENTICATED,this.clientId=Ou.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{H(Bn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(H(Bn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nd(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function zl(t,e){t.asyncQueue.verifyOperationInProgress(),H(Bn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await m_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function mp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WR(t);H(Bn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>cp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>cp(e.remoteStore,s))),t._onlineComponents=e}async function WR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Bn,"Using user provided OfflineComponentProvider");try{await zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await zl(t,new ca)}}else H(Bn,"Using default OfflineComponentProvider"),await zl(t,new qR(void 0));return t._offlineComponents}async function N_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Bn,"Using user provided OnlineComponentProvider"),await mp(t,t._uninitializedComponentsProvider._online)):(H(Bn,"Using default OnlineComponentProvider"),await mp(t,new Jc))),t._onlineComponents}function JR(t){return N_(t).then((e=>e.syncEngine))}async function ua(t){const e=await N_(t),n=e.eventManager;return n.onListen=VR.bind(null,e.syncEngine),n.onUnlisten=MR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=NR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=LR.bind(null,e.syncEngine),n}function KR(t,e,n,r){const s=new cd(r),i=new od(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>rd(await ua(t),i))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>sd(await ua(t),i)))}}function QR(t,e,n={}){const r=new Xt;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const h=new cd({next:m=>{h.Nu(),o.enqueueAndForget((()=>sd(i,f)));const E=m.docs.has(l);!E&&m.fromCache?u.reject(new $(N.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&c&&c.source==="server"?u.reject(new $(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new od(Da(l.path),h,{includeMetadataChanges:!0,Ka:!0});return rd(i,f)})(await ua(t),t.asyncQueue,e,n,r))),r.promise}function YR(t,e,n={}){const r=new Xt;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,l,c,u){const h=new cd({next:m=>{h.Nu(),o.enqueueAndForget((()=>sd(i,f))),m.fromCache&&c.source==="server"?u.reject(new $(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new od(l,h,{includeMetadataChanges:!0,Ka:!0});return rd(i,f)})(await ua(t),t.asyncQueue,e,n,r))),r.promise}function XR(t,e){const n=new Xt;return t.asyncQueue.enqueueAndForget((async()=>OR(await JR(t),e,n))),n.promise}/**
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
 */function D_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR="ComponentProvider",gp=new Map;function ek(t,e,n,r,s){return new bC(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,D_(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="firestore.googleapis.com",yp=!0;class _p{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=M_,this.ssl=yp}else this.host=e.host,this.ssl=e.ssl??yp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=f_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<R2)throw new $(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=D_(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ha{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _p({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _p(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new XA;switch(r.type){case"firstParty":return new nC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=gp.get(n);r&&(H(ZR,"Removing Datastore"),gp.delete(n),r.terminate())})(this),Promise.resolve()}}function tk(t,e,n,r={}){var u;t=ct(t,Ha);const s=Cs(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(Sg(`https://${l}`),xg("Firestore",!0)),i.host!==M_&&i.host!==l&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:l,ssl:s,emulatorOptions:r};if(!Cr(c,o)&&(t._setSettings(c),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Ke.MOCK_USER;else{h=IE(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new $(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Ke(m)}t._authCredentials=new ZA(new vy(h,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Mr(this.firestore,e,this._query)}}class ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ke(this.firestore,e,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(qi(n,ke._jsonSchema))return new ke(e,r||null,new J(ye.fromString(n.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:Pe("string",ke._jsonSchemaVersion),referencePath:Pe("string")};class Mn extends Mr{constructor(e,n,r){super(e,n,Da(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ke(this.firestore,null,new J(e))}withConverter(e){return new Mn(this.firestore,e,this._path)}}function Lr(t,e,...n){if(t=Ve(t),Ay("collection","path",e),t instanceof Ha){const r=ye.fromString(e,...n);return Pf(r),new Mn(t,null,r)}{if(!(t instanceof ke||t instanceof Mn))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Pf(r),new Mn(t.firestore,null,r)}}function jt(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=Ou.newId()),Ay("doc","path",e),t instanceof Ha){const r=ye.fromString(e,...n);return xf(r),new ke(t,null,new J(r))}{if(!(t instanceof ke||t instanceof Mn))throw new $(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return xf(r),new ke(t.firestore,t instanceof Mn?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp="AsyncQueue";class wp{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new y_(this,"async_queue_retry"),this._c=()=>{const r=jl();r&&H(bp,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=jl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Xt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Vs(e))throw e;H(bp,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,nn("INTERNAL UNHANDLED ERROR: ",Tp(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=td.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&K(47125,{Pc:Tp(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Tp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class sn extends Ha{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new wp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wp(e),this._firestoreClient=void 0,await e}}}function nk(t,e){const n=typeof t=="object"?t:Dg(),r=typeof t=="string"?t:ta,s=vu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wE("firestore");i&&tk(s,...i)}return s}function Yi(t){if(t._terminated)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rk(t),t._firestoreClient}function rk(t){var r,s,i,o;const e=t._freezeSettings(),n=ek(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new GR(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pt(je.fromBase64String(e))}catch(n){throw new $(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pt(je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qi(e,pt._jsonSchema))return pt.fromBase64String(e.bytes)}}pt._jsonSchemaVersion="firestore/bytes/1.0",pt._jsonSchema={type:Pe("string",pt._jsonSchemaVersion),bytes:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Lt._jsonSchemaVersion}}static fromJSON(e){if(qi(e,Lt._jsonSchema))return new Lt(e.latitude,e.longitude)}}Lt._jsonSchemaVersion="firestore/geoPoint/1.0",Lt._jsonSchema={type:Pe("string",Lt._jsonSchemaVersion),latitude:Pe("number"),longitude:Pe("number")};/**
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
 */class Et{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Et._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qi(e,Et._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Et(e.vectorValues);throw new $(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Et._jsonSchemaVersion="firestore/vectorValue/1.0",Et._jsonSchema={type:Pe("string",Et._jsonSchemaVersion),vectorValues:Pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=/^__.*__$/;class ik{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wi(e,this.data,n,this.fieldTransforms)}}class L_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new qn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function O_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:t})}}class dd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new dd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return da(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(O_(this.dataSource)&&sk.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class ok{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ba(e)}createContext(e,n,r,s=!1){return new dd({dataSource:e,methodName:n,targetDoc:r,path:$e.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ga(t){const e=t._freezeSettings(),n=Ba(t._databaseId);return new ok(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hd(t,e,n,r,s,i={}){const o=t.createContext(i.merge||i.mergeFields?2:0,e,n,s);pd("Data must be an object, but it was:",o,r);const l=F_(r,o);let c,u;if(i.merge)c=new lt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=Is(e,f,n);if(!o.contains(m))throw new $(N.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);B_(h,m)||h.push(m)}c=new lt(h),u=o.fieldTransforms.filter((f=>c.covers(f.field)))}else c=null,u=o.fieldTransforms;return new ik(new st(l),c,u)}class Wa extends qa{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wa}}class fd extends qa{_toFieldTransform(e){return new WC(e.path,new Vi)}isEqual(e){return e instanceof fd}}function ak(t,e,n,r){const s=t.createContext(1,e,n);pd("Data must be an object, but it was:",s,r);const i=[],o=st.empty();Hn(r,((c,u)=>{const h=$_(e,c,n);u=Ve(u);const f=s.childContextForFieldPath(h);if(u instanceof Wa)i.push(h);else{const m=Xi(u,f);m!=null&&(i.push(h),o.set(h,m))}}));const l=new lt(i);return new L_(o,l,s.fieldTransforms)}function lk(t,e,n,r,s,i){const o=t.createContext(1,e,n),l=[Is(e,r,n)],c=[s];if(i.length%2!=0)throw new $(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Is(e,i[m])),c.push(i[m+1]);const u=[],h=st.empty();for(let m=l.length-1;m>=0;--m)if(!B_(u,l[m])){const E=l[m];let I=c[m];I=Ve(I);const k=o.childContextForFieldPath(E);if(I instanceof Wa)u.push(E);else{const D=Xi(I,k);D!=null&&(u.push(E),h.set(E,D))}}const f=new lt(u);return new L_(h,f,o.fieldTransforms)}function ck(t,e,n,r=!1){return Xi(n,t.createContext(r?4:3,e))}function Xi(t,e){if(U_(t=Ve(t)))return pd("Unsupported field value:",e,t),F_(t,e);if(t instanceof qa)return(function(r,s){if(!O_(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const l of r){let c=Xi(l,s.childContextForArray(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return HC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=we.fromDate(r);return{timestampValue:oa(s.serializer,i)}}if(r instanceof we){const i=new we(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oa(s.serializer,i)}}if(r instanceof Lt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pt)return{bytesValue:i_(s.serializer,r._byteString)};if(r instanceof ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Et)return(function(o,l){const c=o instanceof Et?o.toArray():o;return{mapValue:{fields:{[Dy]:{stringValue:My},[na]:{arrayValue:{values:c.map((h=>{if(typeof h!="number")throw l.createError("VectorValues must only contain numeric values.");return zu(l.serializer,h)}))}}}}}})(r,s);if(h_(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${xa(r)}`)})(t,e)}function F_(t,e){const n={};return ky(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(t,((r,s)=>{const i=Xi(s,e.childContextForField(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function U_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof Lt||t instanceof pt||t instanceof ke||t instanceof qa||t instanceof Et||h_(t))}function pd(t,e,n){if(!U_(n)||!Cy(n)){const r=xa(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Is(t,e,n){if((e=Ve(e))instanceof ud)return e._internalPath;if(typeof e=="string")return $_(t,e);throw da("Field path arguments must be of type string or ",t,!1,void 0,n)}const uk=new RegExp("[~\\*/\\[\\]]");function $_(t,e,n){if(e.search(uk)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ud(...e.split("."))._internalPath}catch{throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new $(N.INVALID_ARGUMENT,l+t+c)}function B_(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{convertValue(e,n="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hn(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[na].arrayValue)==null?void 0:s.values)==null?void 0:i.map((o=>Re(o.doubleValue)));return new Et(n)}convertGeoPoint(e){return new Lt(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Na(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Si(e));default:return null}}convertTimestamp(e){const n=On(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);de(d_(r),9688,{name:e});const s=new xi(r.get(1),r.get(3)),i=new J(r.popFirst(5));return s.isEqual(n)||nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class md extends dk{constructor(e){super(),this.firestore=e}convertBytes(e){return new pt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function Ie(){return new fd("serverTimestamp")}const Ip="@firebase/firestore",Ep="4.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Is("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hk extends j_{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gd{}class fk extends gd{}function Ja(t,e,...n){let r=[];e instanceof gd&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((c=>c instanceof yd)).length,l=i.filter((c=>c instanceof Ka)).length;if(o>1||o>0&&l>0)throw new $(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Ka extends fk{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ka(e,n,r)}_apply(e){const n=this._parse(e);return H_(e._query,n),new Mr(e.firestore,e.converter,Fc(e._query,n))}_parse(e){const n=Ga(e.firestore);return(function(i,o,l,c,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Cp(f,h);const I=[];for(const k of f)I.push(Ap(c,i,k));m={arrayValue:{values:I}}}else m=Ap(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Cp(f,h),m=ck(l,o,f,h==="in"||h==="not-in");return xe.create(u,h,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Qa(t,e,n){const r=e,s=Is("where",t);return Ka._create(s,r,n)}class yd extends gd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yd(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:Ct.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)H_(o,c),o=Fc(o,c)})(e._query,n),new Mr(e.firestore,e.converter,Fc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ap(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new $(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zy(e)&&n.indexOf("/")!==-1)throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ye.fromString(n));if(!J.isDocumentKey(r))throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Uf(t,new J(r))}if(n instanceof ke)return Uf(t,n._key);throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xa(n)}.`)}function Cp(t,e){if(!Array.isArray(t)||t.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function H_(t,e){const n=(function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _d(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class hi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ir extends j_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Is("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ir._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ir._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ir._jsonSchema={type:Pe("string",Ir._jsonSchemaVersion),bundleSource:Pe("string","DocumentSnapshot"),bundleName:Pe("string"),bundle:Pe("string")};class Fo extends Ir{data(e={}){return super.data(e)}}class Er{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new hi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Fo(this._firestore,this._userDataWriter,r.key,r,new hi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new Fo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new hi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),h=o.indexOf(l.doc.key)),{type:pk(l.type),doc:c,oldIndex:u,newIndex:h}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Er._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ou.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function pk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}/**
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
 */Er._jsonSchemaVersion="firestore/querySnapshot/1.0",Er._jsonSchema={type:Pe("string",Er._jsonSchemaVersion),bundleSource:Pe("string","QuerySnapshot"),bundleName:Pe("string"),bundle:Pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ga(e)}set(e,n,r){this._verifyNotCommitted();const s=Hl(e,this._firestore),i=_d(s.converter,n,r),o=hd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,it.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Hl(e,this._firestore);let o;return o=typeof(n=Ve(n))=="string"||n instanceof ud?lk(this._dataReader,"WriteBatch.update",i._key,n,r,s):ak(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,it.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Hl(e,this._firestore);return this._mutations=this._mutations.concat(new Ua(n._key,it.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new $(N.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Hl(t,e){if((t=Ve(t)).firestore!==e)throw new $(N.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){t=ct(t,ke);const e=ct(t.firestore,sn),n=Yi(e);return QR(n,t._key).then((r=>q_(e,t,r)))}function Or(t){t=ct(t,Mr);const e=ct(t.firestore,sn),n=Yi(e),r=new md(e);return z_(t._query),YR(n,t._query).then((s=>new Er(e,r,t,s)))}function yt(t,e,n){t=ct(t,ke);const r=ct(t.firestore,sn),s=_d(t.converter,e,n),i=Ga(r);return Xa(r,[hd(i,"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,it.none())])}function Fr(t){return Xa(ct(t.firestore,sn),[new Ua(t._key,it.none())])}function Ya(t,e){const n=ct(t.firestore,sn),r=jt(t),s=_d(t.converter,e),i=Ga(t.firestore);return Xa(n,[hd(i,"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,it.exists(!1))]).then((()=>r))}function zt(t,...e){var u,h,f;t=Ve(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||vp(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(vp(e[r])){const m=e[r];e[r]=(u=m.next)==null?void 0:u.bind(m),e[r+1]=(h=m.error)==null?void 0:h.bind(m),e[r+2]=(f=m.complete)==null?void 0:f.bind(m)}let i,o,l;if(t instanceof ke)o=ct(t.firestore,sn),l=Da(t._key.path),i={next:m=>{e[r]&&e[r](q_(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=ct(t,Mr);o=ct(m.firestore,sn),l=m._query;const E=new md(o);i={next:I=>{e[r]&&e[r](new Er(o,E,m,I))},error:e[r+1],complete:e[r+2]},z_(t._query)}const c=Yi(o);return KR(c,l,s,i)}function Xa(t,e){const n=Yi(t);return XR(n,e)}function q_(t,e,n){const r=n.docs.get(e._key),s=new md(t);return new Ir(t,s,e._key,r,new hi(n.hasPendingWrites,n.fromCache),e.converter)}function gk(t){return t=ct(t,sn),Yi(t),new mk(t,(e=>Xa(t,e)))}(function(e,n=!0){YA(Rs),ps(new Rr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new sn(new eC(r.getProvider("auth-internal")),new rC(o,r.getProvider("app-check-internal")),wC(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Vn(Ip,Ep,e),Vn(Ip,Ep,"esm2020")})();const yk={apiKey:"AIzaSyCvK7ounDvKzgKGHK30uCFqDUbqZkoOGJc",authDomain:"cardy-hardy.firebaseapp.com",projectId:"cardy-hardy",storageBucket:"cardy-hardy.firebasestorage.app",messagingSenderId:"756160918063",appId:"1:756160918063:web:830975f45634054dfe8cda",measurementId:"G-MXM77YZD95"};let ql=null,Gl=null,Wl=null,Jl=null;const G_=()=>(ql||(ql=Ng(yk)),ql),Es=()=>(Gl||(Gl=KA(G_())),Gl),Rp=()=>(Wl||(Wl=new Kt),Wl),ze=()=>(Jl||(Jl=nk(G_())),Jl),W_=()=>jt(ze(),"admins","list"),J_=()=>jt(ze(),"config","site"),bd=t=>jt(ze(),"users",t),K_=()=>Lr(ze(),"users"),Q_=()=>Lr(ze(),"games"),ha=t=>jt(ze(),"games",t),wd=()=>Lr(ze(),"manufacturers"),Y_=t=>jt(ze(),"manufacturers",t),Td=()=>Lr(ze(),"gameTiers"),Id=t=>jt(ze(),"gameTiers",t),Ed=()=>Lr(ze(),"gameRatings"),Kc=t=>jt(ze(),"gameRatings",t),Za=()=>Lr(ze(),"currentGames"),X_=t=>jt(ze(),"currentGames",t),el=()=>Lr(ze(),"pastOwnedGames"),Z_=t=>jt(ze(),"pastOwnedGames",t),Qc=(t="")=>t.trim().toLowerCase(),_k=()=>typeof navigator<"u"&&/iPad|iPhone|iPod/i.test(navigator.userAgent||""),bk=async()=>{const t=[{key:"indexedDB",value:dy},{key:"local",value:iy},{key:"session",value:Vu}];let e=null;for(const n of t)try{return await M1(Es(),n.value),{persistence:n.key,error:null}}catch(r){e=r,console.warn(`Failed to set ${n.key} persistence`,r)}return{persistence:"none",error:e}},wk=async()=>{let t=null,e=null;try{e=await dA(Es())}catch(r){t=r,console.error("Firebase redirect sign-in failed",r)}const n=await bk();return{redirectError:t,redirectResult:e,persistence:n}},vd=async()=>{try{return await rA(Es(),Rp())}catch(t){if(!_k())throw t;return console.warn("Popup sign-in failed on iOS, falling back to redirect",t),cA(Es(),Rp())}},dt=()=>(console.log("start signout"),U1(Es()).then(()=>{console.log("signout completed")})),Tk=t=>F1(Es(),t),e0=async()=>{const t=await Ds(W_());if(!t.exists())return[];const e=t.data();return Array.isArray(e.items)?e.items:[]},Ik=async(t="")=>(await e0()).map(Qc).includes(Qc(t)),Ek=async t=>yt(W_(),{items:t.map(Qc).filter(Boolean),updatedAt:Ie()},{merge:!0}),tl=async()=>{const t=await Ds(J_());if(!t.exists())return null;const e=t.data();return typeof e.nextMeetupDate=="number"?e.nextMeetupDate:null},vk=async t=>yt(J_(),{nextMeetupDate:t,updatedAt:Ie()},{merge:!0}),Ak=async t=>{const e=bd(t.id),n=await Ds(e),r={email:t.email,firstName:t.firstName,lastName:t.lastName,...t.userType?{userType:t.userType}:{},updatedAt:Ie()};return n.exists()?yt(e,r,{merge:!0}):yt(e,{...r,createdAt:Ie()})},Ck=async t=>{const e=t==null?void 0:t.uid;if(!e)return!1;const n=bd(e);if((await Ds(n)).exists())return!0;const s=(t.email||"").trim().toLowerCase();if(s&&!(await Or(Ja(K_(),Qa("email","==",s)))).empty)return!0;const i=t.displayName||"",[o="",...l]=i.trim().split(/\s+/),c=l.join(" ");return await yt(n,{email:s,firstName:o,lastName:c,userType:"unverified",createdAt:Ie(),updatedAt:Ie()}),!0},Rk=()=>{const t=new _t([]),e=zt(K_(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));r.sort((s,i)=>{var c,u,h,f,m,E,I,k,D,S;const o=(c=s==null?void 0:s.createdAt)!=null&&c.seconds?s.createdAt.seconds*1e3:((m=(f=(h=(u=s==null?void 0:s.createdAt)==null?void 0:u.toDate)==null?void 0:h.call(u))==null?void 0:f.getTime)==null?void 0:m.call(f))??0;return((E=i==null?void 0:i.createdAt)!=null&&E.seconds?i.createdAt.seconds*1e3:((S=(D=(k=(I=i==null?void 0:i.createdAt)==null?void 0:I.toDate)==null?void 0:k.call(I))==null?void 0:D.getTime)==null?void 0:S.call(D))??0)-o}),t.next(r)},n=>{console.error("Failed to listen to users",n)});return t.unsubscribe=e,t},kk=async t=>t?(await Fr(bd(t)),!0):!1,Ms=()=>{const t=new _t([]),e=zt(Q_(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(o0(r))},n=>{console.error("Failed to listen to games",n)});return t.unsubscribe=e,t},t0=()=>{const t=new _t([]),e=zt(wd(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(a0(r))},n=>{console.error("Failed to listen to manufacturers",n)});return t.unsubscribe=e,t},Sk=async()=>{const e=(await Or(wd())).docs.map(n=>({id:n.id,...n.data()}));return a0(e)},xk=async t=>{const e=Yk(t);return t.id?yt(Y_(t.id),{...e,updatedAt:Ie()},{merge:!0}):Ya(wd(),{...e,createdAt:Ie(),updatedAt:Ie()})},kp=async t=>t?(await Fr(Y_(t)),!0):!1,nl=()=>{const t=new _t,e=zt(Td(),n=>t.next(i0(n.docs.map(r=>({id:r.id,...r.data()})))),n=>console.error("Failed to listen to game tiers",n));return t.unsubscribe=e,t},Pk=async()=>{const t=await Or(Td());return i0(t.docs.map(e=>({id:e.id,...e.data()})))},Vk=async t=>{const e={shortName:(t.shortName||"").trim().toUpperCase(),longName:(t.longName||"").trim(),order:typeof t.order=="number"?t.order:0};return t.id?yt(Id(t.id),{...e,updatedAt:Ie()},{merge:!0}):Ya(Td(),{...e,createdAt:Ie(),updatedAt:Ie()})},Nk=async t=>{const e=gk(ze());return t.forEach((n,r)=>{e.update(Id(n),{order:r,updatedAt:Ie()})}),await e.commit(),!0},Sp=async t=>t?(await Fr(Id(t)),!0):!1,Ad=async()=>{const e=(await Or(Q_())).docs.map(n=>({id:n.id,...n.data()}));return o0(e)},n0=async t=>{const e=Qk(t);if(t.id)return yt(ha(t.id),{...e,updatedAt:Ie()},{merge:!0});const n=await eS(e.title);return await yt(ha(n),{...e,createdAt:Ie(),updatedAt:Ie()}),{id:n}},xp=async t=>t?(await Fr(ha(t)),!0):!1,Dk=()=>{const t=new _t([]),e=zt(Ed(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(kd(r))},n=>{console.error("Failed to listen to game ratings",n)});return t.unsubscribe=e,t},Mk=()=>{const t=new _t([]),e=zt(Ja(Ed(),Qa("isVisible","==",!0)),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(kd(r))},n=>{console.error("Failed to listen to visible game ratings",n)});return t.unsubscribe=e,t},Lk=async()=>{const e=(await Or(Ed())).docs.map(n=>({id:n.id,...n.data()}));return kd(e)},Ok=async t=>{const e=Xk(t),n=t.id||t.gameId;if(!n)throw new Error("Game rating requires a gameId.");const r=await Ds(Kc(n));return yt(Kc(n),{...e,updatedAt:Ie(),...r.exists()?{}:{createdAt:Ie()}},{merge:!0})},Fk=async t=>t?(await Fr(Kc(t)),!0):!1,Uk=()=>{const t=new _t([]),e=zt(Za(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Cd(r))},n=>{console.error("Failed to listen to current games",n)});return t.unsubscribe=e,t},$k=()=>{const t=new _t([]),e=zt(Ja(Za(),Qa("isVisible","==",!0)),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Cd(r))},n=>{console.error("Failed to listen to visible current games",n)});return t.unsubscribe=e,t},Bk=async()=>{const e=(await Or(Za())).docs.map(n=>({id:n.id,...n.data()}));return Cd(e)},jk=async t=>{const e=Jk(t);return t.id?yt(X_(t.id),{...e,updatedAt:Ie()},{merge:!0}):Ya(Za(),{...e,createdAt:Ie(),updatedAt:Ie()})},zk=async t=>t?(await Fr(X_(t)),!0):!1,Hk=()=>{const t=new _t([]),e=zt(el(),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Rd(r))},n=>{console.error("Failed to listen to past owned games",n)});return t.unsubscribe=e,t},qk=()=>{const t=new _t([]),e=zt(Ja(el(),Qa("isVisible","==",!0)),n=>{const r=n.docs.map(s=>({id:s.id,...s.data()}));t.next(Rd(r))},n=>{console.error("Failed to listen to visible past owned games",n)});return t.unsubscribe=e,t},r0=async()=>{const e=(await Or(el())).docs.map(n=>({id:n.id,...n.data()}));return Rd(e)},s0=async t=>{const e=Kk(t);return t.id?yt(Z_(t.id),{...e,updatedAt:Ie()},{merge:!0}):Ya(el(),{...e,createdAt:Ie(),updatedAt:Ie()})},Gk=async t=>t?(await Fr(Z_(t)),!0):!1,Wk=async(t,e=[])=>{const n=await r0(),r=new Set(n.flatMap(l=>Pp(l))),s=tS(e);let i=0,o=0;for(const l of t){const c=(l.title||"").trim();if(!c){o+=1;continue}const u=Pp(l);if(u.some(m=>r.has(m))){o+=1;continue}const f=await nS({title:c,manufacturer:l.manufacturer||"",yearReleased:l.yearReleased??null,imageUrl:l.imageUrl||"",notes:l.pinsideUrl?`Imported from ${l.pinsideUrl}`:""},s);await s0({gameId:f.id,title:"",imageUrl:"",manufacturer:"",yearReleased:null,dateAddedToCollection:l.dateAddedToCollection||"",dateRemovedFromCollection:l.dateRemovedFromCollection||"",notes:"",isVisible:!0,pinsideUrl:l.pinsideUrl||"",pinsideId:l.pinsideId||"",sourceTitle:c,source:"pinside"}),u.forEach(m=>r.add(m)),i+=1}return{added:i,skipped:o,total:t.length}},Jk=t=>{const e={gameId:(t.gameId||"").trim(),tierId:(t.tierId||"").trim(),dateAddedToCollection:t.dateAddedToCollection,notes:(t.notes||"").trim(),isVisible:t.isVisible!==!1};return t.title&&(e.title=t.title.trim()),t.imageUrl&&(e.imageUrl=t.imageUrl.trim()),t.manufacturer&&(e.manufacturer=t.manufacturer.trim()),typeof t.yearReleased=="number"&&!Number.isNaN(t.yearReleased)&&(e.yearReleased=t.yearReleased),e},Kk=t=>{const e={gameId:(t.gameId||"").trim(),title:(t.title||"").trim(),dateAddedToCollection:(t.dateAddedToCollection||"").trim(),dateRemovedFromCollection:(t.dateRemovedFromCollection||"").trim(),notes:(t.notes||"").trim(),isVisible:t.isVisible!==!1,pinsideUrl:(t.pinsideUrl||"").trim(),pinsideId:(t.pinsideId||"").trim(),sourceTitle:(t.sourceTitle||"").trim(),source:(t.source||"").trim()};return t.imageUrl&&(e.imageUrl=t.imageUrl.trim()),t.manufacturer&&(e.manufacturer=t.manufacturer.trim()),typeof t.yearReleased=="number"&&!Number.isNaN(t.yearReleased)?e.yearReleased=t.yearReleased:e.yearReleased=null,e},Qk=t=>{const e=Array.isArray(t.dataLinks)?t.dataLinks.map(r=>({title:((r==null?void 0:r.title)||"").trim(),url:((r==null?void 0:r.url)||"").trim()})).filter(r=>r.title||r.url):[],n={title:(t.title||"").trim(),manufacturerId:(t.manufacturerId||"").trim(),imageUrl:(t.imageUrl||"").trim(),manufacturer:(t.manufacturer||"").trim(),notes:(t.notes||"").trim(),dataLinks:e,tierIds:Array.isArray(t.tierIds)?[...new Set(t.tierIds.map(r=>String(r||"").trim()).filter(Boolean))]:[]};return typeof t.yearReleased=="number"&&!Number.isNaN(t.yearReleased)?n.yearReleased=t.yearReleased:n.yearReleased=null,n},Yk=t=>({name:(t.name||"").trim(),logoUrl:(t.logoUrl||"").trim(),opinions:(t.opinions||"").trim()}),i0=t=>[...t].sort((e,n)=>{const r=typeof e.order=="number",s=typeof n.order=="number";return r&&s&&e.order!==n.order?e.order-n.order:r!==s?r?-1:1:String(e.shortName||"").localeCompare(String(n.shortName||""),void 0,{sensitivity:"base"})}),Xk=t=>{const e=typeof t.rating=="number"&&!Number.isNaN(t.rating)?Math.max(0,Math.min(10,t.rating)):null,n=Array.isArray(t.videos)?t.videos.map(r=>({url:((r==null?void 0:r.url)||"").trim(),description:((r==null?void 0:r.description)||"").trim()})).filter(r=>r.url||r.description):[];return{gameId:(t.gameId||"").trim(),rating:e,review:(t.review||"").trim(),videos:n,isVisible:t.isVisible!==!1}},fa=t=>{if(!t)return 0;if(typeof t.toDate=="function")return t.toDate().getTime();if(typeof t=="number")return t;if(t.seconds)return t.seconds*1e3;const e=new Date(t).getTime();return Number.isNaN(e)?0:e},Cd=t=>[...t].sort((e,n)=>fa(n.dateAddedToCollection)-fa(e.dateAddedToCollection)),Rd=t=>[...t].sort((e,n)=>fa(n.dateRemovedFromCollection||n.dateAddedToCollection)-fa(e.dateRemovedFromCollection||e.dateAddedToCollection)||String(e.title||"").localeCompare(String(n.title||""),void 0,{sensitivity:"base"})),o0=t=>[...t].sort((e,n)=>String(e.title||"").localeCompare(String(n.title||""),void 0,{sensitivity:"base"})),a0=t=>[...t].sort((e,n)=>String(e.name||"").localeCompare(String(n.name||""),void 0,{sensitivity:"base"})),kd=t=>[...t].sort((e,n)=>Number(n.rating||0)-Number(e.rating||0)||String(e.gameId||"").localeCompare(String(n.gameId||""),void 0,{sensitivity:"base"})),Sd=t=>String(t||"").toLowerCase().replace(/\([^)]*\)/g,"").replace(/[^a-z0-9]+/g," ").trim(),Zk=t=>String(t||"").trim().toLowerCase().replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"game",eS=async t=>{const e=Zk(t);let n=e,r=2;for(;(await Ds(ha(n))).exists();)n=`${e}-${r}`,r+=1;return n},tS=t=>new Map(t.map(e=>[Sd(e.title),e]).filter(([e])=>e)),nS=async(t,e)=>{const n=Sd(t.title),r=e.get(n);if(r)return r;const i={id:(await n0({title:t.title,manufacturer:t.manufacturer||"",yearReleased:t.yearReleased??null,imageUrl:t.imageUrl||"",notes:t.notes||""})).id,title:t.title,manufacturer:t.manufacturer||"",yearReleased:t.yearReleased??null,imageUrl:t.imageUrl||"",notes:t.notes||""};return e.set(n,i),i},Pp=t=>{const e=Sd(t.title||t.sourceTitle),n=!!(t.pinsideUrl||t.pinsideId),r=!!(t.dateAddedToCollection||t.dateRemovedFromCollection),s=[e,String(t.dateAddedToCollection||"").trim(),String(t.dateRemovedFromCollection||"").trim()].filter(Boolean).join("|");return[t.pinsideUrl?`url:${String(t.pinsideUrl).trim().toLowerCase()}`:"",t.pinsideId?`pinside:${String(t.pinsideId).trim().toLowerCase()}`:"",r&&s?`history:${s}`:"",!n&&!r&&e?`title:${e}`:""].filter(Boolean)},xd=({onUser:t,toast:e})=>{if(typeof t!="function")throw new Error("startAuthFlow requires an onUser callback.");wk().then(({redirectError:n,redirectResult:r,persistence:s})=>{var i,o;n&&((i=e==null?void 0:e.error)==null||i.call(e,"Sign-in failed after redirect. Try again.")),s!=null&&s.error&&((o=e==null?void 0:e.error)==null||o.call(e,"Safari blocked login storage. Check cookie settings.")),r!=null&&r.user&&t(r.user,"redirectResult")}).catch(n=>{var r;console.error("Failed to prepare auth",n),(r=e==null?void 0:e.error)==null||r.call(e,"Sign-in setup failed. Try again.")}),Tk(n=>{t(n,"onAuthChanged")})},rS=async({user:t,mountSso:e,toast:n,onDenied:r,onPermissionsError:s}={})=>{var o,l;let i=!1;try{i=await Ik((t==null?void 0:t.email)||"")}catch(c){return console.error("Failed to load admin list",c),s==null||s(c),(o=n==null?void 0:n.error)==null||o.call(n,"Unable to verify access. Check Firestore rules."),e==null||e("denied",(t==null?void 0:t.email)||"","auth:permissions"),!1}return i?!0:(r==null||r(),(l=n==null?void 0:n.error)==null||l.call(n,`Signed in as ${(t==null?void 0:t.email)||"unknown"} but not authorized.`),e==null||e("denied",(t==null?void 0:t.email)||"","auth:denied"),!1)},Pd=async({user:t,mountSso:e,toast:n,setCurrentUser:r,onSignedOut:s,onDenied:i,onAuthorized:o,reason:l=""}={})=>{if(!t)return r==null||r(null),s==null||s(),e==null||e("login","","auth:logged-out"),!1;try{await Ck(t)}catch(u){console.warn("Failed to ensure user profile",u)}return await rS({user:t,mountSso:e,toast:n,onDenied:i,onPermissionsError:i})?(r==null||r(t),o==null||o(t,l),!0):!1},rl=F(({status:t,userEmail:e,adminEmail:n,onSignIn:r,onSignOut:s})=>(rl.inputs(i=>{[{status:t,userEmail:e,adminEmail:n,onSignIn:r,onSignOut:s}]=i,r=Q(r),s=Q(s)}),[()=>t==="loading"?Pl.class`panel auth-panel`(se("Checking login...")):t==="denied"?Pl.class`panel auth-panel`(Je("Access denied"),se.class`auth-warning`(()=>e||"This account"," is not authorized."),se("Please be patient as we review your account to become verified status."),_.class`auth-actions`(q.type`button`.class`add-button`.onClick(s)("Sign out"))):Pl.class`panel auth-panel`(Je("Sign in"),se("Use Google to access admin tools."),_.class`auth-actions`(q.type`button`.class`add-button`.onClick(r)("Sign in with Google")))])),sS=F(()=>{let t=[];const e=me(()=>{});F.promise=e0().then(o=>{t=Array.isArray(o)?o:[],e()}).catch(o=>{console.error("Failed to load admin list",o)});const n=(o,l)=>{t=t.map((c,u)=>u===o?l:c),e()},r=()=>{t=[...t,""],e()},s=o=>{t=t.filter((l,c)=>c!==o),e()},i=()=>Ek(t).then(()=>{alert("saved")}).catch(o=>{console.error("Failed to save admin list",o)});return Aa.style`border:0;padding:0;margin:0;`(_.style`display:flex;flex-direction:column;gap:0.6em;`(o=>(t.length?t:[""]).map((l,c)=>_.style`display:flex;gap:0.6em;align-items:center;`(le.type`text`.value(u=>l).onInput(u=>n(c,u.target.value)).style`width:100%`,q.onClick(()=>s(c))("🗑️ remove")))),_.style`display:flex;gap:0.6em;align-items:center;margin-top:0.8em;flex-wrap:wrap;`(q.onClick(r)("add"),q.onClick(i)("save to firestore")))});function l0({startDateTime:t,message:e,subject:n}){t=new Date(t);const{year:r,month:s}=Vd(t),i=("0"+(t.getDate()+1)).slice(-2),o=pa(t),l=new Date(new Date(t).setHours(t.getHours()+2)),c=pa(l),u=encodeURIComponent(e),h=encodeURIComponent(n);return`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${r}${s}${i}${o}%2F${r}${s}${i}${c}&details=${u}&location=&text=${h}`}function c0({startDateTime:t,message:e,subject:n}){t=new Date(t);const{year:r,month:s,day:i,hours:o}=Vd(t),c=new Date(new Date(t).setHours(t.getHours()+2)).getHours(),u=encodeURIComponent(e.replace(/\n/g,"<br>")),h=encodeURIComponent(n);return`https://outlook.live.com/calendar/0/action/compose?allday=false&body=${u}&enddt=${r}-${s}-${i}T${c}%3A00%3A00&location=&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=${r}-${s}-${i}T${o}%3A00%3A00&subject=${h}`}function u0({startDateTime:t,message:e,subject:n}){t=new Date(t);const{year:r,month:s}=Vd(t),i=("0"+(t.getDate()+1)).slice(-2),o=pa(t),l=new Date(new Date(t).setHours(t.getHours()+2)),c=pa(l);return`BEGIN:VCALENDAR
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
END:VCALENDAR`}function Vd(t){t=new Date(t);const e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),r=("0"+t.getDate()).slice(-2),s=t.getHours();return{year:e,month:n,day:r,hours:s}}function pa(t){const e=String(t.getUTCHours()).padStart(2,"0"),n=String(t.getUTCMinutes()).padStart(2,"0"),r=String(t.getUTCSeconds()).padStart(2,"0");return`T${e}${n}${r}Z`}const d0=F(t=>{d0.updates(n=>[t]=n);const e=new Date(t);return _.style`text-align:center;`(_(Z("🗓️ ",e.toLocaleString("default",{weekday:"long"}),", ",e.toLocaleString("default",{month:"long"})," ",e.getDate(),h0(e))),n=>Ig({date:t}),iS(e))});function iS(t){return _.style`font-size:.65em;opacity:.7`(oS(t))}function Kl(t,e){const n={hour:"numeric",minute:"numeric",hour12:!0,timeZone:e,timeZoneName:"short"};return new Intl.DateTimeFormat("en-US",n).format(t)}function oS(t){const e=Kl(t,"America/New_York"),n=Kl(t,"America/Chicago"),r=Kl(t,"America/Los_Angeles");return`${e} / ${n} / ${r}`}const We={subject:"Cary Hardy Patreon meetup",message:`
    Link to virtual meeting is posted to Patreon on a day of meeting
  
    https://www.patreon.com/caryhardy
  `.trim().replace(/    /g,"")},sl=F(({date:t,showLearnMore:e=!0})=>{t=new Date(t),sl.updates(u=>{[{date:t,showLearnMore:e}]=u});let n=!1;const r=l0({startDateTime:t,message:We.message,subject:We.subject}),s=c0({startDateTime:t,message:We.message,subject:We.subject}),i=[{type:"google",url:r},{type:"outlook",url:s}],o=u0({startDateTime:t,message:We.message,subject:We.subject});var l=new Blob([o],{type:"text/calendar"});const c=window.URL.createObjectURL(l);return ve(_.style`padding:.5em;`("Countdown until the next, Patreon LE only, group meetup"),()=>d0(t),_.style`white-space:nowrap;font-size:.7em;opacity:.8`("save meetup to your calendar using links below 👇"),_.style`background-color:black;padding:0 0 .2em 0;`(_.style`white-space:nowrap;font-size:.5em;opacity:.6`("choose your calendar type below"),_.style`display:flex;gap:1em;justify-content: center;`(i.map(u=>Vp(u.type,{href:u.url},u.type==="google"?X.src`assets/media/gmail-logo-2.png`.width`48`.height`48`.border`0`:X.src`assets/media/outlook-icon.png`.width`48`.height`48`.border`0`).key(u)),Vp("ical",{href:c,download:"cary-hardy-meetup.ics"},ko.viewBox`0 0 170 170`.fill`currentColor`.width`48`.height`48`(bg("Apple Logo"),X.src`assets/media/ical.png`.width`48`.height`48`.border`0`))),he,_(B.style`font-size:0.7em;`(aE(j.onClick(()=>n=!n).style`color:white;`("⬜️ qr invite codes here"))))),se.style`font-size:0.8em;opacity:0.7;line-height:0.9em;`(B("🔗 A link to virtual meetup is posted on day of meetup,",he,"in the LE ONLY 💬 chat on Patreon.")),()=>e&&_.style`padding:.8em;font-size: .7em;`(j.class`no-a-style`.href`meetup.html`(q.type`button`("learn more"))))});function h0(t){var e=t.getDate(),n="th";return e===1||e===21||e===31?"st":e===2||e===22?"nd":e===3||e===23?"rd":n}const Vp=(t,e,n)=>{const r=j.class`small-icon-link`.href`${e.href}`.attr("target","_blank");return(e.download?r.attr("download",e.download):r)(_.class`small-icon`(n),B.style`font-size:0.5em;`(t))};function Ql(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),e.setSelectionRange(0,99999),document.execCommand("copy"),document.body.removeChild(e)}const f0=F(({nextMeetupDate:t,onQrUrlChange:e})=>{f0.inputs(i=>{[{nextMeetupDate:t,onQrUrlChange:e}]=i,e=Q(e)});const n=l0({startDateTime:t,message:We.message,subject:We.subject}),r=c0({startDateTime:t,message:We.message,subject:We.subject}),s=u0({startDateTime:t,message:We.message,subject:We.subject});return Aa.style`border:0;padding:0;margin:0;`(_(_.style`display:flex;flex-wrap:wrap;gap:1em`(_(re("Message"),_(le.type`text`.value(i=>We.message).onChange(i=>We.message=i.target.value).style`width:100%`)),_(re("Subject"),_(le.type`text`.value(i=>We.subject).onChange(i=>We.subject=i.target.value).style`width:100%`))),he,he,_.style`display:flex;flex-wrap:wrap;gap:1em;flex-direction:column;`(_.style`display:flex;flex-grow:1`(ko.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(cE.attr("width","22").attr("height","22").attr("x","13").attr("y","13").attr("fill","#fff"),po.attr("fill","#1e88e5").attr("points","25.68,20.92 26.688,22.36 28.272,21.208 28.272,29.56 30,29.56 30,18.616 28.56,18.616"),Ht.attr("fill","#1e88e5").attr("d","M22.943,23.745c0.625-0.574,1.013-1.37,1.013-2.249c0-1.747-1.533-3.168-3.417-3.168 c-1.602,0-2.972,1.009-3.33,2.453l1.657,0.421c0.165-0.664,0.868-1.146,1.673-1.146c0.942,0,1.709,0.646,1.709,1.44 c0,0.794-0.767,1.44-1.709,1.44h-0.997v1.728h0.997c1.081,0,1.993,0.751,1.993,1.64c0,0.904-0.866,1.64-1.931,1.64 c-0.962,0-1.784-0.61-1.914-1.418L17,26.802c0.262,1.636,1.81,2.87,3.6,2.87c2.007,0,3.64-1.511,3.64-3.368 C24.24,25.281,23.736,24.363,22.943,23.745z"),po.attr("fill","#fbc02d").attr("points","34,42 14,42 13,38 14,34 34,34 35,38"),po.attr("fill","#4caf50").attr("points","38,35 42,34 42,14 38,13 34,14 34,34"),Ht.attr("fill","#1e88e5").attr("d","M34,14l1-4l-1-4H9C7.343,6,6,7.343,6,9v25l4,1l4-1V14H34z"),po.attr("fill","#e53935").attr("points","34,34 34,42 42,34"),Ht.attr("fill","#1565c0").attr("d","M39,6h-5v8h8V9C42,7.343,40.657,6,39,6z"),Ht.attr("fill","#1565c0").attr("d","M9,42h5v-8H6v5C6,40.657,7.343,42,9,42z")),le.type`text`.style`width:100%`.value(n),q.onClick(()=>Ql(n))("copy"),q.onClick(()=>e(n))("qr")),_.style`display:flex;flex:1`(ko.attr("xmlns","http://www.w3.org/2000/svg").attr("viewBox","0 0 48 48").attr("width","48").attr("height","48")(Ht.attr("fill","#03A9F4").attr("d","M21,31c0,1.104,0.896,2,2,2h17c1.104,0,2-0.896,2-2V16c0-1.104-0.896-2-2-2H23c-1.104,0-2,0.896-2,2V31z"),Ht.attr("fill","#B3E5FC").attr("d","M42,16.975V16c0-0.428-0.137-0.823-0.367-1.148l-11.264,6.932l-7.542-4.656L22.125,19l8.459,5L42,16.975z"),Ht.attr("fill","#0277BD").attr("d","M27 41.46L6 37.46 6 9.46 27 5.46z"),Ht.attr("fill","#FFF").attr("d","M21.216,18.311c-1.098-1.275-2.546-1.913-4.328-1.913c-1.892,0-3.408,0.669-4.554,2.003c-1.144,1.337-1.719,3.088-1.719,5.246c0,2.045,0.564,3.714,1.69,4.986c1.126,1.273,2.592,1.91,4.378,1.91c1.84,0,3.331-0.652,4.474-1.975c1.143-1.313,1.712-3.043,1.712-5.199C22.869,21.281,22.318,19.595,21.216,18.311z M19.049,26.735c-0.568,0.769-1.339,1.152-2.313,1.152c-0.939,0-1.699-0.394-2.285-1.187c-0.581-0.785-0.87-1.861-0.87-3.211c0-1.336,0.289-2.414,0.87-3.225c0.586-0.81,1.368-1.211,2.355-1.211c0.962,0,1.718,0.393,2.267,1.178c0.555,0.795,0.833,1.895,0.833,3.31C19.907,24.906,19.618,25.968,19.049,26.735z")),le.type`text`.style`width:100%`.value(r),q.onClick(()=>Ql(r))("copy"),q.onClick(()=>e(r))("qr")),_.style`display:flex;flex:1`(ko.attr("viewBox","0 0 170 170").attr("fill","currentColor").attr("width","48").attr("height","48")(bg("Apple Logo"),Ht.attr("d","M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.083.17 2.166.17 3.24z")),le.type`text`.style`width:100%`.value(s),q.onClick(()=>Ql(s))("copy")))))});let Np=!1;const p0=F(t=>{let e=Date.now();return p0.inputs(([n])=>{Q(n)}),Np||(Np=!0,F.promise=tl().then(n=>{typeof n=="number"&&(e=n)}).catch(n=>{console.error("Failed to load next meetup date",n)})),_.style`max-width:1200px;margin:0 auto;padding:0 1em;`(Be(X.src`assets/media/icon.png`.style`width:40px;margin-right:10px;`,"Hardy Tools"),_.style`display:flex;flex-wrap:wrap;gap:1em;text-align:left;`(xt({href:"/admin/qr-maker.html",title:"🔗 QR Maker",description:"Create a QR code from any link and preview the encoded URL before using it."}),n=>Yc({labelText:"Calendar Links",flex:"2",contentNode:f0({nextMeetupDate:e,onQrUrlChange:r=>{window.location.href=`/admin/qr-maker.html?url=${encodeURIComponent(r)}`}})}),xt({href:"/admin/meeting-tools.html",title:"📅 Meeting Tools",description:"Update the next meetup date, save it to Firestore, and preview the public countdown."}),n=>Yc({labelText:"admin users",flex:"1",contentNode:sS}),xt({href:"/admin/user.html",title:"👥 Open Users Admin",description:"Manage authorized admin users and account access."}),xt({href:"/admin/current-games.html",title:"⚪️ Current Game Lineup",description:"Choose which games appear in the public current lineup."}),xt({href:"/admin/past-owned-games.html",title:"📜 Past Games Owned",description:"Track previously owned games and sync new items from Pinside history."}),xt({href:"/admin/games.html",title:"🕹️ Games Database",description:"Maintain canonical game details used by lineup and ratings."}),xt({href:"/admin/manufacturers.html",title:"🏭 Manufacturers Database",description:"Edit manufacturer records and logos for the game database."}),xt({href:"/admin/game-tiers.html",title:"🏷️ Game Tiers Database",description:"Manage game edition abbreviations and full names."}),xt({href:"/admin/game-ratings.html",title:"⭐ Game Ratings",description:"Create and update public ratings, reviews, and related videos."})),he)}),xt=F(({href:t,title:e,description:n})=>(xt.inputs(r=>{[{href:t,title:e,description:n}]=r}),_.style`flex:1;min-width:min(320px, 100%);background:#1f1f1f;border:1px solid rgba(255,185,62,0.55);border-radius:0.8em;overflow:hidden;`(j.href`${t}`.style`display:block;padding:0.9em 1em;color:#fff;text-decoration:none;`(_.style`font-weight:800;text-align:center;`(e),se.style`margin:0.45em 0 0;color:rgba(255,255,255,0.72);font-size:0.82em;line-height:1.35;text-align:center;`(n))))),Yc=F(({labelText:t,flex:e,contentNode:n})=>{Yc.inputs(i=>[{labelText:t,flex:e,contentNode:n}]=i);let r=!1;const s=()=>{r=!r};return _.style`flex:${e};min-width:min(500px, 100%);background:#1f1f1f;border:1px solid rgba(255,255,255,0.3);border-radius:0.8em;overflow:hidden;`(_.onClick(s).style`cursor:pointer;padding:0.75em 1em;color:#fff;user-select:none;font-weight:600;display:flex;gap:0.6em;align-items:center;`(_.style`width:1em;text-align:center;`(()=>r?"▼":"▶"),_(t)),()=>r?_.style`padding:0.8em 1em;border-top:1px solid rgba(255,255,255,0.2);`(i=>n):"")}),Rt=F(t=>{Rt.inputs(([i])=>{t=Q(i)});let e=!1;const n=me(()=>{}),r=()=>{e=!1,n()},s=()=>{e=!e,n()};return ve(_.class`admin-nav-layout`(_.class`admin-nav-left`(q.type`button`.class`top-nav-pill`.attr("aria-expanded",i=>e?"true":"false").onClick(s)("☰ menu")),_(),_.class`admin-nav-right`(j.href`/index.html`.class`top-nav-pill`("🏠 home"),q.type`button`.class`top-nav-pill`.onClick(t)("🚪 logout"))),i=>e?ve(q.type`button`.class`admin-menu-backdrop`.onClick(r).attr("aria-label","Close menu")(""),_.class`admin-menu-panel`.attr("role","menu")(j.href`/admin.html`.class`top-nav-pill`.attr("role","menuitem")("🏠 admin home"),j.href`/admin/qr-maker.html`.class`top-nav-pill`.attr("role","menuitem")("🔗 qr maker"),j.href`/admin/meeting-tools.html`.class`top-nav-pill`.attr("role","menuitem")("📅 meeting tools"),j.href`/admin/current-games.html`.class`top-nav-pill`.attr("role","menuitem")("⚪️ current lineup"),j.href`/admin/past-owned-games.html`.class`top-nav-pill`.attr("role","menuitem")("📜 past games"),j.href`/admin/games.html`.class`top-nav-pill`.attr("role","menuitem")("🕹️ games"),j.href`/admin/manufacturers.html`.class`top-nav-pill`.attr("role","menuitem")("🏭 manufacturers"),j.href`/admin/game-tiers.html`.class`top-nav-pill`.attr("role","menuitem")("🏷️ game tiers"),j.href`/admin/game-ratings.html`.class`top-nav-pill`.attr("role","menuitem")("⭐ ratings"),j.href`/admin/user.html`.class`top-nav-pill`.attr("role","menuitem")("👥 users"),j.href`https://github.com/AckerApple/cary-hardy`.class`top-nav-pill`.attr("role","menuitem").attr("target","_blank").attr("rel","noopener noreferrer")("🔗 code base"))):"")});let Dp=!1;const aS=F(()=>Dp?"":(Dp=!0,Ft(`
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
  `))),m0=F(({className:t="top-nav",content:e})=>(m0.inputs(n=>{[{className:t,content:e}]=n}),_.class`${t}`(_.class`top-nav-row`(typeof e=="function"?e():e)))),He=F(t=>(He.inputs(e=>{[t]=e}),ve(aS(),_.class`top-nav-shell top-nav-fixed`(m0({className:"top-nav top-nav-inner",content:t}))))),g0=F(({nextMeetupDate:t,date:e,time:n,onDate:r,onSave:s})=>(g0.inputs(i=>{[{nextMeetupDate:t,date:e,time:n,onDate:r,onSave:s}]=i,r=Q(r),s=Q(s)}),Aa.style`border:0;padding:0;margin:0;`(i=>y0({date:e,time:n,onDate:r}),_.style`margin-top:0.6em;`(q.onClick(s)("save to firestore")),wg,_.style`text-align:center;`(i=>sl({date:t}))))),y0=F(({date:t,time:e,onDate:n})=>{let r=new Date(t+" "+e).getTime();y0.inputs(o=>{[{date:t,time:e,onDate:n}]=o,n=Q(n),r=new Date(t+" "+e).getTime()});const s=o=>{const l=o.target.value;n(new Date(l+" "+e).getTime())},i=o=>{const l=o.target.value;n(new Date(t+" "+l).getTime())};return _.style`display:flex;flex-wrap:wrap;gap:1em`(_(re("Date"),_(le.type`date`.value(o=>t).onChange(s).style`width:100%`)),_(re.attr("for","time")("Time"),_(le.type`time`.value(o=>e).onChange(i).style`width:100%`)),_(re.attr("for","time")("UTC"),_(o=>r)))});function Mp(t){const e=new Date(t),n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0"),i=String(e.getHours()).padStart(2,"0"),o=String(e.getMinutes()).padStart(2,"0");return{date:`${n}-${r}-${s}`,time:`${i}:${o}`}}let Lp=!1;const ix=F(()=>{let t="loading",e="",n=null;const r=me((l,c="",u="")=>{t=l,e=c}),s=me(l=>{n=l,console.log("currentUser",n),l||(t="login")}),i=()=>{r("login","","auth:logged-out"),t="login"},o=me((l,c="")=>{t="authorized",e=(l==null?void 0:l.email)||""});return Lp||(Lp=!0,xd({onUser:(l,c)=>{Pd({user:l,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(n==null?void 0:n.email)||"","auth:denied")},onAuthorized:o,reason:c})},toast:{error:l=>console.warn(l)}})),ve(Ft(`
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
    `),l=>_0(t,e,i))}),_0=F((t,e,n)=>{_0.inputs(s=>{[t,e,n]=s,n=Q(n)});const r=()=>dt().then(n).catch(s=>{console.error("Failed to sign out",s)});return[()=>t==="authorized"?ve(He(()=>Rt(r)),p0(n)):_(rl({status:t,userEmail:e,adminEmail:"",onSignIn:()=>vd().catch(s=>{console.error("Failed to sign in",s)}),onSignOut:()=>(t="login",dt().catch(s=>{console.error("Failed to sign out",s)}))}))]}),b0=F(({user:t,onEdit:e,formatCreatedAt:n})=>(b0.inputs(r=>{[{user:t,onEdit:e,formatCreatedAt:n}]=r}),_.style`display:grid;grid-template-columns:1.1fr 1.4fr 0.7fr 0.7fr auto;gap:0.6em;align-items:center;padding:0.4em 0;`(_(r=>`${t.firstName||""} ${t.lastName||""}`.trim()||"—"),_.style`opacity:0.85;`(r=>t.email||"—"),B.style`opacity:0.85;color:${t.userType==="verified"?"#6fe3a1":"#f26d6d"};`(r=>t.userType||"unverified"),B.style`opacity:0.7;`(r=>n(t.createdAt)),q.type`button`.onClick(e).style`border:0;background:transparent;color:#fff;cursor:pointer;font-size:1.1em;`.attr("title","Edit user")("✏️")))),w0=F(({userId:t,createdAtLabel:e,editUser:n,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:l,onCancel:c})=>{w0.inputs(h=>{[{userId:t,createdAtLabel:e,editUser:n,isSaving:r,isDeleting:s,onChange:i,onSave:o,onDelete:l,onCancel:c}]=h});const u=h=>{i({...n,...h})};return _.style`margin-top:1em;padding-top:1em;border-top:1px solid rgba(255,255,255,0.15);display:grid;gap:0.6em;`(_.style`font-weight:600;`("Edit User"),B.style`opacity:0.6;`("User ID: ",h=>t),B.style`opacity:0.6;`("Created at: ",h=>e),_.style`display:grid;grid-template-columns:120px 1fr;gap:0.6em;align-items:center;`(B.style`opacity:0.7;`("Email"),le.type`email`.value(h=>(n==null?void 0:n.email)||"").onInput(h=>{var f;u({email:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),B.style`opacity:0.7;`("First name"),le.type`text`.value(h=>(n==null?void 0:n.firstName)||"").onInput(h=>{var f;u({firstName:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),B.style`opacity:0.7;`("Last name"),le.type`text`.value(h=>(n==null?void 0:n.lastName)||"").onInput(h=>{var f;u({lastName:((f=h==null?void 0:h.target)==null?void 0:f.value)||""})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(),B.style`opacity:0.7;`("Status"),Ai.value(h=>(n==null?void 0:n.userType)==="verified"?"verified":"unverified").onChange(h=>{var f;u({userType:((f=h==null?void 0:h.target)==null?void 0:f.value)==="verified"?"verified":"unverified"})}).style`padding:0.5em;border-radius:0.5em;border:1px solid rgba(255,255,255,0.2);background:#111;color:#fff;`(h=>Vt.value`unverified`.selected(f=>n.userType==="unverified")("unverified"),h=>Vt.value`verified`.selected(f=>n.userType==="verified")("verified"))),_.style`display:flex;gap:0.6em;`(q.type`button`.onClick(o).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#1b1b1b;color:#fff;cursor:pointer;`(h=>r?"Saving...":"Save to Firestore"),q.type`button`.onClick(l).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:#4b1111;color:#fff;cursor:pointer;`(h=>s?"🗑️ Deleting...":"🗑️ Delete"),q.type`button`.onClick(c).style`padding:0.5em 1em;border-radius:999px;border:1px solid rgba(255,255,255,0.3);background:transparent;color:#fff;cursor:pointer;`("Cancel")))});let Op=!1,Yl=!1,ni=new _t(null),gn=null;const ox=F(()=>{let t="loading",e="",n=null;const r=me((l,c="",u="")=>{t=l,e=c}),s=me(l=>{n=l,l||(t="login")}),i=()=>{r("login","","auth:logged-out"),t="login"},o=me((l,c="")=>{t="authorized",e=(l==null?void 0:l.email)||""});return Op||(Op=!0,xd({onUser:(l,c)=>{Pd({user:l,mountSso:r,setCurrentUser:s,onSignedOut:i,onDenied:()=>{r("denied",(n==null?void 0:n.email)||"","auth:denied")},onAuthorized:o,reason:c})},toast:{error:l=>console.warn(l)}})),ve(Ft(`
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
    `),l=>T0(t,e,i))}),T0=F((t,e,n)=>(T0.inputs(r=>{[t,e,n]=r,n=Q(n)}),[()=>t==="authorized"?I0(n):_(rl({status:t,userEmail:e,adminEmail:"",onSignIn:()=>vd().catch(r=>{console.error("Failed to sign in",r)}),onSignOut:()=>(t="login",dt().catch(r=>{console.error("Failed to sign out",r)}))}))])),I0=F(t=>{I0.inputs(([S])=>{t=Q(S)});const e=()=>dt().then(t).catch(S=>{console.error("Failed to sign out",S)});let n=!1,r=!1,s=!1,i="",o=null,l=null,c=null;const u=me(()=>{}),h=S=>S?typeof S.toDate=="function"?S.toDate().toLocaleDateString():typeof S=="number"?new Date(S).toLocaleDateString():S.seconds?new Date(S.seconds*1e3).toLocaleDateString():"-":"-",f=S=>{if(!S)return"-";let R=null;return typeof S.toDate=="function"?R=S.toDate():typeof S=="number"?R=new Date(S):S.seconds&&(R=new Date(S.seconds*1e3)),R?R.toLocaleString():"-"},m=()=>{gn&&(gn(),gn=null),n=!0,i="",u(),ni=Rk(),gn=(ni==null?void 0:ni.unsubscribe)||null},E=S=>{o=S.id,l=S.createdAt??null,c={...S},u()},I=()=>{o=null,l=null,c=null,u()},k=()=>{if(!o||r)return;r=!0,i="",u();const S={id:o,email:((c==null?void 0:c.email)||"").trim(),firstName:((c==null?void 0:c.firstName)||"").trim(),lastName:((c==null?void 0:c.lastName)||"").trim(),userType:(c==null?void 0:c.userType)==="verified"?"verified":"unverified"};F.promise=Ak(S).then(()=>{I()}).catch(R=>{console.error("Failed to save user",R),i="Failed to save user.",u()}).finally(()=>{r=!1,u()})},D=()=>{!o||s||confirm("Delete this user?")&&(s=!0,i="",u(),F.promise=kk(o).then(()=>{I()}).catch(S=>{console.error("Failed to delete user",S),i="Failed to delete user.",u()}).finally(()=>{s=!1,u()}))};return Yl||(Yl=!0,gn?n=!0:m()),Bt(()=>{gn&&(gn(),gn=null),Yl=!1}),ve(He(()=>Rt(e)),_.class`users-page`(Be("👥 Users Admin"),_.class`users-card`(_.style`margin-top:0.75em;display:grid;gap:0.5em;`(S=>i?se.style`color:#f6c177;`(i):"",xT(ni,null,S=>S===null?B.style`opacity:0.7;`("Loading users..."):(n=!1,console.log("user items",{items:S,isLoading:n}),S.length?S.map(R=>b0({user:R,onEdit:()=>E(R),formatCreatedAt:h}).key(R.id)):B.style`opacity:0.7;`("No users found.")))),S=>o?w0({userId:o,createdAtLabel:f(l),editUser:c,isSaving:r,isDeleting:s,onChange:R=>{c=R,u()},onSave:k,onDelete:D,onCancel:I}):"",he,_.class`users-actions`(j.href`../admin.html`("Back to Admin Tools")))))}),lS=`
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
`,Gn=(t,e="")=>{let n=!1;return F(()=>{let r="loading",s="",i=null;const o=me((h,f="",m="")=>{r=h,s=f}),l=me(h=>{i=h,h||(r="login")}),c=()=>{o("login","","auth:logged-out"),r="login"},u=me((h,f="")=>{r="authorized",s=(h==null?void 0:h.email)||""});return n||(n=!0,xd({onUser:(h,f)=>{Pd({user:h,mountSso:o,setCurrentUser:l,onSignedOut:c,onDenied:()=>o("denied",(i==null?void 0:i.email)||"","auth:denied"),onAuthorized:u,reason:f})},toast:{error:h=>console.warn(h)}})),ve(Ft(`${lS}
${e}`),h=>E0(r,s,c,t))})},E0=F((t,e,n,r)=>(E0.inputs(s=>{[t,e,n,r]=s,n=Q(n)}),[()=>t==="authorized"?r(n):_(rl({status:t,userEmail:e,adminEmail:"",onSignIn:()=>vd().catch(s=>console.error("Failed to sign in",s)),onSignOut:()=>(t="login",dt().catch(s=>console.error("Failed to sign out",s)))}))])),il=F(({value:t,games:e,isLoaded:n,fieldError:r,editSelectedGame:s=!1,onChange:i})=>{il.inputs(l=>{[{value:t,games:e,isLoaded:n,fieldError:r,editSelectedGame:s=!1,onChange:i}]=l,i=Q(i)});const o=()=>r?"#f87171":"rgba(255,255,255,0.2)";return _.class`admin-field-with-link`(Ai.value(l=>t||"").onChange(l=>{var c;i(((c=l==null?void 0:l.target)==null?void 0:c.value)||"")}).attr("aria-invalid",l=>r?"true":"false").attr("title",l=>r||"").attr("style.borderColor",l=>o())(l=>cS(t,e,n)),j.href(l=>s&&t?`/admin/games.html?editGame=${encodeURIComponent(t)}`:"/admin/games.html").class`admin-inline-edit-link`(l=>s&&t?"edit game":"edit games"))}),cS=(t,e,n)=>{const r=dS(e),s=!t||e.some(i=>i.id===t);return[Vt.value``(i=>uS(e,n)),s?"":Vt.value`${t}`(`Missing game: ${t}`),r.map(({manufacturer:i,items:o})=>oE.label(i)(o.map(l=>Vt.value`${l.id}`(hS(l)))))]},uS=(t,e)=>e?t.length?"Select a game":"Add games first":"Loading games...",dS=t=>{const e=new Map;return t.forEach(n=>{const r=String(n.manufacturer||"Unknown Manufacturer").trim()||"Unknown Manufacturer";e.set(r,[...e.get(r)||[],n])}),[...e.entries()].sort(([n],[r])=>n.localeCompare(r,void 0,{sensitivity:"base"})).map(([n,r])=>({manufacturer:n,items:[...r].sort((s,i)=>String(s.title||"").localeCompare(String(i.title||""),void 0,{sensitivity:"base"}))}))},hS=t=>[t.title||"Untitled game",t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" - "),Xl=()=>({gameId:"",tierId:"",dateAddedToCollection:"",notes:"",isVisible:!0});let Zl=!1,ri=null,yn=null,er=null,To=null,_n=null,tr=null,Io=null,qt=null,bn=null;const ax=Gn(t=>v0(t)),v0=F(t=>{v0.inputs(([b])=>{t=Q(b)});const e=()=>dt().then(t).catch(b=>{console.error("Failed to sign out",b)});let n=!1,r=!1,s="",i={},o=!1,l=null,c=Xl(),u=ri,h=To,f=Io;const m=me(()=>{}),E=()=>{yn&&(yn(),yn=null),er&&(er(),er=null),u=null,ri=null,s="",m();const b=Uk();yn=(b==null?void 0:b.unsubscribe)||null;const g=b.subscribe(y=>{u=y,ri=y,console.debug("Current games list updated",{count:(y==null?void 0:y.length)||0,items:y}),m()});er=()=>g.unsubscribe()},I=()=>{_n&&(_n(),_n=null),tr&&(tr(),tr=null),h=null,To=null,m();const b=Ms();_n=(b==null?void 0:b.unsubscribe)||null;const g=b.subscribe(y=>{h=y,To=y,console.debug("Game library updated",{count:(y==null?void 0:y.length)||0,items:y}),m()});tr=()=>g.unsubscribe()},k=()=>{qt==null||qt(),bn==null||bn(),f=null,Io=null;const b=nl();qt=(b==null?void 0:b.unsubscribe)||null;const g=b.subscribe(y=>{Array.isArray(y)&&(f=y,Io=f,m())});bn=()=>g.unsubscribe()},D=()=>Bk().then(b=>{console.debug("Current games list refreshed",{count:b.length,items:b}),u=b,ri=b,m()}).catch(b=>{console.error("Failed to refresh current games list",b),s="Saved, but failed to refresh the game list. Reload the page to confirm.",m()}),S=()=>{l=null,c=Xl(),s="",i={},o=!0,m()},R=b=>{l=b.id,c={id:b.id,gameId:b.gameId||"",tierId:b.tierId||"",title:b.title||"",dateAddedToCollection:R0(b.dateAddedToCollection),imageUrl:b.imageUrl||"",manufacturer:b.manufacturer||"",yearReleased:Fp(b.yearReleased),notes:b.notes||"",isVisible:b.isVisible!==!1},s="",i={},o=!0,m()},M=()=>{n||r||(l=null,c=Xl(),s="",i={},o=!1,m())},z=()=>{const b={};!c.gameId&&!(c.title||"").trim()&&(b.gameId="Game is required."),c.dateAddedToCollection||(b.dateAddedToCollection="Date Added to Collection is required.");const g=(h||[]).find(A=>A.id===c.gameId),y=Array.isArray(g==null?void 0:g.tierIds)?g.tierIds:[];y.length&&!y.includes(c.tierId)&&(b.tierId="Select the tier for this current game."),c.yearReleased!==null&&typeof c.yearReleased<"u"&&Number.isNaN(Number(c.yearReleased))&&(b.yearReleased="Year Released must be numeric."),i=b;const v=Object.values(b);return v.length?v[0]:""},P=()=>{if(n){console.debug("Current game save ignored because a save is already running");return}const b=z();if(b){s=b,console.warn("Current game save blocked by validation",{fieldErrors:i,game:c}),m();return}n=!0,s="",i={},m(),console.debug("Saving current game",{id:l||null,game:c}),F.promise=jk({...c,id:l||void 0,gameId:(c.gameId||"").trim(),tierId:(c.tierId||"").trim(),title:(c.title||"").trim(),imageUrl:(c.imageUrl||"").trim(),manufacturer:(c.manufacturer||"").trim(),notes:(c.notes||"").trim(),yearReleased:Fp(c.yearReleased),isVisible:c.isVisible!==!1}).then(()=>(console.debug("Current game saved",{id:l||null}),n=!1,M(),D())).catch(g=>{console.error("Failed to save current game",g),s="Failed to save game. Check the fields and try again.",m()}).finally(()=>{n=!1,m()})},O=()=>{!l||r||confirm("Delete this game from the current lineup?")&&(r=!0,s="",m(),F.promise=zk(l).then(()=>(r=!1,M(),D())).catch(b=>{console.error("Failed to delete current game",b),s="Failed to delete game.",m()}).finally(()=>{r=!1,m()}))};return Zl||(Zl=!0,yn||E(),_n||I(),qt||k()),Bt(()=>{yn&&(yn(),yn=null),er&&(er(),er=null),_n&&(_n(),_n=null),tr&&(tr(),tr=null),qt==null||qt(),bn==null||bn(),qt=null,bn=null,Io=null,Zl=!1,ri=null,To=null}),ve(He(()=>Rt(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(Be("⚪️ Current Game Lineup"),q.type`button`.class`admin-pill-button`.onClick(S)("Add")),_.class`admin-crud-card`(se.style`margin-top:0;opacity:0.78;`("Manage the Firestore currentGames collection used by the public lineup page."),b=>s&&!o?se.style`color:#f6c177;`(s):"",_.class`admin-crud-list`(b=>u===null?B.style`opacity:0.7;`("Loading games..."):u.length?u.map(g=>A0({game:fS(g,h||[]),onClick:R}).key(g.id)):B.style`opacity:0.7;`("No games found. Use Add Game to create the first one.")),_.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(j.href`../lineup.html`.class`admin-secondary-button`("View Public Lineup"))),b=>o?C0({isEditing:!!l,editGame:c,gameLibrary:h||[],gameTiers:f||[],isGameTiersLoaded:f!==null,isGameLibraryLoaded:h!==null,errorMessage:s,fieldErrors:i,isSaving:n,isDeleting:r,onChange:g=>{var y;c=g,i={...i,gameId:g.gameId||(y=g.title)!=null&&y.trim()?"":i.gameId,tierId:g.tierId?"":i.tierId,dateAddedToCollection:g.dateAddedToCollection?"":i.dateAddedToCollection,yearReleased:g.yearReleased===null||!Number.isNaN(Number(g.yearReleased))?"":i.yearReleased},m()},onSave:P,onDelete:O,onCancel:M}):""))}),A0=F(({game:t,onClick:e})=>(A0.inputs(n=>{[{game:t,onClick:e}]=n,e=Q(e)}),q.type`button`.class`admin-crud-row`.onClick(()=>e(t))(n=>t.imageUrl?X.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",r=>t.title||"Game image"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),_(zn(n=>t.title||"Untitled game"),_.style`margin-top:0.15em;opacity:0.74;`(B(n=>[t.manufacturer||"",t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year"))),B.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Collected Date"),Z(n=>[pS(t.dateAddedToCollection),t.isVisible===!1?" · Hidden":""].join("")))))),fS=(t,e)=>{const n=e.find(r=>r.id===t.gameId);return{...t,title:(n==null?void 0:n.title)||t.title||"",imageUrl:(n==null?void 0:n.imageUrl)||t.imageUrl||"",manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null}},C0=F(({isEditing:t,editGame:e,gameLibrary:n,gameTiers:r,isGameTiersLoaded:s,isGameLibraryLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:E})=>{C0.inputs(S=>{[{isEditing:t,editGame:e,gameLibrary:n,gameTiers:r,isGameTiersLoaded:s,isGameLibraryLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:E}]=S,h=Q(h),f=Q(f),m=Q(m),E=Q(E)});const I=S=>{h({...e,...S})},k=S=>l[S]?"#f87171":"rgba(255,255,255,0.2)",D=S=>l[S]?"#fca5a5":"inherit";return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(Be.style`margin:0;`(t?"Edit Game":"Add Game"),B.style`opacity:0.72;`(t?"Update this current lineup entry.":"Create a new current lineup entry.")),q.type`button`.class`admin-secondary-button`.onClick(E)("Cancel")),S=>o?se.style`color:#f6c177;`(o):"",S=>Object.values(l).filter(Boolean).length?_.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(l).filter(Boolean).map(R=>B(R))):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(re.attr("style.color",S=>D("gameId"))("Game"),S=>il({value:e.gameId||"",games:n,isLoaded:i,fieldError:l.gameId,editSelectedGame:!0,onChange:R=>I({gameId:R,tierId:""})}).key(`${i?"loaded":"loading"}-${n.length}`),re.style`text-align:left;justify-self:start;`.attr("style.color",S=>D("tierId"))("Game Tier"),S=>{const R=n.find(P=>P.id===e.gameId),z=(Array.isArray(R==null?void 0:R.tierIds)?R.tierIds:[]).map(P=>r.find(O=>O.id===P)).filter(Boolean);return _.style`text-align:left;justify-self:stretch;width:100%;`(z.length?_.style`display:grid;gap:0.45em;text-align:left;`(z.map(P=>re.style`display:flex;gap:0.5em;align-items:center;text-align:left;justify-content:flex-start;`(le.type`radio`.attr("name","current-game-tier").value`${P.id}`.attr("checked",O=>e.tierId===P.id?"checked":null).onChange(()=>I({tierId:P.id}))(),Z(`${P.shortName} — ${P.longName}`)).key(P.id))):s?e.gameId?Ai.style`text-align:left;width:100%;`.value(P=>e.tierId||"").onChange(P=>{var O;I({tierId:((O=P==null?void 0:P.target)==null?void 0:O.value)||""})}).attr("aria-invalid",P=>l.tierId?"true":"false").attr("title",P=>l.tierId||"")([Vt.value``(r.length?"Select a game tier":"No game tiers available"),...r.map(P=>Vt.value`${P.id}`(`${P.shortName} — ${P.longName}`))]):B.style`opacity:0.72;`("Select a game first."):B.style`opacity:0.72;`("Loading game tiers..."))},re.attr("style.color",S=>D("dateAddedToCollection"))("Date Added to Collection"),le.type`date`.value(S=>e.dateAddedToCollection||"").onInput(S=>{var R;I({dateAddedToCollection:((R=S==null?void 0:S.target)==null?void 0:R.value)||""})}).attr("aria-invalid",S=>l.dateAddedToCollection?"true":"false").attr("title",S=>l.dateAddedToCollection||"").attr("style.borderColor",S=>k("dateAddedToCollection"))(),re("Notes"),As.value(S=>e.notes||"").onInput(S=>{var R;I({notes:((R=S==null?void 0:S.target)==null?void 0:R.value)||""})})(),re("Visible on public page"),re.style`display:flex;gap:0.5em;align-items:center;`(le.type`checkbox`.attr("checked",S=>e.isVisible!==!1?"checked":null).onChange(S=>{var R;I({isVisible:!!((R=S==null?void 0:S.target)!=null&&R.checked)})})(),Z(S=>e.isVisible!==!1?"Visible":"Hidden"))),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",S=>c?"disabled":null).onClick(f)(S=>c?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",S=>c?"disabled":null).onClick(E)("Cancel")),S=>t?q.type`button`.class`admin-danger-button`.attr("disabled",R=>u?"disabled":null).onClick(m)(R=>u?"🗑️ Deleting...":"🗑️ Delete"):"")))}),Fp=t=>{if(typeof t=="number"&&!Number.isNaN(t))return t;if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},R0=t=>t?typeof t=="string"?t.slice(0,10):typeof t.toDate=="function"?t.toDate().toISOString().slice(0,10):t.seconds?new Date(t.seconds*1e3).toISOString().slice(0,10):"":"",pS=t=>{const e=R0(t);if(!e)return"No date";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},ec=()=>({title:"",imageUrl:"",manufacturerId:"",manufacturer:"",yearReleased:null,notes:"",dataLinks:[],tierIds:[]});let tc=!1,si=null,nr=null,Hr=null,Eo=null,rr=null,qr=null,vo=null,Gt=null,wn=null;const lx=Gn(t=>k0(t)),k0=F(t=>{k0.inputs(([y])=>{t=Q(y)});const e=()=>dt().then(t).catch(y=>console.error("Failed to sign out",y));let n=si,r=Eo,s=vo,i=!1,o=null,l=ec(),c=!1,u=!1,h="",f={};const m=new URLSearchParams(window.location.search).get("editGame")||"";let E=!1;const I=me(()=>{}),k=()=>{nr&&nr(),Hr&&Hr(),n=null,si=null,I();const y=Ms();nr=(y==null?void 0:y.unsubscribe)||null;const v=y.subscribe(A=>{if(n=A,si=A,m&&!E){const C=A.find(T=>T.id===m);C&&(E=!0,z(C))}I()});Hr=()=>v.unsubscribe()},D=()=>Ad().then(y=>{n=y,si=y,I()}).catch(y=>{console.error("Failed to refresh games",y),h="Saved, but failed to refresh games. Reload the page to confirm.",I()}),S=()=>{rr&&rr(),qr&&qr(),r=null,Eo=null,I();const y=t0();rr=(y==null?void 0:y.unsubscribe)||null;const v=y.subscribe(A=>{r=A,Eo=A,I()});qr=()=>v.unsubscribe()},R=()=>{Gt==null||Gt(),wn==null||wn(),s=null,vo=null;const y=nl();Gt=(y==null?void 0:y.unsubscribe)||null;const v=y.subscribe(A=>{Array.isArray(A)&&(s=A,vo=s,I())});wn=()=>v.unsubscribe()},M=()=>{o=null,l=ec(),h="",f={},i=!0,I()},z=y=>{o=y.id,l={id:y.id,title:y.title||"",imageUrl:y.imageUrl||"",manufacturerId:y.manufacturerId||"",manufacturer:y.manufacturer||"",yearReleased:$p(y.yearReleased),notes:y.notes||"",dataLinks:br(y.dataLinks),tierIds:Zc(y.tierIds)},h="",f={},i=!0,I()},P=()=>{c||u||(o=null,l=ec(),h="",f={},i=!1,I())},O=()=>{const y={},v=(l.id||"").trim();o&&!v&&(y.id="Game ID is required."),o&&v.includes("/")&&(y.id="Game ID cannot include /."),o&&v!==o&&(n||[]).some(C=>C.id===v)&&(y.id="A game with this ID already exists."),l.title.trim()||(y.title="Game Title is required."),l.yearReleased!==null&&Number.isNaN(Number(l.yearReleased))&&(y.yearReleased="Year Released must be numeric."),f=y;const A=Object.values(y);return A.length?A[0]:""},b=()=>{if(c)return;const y=O();if(y){h=y,I();return}c=!0,h="",f={},I();const v=(r||[]).find(C=>C.id===l.manufacturerId),A=o?(l.id||"").trim():void 0;F.promise=n0({...l,id:A||void 0,title:l.title.trim(),imageUrl:(l.imageUrl||"").trim(),manufacturerId:(l.manufacturerId||"").trim(),manufacturer:((v==null?void 0:v.name)||l.manufacturer||"").trim(),yearReleased:$p(l.yearReleased),notes:(l.notes||"").trim(),dataLinks:br(l.dataLinks),tierIds:Zc(l.tierIds)}).then(()=>{if(o&&A&&A!==o)return xp(o)}).then(()=>(c=!1,P(),D())).catch(C=>{console.error("Failed to save game",C),h="Failed to save game. Check the fields and try again.",I()}).finally(()=>{c=!1,I()})},g=()=>{!o||u||confirm("Delete this game from the games collection? Existing lineup entries or ratings may still reference it.")&&(u=!0,h="",I(),F.promise=xp(o).then(()=>(u=!1,P(),D())).catch(y=>{console.error("Failed to delete game",y),h="Failed to delete game.",I()}).finally(()=>{u=!1,I()}))};return tc||(tc=!0,nr||k(),rr||S(),Gt||R()),Bt(()=>{nr&&nr(),Hr&&Hr(),rr&&rr(),qr&&qr(),Gt==null||Gt(),wn==null||wn(),nr=null,Hr=null,rr=null,qr=null,si=null,Eo=null,Gt=null,wn=null,vo=null,tc=!1}),ve(He(()=>Rt(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(Be("🕹️ Games Database"),q.type`button`.class`admin-pill-button`.onClick(M)("Add")),_.class`admin-crud-card`(se.style`margin-top:0;opacity:0.78;`("Manage canonical games used by lineup and ratings."),y=>h&&!i?se.style`color:#f6c177;`(h):"",_.class`admin-crud-list`(y=>{if(r===null)return B.style`opacity:0.7;`("Loading manufacturers...");if(!r.length)return B.style`opacity:0.7;`("No manufacturers found. Add a manufacturer first.");if(n===null)return B.style`opacity:0.7;`("Loading games...");const v=r,A=n.filter(C=>!v.some(T=>S0(C,T)));return[...v.map(C=>Xc({manufacturer:C,games:mS(C,n||[]),onGameClick:z}).key(C.id)),A.length?Xc({manufacturer:{id:"unmatched",name:"Unmatched Games",logoUrl:"",opinions:"Games without a matching manufacturer link."},games:A,onGameClick:z}).key("unmatched"):""]}),_.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(j.href`../admin/current-games.html`.class`admin-secondary-button`("Lineup Admin"),j.href`../admin/manufacturers.html`.class`admin-secondary-button`("Manufacturers Admin"),j.href`../admin/game-tiers.html`.class`admin-secondary-button`("Game Tiers Admin"),j.href`../admin/game-ratings.html`.class`admin-secondary-button`("Ratings Admin"))),y=>i?V0({isEditing:!!o,originalGameId:o||"",editGame:l,manufacturers:r||[],gameTiers:s||[],isGameTiersLoaded:s!==null,errorMessage:h,fieldErrors:f,isSaving:c,isDeleting:u,onChange:v=>{var A,C,T;l=v,f={...f,id:(A=v.id)!=null&&A.trim()?"":f.id,title:(C=v.title)!=null&&C.trim()?"":f.title,manufacturerId:v.manufacturerId||(T=v.manufacturer)!=null&&T.trim()?"":f.manufacturerId,yearReleased:v.yearReleased===null||!Number.isNaN(Number(v.yearReleased))?"":f.yearReleased},I()},onSave:b,onDelete:g,onCancel:P}):""))}),Xc=F(({manufacturer:t,games:e,onGameClick:n})=>(Xc.inputs(r=>{[{manufacturer:t,games:e,onGameClick:n}]=r,n=Q(n)}),_.style`display:grid;gap:0.55em;padding:0.85em 0;border-top:1px solid rgba(255,255,255,0.12);`(_.style`display:flex;align-items:center;justify-content:space-between;gap:1em;flex-wrap:wrap;`(_.style`display:flex;align-items:center;gap:0.75em;min-width:0;`(r=>t.logoUrl?X.class`admin-crud-thumb`.style`width:46px;height:46px;`.src`${t.logoUrl}`.attr("alt",s=>t.name||"Manufacturer logo"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`.style`width:46px;height:46px;font-size:1em;`(s=>(t.name||"?").slice(0,2).toUpperCase()),_.style`min-width:0;`(zn(r=>t.name||"Untitled manufacturer"),_.style`margin-top:0.12em;opacity:0.66;`(B(r=>`${e.length} game${e.length===1?"":"s"}`))))),r=>e.length?_.style`display:grid;gap:0.55em;`(e.map(s=>x0({game:s,manufacturers:[t],onClick:n}).key(s.id))):B.style`opacity:0.7;`("No games for this manufacturer yet.")))),mS=(t,e)=>e.filter(n=>S0(n,t)),S0=(t,e)=>t.manufacturerId===e.id||Up(t.manufacturer)===Up(e.name),x0=F(({game:t,manufacturers:e,onClick:n})=>(x0.inputs(r=>{[{game:t,manufacturers:e,onClick:n}]=r,n=Q(n)}),q.type`button`.class`admin-crud-row`.onClick(()=>n(t))(r=>t.imageUrl?X.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",s=>t.title||"Game image"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),_(zn(r=>t.title||"Untitled game"),_.style`margin-top:0.15em;opacity:0.74;`(B(r=>[gS(t,e),t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),B.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Game ID"),Z(r=>t.id))))),gS=(t,e)=>{const n=e.find(r=>r.id===t.manufacturerId);return(n==null?void 0:n.name)||t.manufacturer||""},Up=t=>String(t||"").trim().toLowerCase(),P0=t=>`${t} pinball machine backglass`,yS=t=>`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(P0(t))}`,_S=t=>`https://pinside.com/pinball/machine/${encodeURIComponent(t)}`,V0=F(({isEditing:t,originalGameId:e,editGame:n,manufacturers:r,gameTiers:s,isGameTiersLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:E})=>{V0.inputs(P=>{[{isEditing:t,originalGameId:e,editGame:n,manufacturers:r,gameTiers:s,isGameTiersLoaded:i,errorMessage:o,fieldErrors:l,isSaving:c,isDeleting:u,onChange:h,onSave:f,onDelete:m,onCancel:E}]=P,h=Q(h),f=Q(f),m=Q(m),E=Q(E)});const I=P=>h({...n,...P}),k=(P,O)=>{var g,y;const b=br(n.dataLinks,!0);b[P]={title:((g=b[P])==null?void 0:g.title)||"",url:((y=b[P])==null?void 0:y.url)||"",...O},I({dataLinks:b})},D=()=>{I({dataLinks:[...br(n.dataLinks,!0),{title:"",url:""}]})},S=P=>{I({dataLinks:br(n.dataLinks,!0).filter((O,b)=>b!==P)})},R=P=>l[P]?"#f87171":"rgba(255,255,255,0.2)",M=P=>l[P]?"#fca5a5":"inherit",z=P=>{var O;P.key!=="Enter"||P.shiftKey||P.metaKey||P.ctrlKey||P.altKey||String(((O=P.target)==null?void 0:O.tagName)||"").toLowerCase()!=="textarea"&&(P.preventDefault(),f())};return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`.onKeyDown(z)(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(Be.style`margin:0;`(t?"Edit Game":"Add Game"),B.style`opacity:0.72;`("Manage the canonical machine record.")),q.type`button`.class`admin-secondary-button`.onClick(E)("Cancel")),P=>o?se.style`color:#f6c177;`(o):"",P=>Object.values(l).filter(Boolean).length?_.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(l).filter(Boolean).map(O=>B(O))):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(P=>t?[re.attr("style.color",O=>M("id"))("Game ID"),_.style`display:grid;gap:0.28em;`(le.type`text`.value(O=>n.id||"").onInput(O=>{var b;I({id:((b=O==null?void 0:O.target)==null?void 0:b.value)||""})}).attr("aria-invalid",O=>l.id?"true":"false").attr("title",O=>l.id||"").attr("style.borderColor",O=>R("id"))(),O=>(n.id||"").trim()!==e?B.style`color:#f6c177;line-height:1.35;`("Changing this value can change or break links to this game."):"",O=>(n.id||"").trim()?B(j.href`${_S((n.id||"").trim())}`.class`admin-inline-edit-link`.attr("target","_blank").attr("rel","noopener noreferrer").style`justify-self:start;`("pinside link")):"")]:"",re.attr("style.color",P=>M("title"))("Game Title"),le.type`text`.value(P=>n.title||"").onInput(P=>{var O;I({title:((O=P==null?void 0:P.target)==null?void 0:O.value)||""})}).attr("aria-invalid",P=>l.title?"true":"false").attr("title",P=>l.title||"").attr("style.borderColor",P=>R("title"))(),re("Image URL"),_.style`display:grid;gap:0.5em;`(_.style`display:grid;grid-template-columns:minmax(0,1fr) auto;gap:0.5em;align-items:stretch;`(le.type`url`.value(P=>n.imageUrl||"").onInput(P=>{var O;I({imageUrl:((O=P==null?void 0:P.target)==null?void 0:O.value)||""})})(),P=>n.imageUrl?X.src`${n.imageUrl}`.attr("alt",O=>`${n.title||"Game"} image preview`).style`width:64px;height:42px;object-fit:cover;border:1px solid rgba(255,255,255,0.2);border-radius:0.5em;background:#101010;`:""),P=>(n.title||"").trim()?j.href`${yS(n.title||"")}`.class`admin-inline-edit-link`.attr("target","_blank").attr("rel","noopener noreferrer").style`justify-self:start;`.attr("title",O=>P0(n.title||""))("view google images"):B.style`opacity:0.72;`("Add a game title to view Google Images.")),re.attr("style.color",P=>M("manufacturerId"))("Manufacturer"),_.class`admin-field-with-link`(Ai.value(P=>n.manufacturerId||"").onChange(P=>{var O;I({manufacturerId:((O=P==null?void 0:P.target)==null?void 0:O.value)||""})}).attr("aria-invalid",P=>l.manufacturerId?"true":"false").attr("title",P=>l.manufacturerId||"").attr("style.borderColor",P=>R("manufacturerId"))([Vt.value``(r.length?"Select a manufacturer":"Add a manufacturer first"),...r.map(P=>Vt.value`${P.id}`(P.name||"Untitled manufacturer"))]),j.href`/admin/manufacturers.html`.class`admin-inline-edit-link`("edit manufacturers")),re.attr("style.color",P=>M("yearReleased"))("Year Released"),le.type`number`.value(P=>n.yearReleased??"").onInput(P=>{var O;I({yearReleased:bS((O=P==null?void 0:P.target)==null?void 0:O.value)})}).attr("aria-invalid",P=>l.yearReleased?"true":"false").attr("title",P=>l.yearReleased||"").attr("style.borderColor",P=>R("yearReleased"))(),re("Game Tiers"),_.class`admin-field-with-link`(P=>s.length?Ai.attr("multiple","multiple").attr("size",O=>String(Math.min(6,Math.max(2,s.length)))).onChange(O=>{var b;I({tierIds:Array.from(((b=O==null?void 0:O.target)==null?void 0:b.selectedOptions)||[]).map(g=>g.value)})})(s.map(O=>Vt.value`${O.id}`.attr("selected",b=>Zc(n.tierIds).includes(O.id)?"selected":null)(`${O.shortName} — ${O.longName}`))):B.style`opacity:0.72;`(i?"No game tiers available.":"Loading game tiers..."),j.href`/admin/game-tiers.html`.class`admin-inline-edit-link`("edit game tiers")),re("Notes"),As.value(P=>n.notes||"").onInput(P=>{var O;I({notes:((O=P==null?void 0:P.target)==null?void 0:O.value)||""})})(),re("Data Links"),_.style`display:grid;gap:0.55em;`(P=>br(n.dataLinks,!0).length?br(n.dataLinks,!0).map((O,b)=>_.style`display:grid;grid-template-columns:1fr 1fr auto;gap:0.45em;align-items:center;`(le.type`text`.placeholder`Title`.value(g=>O.title||"").onInput(g=>{var y;k(b,{title:((y=g==null?void 0:g.target)==null?void 0:y.value)||""})})(),le.type`url`.placeholder`URL`.value(g=>O.url||"").onInput(g=>{var y;k(b,{url:((y=g==null?void 0:g.target)==null?void 0:y.value)||""})})(),q.type`button`.class`admin-danger-button`.onClick(()=>S(b))("🗑️ Delete")).key(`data-link-${b}`)):B.style`opacity:0.72;`("No data links added."),_(q.type`button`.class`admin-secondary-button`.onClick(D)("Add Data Link")))),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",P=>c?"disabled":null).onClick(f)(P=>c?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",P=>c?"disabled":null).onClick(E)("Cancel")),P=>t?q.type`button`.class`admin-danger-button`.attr("disabled",O=>u?"disabled":null).onClick(m)(O=>u?"🗑️ Deleting...":"🗑️ Delete"):"")))}),bS=t=>{if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},$p=t=>{if(typeof t=="number"&&!Number.isNaN(t))return t;if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},br=(t,e=!1)=>Array.isArray(t)?t.map(n=>({title:((n==null?void 0:n.title)||"").trim(),url:((n==null?void 0:n.url)||"").trim()})).filter(n=>e||n.title||n.url):[],Zc=t=>Array.isArray(t)?[...new Set(t.map(e=>String(e||"").trim()).filter(Boolean))]:[],wS=new URL(""+new URL("rating-badge-CCDAE7Ja.png",import.meta.url).href,import.meta.url).href,Nd=F(({rating:t,size:e=82})=>{Nd.inputs(r=>{[{rating:t,size:e=82}]=r});const n=TS(t);return _.class`rating-badge`.attr("aria-label",r=>n?`Rating ${n} out of 10`:"Not rated").attr("title",r=>n?`${n}/10`:"Not rated").style`
      width:${e}px;
      height:${e}px;
      position:relative;
      display:inline-block;
      flex:0 0 auto;
    `(X.src`${wS}`.attr("alt","").attr("aria-hidden","true").style`
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
          `(n):"")}),TS=t=>typeof t!="number"||Number.isNaN(t)?"":t.toFixed(1).replace(/\.0$/,""),nc=()=>({gameId:"",rating:null,review:"",videos:[],isVisible:!0});let rc=!1,ii=null,oi=null,sr=null,Gr=null,ir=null,Wr=null;const cx=Gn(t=>N0(t)),N0=F(t=>{N0.inputs(([g])=>{t=Q(g)});const e=()=>dt().then(t).catch(g=>console.error("Failed to sign out",g));let n=ii,r=oi,s=!1,i=null,o=nc(),l=!1,c=!1,u="",h={};const f=me(()=>{}),m=()=>{sr&&sr(),Gr&&Gr(),r=null,oi=null,f();const g=Dk();sr=(g==null?void 0:g.unsubscribe)||null;const y=g.subscribe(me(v=>{r=v,oi=v}));Gr=()=>y.unsubscribe()},E=()=>{ir&&ir(),Wr&&Wr(),n=null,ii=null,f();const g=Ms();ir=(g==null?void 0:g.unsubscribe)||null;const y=g.subscribe(me(v=>{n=v,ii=v}));Wr=()=>y.unsubscribe()},I=()=>Lk().then(g=>{r=g,oi=g,f()}).catch(g=>{console.error("Failed to refresh game ratings",g),u="Saved, but failed to refresh ratings. Reload the page to confirm.",f()}),k=()=>Ad().then(g=>{n=g,ii=g,f()}).catch(g=>{console.error("Failed to refresh games",g)}),D=()=>n!==null?Promise.resolve(n):(f(),k().then(()=>n||[])),S=()=>{i=null,o={...nc()},u="",h={},s=!0,f(),F.promise=D()},R=g=>{const y=g.id||g.gameId;i=y||null,o={id:y,gameId:g.gameId||g.id||"",rating:typeof g.rating=="number"?g.rating:null,review:g.review||"",videos:Array.isArray(g.videos)?g.videos:[],isVisible:g.isVisible!==!1},u="",h={},s=!0,f(),F.promise=D()},M=()=>{l||c||(i=null,o=nc(),h={},u="",s=!1,f())},z=()=>{const g={};o.gameId||(g.gameId="Game is required."),o.rating===null||Number.isNaN(Number(o.rating))?g.rating="Rating is required.":(Number(o.rating)<0||Number(o.rating)>10)&&(g.rating="Rating must be between 0 and 10."),h=g;const y=Object.values(g);return y.length?y[0]:""},P=()=>{if(l)return;const g=z();if(g){u=g,f();return}l=!0,u="",f(),F.promise=Ok({...o,id:o.gameId,rating:Number(o.rating),review:(o.review||"").trim(),videos:ES(o.videos),isVisible:o.isVisible!==!1}).then(()=>(l=!1,M(),I())).catch(y=>{console.error("Failed to save game rating",y),u="Failed to save rating. Check the fields and try again.",f()}).finally(()=>{l=!1,f()})},O=()=>{!i||c||confirm("Delete this game rating?")&&(c=!0,u="",f(),F.promise=Fk(i).then(()=>(c=!1,M(),I())).catch(g=>{console.error("Failed to delete game rating",g),u="Failed to delete rating.",f()}).finally(()=>{c=!1,f()}))};rc||(rc=!0,sr||m(),ir||E()),Bt(()=>{sr&&sr(),Gr&&Gr(),ir&&ir(),Wr&&Wr(),sr=null,Gr=null,ir=null,Wr=null,ii=null,oi=null,rc=!1});const b=()=>r===null?B.style`opacity:0.7;`("Loading ratings..."):r.length?r.map(g=>D0({rating:g,game:IS(g,n||[]),onClick:R}).key(g.id||g.gameId)):"";return ve(He(()=>Rt(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(Be("⭐ Game Ratings"),q.type`button`.class`admin-pill-button`.onClick(S)("Add")),_.class`admin-crud-card`(g=>u&&!s?se.style`color:#f6c177;`(u):"",_.class`admin-crud-list`(g=>b()),_.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(j.href`../ratings.html`.class`admin-secondary-button`("View Public Ratings"))),g=>s?M0({isEditing:!!i,editRating:o,games:n||[],isGamesLoaded:n!==null,errorMessage:u,fieldErrors:h,isSaving:l,isDeleting:c,onChange:y=>{o=y,h={...h,gameId:y.gameId?"":h.gameId,rating:y.rating!==null&&!Number.isNaN(Number(y.rating))?"":h.rating},f()},onSave:P,onDelete:O,onCancel:M}):""))}),D0=F(({game:t,rating:e,onClick:n})=>(D0.inputs(r=>{[{game:t,rating:e,onClick:n}]=r,n=Q(n)}),q.type`button`.class`admin-crud-row`.onClick(()=>n(e))(r=>t!=null&&t.imageUrl?X.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",s=>t.title||"Game image"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),_(zn(r=>(t==null?void 0:t.title)||e.gameId||e.id||"Untitled game"),_.style`margin-top:0.15em;opacity:0.74;`(B(r=>[(t==null?void 0:t.manufacturer)||"",t!=null&&t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"))),_.class`admin-rating-badge-cell`.style`display:grid;justify-items:end;gap:0.25em;`(r=>typeof(e==null?void 0:e.rating)=="number"&&!Number.isNaN(e.rating)?Nd({rating:e.rating}):B.style`opacity:0.72;`("Not rated"),r=>(e==null?void 0:e.isVisible)===!1?B.style`opacity:0.72;`("Hidden"):"")))),M0=F(({isEditing:t,editRating:e,games:n,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:l,onChange:c,onSave:u,onDelete:h,onCancel:f})=>{M0.inputs(R=>{[{isEditing:t,editRating:e,games:n,isGamesLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:l,onChange:c,onSave:u,onDelete:h,onCancel:f}]=R,c=Q(c),u=Q(u),h=Q(h),f=Q(f)});const m=R=>{c({...e,...R})},E=(R,M)=>{var P,O;const z=[...e.videos||[]];z[R]={url:((P=z[R])==null?void 0:P.url)||"",description:((O=z[R])==null?void 0:O.description)||"",...M},m({videos:z})},I=()=>{m({videos:[...e.videos||[],{url:"",description:""}]})},k=R=>{m({videos:(e.videos||[]).filter((M,z)=>z!==R)})},D=R=>i[R]?"#f87171":"rgba(255,255,255,0.2)",S=R=>i[R]?"#fca5a5":"inherit";return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(Be.style`margin:0;`(R=>t?"Edit Rating":"Add Rating"),B.style`opacity:0.72;`("Create or update the public rating for this game.")),q.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),R=>s?se.style`color:#f6c177;`(s):"",R=>Object.values(i).filter(Boolean).length?_.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(i).filter(Boolean).map(M=>B(M))):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(re.attr("style.color",R=>S("gameId"))("Game"),R=>il({value:e.gameId||"",games:n,isLoaded:r,fieldError:i.gameId,onChange:M=>m({gameId:M})}).key(`${r?"loaded":"loading"}-${n.length}`),re.attr("style.color",R=>S("rating"))("Rating"),le.type`number`.attr("min","0").attr("max","10").attr("step","0.1").value(R=>e.rating??"").onInput(R=>{var M;m({rating:vS((M=R==null?void 0:R.target)==null?void 0:M.value)})}).attr("aria-invalid",R=>i.rating?"true":"false").attr("title",R=>i.rating||"").attr("style.borderColor",R=>D("rating"))(),re("Review"),As.value(R=>e.review||"").onInput(R=>{var M;m({review:((M=R==null?void 0:R.target)==null?void 0:M.value)||""})})(),re("Videos"),_.style`display:grid;gap:0.6em;`(R=>(e.videos||[]).length?(e.videos||[]).map((M,z)=>_.style`display:grid;gap:0.45em;border:1px solid rgba(255,255,255,0.12);border-radius:0.55em;padding:0.65em;background:rgba(0,0,0,0.18);`(_.style`display:grid;grid-template-columns:1fr auto;gap:0.45em;align-items:center;`(le.type`url`.style`width:100%;`.value(P=>M.url||"").attr("placeholder","YouTube video URL").onInput(P=>{var O;E(z,{url:((O=P==null?void 0:P.target)==null?void 0:O.value)||""})})(),P=>M.url?j.href`${M.url}`.class`admin-secondary-button`.style`text-decoration:none;`.attr("target","_blank").attr("rel","noopener noreferrer").attr("title","Open video link")("🔗"):""),le.type`text`.style`width:100%;`.value(P=>M.description||"").attr("placeholder","Description").onInput(P=>{var O;E(z,{description:((O=P==null?void 0:P.target)==null?void 0:O.value)||""})})(),_.style`display:flex;justify-content:flex-end;`(q.type`button`.class`admin-secondary-button`.onClick(()=>k(z))("🗑️ Remove")))):B.style`opacity:0.72;`("No videos linked."),q.type`button`.class`admin-secondary-button`.onClick(I)("Add Video")),re("Visible on public page"),re.style`display:flex;gap:0.5em;align-items:center;`(le.type`checkbox`.attr("checked",R=>e.isVisible!==!1?"checked":null).onChange(R=>{var M;m({isVisible:!!((M=R==null?void 0:R.target)!=null&&M.checked)})})(),Z(R=>e.isVisible!==!1?"Visible":"Hidden"))),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",R=>o?"disabled":null).onClick(u)(R=>o?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",R=>o?"disabled":null).onClick(f)("Cancel")),R=>t?q.type`button`.class`admin-danger-button`.attr("disabled",M=>l?"disabled":null).onClick(h)(M=>l?"🗑️ Deleting...":"🗑️ Delete"):"")))}),IS=(t,e)=>{const n=t.gameId||t.id;return e.find(r=>r.id===n)||null},ES=t=>Array.isArray(t)?t.map(e=>({url:((e==null?void 0:e.url)||"").trim(),description:((e==null?void 0:e.description)||"").trim()})).filter(e=>e.url||e.description):[],vS=t=>{if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},sc=()=>({name:"",logoUrl:"",opinions:""});let ic=!1,or=null,ar=null,Jr=null;const ux=Gn(t=>L0(t)),L0=F(t=>{L0.inputs(([M])=>{t=Q(M)});const e=()=>dt().then(t).catch(M=>console.error("Failed to sign out",M));let n=or,r=!1,s=null,i=sc(),o=!1,l=!1,c="",u={};const h=()=>{ar&&ar(),Jr&&Jr(),n=null,or=null;const M=t0();ar=(M==null?void 0:M.unsubscribe)||null;const z=M.subscribe(P=>{n=P,or=P});Jr=()=>z.unsubscribe()},f=()=>Sk().then(M=>{n=M,or=M}).catch(M=>{console.error("Failed to refresh manufacturers",M),c="Saved, but failed to refresh manufacturers. Reload the page to confirm."});F.promise=f();const m=(M,z)=>{const P=n||or||[],O={...P.find(y=>y.id===M)||{},...z,id:M},b=P.some(y=>y.id===M),g=AS(b?P.map(y=>y.id===M?O:y):[...P,O]);n=g,or=g},E=()=>{s=null,i=sc(),c="",u={},r=!0},I=M=>{s=M.id,i={id:M.id,name:M.name||"",logoUrl:M.logoUrl||"",opinions:M.opinions||""},c="",u={},r=!0},k=()=>{o||l||(s=null,i=sc(),c="",u={},r=!1)},D=()=>{const M={},z=(i.id||"").trim();s&&!z&&(M.id="Manufacturer ID is required."),s&&z.includes("/")&&(M.id="Manufacturer ID cannot include /."),s&&z!==s&&(n||[]).some(O=>O.id===z)&&(M.id="A manufacturer with this ID already exists."),i.name.trim()||(M.name="Manufacturer Name is required."),u=M;const P=Object.values(M);return P.length?P[0]:""},S=()=>{if(o)return;const M=D();if(M){c=M;return}o=!0,c="",u={};const z={...i,id:s?(i.id||"").trim():void 0,name:i.name.trim(),logoUrl:(i.logoUrl||"").trim(),opinions:(i.opinions||"").trim()},P=s;return xk(z).then(O=>{const b=z.id||P||(O==null?void 0:O.id);if(b&&m(b,z),P&&b&&b!==P)return kp(P)}).then(()=>(o=!1,k(),f())).catch(O=>{console.error("Failed to save manufacturer",O),c="Failed to save manufacturer. Check the fields and try again."}).finally(()=>{o=!1})},R=()=>{!s||l||confirm("Delete this manufacturer? Existing games may still reference it.")&&(l=!0,c="",F.promise=kp(s).then(()=>(l=!1,k(),f())).catch(M=>{console.error("Failed to delete manufacturer",M),c="Failed to delete manufacturer."}).finally(()=>{l=!1}))};return ic||(ic=!0,ar||h()),Bt(()=>{ar&&ar(),Jr&&Jr(),ar=null,Jr=null,or=null,ic=!1}),ve(He(()=>Rt(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(Be("🏭 Manufacturers Database"),q.type`button`.class`admin-pill-button`.onClick(E)("Add")),_.class`admin-crud-card`(M=>c&&!r?se.style`color:#f6c177;`(c):"",_.class`admin-crud-list`(M=>n===null?B.style`opacity:0.7;`("Loading manufacturers..."):n.length?n.map(z=>O0({manufacturer:z,onClick:I}).key(z.id)):B.style`opacity:0.7;`("No manufacturers found. Use Add Manufacturer to create the first one.")),_.style`margin-top:1em;display:flex;gap:0.75em;flex-wrap:wrap;`(j.href`../admin/games.html`.class`admin-secondary-button`("Games Admin"))),M=>r?U0({isEditing:!!s,editManufacturer:i,errorMessage:c,fieldErrors:u,isSaving:o,isDeleting:l,onChange:z=>{var P,O;i=z,u={...u,id:(P=z.id)!=null&&P.trim()?"":u.id,name:(O=z.name)!=null&&O.trim()?"":u.name}},onSave:S,onDelete:R,onCancel:k}):""))}),AS=t=>[...t].sort((e,n)=>String(e.name||"").localeCompare(String(n.name||""),void 0,{sensitivity:"base"})),O0=F(({manufacturer:t,onClick:e})=>(O0.inputs(n=>{[{manufacturer:t,onClick:e}]=n,e=Q(e)}),q.type`button`.class`admin-crud-row`.onClick(()=>e(t))(n=>t.logoUrl?X.class`admin-crud-thumb`.src`${t.logoUrl}`.attr("alt",r=>t.name||"Manufacturer logo"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`(r=>CS(t.name)),_(zn(n=>t.name||"Untitled manufacturer"),_.style`margin-top:0.15em;opacity:0.74;`(B(n=>t.opinions||"No opinions"))),B.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Manufacturer ID"),Z(n=>t.id))))),CS=(t="")=>(t.trim().charAt(0)||"M").toUpperCase(),F0=t=>`${t} manufacturer logo`,RS=t=>`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(F0(t))}`,U0=F(({isEditing:t,editManufacturer:e,errorMessage:n,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:l,onDelete:c,onCancel:u})=>{U0.inputs(I=>{[{isEditing:t,editManufacturer:e,errorMessage:n,fieldErrors:r,isSaving:s,isDeleting:i,onChange:o,onSave:l,onDelete:c,onCancel:u}]=I,o=Q(o),l=Q(l),c=Q(c),u=Q(u)});const h=I=>o({...e,...I}),f=I=>r[I]?"#f87171":"rgba(255,255,255,0.2)",m=I=>r[I]?"#fca5a5":"inherit",E=I=>{var k;I.key!=="Enter"||I.shiftKey||I.metaKey||I.ctrlKey||I.altKey||String(((k=I.target)==null?void 0:k.tagName)||"").toLowerCase()!=="textarea"&&(I.preventDefault(),l())};return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`.onKeyDown(E)(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(Be.style`margin:0;`(t?"Edit Manufacturer":"Add Manufacturer"),B.style`opacity:0.72;`("Manage the canonical manufacturer record.")),q.type`button`.class`admin-secondary-button`.onClick(u)("Cancel")),I=>n?se.style`color:#f6c177;`(n):"",I=>Object.values(r).filter(Boolean).length?_.style`border:1px solid rgba(248,113,113,0.5);background:rgba(127,29,29,0.25);border-radius:0.55em;padding:0.6em;margin-top:0.75em;color:#fecaca;display:grid;gap:0.2em;`(Object.values(r).filter(Boolean).map(k=>B(k))):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(I=>t?[re.attr("style.color",k=>m("id"))("Manufacturer ID"),_.style`display:grid;gap:0.28em;`(le.type`text`.value(k=>e.id||"").onInput(k=>{var D;h({id:((D=k==null?void 0:k.target)==null?void 0:D.value)||""})}).attr("aria-invalid",k=>r.id?"true":"false").attr("title",k=>r.id||"").attr("style.borderColor",k=>f("id"))(),B.style`color:#f6c177;line-height:1.35;`("Changing this value can change or break links to this manufacturer."))]:"",re.attr("style.color",I=>m("name"))("Manufacturer Name"),le.type`text`.value(I=>e.name||"").onInput(I=>{var k;h({name:((k=I==null?void 0:I.target)==null?void 0:k.value)||""})}).attr("aria-invalid",I=>r.name?"true":"false").attr("title",I=>r.name||"").attr("style.borderColor",I=>f("name"))(),re("Logo URL"),_.style`display:grid;gap:0.5em;`(le.type`url`.value(I=>e.logoUrl||"").onInput(I=>{var k;h({logoUrl:((k=I==null?void 0:I.target)==null?void 0:k.value)||""})})(),I=>(e.name||"").trim()?j.href`${RS(e.name||"")}`.class`admin-inline-edit-link`.attr("target","_blank").attr("rel","noopener noreferrer").style`justify-self:start;`.attr("title",k=>F0(e.name||""))("google images"):B.style`opacity:0.72;`("Add a manufacturer name to view Google Images.")),re("Opinions"),As.value(I=>e.opinions||"").onInput(I=>{var k;h({opinions:((k=I==null?void 0:I.target)==null?void 0:k.value)||""})})()),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",I=>s?"disabled":null).onClick(l)(I=>s?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",I=>s?"disabled":null).onClick(u)("Cancel")),I=>t?q.type`button`.class`admin-danger-button`.attr("disabled",k=>i?"disabled":null).onClick(c)(k=>i?"🗑️ Deleting...":"🗑️ Delete"):"")))}),oc=()=>({shortName:"",longName:""});let ac=!1,Kr=null,Tn=null,In=null;const dx=Gn(t=>$0(t)),$0=F(t=>{$0.inputs(([b])=>{t=Q(b)});let e=Kr,n=!1,r=null,s=oc(),i=!1,o=!1,l="",c=!1,u=null,h=null;const f=me(()=>{}),m=()=>dt().then(t).catch(b=>console.error("Failed to sign out",b)),E=()=>{Tn==null||Tn(),In==null||In(),e=null,Kr=null;const b=nl();Tn=(b==null?void 0:b.unsubscribe)||null;const g=b.subscribe(y=>{Array.isArray(y)&&(e=y,Kr=e,f())});In=()=>g.unsubscribe()},I=()=>Pk().then(b=>{e=b,Kr=e,f()}),k=()=>{r=null,s={...oc(),order:(e||[]).length},l="",n=!0,f()},D=b=>{r=b.id,s={id:b.id,shortName:b.shortName||"",longName:b.longName||"",order:b.order},l="",n=!0,f()},S=()=>{i||o||(n=!1,r=null,s=oc(),f())},R=()=>{const b={};s.shortName.trim()||(b.shortName="Short form is required."),s.longName.trim()||(b.longName="Long form is required.");const g=(s.id||"").trim();if(r&&!g&&(b.id="Tier ID is required."),r&&g.includes("/")&&(b.id="Tier ID cannot include /."),r&&g!==r&&(e||[]).some(v=>v.id===g)&&(b.id="A tier with this ID already exists."),l=Object.values(b)[0]||"",l||i)return f();i=!0,f();const y={...s,id:r?g:void 0};F.promise=Vk(y).then(()=>r&&g!==r?Sp(r):void 0).then(()=>(i=!1,S(),I())).catch(v=>{console.error("Failed to save game tier",v),l="Failed to save game tier.",f()}).finally(()=>{i=!1,f()})},M=()=>{!r||o||!confirm("Delete this game tier? Existing games may still reference it.")||(o=!0,f(),F.promise=Sp(r).then(()=>(o=!1,S(),I())).catch(b=>{console.error("Failed to delete game tier",b),l="Failed to delete game tier.",f()}).finally(()=>{o=!1,f()}))},z=()=>{document.querySelectorAll('[data-tier-drop-target="true"]').forEach(b=>{b.removeAttribute("data-tier-drop-target"),b.style.boxShadow=""})},P=(b,g)=>{if(!e)return;const y=[...e],v=y.findIndex(C=>C.id===b);if(v<0)return;const[A]=y.splice(v,1);y.splice(Math.max(0,Math.min(g,y.length)),0,A),!y.every((C,T)=>{var W;return C.id===((W=e==null?void 0:e[T])==null?void 0:W.id)})&&(e=y.map((C,T)=>({...C,order:T})),Kr=e,u=null,c=!0,l="",f(),F.promise=Nk(y.map(C=>C.id)).catch(C=>(console.error("Failed to save game tier order",C),l="The new tier order could not be saved. Please try again.",I())).finally(()=>{c=!1,f()}))},O=(b,g)=>{if(c||b.button!==0)return;b.preventDefault();const y=b.currentTarget.closest("[data-tier-id]"),v=y==null?void 0:y.closest("[data-tier-list]");if(!y||!v)return;h==null||h(),u=null;const A=y.getBoundingClientRect(),C=v.getBoundingClientRect(),T=b.clientY-A.top,W=y.cloneNode(!0);W.removeAttribute("data-tier-id"),W.style.position="fixed",W.style.left=`${C.left}px`,W.style.width=`${C.width}px`,W.style.height=`${A.height}px`,W.style.margin="0",W.style.zIndex="10000",W.style.pointerEvents="none",W.style.opacity="0.92",W.style.boxSizing="border-box",W.style.boxShadow="0 12px 30px rgba(0,0,0,0.5)",document.body.appendChild(W),y.style.opacity="0.28";const Ne=et=>{const ht=Math.max(C.top,Math.min(et-T,C.bottom-A.height));W.style.top=`${ht}px`},Zi=et=>{z();const ht=Array.from(v.querySelectorAll("[data-tier-id]")).filter(ln=>ln!==y),bt=ht.findIndex(ln=>et<ln.getBoundingClientRect().top+ln.getBoundingClientRect().height/2);u=bt<0?ht.length:bt;const an=bt<0?ht[ht.length-1]:ht[bt];an&&(an.setAttribute("data-tier-drop-target","true"),an.style.boxShadow=bt<0?"inset 0 -4px 0 #f6c177":"inset 0 4px 0 #f6c177")},eo=()=>{z(),W.remove(),y.style.opacity="",window.removeEventListener("pointermove",Wn),window.removeEventListener("pointerup",Jn),window.removeEventListener("pointercancel",Fs),h=null},Wn=et=>{et.preventDefault(),Ne(et.clientY),Zi(Math.max(C.top,Math.min(et.clientY,C.bottom)))},Jn=et=>{const ht=et.clientX>=C.left&&et.clientX<=C.right&&et.clientY>=C.top&&et.clientY<=C.bottom,bt=u;eo(),u=null,ht&&bt!==null&&P(g,bt)},Fs=()=>{eo(),u=null};h=Fs,Ne(b.clientY),Zi(b.clientY),window.addEventListener("pointermove",Wn,{passive:!1}),window.addEventListener("pointerup",Jn),window.addEventListener("pointercancel",Fs)};return ac||(ac=!0,E()),Bt(()=>{h==null||h(),Tn==null||Tn(),In==null||In(),Tn=null,In=null,Kr=null,ac=!1}),ve(He(()=>Rt(m)),_.class`admin-crud-page`(_.class`admin-crud-header`(Be("🏷️ Game Tiers Database"),q.type`button`.class`admin-pill-button`.onClick(k)("Add")),_.class`admin-crud-card`(se.style`margin-top:0;opacity:0.78;`("Manage edition abbreviations and their full names. Drag the handle to reorder tiers."),b=>c?se.style`color:#f6c177;`("Saving tier order..."):"",b=>l&&!n?se.style`color:#f87171;`(l):"",_.class`admin-crud-list`.attr("data-tier-list","true")(b=>e===null?B.style`opacity:0.7;`("Loading game tiers..."):e.length?e.map(g=>_.class`admin-crud-row`.attr("data-tier-id",g.id)(q.type`button`.attr("aria-label",`Drag ${g.shortName||"tier"} to reorder`).attr("title","Drag to reorder").style`cursor:grab;font-size:1.35em;background:transparent;border:0;color:inherit;padding:0.5em;touch-action:none;user-select:none;`.onPointerDown(y=>O(y,g.id))("☰"),q.type`button`.style`display:contents;color:inherit;`.onClick(()=>D(g))(_.class`admin-crud-thumb admin-crud-thumb-placeholder`(y=>g.shortName||"?"),_(zn(y=>g.shortName||"Untitled tier"),_.style`margin-top:0.15em;opacity:0.74;`(B(y=>g.longName||"No long form"))))).key(`${g.id}-${g.order??"unordered"}`)):B.style`opacity:0.7;`("No game tiers found. Use Add to create the first one.")),_.style`margin-top:1em;`(j.href`/admin/games.html`.class`admin-secondary-button`("Games Admin"))),b=>n?_.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`(_.style`display:flex;justify-content:space-between;gap:1em;`(Be.style`margin:0;`(r?"Edit Game Tier":"Add Game Tier"),q.type`button`.class`admin-secondary-button`.onClick(S)("Cancel")),g=>l?se.style`color:#f6c177;`(l):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(g=>r?[re("Tier ID"),le.type`text`.value(y=>s.id||"").onInput(y=>{s={...s,id:y.target.value},f()})()]:"",re("Short Form"),le.type`text`.placeholder`LE`.value(g=>s.shortName).onInput(g=>{s={...s,shortName:g.target.value},f()})(),re("Long Form"),le.type`text`.placeholder`Limited Edition`.value(g=>s.longName).onInput(g=>{s={...s,longName:g.target.value},f()})()),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;`(q.type`button`.class`admin-pill-button`.onClick(R)(g=>i?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.onClick(S)("Cancel")),g=>r?q.type`button`.class`admin-danger-button`.onClick(M)(y=>o?"🗑️ Deleting...":"🗑️ Delete"):""))):""))});let Bp=!1,Ao=null;const hx=Gn(t=>B0(t)),B0=F(t=>{let e=Ao||Date.now(),{date:n,time:r}=Mp(Number(e));B0.inputs(([l])=>{t=Q(l)});function s(){const l=Mp(Number(e));n=l.date,r=l.time}Bp||(Bp=!0,F.promise=tl().then(l=>{typeof l=="number"&&(e=l,Ao=l,s(),console.log("nextMeetupDate",{nextMeetupDate:e}))}).catch(l=>{console.error("Failed to load next meetup date",l)}));const i=()=>dt().then(t).catch(l=>{console.error("Failed to sign out",l)}),o=()=>vk(Number(e)).then(()=>{Ao=Number(e),alert("saved")}).catch(l=>{console.error("Failed to save meetup date",l)});return ve(He(()=>Rt(i)),_.class`admin-crud-page`(_.class`admin-crud-header`(Be(X.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,"📅 Meeting Tools")),_.class`admin-crud-card`(l=>g0({nextMeetupDate:e,date:n,time:r,onDate:c=>{e=c,Ao=c,s()},onSave:o}))))}),kS="https://pinside.com/pinball/community/pinsiders/thecapn/collection/history",lc=()=>({gameId:"",title:"",dateAddedToCollection:"",dateRemovedFromCollection:"",notes:"",isVisible:!0,pinsideUrl:"",pinsideId:"",source:""});let cc=!1,ai=null,lr=null,Qr=null,li=null,cr=null,Yr=null;const fx=Gn(t=>j0(t)),j0=F(t=>{j0.inputs(([T])=>{t=Q(T)});const e=()=>dt().then(t).catch(T=>console.error("Failed to sign out",T));let n=!1,r=!1,s=!1,i="",o="",l="",c=!1,u={},h=!1,f=null,m=lc(),E=ai,I=li;const k=me(()=>{}),D=()=>{lr&&lr(),Qr&&Qr(),E=null,ai=null,i="",k();const T=Hk();lr=(T==null?void 0:T.unsubscribe)||null;const W=T.subscribe(Ne=>{E=Ne,ai=Ne,k()});Qr=()=>W.unsubscribe()},S=()=>{cr&&cr(),Yr&&Yr(),I=null,li=null,k();const T=Ms();cr=(T==null?void 0:T.unsubscribe)||null;const W=T.subscribe(Ne=>{I=Ne,li=Ne,k()});Yr=()=>W.unsubscribe()},R=()=>r0().then(T=>{E=T,ai=T,k()}).catch(T=>{console.error("Failed to refresh past owned games list",T),i="Saved, but failed to refresh the game list. Reload the page to confirm.",k()}),M=()=>Ad().then(T=>{I=T,li=T,k()}).catch(T=>{console.error("Failed to refresh games library",T),i="Saved, but failed to refresh the games library. Reload the page to confirm.",k()}),z=()=>{f=null,m=lc(),i="",u={},h=!0,k()},P=T=>{f=T.id,m={id:T.id,gameId:T.gameId||"",title:"",dateAddedToCollection:tu(T.dateAddedToCollection),dateRemovedFromCollection:tu(T.dateRemovedFromCollection),imageUrl:T.imageUrl||"",manufacturer:T.manufacturer||"",yearReleased:Hp(T.yearReleased),notes:T.notes||"",isVisible:T.isVisible!==!1,pinsideUrl:T.pinsideUrl||"",pinsideId:T.pinsideId||"",source:T.source||""},i="",u={},h=!0,k()},O=()=>{n||r||(f=null,m=lc(),i="",u={},h=!1,k())},b=()=>{const T={};return m.gameId||(T.gameId="Game is required."),m.yearReleased!==null&&typeof m.yearReleased<"u"&&Number.isNaN(Number(m.yearReleased))&&(T.yearReleased="Year must be numeric."),u=T,Object.values(T)[0]||""},g=()=>{if(n)return;const T=b();if(T){i=T,k();return}n=!0,i="",u={},k(),F.promise=s0({...m,id:f||void 0,gameId:(m.gameId||"").trim(),title:"",imageUrl:(m.imageUrl||"").trim(),manufacturer:(m.manufacturer||"").trim(),notes:(m.notes||"").trim(),pinsideUrl:(m.pinsideUrl||"").trim(),pinsideId:(m.pinsideId||"").trim(),source:(m.source||"").trim(),yearReleased:Hp(m.yearReleased),isVisible:m.isVisible!==!1}).then(()=>(n=!1,O(),R())).catch(W=>{console.error("Failed to save past owned game",W),i="Failed to save game. Check the fields and try again.",k()}).finally(()=>{n=!1,k()})},y=()=>{!f||r||confirm("Delete this past owned game?")&&(r=!0,i="",k(),F.promise=Gk(f).then(()=>(r=!1,O(),R())).catch(T=>{console.error("Failed to delete past owned game",T),i="Failed to delete game.",k()}).finally(()=>{r=!1,k()}))},v=T=>{if(!T.length){o="No Pinside games were found. Paste the copied Pinside history text and try again.",k();return}s=!0,o=`Found ${T.length} Pinside game${T.length===1?"":"s"}. Syncing new items only...`,k(),F.promise=Wk(T,I||[]).then(W=>(o=`Sync complete. Added ${W.added}; skipped ${W.skipped} already-present item${W.skipped===1?"":"s"}.`,M().then(R))).catch(W=>{console.error("Failed to sync Pinside games",W),o="Sync failed while writing to Firestore. Check permissions and try again.",k()}).finally(()=>{s=!1,k()})},A=()=>{const T=NS(l);v(T)},C=()=>{c=!c,k()};return cc||(cc=!0,lr||D(),cr||S()),Bt(()=>{lr&&lr(),Qr&&Qr(),cr&&cr(),Yr&&Yr(),lr=null,Qr=null,cr=null,Yr=null,cc=!1,ai=null,li=null}),ve(He(()=>Rt(e)),_.class`admin-crud-page`(_.class`admin-crud-header`(Be("📜 Past Games Owned"),_.style`display:flex;gap:0.75em;align-items:center;flex-wrap:wrap;`(B.style`opacity:0.72;`(T=>E===null?"Loading count...":`${E.length} past game${E.length===1?"":"s"}`),q.type`button`.class`admin-pill-button`.onClick(z)("Add"))),_.class`admin-crud-card`.style`margin-bottom:1em;`(_.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(q.type`button`.class`admin-secondary-button`.attr("aria-expanded",T=>c?"true":"false").onClick(C)("Pinside Sync")),T=>c?_.style`margin-top:0.9em;`(se.style`margin-top:0;opacity:0.78;`("Paste copied Pinside history text to add missing past-owned games. Imported games are created in the games database and linked here."),_.style`display:flex;gap:0.75em;flex-wrap:wrap;align-items:center;`(j.href`${kS}`.class`admin-secondary-button`.attr("target","_blank").attr("rel","noopener noreferrer")("Open Pinside History"),q.type`button`.class`admin-pill-button`.attr("disabled",W=>s?"disabled":null).onClick(A)("Sync Pasted Text")),W=>o?se.style`color:#f6c177;`(o):"",As.placeholder`Paste copied Pinside history text here.`.value(W=>l).onInput(W=>{var Ne;l=((Ne=W==null?void 0:W.target)==null?void 0:Ne.value)||"",k()}).style`margin-top:0.8em;width:100%;min-height:120px;`()):""),_.class`admin-crud-card`(se.style`margin-top:0;opacity:0.78;`("Manage the Firestore pastOwnedGames collection."),T=>i&&!h?se.style`color:#f6c177;`(i):"",_.class`admin-crud-list`(T=>E===null?B.style`opacity:0.7;`("Loading games..."):E.length?VS(E).map(W=>z0({game:SS(W,I||[]),onClick:P}).key(W.id)):B.style`opacity:0.7;`("No past owned games found. Use Add or paste Pinside history text."))),T=>h?H0({isEditing:!!f,editGame:m,gameLibrary:I||[],isGameLibraryLoaded:I!==null,errorMessage:i,fieldErrors:u,isSaving:n,isDeleting:r,onChange:W=>{m=W,u={...u,gameId:W.gameId?"":u.gameId},k()},onSave:g,onDelete:y,onCancel:O}):""))}),z0=F(({game:t,onClick:e})=>(z0.inputs(n=>{[{game:t,onClick:e}]=n,e=Q(e)}),q.type`button`.class`admin-crud-row`.onClick(()=>e(t))(n=>t.imageUrl?X.class`admin-crud-thumb`.src`${t.imageUrl}`.attr("alt",r=>t.title||"Game image"):_.class`admin-crud-thumb admin-crud-thumb-placeholder`("PB"),_(zn(n=>t.title||"Untitled game"),_.style`margin-top:0.15em;opacity:0.74;`(B(n=>[t.manufacturer||"",t.yearReleased?String(t.yearReleased):""].filter(Boolean).join(" · ")||"No manufacturer/year",n=>t.gameId&&t.isMissingGame?Z.style`color:#f87171;font-weight:700;`(` · Missing game: ${t.gameId}`):"",n=>t.source==="pinside"?" · Pinside":""))),B.style`opacity:0.62;text-align:right;display:grid;gap:0.1em;`(Z.style`font-size:0.78em;text-transform:uppercase;`("Past Owned"),Z(n=>[qp(t.dateAddedToCollection),t.dateRemovedFromCollection?` to ${qp(t.dateRemovedFromCollection)}`:"",t.isVisible===!1?" · Hidden":""].join("")))))),SS=(t,e)=>{const n=xS(e,t);return{...t,title:(n==null?void 0:n.title)||t.title||t.sourceTitle||"",imageUrl:PS(n,t),manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null,isMissingGame:!!(t.gameId&&!n)}},xS=(t,e)=>uc(t,e.gameId)||uc(t,e.title)||uc(t,e.sourceTitle)||null,uc=(t,e)=>{const n=eu(e),r=dc(e);return n&&(t.find(s=>s.id===e)||t.find(s=>eu(s.id)===n)||t.find(s=>dc(s.id)===r)||t.find(s=>dc(s.title)===r))||null},eu=t=>String(t||"").trim().toLowerCase(),dc=t=>eu(t).replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),PS=(t,e)=>String((t==null?void 0:t.imageUrl)||(t==null?void 0:t.gameImageUrl)||(t==null?void 0:t.backglassUrl)||(t==null?void 0:t.image)||e.imageUrl||e.gameImageUrl||e.backglassUrl||e.image||"").trim(),VS=t=>[...t].sort((e,n)=>{const r=(e.gameId||"").localeCompare(n.gameId||"",void 0,{sensitivity:"base"});return r||(e.id||"").localeCompare(n.id||"",void 0,{sensitivity:"base"})}),H0=F(({isEditing:t,editGame:e,gameLibrary:n,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:l,onChange:c,onSave:u,onDelete:h,onCancel:f})=>{H0.inputs(E=>{[{isEditing:t,editGame:e,gameLibrary:n,isGameLibraryLoaded:r,errorMessage:s,fieldErrors:i,isSaving:o,isDeleting:l,onChange:c,onSave:u,onDelete:h,onCancel:f}]=E,c=Q(c),u=Q(u),h=Q(h),f=Q(f)});const m=E=>{c({...e,...E})};return _.class`admin-crud-modal-backdrop`(_.class`admin-crud-modal`(_.style`display:flex;justify-content:space-between;gap:1em;align-items:flex-start;`(_(Be.style`margin:0;`(t?"Edit Past Game":"Add Past Game"),B.style`opacity:0.72;`(t?"Update this past owned entry.":"Create a new past owned entry.")),q.type`button`.class`admin-secondary-button`.onClick(f)("Cancel")),E=>s?se.style`color:#f6c177;`(s):"",_.class`admin-crud-form-grid`.style`margin-top:1em;`(re("Game"),E=>il({value:e.gameId||"",games:n,isLoaded:r,fieldError:i.gameId,onChange:I=>m({gameId:I})}).key(`${r?"loaded":"loading"}-${n.length}`),re("Date Added to Collection"),le.type`date`.value(E=>e.dateAddedToCollection||"").onInput(E=>{var I;m({dateAddedToCollection:((I=E==null?void 0:E.target)==null?void 0:I.value)||""})})(),re("Date Removed from Collection"),le.type`date`.value(E=>e.dateRemovedFromCollection||"").onInput(E=>{var I;m({dateRemovedFromCollection:((I=E==null?void 0:E.target)==null?void 0:I.value)||""})})(),re("Pinside URL"),le.type`url`.value(E=>e.pinsideUrl||"").onInput(E=>{var I;m({pinsideUrl:((I=E==null?void 0:E.target)==null?void 0:I.value)||""})})(),re("Notes"),As.value(E=>e.notes||"").onInput(E=>{var I;m({notes:((I=E==null?void 0:E.target)==null?void 0:I.value)||""})})(),re("Visible on public page"),re.style`display:flex;gap:0.5em;align-items:center;`(le.type`checkbox`.attr("checked",E=>e.isVisible!==!1?"checked":null).onChange(E=>{var I;m({isVisible:!!((I=E==null?void 0:E.target)!=null&&I.checked)})})(),Z(E=>e.isVisible!==!1?"Visible":"Hidden"))),_.class`admin-crud-modal-actions`(_.style`display:flex;gap:0.7em;flex-wrap:wrap;`(q.type`button`.class`admin-pill-button`.attr("disabled",E=>o?"disabled":null).onClick(u)(E=>o?"Saving...":"Save"),q.type`button`.class`admin-secondary-button`.attr("disabled",E=>o?"disabled":null).onClick(f)("Cancel")),E=>t?q.type`button`.class`admin-danger-button`.attr("disabled",I=>l?"disabled":null).onClick(h)(I=>l?"🗑️ Deleting...":"🗑️ Delete"):"")))}),NS=t=>{if(!t.trim())return[];const e=DS(t);return e.length?e:MS(t)},DS=t=>{const e=new DOMParser().parseFromString(t,"text/html"),n=Array.from(e.querySelectorAll('a[href*="/pinball/machine/"]')),r=new Map;return n.forEach(s=>{var I;const i=q0(s.textContent||s.getAttribute("title")||"");if(!i||i.length<2)return;const o=s.getAttribute("href")||"",l=o.startsWith("http")?o:`https://pinside.com${o}`,c=s.closest("tr, li, article, .game, .machine, .collection-item")||s.parentElement,u=c==null?void 0:c.querySelector("img"),h=(u==null?void 0:u.getAttribute("src"))||(u==null?void 0:u.getAttribute("data-src"))||"",m=((c==null?void 0:c.textContent)||"").match(/\b(19\d{2}|20\d{2})\b/),E=((I=l.split("/pinball/machine/")[1])==null?void 0:I.split(/[/?#]/)[0])||"";r.set(l,{title:i,pinsideUrl:l,pinsideId:E,imageUrl:h.startsWith("//")?`https:${h}`:h,yearReleased:m?Number(m[1]):null})}),[...r.values()].sort((s,i)=>s.title.localeCompare(i.title,void 0,{sensitivity:"base"}))},MS=t=>{const e=t.split(/\r?\n/).map(s=>s.trim()).filter(Boolean),n=[];let r=0;for(;r<e.length;){const s=q0(e[r]||""),i=e[r+1]||"",o=jp(i);if(!s||!o){r+=1;continue}const l={title:s,manufacturer:o.manufacturer,yearReleased:o.yearReleased};for(r+=2;r<e.length;){const c=e[r];if(jp(e[r+1]||"")&&!LS(c))break;const h=zp(c,"Purchased"),f=zp(c,"Sold");h?l.dateAddedToCollection=h:f&&(l.dateRemovedFromCollection=f),r+=1}n.push(l)}return n},jp=t=>{const e=t.match(/^(.+),\s*(19\d{2}|20\d{2})$/);return e?{manufacturer:e[1].trim(),yearReleased:Number(e[2])}:null},LS=t=>/^(Purchased|Sold)\s+[A-Za-z]+\s+\d{4}$/i.test(t),zp=(t,e)=>{const n=t.match(new RegExp(`^${e}\\s+([A-Za-z]+)\\s+(\\d{4})$`,"i"));if(!n)return"";const r=OS.findIndex(s=>s.toLowerCase()===n[1].toLowerCase());return r<0?"":`${n[2]}-${String(r+1).padStart(2,"0")}-01`},OS=["January","February","March","April","May","June","July","August","September","October","November","December"],q0=t=>t.replace(/\s+/g," ").replace(/\b(details|machine|view)\b/gi,"").trim(),Hp=t=>{if(typeof t=="number"&&!Number.isNaN(t))return t;if(t===""||t===null||typeof t>"u")return null;const e=Number(t);return Number.isNaN(e)?null:e},tu=t=>t?typeof t=="string"?t.slice(0,10):typeof t.toDate=="function"?t.toDate().toISOString().slice(0,10):t.seconds?new Date(t.seconds*1e3).toISOString().slice(0,10):"":"",qp=t=>{const e=tu(t);if(!e)return"No date";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})};let Co=null;const FS=()=>window.QRCode?Promise.resolve():Co||(Co=new Promise((t,e)=>{const n=document.createElement("script");n.type="text/javascript",n.src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",n.onload=()=>t(),n.onerror=()=>e(new Error("Failed to load QRCode library")),document.head.appendChild(n)}),Co),G0=F(t=>{const e=`qr-code-${Math.random().toString(36).slice(2,12)}`,n=()=>{window.requestAnimationFrame(s)},r=()=>{const i=window.QRCode;if(!i||!t)return;const o=document.getElementById(e);o&&(o.innerHTML="",new i(o,{text:t,width:300,height:300,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.CorrectLevel.L}))},s=()=>{FS().then(r).catch(i=>{console.error("Failed to render QR code",i)})};return G0.updates(i=>{i[0]!==t&&([t]=i,n())}),Ym([t],n),_.id`${e}`.attr("oninit",n).style`display:flex;justify-content:center;align-items:center;margin-top:1em;min-height:300px;`()}),W0=F(({qrUrl:t,onQrUrlChange:e})=>{W0.inputs(r=>{[{qrUrl:t,onQrUrlChange:e}]=r,e=Q(e)});const n=r=>{t=r,e(r)};return Aa.style`border:0;padding:0;margin:0;`(le.type`text`.placeholder`paste website address`.value(r=>t).maxLength`1000`.onInput(r=>{n(r.target.value)}),_.style`display:flex;flex-direction:column;align-items:center;gap:0.5em;`(r=>(console.log("qrUrl check display",{qrUrl:t}),t&&G0(t)),r=>t&&B.style`max-width:300px;overflow-wrap:anywhere;text-align:center;opacity:0.75;line-height:1.3;`(s=>t)))}),px=Gn(t=>J0(t)),J0=F(t=>{let e=new URLSearchParams(window.location.search).get("url")||"";J0.inputs(([r])=>{t=Q(r)});const n=()=>dt().then(t).catch(r=>{console.error("Failed to sign out",r)});return ve(He(()=>Rt(n)),_.class`admin-crud-page`(_.class`admin-crud-header`(Be(X.src`../assets/media/icon.png`.style`width:40px;margin-right:10px;`,"🔗 QR Maker")),_.class`admin-crud-card`(r=>W0({qrUrl:e,onQrUrlChange:s=>{e=s,console.log("set qrUrl",{qrUrl:e})}}))))}),Ls=F(()=>[j.href`/index.html`.class`top-nav-pill`("🏠"),j.href`/meetup.html`.class`top-nav-pill`("🗓️ meetups"),j.href`/lineup.html`.class`top-nav-pill`("⚪️ games"),j.href`/ratings.html`.class`top-nav-pill`("⭐ ratings"),j.href`/index.html#links`.class`top-nav-pill`("🔗 links"),j.href`/index.html#merch`.class`top-nav-pill`("👕 merch & more"),j.href`/index.html#youtube`.class`top-nav-pill`("📺 youtube"),j.href`/index.html#awards`.class`top-nav-pill`("🏆 awards"),j.href`/admin.html`.class`top-nav-pill`("👤")]);let Gp=!1;const US=F(()=>Gp?"":(Gp=!0,Ft(`
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
  `))),Os=F(()=>ve(US(),_.class`public-footer`(_.class`public-footer-inner`(j.href`mailto:hardypinball@gmail.com?subject=website contact&body=Hello, found your email through your website%0A%0A%0A`("📧 hardypinball@gmail.com"),j.href`#top`.onClick(t=>{t.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})("⬆️ Top")))));let hc=!1,En=null,ur=null,dr=null,hr=null,fr=null,pr=null,mr=null,gr=null;const mx=F((t=null,e=null,n=null,r=null,s=me(()=>{}))=>{const i=()=>{En&&(En(),En=null),ur&&(ur(),ur=null),dr&&(dr(),dr=null),hr&&(hr(),hr=null),fr&&(fr(),fr=null),pr&&(pr(),pr=null),mr&&(mr(),mr=null),gr&&(gr(),gr=null);const o=$k();En=(o==null?void 0:o.unsubscribe)||null;const l=o.subscribe(I=>{t=I,console.debug("Visible current lineup games",{count:(I==null?void 0:I.length)||0,games:I}),s()});ur=()=>l.unsubscribe();const c=qk();dr=(c==null?void 0:c.unsubscribe)||null;const u=c.subscribe(I=>{e=I,console.debug("Visible past owned games",{count:(I==null?void 0:I.length)||0,games:I}),s()});hr=()=>u.unsubscribe();const h=Ms();fr=(h==null?void 0:h.unsubscribe)||null;const f=h.subscribe(I=>{n=I,console.debug("Current lineup game library",{count:(I==null?void 0:I.length)||0,games:I}),s()});pr=()=>f.unsubscribe();const m=nl();mr=(m==null?void 0:m.unsubscribe)||null;const E=m.subscribe(I=>{Array.isArray(I)&&(r=I,s())});gr=()=>E.unsubscribe()};return hc||(hc=!0,En||i()),Bt(()=>{En&&(En(),En=null),ur&&(ur(),ur=null),dr&&(dr(),dr=null),hr&&(hr(),hr=null),fr&&(fr(),fr=null),pr&&(pr(),pr=null),mr&&(mr(),mr=null),gr&&(gr(),gr=null),hc=!1}),ve(He(()=>Ls()),Ft(`
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
    `),_.class`lineup-page`(_.class`lineup-brand-strip`(),_.class`lineup-hero`(Je.class`lineup-title`("Cary's Current Lineup"),se.class`lineup-subtitle`("A list of my current games.")),o=>{if(t===null||n===null||r===null)return _.class`lineup-results`(_.class`lineup-empty`("Loading current lineup..."));const l=r,c=t.filter(u=>u.isVisible!==!1).map(u=>$S(u,n||[]));return c.length?_.class`lineup-results`(_.class`lineup-grid`(c.map(u=>ru({game:u,detail:[Wp(u.tierId,l)?Z.class`lineup-tier-detail`(Wp(u.tierId,l)):"",`Collected ${HS(u.dateAddedToCollection)}`,GS(u)].filter(Boolean)}).key(u.id)))):_.class`lineup-results`(_.class`lineup-empty`("No current lineup games are visible yet."))},wg.class`lineup-section-break`(),Je.class`lineup-section-title`("Past Games Owned"),o=>{if(e===null||n===null)return _.class`lineup-results`(_.class`lineup-empty`("Loading past games..."));const l=e.filter(c=>c.isVisible!==!1).sort(BS).map(c=>jS(c,n||[]));return l.length?_.class`lineup-results`(_.class`lineup-grid`(l.map(c=>ru({game:c,detail:qS(c)}).key(`past-${c.id}`)))):_.class`lineup-results`(_.class`lineup-empty`("No past owned games are visible yet."))}),Os())}),$S=(t,e)=>{const n=fi(e,t.gameId);return{...t,title:(n==null?void 0:n.title)||t.title||"",imageUrl:K0(n,t),manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null}},Wp=(t,e)=>{if(!t)return"";const n=e.find(r=>r.id===t);return n&&(n.longName||n.shortName)||""},BS=(t,e)=>String(t.gameId||"").localeCompare(String(e.gameId||""),void 0,{sensitivity:"base"})||String(t.id||"").localeCompare(String(e.id||""),void 0,{sensitivity:"base"}),jS=(t,e)=>{const n=zS(e,t),r=Q0(t.gameId||t.id);return{...t,title:(n==null?void 0:n.title)||t.title||t.sourceTitle||r,imageUrl:K0(n,t),manufacturer:(n==null?void 0:n.manufacturer)||t.manufacturer||"",yearReleased:(n==null?void 0:n.yearReleased)??t.yearReleased??null}},zS=(t,e)=>fi(t,e.gameId)||fi(t,e.title)||fi(t,e.sourceTitle)||fi(t,Q0(e.gameId||e.id))||null,fi=(t,e)=>{const n=nu(e),r=fc(e);return n&&(t.find(s=>s.id===e)||t.find(s=>nu(s.id)===n)||t.find(s=>fc(s.id)===r)||t.find(s=>fc(s.title)===r))||null},nu=t=>String(t||"").trim().toLowerCase(),fc=t=>nu(t).replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),K0=(t,e)=>String((t==null?void 0:t.imageUrl)||(t==null?void 0:t.gameImageUrl)||(t==null?void 0:t.backglassUrl)||(t==null?void 0:t.image)||e.imageUrl||e.gameImageUrl||e.backglassUrl||e.image||"").trim(),Q0=t=>String(t||"").trim().replace(/[-_]+/g," ").replace(/\s+/g," ").replace(/\b\w/g,e=>e.toUpperCase()),ru=F(({game:t,detail:e})=>(ru.inputs(n=>{[{game:t,detail:e}]=n}),_.class`lineup-game-item bounce-in`(_.class`lineup-game-card`(n=>t.imageUrl?X.src`${t.imageUrl}`.attr("alt",t.title||"Pinball game"):_.class`lineup-placeholder`(Z(WS(t.title))),_.class`lineup-card-copy`(zn.class`lineup-card-title`(n=>t.title||"Untitled Game"))),B.class`lineup-card-date`(n=>Array.isArray(e)?e.map(r=>_(r)):e)))),Y0=t=>t?typeof t=="string"?t.slice(0,10):typeof t.toDate=="function"?t.toDate().toISOString().slice(0,10):t.seconds?new Date(t.seconds*1e3).toISOString().slice(0,10):"":"",HS=t=>{const e=Y0(t);if(!e)return"recently";const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?e:n.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})},qS=t=>{const e=su(t.dateAddedToCollection),n=su(t.dateRemovedFromCollection);if(!e||!n)return"Time not recorded";const r=Math.max(0,(n.getTime()-e.getTime())/(365.2425*24*60*60*1e3)),s=Math.floor(r);if(s>=1)return`${s} year${s===1?"":"s"} owned`;const i=Math.max(1,Math.round(r*12));return`${i} month${i===1?"":"s"} owned`},GS=t=>{const e=su(t.dateAddedToCollection);if(!e)return"Ownership date unknown";const n=Math.max(0,(Date.now()-e.getTime())/(365.2425*24*60*60*1e3));if(n<1)return"first year owned";const r=Math.floor(n);return`${r} year${r===1?"":"s"} owned`},WS=t=>{const e=String(t||"").trim().split(/\s+/).filter(Boolean);return e.length>=2?`${e[0][0]}${e[1][0]}`.toUpperCase():(e[0]||"PB").slice(0,2).toUpperCase()},su=t=>{const e=Y0(t);if(!e)return null;const n=new Date(`${e}T12:00:00`);return Number.isNaN(n.getTime())?null:n};let pc=!1,yr=null,Xr=null,Zr=null,es=null,mc=!1,gc=!1;const gx=F((t=null,e=null,n=me(()=>{}))=>{const r=()=>{yr&&yr(),Xr&&Xr(),Zr&&Zr(),es&&es();const s=Mk();let i=!1;yr=(s==null?void 0:s.unsubscribe)||null;const o=s.subscribe(h=>{if(!i&&t===null&&Array.isArray(h)&&!h.length){i=!0;return}i=!0,t=h,mc=!0,console.debug("Visible game ratings",{count:(h==null?void 0:h.length)||0,ratings:h}),n()});Xr=()=>o.unsubscribe();const l=Ms();let c=!1;Zr=(l==null?void 0:l.unsubscribe)||null;const u=l.subscribe(h=>{if(!c&&e===null&&Array.isArray(h)&&!h.length){c=!0;return}c=!0,e=h,gc=!0,console.debug("Game ratings library",{count:(h==null?void 0:h.length)||0,games:h}),n()});es=()=>u.unsubscribe()};return pc||(pc=!0,yr||r()),Bt(()=>{yr&&yr(),Xr&&Xr(),Zr&&Zr(),es&&es(),yr=null,Xr=null,Zr=null,es=null,pc=!1,mc=!1,gc=!1}),ve(He(()=>Ls()),Ft(`
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
    `),_.class`ratings-page`(_.class`ratings-brand-strip`(),_.class`ratings-hero`(Je.class`ratings-title`("Cary's Game Ratings")),s=>{if(!mc||!gc||t===null||e===null)return _.class`ratings-empty`("Loading game ratings...");const i=t.filter(o=>o.isVisible!==!1).map(o=>JS(o,e||[]));return i.length?_.class`ratings-grid`(i.map(o=>X0(o).key(o.id))):_.class`ratings-empty`("No public game ratings are visible yet.")}),Os())}),JS=(t,e)=>{const n=t.gameId||t.id;return{...t,gameId:n,game:e.find(r=>r.id===n)}},X0=F(t=>{X0.inputs(([o])=>{t=o});const e=t.game||{},n=String(e.title||"Untitled game"),r=QS(t),s=YS(r),i=s?r.filter(o=>o!==s).reverse():r.reverse();return _.class`rating-card bounce-in`(_.class`rating-card-media`(s?eb(s):_.class`rating-card-placeholder`(n.slice(0,2).toUpperCase())),_.class`rating-card-copy`(_.class`rating-summary`(_.class`rating-score`(typeof t.rating=="number"&&!Number.isNaN(t.rating)?Nd({rating:t.rating,size:108}):B.style`color:#f6c177;font-weight:900;`("Not rated")),_.class`rating-details`(e.title?B.class`rating-meta`([e.manufacturer||"",e.yearReleased?String(e.yearReleased):""].filter(Boolean).join(" - ")||"No manufacturer/year"):"",t.review?se.class`rating-review`(t.review):"")),i.length?KS(i):""))}),KS=t=>t.length?_.class`rating-videos`(t.map(e=>Z0(e).key(e.url))):"",QS=t=>Array.isArray(t.videos)?t.videos.filter(e=>!!(e!=null&&e.url)):[],YS=t=>[...t].reverse().find(e=>Dd(e.url))||null,Z0=F(t=>{Z0.inputs(([r])=>{t=r});const e=Dd(t.url),n=t.description||"Watch video";return _.class`rating-video`(e?eb(t):"",j.href`${t.url}`.class`rating-video-link`.attr("target","_blank").attr("rel","noopener noreferrer")(n))}),eb=t=>Tg.class`rating-video-frame`.attr("src",Dd(t.url)).attr("title",t.description||"Watch video").attr("loading","lazy").attr("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share").attr("allowfullscreen","")(),Dd=t=>{const e=XS(t);return e?`https://www.youtube.com/embed/${e}`:""},XS=t=>{try{const e=new URL(t),n=e.hostname.replace(/^www\./,"");if(n==="youtu.be")return yc(e.pathname.split("/").filter(Boolean)[0]);if(n==="youtube.com"||n==="m.youtube.com"){if(e.pathname==="/watch")return yc(e.searchParams.get("v")||"");const[r,s]=e.pathname.split("/").filter(Boolean);if(r==="embed"||r==="shorts"||r==="live")return yc(s)}}catch(e){console.warn("Invalid rating video URL",{url:t,error:e})}return""},yc=(t="")=>/^[a-zA-Z0-9_-]{6,}$/.test(t)?t:"";let Jp=!1;const yx=F((t=0,e=!0,n=!1,r=!1,s=!1,i=!1,o=!1,l=Date.now()-1e3,c=me(()=>{}),u=me(()=>{}),h=()=>{n=!n,c()},f=()=>{r=!r,c()},m=()=>{s=!s,c()},E=()=>{i=!i,c()},I=()=>{o=!o,c()},k=setTimeout(me(()=>e=!1),5e3),D=!Jp&&(()=>{Jp=!0,F.promise=tl().then(S=>{typeof S=="number"&&(l=S,u())}).catch(S=>{console.error("Failed to load next meetup date",S)})})())=>_(He(()=>Ls()),_(_.style`
      width: 100%;
      height: 175px;
      background-image: url('assets/media/youtube-channel-banner.jpg');
      background-size: contain;
      background-position: top center;
      background-repeat: repeat-x;
    `,Ft(`
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
    `),X.attr("src","assets/media/sticker.png").class`sticker-callout`.style`transition: opacity 0.5s ease;`.attr("style.opacity",S=>e?1:0).onClick(()=>window.scrollTo({top:document.querySelector(".merch-section").offsetTop,behavior:"smooth"})).attr("alt","Super Wow Limited Edition"),_.onClick(()=>++t)(Ft(`
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
      `),_.class`bounce-in`.style`--fx-index:5;`(_.class`carousel-3d-wrapper`(_.class`carousel-3d`(_.class`carousel-3d-item`(X.attr("src","assets/media/unnamed.jpg").attr("alt","Cary Hardy")),_.class`carousel-3d-item`(X.attr("src","assets/media/Cary-Hardy.jpg").attr("alt","Cary Hardy")),_.class`carousel-3d-item`(X.attr("src","assets/media/cool_shots/CH_chill.jpg").attr("alt","Cary Hardy Chill")),_.class`carousel-3d-item`(X.attr("src","assets/media/cool_shots/CH_kong.jpg").attr("alt","Cary Hardy Kong")),_.class`carousel-3d-item`(X.attr("src","assets/media/cool_shots/CH_machines.jpg").attr("alt","Cary Hardy Machines")),_.class`carousel-3d-item`(X.attr("src","assets/media/cool_shots/playfield_red.jpg").attr("alt","Playfield")))),S=>t>4&&_.style`text-align: center; margin-top: 2em;`(j.href`./admin.html`.style`color:white; text-decoration: underline;`("🔨 admin tools")))),_.class`bounce-in`.style`--fx-index:1; text-align: center; max-width: 900px; margin: 0 auto;`(Je.class`welcome-text`("Welcome to where I talk and do everything pinball")),he,_.style`text-align: center;`(X.attr("src","assets/media/pewpew+cary.png").attr("alt","Pew Pew Cary Hardy").style`max-width: 900px; width: 100%; height: auto;`),he,he,he,_.class`bounce-in section-anchor`.attr("id","merch").style`--fx-index:3;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",S=>o?"true":"false").onClick(I)(Je.class`hero-text`("👕 PINBALL MERCH & MORE"),_.class`fold-section-icon`(S=>o?"▲":"▼"))),S=>o?_.class`merch-section bounce-in fold-section-content`.style`--fx-index:2;`(_.style`display: flex; flex-direction: column; align-items: center; gap: 3em;`(_.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(_.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(j.href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.attr("target","_blank")(X.attr("src","assets/media/wrong_kong_shirts.jpg").attr("alt","Wrong Kong Shirt"))),j.attr("target","_blank").href`https://buy.stripe.com/eVq14f9f01zi3Vn7mN00003`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(R=>R.target.style.transform="scale(1.1)").onMouseOut(R=>R.target.style.transform="scale(1)")("Get your 'Wrong Kong!' T-Shirt"),j.attr("target","_blank").href`https://buy.stripe.com/5kQdR11My7XGbnPePf00005`.style`display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(R=>R.target.style.transform="scale(1.1)").onMouseOut(R=>R.target.style.transform="scale(1)")("🇦🇺 Wrong Kong for Australia residents")),_.style`display: flex; flex-direction: column; align-items: center; gap: 1em;`(_.class`merch-item`.style`max-width: 900px; margin: 0 auto;`(j.href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.attr("target","_blank")(X.attr("src","assets/media/merch-on-glass.jpg").attr("alt","Pinball Merchandise"))),j.attr("target","_blank").href`https://buy.stripe.com/5kA4j775zaRsdHy9AA`.class`bounce-in`.style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(R=>R.target.style.transform="scale(1.1)").onMouseOut(R=>R.target.style.transform="scale(1)")("More guns than Wick T-shirt"))),_.style`text-align: center; margin-top: 2em; display: flex; flex-direction: column; gap: 2em; align-items: center;`(j.attr("target","_blank").href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in`.style`--fx-index: 9; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(R=>R.target.style.transform="scale(1.1)").onMouseOut(R=>R.target.style.transform="scale(1)")("SHOP SILVERBALL SWAG"))):"",he,_.class`bounce-in section-anchor`.attr("id","links").style`--fx-index:4;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",S=>i?"true":"false").onClick(E)(Je.class`hero-text`("🔗 LINKS"),_.class`fold-section-icon`(S=>i?"▲":"▼"))),S=>i?_.class`fold-section-content`.style`display:flex;flex-wrap:wrap;gap:1em;justify-content: center;padding-top:1em;`(j.href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in link-icon`.style`--fx-index: 2;`(X.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA3ElEQVR4Ae2WIQzDIBBFEdPV6Ip6L2Y3Me9NMzuB98GbWrysqHf1otWYismm+vYFTRCEhXXjJrjkmSslLwHgi8vjxkoRKAL/J0BCSHAHGhjQgxHMwIKnY/Px+taNHd2/Bmg3p4wKuIH0Y1RQAB+ugDJxDgn0GQVMSMBmFJhDApSTYwLLQtR13xNAo0oWINS6ErXtpxInX0CmC3g1TURNkypQ+QL1IYG9hiFFRPIL8C8B/ybkO4bsFxH7Vcz+GLE/x5yBRL+LZDVQkTi2Ochn70dimQpFspKKi0AReAF/IVUTZ3/BGQAAAABJRU5ErkJggg==").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),j.href`https://rumble.com/c/c-2975430`.class`bounce-in link-icon`.style`--fx-index: 3;`(X.attr("src","https://rumble.com/i/favicon-v4.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),j.href`https://twitter.com/cary_hardy`.class`bounce-in link-icon`.style`--fx-index: 4;`(X.attr("src","https://cdn-icons-png.flaticon.com/512/124/124021.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),j.href`https://www.instagram.com/caryhardypinball/`.class`bounce-in link-icon`.style`--fx-index: 5;`(X.attr("src","https://cdn-icons-png.flaticon.com/256/1409/1409946.png").attr("alt","").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),j.href`https://www.patreon.com/caryhardy`.class`bounce-in link-icon`.style`--fx-index: 6;`(X.attr("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEUUFRj///8AAADe39+AgIE8PT4MDhF3eHhDREUREhUKCxD7+/sFBwwAAAYNDxLl5eWlpabFxcbw8PC/v8BKS0wXGBzLy8yGhoevr7Dv7+9jZGV9fX63t7giIybZ2dlubm+Wl5gpKiwzMzZZWVtiYmRTVFaPj5ChoaJHSEo5OTy9mcuCAAAEZElEQVR4nO3c6XaiQBCGYSgHtVkEcUNjJFFjzP3f4IDOklEnVDc9VDPne/7j8T0szdZ4HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHRlQncSpbG8moRxclkqDic6C3ZlEjyNbpXP3H8aEnn7+WFTL7U5zPcLovCf/l0DtPLvpMGQseSkWnPjb7PlLs2jeqkoT3fL7Sqo1iZn8c7Qt/vCAaMwpv0mS++X9f11cfyguIO/zmRUqGJ6ywaP8n5sBO8Hil3ZJ00K43i+zf/eV8un5zjpKKGBfqFK3mZf513NDuTEatQtVETZmhNYrceMXGjULFTx5uHh5bG0DOUT9QpDKiJ+YDWCZPLjo1ZhEkx1+mrLgLoNuqNTSGeNLfTXj42FEzUK6e2LIfCLxINsIr+Qjsxj6K3oKJrILqTAYBO9SkU3VG5hPDcOrPdFwfNUZqEio33wp6Xg0M8rVGHRJtD3M7kTcV5h8qQ10D/wJLYrsgqHzy12wqu12HbKKVThtm2g72+lEjmFVLbdRiv5Ruh6kVGonpftA6vj6UJmJTIKaWQj0PeFViKncGencCezJzYXUmkn0I9KkRGjsVAlrLsyHIWbhfGh4bYaXz6XuOBvLKSTrUDfH0msxOZCS8eZ2s7FQkX2Av1I66lWR4WJrSPphcSQ2FRIFk5Jf8sENtOGQhVb3A3rK2HnCofj1tdNn+32E9cK46O10bCWCoyIDYU0snDh9FtUdn+oaSq0ON7XBG5mNBW+2C1cOVeYvNstPLlXmNktfEEhCq0X2j7SuLcf/v/H0kcvhbXh3niYlFbP2taH7h+zNRSGbR4b3kvPzp2XqudWzw1v7djvdXZW6JGVO/o/Td27PrR8MBUYLBoLww+bhaxXczsu9Gzea8tdvJvoUcsn+J9J3IhiFFp6tlYTeb7WWDjZW7vbtnuVeLzGeLpm7fJC4MKCVTj8sHQzKt+LzFLgPAO2dKyRWYWcwnBuZSXmHzITTThvm9i50Jc4n+EWDl8tXGAMBG7oswutjIkbqRfbWIWKWr+tIHFVccV7NzE0f0H4Kg3EZiUw36CldsfTSPA9aO5b0O2uE6WOo5d/zixU1OIJhmQg/119ZX5+WohO8OLPt1ChYeLWExoJrzTmzCizffFEooFa856M9sUX6TmIerPzSPcG8eBNeuqa7gxLOmvdP51KT1zz9GfJxuGK/SQjH8Xi8ysNZjor2jOviLNAehe8MJitHqojYyrp7CA/QfbCZD6+SmhefHnISYuxM59VMPxqREzj1V9X5HJ1dmT91Uy/i1F/1mRRbgfpH9cc0XqwLR37wIlxoXfZWsNxeXovtrPpdLYt3k/lfOHEVwY+a1Po1SerSbXG1KKiqrWaOPCFgVstC6/Uxb/5g61ZKXQaCvsPhf2Hwv5DYf+hsP9Q2H8o7D8U9h8K+w+F/YfC/jP/nndfqNfz+FawkP5XVqnwjuy7EwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATvgOQzxF32eUYx8AAAAASUVORK5CYII=").attr("alt","Patreon").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),j.href`https://silverballswag.com/collections/cary-hardy`.class`bounce-in link-icon`.style`--fx-index: 7;`(X.attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/files/silverball_swag_logo_color_360x.png?v=1614300719").attr("alt","silverball_swag").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`),j.href`https://www.facebook.com/hardypinball`.class`bounce-in link-icon`.style`--fx-index: 8;`(X.attr("src","https://cdn-icons-png.flaticon.com/256/124/124010.png").attr("alt","Facebook").class`hover-spin`.style`width:10vw;max-width:60px;border-radius: 50%;`)):"",he,_.class`bounce-in section-anchor`.attr("id","youtube").style`--fx-index:5;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",S=>s?"true":"false").onClick(m)(Je.class`hero-text`("📺 YOUTUBE CHANNEL"),_.class`fold-section-actions`(_.class`fold-section-badge`("+12K subs"),_.class`fold-section-icon`(S=>s?"▲":"▼")))),he,S=>s?_.class`fold-section-content`.style`text-align: center; margin-top: 2em;`(_.class`bounce-in`.style`max-width: 900px;padding-top:1em;margin:auto;--fx-index:2`(Tg.attr("src","https://www.youtube.com/embed/JFkiAk44Ntk").attr("frameborder","0").attr("allowfullscreen","").style`width: 100%;height: 500px;`),_.style`text-align: center; margin-top: 2em;`(j.attr("target","_blank").href`https://www.youtube.com/channel/UCZ3ah82h0PMiGIRf_rt0cNA`.class`bounce-in`.style`--fx-index: 5; display: inline-block; padding: 1em 2em; background: linear-gradient(45deg, #ff0080, #00ffff); border-radius: 50px; color: white; text-decoration: none; font-weight: bold; transition: all 0.3s ease; min-width: min(250px, calc(100vw - 2.5em)); text-align: center;`.onMouseOver(R=>R.target.style.transform="scale(1.1)").onMouseOut(R=>R.target.style.transform="scale(1)")("Goto My Channel")),he,he):"",_.class`fade-in`.style`--fx-index:6`(S=>Date.now()<l&&ve(_.class`bounce-in section-anchor`.attr("id","live-meetups").style`--fx-index:5;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",R=>r?"true":"false").onClick(f)(Je.class`hero-text`("🗓️ LIVE MEETUPS"),_.class`fold-section-actions`(_.class`fold-section-badge`(R=>ZS(l)),_.class`fold-section-icon`(R=>r?"▲":"▼")))),R=>r?_.class`fold-section-content bounce-in`.style`--fx-index:2;`(_.style`margin-top: 2em; display: flex; flex-wrap: wrap; justify-content: center; gap: 2em;`(_.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(255,0,100,0.3), 0 15px 40px rgba(0,255,255,0.2); transform: perspective(1000px) rotateX(2deg);`(_.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(255,0,100,0.2), rgba(0,255,255,0.2), rgba(255,0,100,0.2)); animation: shimmer 4s infinite;`,X.attr("src","assets/media/meetup-screenshot.jpg").attr("alt","Pinball Community Live Meetup").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,_.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(_.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Monthly Live Meetups"))),_.style`position: relative; max-width: 500px; width: 90%; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,255,255,0.3), 0 15px 40px rgba(255,0,100,0.2); transform: perspective(1000px) rotateX(-2deg);`(_.style`position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, rgba(0,255,255,0.2), rgba(255,0,100,0.2), rgba(0,255,255,0.2)); animation: shimmer 4s infinite; animation-delay: 2s;`,X.attr("src","assets/media/meetup-screenshot2.jpg").attr("alt","Pinball Community Live Meetup 2").style`width: 100%; height: auto; display: block; position: relative; z-index: 1;`,_.style`position: absolute; bottom: 0; left: 0; right: 0; padding: 1.5em; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2;`(_.style`color: white; font-weight: bold; margin: 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); font-size: 1.1em;`("Live Discussion & Q&A")))),_.style`margin-top: 2em;`(M=>sl({date:l,showLearnMore:!0}))):"")),he,_.class`bounce-in section-anchor`.attr("id","awards").style`--fx-index:7;`(q.type`button`.class`fold-section-toggle`.attr("aria-expanded",S=>n?"true":"false").onClick(h)(Je.class`hero-text`("🏆 AWARD WINNING WORK & CONTENT"),_.class`fold-section-icon`(S=>n?"▲":"▼"))),S=>n?_.class`merch-section bounce-in fold-section-content`.style`margin: 2em auto; --fx-index:2;`(_.style`display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 2em; margin: 1em 0;`(_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(X.attr("alt","PATB Award").attr("src","assets/media/awards/PBaTB award.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,B.style`color: white; display: block; text-align: center;`("PATB Award")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(X.attr("alt","Twipy Award").attr("src","assets/media/awards/Twipy.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,B.style`color: white; display: block; text-align: center;`("Twipy Award")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(X.attr("alt","PATB Awards").attr("src","assets/media/awards/PatB awards.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,B.style`color: white; display: block; text-align: center;`("PATB Awards")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(X.attr("alt","Cary Hardy and Steve Ritchie handshaking").attr("src","assets/media/awards/photo0.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,B.style`color: white; display: block; text-align: center;`("TPF 2024")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(X.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo2.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,B.style`color: white; display: block; text-align: center;`("TPF 2024")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(X.attr("alt","Earth Shaker award").attr("src","assets/media/awards/EarthShakerAward.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,B.style`color: white; display: block; text-align: center;`("TPF 2024")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(X.attr("alt","TPF 2022").attr("src","assets/media/awards/TPF 2022.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,B.style`color: white; display: block; text-align: center;`("TPF 2022")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(X.attr("alt","Cary Hardy owned pinball machine").attr("src","assets/media/awards/photo3.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,B.style`color: white; display: block; text-align: center;`("TPF 2022")),_.style`flex: 0 1 calc(90% - 1.5em); min-width: min(250px, calc(100vw - 2.5em)); max-width: 500px; max-height: 600px; overflow: hidden;`(X.attr("alt","Cary Hardy holding award").attr("src","assets/media/awards/photo1.jpg").style`width: 100%; height: auto; max-height: 550px; object-fit: contain; margin-bottom: 0.25em;`,B.style`color: white; display: block; text-align: center;`("TPF 2022")))):"",he,_.class`bounce-in section-anchor`.attr("id","games").style`--fx-index:8;`(j.href`/lineup.html`.class`fold-section-toggle`.style`text-decoration:none;box-sizing:border-box;`(Je.class`hero-text`("⚪️ GAMES"))),he,_.class`bounce-in section-anchor`.attr("id","ratings").style`--fx-index:9;`(j.href`/ratings.html`.class`fold-section-toggle`.style`text-decoration:none;box-sizing:border-box;`(Je.class`hero-text`("⭐ RATINGS"))),he,he,X.class`bounce-in reflection`.attr("alt","Cary Hardy logo").attr("src","https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png").style`--fx-index:8;width: 55vw;min-width: 200px;max-width: 400px;`,S=>Os()))),ZS=t=>`${Math.max(0,Math.ceil((t-Date.now())/864e5))}d`,ex=G("img");let Kp=!1;const _x=F(()=>{let t=Date.now()-1e3;const e=me(()=>{}),n=()=>new Date(t);return Kp||(Kp=!0,F.promise=tl().then(r=>{typeof r=="number"&&(t=r,e())}).catch(r=>{console.error("Failed to load next meetup date",r)})),ve(He(()=>Ls()),ex.class`bounce-in reflection`.alt`Cary Hardy logo`.src`https://cdn.shopify.com/s/files/1/0255/0271/1853/collections/Front_1200x1200.png`.style`--fx-index:0;width: 55vw;min-width: 200px;max-width: 400px;`,_.class`bounce-in`.style`--fx-index:1`(Tu.style`line-height: 1.3;`("Meet & talk everything pinball!"),se("for Patreon LE supporters"),_.style`font-size:.8em;opacity: .7;`("😎 come experience the hype")),he,_.class`bounce-in`.style`--fx-index:2`(_.id`count-clock`(r=>sl({date:n(),showLearnMore:!1}))),he,_.class`bounce-in`.style`--fx-index:3;text-align: center;`(_.style`display: inline-block;`(_.style`\n          max-width: 900px;\n          background-color:#333;border-radius: .7em;\n          margin:.5em;text-align: justify;\n          border:1px solid rgba(255,255,255,.5);\n          color:rgba(255,255,255,.85);\n        `(_.style`padding:0em 2em;`(_.style`line-height: 1.5em;`(se("And if that sounds interesting to you, consider joining us!"),se("By becoming a ",j.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Cary Hardy LE supporter")," before ",r=>n().toLocaleString("default",{month:"long"})," ",r=>n().getDate(),r=>h0(n()),", you will receive an LE only Patreon ",Z.style`white-space: nowrap;`("💬 message"),", ",lE("before the meeting start time"),", with an invite ",Z.style`white-space: nowrap;`("🔗 link")," to join this very exclusive meeting.")),he,Je("How does the meeting work?"),Yh(zr("🍺 It mostly works because of beer. Come 🍻 cheers with us!"),zr("🛎️ Make sure you have Patreon notifications turned on to ensure you receive invite link 1 hour before meeting"),zr("Meeting software is Google Meets, which is a browser based application. No installation will be required."),zr("Link to meeting is provided 1 hour before meeting. Must be ",j.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon LE member"))),he,Je("😮 When issues arise"),Yh(zr("Watch your Patreon messages."),zr("In the event of meeting cancellation or disruption due to unforeseen circumstances, a makeup meeting will be communicated directly from Cary Hardy."))),_.style`text-align: center;`("⚪️ ",j.class`color-inherit`.href`https://www.patreon.com/caryhardy/membership`("Patreon memberships")," ⚪️")))),he,he,_.class`bounce-in`.style`--fx-index:4;text-align: center;`(_.style`padding:.8em;font-size: .7em;`(j.class`no-a-style`.href`index.html`(q.type`button`("🔙 home")))),Os())}),bx=F(()=>{const n=new URLSearchParams(window.location.search).get("session_id")||""||"not found";return _(He(()=>Ls()),_.class`wrap`(_.class`card`(Tu("Thank you!"),se("✅ Your payment was received successfully."),he,se("We really appreciate your support as we grow CaryHardy.com"),he,se("At Pinball at the Beach, please find Cary or Acker or email ",j.href`mailto:acker.dawn.apple@gmail.com?subject=PATB Cary key box`("acker.dawn.apple@gmail.com")),he,se.class`muted`("Session ID: ",Z.class`session-id`(r=>n)),j.class`cta`.href`/index.html`("Back to CaryHardy.com"))),Os())}),Qp=["/assets/media/product-images/key-box/IMG_1477.heic.jpeg","/assets/media/product-images/key-box/Main.jpg","/assets/media/product-images/key-box/IMG_1472.heic.jpeg","/assets/media/product-images/key-box/IMG_1474.heic.jpeg","/assets/media/product-images/key-box/IMG_1475.heic.jpeg"],Yp="https://buy.stripe.com/aFabJ02XDe7K7GrgXv4F202",tx=F(()=>{let t=Qp[0],e=Yp;return tx.inputs(n=>{[{checkoutUrl:e=Yp}={}]=n}),_(He(()=>Ls()),_.class`product-wrap`(_.class`product-hero`(_.class`product-info`(Tu("Cary Hardy Key Box"),Be("🏖️ PATB Pickup only. Priced for LE only members only"),se("Cary Hardy Key Box"),se("LE Members only pricing"),Je("$15.00 ",Z.style`font-size:0.6em;opacity:0.75;font-weight:400;`("+ $1 processing + tax")),se.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🇺🇸 Made in America"),se.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🚫 🤖 No artificial intellegence used"),se.style`font-size:0.6em;opacity:0.75;margin:0.2em 0;`("🥳 Fun to assemble Cary Hardy logo that is then functional as your pinball keys holder!"),j.href(n=>e).class`buy-button`.attr("target","_blank")("Buy Now")),_.class`product-media`(X.attr("src",n=>t).attr("alt","Key Box main photo").class`main-image`,_.class`gallery`(Qp.map(n=>_.class`gallery-item`.class(r=>n===t?"is-active":"").onClick(()=>{t=n})(X.attr("src",n).attr("alt","Key Box photo").class`gallery-image`)))))),Os())});export{ix as a,ox as b,ax as c,ux as d,dx as e,cx as f,lx as g,yx as h,mx as i,gx as j,_x as k,bx as l,hx as m,tx as n,fx as p,px as q,rx as t};

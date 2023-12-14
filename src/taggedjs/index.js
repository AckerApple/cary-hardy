var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{xQ:()=>r,dy:()=>N,a:()=>m,TF:()=>$,SB:()=>C,_q:()=>O,Dc:()=>B});class r{subscribers=[];value;subscribe(t){this.subscribers.push(t),r.globalSubs.push(t),++r.globalSubCount;const e=()=>{n(this.subscribers,t),n(r.globalSubs,t),--r.globalSubCount};return e.unsubscribe=e,e}set(t){this.value=t,this.subscribers.forEach((e=>{e.value=t,e(t)}))}next=this.set}function n(t,e){const r=t.indexOf(e);-1!==r&&t.splice(r,1)}r.globalSubCount=0,r.globalSubs=[];class o extends r{value;constructor(t){super(),this.value=t}subscribe(t){const e=super.subscribe(t);return t(this.value),e}}function s(t,e=new WeakMap){if(null===t||"object"!=typeof t)return t;if(e.has(t))return e.get(t);if(t instanceof Date)return new Date(t);if(t instanceof RegExp)return new RegExp(t);const r=Array.isArray(t)?[]:Object.create(Object.getPrototypeOf(t));if(e.set(t,r),Array.isArray(t))for(let n=0;n<t.length;n++)r[n]=s(t[n],e);else for(const n in t)t.hasOwnProperty(n)&&(r[n]=s(t[n],e));return r}function a(t,e){if(t===e)return!0;if("object"!=typeof t||"object"!=typeof e||null===t||null===e)return!1;const r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(const o of r)if(!n.includes(o)||!a(t[o],e[o])){if(t[o]instanceof Function&&e[o]instanceof Function&&t[o].toString()===e[o].toString())continue;return!1}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(let r=0;r<t.length;r++)if(!a(t[r],e[r]))return!1}else if(Array.isArray(t)||Array.isArray(e))return!1;return!0}function i(t,e,r){const n=t.split(".");if("style"===n[0]&&(r.style[n[1]]=e),"class"===n[0])return n.pop(),void(e?n.forEach((t=>r.classList.remove(t))):n.forEach((t=>r.classList.add(t))))}const u=/^\s*{/,c=/}\s*$/;function l(t,e,n){t.getAttributeNames().forEach((o=>{const s=t.getAttribute(o),a=function(t){return t.search(/^(class|style)(\.)/)>=0}(o);if(s&&s.search(u)>=0&&s.search(c)>=0){const u=s.replace("{","").split("").reverse().join("").replace("}","").split("").reverse().join(""),c=e[u];if(c instanceof Function)return void(t[o]=function(...e){c(t,e)});if(c instanceof r){t.removeAttribute(o);const e=e=>{if(e instanceof Function)return t[o]=function(...r){e(t,r)},void(t[o].tagFunction=e);a&&i(o,e,t),e&&t.setAttribute(o,e),void 0===e||!1===e||null===e?t.removeAttribute(o):t.setAttribute(o,e)},r=c.subscribe(e);return void n.cloneSubs.push(r)}t.setAttribute(o,c.value)}else if(a)return i(o,s,t)}))}const d=/(?:<[^>]*>)|({__tagVar[^}]+})/g;function p(t,e,n){if(!t.children||"TEMPLATE"===t.tagName)return;const o={added:0,removed:0},i=new Array(...t.children);function u(t,i,u){u.forEach(((t,e)=>{if(!(e<i)&&"TEMPLATE"===t.tagName&&void 0!==t.getAttribute("interpolate")&&void 0!==t.getAttribute("end"))return t})),function(t,e,n,o){if(!t.hasAttribute("end"))return;const i=t.getAttribute("id");if(i?.substring(0,x.length)!==x)return;const u=e[i];if(u instanceof r){const e=e=>{!function(t,e,r,n,o){if(t instanceof L)return t.tagSupport||(t.tagSupport=v(),t.tagSupport.mutatingRender=n.tagSupport.mutatingRender,t.tagSupport.oldest=t.tagSupport.oldest||t,n.children.push(t),t.ownerTag=n),void w(t,e,r,{counts:o});if(t instanceof Array&&t.every((t=>t instanceof L)))return function(t,e,r,n,o){t.lastArray=t.lastArray||[];let s=0;return t.lastArray=t.lastArray.filter(((r,n)=>{const a=e.length-1<n-s,i=e[n-s],u=i?.arrayValue;return!a&&u===r.tag.arrayValue||(t.lastArray[n].tag.destroy(o.removed,!1),++s,++o.removed,!1)})),void e.forEach(((e,s)=>{if(e.tagSupport=n.tagSupport,e.ownerTag=n,n.children.push(e),void 0===e.arrayValue&&!Object.keys(e).includes("arrayValue")){const t=new Error("Use html`...`.key(item) instead of html`...` to template an Array");throw t.code="add-array-key",t}const a=t.lastArray[s];if(a)return void(a.tag.arrayValue===e.arrayValue&&a.tag.updateValues(e.values));const i=r||r.clone;w(e,t,i,{index:s,counts:o})}))}(e,t,r,n,o);if(T(t))return function(t,e,r,n,o){if(!t.cloneProps)throw new Error(`Not a tag component. Use functionName = component(functionName) on component:\n\n${t.toString().substring(0,120)}\n\n`);const i=e.tagSupport||v(t);t.setCallback(n.tagSupport.async),i.mutatingRender=()=>{const r=i.renderCount;if(e.tag){if(function(t){t.providers.filter((t=>!a(t.instance,t.clone))).forEach((e=>{!function(t,e){E(t,e).forEach((({tag:t,renderCount:e,provider:r})=>{e===t.tagSupport.renderCount&&(r.clone=s(r.instance),t.tagSupport.render())}))}(t.getAppElement(),e),e.clone=s(e.instance)}))}(e.tag),r!==i.renderCount)return i.newest;if(!i.hasPropChanges(t.props,t.newProps,e.tag.tagSupport.templater.props))return i.newest=t.redraw(t.newProps),i.newest}return i.newest=n.tagSupport.render()};const u=t;let c=u.newest;y.ownerTag=n;return!c&&(c=u(i),c.afterRender(),u.oldest=c,i.oldest=c,t.oldest=c),u.newest=c,c.ownerTag=n,c.ownerTag=n,n.children.push(c),c.setSupport(i),void w(c,e,r,{counts:o})}(t,e,r,n,o);if(e.tag){const n=r.clone||r;n.parentNode.insertBefore(r,n);const s=o.removed,a=e.tag.destroy(s);o.removed=s+a,delete e.tag;const i=S(t,n);return void(r.clone=i)}const i=r.clone||r,u=S(t,i);r.clone=u;const c=n.clones.indexOf(i);c>=0&&!n.clones.includes(u)&&!i.parentNode&&(n.clones.splice(c,1),n.clones.push(u))}(e,u,t,n,o),setTimeout((()=>{o.added=0,o.removed=0}),0)},r=u.subscribe(e);return void n.cloneSubs.push(r)}const c=S(u,t.clone||t);n.clones.push(c),t.clone=c}(t,e,n,o)}i.forEach(((t,r)=>{if(u(t,r,i),t.children){const r=new Array(...t.children);r.forEach(((t,o)=>{(function(t){return"TEMPLATE"===t.tagName&&void 0!==t.getAttribute("interpolate")&&void 0!==t.getAttribute("end")})(t)&&u(t,o,r),p(t,e,n)}))}}))}function g(t,e,r){(function(t){const e=function(t){const e=[];return{string:t.replace(d,((t,r)=>{if(t.startsWith("<"))return t;const n=r.substring(1,r.length-1);return e.push(n),`<template interpolate end id="${n}"></template>`})),keys:e}}(t.innerHTML);return e.string=e.string.replace(j,x),t.innerHTML=e.string,e})(t).keys.length&&p(t,e,r),l(t,e,r),function t(n){new Array(...n).forEach((n=>{l(n,e,r),n.children&&t(n.children)}))}(t.children)}function f(t,e,r,n){const o=document.createElement("div");o.id="tag-temp-holder",o.innerHTML="<div></div>"+e.string,g(o,t.update(),t);const s=function(t,e,r){const n=[],o=t.children[0];let s=o.nextSibling;for(t.removeChild(o);s;){const t=s.nextSibling;h(s,e),n.push(s),s=t}return n}(o,r);return t.clones.push(...s),s}function h(t,e){e.parentNode.insertBefore(t,e)}function v(t){const e={templater:t,renderCount:0,mutatingRender:()=>{throw new Error('Tag function "render()" was called in sync but can only be called async')},render:()=>(++e.renderCount,e.mutatingRender()),hasPropChanges:(t,r,n)=>{const o=e.templater.cloneProps;return!(void 0===t&&t===n||a(r,o))},init:t=>{t(),e.init=()=>{}},async:t=>(...r)=>{const n=t(...r);e.render(),n instanceof Promise&&n.then((()=>{e.render()}))}};return e}const y={providers:[],currentTag:void 0,ownerTag:void 0};function b(t){return y.providers.find((e=>e.constructMethod===t))}const m={create:t=>{const e=b(t);if(e)return e.clone=s(e.instance),e.instance;const r=t.constructor?new t:t();return y.providers.push({constructMethod:t,instance:r,clone:s(r)}),r},inject:t=>{const e=b(t);if(e)return e.instance;let r={ownerTag:y.ownerTag};for(;r.ownerTag;){const e=r.ownerTag.providers.find((e=>{if(e.constructMethod===t)return!0}));if(e)return e.clone=s(e.instance),y.providers.push(e),e.instance;r=r.ownerTag}const n=`Could not inject provider: ${t}`;throw console.warn(`${n}. Available providers`,y.providers),new Error(n)}};function S(t,e){const r=e.parentNode;void 0!==t&&!1!==t&&null!==t||(t="");const n=document.createTextNode(t);return r.insertBefore(n,e),r.removeChild(e),n}function w(t,e,r,{index:n,counts:o}){const s=t.getTemplate();if(void 0!==n){const a=e.lastArray[n];return a?.tag.isLikeTag(t)?void a.tag.updateByTag(t):(f(t,s,r).forEach((t=>A(t,o))),void e.lastArray.push({tag:t,index:n}))}if(e.tag&&e.tag.isLikeTag(t)){if(e instanceof Function){const t=e(e.tag.tagSupport);return void e.tag.updateByTag(t)}e.tag.updateByTag(t)}else f(t,s,r.clone||r).forEach((t=>A(t,o))),e.tag=t}function T(t){return t instanceof Function&&t.toString().includes("html`")}function A(t,e){t.getAttribute&&(function(t,e){const r=t.oninit;if(!r)return;const n=r.tagFunction;if(!n)return;const o=n.tagFunction;o&&(o({target:t,stagger:e.added}),++e.added)}(t,e),t.children&&new Array(...t.children).forEach((t=>A(t,e))))}function E(t,e,r=[]){const n=t.providers.find((t=>t.constructMethod===e.constructMethod));return n&&r.push({tag:t,renderCount:t.tagSupport.renderCount,provider:n}),t.children.forEach((t=>E(t,e,r))),r}const R={array:[],rearray:[],currentTag:void 0};function C(t,e){const r=R.rearray[R.array.length];if(r){const[t]=r();return r(t),R.array.push(e),t}return R.array.push(e),t}const x="__tagVar",P="--"+x+"--",F=new RegExp(x,"g"),j=new RegExp(P,"g"),k=[{beforeRedraw:t=>{R.currentTag=t,t.states.length&&R.rearray.push(...t.states)},afterRender:t=>{if(R.rearray.length&&R.rearray.length!==R.array.length)throw new Error(`States lengths mismatched ${R.rearray.length} !== ${R.array.length}`);R.rearray.length=0,t.states=[...R.array],R.array.length=0}},{beforeRedraw:t=>{y.currentTag=t,y.ownerTag=t.ownerTag,t.providers.length&&(y.providers.length=0,y.providers.push(...t.providers))},afterRender:t=>{t.providers=[...y.providers],y.providers.length=0}}];class L{strings;values;context={};clones=[];cloneSubs=[];children=[];tagSupport;ownerTag;arrayValue;constructor(t,e){this.strings=t,this.values=e}states=[];providers=[];beforeRedraw(){k.forEach((t=>t.beforeRedraw(this)))}afterRender(){k.forEach((t=>t.afterRender(this)))}key(t){return this.arrayValue=t,this}destroy(t=0,e=!1){return this.children.forEach(((t,e)=>t.destroy(0,!0))),this.destroySubscriptions(),e||(t=this.destroyClones(t)),t}destroySubscriptions(){this.cloneSubs.forEach((t=>t.unsubscribe())),this.cloneSubs.length=0}destroyClones(t=0){return this.clones.reverse().forEach(((e,r)=>{let n=Promise.resolve();e.ondestroy&&(n=function(t,e){const r=t.ondestroy;if(!r)return;const n=r.tagFunction;if(!n)return;const o=n.tagFunction;if(!o)return;return o({target:t,stagger:e})}(e,t)),n.then((()=>e.parentNode.removeChild(e)))})),this.clones.length=0,t}updateByTag(t){this.updateConfig(t.strings,t.values),this.tagSupport.templater=t.tagSupport.templater}lastTemplateString=void 0;setSupport(t){this.tagSupport=this.tagSupport||t,this.tagSupport.mutatingRender=this.tagSupport.mutatingRender||t.mutatingRender,this.children.forEach((e=>e.setSupport(t)))}updateConfig(t,e){this.strings=t,this.updateValues(e)}getTemplate(){return{string:this.lastTemplateString=this.strings.map(((t,e)=>t.replace(F,P)+(this.values.length>e?`{${x}${e}}`:""))).join(""),strings:this.strings,values:this.values,context:this.context}}isLikeTag(t){return t.lastTemplateString===this.lastTemplateString&&(t.values.length===this.values.length&&!!t.values.every(((t,e)=>{const r=this.values[e];return t instanceof Function&&r instanceof Function?!(t.toString()!==r.toString()):!(t instanceof L&&r instanceof L&&(t.ownerTag=this,this.children.push(t),t.lastTemplateString||t.getTemplate().string,!t.isLikeTag(r)))})))}update(){return this.updateContext(this.context)}updateValues(t){return this.values=t,this.updateContext(this.context)}updateContext(t){return this.strings.map(((e,r)=>{const n=x+r,s=this.values.length>r,i=this.values[r],u=t[n];if(u){const t=u.value?.tag;if(T(i)){const t=i.cloneProps,e=u.tag;if(!u.tag)return M(i,u,this),void i.redraw(t);const r=e.tagSupport,n=i.tagSupport||r||v(i),o=n.templater?.cloneProps,s=n.templater?.props;if(e&&(void 0===s&&s===t||a(o,t)))return;return M(i,u,this),r.templater=i,void(u.value.tag=r.newest=i.redraw(t))}if(t){const e=t.tagSupport,r=i;e.oldest.beforeRedraw();const n=r(e);return r.newest=n,e.oldest.afterRender(),t.updateByTag(n),void u.set(i)}return i instanceof Function?void u.set(V(i,this)):void u.set(i)}T(i)?M(i,t[n]=new o(i),this):i instanceof Function?t[n]=function(t,e){return new o(V(t,e))}(i,this):s&&(i instanceof L&&(i.ownerTag=this,this.children.push(i)),t[n]=new o(i))})),t}getAppElement(){let t=this;for(;t.ownerTag;)t=t.ownerTag;return t}}function V(t,e){function r(r,n){const o=e.tagSupport.renderCount,s=t.bind(r)(...n);if(o===e.tagSupport.renderCount)return e.tagSupport.render(),s instanceof Promise&&s.then((()=>{e.tagSupport.render()})),s}return r.tagFunction=t,r}function M(t,e,r){t.redraw=()=>{const n=e.tag,o=n?.tagSupport||v(t);++o.renderCount,e.tagSupport=o;const s=t;o.mutatingRender=o.mutatingRender||e.tagSupport?.mutatingRender||s.tagSupport.mutatingRender;const a=n?.ownerTag||r;o.oldest?o.oldest.beforeRedraw():y.ownerTag=a;const i=t(o);o.oldest?o.oldest.afterRender():i.afterRender(),t.newest=i,i.ownerTag=a,o.oldest=o.oldest||i,o.newest=i;const u=o.oldest.tagSupport;if(o.oldest.tagSupport=u||o,o.oldest.tagSupport.templater=t,i.setSupport(o),!n||!n.isLikeTag(i))return e.set(t),i;o.oldest.updateByTag(i)}}function N(t,...e){return new L(t,e)}function O(t){return e=>{const r=function(t,e){const r={...t};return Object.entries(r).forEach((([t,e])=>{r[t]=e instanceof Function?(...t)=>((t,e)=>{const r=t(...e);return n.newest.ownerTag.tagSupport.render(),r})(e,t):e})),r}(e),n=t(r);return n.props=e,n.newProps=r,n.cloneProps=s(r),n.setCallback=t=>t,n}}function B(t){return new Promise((e=>{setTimeout((()=>{e(0)}),t)}))}function $(t,e,r){const n=t(r),o=function(t){const e=v(t),r=t(e);return r.afterRender(),r.tagSupport=e,{tag:r,tagSupport:e}}(n),{tag:s,tagSupport:a}=o;let i;a.mutatingRender=()=>{s.beforeRedraw();const t=i=n(s.tagSupport);return s.afterRender(),t.setSupport(s.tagSupport),s.updateByTag(t),i&&i.destroy(0),i};const u=s.updateValues(s.values),c=s.getTemplate();e.innerHTML=c.string,g(e,u,s)}var _=e.xQ,D=e.dy,H=e.a,q=e.TF,Q=e.SB,U=e._q,W=e.Dc;export{_ as Subject,D as html,H as providers,q as renderAppToElement,Q as state,U as tag,W as wait};
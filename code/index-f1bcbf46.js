(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=globalThis,At=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),Ut=new WeakMap;let ie=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(At&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Ut.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ut.set(r,t))}return t}toString(){return this.cssText}};const ke=e=>new ie(typeof e=="string"?e:e+"",void 0,kt),_=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,s,i)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new ie(r,e,kt)},Ee=(e,t)=>{if(At)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),s=ot.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,e.appendChild(o)}},Tt=At?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return ke(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ce,defineProperty:Se,getOwnPropertyDescriptor:Le,getOwnPropertyNames:Pe,getOwnPropertySymbols:Oe,getPrototypeOf:Re}=Object,nt=globalThis,zt=nt.trustedTypes,Ue=zt?zt.emptyScript:"",Te=nt.reactiveElementPolyfillSupport,K=(e,t)=>e,st={toAttribute(e,t){switch(t){case Boolean:e=e?Ue:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Et=(e,t)=>!Ce(e,t),Mt={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:Et};Symbol.metadata??=Symbol("metadata"),nt.litPropertyMetadata??=new WeakMap;class M extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Mt){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,r);s!==void 0&&Se(this.prototype,t,s)}}static getPropertyDescriptor(t,r,o){const{get:s,set:i}=Le(this.prototype,t)??{get(){return this[r]},set(a){this[r]=a}};return{get(){return s?.call(this)},set(a){const c=s?.call(this);i.call(this,a),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mt}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const t=Re(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const r=this.properties,o=[...Pe(r),...Oe(r)];for(const s of o)this.createProperty(s,r[s])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,s]of r)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const s=this._$Eu(r,o);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)r.unshift(Tt(s))}else t!==void 0&&r.push(Tt(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EO(t,r){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:st).toAttribute(r,o.type);this._$Em=t,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,r){const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const i=o.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:st;this._$Em=s,this[s]=a.fromAttribute(r,i.type),this._$Em=null}}requestUpdate(t,r,o,s=!1,i){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??Et)(s?i:this[t],r))return;this.C(t,r,o)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,o){this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,i]of o)i.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],i)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$E_?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$ET()}catch(o){throw t=!1,this._$ET(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$E_?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(r=>this._$EO(r,this[r])),this._$ET()}updated(t){}firstUpdated(t){}}M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[K("elementProperties")]=new Map,M[K("finalized")]=new Map,Te?.({ReactiveElement:M}),(nt.reactiveElementVersions??=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=globalThis,it=Ct.trustedTypes,Vt=it?it.createPolicy("lit-html",{createHTML:e=>e}):void 0,ae="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,ne="?"+L,ze=`<${ne}>`,U=document,Z=()=>U.createComment(""),Y=e=>e===null||typeof e!="object"&&typeof e!="function",le=Array.isArray,Me=e=>le(e)||typeof e?.[Symbol.iterator]=="function",pt=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Nt=/>/g,P=RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bt=/'/g,It=/"/g,ce=/^(?:script|style|textarea|title)$/i,Ve=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),f=Ve(1),T=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),jt=new WeakMap,R=U.createTreeWalker(U,129);function de(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vt!==void 0?Vt.createHTML(t):t}const De=(e,t)=>{const r=e.length-1,o=[];let s,i=t===2?"<svg>":"",a=I;for(let c=0;c<r;c++){const n=e[c];let d,b,h=-1,A=0;for(;A<n.length&&(a.lastIndex=A,b=a.exec(n),b!==null);)A=a.lastIndex,a===I?b[1]==="!--"?a=Dt:b[1]!==void 0?a=Nt:b[2]!==void 0?(ce.test(b[2])&&(s=RegExp("</"+b[2],"g")),a=P):b[3]!==void 0&&(a=P):a===P?b[0]===">"?(a=s??I,h=-1):b[1]===void 0?h=-2:(h=a.lastIndex-b[2].length,d=b[1],a=b[3]===void 0?P:b[3]==='"'?It:Bt):a===It||a===Bt?a=P:a===Dt||a===Nt?a=I:(a=P,s=void 0);const C=a===P&&e[c+1].startsWith("/>")?" ":"";i+=a===I?n+ze:h>=0?(o.push(d),n.slice(0,h)+ae+n.slice(h)+L+C):n+L+(h===-2?c:C)}return[de(e,i+(e[r]||"<?>")+(t===2?"</svg>":"")),o]};class G{constructor({strings:t,_$litType$:r},o){let s;this.parts=[];let i=0,a=0;const c=t.length-1,n=this.parts,[d,b]=De(t,r);if(this.el=G.createElement(d,o),R.currentNode=this.el.content,r===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=R.nextNode())!==null&&n.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ae)){const A=b[a++],C=s.getAttribute(h).split(L),tt=/([.?@])?(.*)/.exec(A);n.push({type:1,index:i,name:tt[2],strings:C,ctor:tt[1]==="."?Be:tt[1]==="?"?Ie:tt[1]==="@"?je:lt}),s.removeAttribute(h)}else h.startsWith(L)&&(n.push({type:6,index:i}),s.removeAttribute(h));if(ce.test(s.tagName)){const h=s.textContent.split(L),A=h.length-1;if(A>0){s.textContent=it?it.emptyScript:"";for(let C=0;C<A;C++)s.append(h[C],Z()),R.nextNode(),n.push({type:2,index:++i});s.append(h[A],Z())}}}else if(s.nodeType===8)if(s.data===ne)n.push({type:2,index:i});else{let h=-1;for(;(h=s.data.indexOf(L,h+1))!==-1;)n.push({type:7,index:i}),h+=L.length-1}i++}}static createElement(t,r){const o=U.createElement("template");return o.innerHTML=t,o}}function D(e,t,r=e,o){if(t===T)return t;let s=o!==void 0?r._$Co?.[o]:r._$Cl;const i=Y(t)?void 0:t._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(e),s._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=s:r._$Cl=s),s!==void 0&&(t=D(e,s._$AS(e,t.values),s,o)),t}class Ne{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,s=(t?.creationScope??U).importNode(r,!0);R.currentNode=s;let i=R.nextNode(),a=0,c=0,n=o[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new X(i,i.nextSibling,this,t):n.type===1?d=new n.ctor(i,n.name,n.strings,this,t):n.type===6&&(d=new He(i,this,t)),this._$AV.push(d),n=o[++c]}a!==n?.index&&(i=R.nextNode(),a++)}return R.currentNode=U,s}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=D(this,t,r),Y(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Me(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==g&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){const{values:r,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=G.createElement(de(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(r);else{const i=new Ne(s,this),a=i.u(this.options);i.p(r),this.$(a),this._$AH=i}}_$AC(t){let r=jt.get(t.strings);return r===void 0&&jt.set(t.strings,r=new G(t)),r}T(t){le(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,s=0;for(const i of t)s===r.length?r.push(o=new X(this.k(Z()),this.k(Z()),this,this.options)):o=r[s],o._$AI(i),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,s,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=g}_$AI(t,r=this,o,s){const i=this.strings;let a=!1;if(i===void 0)t=D(this,t,r,0),a=!Y(t)||t!==this._$AH&&t!==T,a&&(this._$AH=t);else{const c=t;let n,d;for(t=i[0],n=0;n<i.length-1;n++)d=D(this,c[o+n],r,n),d===T&&(d=this._$AH[n]),a||=!Y(d)||d!==this._$AH[n],d===g?t=g:t!==g&&(t+=(d??"")+i[n+1]),this._$AH[n]=d}a&&!s&&this.O(t)}O(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Be extends lt{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===g?void 0:t}}class Ie extends lt{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class je extends lt{constructor(t,r,o,s,i){super(t,r,o,s,i),this.type=5}_$AI(t,r=this){if((t=D(this,t,r,0)??g)===T)return;const o=this._$AH,s=t===g&&o!==g||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,i=t!==g&&(o===g||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class He{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const Fe=Ct.litHtmlPolyfillSupport;Fe?.(G,X),(Ct.litHtmlVersions??=[]).push("3.1.0");const qe=(e,t,r)=>{const o=r?.renderBefore??t;let s=o._$litPart$;if(s===void 0){const i=r?.renderBefore??null;o._$litPart$=s=new X(t.insertBefore(Z(),i),i,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let E=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qe(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};E._$litElement$=!0,E.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:E});const We=globalThis.litElementPolyfillSupport;We?.({LitElement:E});(globalThis.litElementVersions??=[]).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ke={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:Et},Ze=(e=Ke,t,r)=>{const{kind:o,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),i.set(r.name,e),o==="accessor"){const{name:a}=r;return{set(c){const n=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,n,e)},init(c){return c!==void 0&&this.C(a,void 0,e),c}}}if(o==="setter"){const{name:a}=r;return function(c){const n=this[a];t.call(this,c),this.requestUpdate(a,n,e)}}throw Error("Unsupported decorator location: "+o)};function u(e){return(t,r)=>typeof r=="object"?Ze(e,t,r):((o,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,a?{...o,wrapped:!0}:o),a?Object.getOwnPropertyDescriptor(s,i):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dt(e){return u({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function N(e,t){return(r,o,s)=>{const i=a=>a.renderRoot?.querySelector(e)??null;if(t){const{get:a,set:c}=typeof o=="object"?r:s??(()=>{const n=Symbol();return{get(){return this[n]},set(d){this[n]=d}}})();return Ht(r,o,{get(){let n=a.call(this);return n===void 0&&(n=i(this),(n!==null||this.hasUpdated)&&c.call(this,n)),n}})}return Ht(r,o,{get(){return i(this)}})}}const Ye="modulepreload",Ge=function(e){return"/"+e},Ft={},v=function(t,r,o){if(!r||r.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(r.map(i=>{if(i=Ge(i),i in Ft)return;Ft[i]=!0;const a=i.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!o)for(let b=s.length-1;b>=0;b--){const h=s[b];if(h.href===i&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":Ye,a||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),a)return new Promise((b,h)=>{d.addEventListener("load",b),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},St=Symbol.for("app-tools::log::1.x");globalThis[St]={setDebug:Je,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function Je(e){globalThis[St].debug=!!e}function Xe(e,t){globalThis[St].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function Qe(e){return(t,r)=>{Xe(`${e}: ${t}`,r)}}const S=Qe("router");class tr extends Event{constructor(t){super("route-changed"),this.context=t}}class er extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(r=>({...r,urlPattern:new URLPattern({pathname:r.path,baseURL:window.location.href,search:"*",hash:"*"})})),S("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href))}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return S(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const r of this.routes){const o=r.urlPattern.exec(t);if(o){const{title:s}=r,i=Object.fromEntries(new URLSearchParams(t.search)),a=o?.pathname?.groups??{};return this.context={url:t,title:typeof s=="function"?s({params:a,query:i,url:t}):s,params:a,query:i},r}}return S(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new tr(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const r=t.composedPath().find(i=>i.tagName==="A");if(!r||!r.href)return;const o=new URL(r.href);if(this.url.href===o.href||o.host!==window.location.host||r.hasAttribute("download")||r.href.includes("mailto:"))return;const s=r.getAttribute("target");s&&s!==""&&s!=="_self"||(t.preventDefault(),this.navigate(o))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,r={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let o=this._matchRoute(t)||this._matchRoute(this.fallback);S(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let s=this._collectPlugins(o);for(const i of s)try{const a=await i?.shouldNavigate?.(this.context);a&&(await a.condition()||(t=new URL(a.redirect,this.baseUrl),o=this._matchRoute(t)||this._matchRoute(this.fallback),s=this._collectPlugins(o),S("Redirecting",{context:this.context,route:this.route})))}catch(a){throw S(`Plugin "${i.name}" error on shouldNavigate hook`,a),a}if(this.route=o,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const i of s)try{await i?.beforeNavigation?.(this.context)}catch(a){throw S(`Plugin "${i.name}" error on beforeNavigation hook`,a),a}r.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const i of s)try{await i?.afterNavigation?.(this.context)}catch(a){throw S(`Plugin "${i.name}" error on afterNavigation hook`,a),a}}}function y(e){return{name:"lazy",beforeNavigation:()=>{e()}}}globalThis.URLPattern||await v(()=>import("./index-d961e0b8.js"),[]);const rr="/",qt=new er({fallback:"/404",routes:[{path:m(),title:"الصفحة الرئيسية",render:()=>f`<app-home></app-home>`},{path:m("about"),title:"عنا",plugins:[y(()=>v(()=>import("./app-about-71afd981.js"),["code/app-about-71afd981.js","code/chunk.AXGIBORK-17365f98.js"]))],render:()=>f`<app-about></app-about>`},{path:m("kitab-al-tahara"),title:"كتاب الطهارة",plugins:[y(()=>v(()=>import("./kitab-al-tahara-8aee82eb.js"),["code/kitab-al-tahara-8aee82eb.js","code/chunk.PFTIO6JM-d4d08caa.js","code/chunk.AXGIBORK-17365f98.js"]))],render:()=>f`<kitab-al-tahara></kitab-al-tahara>`},{path:m("kitab-al-tahara/bab-al-wodo"),title:"كتاب الطهارة باب الوضوء",plugins:[y(()=>v(()=>import("./bab-al-wodo-63d27675.js"),["code/bab-al-wodo-63d27675.js","code/chunk.PFTIO6JM-d4d08caa.js","code/chunk.AXGIBORK-17365f98.js"]))],render:()=>f`<kitab-al-tahara-bab-al-wodo></kitab-al-tahara-bab-al-wodo>`},{path:m("kitab-al-tahara/bab-al-wodo/1"),title:".تَبْلُغُ الحِلْيَةُ مِنَ المُؤْمِنِ، حَيْثُ يَبْلُغُ الوَضُوءُ",plugins:[y(()=>v(()=>import("./bab-al-wodo-1-13422c98.js"),["code/bab-al-wodo-1-13422c98.js","code/chunk.AXGIBORK-17365f98.js","code/chunk.PFTIO6JM-d4d08caa.js"]))],render:()=>f`<kitab-al-tahara-bab-al-wodo-1></kitab-al-tahara-bab-al-wodo-1>`},{path:m("kitab-al-salah"),title:"كتاب الصلاة",plugins:[y(()=>v(()=>import("./kitab-al-salah-0c1eedf0.js"),["code/kitab-al-salah-0c1eedf0.js","code/chunk.PFTIO6JM-d4d08caa.js"]))],render:()=>f`<kitab-al-salah></kitab-al-salah>`},{path:m("kitab-al-salah/bab-salat-al-fajr"),title:"باب صلاة الفجر",plugins:[y(()=>v(()=>import("./bab-salat-al-fajr-7b3b24e7.js"),["code/bab-salat-al-fajr-7b3b24e7.js","code/chunk.PFTIO6JM-d4d08caa.js"]))],render:()=>f`<bab-salat-al-fajr></bab-salat-al-fajr>`},{path:m("kitab-al-salah/bab-salat-al-fajr/1"),title:"كان في ذمة الله حتى يمسي",plugins:[y(()=>v(()=>import("./bab-salat-al-fajr-1-58c63ba6.js"),["code/bab-salat-al-fajr-1-58c63ba6.js","code/chunk.PFTIO6JM-d4d08caa.js"]))],render:()=>f`<bab-salat-al-fajr-1></bab-salat-al-fajr-1>`},{path:m("kitab-al-salah/bab-salat-al-fajr/2"),title:"أنَّ النَّبيَّ صَلَّى اللَّهُ عليه وسلَّمَ كانَ يَقْرَأُ في صَلَاةِ الفَجْرِ يَومَ الجُمُعَةِ",plugins:[y(()=>v(()=>import("./bab-salat-al-fajr-2-594ee9af.js"),["code/bab-salat-al-fajr-2-594ee9af.js","code/chunk.PFTIO6JM-d4d08caa.js"]))],render:()=>f`<bab-salat-al-fajr-2></bab-salat-al-fajr-2>`},{path:m("kitab-al-sawm"),title:"كتاب الصوم",plugins:[y(()=>v(()=>import("./kitab-al-sawm-be88eaa0.js"),["code/kitab-al-sawm-be88eaa0.js","code/chunk.PFTIO6JM-d4d08caa.js","code/chunk.AXGIBORK-17365f98.js"]))],render:()=>f`<kitab-al-sawm></kitab-al-sawm>`},{path:m("kitab-al-akhlaq"),title:"كتاب الأخلاق",plugins:[y(()=>v(()=>import("./kitab-al-akhlaq-459ca39f.js"),["code/kitab-al-akhlaq-459ca39f.js","code/chunk.PFTIO6JM-d4d08caa.js","code/chunk.AXGIBORK-17365f98.js"]))],render:()=>f`<kitab-al-akhlaq></kitab-al-akhlaq>`},{path:m("kitab-al-akhlaq"),title:"كتاب الأخلاق",plugins:[y(()=>v(()=>import("./kitab-al-akhlaq-459ca39f.js"),["code/kitab-al-akhlaq-459ca39f.js","code/chunk.PFTIO6JM-d4d08caa.js","code/chunk.AXGIBORK-17365f98.js"]))],render:()=>f`<kitab-al-akhlaq></kitab-al-akhlaq>`}]});function m(e){var t=rr;return e&&(t=t+e),t}var B=_`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,or=_`
  ${B}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,ue=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},he=Object.defineProperty,sr=Object.defineProperties,ir=Object.getOwnPropertyDescriptor,ar=Object.getOwnPropertyDescriptors,Wt=Object.getOwnPropertySymbols,nr=Object.prototype.hasOwnProperty,lr=Object.prototype.propertyIsEnumerable,bt=(e,t)=>{if(t=Symbol[e])return t;throw Error("Symbol."+e+" is not defined")},Kt=(e,t,r)=>t in e?he(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,z=(e,t)=>{for(var r in t||(t={}))nr.call(t,r)&&Kt(e,r,t[r]);if(Wt)for(var r of Wt(t))lr.call(t,r)&&Kt(e,r,t[r]);return e},ut=(e,t)=>sr(e,ar(t)),l=(e,t,r,o)=>{for(var s=o>1?void 0:o?ir(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&he(t,r,s),s},cr=function(e,t){this[0]=e,this[1]=t},Zr=e=>{var t=e[bt("asyncIterator")],r=!1,o,s={};return t==null?(t=e[bt("iterator")](),o=i=>s[i]=a=>t[i](a)):(t=t.call(e),o=i=>s[i]=a=>{if(r){if(r=!1,i==="throw")throw a;return a}return r=!0,{done:!1,value:new cr(new Promise(c=>{var n=t[i](a);if(!(n instanceof Object))throw TypeError("Object expected");c(n)}),1)}}),s[bt("iterator")]=()=>s,o("next"),"throw"in t?o("throw"):s.throw=i=>{throw i},"return"in t&&o("return"),s},$=class extends E{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,z({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){customElements.define(e,class extends t{},r);return}let s=" (unknown version)",i=s;"version"in t&&t.version&&(s=" v"+t.version),"version"in o&&o.version&&(i=" v"+o.version),!(s&&i&&s===i)&&console.warn(`Attempted to register <${e}>${s}, but <${e}>${i} has already been registered.`)}};$.version="2.12.0";$.dependencies={};l([u()],$.prototype,"dir",2);l([u()],$.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ur=e=>(...t)=>({_$litDirective$:e,values:t});class hr{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=ur(class extends hr{constructor(e){if(super(e),e.type!==dr.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.st?.has(o)&&this.it.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.it)o in t||(r.remove(o),this.it.delete(o));for(const o in t){const s=!!t[o];s===this.it.has(o)||this.st?.has(o)||(s?(r.add(o),this.it.add(o)):(r.remove(o),this.it.delete(o)))}return T}});var pe=class extends ${constructor(){super(...arguments),this.hasSlotController=new ue(this,"footer","header","image")}render(){return f`
      <div
        part="base"
        class=${Lt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};pe.styles=or;pe.define("sl-card");var pr=_`
  ${B}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;const yt=new Set,br=new MutationObserver(me),V=new Map;let be=document.documentElement.dir||"ltr",fe=document.documentElement.lang||navigator.language,O;br.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function ge(...e){e.map(t=>{const r=t.$code.toLowerCase();V.has(r)?V.set(r,Object.assign(Object.assign({},V.get(r)),t)):V.set(r,t),O||(O=t)}),me()}function me(){be=document.documentElement.dir||"ltr",fe=document.documentElement.lang||navigator.language,[...yt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let fr=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){yt.add(this.host)}hostDisconnected(){yt.delete(this.host)}dir(){return`${this.host.dir||be}`.toLowerCase()}lang(){return`${this.host.lang||fe}`.toLowerCase()}getTranslationData(t){var r,o;const s=new Intl.Locale(t.replace(/_/g,"-")),i=s?.language.toLowerCase(),a=(o=(r=s?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",c=V.get(`${i}-${a}`),n=V.get(i);return{locale:s,language:i,region:a,primary:c,secondary:n}}exists(t,r){var o;const{primary:s,secondary:i}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(s&&s[t]||i&&i[t]||r.includeFallback&&O&&O[t])}term(t,...r){const{primary:o,secondary:s}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(s&&s[t])i=s[t];else if(O&&O[t])i=O[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...r):i}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var ve={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};ge(ve);var gr=ve,Pt=class extends fr{};ge(gr);var ye=class extends ${constructor(){super(...arguments),this.localize=new Pt(this)}render(){return f`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};ye.styles=pr;var j=new WeakMap,H=new WeakMap,F=new WeakMap,ft=new WeakSet,et=new WeakMap,mr=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),i=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="sl-button";!o&&!a&&typeof s=="string"&&s.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(c=>{r.formData.append(s,c.toString())}):r.formData.append(s,i.toString()))},this.handleFormSubmit=r=>{var o;const s=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=j.get(this.form))==null||o.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!s&&!i(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),et.set(this.host,[])},this.handleInteraction=r=>{const o=et.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=z({form:r=>{const o=r.form;if(o){const i=r.getRootNode().getElementById(o);if(i)return i}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),et.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),et.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,j.has(this.form)?j.get(this.form).add(this.host):j.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),H.has(this.form)||(H.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),F.has(this.form)||(F.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=j.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),H.has(this.form)&&(this.form.reportValidity=H.get(this.form),H.delete(this.form)),F.has(this.form)&&(this.form.checkValidity=F.get(this.form),F.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ft.add(e):ft.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!ft.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},Ot=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ut(z({},Ot),{valid:!1,valueMissing:!0}));Object.freeze(ut(z({},Ot),{valid:!1,customError:!0}));var vr=_`
  ${B}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,yr=_`
  ${B}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,_t="";function Zt(e){_t=e}function _r(e=""){if(!_t){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)Zt(r.getAttribute("data-shoelace"));else{const o=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let s="";o&&(s=o.getAttribute("src")),Zt(s.split("/").slice(0,-1).join("/"))}}return _t.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var wr={name:"default",resolver:e=>_r(`assets/icons/${e}.svg`)},$r=wr,Yt={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},xr={name:"system",resolver:e=>e in Yt?`data:image/svg+xml,${encodeURIComponent(Yt[e])}`:""},Ar=xr,kr=[$r,Ar],wt=[];function Er(e){wt.push(e)}function Cr(e){wt=wt.filter(t=>t!==e)}function Gt(e){return kr.find(t=>t.name===e)}function ht(e,t){const r=z({waitUntilFirstUpdate:!1},t);return(o,s)=>{const{update:i}=o,a=Array.isArray(e)?e:[e];o.update=function(c){a.forEach(n=>{const d=n;if(c.has(d)){const b=c.get(d),h=this[d];b!==h&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[s](b,h)}}),i.call(this,c)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sr=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;var q=Symbol(),rt=Symbol(),gt,mt=new Map,x=class extends ${constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t?.spriteSheet)return f`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?q:rt}catch{return rt}try{const s=document.createElement("div");s.innerHTML=await o.text();const i=s.firstElementChild;if(((r=i?.tagName)==null?void 0:r.toLowerCase())!=="svg")return q;gt||(gt=new DOMParser);const c=gt.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):q}catch{return q}}connectedCallback(){super.connectedCallback(),Er(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Cr(this)}getIconSource(){const e=Gt(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?Gt(this.library):void 0;if(!t){this.svg=null;return}let s=mt.get(t);if(s||(s=this.resolveIcon(t,o),mt.set(t,s)),!this.initialRender)return;const i=await s;if(i===rt&&mt.delete(t),t===this.getIconSource().url){if(Sr(i)){this.svg=i;return}switch(i){case rt:case q:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};x.styles=yr;l([dt()],x.prototype,"svg",2);l([u({reflect:!0})],x.prototype,"name",2);l([u()],x.prototype,"src",2);l([u()],x.prototype,"label",2);l([u({reflect:!0})],x.prototype,"library",2);l([ht("label")],x.prototype,"handleLabelChange",1);l([ht(["name","src","library"])],x.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=Symbol.for(""),Lr=e=>{if(e?.r===_e)return e?._$litStatic$},Jt=(e,...t)=>({_$litStatic$:t.reduce((r,o,s)=>r+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[s+1],e[0]),r:_e}),Xt=new Map,Pr=e=>(t,...r)=>{const o=r.length;let s,i;const a=[],c=[];let n,d=0,b=!1;for(;d<o;){for(n=t[d];d<o&&(i=r[d],(s=Lr(i))!==void 0);)n+=s+t[++d],b=!0;d!==o&&c.push(i),a.push(n),d++}if(d===o&&a.push(t[o]),b){const h=a.join("$$lit$$");(t=Xt.get(h))===void 0&&(a.raw=a,Xt.set(h,t=a)),r=c}return e(t,...r)},vt=Pr(f);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=e=>e??g;var p=class extends ${constructor(){super(...arguments),this.formControlController=new mr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ue(this,"[default]","prefix","suffix"),this.localize=new Pt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Ot}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Jt`a`:Jt`button`;return vt`
      <${t}
        part="base"
        class=${Lt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${k(e?void 0:this.disabled)}
        type=${k(e?void 0:this.type)}
        title=${this.title}
        name=${k(e?void 0:this.name)}
        value=${k(e?void 0:this.value)}
        href=${k(e?this.href:void 0)}
        target=${k(e?this.target:void 0)}
        download=${k(e?this.download:void 0)}
        rel=${k(e?this.rel:void 0)}
        role=${k(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?vt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?vt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};p.styles=vr;p.dependencies={"sl-icon":x,"sl-spinner":ye};l([N(".button")],p.prototype,"button",2);l([dt()],p.prototype,"hasFocus",2);l([dt()],p.prototype,"invalid",2);l([u()],p.prototype,"title",2);l([u({reflect:!0})],p.prototype,"variant",2);l([u({reflect:!0})],p.prototype,"size",2);l([u({type:Boolean,reflect:!0})],p.prototype,"caret",2);l([u({type:Boolean,reflect:!0})],p.prototype,"disabled",2);l([u({type:Boolean,reflect:!0})],p.prototype,"loading",2);l([u({type:Boolean,reflect:!0})],p.prototype,"outline",2);l([u({type:Boolean,reflect:!0})],p.prototype,"pill",2);l([u({type:Boolean,reflect:!0})],p.prototype,"circle",2);l([u()],p.prototype,"type",2);l([u()],p.prototype,"name",2);l([u()],p.prototype,"value",2);l([u()],p.prototype,"href",2);l([u()],p.prototype,"target",2);l([u()],p.prototype,"rel",2);l([u()],p.prototype,"download",2);l([u()],p.prototype,"form",2);l([u({attribute:"formaction"})],p.prototype,"formAction",2);l([u({attribute:"formenctype"})],p.prototype,"formEnctype",2);l([u({attribute:"formmethod"})],p.prototype,"formMethod",2);l([u({attribute:"formnovalidate",type:Boolean})],p.prototype,"formNoValidate",2);l([u({attribute:"formtarget"})],p.prototype,"formTarget",2);l([ht("disabled",{waitUntilFirstUpdate:!0})],p.prototype,"handleDisabledChange",1);p.define("sl-button");var Or=_`
  ${B}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,we=new Map,Rr=new WeakMap;function Ur(e){return e??{keyframes:[],options:{duration:0}}}function Qt(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function $e(e,t){we.set(e,Ur(t))}function te(e,t,r){const o=Rr.get(e);if(o?.[t])return Qt(o[t],r.dir);const s=we.get(t);return s?Qt(s,r.dir):{keyframes:[],options:{duration:0}}}function ee(e,t){return new Promise(r=>{function o(s){s.target===e&&(e.removeEventListener(t,o),r())}e.addEventListener(t,o)})}function re(e,t,r){return new Promise(o=>{if(r?.duration===1/0)throw new Error("Promise-based animations must be finite.");const s=e.animate(t,ut(z({},r),{duration:Tr()?0:r.duration}));s.addEventListener("cancel",o,{once:!0}),s.addEventListener("finish",o,{once:!0})})}function Tr(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function oe(e){return Promise.all(e.getAnimations().map(t=>new Promise(r=>{const o=requestAnimationFrame(r);t.addEventListener("cancel",()=>o,{once:!0}),t.addEventListener("finish",()=>o,{once:!0}),t.cancel()})))}function se(e,t){return e.map(r=>ut(z({},r),{height:r.height==="auto"?`${t}px`:r.height}))}var w=class extends ${constructor(){super(...arguments),this.localize=new Pt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await oe(this.body);const{keyframes:t,options:r}=te(this,"details.show",{dir:this.localize.dir()});await re(this.body,se(t,this.body.scrollHeight),r),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await oe(this.body);const{keyframes:t,options:r}=te(this,"details.hide",{dir:this.localize.dir()});await re(this.body,se(t,this.body.scrollHeight),r),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ee(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ee(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return f`
      <details
        part="base"
        class=${Lt({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};w.styles=Or;w.dependencies={"sl-icon":x};l([N(".details")],w.prototype,"details",2);l([N(".details__header")],w.prototype,"header",2);l([N(".details__body")],w.prototype,"body",2);l([N(".details__expand-icon-slot")],w.prototype,"expandIconSlot",2);l([u({type:Boolean,reflect:!0})],w.prototype,"open",2);l([u()],w.prototype,"summary",2);l([u({type:Boolean,reflect:!0})],w.prototype,"disabled",2);l([ht("open",{waitUntilFirstUpdate:!0})],w.prototype,"handleOpenChange",1);$e("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});$e("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});w.define("sl-details");var zr=_`
  ${B}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Q=class extends ${constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=W(e.target);t?.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=W(e.target);t?.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=W(e.target);t?.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=W(e.target);t?.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const r=e.indexOf(t),o=W(t);o&&(o.classList.add("sl-button-group__button"),o.classList.toggle("sl-button-group__button--first",r===0),o.classList.toggle("sl-button-group__button--inner",r>0&&r<e.length-1),o.classList.toggle("sl-button-group__button--last",r===e.length-1),o.classList.toggle("sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return f`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Q.styles=zr;l([N("slot")],Q.prototype,"defaultSlot",2);l([dt()],Q.prototype,"disableRole",2);l([u()],Q.prototype,"label",2);function W(e){var t;const r="sl-button, sl-radio-button";return(t=e.closest(r))!=null?t:e.querySelector(r)}Q.define("sl-button-group");const Mr=_`
  @media (min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }
  .custom-br {
    height: 3px;
    background-color: #04171f !important ;
    border: solid 1px #5f8af0;
    margin-bottom: 2px;
    margin-top: 2px;

  }
  main {
    margin-top: 80px;
       margin-right: 20px;
            margin-left: 20px;
  }

  sl-button::part(base) {
    border: solid 1px #5f8af0;
    color: #ffffff;
    background:#0000006c
  }

  sl-button::part(base):hover {
    background: #ffffff
    border: solid 1px #d0ccc5;
    color: #d0ccc5;
  }

  sl-button::part(base):active {
    background: #f9688036;
  }
`;var Vr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,xe=(e,t,r,o)=>{for(var s=o>1?void 0:o?Dr(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&Vr(t,r,s),s};let at=class extends E{constructor(){super(...arguments),this.message="Welcome!"}render(){return f`
      <app-header></app-header>

      <main>
        <div class="custom-br"></div>
        <div class="custom-br"></div>
        <sl-button size="large" href="${m("kitab-al-salah")}">
          كــتـاب الـصــلاة
        </sl-button>

        <div class="custom-br"></div>
        <div class="custom-br"></div>
        <sl-button size="large" href="${m("kitab-al-tahara")}">
          كــتـاب الطــهـارة
        </sl-button>

        <div class="custom-br"></div>
        <div class="custom-br"></div>
        <sl-button size="large" href="${m("kitab-al-sawm")}">
          كــتـاب الــصــوم
        </sl-button>

        <div class="custom-br"></div>
        <div class="custom-br"></div>
        <sl-button size="large" href="${m("kitab-al-akhlaq")}">
          كــتـاب الأخــلاق
        </sl-button>
        <div class="custom-br"></div>
        <div class="custom-br"></div>
      </main>
    `}};at.styles=[Mr,_`
      sl-button {
        width: 100%;
      }
    `];xe([u()],at.prototype,"message",2);at=xe([ct("app-home")],at);var Nr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,Rt=(e,t,r,o)=>{for(var s=o>1?void 0:o?Br(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&Nr(t,r,s),s};let J=class extends E{constructor(){super(...arguments),this.title="كتاب الاحاديث",this.enableBack=!1}render(){return f`
      <header>
        <div id="back-button-block">
          ${this.enableBack?f`<sl-button
                size="large"
                variant="text"
                href="${m()}"
              >
                رحــــــيــــق الــــســــــــنــــــن
              </sl-button>`:null}
        </div>
      </header>
    `}};J.styles=_`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      color: white;
      height: 4em;
      padding-right: 16px;
      padding-top: 12px;

      position: fixed;
      right: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 50px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 20px;
      font-weight: bold;
    }

    nav a {
      margin-right: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 12em;
    }

    @media (prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
    sl-button {
      border: 1px dotted var(--sl-color-primary-700);
      color: var(--sl-color-primary-700);
      border-radius: 25px;
      background-color: var(--sl-color-primary-100);
    }
    sl-button::part(label) {
      color: var(--sl-color-primary-700);
    }
  `;Rt([u({type:String})],J.prototype,"title",2);Rt([u({type:Boolean})],J.prototype,"enableBack",2);J=Rt([ct("app-header")],J);var Ir=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,Ae=(e,t,r,o)=>{for(var s=o>1?void 0:o?jr(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&Ir(t,r,s),s};let $t=class extends E{constructor(){super(...arguments),this.meh="كتاب الاحاديث"}render(){return f`



    <sl-button href="kitab-al-salah/1"> go to hadith 123</sl-button>


    `}};Ae([u({type:String})],$t.prototype,"meh",2);$t=Ae([ct("app-hadith")],$t);var Hr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,qr=(e,t,r,o)=>{for(var s=o>1?void 0:o?Fr(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&Hr(t,r,s),s};let xt=class extends E{firstUpdated(){qt.addEventListener("route-changed",()=>{"startViewTransition"in document?document.startViewTransition(()=>this.requestUpdate()):this.requestUpdate()})}render(){return qt.render()}};xt.styles=_`
    main {
     padding-right: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;xt=qr([ct("app-index")],xt);export{ue as H,Pt as L,x as S,Zr as _,Mr as a,l as b,B as c,dt as d,N as e,$ as f,Jt as g,vt as h,_ as i,Lt as j,$e as k,te as l,re as m,u as n,k as o,oe as p,ee as q,m as r,E as s,ct as t,ht as w,f as x};
//# sourceMappingURL=index-f1bcbf46.js.map

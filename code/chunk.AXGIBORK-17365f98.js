import{i as C,c as F,_ as K,S as B,b as i,e as m,d as R,n as s,f as z,g as k,h as I,j as S,o as l,w as L,k as h,H as P,L as q,l as p,m as f,p as y,q as x,x as $}from"./index-f1bcbf46.js";var U=C`
  ${F}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function H(e){return!!(e.offsetParent||e.offsetWidth||e.offsetHeight||e.getClientRects().length)}function O(e){const t=e.tagName.toLowerCase();return e.getAttribute("tabindex")==="-1"||e.hasAttribute("disabled")||t==="input"&&e.getAttribute("type")==="radio"&&!e.hasAttribute("checked")||!H(e)||window.getComputedStyle(e).visibility==="hidden"?!1:(t==="audio"||t==="video")&&e.hasAttribute("controls")||e.hasAttribute("tabindex")||e.hasAttribute("contenteditable")&&e.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function A(e){const t=[];function o(a){if(a instanceof Element){if(a.hasAttribute("inert"))return;!t.includes(a)&&O(a)&&t.push(a);const d=u=>{var c;return((c=u.getRootNode({composed:!0}))==null?void 0:c.host)!==e};a instanceof HTMLSlotElement&&d(a)&&a.assignedElements({flatten:!0}).forEach(u=>{o(u)}),a.shadowRoot!==null&&a.shadowRoot.mode==="open"&&o(a.shadowRoot)}[...a.children].forEach(d=>o(d))}return o(e),t.sort((a,d)=>{const u=Number(a.getAttribute("tabindex"))||0;return(Number(d.getAttribute("tabindex"))||0)-u})}function*D(e=document.activeElement){e!=null&&(yield e,"shadowRoot"in e&&e.shadowRoot&&e.shadowRoot.mode!=="closed"&&(yield*K(D(e.shadowRoot.activeElement))))}function M(){return[...D()].pop()}var b=[],N=class{constructor(e){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var o,a;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward",t.preventDefault();const d=A(this.element),u=M();let c=d.findIndex(T=>T===u);if(c===-1){this.currentFocus=d[0],(o=this.currentFocus)==null||o.focus({preventScroll:!0});return}const w=this.tabDirection==="forward"?1:-1;c+w>=d.length?c=0:c+w<0?c=d.length-1:c+=w,this.currentFocus=d[c],(a=this.currentFocus)==null||a.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e}activate(){b.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){b=b.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return b[b.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=A(this.element);if(!this.element.matches(":focus-within")){const t=e[0],o=e[e.length-1],a=this.tabDirection==="forward"?t:o;typeof a?.focus=="function"&&(this.currentFocus=a,a.focus({preventScroll:!0}))}}}},_=new Set;function W(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function v(e){if(_.add(e),!document.body.classList.contains("sl-scroll-lock")){const t=W();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function g(e){_.delete(e),_.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}var j=C`
  ${F}

  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,r=class extends z{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?k`a`:k`button`;return I`
      <${t}
        part="base"
        class=${S({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${l(e?void 0:this.disabled)}
        type=${l(e?void 0:"button")}
        href=${l(e?this.href:void 0)}
        target=${l(e?this.target:void 0)}
        download=${l(e?this.download:void 0)}
        rel=${l(e&&this.target?"noreferrer noopener":void 0)}
        role=${l(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${l(this.name)}
          library=${l(this.library)}
          src=${l(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};r.styles=j;r.dependencies={"sl-icon":B};i([m(".icon-button")],r.prototype,"button",2);i([R()],r.prototype,"hasFocus",2);i([s()],r.prototype,"name",2);i([s()],r.prototype,"library",2);i([s()],r.prototype,"src",2);i([s()],r.prototype,"href",2);i([s()],r.prototype,"target",2);i([s()],r.prototype,"download",2);i([s()],r.prototype,"label",2);i([s({type:Boolean,reflect:!0})],r.prototype,"disabled",2);function E(e){return e.charAt(0).toUpperCase()+e.slice(1)}var n=class extends z{constructor(){super(...arguments),this.hasSlotController=new P(this,"footer"),this.localize=new q(this),this.modal=new N(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key==="Escape"&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),v(this)))}disconnectedCallback(){super.disconnectedCallback(),g(this)}requestClose(e){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:e}}).defaultPrevented){const o=p(this,"drawer.denyClose",{dir:this.localize.dir()});f(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),v(this));const e=this.querySelector("[autofocus]");e&&e.removeAttribute("autofocus"),await Promise.all([y(this.drawer),y(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute("autofocus","")});const t=p(this,`drawer.show${E(this.placement)}`,{dir:this.localize.dir()}),o=p(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([f(this.panel,t.keyframes,t.options),f(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),g(this)),await Promise.all([y(this.drawer),y(this.overlay)]);const e=p(this,`drawer.hide${E(this.placement)}`,{dir:this.localize.dir()}),t=p(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([f(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),f(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),v(this)),this.open&&this.contained&&(this.modal.deactivate(),g(this))}async show(){if(!this.open)return this.open=!0,x(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,x(this,"sl-after-hide")}render(){return $`
      <div
        part="base"
        class=${S({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${l(this.noHeader?this.label:void 0)}
          aria-labelledby=${l(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":$`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};n.styles=U;n.dependencies={"sl-icon-button":r};i([m(".drawer")],n.prototype,"drawer",2);i([m(".drawer__panel")],n.prototype,"panel",2);i([m(".drawer__overlay")],n.prototype,"overlay",2);i([s({type:Boolean,reflect:!0})],n.prototype,"open",2);i([s({reflect:!0})],n.prototype,"label",2);i([s({reflect:!0})],n.prototype,"placement",2);i([s({type:Boolean,reflect:!0})],n.prototype,"contained",2);i([s({attribute:"no-header",type:Boolean,reflect:!0})],n.prototype,"noHeader",2);i([L("open",{waitUntilFirstUpdate:!0})],n.prototype,"handleOpenChange",1);i([L("contained",{waitUntilFirstUpdate:!0})],n.prototype,"handleNoModalChange",1);h("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});h("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});h("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});h("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});h("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});h("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});h("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});h("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});h("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});h("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});h("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});n.define("sl-drawer");
//# sourceMappingURL=chunk.AXGIBORK-17365f98.js.map

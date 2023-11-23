import{b,c as m,_ as t,d as u,f as i,g as d,S as p,L as f,y as l,H as h,o as _,n as c}from"./index-5b03b6e7.js";var g=b`
  ${m}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,r=class extends p{constructor(){super(...arguments),this.localize=new f(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const s=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");s.forEach((e,o)=>{const n=e.querySelector('[slot="separator"]');n===null?e.append(this.getSeparator()):n.hasAttribute("data-default")&&n.replaceWith(this.getSeparator()),o===s.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),l`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
      </slot>
    `}};r.styles=g;t([u("slot")],r.prototype,"defaultSlot",2);t([u('slot[name="separator"]')],r.prototype,"separatorSlot",2);t([i()],r.prototype,"label",2);r=t([d("sl-breadcrumb")],r);var y=b`
  ${m}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
  }
`,a=class extends p{constructor(){super(...arguments),this.hasSlotController=new h(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const s=!!this.href;return l`
      <div
        part="base"
        class=${_({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${s?l`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${c(this.target?this.target:void 0)}"
                rel=${c(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:l`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `}};a.styles=y;t([i()],a.prototype,"href",2);t([i()],a.prototype,"target",2);t([i()],a.prototype,"rel",2);a=t([d("sl-breadcrumb-item")],a);
//# sourceMappingURL=chunk.VGA5RVOH-310d8b0f.js.map

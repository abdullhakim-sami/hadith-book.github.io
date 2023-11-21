import{i as g,b as p,c as h,_ as a,d as f,f as b,g as _,S as v,L as x,y as n,H as y,o as S,l as u,s as w,x as $,a as C,e as z}from"./index-765334bc.js";import"./chunk.KRP3ULQL-63490344.js";const A=g`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-right: 25px;
  }
`;var D=p`
  ${h}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,i=class extends v{constructor(){super(...arguments),this.localize=new x(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const r=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");r.forEach((e,s)=>{const t=e.querySelector('[slot="separator"]');t===null?e.append(this.getSeparator()):t.hasAttribute("data-default")&&t.replaceWith(this.getSeparator()),s===r.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),n`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
      </slot>
    `}};i.styles=D;a([f("slot")],i.prototype,"defaultSlot",2);a([f('slot[name="separator"]')],i.prototype,"separatorSlot",2);a([b()],i.prototype,"label",2);i=a([_("sl-breadcrumb")],i);var E=p`
  ${h}

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
`,o=class extends v{constructor(){super(...arguments),this.hasSlotController=new y(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){const r=!!this.href;return n`
      <div
        part="base"
        class=${S({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${r?n`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${u(this.target?this.target:void 0)}"
                rel=${u(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:n`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `}};o.styles=E;a([b()],o.prototype,"href",2);a([b()],o.prototype,"target",2);a([b()],o.prototype,"rel",2);o=a([_("sl-breadcrumb-item")],o);var L=Object.defineProperty,O=Object.getOwnPropertyDescriptor,P=(r,e,s,t)=>{for(var l=t>1?void 0:t?O(e,s):e,m=r.length-1,c;m>=0;m--)(c=r[m])&&(l=(t?c(e,s,l):c(l))||l);return t&&l&&L(e,s,l),l};let d=class extends w{render(){return $`
      <app-header ?enableBack="${!0}">


    </app-header>

<main>
<sl-breadcrumb>
<sl-breadcrumb-item>
  <sl-icon slot="prefix" name="house"></sl-icon>
  الصفحة الرئيسية
</sl-breadcrumb-item>
<sl-breadcrumb-item>كتاب الطهارة</sl-breadcrumb-item>
<sl-breadcrumb-item>باب الوضوء</sl-breadcrumb-item>

<sl-breadcrumb-item> تَبْلُغُ الحِلْيَةُ مِنَ المُؤْمِنِ، حَيْثُ يَبْلُغُ الوَضُوءُ   </sl-breadcrumb-item>

</sl-breadcrumb>

<h1 > باب الوضوء</h1>

<div class="custom-br"></div>
<div class="custom-br"></div>
<h2>
كُنْتُ خَلْفَ أبِي هُرَيْرَةَ وهو يَتَوَضَّأُ لِلصَّلاةِ، فَكانَ يَمُدُّ يَدَهُ حتَّى تَبْلُغَ إبْطَهُ فَقُلتُ له: يا أبا هُرَيْرَةَ ما هذا الوُضُوءُ؟ فقالَ: يا بَنِي فَرُّوخَ أنتُمْ هاهُنا؟ لو عَلِمْتُ أنَّكُمْ هاهُنا ما تَوَضَّأْتُ هذا الوُضُوءَ، سَمِعْتُ خَلِيلِي صَلَّى اللَّهُ عليه وسلَّمَ يقولُ: تَبْلُغُ الحِلْيَةُ مِنَ المُؤْمِنِ، حَيْثُ يَبْلُغُ الوَضُوءُ.
الراوي : أبو هريرة | المحدث : مسلم | المصدر : صحيح مسلم
الصفحة أو الرقم: 250 | خلاصة حكم المحدث : [صحيح]
التخريج : أخرجه مسلم (250)



<br>
<br/>
<div class="custom-br"></div>


 وبَنُو فرُّوخَ: هُمُ العَجَمُ، وقيلَ: إنَّ فرُّوخَ من وَلدِ إبراهيمَ عليه السَّلامُ، وهُو أخو إسماعيلَ وإسحاقَ، ومِن ولدِه العَجَمُ، ثُمَّ أخبَرَ أنَّه لو يَعلَمُ أنَّ أحدًا يَراه ما تَوضَّأ هذا الوُضوءَ.
 <br></br>
وأرادَ أبو هُرَيرةَ بكَلامِه هذا أنَّه يَنبَغي لمَن يُقتدى به إذا تَرخَّصَ في أمرٍ أو تَشدَّدَ فيه مع نفسِه، أو لاعتقادِه في ذلك مَذهَبًا شَذَّ به عنِ النَّاسِ: ألَّا يَفعَلَه بحَضرةِ العامَّةِ؛ لئلَّا يَترخَّصوا برُخصتِه لغَيرِ ضَرورةٍ أو يَعتقِدُوا أنَّ ما تَشدَّدَ فيه هو الفرضُ.
<br></br>
 «سَمِعتُ خَلِيلي صلَّى اللهُ عليه وسلَّمَ يقولُ: تبلُغُ الحِليةُ منَ المؤْمِنِ حَيْثُ يَبلُغُ الوُضوءُ»، والمقصودُ أنَّ المؤمِنَ يُحلَّى في الجنَّةِ وتكونُ هذه الحِليةُ إلى حيثُ يَبلُغُ الوضوءُ، فتَبلُغُ الحِليةُ في اليدينِ إلى المِرفقَينِ؛ لأنَّ الوضوءَ يَبلُغُ إلى المِرفَقينِ؛ فكان مُرادُ أبي هُرَيرةَ رَضيَ اللهُ عنه أن يَبلُغَ بوُضوئه أبعَدَ ما يَستطيعُ من أعضائه؛ ليَبلُغَ به الحِليةَ في الجَنَّةِ.
 <br></br>

وفيه: أنَّه يَنبغي للعالِمِ ألَّا يَفعَلَ عندَ العَوامِّ ما لا يَعرِفُونَ، إذا خافَ عليهم أن يَفهَموا منه غيرَ المُرادِ.

</h2>
</main>



    `}};d.styles=[C,A];d=P([z("kitab-al-tahara-bab-al-wodo-1")],d);export{d as AppAbout};
//# sourceMappingURL=bab-al-wodo-1-fb15f8b2.js.map

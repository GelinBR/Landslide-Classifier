// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./conditionalSlot ./dom ./loadable ./locale ./t9n ./ExpandToggle ./observers ./action ./action-group ./action-menu ./icon ./loader ./popover".split(" "),function(f,c,k,l,g,m,e,h,t,u,v,w,x,y,z){function n(){"undefined"!==typeof customElements&&"calcite-action-pad calcite-action calcite-action-group calcite-action-menu calcite-icon calcite-loader calcite-popover".split(" ").forEach(a=>{switch(a){case "calcite-action-pad":customElements.get(a)||customElements.define(a,
p);break;case "calcite-action":customElements.get(a)||u.defineCustomElement();break;case "calcite-action-group":customElements.get(a)||v.defineCustomElement();break;case "calcite-action-menu":customElements.get(a)||w.defineCustomElement();break;case "calcite-icon":customElements.get(a)||x.defineCustomElement();break;case "calcite-loader":customElements.get(a)||y.defineCustomElement();break;case "calcite-popover":customElements.get(a)||z.defineCustomElement()}})}const p=c.proxyCustomElement(class extends c.H{constructor(){super();
this.__registerHost();this.__attachShadow();this.calciteActionPadToggle=c.createEvent(this,"calciteActionPadToggle",6);this.mutationObserver=t.createObserver("mutation",()=>this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group"))));this.actionMenuOpenHandler=a=>{if(a.target.menuOpen){const b=a.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(d=>{b.includes(d)||(d.menuOpen=!1)})}};this.toggleExpand=()=>{this.expanded=!this.expanded;this.calciteActionPadToggle.emit()};
this.handleDefaultSlotChange=a=>{a=l.slotChangeGetAssignedElements(a).filter(b=>b?.matches("calcite-action-group"));this.setGroupLayout(a)};this.handleTooltipSlotChange=a=>{this.expandTooltip=l.slotChangeGetAssignedElements(a).filter(b=>b?.matches("calcite-tooltip"))[0]};this.actionsEndGroupLabel=void 0;this.expanded=this.expandDisabled=!1;this.layout="vertical";this.messageOverrides=this.messages=this.scale=this.position=void 0;this.overlayPositioning="absolute";this.expandTooltip=void 0;this.effectiveLocale=
"";this.defaultMessages=void 0}expandedHandler(a){h.toggleChildActionText({el:this.el,expanded:a})}layoutHandler(){this.updateGroups()}onMessagesChange(){}effectiveLocaleChange(){e.updateMessages(this,this.effectiveLocale)}connectedCallback(){k.connectConditionalSlotComponent(this);m.connectLocalized(this);e.connectMessages(this);this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}disconnectedCallback(){m.disconnectLocalized(this);e.disconnectMessages(this);k.disconnectConditionalSlotComponent(this);
this.mutationObserver?.disconnect()}async componentWillLoad(){g.setUpLoadableComponent(this);const {el:a,expanded:b}=this;h.toggleChildActionText({el:a,expanded:b});await e.setUpMessages(this)}componentDidLoad(){g.setComponentLoaded(this)}async setFocus(){await g.componentFocusable(this);this.el?.focus()}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(a){a.forEach(b=>b.layout=this.layout)}renderBottomActionGroup(){const {expanded:a,expandDisabled:b,
messages:d,el:A,position:B,toggleExpand:C,scale:q,layout:D,actionsEndGroupLabel:E,overlayPositioning:F}=this,r=b?null:c.h(h.ExpandToggle,{collapseLabel:d.collapseLabel,collapseText:d.collapse,el:A,expandLabel:d.expandLabel,expandText:d.expand,expanded:a,position:B,scale:q,toggle:C,tooltip:this.expandTooltip});return r?c.h("calcite-action-group",{class:"action-group--end",label:E,layout:D,overlayPositioning:F,scale:q},c.h("slot",{name:"expand-tooltip",onSlotchange:this.handleTooltipSlotChange}),r):
null}render(){return c.h(c.Host,{key:"ca50c5f475d78b92b5347ab912727587420ceea5",onCalciteActionMenuOpen:this.actionMenuOpenHandler},c.h("div",{key:"81b26e9b6bd0a04357fe00ef55111c6bb609f4e7",class:"container"},c.h("slot",{key:"e346dc6cfab0e26cfc694b43063715d7b845ae32",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],
layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:var(--calcite-action-pad-corner-radius, 0.125rem);background:transparent}:host([expanded][layout\x3dvertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width, auto)}:host([layout\x3dvertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:1px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);gap:var(--calcite-action-pad-items-space, 0);border-radius:calc(var(--calcite-action-pad-corner-radius, 0.125rem) * 2);background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout\x3dhorizontal]) .container{flex-direction:row}:host([layout\x3dhorizontal]) .container .action-group--bottom{padding:0px}:host([layout\x3dhorizontal]) .container ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:1px}:host([hidden]){display:none}[hidden]{display:none}"}},
[17,"calcite-action-pad",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],expandTooltip:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);n();f.CalciteActionPad=
p;f.defineCustomElement=n;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
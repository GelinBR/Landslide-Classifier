// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./componentsUtils ./dom ./interactive ./loadable ./locale ./t9n ./panel ./action ./action-menu ./icon ./loader ./popover ./scrim".split(" "),function(g,b,t,m,h,n,f,c,u,v,w,x,y,z){function p(){"undefined"!==typeof customElements&&"calcite-flow-item calcite-action calcite-action-menu calcite-icon calcite-loader calcite-panel calcite-popover calcite-scrim".split(" ").forEach(a=>{switch(a){case "calcite-flow-item":customElements.get(a)||customElements.define(a,q);break;case "calcite-action":customElements.get(a)||
u.defineCustomElement();break;case "calcite-action-menu":customElements.get(a)||v.defineCustomElement();break;case "calcite-icon":customElements.get(a)||w.defineCustomElement();break;case "calcite-loader":customElements.get(a)||x.defineCustomElement();break;case "calcite-panel":customElements.get(a)||c.defineCustomElement();break;case "calcite-popover":customElements.get(a)||y.defineCustomElement();break;case "calcite-scrim":customElements.get(a)||z.defineCustomElement()}})}const q=b.proxyCustomElement(class extends b.H{constructor(){super();
this.__registerHost();this.__attachShadow();this.calciteFlowItemBack=b.createEvent(this,"calciteFlowItemBack",7);this.calciteFlowItemScroll=b.createEvent(this,"calciteFlowItemScroll",6);this.calciteFlowItemClose=b.createEvent(this,"calciteFlowItemClose",6);this.calciteFlowItemToggle=b.createEvent(this,"calciteFlowItemToggle",6);this.handleInternalPanelScroll=a=>{a.target===this.containerEl&&(a.stopPropagation(),this.calciteFlowItemScroll.emit())};this.handleInternalPanelClose=a=>{a.target===this.containerEl&&
(a.stopPropagation(),this.closed=!0,this.calciteFlowItemClose.emit())};this.handleInternalPanelToggle=a=>{a.target===this.containerEl&&(a.stopPropagation(),this.collapsed=a.target.collapsed,this.calciteFlowItemToggle.emit())};this.backButtonClick=()=>{this.calciteFlowItemBack.emit()};this.setBackRef=a=>{this.backButtonEl=a};this.setContainerRef=a=>{this.containerEl=a};this.collapsed=this.closed=this.closable=!1;this.collapseDirection="down";this.collapsible=!1;this.description=this.beforeClose=this.beforeBack=
void 0;this.disabled=!1;this.headingLevel=this.heading=void 0;this.menuOpen=this.loading=!1;this.messages=this.messageOverrides=void 0;this.overlayPositioning="absolute";this.scale="m";this.showBackButton=!1;this.defaultMessages=void 0;this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){n.connectLocalized(this);f.connectMessages(this)}async componentWillLoad(){await f.setUpMessages(this);h.setUpLoadableComponent(this)}componentDidRender(){m.updateHostInteraction(this)}disconnectedCallback(){n.disconnectLocalized(this);
f.disconnectMessages(this)}componentDidLoad(){h.setComponentLoaded(this)}effectiveLocaleChange(){f.updateMessages(this,this.effectiveLocale)}async setFocus(){await h.componentFocusable(this);const {backButtonEl:a,containerEl:d}=this;if(a)return a.setFocus();if(d)return d.setFocus()}async scrollContentTo(a){await this.containerEl?.scrollContentTo(a)}renderBackButton(){var {el:a}=this;a="rtl"===t.getElementDir(a);const {showBackButton:d,backButtonClick:k,messages:l}=this,e=l.back;return d?b.h("calcite-action",
{"aria-label":e,class:"back-button",icon:a?"chevron-right":"chevron-left",key:"flow-back-button",onClick:k,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:e,title:e}):null}render(){const {collapsed:a,collapseDirection:d,collapsible:k,closable:l,closed:e,description:A,disabled:r,heading:B,headingLevel:C,loading:D,menuOpen:E,messages:F,overlayPositioning:G,beforeClose:H}=this;return b.h(b.Host,{key:"2e7872bb2687db0b67ddbf375f8ec0beaabbda36"},b.h(m.InteractiveContainer,{key:"a9418954405a2cec2092bae3be5d77f02306e3c9",
disabled:r},b.h("calcite-panel",{key:"d563c751421bf2d66c03286deaa613e09f585546",beforeClose:H,closable:l,closed:e,collapseDirection:d,collapsed:a,collapsible:k,description:A,disabled:r,heading:B,headingLevel:C,loading:D,menuOpen:E,messageOverrides:F,onCalcitePanelClose:this.handleInternalPanelClose,onCalcitePanelScroll:this.handleInternalPanelScroll,onCalcitePanelToggle:this.handleInternalPanelToggle,overlayPositioning:G,ref:this.setContainerRef,scale:this.scale},this.renderBackButton(),b.h("slot",
{key:"c506ec8bb4debbd6a9da6c7941878de49776f614",name:"action-bar",slot:c.SLOTS.actionBar}),b.h("slot",{key:"e76e55e654ff878acff734bdf387402a9e262159",name:"alerts",slot:c.SLOTS.alerts}),b.h("slot",{key:"f7ab8839d7b101e31087130ebf3e36af1ec7da24",name:"header-actions-start",slot:c.SLOTS.headerActionsStart}),b.h("slot",{key:"2932c4c15b168732356b8e55fcc3064f5b3f4cf5",name:"header-actions-end",slot:c.SLOTS.headerActionsEnd}),b.h("slot",{key:"1ef8a9050683022733695445092f8c626487d87b",name:"header-content",
slot:c.SLOTS.headerContent}),b.h("slot",{key:"24c0ab570a601a6c0edfb0c820e580fd24b158ce",name:"header-menu-actions",slot:c.SLOTS.headerMenuActions}),b.h("slot",{key:"ec55bbe7ba939a6efb35225850c37a1aadb97275",name:"fab",slot:c.SLOTS.fab}),b.h("slot",{key:"aa0bfec47656ef9f7f575cd933897a7909e5badc",name:"content-top",slot:c.SLOTS.contentTop}),b.h("slot",{key:"e23532d080e2df529c2aeb6af043c6efe7a0ab6d",name:"content-bottom",slot:c.SLOTS.contentBottom}),b.h("slot",{key:"db6ffc0d9300c77067a4c88ab277de685c7713af",
name:"footer-start",slot:c.SLOTS.footerStart}),b.h("slot",{key:"5f249356da9292f34c4036d0d0741f048fe999e9",name:"footer",slot:c.SLOTS.footer}),b.h("slot",{key:"7476137bacc0f3be5c97682c5027f74d73254765",name:"footer-end",slot:c.SLOTS.footerEnd}),b.h("slot",{key:"58f60a46c42a05abe9b100a57d478d991e4f25bc",name:"footer-actions",slot:c.SLOTS.footerActions}),b.h("slot",{key:"926a8d94b76b6fcdef6dfd219ba8180c44f81c35"}))))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],
effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],beforeClose:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]},void 0,
{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);p();g.CalciteFlowItem=q;g.defineCustomElement=p;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
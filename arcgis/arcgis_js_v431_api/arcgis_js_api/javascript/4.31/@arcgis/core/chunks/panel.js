/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{p as e,H as t,c as n,h as a,a as o}from"./componentsUtils.js";import{s as i,n as s,f as l,t as r}from"./dom.js";import{u as c,I as d}from"./interactive.js";import{s as h,a as p,c as g}from"./loadable.js";import{c as m}from"./observers.js";import{d as f,S as u}from"./action-menu.js";import{H as b}from"./Heading2.js";import{c as v,d as C}from"./locale2.js";import{c as x,s as S,d as y,u as k}from"./t9n.js";import{d as A}from"./floating-ui.js";import{d as H}from"./action.js";import{d as z}from"./icon.js";import{d as w}from"./loader.js";import{d as E}from"./popover.js";import{d as F}from"./scrim.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */const P="header-container",j="header-container--border-end",B="header-content",T="header-actions",M="header-actions--end",L="header-actions--start",D={actionBar:"action-bar",alerts:"alerts",contentBottom:"content-bottom",contentTop:"content-top",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerEnd:"footer-end",footerStart:"footer-start",footerActions:"footer-actions"},O=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=n(this,"calcitePanelClose",6),this.calcitePanelToggle=n(this,"calcitePanelToggle",6),this.calcitePanelScroll=n(this,"calcitePanelScroll",6),this.resizeObserver=m("resize",(()=>this.resizeHandler())),this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"==typeof e.scrollHeight&&"number"==typeof e.offsetHeight&&(e.scrollHeight>e.offsetHeight?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex"))},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.handleUserClose(),e.preventDefault())},this.handleUserClose=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.open=()=>{this.isClosed=!1},this.close=async()=>{const e=this.beforeClose??(()=>Promise.resolve());try{await e()}catch(e){return void requestAnimationFrame((()=>{this.closed=!1}))}this.isClosed=!0},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=i(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=i(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=i(e)},this.handleActionBarSlotChange=e=>{const t=s(e).filter((e=>e?.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=i(e)},this.handleFabSlotChange=e=>{this.hasFab=i(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=i(e)},this.handleFooterEndSlotChange=e=>{this.hasFooterEndContent=i(e)},this.handleFooterStartSlotChange=e=>{this.hasFooterStartContent=i(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=i(e)},this.contentBottomSlotChangeHandler=e=>{this.hasContentBottom=i(e)},this.contentTopSlotChangeHandler=e=>{this.hasContentTop=i(e)},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.handleAlertsSlotChange=e=>{s(e)?.map((e=>{"CALCITE-ALERT"===e.nodeName&&(e.embedded=!0)}))},this.beforeClose=void 0,this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuFlipPlacements=void 0,this.menuOpen=!1,this.menuPlacement=A,this.messageOverrides=void 0,this.messages=void 0,this.overlayPositioning="absolute",this.scale="m",this.isClosed=!1,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}toggleDialog(e){e?this.close():this.open()}onMessagesChange(){}connectedCallback(){v(this),x(this)}async componentWillLoad(){h(this),this.isClosed=this.closed,await S(this)}componentDidLoad(){p(this)}componentDidRender(){c(this)}disconnectedCallback(){C(this),y(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){k(this,this.effectiveLocale)}async setFocus(){await g(this),l(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:n,hasHeaderContent:o}=this,i=e?a(b,{class:"heading",level:t},e):null,s=n?a("span",{class:"description"},n):null;return o||!i&&!s?null:a("div",{class:B,key:"header-content"},i,s)}renderActionBar(){return a("div",{class:"action-bar-container",hidden:!this.hasActionBar},a("slot",{name:D.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return a("div",{class:B,hidden:!this.hasHeaderContent,key:"slotted-header-content"},a("slot",{name:D.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return a("div",{class:{[L]:!0,[T]:!0},hidden:!e,key:"header-actions-start"},a("slot",{name:D.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:n,collapsed:o,collapseDirection:i,collapsible:s,hasMenuItems:l}=this,{collapse:c,expand:d,close:h}=t,p=["chevron-down","chevron-up"];"up"===i&&p.reverse();const g=s?a("calcite-action",{"aria-expanded":r(!o),"aria-label":c,icon:o?p[0]:p[1],id:"collapse",onClick:this.collapse,scale:this.scale,text:c,title:o?d:c}):null,m=n?a("calcite-action",{"aria-label":h,icon:"x",id:"close",onClick:this.handleUserClose,scale:this.scale,text:h,title:h}):null,f=a("slot",{name:D.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),u=e||g||m||l;return a("div",{class:{[M]:!0,[T]:!0},hidden:!u,key:"header-actions-end"},f,this.renderMenu(),g,m)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:n,menuFlipPlacements:o,menuPlacement:i}=this;return a("calcite-action-menu",{flipPlacements:o??["top","bottom"],hidden:!e,key:"menu",label:t.options,open:n,overlayPositioning:this.overlayPositioning,placement:i},a("calcite-action",{icon:"ellipsis",scale:this.scale,slot:u.trigger,text:t.options}),a("slot",{name:D.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:n,closable:o,collapsible:i,hasMenuItems:s,hasActionBar:l}=this,r=this.renderHeaderContent(),c=e||!!r||t||n||i||o||s;return this.showHeaderContent=c,a("header",{class:"header",hidden:!(c||l)},a("div",{class:{[P]:!0,[j]:l},hidden:!c},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),r,this.renderHeaderActionsEnd()),this.renderActionBar(),this.renderContentTop())}renderFooterNode(){const{hasFooterEndContent:e,hasFooterStartContent:t,hasFooterContent:n,hasFooterActions:o}=this;return a("footer",{class:"footer",hidden:!(t||e||n||o)},a("div",{class:"footer-content",hidden:!n},a("slot",{name:D.footer,onSlotchange:this.handleFooterSlotChange})),a("div",{class:"footer-start",hidden:n||!t},a("slot",{name:D.footerStart,onSlotchange:this.handleFooterStartSlotChange})),a("div",{class:"footer-end",hidden:n||!e},a("slot",{name:D.footerEnd,onSlotchange:this.handleFooterEndSlotChange})),a("div",{class:"footer-actions",hidden:n||!o},a("slot",{key:"footer-actions-slot",name:D.footerActions,onSlotchange:this.handleFooterActionsSlotChange})))}renderContent(){return a("div",{class:"content-wrapper",hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},a("slot",null),this.renderFab())}renderContentBottom(){return a("div",{class:"content-bottom",hidden:!this.hasContentBottom},a("slot",{name:D.contentBottom,onSlotchange:this.contentBottomSlotChangeHandler}))}renderContentTop(){return a("div",{class:"content-top",hidden:!this.hasContentTop},a("slot",{name:D.contentTop,onSlotchange:this.contentTopSlotChangeHandler}))}renderFab(){return a("div",{class:"fab-container",hidden:!this.hasFab},a("slot",{name:D.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{disabled:e,loading:t,isClosed:n}=this,i=a("article",{key:"0f439dffdca536eb6973ac386b0566091249aee3","aria-busy":r(t),class:"container",hidden:n,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderContentBottom(),this.renderFooterNode(),a("slot",{key:"alerts",name:D.alerts,onSlotchange:this.handleAlertsSlotChange}));return a(o,{key:"6e5baec07ecb356871dea038ebc2d5ee2d8ed54f",onKeyDown:this.panelKeyDownHandler},a(d,{key:"924cda1799b359f1bb3fb119cebfff5a7349b72d",disabled:e},t?a("calcite-scrim",{loading:t}):null,i))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}:host([scale=s]){--calcite-internal-panel-default-padding:var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding:10px}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-internal-panel-default-padding:var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-lg)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-internal-panel-default-padding:var(--calcite-spacing-xl);--calcite-internal-panel-header-vertical-padding:var(--calcite-spacing-xxl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0);line-height:1.25rem}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;border-block-start:1px solid var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.container{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-color-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-color-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-color-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-color-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{position:relative;display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;outline-color:transparent;padding:var(--calcite-panel-content-space, 0);background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.content-top,.content-bottom{padding:var(--calcite-internal-panel-default-padding)}.header-content{flex:1 1 auto;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-padding)}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;background-color:var(--calcite-color-foreground-1);font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-color-border-3);padding:var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-padding))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-padding)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-padding)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-panel",{beforeClose:[16],closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuFlipPlacements:[16],menuOpen:[516,"menu-open"],menuPlacement:[513,"menu-placement"],messageOverrides:[1040],messages:[1040],overlayPositioning:[513,"overlay-positioning"],scale:[513],isClosed:[32],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasContentBottom:[32],hasContentTop:[32],hasFab:[32],hasFooterActions:[32],hasFooterContent:[32],hasFooterEndContent:[32],hasFooterStartContent:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]},void 0,{closed:["toggleDialog"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function I(){"undefined"!=typeof customElements&&["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-panel":customElements.get(e)||customElements.define(e,O);break;case"calcite-action":customElements.get(e)||H();break;case"calcite-action-menu":customElements.get(e)||f();break;case"calcite-icon":customElements.get(e)||z();break;case"calcite-loader":customElements.get(e)||w();break;case"calcite-popover":customElements.get(e)||E();break;case"calcite-scrim":customElements.get(e)||F()}}))}I();export{O as P,D as S,I as d};

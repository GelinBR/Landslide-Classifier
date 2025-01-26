// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../css ./directionModeIcons ../../../../widgets/Widget ../../../../chunks/componentsUtils ../../../../widgets/support/widgetUtils ../../../../widgets/support/decorators/messageBundle ../../../../widgets/support/jsxFactory".split(" "),function(e,c,f,g,v,w,x,n,p,h,q,r,y,t,
d){function u(a){const {directionMode:b}=a.sketchOptions.values,k=a.messages?.sketch,m=k?.directionModeSelect?.title;return d.tsx("calcite-dropdown",{key:"direction-mode",placement:"bottom-end",scale:"s",widthScale:"s",onCalciteDropdownSelect:l=>{l=l.target.selectedItems?.[0]?.getAttribute("data-mode");a.sketchOptions.values.directionMode=l??"absolute"}},d.tsx("calcite-button",{alignment:"end",appearance:"transparent",iconStart:h.directionModeIcons[b],kind:"neutral",label:m,scale:"s",slot:"trigger",
title:m}),d.tsx("calcite-dropdown-group",{selectionMode:"single"},d.tsx("calcite-dropdown-item",{"data-mode":"relative","data-testid":"tooltip-direction-mode-relative",iconStart:h.directionModeIcons.relative,key:"relative",selected:"relative"===b},k?.directionModeSelect?.relative),d.tsx("calcite-dropdown-item",{"data-mode":"absolute","data-testid":"tooltip-direction-mode-absolute",iconStart:h.directionModeIcons.absolute,key:"absolute",selected:"absolute"===b},k?.directionModeSelect?.absolute)))}c.DrawHeaderActions=
class extends q{constructor(a){super(a);this.visibleElements={}}render(){return d.tsx("div",{class:p.drawContentHeaderActions},this._isElementVisible("direction")?d.tsx(u,{messages:this.messages,sketchOptions:this.sketchOptions}):null)}loadDependencies(){return r.loadCalciteComponents({button:()=>new Promise((a,b)=>e(["../../../../chunks/calcite-button"],a,b)),dropdown:()=>new Promise((a,b)=>e(["../../../../chunks/calcite-dropdown"],a,b)),"dropdown-item":()=>new Promise((a,b)=>e(["../../../../chunks/calcite-dropdown-item"],
a,b)),"dropdown-group":()=>new Promise((a,b)=>e(["../../../../chunks/calcite-dropdown-group"],a,b))})}_isElementVisible(a){return this.visibleElements?.[a]??this.sketchOptions.tooltips.visibleElements[a]}};f.__decorate([t.messageBundle("esri/views/interactive/tooltip/t9n/Tooltip"),g.property()],c.DrawHeaderActions.prototype,"messages",void 0);f.__decorate([g.property()],c.DrawHeaderActions.prototype,"sketchOptions",void 0);f.__decorate([g.property()],c.DrawHeaderActions.prototype,"visibleElements",
void 0);c.DrawHeaderActions=f.__decorate([n.subclass("esri.views.interactive.tooltip.components.DrawHeaderActions")],c.DrawHeaderActions);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
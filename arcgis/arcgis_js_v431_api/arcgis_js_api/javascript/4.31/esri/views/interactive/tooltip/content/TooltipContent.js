// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../../../chunks/tslib.es6 ../../../../core/a11yUtils ../../../../core/events ../../../../core/has ../../../../core/memoize ../../../../core/promiseUtils ../../../../core/scheduling ../../../../core/unitFormatUtils ../../../../core/unitUtils ../../../../core/accessorSupport/decorators/property ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../support/getDefaultUnitForView ../../keybindings ../css ../fields/parsingAndFormattingUtils ../../../../widgets/Widget ../../../../chunks/componentsUtils ../../../../widgets/support/widgetUtils ../../../../widgets/support/decorators/messageBundle ../../../../widgets/support/jsxFactory".split(" "),
function(q,e,f,B,r,J,C,m,t,D,u,g,K,L,E,x,y,h,F,G,H,I,z,k){async function n(a){await a?.setFocus()}function A(a){return(Array.isArray(a)?a:[a]).flat(10).filter(b=>!!b)}const v=Symbol("dragHandles");e.TooltipContent=class extends G{constructor(){super(...arguments);this._focusAbortController=new AbortController;this._transitionInfo=null;this._mode="feedback";this._getFormatters=C.memoize(F.getFormatters);this._onHeaderPointerDown=a=>{const b=a.target;b instanceof HTMLElement&&"calcite-button"!==b?.tagName?.toLowerCase()&&
(this.removeHandles(v),b.setPointerCapture(a.pointerId),this.tooltip.onDragStart(a.clientX,a.clientY),this.addHandles([r.on(b,"pointermove",({clientX:c,clientY:d})=>{this.tooltip.onDrag(c,d)}),r.on(b,["pointerup","pointercancel"],c=>{this.removeHandles(v);b.releasePointerCapture(a.pointerId);this.tooltip.onDragEnd()}),r.on(b,"touchstart",c=>c.preventDefault())],v))};this._onDiscard=()=>{this.destroyed||(this.tooltip.emit("discard"),this.info.clearInputValues(),this.exitInputMode())};this._onCommit=
(a,b)=>{if(!this.destroyed)if(this.tooltip.emit("commit",{type:b}),"commit-and-exit"===b)this.exitInputMode();else if("commit-on-blur"!==b){var c=this._getFocusableElements(),d=c.length;a=c.indexOf(a);-1===a?this.exitInputMode():n(c.at(((a+("commit-and-next"===b?1:-1))%d+d)%d))}};this._onKeyDown=a=>{switch(a.code){case y.tooltipKeys.next:return this._onNextKey(a);case y.tooltipKeys.discard:return a.stopPropagation(),this._onDiscard()}}}get mode(){return this._mode}get _displayUnits(){const {displayUnits:a}=
this.info.sketchOptions.values,b=x.getDefaultUnitForView(this.tooltip.view);return{length:a.length??b,verticalLength:a.verticalLength??b,area:a.area??b}}get _inputUnitInfos(){const a=this._messagesUnits,b=l=>({unit:l,abbreviation:D.unitName(a,l,"abbr")}),{inputUnits:c}=this.info.sketchOptions.values,d=x.getDefaultUnitForView(this.tooltip.view),p=c.verticalLength??d,w=c.area??d;return{length:b(u.defaultLengthUnit(c.length??d)),verticalLength:b(u.defaultVerticalLengthUnit(p)),area:b(u.defaultAreaUnit(w)),
angle:b("degrees")}}get _formatters(){return this._getFormatters(this._messagesUnits,this._displayUnits)}get fieldContext(){return{formatters:this._formatters,inputUnitInfos:this._inputUnitInfos,messages:this._messagesTooltip,sketchOptions:this.info.sketchOptions,onCommit:this._onCommit,onDiscard:this._onDiscard}}render(){const {visibleElements:a}=this.info.sketchOptions.tooltips,b=this._renderedContent,c=this._renderedActions,d=this._renderedHelpMessage,p=0<b.length,w=p||!!d,l="input"===this.mode;
return k.tsx("div",{class:I.classes(h.content,l&&h.contentInputMode),onkeydown:this._onKeyDown,tabIndex:-1},l&&w&&a.header?k.tsx("div",{class:h.contentHeader,"data-testid":"tooltip-header",key:"header",onpointerdown:this._onHeaderPointerDown},k.tsx("calcite-button",{appearance:"transparent","data-testid":"tooltip-back-button",iconFlipRtl:"both",iconStart:"chevron-left",key:"discard-button",kind:"neutral",onclick:this._onDiscard,scale:"s",tabIndex:-1}),0<c.length?k.tsx(k.tsxFragment,null,k.tsx("div",
{class:h.contentHeaderSpacer,key:"spacer"}),k.tsx("div",{class:h.contentHeaderActions,key:"actions"},c)):null):null,p?k.tsx("div",{class:h.table,key:"content"},...b):null,d)}destroy(){this._focusAbortController.abort();this._transitionInfo?.transition.skipTransition()}_renderActions(){return null}loadDependencies(){return H.loadCalciteComponents({button:()=>new Promise((a,b)=>q(["../../../../chunks/calcite-button"],a,b)),icon:()=>new Promise((a,b)=>q(["../../../../chunks/calcite-icon"],a,b)),input:()=>
new Promise((a,b)=>q(["../../../../chunks/calcite-input"],a,b))})}async enterInputMode(a,b){try{await this._transitionTo("input",b),await this._focusField(a)}catch(c){m.throwIfNotAbortError(c)}}async exitInputMode({focusOnView:a=!0}={}){try{const {container:b,info:c}=this;c.clearInputValues();a=a?b?.closest(".esri-view")?.querySelector(".esri-view-surface"):null;await this._transitionTo("feedback");a instanceof HTMLElement&&a.focus()}catch(b){m.throwIfNotAbortError(b)}}_onNextKey(a){var b=this._getFocusableElements();
const c=b.at(0);b=b.at(-1);c&&b&&(a.shiftKey?document.activeElement===c&&(a.preventDefault(),a.stopPropagation(),n(b)):document.activeElement===b&&(a.preventDefault(),a.stopPropagation(),n(c)))}get _renderedContent(){return A(this._renderContent())}get _renderedActions(){return A(this._renderActions())}get _renderedHelpMessage(){const {sketchOptions:a,visibleElements:b}=this.info;if(!b.helpMessage)return null;const c=a.tooltips.helpMessage??this._defaultHelpMessage;if(!c)return null;const d=a.tooltips.helpMessageIcon??
"information";return k.tsx("div",{class:h.helpMessage,key:"help-message"},d?k.tsx("calcite-icon",{class:h.helpMessageIcon,icon:d,scale:"s"}):null,k.tsx("div",{class:h.helpMessageText},c))}get _defaultHelpMessage(){const {helpMessage:a,viewType:b}=this.info;return null==a?null:this._messagesTooltip?.sketch?.["3d"===b?"helpMessages3d":"helpMessages2d"]?.[a]}async _focusField(a){this._focusAbortController?.abort();this._focusAbortController=new AbortController;var {signal:b}=this._focusAbortController;
await this._waitForInputs();m.throwIfAborted(b);b=this._getFocusableInputs();b=a?b.find(c=>c.getAttribute("data-field-name")===a):b.at(0);await n(b)}async _transitionTo(a,b){if(this._mode!==a||this._transitionInfo){if(this._transitionInfo?.mode===a)return this._transitionInfo.transition.finished;this._transitionInfo?.transition.skipTransition();var c=async()=>{this.destroyed||(this._mode=a,await t.waitTick(),this.destroyed||(this.renderNow(),await t.waitTick(),this.destroyed||b?.()))};if(this.domNode?.firstChild&&
document.startViewTransition&&!B.prefersReducedMotion()){this.autoRenderingEnabled=!1;var d=this._transitionInfo={transition:document.startViewTransition(async()=>{this.destroyed||d!==this._transitionInfo||(this.autoRenderingEnabled=!0,await c())}),mode:a};try{await d.transition.finished}finally{d===this._transitionInfo&&(this._transitionInfo=null)}}else await c()}}async _waitForInputs(){const a=()=>Array.from(this.domNode?.querySelectorAll("calcite-input")??[]);for(;0===a().length;)await m.after(20);
await t.waitAnimationFrame()}_getFocusableInputs(){return Array.from(this.domNode?.querySelectorAll("calcite-input:not([read-only]):not([disabled])")??[])}_getFocusableElements(){const a=this.domNode?.querySelector(`.${h.drawContentHeaderActions}`);return[...Array.from(a?.querySelectorAll(`.${h.contentHeaderActions} calcite-button:not([disabled])`)??[]),...this._getFocusableInputs()]}};f.__decorate([z.messageBundle("esri/core/t9n/Units"),g.property()],e.TooltipContent.prototype,"_messagesUnits",void 0);
f.__decorate([z.messageBundle("esri/views/interactive/tooltip/t9n/Tooltip"),g.property()],e.TooltipContent.prototype,"_messagesTooltip",void 0);f.__decorate([g.property()],e.TooltipContent.prototype,"info",void 0);f.__decorate([g.property()],e.TooltipContent.prototype,"tooltip",void 0);f.__decorate([g.property()],e.TooltipContent.prototype,"_mode",void 0);f.__decorate([g.property()],e.TooltipContent.prototype,"mode",null);f.__decorate([g.property()],e.TooltipContent.prototype,"_displayUnits",null);
f.__decorate([g.property()],e.TooltipContent.prototype,"_inputUnitInfos",null);f.__decorate([g.property()],e.TooltipContent.prototype,"_formatters",null);f.__decorate([g.property()],e.TooltipContent.prototype,"fieldContext",null);f.__decorate([g.property()],e.TooltipContent.prototype,"_renderedContent",null);f.__decorate([g.property()],e.TooltipContent.prototype,"_renderedActions",null);f.__decorate([g.property()],e.TooltipContent.prototype,"_renderedHelpMessage",null);f.__decorate([g.property()],
e.TooltipContent.prototype,"_defaultHelpMessage",null);e.TooltipContent=f.__decorate([E.subclass("esri.views.interactive.tooltip.content.TooltipContent")],e.TooltipContent);Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
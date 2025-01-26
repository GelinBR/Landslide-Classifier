// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./Expand/ExpandViewModel ../chunks/componentsUtils ./support/globalCss ./support/widget ./support/jsxFactory ./support/decorators/messageBundle".split(" "),function(l,e,f,d,v,w,r,t,n,u,p,m,g,q){d=class extends t{constructor(a,b){super(a,b);this.closeOnEsc=!0;this.expandTooltip=this.content=this.collapseTooltip="";this.iconNumber=
0;this.messagesCommon=this.messages=null;this.mode="auto";this.placement=null;this.viewModel=new n;this.toggle=()=>{this.viewModel.expanded=!this.viewModel.expanded};this._handlePopoverClose=c=>{c.target===this._popoverEl&&(this.viewModel.expanded=c.target.open)};this._handleSheetClose=c=>{this.viewModel.expanded=c.target.open};this._handlePanelClose=c=>{this.viewModel.expanded=!c.target.closed};this._handleKeyDown=c=>{this.viewModel.expanded&&"Escape"===c.key&&!this._willCloseOnEsc(c)&&c.preventDefault()};
this._storeToggleActionEl=c=>{this._toggleActionEl=c};this._storePopoverEl=c=>{this._popoverEl=c}}loadDependencies(){return u.loadCalciteComponents({action:()=>new Promise((a,b)=>l(["../chunks/calcite-action"],a,b)),icon:()=>new Promise((a,b)=>l(["../chunks/calcite-icon"],a,b)),panel:()=>new Promise((a,b)=>l(["../chunks/calcite-panel"],a,b)),popover:()=>new Promise((a,b)=>l(["../chunks/calcite-popover"],a,b)),sheet:()=>new Promise((a,b)=>l(["../chunks/calcite-sheet"],a,b))})}get expandTitle(){const {expanded:a,
messagesCommon:b,collapseTooltip:c,expandTooltip:h}=this;return(a?c||b?.collapse:h||b?.expand)??""}get _displaySheet(){switch(this.mode){case "drawer":return!0;case "auto":return"xsmall"===this.viewModel.view?.widthBreakpoint;default:return!1}}get autoCollapse(){return this.viewModel.autoCollapse}set autoCollapse(a){this.viewModel.autoCollapse=a}get collapseIcon(){return"chevrons-right"}set collapseIcon(a){this._overrideIfSome("collapseIcon",a)}get expanded(){return this.viewModel.expanded}set expanded(a){this.viewModel.expanded=
a}get expandIcon(){return m.isWidget(this.content)?this.content.icon:"chevrons-left"}set expandIcon(a){this._overrideIfSome("expandIcon",a)}get group(){return this.viewModel.group}set group(a){this.viewModel.group=a}get icon(){return null}get label(){return(m.isWidget(this.content)?this.content.label:null)??this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}expand(){this.viewModel.expanded=!0}collapse(){this.viewModel.expanded=
!1}render(){const {_displaySheet:a,_toggleActionEl:b,viewModel:{expanded:c},label:h,placement:k}=this;return g.tsx("div",{class:this.classes("esri-expand",p.globalCss.widget)},this._renderToggle(),a?g.tsx("calcite-sheet",{class:"esri-expand__sheet",heightScale:"l",label:h,onkeydown:this._handleKeyDown,open:c,position:"block-end",onCalciteSheetClose:this._handleSheetClose},g.tsx("calcite-panel",{class:"esri-expand__panel",closable:!0,closed:!c,heading:h,onkeydown:this._handleKeyDown,onCalcitePanelClose:this._handlePanelClose},
g.tsx("div",{class:"esri-expand__panel-content"},this._renderContent()))):b?g.tsx("calcite-popover",{afterCreate:this._storePopoverEl,afterUpdate:this._storePopoverEl,label:h,onkeydown:this._handleKeyDown,open:c,overlayPositioning:"fixed",placement:k??this._getPlacement(),referenceElement:b,onCalcitePopoverClose:this._handlePopoverClose},g.tsx("div",{class:"esri-expand__popover-content"},this._renderContent())):null)}_getPlacement(){const {container:a,view:b}=this,c=a&&b?b.ui.getPosition(a):null;
if(!c||"manual"===c)return"auto";const [h,k]=c.split("-");return`${"right"===k?"left":"right"}-${"bottom"===h?"end":"start"}`}_willCloseOnEsc(a){const {closeOnEsc:b}=this;return"function"===typeof b?b(a):b}_renderBadgeNumber(){const {expanded:a,iconNumber:b}=this;return b&&!a?g.tsx("span",{class:"esri-expand__icon-number",key:"expand__icon-number"},b):null}_renderToggleButton(){const {expanded:a,expandTitle:b,expandIcon:c,collapseIcon:h}=this,k=a?h:c;return g.tsx("calcite-action",{afterCreate:this._storeToggleActionEl,
afterUpdate:this._storeToggleActionEl,class:p.globalCss.widgetButton,onclick:this.toggle,scale:"s",text:b,title:b},k?g.tsx("calcite-icon",{class:this.classes("esri-collapse__icon",("chevrons-left"===k||"chevrons-right"===k)&&"esri-collapse__icon-flip"),icon:k,scale:"s"}):null)}_renderToggle(){return g.tsx("div",{class:"esri-expand__toggle"},this._renderToggleButton(),this._renderBadgeNumber())}_renderContent(){const {content:a}=this;return"string"===typeof a?g.tsx("div",{class:"esri-expand__content-container",
innerHTML:a,key:"content__string"}):m.isWidget(a)?g.tsx("div",{class:"esri-expand__content-container",key:"content__widget"},a.render()):a instanceof HTMLElement?g.tsx("div",{afterCreate:this._attachToNode,bind:a,class:"esri-expand__content-container",key:"content__html-element"}):m.hasDomNode(a)?g.tsx("div",{afterCreate:this._attachToNode,bind:a.domNode,class:"esri-expand__content-container",key:"content__node"}):null}_attachToNode(a){a.appendChild(this)}};e.__decorate([f.property({readOnly:!0})],
d.prototype,"expandTitle",null);e.__decorate([f.property()],d.prototype,"_toggleActionEl",void 0);e.__decorate([f.property()],d.prototype,"_displaySheet",null);e.__decorate([f.property()],d.prototype,"autoCollapse",null);e.__decorate([f.property()],d.prototype,"closeOnEsc",void 0);e.__decorate([f.property()],d.prototype,"collapseIcon",null);e.__decorate([f.property()],d.prototype,"collapseTooltip",void 0);e.__decorate([f.property()],d.prototype,"content",void 0);e.__decorate([f.property()],d.prototype,
"expanded",null);e.__decorate([f.property()],d.prototype,"expandIcon",null);e.__decorate([f.property()],d.prototype,"expandTooltip",void 0);e.__decorate([f.property()],d.prototype,"group",null);e.__decorate([f.property()],d.prototype,"icon",null);e.__decorate([f.property()],d.prototype,"iconNumber",void 0);e.__decorate([f.property()],d.prototype,"label",null);e.__decorate([f.property(),q.messageBundle("esri/widgets/Expand/t9n/Expand")],d.prototype,"messages",void 0);e.__decorate([f.property(),q.messageBundle("esri/t9n/common")],
d.prototype,"messagesCommon",void 0);e.__decorate([f.property()],d.prototype,"mode",void 0);e.__decorate([f.property()],d.prototype,"placement",void 0);e.__decorate([f.property()],d.prototype,"view",null);e.__decorate([f.property({type:n})],d.prototype,"viewModel",void 0);return d=e.__decorate([r.subclass("esri.widgets.Expand")],d)});
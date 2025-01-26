// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/asyncUtils ../core/maybe ../core/memoize ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./ElevationProfile/css ./ElevationProfile/ElevationProfileViewModel ./ElevationProfile/ElevationProfileVisibleElements ./ElevationProfile/components/Legend ./ElevationProfile/components/SettingsButton ./ElevationProfile/support/constants ../chunks/componentsUtils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),
function(q,e,A,r,B,x,t,f,d,K,L,C,D,k,y,z,E,F,l,G,u,H,v,g){var m;(function(a){a.Sketch="sketch";a.SketchCancel="sketch-cancel";a.SketchDone="sketch-done";a.Select="select";a.SelectCancel="select-cancel"})(m||={});const p=[{type:m.Select},{type:m.Sketch}],I={[l.ElevationProfileErrorState.None]:null,[l.ElevationProfileErrorState.NoValidInput]:"noProfile",[l.ElevationProfileErrorState.NoVisibleProfiles]:"noProfile",[l.ElevationProfileErrorState.RefinedButNoChartData]:"noProfile",[l.ElevationProfileErrorState.TooComplex]:"tooComplex",
[l.ElevationProfileErrorState.UnknownError]:"unknown",[l.ElevationProfileErrorState.InvalidGeometry]:"invalidGeometry",[l.ElevationProfileErrorState.InvalidElevationInfo]:"invalidElevationInfo"},w=Symbol("resize-observer-handle");d=class extends D{constructor(a,b){super(a,b);this.viewModel=null;this.visibleElements=new z;this._chartInitTask=this._chart=this._chartContainer=this._contentWrapper=this.messagesUnits=this.messagesCommon=this.messages=null;this._chartIsRefined=!1;this._width=0;this._zoomOutButtonVisible=
!1;this._getChartUpdateParamsMemoized=B.memoize((c,h,n,J)=>({chart:c,data:h,stationary:n,messages:J}));this._onZoomOutButtonClick=()=>{this._chart?.zoomOut()};this._onClearButtonClick=()=>{this.viewModel.clear()};a?.viewModel||(this.viewModel=this._defaultViewModel=new y({view:a?.view}))}loadDependencies(){return G.loadCalciteComponents({action:()=>new Promise((a,b)=>q(["../chunks/calcite-action"],a,b)),button:()=>new Promise((a,b)=>q(["../chunks/calcite-button"],a,b)),loader:()=>new Promise((a,b)=>
q(["../chunks/calcite-loader"],a,b))})}postInitialize(){this.addHandles([t.watch(()=>({container:this._chartContainer,width:this._width}),({container:a,width:b})=>{this._destroyChart();null!=a&&0<b&&this._initializeChart(a)},t.initial),t.watch(()=>this._chartUpdateParams,()=>this._updateChart(this._chartUpdateParams),t.initial)])}destroy(){this._destroyChart();null!=this._defaultViewModel&&this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()}get view(){return this.viewModel.view}set view(a){this.viewModel.view=
a}get input(){return this.viewModel.input}set input(a){this.viewModel.input=a}get profiles(){return this.viewModel.profiles}set profiles(a){this.viewModel.profiles=a}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(a){this.viewModel.unitOptions=a}get unit(){return this.viewModel.unit}set unit(a){this.viewModel.unit=a}get geodesicDistanceThreshold(){return this.viewModel.geodesicDistanceThreshold}set geodesicDistanceThreshold(a){this.viewModel.geodesicDistanceThreshold=a}get icon(){return"altitude"}set icon(a){this._overrideIfSome("icon",
a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get visible(){return this.viewModel.visible}set visible(a){this.viewModel.visible=a}get _portrait(){return this._width<l.getConfig().portraitModePixelBreakpoint}get _selectButtonVisible(){return!0===this.visibleElements.selectButton&&this.viewModel.selectAvailable}get _chartUpdateParams(){const a=this.view;return this._getChartUpdateParamsMemoized(this._chart,this.viewModel.chartData,null!=a?a.stationary:
!0,this._chartMessages)}get _chartMessages(){return{...this.messagesUnits,...this.messages}}get _profilesArray(){return this.profiles.toArray()}render(){const {viewModel:a,visible:b}=this;return g.tsx("div",{"aria-label":this.messages.widgetLabel,class:this.classes({[k.css.base]:b,[u.globalCss.widget]:b,[u.globalCss.panel]:b,[u.globalCss.widgetDisabled]:b&&"disabled"===a.state,[k.css.portrait]:this._portrait,[k.css.refined]:1===a.progress}),key:this},g.tsx("div",{afterCreate:this._onContentWrapperUpdate,
afterRemoved:this._onContentWrapperRemoved,afterUpdate:this._onContentWrapperUpdate,bind:this,key:"content-wrapper"},b?this._renderContentForState():null))}_renderContentForState(){switch(this.viewModel.state){case l.ElevationProfileState.Ready:return this._renderContentForReadyState();case l.ElevationProfileState.Selecting:return this._renderContentForSelectingState();case l.ElevationProfileState.Creating:return this._renderContentForCreatingState();case l.ElevationProfileState.Selected:return this._renderContentForSelectedState();
case l.ElevationProfileState.Created:return this._renderContentForCreatedState();case l.ElevationProfileState.Disabled:return this._renderContentForReadyState()}}_renderContentForReadyState(){const {messages:a,visibleElements:b,_selectButtonVisible:c}=this,{sketchButton:h}=b;return this._renderContent({prompt:h&&c?a.readyPrompt:h?a.readyPromptCreateOnly:c?a.readyPromptSelectOnly:a.errors?.noProfile,chart:!1,actions:p})}_renderContentForSelectingState(){const {view:a}=this;return null==a?null:this._renderContent({prompt:this.messages[`selectingPrompt-${a.type}`],
chart:!1,actions:[{type:m.SelectCancel}]})}_renderContentForCreatingState(){const {view:a,viewModel:b}=this;if(null==a)return null;const c=b.hasVertices?[{type:m.SketchCancel},{type:m.SketchDone,disabled:!b.tool.interaction.canStopCreating}]:[{type:m.Select},{type:m.Sketch,disabled:!0}];if(b.errorState===l.ElevationProfileErrorState.NoValidInput)return this._renderContent({chart:!1,actions:c,prompt:this.messages[`creatingPrompt-${a.type}`]});const h=this._getErrorMessage();return h?this._renderContent({chart:!1,
actions:c,prompt:h}):this._renderContent({chart:!0,actions:c})}_renderContentForSelectedState(){const a=this._getErrorMessage();return a?this._renderContent({chart:!1,actions:p,prompt:a}):this._renderContent({chart:!0,actions:p})}_renderContentForCreatedState(){const a=this._getErrorMessage();return a?this._renderContent({chart:!1,actions:p,prompt:a}):this._renderContent({chart:!0,actions:p})}_getErrorMessage(){const a=I[this.viewModel.errorState];return a?this.messages?.errors?.[a]:null}_renderContent(a){const b=
null!=a.prompt?this._renderPrompt(a.prompt):a.chart&&this._renderChart(),{viewModel:c}=this,h=null!=c.input;return g.tsx(g.tsxFragment,null,g.tsx("header",{class:k.css.header,key:"header"},this._zoomOutButtonVisible?this._renderZoomOutButton():null,this.visibleElements.clearButton&&h?this._renderClearButton():null,this.visibleElements.settingsButton?g.tsx(F.SettingsButton,{messages:this.messages,uniformChartScaling:c.uniformChartScaling,unit:c.unit,unitOptions:c.unitOptions,visibleElements:this.visibleElements,
onUniformChartScalingChange:n=>c.uniformChartScaling=n,onUnitChange:n=>c.unit=n}):null),g.tsx("div",{class:k.css.mainContainer,key:"main-container"},b),this.visibleElements.legend?g.tsx(E.Legend,{effectiveUnits:c.effectiveUnits,messages:this.messages,profiles:this._profilesArray}):null,this._renderActions(a))}_renderZoomOutButton(){const a=this.messages.zoomOut;return g.tsx("calcite-action",{appearance:"transparent",class:k.css.zoomOutButton,"data-testid":"zoom-out-button",icon:"magnifying-glass-minus",
key:"zoom-out",onclick:this._onZoomOutButtonClick,scale:"s",text:a,title:a})}_renderClearButton(){const a=this.messages.clearProfile;return g.tsx("calcite-action",{appearance:"transparent",class:k.css.clearButton,"data-testid":"clear-button",icon:"trash",key:"clear-profile",onclick:this._onClearButtonClick,scale:"s",text:a,title:a})}_renderPrompt(a){return[g.tsx("div",{bind:this,class:k.css.promptContainer,key:"prompt-container"},g.tsx("p",null,a))]}_renderChart(){if(!this.visibleElements.chart)return g.tsx("div",
{class:k.css.chartContainer,key:"empty-chart-container"});const {chartData:a,progress:b}=this.viewModel,c=this._chartIsRefined||this._canRenderChart(),h=null!=a&&1>b;return c?g.tsx(g.tsxFragment,null,this._renderSpinner({size:c?"small":"large",visible:h}),g.tsx("div",{afterCreate:this._onChartContainerUpdate,afterRemoved:this._onChartContainerRemoved,afterUpdate:this._onChartContainerUpdate,bind:this,class:k.css.chartContainer,key:"chart-container"})):g.tsx(g.tsxFragment,null,this._renderSpinner({size:"large",
visible:h}),g.tsx("div",{class:k.css.chartContainer,key:"chart-container-empty"}))}_renderSpinner(a){const b="small"===a.size;return g.tsx("calcite-loader",{class:this.classes(k.css.chartSpinner,b&&k.css.chartSpinnerSmall,(a.visible??!0)&&k.css.chartSpinnerVisible),inline:b,key:"spinner",label:"",scale:"s"})}_canRenderChart(){const a=this.viewModel.chartData;if(null==a)return!1;if(!this.viewModel.inputIsSketched)return a.refined;let b=0;for(const {samples:c}of a.lines)b+=null!=c?c.length:0;return a.refined||
b<=l.getConfig().largeChartSamples}_renderActions({actions:a}){a=a.map(b=>{switch(b.type){case m.Sketch:return this.visibleElements.sketchButton&&this._renderAction({action:b,className:k.css.sketchButton,label:this.messages.sketchButtonLabel,onClick:this._onSketchButtonClick,primary:!0});case m.SketchCancel:return this.visibleElements.sketchButton&&this._renderAction({action:b,onClick:this._onCancelButtonClick,className:k.css.sketchCancelButton,label:this.messagesCommon.cancel,primary:!1});case m.SketchDone:return this.visibleElements.sketchButton&&
this._renderAction({action:b,onClick:this._onDoneButtonClick,className:k.css.sketchDoneButton,label:this.messagesCommon.done,primary:!0});case m.Select:return this._selectButtonVisible&&this._renderAction({action:b,onClick:this._onSelectButtonClick,className:k.css.selectButton,label:this.messages.selectButtonLabel,primary:!1});case m.SelectCancel:return this._selectButtonVisible&&this._renderAction({action:b,onClick:this._onCancelButtonClick,className:k.css.selectCancelButton,label:this.messagesCommon.cancel,
primary:!1})}}).filter(Boolean);return a.length?g.tsx("footer",{class:k.css.footer,key:"footer"},a):null}_renderAction({action:a,className:b,label:c,onClick:h,primary:n}){return g.tsx("calcite-button",{appearance:n?"solid":"outline-fill",bind:this,class:this.classes(k.css.actionButton,b),disabled:a.disabled,key:`action-${a.type}`,onclick:h},c)}_onSketchButtonClick(){this.viewModel.start({mode:"sketch"})}_onSelectButtonClick(){this.viewModel.start({mode:"select"})}_onCancelButtonClick(){this.viewModel.cancel()}_onDoneButtonClick(){this.viewModel.stop()}_onContentWrapperUpdate(a){a!==
this._contentWrapper&&(this._contentWrapper=a,this.removeHandles(w),this.addHandles(H.onResize(a,b=>{this._width=b.contentRect.width}),w))}_onContentWrapperRemoved(){this.removeHandles(w);this._contentWrapper=null}_updateChart(a){const {data:b,chart:c,messages:h,stationary:n}=a;null!=c&&null!=h&&n&&this._canRenderChart()&&(c.update(a),this._chartIsRefined=null!=b&&b.refined)}_onChartContainerUpdate(a){this._chartContainer=a}_onChartContainerRemoved(){this._chartContainer=null}_initializeChart(a){r.abortMaybe(this._chartInitTask);
this._chartInitTask=A.createTask(async b=>{var {createChart:c}=await new Promise((h,n)=>q(["./ElevationProfile/support/chartUtils"],h,n));x.throwIfAborted(b);c=await c({container:a,abortOptions:{signal:b},onRangeChange:(h,n)=>{this._zoomOutButtonVisible=1!==h||1!==n},onCursorPositionChange:h=>{this.viewModel.hoveredChartPosition=h}});if(b.aborted)throw r.destroyMaybe(c),x.createAbortError();this._chart=c;this._updateChart(this._chartUpdateParams)})}_destroyChart(){this._chartInitTask=r.abortMaybe(this._chartInitTask);
this._chart=r.destroyMaybe(this._chart);this._chartIsRefined=!1}};e.__decorate([f.property({type:y})],d.prototype,"viewModel",void 0);e.__decorate([f.property()],d.prototype,"view",null);e.__decorate([f.property()],d.prototype,"input",null);e.__decorate([f.property()],d.prototype,"profiles",null);e.__decorate([f.property()],d.prototype,"unitOptions",null);e.__decorate([f.property()],d.prototype,"unit",null);e.__decorate([f.property()],d.prototype,"geodesicDistanceThreshold",null);e.__decorate([f.property({type:z,
nonNullable:!0})],d.prototype,"visibleElements",void 0);e.__decorate([f.property()],d.prototype,"icon",null);e.__decorate([f.property()],d.prototype,"label",null);e.__decorate([f.property()],d.prototype,"visible",null);e.__decorate([f.property(),v.messageBundle("esri/widgets/ElevationProfile/t9n/ElevationProfile")],d.prototype,"messages",void 0);e.__decorate([f.property(),v.messageBundle("esri/t9n/common")],d.prototype,"messagesCommon",void 0);e.__decorate([f.property(),v.messageBundle("esri/core/t9n/Units")],
d.prototype,"messagesUnits",void 0);e.__decorate([f.property()],d.prototype,"_contentWrapper",void 0);e.__decorate([f.property()],d.prototype,"_chartContainer",void 0);e.__decorate([f.property()],d.prototype,"_chart",void 0);e.__decorate([f.property()],d.prototype,"_chartInitTask",void 0);e.__decorate([f.property()],d.prototype,"_chartIsRefined",void 0);e.__decorate([f.property()],d.prototype,"_width",void 0);e.__decorate([f.property()],d.prototype,"_portrait",null);e.__decorate([f.property()],d.prototype,
"_zoomOutButtonVisible",void 0);e.__decorate([f.property()],d.prototype,"_selectButtonVisible",null);e.__decorate([f.property()],d.prototype,"_chartUpdateParams",null);e.__decorate([f.property()],d.prototype,"_chartMessages",null);e.__decorate([f.property()],d.prototype,"_profilesArray",null);return d=e.__decorate([C.subclass("esri.widgets.ElevationProfile")],d)});
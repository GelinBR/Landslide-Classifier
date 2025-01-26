/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{watch as s}from"../core/reactiveUtils.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import e from"./Widget.js";import{l as n}from"../chunks/componentsUtils.js";import"../chunks/widgetUtils.js";import{m as r}from"../chunks/messageBundle.js";import{t as l}from"../chunks/jsxFactory.js";import{g as a}from"../chunks/assets.js";import c from"../Color.js";import p from"../symbols/LineSymbolMarker.js";import m from"../symbols/SimpleLineSymbol.js";import u from"../core/Accessor.js";import d from"./UtilityNetworkAssociations/UtilityNetworkAssociationsViewModel.js";import"../chunks/asyncUtils.js";import"../chunks/maybe.js";import"../core/promiseUtils.js";import"../chunks/handleUtils.js";import"../core/Error.js";import"../config.js";import"../core/Collection.js";import"../core/Evented.js";import"../core/Handles.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/enumeration.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../chunks/lineMarkers.js";import"../chunks/screenUtils.js";import"../symbols/LineSymbol.js";import"../symbols/Symbol.js";import"../Graphic.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/content/UtilityNetworkAssociationsContent.js";import"../popup/support/UtilityNetworkAssociationType.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../chunks/vec3f64.js";import"../symbols/FillSymbol.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/UpdatingHandles.js";import"../layers/GraphicsLayer.js";import"../chunks/GraphicsCollection.js";import"../layers/Layer.js";import"../time/TimeExtent.js";import"../chunks/timeUtils.js";import"../layers/mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils2.js";import"../chunks/mat4.js";import"../chunks/common.js";import"../layers/mixins/ScaleRangeLayer.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/layerUtils2.js";let h=class extends u{constructor(t){super(t),this.arrowsToggle=!1,this.capSelect=!1,this.colorPicker=!0,this.stylePicker=!0,this.widthInput=!0}};t([o({type:Boolean,nonNullable:!0})],h.prototype,"arrowsToggle",void 0),t([o({type:Boolean,nonNullable:!0})],h.prototype,"capSelect",void 0),t([o({type:Boolean,nonNullable:!0})],h.prototype,"colorPicker",void 0),t([o({type:Boolean,nonNullable:!0})],h.prototype,"stylePicker",void 0),t([o({type:Boolean,nonNullable:!0})],h.prototype,"widthInput",void 0),h=t([i("esri.widgets.UtilityNetworkAssociations.VisibleElementsSettingsPane")],h);const b=h,y="esri-un-associations",A={divControlsSymbolPicker:`${y}__div-controls-symbol-picker`,dropdown:`${y}__dropdown`,dropdownItemLineCap:`${y}__dropdown-item-line-cap`,dropdownItemLinePattern:`${y}__dropdown-item-line-pattern`,dropdownSelectedItemLineCap:`${y}__dropdown-selected-item-line-cap`,dropdownSelectedItemLinePattern:`${y}__dropdown-selected-item-line-pattern`,dropdownTrigger:`${y}__dropdown-trigger`,labelAndToggle:`${y}__label-and-toggle`};let w=class extends e{constructor(t,s){super(t,s),this._lineCapTypes=["butt","round","square"],this._lineStyleTypes=["solid","dash","dash-dot","dot","long-dash","long-dash-dot","long-dash-dot-dot","short-dash","short-dash-dot","short-dash-dot-dot","short-dot"],this.lineSymbol=new m,this.messages=null,this.showArrows=!1,this.visibleElements=new b,this._afterComponentCreate=this._afterComponentCreate.bind(this)}render(){const{messages:{input:{lineCap:t,lineColor:s,lineStyle:o,lineWidth:i,showArrows:e}},visibleElements:n}=this,r=this.lineSymbol;return l("div",{class:A.divControlsSymbolPicker},n.arrowsToggle?this._renderToggle(e,this.showArrows,r,"marker"):void 0,n.capSelect?this._renderLineStylePicker(t,this._lineCapTypes,r,"cap"):void 0,n.colorPicker&&r.color?this._renderColorPicker(s,r.color.toHex(),r,"color"):void 0,n.stylePicker?this._renderLineStylePicker(o,this._lineStyleTypes,r,"style"):void 0,n.widthInput?this._renderNumberInput(i,r.width.toString(),r,"width"):void 0)}loadDependencies(){return n({dropdown:()=>import("../chunks/calcite-dropdown.js"),"dropdown-group":()=>import("../chunks/calcite-dropdown-group.js"),"dropdown-item":()=>import("../chunks/calcite-dropdown-item.js"),input:()=>import("../chunks/calcite-input.js"),"input-number":()=>import("../chunks/calcite-input-number.js"),label:()=>import("../chunks/calcite-label.js"),switch:()=>import("../chunks/calcite-switch.js")})}_afterComponentCreate(t){"value"in t&&null!=t.value&&"setNumberValue"in t&&t.setNumberValue({committing:!1,value:t.value,origin:"direct"})}_renderColorPicker(t,s,o,i){return l("calcite-label",{scale:"s"},t,l("calcite-input",{scale:"s",type:"color",value:s,onCalciteInputInput:t=>{const s=t.target;o.set(i,new c(s.value))}}))}_renderLineStylePicker(t,s,o,i){const e="style"===i,n="esri/widgets/UtilityNetworkAssociations/assets/img";return l("calcite-label",{scale:"s"},t,l("calcite-dropdown",{class:A.dropdown,onCalciteDropdownSelect:t=>{const s=t.target;o.set(i,s.selectedItems[0].label)}},l("div",{class:A.dropdownTrigger,role:"button",slot:"trigger"},l("div",{class:e?A.dropdownSelectedItemLinePattern:A.dropdownSelectedItemLineCap,style:`background-image:url(${a(`${n}/line-${e?"patterns":"caps"}/${o[i]}.png`)})`})),l("calcite-dropdown-group",null,s.map((t=>function(t,s){return l("calcite-dropdown-item",{label:t,selected:o[s]===t},l("div",{class:e?A.dropdownItemLinePattern:A.dropdownItemLineCap,style:`background-image:url(${a(`${n}/line-${e?"patterns":"caps"}/${t}.png`)})`}))}(t,i))))))}_renderNumberInput(t,s,o,i){return l("calcite-label",{scale:"s"},t,l("calcite-input-number",{afterCreate:this._afterComponentCreate,max:10,min:1,scale:"s",step:1,type:"number",value:s,onCalciteInputNumberChange:t=>{const s=t.target;o.set(i,s.value)}}))}_renderToggle(t,s,o,i){return l("div",{class:A.labelAndToggle},l("calcite-label",{scale:"s"},t),l("calcite-switch",{bind:this,checked:s,onCalciteSwitchChange:t=>{t.target.checked?o.set(i,new p({style:"arrow"})):o.set(i,null)}}))}};t([o()],w.prototype,"lineSymbol",void 0),t([o(),r("esri/widgets/UtilityNetworkAssociations/t9n/UtilityNetworkAssociations")],w.prototype,"messages",void 0),t([o()],w.prototype,"showArrows",void 0),t([o({type:b,nonNullable:!0})],w.prototype,"visibleElements",void 0),w=t([i("esri.widgets.UtilityNetworkAssociations.UtilityNetworkAssociationsLineSymbolPicker")],w);const g=w;let j=class extends u{constructor(t){super(t),this.maxAllowableAssociationsSlider=!1,this.connectivityAssociationsSettings=null,this.structuralAttachmentAssociationsSettings=null}};t([o({type:Boolean,nonNullable:!0})],j.prototype,"maxAllowableAssociationsSlider",void 0),t([o({type:b,nonNullable:!0})],j.prototype,"connectivityAssociationsSettings",void 0),t([o({type:b,nonNullable:!0})],j.prototype,"structuralAttachmentAssociationsSettings",void 0),j=t([i("esri.widgets.UtilityNetworkAssociations.VisibleElements")],j);const S=j,k="esri-un-associations",v={action:`${k}__action`,actionRefresh:`${k}__action-refresh`,blockContent:`${k}__block-content`,blockSectionSettings:`${k}__block-section-settings`,divControlsMain:`${k}__div-controls-main`,label:`${k}__label`,labelAndSlider:`${k}__label-and-slider`,labelAndToggle:`${k}__label-and-toggle`,slider:`${k}__slider`,statusIconContainer:`${k}__status-icon-container`,statusIconWarning:`${k}__status-icon-warning`,switch:`${k}__switch`,switchContainer:`${k}__switch-container`,widgetContainer:`${k}__widget-container`};let _=class extends e{constructor(t,s){super(t,s),this._autoRefreshAssociations=!0,this._associationsOptionsEnabled=!1,this._maxAllowableAssociationsSliderMax=1e3,this._maxAllowableAssociationsSliderMin=250,this._maxAllowableAssociationsSliderStep=250,this.messages=null,this.messagesCommon=null,this.viewModel=new d,this.visibleElements=new S}initialize(){this.addHandles([s((()=>[this.view?.stationary,this.showAssociationsEnabled,this.includeConnectivityAssociations,this.includeStructuralAttachmentAssociations,this.maxAllowableAssociations]),(()=>{!0===this.autoRefreshAssociations&&(!0===this.showAssociationsEnabled?this.viewModel.showAssociations():this.viewModel.removeAssociations())}))])}get autoRefreshAssociations(){return this._autoRefreshAssociations}set autoRefreshAssociations(t){this._autoRefreshAssociations=t}get connectivityAssociationsLineSymbol(){return this.viewModel.connectivityAssociationsLineSymbol}set connectivityAssociationsLineSymbol(t){this.viewModel.connectivityAssociationsLineSymbol=t}get icon(){return"view-associations"}set icon(t){this._overrideIfSome("icon",t)}get includeConnectivityAssociations(){return this.viewModel.includeConnectivityAssociations}set includeConnectivityAssociations(t){this.viewModel.includeConnectivityAssociations=t}get includeStructuralAttachmentAssociations(){return this.viewModel.includeStructuralAttachmentAssociations}set includeStructuralAttachmentAssociations(t){this.viewModel.includeStructuralAttachmentAssociations=t}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}get maxAllowableAssociations(){return this.viewModel.maxAllowableAssociations}set maxAllowableAssociations(t){this.viewModel.maxAllowableAssociations=t}get maxAllowableAssociationsSliderMax(){return this._maxAllowableAssociationsSliderMax}set maxAllowableAssociationsSliderMax(t){t<=this.maxAllowableAssociationsSliderMin||(this._maxAllowableAssociationsSliderMax=t)}get maxAllowableAssociationsSliderMin(){return this._maxAllowableAssociationsSliderMin}set maxAllowableAssociationsSliderMin(t){t<0||t>=this.maxAllowableAssociationsSliderMax||(this._maxAllowableAssociationsSliderMin=t)}get maxAllowableAssociationsSliderStep(){return this._maxAllowableAssociationsSliderStep}set maxAllowableAssociationsSliderStep(t){this._maxAllowableAssociationsSliderStep=t}get showArrowsConnectivity(){return this.viewModel.showArrowsConnectivity}set showArrowsConnectivity(t){this.viewModel.showArrowsConnectivity=t}get showArrowsStructuralAttachment(){return this.viewModel.showArrowsStructuralAttachment}set showArrowsStructuralAttachment(t){this.viewModel.showArrowsStructuralAttachment=t}get showAssociationsEnabled(){return this.viewModel.showAssociationsEnabled}set showAssociationsEnabled(t){this.viewModel.showAssociationsEnabled=t}get structuralAttachmentAssociationsLineSymbol(){return this.viewModel.structuralAttachmentAssociationsLineSymbol}set structuralAttachmentAssociationsLineSymbol(t){this.viewModel.structuralAttachmentAssociationsLineSymbol=t}get utilityNetwork(){return this.viewModel.utilityNetwork}set utilityNetwork(t){this.viewModel.utilityNetwork=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}render(){const{label:t}=this;return l("div",{class:v.widgetContainer},l("calcite-block",{class:v.blockContent,collapsible:!0,heading:t},this._renderStatusIcon(),this.autoRefreshAssociations?this._renderShowAssociationsSwitch():this._renderRefreshAssociationsAction(),this._renderContent()))}loadDependencies(){return n({action:()=>import("../chunks/calcite-action.js"),block:()=>import("../chunks/calcite-block.js"),"block-section":()=>import("../chunks/calcite-block-section.js"),icon:()=>import("../chunks/calcite-icon.js"),label:()=>import("../chunks/calcite-label.js"),notice:()=>import("../chunks/calcite-notice.js"),panel:()=>import("../chunks/calcite-panel.js"),slider:()=>import("../chunks/calcite-slider.js"),switch:()=>import("../chunks/calcite-switch.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}_connectivityAssociationsSwitchChange(t){this.includeConnectivityAssociations=t.target.checked}_getLoadErrorMessagesAsNotices(t,s){return l("calcite-notice",{closable:!1,key:`error-notice-${s}`,kind:"warning",open:!0,scale:"s"},l("div",{slot:"message"},t))}_maxAllowableAssociationsSliderChange(t){this.maxAllowableAssociations=Number(t.target.value)}_refreshAssociations(){const{viewModel:t,viewModel:{state:s}}=this;"ready"!==s&&"warning"!==s||t.showAssociations()}_renderConnectivityAssociationsSettings(){const{messages:{input:{enableConnectivity:t}},visibleElements:{connectivityAssociationsSettings:s}}=this;if(s)return l("calcite-block-section",{class:v.blockSectionSettings,text:t},l(g,{id:`${this.id}-symbol-picker-connectivity`,lineSymbol:this.connectivityAssociationsLineSymbol,showArrows:this.showArrowsConnectivity,visibleElements:s}))}_renderConnectivityAssociationsToggle(){const{messages:{input:{enableConnectivity:t}}}=this;return l("div",{class:v.labelAndToggle,key:"connectivityAssociationsToggleDiv"},l("calcite-label",{class:v.label},t),l("calcite-switch",{bind:this,checked:this.includeConnectivityAssociations,disabled:!this._associationsOptionsEnabled&&this.autoRefreshAssociations,onCalciteSwitchChange:this._connectivityAssociationsSwitchChange}))}_renderContent(){const{viewModel:{loadErrors:t,state:s}}=this;return"disabled"===s?l("div",{class:v.divControlsMain,key:"loadErrorsDiv"},t.items.map(this._getLoadErrorMessagesAsNotices)):l("calcite-panel",{disabled:"loading"===s},l("div",{class:v.divControlsMain},this._renderConnectivityAssociationsToggle(),this._renderStructuralAttachmentAssociationsToggle(),this._renderSettingsPane()))}_renderLoadingAction(t,s,o){return l("div",{key:t,slot:"control"},l("calcite-action",{id:s,loading:!0,text:o}),l("calcite-tooltip",{referenceElement:s},l("span",null,o)))}_renderMaxAllowableAssociationsSlider(){const{messages:{input:{maxAllowableAssociations:t}},visibleElements:{maxAllowableAssociationsSlider:s}}=this;if(s)return l("div",{class:v.labelAndSlider},l("calcite-label",{class:v.label},t),l("calcite-slider",{bind:this,class:v.slider,labelTicks:!0,max:this.maxAllowableAssociationsSliderMax,min:this.maxAllowableAssociationsSliderMin,scale:"s",snap:!0,step:this.maxAllowableAssociationsSliderStep,ticks:this.maxAllowableAssociationsSliderStep,value:this.maxAllowableAssociations,onCalciteSliderChange:this._maxAllowableAssociationsSliderChange}))}_renderRefreshAssociationsAction(){const{messages:{input:{refreshAssociations:t}},messagesCommon:{loading:s},viewModel:{state:o}}=this,i=`${this.id}-refresh-action`;if("disabled"!==o)return l("div",{class:v.actionRefresh,slot:"control"},l("calcite-action",{bind:this,class:v.action,icon:"refresh-f",id:i,loading:"loading"===o,onclick:this._refreshAssociations,text:t}),l("calcite-tooltip",{referenceElement:i},l("span",null,"loading"===o?s:t)))}_renderSettingsPane(){const{messagesCommon:{settings:t},visibleElements:{maxAllowableAssociationsSlider:s,connectivityAssociationsSettings:o,structuralAttachmentAssociationsSettings:i}}=this;if(s||o||i)return l("calcite-block",{class:v.blockContent,collapsible:!0,heading:t},this._renderMaxAllowableAssociationsSlider(),this._renderConnectivityAssociationsSettings(),this._renderStructuralAttachmentAssociationsSettings())}_renderShowAssociationsSwitch(){const{messages:{input:{enableAssociations:t}},messagesCommon:{loading:s},viewModel:{state:o}}=this,i=`${this.id}-show-associations-switch`;if("disabled"!==o)return"loading"===o?this._renderLoadingAction("loadingActionDiv",`${this.id}-loading-action`,s):l("div",{class:v.switchContainer,key:"switchDiv",slot:"control"},l("calcite-switch",{bind:this,checked:this.showAssociationsEnabled,class:v.switch,id:i,onCalciteSwitchChange:this._showAssociationsSwitchChange}),l("calcite-tooltip",{referenceElement:i},l("span",null,t)))}_renderStatusIcon(){const{messagesCommon:{executing:t},viewModel:{executionError:s,state:o}}=this;switch(o){case"disabled":return this._renderWarningIcon("statusDiv",`${this.id}-disabled-icon`,null);case"warning":return this._renderWarningIcon("statusDiv",`${this.id}-warning-icon`,s);case"executing":return this._renderLoadingAction("executingActionDiv",`${this.id}-executing-action`,t);default:return}}_renderStructuralAttachmentAssociationsSettings(){const{messages:{input:{enableStructuralAttachment:t}},visibleElements:{structuralAttachmentAssociationsSettings:s}}=this;if(s)return l("calcite-block-section",{class:v.blockSectionSettings,text:t},l(g,{id:`${this.id}-symbol-picker-structural-attachment`,lineSymbol:this.structuralAttachmentAssociationsLineSymbol,showArrows:this.showArrowsStructuralAttachment,visibleElements:s}))}_renderStructuralAttachmentAssociationsToggle(){const{messages:{input:{enableStructuralAttachment:t}}}=this;return l("div",{class:v.labelAndToggle,key:"structuralAttachmentAssociationsToggleDiv"},l("calcite-label",{class:v.label},t),l("calcite-switch",{bind:this,checked:this.includeStructuralAttachmentAssociations,disabled:!this._associationsOptionsEnabled&&this.autoRefreshAssociations,onCalciteSwitchChange:this._structuralAttAssociationsSwitchChange}))}_showAssociationsSwitchChange(t){const{viewModel:s}=this;this.showAssociationsEnabled=t.target.checked,this._associationsOptionsEnabled=t.target.checked,this.showAssociationsEnabled||s.removeAssociations()}_structuralAttAssociationsSwitchChange(t){this.includeStructuralAttachmentAssociations=t.target.checked}_renderWarningIcon(t,s,o){return o?l("div",{class:v.statusIconContainer,key:t,slot:"control"},l("calcite-icon",{class:v.statusIconWarning,icon:"exclamation-mark-triangle",id:s,scale:"s"}),l("calcite-tooltip",{referenceElement:s},l("span",null,o))):l("div",{class:v.statusIconContainer,key:t,slot:"control"},l("calcite-icon",{class:v.statusIconWarning,icon:"exclamation-mark-triangle",id:s,scale:"s"}))}};t([o()],_.prototype,"autoRefreshAssociations",null),t([o()],_.prototype,"connectivityAssociationsLineSymbol",null),t([o()],_.prototype,"icon",null),t([o()],_.prototype,"includeConnectivityAssociations",null),t([o()],_.prototype,"includeStructuralAttachmentAssociations",null),t([o()],_.prototype,"label",null),t([o()],_.prototype,"maxAllowableAssociations",null),t([o()],_.prototype,"maxAllowableAssociationsSliderMax",null),t([o()],_.prototype,"maxAllowableAssociationsSliderMin",null),t([o()],_.prototype,"maxAllowableAssociationsSliderStep",null),t([o(),r("esri/widgets/UtilityNetworkAssociations/t9n/UtilityNetworkAssociations")],_.prototype,"messages",void 0),t([o(),r("esri/t9n/common")],_.prototype,"messagesCommon",void 0),t([o()],_.prototype,"showArrowsConnectivity",null),t([o()],_.prototype,"showArrowsStructuralAttachment",null),t([o()],_.prototype,"showAssociationsEnabled",null),t([o()],_.prototype,"structuralAttachmentAssociationsLineSymbol",null),t([o()],_.prototype,"utilityNetwork",null),t([o()],_.prototype,"view",null),t([o({type:d})],_.prototype,"viewModel",void 0),t([o({type:S,nonNullable:!0})],_.prototype,"visibleElements",void 0),_=t([i("esri.widgets.UtilityNetworkAssociations")],_);const C=_;export{C as default};

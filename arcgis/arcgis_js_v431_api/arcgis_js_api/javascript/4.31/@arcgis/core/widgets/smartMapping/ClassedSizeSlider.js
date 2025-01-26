/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import t from"../../Color.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import{cast as r}from"../../core/accessorSupport/decorators/cast.js";import"../../core/lang.js";import{subclass as e}from"../../core/accessorSupport/decorators/subclass.js";import i from"../../renderers/support/ClassBreakInfo.js";import{SmartMappingSliderBase as p}from"./SmartMappingSliderBase.js";import m from"./ClassedSizeSlider/ClassedSizeSliderViewModel.js";import{getFillFromColor as l}from"./support/utils.js";import{g as n}from"../../chunks/globalCss.js";import{s as a}from"../../chunks/widgetUtils.js";import{m as c}from"../../chunks/messageBundle.js";import{t as u}from"../../chunks/jsxFactory.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/commonProperties.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/assets.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../geometry/Point.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../core/Clonable.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../Histogram.js";import"../Widget.js";import"../../chunks/domUtils.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/componentsUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../Histogram/HistogramViewModel.js";import"../Slider.js";import"../Slider/SliderViewModel.js";import"../../renderers/support/utils.js";import"../../chunks/numberUtils.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../chunks/utils3.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/utils2.js";import"../../chunks/mat4.js";import"../../chunks/common.js";import"../../chunks/utils12.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/enums2.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/colorRampUtils2.js";import"../../chunks/utils15.js";import"../../chunks/timeUtils.js";import"../../renderers/support/HeatmapColorStop.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"./SmartMappingSliderViewModel.js";var j;const h="esri-classed-size-slider",b={base:h,rampElement:`${h}__ramp`,sliderContainer:`${h}__slider-container`,histogramContainer:`${h}__histogram-container`,track:`${h}--interactive-track`},d={trackFillColor:new t([149,149,149]),trackBackgroundColor:new t([224,224,224])};let y=j=class extends p{constructor(s,t){super(s,t),this._rampNode=null,this.messages=null,this.style={...d},this.viewModel=new m}get breaks(){return this.viewModel.breaks}set breaks(s){this.viewModel.breaks=s}get label(){return this.messages?.widgetLabel??""}set label(s){this._overrideIfSome("label",s)}castStyle(s){return{...d,...s}}static fromRendererResult(s,t){const{renderer:{classBreakInfos:o}}=s,r=o.map((s=>{const t=s.symbol;let o;switch(t.type){case"simple-line":o=t.width;break;case"simple-marker":o=t.size;break;case"picture-marker":o=t.height}return{min:s.minValue,max:s.maxValue,size:o}}));return new j({breaks:r,histogramConfig:{bins:t?t.bins:[]}})}updateClassBreakInfos(s){const t=this.breaks;if(t.length===s.length)return s.map(((s,o)=>{const r=s.symbol;switch(r.type){case"simple-line":r.width=t[o].size;break;case"simple-marker":r.size=t[o].size;break;case"picture-marker":{const s=t[o].size,e=r.width,i=r.height;r.height=s,r.width=s/i*e;break}}return new i({minValue:t[o].min,maxValue:t[o].max,symbol:r})}));console.error(`Number of input breakInfos must match number of slider breaks: ${t.length}`)}updateFromRendererResult(s,t){const{renderer:{classBreakInfos:o}}=s,r=o.map((s=>{const t=s.symbol;let o;switch(t.type){case"simple-line":o=t.width;break;case"simple-marker":o=t.size;break;case"picture-marker":o=t.height}return{min:s.minValue,max:s.maxValue,size:o}}));this.set({breaks:r}),t?.bins&&(this.histogramConfig.bins=t.bins)}render(){const{state:s,label:t,visibleElements:o}=this,r="disabled"===s,e=this.classes(b.base,n.widget,n.panel,{[n.disabled]:r,[b.track]:!!o.interactiveTrack});return u("div",{"aria-label":t,class:e},r?null:this.renderContent(this._renderRamp(),b.sliderContainer,b.histogramContainer))}_renderRamp(){const{style:{trackBackgroundColor:s}}=this;return u("div",{afterCreate:a,bind:this,class:b.rampElement,"data-node-ref":"_rampNode"},u("svg",{xmlns:"http://www.w3.org/2000/svg"},u("rect",{fill:l(s),height:"100%",width:"100%",x:"0",y:"0"}),this._renderPath()))}_renderPath(){if(!this._rampNode)return;const{offsetHeight:s=0,offsetWidth:t=0}=this._rampNode;if(null==s||null==t)return;const{breaks:o,viewModel:{max:r,min:e},style:{trackFillColor:i}}=this,p=r-e,m=t/o.length,n=o.map((t=>s-Math.round((t.min-e)/p*s)+1)).reverse(),a=o[0].size>o[o.length-1].size||!1;let c=a?m:t,j=`M${c} 0 `;return n.forEach(((s,o)=>{const r=m*(o+1);j+=`L${c} ${s} `,c=a?m+r:t-r,j+=`L${c} ${s} `})),j+=`L0 ${s} L0 ${s} L0 0 Z`,u("path",{d:j,fill:l(i)})}};s([o()],y.prototype,"breaks",null),s([o()],y.prototype,"label",null),s([o(),c("esri/widgets/smartMapping/ClassedSizeSlider/t9n/ClassedSizeSlider")],y.prototype,"messages",void 0),s([o()],y.prototype,"style",void 0),s([r("style")],y.prototype,"castStyle",null),s([o()],y.prototype,"viewModel",void 0),y=j=s([e("esri.widgets.smartMapping.ClassedSizeSlider")],y);const k=y;export{k as default};

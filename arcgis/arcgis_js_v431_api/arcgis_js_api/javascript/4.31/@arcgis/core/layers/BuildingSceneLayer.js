/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import s from"../core/Collection.js";import{C as r}from"../chunks/CollectionFlattener.js";import e from"../core/Error.js";import{clone as o}from"../core/lang.js";import{l as i}from"../chunks/loadAll.js";import{L as p}from"../chunks/Logger.js";import{M as n}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as m}from"../core/promiseUtils.js";import{join as l}from"../core/urlUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{r as u}from"../chunks/reader.js";import{subclass as c}from"../core/accessorSupport/decorators/subclass.js";import j from"../geometry/SpatialReference.js";import y from"./Layer.js";import h from"./buildingSublayers/BuildingComponentSublayer.js";import d from"./buildingSublayers/BuildingGroupSublayer.js";import{APIKeyMixin as b}from"./mixins/APIKeyMixin.js";import{A as k}from"../chunks/ArcGISService.js";import{CustomParametersMixin as f}from"./mixins/CustomParametersMixin.js";import{OperationalLayer as S}from"./mixins/OperationalLayer.js";import{PortalLayer as g}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as I}from"./mixins/ScaleRangeLayer.js";import{SceneService as v,SaveOperationType as U}from"./mixins/SceneService.js";import{f as L}from"../chunks/associatedFeatureServiceUtils.js";import C from"./support/BuildingFilter.js";import T from"./support/BuildingSummaryStatistics.js";import{s as x,a as F,r as R,e as A}from"../chunks/commonProperties2.js";import{l as P,e as D,f as E}from"../chunks/elevationInfoUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/Evented.js";import"../config.js";import"../chunks/ensureType.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"../core/JSONSupport.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../chunks/writer.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Identifiable.js";import"../time/TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/content/UtilityNetworkAssociationsContent.js";import"../popup/support/UtilityNetworkAssociationType.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../chunks/vec3f64.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/ClassBreaksRenderer.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/RendererLegendOptions.js";import"../renderers/DictionaryRenderer.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version2.js";import"./support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../chunks/OverrideHelper.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/common.js";import"../chunks/vec4f64.js";import"../chunks/utils7.js";import"../chunks/enums2.js";import"../chunks/quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"./FeatureLayer.js";import"../chunks/layerContainerType.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/AttachmentElement.js";import"../form/elements/inputs/attachments/AttachmentInput.js";import"../chunks/Input.js";import"../form/elements/inputs/attachments/support/inputs.js";import"../form/elements/inputs/attachments/AudioInput.js";import"../chunks/utils8.js";import"../form/elements/inputs/attachments/DocumentInput.js";import"../form/elements/inputs/attachments/ImageInput.js";import"../form/elements/inputs/attachments/SignatureInput.js";import"../form/elements/inputs/attachments/VideoInput.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../form/elements/RelationshipElement.js";import"../form/elements/TextElement.js";import"../chunks/formUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/editsZScale.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"./support/Field.js";import"../chunks/fieldType.js";import"./mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils2.js";import"../chunks/mat4.js";import"../chunks/EditBusLayer.js";import"../chunks/uuid.js";import"./mixins/FeatureEffectLayer.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/featureLayerUtils.js";import"../chunks/featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"./support/GeometryFieldsInfo.js";import"./support/LayerFloorInfo.js";import"./support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"./support/Subtype.js";import"./mixins/FeatureReductionLayer.js";import"./support/AggregateField.js";import"./support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../tables/AttributeTableTemplate.js";import"../tables/elements/AttributeTableGroupElement.js";import"../tables/elements/AttributeTableElement.js";import"../tables/support/elements.js";import"../tables/elements/AttributeTableAttachmentElement.js";import"../tables/elements/AttributeTableFieldElement.js";import"../tables/elements/AttributeTableRelationshipElement.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/MD5.js";import"./mixins/OrderedLayer.js";import"../chunks/OrderByInfo.js";import"./mixins/PublishableLayer.js";import"./support/PublishingInfo.js";import"./mixins/RefreshableLayer.js";import"./mixins/TemporalLayer.js";import"./support/TimeInfo.js";import"../time/TimeInterval.js";import"./support/FeatureTemplate.js";import"./support/FeatureType.js";import"../chunks/fieldProperties.js";import"../chunks/labelingInfo.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../chunks/AlphaCutoff.js";import"../chunks/interfaces2.js";import"./buildingSublayers/BuildingSublayer.js";import"../chunks/capabilities.js";import"../chunks/I3SIndexInfo.js";import"../chunks/I3SLayerDefinitions.js";import"../chunks/I3SUtil.js";import"../chunks/mat4f64.js";import"../chunks/vec3.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/projectVectorToVector.js";import"../chunks/projectPointToVector.js";import"../chunks/dehydratedPoint.js";import"../chunks/sphere.js";import"../chunks/ray.js";import"../chunks/mat3.js";import"../chunks/mat3f64.js";import"../chunks/plane.js";import"../chunks/quatf64.js";import"../chunks/vec2f64.js";import"../chunks/mathUtils2.js";import"../chunks/I3SBinaryReader.js";import"../chunks/VertexAttribute.js";import"../chunks/computeTranslationToOriginAndRotation.js";import"../chunks/edgeUtils.js";import"../chunks/floatRGBA.js";import"../chunks/DecodeSymbolColor.glsl.js";import"../chunks/interfaces3.js";import"../chunks/Matrix4PassUniform.js";import"../chunks/BindType.js";import"../chunks/RgbaFloatEncoding.glsl.js";import"../chunks/Float4DrawUniform.js";import"../chunks/NormalAttribute.glsl.js";import"../chunks/Matrix3DrawUniform.js";import"../chunks/orientedBoundingBox.js";import"../chunks/quat.js";import"../chunks/spatialReferenceEllipsoidUtils.js";import"../chunks/ViewingMode.js";import"../chunks/Attribute.js";import"../chunks/layerViewUtils.js";import"../chunks/popupUtils.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../chunks/originUtils.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../chunks/jsonContext.js";import"../chunks/resourceUtils2.js";import"../chunks/resourceUtils.js";import"../chunks/saveUtils.js";import"../chunks/BuildingFilterBlock.js";const w=s.ofType(C),V=o(d.sublayersProperty),M=V.json?.origins;M&&(M["web-scene"]={type:[h],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},M["portal-item"]={type:[h],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let B=class extends(v(k(S(g(I(n(f(b(y))))))))){constructor(t){super(t),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new r({getCollections:()=>[this.sublayers],getChildrenFunction:t=>"building-group"===t.type?t.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new w,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(t){return"string"==typeof t?{url:t}:t??{}}destroy(){this.allSublayers.destroy()}readSublayers(t,s,r){const e=d.readSublayers(t,s,r);return d.forEachSublayer(e,(t=>t.layer=this)),this._allSublayerOverrides&&(function(t,s){s.forEach((s=>O(t,s)))}(e,this._allSublayerOverrides),this._allSublayerOverrides=null),e}write(t,s){return t=super.write(t,s),!s||"web-scene"!==s.origin&&"portal-item"!==s.origin||(this.sublayers?function(t,s,r){const e=[];d.forEachSublayer(t,(t=>{const s=t.write({},r);Object.keys(s).length>1&&e.push(s)})),e.length>0&&(s.sublayers=e)}(this.sublayers,t,s):this._allSublayerOverrides&&function(t,s,r){const e=r?.origin&&t.get(r.origin);e&&(s.sublayers=[],e.overrides.forEach((t=>{s.sublayers.push(o(t))})))}(this._allSublayerOverrides,t,s)),t}read(t,s){if(super.read(t,s),("web-scene"===s?.origin||"portal-item"===s?.origin)&&Array.isArray(t?.sublayers)){const r=function(t,s){const r=new Map;for(const o of t)null!=o&&"object"==typeof o&&"number"==typeof o.id?r.set(o.id,o):s.messages?.push(new e("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:o}));return{overrides:r,context:s}}(t.sublayers,s);this.sublayers?O(this.sublayers,r):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(s.origin,r))}}readSummaryStatistics(t,s){if("string"==typeof s.statisticsHRef){const t=l(this.parsedUrl?.path,s.statisticsHRef);return new T({url:t})}return null}set elevationInfo(t){this._set("elevationInfo",t),this._validateElevationInfo()}load(t){const s=null!=t?t.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},t).catch(m).then((()=>this._fetchService(s))).then((()=>this._fetchAssociatedFeatureService(s)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return i(this,(t=>{d.forEachSublayer(this.sublayers,(s=>{"building-group"!==s.type&&t(s)})),this.summaryStatistics&&t(this.summaryStatistics)}))}async saveAs(t,s){return this._debouncedSaveOperations(U.SAVE_AS,{...s,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},t)}async save(){const t={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(U.SAVE,t)}validateLayer(t){if(!t.layerType||"Building"!==t.layerType)throw new e("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:t.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(t){try{const{portalItem:s}=await L(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:t});this.associatedFeatureServiceItem=s}catch(t){p.getLogger(this).warn("Associated feature service item could not be loaded",t)}}_validateElevationInfo(){const t=this.elevationInfo,s="Building scene layers";P(p.getLogger(this),D(s,"absolute-height",t)),P(p.getLogger(this),E(s,t))}};function O(t,s){const{overrides:r,context:e}=s;d.forEachSublayer(t,(t=>t.read(r.get(t.id),e)))}t([a({type:["BuildingSceneLayer"]})],B.prototype,"operationalLayerType",void 0),t([a({readOnly:!0})],B.prototype,"allSublayers",void 0),t([a(V)],B.prototype,"sublayers",void 0),t([u("service","sublayers")],B.prototype,"readSublayers",null),t([a({type:w,nonNullable:!0,json:{write:!0}})],B.prototype,"filters",void 0),t([a({type:String,json:{write:!0}})],B.prototype,"activeFilterId",void 0),t([a({readOnly:!0,type:T})],B.prototype,"summaryStatistics",void 0),t([u("summaryStatistics",["statisticsHRef"])],B.prototype,"readSummaryStatistics",null),t([a({type:[String],json:{read:!1}})],B.prototype,"outFields",void 0),t([a(x)],B.prototype,"fullExtent",void 0),t([a(F)],B.prototype,"legendEnabled",void 0),t([a({type:["show","hide","hide-children"]})],B.prototype,"listMode",void 0),t([a(R(j))],B.prototype,"spatialReference",void 0),t([a(A)],B.prototype,"elevationInfo",null),t([a({json:{read:!1},readOnly:!0})],B.prototype,"type",void 0),t([a()],B.prototype,"associatedFeatureServiceItem",void 0),B=t([c("esri.layers.BuildingSceneLayer")],B);const _=B;export{_ as default};

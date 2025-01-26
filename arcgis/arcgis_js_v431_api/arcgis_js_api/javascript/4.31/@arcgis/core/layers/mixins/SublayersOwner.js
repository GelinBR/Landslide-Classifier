/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import r from"../../core/Collection.js";import{C as t}from"../../chunks/CollectionFlattener.js";import o from"../../core/Error.js";import{L as e}from"../../chunks/Logger.js";import{watch as i,sync as p}from"../../core/reactiveUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{g as l}from"../../chunks/utils.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{O as a,n as u,i as c}from"../../core/Accessor.js";import j from"../support/Sublayer.js";import{i as y}from"../../chunks/sublayerUtils.js";import"../../core/Evented.js";import"../../chunks/handleUtils.js";import"../../core/Handles.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/ensureType.js";import"../../chunks/metadata.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../renderers/ClassBreaksRenderer.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../Graphic.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../chunks/RendererLegendOptions.js";import"../../renderers/DictionaryRenderer.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/Version2.js";import"../support/FieldsIndex.js";import"../../chunks/UnknownTimeZone.js";import"../../chunks/OverrideHelper.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec4.js";import"../../chunks/common.js";import"../../chunks/vec4f64.js";import"../../chunks/utils7.js";import"../../chunks/enums2.js";import"../../chunks/quantizationUtils.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../chunks/QueryTask.js";import"../../chunks/infoFor3D.js";import"../../chunks/DataLayerSource.js";import"../support/Field.js";import"../../chunks/domains.js";import"../support/CodedValueDomain.js";import"../support/Domain.js";import"../support/InheritedDomain.js";import"../support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/utils9.js";import"../../chunks/executeForIds.js";import"../../chunks/query.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils10.js";import"../../chunks/pbfQueryUtils.js";import"../../chunks/pbf.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/queryZScale.js";import"../../chunks/zscale.js";import"../../rest/support/Query.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../time/TimeExtent.js";import"../../chunks/timeUtils.js";import"../../chunks/executeForExtent.js";import"../../chunks/executeQueryJSON.js";import"../../rest/support/FeatureSet.js";import"../../chunks/executeQueryPBF.js";import"../../chunks/featureConversionUtils.js";import"../../chunks/featureLayerUtils.js";import"../../chunks/uuid.js";import"../../chunks/featureQueryAll.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../support/FeatureType.js";import"../support/FeatureTemplate.js";import"../support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../chunks/labelingInfo.js";import"../support/LayerFloorInfo.js";import"../support/Relationship.js";import"../../chunks/serviceCapabilitiesUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../support/popupUtils.js";const h=r.ofType(j);function b(s,r){s&&s.forEach((s=>{r(s),s.sublayers&&s.sublayers.length&&b(s.sublayers,r)}))}const d=d=>{let k=class extends d{constructor(...s){super(...s),this.allSublayers=new t({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.sublayers}),this.sublayersSourceJSON={[a.SERVICE]:{},[a.PORTAL_ITEM]:{},[a.WEB_SCENE]:{},[a.WEB_MAP]:{}},this.subtables=null,this.addHandles([i((()=>this.sublayers),((s,r)=>this._handleSublayersChange(s,r)),p),i((()=>this.subtables),((s,r)=>this._handleSublayersChange(s,r)),p)])}destroy(){this.allSublayers.destroy()}readSublayers(s,r){if(!r||!s)return;const{sublayersSourceJSON:t}=this,o=u(r.origin);if(o<a.SERVICE)return;if(t[o]={context:r,visibleLayers:s.visibleLayers||t[o].visibleLayers,layers:s.layers||t[o].layers},o>a.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:e,origin:i}=this.createSublayersForOrigin("web-document"),p=l(this);p.setDefaultOrigin(i),this._set("sublayers",new h(e)),p.setDefaultOrigin("user")}findSublayerById(s){return this.allSublayers.find((r=>r.id===s))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(s){const r=u("web-document"===s?"web-map":s);let t=a.SERVICE,o=this.sublayersSourceJSON[a.SERVICE].layers,e=this.sublayersSourceJSON[a.SERVICE].context,i=null;const p=[a.PORTAL_ITEM,a.WEB_SCENE,a.WEB_MAP].filter((s=>s<=r));for(const s of p){const r=this.sublayersSourceJSON[s];y(r.layers)&&(t=s,o=r.layers,e=r.context,r.visibleLayers&&(i={visibleLayers:r.visibleLayers,context:r.context}))}const n=[a.PORTAL_ITEM,a.WEB_SCENE,a.WEB_MAP].filter((s=>s>t&&s<=r));let l=null;for(const s of n){const{layers:r,visibleLayers:t,context:o}=this.sublayersSourceJSON[s];r&&(l={layers:r,context:o}),t&&(i={visibleLayers:t,context:o})}const m=function(s,r){const t=[],o={};return s?(s.forEach((s=>{const e=new j;if(e.read(s,r),o[e.id]=e,null!=s.parentLayerId&&-1!==s.parentLayerId){const r=o[s.parentLayerId];r.sublayers||(r.sublayers=[]),r.sublayers.unshift(e)}else t.unshift(e)})),t):t}(o,e),d=new Map,k=new Set;if(l)for(const s of l.layers)d.set(s.id,s);if(i?.visibleLayers)for(const s of i.visibleLayers)k.add(s);return b(m,(s=>{l&&s.read(d.get(s.id),l.context),i&&s.read({defaultVisibility:k.has(s.id)},i.context)})),{origin:c(t),sublayers:new h({items:m})}}read(s,r){super.read(s,r),this.readSublayers(s,r)}_handleSublayersChange(s,r){r&&(r.forEach((s=>{s.parent=null,s.layer=null})),this.removeHandles("sublayers-owner")),s&&(s.forEach((s=>{s.parent=this,s.layer=this})),this.addHandles([s.on("after-add",(({item:s})=>{s.parent=this,s.layer=this})),s.on("after-remove",(({item:s})=>{s.parent=null,s.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.addHandles(s.on("before-changes",(s=>{e.getLogger("esri.layers.TileLayer").error(new o("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()})),"sublayers-owner"))}};return s([n({readOnly:!0})],k.prototype,"allSublayers",void 0),s([n({readOnly:!0,type:r.ofType(j)})],k.prototype,"serviceSublayers",void 0),s([n({value:null,type:h,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],k.prototype,"sublayers",void 0),s([n({readOnly:!0})],k.prototype,"sublayersSourceJSON",void 0),s([n({type:h,json:{read:{source:"tables"}}})],k.prototype,"subtables",void 0),k=s([m("esri.layers.mixins.SublayersOwner")],k),k};export{d as SublayersOwner,b as forEachSublayer};

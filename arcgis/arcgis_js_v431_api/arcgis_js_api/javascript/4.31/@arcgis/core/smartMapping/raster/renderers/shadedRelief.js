/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import s from"../../../core/Error.js";import{i as r}from"../../../chunks/rasterRendererHelper.js";import{processRasterRendererParameters as o}from"../support/utils.js";import"../../../core/lang.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../Color.js";import"../../../chunks/colorUtils.js";import"../../../chunks/mathUtils.js";import"../../../chunks/ensureType.js";import"../../../rasterRenderers.js";import"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/tracking.js";import"../../../renderers/ClassBreaksRenderer.js";import"../../../chunks/tslib.es6.js";import"../../../symbols.js";import"../../../symbols/CIMSymbol.js";import"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/enumeration.js";import"../../../chunks/jsonMap.js";import"../../../chunks/reader.js";import"../../../chunks/writer.js";import"../../../layers/support/fieldUtils.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/sql.js";import"../../../intl.js";import"../../../chunks/date.js";import"../../../chunks/locale.js";import"../../../chunks/datetime.js";import"../../../chunks/number.js";import"../../../chunks/substitute.js";import"../../../chunks/messages.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/JSONSupport.js";import"../../../chunks/assets.js";import"../../../geometry.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/unitUtils.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/coordsUtils.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/boundsUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../symbols/Symbol.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/utils4.js";import"../../../symbols/edges/Edges3D.js";import"../../../chunks/screenUtils.js";import"../../../chunks/materialUtils.js";import"../../../chunks/opacityUtils.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../chunks/vec3f64.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/SimpleLineSymbol.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../chunks/lineMarkers.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../symbols/patterns/LineStylePattern3D.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../chunks/utils5.js";import"../../../chunks/colors.js";import"../../../chunks/symbolLayerUtils3D.js";import"../../../chunks/aaBoundingBox.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../chunks/persistableUrlUtils.js";import"../../../symbols/LabelSymbol3D.js";import"../../../core/Collection.js";import"../../../core/Evented.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../symbols/Symbol3D.js";import"../../../chunks/collectionUtils.js";import"../../../portal/Portal.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/LineStyleMarker3D.js";import"../../../core/Clonable.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/support/StyleOrigin.js";import"../../../chunks/Thumbnail.js";import"../../../chunks/calloutUtils.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../symbols/support/Symbol3DVerticalOffset.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../symbols/PictureFillSymbol.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../core/reactiveUtils.js";import"../../../chunks/asyncUtils.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/SimpleMarkerSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../renderers/Renderer.js";import"../../../renderers/support/AuthoringInfo.js";import"../../../renderers/support/AuthoringInfoVisualVariable.js";import"../../../chunks/colorRamps.js";import"../../../rest/support/AlgorithmicColorRamp.js";import"../../../rest/support/ColorRamp.js";import"../../../rest/support/MultipartColorRamp.js";import"../../../renderers/mixins/VisualVariablesMixin.js";import"../../../renderers/visualVariables/ColorVariable.js";import"../../../renderers/visualVariables/VisualVariable.js";import"../../../renderers/visualVariables/support/ColorStop.js";import"../../../renderers/visualVariables/OpacityVariable.js";import"../../../renderers/visualVariables/support/OpacityStop.js";import"../../../renderers/visualVariables/RotationVariable.js";import"../../../renderers/visualVariables/SizeVariable.js";import"../../../renderers/visualVariables/support/SizeStop.js";import"../../../chunks/sizeVariableUtils.js";import"../../../chunks/visualVariableUtils.js";import"../../../Graphic.js";import"../../../PopupTemplate.js";import"../../../popup/content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/Content.js";import"../../../popup/content/CustomContent.js";import"../../../popup/content/ExpressionContent.js";import"../../../popup/ElementExpressionInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../popup/FieldInfo.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/mixins/ChartMediaInfo.js";import"../../../popup/content/mixins/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/RelationshipContent.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/content/TextContent.js";import"../../../popup/content/UtilityNetworkAssociationsContent.js";import"../../../popup/support/UtilityNetworkAssociationType.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../support/actions/ActionBase.js";import"../../../core/Identifiable.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/lengthUtils.js";import"../../../renderers/support/ClassBreakInfo.js";import"../../../chunks/commonProperties.js";import"../../../symbols/support/jsonUtils.js";import"../../../chunks/layerUtils.js";import"../../../chunks/defaults.js";import"../../../chunks/defaultsJSON.js";import"../../../chunks/RendererLegendOptions.js";import"../../../renderers/FlowRenderer.js";import"../../../renderers/RasterColormapRenderer.js";import"../../../renderers/support/ColormapInfo.js";import"../../../chunks/colorRampUtils.js";import"../../../chunks/colorUtils2.js";import"../../../chunks/vec4.js";import"../../../chunks/common.js";import"../../../chunks/vec4f64.js";import"../../../renderers/RasterShadedReliefRenderer.js";import"../../../renderers/RasterStretchRenderer.js";import"../../../chunks/stretchRendererUtils.js";import"../../../renderers/UniqueValueRenderer.js";import"../../../chunks/diffUtils.js";import"../../../renderers/support/UniqueValue.js";import"../../../renderers/support/UniqueValueClass.js";import"../../../renderers/support/UniqueValueGroup.js";import"../../../renderers/support/UniqueValueInfo.js";import"../../../chunks/styleUtils.js";import"../../../renderers/VectorFieldRenderer.js";import"../../../geometry/support/normalizeUtils.js";import"../../../chunks/normalizeUtilsCommon.js";import"../../../chunks/simplify.js";import"../../../chunks/utils9.js";import"../../../chunks/utils10.js";import"../../../chunks/vectorFieldUtils.js";import"../../../layers/support/PixelBlock.js";import"../../../chunks/pixelRangeUtils.js";import"../../../chunks/utils12.js";import"../../../chunks/jsonUtils.js";import"../../../chunks/parser.js";import"../../../chunks/utils2.js";import"../../../chunks/mat4.js";import"../../../symbols/support/cimSymbolUtils.js";import"../../../chunks/utils7.js";import"../../../chunks/enums2.js";import"../../../chunks/LRUCache.js";import"../../../chunks/MemCache.js";import"../../../layers/support/Field.js";import"../../../chunks/domains.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/fieldType.js";import"../../../chunks/stretchUtils.js";import"../../../chunks/generateRendererUtils.js";import"../../../rest/support/ImageHistogramParameters.js";import"../../../layers/support/MosaicRule.js";import"../../../layers/support/DimensionalDefinition.js";import"../../../layers/support/RasterFunction.js";import"../../../time/TimeExtent.js";import"../../../chunks/timeUtils.js";async function t(t){t=await async function(r){const t=(r=await o(r)).layer.supportsMultidirectionalHillshade();if("multi-directional"===r.hillshadeType&&!t)throw new s("raster-shaded-relief-renderer:not-supported","multi-directional hillshade type is only supported on 10.8.1+ servers");return t&&null!=r.hillshadeType||(r.hillshadeType="traditional"),r}(t);const e=r(t.layer.rasterInfo,t.hillshadeType);if(null==e)throw new s("raster-shaded-relief-renderer:not-supported","Only elevation raster data is supported");return function(s,r){const{scalingType:o,colorRamp:t}=r;null!=o&&(s.scalingType=o),void 0!==t&&(s.colorRamp=t)}(e,t),{renderer:e}}export{t as createRenderer};

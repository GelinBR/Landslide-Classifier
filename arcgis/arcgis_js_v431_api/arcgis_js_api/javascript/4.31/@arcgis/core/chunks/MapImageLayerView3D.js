/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./Logger.js";import"../core/lang.js";import"../core/Error.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import{D as s}from"./DynamicLayerView3D.js";import{M as r}from"./MapImageLayerView.js";import{M as i}from"./MapServiceLayerViewHelper.js";import{a as e}from"./drapedUtils.js";import"../config.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"./asyncUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/reactiveUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"./GridLocalOriginFactory.js";import"./vec3.js";import"./vec3f64.js";import"./common.js";import"./vec4f64.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"./Attribute.js";import"./Material.js";import"./interfaces3.js";import"./VertexAttribute.js";import"./boundedPlane.js";import"./ray.js";import"./mat3.js";import"./mat3f64.js";import"./plane.js";import"./mat4f64.js";import"./quatf64.js";import"./vec2f64.js";import"./mathUtils2.js";import"./mat4.js";import"./Axis.js";import"./lineSegment.js";import"./sphere.js";import"./vec4.js";import"./ViewingMode.js";import"./StencilUtils.js";import"./Indices.js";import"./Util.js";import"./triangle.js";import"./basicInterfaces.js";import"./Matrix4PassUniform.js";import"./BindType.js";import"./ShaderTechniqueConfiguration.js";import"./lengthUtils.js";import"./debugFlags2.js";import"./requestImageUtils.js";import"./enums.js";import"./Texture.js";import"./GLObjectType.js";import"./vec2.js";import"./compilerUtils.js";import"./AlphaCutoff.js";import"./renderState.js";import"./RibbonLineMaterial.js";import"./sdfPrimitives.js";import"./doublePrecisionUtils.js";import"./floatRGBA.js";import"./Octree.js";import"./frustum.js";import"./screenUtils.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./types.js";import"./RgbaFloatEncoding.glsl.js";import"./LayerView3D.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"./persistableUrlUtils.js";import"./aaBoundingBox.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./projectExtentUtils.js";import"./geometryServiceUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"./locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"./project.js";import"../geometry/support/jsonUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./extentUtils.js";import"./boundsUtils.js";import"../geometry/Polyline.js";import"./utils9.js";import"./utils10.js";import"../rest/support/ProjectParameters.js";import"./RenderGeometry.js";import"./SceneLighting.js";import"./NormalAttribute.glsl.js";import"./VertexPosition.glsl.js";import"./Matrix3DrawUniform.js";import"../views/3d/webgl/RenderCamera.js";import"../core/signal.js";import"./axisAngleDegrees.js";import"./quat.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"./enumeration.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./ScreenSpacePass.glsl.js";import"./Float4DrawUniform.js";import"./MergedRenderer.js";import"./NestedMap.js";import"./glUtil.js";import"./VertexElementDescriptor.js";import"../views/3d/webgl.js";import"./computeTranslationToOriginAndRotation.js";import"../views/3d/webgl/RenderNode.js";import"./HighlightDefaults.js";import"../Color.js";import"./colorUtils.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./BufferObject.js";import"./HUDRenderStyle.js";import"./Intersector.js";import"./intersectorUtils.js";import"./Intersector3.js";import"./verticalOffsetUtils.js";import"./orientedBoundingBox.js";import"./spatialReferenceEllipsoidUtils.js";import"./Scheduler.js";import"./debugFlags.js";import"./ImageMaterial.js";import"./GLTextureMaterial.js";import"./RayIntersections.js";import"./DefaultLayouts.js";import"./TriangleMaterial.js";import"./VertexColor.glsl.js";import"../views/layers/LayerView.js";import"../core/Identifiable.js";import"./UpdatingHandles.js";import"./layerViewUtils.js";import"./RefreshableLayerView.js";import"./ExportImageParameters.js";import"../core/sql.js";import"./scaleUtils.js";import"./floorFilterUtils.js";import"./sublayerUtils.js";import"./timeSupport2.js";import"../support/timeUtils.js";import"./timeUtils.js";import"./date.js";import"./datetime.js";import"../time/TimeExtent.js";import"./utils6.js";import"./Version.js";import"./Version2.js";import"./tagSymbols.js";import"./languageUtils.js";import"./TimeOnly.js";import"./UnknownTimeZone.js";import"./ImmutableArray.js";import"./shared2.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./number2.js";import"../rest/support/Query.js";import"../geometry.js";import"./typeUtils.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"../core/Clonable.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"../layers/support/fieldUtils.js";import"../intl.js";import"./number.js";import"./substitute.js";import"./messages.js";import"../rest/identify.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../rest/support/IdentifyParameters.js";import"../rest/support/IdentifyResult.js";import"../Graphic.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/content/UtilityNetworkAssociationsContent.js";import"../popup/support/UtilityNetworkAssociationType.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"./materialUtils.js";import"./opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./highlightUtils.js";import"./popupUtils.js";let p=class extends(r(s)){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add((()=>this.exportImageVersion),(()=>this._updatingHandles.addPromise(this.refreshDebounced()))),this._popupHighlightHelper=new i({createFetchPopupFeaturesQueryGeometry:(t,o)=>e(t,o,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){this._popupHighlightHelper?.destroy()}fetchPopupFeaturesAtLocation(t,o){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,o)}getFetchOptions(){return{timeExtent:this.timeExtent}}};p=t([o("esri.views.3d.layers.MapImageLayerView3D")],p);const m=p;export{m as default};

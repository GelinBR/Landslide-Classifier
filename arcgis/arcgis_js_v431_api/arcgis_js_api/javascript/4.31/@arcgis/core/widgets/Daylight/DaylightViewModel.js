/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../core/Accessor.js";import{m as i}from"../../chunks/handleUtils.js";import{L as e}from"../../chunks/Logger.js";import{r as o}from"../../chunks/maybe.js";import{when as r,initial as n,watch as p,on as l,syncAndInitial as a}from"../../core/reactiveUtils.js";import{schedule as m}from"../../core/scheduling.js";import{b as u,d as h,e as c,i as j,r as g,o as d}from"../../chunks/timeUtils.js";import{property as y}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as k}from"../../core/accessorSupport/decorators/subclass.js";import f from"../../views/SceneView.js";import b from"../../views/3d/environment/SunLighting.js";import S from"../../views/3d/environment/VirtualLighting.js";import{p as w}from"../../chunks/earthUtils.js";import U from"../Slider/SliderViewModel.js";import{f as v,a as D}from"../../chunks/timeWidgetUtils.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../config.js";import"../../chunks/asyncUtils.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../Camera.js";import"../../CameraLayout.js";import"../../core/Clonable.js";import"../../chunks/Cyclical.js";import"../../chunks/mathUtils.js";import"../../core/JSONSupport.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../Viewpoint.js";import"../../chunks/domUtils.js";import"../../chunks/screenUtils.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../chunks/Queue.js";import"../../core/workers/RemoteClient.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../chunks/vec3f64.js";import"../../chunks/GraphicsCollection.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../geometry/HeightModelInfo.js";import"../../geometry/projection.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/projectBoundingRect.js";import"../../chunks/projectPointToVector.js";import"../../chunks/boundedPlane.js";import"../../chunks/ray.js";import"../../chunks/mat3.js";import"../../chunks/mat3f64.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/plane.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/vec2f64.js";import"../../chunks/vec4f64.js";import"../../chunks/mathUtils2.js";import"../../chunks/mat4.js";import"../../chunks/lineSegment.js";import"../../chunks/RenderCoordsHelper.js";import"../../chunks/spatialReferenceEllipsoidUtils.js";import"../../chunks/projectVectorToPoint.js";import"../../chunks/projectVectorToVector.js";import"../../chunks/dehydratedPoint.js";import"../../chunks/sphere.js";import"../../chunks/vec4.js";import"../../chunks/dehydratedFeatureUtils.js";import"../../chunks/ViewingMode.js";import"../../chunks/scaleUtils.js";import"../../chunks/layerUtils.js";import"../../views/View.js";import"../../Map.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../Ground.js";import"../../chunks/compilerUtils.js";import"../../chunks/CollectionFlattener.js";import"../../chunks/editableLayers.js";import"../../layers/catalog/catalogUtils.js";import"../../chunks/basemapUtils.js";import"../../chunks/utils2.js";import"../../chunks/collectionUtils2.js";import"../../support/LayersMixin.js";import"../../layers/Layer.js";import"../../time/TimeExtent.js";import"../../support/TablesMixin.js";import"../../chunks/UpdatingHandles.js";import"../../views/BasemapView.js";import"../../views/Magnifier.js";import"../../chunks/ReactiveMap.js";import"../../rest/support/Query.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/selectionUtils.js";import"../../views/Theme.js";import"../../chunks/InputManager.js";import"../../core/signal.js";import"../../chunks/ViewEvents.js";import"../../chunks/IViewEvents.js";import"../../chunks/interfaces.js";import"../../chunks/screenUtils2.js";import"../../views/input/Input.js";import"../../views/input/gamepad/GamepadSettings.js";import"../../views/input/gamepad/GamepadInputDevice.js";import"../../views/navigation/Navigation.js";import"../../chunks/a11yUtils.js";import"../../views/navigation/gamepad/GamepadSettings.js";import"../../chunks/heightModelInfoUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../chunks/projectionUtils.js";import"../../views/BreakpointsOwner.js";import"../../views/DOMContainer.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../views/GroundView.js";import"../../chunks/cameraUtils.js";import"../../chunks/Intersector3.js";import"../../chunks/intersectorUtils.js";import"../../chunks/verticalOffsetUtils.js";import"../../chunks/orientedBoundingBox.js";import"../../chunks/quat.js";import"../../chunks/computeTranslationToOriginAndRotation.js";import"../../chunks/Attribute.js";import"../../chunks/frustum.js";import"../../chunks/vec2.js";import"../../chunks/ElevationProvider.js";import"../../chunks/spatialReferenceSupport.js";import"../../layers/support/ElevationSampler.js";import"../../chunks/TerrainConst.js";import"../../layers/support/LOD.js";import"../../layers/support/TileInfo.js";import"../../chunks/TileKey.js";import"../../views/PopupView.js";import"../../views/ViewAnimation.js";import"../../chunks/RenderGeometry.js";import"../../chunks/GridLocalOriginFactory.js";import"../../chunks/Material.js";import"../../chunks/interfaces3.js";import"../../chunks/VertexAttribute.js";import"../../chunks/StencilUtils.js";import"../../chunks/Indices.js";import"../../chunks/Util.js";import"../../chunks/triangle.js";import"../../chunks/basicInterfaces.js";import"../../chunks/Matrix4PassUniform.js";import"../../chunks/BindType.js";import"../../chunks/ShaderTechniqueConfiguration.js";import"../../chunks/lengthUtils.js";import"../../chunks/debugFlags2.js";import"../../chunks/requestImageUtils.js";import"../../chunks/enums.js";import"../../chunks/Texture.js";import"../../chunks/GLObjectType.js";import"../../chunks/AlphaCutoff.js";import"../../chunks/renderState.js";import"../../chunks/RibbonLineMaterial.js";import"../../chunks/sdfPrimitives.js";import"../../chunks/doublePrecisionUtils.js";import"../../chunks/floatRGBA.js";import"../../chunks/Octree.js";import"../../chunks/InterleavedLayout.js";import"../../chunks/BufferView.js";import"../../chunks/types.js";import"../../chunks/RgbaFloatEncoding.glsl.js";import"../../chunks/SceneLighting.js";import"../../chunks/NormalAttribute.glsl.js";import"../../chunks/VertexPosition.glsl.js";import"../../chunks/Matrix3DrawUniform.js";import"../../views/3d/webgl/RenderCamera.js";import"../../chunks/axisAngleDegrees.js";import"../../chunks/weather.js";import"../../views/3d/environment/CloudyWeather.js";import"../../views/3d/environment/FoggyWeather.js";import"../../views/3d/environment/RainyWeather.js";import"../../views/3d/environment/SnowyWeather.js";import"../../views/3d/environment/SunnyWeather.js";import"../../chunks/ScreenSpacePass.glsl.js";import"../../chunks/Float4DrawUniform.js";import"../../chunks/MergedRenderer.js";import"../../chunks/NestedMap.js";import"../../chunks/glUtil.js";import"../../chunks/VertexElementDescriptor.js";import"../../views/3d/webgl.js";import"../../views/3d/webgl/RenderNode.js";import"../../chunks/HighlightDefaults.js";import"../../chunks/VertexArrayObject2.js";import"../../chunks/VertexArrayObject.js";import"../../chunks/BufferObject.js";import"../../chunks/HUDRenderStyle.js";import"../../chunks/Intersector.js";import"../../chunks/Scheduler.js";import"../../chunks/debugFlags.js";import"../../chunks/vec3f32.js";import"../../chunks/Program.js";import"../../chunks/ShadowCastVisualizeTechniqueConfiguration.js";import"../../webscene/Environment.js";import"../../chunks/lightingTypes.js";import"../../webscene/SunLighting.js";import"../../webscene/VirtualLighting.js";import"../../webscene/background/Background.js";import"../../webscene/background/ColorBackground.js";import"../../chunks/ElevationUpdateEvent.js";import"../../chunks/ElevationContext.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/hydratedFeatures.js";import"../../chunks/graphicUtils.js";import"../../chunks/meshVertexSpaceUtils.js";import"../../geometry/support/MeshGeoreferencedVertexSpace.js";import"../../geometry/support/MeshLocalVertexSpace.js";import"../../chunks/vec2f32.js";import"../../chunks/RayIntersections.js";import"../../chunks/HUDVisibility.glsl.js";import"../../chunks/VerticalOffset.glsl.js";import"../../chunks/dehydratedFeatures.js";import"../../chunks/quantizationUtils.js";import"../../chunks/featureConversionUtils.js";import"../../chunks/OptimizedFeature.js";import"../../chunks/OptimizedGeometry.js";import"../../chunks/OptimizedFeatureSet.js";import"../../chunks/edgeUtils.js";import"../../chunks/DecodeSymbolColor.glsl.js";import"../../chunks/GeometryUtil.js";import"../../chunks/LodResources.js";import"../../chunks/DefaultMaterial.js";import"../../chunks/GLTextureMaterial.js";import"../../chunks/VertexColor.glsl.js";import"../../chunks/Matrix4sPassUniform.js";import"../../chunks/CameraSpace.glsl.js";import"../../chunks/WebGLRequirements.js";import"../../chunks/capabilities2.js";import"../../chunks/ray2.js";import"../../chunks/viewpointUtils2.js";import"../../chunks/NormalFromDepth.glsl.js";import"../../views/ui/UI.js";import"../../chunks/themeUtils.js";import"../../chunks/unitFormatUtils.js";import"../../chunks/ByteSizeUnit.js";import"../../chunks/quantityUtils.js";import"../Widget.js";import"../../chunks/uuid.js";import"../../chunks/componentsUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/messageBundle.js";import"../../chunks/jsxFactory.js";import"../../chunks/ZoomMomentumEstimator.js";import"../../chunks/HUDMaterial.js";import"../../chunks/labelFormatUtils.js";import"../../chunks/labelUtils.js";import"../../chunks/NormalUtils.glsl.js";import"../../chunks/fontUtils.js";import"../../chunks/LodRenderer.js";import"../../chunks/Intersector2.js";import"../../chunks/FeaturePipelineRenderManager.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/hitTest.js";import"../../chunks/LayerConstants.js";import"../../chunks/intersectorUtilsConversions.js";import"../../chunks/ElevationRange.js";import"../../chunks/HighlightOptions.js";import"../../chunks/hitTestSelectUtils.js";import"../../chunks/MemCache.js";import"../../chunks/terrainUtils.js";import"../../views/3d/support/SceneViewPerformanceInfo.js";import"../../chunks/LayerViewPerformanceInfo.js";import"../../views/3d/support/LayerPerformanceInfo.js";import"../../chunks/vec33.js";import"../../chunks/wosrLoader.js";import"../../chunks/Version2.js";import"../../chunks/ElevationQueryTileCache.js";import"../../chunks/ElevationSamplerData.js";import"../../chunks/Normals.js";import"../../chunks/TileStrategy.js";import"../../chunks/TileKey2.js";import"../../chunks/QueueProcessor.js";import"../../chunks/mat3f32.js";import"../../chunks/RenderableTile.js";import"../../chunks/config.js";import"../../chunks/StyleDefinition.js";import"../../chunks/enums2.js";import"../../chunks/enums3.js";import"../../chunks/GeometryUtils.js";import"../../chunks/TiledDisplayObject.js";import"../../chunks/DisplayObject.js";import"../../chunks/resources.js";import"../../chunks/colorUtils2.js";import"../../chunks/vec32.js";import"../../chunks/ShaderTechniqueRepository.js";import"../../chunks/Blit.js";import"../../views/3d/webgl/ManagedFBO.js";import"../../chunks/testSVGPremultipliedAlpha.js";import"../../chunks/RenderingContext.js";import"../../chunks/ProgramCache.js";import"../../chunks/screenshotUtils.js";import"../../chunks/imageUtils.js";import"../../chunks/layerViewUtils.js";import"../../views/ui/DefaultUI.js";import"../Attribution.js";import"../Attribution/AttributionViewModel.js";import"../../chunks/globalCss.js";import"../../chunks/accessibleHandler.js";import"../Compass.js";import"../Compass/CompassViewModel.js";import"../../chunks/duration.js";import"../../chunks/utils22.js";import"../support/GoTo.js";import"../NavigationToggle.js";import"../NavigationToggle/NavigationToggleViewModel.js";import"../Zoom.js";import"../Zoom/ZoomViewModel.js";var T;!function(t){t[t.NORTHERN=0]="NORTHERN",t[t.SOUTHERN=1]="SOUTHERN"}(T||(T={}));const _={spring:{dayOfMonth:20,month:2},summer:{dayOfMonth:21,month:5},fall:{dayOfMonth:23,month:8},winter:{dayOfMonth:21,month:11}},L=["spring","summer","fall","winter"];function C(t,s,i){const e=P(s,i),{dayOfMonth:o,month:r}=_[e],n=new Date(t.getTime());return n.setMonth(r,o),n}function P(t,s){return s===T.NORTHERN?t:function(t){const s=L.indexOf(t);return L[(s+2)%4]}(t)}let M=class extends U{constructor(){super(...arguments),this.utcOffset=null,this.timezonePickerOpen=!1}};t([y()],M.prototype,"utcOffset",void 0),t([y()],M.prototype,"timezonePickerOpen",void 0),M=t([k("esri.widgets.Daylight.support.SliderWithDropdownViewModel")],M);let O=class extends s{constructor(t){super(t),this.view=null,this.timeSliderViewModel=new M({min:0,max:1439,values:[0],labelFormatFunction:v,inputFormatFunction:v}),this.lightingUpdateInterval=200,this._oldLighting=null,this.playSpeedMultiplier=1,this._lastTime=null,this._sunrise=null,this._sunset=null,this._cachedLightingDateUTC=new Date(0),this._cachedDisplayUTCOffset=0,this._firstInteraction=!0,this._lastLightingUpdate=0,this._lightingUpdateHandle=null}initialize(){this.addHandles([r((()=>this.view),(t=>t.when((()=>this._updateLighting()))),n),p((()=>{const t=this._lighting;return"sun"===t?.type?this._ensureValidDate(t):null}),(t=>this._scheduleLightingUpdate(t))),l((()=>this._lighting),"timezone-will-change",(t=>this._timezoneWillChange(t)),{onListenerAdd:()=>this._timezoneWillChange(null)}),p((()=>!0===this.view?.stationary),(()=>{(this.dayPlaying||this.yearPlaying)&&this._updateSunriseAndSunset()}),n),p((()=>{const t=this.timeSliderViewModel;return{vm:t,state:t.state,sliderPosition:this.timeSliderPosition}}),(({vm:t,state:s,sliderPosition:i})=>{"ready"===s&&t.setValue(0,i)})),p((()=>this.timeSliderViewModel?.utcOffset),(t=>{null!=t&&(this.utcOffset=t)})),p((()=>({utcOffset:this.utcOffset,sliderViewModel:this.timeSliderViewModel})),(({utcOffset:t,sliderViewModel:s})=>{s&&(s.utcOffset=t)}),a),p((()=>this.timeSliderViewModel.timezonePickerOpen),(()=>this.stopPlaying())),p((()=>this.timeSliderViewModel.values),(t=>this._setTimeSliderPosition(t?.[0]??0,{forceLightingUpdate:!1})))])}destroy(){this._cancelLightingUpdate(),this.view=null}get isSupported(){return null==this.view||"3d"===this.view.type}get utcOffset(){return this._cachedDisplayUTCOffset}set utcOffset(t){t!==this.utcOffset&&null!=this._lighting&&"virtual"!==this._lighting.type&&(this._lighting.displayUTCOffset=t,this._updateLighting())}get localDate(){return c(this._lightingDateDisplay)}set localDate(t){this.view?.ready?j(t)&&t.getTime()!==this.localDate.getTime()&&(this._lightingDateDisplay=g(this._lightingDateDisplay,t)):e.getLogger(this).error("The localDate property cannot be set before the view and the widget are ready.")}get timeSliderPosition(){var t;return t=this._lightingDateDisplay,h(t,"minutes")}set timeSliderPosition(t){this.view?.ready&&"ready"===this.timeSliderViewModel?.state?this._setTimeSliderPosition(t,{forceLightingUpdate:!0}):e.getLogger(this).error("The timeSliderPosition property cannot be set before the view and the widget are ready.")}_setTimeSliderPosition(t,s){var i;Math.abs(t-this.timeSliderPosition)<=1/60||(this.stopPlaying(),this._enableDirectShadowsIfFirstInteraction(),s.forceLightingUpdate&&(this._cancelLightingUpdate(),this._updateLighting()),this._lightingDateDisplay=(i=this._lightingDateDisplay,u(i,t,"minutes")))}_timezoneFromCamera(t,s){if(null==s||!t.cameraTrackingEnabled)return 0;const i=w([s.longitude,s.latitude]);return null==i?0:Math.round(i.hours+i.minutes/60+i.seconds/3600)}get directShadowsEnabled(){return this._lighting?.directShadowsEnabled??!1}set directShadowsEnabled(t){const s=this._lighting;s&&(s.directShadowsEnabled=t)}get sunLightingEnabled(){return"sun"===this._lightingType}set sunLightingEnabled(t){const s=this._environment;if(t===this._get("sunLightingEnabled")||null==s)return;const i=s.lighting,e=this._oldLighting;this._oldLighting=i;const o={directShadowsEnabled:i.directShadowsEnabled,cameraTrackingEnabled:i.cameraTrackingEnabled},r=t?"sun":"virtual";let n;n=null!=e&&e.type===r?e:t?new b:new S,n.set(o),s.lighting=n,t||(this.stopPlaying(),this.timeSliderViewModel.timezonePickerOpen=!1)}set playingState(t){this.playingState!==t&&(this._set("playingState",t),"none"!==t&&this.sunLightingEnabled&&(this._updateSunriseAndSunset(),this._lastTime=Date.now(),this._play(),this._enableDirectShadowsIfFirstInteraction()))}get dayPlaying(){return"day"===this.playingState}set dayPlaying(t){t?this.playingState="day":this.dayPlaying&&(this.playingState="none")}get yearPlaying(){return"year"===this.playingState}set yearPlaying(t){t?this.playingState="year":this.yearPlaying&&(this.playingState="none")}get currentSeason(){return t=this.localDate,s=this._currentHemisphere,P(function(t){const s=t.getTime(),i=C(t,"spring",T.NORTHERN).getTime(),e=C(t,"summer",T.NORTHERN).getTime(),o=C(t,"fall",T.NORTHERN).getTime(),r=C(t,"winter",T.NORTHERN).getTime();return s>=i&&s<e?"spring":s>=e&&s<o?"summer":s>=o&&s<r?"fall":"winter"}(t),s);var t,s}set currentSeason(t){this.stopPlaying();const s=P(t,this._currentHemisphere);this.localDate=C(this.localDate,s,T.NORTHERN)}get _currentHemisphere(){const t=this.view?.camera?.position?.latitude;return null==t||t>=0?T.NORTHERN:T.SOUTHERN}get _environment(){return this.view?.environment}get _lighting(){return this._environment?.lighting}get _lightingType(){return this._lighting?.type}get _lightingDateDisplay(){return d(this._cachedLightingDateUTC,this._cachedDisplayUTCOffset,"hours")}set _lightingDateDisplay(t){const s=this._lighting;if(null==s||!this.sunLightingEnabled||"virtual"===s.type||!j(t))return;const i=this._ensureValidDate(s),e=d(t,-this._cachedDisplayUTCOffset,"hours");e.getTime()!==i.getTime()&&(s.date=e,this._updateLighting())}stopPlaying(){this.playingState="none"}toggleDayPlaying(){this.dayPlaying=!this.dayPlaying}toggleYearPlaying(){this.yearPlaying=!this.yearPlaying}toggleSunLightingEnabled(){this.stopPlaying(),this.sunLightingEnabled=!this.sunLightingEnabled}toggleDirectShadowsEnabled(){this.stopPlaying(),this.directShadowsEnabled=!this.directShadowsEnabled}onDateChange(t){this.dayPlaying=!1,this.localDate=t}_enableDirectShadowsIfFirstInteraction(){this._firstInteraction&&(this._firstInteraction=!1,this.directShadowsEnabled=!0)}_updateLighting(t){const s=Date.now();this._lastLightingUpdate=s;const{view:i}=this,e=this._lighting;if(null==i||null==e||"virtual"===e.type)return;t??=this._ensureValidDate(e);const o=e.displayUTCOffset,r=null!==o?o:this._timezoneFromCamera(e,i.camera?.position);this._cachedLightingDateUTC.getTime()!==t.getTime()&&(this._cachedLightingDateUTC=new Date(t.getTime())),this._cachedDisplayUTCOffset!==r&&(this._cachedDisplayUTCOffset=r)}_timezoneWillChange(t){const s=this._lighting;if(null==s||"virtual"===s.type||!s.cameraTrackingEnabled)return;let i;if(t)i=t.timezoneOffset;else{if(null!=s.displayUTCOffset)return;i=b.calculateTimezoneOffset(s.positionTimezoneInfo)}s.displayUTCOffset=i,this._scheduleLightingUpdate()}_scheduleLightingUpdate(t){if(t&&(this._lightingUpdateHandle=o(this._lightingUpdateHandle),!j(t)))return;if(this._lightingUpdateHandle)return;const s=Date.now()-this._lastLightingUpdate,e=this.lightingUpdateInterval-s;let r=null;const n=()=>{this._updateLighting(t),this._lightingUpdateHandle===r&&(this._lightingUpdateHandle=null)};if(e<=0)this._lightingUpdateHandle=r=m(n);else{const t=setTimeout(n,e);this._lightingUpdateHandle=r=i((()=>clearTimeout(t)))}}_cancelLightingUpdate(){this._lightingUpdateHandle=o(this._lightingUpdateHandle)}_play(){const t=this._lighting;if(null==t||!this.sunLightingEnabled||"virtual"===t.type)return;const s=this._ensureValidDate(t);if(this.dayPlaying||this.yearPlaying){const i=Date.now()-(this._lastTime??0);if(this.dayPlaying){this._lastTime=Date.now();const e=function(t,s,i){const e=12e5,o=3e5,r=18e5,n=2e5;if(null==t||null==s||isNaN(t.getTime())&&isNaN(s.getTime()))return o;const p=i.getTime(),l=t.getTime(),a=s.getTime(),m=l-36e5,u=l+36e5,h=a-48e5,c=a+24e5;let j=o;return p>=m&&p<=u?j=p-m<=e?r-(p-m)/e*16e5:u-p<=6e5?o-(u-p)/e*2*1e5:n:p>=h&&p<=c?j=p-h<=6e5?o-(p-h)/e*2*1e5:c-p<=e?r-(c-p)/e*16e5:n:(p<l||p>a)&&(j=r),j}(this._sunrise,this._sunset,s)*this.playSpeedMultiplier/100*i;if(e>0){let i=new Date(s.getTime()+e);const o=t.displayUTCOffset??0;if(((i.getUTCHours()+o)%24+24)%24<((s.getUTCHours()+o)%24+24)%24){const t=864e5;i=new Date(s.getTime()+e-t)}t.date=i}}else if(i>1e3){this._lastTime=Date.now();const i=(s.getUTCMonth()+1)%12,e=new Date(s.getTime());e.setUTCMonth(i),t.date=e}requestAnimationFrame((()=>this._play()))}}_updateSunriseAndSunset(){const t=this._lighting;if(null==t||"virtual"===t.type||!this.sunLightingEnabled)return;const s=this.view?.camera?.position;if(null==s)return;const{latitude:i,longitude:e}=s,{date:o,displayUTCOffset:r}=t,n=D(o,i,e,r??0);n&&(this._sunrise=new Date(n.sunrise),this._sunset=new Date(n.sunset))}_ensureValidDate(t){return j(t.date)||(e.getLogger(this).warn("Invalid date. Reverting to the current date/time."),t.date=new Date),t.date}};t([y({type:f})],O.prototype,"view",void 0),t([y({type:M,nonNullable:!0})],O.prototype,"timeSliderViewModel",void 0),t([y()],O.prototype,"isSupported",null),t([y()],O.prototype,"lightingUpdateInterval",void 0),t([y()],O.prototype,"utcOffset",null),t([y()],O.prototype,"localDate",null),t([y()],O.prototype,"timeSliderPosition",null),t([y()],O.prototype,"directShadowsEnabled",null),t([y()],O.prototype,"sunLightingEnabled",null),t([y({type:["none","day","year"],value:"none"})],O.prototype,"playingState",null),t([y()],O.prototype,"dayPlaying",null),t([y()],O.prototype,"yearPlaying",null),t([y()],O.prototype,"playSpeedMultiplier",void 0),t([y()],O.prototype,"currentSeason",null),t([y()],O.prototype,"_lastTime",void 0),t([y()],O.prototype,"_sunrise",void 0),t([y()],O.prototype,"_sunset",void 0),t([y()],O.prototype,"_cachedLightingDateUTC",void 0),t([y()],O.prototype,"_cachedDisplayUTCOffset",void 0),t([y()],O.prototype,"_firstInteraction",void 0),t([y()],O.prototype,"_currentHemisphere",null),t([y()],O.prototype,"_environment",null),t([y()],O.prototype,"_lighting",null),t([y()],O.prototype,"_lightingType",null),t([y()],O.prototype,"_lightingDateDisplay",null),O=t([k("esri.widgets.Daylight.DaylightViewModel")],O);const E=O;export{M as S,E as default,L as o};

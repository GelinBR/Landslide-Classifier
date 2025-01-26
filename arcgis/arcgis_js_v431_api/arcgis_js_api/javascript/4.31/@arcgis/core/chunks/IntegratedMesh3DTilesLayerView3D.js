/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Error.js";import{h as s}from"../core/lang.js";import{L as r}from"./Logger.js";import{d as i}from"./maybe.js";import{watch as o,initial as a}from"../core/reactiveUtils.js";import{schedule as n}from"../core/scheduling.js";import{property as m}from"../core/accessorSupport/decorators/property.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{f as l,i as c}from"./mat3.js";import{c as d,I as j}from"./mat3f64.js";import{x as u,y as h}from"./mat4.js";import{c as y}from"./mat4f64.js";import{f as g}from"./quatf64.js";import{g as b,x as f}from"./vec3.js";import{e as w,c as v}from"./vec3f64.js";import{f as U}from"./vec4f64.js";import{S as _}from"./unitUtils.js";import{c as C}from"./computeTranslationToOriginAndRotation.js";import{L as S,l as M,O as T,T as x}from"./Transform.js";import{p as P}from"./projectVectorToVector.js";import{c as E,o as O,s as I,b as L,n as V,r as D,a as R,C as A,t as F,p as B}from"./BufferView.js";import{a as H,b as k,c as G,d as N,e as W,i as z,w as q,f as Q,g as $,h as J,j as Z}from"./ILyr3DWasmPerSceneView.js";import{q as K}from"./elevationInfoUtils.js";import{V as X}from"./ViewingMode.js";import{L as Y}from"./LayerViewPerformanceInfo.js";import{a as ee}from"./GridLocalOriginFactory.js";import{L as te}from"./LayerView3D.js";import{a as se,r as re,g as ie}from"../widgets/Attribution/AttributionViewModel.js";import{A as oe,C as ae,T as ne}from"./basicInterfaces.js";import{k as me,T as pe}from"./enums.js";import le from"../Graphic.js";import{T as ce}from"./intersectorUtilsConversions.js";import{a as de}from"./Intersector3.js";import{I as je,S as ue}from"./intersectorUtils.js";import{M as he,a as ye}from"./RayIntersections.js";import{E as ge}from"./ElevationRange.js";import{O as be,a as fe}from"./orientedBoundingBox.js";import{G as we,c as ve,d as Ue,e as _e}from"../views/SceneView.js";import{R as Ce}from"./RenderTexture.js";import{J as Se,T as Me}from"./StencilUtils.js";import{a as Te}from"./AlphaCutoff.js";import{A as xe}from"./Attribute.js";import{b as Pe}from"./Normals.js";import{V as Ee}from"./VertexAttribute.js";import Oe from"../views/layers/LayerView.js";import{b as Ie}from"./layerViewUtils.js";import"../config.js";import"./asyncUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/promiseUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./ensureType.js";import"./shared.js";import"./SimpleObservable.js";import"./common.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./mathUtils.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"./aaBoundingRect.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./sphere.js";import"./vec4.js";import"./Axis.js";import"./ray.js";import"./plane.js";import"./vec2f64.js";import"./mathUtils2.js";import"./ElevationUpdateEvent.js";import"./calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../Color.js";import"./colorUtils.js";import"./screenUtils.js";import"./enumeration.js";import"./materialUtils.js";import"./opacityUtils.js";import"./ElevationContext.js";import"./dehydratedFeatureUtils.js";import"./ElevationProvider.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./hydratedFeatures.js";import"../geometry.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./extentUtils.js";import"./boundsUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./dehydratedPoint.js";import"../layers/support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"./date.js";import"./locale.js";import"./datetime.js";import"./number.js";import"./substitute.js";import"./messages.js";import"./debugFlags2.js";import"./Indices.js";import"./Material.js";import"./interfaces3.js";import"./boundedPlane.js";import"./lineSegment.js";import"./triangle.js";import"./graphicUtils.js";import"../geometry/projection.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"./aaBoundingBox.js";import"./meshVertexSpaceUtils.js";import"../geometry/support/MeshGeoreferencedVertexSpace.js";import"../core/Clonable.js";import"../geometry/support/MeshLocalVertexSpace.js";import"./projectPointToVector.js";import"./RibbonLineMaterial.js";import"./Util.js";import"./sdfPrimitives.js";import"./doublePrecisionUtils.js";import"./floatRGBA.js";import"./Octree.js";import"./frustum.js";import"./vec2.js";import"./InterleavedLayout.js";import"./types.js";import"./Matrix4PassUniform.js";import"./BindType.js";import"./ShaderTechniqueConfiguration.js";import"./RgbaFloatEncoding.glsl.js";import"./Texture.js";import"./GLObjectType.js";import"./renderState.js";import"./vec2f32.js";import"./HUDVisibility.glsl.js";import"./VerticalOffset.glsl.js";import"./ScreenSpacePass.glsl.js";import"./HUDRenderStyle.js";import"./projectBoundingRect.js";import"./dehydratedFeatures.js";import"./quantizationUtils.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./featureConversionUtils.js";import"./OptimizedFeature.js";import"./OptimizedGeometry.js";import"./OptimizedFeatureSet.js";import"./edgeUtils.js";import"./compilerUtils.js";import"./DecodeSymbolColor.glsl.js";import"./Float4DrawUniform.js";import"./NormalAttribute.glsl.js";import"./Matrix3DrawUniform.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"./persistableUrlUtils.js";import"./Symbol3DMaterial.js";import"./GeometryUtil.js";import"./vec3f32.js";import"./LodResources.js";import"./DefaultMaterial.js";import"./SceneLighting.js";import"./VertexPosition.glsl.js";import"./GLTextureMaterial.js";import"./verticalOffsetUtils.js";import"./VertexColor.glsl.js";import"./Matrix4sPassUniform.js";import"../views/3d/webgl.js";import"../views/3d/webgl/RenderNode.js";import"./CameraSpace.glsl.js";import"./Scheduler.js";import"../core/signal.js";import"./debugFlags.js";import"./heightModelInfoUtils.js";import"../geometry/HeightModelInfo.js";import"./arcgisLayerUrl.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"./chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/content/UtilityNetworkAssociationsContent.js";import"../popup/support/UtilityNetworkAssociationType.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"./utils4.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"./lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"./utils5.js";import"./colors.js";import"./symbolLayerUtils3D.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"./collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"./Thumbnail.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"./urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"./Intersector.js";import"./Intersector2.js";import"./quat.js";import"./spatialReferenceEllipsoidUtils.js";import"../Camera.js";import"../CameraLayout.js";import"./Cyclical.js";import"../Viewpoint.js";import"./domUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"./GraphicsCollection.js";import"./RenderCoordsHelper.js";import"./projectVectorToPoint.js";import"./scaleUtils.js";import"./layerUtils.js";import"../views/View.js";import"../Map.js";import"../Basemap.js";import"./loadAll.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"../Ground.js";import"./CollectionFlattener.js";import"./editableLayers.js";import"../layers/catalog/catalogUtils.js";import"./basemapUtils.js";import"./utils2.js";import"./collectionUtils2.js";import"../support/LayersMixin.js";import"../layers/Layer.js";import"../time/TimeExtent.js";import"./timeUtils.js";import"../support/TablesMixin.js";import"./UpdatingHandles.js";import"../views/BasemapView.js";import"../views/Magnifier.js";import"./ReactiveMap.js";import"../rest/support/Query.js";import"./DataLayerSource.js";import"./FullTextSearch.js";import"./spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./selectionUtils.js";import"../views/Theme.js";import"./InputManager.js";import"./ViewEvents.js";import"./IViewEvents.js";import"./interfaces.js";import"./screenUtils2.js";import"../views/input/Input.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/navigation/Navigation.js";import"./a11yUtils.js";import"../views/navigation/gamepad/GamepadSettings.js";import"./projectionUtils.js";import"../views/BreakpointsOwner.js";import"../views/DOMContainer.js";import"./projector.js";import"./widgetUtils.js";import"../views/GroundView.js";import"./cameraUtils.js";import"./earthUtils.js";import"./spatialReferenceSupport.js";import"../layers/support/ElevationSampler.js";import"./TerrainConst.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./TileKey.js";import"../views/PopupView.js";import"../views/ViewAnimation.js";import"./RenderGeometry.js";import"../views/3d/webgl/RenderCamera.js";import"./axisAngleDegrees.js";import"./weather.js";import"../views/3d/environment/CloudyWeather.js";import"../views/3d/environment/FoggyWeather.js";import"../views/3d/environment/RainyWeather.js";import"../views/3d/environment/SnowyWeather.js";import"../views/3d/environment/SunnyWeather.js";import"./MergedRenderer.js";import"./NestedMap.js";import"./glUtil.js";import"./VertexElementDescriptor.js";import"./HighlightDefaults.js";import"./VertexArrayObject2.js";import"./VertexArrayObject.js";import"./BufferObject.js";import"./Program.js";import"./ShadowCastVisualizeTechniqueConfiguration.js";import"../views/3d/environment/SunLighting.js";import"../webscene/SunLighting.js";import"../views/3d/environment/VirtualLighting.js";import"../webscene/VirtualLighting.js";import"../webscene/Environment.js";import"./lightingTypes.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"./WebGLRequirements.js";import"./capabilities2.js";import"./ray2.js";import"./viewpointUtils2.js";import"./NormalFromDepth.glsl.js";import"../views/ui/UI.js";import"./themeUtils.js";import"./unitFormatUtils.js";import"./ByteSizeUnit.js";import"./quantityUtils.js";import"../widgets/Widget.js";import"./uuid.js";import"./componentsUtils.js";import"./jsxWidgetSupport.js";import"./messageBundle.js";import"./jsxFactory.js";import"./ZoomMomentumEstimator.js";import"./HUDMaterial.js";import"./labelFormatUtils.js";import"./labelUtils.js";import"./NormalUtils.glsl.js";import"./fontUtils.js";import"./LodRenderer.js";import"./FeaturePipelineRenderManager.js";import"./hitTest.js";import"./LayerConstants.js";import"./HighlightOptions.js";import"./hitTestSelectUtils.js";import"./MemCache.js";import"./terrainUtils.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./vec33.js";import"./wosrLoader.js";import"./Version2.js";import"./requestImageUtils.js";import"./ElevationQueryTileCache.js";import"./ElevationSamplerData.js";import"./TileStrategy.js";import"./TileKey2.js";import"./QueueProcessor.js";import"./mat3f32.js";import"./RenderableTile.js";import"./config.js";import"./StyleDefinition.js";import"./enums2.js";import"./enums3.js";import"./GeometryUtils.js";import"./TiledDisplayObject.js";import"./DisplayObject.js";import"./resources.js";import"./colorUtils2.js";import"./vec32.js";import"./ShaderTechniqueRepository.js";import"./Blit.js";import"../views/3d/webgl/ManagedFBO.js";import"./testSVGPremultipliedAlpha.js";import"./RenderingContext.js";import"./ProgramCache.js";import"./screenshotUtils.js";import"./imageUtils.js";import"../views/ui/DefaultUI.js";import"../widgets/Attribution.js";import"./globalCss.js";import"./accessibleHandler.js";import"../widgets/Compass.js";import"../widgets/Compass/CompassViewModel.js";import"./duration.js";import"./utils22.js";import"../widgets/support/GoTo.js";import"../widgets/NavigationToggle.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";class Le extends Y{constructor(e,t,s,r,i,o,a){super(e,0,0,0,t),this.nodesCached=s,this.vboMB=r,this.textureMB=i,this.vboMBCached=o,this.textureMBCached=a}}const Ve={[H.Points]:null,[H.Lines]:null,[H.LineStrip]:null,[H.Triangles]:me.TRIANGLES,[H.TriangleStrip]:me.TRIANGLE_STRIP,[H.NotSet]:null},De={[k.Opaque]:oe.Opaque,[k.Mask]:oe.Mask,[k.Blend]:oe.Blend},Re={[G.Back]:ae.Back,[G.Front]:ae.Front,[G.None]:ae.None,[G.NotSet]:ae.Back},Ae={[N.WrapYBit]:{s:pe.CLAMP_TO_EDGE,t:pe.REPEAT},[N.WrapXBit]:{s:pe.REPEAT,t:pe.CLAMP_TO_EDGE},[N.WrapXy]:{s:pe.REPEAT,t:pe.REPEAT},[N.None]:{s:pe.CLAMP_TO_EDGE,t:pe.CLAMP_TO_EDGE},[N.NotSet]:{s:pe.CLAMP_TO_EDGE,t:pe.CLAMP_TO_EDGE}},Fe={[W.U8]:1,[W.I8]:1,[W.U16]:2,[W.I16]:2,[W.U32]:4,[W.I32]:4,[W.F32]:4,[W.F64]:8,[W.Utf8String]:1,[W.NotSet]:1};class Be{constructor(e){this.layerUid=[],this.type=je.TILES3D,this.slicePlaneEnabled=!1,this.isGround=!0,this.layerView=e,this.layerUid.push(e.layer.uid)}intersect(e,t,s,r,i,o){const a=e.results,n=e.options.store===ue.ALL;if(e.options.filteredLayerUids.includes(this.layerView.layer.uid))return;const m=this.layerView.view._stage.renderView.componentObjectCollection,p=new he(o??!1,e.options.normalRequired);this.layerView.objects.forEach((i=>{i.visible&&i.intersectionGeometry&&m.intersect(i,s,r,e.tolerance,null,p,((i,o,m,p)=>{if(o>=0){if(null!=t&&!t(s,r,o))return;const i=e=>{const t=new ce(this.layerView.layer.uid,(()=>this._createTiles3DGraphic(this.layerView.layer,{})));e.set(this.type,t,o,m)};if(this.isGround&&(null==a.ground.dist||o<a.ground.dist)&&i(a.ground),e.options.isFiltered)return;if((null==a.min.dist||o<a.min.dist)&&i(a.min),(null==a.max.dist||o>a.max.dist)&&i(a.max),n){const t=de(e.ray);i(t),e.results.all.push(t)}}}))}))}_createTiles3DGraphic(e,t){return new le({layer:e,sourceLayer:e,attributes:t})}}var He;!function(e){e[e.API=1]="API",e[e.VerboseAPI=2]="VerboseAPI",e[e.Error=3]="Error"}(He||(He={}));class ke{constructor(){this.handle=0,this.isVisible=!1,this.components=[],this.texMemoryUsage=0,this.vboMemoryUsage=0,this.cpuMemoryUsage=0,this.textures=[]}totalMemory(){return this.texMemoryUsage+this.vboMemoryUsage+this.cpuMemoryUsage}}function Ge(e){return Math.round(e/1048.576)/1e3}let Ne=class extends(te(Oe)){constructor(){super(...arguments),this.type="integrated-mesh-3dtiles",this._visibleGeometryChangedSchedulerHandle=null,this._wasmLayerId=-1,this.ignoresMemoryFactor=!1,this.drapeTargetType=ee.WithoutRasterImage,this._applySSAO=!s("disable-feature:im-ssao"),this._shadeNormals=!!s("enable-feature:im-shading"),this._lyrHandleToObjects=new Map,this._initialCullFace=new Map,this._suspendedHandle=null,this._dbgFlags=new Set}initialize(){if(this._dbgFlags.add(He.Error),this._dbg(He.VerboseAPI,"Tiles3DLayerView3D initialize() called"),!this._canProjectWithoutEngine())throw new t("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const e=se(this).then((e=>{this._intersectionHandler=new Be(this),this.view.sceneIntersectionHelper.addIntersectionHandler(this._intersectionHandler),this._updatingHandles.add((()=>this.slicePlaneEnabled),(e=>this._slicePlaneEnabledChange(e))),this._elevationProvider=new S({view:this.view,layerElevationSource:this,intersectionHandler:this._intersectionHandler}),this.view.elevationProvider.register("im",this._elevationProvider),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this),this._wasmLayerId=e;const t=this.view.resourceController.memoryController.newCache(`t3d-${this.uid}`,(e=>this._onRemoveFromCache(e)));this._memCache=t,this.addHandles([o((()=>this.layer.elevationInfo),(e=>this._elevationInfoChanged(e)))]),this._suspendedHandle=o((()=>this.suspended),(e=>this._wasm?.setEnabled(this,!e)),a)})).catch((e=>{if(re(this),this._wasmLayerId=-1,e===z)throw new t("tiles3d:addLayer-failure","The 3d tiles layer description was invalid.",{});if(e===q)throw new t("tiles3d:addLayer-failure","The 3d tiles layer web assembly module failed to download.",{})}));this.addResolvingPromise(e)}destroy(){this._dbg(He.VerboseAPI,"Tiles3DLayerView3D destroy() called"),re(this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null),this._intersectionHandler&&(this.view.sceneIntersectionHelper.removeIntersectionHandler(this._intersectionHandler),this._intersectionHandler=null),this._elevationProvider&&(this._elevationProvider.objectsChanged(this._obbs),this.view.elevationProvider.unregister(this._elevationProvider),this._elevationProvider=null),this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this),this._lyrHandleToObjects.forEach((e=>this.freeObject(e))),this._lyrHandleToObjects.clear(),this._initialCullFace.clear(),this._memCache=i(this._memCache),this._updatingHandles=i(this._updatingHandles),this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle&&(this._visibleGeometryChangedSchedulerHandle.remove(),this._visibleGeometryChangedSchedulerHandle=null)}_visibleGeometryChanged(){this._visibleGeometryChangedSchedulerHandle??=n((()=>{this.emit("visible-geometry-changed"),this._visibleGeometryChangedSchedulerHandle=null}))}_slicePlaneEnabledChange(e){this._intersectionHandler&&(this._intersectionHandler.slicePlaneEnabled=e),this.objects.forEach((t=>{const s=this._collection.getMaterial(t);s.commonMaterialParameters.hasSlicePlane=e,s.commonMaterialParameters.cullFace=e?ae.None:this._initialCullFace.get(t)}))}_elevationInfoChanged(e){this._wasm?.setLayerOffset(this,K(e))}get _obbs(){return this.objects.map((e=>this._collection.getComponentObb(e)))}get _wasm(){return ie(this.view)}get wasmLayerId(){return this._wasmLayerId}get usedMemory(){let e=0;return this._lyrHandleToObjects.forEach((t=>{t.isVisible&&(e+=t.totalMemory())})),e}get unloadedMemory(){return 0}get cachedMemory(){let e=0;return this._lyrHandleToObjects.forEach((t=>{t.isVisible||(e+=t.totalMemory())})),e}get visibleAtCurrentScale(){return Ie(this.layer.effectiveScaleRange,this.view.scale)}get performanceInfo(){let e=0,t=0,s=0,r=0,i=0,o=0;return this._lyrHandleToObjects.forEach((a=>{a.isVisible?(e+=a.texMemoryUsage,t+=a.vboMemoryUsage,i++):(s+=a.texMemoryUsage,r+=a.vboMemoryUsage,o++)})),new Le(this.usedMemory,i,o,Ge(t),Ge(e),Ge(r),Ge(s))}_canProjectWithoutEngine(){if(this.view.state.viewingMode===X.Local){const e=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1;if(3857!==e&&32662!==e)return!1}return!0}get _stage(){return this.view._stage}get _collection(){return this._stage.renderView.componentObjectCollection}get elevationOffset(){return K(this.layer.elevationInfo)}get elevationRange(){const e=this.fullExtent;return e?.zmin&&e?.zmax?new ge(e.zmin,e.zmax):null}getElevationRange(e){return null}get fullExtent(){return this.layer.fullExtent}get objects(){return Array.from(this._lyrHandleToObjects.values()).reduce(((e,t)=>e.concat(t.components)),new Array)}isUpdating(){const e=this._wasm;return!(this._wasmLayerId<0||null==e)&&e.isUpdating(this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}async createRenderable(e){const t=e.meshData;if(null==t.data)throw new Error("meshData.data undefined");if(t.desc=JSON.parse(t.desc),null==t.desc)throw new Error("meshData.desc undefined");const s=w(t.desc.origin),r=new Array,i=new Map,o=new ke;o.handle=e.handle,this._lyrHandleToObjects.set(e.handle,o);const a=this.view.basemapTerrain.spatialReference;let n,m;if("global"===this.view.viewingMode){const e=y();C(_,s,e,a),n=l(d(),e),m=c(d(),n)}else n=j,m=j;const p=y();u(p,p,s);const S=h(v(),p);let E=null;const O=v();if(t.desc.obb){const e=t.desc.obb.quaternion;E=new be(t.desc.obb.center,t.desc.obb.halfSize,g(e[0],e[1],e[2],e[3]))}for(let e=0;e<t.desc.prims.length;e++){const p=t.desc.prims[e];if(this._dbg(He.VerboseAPI,JSON.stringify(p)),null==Ve[p.ptype]||null==t.data){this._dbg(He.VerboseAPI,"[Unsupported Feature] Unsupported primitive mode ("+p.ptype+"). Skipping primitive.");continue}const l=t.desc?.materials&&null!=p.materialId?t.desc.materials[p.materialId]:null,c=null!=l?l.lightingModel:Q.Unlit,{positionView:d,positionAttr:u,normalsView:h,normalsAttr:y,colorAttr:g,texCoord0Attr:w,indicesView:_}=this.getBufferViews(p,t.data.buffer,n);if(null==u||null==d||null==_)continue;const C=new we(null!=g,null!=w?Se.Default:Se.None,null!=h,this._shadeNormals,this._applySSAO),I=u.data.length/u.size,L=(e,t)=>!e||e.data.length/e.size===I||(this._dbg(He.Error,`${t} !== numPos. Skipping primitive.`),!1);if(!L(w,"numTexcoord")||!L(g,"numColors")||!L(y,"normals"))continue;const V=ve(C);if(null!=E?E=E.clone():(E=fe(u),b(O,E.center,s),E.center=O),n!==j)for(let e=0;e<d.count;e++)d.getVec(e,O),f(O,O,n),d.setVec(e,O);const D=V.createBuffer(u.data.length),R=new Map([[Ee.POSITION,u]]);null!=w&&R.set(Ee.UV0,w),null!=g&&R.set(Ee.COLOR,g),null!=y&&R.set(Ee.NORMALCOMPRESSED,y),R.forEach(((e,t)=>{null!=e&&ye(t,e,null,null,D,0)}));const A=new Uint32Array([0,_.typedBuffer.length]),F={vertices:{data:D.buffer,count:D.byteLength/V.stride,layoutParameters:C},positionData:{positions:d.typedBuffer,indices:_.typedBuffer},indices:_.typedBuffer,componentOffsets:A};o.cpuMemoryUsage+=d.count,o.cpuMemoryUsage+=_.count;const B=this.view.renderSpatialReference,H=v(),k=[1,1,1];M(S,B,k,a)||this._dbg(He.Error,"Unsupported coordinate system for IM overlay"),P(S,B,H,a);const G=this._collection.createObject(new T(U(H[0],H[1],k[0],k[1]),new x(S,m),E,F));l&&this._collection.updateMaterial(G,(e=>{e.baseColor=l.baseColorFactor,e.usePBR=c===Q.Pbr,e.hasParametersFromSource=!1,e.baseColorTexture=this._getTexture(l.baseColorTex,t,i),e.usePBR&&(e.mrrFactors=[l.metallicFactor,l.roughnessFactor,0],e.emissiveFactor=l.emissiveFactor??[0,0,0],e.metallicRoughnessTexture=this._getTexture(l.metalTex,t,i),e.emissionTexture=this._getTexture(l.emissiveTex,t,i),e.occlusionTexture=this._getTexture(l.occlusionTex,t,i),e.normalTexture=this._getTexture(l.normalTex,t,i)),e.objectOpacity=0,e.alphaDiscardMode=oe.Mask;const s=[];e.baseColorTexture&&s.push(e.baseColorTexture.loadPromise),e.usePBR&&e.metallicRoughnessTexture&&s.push(e.metallicRoughnessTexture.loadPromise),e.usePBR&&e.emissionTexture&&s.push(e.emissionTexture.loadPromise),e.usePBR&&e.occlusionTexture&&s.push(e.occlusionTexture.loadPromise),e.usePBR&&e.normalTexture&&s.push(e.normalTexture.loadPromise);const a=Promise.all(s);r.push(a),a.then((()=>{e.alphaDiscardMode=De[l.alphaMode],e.objectOpacity=1,o.texMemoryUsage+=e.baseColorTexture?.glTexture?.usedMemory||0,e.usePBR&&(o.texMemoryUsage+=e.metallicRoughnessTexture?.glTexture?.usedMemory||0,o.texMemoryUsage+=e.emissionTexture?.glTexture?.usedMemory||0,o.texMemoryUsage+=e.occlusionTexture?.glTexture?.usedMemory||0,o.texMemoryUsage+=e.normalTexture?.glTexture?.usedMemory||0)})),e.commonMaterialParameters.doubleSided=l.isDoubleSided,e.commonMaterialParameters.cullFace=l.faceCulling?Re[l.faceCulling]:ae.Back,this._initialCullFace.set(G,e.commonMaterialParameters.cullFace),e.commonMaterialParameters.hasSlicePlane=this.slicePlaneEnabled,e.componentParameters.castShadows=Ue.All,e.textureAlphaCutoff=l.alphaCutoff??Te,e.alphaDiscardMode=De[l.alphaMode],e.isIntegratedMesh=!0,e.polygonOffsetEnabled=!1,e.hasOccludees=!1,e.ellipsoidMode=_e(this.view.spatialReference)})),o.components.push(G),o.vboMemoryUsage+=this._collection.getObjectGPUMemoryUsage(G)}if(await Promise.all(r),i.forEach((e=>{o.textures.push(e)})),!this._memCache)throw new Error("no memCache");return this._memCache.put(`${o.handle}`,o,o.totalMemory()),{memUsageBytes:o.totalMemory()}}freeRenderable(e){const t=this._lyrHandleToObjects.get(e);t&&(this.freeObject(t),this._lyrHandleToObjects.delete(e))}freeObject(e){this._memCache&&this._memCache.pop(`${e.handle}`),e.components.forEach((t=>{e.textures.forEach((e=>{this._stage.remove(e)})),this._collection.destroyObject(t),this._initialCullFace.delete(t)}))}setRenderableVisibility(e,t,s){if(this._memCache){for(let r=0;r<s;++r){const s=e[r],i=t[r];if(!i)continue;const o=this._lyrHandleToObjects.get(s);o&&(this._visibleGeometryChanged(),o.isVisible=i,o.components.forEach((e=>{this._collection.setObjectVisibility(e,i),this._elevationProvider.objectChanged(this._collection.getComponentObb(e))})),this._memCache.pop(`${s}`))}for(let r=0;r<s;++r){const s=e[r],i=t[r];if(i)continue;const o=this._lyrHandleToObjects.get(s);o&&(this._visibleGeometryChanged(),o.isVisible=i,o.components.forEach((e=>{this._collection.setObjectVisibility(e,i),this._elevationProvider.objectChanged(this._collection.getComponentObb(e))})),this._memCache.put(`${s}`,o,o.totalMemory()))}}}_getTexture(e,t,s){let r=null;if(e&&t.desc?.images&&t.data?.buffer){const i=t.desc.images[e?.imageId];if(r=s.get(i),!r&&i){const o=this._stage.renderView.renderingContext.parameters.maxMaxAnisotropy,a=!!i.mipCount||o>1,n=Ae[e.wrapMode??N.None];let m=i.alpha?4:3;const p=new Uint8Array(t.data.buffer,i.data.byteOffset,i.data.byteCount);let l=null,c=null,d=null;switch(i.format){case $.Raw:i.pixelFormat===J.R8?(l=p,m=1,c=""):i.pixelFormat===J.Rgb8?(l=p,m=3,c=""):i.pixelFormat===J.Rgba8&&(l=p,m=4,c="");break;case $.Dxt1:l=p,m=3,c=ne.DDS_ENCODING;break;case $.Dxt5:l=p,m=4,c=ne.DDS_ENCODING;break;case $.Png:c="image/png",d=document.createElement("img");break;case $.Jpeg:c="image/jpeg",d=document.createElement("img");break;case $.Etc2:c="image/ktx",d=document.createElement("img");break;case $.Astc:this._dbg(He.Error,"Astc texture not supported");break;case $.Pvrtc:this._dbg(He.Error,"Pvrtc texture not supported")}if(d&&c){const e=new Blob([p],{type:c});d.src=URL.createObjectURL(e),l=d}l&&null!=c&&(r=new Me(l,{mipmap:a,maxAnisotropy:o,encoding:c,wrap:n,components:m,noUnpackFlip:!0,width:i.mip0Width,height:i.mip0Height}),this._stage.add(r),s.set(i,r))}}return r?new Ce(this.view._stage.renderView.textures,r.id):null}getBufferViews(e,t,s){let r,i,o,a,n,m,p,l=null;for(let p=0;p<e.atrbs.length;p++){const c=e.atrbs[p],d=c.view,j=void 0,u=d.byteOffset+d.byteCount,h=d.byteCount/Fe[d.type],y=[...Array(h).keys()].map((e=>e));try{switch(c.sem){case Z.Position:3!==d.ncomp||d.type!==W.F32?this._dbg(He.Error,"[Unsupported Feature] Unsupported view for Position ("+d+")"):(r=new L(t,d.byteOffset,j,u),i=new xe(r.typedBuffer,y,3));break;case Z.Normal:if(3!==d.ncomp||d.type!==W.F32)this._dbg(He.Error,"[Unsupported Feature] Unsupported view for Normal ("+d+")");else{const e=new L(t,d.byteOffset,j,u),r=Pe(e.typedBuffer,s);n=new A(r),m=new xe(n.typedBuffer,y,2)}break;case Z.TexCoord:2!==d.ncomp||d.type!==W.F32?this._dbg(He.Error,"[Unsupported Feature] Unsupported view for Texcoord ("+d+")"):void 0===a&&(a=new xe(new R(t,d.byteOffset,j,u).typedBuffer,y,2));break;case Z.Color:4===d.ncomp?(d.type===W.F32&&(l=new E(t,d.byteOffset,j,u)),d.type===W.U8&&(l=new O(t,d.byteOffset,j,u)),d.type===W.U16&&(l=new I(t,d.byteOffset,j,u))):3===d.ncomp&&(d.type===W.F32&&(l=new L(t,d.byteOffset,j,u)),d.type===W.U8&&(l=new V(t,d.byteOffset,j,u)),d.type===W.U16&&(l=new D(t,d.byteOffset,j,u))),null==l?this._dbg(He.VerboseAPI,"[Unsupported Feature] Unsupported view for Color ("+d+")"):o=new xe(l.typedBuffer,y,d.ncomp);break;case Z.FeatureIndex:break;default:this._dbg(He.VerboseAPI,"[Unsupported Feature] Unsupported semantic ("+c.sem+"). Skipping vertex attribute.")}}catch(e){this._dbg(He.VerboseAPI,"Error Creating buffer ("+e+"). Skipping vertex attribute.")}}if(e.index){const s=e.index.view,r=void 0,i=s.byteOffset+s.byteCount;switch(e.index.view.type){case W.U16:p=new B(t,s.byteOffset,r,i);break;case W.U32:p=new F(t,s.byteOffset,r,i);break;case W.U8:default:this._dbg(He.Error,"[Unsupported Feature] index type not supported ("+s.type+").")}}if(null==p&&null!=r){const e=r.count;if(e<65535){const t=new Uint16Array(e);p=new B(t)}else{const t=new Uint32Array(e);p=new F(t)}for(let t=0;t<e;t++)p.set(t,t)}return{positionView:r,positionAttr:i,colorAttr:o,texCoord0Attr:a,indicesView:p,normalsView:n,normalsAttr:m}}_onRemoveFromCache(e){this._wasm?.onRenderableEvicted(this,e.handle,e.totalMemory()),this.freeRenderable(e.handle)}_dbg(e,t){this._dbgFlags.has(e)&&(e===He.Error?r.getLogger(this).error(t):r.getLogger(this).warn(t))}};e([m()],Ne.prototype,"_visibleGeometryChangedSchedulerHandle",void 0),e([m()],Ne.prototype,"layer",void 0),e([m({readOnly:!0})],Ne.prototype,"visibleAtCurrentScale",null),e([m()],Ne.prototype,"elevationOffset",null),Ne=e([p("esri.views.3d.layers.IntegratedMesh3DTilesLayerView3D")],Ne);const We=Ne;export{We as default};

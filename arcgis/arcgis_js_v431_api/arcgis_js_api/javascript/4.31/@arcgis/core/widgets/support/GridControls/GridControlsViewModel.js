/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import s from"../../../Color.js";import"../../../geometry.js";import"../../../symbols.js";import e from"../../../core/Evented.js";import{L as i}from"../../../chunks/Logger.js";import{m as r,r as o}from"../../../chunks/mathUtils.js";import{d as n}from"../../../chunks/maybe.js";import{when as p,watch as a}from"../../../core/reactiveUtils.js";import{n as l}from"../../../chunks/unitUtils.js";import{property as m}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/lang.js";import{subclass as c}from"../../../core/accessorSupport/decorators/subclass.js";import{isLoadedOrLoadFor as h,project as u}from"../../../geometry/projection.js";import{d}from"../../../chunks/scaleUtils.js";import{JSONSupport as j}from"../../../core/JSONSupport.js";import{e as y}from"../../../chunks/enumeration.js";import g from"../../../geometry/Point.js";import{m as k}from"../../../chunks/dehydratedPoint.js";import{d as v}from"../../../chunks/defaultUnit.js";import{a as S,g as b,s as f,m as _}from"../../../chunks/gridUtils.js";import{DrawGraphicTool2D as w}from"../../../chunks/editingTools.js";import{g as U}from"../../../chunks/snappingUtils.js";import C from"../../../core/Accessor.js";import"../../../chunks/widgetUtils.js";import{t as x}from"../../../chunks/jsxFactory.js";import{T as M}from"../../../chunks/TextOverlayItem.js";import{d as P}from"../../../chunks/formatUtils.js";import L from"../../../symbols/SimpleLineSymbol.js";import I from"../../../symbols/SimpleMarkerSymbol.js";import"../../../chunks/colorUtils.js";import"../../../chunks/ensureType.js";import"../../../config.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/writer.js";import"../../../core/Handles.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/jsonMap.js";import"../../../chunks/assets.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/coordsUtils.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/boundsUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";import"../../../symbols/CIMSymbol.js";import"../../../layers/support/fieldUtils.js";import"../../../core/sql.js";import"../../../intl.js";import"../../../chunks/date.js";import"../../../chunks/locale.js";import"../../../chunks/datetime.js";import"../../../chunks/number.js";import"../../../chunks/substitute.js";import"../../../chunks/messages.js";import"../../../symbols/Symbol.js";import"../../../symbols/ExtrudeSymbol3DLayer.js";import"../../../symbols/Symbol3DLayer.js";import"../../../chunks/utils4.js";import"../../../symbols/edges/Edges3D.js";import"../../../chunks/screenUtils.js";import"../../../chunks/materialUtils.js";import"../../../chunks/opacityUtils.js";import"../../../symbols/edges/SketchEdges3D.js";import"../../../symbols/edges/SolidEdges3D.js";import"../../../chunks/Symbol3DMaterial.js";import"../../../chunks/vec3f64.js";import"../../../symbols/FillSymbol.js";import"../../../symbols/LineSymbol.js";import"../../../symbols/LineSymbolMarker.js";import"../../../chunks/lineMarkers.js";import"../../../symbols/FillSymbol3DLayer.js";import"../../../symbols/patterns/LineStylePattern3D.js";import"../../../symbols/patterns/StylePattern3D.js";import"../../../chunks/utils5.js";import"../../../chunks/colors.js";import"../../../chunks/symbolLayerUtils3D.js";import"../../../chunks/aaBoundingBox.js";import"../../../symbols/Font.js";import"../../../symbols/IconSymbol3DLayer.js";import"../../../chunks/persistableUrlUtils.js";import"../../../symbols/LabelSymbol3D.js";import"../../../core/Collection.js";import"../../../chunks/shared.js";import"../../../chunks/SimpleObservable.js";import"../../../symbols/Symbol3D.js";import"../../../chunks/collectionUtils.js";import"../../../portal/Portal.js";import"../../../core/Loadable.js";import"../../../core/Promise.js";import"../../../portal/PortalGroup.js";import"../../../portal/PortalQueryParams.js";import"../../../portal/PortalQueryResult.js";import"../../../portal/PortalUser.js";import"../../../portal/PortalFolder.js";import"../../../symbols/LineSymbol3DLayer.js";import"../../../symbols/LineStyleMarker3D.js";import"../../../core/Clonable.js";import"../../../symbols/ObjectSymbol3DLayer.js";import"../../../symbols/PathSymbol3DLayer.js";import"../../../symbols/TextSymbol3DLayer.js";import"../../../symbols/WaterSymbol3DLayer.js";import"../../../symbols/support/StyleOrigin.js";import"../../../chunks/Thumbnail.js";import"../../../chunks/calloutUtils.js";import"../../../symbols/callouts/Callout3D.js";import"../../../symbols/callouts/LineCallout3D.js";import"../../../symbols/support/Symbol3DVerticalOffset.js";import"../../../symbols/LineSymbol3D.js";import"../../../symbols/MarkerSymbol.js";import"../../../symbols/MeshSymbol3D.js";import"../../../symbols/PictureFillSymbol.js";import"../../../chunks/urlUtils.js";import"../../../symbols/PictureMarkerSymbol.js";import"../../../symbols/PointSymbol3D.js";import"../../../symbols/PolygonSymbol3D.js";import"../../../chunks/asyncUtils.js";import"../../../symbols/SimpleFillSymbol.js";import"../../../symbols/TextSymbol.js";import"../../../symbols/WebStyleSymbol.js";import"../../../chunks/projectBuffer.js";import"../../../chunks/geodesicConstants.js";import"../../../geometry/support/GeographicTransformation.js";import"../../../geometry/support/GeographicTransformationStep.js";import"../../../chunks/zscale.js";import"../../../chunks/getDefaultUnitForView.js";import"../../../geometry/support/geodesicUtils.js";import"../../../geometry/support/normalizeUtils.js";import"../../../chunks/normalizeUtilsCommon.js";import"../../../chunks/simplify.js";import"../../../chunks/utils9.js";import"../../../chunks/utils10.js";import"../../../Graphic.js";import"../../../PopupTemplate.js";import"../../../popup/content.js";import"../../../popup/content/AttachmentsContent.js";import"../../../popup/content/Content.js";import"../../../popup/content/CustomContent.js";import"../../../popup/content/ExpressionContent.js";import"../../../popup/ElementExpressionInfo.js";import"../../../popup/content/FieldsContent.js";import"../../../popup/FieldInfo.js";import"../../../popup/support/FieldInfoFormat.js";import"../../../popup/content/MediaContent.js";import"../../../popup/content/BarChartMediaInfo.js";import"../../../popup/content/mixins/ChartMediaInfo.js";import"../../../popup/content/mixins/MediaInfo.js";import"../../../popup/content/support/ChartMediaInfoValue.js";import"../../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../../chunks/chartMediaInfoUtils.js";import"../../../popup/content/ColumnChartMediaInfo.js";import"../../../popup/content/ImageMediaInfo.js";import"../../../popup/content/support/ImageMediaInfoValue.js";import"../../../popup/content/LineChartMediaInfo.js";import"../../../popup/content/PieChartMediaInfo.js";import"../../../popup/content/RelationshipContent.js";import"../../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../../popup/content/TextContent.js";import"../../../popup/content/UtilityNetworkAssociationsContent.js";import"../../../popup/support/UtilityNetworkAssociationType.js";import"../../../popup/ExpressionInfo.js";import"../../../popup/LayerOptions.js";import"../../../popup/RelatedRecordsInfo.js";import"../../../support/actions/ActionBase.js";import"../../../core/Identifiable.js";import"../../../support/actions/ActionButton.js";import"../../../support/actions/ActionToggle.js";import"../../../chunks/SnappingVisualizer2D.js";import"../../../chunks/vec2.js";import"../../../chunks/common.js";import"../../../chunks/vec2f64.js";import"../../../chunks/enums2.js";import"../../../chunks/normalizedPoint.js";import"../../../chunks/elevationInfoUtils.js";import"../../../chunks/unitConversionUtils.js";import"../../../chunks/lengthUtils.js";import"../../../chunks/Settings2.js";import"../../../chunks/SnappingVisualizer.js";import"../../../chunks/RightAngleSnappingHint.js";import"../../../chunks/vec3.js";import"../../../chunks/PointSnappingHint.js";import"../../../chunks/editPlaneUtils.js";import"../../../chunks/UpdatingHandles.js";import"../../../geometry/coordinateFormatter.js";import"../../../layers/GraphicsLayer.js";import"../../../chunks/GraphicsCollection.js";import"../../../layers/Layer.js";import"../../../time/TimeExtent.js";import"../../../chunks/timeUtils.js";import"../../../layers/mixins/BlendLayer.js";import"../../../chunks/jsonUtils.js";import"../../../chunks/parser.js";import"../../../chunks/utils2.js";import"../../../chunks/mat4.js";import"../../../layers/mixins/ScaleRangeLayer.js";import"../../../chunks/ElevationInfo.js";import"../../../chunks/dehydratedFeatureComparison.js";import"../../../chunks/createUtils.js";import"../../../geometry/Circle.js";import"../../../geometry/geometryEngine.js";import"../../../chunks/geometryEngineBase.js";import"../../../chunks/_commonjsHelpers.js";import"../../../chunks/hydrated.js";import"../../../chunks/surfaceCoordinateSystems.js";import"../../../chunks/mat2d.js";import"../../../chunks/mat2df64.js";import"../../../chunks/quat.js";import"../../../chunks/vec4.js";import"../../../chunks/quatf64.js";import"../../../chunks/quantityUtils.js";import"../../../chunks/helpMessageUtils.js";import"../../../chunks/helpMessageUtils3d.js";import"../../../chunks/drawSurfaces.js";import"../../../chunks/memoize.js";import"../../../chunks/ReactiveSet.js";import"../../../chunks/diffUtils.js";import"../../../chunks/ViewingMode.js";import"../../../chunks/EditGeometryOperations.js";import"../../../chunks/compilerUtils.js";import"../../../chunks/vec4f64.js";import"../../../chunks/plane.js";import"../../../chunks/mat3f64.js";import"../../../chunks/mat4f64.js";import"../../../chunks/mathUtils2.js";import"../../../chunks/geometry2dUtils.js";import"../../../chunks/InteractiveToolBase.js";import"../../../chunks/meshVertexSpaceUtils.js";import"../../../geometry/support/MeshGeoreferencedVertexSpace.js";import"../../../geometry/support/MeshLocalVertexSpace.js";import"../../../chunks/hydratedFeatures.js";import"../../../chunks/interfaces.js";import"../../../chunks/projectVectorToVector.js";import"../../../chunks/projectPointToVector.js";import"../../../chunks/angularMeasurementUtils.js";import"../../../chunks/Cyclical.js";import"../../../views/interactive/sketch/SketchLabelOptions.js";import"../../../chunks/SnappingContext.js";import"../../../chunks/SnappingDragPipelineStep.js";import"../../../chunks/Scheduler.js";import"../../../core/signal.js";import"../../../chunks/debugFlags.js";import"../../../chunks/SnappingOperation.js";import"../../../chunks/SketchTooltipInfo.js";import"../../../geometry/support/MeshTransform.js";import"../../../chunks/axisAngleDegrees.js";import"../../../chunks/keybindings.js";import"../../../chunks/InputManager.js";import"../../../chunks/Queue.js";import"../../../views/interactive/Tooltip.js";import"../../../chunks/themeUtils.js";import"../../Widget.js";import"../../../chunks/domUtils.js";import"../../../chunks/uuid.js";import"../../../chunks/projector.js";import"../../../chunks/componentsUtils.js";import"../../../chunks/jsxWidgetSupport.js";import"../../../chunks/a11yUtils.js";import"../../../chunks/unitFormatUtils.js";import"../../../chunks/ByteSizeUnit.js";import"../../../chunks/quantityFormatUtils.js";import"../../../chunks/messageBundle.js";import"../../../chunks/directionModeIcons.js";import"../../../chunks/automaticAreaMeasurementUtils.js";import"../../../chunks/geodesicMeasurementUtils.js";import"../../../chunks/euclideanAreaMeasurementUtils.js";import"../../../chunks/earcut.js";import"../../../chunks/triangle.js";import"../../../chunks/ray.js";import"../../../chunks/mat3.js";import"../../../chunks/lineSegment.js";import"../../../chunks/euclideanLengthMeasurementUtils.js";import"../../../chunks/spatialReferenceEllipsoidUtils.js";import"../../../chunks/geodesicAreaMeasurementUtils.js";import"../../../chunks/automaticLengthMeasurementUtils.js";import"../../../chunks/geodesicLengthMeasurementUtils.js";import"../../../chunks/SketchOptions.js";import"../../../views/interactive/sketch/SketchTooltipOptions.js";import"../../../chunks/SketchTooltipVisibleElements.js";import"../../../views/interactive/sketch/SketchValueOptions.js";import"../../../chunks/boundedPlane.js";import"../../../symbols/support/cimSymbolUtils.js";import"../../../chunks/utils7.js";import"../../../chunks/GraphicManipulator.js";import"../../../chunks/defaults.js";import"../../../chunks/defaultsJSON.js";import"../../../chunks/drapedUtils.js";import"../../../chunks/colorUtils2.js";import"../../../chunks/drawUtils.js";import"../../../chunks/hitTestSelectUtils.js";import"../../../chunks/screenUtils2.js";import"../../../chunks/sphere.js";import"../../../rest/support/Query.js";import"../../../chunks/DataLayerSource.js";import"../../../layers/support/Field.js";import"../../../chunks/domains.js";import"../../../layers/support/CodedValueDomain.js";import"../../../layers/support/Domain.js";import"../../../layers/support/InheritedDomain.js";import"../../../layers/support/RangeDomain.js";import"../../../chunks/fieldType.js";import"../../../chunks/FullTextSearch.js";import"../../../chunks/spatialRelationships.js";import"../../../rest/support/StatisticDefinition.js";import"../../../chunks/utils6.js";import"../../../chunks/Version.js";import"../../../chunks/Version2.js";import"../../../chunks/number2.js";import"../../CoordinateConversion/support/Format.js";let T=class extends j{constructor(t){super(t),this.center=new g,this.dynamicScaling=!0,this.majorLineColor=s.fromArray([115,115,115,1]),this.majorLineInterval=10,this.minorLineColor=s.fromArray([165,165,165,1]),this.rotateWithMap=!1,this.rotation=0,this.spacing=1,this.type="measured",this.units="miles"}};t([m()],T.prototype,"center",void 0),t([m()],T.prototype,"dynamicScaling",void 0),t([m()],T.prototype,"majorLineColor",void 0),t([m()],T.prototype,"majorLineInterval",void 0),t([m()],T.prototype,"minorLineColor",void 0),t([m()],T.prototype,"rotateWithMap",void 0),t([m()],T.prototype,"rotation",void 0),t([m()],T.prototype,"spacing",void 0),t([y({measured:"measured"})],T.prototype,"type",void 0),t([m()],T.prototype,"units",void 0),T=t([c("esri.grids.MeasuredGrid")],T);let D=class extends C{constructor(t){super(t),this.color=new s([255,127,0,1]),this.isDecoration=!0,this.length=34,this.rotation=0,this.thickness=2,this.visible=!0}get _strokeStyle(){return this.color.toCss(!0)}render(){const{x:t,y:s,length:e,thickness:i,rotation:r}=this,o=e/2,n=`0 0 ${e} ${e}`,p=`M${o} 0 V${e} M0 ${o} H${e}`;return x("div",{classes:{"esri-box-overlay-item":!0},styles:{left:(t??0)-o+"px",top:(s??0)-o+"px",width:`${e}px`,height:`${e}px`,transform:`rotate(${r}deg)`,visibility:this.visible?"visible":"hidden"}},x("svg",{styles:{overflow:"visible"},viewbox:n},x("path",{d:p,stroke:this._strokeStyle,"stroke-width":i})))}renderCanvas(){}};t([m()],D.prototype,"color",void 0),t([m()],D.prototype,"isDecoration",void 0),t([m()],D.prototype,"length",void 0),t([m()],D.prototype,"rotation",void 0),t([m()],D.prototype,"thickness",void 0),t([m()],D.prototype,"visible",void 0),t([m()],D.prototype,"x",void 0),t([m()],D.prototype,"y",void 0),t([m({readOnly:!0})],D.prototype,"_strokeStyle",null),D=t([c("esri.views.overlay.CrosshairOverlayItem")],D);const O=D,R=t=>{if(null==t||isNaN(t))return 0;const s=t+180;return Math.trunc(r(s,360))},G=t=>{let s=t;return null==s?0:("string"==typeof s&&(s=parseInt(s,10)),isNaN(s)?0:r(Math.trunc(s),360)-180)},V=(t,e)=>{if(!t||e.length<3)return;const[i,r,o,n]=e,[p,a]=void 0===n?[1,.25]:[n,.25*n];t.majorLineColor=s.fromArray([i,r,o,p]),t.minorLineColor=s.fromArray([i,r,o,a])},E=Symbol("grid-interactivity");let A=class extends e.EventedAccessor{constructor(t){super(t),this._drawGraphicTool=null,this._crosshairLabel=null,this._crosshairItem=null,this.snappingManager=null,this.snappingOptions=null,this.view=null,this.placementDisabled=!1,this._mostRecentlyShownGrid=null,this._sketchedVertexCount=0}initialize(){this.addHandles([p((()=>!this.displayEnabled),(()=>{this.interactivePlacementState=null})),a((()=>this.view?.viewpoint),(()=>{this._renderOverlays()})),a((()=>this.snappingOptions?.gridEnabled),(t=>{null!=t&&this.trySetDisplayEnabled(t)})),a((()=>this.view?.grid),((t,s)=>{this._mostRecentlyShownGrid=!t&&s?s:null}))])}destroy(){this._resetGridPlacementState(),this._crosshairItem&&(this.view?.overlay?.removeItem(this._crosshairItem),this._crosshairItem=n(this._crosshairItem)),this._crosshairLabel&&(this.view?.overlay?.removeItem(this._crosshairLabel),this._crosshairLabel=n(this._crosshairLabel))}get displayEnabled(){return!!this.view?.grid}get dynamicScaling(){return this.grid?.dynamicScaling??!1}set dynamicScaling(t){this.grid&&(this.grid.dynamicScaling=t)}get grid(){return this.view?.grid??this._mostRecentlyShownGrid}set gridColor(t){this._set("gridColor",t);const[s,e,i,r]=t.toArray();V(this.grid,[s,e,i,r/255])}get gridControlsEnabled(){return this.displayEnabled&&!this.interactivePlacementState}set interactivePlacementState(t){this._set("interactivePlacementState",t),this._resetGridPlacementState(),t&&this._startGridManipulation(t)}get majorLineInterval(){return this.grid?.majorLineInterval??10}set majorLineInterval(t){this.grid&&(this.grid.majorLineInterval=t<1?1:t>15?15:t)}get rotateWithMap(){return this.grid?.rotateWithMap??!1}set rotateWithMap(t){this.grid&&(this.grid.rotateWithMap=t)}get rotation(){return this.grid?.rotation??-180}set rotation(t){this.grid&&(this.grid.rotation=t)}get snappingEnabled(){return(this.grid&&this.snappingOptions?.gridEnabled)??!1}set snappingEnabled(t){const{snappingOptions:s}=this;s&&(s.gridEnabled=t)}get spacing(){return this.grid?.spacing??1}set spacing(t){this.grid&&t>0&&(this.grid.spacing=t)}get unit(){return this.grid?.units}set unit(t){this.grid&&(this.grid.units=t)}get gridOutOfScale(){return!this.dynamicScaling&&null!=this._pixelsPerStride&&this._pixelsPerStride<S}get effectiveSpacingAfterDynamicScaling(){return this.majorLineInterval<1||!this.dynamicScaling||!this.view||null==this._pixelsPerStride||!this.grid?.spacing?null:this.grid.spacing*b(this.majorLineInterval,this._pixelsPerStride,this.dynamicScaling)}get numericSpacingInputShouldBeVisible(){return!!this.view?.spatialReference&&f(this.view.spatialReference)}get _metersPerSRUnit(){if(!(this.view&&this.displayEnabled&&this.grid&&h(this.grid.center.spatialReference,this.view.spatialReference)))return null;const t=u(this.grid.center,this.view.spatialReference);return _(t)}get _pixelsPerStride(){if(!this.view?.scale||!this.displayEnabled||!this.grid||null==this._metersPerSRUnit)return null;const t=this.grid,{scale:s,spatialReference:e}=this.view;return l(t.spacing,t.units,"meters")/(this._metersPerSRUnit*d(s,e))}get _isPlacing(){if(!this._drawGraphicTool)return!1;const t=this.interactivePlacementState;return"place"===t||"interactive"===t&&0===this._sketchedVertexCount}get _isRotating(){if(!this._drawGraphicTool)return!1;const t=this.interactivePlacementState;return"rotate"===t||"interactive"===t&&1===this._sketchedVertexCount}get _isScaling(){return!!this._drawGraphicTool&&"interactive"===this.interactivePlacementState&&1===this._sketchedVertexCount}togglePlacementState(t){this.interactivePlacementState=this.interactivePlacementState===t?null:t}trySetDisplayEnabled(t){const{view:s}=this;if(s?.ready)if(!s.grid&&t)if(this._mostRecentlyShownGrid)s.grid=this._mostRecentlyShownGrid;else{const t="imperial"===this.defaultUnit?"feet":"meters";s.grid=new T({units:t,center:s.center??new g,rotateWithMap:!0}),V(this.grid,[115,115,115])}else t||(s.grid=null);else i.getLogger(this).warn("Attempting to enable grid display while view is not ready")}startPlacement(t){const{view:s,snappingManager:e}=this;if(!s)return;this._set("interactivePlacementState",t),this._sketchedVertexCount=0;const i=new w({view:s,graphicProperties:{attributes:{[U]:U}},sketchOptions:{tooltips:{enabled:!0,visibleElements:{direction:!1,rotation:!1,totalLength:!1,elevation:!1,distance:!1,area:!1}}},geometryType:"polyline",mode:"click",snapToScene:!1,snappingManager:e,forceUniformSize:!0,centered:!1,cursor:"interactive"===this.interactivePlacementState||"place"===this.interactivePlacementState?"none":null,regularVerticesSymbol:void 0,activeVertexSymbol:W,activeLineSymbol:B,graphicSymbol:B});this._drawGraphicTool=i,s.addAndActivateTool(i),this._renderOverlays(),this.addHandles([i.on("cursor-update",(t=>this._onCursorUpdate(t))),i.on("complete",(()=>this._onDrawComplete())),i.on("vertex-add",(s=>this._onVertexAdd(s,t)))],E)}async _startGridManipulation(t){const{view:s}=this;if(!s)return void(this.interactivePlacementState=null);const e=new CustomEvent("before-placement",{cancelable:!0});this.emit("before-placement",e),e.defaultPrevented||this.startPlacement(t)}_onCursorUpdate(t){try{if(this._isPlacing){const s=t.vertices[0].coordinates;return void this._handlePlace(s)}if(this._drawGraphicTool.cursor=null,this._isRotating&&this._handleRotate(t.vertices[0].coordinates),this._isScaling){const t=this._drawGraphicTool?.drawOperation.cursorVertex;this._handleScale(t)}}finally{this._renderOverlays()}}_onDrawComplete(){this._drawGraphicTool.cursor=null,this.interactivePlacementState=null}_onVertexAdd(t,s){const e=t.vertices[0].coordinates;this._isPlacing&&this._handlePlace(e),this._isRotating&&this._sketchedVertexCount>0&&this._handleRotate(e),this._isScaling&&this._sketchedVertexCount>0&&this._handleScale(k(e[0],e[1],void 0,this.view.spatialReference)),this._sketchedVertexCount++,this._drawGraphicTool.cursor=null,2!==this._sketchedVertexCount&&"interactive"===s||(this.interactivePlacementState=null),this._renderOverlays()}_handlePlace(t){const{grid:s,view:e}=this;s&&e&&(s.center=new g({x:t[0],y:t[1],spatialReference:e.spatialReference}))}_handleRotate(t){const{grid:s,view:e}=this;if(!s||!e)return;this._drawGraphicTool?.sketchOptions.tooltips.set("enabled",!1);const{x:i,y:r}=s.center,[n,p]=t,a=e.toScreen(s.center,{pickClosestTarget:!0}),l=a&&e.toMap(a),m=e.toScreen(k(n,p,void 0,e.spatialReference),{pickClosestTarget:!0}),c=m&&e.toMap(m),h=l?l.x:i,u=l?l.y:r,d=h-(c?c.x:n),j=u-(c?c.y:p);if(0===d&&0===j)return;const y=Math.atan2(j,d),g=o(y),v=s.rotateWithMap,S=e.viewpoint.rotation??0,b=v?g:g-S;s.rotation=Math.fround(b)%360}_handleScale(t){const{view:s,grid:e,_drawGraphicTool:i,interactivePlacementState:r,_metersPerSRUnit:o}=this;if(!(t&&s&&e&&i&&o))return;i.sketchOptions.tooltips.enabled=!1;const n="interactive"===r?e.center:i.drawOperation.firstVertex;if(!n||!t)return;const p=s?.toScreen(n),a=p&&s.toMap(p),m=s?.toScreen(t),c=a??n,h=(m&&s.toMap(m))??t,u=Math.sqrt((c.x-h.x)**2+(c.y-h.y)**2),d=l(u*o,"meters",e.units);this.spacing=d}_renderOverlays(){this._renderCrosshairOverlay(),this._renderTextOverlay()}_renderTextOverlay(){const{grid:t,view:s,_drawGraphicTool:e}=this,i=this._getCrosshairLabel();if(!(t&&s?.overlay&&e&&i))return;const r=s.toScreen(t.center,{pickClosestTarget:!0});r&&(i.position=[r.x+12,r.y+12]),this._isRotating?(i.text=`${R(t.rotation)}${P}`,i.visible=!0):i.visible=!1}_renderCrosshairOverlay(){const{grid:t,view:s,_drawGraphicTool:e}=this;if(!t||!s?.overlay||!e)return;const i=this._getCrosshair();if(!i)return;const r=s.toScreen(t.center);r&&(i.x=r.x,i.y=r.y,i.rotation=t.rotateWithMap?s.viewpoint.rotation-t.rotation:-t.rotation,i.visible=!!e)}_getCrosshairLabel(){if(this._crosshairLabel)return this._crosshairLabel;const{grid:t,view:e,_drawGraphicTool:i}=this;if(!t||!e?.overlay||!i)return null;const r=new M({anchor:"top-left",fontSize:10,textColor:new s([21,21,21]),backgroundColor:new s([248,248,248]),padding:8,borderRadius:20});return e.overlay.addItem(r),this._crosshairLabel=r,r}_getCrosshair(){const{_crosshairItem:t,view:s}=this;return s?.overlay?t&&s.overlay.items.includes(t)?t:(this._crosshairItem=new O({color:s.effectiveTheme.accentColor,thickness:4,length:36,visible:!0}),s.overlay?.addItem(this._crosshairItem),this._crosshairItem):null}_resetGridPlacementState(){this.removeHandles(E),this._crosshairItem&&(this._crosshairItem.visible=!1),this._crosshairLabel&&(this._crosshairLabel.visible=!1),this._drawGraphicTool&&(this.view?.activeTool===this._drawGraphicTool&&(this.view.activeTool=null),this.view?.tools.remove(this._drawGraphicTool)),this._drawGraphicTool=n(this._drawGraphicTool)}};t([m(v)],A.prototype,"defaultUnit",void 0),t([m({readOnly:!0})],A.prototype,"displayEnabled",null),t([m()],A.prototype,"dynamicScaling",null),t([m()],A.prototype,"grid",null),t([m()],A.prototype,"gridColor",null),t([m({readOnly:!0})],A.prototype,"gridControlsEnabled",null),t([m()],A.prototype,"interactivePlacementState",null),t([m()],A.prototype,"majorLineInterval",null),t([m()],A.prototype,"rotateWithMap",null),t([m()],A.prototype,"rotation",null),t([m()],A.prototype,"snappingEnabled",null),t([m()],A.prototype,"snappingManager",void 0),t([m()],A.prototype,"snappingOptions",void 0),t([m()],A.prototype,"spacing",null),t([m()],A.prototype,"unit",null),t([m()],A.prototype,"view",void 0),t([m({readOnly:!0})],A.prototype,"gridOutOfScale",null),t([m({readOnly:!0})],A.prototype,"effectiveSpacingAfterDynamicScaling",null),t([m({readOnly:!0})],A.prototype,"numericSpacingInputShouldBeVisible",null),t([m()],A.prototype,"placementDisabled",void 0),t([m()],A.prototype,"_metersPerSRUnit",null),t([m()],A.prototype,"_pixelsPerStride",null),t([m()],A.prototype,"_isPlacing",null),t([m()],A.prototype,"_isRotating",null),t([m()],A.prototype,"_isScaling",null),t([m()],A.prototype,"_mostRecentlyShownGrid",void 0),t([m()],A.prototype,"_sketchedVertexCount",void 0),A=t([c("esri.widgets.support.GridControls.GridControlsViewModel")],A);const F=A,B=new L({width:0}),W=new I({color:s.fromArray([0,0,0,0]),outline:new L({color:s.fromArray([0,0,0,0])})});export{F as default,R as g,G as u};

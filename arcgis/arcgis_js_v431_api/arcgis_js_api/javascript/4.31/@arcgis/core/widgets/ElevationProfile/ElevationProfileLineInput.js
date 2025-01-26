/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import t from"../../Color.js";import{h as s}from"../../chunks/handleUtils.js";import{m as o}from"../../chunks/memoize.js";import{watch as r,on as i}from"../../core/reactiveUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{GeometryDescriptor as m}from"../../chunks/ElevationQuery.js";import{k as c}from"../../chunks/elevationInfoUtils.js";import a from"./ElevationProfileLine.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/ensureType.js";import"../../config.js";import"../../chunks/asyncUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../geometry/Multipoint.js";import"../../chunks/writer.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/projection.js";import"../../chunks/vec3f64.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../layers/support/ElevationSampler.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/ElevationTile.js";import"../../chunks/ElevationSamplerData.js";import"../../chunks/TileKey.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/uuid.js";import"../../chunks/vec4f64.js";import"../../chunks/Material.js";import"../../chunks/interfaces3.js";import"../../chunks/VertexAttribute.js";import"../../chunks/boundedPlane.js";import"../../chunks/ray.js";import"../../chunks/mat3.js";import"../../chunks/mat3f64.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/plane.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/vec2f64.js";import"../../chunks/mathUtils2.js";import"../../chunks/mat4.js";import"../../chunks/lineSegment.js";import"../../chunks/sphere.js";import"../../chunks/vec4.js";import"../../chunks/ViewingMode.js";import"../../chunks/QueueProcessor.js";import"../../chunks/Queue.js";import"../../chunks/ReactiveMap.js";import"../../core/signal.js";import"../../chunks/Scheduler.js";import"../../chunks/debugFlags.js";import"../../chunks/vec2.js";import"../../geometry/support/geodesicUtils.js";import"../../chunks/traversalUtils.js";let l=class extends a{constructor(e){super(e),this.type="input",this.color=new t("#00c8c8"),this.viewVisualizationEnabled=!1,this.numSamplesForPreview=50,this.numSamplesPerChunk=500,this.chartFillEnabled=!1,this.chartStrokeOffsetY=-1,this._getQueryElevationDependencies=o(((e,t,s,o,r)=>e?{elevationInfo:e,visibleLayers:t,view:s,stationary:o,spatialReference:r}:null))}get queryElevationDependencies(){const e=this._viewModel?.view;return null==e?null:this._getQueryElevationDependencies(this._elevationInfo,this._visibleLayers,e,e.stationary,e.spatialReference)}get available(){return!this._viewModel?.inputIsSketched}get _elevationInfo(){const e=this._viewModel?.input;return e?c(e):null}get _visibleLayers(){return this._viewModel?.view?.map?.allLayers?.filter((e=>e.visible)).toArray()??[]}async queryElevation(e,{noDataValue:t,signal:s}){const o=this.queryElevationDependencies;if(null==o)throw new Error("ElevationProfileLineInput: no dependencies");const{view:r,elevationInfo:i,spatialReference:n}=o;if("on-the-ground"===i.mode&&"3d"===r.type&&n){const o=await m.fromGeometry(e).project(n,s);if(!o)return{geometry:e,noDataValue:t};const i=r.elevationProvider;return o.coordinates.forEach((e=>{e.z=i.getElevation(e.x,e.y,0,n,"ground")??0})),{geometry:o.export(),noDataValue:t}}return{geometry:e,noDataValue:t}}attach(e){const t=()=>this._onChange();return s([super.attach(e),r((()=>this.queryElevationDependencies),t),i((()=>e.elevationProvider),"elevation-change",t,{onListenerAdd:t,onListenerRemove:t})])}};e([n({type:t,nonNullable:!0})],l.prototype,"color",void 0),e([n()],l.prototype,"viewVisualizationEnabled",void 0),e([n()],l.prototype,"queryElevationDependencies",null),e([n()],l.prototype,"available",null),e([n()],l.prototype,"_elevationInfo",null),e([n()],l.prototype,"_visibleLayers",null),l=e([p("esri.widgets.ElevationProfile.ElevationProfileLineInput")],l);const u=l;export{u as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import t from"../core/Error.js";import{M as o}from"../chunks/MultiOriginJSONSupport.js";import{schedule as s}from"../core/scheduling.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import p from"./Layer.js";import{PortalLayer as m}from"./mixins/PortalLayer.js";import"../config.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/JSONSupport.js";import"../core/promiseUtils.js";import"../chunks/ensureType.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Evented.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../time/TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/asyncUtils.js";import"../chunks/layerUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/persistableUrlUtils.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/SimpleObservable.js";import"../chunks/vec3f64.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";let n=class extends(m(o(p))){constructor(r){super(r),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{s((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unsupported layer type";r&&(s+=" "+r),o(new t("layer:unsupported-layer-type",s,{layerType:r}))}))})))}read(r,t){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,t)}write(r,t){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};r([e({readOnly:!0})],n.prototype,"resourceInfo",void 0),r([e({type:["show","hide"]})],n.prototype,"listMode",void 0),r([e({type:Boolean,readOnly:!1})],n.prototype,"persistenceEnabled",void 0),r([e({json:{read:!1},readOnly:!0,value:"unsupported"})],n.prototype,"type",void 0),n=r([i("esri.layers.UnsupportedLayer")],n);const c=n;export{c as default};

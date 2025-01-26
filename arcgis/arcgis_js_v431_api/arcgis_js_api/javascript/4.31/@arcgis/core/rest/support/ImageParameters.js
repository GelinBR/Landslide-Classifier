/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Accessor.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import r from"../../geometry/Extent.js";import i from"../../geometry/SpatialReference.js";import{_ as p}from"../../chunks/unitUtils.js";import{JSONSupport as n}from"../../core/JSONSupport.js";import{o as l,p as m}from"../../chunks/layerUtils.js";import a from"../../time/TimeExtent.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";let c=class extends n{};t([o({type:Boolean,json:{write:!0}})],c.prototype,"timeDataCumulative",void 0),t([o({type:Number,json:{write:!0}})],c.prototype,"timeOffset",void 0),t([o({type:String,json:{write:!0}})],c.prototype,"timeOffsetUnits",void 0),t([o({type:Boolean,json:{write:!0}})],c.prototype,"useTime",void 0),c=t([s("esri.layers.support.LayerTimeOptions")],c);const h=c;let u=class extends e{constructor(t){super(t),this.extent=null,this.width=null,this.height=null,this.dpi=null,this.format=null,this.imageSpatialReference=null,this.layerDefinitions=[],this.layerOption=null,this.layerIds=null,this.transparent=!0,this.timeExtent=null,this.layerTimeOptions=null}toJSON(){let t,e=this.extent;if(e=e&&e.clone()._normalize(!0),this.timeExtent){const e=this.timeExtent.toJSON(),{start:o,end:s}=e;null==o&&null==s||(t=o===s?""+o:`${o??"null"},${s??"null"}`)}const o=this.layerOption,s=p(e?.spatialReference),r=this.imageSpatialReference,i={dpi:this.dpi,format:this.format,transparent:this.transparent,size:null!==this.width&&null!==this.height?this.width+","+this.height:null,bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:null,bboxSR:s,layers:o?o+":"+(this.layerIds??[]).join(","):null,layerDefs:l(this.layerDefinitions),layerTimeOptions:m(this.layerTimeOptions??[]),imageSR:r?p(r):s,time:t},n={};return Object.keys(i).filter((t=>null!=i[t])).forEach((t=>n[t]=i[t])),n}};t([o({type:r})],u.prototype,"extent",void 0),t([o()],u.prototype,"width",void 0),t([o()],u.prototype,"height",void 0),t([o()],u.prototype,"dpi",void 0),t([o()],u.prototype,"format",void 0),t([o({type:i})],u.prototype,"imageSpatialReference",void 0),t([o()],u.prototype,"layerDefinitions",void 0),t([o()],u.prototype,"layerOption",void 0),t([o()],u.prototype,"layerIds",void 0),t([o()],u.prototype,"transparent",void 0),t([o({type:a})],u.prototype,"timeExtent",void 0),t([o({type:[h]})],u.prototype,"layerTimeOptions",void 0),u=t([s("esri.rest.support.ImageParameters")],u);const y=u;export{y as default};

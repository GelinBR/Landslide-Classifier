/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{i as t}from"../../core/lang.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import{e}from"../../chunks/ensureType.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{fromJSON as p}from"../../geometry/support/jsonUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";let m=class extends o{constructor(r){super(r),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};r([s({json:{read:{reader:r=>r?r.map((r=>p(r))).filter(t):null},write:{writer:(r,t)=>{t.geometries1=r?.map((r=>r.toJSON()))??null}}}})],m.prototype,"geometries1",void 0),r([s({json:{read:{reader:r=>r?r.map((r=>p(r))).filter(t):null},write:{writer:(r,t)=>{t.geometries2=r?.map((r=>r.toJSON()))??null}}}})],m.prototype,"geometries2",void 0),r([s({type:String,json:{write:!0}})],m.prototype,"relation",void 0),r([s({type:String,json:{write:!0}})],m.prototype,"relationParameter",void 0),m=r([i("esri.rest.support.RelationParameters")],m),m.from=e(m);const n=m;export{n as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as s}from"../../geometry.js";import{ClonableMixin as o}from"../../core/Clonable.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{e as i}from"../../chunks/enumeration.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{w as m}from"../../chunks/writer.js";import{getJsonType as n,fromJSON as c}from"../../geometry/support/jsonUtils.js";import{s as j}from"../../chunks/spatialRelationships.js";import a from"../../time/TimeExtent.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";let l=class extends(o(r)){constructor(){super(...arguments),this.geometry=null,this.objectIds=null,this.spatialRelationship="intersects",this.timeExtent=null,this.where=null}writeGeometry(t,s,o){null!=t&&(s.geometryType=n(t),s[o]=JSON.stringify(t.toJSON()))}};t([e({types:s,json:{read:c,write:!0}})],l.prototype,"geometry",void 0),t([m("geometry")],l.prototype,"writeGeometry",null),t([e({json:{write:!0}})],l.prototype,"objectIds",void 0),t([i(j,{ignoreUnknown:!1,name:"spatialRel"})],l.prototype,"spatialRelationship",void 0),t([e({type:a,json:{name:"time",write:!0}})],l.prototype,"timeExtent",void 0),t([e({type:String,json:{write:!0}})],l.prototype,"where",void 0),l=t([p("esri.rest.support.ImageGPSInfoParameters")],l);const u=l;export{u as default};

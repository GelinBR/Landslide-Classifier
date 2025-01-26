/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{geometryTypes as r}from"../../geometry.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import{w as m}from"../../chunks/writer.js";import{getJsonType as p,fromJSON as n}from"../../geometry/support/jsonUtils.js";import c from"../../layers/support/MosaicRule.js";import u from"../../layers/support/RasterFunction.js";import a from"../../time/TimeExtent.js";import j from"../../geometry/Point.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../layers/support/DimensionalDefinition.js";import"../../chunks/enumeration.js";import"../../chunks/timeUtils.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";var l;let h=l=class extends s{constructor(){super(...arguments),this.geometry=null,this.mosaicRule=null,this.rasterFunction=null,this.pixelSize=null,this.raster=void 0,this.timeExtent=null}writeGeometry(t,r,s){null!=t&&(r.geometryType=p(t),r[s]=t.toJSON())}clone(){return new l(o({geometry:this.geometry,mosaicRule:this.mosaicRule,rasterFunction:this.rasterFunction,pixelSize:this.pixelSize,raster:this.raster,timeExtent:this.timeExtent}))}};t([e({types:r,json:{read:n}})],h.prototype,"geometry",void 0),t([m("geometry")],h.prototype,"writeGeometry",null),t([e({type:c,json:{write:!0}})],h.prototype,"mosaicRule",void 0),t([e({type:u,json:{write:!0,name:"renderingRule"}})],h.prototype,"rasterFunction",void 0),t([e({type:j,json:{write:!0}})],h.prototype,"pixelSize",void 0),t([e({json:{write:!0}})],h.prototype,"raster",void 0),t([e({type:a,json:{read:{source:"time"},write:{target:"time"}}})],h.prototype,"timeExtent",void 0),h=l=t([i("esri.rest.support.ImageHistogramParameters")],h);const y=h;export{y as default};

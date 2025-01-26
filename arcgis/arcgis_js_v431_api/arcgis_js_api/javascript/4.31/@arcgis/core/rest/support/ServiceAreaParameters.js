/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import"../../geometry.js";import{ClonableMixin as e}from"../../core/Clonable.js";import o from"../../core/Collection.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import{a as s}from"../../chunks/ensureType.js";import"../../core/lang.js";import{e as n}from"../../chunks/enumeration.js";import{r as p}from"../../chunks/reader.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{w as a}from"../../chunks/writer.js";import{a as u}from"../../chunks/commonProperties3.js";import{i as m,r as y,l as c,o as j,z as d,m as h,y as g}from"../../chunks/networkEnums.js";import v from"./TravelMode.js";import w from"../../geometry/SpatialReference.js";import"../../geometry/Extent.js";import"../../chunks/Logger.js";import"../../config.js";import"../../geometry/Geometry.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";var P;let B=P=class extends(e(r)){constructor(t){super(t),this.accumulateAttributes=null,this.apiKey=null,this.attributeParameterValues=null,this.defaultBreaks=null,this.excludeSourcesFromPolygons=null,this.facilities=null,this.geometryPrecision=null,this.geometryPrecisionM=null,this.geometryPrecisionZ=null,this.ignoreInvalidLocations=null,this.impedanceAttribute=null,this.mergeSimilarPolygonRanges=!1,this.outputGeometryPrecision=null,this.outputGeometryPrecisionUnits=null,this.outputLines=null,this.outputPolygons=null,this.outSpatialReference=null,this.overlapLines=!1,this.overlapPolygons=!1,this.overrides=null,this.pointBarriers=null,this.polygonBarriers=null,this.polylineBarriers=null,this.preserveObjectID=null,this.restrictionAttributes=null,this.restrictUTurns=null,this.returnFacilities=!1,this.returnPointBarriers=!1,this.returnPolygonBarriers=!1,this.returnPolylineBarriers=!1,this.splitLinesAtBreaks=!1,this.splitPolygonsAtBreaks=!1,this.timeOfDay=null,this.timeOfDayIsUTC=null,this.travelDirection=null,this.travelMode=null,this.trimOuterPolygon=!1,this.trimPolygonDistance=null,this.trimPolygonDistanceUnits=null,this.useHierarchy=null}static from(t){return s(P,t)}readAccumulateAttributes(t){return null==t?null:t.map((t=>m.fromJSON(t)))}writeAccumulateAttributes(t,e,o){t?.length&&(e[o]=t.map((t=>m.toJSON(t))))}writeFacilities(t,e,o){f(t,e,o)}writePointBarriers(t,e,o){f(t,e,o)}writePolygonBarrier(t,e,o){f(t,e,o)}writePolylineBarrier(t,e,o){f(t,e,o)}readRestrictionAttributes(t){return null==t?null:t.map((t=>y.fromJSON(t)))}writeRestrictionAttributes(t,e,o){t?.length&&(e[o]=t.map((t=>y.toJSON(t))))}readTimeOfDay(t,e){const{timeOfDay:o}=e;return null==o?null:"now"===o?"now":new Date(o)}writeTimeOfDay(t,e){null!=t&&(e.timeOfDay="now"===t?"now":t.getTime())}};t([i({type:[String],json:{name:"accumulateAttributeNames",write:!0}})],B.prototype,"accumulateAttributes",void 0),t([p("accumulateAttributes")],B.prototype,"readAccumulateAttributes",null),t([a("accumulateAttributes")],B.prototype,"writeAccumulateAttributes",null),t([i(u)],B.prototype,"apiKey",void 0),t([i({json:{write:!0}})],B.prototype,"attributeParameterValues",void 0),t([i({type:[Number],json:{write:!0}})],B.prototype,"defaultBreaks",void 0),t([i({type:[String],json:{write:!0}})],B.prototype,"excludeSourcesFromPolygons",void 0),t([i({json:{write:!0}})],B.prototype,"facilities",void 0),t([a("facilities")],B.prototype,"writeFacilities",null),t([i({type:Number,json:{write:!0}})],B.prototype,"geometryPrecision",void 0),t([i({type:Number,json:{write:!0}})],B.prototype,"geometryPrecisionM",void 0),t([i({type:Number,json:{write:!0}})],B.prototype,"geometryPrecisionZ",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"ignoreInvalidLocations",void 0),t([n(m,{name:"impedanceAttributeName",ignoreUnknown:!1})],B.prototype,"impedanceAttribute",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"mergeSimilarPolygonRanges",void 0),t([i({type:Number,json:{write:!0}})],B.prototype,"outputGeometryPrecision",void 0),t([n(c)],B.prototype,"outputGeometryPrecisionUnits",void 0),t([n(j)],B.prototype,"outputLines",void 0),t([n(d)],B.prototype,"outputPolygons",void 0),t([i({type:w,json:{name:"outSR",write:!0}})],B.prototype,"outSpatialReference",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"overlapLines",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"overlapPolygons",void 0),t([i({json:{write:!0}})],B.prototype,"overrides",void 0),t([i({json:{name:"barriers",write:!0}})],B.prototype,"pointBarriers",void 0),t([a("pointBarriers")],B.prototype,"writePointBarriers",null),t([i({json:{write:!0}})],B.prototype,"polygonBarriers",void 0),t([a("polygonBarriers")],B.prototype,"writePolygonBarrier",null),t([i({json:{write:!0}})],B.prototype,"polylineBarriers",void 0),t([a("polylineBarriers")],B.prototype,"writePolylineBarrier",null),t([i({type:Boolean,json:{write:!0}})],B.prototype,"preserveObjectID",void 0),t([i({type:[String],json:{name:"restrictionAttributeNames",write:!0}})],B.prototype,"restrictionAttributes",void 0),t([p("restrictionAttributes")],B.prototype,"readRestrictionAttributes",null),t([a("restrictionAttributes")],B.prototype,"writeRestrictionAttributes",null),t([n(h)],B.prototype,"restrictUTurns",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"returnFacilities",void 0),t([i({type:Boolean,json:{name:"returnBarriers",write:!0}})],B.prototype,"returnPointBarriers",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"returnPolygonBarriers",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"returnPolylineBarriers",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"splitLinesAtBreaks",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"splitPolygonsAtBreaks",void 0),t([i({json:{write:!0}})],B.prototype,"timeOfDay",void 0),t([p("timeOfDay")],B.prototype,"readTimeOfDay",null),t([a("timeOfDay")],B.prototype,"writeTimeOfDay",null),t([i({type:Boolean,json:{write:!0}})],B.prototype,"timeOfDayIsUTC",void 0),t([n(g)],B.prototype,"travelDirection",void 0),t([i({type:v,json:{write:!0}})],B.prototype,"travelMode",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"trimOuterPolygon",void 0),t([i({type:Number,json:{write:!0}})],B.prototype,"trimPolygonDistance",void 0),t([n(c)],B.prototype,"trimPolygonDistanceUnits",void 0),t([i({type:Boolean,json:{write:!0}})],B.prototype,"useHierarchy",void 0),B=P=t([l("esri.rest.support.ServiceAreaParameters")],B);const b=B;function f(t,e,r){null!=t&&(e[r]=o.isCollection(t)?{features:t.toArray().map((t=>t.toJSON()))}:t.toJSON())}export{b as default};

// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/arrayUtils","./gx/operatorMultiPartToSinglePart","./support/converterAPI"],function(c,g,d,b){c.executeMany=function(e,a={}){({simplifyPolygons:a=!0}=a);a=a?1:2;const h=e.map(b.fromGeometry),f=b.getSpatialReference(e);return d.executeMany(h,b.fromSpatialReference(f),a).map(k=>b.toGeometry(k,f)).filter(g.isSome)};c.supportsCurves=function(){return d.supportsCurves()};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
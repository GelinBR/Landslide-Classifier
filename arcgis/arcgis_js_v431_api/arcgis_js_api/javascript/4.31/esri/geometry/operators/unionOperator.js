// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./gx/operatorUnion","./support/converterAPI"],function(c,d,a){c.execute=function(b,e){const f=a.getSpatialReference(b);return a.toGeometry(d.execute(a.fromGeometry(b),a.fromGeometry(e),a.fromSpatialReference(f)),f)};c.executeMany=function(b){const e=b.map(a.fromGeometry);b=a.getSpatialReference(b);return a.toGeometry(d.executeMany(e,a.fromSpatialReference(b)),b)};c.supportsCurves=function(){return d.supportsCurves()};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
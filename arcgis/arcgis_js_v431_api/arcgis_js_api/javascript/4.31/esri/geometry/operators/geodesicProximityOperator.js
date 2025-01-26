// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/unitUtils","./gx/operatorProximityGeodesic","./support/converterAPI","./support/proximityResult"],function(g,m,h,c,n){g.getNearestCoordinate=function(d,a,b={}){let {calculateLeftRightSide:k=!1,maxDeviation:f=NaN,testPolygonInterior:l=!0,unit:e}=b;e&&f&&(f=m.convertUnit(f,e,"meters"));b=c.getSpatialReference(d);a=h.getNearestCoordinate(c.fromGeometry(d),c.fromPoint(a).getXY(),c.fromSpatialReference(b),f,l,k);e&&a.m_distance&&(a.m_distance=m.convertUnit(a.m_distance,"meters",
e));return n.toProximityResult(a,d,k)};g.getNearestVertex=function(d,a,b={}){({unit:b}=b);const k=c.getSpatialReference(d);a=h.getNearestVertex(c.fromGeometry(d),c.fromPoint(a).getXY(),c.fromSpatialReference(k));b&&a.m_distance&&(a.m_distance=m.convertUnit(a.m_distance,"meters",b));return n.toProximityResult(a,d)};g.getNearestVertices=function(d,a,b,k,f={}){const {unit:l}=f;l&&b&&(b=m.convertUnit(b,l,"meters"));f=c.getSpatialReference(d);return h.getNearestVertices(c.fromGeometry(d),c.fromPoint(a).getXY(),
c.fromSpatialReference(f),b,k).map(e=>{l&&e.m_distance&&(e.m_distance=m.convertUnit(e.m_distance,"meters",l));return n.toProximityResult(e,d)})};g.isLoaded=function(){return h.isLoaded()};g.load=function(){return h.load()};g.supportsCurves=function(){return h.supportsCurves()};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
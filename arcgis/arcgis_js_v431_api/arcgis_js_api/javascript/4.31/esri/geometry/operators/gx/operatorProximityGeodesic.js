// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../../chunks/QuadraticBezier ../../../chunks/Geometry ../../../chunks/Transformation2D ../../../chunks/pe".split(" "),function(l,a,m,p,q,f){function k(){return!!e&&f.isLoaded()}let e;a.getNearestCoordinate=function(b,c,d,g,h,n){return e.getNearestCoordinate(b,c,d,g,h,n)};a.getNearestVertex=function(b,c,d){return e.getNearestVertex(b,c,d)};a.getNearestVertices=function(b,c,d,g,h){return e.getNearestVertices(b,c,d,g,h)};a.isLoaded=k;a.load=async function(){if(!k()){const [b]=
await Promise.all([new Promise((c,d)=>l(["../../../chunks/OperatorProximityGeodesic"],c,d)),f.load()]);e=new b.OperatorProximityGeodesic;m.injectPe$1(f.pe)}};a.supportsCurves=function(){return e.supportsCurves()};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
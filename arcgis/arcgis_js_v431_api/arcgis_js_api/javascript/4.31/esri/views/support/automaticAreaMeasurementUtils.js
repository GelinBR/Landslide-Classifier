// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./euclideanAreaMeasurementUtils","./geodesicAreaMeasurementUtils"],function(d,c,g){function e(b,a,f=c.createEuclideanPlanarAreaCache()){return"on-the-ground"===a?(a=g.geodesicArea(b),null!=a?a:c.euclideanHorizontalPlanarArea(b,f)):c.euclideanPlanarArea(b,f)}d.autoArea2D=function(b,a=c.createEuclideanPlanarAreaCache()){return e(b,"on-the-ground",a)};d.autoAreaByElevationMode=e;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
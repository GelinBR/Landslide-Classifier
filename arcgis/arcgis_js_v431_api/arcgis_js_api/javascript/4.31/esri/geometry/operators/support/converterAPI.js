// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/Transformation2D ../../../chunks/QuadraticBezier ../../../chunks/Geometry ../../../geometry ../../../core/unitUtils ../../support/spatialReferenceUtils ../../Extent ../../Multipoint ../../Point ../../Polygon ../../Polyline".split(" "),function(h,J,l,q,O,t,v,K,L,w,M,N){function x(a){if(!a.getCacheValue("_gxVersion")){const b=new l.Envelope;b.setCoords(a.xmin,a.ymin,a.xmax,a.ymax);a.hasM&&b.setInterval(2,0,a.mmin,a.mmax);a.hasZ&&b.setInterval(1,0,a.zmin,a.zmax);a.setCacheValue("_gxVersion",
b)}return a.getCacheValue("_gxVersion")}function y(a){if(!a.getCacheValue("_gxVersion")){const b=new l.MultiPoint,c=new l.Point,d=a.points,g=a.hasM,e=a.hasZ,k=e?3:2;for(let f=0,n=d.length;f<n;f++){const m=d[f];c.setXYCoords(m[0],m[1]);e&&c.setZ(m[2]??0);g&&c.setM(m[k]??NaN);b.add(c)}a.setCacheValue("_gxVersion",b)}return a.getCacheValue("_gxVersion")}function z(a){if(!a.getCacheValue("_gxVersion")){const b=new l.Point;b.setXYCoords(a.x,a.y);a.hasM&&b.setM(a.m);a.hasZ&&b.setZ(a.z);a.setCacheValue("_gxVersion",
b)}return a.getCacheValue("_gxVersion")}function A(a){if(!a.getCacheValue("_gxVersion")){const b=new l.Polygon;B(b,a);a.setCacheValue("_gxVersion",b)}return a.getCacheValue("_gxVersion")}function C(a){if(!a.getCacheValue("_gxVersion")){const b=new l.Polyline;B(b,a);a.setCacheValue("_gxVersion",b)}return a.getCacheValue("_gxVersion")}function B(a,b){const c="polygon"===b.type,d=new l.Point,g=c?b.rings:b.paths,e=b.hasM,k=(b=b.hasZ)?3:2;for(let f=0,n=g.length;f<n;f++){const m=g[f],u=c?m.length-1:m.length;
for(let p=0;p<u;p++){const r=m[p];d.setXYCoords(r[0],r[1]);b&&d.setZ(r[2]??0);e&&d.setM(r[k]??NaN);0===p?a.startPathPoint(d):a.lineToPoint(d)}}}function D(a,b){if(a.isEmpty())return null;b=new K({xmin:a.getXMin(),ymin:a.getYMin(),xmax:a.getXMax(),ymax:a.getYMax(),spatialReference:b});var c=a.getDescription();if(c.hasM()){const d=a.queryInterval(2,0);b.mmin=d.vmin;b.mmax=d.vmax}c.hasZ()&&(c=a.queryInterval(1,0),b.zmin=c.vmin,b.zmax=c.vmax);b.setCacheValue("_gxVersion",a);return b}function E(a,b){if(a.isEmpty())return null;
var c=a.getDescription();const d=c.hasM();c=c.hasZ();const g=[],e=new l.Point;for(let k=0,f=a.getPointCount();k<f;k++){a.getPointByVal(k,e);const n=[e.getX(),e.getY()];c&&n.push(e.getZ());d&&n.push(e.getM());g.push(n)}b=new L({hasM:d,hasZ:c,points:g,spatialReference:b});b.setCacheValue("_gxVersion",a);return b}function F(a,b){if(a instanceof J.Point2D)return new w({x:a.x,y:a.y,spatialReference:b});if(a.isEmpty())return null;b=new w({x:a.getX(),y:a.getY(),spatialReference:b});const c=a.getDescription();
c.hasM()&&(b.m=a.getM());c.hasZ()&&(b.z=a.getZ());b.setCacheValue("_gxVersion",a);return b}function G(a,b){if(a.isEmpty())return null;b=new M({spatialReference:b});H(b,a);b.setCacheValue("_gxVersion",a);return b}function I(a,b){if(a.isEmpty())return null;b=new N({spatialReference:b});H(b,a);b.setCacheValue("_gxVersion",a);return b}function H(a,b){const c="polygon"===a.type;var d=b.getDescription();const g=d.hasM();d=d.hasZ();const e=[],k=new l.Point;for(let f=0,n=b.getPathCount();f<n;f++){e.push([]);
for(let m=b.getPathStart(f),u=b.getPathEnd(f);m<u;m++){b.getPointByVal(m,k);const p=[k.getX(),k.getY()];d&&p.push(k.getZ());g&&p.push(k.getM());e[f].push(p)}c&&e[f].push(e[f][0].slice())}a.hasM=g;a.hasZ=d;c?a.rings=e:a.paths=e}l.injectNoPe$1(a=>{var b;let c;"number"===typeof a?b=a:c=a;const d={wkid:b,wkt:c};let g;if(c){g=t.isProjectedWKT(c);const e=v.isGeographic(d);if(!g&&!e)throw Error(`Unsupported WKT type: ${c}`);}else g=!v.isGeographic(d);b=b&&t.gradGcsIds.has(b)?Math.PI/200:g?t.getMetersPerUnit(d):
Math.PI/180;return{isPCS:g,metersOrRadiansPerUnit:b,semiMajor:0,wkidOrWkt:a}});h.fromExtent=x;h.fromGeometry=function(a){switch(a.type){case "point":return z(a);case "multipoint":return y(a);case "polyline":return C(a);case "polygon":return A(a);case "extent":return x(a);default:throw Error(`Unsupported geometry type: ${a.type}`);}};h.fromMultipoint=y;h.fromPoint=z;h.fromPolygon=A;h.fromPolyline=C;h.fromSpatialReference=function(a){return a.wkid?l.create$2(a.wkid):(a=a.wkt2||a.wkt)?l.createFromWKT$2(a):
null};h.getSpatialReference=function(a){return Array.isArray(a)?a[0].spatialReference:a.spatialReference};h.toExtent=D;h.toGeometry=function(a,b){if(a)switch(a.getGeometryType()){case q.GeometryType.enumPoint:return F(a,b);case q.GeometryType.enumEnvelope:return D(a,b);case q.GeometryType.enumMultiPoint:return E(a,b);case q.GeometryType.enumPolyline:return I(a,b);case q.GeometryType.enumPolygon:return G(a,b)}return null};h.toMultipoint=E;h.toPoint=F;h.toPolygon=G;h.toPolyline=I;Object.defineProperty(h,
Symbol.toStringTag,{value:"Module"})});
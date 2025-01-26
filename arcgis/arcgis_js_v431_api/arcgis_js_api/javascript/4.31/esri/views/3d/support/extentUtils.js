// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/libs/gl-matrix-2/factories/vec3f64","../../../geometry/projection/projectBuffer"],function(g,h,f){const b=h.create();g.projectToBoundingBox=function(a,c,e){if(null==a||null==e)return!1;let d;b[0]=null!=a.xmin?a.xmin:0;b[1]=null!=a.ymin?a.ymin:0;b[2]=null!=a.zmin?a.zmin:0;d=f.projectBuffer(b,a.spatialReference,0,c,e,0);b[0]=null!=a.xmax?a.xmax:0;b[1]=null!=a.ymax?a.ymax:0;b[2]=null!=a.zmax?a.zmax:0;d=d&&f.projectBuffer(b,a.spatialReference,0,c,e,3);null==a.xmin&&(c[0]=
-Infinity);null==a.ymin&&(c[1]=-Infinity);null==a.zmin&&(c[2]=-Infinity);null==a.xmax&&(c[3]=Infinity);null==a.ymax&&(c[4]=Infinity);null==a.zmax&&(c[5]=Infinity);return d};g.toBoundingRect=function(a,c,e){if(null==a||null==e)return!1;let d;b[0]=null!=a.xmin?a.xmin:0;b[1]=null!=a.ymin?a.ymin:0;b[2]=null!=a.zmin?a.zmin:0;d=f.projectBuffer(b,a.spatialReference,0,b,e,0);c[0]=b[0];c[1]=b[1];b[0]=null!=a.xmax?a.xmax:0;b[1]=null!=a.ymax?a.ymax:0;b[2]=null!=a.zmax?a.zmax:0;d=d&&f.projectBuffer(b,a.spatialReference,
0,b,e,0);c[2]=b[0];c[3]=b[1];null==a.xmin&&(c[0]=-Infinity);null==a.ymin&&(c[1]=-Infinity);null==a.xmax&&(c[2]=Infinity);null==a.ymax&&(c[3]=Infinity);return d};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
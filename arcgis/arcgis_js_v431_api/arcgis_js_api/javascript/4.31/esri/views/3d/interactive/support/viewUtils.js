// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../support/elevationInfoUtils".split(" "),function(e,f,g,n,h,p){const q=h.create(),k=f.createRenderScreenPointArray(),l=f.createRenderScreenPointArray();e.renderScreenSpaceTangent=function(a,c,d,b){d.projectToRenderScreen(a,k);d.projectToRenderScreen(c,l);g.subtract(b,l,k);g.normalize(b,b)};e.vectorToRender=function(a,c,d,b,
m=h.create()){a=n.copy(q,a);a[2]=p.getConvertedElevationFromVector(b,a,c,d)||0;b.renderCoordsHelper.toRenderCoords(a,c,m);return m};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
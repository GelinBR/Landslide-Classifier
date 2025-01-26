// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../graphics/ElevationAligners ./uvUtils ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/ColorMaterial ../../webgl-engine/materials/PatternMaterial ../../webgl-engine/materials/PatternStyle".split(" "),function(c,v,q,r,t,e,h,k,d){function l(a){switch(a){case "horizontal":return d.Style.Horizontal;case "vertical":return d.Style.Vertical;case "cross":return d.Style.Cross;case "forward-diagonal":return d.Style.ForwardDiagonal;
case "backward-diagonal":return d.Style.BackwardDiagonal;case "diagonal-cross":return d.Style.DiagonalCross}}function m(a){return a.material instanceof k.PatternMaterial&&!a.material.parameters.draped}function n(a,b){if(m(a)){const f=a.attributes.get(e.VertexAttribute.POSITION).data,g=a.getMutableAttribute(e.VertexAttribute.UVMAPSPACE).data;a=a.getMutableAttribute(e.VertexAttribute.BOUNDINGRECT).data;t.createMapSpaceUVCoords(g,a,f,b)}}c.createMaterial=function(a,b){a=a?.pattern;if(null==a)return new h.ColorMaterial(b);
if("none"===a.style||"solid"===a.style)return"none"===a.style&&(b.color=q.fromValues(0,0,0,0),b.forceTransparentMode=!0),new h.ColorMaterial(b);b.style=l(a.style);return new k.PatternMaterial(b)};c.parsePatternStyle=l;c.requiresUVUpdates=m;c.updateMapSpaceUVCoords=n;c.uvElevationAligner=function(a,b,f,g,p){b=r.perVertexElevationAligner(a,b,f,g,p);a=a.stageObject.geometries;for(const u of a)n(u,p);return b};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
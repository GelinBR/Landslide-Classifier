// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../core/libs/gl-matrix-2/factories/vec3f64 ../MeshGeoreferencedVertexSpace ../MeshLocalVertexSpace ./geographicUtils ./vertexSpaceConversion".split(" "),function(h,f,e,k,l,g){h.georeference=function(b,a,c){if(l.isGlobal(a.spatialReference,c?.geographic)){var d=f.fromValues(a.x,a.y,a.z??0);b=g.convertVertexSpace({vertexAttributes:b,vertexSpace:new k({origin:d}),spatialReference:a.spatialReference},new e({origin:null}),{sourceUnit:c?.unit})}else d=f.fromValues(a.x,a.y,a.z??0),
b=g.convertVertexSpace({vertexAttributes:b,vertexSpace:new e({origin:d}),spatialReference:a.spatialReference},e.absolute,{sourceUnit:c?.unit});return b};h.ungeoreference=function(b,a,c){if(l.isGlobal(a.spatialReference,c?.geographic)){var d=f.fromValues(a.x,a.y,a.z??0);b=g.convertVertexSpace({vertexAttributes:b,spatialReference:a.spatialReference,vertexSpace:e.absolute},new k({origin:d}),{targetUnit:c?.unit})}else d=f.fromValues(a.x,a.y,a.z??0),b=g.convertVertexSpace({vertexAttributes:b,vertexSpace:e.absolute,
spatialReference:a.spatialReference},new e({origin:d}),{targetUnit:c?.unit});return b};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
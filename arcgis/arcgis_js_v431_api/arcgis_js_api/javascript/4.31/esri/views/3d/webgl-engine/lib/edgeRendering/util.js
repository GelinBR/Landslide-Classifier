// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./interfaces","../../shaders/sources/edgeRenderer/EdgeUtil.glsl"],function(f,d,h){f.determineEdgeTransparency=function(b){let c=d.Transparency.TRANSPARENT;for(const {material:a}of b)if(0<a.size*a.color[3]*a.opacity){if(1>a.color[3]*a.opacity)return d.Transparency.TRANSPARENT;c=d.Transparency.OPAQUE}return c};f.determineObjectTransparency=function(b){let c=d.Transparency.TRANSPARENT;for(const {material:a}of b)if(0<a.size*a.color[3]*a.opacity){switch(a.objectTransparency){case d.Transparency.TRANSPARENT:return d.Transparency.TRANSPARENT;
case d.Transparency.OPAQUE:if(1>a.opacity)return d.Transparency.TRANSPARENT}c=d.Transparency.OPAQUE}return c};f.determineRendererType=function(b){if(!Array.isArray(b))return 0<b.size*b.color[3]?b.type:h.EdgeType.Mixed;let c;for(const a of b)if(b=a.type,0<a.size*a.color[3])if(null==c)c=b;else if(c!==b)return h.EdgeType.Mixed;return c??h.EdgeType.Mixed};f.fillComponentBufferIndices=function(b,c,a,k){for(let g=0;g<b.length;g++){const l=b[g].index;var e=c[g];const m=c[g+1];if(k)for(;e<m;e++)a.set(k[e],
l);else for(;e<m;e++)a.set(e,l)}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
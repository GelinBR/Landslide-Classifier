// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../core/shaderLibrary/ShaderOutput ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/StencilUtils ../../../../chunks/PointRenderer.glsl ../../../webgl/enums ../../../webgl/renderState".split(" "),function(f,c,g,h,k,d,l,e,b){class m extends k.ShaderTechnique{constructor(a,n,p){super(a,n,new h.ReloadableShaderModule(l.PointRenderer,()=>new Promise((q,r)=>f(["./PointRenderer.glsl"],q,r))),p)}initializePipeline(a){return b.makePipelineState({depthTest:{func:e.CompareFunction.LESS},
depthWrite:b.defaultDepthWrite,colorWrite:b.defaultColorWrite,stencilWrite:a.hasOccludees?d.stencilWriteMaskOn:null,stencilTest:a.hasOccludees?d.stencilBaseAllZerosParams:null,drawBuffers:a.output===g.ShaderOutput.Depth?{buffers:[e.SpecialDrawBuffers.NONE]}:null})}}c.PointRendererTechnique=m;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
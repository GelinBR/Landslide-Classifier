// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../core/shaderModules/interfaces ../../core/shaderTechnique/ReloadableShaderModule ../../core/shaderTechnique/ShaderTechnique ../../../../../chunks/Stars.glsl ../../../../webgl/enums ../../../../webgl/renderState".split(" "),function(c,a,d,e,f,g,h,k,b){class l extends e.NoParameters{constructor(){super(...arguments);this.modelMatrix=d.create()}}class m extends g.ShaderTechnique{constructor(n,p,q){super(n,p,new f.ReloadableShaderModule(h.Stars,
()=>new Promise((r,t)=>c(["./Stars.glsl"],r,t))),q)}initializePipeline(){return b.makePipelineState({blending:b.premultipliedAlphaToPremultipliedAlpha,depthTest:{func:k.CompareFunction.LEQUAL},colorWrite:b.defaultColorWrite})}}a.StarPassParameters=l;a.StarsTechnique=m;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
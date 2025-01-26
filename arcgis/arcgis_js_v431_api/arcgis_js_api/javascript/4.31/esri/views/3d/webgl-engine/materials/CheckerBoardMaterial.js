// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../core/shaderLibrary/ShaderOutput ../core/shaderLibrary/util/AlphaCutoff ../lib/GLMaterial ../lib/Material ../lib/RenderSlot ./DefaultBufferWriter ./DefaultLayouts ./TriangleMaterial ../shaders/CheckerBoardTechnique ../shaders/CheckerBoardTechniqueConfiguration".split(" "),function(c,k,f,d,g,l,m,e,n,p,q,r,t){class u extends q.TriangleMaterial{constructor(b){super(b,h);this._configuration=
new t.CheckerBoardTechniqueConfiguration;this.produces=new Map([[e.RenderSlot.OPAQUE_MATERIAL,a=>d.isColor(a)&&!this.transparent],[e.RenderSlot.TRANSPARENT_MATERIAL,a=>d.isColor(a)&&this.transparent&&this.parameters.writeDepth],[e.RenderSlot.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,a=>d.isColor(a)&&this.transparent&&!this.parameters.writeDepth]])}getConfiguration(b,a){this._configuration.transparent=this.transparent;this._configuration.writeDepth=this.parameters.writeDepth;this._configuration.polygonOffset=
this.parameters.polygonOffset;this._configuration.oitPass=a.oitPass;this._configuration.terrainDepthTest=a.terrainDepthTest;this._configuration.cullAboveTerrain=a.cullAboveTerrain;return this._configuration}get visible(){return this.parameters.color1[3]>=g.alphaCutoff||this.parameters.color2[3]>=g.alphaCutoff}get transparent(){return 1>this.parameters.color1[3]||1>this.parameters.color2[3]}createGLMaterial(b){return new v(b)}createBufferWriter(){return new n.DefaultBufferWriter(p.PositionUVLayout)}}
class v extends l{beginSlot(b){return this.acquireTechnique(r.CheckerBoardTechnique,b)}}class h extends m.MaterialParameters{constructor(){super(...arguments);this.size=k.fromValues(1,1);this.color1=f.fromValues(.75,.75,.75,1);this.color2=f.fromValues(.5,.5,.5,1);this.writeDepth=!0;this.polygonOffset=!1}}c.CheckerBoardMaterial=u;c.Parameters=h;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
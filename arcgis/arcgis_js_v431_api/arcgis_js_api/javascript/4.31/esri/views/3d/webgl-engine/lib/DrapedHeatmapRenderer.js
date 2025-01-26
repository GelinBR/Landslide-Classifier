// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/maybe ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../effects/RenderPlugin ./glUtil3D ./SortedRenderGeometryRenderer ../shaders/HeatmapTechnique ../shaders/HeatmapTechniqueConfiguration ../../../webgl/enums ../../../webgl/FramebufferObject ../../../webgl/Texture ../../../webgl/TextureDescriptor ../../../webgl/Util".split(" "),
function(c,d,l,u,e,D,E,F,v,w,x,y,m,z,k,A,B,p,C){c.DrapedHeatmapRenderer=class extends y.SortedRenderGeometryRenderer{constructor(a){super(a);this.pixelRatio=1;this._colorRampData=new Uint8ClampedArray(4);this.type="draped-heatmap";this._heatmapParameters=new m.HeatmapPassParameters;this._configuration=new z.HeatmapTechniqueConfiguration;const b=new p.TextureDescriptor;b.pixelFormat=a.pixelFormat;b.internalFormat=a.internalFormat;b.dataType=a.dataType;b.samplingMode=a.samplingMode;b.wrapMode=k.TextureWrapMode.CLAMP_TO_EDGE;
const f=a.rendererContext.rctx;this._densityMap=new A.FramebufferObject(f,b);this._quad=x.createQuadVAO(f);this._configuration.usesHalfFloat=a.dataType!==k.PixelType.FLOAT;a.rendererContext.pluginContext.techniques.precompile(m.HeatmapTechnique,this._configuration)}initialize(){const a=this._colorRampData,b=new p.TextureDescriptor(a.length/4,1);b.wrapMode=k.TextureWrapMode.CLAMP_TO_EDGE;this._colorRamp=new B.Texture(this.rctx,b,a);this._heatmapParameters.densityMap=this._densityMap.colorTexture;this.addHandles(u.watch(()=>
[this.colorRampData,this.minDensity,this.maxDensity,this.fieldTotal,this.pixelRatio,this.searchRadius],()=>this.rendererContext.notifyContentChanged()))}destroy(){this._densityMap=l.disposeMaybe(this._densityMap);this._quad=l.disposeMaybe(this._quad);this._colorRamp=l.disposeMaybe(this._colorRamp)}get searchRadius(){return this._heatmapParameters.searchRadius}set searchRadius(a){a!==this._heatmapParameters.searchRadius&&(this._heatmapParameters.searchRadius=a,this.notifyChange("searchRadius"))}get minDensity(){return this._heatmapParameters.minDensity}set minDensity(a){a!==
this._heatmapParameters.minDensity&&(this._heatmapParameters.minDensity=a,this.notifyChange("minDensity"))}get maxDensity(){return this._heatmapParameters.maxDensity}set maxDensity(a){a!==this._heatmapParameters.maxDensity&&(this._heatmapParameters.maxDensity=a,this.notifyChange("maxDensity"))}get fieldTotal(){return this._heatmapParameters.fieldTotal}set fieldTotal(a){this._heatmapParameters.fieldTotal=a;this.notifyChange("fieldTotal")}get colorRampData(){return this._colorRampData}set colorRampData(a){const {colorRamp:b}=
this._heatmapParameters;if(null!=b&&a!==this._colorRampData){const f=a.length/4;f!==b.descriptor.width&&b.resize(f,1);b.setData(a)}this._colorRampData=a}get _colorRamp(){return this._heatmapParameters.colorRamp}set _colorRamp(a){this._heatmapParameters.colorRamp=a}get hasHighlights(){return!1}get hasWater(){return!1}get rendersOccludedDraped(){return!1}render(a){var b=this.sortedRenderers;if(0!==b.length){var f=this.rctx.getBoundFramebufferObject(),g=this.rctx.getViewport(),{pixelRatio:h}=this,q=
Math.ceil(g.width*h);h=Math.ceil(g.height*h);this._densityMap.resize(q,h);this.rctx.bindFramebuffer(this._densityMap);this.rctx.setViewport(0,0,q,h);this.rctx.clear(k.FramebufferBit.COLOR);var r=!1;b.forAll(t=>{const n=t.acquireTechniques(a);n&&(t.render(a,n),w.releaseTechniques(n),r=!0)});this.rctx.bindFramebuffer(f);this.rctx.setViewport(g.x,g.y,g.width,g.height);r&&(this.rctx.bindVAO(this._quad),b=this.rendererContext.pluginContext.techniques.acquire(m.HeatmapTechnique,this._configuration),this.rctx.bindTechnique(b,
a.bind,this._heatmapParameters),this.rctx.drawArrays(b.primitiveType,0,C.vertexCount(this._quad,"geometry")),b.release())}}};d.__decorate([e.property()],c.DrapedHeatmapRenderer.prototype,"searchRadius",null);d.__decorate([e.property()],c.DrapedHeatmapRenderer.prototype,"minDensity",null);d.__decorate([e.property()],c.DrapedHeatmapRenderer.prototype,"maxDensity",null);d.__decorate([e.property()],c.DrapedHeatmapRenderer.prototype,"fieldTotal",null);d.__decorate([e.property()],c.DrapedHeatmapRenderer.prototype,
"pixelRatio",void 0);d.__decorate([e.property()],c.DrapedHeatmapRenderer.prototype,"colorRampData",null);d.__decorate([e.property({constructOnly:!0})],c.DrapedHeatmapRenderer.prototype,"dataType",void 0);d.__decorate([e.property({constructOnly:!0})],c.DrapedHeatmapRenderer.prototype,"samplingMode",void 0);d.__decorate([e.property({constructOnly:!0})],c.DrapedHeatmapRenderer.prototype,"pixelFormat",void 0);d.__decorate([e.property({constructOnly:!0})],c.DrapedHeatmapRenderer.prototype,"internalFormat",
void 0);d.__decorate([e.property()],c.DrapedHeatmapRenderer.prototype,"_colorRampData",void 0);c.DrapedHeatmapRenderer=d.__decorate([v.subclass("esri.views.3d.webgl-engine.lib.DrapedHeatmapRenderer")],c.DrapedHeatmapRenderer);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
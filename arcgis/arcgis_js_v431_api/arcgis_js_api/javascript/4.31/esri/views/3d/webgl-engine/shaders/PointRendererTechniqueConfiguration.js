// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/tslib.es6","../core/shaderTechnique/ShaderTechniqueConfiguration","../materials/DefaultTechniqueConfiguration"],function(d,b,c,e){class a extends e.DefaultTechniqueConfiguration{constructor(){super(...arguments);this.clippingEnabled=this.hasOccludees=this.useFixedSizes=this.drawScreenSize=this.hasSlicePlane=!1;this.hasSliceInVertexProgram=!0}}b.__decorate([c.parameter()],a.prototype,"hasSlicePlane",void 0);b.__decorate([c.parameter()],a.prototype,"drawScreenSize",
void 0);b.__decorate([c.parameter()],a.prototype,"useFixedSizes",void 0);b.__decorate([c.parameter()],a.prototype,"hasOccludees",void 0);b.__decorate([c.parameter()],a.prototype,"clippingEnabled",void 0);d.PointRendererTechniqueConfiguration=a;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
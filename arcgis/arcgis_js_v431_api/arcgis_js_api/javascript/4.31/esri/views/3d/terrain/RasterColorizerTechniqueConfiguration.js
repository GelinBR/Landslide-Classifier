// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/tslib.es6","../../2d/engine/imagery/enums","./TileBlendTechniqueConfiguration","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration"],function(e,b,c,f,d){class a extends f.TileBlendTechniqueConfiguration{constructor(){super(...arguments);this.colorizerType=c.RasterColorizerType.Stretch;this.stretchType=c.RasterColorizerStretchType.Noop;this.applyColormap=!0;this.requireBilinearWithNN=!1}}b.__decorate([d.parameter({count:c.RasterColorizerType.COUNT})],
a.prototype,"colorizerType",void 0);b.__decorate([d.parameter({count:c.RasterColorizerStretchType.COUNT})],a.prototype,"stretchType",void 0);b.__decorate([d.parameter()],a.prototype,"applyColormap",void 0);b.__decorate([d.parameter()],a.prototype,"requireBilinearWithNN",void 0);e.RasterColorizerTechniqueConfiguration=a;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
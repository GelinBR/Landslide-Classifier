// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../chunks/tslib.es6","../core/shaderTechnique/ShaderTechniqueConfiguration"],function(a,e,c){a.ShadowCastVisualization=void 0;(function(b){b[b.Gradient=0]="Gradient";b[b.Threshold=1]="Threshold";b[b.COUNT=2]="COUNT"})(a.ShadowCastVisualization||(a.ShadowCastVisualization={}));class d extends c.ShaderTechniqueConfiguration{constructor(){super(...arguments);this.visualization=a.ShadowCastVisualization.Gradient;this.bandsEnabled=!1}}e.__decorate([c.parameter({count:a.ShadowCastVisualization.COUNT})],
d.prototype,"visualization",void 0);e.__decorate([c.parameter()],d.prototype,"bandsEnabled",void 0);a.ShadowCastVisualizeTechniqueConfiguration=d;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
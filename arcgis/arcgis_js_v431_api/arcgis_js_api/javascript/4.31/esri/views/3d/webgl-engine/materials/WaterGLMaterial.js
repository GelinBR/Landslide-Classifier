// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../lib/GLMaterial","./WaterTechnique"],function(b,d,e){class f extends d{ensureResources(a){return this._techniques.context.waterTextures.ensureResources(a)}beginSlot(a){const c=this._techniques.context.waterTextures.passParameters;this._material.setParameters({wavePerturbation:c.wavePerturbation,waveNormal:c.waveNormal});return this.acquireTechnique(e.WaterTechnique,a)}}b.WaterGLMaterial=f;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
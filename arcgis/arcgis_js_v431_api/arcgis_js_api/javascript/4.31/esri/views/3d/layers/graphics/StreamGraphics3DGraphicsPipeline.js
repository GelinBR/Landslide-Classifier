// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../layers/graphics/controllers/StreamController ./Graphics3DGraphicsPipeline".split(" "),function(a,b,c,h,k,l,d,e,f){a.StreamGraphics3DGraphicsPipeline=class extends f.Graphics3DGraphicsPipeline{constructor(g){super(g);this.suspendResumeExtentMode="computed"}get connection(){return this.controller?.connection}createController(){return new e.StreamController({layer:this.layer,
layerView:this.layerView})}beforeSetController(){}pause(){this.controller?.pauseStream()}resume(){this.controller?.resumeStream()}disconnect(){this.controller?.disconnect()}connect(){this.controller?.connect()}clear(){this.controller?.clearGraphics()}};b.__decorate([c.property()],a.StreamGraphics3DGraphicsPipeline.prototype,"controller",void 0);b.__decorate([c.property()],a.StreamGraphics3DGraphicsPipeline.prototype,"connection",null);b.__decorate([c.property()],a.StreamGraphics3DGraphicsPipeline.prototype,
"suspendResumeExtentMode",void 0);a.StreamGraphics3DGraphicsPipeline=b.__decorate([d.subclass("esri.views.3d.layers.graphics.StreamGraphics3DGraphicsPipeline")],a.StreamGraphics3DGraphicsPipeline);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
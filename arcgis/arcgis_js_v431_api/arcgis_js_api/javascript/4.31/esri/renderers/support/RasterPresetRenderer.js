// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../rasterRenderers ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass".split(" "),function(b,e,a,f,c,g,l,m,h,k){a=class extends a.ClonableMixin(f.JSONSupport){constructor(d){super(d);this.name=void 0;this.method="none";this.renderer=this.bandIds=this.value=
void 0}};b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({type:["raster-function-template","variable","none"],json:{write:!0}}),h.enumeration({rasterFunctionTemplate:"raster-function-template",variable:"variable",none:"none"})],a.prototype,"method",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"value",void 0);b.__decorate([c.property({type:[g.Integer],json:{write:!0}})],a.prototype,"bandIds",void 0);b.__decorate([c.property({types:e.rasterRendererTypes,
json:{write:!0,origins:{"web-scene":{types:e.websceneRasterRendererTypes,write:{overridePolicy(d){return{enabled:d&&"vector-field"!==d.type&&"flow"!==d.type}}}}}}})],a.prototype,"renderer",void 0);return a=b.__decorate([k.subclass("esri.renderers.support.RasterPresetRenderer")],a)});
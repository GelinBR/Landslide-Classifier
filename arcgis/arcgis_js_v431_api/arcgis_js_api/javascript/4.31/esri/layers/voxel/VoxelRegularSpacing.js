// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,e,f,g,d){a=class extends a.JSONSupport{constructor(){super(...arguments);this.scale=1;this.offset=0}};b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"scale",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"offset",void 0);
return a=b.__decorate([d.subclass("esri.layers.voxel.VoxelRegularSpacing")],a)});
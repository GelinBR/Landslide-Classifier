// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ./BaseFunctionArguments".split(" "),function(b,f,d,a,n,g,h,k){var e;a=e=class extends k{constructor(){super(...arguments);this.rasters=[];this.processAsMultiband=!0}writeRasters(l,m){m.rasters=l.map(c=>"number"===typeof c||"string"===typeof c?c:c.toJSON())}clone(){return new e({operation:this.operation,
processAsMultiband:this.processAsMultiband,rasters:f.clone(this.rasters)})}};b.__decorate([d.property({json:{write:!0}})],a.prototype,"operation",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"rasters",void 0);b.__decorate([h.writer("rasters")],a.prototype,"writeRasters",null);b.__decorate([d.property({json:{write:!0}})],a.prototype,"processAsMultiband",void 0);return a=e=b.__decorate([g.subclass("esri.layers.support.rasterFunctions.LocalFunctionArguments")],a)});
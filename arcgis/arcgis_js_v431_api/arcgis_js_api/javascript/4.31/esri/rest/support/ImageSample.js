// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../geometry/Point".split(" "),function(b,a,c,f,g,h,d,e){a=class extends a.JSONSupport{constructor(){super(...arguments);this.pixelValue=this.resolution=this.rasterId=this.locationId=this.location=this.attributes=null}};b.__decorate([c.property({json:{write:!0}})],a.prototype,"attributes",void 0);
b.__decorate([c.property({type:e,json:{write:!0}})],a.prototype,"location",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"locationId",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"rasterId",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"resolution",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"pixelValue",void 0);return a=b.__decorate([d.subclass("esri.rest.support.ImageSample")],a)});
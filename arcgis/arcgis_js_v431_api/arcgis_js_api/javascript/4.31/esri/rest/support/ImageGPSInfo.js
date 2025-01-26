// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/Point".split(" "),function(b,a,c,k,l,m,d,e,f){a=class extends a.JSONSupport{constructor(){super(...arguments);this.orientation=this.gps=this.center=this.cameraID=this.acquisitionDate=this.name=this.id=null}writeAcquisitionDate(g,h){h.acquisitionDate=
g?.getTime()}};b.__decorate([c.property({json:{write:!0}})],a.prototype,"id",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({type:Date,json:{write:!0}})],a.prototype,"acquisitionDate",void 0);b.__decorate([e.writer("acquisitionDate")],a.prototype,"writeAcquisitionDate",null);b.__decorate([c.property({json:{write:!0}})],a.prototype,"cameraID",void 0);b.__decorate([c.property({type:f,json:{write:!0}})],a.prototype,"center",void 0);b.__decorate([c.property({json:{write:!0}})],
a.prototype,"gps",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"orientation",void 0);return a=b.__decorate([d.subclass("esri.rest.support.ImageGPSInfo")],a)});
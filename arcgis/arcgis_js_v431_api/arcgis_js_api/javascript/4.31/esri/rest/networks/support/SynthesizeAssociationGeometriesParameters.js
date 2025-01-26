// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ../../../geometry/Extent ../../../geometry/SpatialReference".split(" "),function(b,a,c,g,u,v,h,k,l,m){var e;a=e=class extends a.JSONSupport{static from(d){return g.ensureClass(e,d)}constructor(d){super(d);this.returnContainmentAssociations=
this.returnConnectivityAssociations=this.returnAttachmentAssociations=!1;this.moment=this.gdbVersion=this.outSpatialReference=this.maxGeometryCount=this.extent=null}writeOutSR(d,f,n){if(null!=d){const {wkid:p,latestWkid:q,wkt:r,wkt2:t}=d;f[n]=JSON.stringify({wkid:p??void 0,latestWkid:q??void 0,wkt:r??void 0,wkt2:t??void 0})}}};b.__decorate([c.property({type:Boolean,json:{read:{source:"attachmentAssociations"},write:{target:"attachmentAssociations"}}})],a.prototype,"returnAttachmentAssociations",void 0);
b.__decorate([c.property({type:Boolean,json:{read:{source:"connectivityAssociations"},write:{target:"connectivityAssociations"}}})],a.prototype,"returnConnectivityAssociations",void 0);b.__decorate([c.property({type:Boolean,json:{read:{source:"containmentAssociations"},write:{target:"containmentAssociations"}}})],a.prototype,"returnContainmentAssociations",void 0);b.__decorate([c.property({type:l,json:{write:!0}})],a.prototype,"extent",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],
a.prototype,"maxGeometryCount",void 0);b.__decorate([c.property({type:m,json:{write:{target:"outSR"}}})],a.prototype,"outSpatialReference",void 0);b.__decorate([k.writer("outSpatialReference")],a.prototype,"writeOutSR",null);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0);b.__decorate([c.property({type:Date,json:{type:Number,write:{writer:(d,f)=>{f.moment=d?.getTime()}}}})],a.prototype,"moment",void 0);return a=e=b.__decorate([h.subclass("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")],
a)});
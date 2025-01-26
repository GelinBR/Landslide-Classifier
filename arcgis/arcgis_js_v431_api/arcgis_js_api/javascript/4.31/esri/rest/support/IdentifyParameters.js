// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils ../../time/TimeExtent ../../geometry/Extent ../../geometry/SpatialReference".split(" "),function(b,f,a,c,g,r,t,h,k,l,m,n,p){var e;a=e=class extends a.JSONSupport{static from(d){return g.ensureClass(e,
d)}constructor(d){super(d);this.dpi=96;this.geometryPrecision=this.geometry=this.gdbVersion=this.floors=null;this.height=400;this.layerIds=this.historicMoment=null;this.layerOption="top";this.maxAllowableOffset=this.mapExtent=null;this.returnFieldName=!0;this.returnM=this.returnGeometry=!1;this.returnUnformattedValues=!0;this.returnZ=!1;this.tolerance=this.timeExtent=this.sublayers=this.spatialReference=null;this.width=400}writeHistoricMoment(d,q){q.historicMoment=d&&d.getTime()}};b.__decorate([c.property({type:Number,
json:{write:!0}})],a.prototype,"dpi",void 0);b.__decorate([c.property()],a.prototype,"floors",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0);b.__decorate([c.property({types:f.geometryTypes,json:{read:l.fromJSON,write:!0}})],a.prototype,"geometry",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecision",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"height",void 0);b.__decorate([c.property({type:Date})],
a.prototype,"historicMoment",void 0);b.__decorate([k.writer("historicMoment")],a.prototype,"writeHistoricMoment",null);b.__decorate([c.property({type:[Number],json:{write:!0}})],a.prototype,"layerIds",void 0);b.__decorate([c.property({type:["top","visible","all","popup"],json:{write:!0}})],a.prototype,"layerOption",void 0);b.__decorate([c.property({type:n,json:{write:!0}})],a.prototype,"mapExtent",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"maxAllowableOffset",void 0);
b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnFieldName",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnGeometry",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnM",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnUnformattedValues",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnZ",void 0);b.__decorate([c.property({type:p,
json:{write:!0}})],a.prototype,"spatialReference",void 0);b.__decorate([c.property()],a.prototype,"sublayers",void 0);b.__decorate([c.property({type:m,json:{write:!0}})],a.prototype,"timeExtent",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"tolerance",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"width",void 0);return a=e=b.__decorate([h.subclass("esri.rest.support.IdentifyParameters")],a)});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,c,g,h,k,e){var d;a=d=class extends a.JSONSupport{constructor(f){super(f);this.orderByFields=this.topCount=this.groupByFields=void 0}clone(){return new d({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};b.__decorate([c.property({type:[String],
json:{write:!0}})],a.prototype,"groupByFields",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"topCount",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"orderByFields",void 0);return a=d=b.__decorate([e.subclass("esri.rest.support.TopFilter")],a)});
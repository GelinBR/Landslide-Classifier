// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(c,b,a,d,h,k,l,f){var e;b=new b.JSONMap({asc:"ascending",desc:"descending"});a=e=class extends a.JSONSupport{constructor(g){super(g);this.valueExpression=this.field=null;this.order="ascending"}clone(){return new e({field:this.field,valueExpression:this.valueExpression,
order:this.order})}};c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);c.__decorate([d.property({type:String,json:{write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],a.prototype,"valueExpression",void 0);c.__decorate([d.property({type:b.apiValues,json:{type:b.jsonValues,read:b.read,write:b.write}})],a.prototype,"order",void 0);return a=e=c.__decorate([f.subclass("esri.layers.support.OrderByInfo")],a)});
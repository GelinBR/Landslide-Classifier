// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./mixins/ChartMediaInfo ./support/chartMediaInfoUtils".split(" "),function(c,d,a,k,l,e,f,g){var b;a=b=class extends f{constructor(h){super(h);this.type="column-chart"}clone(){return new b({altText:this.altText,title:this.title,caption:this.caption,value:this.value?.clone()})}};c.__decorate([d.property({type:["column-chart"],
readOnly:!0,json:{type:["columnchart"],read:!1,write:g.chartTypeKebabDict.write}})],a.prototype,"type",void 0);return a=b=c.__decorate([e.subclass("esri.popup.content.ColumnChartMediaInfo")],a)});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./StatisticsHistogramFunctionArguments".split(" "),function(c,d,a,l,m,g,h,k){a=class extends h{constructor(){super(...arguments);this.functionName="StatisticsHistogram";this.functionArguments=null;this.rasterArgumentNames=["raster"];this.isNoopProcess=!0}_bindSourceRasters(){var b=this.sourceRasterInfos[0];
this.outputPixelType=this._getOutputPixelType("u8");b=b.clone();const {statistics:e,histograms:f}=this.functionArguments;f&&(b.histograms=f);e&&(b.statistics=e);this.rasterInfo=b;return{success:!0,supportsGPU:!0}}_processPixels(b){return b.pixelBlocks?.[0]}};c.__decorate([d.property({json:{write:!0,name:"rasterFunction"}})],a.prototype,"functionName",void 0);c.__decorate([d.property({type:k,json:{write:!0,name:"rasterFunctionArguments"}})],a.prototype,"functionArguments",void 0);c.__decorate([d.property()],
a.prototype,"rasterArgumentNames",void 0);c.__decorate([d.property({json:{write:!0}})],a.prototype,"indexedColormap",void 0);c.__decorate([d.property()],a.prototype,"isNoopProcess",void 0);return a=c.__decorate([g.subclass("esri.layers.support.rasterFunctions.StatisticsHistogramFunction")],a)});
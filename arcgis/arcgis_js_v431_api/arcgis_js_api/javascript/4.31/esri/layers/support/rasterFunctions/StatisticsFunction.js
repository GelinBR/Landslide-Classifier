// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../rasterFormats/pixelRangeUtils ./BaseRasterFunction ./focalStatUtils ./StatisticsFunctionArguments".split(" "),function(e,f,c,q,r,h,k,l,m,n){c=class extends l{constructor(){super(...arguments);this.functionName="Statistics";this.rasterArgumentNames=["raster"]}_bindSourceRasters(){const {type:a}=this.functionArguments.toJSON();
if(1>a||7<a)return{success:!1,supportsGPU:!1,error:`statistics-function: the given statistics type is not supported ${a}`};var b=this.sourceRasterInfos[0];this.outputPixelType=this._getOutputPixelType(b.pixelType);b=b.clone();b.pixelType=this.outputPixelType;const {statisticsType:d}=this.functionArguments;"stddev"===d&&this._removeStatsHistColormapVAT(b);this.rasterInfo=b;return{success:!0,supportsGPU:3>=b.bandCount&&5>a}}_processPixels(a){a=a.pixelBlocks?.[0];if(null==a)return a;const {statisticsType:b,
rows:d,cols:g,fillNoDataOnly:p}=this.functionArguments;return m.computeFocalStatistics(a,{kernelRows:d,kernelCols:g,fillNoDataOnly:p,outputPixelType:this.outputPixelType,statisticsType:b,mirrorEdges:!0})}_getWebGLParameters(){const {rows:a,cols:b,statisticsType:d,fillNoDataOnly:g}=this.functionArguments;return{fillNoDataOnly:g,kernelRows:a,kernelCols:b,statisticsType:d,clampRange:k.getPixelValueRange(this.outputPixelType)}}};e.__decorate([f.property({json:{write:!0,name:"rasterFunction"}})],c.prototype,
"functionName",void 0);e.__decorate([f.property({type:n,json:{write:!0,name:"rasterFunctionArguments"}})],c.prototype,"functionArguments",void 0);e.__decorate([f.property()],c.prototype,"rasterArgumentNames",void 0);return c=e.__decorate([h.subclass("esri.layers.support.rasterFunctions.StatisticsFunction")],c)});
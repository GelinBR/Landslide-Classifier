// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./BaseRasterFunction ./TableFunctionArguments".split(" "),function(c,d,b,k,l,e,f,g){b=class extends f{constructor(){super(...arguments);this.functionName="Table";this.functionArguments=null;this.rasterArgumentNames=["raster"];this.isNoopProcess=!0}_bindSourceRasters(){var a=this.sourceRasterInfos[0];if(1<
a.bandCount||a.pixelType.startsWith("f"))return{success:!1,supportsGPU:!1,error:"table-function: Source data must be single band and integer pixel type."};const {attributeTableAsRecordSet:h}=this.functionArguments;if(!h)return{success:!1,supportsGPU:!1,error:"table-function: Missing attributeTableAsRecordSet argument."};this.outputPixelType=this._getOutputPixelType(a.pixelType);a=a.clone();a.pixelType=this.outputPixelType;a.bandCount=1;"thematic"!==a.dataType&&(a.keyProperties=a.keyProperties?{...a.keyProperties,
DataType:"thematic"}:{DataType:"thematic"});this.rasterInfo=a;return{success:!0,supportsGPU:!0}}_processPixels(a){return a.pixelBlocks?.[0]}};c.__decorate([d.property({json:{write:!0,name:"rasterFunction"}})],b.prototype,"functionName",void 0);c.__decorate([d.property({type:g,json:{write:!0,name:"rasterFunctionArguments"}})],b.prototype,"functionArguments",void 0);c.__decorate([d.property()],b.prototype,"rasterArgumentNames",void 0);c.__decorate([d.property()],b.prototype,"isNoopProcess",void 0);
return b=c.__decorate([e.subclass("esri.layers.support.rasterFunctions.TableFunction")],b)});
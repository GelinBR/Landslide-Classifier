// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/subclass ../PixelBlock ../RasterInfo".split(" "),function(g,f,h,m,u,v,n,p,q){const r=new Set("slope aspect curvature hillshade shadedrelief statistics".split(" "));f=class extends f.JSONSupport{constructor(){super(...arguments);this.functionArguments=null;this.readingBufferSize=
0;this.id=-1;this.isNoopProcess=!1;this.rawInputBandIds=[];this.rawSourceRasterInfos=null;this.isInputBandIdsSwizzled=!1;this.swizzledBandSelection=[];this.isBranch=!1;this._bindingResult=null}get supportsGPU(){return this._bindingResult.supportsGPU}get flatWebGLFunctionChain(){var a=this.getWebGLProcessorDefinition();if(!a)return null;const c=[a];({parameters:a}=a);for(a=a.rasters||a.raster&&[a.raster];a?.length;){c.unshift(...a);var b=[];for(var d=0;d<a.length;d++){var {parameters:e}=a[d];e=e.rasters||
e.raster&&[e.raster];e?.length&&b.push(...e)}a=b}for(a=c.length-1;0<=a;a--)c[a].isNoopProcess&&c.splice(a,1);a=!1;for(b=0;b<c.length;b++)d=c[b],d.id=c.length-b-1,{rasters:d}=d.parameters,a=a||null!=d&&1<d.length;b=c.some(({name:k})=>r.has(k.toLowerCase()));({rawSourceRasterInfos:d}=this);return{functions:c,hasBranches:a,hasFocalFunction:b,isSourceSingleBand:1===d?.[0]?.bandCount}}bind(a,c=!1,b=-1){this.id=b+1;b=this._getRasterValues();let d=!0;for(let k=0;k<b.length;k++){var e=b[k];if(null!=e&&this._isRasterFunctionValue(e)){e=
e.bind(a,c,this.id+k);if(!e.success)return this._bindingResult=e;d=d&&e.supportsGPU}}if(!this.rasterInfo||c)return this.sourceRasterInfos=this._getSourceRasterInfos(a),this._bindingResult=this._bindSourceRasters(),this._bindingResult.success&&this._patchRasterInfo(),this._bindingResult.supportsGPU=d&&this._bindingResult.supportsGPU,this.processInputBandIds(),this._bindingResult;this._bindingResult={success:!0,supportsGPU:!0};this.processInputBandIds();return this._bindingResult}process(a){var c=this._getRasterValues();
c=0===c.length?a.pixelBlocks??a.primaryPixelBlocks:c.map(b=>this._readRasterValue(b,a));return this._processPixels({...a,pixelBlocks:c})}processInputBandIds(){var a=this._getRasterValues().filter(this._isRasterFunctionValue);if(1<a.length)return this.rawInputBandIds=a.map(b=>b.processInputBandIds()[0]),this.isInputBandIdsSwizzled=this.rawInputBandIds.some((b,d)=>b!==d),a=a.filter(b=>"ExtractBand"===b.functionName),a.length&&a.forEach((b,d)=>{b.isInputBandIdsSwizzled=!0;b.swizzledBandSelection=[d,
d,d]}),this.rawInputBandIds;var c=a[0];if(c){if(a=c.processInputBandIds(),c.isInputBandIdsSwizzled)return this.rawInputBandIds=a}else{a=[];({bandCount:c}=this.sourceRasterInfos[0]);for(let b=0;b<c;b++)a.push(b)}a=this._getInputBandIds(a);this.isInputBandIdsSwizzled=a.some((b,d)=>b!==d);return this.rawInputBandIds=a}getPrimaryRasters(){const a=[],c=[];this._getPrimaryRasters(this,a,c);return{rasters:a,rasterIds:c}}getWebGLProcessorDefinition(){const a=this._getWebGLParameters(),{raster:c,rasters:b}=
this.functionArguments;b&&Array.isArray(b)&&b.length?(a.rasters=b.map(d=>this._isRasterFunctionValue(d)?d.getWebGLProcessorDefinition():"number"===typeof d?{name:"Constant",parameters:{value:d},pixelType:"f32",id:-1,isNoopProcess:!1}:{name:"Identity",parameters:{value:d},pixelType:"f32",id:-1,isNoopProcess:!1}),a.rasters.some(d=>null!=d)||(a.rasters=null)):this._isRasterFunctionValue(c)&&(a.raster=c.getWebGLProcessorDefinition());return{name:this.functionName,parameters:a,pixelType:this.outputPixelType,
id:this.id,isNoopProcess:this.isNoopProcess}}getClippingGeometries(){const a=[];"Clip"===this.functionName&&a.push(this.functionArguments);const {raster:c,rasters:b}=this.functionArguments;if(b&&Array.isArray(b)&&b.length)b.forEach(d=>{this._isRasterFunctionValue(d)&&(d=d.getClippingGeometries(),a.push(...d))});else if(this._isRasterFunctionValue(c)){const d=c.getClippingGeometries();a.push(...d)}return a}_getOutputPixelType(a){return"unknown"===this.outputPixelType?a:this.outputPixelType??a}_getWebGLParameters(){return{}}_getInputBandIds(a){return a}_removeStatsHistColormapVAT(a){a.statistics=
null;a.histograms=null;a.colormap=null;a.attributeTable=null;a.multidimensionalInfo?.variables.forEach(c=>{c.statistics=void 0;c.histograms=void 0})}_getRasterValues(){const {rasterArgumentNames:a}=this;return"rasters"===a[0]?this.functionArguments.rasters??[]:a.flatMap(c=>this.functionArguments[c])}_getSourceRasterInfos(a){const c=this._getRasterValues(),{rasterInfos:b,rasterIds:d}=a;if(0===c.length)return b;const e=c.map(l=>{if(l&&"object"===typeof l&&"bind"in l&&l.rasterInfo)return l.rasterInfo;
if("string"===typeof l&&d.includes(l))return b[d.indexOf(l)];if("number"!==typeof l)return b[0]}),k=e.find(l=>l)??b[0];e.forEach((l,t)=>{void 0===l&&(e[t]=k)});return e}_getPrimaryRasterId(a){return a?.rasterId}_getPrimaryRasters(a,c=[],b=[]){for(let e=0;e<a.sourceRasters.length;e++){var d=a.sourceRasters[e];if("number"!==typeof d)if("bind"in d)this._getPrimaryRasters(d,c,b);else{const k=this._getPrimaryRasterId(d);null==k||b.includes(k)||(this.mainPrimaryRasterId===k?(c.unshift(d),b.unshift(k)):
(c.push(d),b.push(k)))}}}_isRasterFunctionValue(a){return null!=a&&"object"===typeof a&&"getWebGLProcessorDefinition"in a}_readRasterValue(a,c){var {primaryPixelBlocks:b}=c;if(null==a||"$$"===a)return a=b[0],null==a?null:a.clone();if("string"===typeof a)return a=c.primaryRasterIds.indexOf(a),-1===a?null:b[a];if("number"===typeof a){b=b[0];if(null==b)return null;const {width:d,height:e,pixelType:k}=b;b=new Float32Array(d*e);b.fill(a);a=Array(this.sourceRasterInfos[0].bandCount).fill(b);return new p({width:d,
height:e,pixelType:k,pixels:a})}return a.process(c)}_patchRasterInfo(){const {rasterInfo:a}=this;if(a?.keyProperties){var {bandCount:c,keyProperties:b,statistics:d,histograms:e}=a,k=b.BandProperties;k&&k.length!==c&&(a.keyProperties={...b,BandProperties:void 0});d&&d.length!==c&&(a.statistics=d.length>c?d.slice(0,c):null);e&&e.length!==c&&(a.histograms=e.length>c?e.slice(0,c):null);b.BAND_COUNT&&Number(b.BAND_COUNT)!==c&&(a.keyProperties={...b,BAND_COUNT:"string"===typeof b.BAND_COUNT?String(c):c})}}};
g.__decorate([h.property({json:{write:!0}})],f.prototype,"functionName",void 0);g.__decorate([h.property({json:{write:!0}})],f.prototype,"functionArguments",void 0);g.__decorate([h.property()],f.prototype,"rasterArgumentNames",void 0);g.__decorate([h.property({json:{write:!0}}),m.cast(a=>a?.toLowerCase())],f.prototype,"outputPixelType",void 0);g.__decorate([h.property({json:{write:!0}})],f.prototype,"mainPrimaryRasterId",void 0);g.__decorate([h.property()],f.prototype,"sourceRasters",void 0);g.__decorate([h.property({type:[q],
json:{write:!0}})],f.prototype,"sourceRasterInfos",void 0);g.__decorate([h.property({json:{write:!0}})],f.prototype,"rasterInfo",void 0);g.__decorate([h.property({json:{write:!0}})],f.prototype,"readingBufferSize",void 0);g.__decorate([h.property({json:{write:!0}})],f.prototype,"id",void 0);g.__decorate([h.property()],f.prototype,"isNoopProcess",void 0);g.__decorate([h.property()],f.prototype,"supportsGPU",null);g.__decorate([h.property()],f.prototype,"rawInputBandIds",void 0);g.__decorate([h.property()],
f.prototype,"rawSourceRasterInfos",void 0);g.__decorate([h.property()],f.prototype,"isInputBandIdsSwizzled",void 0);g.__decorate([h.property()],f.prototype,"swizzledBandSelection",void 0);g.__decorate([h.property()],f.prototype,"isBranch",void 0);g.__decorate([h.property({readOnly:!0})],f.prototype,"flatWebGLFunctionChain",null);g.__decorate([h.property()],f.prototype,"_bindingResult",void 0);return f=g.__decorate([n.subclass("esri.layers.support.rasterFunctions.BaseRasterFunction")],f)});
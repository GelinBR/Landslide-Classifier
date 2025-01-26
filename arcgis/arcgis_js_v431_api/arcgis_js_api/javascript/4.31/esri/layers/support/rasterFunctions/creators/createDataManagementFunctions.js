// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../colorUtils","../../rasterFunctionConstants","./utils","../../../../renderers/support/colorRampUtils"],function(h,m,n,f,p){function q(a){const d=a.colormap.map(c=>{if("value"in c){const g="string"===typeof c.color?m.getNamedColor(c.color)??m.hex2rgba(c.color):c.color;c=[c.value,...g];c[4]&&1>=c[4]&&(c[4]=Math.round(255*c[4]))}return c}),{raster:b,outputPixelType:e}=a;return f.createRasterFunction("Colormap",{colormap:d,raster:b},e)}function r(a){const {colorRampName:d}=
a,b=Object.values(n.colormapName).find(l=>l.toLowerCase()===d?.toLowerCase()),e=p.colorRampDict.toJSON(d),{raster:c,outputPixelType:g="unknown"}=a;return f.createRasterFunction("Colormap",b?{colormapName:b,raster:c}:{colorRampName:e,raster:c},g)}h.clip=function(a){const {geometry:d,keepOutside:b,outputPixelType:e="unknown",raster:c}=a;a="declaredClass"in d?d.toJSON():d;return f.createRasterFunction("Clip",{clippingGeometry:a,clippingType:b?2:1,raster:c},e)};h.colormap=function(a){if("colormap"in a)a=
q(a);else if("colorRamp"in a){const {raster:d,colorRamp:b,outputPixelType:e}=a;a={colorRamp:"toJSON"in b?b.toJSON():b,raster:d};a=f.createRasterFunction("Colormap",a,e)}else a=r(a);return a};h.colormapToRGB=function(a){const {raster:d,outputPixelType:b="u8"}=a;return f.createRasterFunction("ColormapToRGB",{raster:d},b)};h.compositeBands=function(a){const {rasters:d,outputPixelType:b}=a;return f.createRasterFunction("CompositeBand",{rasters:d},b)};h.extractBand=function(a){const {raster:d,outputPixelType:b=
"unknown"}=a,e={raster:d,missingBandAction:"fail"===a.missingBandAction?1:0};"bandIds"in a?e.bandIds=a.bandIds:"bandNames"in a?e.bandNames=a.bandNames:"bandWavelengths"in a&&(e.bandWavelengths=a.bandWavelengths);return f.createRasterFunction("ExtractBand",e,b)};h.grayscale=function(a){const {weights:d,outputPixelType:b="unknown",raster:e}=a;return f.createRasterFunction("Grayscale",{conversionParameters:d,raster:e},b)};h.mask=function(a){const {raster:d,outputPixelType:b="unknown"}=a,e=a.includedRanges?.flatMap(g=>
g),c=a.noDataValues?.map(g=>g.join(" "));return f.createRasterFunction("Mask",{raster:d,includedRanges:e,noDataInterpretation:"match-all"===a.noDataInterpretation?1:0,noDataValues:c},b)};h.remap=function(a){const {allowUnmatched:d,raster:b,rangeMaps:e,outputPixelType:c}=a;var g=e?.filter(({output:k})=>null!=k);a=g?.flatMap(({range:k})=>k);g=g?.map(({output:k})=>k);const l=e?.filter(k=>null==k.output)?.flatMap(({range:k})=>k);return f.createRasterFunction("Remap",{allowUnmatched:d,raster:b,inputRanges:a,
outputValues:g,noDataRanges:l},c)};h.statisticsHistogram=function(a){const {raster:d,histograms:b,outputPixelType:e}=a;a=a.statistics?.map(c=>({min:c.min,max:c.max,mean:c.avg,standardDeviation:c.stddev}));return f.createRasterFunction("StatisticsHistograms",{raster:d,statistics:a,histograms:b},e)};h.table=function(a){const {raster:d,attributeTable:b,outputPixelType:e="unknown"}=a;a="toJSON"in b?b.toJSON():b;return f.createRasterFunction("Table",{raster:d,attributeTableAsRecordSet:a},e)};Object.defineProperty(h,
Symbol.toStringTag,{value:"Module"})});
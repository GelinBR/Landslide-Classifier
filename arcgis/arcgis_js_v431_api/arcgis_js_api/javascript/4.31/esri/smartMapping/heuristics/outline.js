// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../core/Error ../../geometry/support/scaleUtils ../../renderers/visualVariables/SizeVariable ../../renderers/visualVariables/support/SizeStop ../statistics/spatialStatistics ../support/binningUtils ../support/adapters/support/layerUtils".split(" "),function(e,h,k,l,m,n,f){async function p(a){const {view:c}=a;if(!(a&&c&&a.layer))throw new e("outline:missing-parameters","'view' and 'layer' parameters are required");a.forBinning&&n.verifyBinningParams(a,"outline");const {layer:d,...g}=a;var b=
a.forBinning?f.binningCapableLayerTypes:f.featureCapableLayerTypes;a=f.createLayerAdapter(d,b,a.forBinning);if(!a)throw new e("outline:invalid-parameters","'layer' must be one of these types: "+f.getLayerTypeLabels(b).join(", "));b={layerAdapter:a,...g,view:c};await c.when();await a.load(null!=b.signal?{signal:b.signal}:null);if("polygon"!==a.geometryType)throw new e("outline:not-supported",`outline is not supported for geometryType: ${a.geometryType}`);return b}function q(a,c){const d=a.avgSize,
g=h.getScaleForResolution(1,c.spatialReference);a=r.map(b=>new l({size:b.width,value:Math.round(d/b.size*g)}));a.sort((b,t)=>b.value-t.value);return{visualVariables:[new k({target:"outline",valueExpression:"$view.scale",stops:a})],opacity:.25}}const r=[{size:10,width:0},{size:20,width:.5},{size:80,width:1},{size:250,width:2}];return async function(a){const {layerAdapter:c,...d}=await p(a);a=await c.getSampleFeatures({sampleSize:-1,returnGeometry:!0,...d},"json");if(!a?.length)throw new e("outline:insufficient-info",
"No features are available to calculate statistics");a=await m({features:a,geometryType:c.geometryType});if(!(a&&"avgSize"in a&&a.avgSize))throw new e("outline:insufficient-info","average polygon size is invalid");return q({...a,avgSize:a.avgSize},d.view)}});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/screenUtils ../../../../../../layers/support/OrderByInfo ../../../../engine/webgl/shaderGraph/techniques/TechniqueType ./LabelMatcherSchema ./MatcherSchema ./StorageSchema ./VisualVariablesSchema".split(" "),function(n,u,v,w,l,m,p,q){async function x(a,b){var c=b.renderer;const f=q.createVisualVariableUniforms(c);c=await m.createMatcherSchema(a,c);a=await l.createLabelMatcherSchema(a,b,f);return{symbology:c,labels:a}}function r(a,b){return a.fields.map(c=>({...c.toJSON(),
type:y(c,b)}))}function y(a,b){const {onStatisticExpression:c,onStatisticField:f,statisticType:d}=a;switch(d){case "min":case "max":case "avg":case "avg_angle":case "sum":case "count":return"esriFieldTypeDouble";case "mode":return c?({returnType:a}=c,a?"string"===a?"esriFieldTypeString":"esriFieldTypeDouble":"esriFieldTypeString"):(a=b.find(e=>e.name===f))?a.type:"esriFieldTypeString"}}async function z(a,b,c,f,d){f=r(a,f.fields);var e=a.renderer;const h=await m.createMatcherSchema(b,e),g=p.createStorageSchema(e,
[null,null]);e=q.createVisualVariableUniforms(e);b=await l.createLabelMatcherSchema(b,{geometryType:"polygon",labelingInfo:a.labelingInfo,labelsVisible:a.labelsVisible},e);e=t(h);a="geohash"===a.binType?{type:"geohash",fixBinLevel:a.fixedBinLevel??3}:{type:"grid",size:u.pt2px(a.size),fixedBinLevel:a.fixedBinLevel};return{storage:g,mesh:{properties:{sortKey:null,timeZone:c.timeZone,returnMeshObjectId:e,displayRefreshVersion:d},strategy:{type:"binning",fields:f,index:a,featureFilter:c.filters[0]},factory:{labels:b,
symbology:h}}}}async function A(a,b,c,f,d){const e=r(a,f.fields),h={type:"cluster",feature:await m.createMatcherSchema(b,a.effectiveFeatureRenderer),cluster:await m.createMatcherSchema(b,a.effectiveClusterRenderer)};var g=q.createVisualVariableUniforms(a.effectiveFeatureRenderer);b={type:"cluster",feature:await l.createLabelMatcherSchema(b,f,g),cluster:await l.createLabelMatcherSchema(b,{geometryType:"point",labelingInfo:a.labelingInfo,labelsVisible:a.labelsVisible},g)};f=p.createStorageSchema(a.effectiveFeatureRenderer,
[null,null]);g=t(h);return{storage:f,mesh:{properties:{sortKey:null,timeZone:c.timeZone,displayRefreshVersion:d,returnMeshObjectId:g},strategy:{type:"cluster",fields:e,featureFilter:c.filters[0],clusterRadius:u.pt2px(a.clusterRadius/2)},factory:{labels:b,symbology:h}}}}function k(a){return a.techniqueType===w.TechniqueType.AnimatedMarker}function t(a){return"simple"===a.type&&a.meshes.some(k)||"interval"===a.type&&(a.intervals.some(b=>b.meshes.some(k))||a.backgroundFill.some(k))||"map"===a.type&&
(a.map.some(b=>b.symbol.some(k))||a.backgroundFill.some(k))?!0:!1}n.createSimpleProcessorSchema=async function(a,b,c,f){var d=c.featureReduction;if(d)switch(d.type){case "binning":return z(d,a,b,c,f);case "cluster":return A(d,a,b,c,f)}d=c.orderBy;var e=c.renderer;e=null!=e&&"unique-value"===e.type&&e.orderByClassesEnabled;"default"!==d||e||(d=[new v({field:c.objectIdField,order:"descending"})]);"default"!==d&&d?.length?(d=d[0],e="ascending"===d.order?"asc":"desc",d=d.field?{field:d.field,order:e}:
d.valueExpression?{expression:d.valueExpression,order:e}:null):d=e?{byRenderer:!0,order:"asc"}:null;e=p.createStorageSchema(c.renderer,b.filters);a=await x(a,c);c=t(a.symbology);return{storage:e,mesh:{properties:{sortKey:d,timeZone:b.timeZone,returnMeshObjectId:c,displayRefreshVersion:f},strategy:{type:"feature"},factory:a}}};n.getAggregateFields=r;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
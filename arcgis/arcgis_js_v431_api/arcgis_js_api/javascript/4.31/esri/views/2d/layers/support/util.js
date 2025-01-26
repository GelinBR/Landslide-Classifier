// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/jsonMap","../../engine/webgl/effects/highlight/HighlightGradient","../../engine/webgl/effects/highlight/MultiHighlightGradient","../../engine/webgl/shaderGraph/techniques/featureTechniqueUtils"],function(p,q,r,t,u){const v=new q.JSONMap({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});p.analyzeRings=function(a,c,m){const d=[],h=[];let k=
0,f=0;for(const n of a){a=f;let b=n[0][0],g=n[0][1];d[f++]=b;d[f++]=g;let e=0;for(let l=1;l<n.length;++l){const w=b,x=g;b=n[l][0];g=n[l][1];e+=g*w-b*x;d[f++]=b;d[f++]=g}c(e/2);0<e?(0<a-k&&(m(k,a,d,h),k=a),h.length=0):0>e?0<a-k?h.push(.5*(a-k)):f=a:f=a}0<f-k&&m(k,f,d,h)};p.canUseMajorityInterpolationOnDataSource=function(a){const {bandCount:c,attributeTable:m,colormap:d,pixelType:h}=a.raster.rasterInfo;return 1===c&&(null!=m||null!=d||"u8"===h||"s8"===h)};p.createOrReuseHighlightGradient=function(a,
c){if(null==c)return a?.destroy(),null;"single"===a?.type&&Array.isArray(c)&&(a.destroy(),a=null);"multi"!==a?.type||Array.isArray(c)||(a.destroy(),a=null);a||=Array.isArray(c)?new t.MultiHighlightGradient:new r;Array.isArray(c)?"multi"===a.type&&a.setHighlightOptions(c):"single"===a.type&&a.setHighlightOptions(c);return a};p.renderHighlight=function(a,c,m,d){const {painter:h,highlightGradient:k}=a,{highlight:f}=h.effects;if(k){var n=a.passOptions,b=k.getReasonsWithGradients();for(let e=0;e<b.length;e++){var g=
{...a,passOptions:{type:"highlight",activeGradient:null!=d?b[d].activeGradient:b[e].activeGradient,activeReasons:b[e].activeReasons,stepType:"burn",highlightAll:c}};f.bind(g);m(g);if(e<b.length-1){g=0;for(let l=e+1;l<b.length;l++)g|=b[l].activeReasons;m({...a,passOptions:{type:"highlight",activeGradient:null!=d?b[d].activeGradient:b[e].activeGradient,activeReasons:g,stepType:"clear",highlightAll:c}})}g={...a,passOptions:{type:"highlight",activeGradient:null!=d?b[d].activeGradient:b[e].activeGradient,
activeReasons:b[e].activeReasons,stepType:"draw",highlightAll:c}};h.setPipelineState(u.getFeaturePipelineState(a));h.updatePipelineState(a.context);f.draw(g);f.unbind()}a.passOptions=n}};p.toJSONGeometryType=function(a){return v.toJSON(a)};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
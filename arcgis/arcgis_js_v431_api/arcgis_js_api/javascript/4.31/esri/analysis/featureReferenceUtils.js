// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../chunks/vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ../geometry/support/ray ../views/3d/webgl-engine/lib/IntersectorInterfaces ../views/3d/webgl-engine/lib/intersectorUtilsConversions".split(" "),function(e,n,p,w,A,q){function h(a){if(null==a)return null;const b=null!=a.layer?a.layer.id:"";let c=null;c=null!=a.objectId?a.objectId:null!=a.layer&&"objectIdField"in a.layer&&null!=a.layer.objectIdField&&null!=a.attributes?a.attributes[a.layer.objectIdField]:a.uid;return null==c?
null:`o-${b}-${c}`}function x(a,b,c){return q.hasLod(a)&&(a=q.getIntersectedFeatureBSRadius(a,b),null!=a)?Math.min(.05*a,c):1E-5*c}const B={json:{write:{writer:function(a,b){null!=a?.layer?.objectIdField&&null!=a.attributes&&(b.feature={layerId:a.layer.id,objectId:a.attributes[a.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(a){if(null!=a.layerId&&null!=a.objectId)return{uid:null,layer:{id:a.layerId,
objectIdField:"ObjectId"},attributes:{ObjectId:a.objectId}}}}}}},C=w.create(),f=p.create();e.featureReferenceEquals=function(a,b){return h(a)===h(b)};e.featureReferenceProperty=B;e.getFeatureId=h;e.updatePointsFromFeatureReference=function(a,b,c,r){var {sceneIntersectionHelper:k}=a;const {observer:y,observerFeatureId:t,targetFeatureId:u,target:z}=c;if(null!=t||null!=u){r||=d=>d;n.sub(f,y,z);var g=n.length(f);n.scaleAndAdd(f,y,f,1/g);var l=w.fromPoints(f,z,C);b.options.store=A.StoreResults.ALL;k.intersectToolIntersectorRay(l,
b);var v=l=k=null,m=null;for(const d of b.results.all)b=q.toGraphic(d,a),null!=b&&null!=d.distanceInRenderSpace&&(b=h(b),null!=b&&(null!=t&&b===t&&(k??=r(x(d,a,g)),d.distanceInRenderSpace-1<k&&(v=d)),null!=u&&b===u&&(l??=r(x(d,a,g)),null==m&&d.distanceInRenderSpace-1<g&&g-d.distanceInRenderSpace+1<l&&(m=d))));var {observerAdjusted:D,targetAdjusted:E}=c;v?.getIntersectionPoint(D)?c.observerSurfaceNormal=v.getTransformedNormal(p.create()):c.observerSurfaceNormal=null;m?.getIntersectionPoint(E)?c.targetSurfaceNormal=
m.getTransformedNormal(p.create()):c.targetSurfaceNormal=null}};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
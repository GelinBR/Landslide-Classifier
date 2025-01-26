// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/has ../../../../../core/lang ../../../../../layers/support/arcgisLayerUrl ./featureReductionUtils ./featureServiceUtils ./floorFilterUtils ./geometryUtils ./labelingUtils ../schema/SourceSchema ../schema/processor/SimpleProcessorSchema ../support/rendererUtils".split(" "),function(u,m,x,y,v,z,n,A,p,B,C,D){class E{constructor(b){this.layer=b}getLabelingDeconflictionInfo(b){const a=this.layer;b=p.getFeatureReductionDeconflictionEnabled(a,b)??p.getLayerDeconflictionEnabled(a);
return[{vvEvaluators:{0:p.createLabelVVEvaluator(a.renderer)},deconflictionEnabled:b}]}async createServiceOptions(b){var a=this.layer;const {capabilities:c,objectIdField:d,globalIdField:e,orderBy:f,refreshInterval:h}=a,k=a.fieldsIndex.toJSON(),q=A.getServiceGeometryType(a),r=a.timeInfo?.toJSON(),t=a.spatialReference.toJSON(),l=x.clone(this.layer.parsedUrl);let w=this.layer.objectIdField;if(f?.length){var g=!f[0].valueExpression&&f[0].field;g&&(w=g)}g=0<h;a=(g=!!m("featurelayer-snapshot-enabled")&&
"point"===a.geometryType&&c?.query.supportsPagination&&!c?.operations.supportsEditing&&!g)&&z.exceedsMinimumSnapshotCoverage(b,a.fullExtent);const F=y.isHostedAgolService(l.path);return{type:"feature-service",source:l,isSourceHosted:F,orderByFields:w,outSpatialReference:b.spatialReference.toJSON(),metadata:{globalIdField:e,fieldsIndex:k,geometryType:q,objectIdField:d,timeInfo:r,spatialReference:t,timeReferenceUnknownClient:!1,subtypeField:null,subtypes:null,typeIdField:null,types:null},queryMetadata:{maxRecordCount:c.query.maxRecordCount,
supportsCompactGeometry:c.query.supportsCompactGeometry,supportsDefaultSpatialReference:c.query.supportsDefaultSpatialReference,supportsFormatPBF:c.query.supportsFormatPBF,supportsMaxRecordCountFactor:c.query.supportsMaxRecordCountFactor,supportsQuantization:c.query.supportsQuantization,lastEditDate:null,snapshotInfo:{supportsSnapshotMinThreshold:g,supportsSnapshotMaxThreshold:a,snapshotCountThresholds:{min:m("featurelayer-snapshot-point-min-threshold"),max:m("featurelayer-snapshot-point-max-threshold")}}}}}createSourceSchema(b,
a){const {definitionExpression:c,customParameters:d,timeExtent:e}=this.layer;return B.createFeatureSourceSchema({definitionExpression:c,customParameters:d,timeExtent:e},b,a,null)}createProcessorSchema(b,a,c){const {fields:d,renderer:e,geometryType:f,labelingInfo:h,labelsVisible:k,orderBy:q,objectIdField:r}=this.layer,t={fields:d.map(l=>l.toJSON()),renderer:e?.clone(),featureReduction:v.getEffectiveFeatureReduction(this.layer,a),geometryType:f,labelingInfo:h,labelsVisible:k,objectIdField:r,orderBy:q??
"default"};return C.createSimpleProcessorSchema(b,a,t,c)}get hasRequiredSupport(){return D.isRendererSupported(this.layer.renderer)}get timeOptions(){return this.layer}hasFilters(b){return n.hasFloorFilter(this.layer,b)}addFilters(b,a){return n.addFloorFilter(this.layer,b,a)}getUpdateHashProperties(b){var a=this.layer;const {definitionExpression:c,renderer:d,outFields:e}=a,f=this.layer.labelsVisible?this.layer.labelingInfo:null,h=JSON.stringify(a.customParameters),k=v.getEffectiveFeatureReduction(a,
b);a=JSON.stringify(a.orderBy);b=n.hasFloorFilter(this.layer,b)?b.floors:null;return{outFields:e,orderBy:a,definitionExpression:c,renderer:d,labelingInfo:f,featureReduction:k,customParameters:h,floors:b}}}u.OrientedImageryLayerAdapter=E;Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});
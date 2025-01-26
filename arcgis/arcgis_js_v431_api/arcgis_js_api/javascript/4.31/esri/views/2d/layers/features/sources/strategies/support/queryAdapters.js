// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../core/has ../../../../../../../core/workers/Connection ../../../../../../../geometry/support/quantizationUtils ../../../../../../../layers/graphics/featureConversionUtils ../../../../../../../layers/ogc/ogcFeatureUtils ../../../../../../../rest/query/operations/query ../../../support/FeatureSetReaderJSON ../../../support/FeatureSetReaderPBF".split(" "),function(h,p,q,m,k,n,l,e,r){async function t(a){const b=new q;await b.open(a,{});return b}class f{constructor(a,
b){this.service=a;this._metadata=b}destroy(){}}class u extends f{constructor(a,b){super(a,b);this._portsOpen=t(a.source).then(d=>this.client=d)}destroy(){this.client.close();this.client=null}async executeQuery(a,b){await this._portsOpen;a=await this.client.invoke("queryFeatures",a.toJSON(),b);return e.FeatureSetReaderJSON.fromFeatureSet(a,this._metadata)}}class v extends f{async executeQuery(a,b){({data:b}=await l.executeQueryPBFBuffer(this.service.source,a,b));return r.FeatureSetReaderPBF.fromBuffer(b,
this._metadata,!a.quantizationParameters)}}class w extends f{async executeQuery(a,b){const {source:d,queryMetadata:g}=this.service;if(null!=a.quantizationParameters&&!g.supportsQuantization){const c=a.clone();a=m.toQuantizationTransform(c.quantizationParameters);c.quantizationParameters=null;({data:b}=await l.executeQuery(d,c,this._metadata.spatialReference,b));b=k.convertFromFeatureSet(b,this._metadata.objectIdField);k.quantizeOptimizedFeatureSet(a,b);return e.FeatureSetReaderJSON.fromOptimizedFeatureSet(b,
this._metadata)}({data:a}=await l.executeQuery(d,a,this._metadata.spatialReference,b));"esriGeometryPoint"===this._metadata.geometryType&&(a.features=a.features?.filter(c=>null!=c.geometry?(c=c.geometry,Number.isFinite(c.x)&&Number.isFinite(c.y)):!0));return e.FeatureSetReaderJSON.fromFeatureSet(a,this._metadata)}}class x extends f{async executeQuery(a,b){if(a.quantizationParameters&&!this.service.queryMetadata.supportsQuantization){const g=a.clone();var d=m.toQuantizationTransform(g.quantizationParameters);
g.quantizationParameters=null;a=await n.queryOptimizedFeatureSet(this.service.source,a,b);k.quantizeOptimizedFeatureSet(d,a);return e.FeatureSetReaderJSON.fromOptimizedFeatureSet(a,this._metadata)}d=await n.queryOptimizedFeatureSet(this.service.source,a,b);return e.FeatureSetReaderJSON.fromOptimizedFeatureSet(d,this._metadata)}}h.SourceAdapter=f;h.createQueryAdapter=function(a,b){switch(a.type){case "memory":return new u(a,b);case "ogc":return new x(a,b);case "feature-service":return a.queryMetadata.supportsFormatPBF&&
p("featurelayer-pbf")?new v(a,b):new w(a,b)}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
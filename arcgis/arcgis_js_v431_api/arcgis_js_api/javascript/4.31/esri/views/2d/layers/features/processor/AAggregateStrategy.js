// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/Evented ../../../../../geometry/support/aaBoundingBox ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/data/optimizedFeatureQueryEngineAdapter ../../../../../layers/graphics/data/QueryEngine ./AProcessorStrategy".split(" "),function(e,f,g,h,k,l,m){class n extends m.AProcessorStrategy{constructor(a,b,c,d){super(a,b);this.spatialReference=c;this.aggregateFields=d;this.events=new f;this.featureAdapter=k.optimizedFeatureQueryEngineAdapter}get aggregateQueryEngine(){this._aggregateQueryEngine||
(this._aggregateQueryEngine=new l.QueryEngine({featureStore:this,fieldsIndex:this._metadata.fieldsIndex,geometryType:this._metadata.geometryType,objectIdField:this._metadata.objectIdField,spatialReference:this.spatialReference}));return this._aggregateQueryEngine}removeChunks(a){}forEach(a){return this.forEachAggregateWorldSpace(a)}forEachInBounds(a,b){}forEachBounds(a,b){const c=g.create();for(const d of a)(a=h.getBoundsOptimizedGeometry(c,d.geometry,!1,!1))&&b(a)}}e.AAggregateStrategy=n;Object.defineProperty(e,
Symbol.toStringTag,{value:"Module"})});
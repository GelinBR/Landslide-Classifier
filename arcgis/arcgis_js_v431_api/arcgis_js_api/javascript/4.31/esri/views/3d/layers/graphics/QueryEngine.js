// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/Accessor ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../geometry/Extent ../../../../layers/graphics/data/QueryEngine ../../../../layers/support/FieldsIndex ../../../../rest/support/FeatureSet ../../../../rest/support/Query ../../../../geometry/support/typeUtils".split(" "),function(d,
f,A,l,g,B,C,D,m,n,p,q,k,r,t){const u=p.QueryEngine;d.QueryEngine=class extends l{get layer(){return this.context.layer}get spatialReference(){return this.context.spatialReference}get _queryGeometryType(){switch(this.layer.geometryType){case "multipoint":case "point":case "polygon":case "polyline":return this.layer.geometryType;case "mesh":return"polygon"}}get defaultQueryJSON(){return(new r({outSpatialReference:this.spatialReference})).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(a){super(a);
this._dataQueryEngineInstance=null}destroy(){this.clear()}clear(){return this._dataQueryEngineInstance?(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0):!1}async executeQueryForIdSet(a,b,c){return this._dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(a,b),c)}async executeQueryForCount(a,b){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(a),b)}async executeQueryForExtent(a,b){const {count:c,extent:e}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(a),
b);a=n.fromJSON(e);return{count:c,extent:a}}async executeQueryForIds(a,b){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(a),b)}async executeQueryForLatestObservations(a,b){a=await this._dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(a),b);a=k.fromJSON(a);a.features.forEach(c=>{c.layer=this.layer;c.sourceLayer=this.layer});return a}async executeQuery(a,b){a=await this._dataQueryEngine.executeQuery(this._ensureQueryJSON(a),b);a=k.fromJSON(a);a.features.forEach(c=>
{c.layer=this.layer;c.sourceLayer=this.layer});return a}_ensureQueryJSON(a,b){let c=this.defaultQueryJSON;null!=a&&("outSpatialReference"in a&&!a.outSpatialReference&&(a.outSpatialReference=this.spatialReference),c=a.toJSON());null!=b&&(a=b.geometries.map(e=>e.toJSON()).reduce((e,h)=>{e.rings=e.rings.concat(h.rings);return e}),c={...c,sceneFilter:{...b,geometry:a}});return c}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const a="timeInfo"in this.layer&&
this.layer.timeInfo?.toJSON()||null,b=this.layer.objectIdField,c=t.featureGeometryTypeKebabDictionary.toJSON(this._queryGeometryType),e=this.layer.fieldsIndex?.toJSON()||new q([]),h=this.priority,v=this.spatialReference.toJSON(),{hasZ:w,hasM:x,featureStore:y,scheduler:z}=this.context;return this._dataQueryEngineInstance=new u({hasZ:w,hasM:x,geometryType:c,fieldsIndex:e,timeInfo:a,spatialReference:v,objectIdField:b,featureStore:y,scheduler:z,priority:h})}};f.__decorate([g.property({constructOnly:!0})],
d.QueryEngine.prototype,"context",void 0);f.__decorate([g.property({constructOnly:!0})],d.QueryEngine.prototype,"priority",void 0);f.__decorate([g.property()],d.QueryEngine.prototype,"layer",null);f.__decorate([g.property()],d.QueryEngine.prototype,"spatialReference",null);f.__decorate([g.property()],d.QueryEngine.prototype,"_queryGeometryType",null);f.__decorate([g.property()],d.QueryEngine.prototype,"defaultQueryJSON",null);d.QueryEngine=f.__decorate([m.subclass("esri.views.3d.layers.graphics.QueryEngine")],
d.QueryEngine);Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
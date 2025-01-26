// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/arrayUtils ../../../../core/asyncUtils ../../../../core/memoize ../../../../core/promiseUtils ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/decorators/subclass ../../../../core/support/UpdatingHandles ../../../../geometry/Polygon ../../../../geometry/projection ../../../../geometry/support/normalizeUtilsSync ../../../../geometry/support/typeUtils ../../../../layers/graphics/featureConversionUtils ../../../../layers/graphics/OptimizedFeature ../../../../layers/graphics/data/FeatureStore ../../../../layers/graphics/data/QueryEngine ../../../../layers/support/FieldsIndex ../../../../support/elevationInfoUtils ../../../../symbols/support/utils ../snappingUtils ./queryEngineUtils ./snappingCandidateElevationAlignment ./snappingCandidateElevationFilter ./symbologySnappingCandidates ../../../support/Scheduler".split(" "),
function(f,g,w,x,y,z,l,n,h,N,O,A,B,C,p,D,E,F,G,H,I,J,K,q,r,t,u,L,v,M){f.GraphicsSnappingSource=class extends w{get updating(){return this._updatingHandles.updating}get _hasZ(){const a=this.view;return null!=a&&"3d"===a.type&&"map-notes"!==this.layerSource.layer.type}get _snappingElevationAligner(){const {view:a}=this,{layer:b}=this.layerSource,c=null!=a&&"3d"===a.type;return c&&"map-notes"!==b.type?u.getSnappingCandidateElevationAligner(c,{elevationInfo:b.elevationInfo,alignPointsInFeatures:async(d,
e)=>(await l.whenOrAbort(a.whenLayerView(b),e)).elevationAlignPointsInFeatures(d,e)}):u.getSnappingCandidateElevationAligner()}get _snappingElevationFilter(){const {view:a}=this;return L.getSnappingCandidateElevationFilter(null!=a&&"3d"===a.type&&"map-notes"!==this.layerSource.layer.type)}get _symbologySnappingFetcher(){const {view:a}=this,{layer:b}=this.layerSource,c=0<this._extrudedPolygonSymbolsCount;return null!=a&&"3d"===a.type&&"map-notes"!==b.type&&c?v.getSymbologySnappingCandidatesFetcher(c,
async(d,e)=>{const k=await a.whenLayerView(b);l.throwIfAborted(e);return k.queryForSymbologySnapping({candidates:d,spatialReference:a.spatialReference},e)}):v.getSymbologySnappingCandidatesFetcher()}constructor(a){super(a);this.availability=1;this._sources={multipoint:null,point:null,polygon:null,polyline:null};this._loadedWkids=new Set;this._loadedWkts=new Set;this._pendingAdds=[];this._extrudedPolygonSymbolsCount=0;this._updatingHandles=new B.UpdatingHandles;this._memoizedMakeGetGroundElevation=
z.memoize(t.makeGetGroundElevation)}destroy(){for(const a of this._pendingAdds)a.task.abort();this._pendingAdds.length=0;this._mapSources(a=>this._destroySource(a));this._updatingHandles.destroy()}initialize(){this._updatingHandles.add(()=>this.getGraphicsLayers(),c=>{this._updatingHandles.removeHandles("graphics-collections");for(const d of c)this._addMany(d.graphics.toArray()),this.addHandles([d.on("graphic-update",e=>this._onGraphicUpdate(e)),this._updatingHandles.addOnCollectionChange(()=>d.graphics,
e=>this._onGraphicsChanged(e))],"graphics-collections")},n.initial);const {view:a}=this,{layer:b}=this.layerSource;null!=a&&"3d"===a.type&&"map-notes"!==b.type&&a.elevationProvider&&this.addHandles([a.elevationProvider.on("elevation-change",({context:c})=>{K.elevationContextAffectsAlignment(c,b.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),n.watch(()=>b.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),n.initial),n.on(()=>b,["edits","apply-edits",
"graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(a,b){const {point:c,coordinateHelper:{spatialReference:d}}=a;var e=await l.allSettledValues(this._mapSources(m=>this._fetchCandidatesForSource(m,a,b)));l.throwIfAborted(b);const k=this._memoizedMakeGetGroundElevation(this.view,d);e=e.flat().map(m=>t.convertSnappingCandidate(m,k));r.sortCandidatesInPlace(c,e);return e}async _fetchCandidatesForSource(a,b,c){const d=r.makeSnappingQuery(b,this.view?.type??
"2d");a=await a.queryEngine.executeQueryForSnapping(d,c);l.throwIfAborted(c);b=await this._snappingElevationAligner.alignCandidates(a.candidates,b.coordinateHelper.spatialReference,c);l.throwIfAborted(c);a=await this._symbologySnappingFetcher.fetch(b,c);l.throwIfAborted(c);c=0===a.length?b:[...b,...a];return this._snappingElevationFilter.filter(d,c)}refresh(){}_onGraphicUpdate(a){if(this.getGraphicsLayers().some(b=>b.graphics.includes(a.graphic)))switch(a.property){case "geometry":case "visible":this._remove(a.graphic),
this._addMany([a.graphic])}}_onGraphicsChanged(a){for(const b of a.removed)this._remove(b);this._addMany(a.added)}_addMany(a){const b=[],c=new Map;for(const d of a)null!=d.geometry&&(this._needsInitializeProjection(d.geometry.spatialReference)?(b.push(d.geometry.spatialReference),c.set(d.uid,d)):this._add(d));this._createPendingAdd(b,c)}_createPendingAdd(a,b){if(a.length){var c=y.createTask(async k=>{await p.initializeProjection(a.map(m=>({source:m,dest:this.spatialReference})),{signal:k});this._markLoadedSpatialReferences(a);
for(const m of b.values())this._add(m)});this._updatingHandles.addPromise(c.promise);var d={task:c,graphics:b},e=()=>x.removeUnordered(this._pendingAdds,d);c.promise.then(e,e);this._pendingAdds.push(d)}}_markLoadedSpatialReferences(a){for(const b of a)null!=b.wkid&&this._loadedWkids.add(b.wkid),(a=b.wkt2||b.wkt)&&this._loadedWkts.add(a)}_add(a){if(null!=a.geometry&&a.visible){var b=a.geometry;if("mesh"!==b.type){"extent"===b.type&&(b=C.fromExtent(b));var c=this._ensureSource(b.type);null!=c&&(b=this._createOptimizedFeature(a.uid,
b),null!=b&&(c.featureStore.add(b),q.symbolHasExtrudeSymbolLayer(a.symbol)&&this._extrudedPolygonSymbolsCount++))}}}_needsInitializeProjection(a){if(null!=a.wkid&&this._loadedWkids.has(a.wkid))return!1;const b=a.wkt2||a.wkt;return b&&this._loadedWkts.has(b)?!1:!p.canProjectWithoutEngine(a,this.spatialReference)}_createOptimizedFeature(a,b){b=p.project(D.normalizeCentralMeridianForDisplay(b),this.spatialReference);if(!b)return null;b=this._ensureGeometryHasZ(b);b=F.convertFromGeometry(b,this._hasZ,
!1);return new G.OptimizedFeature(b,{OBJECTID:a},null,a)}_ensureGeometryHasZ(a){if(!this._hasZ)return a;const b=c=>{for(;3>c.length;)c.push(0)};a=a.clone();a.hasZ=!0;switch(a.type){case "point":a.z=a.z??0;break;case "multipoint":a.points.forEach(b);break;case "polyline":a.paths.forEach(c=>c.forEach(b));break;case "polygon":a.rings.forEach(c=>c.forEach(b))}return a}_ensureSource(a){var b=this._sources[a];if(null!=b)return b;b=this._createSource(a);return this._sources[a]=b}_createSource(a){var b=E.featureGeometryTypeKebabDictionary.toJSON(a);
const c=this._hasZ,d=new H({geometryType:b,hasZ:c,hasM:!1});b=new I.QueryEngine({featureStore:d,fieldsIndex:J.fromLayerJSON({fields:[{name:"OBJECTID",type:"esriFieldTypeOID",alias:"OBJECTID"}]}),geometryType:b,hasM:!1,hasZ:c,objectIdField:"OBJECTID",spatialReference:this.spatialReference,priority:M.TaskPriority.SNAPPING,scheduler:null!=this.view&&"3d"===this.view.type?this.view.resourceController.scheduler:null});return{featureStore:d,queryEngine:b,type:a}}_remove(a){this._mapSources(b=>this._removeFromSource(b,
a));for(const b of this._pendingAdds)b.graphics.delete(a.uid),0===b.graphics.size&&b.task.abort()}_removeFromSource(a,b){a.featureStore.has(b.uid)&&(a.featureStore.removeById(b.uid),q.symbolHasExtrudeSymbolLayer(b.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(a){a.queryEngine.destroy();this._sources[a.type]=null}_mapSources(a){const {point:b,polygon:c,polyline:d,multipoint:e}=this._sources,k=[];null!=b&&k.push(a(b));null!=c&&k.push(a(c));null!=d&&k.push(a(d));null!=e&&k.push(a(e));
return k}};g.__decorate([h.property()],f.GraphicsSnappingSource.prototype,"getGraphicsLayers",void 0);g.__decorate([h.property({constructOnly:!0})],f.GraphicsSnappingSource.prototype,"layerSource",void 0);g.__decorate([h.property({constructOnly:!0})],f.GraphicsSnappingSource.prototype,"spatialReference",void 0);g.__decorate([h.property({constructOnly:!0})],f.GraphicsSnappingSource.prototype,"view",void 0);g.__decorate([h.property({readOnly:!0})],f.GraphicsSnappingSource.prototype,"updating",null);
g.__decorate([h.property({readOnly:!0})],f.GraphicsSnappingSource.prototype,"availability",void 0);g.__decorate([h.property()],f.GraphicsSnappingSource.prototype,"_hasZ",null);g.__decorate([h.property()],f.GraphicsSnappingSource.prototype,"_snappingElevationAligner",null);g.__decorate([h.property()],f.GraphicsSnappingSource.prototype,"_snappingElevationFilter",null);g.__decorate([h.property()],f.GraphicsSnappingSource.prototype,"_symbologySnappingFetcher",null);g.__decorate([h.property()],f.GraphicsSnappingSource.prototype,
"_extrudedPolygonSymbolsCount",void 0);f.GraphicsSnappingSource=g.__decorate([A.subclass("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],f.GraphicsSnappingSource);Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
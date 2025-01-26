// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Logger ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/spatialReferenceUtils ./BitmapTileLayerView2D ./LayerView2D ./support/imageUtils ../tiling/TileInfoView ../tiling/TileKey ../tiling/TileQueue ../tiling/TileStrategy ../../layers/LayerView ../../layers/RefreshableLayerView ../../support/Scheduler".split(" "),
function(k,r,l,t,d,E,u,e,v,w,m,x,n,y,z,A,B,C){const D=[0,0];d=class extends B(v.BitmapTileLayerView2D(w.LayerView2DMixin(A))){constructor(){super(...arguments);this.layer=this._fetchQueue=this._tileStrategy=null}get tileMatrixSet(){const {activeLayer:a}=this.layer;var {tileMatrixSet:b}=a;return b&&e.equals(b.tileInfo?.spatialReference,this.view.spatialReference)?b:(b=this._getTileMatrixSetBySpatialReference(a))&&b.id!==a.tileMatrixSetId?(a.tileMatrixSetId=b.id,b):null}update(a){this._fetchQueue.pause();
this._fetchQueue.state=a.state;this._tileStrategy.update(a);this._fetchQueue.resume()}attach(){const a=this.tileMatrixSet?.tileInfo;a&&(this._tileInfoView=new x(a),this._fetchQueue=new y({tileInfoView:this._tileInfoView,concurrency:16,process:(b,c)=>this.fetchTile(b,c),scheduler:this.scheduler,priority:C.TaskPriority.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new z({cachePolicy:"keep",resampling:!0,acquireTile:b=>this.acquireTile(b),releaseTile:b=>this.releaseTile(b),tileInfoView:this._tileInfoView}),
this.addAttachHandles(this._updatingHandles.add(()=>[this.layer?.activeLayer?.styleId,this.tileMatrixSet],()=>this.doRefresh())),super.attach())}detach(){super.detach();this._tileStrategy?.destroy();this._fetchQueue?.destroy();this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(a){return this.layer.activeLayer.tileMatrixSets?.some(b=>e.equals(b.tileInfo?.spatialReference,a))??!1}async doRefresh(){this.attached&&
(this.suspended?(this._tileStrategy.clear(),this.requestUpdate()):(this._fetchQueue.reset(),this._tileStrategy.refresh(a=>this._updatingHandles.addPromise(this._enqueueTileFetch(a)))))}acquireTile(a){a=this._bitmapView.createTile(a);const b=a.bitmap;[b.x,b.y]=this._tileInfoView.getTileCoords(D,a.key);b.resolution=this._tileInfoView.getTileResolution(a.key);[b.width,b.height]=this._tileInfoView.tileInfo.size;this._updatingHandles.addPromise(this._enqueueTileFetch(a));this._bitmapView.addChild(a);this.requestUpdate();
return a}releaseTile(a){this._fetchQueue.abort(a.key.id);this._bitmapView.removeChild(a);a.once("detach",()=>a.destroy());this.requestUpdate()}async fetchTile(a,b={}){var c="tilemapCache"in this.layer?this.layer.tilemapCache:null;const {signal:f,resamplingLevel:p=0}=b;if(!c)return this._fetchImage(a,f);const g=new n(0,0,0,0);let q;try{await c.fetchAvailabilityUpsample(a.level,a.row,a.col,g,{signal:f}),q=await this._fetchImage(g,f)}catch(h){if(l.isAbortError(h))throw h;if(3>p&&(c=this._tileInfoView.getTileParentId(a.id)))return c=
new n(c),b=await this.fetchTile(c,{...b,resamplingLevel:p+1}),m.resampleImage(this._tileInfoView,b,c,a);throw h;}return m.resampleImage(this._tileInfoView,q,g,a)}canResume(){const a=super.canResume();return a?null!==this.tileMatrixSet:a}async _enqueueTileFetch(a){if(!this._fetchQueue.has(a.key.id)){try{const b=await this._fetchQueue.push(a.key);a.bitmap.source=b;a.bitmap.width=this._tileInfoView.tileInfo.size[0];a.bitmap.height=this._tileInfoView.tileInfo.size[1];a.once("attach",()=>this.requestUpdate())}catch(b){l.isAbortError(b)||
r.getLogger(this).error(b)}this.requestUpdate()}}async _fetchImage(a,b){return this.layer.fetchImageBitmapTile(a.level,a.row,a.col,{signal:b})}_getTileMatrixSetBySpatialReference(a){return a.tileMatrixSets?.find(b=>e.equals(b.tileInfo?.spatialReference,this.view.spatialReference))}};k.__decorate([t.property({readOnly:!0})],d.prototype,"tileMatrixSet",null);return d=k.__decorate([u.subclass("esri.views.2d.layers.WMTSLayerView2D")],d)});
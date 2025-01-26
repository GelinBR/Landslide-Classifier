// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Collection ../../../core/CollectionFlattener ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../rest/support/DirectionLine ../../../rest/support/DirectionPoint ../../../rest/support/PointBarrier ../../../rest/support/PolygonBarrier ../../../rest/support/PolylineBarrier ../../../rest/support/RouteInfo ../../../rest/support/Stop ./LayerView3D ./graphics/GraphicsProcessor ./support/LayerViewPerformanceInfo ./support/projectExtentUtils ../support/EventedSet ../webgl-engine/lib/UpdatePolicy ../../layers/LayerView ../../support/HighlightDefaults".split(" "),
function(e,l,m,n,k,f,c,G,H,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F){c=class extends y.LayerView3D(E){constructor(){super(...arguments);this.type="route-3d";this.loadedGraphics=new C.EventedSet;this._byObjectID=new Map;this.slicePlaneEnabled=!1;this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new z.GraphicsProcessor({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0}));this.addResolvingPromise(this.processor.initializePromise);this._updatingHandles.addOnCollectionChange(()=>
this._routeItems,a=>this._routeItemsChanged(a),k.initial);this.addResolvingPromise(B.toViewIfLocal(this).then(a=>this.fullExtentInLocalViewSpatialReference=a));this.addHandles(k.when(()=>this.view?.basemapTerrain?.ready,()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this._updatingHandles.removeAll();this._set("processor",n.destroyMaybe(this.processor));this._get("_routeItems")?.destroy()}get _routeItems(){return new m({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,
this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,null!=this.layer.routeInfo?new l([this.layer.routeInfo]):null]})}_routeItemsChanged(a){if(a.removed.length){this.loadedGraphics.removeMany(a.removed.map(b=>{const d=this._byObjectID.get(b);this._byObjectID.delete(b);return d}));for(const b of a.removed)this.removeHandles(b)}if(a.added.length){this.loadedGraphics.addMany(a.added.map(b=>{const d=b.toGraphic();this._byObjectID.set(b,d);return d}));for(const b of a.added)this.addHandles([k.watch(()=>
b.geometry,(d,g)=>{this._updateGraphic(b,"geometry",d,g)}),k.watch(()=>b.symbol,(d,g)=>{this._updateGraphic(b,"symbol",d,g)})],b)}}get legendEnabled(){return this.canResume()&&!this.processor?.frustumVisibilitySuspended}get visibleAtCurrentScale(){return!(this.processor?.scaleVisibilitySuspended??!1)}getSuspendInfo(){const a=super.getSuspendInfo();a.outsideOfView=this.processor?.frustumVisibilitySuspended??!1;return a}getHit(a){return this.processor.getHit(a)}whenGraphicBounds(a,b){return this.processor.whenGraphicBounds(a,
b)}computeAttachmentOrigin(a,b){return this.processor?.computeAttachmentOrigin(a,b)}getSymbolLayerSize(a,b){return this.processor.getSymbolLayerSize(a,b)}async queryGraphics(){return new l(this.loadedGraphics.toArray())}maskOccludee(a){return this.processor.maskOccludee(a)}highlight(a,b){if(a instanceof q||a instanceof r||a instanceof t||a instanceof u||a instanceof v||a instanceof w||a instanceof x)a=this._byObjectID.get(a);return this.processor.highlight(a,b??F.defaultHighlightName)}get updatePolicy(){return this.processor?.graphicsCore.effectiveUpdatePolicy||
D.UpdatePolicy.SYNC}isUpdating(){return!(!this.processor?.updating&&this.view?.basemapTerrain?.ready)}get performanceInfo(){return new A.LayerViewPerformanceInfo(this.processor?.graphicsCore.usedMemory??0,this.loadedGraphics.length,-1,-1,0,this.processor?.graphicsCore.performanceInfo??null)}_updateGraphic(a,b,d,g){a=this._byObjectID.get(a);a[b]=d;h.graphic=a;h.property=b;h.oldValue=g;h.newValue=d;this.processor?.graphicsCore.graphicUpdateHandler(h)}};e.__decorate([f.property()],c.prototype,"_routeItems",
null);e.__decorate([f.property()],c.prototype,"loadedGraphics",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"legendEnabled",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null);e.__decorate([f.property()],c.prototype,"layer",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"processor",void 0);e.__decorate([f.property({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0);c=e.__decorate([p.subclass("esri.views.3d.layers.RouteLayerView3D")],
c);const h={graphic:null,property:null,oldValue:null,newValue:null};return c});
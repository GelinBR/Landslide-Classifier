// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/has ../../../../core/reactiveUtils ../../../../core/accessorSupport/decorators/property ../../../../core/Logger ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/ray ../debugFlags ../debugUtils ../geometryUtils/ray ./CameraOnSurface ./CenterOnSurface ./ContentGeometryUpdates ./Focus ./StableSurfaceCenter ./SurfaceGeometryUpdates ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/verticalOffsetUtils ../../../support/PropertiesPool ../../../support/Scheduler".split(" "),
function(b,e,z,P,d,f,Q,R,A,n,u,v,B,l,C,D,r,E,F,G,H,w,I,J,K,p){b.PointsOfInterest=class extends z{constructor(a){super(a);this.renderPointOfView=u.create();this._pois=[];this._debugCenters=null;this._tmpRay=v.create();this._centerRayDirty=!0;this._surfaceAltitudeAtCenter=0;this._surfaceAltitudeAtCenterDirty=!0;this._contentAltitudeAtCenter=0;this._contentAltitudeAtCenterDirty=!0;this._propertiesPool=new K.PropertiesPool({renderPointOfView:L},this)}initialize(){const {state:a,basemapTerrain:c,renderCoordsHelper:g,
map:t}=this.view;this._surfaceIntersector=w.newIntersector(a.viewingMode);this._surfaceIntersector.options.invisibleTerrain=!1;this._surfaceIntersector.options.store=I.StoreResults.MIN;this._contentIntersector=w.newIntersector(a.viewingMode);const q=()=>this._estimateSurfaceAltitudeAtCenter(),x=this.view.resourceController.scheduler,y=this.view.basemapTerrain?.elevationQueryCache,m={state:a,scheduler:x,surface:c,renderCoordsHelper:g};this._set("centerOnSurfaceInfrequent",new r.CenterOnSurface({...m,
task:p.TaskPriority.POINT_OF_INTEREST_INFREQUENT,estimateSurfaceAltitudeAtCenter:q}));this._set("centerOnSurfaceFrequent",new r.CenterOnSurface({...m,task:p.TaskPriority.POINT_OF_INTEREST_FREQUENT,estimateSurfaceAltitudeAtCenter:q}));this._set("centerOnContent",new r.CenterOnSurface({...m,task:p.TaskPriority.POINT_OF_INTEREST_FREQUENT,estimateSurfaceAltitudeAtCenter:()=>this._estimateContentAltitudeAtCenter()}));this._set("cameraOnSurface",new D.CameraOnSurface({...m,cache:y,task:p.TaskPriority.POINT_OF_INTEREST_INFREQUENT,
map:t}));this._set("surfaceGeometryUpdates",new H.SurfaceGeometryUpdates({...m,centerOnSurfaces:[this.centerOnSurfaceFrequent,this.centerOnContent,this.centerOnSurfaceInfrequent]}));this._set("contentGeometryUpdates",new E.ContentGeometryUpdates({contentLayerViews:this.view.allLayerViews,renderCoordsHelper:g}));this._set("surfaceOrigin",new G.StableSurfaceCenter({cache:y,view:this.view}));this._set("focus",new F.Focus({state:a,scheduler:x,surface:c,renderCoordsHelper:g,centerOnSurface:this.centerOnSurfaceFrequent,
estimateSurfaceIntersectionAtRenderPoint:(h,M)=>this._estimateSurfaceIntersectionAtRenderPoint(h,this.view.state.contentCamera,M)}));this._pois.push(this.centerOnContent,this.centerOnSurfaceFrequent,this.centerOnSurfaceInfrequent,this.cameraOnSurface,this.focus);this.addHandles([d.watch(()=>a.contentCamera,h=>this._cameraChanged(h),d.sync),d.watch(()=>c.extent,()=>this._updateCenterPointsOfInterest()),d.watch(()=>this.view.map?.ground?.navigationConstraint?.type,h=>{this._surfaceIntersector.options.backfacesTerrain=
"none"===h},d.initial),d.when(()=>!c.updating,()=>this._updateCenterPointsOfInterest(),d.sync),d.on(()=>this.surfaceGeometryUpdates.events,"request-update",()=>this._updateCenterPointsOfInterest()),d.on(()=>this.contentGeometryUpdates.events,"request-update",()=>this._updateCenterOnContent()),d.watch(()=>B.debugFlags.SHOW_POI,h=>this._setDebug(h),d.initial)]);this._cameraChanged(this.view.state.contentCamera);for(const h of this._pois)h.runTask()}destroy(){this._setDebug(!1);this._propertiesPool.destroy();
for(const a of this._pois)a.destroy();this.surfaceOrigin.destroy()}get updating(){return!(!this.surfaceGeometryUpdates?.updating&&!this._pois.some(a=>a.updating))}get _centerRay(){this._centerRayDirty&&(this._centerRayCached=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(this.view.state.contentCamera,this._tmpRay),this._centerRayDirty=!1);return this._centerRayCached}_estimateContentAltitudeAtCenter(){if(!this._contentAltitudeAtCenterDirty)return this._contentAltitudeAtCenter;this._contentAltitudeAtCenterDirty=
!1;const a=this._centerRay;if(null==a)return this._contentAltitudeAtCenter;this.view.sceneIntersectionHelper.intersectRay(a,this._contentIntersector,k,N)?this._contentAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(k):this._contentAltitudeAtCenter=this._estimateSurfaceAltitudeAtCenter();return this._contentAltitudeAtCenter}_estimateSurfaceAltitudeAtCenter(){if(!this.view.basemapTerrain)return 0;if(!this._surfaceAltitudeAtCenterDirty)return this._surfaceAltitudeAtCenter;this._surfaceAltitudeAtCenterDirty=
!1;const a=this._centerRay;if(null==a)return this._surfaceAltitudeAtCenter;const c=a.origin,g=n.add(k,a.origin,a.direction);this._surfaceIntersector.resetWithRay(a,this.view.state.contentCamera);this.view.basemapTerrain.intersect(this._surfaceIntersector,null,c,g);this._surfaceIntersector.results.min.getIntersectionPoint(k)&&(this._surfaceAltitudeAtCenter=this.view.renderCoordsHelper.getAltitude(k));return this._surfaceAltitudeAtCenter}_estimateSurfaceIntersectionAtRenderPoint(a,c,g){a=C.fromRenderAtEye(c,
a,O);if(null==a)return null;const t=a.origin,q=n.add(k,a.origin,a.direction);this._surfaceIntersector.resetWithRay(a,c);this.view.basemapTerrain.intersect(this._surfaceIntersector,null,t,q);return this._surfaceIntersector.results.min.getIntersectionPoint(g)?g:null}_cameraChanged(a){this._updateCenterPointsOfInterest();a=a.eye;n.exactEquals(this.renderPointOfView,a)||this._set("renderPointOfView",n.copy(this._propertiesPool.get("renderPointOfView"),a))}_updateCenterPointsOfInterest(){this._contentAltitudeAtCenterDirty=
this._surfaceAltitudeAtCenterDirty=this._centerRayDirty=!0;for(const a of this._pois)a.updateRenderLocation()}_updateCenterOnContent(){this._contentAltitudeAtCenterDirty=!0;this.centerOnContent.updateRenderLocation()}_setDebug(a){if(a){this._debugCenters||(this._debugCenters=new Map,a=this.view.graphics,this._debugCenters.set(this.centerOnContent,new l.PointGraphics(a,"red","CenterOnContent")),this._debugCenters.set(this.centerOnSurfaceFrequent,new l.PointGraphics(a,"red","CenterOnSurface")),this._debugCenters.set(this.centerOnSurfaceInfrequent,
new l.PointGraphics(a,"red","CenterOnSurface")),this._debugCenters.set(this.cameraOnSurface,new l.PointGraphics(a,"blue","CameraOnSurface")),this._debugCenters.set(this.focus,new l.PointGraphics(a,"green","Focus")));for(const c of this._pois)this.addHandles(d.watch(()=>c.renderLocation,g=>this._debugCenters?.get(c)?.show(g,c.renderCoordsHelper.spatialReference),d.initial),"debug")}else this._debugCenters?.forEach(c=>c.hide()),this.removeHandles("debug")}get test(){}};e.__decorate([f.property()],b.PointsOfInterest.prototype,
"centerOnContent",void 0);e.__decorate([f.property()],b.PointsOfInterest.prototype,"centerOnSurfaceFrequent",void 0);e.__decorate([f.property()],b.PointsOfInterest.prototype,"centerOnSurfaceInfrequent",void 0);e.__decorate([f.property()],b.PointsOfInterest.prototype,"cameraOnSurface",void 0);e.__decorate([f.property()],b.PointsOfInterest.prototype,"focus",void 0);e.__decorate([f.property()],b.PointsOfInterest.prototype,"renderPointOfView",void 0);e.__decorate([f.property()],b.PointsOfInterest.prototype,
"surfaceOrigin",void 0);e.__decorate([f.property()],b.PointsOfInterest.prototype,"contentGeometryUpdates",void 0);e.__decorate([f.property()],b.PointsOfInterest.prototype,"surfaceGeometryUpdates",void 0);e.__decorate([f.property({constructOnly:!0})],b.PointsOfInterest.prototype,"view",void 0);e.__decorate([f.property()],b.PointsOfInterest.prototype,"updating",null);b.PointsOfInterest=e.__decorate([A.subclass("esri.views.3d.support.pointsOfInterest.PointsOfInterest")],b.PointsOfInterest);const L=Array,
k=u.create(),O=v.create(),N={exclude:new Set([J.terrainId])};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
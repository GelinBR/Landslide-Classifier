// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Cyclical ../../../core/has ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../core/libs/gl-matrix-2/math/vec2 ../../../chunks/vec32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../chunks/vec42 ../../../core/libs/gl-matrix-2/factories/vec4f64 ../../../geometry/ellipsoidUtils ../../../geometry/projection/projectVectorToVector ../../../geometry/support/aaBoundingRect ../../../geometry/support/ray ../../../chunks/sphere ../../../geometry/support/vector ../../../geometry/support/webMercatorUtils ../state/utils/viewUtils ../support/debugFlags ../support/debugUtils ./interfaces ./OverlayRenderer ../webgl-engine/lib/basicInterfaces ../webgl-engine/lib/Intersector ../webgl-engine/lib/LocalOriginFactory ../webgl-engine/lib/SortedRenderGeometryRenderer ../webgl-engine/lib/textureUtils ../webgl-engine/parts/renderUtils ../../support/Scheduler ../../support/Yield".split(" "),
function(l,m,O,E,P,F,Q,z,p,ka,la,R,S,B,K,G,L,C,M,k,N,H,T,U,V,I,W,q,X,y,Y,Z,aa,ba,ca,J,da){const ea=[[-.1,-2,3.9,2],[-.1,-3.9,3.9,.1],[-2,-3.9,2,.1],[-3.9,-3.9,.1,.1],[-3.9,-2,.1,2],[-3.9,-.1,.1,3.9],[-2,-.1,2,3.9],[-.1,-.1,3.9,3.9]];let x;l.OverlayManager=class extends O{constructor(a){super(a);this._renderSR=this._spatialReference=null;this._overlaySREqualsRenderSR=!0;this._drapeSources=new Set;this._drapeTargets=new Set;this._drawTexturesAnimateDirty=this._drawTexturesDirty=this._contentUpdated=
this._placementDirty=!1;this._longitudeCyclical=null;this._latestOriginId=0;this._maxResolution=P("esri-mobile")?2048:4096}initialize(){const a=this.view;this.renderer=new X.OverlayRenderer({view:a,worldToPCSRatio:this._worldToPCSRatio,spatialReference:this._spatialReference});a._stage.renderer.plugins.add(this.renderer);const b=()=>this.setDrawTexturesDirty();this._groundIntersector=Y.newIntersector(this.view.state.viewingMode);this._groundIntersector.options.backfacesTerrain=!0;this._groundIntersector.options.invisibleTerrain=
!0;this._groundIntersector.options.hud=!1;this.addHandles([z.watch(()=>this.renderer.hasHighlights,b),this.renderer.events.on("has-water",()=>a._stage?.renderer.updateHasFlags()),this.renderer.events.on("content-changed",b),z.watch(()=>a.state.camera.pixelRatio,b),z.watch(()=>a.state.alignPixelEnabled,b),this.renderer.events.on("textures-disposed",()=>this.surface.requestRender()),z.watch(()=>[a.pointsOfInterest?.renderPointOfView,a.pointsOfInterest?.centerOnSurfaceFrequent?.location],()=>this.setPlacementDirty()),
z.watch(()=>[a.state?.pixelRatio,a.state?.contentPixelRatio],()=>this.setPlacementDirty(),z.sync),this.surface.on("elevation-change",()=>this.setPlacementDirty()),a.on("resize",()=>this.setPlacementDirty()),a.resourceController.scheduler.registerTask(J.TaskPriority.OVERLAY,this),a._stage.renderView.events.on("force-camera-for-screenshot",c=>{this._updateOverlays(J.noBudget,c.camera,y.RenderRequestType.BACKGROUND);this.renderer.hasOverlays&&this._drawOverlays(y.RenderRequestType.BACKGROUND,c)})]);
a._stage.renderer.overlay=this}destroy(){this.view?._stage&&(this.view._stage.renderer.plugins.remove(this.renderer),this.view._stage.renderer.overlay=null);x&&(x.hide(),x=null);this.renderer=Q.destroyMaybe(this.renderer)}get running(){return this._placementDirty&&(0<this._drapeSources.size||0<this.view.graphics.length||I.debugFlags.OVERLAY_DRAW_DEBUG_TEXTURE)&&!!this._spatialReference&&!this.suspended&&this.surface.ready}get _isSpherical(){return this.view.state.isGlobal}get _worldToPCSRatio(){return null!=
this._spatialReference&&this._spatialReference.isGeographic&&!this.view.state.isLocal?C.getReferenceEllipsoid(this._spatialReference).metersPerDegree:1}get _overlayStretch(){return 1.3/this.view.resolutionScale}get suspended(){return this.surface.suspended}get updating(){return this.running||this.renderer.updating||this._contentUpdated}get rendersOccludedDraped(){return this.renderer.rendersOccludedDraped}render(){this._contentUpdated=!1;this.renderer.processSyncDrapeSources();if(this.renderer.hasOverlays)return this._precompileShaders()?
this._drawOverlays(y.RenderRequestType.UPDATE):null}get hasOverlays(){return this.renderer.hasOverlays}setSpatialReference(a){this._spatialReference=a;this.renderer.spatialReference=a;this._longitudeCyclical=null;const b=this.view.renderSpatialReference;null!=a&&null!=b?(this._renderSR=b,this._overlaySREqualsRenderSR=a.equals(this._renderSR),this._isSpherical&&(this._longitudeCyclical=a.isWebMercator?new E.Cyclical(-2.0037508342787E7,2.0037508342787E7):new E.Cyclical(-180,180),this.renderer.longitudeCyclical=
this._longitudeCyclical),this.renderer&&(this.renderer.worldToPCSRatio=this._worldToPCSRatio)):this.renderer.disposeOverlays()}registerDrapeSource(a,b,c){this._drapeSources.add(a);this.renderer.ensureOverlays(this._drapeTargets,this._drapeSources);b=this.renderer.createDrapeSourceRenderer(a,b,c);this._updateDrapeSourceExtent(a);this._setContentDirty();this.notifyChange("running");return b}registerGeometryDrapeSource(a){return this.registerDrapeSource(a,aa.SortedRenderGeometryRenderer)}_updateDrapeSourceExtent(a){2===
this.renderer.overlays.length&&null!=a.setDrapingExtent&&null!=this._spatialReference&&a.setDrapingExtent(this.renderer.overlays,this._spatialReference)}unregisterDrapeSource(a){this._drapeSources.has(a)&&(this._drapeSources.delete(a),this.renderer.removeDrapeSourceRenderer(a),this.renderer.ensureDrapeSources(this._drapeSources),this._setContentDirty(),this.notifyChange("running"))}registerDrapeTarget(a){this._drapeTargets.add(a);this.renderer.ensureOverlays(this._drapeTargets,this._drapeSources)}unregisterDrapeTarget(a){this._drapeTargets.delete(a);
this.renderer.ensureDrapeTargets(this._drapeTargets)}_setContentDirty(){this.setPlacementDirty();this.setDrawTexturesDirty()}setPlacementDirty(){this._placementDirty=!0}runTask(a){return this._updateOverlays(a,this.view.state.contentCamera,y.RenderRequestType.UPDATE)}_updateOverlays(a,b,c){if(!this._spatialReference)return da.Yield;var d=this._computeOverlayResolution(b);this._computeOverlayExtents(b,d,t);this.renderer.ensureOverlays(this._drapeTargets,this._drapeSources,t.stretch);b=this._updateOverlay(q.OverlayIndex.INNER,
t.inner,d,1*t.pixelRatioAdjustment,t.mapUnitsPerPixel);const e=k.width(t.inner)/k.width(t.outer);d=this._updateOverlay(q.OverlayIndex.OUTER,t.outer,d,e*t.pixelRatioAdjustment,t.mapUnitsPerPixel);if(b===u.EXTENT||d===u.EXTENT)this._drapeSources.forEach(f=>this._updateDrapeSourceExtent(f)),this.surface.updateTileOverlayParams(c);b===u.NONE&&d===u.NONE||this.setDrawTexturesDirty();this._placementDirty=!1;a.madeProgress()}_computeOverlayResolution(a){const b=this.view.state.contentPixelRatio*this.view.resolutionScale;
return Math.min(ba.applyTextureResizeModulo(Math.ceil(1.5*Math.max(a.fullWidth/a.pixelRatio*b,a.fullHeight/a.pixelRatio*b))),this._maxResolution)}_updateOverlay(a,b,c,d,e){if(0===this.renderer.overlays.length)return u.NONE;a=this.renderer.overlays[a];const f=a.mapUnitsPerPixel;a.mapUnitsPerPixel=e;a.pixelRatio=d;d=a.extent;const r=I.debugFlags.TESTS_DISABLE_OPTIMIZATIONS?0:1E-5*Math.max(b[2]-b[0],b[3]-b[1],d[2]-d[0],d[3]-d[1]);if(Math.abs(d[0]-b[0])<=r&&Math.abs(d[1]-b[1])<=r&&Math.abs(d[2]-b[2])<=
r&&Math.abs(d[3]-b[3])<=r&&c===a.resolution)return f===e?u.NONE:u.RERENDER_ONLY;k.copy(a.extent,b);a.resolution=c;b=k.center(a.extent);a.renderLocalOrigin=Z.fromValues(b[0],b[1],0,`OV_${this._latestOriginId++}`);return u.EXTENT}setTileParameters(a){const b=a.renderData.overlay;if(0<this.renderer.overlays.length){const c=this.renderer.overlays[q.OverlayIndex.INNER],d=this.renderer.overlays[q.OverlayIndex.OUTER];a=a.extent;this._rectInsideRect(c.extent,a)||this._rectanglesOverlap(a,c.extent)||this._rectanglesOverlap(a,
d.extent)?(this._setTileOverlayData(a,q.OverlayIndex.INNER,b),this._setTileOverlayData(a,q.OverlayIndex.OUTER,b)):(this._clearTileOverlayData(q.OverlayIndex.INNER,b),this._clearTileOverlayData(q.OverlayIndex.OUTER,b))}else this._clearTileOverlayData(q.OverlayIndex.INNER,b),this._clearTileOverlayData(q.OverlayIndex.OUTER,b)}overlayPixelSizeInMapUnits(a,b){if(0===this.renderer.overlays.length)return b();b=this.renderer.overlays[q.OverlayIndex.INNER];const c=this.renderer.overlays[q.OverlayIndex.OUTER];
a=this._pointIsInExtent(a,b.extent)?b:c;return(a.extent[2]-a.extent[0])/a.resolution}_setTileOverlayData(a,b,c){if(0!==this.renderer.overlays.length){var d=this.renderer.overlays[b].extent,e=k.width(d),f=k.height(d),r=a[0];if(this._longitudeCyclical){r=this._longitudeCyclical.minimalMonotonic(d[0],r);const n=this._longitudeCyclical.minimalMonotonic(d[0],a[2]);r>n&&(r=n-(a[2]-a[0]))}c.setScale(b,k.width(a)/e,k.height(a)/f);c.setOffset(b,(r-d[0])/e,(a[1]-d[1])/f)}}_clearTileOverlayData(a,b){b.setScale(a,
-1,-1);b.setOffset(a,-1,-1)}reloadShaders(){ca.removeLoadedShaderModules();this.setDrawTexturesDirty();this.runTask(J.noBudget)}updateAnimation(a){this.renderer.updateAnimation(a)&&(this._drawTexturesAnimateDirty=!0);return this._drawTexturesAnimateDirty}setDrawTexturesDirty(){this.renderer.hasOverlays?(this._drawTexturesDirty=this._contentUpdated=!0,this.view._stage.renderView.requestRender()):this.setPlacementDirty()}_intersectGroundFromView(a,b,c,d){c=this.view.sceneIntersectionHelper.getCenterRayWithSubpixelOffset(a,
fa,b,c);if(null==c)return!1;b=c.origin;c=B.add(D,c.origin,c.direction);this._groundIntersector.reset(b,c,a);this._groundIntersector.intersect([]);this.view.basemapTerrain.intersect(this._groundIntersector,null,b,c);return this._groundIntersector.results.min.getIntersectionPoint(d)}_findHorizonBasedPointOfInterest(a,b){var c=.5;c=this.view.renderCoordsHelper.getAltitude(a.eye);const d=this.view.pointsOfInterest.centerOnSurfaceFrequent;var e=F.clamp(d.estimatedSurfaceAltitude,a.aboveGround?-Infinity:
c+1E-5,a.aboveGround?c-1E-5:Infinity);c=a.aboveGround;if("global"===this.view.viewingMode){var f=D;H.closestPointOnSilhouette(H.fromRadius(H.tmpSphere,C.getReferenceEllipsoid(this.view.spatialReference).radius+e),N.wrap(a.eye,a.viewForward),f);B.subtract(f,f,a.eye);e=E.cyclicalPI.normalize(T.angleAroundAxis(a.viewForward,f,a.viewRight))/a.fovY+.5;f=0>=e||1<=e?.5:.55;c=c?f*e:e+f*(1-e)}else e=L.fromValues(0,Math.tan(.5*Math.PI-Math.acos(-a.viewForward[2])),1,0),e=G.transformMat4(e,e,a.projectionMatrix)[1],
e=F.clamp(.5+.5*e,0,1),c=1===e||0===e?.5:c?.55*e:1-.55*(1-e);return this._intersectGroundFromView(a,.5,c,b)?B.sqrDist(b,a.eye)<d.distance*d.distance:!1}_computeOverlayExtents(a,b,c){var d=this.view.pointsOfInterest.centerOnSurfaceFrequent.renderLocation;const e=K.create();this._findHorizonBasedPointOfInterest(a,e)||B.copy(e,d);I.debugFlags.OVERLAY_SHOW_CENTER?(null==x&&(x=new W.PointGraphics(this.view.graphics,"red")),x.show(e,this._renderSR)):null!=x&&x.hide();var f=Math.max(.1,B.distance(a.eye,
e));const r=V.viewAngle(this.view.renderCoordsHelper,d,a.eye);this._overlaySREqualsRenderSR||M.projectVectorToVector(e,this._renderSR,e,this._spatialReference);d=this.surface.extent;var n=!this._isSpherical&&this._spatialReference?.isGeographic,v=n&&this._spatialReference?1/C.getReferenceEllipsoid(this._spatialReference).metersPerDegree:1;f=a.perScreenPixelRatio/this.view.state.contentPixelRatio*f*v;c.mapUnitsPerPixel=f/this._worldToPCSRatio;c.stretch=this._overlayStretch;f=b*f/2*c.stretch;var g=
!1;n=n?90:Infinity;this._isSpherical&&d&&this._spatialReference&&(this._spatialReference.isWebMercator?(f/=Math.cos(U.y2lat(e[1])),n=d[3]):(g=!0,f/=C.getReferenceEllipsoid(this._spatialReference).metersPerDegree,n=90),f>=n&&(f=n,e[1]=0,this._spatialReference.isWebMercator&&(e[0]=0)));v=1;g&&(v=1/Math.max(.2,Math.cos(Math.abs(F.deg2rad(e[1])))),180<f*v&&(v=180/f),c.mapUnitsPerPixel*=v);g=Math.log(2)/12;f=Math.exp(Math.round(Math.log(f)/g)*g);const A=f*v;g=.5*b/(32*A);var h=.5*b/(32*f);e[0]=Math.round(e[0]*
g)/g;e[1]=Math.round(e[1]*h)/h;g=c.inner;g[0]=e[0]-A;g[1]=e[1]-f;g[2]=e[0]+A;g[3]=e[1]+f;this._isSpherical&&this._shiftExtentToFitBounds(g,Infinity,n);h=c.outer;6*A>k.width(d)?k.copy(h,d):Math.PI/2-Math.abs(r-Math.PI/2)<=.25*Math.PI?(h[0]=g[0]-A,h[1]=g[1]-f,h[2]=g[2]+A,h[3]=g[3]+f):(M.projectVectorToVector(a.eye,this._renderSR,D,this._spatialReference),S.subtract(w,e,D),a=-Math.atan2(w[1],w[0])+.125*Math.PI,0>a&&(a+=2*Math.PI),G.scale(w,ea[Math.floor(a/(.25*Math.PI))],2*f),w[0]*=v,w[2]*=v,G.add(h,
g,w));this._isSpherical?(h[0]=this._longitudeCyclical.clamp(h[0]),h[2]=this._longitudeCyclical.clamp(h[2]),h[1]=Math.max(h[1],-n),h[3]=Math.min(h[3],n)):(a=k.intersection(g,d,ha),d=k.intersection(h,d,ia),k.contains(a,d)&&(h[2]=h[0],h[3]=h[1]));b=Math.abs(g[2]-g[0])/b;c.mapUnitsPerPixel=Math.max(c.mapUnitsPerPixel,b);c.pixelRatioAdjustment=c.mapUnitsPerPixel/b}_precompileShaders(){if(!this.renderer.hasOverlays)return!1;this.renderer.precompileShaders(this.view.state);return!0}_drawOverlays(a,b=this.view.state){if(!this._drawTexturesDirty&&
!this._drawTexturesAnimateDirty)return this.renderer;const c=this._drawTexturesDirty;this._drawTexturesDirty=this._drawTexturesAnimateDirty=!1;const d=this.renderer.computeValidity();this.renderer.releaseRenderTargets();this.renderer.drawOverlays(b);b=this.renderer.computeValidity();d!==b&&this.surface.updateTileOverlayParams(y.RenderRequestType.UPDATE);c?(this.surface.requestRender(a),a===y.RenderRequestType.UPDATE&&this.surface.requestUpdate()):this.surface.requestRender(y.RenderRequestType.BACKGROUND);
return this.renderer}_rectanglesOverlap(a,b){return null==a?!1:this._longitudeCyclical?(this._longitudeCyclical.contains(b[0],b[2],a[0])||this._longitudeCyclical.contains(b[0],b[2],a[2])||this._longitudeCyclical.contains(a[0],a[2],b[0]))&&!(a[1]>b[3]||a[3]<b[1]):k.intersects(a,b)}_rectInsideRect(a,b){return null==b?!1:this._longitudeCyclical?this._longitudeCyclical.contains(a[0],a[2],b[0])&&this._longitudeCyclical.contains(a[0],a[2],b[2])&&b[1]>a[1]&&b[3]<a[3]:k.contains(a,b)}_pointIsInExtent(a,b){if(this._longitudeCyclical)return this._longitudeCyclical.contains(b[0],
b[2],a.x)&&a.y>=b[1]&&a.y<=b[3];const c=a.x;a=a.y;return c>b[0]&&c<b[2]&&a>b[1]&&a<b[3]}_shiftExtentToFitBounds(a,b,c){let d=0,e=0;a[0]<-b?d=a[0]+b:a[2]>b&&(d=b-a[2]);a[1]<-c?e=a[1]+c:a[3]>c&&(e=c-a[3]);k.offset(a,d,e)}get test(){}};m.__decorate([p.property()],l.OverlayManager.prototype,"_spatialReference",void 0);m.__decorate([p.property({readOnly:!0})],l.OverlayManager.prototype,"running",null);m.__decorate([p.property()],l.OverlayManager.prototype,"_placementDirty",void 0);m.__decorate([p.property()],
l.OverlayManager.prototype,"_contentUpdated",void 0);m.__decorate([p.property()],l.OverlayManager.prototype,"_isSpherical",null);m.__decorate([p.property()],l.OverlayManager.prototype,"_worldToPCSRatio",null);m.__decorate([p.property()],l.OverlayManager.prototype,"renderer",void 0);m.__decorate([p.property({constructOnly:!0})],l.OverlayManager.prototype,"view",void 0);m.__decorate([p.property({constructOnly:!0})],l.OverlayManager.prototype,"surface",void 0);m.__decorate([p.property()],l.OverlayManager.prototype,
"suspended",null);m.__decorate([p.property()],l.OverlayManager.prototype,"updating",null);m.__decorate([p.property({type:Boolean})],l.OverlayManager.prototype,"rendersOccludedDraped",null);l.OverlayManager=m.__decorate([R.subclass("esri.views.3d.terrain.OverlayManager")],l.OverlayManager);class ja{constructor(){this.inner=k.create();this.outer=k.create();this.mapUnitsPerPixel=0;this.pixelRatioAdjustment=1;this.stretch=1.3}}const w=L.create(),D=K.create(),t=new ja,ha=k.create(),ia=k.create(),fa=N.create();
var u;(function(a){a[a.NONE=0]="NONE";a[a.EXTENT=1]="EXTENT";a[a.RERENDER_ONLY=2]="RERENDER_ONLY"})(u||={});Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
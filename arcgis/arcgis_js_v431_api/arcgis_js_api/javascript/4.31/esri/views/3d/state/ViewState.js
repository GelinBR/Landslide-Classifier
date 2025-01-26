// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Evented ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/watch ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/ellipsoidUtils ../../ViewAnimation ../../ViewingMode ./Constraints ./controllers/AnimationController ./controllers/CameraController ../webgl/RenderCamera ../webgl-engine/lib/rendererUtils ../../support/PropertiesPool ../../support/RenderState".split(" "),
function(c,b,r,t,d,C,D,E,u,v,k,w,x,l,y,z,m,g,h,p,n){function A(a,e){return a.fov!==e.fov||a.fullViewport[0]!==e.fullViewport[0]||a.fullViewport[1]!==e.fullViewport[1]||a.fullViewport[2]!==e.fullViewport[2]||a.fullViewport[3]!==e.fullViewport[3]||a.padding[h.PaddingSide.TOP]!==e.padding[h.PaddingSide.TOP]||a.padding[h.PaddingSide.RIGHT]!==e.padding[h.PaddingSide.RIGHT]||a.padding[h.PaddingSide.BOTTOM]!==e.padding[h.PaddingSide.BOTTOM]||a.padding[h.PaddingSide.LEFT]!==e.padding[h.PaddingSide.LEFT]?
!0:!1}b=class extends b{constructor(a){super(a);this._propertiesPool=new p.PropertiesPool({camera:g},this);this._lastSeenCameraProjectionValues=new g;this.mode=n.RenderState.ANIMATING;this._cssCamera=new g;this._camera=new g;this.contentPixelRatio=this.rasterPixelRatio=1;this.constraints=new y.Constraints({state:this});this.events=new r;this._cameraChanged=!1;this._updateQueue=[];this._processingUpdates=!1}reset(){this.cameraController=null;this._propertiesPool.destroy();this._propertiesPool=new p.PropertiesPool({camera:g},
this)}destroy(){this.cameraController=null;this._propertiesPool?.destroy();this._propertiesPool=null}createInitialCamera(){if(this.viewingMode===l.ViewingMode.Global){const a=w.getReferenceEllipsoid(this.spatialReference).radius;this.camera=new g({eye:k.fromValues(4*a,0,0),center:k.fromValues(a,0,0),up:k.fromValues(0,0,1)})}else this.camera=new g({eye:k.fromValues(0,0,100),center:k.fromValues(0,0,0),up:k.fromValues(0,1,0)})}get animation(){return this.cameraController instanceof z.AnimationController&&
null!=this.cameraController.viewAnimation?this.cameraController.viewAnimation:null}get cssCamera(){const a=this._cssCamera.copyFrom(this.camera),{height:e,width:B,pixelRatio:q}=this.camera;a.pixelRatio=1;a.height=Math.round(e/q);a.width=Math.round(B/q);return a}get camera(){return this._camera}set camera(a){a!==f&&f.copyFrom(a);f.computeUp(this.viewingMode);this.events.emit("before-camera-change",f);a=this._camera;A(this._lastSeenCameraProjectionValues,f)&&(this._lastSeenCameraProjectionValues.copyFrom(f),
this.events.emit("camera-projection-changed",this._lastSeenCameraProjectionValues));if(!a.equals(f)&&(this._camera=this._propertiesPool.get("camera").copyFrom(f),this._cameraChanged=!a.almostEquals(f))){const e=v.afterDispatch(()=>{this._cameraChanged=!1;e.remove()})}}get pixelRatio(){return this.camera.pixelRatio}get alignPixelEnabled(){return this.pixelRatio===this.rasterPixelRatio&&this.mode===n.RenderState.IDLE}get updating(){return this.mode!==n.RenderState.IDLE}get contentCamera(){return this._contentCamera??
this.camera}set contentCamera(a){this._contentCamera=null!=a?a.clone():null}get fixedContentCamera(){return null!=this._contentCamera}get isGlobal(){return this.viewingMode===l.ViewingMode.Global}get isLocal(){return this.viewingMode===l.ViewingMode.Local}get viewingMode(){return l.viewingModeFromString(this.view.viewingMode)}get spatialReference(){return this.view.spatialReference}get navigating(){return!!this.cameraController?.isInteractive}get stationary(){return!this._cameraChanged&&!this.navigating}get cameraController(){return this._get("cameraController")}set cameraController(a){this.stopActiveCameraController()?
(this.cameraController?.destroy(),a&&(this.removeHandles("ViewStateHandles"),this.addHandles(t.when(()=>a.state===m.State.Finished||a.state===m.State.Stopped,()=>{this._set("cameraController",null);this.updateCamera(e=>a.onControllerEnd(e))},{sync:!0,once:!0}),"ViewStateHandles"),a.onControllerStart(this.camera)),this._set("cameraController",a)):a&&(a.state=m.State.Rejected)}switchCameraController(a){this.cameraController=a}stopActiveCameraController(){return!this.cameraController||this.cameraController.stopController()}updateCamera(a){this._updateQueue.push(a);
this._processUpdateQueue()}_processUpdateQueue(){if(0!==this._updateQueue.length&&!this._processingUpdates){this._processingUpdates=!0;var a=this._updateQueue.shift();f.copyFrom(this._get("camera"));a(f);this.camera=f;this._processingUpdates=!1;this._processUpdateQueue()}}};c.__decorate([d.property({constructOnly:!0})],b.prototype,"view",void 0);c.__decorate([d.property()],b.prototype,"mode",void 0);c.__decorate([d.property({readOnly:!0,type:x})],b.prototype,"animation",null);c.__decorate([d.property({type:g})],
b.prototype,"cssCamera",null);c.__decorate([d.property()],b.prototype,"_cssCamera",void 0);c.__decorate([d.property({type:g})],b.prototype,"camera",null);c.__decorate([d.property()],b.prototype,"_camera",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"pixelRatio",null);c.__decorate([d.property()],b.prototype,"rasterPixelRatio",void 0);c.__decorate([d.property()],b.prototype,"contentPixelRatio",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"alignPixelEnabled",null);c.__decorate([d.property({readOnly:!0})],
b.prototype,"updating",null);c.__decorate([d.property({})],b.prototype,"_contentCamera",void 0);c.__decorate([d.property({type:g})],b.prototype,"contentCamera",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"fixedContentCamera",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"events",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"isGlobal",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"isLocal",null);c.__decorate([d.property({readOnly:!0})],b.prototype,
"viewingMode",null);c.__decorate([d.property()],b.prototype,"navigating",null);c.__decorate([d.property()],b.prototype,"stationary",null);c.__decorate([d.property()],b.prototype,"_cameraChanged",void 0);c.__decorate([d.property()],b.prototype,"cameraController",null);c=b=c.__decorate([u.subclass("esri.views.3d.state.ViewState")],b);const f=new g;return c});
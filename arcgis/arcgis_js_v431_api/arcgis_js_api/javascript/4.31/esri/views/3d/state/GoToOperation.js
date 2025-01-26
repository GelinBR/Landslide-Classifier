// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../Camera ../../../Viewpoint ../../../core/Error ../../../core/promiseUtils ../../../core/reactiveUtils ../camera/constraintUtils ../camera/constraintUtils/surfaceCollision ./controllers/CameraController ./controllers/PointToPointAnimationController ./controllers/SurfaceCollisionCorrectionController ../support/cameraUtils ../support/viewpointUtils".split(" "),function(l,p,q,h,m,r,t,n,e,k,u,v,w){class x{constructor(a,b,c){this._target=a;this._options=b;this.view=c;this.state=
"pending";this._animationController=null;this.promise=new Promise((f,g)=>{this._resolveCallback=f;this._rejectCallback=g;f=new AbortController;if(null!=this._options.signal)m.onAbort(this._options.signal,()=>this.abort());this._abortController=f;this._waitForReady()})}_resolve(a){if("finished"!==this.state)return this.state="finished",this._resolveCallback(a)}_reject(a){if("finished"!==this.state)return this.state="finished",this._rejectCallback(a)}abort(a=!1){this._abortController.abort();switch(this.state){case "wait-for-animation-finish":!a&&
null!=this._animationController&&this.view.state.cameraController===this._animationController&&this._animationController.running&&this._animationController.stopController()}this._reject(m.createAbortError())}async _waitForReady(){this.state="wait-for-ready";if(!this.view.ready)try{await r.whenOnce(()=>this.view.ready,this._abortController.signal)}catch(a){return this._reject(a)}this._createViewPoint()}async _createViewPoint(){if("finished"!==this.state){this.state="wait-for-viewpoint";this._animationController=
this._options.animate?this._getAnimationController():null;try{const b=await w.create(this.view,this._target,this._abortController.signal);if("finished"!==this.state){var a=b?this._getCameraFromViewpoint(b):null;null!=a&&(this._options.animate?null!=this._animationController&&this._startAnimation(a,this._animationController):(this.view.stateManager.setStateCamera(a.camera,{applyConstraints:!a.isFullySpecified,positionAndOrientationOnly:!0,doNotCancelGoToOperation:!0}),this._resolve()))}}catch(b){this._reject(b)}}}_getCameraFromViewpoint(a){const b=
!!(this._target instanceof q&&this._target.camera||this._target instanceof p);var c=a.camera;if(null==c)return null;if(!this.view.stateManager.isCompatible(c))return a=(a=c.position)&&a.spatialReference,this._reject(new h("GotoAnimation:incompatible-spatialreference",`Resulting camera has an incompatible spatial reference (camera: ${a?a.wkid:"none"}, view: ${this.view.spatialReference?.wkid})`,{camera:c})),null;c=v.externalToInternal(this.view,c);return null==c?(this._reject(new h("GotoAnimation:invalid-camera",
"Resulting camera is invalid")),null):{viewpoint:a,camera:c,isFullySpecified:b}}_startAnimation(a,b){this.state="wait-for-animation-finish";const c=b.viewAnimation;if(null==c)this._reject(new h("GotoAnimation:missing-animation","Unreachable code in view.stateManager"));else{c.update(a.viewpoint,"running");if(!b.running||null==b.viewAnimation||b.viewAnimation.target!==a.viewpoint||this.view.state.cameraController!==b)return this.abort();if(a.isFullySpecified){var f=new u.SurfaceCollisionCorrectionController({view:this.view,
desiredCamera:a.camera});n.applySurfaceCollisionConstraint(this.view,a.camera,n.Mode.EYE_AND_CENTER)}else t.applyAll(this.view,a.camera);b.begin(a.camera,this._options);var g=d=>{if(null!=this.view.state)switch(b.state){case e.State.Finished:switch(this.state){case "pending":case "wait-for-ready":case "wait-for-viewpoint":case "wait-for-animation-finish":this._resolve()}break;case e.State.Ready:case e.State.Rejected:case e.State.Running:case e.State.Stopped:switch(this.state){case "pending":case "wait-for-ready":case "wait-for-viewpoint":case "wait-for-animation-finish":this._reject(d)}}};
c.when(()=>{const d=this.view.state.cameraController;f&&(d&&d.running?k.isPointToPointAnimationController(d)&&null!=d.viewAnimation&&d.viewAnimation.target===a.viewpoint&&(this.view.state.cameraController=f):null!=b.viewAnimation&&b.viewAnimation.target===a.viewpoint&&b.state===e.State.Finished&&(this.view.state.cameraController=f))},d=>g(d));b.asyncResult={resolve:()=>g(),reject:d=>g(d)}}}_getAnimationController(){let a=null;var b=null;b=this.view.state.cameraController;k.isPointToPointAnimationController(b)&&
(b.updateStateFromViewAnimation(),b.running&&(a=b,b=a.viewAnimation));return null==a&&(a=new k.PointToPointAnimationController({view:this.view,mode:"animation"}),b=a.viewAnimation,this.view.state.switchCameraController(a),a.state===e.State.Rejected)?(b?.stop(),this._reject(new h("GotoAnimation:goto-cannot-interrupt","Cannot start an animation while interacting")),null):a}}l.GoToOperation=x;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
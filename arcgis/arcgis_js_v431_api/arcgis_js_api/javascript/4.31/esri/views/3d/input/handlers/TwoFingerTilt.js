// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler"],function(c,e,d,f){class g extends f.InputHandler{constructor(a,b=!1){super(!0);this._view=a;this._invert=b;this.registerIncoming("vertical-two-finger-drag",h=>this._handleTwoFinger(h))}_handleTwoFinger(a){const b=e.createScreenPointArray(0,a.data.delta*(this._invert?-1:1));switch(a.data.action){case "begin":this._cameraController?.end();this._cameraController=new d.RotateController({view:this._view,
pivot:d.PivotPoint.CENTER});this._view.state.switchCameraController(this._cameraController);this._cameraController.begin(b);break;case "update":this._cameraController?.update(b);break;case "end":this._cameraController?.end(),this._cameraController=null}}}c.TwoFingerTilt=g;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
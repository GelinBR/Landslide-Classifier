// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/a11yUtils ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./gamepad/GamepadSettings".split(" "),function(b,e,a,c,h,k,l,f,d){a=class extends a{constructor(g){super(g);this.browserTouchPanEnabled=!0;this.gamepad=new d;this.mouseWheelZoomEnabled=this.momentumEnabled=!0}get effectiveMomentumEnabled(){return this.momentumEnabled&&!e.prefersReducedMotion()}};
b.__decorate([c.property({type:Boolean})],a.prototype,"browserTouchPanEnabled",void 0);b.__decorate([c.property({type:d,nonNullable:!0})],a.prototype,"gamepad",void 0);b.__decorate([c.property({type:Boolean})],a.prototype,"momentumEnabled",void 0);b.__decorate([c.property({type:Boolean})],a.prototype,"mouseWheelZoomEnabled",void 0);return a=b.__decorate([f.subclass("esri.views.navigation.Navigation")],a)});
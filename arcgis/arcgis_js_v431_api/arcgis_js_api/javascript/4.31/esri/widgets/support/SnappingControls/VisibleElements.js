// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../GridControls/VisibleElements".split(" "),function(b,a,c,g,h,k,e,d){a=class extends a{constructor(f){super(f);this.gridEnabledToggle=this.featureEnabledToggle=this.enabledToggle=!0;this.header=!1;this.gridControls=this.layerList=!0;this.gridControlsElements=new d({gridSnapEnabledToggle:!1,
gridEnabledToggle:!1});this.selfEnabledToggle=this.layerListToggleLayersButton=!0}};b.__decorate([c.property({type:Boolean,nonNullable:!0})],a.prototype,"enabledToggle",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0})],a.prototype,"featureEnabledToggle",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0})],a.prototype,"gridEnabledToggle",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0})],a.prototype,"header",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0})],
a.prototype,"layerList",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0})],a.prototype,"gridControls",void 0);b.__decorate([c.property({type:d,nonNullable:!0})],a.prototype,"gridControlsElements",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0})],a.prototype,"layerListToggleLayersButton",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0})],a.prototype,"selfEnabledToggle",void 0);return a=b.__decorate([e.subclass("esri.widgets.support.SnappingControls.VisibleElements")],
a)});
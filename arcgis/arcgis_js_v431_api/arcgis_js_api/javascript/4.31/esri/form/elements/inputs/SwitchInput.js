// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./Input".split(" "),function(b,c,a,h,k,e,f){var d;a=d=class extends f{constructor(g){super(g);this.onValue=this.offValue=null;this.type="switch"}clone(){return new d({offValue:this.offValue,onValue:this.onValue})}};b.__decorate([c.property({type:[String,Number],json:{write:!0}})],a.prototype,"offValue",
void 0);b.__decorate([c.property({type:[String,Number],json:{write:!0}})],a.prototype,"onValue",void 0);b.__decorate([c.property({type:["switch"],json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=d=b.__decorate([e.subclass("esri.form.elements.inputs.SwitchInput")],a)});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./Input".split(" "),function(b,c,a,h,k,e,f){var d;a=d=class extends f{constructor(g){super(g);this.noValueOptionLabel=null;this.showNoValueOption=!0;this.type="combo-box"}clone(){return new d({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"noValueOptionLabel",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"showNoValueOption",void 0);b.__decorate([c.property({type:["combo-box"],json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=d=b.__decorate([e.subclass("esri.form.elements.inputs.ComboBoxInput")],a)});
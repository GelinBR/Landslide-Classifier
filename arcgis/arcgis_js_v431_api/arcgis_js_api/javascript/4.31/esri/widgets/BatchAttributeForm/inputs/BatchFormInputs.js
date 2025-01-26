// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./support/inputUtils".split(" "),function(a,b,g,h,d,l,m,n,k,f){a.BatchFormInputs=class extends g{constructor(c){super(c);this.template=null}get allFieldInputs(){const c=new h;for(const e of this.inputs)f.isFieldInput(e)?c.add(e):f.isGroupInput(e)&&
c.addMany(e.inputs.filter(f.isFieldInput));return c}get description(){return this.template?.description??null}get hasInvalidHiddenInputs(){return 0<this.invalidHiddenInputs.length}get invalidHiddenInputs(){return this.inputs.filter(c=>!c.valid&&!c.visible)}get title(){return this.template?.title??null}};b.__decorate([d.property()],a.BatchFormInputs.prototype,"allFieldInputs",null);b.__decorate([d.property()],a.BatchFormInputs.prototype,"description",null);b.__decorate([d.property()],a.BatchFormInputs.prototype,
"inputs",void 0);b.__decorate([d.property()],a.BatchFormInputs.prototype,"hasInvalidHiddenInputs",null);b.__decorate([d.property()],a.BatchFormInputs.prototype,"invalidHiddenInputs",null);b.__decorate([d.property()],a.BatchFormInputs.prototype,"template",void 0);b.__decorate([d.property()],a.BatchFormInputs.prototype,"title",null);a.BatchFormInputs=b.__decorate([k.subclass("esri.widgets.BatchAttributeForm.inputs.BatchFormInputs")],a.BatchFormInputs);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
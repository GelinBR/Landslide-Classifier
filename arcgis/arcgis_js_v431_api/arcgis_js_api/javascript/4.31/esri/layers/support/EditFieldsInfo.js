// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../time/timeZoneUtils".split(" "),function(b,a,d,c,h,k,l,e,f){a=class extends a.ClonableMixin(d.JSONSupport){constructor(g){super(g);this.timeZone=this.realm=this.editDateField=this.editorField=this.creationDateField=this.creatorField=null}};b.__decorate([c.property()],a.prototype,
"creatorField",void 0);b.__decorate([c.property()],a.prototype,"creationDateField",void 0);b.__decorate([c.property()],a.prototype,"editorField",void 0);b.__decorate([c.property()],a.prototype,"editDateField",void 0);b.__decorate([c.property()],a.prototype,"realm",void 0);b.__decorate([c.property(f.timeZoneProperty("dateFieldsTimeReference",!0))],a.prototype,"timeZone",void 0);return a=b.__decorate([e.subclass("esri.layers.support.EditFieldsInfo")],a)});
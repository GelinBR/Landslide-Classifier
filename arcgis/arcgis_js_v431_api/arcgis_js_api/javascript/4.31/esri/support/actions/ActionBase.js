// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/Identifiable ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,e,c,h,k,l,f){var d;a=d=class extends e.IdentifiableMixin(a){constructor(g){super(g);this.active=!1;this.className=null;this.disabled=!1;this.id=this.icon=null;this.indicator=!1;this.type=this.title=null;this.visible=!0}clone(){return new d({active:this.active,
className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible})}};b.__decorate([c.property()],a.prototype,"active",void 0);b.__decorate([c.property()],a.prototype,"className",void 0);b.__decorate([c.property()],a.prototype,"disabled",void 0);b.__decorate([c.property()],a.prototype,"icon",void 0);b.__decorate([c.property()],a.prototype,"id",void 0);b.__decorate([c.property()],a.prototype,"indicator",void 0);b.__decorate([c.property()],
a.prototype,"title",void 0);b.__decorate([c.property()],a.prototype,"type",void 0);b.__decorate([c.property()],a.prototype,"visible",void 0);return a=d=b.__decorate([f.subclass("esri.support.actions.ActionBase")],a)});
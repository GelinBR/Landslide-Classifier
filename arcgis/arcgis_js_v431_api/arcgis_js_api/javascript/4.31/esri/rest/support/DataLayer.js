// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./networkEnums ../../geometry/support/jsonUtils".split(" "),function(b,f,a,g,c,m,n,p,d,h,e,k){a=class extends a.ClonableMixin(g.JSONSupport){constructor(l){super(l);this.spatialRelationship=this.name=this.geometryType=
this.geometry=this.doNotLocateOnRestrictedElements=null;this.type="layer";this.where=null}};b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"doNotLocateOnRestrictedElements",void 0);b.__decorate([c.property({types:f.geometryTypes,json:{read:k.fromJSON,write:!0}})],a.prototype,"geometry",void 0);b.__decorate([d.enumeration(e.geometryTypeJsonMap)],a.prototype,"geometryType",void 0);b.__decorate([c.property({type:String,json:{name:"layerName",write:!0}})],a.prototype,"name",void 0);
b.__decorate([d.enumeration(e.spatialRelationshipJsonMap,{name:"spatialRel"})],a.prototype,"spatialRelationship",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"type",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=b.__decorate([h.subclass("esri.rest.support.DataLayer")],a)});
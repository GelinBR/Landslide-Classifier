// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/Clonable ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../geometry/support/jsonUtils ./spatialRelationships ../../time/TimeExtent".split(" "),function(b,g,a,h,c,r,t,u,k,l,m,e,n,p){a=class extends a.ClonableMixin(h.JSONSupport){constructor(){super(...arguments);
this.objectIds=this.geometry=null;this.spatialRelationship="intersects";this.where=this.timeExtent=null}writeGeometry(d,f,q){null!=d&&(f.geometryType=e.getJsonType(d),f[q]=JSON.stringify(d.toJSON()))}};b.__decorate([c.property({types:g.geometryTypes,json:{read:e.fromJSON,write:!0}})],a.prototype,"geometry",void 0);b.__decorate([m.writer("geometry")],a.prototype,"writeGeometry",null);b.__decorate([c.property({json:{write:!0}})],a.prototype,"objectIds",void 0);b.__decorate([k.enumeration(n.spatialRelKebabDict,
{ignoreUnknown:!1,name:"spatialRel"})],a.prototype,"spatialRelationship",void 0);b.__decorate([c.property({type:p,json:{name:"time",write:!0}})],a.prototype,"timeExtent",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"where",void 0);return a=b.__decorate([l.subclass("esri.rest.support.ImageGPSInfoParameters")],a)});
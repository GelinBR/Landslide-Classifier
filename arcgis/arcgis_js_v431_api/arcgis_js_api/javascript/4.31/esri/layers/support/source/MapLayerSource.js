// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/RandomLCG ../../../core/has ../../../core/accessorSupport/decorators/enumeration ../../../core/accessorSupport/decorators/subclass".split(" "),function(a,b,f,e,g,m,n,h,k){var c;a.MapLayerSource=c=class extends f.JSONSupport{constructor(d){super(d);this.type="map-layer"}clone(){const {mapLayerId:d,gdbVersion:l}=this;return new c({mapLayerId:d,
gdbVersion:l})}};b.__decorate([h.enumeration({mapLayer:"map-layer"})],a.MapLayerSource.prototype,"type",void 0);b.__decorate([e.property({type:g.Integer,json:{write:!0}})],a.MapLayerSource.prototype,"mapLayerId",void 0);b.__decorate([e.property({type:String,json:{write:!0}})],a.MapLayerSource.prototype,"gdbVersion",void 0);a.MapLayerSource=c=b.__decorate([k.subclass("esri.layers.support.source.MapLayerSource")],a.MapLayerSource);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
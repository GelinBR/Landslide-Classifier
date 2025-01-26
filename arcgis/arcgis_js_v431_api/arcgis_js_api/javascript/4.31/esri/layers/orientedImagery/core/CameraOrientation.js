// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/spatialReferenceUtils".split(" "),function(b,a,c,m,n,p,f,e){a=class extends a{set horizontalWKID(d){d?e.isValid({wkid:+d})?this._set("horizontalWKID",+d):this._set("horizontalWKID",d):this._set("horizontalWKID",null)}set verticalWKID(d){d?this._set("verticalWKID",
isFinite(d)&&e.isValid({wkid:+d})?+d:null):this._set("verticalWKID",null)}get isAdvanced(){const {affineTransformations:d,focalLength:g,principalOffsetPoint:h,radialDistortionCoefficients:k,tangentialDistortionCoefficients:l}=this;return 1<d?.length&&!Number.isNaN(g)&&1<h?.length&&1<k?.length&&1<l?.length}};b.__decorate([c.property({json:{write:!0}})],a.prototype,"affineTransformations",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"focalLength",void 0);b.__decorate([c.property({json:{write:!0}})],
a.prototype,"principalOffsetPoint",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"radialDistortionCoefficients",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"tangentialDistortionCoefficients",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"horizontalWKID",null);b.__decorate([c.property({json:{write:!0}})],a.prototype,"verticalWKID",null);b.__decorate([c.property({json:{write:!0}})],a.prototype,"x",void 0);b.__decorate([c.property({json:{write:!0}})],
a.prototype,"y",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"z",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"type",void 0);return a=b.__decorate([f.subclass("esri.layers.orientedImagery.core.CameraOrientation")],a)});
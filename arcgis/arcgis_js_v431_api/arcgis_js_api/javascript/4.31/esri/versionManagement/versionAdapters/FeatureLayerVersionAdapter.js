// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/interfaces ../../core/accessorSupport/tracking/Flags ../../core/Warning ../../core/Error".split(" "),function(e,c,d,f,g,h,k,l,m,n){class a{constructor(b){this.versionableItem=b;this.type="feature-layer"}get gdbVersion(){return this.versionableItem.gdbVersion}set gdbVersion(b){this.versionableItem.gdbVersion=b}get historicMoment(){return this.versionableItem.historicMoment}set historicMoment(b){this.versionableItem.historicMoment=
b}get featureServiceUrl(){return this.versionableItem.url.replace(/^(.*\/FeatureServer)\/\d+$/,"$1")}}c.__decorate([d.property({readOnly:!0})],a.prototype,"type",void 0);c.__decorate([d.property()],a.prototype,"gdbVersion",null);c.__decorate([d.property({type:Date})],a.prototype,"historicMoment",null);c.__decorate([d.property({readOnly:!0})],a.prototype,"featureServiceUrl",null);e.FeatureLayerVersionAdapter=a;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
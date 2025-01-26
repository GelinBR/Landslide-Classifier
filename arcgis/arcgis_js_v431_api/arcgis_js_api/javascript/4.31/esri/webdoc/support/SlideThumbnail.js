// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/JSONSupport ../../core/urlUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(a,b,f,e,c,h,k,l,g){var d;a.SlideThumbnail=d=class extends f.JSONSupport{constructor(){super(...arguments);this.url=""}destroy(){this.url=""}get isSecureUrl(){return e.isHTTPSProtocol(this.url)}get isDataURI(){return e.isDataProtocol(this.url)}clone(){return new d({url:this.url})}};
b.__decorate([c.property({type:String,json:{write:{isRequired:!0}}})],a.SlideThumbnail.prototype,"url",void 0);b.__decorate([c.property()],a.SlideThumbnail.prototype,"isSecureUrl",null);b.__decorate([c.property()],a.SlideThumbnail.prototype,"isDataURI",null);a.SlideThumbnail=d=b.__decorate([g.subclass("esri.webdoc.support.SlideThumbnail")],a.SlideThumbnail);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Ground ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../webdoc/support/opacityUtils".split(" "),function(d,f,b,g,h,m,n,k,e){var c;b=c=class extends b.JSONSupport{constructor(){super(...arguments);this.opacity=null}clone(){return new c({opacity:this.opacity})}cloneAndApplyTo(a){if(null==this.opacity)return a;a=a?.clone()??
new f;a.opacity=this.opacity;return a}static fromGround(a){return new c({opacity:a.opacity})}};d.__decorate([g.property({type:Number,json:{type:h.Integer,read:{reader:e.transparencyToOpacity,source:"transparency"},write:{writer:(a,l)=>{l.transparency=e.opacityToTransparency(a)},target:"transparency"}}})],b.prototype,"opacity",void 0);return b=c=d.__decorate([k.subclass("esri.webscene.support.SlideGround")],b)});
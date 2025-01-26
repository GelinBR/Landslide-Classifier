// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./MeshTexture ./MeshTextureTransform".split(" "),function(c,l,b,d,n,p,q,m,g,h){var f;b=f=class extends b.JSONSupport{constructor(a){super(a);this.colorTextureTransform=this.colorTexture=this.color=null;this.normalTextureTransform=this.normalTexture=void 0;this.alphaMode="auto";this.alphaCutoff=
.5;this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(a,e){const k=null!=a?a.get(this):null;if(k)return k;e=new f(this.clonePropertiesWithDeduplication(e));null!=a&&a.set(this,e);return e}clonePropertiesWithDeduplication(a){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(a),normalTexture:this.normalTexture?.cloneWithDeduplication(a),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,
colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let a;a=null!=this.color?16:0;null!=this.colorTexture&&(a+=this.colorTexture.memoryUsage);a+=null!=this.colorTextureTransform?20:0;null!=this.normalTexture&&(a+=this.normalTexture.memoryUsage);return a+=null!=this.normalTextureTransform?20:0}};c.__decorate([d.property({type:l,json:{write:!0}})],b.prototype,"color",void 0);
c.__decorate([d.property({type:g,json:{write:!0}})],b.prototype,"colorTexture",void 0);c.__decorate([d.property({type:h,json:{write:!0}})],b.prototype,"colorTextureTransform",void 0);c.__decorate([d.property({type:g,json:{write:!0}})],b.prototype,"normalTexture",void 0);c.__decorate([d.property({type:h,json:{write:!0}})],b.prototype,"normalTextureTransform",void 0);c.__decorate([d.property({nonNullable:!0,json:{write:!0}})],b.prototype,"alphaMode",void 0);c.__decorate([d.property({nonNullable:!0,
json:{write:!0}})],b.prototype,"alphaCutoff",void 0);c.__decorate([d.property({nonNullable:!0,json:{write:!0}})],b.prototype,"doubleSided",void 0);return b=f=c.__decorate([m.subclass("esri.geometry.support.MeshMaterial")],b)});
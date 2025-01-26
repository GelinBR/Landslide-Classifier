// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/mathUtils ./enums ../../webgl-engine/core/material/RenderTexture ../../webgl-engine/core/shaderLibrary/util/AlphaCutoff ../../webgl-engine/core/shaderLibrary/util/EllipsoidMode ../../webgl-engine/lib/basicInterfaces ../../webgl-engine/lib/Texture ../../webgl-engine/materials/pbrUtils ../../../webgl/enums".split(" "),function(p,x,y,d,t,z,E,g,F,q,w){function A(b){return b.sort((a,c)=>a.encoding-c.encoding)}function u(b,a,c){if(null==b||c===d.TextureUsage.None)return null;
for(let e=0;e<b.length;e++){const h=b[e];if(null!=h&&0!==(h.usage&c))return b=a[e],null!=b?b.id:null}return null}function G(b){switch(b){case d.TextureEncoding.KTX2:return g.TextureEncodingMimeType.KTX2_ENCODING;case d.TextureEncoding.Basis:return g.TextureEncodingMimeType.BASIS_ENCODING;case d.TextureEncoding.DDS_S3TC:return g.TextureEncodingMimeType.DDS_ENCODING;case d.TextureEncoding.PNG:return"image/png";case d.TextureEncoding.JPG:return"image/jpeg";case d.TextureEncoding.KTX_ETC2:return"image/ktx";
default:return""}}const H={ktx2:d.TextureEncoding.KTX2,basis:d.TextureEncoding.Basis,dds:d.TextureEncoding.DDS_S3TC,png:d.TextureEncoding.PNG,jpg:d.TextureEncoding.JPG,"ktx-etc2":d.TextureEncoding.KTX_ETC2},B={[g.TextureEncodingMimeType.KTX2_ENCODING]:d.TextureEncoding.Basis,[g.TextureEncodingMimeType.BASIS_ENCODING]:d.TextureEncoding.Basis,[g.TextureEncodingMimeType.DDS_ENCODING]:d.TextureEncoding.DDS_S3TC,"image/png":d.TextureEncoding.PNG,"image/jpg":d.TextureEncoding.JPG,"image/jpeg":d.TextureEncoding.JPG,
"image/ktx":d.TextureEncoding.KTX_ETC2},C=()=>({alphaMode:"opaque",alphaCutoff:z.alphaCutoff,doubleSided:!0,cullFace:g.CullFaceOptions.None,normalTextureId:-1,emissiveTextureId:-1,occlusionTextureId:-1,emissiveFactor:[0,0,0],metallicRoughness:{baseColorFactor:[.8,.8,.8,1],baseColorTextureId:-1,metallicRoughnessTextureId:-1,metallicFactor:0,roughnessFactor:.6},wrapTextures:!1,hasParametersFromSource:!0}),I={s:w.TextureWrapMode.CLAMP_TO_EDGE,t:w.TextureWrapMode.CLAMP_TO_EDGE},J={s:w.TextureWrapMode.REPEAT,
t:w.TextureWrapMode.REPEAT};p.configureMaterial=function(b,a,c,e,h,f){const k=f.rendererTextureUsage;var l=a.metallicRoughness.baseColorFactor,m=y.clamp(a.metallicRoughness.baseColorFactor[3],0,1);b.baseColor=[l[0],l[1],l[2],m];b.hasParametersFromSource=!!a.hasParametersFromSource;b.usePBR=f.usePBR;b.mrrFactors=[a.metallicRoughness.metallicFactor,a.metallicRoughness.roughnessFactor,a.hasParametersFromSource?q.schematicMRRFactors[2]:q.advancedMRRFactors[2]];b.emissiveFactor=a.emissiveFactor;b.isIntegratedMesh=
f.isIntegratedMesh;b.textureAlphaCutoff="mask"===a.alphaMode?a.alphaCutoff:z.alphaCutoff;b.alphaDiscardMode="opaque"===a.alphaMode?g.AlphaDiscardMode.Opaque:"mask"===a.alphaMode?g.AlphaDiscardMode.Mask:g.AlphaDiscardMode.MaskBlend;l=[];m=u(e,c,(d.TextureUsage.Color|d.TextureUsage.AlphaMask)&k);null!=m&&(b.baseColorTexture=new t.RenderTexture(h,m),l.push(b.baseColorTexture.loadPromise));m=u(e,c,d.TextureUsage.MetallicRoughness&k);null!=m&&(b.metallicRoughnessTexture=new t.RenderTexture(h,m),l.push(b.metallicRoughnessTexture.loadPromise));
m=u(e,c,d.TextureUsage.Emissive&k);null!=m&&(b.emissionTexture=new t.RenderTexture(h,m),l.push(b.emissionTexture.loadPromise));m=u(e,c,d.TextureUsage.Occlusion&k);null!=m&&(b.occlusionTexture=new t.RenderTexture(h,m),l.push(b.occlusionTexture.loadPromise));c=u(e,c,d.TextureUsage.Normal&k);null!=c&&(b.normalTexture=new t.RenderTexture(h,c),l.push(b.normalTexture.loadPromise));b.commonMaterialParameters.hasSlicePlane=f.slicePlaneEnabled;b.commonMaterialParameters.doubleSided=a.doubleSided;b.commonMaterialParameters.cullFace=
a.cullFace;b.ellipsoidMode=E.getEllipsoidMode(f.viewSpatialReference);return Promise.all(l)};p.createTexture=function(b,a,c,e){if(null==b?.data)return null;const h=b.data;e=e.renderingContext.parameters.maxMaxAnisotropy;const f=1<e;c=c||!a.wrapTextures?I:J;const k=G(b.encoding);return new F.Texture(h,{mipmap:f,maxAnisotropy:e,encoding:k,wrap:c,components:b.usage&d.TextureUsage.Color?"opaque"===a.alphaMode?3:4:3,noUnpackFlip:!0})};p.defaultMaterial=C;p.getMaterialAndTextures=function(b,a,c){const e=
new Map,h=(v,r)=>{if(null==v)return-1;var n=e.get(v.id);if(n)return n.usage|=r,n.id;n=e.size;e.set(v.id,{id:n,usage:r});return n};var f=a.pbrMetallicRoughness;const k=f?.baseColorFactor,l=a.emissiveFactor,m=(c=x("disable-feature:diffuse-rendering-i3s")||c?q.useSchematicPBRI3S({normalTexture:a.normalTexture,emissiveTexture:a.emissiveTexture,emissiveFactor:a.emissiveFactor,occlusionTexture:a.occlusionTexture,metallicRoughnessTexture:f?.metallicRoughnessTexture,metallicFactor:f?.metallicFactor,roughnessFactor:f?.roughnessFactor}):
q.useSchematicPBR({normalTexture:a.normalTexture,emissiveTexture:a.emissiveTexture,emissiveFactor:a.emissiveFactor,occlusionTexture:a.occlusionTexture,metallicRoughnessTexture:f?.metallicRoughnessTexture,metallicFactor:f?.metallicFactor,roughnessFactor:f?.roughnessFactor}))?q.schematicMRRFactors[0]:f?.metallicFactor??q.advancedMRRFactors[0],K=c?q.schematicMRRFactors[1]:f?.roughnessFactor??q.advancedMRRFactors[1];f={baseColorFactor:k?[k[0],k[1],k[2],k[3]]:[1,1,1,1],baseColorTextureId:h(f?.baseColorTexture,
"mask"===a.alphaMode?d.TextureUsage.Color|d.TextureUsage.AlphaMask:d.TextureUsage.Color),metallicRoughnessTextureId:h(f?.metallicRoughnessTexture,d.TextureUsage.MetallicRoughness),metallicFactor:m,roughnessFactor:K};a={alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,cullFace:"none"===a.cullFace?g.CullFaceOptions.None:"back"===a.cullFace?g.CullFaceOptions.Back:"front"===a.cullFace?g.CullFaceOptions.Front:g.CullFaceOptions.None,normalTextureId:h(a.normalTexture,d.TextureUsage.Normal),
emissiveTextureId:h(a.emissiveTexture,d.TextureUsage.Emissive),occlusionTextureId:h(a.occlusionTexture,d.TextureUsage.Occlusion),emissiveFactor:l?[l[0],l[1],l[2]]:[0,0,0],metallicRoughness:f,wrapTextures:!1,hasParametersFromSource:c};const D=[];e.forEach(({usage:v},r)=>{var n=null!=b&&b[r]&&b[r].formats;n=n?A(n.map(({name:L,format:M})=>({name:L,encoding:H[M]}))):[];D.push({id:r,usage:v,encodings:n})});return{material:a,textures:D}};p.getMaterialAndTexturesFromShared=function(b){var a=b?.materialDefinitions?
Object.keys(b.materialDefinitions)[0]:null,c=b?.textureDefinitions?Object.keys(b.textureDefinitions)[0]:null;a=a?b.materialDefinitions?.[a]:null;c=c?b.textureDefinitions?.[c]:null;b=C();if(null!=a){a=a.params;a.diffuse&&(b.metallicRoughness.baseColorFactor=[a.diffuse[0],a.diffuse[1],a.diffuse[2],1]);null!=a.doubleSided&&(b.doubleSided=a.doubleSided,b.cullFace=a.doubleSided?g.CullFaceOptions.None:g.CullFaceOptions.Back);if("none"===a.cullFace||"front"===a.cullFace||"back"===a.cullFace)b.cullFace="none"===
a.cullFace?g.CullFaceOptions.None:"back"===a.cullFace?g.CullFaceOptions.Back:g.CullFaceOptions.Front;a.transparency&&(b.metallicRoughness.baseColorFactor[3]=y.clamp(1-a.transparency,0,1));if(a.useVertexColorAlpha||1>b.metallicRoughness.baseColorFactor[3])b.alphaMode="blend"}a=[];if(null!=c){!c.wrap||"repeat"!==c.wrap[0]&&"repeat"!==c.wrap[1]||(b.wrapTextures=!0);let e=d.TextureUsage.Color;"rgba"===c.channels&&(b.alphaMode="blend",e|=d.TextureUsage.AlphaMask);const h=c.images[c.images.length-1];c=
Array.isArray(c.encoding)?A(c.encoding.map((f,k)=>({name:h.href[k]?.split("/").pop(),encoding:B[f]||0}))):[{name:h.href?.split("/").pop(),encoding:B[c.encoding]||0}];a.push({id:0,usage:e,encodings:c});b.metallicRoughness.baseColorTextureId=0}return{material:b,textures:a}};p.getSupportedEncodings=function(b){const a=!!b.compressedTextureS3TC;b=!!b.compressedTextureETC;const c=x("disable-feature:i3s-basis")?0:d.TextureEncoding.Basis|d.TextureEncoding.KTX2,e=c|d.TextureEncoding.DDS_S3TC;return d.TextureEncoding.JPG|
d.TextureEncoding.PNG|(a?e:0)|(b?c:0)};p.selectEncoding=function(b,a){if(null!=a)return b.find(c=>0!==(c.encoding&a))};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
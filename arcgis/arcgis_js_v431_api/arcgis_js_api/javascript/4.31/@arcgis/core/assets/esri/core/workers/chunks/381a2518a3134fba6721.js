"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2366],{866:(e,t,r)=>{r.d(t,{a:()=>u,b:()=>l,c:()=>d,d:()=>m,e:()=>i,f:()=>f,g:()=>c,n:()=>a});var n=r(32773),o=r(4361),s=r(52134);function a(e,t){i(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function i(e,t,r=2,o=r){const s=t.length/2;let a=0,i=0;if((0,n.d)(t)||(0,n.D)(t)){for(let n=0;n<s;++n)e[a]=t[i],e[a+1]=t[i+1],a+=r,i+=o;return}const u=(0,n.E)(t);if((0,n.F)(t))for(let n=0;n<s;++n)e[a]=Math.max(t[i]/u,-1),e[a+1]=Math.max(t[i+1]/u,-1),a+=r,i+=o;else for(let n=0;n<s;++n)e[a]=t[i]/u,e[a+1]=t[i+1]/u,a+=r,i+=o}function u(e,t,r,n){const o=e.typedBuffer,s=e.typedBufferStride,a=n?.count??e.count;let i=(n?.dstIndex??0)*s;for(let e=0;e<a;++e)o[i]=t,o[i+1]=r,i+=s}function l(e,t){c(e.typedBuffer,t,e.typedBufferStride)}function c(e,t,r=4){const n=t.typedBuffer,o=t.typedBufferStride,s=t.count;let a=0,i=0;for(let t=0;t<s;++t)e[a]=n[i],e[a+1]=n[i+1],e[a+2]=n[i+2],e[a+3]=n[i+3],a+=r,i+=o}function f(e,t,r,n,o,s){const a=e.typedBuffer,i=e.typedBufferStride,u=s?.count??e.count;let l=(s?.dstIndex??0)*i;for(let e=0;e<u;++e)a[l]=t,a[l+1]=r,a[l+2]=n,a[l+3]=o,l+=i}function d(e,t){switch(t){case s.k.TRIANGLES:return function(e){return"number"==typeof e?(0,o.a)(e):(0,n.j)(e)?new Uint16Array(e):e}(e);case s.k.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,n=(0,o.n)(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)o%2==0?(n[t++]=e[o],n[t++]=e[o+1],n[t++]=e[o+2]):(n[t++]=e[o+1],n[t++]=e[o],n[t++]=e[o+2])}return n}(e);case s.k.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}const o=e[0];let s=e[1],a=0;for(let t=0;t<r;++t){const r=e[t+2];n[a++]=o,n[a++]=s,n[a++]=r,s=r}return n}(e)}}const m=2.1},54912:(e,t,r)=>{r.d(t,{V:()=>o});var n=r(6407);let o=class e{constructor(e,t,r=""){this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}greaterEqual(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n.A(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new e(this.major,this.minor,this._context)}static parse(t,r=""){const[o,s]=t.split("."),a=/^\s*\d+\s*$/;if(!o?.match||!a.test(o))throw new n.A((r&&r+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:t});if(!s?.match||!a.test(s))throw new n.A((r&&r+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:t});const i=parseInt(o,10),u=parseInt(s,10);return new e(i,u,r)}}},57669:(e,t,r)=>{function n(e){return e=e||globalThis.location.hostname,l.some((t=>null!=e?.match(t)))}function o(e,t){return e?(t=t||globalThis.location.hostname)?null!=t.match(s)||null!=t.match(i)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(u)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e:null}r.d(t,{a:()=>o,i:()=>n});const s=/^devext\.arcgis\.com$/,a=/^qaext\.arcgis\.com$/,i=/^[\w-]*\.mapsdevext\.arcgis\.com$/,u=/^[\w-]*\.mapsqa\.arcgis\.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,s,a,/^jsapps\.esri\.com$/,i,u]},12366:(e,t,r)=>{r.r(t),r.d(t,{f:()=>Q,g:()=>G,o:()=>W});var n=r(57669),o=r(16699),s=r(87889),a=r(88485),i=r(47812),u=r(87162),l=r(46484),c=r(26809),f=r(2589),d=r(47239),m=r(84311),p=r(72509),h=r(19907),y=r(23164),g=r(866),x=r(38268),b=r(37176),w=r(83839),v=r(64604),B=r(73067),T=r(32773),A=r(6407),R=r(20266),S=r(21375),M=r(80959),E=r(54912),O=r(4361),I=r(88275),P=r(57760),C=r(83902),L=r(97538),N=r(61596),j=r(52134);const k=()=>R.L.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");function F(e){throw new A.A("",`Request for object resource failed: ${e}`)}function _(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(k().warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(k().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(k().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(k().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else k().warn("Indexed geometries must specify faces"),n=!1;break}default:k().warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(k().warn("Geometry requires material"),n=!1);const o=e.params.vertexAttributes;for(const e in o)o[e].values||(k().warn("Geometries with externally defined attributes are not yet supported"),n=!1);return n}function U(e){const t=(0,d.k)();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&((0,d.e)(t,r.bbMin),(0,d.e)(t,r.bbMax))})),t}function q(e){switch(e){case"mask":return C.A.Mask;case"maskAndTransparency":return C.A.MaskBlend;case"none":return C.A.Opaque;default:return C.A.Blend}}function D(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const $=new E.V(1,2,"wosr");var V=r(16055);function G(e){if(null==e)return null;const t=null!=e.offset?e.offset:w.Z,r=null!=e.rotation?e.rotation:0,n=null!=e.scale?e.scale:w.O,o=(0,a.f)(1,0,0,0,1,0,t[0],t[1],1),i=(0,a.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),u=(0,a.f)(n[0],0,0,0,n[1],0,0,0,1),l=(0,a.c)();return(0,s.m)(l,i,u),(0,s.m)(l,o,l),l}class H{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class z{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new H,this.numberOfVertices=0}}async function Q(e,t){const a=J((0,n.a)(e));if("wosr"===a.fileType){const e=await(t.cache?t.cache.loadWOSR(a.url,t):async function(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const n=await(0,B.r)(t.request(e,"json",r));return!0===n.ok?n.value:((0,M.QP)(n.error),void F(n.error.details.url))}(e,r,t);const n=await(0,B.r)((0,v.A)(e,t));return!0===n.ok?n.value.data:((0,M.QP)(n.error),void F(n.error))}(e,t),n=await async function(e,t){const r=new Array;for(const n in e){const o=e[n],s=o.images[0].data;if(!s){k().warn("Externally referenced texture data is not yet supported");continue}const a=o.encoding+";base64,"+s,i="/textureDefinitions/"+n,u="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",l={noUnpackFlip:!0,wrap:{s:j.T.REPEAT,t:j.T.REPEAT},preMultiplyAlpha:q(u)!==C.A.Opaque},c=t?.disableTextures?Promise.resolve(null):(0,I.r)(a,t);r.push(c.then((e=>({refId:i,image:e,parameters:l,alphaChannelUsage:u}))))}const n=await Promise.all(r),o={};for(const e of n)o[e.refId]=e;return o}(r.textureDefinitions??{},t);let o=0;for(const e in n)if(n.hasOwnProperty(e)){const t=n[e];o+=t?.image?t.image.width*t.image.height*4:0}return{resource:r,textures:n,size:o+(0,T.v)(r)}}(a.url,t)),{engineResources:r,referenceBoundingBox:n}=function(e,t){const r=new Array,n=new Array,o=new Array,s=new S.N,a=e.resource,i=E.V.parse(a.version||"1.0","wosr");$.validate(i);const u=a.model.name,l=a.model.geometries,c=a.materialDefinitions??{},d=e.textures;let p=0;const h=new Map;for(let e=0;e<l.length;e++){const a=l[e];if(!_(a))continue;const i=D(a),u=a.params.vertexAttributes,y=[],g=e=>{if("PerAttributeArray"===a.params.topology)return null;const t=a.params.faces;for(const r in t)if(r===e)return t[r].values;return null},x=u[L.V.POSITION],b=x.values.length/x.valuesPerElement;for(const e in u){const t=u[e],r=t.values,n=g(e)??(0,O.a)(b);y.push([e,new P.A(r,n,t.valuesPerElement,!0)])}const w=i.texture,v=d&&d[w];if(v&&!h.has(w)){const{image:e,parameters:t}=v,r=new m.T(e,t);n.push(r),h.set(w,r)}const B=h.get(w),T=B?B.id:void 0,A=i.material;let R=s.get(A,w);if(null==R){const e=c[A.slice(A.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=v&&v.alphaChannelUsage,n=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,o=v?q(v.alphaChannelUsage):void 0,a={ambient:(0,f.e)(e.diffuse),diffuse:(0,f.e)(e.diffuse),opacity:1-(e.transparency||0),transparent:n,textureAlphaMode:o,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:C.C.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:v?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),R=new N.D(a,t),s.set(A,w,R)}o.push(R);const S=new m.G(R,y);p+=y.find((e=>e[0]===L.V.POSITION))?.[1]?.indices.length??0,r.push(S)}return{engineResources:[{name:u,stageResources:{textures:n,materials:o,geometries:r},pivotOffset:a.model.pivotOffset,numberOfVertices:p,lodThreshold:null}],referenceBoundingBox:U(r)}}(e,t);return{lods:r,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}let w;if(t.cache)w=await t.cache.loadGLTF(a.url,t,!!t.usePBR);else{const{loadGLTF:e}=await r.e(2739).then(r.bind(r,72739));w=await e(new x.D(t.streamDataRequester),a.url,t,t.usePBR)}const A=w.model.meta?.ESRI_proxyEllipsoid,R=w.meta.isEsriSymbolResource&&null!=A&&"EsriRealisticTreesStyle"===w.meta.ESRI_webstyle;R&&!w.customMeta.esriTreeRendering&&(w.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const n=e.model.lods[r];for(const o of n.parts){const n=o.attributes.normal;if(null==n)return;const s=o.attributes.position,a=s.count,l=(0,f.c)(),d=(0,f.c)(),m=(0,f.c)(),h=new Uint8Array(4*a),y=new Float64Array(3*a),g=(0,i.i)((0,u.c)(),o.transform);let x=0,b=0;for(let i=0;i<a;i++){s.getVec(i,d),n.getVec(i,l),(0,c.m)(d,d,o.transform),(0,c.a)(m,d,t.center),(0,c.H)(m,m,t.radius);const a=m[2],u=(0,c.h)(m),f=Math.min(.45+.55*u*u,1);(0,c.H)(m,m,t.radius),null!==g&&(0,c.m)(m,m,g),(0,c.n)(m,m),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.l)(m,m,l,a>-1?.2:Math.min(-4*a-3.8,1)),y[x]=m[0],y[x+1]=m[1],y[x+2]=m[2],x+=3,h[b]=255*f,h[b+1]=255*f,h[b+2]=255*f,h[b+3]=255,b+=4}o.attributes.normal=new p.b(y),o.attributes.color=new p.o(h)}}}(w,A));const H=!!t.usePBR,Q=w.meta.isEsriSymbolResource?{usePBR:H,isSchematic:!1,treeRendering:R,mrrFactors:N.e}:{usePBR:H,isSchematic:!1,treeRendering:!1,mrrFactors:N.a},W={...t.materialParameters,treeRendering:R},{engineResources:X,referenceBoundingBox:Z}=function(e,t,r,n,a){const i=e.model,u=new Array,c=new Map,f=new Map,w=i.lods.length,v=(0,d.k)();return i.lods.forEach(((e,B)=>{const T=!0===n.skipHighLods&&(w>1&&0===B||w>3&&1===B)||!1===n.skipHighLods&&null!=a&&B!==a;if(T&&0!==B)return;const A=new z(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const a=T?new N.D({},n):function(e,t,r,n,o,s,a,i){const u=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),c=e.materials.get(t.material),f=null!=t.attributes.texCoord0,d=null!=t.attributes.normal;if(null==c)return null;const p=function(e){switch(e){case"BLEND":return C.A.Blend;case"MASK":return C.A.Mask;case"OPAQUE":case null:case void 0:return C.A.Opaque}}(c.alphaMode);if(!s.has(u)){if(f){const t=(t,r=!1)=>{if(null!=t&&!a.has(t)){const n=e.textures.get(t);if(null!=n){const e=n.data;a.set(t,new m.T((0,b.i)(e)?e.data:e,{...n.parameters,preMultiplyAlpha:!(0,b.i)(e)&&r,encoding:(0,b.i)(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(c.textureColor,p!==C.A.Opaque),t(c.textureNormal),t(c.textureOcclusion),t(c.textureEmissive),t(c.textureMetallicRoughness)}const r=c.color[0]**(1/g.d),h=c.color[1]**(1/g.d),y=c.color[2]**(1/g.d),x=c.emissiveFactor[0]**(1/g.d),w=c.emissiveFactor[1]**(1/g.d),v=c.emissiveFactor[2]**(1/g.d),B=null!=c.textureColor&&f?a.get(c.textureColor):null,T=(0,N.u)({normalTexture:c.textureNormal,metallicRoughnessTexture:c.textureMetallicRoughness,metallicFactor:c.metallicFactor,roughnessFactor:c.roughnessFactor,emissiveTexture:c.textureEmissive,emissiveFactor:c.emissiveFactor,occlusionTexture:c.textureOcclusion}),A=null!=c.normalTextureTransform?.scale?c.normalTextureTransform?.scale:l.O;s.set(u,new N.D({...n,transparent:p===C.A.Blend,customDepthTest:C.D.Lequal,textureAlphaMode:p,textureAlphaCutoff:c.alphaCutoff,diffuse:[r,h,y],ambient:[r,h,y],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?C.C.None:C.C.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:d?V.N.Attribute:V.N.ScreenDerivative,castShadows:!0,receiveShadows:c.receiveShadows,receiveAmbientOcclusion:c.receiveAmbientOcclustion,textureId:null!=B?B.id:void 0,colorMixMode:c.colorMixMode,normalTextureId:null!=c.textureNormal&&f?a.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:null!=B&&!!B.parameters.preMultiplyAlpha,occlusionTextureId:null!=c.textureOcclusion&&f?a.get(c.textureOcclusion).id:void 0,emissiveTextureId:null!=c.textureEmissive&&f?a.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=c.textureMetallicRoughness&&f?a.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[x,w,v],mrrFactors:T?N.s:[c.metallicFactor,c.roughnessFactor,n.mrrFactors[2]],isSchematic:T,colorTextureTransformMatrix:G(c.colorTextureTransform),normalTextureTransformMatrix:G(c.normalTextureTransform),scale:[A[0],A[1]],occlusionTextureTransformMatrix:G(c.occlusionTextureTransform),emissiveTextureTransformMatrix:G(c.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:G(c.metallicRoughnessTextureTransform),...o},i))}const h=s.get(u);if(r.stageResources.materials.push(h),f){const e=e=>{null!=e&&r.stageResources.textures.push(a.get(e))};e(c.textureColor),e(c.textureNormal),e(c.textureOcclusion),e(c.textureEmissive),e(c.textureMetallicRoughness)}return h}(i,e,A,t,r,c,f,n),{geometry:u,vertexCount:w}=function(e,t){const r=e.attributes.position.count,n=(0,g.c)(e.indices||r,e.primitiveType),a=(0,m.n)(3*r),{typedBuffer:i,typedBufferStride:u}=e.attributes.position;(0,h.b)(a,i,e.transform,3,u);const l=[[L.V.POSITION,new P.A(a,n,3,!0)]];if(null!=e.attributes.normal){const t=(0,m.n)(3*r),{typedBuffer:a,typedBufferStride:i}=e.attributes.normal;(0,s.b)(K,e.transform),(0,h.t)(t,a,K,3,i),(0,o.h)(K)&&(0,h.n)(t,t),l.push([L.V.NORMAL,new P.A(t,n,3,!0)])}if(null!=e.attributes.tangent){const t=(0,m.n)(4*r),{typedBuffer:a,typedBufferStride:i}=e.attributes.tangent;(0,s.f)(K,e.transform),(0,y.t)(t,a,K,4,i),(0,o.h)(K)&&(0,h.n)(t,t,4),l.push([L.V.TANGENT,new P.A(t,n,4,!0)])}if(null!=e.attributes.texCoord0){const t=(0,m.n)(2*r),{typedBuffer:o,typedBufferStride:s}=e.attributes.texCoord0;(0,g.e)(t,o,2,s),l.push([L.V.UV0,new P.A(t,n,2,!0)])}const c=e.attributes.color;if(null!=c){const t=new Uint8Array(4*r);4===c.elementCount?c instanceof p.c?(0,y.b)(t,c,255):c instanceof p.o?(0,g.g)(t,c):c instanceof p.s&&(0,y.b)(t,c,1/256):(t.fill(255),c instanceof p.b?(0,h.f)(t,c.typedBuffer,255,4,c.typedBufferStride):e.attributes.color instanceof p.n?(0,x.a)(t,c.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof p.r&&(0,h.f)(t,c.typedBuffer,1/256,4,c.typedBufferStride)),l.push([L.V.COLOR,new P.A(t,n,4,!0)])}return{geometry:new m.G(t,l),vertexCount:r}}(e,a??new N.D({},n)),R=u.boundingInfo;null!=R&&0===B&&((0,d.e)(v,R.bbMin),(0,d.e)(v,R.bbMax)),null!=a&&(A.stageResources.geometries.push(u),A.numberOfVertices+=w)})),T||u.push(A)})),{engineResources:u,referenceBoundingBox:v}}(w,Q,W,t,a.specifiedLodIndex);return{lods:X,referenceBoundingBox:Z,isEsriSymbolResource:w.meta.isEsriSymbolResource,isWosr:!1}}function J(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}const K=(0,a.c)(),W=Object.freeze(Object.defineProperty({__proto__:null,fetch:Q,parseUrl:J},Symbol.toStringTag,{value:"Module"}))},37176:(e,t,r)=>{r.d(t,{E:()=>s,a:()=>u,i:()=>a,j:()=>i});var n=r(32773),o=r(83902);class s{constructor(e){this.data=e,this.type="encoded-mesh-texture",this.encoding=o.T.KTX2_ENCODING}}function a(e){return"encoded-mesh-texture"===e?.type}async function i(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function u(e,t){if(t===o.T.KTX2_ENCODING)return new s(e);const r=new Blob([e],{type:t}),a=URL.createObjectURL(r),i=new Image;if((0,n.h)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(i)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(a),i.removeEventListener("load",r),i.removeEventListener("error",n)};i.addEventListener("load",r),i.addEventListener("error",n),i.src=a}));try{i.src=a,await i.decode()}catch(e){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(a),i}},83839:(e,t,r)=>{function n(){return new Float32Array(2)}function o(e,t){const r=new Float32Array(2);return r[0]=e,r[1]=t,r}r.d(t,{O:()=>a,Z:()=>s,c:()=>n,f:()=>o});const s=n(),a=o(1,1);o(1,0),o(0,1)},19907:(e,t,r)=>{function n(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,n=3,o=n){if(e.length/n!==Math.ceil(t.length/o))return e;const s=e.length/n,a=r[0],i=r[1],u=r[2],l=r[4],c=r[5],f=r[6],d=r[8],m=r[9],p=r[10],h=r[12],y=r[13],g=r[14];let x=0,b=0;for(let r=0;r<s;r++){const r=t[x],s=t[x+1],w=t[x+2];e[b]=a*r+l*s+d*w+h,e[b+1]=i*r+c*s+m*w+y,e[b+2]=u*r+f*s+p*w+g,x+=o,b+=n}return e}function s(e,t,r){a(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function a(e,t,r,n=3,o=n){if(e.length/n!==Math.ceil(t.length/o))return;const s=e.length/n,a=r[0],i=r[1],u=r[2],l=r[3],c=r[4],f=r[5],d=r[6],m=r[7],p=r[8];let h=0,y=0;for(let r=0;r<s;r++){const r=t[h],s=t[h+1],g=t[h+2];e[y]=a*r+l*s+d*g,e[y+1]=i*r+c*s+m*g,e[y+2]=u*r+f*s+p*g,h+=o,y+=n}}function i(e,t,r){u(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function u(e,t,r,n=3,o=n){const s=Math.min(e.length/n,t.length/o);let a=0,i=0;for(let u=0;u<s;u++)e[i]=r*t[a],e[i+1]=r*t[a+1],e[i+2]=r*t[a+2],a+=o,i+=n;return e}function l(e,t,r,n=3,o=n){const s=e.length/n;if(s!==Math.ceil(t.length/o))return e;let a=0,i=0;for(let u=0;u<s;u++)e[i]=t[a]+r[0],e[i+1]=t[a+1]+r[1],e[i+2]=t[a+2]+r[2],a+=o,i+=n;return e}function c(e,t){f(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function f(e,t,r=3,n=r){const o=Math.min(e.length/r,t.length/n);let s=0,a=0;for(let i=0;i<o;i++){const o=t[s],i=t[s+1],u=t[s+2],l=o*o+i*i+u*u;if(l>0){const t=1/Math.sqrt(l);e[a]=t*o,e[a+1]=t*i,e[a+2]=t*u}s+=n,a+=r}}r.d(t,{a:()=>l,b:()=>o,c:()=>n,d:()=>s,e:()=>c,f:()=>u,n:()=>f,s:()=>i,t:()=>a}),r(32773),r(20266)},38268:(e,t,r)=>{r.d(t,{D:()=>u,a:()=>f,c:()=>c,f:()=>d});var n=r(64604),o=r(73067),s=r(6407),a=r(80959),i=r(99063);class u{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,i.DB)(e)?((0,a.Te)(t),(0,i.lJ)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if(null==this._streamDataRequester)return(await(0,n.A)(t,{responseType:l[e]})).data;const i=await(0,o.r)(this._streamDataRequester.request(t,e,r));if(!0===i.ok)return i.value;throw(0,a.QP)(i.error),new s.A("glt-loader-request-error",`Request for resource failed: ${i.error}`)}}const l={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function c(e,t){f(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function f(e,t,r=3,n=r){const o=t.length/n;let s=0,a=0;for(let i=0;i<o;++i)e[s]=t[a],e[s+1]=t[a+1],e[s+2]=t[a+2],s+=r,a+=n}function d(e,t,r,n,o){const s=e.typedBuffer,a=e.typedBufferStride,i=o?.count??e.count;let u=(o?.dstIndex??0)*a;for(let e=0;e<i;++e)s[u]=t,s[u+1]=r,s[u+2]=n,u+=a}},23164:(e,t,r)=>{function n(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,n=4,o=n){if(e.length/n!=t.length/o)return;const s=e.length/n,a=r[0],i=r[1],u=r[2],l=r[3],c=r[4],f=r[5],d=r[6],m=r[7],p=r[8];let h=0,y=0;for(let r=0;r<s;r++){const r=t[h],s=t[h+1],g=t[h+2],x=t[h+3];e[y]=a*r+l*s+d*g,e[y+1]=i*r+c*s+m*g,e[y+2]=u*r+f*s+p*g,e[y+3]=x,h+=o,y+=n}}function s(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride;for(let e=0;e<r;e++){const t=e*o,r=e*a,i=s[r],u=s[r+1],l=s[r+2],c=i*i+u*u+l*l;if(c>0){const e=1/Math.sqrt(c);n[t]=e*i,n[t+1]=e*u,n[t+2]=e*l}}}function a(e,t,r){i(e.typedBuffer,t,r,e.typedBufferStride)}function i(e,t,r,n=4){const o=Math.min(e.length/n,t.count),s=t.typedBuffer,a=t.typedBufferStride;let i=0,u=0;for(let t=0;t<o;t++)e[u]=r*s[i],e[u+1]=r*s[i+1],e[u+2]=r*s[i+2],e[u+3]=r*s[i+3],i+=a,u+=n}r.d(t,{a:()=>n,b:()=>i,n:()=>s,s:()=>a,t:()=>o}),r(32773),r(20266)}}]);
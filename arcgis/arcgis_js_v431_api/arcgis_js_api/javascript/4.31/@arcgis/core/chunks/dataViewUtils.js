/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{n as t,L as e}from"./Logger.js";import r from"../core/Error.js";import"./enums2.js";import"../core/lang.js";import{g as n,a as s,T as o}from"./Texture.js";import{P as i,D as a}from"./enums.js";import"./Program.js";import"./GLObjectType.js";import{V as c}from"./VertexElementDescriptor.js";import{B as u}from"./BoundingBox.js";function f(e){const r=e.map((({name:t,count:e,type:r})=>`${t}.${e}.${r}`)).join(",");return t(r)}function l(t,e,r,n,s,o,i){if(t.primitiveName===e){let e=n?.readWithDefault(s,o,t[r]&&i);return"text"===t.type&&(e=e.toString()),void(t[r]=e)}if("type"in t&&null!=t.type){if(t.effects)for(const a of t.effects)l(a,e,r,n,s,o,i);switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.symbolLayers)for(const a of t.symbolLayers)l(a,e,r,n,s,o,i);break;case"CIMTextSymbol":t.symbol&&l(t.symbol,e,r,n,s,o,i);break;case"CIMHatchFill":t.lineSymbol&&l(t.lineSymbol,e,r,n,s,o,i);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(t.markerPlacement&&l(t.markerPlacement,e,r,n,s,o,i),"CIMVectorMarker"===t.type&&t.markerGraphics)for(const a of t.markerGraphics)l(a,e,r,n,s,o,i),l(a.symbol,e,r,n,s,o,i)}}}function h(t){const e=t.width;return null!=t.effects?400:Math.max(1.25*e,8)}const E=()=>e.getLogger("esri.views.2d.engine.webgl.Utils");function p(t){switch(t){case i.UNSIGNED_BYTE:return 1;case i.UNSIGNED_SHORT_4_4_4_4:return 2;case i.FLOAT:return 4;default:return void E().error(new r("webgl-utils",`Unable to handle type ${t}`))}}function d(t){switch(t){case i.UNSIGNED_BYTE:return Uint8Array;case i.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case i.FLOAT:return Float32Array;default:return void E().error(new r("webgl-utils",`Unable to handle type ${t}`))}}const m=new Map,y=(t,e)=>{if(!m.has(t)){const r=function(t){const e=new Map;for(const r in t){const s=t[r];let o=0;e.set(r,s.map((t=>{const e=new c(t.name,t.count,t.type,o,0,t.normalized||!1);return o+=t.count*n(t.type),e}))),e.get(r).forEach((t=>t.stride=o))}return e}(e),s=(t=>{const e={};return t.forEach(((t,r)=>e[r]=t?.length?t[0].stride:0)),e})(r),o=(t=>{const e=new Map;for(const r in t)for(const n of t[r])e.set(n.name,n.location);return e})(e),i={strides:s,bufferLayouts:r,attributes:o};m.set(t,i)}return m.get(t)},T=t=>t.includes("data:image/svg+xml");function I(t){const e=[];for(let r=0;r<t.length;r++)e.push(t.charCodeAt(r));return e}function S(t,e,r){const n=new s(e.width,e.height);return n.dataType=e.dataType,e.depth&&(n.depth=e.depth),e.flipped&&(n.flipped=e.flipped),e.hasMipmap&&(n.hasMipmap=e.hasMipmap),n.internalFormat=e.internalFormat,e.isImmutable&&(n.isImmutable=e.isImmutable),e.isOpaque&&(n.isOpaque=e.isOpaque),e.maxAnisotropy&&(n.maxAnisotropy=e.maxAnisotropy),n.pixelFormat=e.pixelFormat,e.preMultiplyAlpha&&(n.preMultiplyAlpha=e.preMultiplyAlpha),e.samplingMode&&(n.samplingMode=e.samplingMode),e.target&&(n.target=e.target),n.uniform=e.uniform,e.unpackAlignment&&(n.unpackAlignment=e.unpackAlignment),e.wrapMode&&(n.wrapMode=e.wrapMode),new o(t,n,r)}function _(t){return"url"in t&&"urlHash"in t?{...t,url:""}:t}class g{constructor(t,e,r,n,s,o,i){this.instanceId=t,this.textureKey=e,this.indexStart=r,this.indexCount=n,this.vertexStart=s,this.vertexCount=o,this.overlaps=i}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new g(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,r,n,s,o,i,a){t.push(e),t.push(r),t.push(n),t.push(s),t.push(o),t.push(i),t.push(a)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const e=t.readInt32(),r=t.readInt32(),n=t.readInt32(),s=t.readInt32(),o=t.readInt32(),i=t.readInt32(),a=t.readInt32();return new g(e,r,n,s,o,i,a)}}function M(t,e){if(null!==e){t.push(e.length);for(const r of e)r.serialize(t);return t}t.push(0)}function F(t,e,r){const n=t.readInt32(),s=new Array(n);for(let n=0;n<s.length;n++)s[n]=e.deserialize(t,r);return s}g.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;class w{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),M(t,this.records),t}static deserialize(t){const e=t.readInt32(),r=t.readF32(),n=new w(e,r);return n.records=F(t,g)??[],n}}w.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+g.byteSizeHint;class N{constructor(t,e,r,n,s,o,i,a,c=[]){this.entityTexel=t,this.anchorX=e,this.anchorY=r,this.directionX=n,this.directionY=s,this.maxScale=o,this.minScale=i,this.referenceBounds=a,this.bounds=c}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),null===this.referenceBounds?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),M(t,this.bounds)}static deserialize(t){const e=t.readInt32(),r=t.readF32(),n=t.readF32(),s=t.readF32(),o=t.readF32(),i=t.readF32(),a=t.readF32(),c=t.readF32(),f=t.readF32(),l=t.readF32(),h=F(t,u)??[];return new N(e,r,n,s,o,i,a,{size:c,offsetX:f,offsetY:l},h)}}const A=new Float32Array(1),U=new Uint32Array(A.buffer);function b(t,e){return 65535&t|e<<16}function x(t){const e=(r=t,A[0]=r,U[0]);var r;const n=e>>>31;let s=e>>>23&255,o=8388607&e;return s-=127,s>15?n<<15|31744:s<-25?0:(s<-14&&(o+=8388608,o/=2**(-14-s),s=-15),s+=15,o/=8192,o=function(t){const e=Math.floor(t),r=t-e;return e<1023&&(r>.5||.5===r&&e%2==1)?e+1:e}(o),n<<15|s<<10|o)}function L(t){let e=t>>>15,r=t>>10&31,n=1023&t;return e=e?-1:1,r-=15,n/=1024,r>-15?n+=1:r=-14,e*2**r*n}function B(t,e,r,n){const s=r.packPrecisionFactor??1;switch(r.type){case a.BYTE:if(1===r.count)t.setInt8(n+r.offset,e*s);else for(let o=0;o<r.count;o++){const i=o*Int8Array.BYTES_PER_ELEMENT;t.setInt8(n+r.offset+i,e[o]*s)}break;case a.UNSIGNED_BYTE:if(1===r.count)t.setUint8(n+r.offset,e*s);else for(let o=0;o<r.count;o++){const i=o*Uint8Array.BYTES_PER_ELEMENT;t.setUint8(n+r.offset+i,e[o]*s)}break;case a.SHORT:if(1===r.count)t.setInt16(n+r.offset,e*s,!0);else for(let o=0;o<r.count;o++){const i=o*Int16Array.BYTES_PER_ELEMENT;t.setInt16(n+r.offset+i,e[o]*s,!0)}break;case a.UNSIGNED_SHORT:if(1===r.count)t.setUint16(n+r.offset,e*s,!0);else for(let o=0;o<r.count;o++){const i=o*Uint16Array.BYTES_PER_ELEMENT;t.setUint16(n+r.offset+i,e[o]*s,!0)}break;case a.INT:if(1===r.count)t.setInt32(n+r.offset,e*s,!0);else for(let o=0;o<r.count;o++){const i=o*Int32Array.BYTES_PER_ELEMENT;t.setInt32(n+r.offset+i,e[o]*s,!0)}break;case a.UNSIGNED_INT:if(1===r.count)t.setUint32(n+r.offset,e*s,!0);else for(let o=0;o<r.count;o++){const i=o*Uint32Array.BYTES_PER_ELEMENT;t.setUint32(n+r.offset+i,e[o]*s,!0)}break;case a.FLOAT:if(1===r.count)t.setFloat32(n+r.offset,e*s,!0);else for(let o=0;o<r.count;o++){const i=o*Float32Array.BYTES_PER_ELEMENT;t.setFloat32(n+r.offset+i,e[o]*s,!0)}break;case a.HALF_FLOAT:if(1===r.count)t.setUint16(n+r.offset,x(e*s),!0);else for(let o=0;o<r.count;o++){const i=o*Uint16Array.BYTES_PER_ELEMENT;t.setUint16(n+r.offset+i,x(e[o]*s),!0)}}}function Y(t,e,r){switch(e.type){case a.BYTE:{if(1===e.count)return t.getInt8(r+e.offset);const n=[];for(let s=0;s<e.count;s++){const o=s*Int8Array.BYTES_PER_ELEMENT;n.push(t.getInt8(r+e.offset+o))}return n}case a.UNSIGNED_BYTE:{if(1===e.count)return t.getUint8(r+e.offset);const n=[];for(let s=0;s<e.count;s++){const o=s*Uint8Array.BYTES_PER_ELEMENT;n.push(t.getUint8(r+e.offset+o))}return n}case a.SHORT:{if(1===e.count)return t.getInt16(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const o=s*Int16Array.BYTES_PER_ELEMENT;n.push(t.getInt16(r+e.offset+o,!0))}return n}case a.UNSIGNED_SHORT:{if(1===e.count)return t.getUint16(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const o=s*Uint16Array.BYTES_PER_ELEMENT;n.push(t.getUint16(r+e.offset+o,!0))}return n}case a.INT:{if(1===e.count)return t.getInt32(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const o=s*Int32Array.BYTES_PER_ELEMENT;n.push(t.getInt32(r+e.offset+o,!0))}return n}case a.UNSIGNED_INT:{if(1===e.count)return t.getUint32(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const o=s*Uint32Array.BYTES_PER_ELEMENT;n.push(t.getUint32(r+e.offset+o,!0))}return n}case a.FLOAT:{if(1===e.count)return t.getFloat32(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const o=s*Float32Array.BYTES_PER_ELEMENT;n.push(t.getFloat32(r+e.offset+o,!0))}return n}case a.HALF_FLOAT:{if(1===e.count)return L(t.getUint16(r+e.offset,!0));const n=[];for(let s=0;s<e.count;s++){const o=s*Uint16Array.BYTES_PER_ELEMENT;n.push(L(t.getUint16(r+e.offset+o,!0)))}return n}}}export{w as D,N as L,p as a,S as b,y as c,l as d,g as e,_ as f,d as g,F as h,b as i,h as j,I as k,T as l,B as p,Y as u,f as v};

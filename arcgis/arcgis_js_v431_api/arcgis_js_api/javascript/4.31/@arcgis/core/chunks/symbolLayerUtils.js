/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import r from"../request.js";import e from"../core/Error.js";import{L as o}from"./LRUCache.js";import{c as s}from"./vec3f64.js";import{s as t,c as i}from"./aaBoundingBox.js";import{o as m}from"./symbolLayerUtils3D.js";import"../config.js";import"../core/lang.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./Logger.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./MemCache.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";let p=new o(50);async function a(o,s){if(o.resource?.href)return(t=o.resource.href,r(t,{responseType:"image"}).then((r=>r.data))).then((r=>[r.width,r.height]));var t;if(o.resource?.primitive)return null!=s?[s,s]:[256,256];throw new e("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}async function c(r,o=null){if(!r.isPrimitive){const o=r.resource?.href;if(!o)throw new e("symbol:invalid-resource","The symbol does not have a valid resource");const i=p.get(o);if(void 0!==i)return i;const{fetch:m}=await import("./objectResourceUtils.js").then((r=>r.o)),a=await m(o,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),c=t(a.referenceBoundingBox,s());return p.put(o,c),c}if(!r.resource?.primitive)throw new e("symbol:invalid-resource","The symbol does not have a valid resource");const a=i(m(r.resource.primitive));if(null!=o)for(let r=0;r<a.length;r++)a[r]*=o;return t(a,s())}export{a as computeIconLayerResourceSize,c as computeObjectLayerResourceSize};

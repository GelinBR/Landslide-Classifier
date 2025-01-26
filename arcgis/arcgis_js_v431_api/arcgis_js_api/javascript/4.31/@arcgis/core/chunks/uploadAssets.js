/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../geometry.js";import s from"../request.js";import{h as e}from"../core/lang.js";import{L as t}from"./Logger.js";import{throwIfAborted as r,after as o,throwIfAbortError as a}from"../core/promiseUtils.js";import{M as n}from"../core/scheduling.js";import{join as i,parseData as p}from"../core/urlUtils.js";import{a as c}from"./uuid.js";import{e as l,b as m,a as u,S as f,c as d}from"./External.js";import{U as g,N as y,B as j,a as h,b as w,C as b,c as P,d as T,e as U}from"./uploadAssetErrors.js";import{m as A,e as S,u as v,a as x,s as F}from"./progressUtils.js";import{i as E}from"./arcgisLayerUrl.js";import{h as R,j as D,e as N,k as C,c as O}from"./infoFor3D.js";import{g as k}from"./meshSpatialReferenceScaleUtils.js";import{a as q,e as I}from"./meshFeatureAttributes.js";import B from"../geometry/SpatialReference.js";import"./ensureType.js";import"../geometry/Extent.js";import"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"../config.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"./reader.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../kernel.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./boundsUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./persistableUrlUtils.js";import"../geometry/support/MeshTransform.js";import"./mat4.js";import"./common.js";import"./mat4f64.js";import"./quat.js";import"./vec3f64.js";import"./vec3.js";import"./vec4.js";import"./quatf64.js";import"./axisAngleDegrees.js";const M=2e7;async function L(s,t,o){const a=s.length;if(!a)return o?.onProgress?.(1),[];const n=A(a,o?.onProgress,"uploadAssets");return Promise.all(s.map(((s,a)=>async function(s,{layer:t,ongoingUploads:o},a){const n=o.get(s);if(n)return n;if(!function(s){return!!s.infoFor3D&&!!s.url}(t))throw new g;if(function(s,e){const{parsedUrl:t}=e;return null!=t&&s.metadata.externalSources.some((s=>l(s,t)))}(s,t))return a?.onProgress?.(1),s;const p=async function(s,t,o){const{metadata:a}=s,{displaySource:n}=a,p=z(n?.source,t,{checkForConversionRequired:e("enable-feature:georeferenced-uploads")}),l=null!=p?async function(s,e,t){return{source:await $(s,e,t),original:!0,unitConversionDisabled:!0}}(p,t,o):a.externalSources.length>0?async function(s,t,r){const o=W(t),{externalSources:a}=s.metadata,n=function(s,e){for(const t of s){const s=z(t.source,e);if(s)return s}return null}(a,t);if(!n)throw new y;const p=A(v.uploadConvertibleSource,r?.onProgress,"uploadConvertibleSource"),c=await $(n,t,{onProgress:p.makeOnProgress("uploadEditSource")});s.addExternalSources([{source:c,original:!0}]);const l=n.reduce(((s,{asset:e})=>e instanceof File?s+e.size:s),0),m=p.simulate("serviceAssetsToGlb",x(l));try{const{source:a,transform:n,origin:p}=await async function(s,t,r){const o=s.map((({assetName:s,parts:e})=>({assetName:s,assetHash:e[0].partHash})));let a;try{const s=i(t.parsedUrl.path,"convert3D"),e=t.capabilities?.operations.supportsAsyncConvert3D;a=(await(e?_:G)(s,{query:{f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:r,async:e},responseType:"json",timeout:0})).data}catch(s){throw new b}return function(s,t){const r={source:t.assets.map((e=>{const t=C(e.contentType,s.infoFor3D.supportedFormats);if(!t)throw new w(t);return new u(e.assetName,e.contentType,[new f(e.assetURL,e.assetHash)])})),origin:void 0,transform:void 0};if(e("enable-feature:georeferenced-uploads")&&t.transform){if(r.transform=q(t.transform),t.spatialReference){const s=B.fromJSON(t.spatialReference);r.origin=I(t.transform,s)}}else r.transform=k(s.spatialReference);return r}(t,a)}(c,t,o);return s.transform=n,p&&(s.metadata.georeferenced=!0,r?.useAssetOrigin&&(s.vertexSpace.origin=[p.x,p.y,p.z??0],s.spatialReference=p.spatialReference)),{source:a,unitConversionDisabled:!0}}finally{m.remove()}}(s,t,o):async function(s,e,t){const o=A(v.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),a=async function(s,e,t){const o=W(e),a=await s.load(t),n=await a.toBinaryGLTF({origin:a.origin,signal:t?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return r(t),{blob:new Blob([n],{type:"model/gltf-binary"}),assetName:`${c()}.glb`,assetType:o}}(s,e,{...t,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await J([a],e,{...t,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:s.extent.clone(),original:!0}}(s,t,o),m=await l;return r(o),s.addExternalSources([m]),s}(s,t,a);o.set(s,p);try{await p}finally{o.delete(s)}return s}(s,t,{...o,onProgress:n.makeOnProgress(a)}))))}function z(s,{infoFor3D:e},t={}){if(!s)return null;const{supportedFormats:r,editFormats:o}=e,a=d(s),n=new Array,i=R(e),p=D(e);let c=!1;for(const s of a){const e=H(s,r);if(!e)return null;const{assetType:a}=e;if(t.checkForConversionRequired&&(a===i||a===p))return null;o.includes(a)&&(c=!0),n.push(e)}return c?n:null}function H(s,e){const t=m(s,e);return t?{asset:s,assetType:t}:null}async function $(s,e,t){const o=s.map((s=>async function(s,e){const{asset:t,assetType:o}=s;if(t instanceof File)return{blob:t,assetName:t.name,assetType:o};const a=await t.toBlob(e);return r(e),{blob:a,assetName:t.assetName,assetType:o}}(s,t)));return J(o,e,t)}async function J(e,o,n){const c=A(v.uploadAssetBlobs,n?.onProgress,"uploadAssetBlobs"),l=await function(e,o,n){const c=A(e.length,n?.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,l)=>{const m=async function(e,o,n){const{blob:c,assetType:l,assetName:m}=e;let u=null;try{const e=await async function({data:e,name:t,description:o},a,n){let p=null;try{const l=i(a,"uploads"),m=i(l,"info"),{data:u}=await s(m,{query:{f:"json"},responseType:"json"});r(n);const f=E(a),d=1e6*u.maxUploadFileSize,g=f?2e9:d,y=f?Math.min(M,d):M;if(e.size>g)throw new Error("Data too large");const j=i(l,"register"),{data:h}=await s(j,{query:{f:"json",itemName:(c=t,c.replaceAll("/","_").replaceAll("\\","_")),description:o},responseType:"json",method:"post"});if(r(n),!h.success)throw new Error("Registration failed");const{itemID:w}=h.item;p=i(l,w);const b=i(p,"uploadPart"),P=Math.ceil(e.size/y),T=new Array;for(let s=0;s<P;++s)T.push(e.slice(s*y,Math.min((s+1)*y,e.size)));const U=T.slice().reverse(),v=new Array,x=A(P,n?.onProgress,"uploadItem"),F=async()=>{for(;0!==U.length;){const e=T.length-U.length,t=U.pop(),o=new FormData,a=x.simulate(e,S(t.size));try{o.append("f","json"),o.append("file",t),o.append("partId",`${e}`);const{data:a}=await s(b,{timeout:0,body:o,responseType:"json",method:"post"});if(r(n),!a.success)throw new Error("Part upload failed")}finally{a.remove()}}};for(let s=0;s<3&&0!==U.length;++s)v.push(F());await Promise.all(v);const R=i(p,"commit"),{data:D}=await s(R,{query:{f:"json",parts:T.map(((s,e)=>e)).join(",")},responseType:"json",method:"post"});if(r(n),!D.success)throw new Error("Commit failed");return D.item}catch(e){if(null!=p){const e=i(p,"delete");await s(e,{query:{f:"json"},responseType:"json",method:"post"})}throw e}var c}({data:c,name:m},o.url,n);r(n),u={assetType:l,assetUploadId:e.itemID}}catch(s){a(s),t.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${o.url} does not support the REST Uploads API.`)}if(!u){const s=await p(c);if(r(n),!s.isBase64)throw new T;u={assetType:l,assetData:s.data}}if(!u)throw new U;return{item:u,assetName:m}}(await e,o,{...n,onProgress:c.makeOnProgress(l)});return r(n),m})))}(e,o,{...n,onProgress:c.makeOnProgress("prepareAssetItems")});r(n);const m=l.map((({item:s})=>s)),{uploadResults:d}=await async function(e,t,o){const a=F(o?.onProgress);try{const a=await s(i(t.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if(r(o),a.data.uploadResults.length!==e.length)throw new j(e.length,a.data.uploadResults.length);return a.data}finally{a.remove()}}(m,o,{...n,onProgress:c.makeOnProgress("uploadAssetItems")});return r(n),e.map(((s,e)=>function(s,e,t){const{success:r}=e;if(!r){const{error:t}=e;throw new h(s.assetName,t)}const{assetHash:o}=e,{assetName:a,item:{assetType:n}}=s,{infoFor3D:{supportedFormats:i}}=t,p=N(n,i);if(!p)throw new w(n);return new u(a,p,[new f(`${t.parsedUrl.path}/assets/${o}`,o)])}(l[e],d[e],o)))}function G(e,t){return s(e,t)}async function _(e,t){const r=(await s(e,t)).data.statusUrl;for(;;){const e=(await s(r,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return s(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await o(K)}}function W({infoFor3D:s}){const e=O(s);if(!e)throw new P;return e}const K=n(1e3);export{L as uploadAssets};

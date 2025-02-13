/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import r from"../core/Error.js";import{c as e}from"./MD5.js";import{i as t}from"./multiOriginJSONSupportUtils.js";import{isAbsolute as o,isBlobProtocol as s,join as n,blobUrlToBlob as i,getPathExtension as c}from"../core/urlUtils.js";import{g as p}from"./uuid.js";import{g as a}from"./metadata.js";import{n as u}from"../core/Accessor.js";import{propertyJSONMeta as l}from"../core/accessorSupport/decorators/property.js";import{g as m}from"./resourceExtension.js";import{r as d,a as f,M as y,i as g,p as h,b as v}from"./persistableUrlUtils.js";function j(r){const e=r?.origins??[void 0];return(n,i)=>{const p=function(r,e,n){if("resource"===r?.type)return function(r,e,n){const i=a(e,n);return{type:String,read:(r,e,t)=>{const o=d(r,e,t);return i.type===String?o:"function"==typeof i.type?new i.type({url:o}):void 0},write:{writer(e,p,a,l){if(!l?.resources)return"string"==typeof e?void(p[a]=f(e,l)):void(p[a]=e.write({},l));const d=null==(N=e)?null:"string"==typeof N?N:N.url,h=f(d,{...l,verifyItemRelativeUrls:l?.verifyItemRelativeUrls?{writtenUrls:l.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},y.NO),v=i.type!==String&&(!t(this)||l?.origin&&this.originIdOf(n)>u(l.origin)),j={object:this,propertyName:n,value:e,targetUrl:h,dest:p,targetPropertyName:a,context:l,params:r};var N;l?.portalItem&&h&&!o(h)?v&&r?.contentAddressed?U(j):v?function(r){const{context:e,targetUrl:t,params:o,value:s,dest:n,targetPropertyName:i}=r;if(!e.portalItem)return;const p=e.portalItem.resourceFromPath(t),a=I(s,t,e),u=m(a),l=c(p.path),d=o?.compress??!1;u===l?(e.resources&&w({...r,resource:p,content:a,compress:d,updates:e.resources.toUpdate}),n[i]=t):U(r)}(j):function({context:r,targetUrl:e,dest:t,targetPropertyName:o}){r.portalItem&&r.resources&&(r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e),compress:!1}),t[o]=e)}(j):l?.portalItem&&(null==h||null!=g(h)||s(h)||v)?U(j):p[a]=h}}}}(r,e,n);switch(r?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:r,write:e}=v;return{read:r,write:e}}}}(r,n,i);for(const r of e){const e=l(n,r,i);for(const r in p)e[r]=p[r]}}}function U(t){const{targetUrl:o,params:c,value:a,context:u,dest:l,targetPropertyName:d}=t;if(!u.portalItem)return;const f=h(o),y=I(a,o,u);if(c?.contentAddressed&&"json"!==y.type)return void u.messages?.push(new r("persistable:contentAddressingUnsupported",`Property "${d}" is trying to serializing a resource with content of type ${y.type} with content addressing. Content addressing is only supported for json resources.`,{content:y}));const g=c?.contentAddressed&&"json"===y.type?e(y.jsonString):f?.filename??p(),v=n(c?.prefix??f?.prefix,g),j=`${v}.${m(y)}`;if(c?.contentAddressed&&u.resources&&"json"===y.type){const r=u.resources.toKeep.find((({resource:r})=>r.path===j))??u.resources.toAdd.find((({resource:r})=>r.path===j));if(r)return void(l[d]=r.resource.itemRelativeUrl)}const U=u.portalItem.resourceFromPath(j);s(o)&&u.resources&&u.resources.pendingOperations.push(i(o).then((r=>{U.path=`${v}.${m({type:"blob",blob:r})}`,l[d]=U.itemRelativeUrl})).catch((()=>{})));const N=c?.compress??!1;u.resources&&w({...t,resource:U,content:y,compress:N,updates:u.resources.toAdd}),l[d]=U.itemRelativeUrl}function w({object:r,propertyName:e,updates:t,resource:o,content:s,compress:n}){t.push({resource:o,content:s,compress:n,finish:t=>{!function(r,e,t){"string"==typeof r[e]?r[e]=t.url:r[e].url=t.url}(r,e,t)}})}function I(r,e,t){return"string"==typeof r?{type:"url",url:e}:{type:"json",jsonString:JSON.stringify(r.toJSON(t))}}export{j as p};

"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[582,5485],{79697:(e,t,r)=>{r.d(t,{a:()=>s,c:()=>n});var a=r(99063),o=r(82408);function s(e,t){return{...i(e,t),readResourcePaths:[]}}function n(e,t,r){const o=(0,a.An)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||o.A.getDefault(),portalItem:e}}},90582:(e,t,r)=>{r.d(t,{save:()=>m,saveAs:()=>h});var a=r(68396),o=r(79697),s=r(82454),n=r(335);r(6407),r(32773),r(20266),r(90740),r(82408),r(32816),r(29512),r(99063),r(99924),r(41390),r(69421),r(40499),r(93181),r(13671),r(91047),r(36544),r(29298),r(58498),r(45371),r(80959),r(64604),r(73509),r(28276),r(49877),r(44600),r(2160),r(7969),r(69763),r(93804),r(18683),r(56273),r(64752),r(48844),r(29208),r(59192),r(69277),r(70580),r(75191),r(24319),r(62092),r(43059),r(89935),r(49813),r(1178),r(8410),r(78281),r(44945),r(2589),r(36533),r(84200),r(97827),r(91695),r(18169),r(20762),r(48402),r(16699),r(67504),r(47387),r(46728),r(64102),r(93049),r(75485);const i="Media Layer",c=["media-layer:unsupported-source"];function u(e){return{isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function l(e){return(0,o.c)(e,"portal-item",!0)}function p(e){return Promise.resolve(e.layerJSON)}async function d(e,t){t.extent=e.fullExtent?await(0,s.b)(e.fullExtent):null}async function f(e,t){t.title||=e.title,await d(e,t),(0,s.r)(t,s.t.METADATA)}async function m(e,t){return(0,a.s)({layer:e,itemType:i,validateLayer:u,createJSONContext:e=>l(e),createItemData:p,errorNamePrefix:"media-layer-save",supplementalUnsupportedErrors:c,setItemProperties:d,saveResources:(t,r)=>(0,n.s)(e.resourceReferences,r)},t)}async function h(e,t,r){return(0,a.a)({layer:e,itemType:i,validateLayer:u,createJSONContext:e=>l(e),createItemData:p,errorNamePrefix:"media-layer-save-as",supplementalUnsupportedErrors:c,newItem:t,setItemProperties:f,saveResources:(t,r)=>(0,n.s)(e.resourceReferences,r)},r)}},73341:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{i:()=>a})},54203:(e,t,r)=>{r.d(t,{u:()=>o});var a=r(73341);function o(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,a.i)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},75485:(e,t,r)=>{r.d(t,{addOrUpdateResources:()=>i,bg:()=>d,cL:()=>p,fetchResources:()=>n,removeAllResources:()=>u,removeResource:()=>c});var a=r(64604),o=r(6407),s=r(99063);async function n(e,t={},r){await e.load(r);const a=(0,s.fj)(e.itemUrl,"resources"),{start:o=1,num:n=10,sortOrder:i="asc",sortField:c="resource"}=t,u={query:{start:o,num:n,sortOrder:i,sortField:c,token:e.apiKey},signal:r?.signal},l=await e.portal.request(a,u);return{total:l.total,nextStart:l.nextStart,resources:l.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function i(e,t,r,a){const n=new Map;for(const{resource:e,content:a,compress:s,access:i}of t){if(!e.hasPath())throw new o.A(`portal-item-resource-${r}:invalid-path`,"Resource does not have a valid path");const[t,c]=l(e.path),u=`${t}/${s??""}/${i??""}`;n.has(u)||n.set(u,{prefix:t,compress:s,access:i,files:[]}),n.get(u).files.push({fileName:c,content:a})}await e.load(a);const i=(0,s.fj)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:t,compress:r,access:o,files:s}of n.values()){const n=25;for(let c=0;c<s.length;c+=n){const u=s.slice(c,c+n),l=new FormData;t&&"."!==t&&l.append("resourcesPrefix",t),r&&l.append("compress","true"),o&&l.append("access",o);let p=0;for(const{fileName:e,content:t}of u)l.append("file"+ ++p,t,e);l.append("f","json"),await e.portal.request(i,{method:"post",body:l,signal:a?.signal})}}}async function c(e,t,r){if(!t.hasPath())throw new o.A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=(0,s.fj)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:t.path},signal:r?.signal}),t.portalItem=null}async function u(e,t){await e.load(t);const r=(0,s.fj)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function l(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}async function p(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,a.A)(e.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[r,,a]=function(e){const[t,r]=function(e){const t=(0,s.Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[a,o]=l(t);return[a,o,r]}(e.path);return e.portalItem.resourceFromPath((0,s.fj)(r,t+a))}r(90740),r(32773),r(29512),r(80959),r(13671),r(20266),r(99924),r(32816),r(41390),r(69421),r(40499),r(93181),r(91047),r(36544),r(29298),r(58498),r(45371)},335:(e,t,r)=>{r.d(t,{s:()=>i,u:()=>c});var a=r(6407),o=r(80959),s=r(93049),n=r(75485);async function i(e,t,r){const a=await u(e,t,r);await l(a,t,r)}async function c(e,t,r,a,o){const s=await u(r,a,o);await e.update({data:t}),await l(s,a,o)}async function u(e,t,i){if(!t?.resources)return;const c=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const u=new Set(t.resources.toKeep.map((e=>e.resource.path))),l=new Set,p=[];u.forEach((t=>{c.delete(t),e.paths.push(t)}));const d=[],f=[],m=[];for(const r of t.resources.toUpdate)if(c.delete(r.resource.path),u.has(r.resource.path)||l.has(r.resource.path)){const{resource:t,content:a,finish:o}=r,i=(0,n.bg)(t,(0,s.g)());e.paths.push(i.path),d.push({resource:i,content:await(0,n.cL)(a),compress:r.compress}),o&&m.push((()=>o(i)))}else{e.paths.push(r.resource.path),f.push({resource:r.resource,content:await(0,n.cL)(r.content),compress:r.compress});const t=r.finish;t&&m.push((()=>t(r.resource))),l.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),c.has(r.resource.path))c.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,n.cL)(r.content),compress:r.compress});const e=r.finish;e&&m.push((()=>e(r.resource)))}if(d.length||f.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,75485));await e(t.portalItem,d,"add",i),await e(t.portalItem,f,"update",i)}if(m.forEach((e=>e())),0===p.length)return c;const h=await(0,o.Ol)(p);if((0,o.Te)(i),h.length>0)throw new a.A("save:resources","Failed to save one or more resources",{errors:h});return c}async function l(e,t,r){if(!e||!t.portalItem)return;const a=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);a.push(e.portalItem.removeResource(e,r))}await(0,o.Lx)(a)}},8410:(e,t,r)=>{r.d(t,{b:()=>o,e:()=>n});var a=r(6407);async function o(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const s=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function n(e,t,r){let o=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:r})=>new a.A(e,t,r)));if(e.blockedRelativeUrls&&(o=o.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(o=o.filter((({name:e})=>!(s.has(e)||t.includes(e))))),a&&(o=o.filter((e=>"web-document-write:property-required"!==e.name)))}if(o.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}},68396:(e,t,r)=>{r.d(t,{a:()=>y,s:()=>w});var a=r(6407),o=r(54203),s=r(82408),n=r(43059),i=r(79697),c=r(82454),u=r(8410);async function l(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),function(e,t,r){const o=r(e);if(!o.isValid)throw new a.A(`${t}:invalid-parameters`,o.errorMessage,{layer:e})}(t,r,o)}function p(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function d(e){const{item:t,errorNamePrefix:r,layer:o,validateItem:s}=e;if(function(e){const{item:t,itemType:r,additionalItemType:o,errorNamePrefix:s,layer:n}=e,i=[r];if(o&&i.push(o),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new a.A(`${s}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:n})}}(e),s){const e=s(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:o})}}function f(e){return(0,i.c)(e,"portal-item")}async function m(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.e)(t,{errorName:"layer-write:unsupported"},r),a}function h(e){(0,c.a)(e,c.t.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function w(e,t){const{layer:r,createItemData:s,createJSONContext:n,setItemProperties:i,saveResources:c,supplementalUnsupportedErrors:u}=e;await l(e),function(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new a.A(`${r}:portal-item-not-set`,p(t,"requires the portalItem property to be set"));if(!o.loaded)throw new a.A(`${r}:portal-item-not-loaded`,p(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:o})}(e);const w=r.portalItem,y=n?n(w):f(w),v=await m(r,y,{...t,supplementalUnsupportedErrors:u}),g=await s({layer:r,layerJSON:v},w);return await(i?.(r,w,g)),h(w),await w.update({data:g}),(0,o.u)(y),await(c?.(w,y)),w}async function y(e,t){const{layer:r,createItemData:a,createJSONContext:i,setItemProperties:c,saveResources:u,supplementalUnsupportedErrors:p}=e;await l(e);const w=function(e){const{newItem:t,itemType:r}=e;let a=n.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=s.A.getDefault(),d({...e,item:a}),a}(e),y=i?i(w):f(w),v=await m(r,y,{...t,supplementalUnsupportedErrors:p}),g=await a({layer:r,layerJSON:v},w);return await c(r,w,g),h(w),await async function(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}(w,g,t),r.portalItem=w,(0,o.u)(y),await(u?.(w,y)),w}}}]);
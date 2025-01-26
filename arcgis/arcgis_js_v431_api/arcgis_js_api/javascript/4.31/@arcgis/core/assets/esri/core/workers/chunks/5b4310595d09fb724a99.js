"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[6810],{50472:(e,a,t)=>{t.d(a,{f:()=>u});var r=t(29512),n=t(64604),s=t(6407),i=t(80959),l=t(1985),c=t(82408),o=t(43059);async function u(e,a){const t=(0,l.p)(e);if(!t)throw new s.A("invalid-url","Invalid scene service url");const u={...a,sceneServerUrl:t.url.path,layerId:t.sublayer??void 0};if(u.sceneLayerItem??=await async function(e){const a=(await y(e)).serviceItemId;if(!a)return null;const t=new o.default({id:a,apiKey:e.apiKey}),s=await async function(e){const a=r.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const t=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(t,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,i.QP)(e)}return null}(e);null!=s&&(t.portal=new c.A({url:s}));try{return await t.load({signal:e.signal})}catch(e){return(0,i.QP)(e),null}}(u),null==u.sceneLayerItem)return d(u.sceneServerUrl.replace("/SceneServer","/FeatureServer"),u);const f=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const t=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!t)return null;const r=new o.default({portal:t.portal,id:t.id});return await r.load(),r}catch(e){return(0,i.QP)(e),null}}(u);if(!f?.url)throw new s.A("related-service-not-found","Could not find feature service through portal item relationship");u.featureServiceItem=f;const m=await d(f.url,u);return m.portalItem=f,m}async function y(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const t=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=t.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const t=(0,l.p)(e);if(!t)throw new s.A("invalid-feature-service-url","Invalid feature service url");const r=t.url.path,i=a.layerId;if(null==i)return{serverUrl:r};const c=y(a),o=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,u=(o?.layers?.[0]||o?.tables?.[0])?.customParameters,d=e=>{const t={query:{f:"json",...u},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(r,t)},f=d("anonymous").catch((()=>d("no-prompt"))),[m,w]=await Promise.all([f,c]),h=w?.layers,p=m.data&&m.data.layers;if(!Array.isArray(p))throw new Error("expected layers array");if(Array.isArray(h)){for(let e=0;e<Math.min(h.length,p.length);e++)if(h[e].id===i)return{serverUrl:r,layerId:p[e].id}}else if(null!=i&&i<p.length)return{serverUrl:r,layerId:p[i].id};throw new Error("could not find matching associated sublayer")}},89157:(e,a,t)=>{t.d(a,{f:()=>s,g:()=>d});var r=t(30861);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function s(e,a){const{loadContext:t,...n}=a||{},s=t?await t.fetchServiceMetadata(e,n):await(0,r.f)(e,n);y(s),c(s);const i={serviceJSON:s};if((s.currentVersion??0)<10.5)return i;const l=`${e}/layers`,o=t?await t.fetchServiceMetadata(l,n):await(0,r.f)(l,n);return y(o),c(o),i.layersJSON={layers:o.layers,tables:o.tables},i}function i(e){const{type:a}=e;return!!a&&n.has(a)}function l(e){return"Table"===e.type}function c(e){e.layers=e.layers?.filter(i),e.tables=e.tables?.filter(l)}function o(e){e.type||="Feature Layer"}function u(e){e.type||="Table"}function y(e){e.layers?.forEach(o),e.tables?.forEach(u)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},57492:(e,a,t)=>{t.d(a,{l:()=>r});const r={BingMapsLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(6391)]).then(t.bind(t,56391))).default,BuildingSceneLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(2570),t.e(2283),t.e(7125),t.e(5611),t.e(2606),t.e(7981),t.e(6117),t.e(7427),t.e(5414)]).then(t.bind(t,75414))).default,CSVLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(2570),t.e(2283),t.e(7125),t.e(3279)]).then(t.bind(t,55963))).default,CatalogLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(2570),t.e(2283),t.e(8140),t.e(3609),t.e(8380),t.e(3378)]).then(t.bind(t,38030))).default,DimensionLayer:async()=>(await Promise.all([t.e(8730),t.e(3972)]).then(t.bind(t,3972))).default,ElevationLayer:async()=>(await Promise.all([t.e(8730),t.e(1354),t.e(5026)]).then(t.bind(t,95026))).default,FeatureLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(2570),t.e(2283),t.e(7125),t.e(2231)]).then(t.bind(t,77125))).default,GeoJSONLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(7634)]).then(t.bind(t,93390))).default,GeoRSSLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(4048),t.e(1959),t.e(8340)]).then(t.bind(t,18340))).default,GroupLayer:async()=>(await Promise.all([t.e(8730),t.e(4132)]).then(t.bind(t,64132))).default,ImageryLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(8140),t.e(6759),t.e(6068),t.e(4683),t.e(1489)]).then(t.bind(t,71489))).default,ImageryTileLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(6759),t.e(6068),t.e(4683),t.e(9457),t.e(5383)]).then(t.bind(t,25383)).then((e=>e.I))).default,IntegratedMesh3DTilesLayer:async()=>(await Promise.all([t.e(8730),t.e(9583)]).then(t.bind(t,29583))).default,IntegratedMeshLayer:async()=>(await Promise.all([t.e(8730),t.e(7981),t.e(403)]).then(t.bind(t,70403))).default,KMLLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(2397),t.e(633)]).then(t.bind(t,80633))).default,KnowledgeGraphLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(8896),t.e(73),t.e(3551),t.e(7795),t.e(6852),t.e(4305)]).then(t.bind(t,54305))).default,LineOfSightLayer:async()=>(await Promise.all([t.e(8730),t.e(5611),t.e(1328),t.e(3022)]).then(t.bind(t,63022))).default,LinkChartLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(8896),t.e(73),t.e(3551),t.e(7795),t.e(6852),t.e(4315)]).then(t.bind(t,64315))).default,MapImageLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(2570),t.e(8140),t.e(3609),t.e(4450),t.e(739)]).then(t.bind(t,90739))).default,MapNotesLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(2570),t.e(2283),t.e(7125),t.e(7795),t.e(7668)]).then(t.bind(t,67668))).default,MediaLayer:async()=>(await Promise.all([t.e(8730),t.e(605)]).then(t.bind(t,50605))).default,OGCFeatureLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(2570),t.e(3380),t.e(9932)]).then(t.bind(t,59932))).default,OpenStreetMapLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(4133),t.e(7390)]).then(t.bind(t,17390))).default,OrientedImageryLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(2570),t.e(2283),t.e(7125),t.e(5730)]).then(t.bind(t,3022)).then((e=>e.O))).default,PointCloudLayer:async()=>(await Promise.all([t.e(8730),t.e(2393),t.e(7981),t.e(3601),t.e(7775)]).then(t.bind(t,17775))).default,RouteLayer:async()=>(await Promise.all([t.e(8730),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(2397),t.e(2983)]).then(t.bind(t,92983))).default,SceneLayer:async()=>(await Promise.all([t.e(8730),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(5611),t.e(2606),t.e(3628),t.e(7981),t.e(6117),t.e(993),t.e(7427),t.e(287)]).then(t.bind(t,70287))).default,StreamLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(1849)]).then(t.bind(t,72669))).default,SubtypeGroupLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(2283),t.e(6068),t.e(2461)]).then(t.bind(t,2461))).default,TileLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(2570),t.e(8140),t.e(3609),t.e(1354),t.e(4450),t.e(2161)]).then(t.bind(t,62161))).default,UnknownLayer:async()=>(await t.e(2817).then(t.bind(t,82817))).default,UnsupportedLayer:async()=>(await t.e(6114).then(t.bind(t,56114))).default,VectorTileLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(1354),t.e(9861),t.e(1189),t.e(5461)]).then(t.bind(t,75461))).default,VideoLayer:async()=>(await t.e(2405).then(t.bind(t,92405))).default,ViewshedLayer:async()=>(await Promise.all([t.e(8730),t.e(5611),t.e(1328),t.e(8625)]).then(t.bind(t,18625))).default,VoxelLayer:async()=>(await Promise.all([t.e(8730),t.e(2393),t.e(7981),t.e(3471)]).then(t.bind(t,43471))).default,WFSLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(8358),t.e(782),t.e(3600),t.e(2397),t.e(7580),t.e(4922),t.e(9755),t.e(4225),t.e(6045)]).then(t.bind(t,12353))).default,WMSLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(2393),t.e(4048),t.e(1959),t.e(9323)]).then(t.bind(t,9323))).default,WMTSLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(4133),t.e(6825)]).then(t.bind(t,36825))).default,WebTileLayer:async()=>(await Promise.all([t.e(8730),t.e(6218),t.e(4133)]).then(t.bind(t,64133)).then((e=>e.a))).default}},56810:(e,a,t)=>{t.r(a),t.d(a,{L:()=>y,a:()=>b,b:()=>h,c:()=>d,d:()=>w,e:()=>P,g:()=>m,i:()=>p,l:()=>L,p:()=>f,s:()=>S});var r=t(6407),n=t(50472),s=t(89157),i=t(30861),l=t(23916),c=t(57492),o=t(43059),u=t(82454);class y{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const t=this._serviceMetadatas.get(e);if(t)return t;const r=await(0,i.f)(e,a);return this._serviceMetadatas.set(e,r),r}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:t}=this;if(t.has(a))return t.get(a);const r=await e.fetchData();return t.set(a,r),r}async fetchCustomParameters(e,a){const t=await this.fetchItemData(e);return t&&"object"==typeof t&&(a?a(t):t.customParameters)||null}}function d(e){const a={id:e.id,name:e.name},t=(0,s.g)(e.type);return"FeatureLayer"!==t&&(a.layerType=t),a}async function f(e,a,t){if(null==e?.layers||null==e?.tables){const r=await t.fetchServiceMetadata(a,{customParameters:m(e)?.customParameters});(e=e||{}).layers=e.layers||r?.layers?.map(d),e.tables=e.tables||r?.tables?.map(d)}return e}function m(e){if(!e)return null;const{layers:a,tables:t}=e;return a?.length?a[0]:t?.length?t[0]:null}function w(e,a){return[...e.layers||[],...e.tables||[]].filter((({layerType:e})=>e?e===a:"ArcGISFeatureLayer"===a))}function h(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function p(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function L(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function b(e,a,t){if(!e?.url)return a??{};if(a??={},!a.layers){const r=await t.fetchServiceMetadata(e.url);a.layers=r.layers?.map(d)}const{serverUrl:r,portalItem:s}=await(0,n.f)(e.url,{sceneLayerItem:e,customParameters:m(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==r)return a.tables=[],a;if(!a.tables&&s){const e=await s.fetchData().catch((()=>null));if(e?.tables)a.tables=e.tables.map(d);else{const n=await t.fetchServiceMetadata(r,{customParameters:m(e)?.customParameters}).catch((()=>null));a.tables=n?.tables?.map(d)}}if(a.tables)for(const e of a.tables)e.url=`${r}/${e.id}`;return a}async function S(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,u.h)(e,"Map Notes"),t=(0,u.h)(e,"Markup");return a||t?{className:"MapNotesLayer"}:(0,u.h)(e,"Route Layer")?{className:"RouteLayer"}:1===h(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const t=await g(e,a);if("object"==typeof t){const{sourceJSON:e,className:a}=t,r={sourceJSON:e};return null!=t.id&&(r.layerId=t.id),{className:a||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const t=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(t.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(t.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await a.fetchItemData(e),n=r?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const s=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),i=s.cacheType?.toLowerCase(),l=s.capabilities?.toLowerCase().includes("tilesonly"),c=s.tileInfo?.format?.toLowerCase()??"",o=null==i&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(c);return"map"===i||o||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){const t=await async function(e,a){const{tileInfo:t}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return t}(e,a);return t?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const t=await g(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await(0,n.f)(e.url,{sceneLayerItem:e}),r=await a.fetchServiceMetadata(t);return r?.tables??[]}catch{return[]}}));if("object"==typeof t){const r={};let n;if(null!=t.id?(r.layerId=t.id,n=`${e.url}/layers/${t.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(l.s))if(e.typeKeywords.includes(a))return{className:l.s[a]};const s=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>m(e)?.customParameters))});return{className:l.s[s?.layerType]||"SceneLayer",properties:r}}if(!1===t){const t=await a.fetchServiceMetadata(e.url);if("Voxel"===t?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new r.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function g(e,a,t){const{url:r,type:n}=e,i="Feature Service"===n;if(!r)return{};if(/\/\d+$/.test(r)){if(i){const t=await a.fetchServiceMetadata(r,{customParameters:await a.fetchCustomParameters(e,(e=>m(e)?.customParameters))});return{id:t.id,className:(0,s.g)(t.type),sourceJSON:t}}return{}}await e.load();let l=await a.fetchItemData(e);if(i){const e=await f(l,r,a),t=v(e);if("object"==typeof t){const a=function(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}(e,t.id);t.className=L(a?.layerType)}return t}if("Scene Service"===n&&(l=await b(e,l,a)),h(l)>0)return v(l);const c=await a.fetchServiceMetadata(r);return t&&(c.tables=await t()),v(c)}function v(e){return 1===h(e)&&{id:m(e)?.id}}const P=Object.freeze(Object.defineProperty({__proto__:null,fromItem:async function(e){let{portalItem:a}=e;!a||a instanceof o.default||(a=new o.default(a));const t=await async function(e){await e.load();const a=new y;return async function(e){const a=e.className,t=c.l[a];return{constructor:await t(),properties:e.properties}}(await S(e,a))}(a);return new(0,t.constructor)({portalItem:a,...t.properties})},selectLayerClassPath:S},Symbol.toStringTag,{value:"Module"}))},30861:(e,a,t)=>{t.d(a,{f:()=>n});var r=t(64604);async function n(e,a){const{data:t}=await(0,r.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return t}}}]);
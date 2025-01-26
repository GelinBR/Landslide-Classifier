"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[570,6810],{50472:(e,a,r)=>{r.d(a,{f:()=>o});var t=r(29512),n=r(64604),i=r(6407),s=r(80959),l=r(1985),c=r(82408),y=r(43059);async function o(e,a){const r=(0,l.p)(e);if(!r)throw new i.A("invalid-url","Invalid scene service url");const o={...a,sceneServerUrl:r.url.path,layerId:r.sublayer??void 0};if(o.sceneLayerItem??=await async function(e){const a=(await u(e)).serviceItemId;if(!a)return null;const r=new y.default({id:a,apiKey:e.apiKey}),i=await async function(e){const a=t.id?.findServerInfo(e.sceneServerUrl);if(a?.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.A)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(e){(0,s.QP)(e)}return null}(e);null!=i&&(r.portal=new c.A({url:i}));try{return await r.load({signal:e.signal})}catch(e){return(0,s.QP)(e),null}}(o),null==o.sceneLayerItem)return d(o.sceneServerUrl.replace("/SceneServer","/FeatureServer"),o);const L=await async function({sceneLayerItem:e,signal:a}){if(!e)return null;try{const r=(await e.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:a})).find((e=>"Feature Service"===e.type))||null;if(!r)return null;const t=new y.default({portal:r.portal,id:r.id});return await t.load(),t}catch(e){return(0,s.QP)(e),null}}(o);if(!L?.url)throw new i.A("related-service-not-found","Could not find feature service through portal item relationship");o.featureServiceItem=L;const f=await d(L.url,o);return f.portalItem=L,f}async function u(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.A)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function d(e,a){const r=(0,l.p)(e);if(!r)throw new i.A("invalid-feature-service-url","Invalid feature service url");const t=r.url.path,s=a.layerId;if(null==s)return{serverUrl:t};const c=u(a),y=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,o=(y?.layers?.[0]||y?.tables?.[0])?.customParameters,d=e=>{const r={query:{f:"json",...o},responseType:"json",authMode:e,signal:a.signal};return(0,n.A)(t,r)},L=d("anonymous").catch((()=>d("no-prompt"))),[f,m]=await Promise.all([L,c]),p=m?.layers,S=f.data&&f.data.layers;if(!Array.isArray(S))throw new Error("expected layers array");if(Array.isArray(p)){for(let e=0;e<Math.min(p.length,S.length);e++)if(p[e].id===s)return{serverUrl:t,layerId:S[e].id}}else if(null!=s&&s<S.length)return{serverUrl:t,layerId:S[s].id};throw new Error("could not find matching associated sublayer")}},89157:(e,a,r)=>{r.d(a,{f:()=>i,g:()=>d});var t=r(30861);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function i(e,a){const{loadContext:r,...n}=a||{},i=r?await r.fetchServiceMetadata(e,n):await(0,t.f)(e,n);u(i),c(i);const s={serviceJSON:i};if((i.currentVersion??0)<10.5)return s;const l=`${e}/layers`,y=r?await r.fetchServiceMetadata(l,n):await(0,t.f)(l,n);return u(y),c(y),s.layersJSON={layers:y.layers,tables:y.tables},s}function s(e){const{type:a}=e;return!!a&&n.has(a)}function l(e){return"Table"===e.type}function c(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(l)}function y(e){e.type||="Feature Layer"}function o(e){e.type||="Table"}function u(e){e.layers?.forEach(y),e.tables?.forEach(o)}function d(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},60570:(e,a,r)=>{r.d(a,{N:()=>b,populateOperationalLayers:()=>y});var t=r(17745),n=(r(32773),r(56810)),i=r(57492),s=r(43059),l=r(58396);function c(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}async function y(e,a,r){if(!a)return;const t=a.map((e=>async function(e,a){const r=await async function(e,a){const r=a.context,t=function(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=L;break;case"ground":a=u;break;case"tables":a=d;break;default:a=o}break;case"link-chart":switch(e.layerContainerType){case"basemap":a=h;break;case"tables":a=w;break;default:a=S}break;default:switch(e.layerContainerType){case"basemap":a=p;break;case"tables":a=m;break;default:a=f}}return a}(r);let l=e.layerType||e.type;!l&&a?.defaultLayerType&&(l=a.defaultLayerType);const y=t[l];let b=y?i.l[y]:i.l.UnknownLayer;if(I(e)){const a=r?.portal;if(e.itemId){const r=new s.default({id:e.itemId,portal:a});await r.load();const t=(await(0,n.s)(r,new n.L)).className||"UnknownLayer";b=i.l[t]}}else"ArcGISFeatureLayer"===l?function(e){return c(e,"notes")}(e)||function(e){return c(e,"markup")}(e)?b=i.l.MapNotesLayer:function(e){return c(e,"route")}(e)?b=i.l.RouteLayer:g(e)&&(b=i.l.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?b=i.l.WMTSLayer:"WFS"===l&&"2.0.0"!==e.wfsInfo?.version&&(b=i.l.UnsupportedLayer);return b()}(e,a);return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&("GroupLayer"===a.layerType?await b(t,a,r):I(a)?function(e,a,r){a.itemId&&(e.portalItem=new s.default({id:a.itemId,portal:r?.portal}),e.when((()=>{const t=t=>{const n=t.layerId;v(t,e,a,n,r);const i=a.featureCollection?.layers?.[n];i&&t.read(i,r)};e.layers?.forEach(t),e.tables?.forEach(t)})))}(t,a,r.context):g(a)&&await async function(e,a,r){const t=i.l.FeatureLayer,n=await t(),s=a.featureCollection,l=s?.showLegend,c=s?.layers?.map(((t,i)=>{const s=new n;s.read(t,r);const c={...r,ignoreDefaults:!0};return v(s,e,a,i,c),null!=l&&s.read({showLegend:l},c),s}));e.layers.addMany(c??[])}(t,a,r.context)),await(0,l.l)(t,r.context),t}(r,e,a)}(e,r))),y=await Promise.allSettled(t);for(const a of y)"rejected"===a.status||a.value&&e.add(a.value)}r(32816),r(41390),r(20266),r(90740),r(69421),r(40499),r(93181),r(13671),r(91047),r(36544),r(6407),r(29298),r(58498),r(45371),r(80959),r(81272),r(44945),r(50472),r(29512),r(99063),r(99924),r(64604),r(1985),r(1178),r(82408),r(73509),r(28276),r(49877),r(44600),r(2160),r(7969),r(69763),r(93804),r(18683),r(56273),r(64752),r(48844),r(29208),r(59192),r(69277),r(70580),r(75191),r(24319),r(62092),r(89157),r(30861),r(23916),r(82454),r(78281),r(2589),r(36533),r(84200),r(97827),r(91695),r(18169),r(20762),r(48402),r(16699),r(67504),r(47387),r(46728),r(64102),r(89935),r(49813),r(73067);const o={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},u={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISFeatureLayer:"FeatureLayer"},L={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},f={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"UnsupportedLayer"},p={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},S={...f,LinkChartLayer:"LinkChartLayer"},w={...m},h={...p};function g(e){return"ArcGISFeatureLayer"===e.layerType&&!I(e)&&(e.featureCollection?.layers?.length??0)>1}function I(e){return"Feature Collection"===e.type}async function b(e,a,r){const n=new t.A,i=y(n,Array.isArray(a.layers)?a.layers:[],r);try{try{if(await i,"group"===e.type)return e.layers.addMany(n),e}catch(a){e.destroy();for(const e of n)e.destroy();throw a}}catch(e){throw e}}function v(e,a,r,t,n){e.read({id:`${a.id}-sublayer-${t}`,visibility:r.visibleLayers?.includes(t)??!0},n)}},57492:(e,a,r)=>{r.d(a,{l:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(6391)]).then(r.bind(r,56391))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(2570),r.e(2283),r.e(7125),r.e(5611),r.e(2606),r.e(7981),r.e(6117),r.e(7427),r.e(5414)]).then(r.bind(r,75414))).default,CSVLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(2570),r.e(2283),r.e(7125),r.e(3279)]).then(r.bind(r,55963))).default,CatalogLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(2570),r.e(2283),r.e(8140),r.e(3609),r.e(8380),r.e(3378)]).then(r.bind(r,38030))).default,DimensionLayer:async()=>(await Promise.all([r.e(8730),r.e(3972)]).then(r.bind(r,3972))).default,ElevationLayer:async()=>(await Promise.all([r.e(8730),r.e(1354),r.e(5026)]).then(r.bind(r,95026))).default,FeatureLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(2570),r.e(2283),r.e(7125),r.e(2231)]).then(r.bind(r,77125))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(7634)]).then(r.bind(r,93390))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(4048),r.e(1959),r.e(8340)]).then(r.bind(r,18340))).default,GroupLayer:async()=>(await Promise.all([r.e(8730),r.e(4132)]).then(r.bind(r,64132))).default,ImageryLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(8140),r.e(6759),r.e(6068),r.e(4683),r.e(1489)]).then(r.bind(r,71489))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(6759),r.e(6068),r.e(4683),r.e(9457),r.e(5383)]).then(r.bind(r,25383)).then((e=>e.I))).default,IntegratedMesh3DTilesLayer:async()=>(await Promise.all([r.e(8730),r.e(9583)]).then(r.bind(r,29583))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(8730),r.e(7981),r.e(403)]).then(r.bind(r,70403))).default,KMLLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(2397),r.e(633)]).then(r.bind(r,80633))).default,KnowledgeGraphLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(8896),r.e(73),r.e(3551),r.e(7795),r.e(6852),r.e(4305)]).then(r.bind(r,54305))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(8730),r.e(5611),r.e(1328),r.e(3022)]).then(r.bind(r,63022))).default,LinkChartLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(8896),r.e(73),r.e(3551),r.e(7795),r.e(6852),r.e(4315)]).then(r.bind(r,64315))).default,MapImageLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(2570),r.e(8140),r.e(3609),r.e(4450),r.e(739)]).then(r.bind(r,90739))).default,MapNotesLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(2570),r.e(2283),r.e(7125),r.e(7795),r.e(7668)]).then(r.bind(r,67668))).default,MediaLayer:async()=>(await Promise.all([r.e(8730),r.e(605)]).then(r.bind(r,50605))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(2570),r.e(3380),r.e(9932)]).then(r.bind(r,59932))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(4133),r.e(7390)]).then(r.bind(r,17390))).default,OrientedImageryLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(2570),r.e(2283),r.e(7125),r.e(5730)]).then(r.bind(r,3022)).then((e=>e.O))).default,PointCloudLayer:async()=>(await Promise.all([r.e(8730),r.e(2393),r.e(7981),r.e(3601),r.e(7775)]).then(r.bind(r,17775))).default,RouteLayer:async()=>(await Promise.all([r.e(8730),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(2397),r.e(2983)]).then(r.bind(r,92983))).default,SceneLayer:async()=>(await Promise.all([r.e(8730),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(5611),r.e(2606),r.e(3628),r.e(7981),r.e(6117),r.e(993),r.e(7427),r.e(287)]).then(r.bind(r,70287))).default,StreamLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(1849)]).then(r.bind(r,72669))).default,SubtypeGroupLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(2283),r.e(6068),r.e(2461)]).then(r.bind(r,2461))).default,TileLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(2570),r.e(8140),r.e(3609),r.e(1354),r.e(4450),r.e(2161)]).then(r.bind(r,62161))).default,UnknownLayer:async()=>(await r.e(2817).then(r.bind(r,82817))).default,UnsupportedLayer:async()=>(await r.e(6114).then(r.bind(r,56114))).default,VectorTileLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(1354),r.e(9861),r.e(1189),r.e(5461)]).then(r.bind(r,75461))).default,VideoLayer:async()=>(await r.e(2405).then(r.bind(r,92405))).default,ViewshedLayer:async()=>(await Promise.all([r.e(8730),r.e(5611),r.e(1328),r.e(8625)]).then(r.bind(r,18625))).default,VoxelLayer:async()=>(await Promise.all([r.e(8730),r.e(2393),r.e(7981),r.e(3471)]).then(r.bind(r,43471))).default,WFSLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(8358),r.e(782),r.e(3600),r.e(2397),r.e(7580),r.e(4922),r.e(9755),r.e(4225),r.e(6045)]).then(r.bind(r,12353))).default,WMSLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(2393),r.e(4048),r.e(1959),r.e(9323)]).then(r.bind(r,9323))).default,WMTSLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(4133),r.e(6825)]).then(r.bind(r,36825))).default,WebTileLayer:async()=>(await Promise.all([r.e(8730),r.e(6218),r.e(4133)]).then(r.bind(r,64133)).then((e=>e.a))).default}},56810:(e,a,r)=>{r.r(a),r.d(a,{L:()=>u,a:()=>h,b:()=>p,c:()=>d,d:()=>m,e:()=>v,g:()=>f,i:()=>S,l:()=>w,p:()=>L,s:()=>g});var t=r(6407),n=r(50472),i=r(89157),s=r(30861),l=r(23916),c=r(57492),y=r(43059),o=r(82454);class u{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const t=await(0,s.f)(e,a);return this._serviceMetadatas.set(e,t),t}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const t=await e.fetchData();return r.set(a,t),t}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&"object"==typeof r&&(a?a(r):r.customParameters)||null}}function d(e){const a={id:e.id,name:e.name},r=(0,i.g)(e.type);return"FeatureLayer"!==r&&(a.layerType=r),a}async function L(e,a,r){if(null==e?.layers||null==e?.tables){const t=await r.fetchServiceMetadata(a,{customParameters:f(e)?.customParameters});(e=e||{}).layers=e.layers||t?.layers?.map(d),e.tables=e.tables||t?.tables?.map(d)}return e}function f(e){if(!e)return null;const{layers:a,tables:r}=e;return a?.length?a[0]:r?.length?r[0]:null}function m(e,a){return[...e.layers||[],...e.tables||[]].filter((({layerType:e})=>e?e===a:"ArcGISFeatureLayer"===a))}function p(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function S(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function w(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function h(e,a,r){if(!e?.url)return a??{};if(a??={},!a.layers){const t=await r.fetchServiceMetadata(e.url);a.layers=t.layers?.map(d)}const{serverUrl:t,portalItem:i}=await(0,n.f)(e.url,{sceneLayerItem:e,customParameters:f(a)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==t)return a.tables=[],a;if(!a.tables&&i){const e=await i.fetchData().catch((()=>null));if(e?.tables)a.tables=e.tables.map(d);else{const n=await r.fetchServiceMetadata(t,{customParameters:f(e)?.customParameters}).catch((()=>null));a.tables=n?.tables?.map(d)}}if(a.tables)for(const e of a.tables)e.url=`${t}/${e.id}`;return a}async function g(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,o.h)(e,"Map Notes"),r=(0,o.h)(e,"Markup");return a||r?{className:"MapNotesLayer"}:(0,o.h)(e,"Route Layer")?{className:"RouteLayer"}:1===p(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const r=await I(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),n=t?.layerType;if("ArcGISTiledImageServiceLayer"===n)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===n)return{className:"ImageryLayer"};const i=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),s=i.cacheType?.toLowerCase(),l=i.capabilities?.toLowerCase().includes("tilesonly"),c=i.tileInfo?.format?.toLowerCase()??"",y=null==s&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(c);return"map"===s||y||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Knowledge Graph Layer":return{className:"KnowledgeGraphLayer"};case"Map Service":return async function(e,a){const r=await async function(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}(e,a);return r?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const r=await I(e,a,(async()=>{try{if(!e.url)return[];const{serverUrl:r}=await(0,n.f)(e.url,{sceneLayerItem:e}),t=await a.fetchServiceMetadata(r);return t?.tables??[]}catch{return[]}}));if("object"==typeof r){const t={};let n;if(null!=r.id?(t.layerId=r.id,n=`${e.url}/layers/${r.id}`):n=e.url,e.typeKeywords?.length)for(const a of Object.keys(l.s))if(e.typeKeywords.includes(a))return{className:l.s[a]};const i=await a.fetchServiceMetadata(n,{customParameters:await a.fetchCustomParameters(e,(e=>f(e)?.customParameters))});return{className:l.s[i?.layerType]||"SceneLayer",properties:t}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===r?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new t.A("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function I(e,a,r){const{url:t,type:n}=e,s="Feature Service"===n;if(!t)return{};if(/\/\d+$/.test(t)){if(s){const r=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,(e=>f(e)?.customParameters))});return{id:r.id,className:(0,i.g)(r.type),sourceJSON:r}}return{}}await e.load();let l=await a.fetchItemData(e);if(s){const e=await L(l,t,a),r=b(e);if("object"==typeof r){const a=function(e,a){return null==a?null:[...e.layers||[],...e.tables||[]].find((e=>e.id===a))}(e,r.id);r.className=w(a?.layerType)}return r}if("Scene Service"===n&&(l=await h(e,l,a)),p(l)>0)return b(l);const c=await a.fetchServiceMetadata(t);return r&&(c.tables=await r()),b(c)}function b(e){return 1===p(e)&&{id:f(e)?.id}}const v=Object.freeze(Object.defineProperty({__proto__:null,fromItem:async function(e){let{portalItem:a}=e;!a||a instanceof y.default||(a=new y.default(a));const r=await async function(e){await e.load();const a=new u;return async function(e){const a=e.className,r=c.l[a];return{constructor:await r(),properties:e.properties}}(await g(e,a))}(a);return new(0,r.constructor)({portalItem:a,...r.properties})},selectLayerClassPath:g},Symbol.toStringTag,{value:"Module"}))},30861:(e,a,r)=>{r.d(a,{f:()=>n});var t=r(64604);async function n(e,a){const{data:r}=await(0,t.A)(e,{responseType:"json",query:{f:"json",...a?.customParameters,token:a?.apiKey}});return r}},58396:(e,a,r)=>{r.d(a,{l:()=>s});var t=r(73067),n=r(80959),i=r(69421);async function s(e,a,r){const s=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const l=await(0,t.r)(s.populateFromStyle());if((0,n.Te)(r),!1===l.ok){const r=l.error;a?.messages&&a.messages.push(new i.W("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:a})),e.clear("renderer",a?.origin)}}}}}]);
"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[2884],{41003:(e,t,r)=>{r.d(t,{Q:()=>o});var s=r(91047),n=r(44945);class o{constructor(e=e=>e.values().next().value){this._peeker=e,this._observable=new n.S,this._items=new Set}get length(){return(0,s.t)(this._observable),this._items.size}clear(){0!==this.length&&(this._items.clear(),this._observable.notify())}last(){if(0===this.length)return;let e;for(e of this._items);return e}peek(){if(0!==this.length)return this._peeker(this._items)}push(e){this.contains(e)||(this._items.add(e),this._observable.notify())}contains(e){return(0,s.t)(this._observable),this._items.has(e)}pop(){if(0===this.length)return;const e=this.peek();return this._items.delete(e),this._observable.notify(),e}popLast(){if(0===this.length)return;const e=this.last();return this._items.delete(e),this._observable.notify(),e}remove(e){this.contains(e)&&(this._items.delete(e),this._observable.notify())}filter(e){const t=this.length;return this._items.forEach((t=>{e(t)||this._items.delete(t)})),t!==this._items.size&&this._observable.notify(),this}*[Symbol.iterator](){(0,s.t)(this._observable),yield*this._items}}},82884:(e,t,r)=>{r.r(t),r.d(t,{registerFunctions:()=>u});var s=r(81743),n=r(26589),o=r(54642),i=r(2160),a=r(39236);function l(e){return e instanceof i.A}function c(e,t,r,c){return c(e,t,(async(c,u,h)=>{if(h.length<2)throw new s.n(e,s.E.WrongNumberOfParameters,t);if(null===(h=(0,s.F)(h))[0]&&null===h[1])return!1;if((0,s.g)(h[0])){if(h[1]instanceof i.A)return new o.S({parentfeatureset:h[0],relation:r,relationGeom:h[1]});if(null===h[1])return new o.E({parentfeatureset:h[0]});throw new s.n(e,s.E.InvalidParameter,t)}if(l(h[0])){if(l(h[1])){switch(r){case"esriSpatialRelEnvelopeIntersects":return(0,a.HY)((0,n.s)(h[0]),(0,n.s)(h[1]));case"esriSpatialRelIntersects":return(0,a.HY)(h[0],h[1]);case"esriSpatialRelContains":return(0,a.gR)(h[0],h[1]);case"esriSpatialRelOverlaps":return(0,a.$f)(h[0],h[1]);case"esriSpatialRelWithin":return(0,a.ux)(h[0],h[1]);case"esriSpatialRelTouches":return(0,a.yI)(h[0],h[1]);case"esriSpatialRelCrosses":return(0,a.NN)(h[0],h[1])}throw new s.n(e,s.E.InvalidParameter,t)}if((0,s.g)(h[1]))return new o.S({parentfeatureset:h[1],relation:r,relationGeom:h[0]});if(null===h[1])return!1;throw new s.n(e,s.E.InvalidParameter,t)}if(null===h[0]){if((0,s.g)(h[1]))return new o.E({parentfeatureset:h[1]});if(h[1]instanceof i.A||null===h[1])return!1}throw new s.n(e,s.E.InvalidParameter,t)}))}function u(e){"async"===e.mode&&(e.functions.intersects=function(t,r){return c(t,r,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,r){return c(t,r,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:2,max:2}),e.functions.contains=function(t,r){return c(t,r,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(t,r){return c(t,r,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(t,r){return c(t,r,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(t,r){return c(t,r,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(t,r){return c(t,r,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(t,r){return e.standardFunctionAsync(t,r,(async(e,n,c)=>{if(c=(0,s.F)(c),(0,s.p)(c,3,3,t,r),l(c[0])&&l(c[1]))return(0,a.c7)(c[0],c[1],(0,s.x)(c[2]));if(c[0]instanceof i.A&&null===c[1])return!1;if(c[1]instanceof i.A&&null===c[0])return!1;if((0,s.g)(c[0])&&null===c[1])return new o.E({parentfeatureset:c[0]});if((0,s.g)(c[1])&&null===c[0])return new o.E({parentfeatureset:c[1]});if((0,s.g)(c[0])&&c[1]instanceof i.A)return c[0].relate(c[1],(0,s.x)(c[2]));if((0,s.g)(c[1])&&c[0]instanceof i.A)return c[1].relate(c[0],(0,s.x)(c[2]));if(null===c[0]&&null===c[1])return!1;throw new s.n(t,s.E.InvalidParameter,r)}))})}r(90740),r(32773),r(29512),r(99063),r(6407),r(20266),r(99924),r(32816),r(41390),r(69421),r(40499),r(93181),r(13671),r(91047),r(36544),r(29298),r(58498),r(45371),r(80959),r(64752),r(48844),r(49877),r(56273),r(7969),r(69763),r(93804),r(18683),r(64604),r(29208),r(71689),r(44600),r(44864),r(88663),r(95637),r(59930),r(45862),r(72762),r(71613),r(17872),r(54483),r(13317),r(59192),r(36533),r(84200),r(97827),r(91695),r(18169),r(20762),r(48402),r(16699),r(67504),r(77037),r(73600),r(94345),r(92517),r(81284),r(78860),r(52731),r(26805),r(13983),r(58194),r(4734),r(50214),r(133),r(22976),r(90791),r(83637),r(47239),r(79875),r(30011),r(55270),r(95779),r(13262),r(346),r(93049),r(82408),r(73509),r(28276),r(69277),r(70580),r(75191),r(24319),r(62092),r(38896),r(11494),r(6801),r(41003),r(44945),r(9380)},6801:(e,t,r)=>{r.d(t,{A:()=>c,r:()=>l});var s=r(13671),n=(r(32773),r(80959)),o=r(41003),i=r(9380);r(6407),r(20266),r(90740),r(91047),r(93181),r(44945),r(58498),r(29512),r(99063),r(99924),r(32816),r(41390),r(69421),r(40499),r(36544),r(29298),r(45371);const a=new FinalizationRegistry((e=>{e.close()}));function l(e,t){a.register(e,t,t)}class c{constructor(){this._inUseClients=new Array,this._clients=new Array,this._clientPromises=new Array,this._ongoingJobsQueue=new o.Q}destroy(){this.close()}get closed(){return!this._clients?.length}open(e,t){return new Promise(((r,s)=>{let o=!0;const a=e=>{(0,n.Te)(t.signal),o&&(o=!1,e())};this._clients.length=e.length,this._clientPromises.length=e.length,this._inUseClients.length=e.length;for(let o=0;o<e.length;++o){const l=e[o];(0,n.$X)(l)?this._clientPromises[o]=l.then((e=>(this._clients[o]=new i.default(e,t,this._ongoingJobsQueue),a(r),this._clients[o])),(()=>(a(s),null))):(this._clients[o]=new i.default(l,t,this._ongoingJobsQueue),this._clientPromises[o]=Promise.resolve(this._clients[o]),a(r))}}))}broadcast(e,t,r){const s=new Array(this._clientPromises.length);for(let n=0;n<this._clientPromises.length;++n){const o=this._clientPromises[n];s[n]=o.then((s=>s?.invoke(e,t,r)))}return s}close(){let e;for(;e=this._ongoingJobsQueue.pop();)e.resolver.reject((0,n.NK)(`Worker closing, aborting job calling '${e.methodName}'`));for(const e of this._clientPromises)e.then((e=>e?.close()));this._clients.length=0,this._clientPromises.length=0,this._inUseClients.length=0,a.unregister(this)}invoke(e,t,r){return this.apply(e,[t],r)}apply(e,t,r){const s=(0,n.Tw)();this._ongoingJobsQueue.push({methodName:e,data:t,invokeOptions:r,resolver:s});for(let e=0;e<this._clientPromises.length;e++){const t=this._clients[e];t?t.jobAdded():this._clientPromises[e].then((e=>e?.jobAdded()))}return s.promise}createInvokeProxy(e){return(0,i.c)(this,e)}on(e,t){return Promise.all(this._clientPromises).then((()=>(0,s.h)(this._clients.map((r=>r.on(e,t))))))}openPorts(){return new Promise((e=>{const t=new Array(this._clientPromises.length);let r=t.length;for(let s=0;s<this._clientPromises.length;++s)this._clientPromises[s].then((n=>{n&&(t[s]=n.openPort()),0==--r&&e(t)}))}))}get test(){}}},11494:(e,t,r)=>{r.d(t,{ho:()=>x});var s=r(6407),n=r(32773),o=r(80959),i=r(6801),a=r(9380),l=r(20266),c=r(57732),u=r(64604),h=r(99063),d=r(90740),f=(r(55270),r(29512)),g=r(18683),p=r(45371),m=r(59192);r(13671),r(41003),r(91047),r(93181),r(44945),r(58498),r(99924),r(32816),r(41390),r(69421),r(40499),r(36544),r(29298),r(50214),r(93804),r(54483),r(95779),r(13262),r(346);const b={async request(e,t){const r=e.options,s=r.responseType;r.signal=t?.signal,r.responseType="native"===s||"native-request-init"===s?"native-request-init":s&&["blob","json","text"].includes(s)&&(0,h.sC)(e.url)?.after?s:"array-buffer";const n=await(0,u.A)(e.url,r),o={data:n.data,httpStatus:n.httpStatus,ssl:n.ssl};switch(n.requestOptions?.responseType){case"native-request-init":return delete o.data.signal,o;case"blob":o.data=await o.data.arrayBuffer();break;case"json":o.data=(new TextEncoder).encode(JSON.stringify(o.data)).buffer;break;case"text":o.data=(new TextEncoder).encode(o.data).buffer}return{result:o,transferList:[o.data]}}};let w=null;w=(0,h.s2)((0,g.g)("esri/core/workers/init.js"));const y={};y.baseUrl=(0,h.s2)((0,g.g)("dojo/")),y.packages=[{name:"esri",location:"../esri"}];class v{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((t=>{this[t]=(...r)=>e[t](...r)}))}}class k{constructor(){this._dispatcher=new v,this._workerPostMessage({type:a.M.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){(0,p.n)((()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,r){this._dispatcher.addEventListener(e,t,r)}removeEventListener(e,t,r){this._dispatcher.removeEventListener(e,t,r)}_workerPostMessage(e){(0,p.n)((()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))}))}async _workerMessageHandler(e){const t=(0,a.r)(e);if(t&&t.type===a.M.OPEN){const{modulePath:e,jobId:r}=t;let s=await a.default.loadWorker(e);s||(s=await import(e));const n=a.default.connect(s);this._workerPostMessage({type:a.M.OPENED,jobId:r,data:n})}}}const _=()=>l.L.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:E}=a.M;let P,A;const S="Failed to create Worker. Fallback to execute module in main thread";async function I(e){return new Promise((t=>{function r(n){const o=(0,a.r)(n);o&&o.type===E&&(e.removeEventListener("message",r),e.removeEventListener("error",s),t(e))}function s(t){t.preventDefault(),e.removeEventListener("message",r),e.removeEventListener("error",s),_().warn("Failed to create Worker. Fallback to execute module in main thread",t),(e=new k).addEventListener("message",r),e.addEventListener("error",s)}e.addEventListener("message",r),e.addEventListener("error",s)}))}let R=0;const{ABORT:C,INVOKE:N,OPEN:M,OPENED:O,RESPONSE:L}=a.M;class j{static async create(e){const t=await async function(){if(!(0,n.h)("esri-workers"))return I(new k);if(!P&&!A)try{const e='let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;let s=null;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})})).finally((()=>{t&&t.removeEventListener("abort",s)}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.split("{CONFIGURATION}").join(function(){let e;if(null!=d.A.default){const t={...d.A};delete t.default,e=JSON.parse(JSON.stringify(t))}else e=JSON.parse(JSON.stringify(d.A));e.assetsPath=(0,h.s2)(e.assetsPath),e.defaultAssetsPath=e.defaultAssetsPath?(0,h.s2)(e.defaultAssetsPath):void 0,e.request.interceptors=[],e.log.interceptors=[],e.locale=(0,m.g)(),e.has={"esri-csp-restrictions":(0,n.h)("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":(0,n.h)("esri-2d-update-debug"),"esri-2d-log-updating":(0,n.h)("esri-2d-log-updating"),"featurelayer-pbf":(0,n.h)("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":(0,n.h)("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":(0,n.h)("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":(0,n.h)("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":(0,n.h)("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":(0,n.h)("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":(0,n.h)("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":(0,n.h)("featurelayer-snapshot-enabled"),"esri-atomics":(0,n.h)("esri-atomics"),"esri-shared-array-buffer":(0,n.h)("esri-shared-array-buffer"),"esri-tiles-debug":(0,n.h)("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":(0,n.h)("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":(0,n.h)("feature-polyline-generalization-factor"),"host-webworker":1},e.workers.loaderUrl?e.workers.loaderUrl=(0,h.s2)(e.workers.loaderUrl):w&&(e.workers.loaderUrl=w),e.workers.workerPath?e.workers.workerPath=(0,h.s2)(e.workers.workerPath):e.workers.workerPath="esri/core/workers/RemoteClient",e.workers.useDynamicImport=!1;const t=d.A.workers.loaderConfig,r=function(e){const t={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages?.slice()||[],paths:{...y.paths,...e.paths}};return e.hasOwnProperty("async")||(t.async=!0),e.hasOwnProperty("isDebug")||(t.isDebug=!1),e.baseUrl||(t.baseUrl=y.baseUrl),y.packages?.forEach((e=>{!function(e,t){for(const r of e)if(r.name===t.name)return;e.push(t)}(t.packages??[],e)})),t}({baseUrl:t?.baseUrl,locale:(0,m.g)(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...t?.has},map:{...t?.map},paths:{...t?.paths},packages:t?.packages||[]}),s={buildDate:f.$y,fullVersion:f.ol,revision:f.QL};return JSON.stringify({esriConfig:e,loaderConfig:r,kernelInfo:s})}());P=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){A=e||{}}let e;if(P)try{e=new Worker(P,{name:"esri-worker-"+R++})}catch(t){_().warn(S,A),e=new k}else _().warn(S,A),e=new k;return I(e)}();return new j(t,e)}constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),l.L.getLogger("esri.core.workers.WorkerOwner").error(e)}))}terminate(){this.worker.terminate()}async open(e,t={}){const{signal:r}=t,s=(0,a.n)();return new Promise(((t,n)=>{const i={resolve:t,reject:n,abortHandle:(0,o.NY)(r,(()=>{this._outJobs.delete(s),this._post({type:C,jobId:s})}))};this._outJobs.set(s,i),this._post({type:M,jobId:s,modulePath:e})}))}_onMessage(e){const t=(0,a.r)(e);if(t)switch(t.type){case O:this._onOpenedMessage(t);break;case L:this._onResponseMessage(t);break;case C:this._onAbortMessage(t);break;case N:this._onInvokeMessage(t)}}_onAbortMessage(e){const t=this._inJobs,r=e.jobId,s=t.get(r);s&&(s.controller&&s.controller.abort(),t.delete(r))}_onInvokeMessage(e){const{methodName:t,jobId:r,data:s,abortable:n}=e,i=n?new AbortController:null,l=this._inJobs,c=b[t];let u;try{if("function"!=typeof c)throw new TypeError(`${t} is not a function`);u=c.call(null,s,{signal:i?i.signal:null})}catch(e){return void this._post({type:L,jobId:r,error:(0,a.t)(e)})}(0,o.$X)(u)?(l.set(r,{controller:i,promise:u}),u.then((e=>{l.has(r)&&(l.delete(r),this._post({type:L,jobId:r},e))}),(e=>{l.has(r)&&(l.delete(r),e||(e={message:"Error encountered at method"+t}),(0,o.zf)(e)||this._post({type:L,jobId:r,error:(0,a.t)(e||{message:`Error encountered at method ${t}`})}))}))):this._post({type:L,jobId:r},u)}_onOpenedMessage(e){const{jobId:t,data:r}=e,s=this._outJobs.get(t);s&&(this._outJobs.delete(t),(0,c.r)(s.abortHandle),s.resolve(r))}_onResponseMessage(e){const{jobId:t,error:r,data:n}=e,o=this._outJobs.get(t);o&&(this._outJobs.delete(t),(0,c.r)(o.abortHandle),r?o.reject(s.A.fromJSON(JSON.parse(r))):o.resolve(n))}_post(e,t,r){return(0,a.p)(this.worker,e,t,r)}}const H=(0,n.h)("host-browser")?Math.min(navigator.hardwareConcurrency-1,(0,n.h)("workers-pool-size")??8):0;let J=(0,n.h)("esri-mobile")?Math.min(H,3):H;J||(J=(0,n.h)("safari")&&(0,n.h)("mac")?7:2);let W=0;const F=[];async function U(e,t){const r=new i.A,{registryTarget:s,...n}=t;return await r.open(e,n),s&&(0,i.r)(s,r),r}async function x(e,t={}){if("string"!=typeof e)throw new s.A("workers:undefined-module","modulePath is missing");let r=t.strategy||"distributed";if((0,n.h)("host-webworker")&&!(0,n.h)("esri-workers")&&(r="local"),"local"===r){let r=await a.default.loadWorker(e);r||(r=await import(e)),(0,o.Te)(t.signal);const s=t.client||r;return U([a.default.connect(r,t.schedule)],{...t,client:s})}if(await async function(){if(T)return T;D=new AbortController;const e=[];for(let t=0;t<J;t++){const r=j.create(t).then((e=>(F[t]=e,e)));e.push(r)}return T=Promise.all(e),T}(),(0,o.Te)(t.signal),"dedicated"===r){const r=W++%J;return U([await F[r].open(e,t)],t)}if(t.maxNumWorkers&&t.maxNumWorkers>0){const r=Math.min(t.maxNumWorkers,J);if(r<J){const s=new Array(r);for(let n=0;n<r;++n){const r=W++%J;s[n]=F[r].open(e,t)}return U(s,t)}}return U(F.map((r=>r.open(e,t))),t)}let D,T=null}}]);
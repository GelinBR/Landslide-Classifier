/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import e from"../Error.js";import{h as r}from"../lang.js";import{onAbortOrThrow as t,isPromiseLike as s,isAbortError as o,throwIfAborted as n}from"../promiseUtils.js";import a,{r as i}from"./Connection.js";import l,{M as c,r as u,t as d,p as f,n as m}from"./RemoteClient.js";import{L as p}from"../../chunks/Logger.js";import{r as h}from"../../chunks/maybe.js";import g from"../../request.js";import{getInterceptor as k,makeAbsolute as b}from"../urlUtils.js";import w from"../../config.js";import"../../intl.js";import{buildDate as y,fullVersion as v,revision as j}from"../../kernel.js";import{g as E}from"../../chunks/assets.js";import{n as _}from"../scheduling.js";import{g as P}from"../../chunks/locale.js";import"../../chunks/handleUtils.js";import"../../chunks/Queue.js";import"../../chunks/tracking.js";import"../../chunks/utils.js";import"../../chunks/SimpleObservable.js";import"../../chunks/ObservableBase.js";import"../JSONSupport.js";import"../../chunks/tslib.es6.js";import"../Accessor.js";import"../Handles.js";import"../accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/ensureType.js";import"../accessorSupport/decorators/property.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";const O={async request(e,r){const t=e.options,s=t.responseType;t.signal=r?.signal,t.responseType="native"===s||"native-request-init"===s?"native-request-init":s&&["blob","json","text"].includes(s)&&k(e.url)?.after?s:"array-buffer";const o=await g(e.url,t),n={data:o.data,httpStatus:o.httpStatus,ssl:o.ssl};switch(o.requestOptions?.responseType){case"native-request-init":return delete n.data.signal,n;case"blob":n.data=await n.data.arrayBuffer();break;case"json":n.data=(new TextEncoder).encode(JSON.stringify(n.data)).buffer;break;case"text":n.data=(new TextEncoder).encode(n.data).buffer}return{result:n,transferList:[n.data]}}};let M=null;M=b(E("esri/core/workers/init.js"));const S={};S.baseUrl=b(E("dojo/")),S.packages=[{name:"esri",location:"../esri"}];class I{constructor(){const e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach((r=>{this[r]=(...t)=>e[r](...t)}))}}class N{constructor(){this._dispatcher=new I,this._workerPostMessage({type:c.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){_((()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))}))}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,r,t){this._dispatcher.addEventListener(e,r,t)}removeEventListener(e,r,t){this._dispatcher.removeEventListener(e,r,t)}_workerPostMessage(e){_((()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))}))}async _workerMessageHandler(e){const r=u(e);if(r&&r.type===c.OPEN){const{modulePath:e,jobId:t}=r;let s=await l.loadWorker(e);s||(s=await import(/* @vite-ignore */ /* webpackIgnore: true */e));const o=l.connect(s);this._workerPostMessage({type:c.OPENED,jobId:t,data:o})}}}const L=()=>p.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:C}=c;let A,H;const R="Failed to create Worker. Fallback to execute module in main thread";async function J(e){return new Promise((r=>{function t(o){const n=u(o);n&&n.type===C&&(e.removeEventListener("message",t),e.removeEventListener("error",s),r(e))}function s(r){r.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",s),L().warn("Failed to create Worker. Fallback to execute module in main thread",r),(e=new N).addEventListener("message",t),e.addEventListener("error",s)}e.addEventListener("message",t),e.addEventListener("error",s)}))}let U=0;const{ABORT:W,INVOKE:D,OPEN:q,OPENED:x,RESPONSE:T}=c;class F{static async create(e){const t=await async function(){if(!r("esri-workers"))return J(new N);if(!A&&!H)try{const e='let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;let s=null;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})})).finally((()=>{t&&t.removeEventListener("abort",s)}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.split("{CONFIGURATION}").join(function(){let e;if(null!=w.default){const r={...w};delete r.default,e=JSON.parse(JSON.stringify(r))}else e=JSON.parse(JSON.stringify(w));e.assetsPath=b(e.assetsPath),e.defaultAssetsPath=e.defaultAssetsPath?b(e.defaultAssetsPath):void 0,e.request.interceptors=[],e.log.interceptors=[],e.locale=P(),e.has={"esri-csp-restrictions":r("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":r("esri-2d-update-debug"),"esri-2d-log-updating":r("esri-2d-log-updating"),"featurelayer-pbf":r("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":r("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":r("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":r("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":r("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":r("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":r("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":r("featurelayer-snapshot-enabled"),"esri-atomics":r("esri-atomics"),"esri-shared-array-buffer":r("esri-shared-array-buffer"),"esri-tiles-debug":r("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":r("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":r("feature-polyline-generalization-factor"),"host-webworker":1},e.workers.loaderUrl?e.workers.loaderUrl=b(e.workers.loaderUrl):M&&(e.workers.loaderUrl=M),e.workers.workerPath?e.workers.workerPath=b(e.workers.workerPath):e.workers.workerPath="esri/core/workers/RemoteClient",e.workers.useDynamicImport=!1;const t=w.workers.loaderConfig,s=function(e){const r={async:e.async,isDebug:e.isDebug,locale:e.locale,baseUrl:e.baseUrl,has:{...e.has},map:{...e.map},packages:e.packages?.slice()||[],paths:{...S.paths,...e.paths}};return e.hasOwnProperty("async")||(r.async=!0),e.hasOwnProperty("isDebug")||(r.isDebug=!1),e.baseUrl||(r.baseUrl=S.baseUrl),S.packages?.forEach((e=>{!function(e,r){for(const t of e)if(t.name===r.name)return;e.push(r)}(r.packages??[],e)})),r}({baseUrl:t?.baseUrl,locale:P(),has:{"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1,...t?.has},map:{...t?.map},paths:{...t?.paths},packages:t?.packages||[]}),o={buildDate:y,fullVersion:v,revision:j};return JSON.stringify({esriConfig:e,loaderConfig:s,kernelInfo:o})}());A=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){H=e||{}}let e;if(A)try{e=new Worker(A,{name:"esri-worker-"+U++})}catch(r){L().warn(R,H),e=new N}else L().warn(R,H),e=new N;return J(e)}();return new F(t,e)}constructor(e,r){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=r,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(e=>{e.preventDefault(),p.getLogger("esri.core.workers.WorkerOwner").error(e)}))}terminate(){this.worker.terminate()}async open(e,r={}){const{signal:s}=r,o=m();return new Promise(((r,n)=>{const a={resolve:r,reject:n,abortHandle:t(s,(()=>{this._outJobs.delete(o),this._post({type:W,jobId:o})}))};this._outJobs.set(o,a),this._post({type:q,jobId:o,modulePath:e})}))}_onMessage(e){const r=u(e);if(r)switch(r.type){case x:this._onOpenedMessage(r);break;case T:this._onResponseMessage(r);break;case W:this._onAbortMessage(r);break;case D:this._onInvokeMessage(r)}}_onAbortMessage(e){const r=this._inJobs,t=e.jobId,s=r.get(t);s&&(s.controller&&s.controller.abort(),r.delete(t))}_onInvokeMessage(e){const{methodName:r,jobId:t,data:n,abortable:a}=e,i=a?new AbortController:null,l=this._inJobs,c=O[r];let u;try{if("function"!=typeof c)throw new TypeError(`${r} is not a function`);u=c.call(null,n,{signal:i?i.signal:null})}catch(e){return void this._post({type:T,jobId:t,error:d(e)})}s(u)?(l.set(t,{controller:i,promise:u}),u.then((e=>{l.has(t)&&(l.delete(t),this._post({type:T,jobId:t},e))}),(e=>{l.has(t)&&(l.delete(t),e||(e={message:"Error encountered at method"+r}),o(e)||this._post({type:T,jobId:t,error:d(e||{message:`Error encountered at method ${r}`})}))}))):this._post({type:T,jobId:t},u)}_onOpenedMessage(e){const{jobId:r,data:t}=e,s=this._outJobs.get(r);s&&(this._outJobs.delete(r),h(s.abortHandle),s.resolve(t))}_onResponseMessage(r){const{jobId:t,error:s,data:o}=r,n=this._outJobs.get(t);n&&(this._outJobs.delete(t),h(n.abortHandle),s?n.reject(e.fromJSON(JSON.parse(s))):n.resolve(o))}_post(e,r,t){return f(this.worker,e,r,t)}}const K=r("host-browser")?Math.min(navigator.hardwareConcurrency-1,r("workers-pool-size")??8):0;let V=r("esri-mobile")?Math.min(K,3):K;V||(V=r("safari")&&r("mac")?7:2);let z=0;const B=[];function $(){re()}function G(e,r){return Q(e,{client:r})}async function Q(e,r){const t=new a,{registryTarget:s,...o}=r;return await t.open(e,o),s&&i(s,t),t}async function X(t,s={}){if("string"!=typeof t)throw new e("workers:undefined-module","modulePath is missing");let o=s.strategy||"distributed";if(r("host-webworker")&&!r("esri-workers")&&(o="local"),"local"===o){let e=await l.loadWorker(t);e||(e=await import(/* @vite-ignore */ /* webpackIgnore: true */t)),n(s.signal);const r=s.client||e;return Q([l.connect(e,s.schedule)],{...s,client:r})}if(await re(),n(s.signal),"dedicated"===o){const e=z++%V;return Q([await B[e].open(t,s)],s)}if(s.maxNumWorkers&&s.maxNumWorkers>0){const e=Math.min(s.maxNumWorkers,V);if(e<V){const r=new Array(e);for(let o=0;o<e;++o){const e=z++%V;r[o]=B[e].open(t,s)}return Q(r,s)}}return Q(B.map((e=>e.open(t,s))),s)}function Y(){ee&&(Z.abort(),ee=null);for(let e=0;e<B.length;e++)B[e]&&B[e].terminate();B.length=0}let Z,ee=null;async function re(){if(ee)return ee;Z=new AbortController;const e=[];for(let r=0;r<V;r++){const t=F.create(r).then((e=>(B[r]=e,e)));e.push(t)}return ee=Promise.all(e),ee}export{a as Connection,l as RemoteClient,$ as initialize,X as open,G as openWithPorts,Y as terminate};

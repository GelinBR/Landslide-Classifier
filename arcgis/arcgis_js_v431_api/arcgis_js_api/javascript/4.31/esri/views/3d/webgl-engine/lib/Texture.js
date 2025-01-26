// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/Error ../../../../core/Evented ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/typedArrayUtil ../../../../core/urlUtils ../../../../support/requestImageUtils ../../../../support/requestUtils ./basicInterfaces ./BasisUtil ./ContentObject ./ContentObjectType ./DDSUtil ./textureUtils ./Util ../../../webgl/enums ../../../webgl/Texture ../../../webgl/TextureDescriptor".split(" "),function(q,L,x,y,r,h,e,m,z,A,g,k,B,C,D,t,E,f,n,
F){function u(a){return a instanceof HTMLVideoElement?{width:a.videoWidth,height:a.videoHeight}:a}class G extends B.ContentObject{get parameters(){return this._parameters}constructor(a,b){super();this._data=a;this.type=C.ContentObjectType.Texture;this._loadingController=this._loadingPromise=this._glTexture=null;this.events=new y;this._parameters={...H,...b};this._startPreload(a)}dispose(){this.unload();this._data=this.frameUpdate=void 0}_startPreload(a){null!=a&&(a instanceof HTMLVideoElement?(this.frameUpdate=
b=>this._frameUpdate(a,b),this._startPreloadVideoElement(a)):a instanceof HTMLImageElement&&this._startPreloadImageElement(a))}_startPreloadVideoElement(a){if(!(m.isBlobProtocol(a.src)||"auto"===a.preload&&a.crossOrigin)){a.preload="auto";a.crossOrigin="anonymous";const b=!a.paused;a.src=a.src;if(b&&a.autoplay){const c=()=>{a.removeEventListener("canplay",c);a.play()};a.addEventListener("canplay",c)}}}_startPreloadImageElement(a){m.isDataProtocol(a.src)||m.isBlobProtocol(a.src)||a.crossOrigin||(a.crossOrigin=
"anonymous",a.src=a.src)}_createDescriptor(a){const b=new F.TextureDescriptor;b.wrapMode=this._parameters.wrap??f.TextureWrapMode.REPEAT;b.flipped=!this._parameters.noUnpackFlip;b.samplingMode=this._parameters.mipmap?f.TextureSamplingMode.LINEAR_MIPMAP_LINEAR:f.TextureSamplingMode.LINEAR;b.hasMipmap=!!this._parameters.mipmap;b.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha;b.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?a.parameters.maxMaxAnisotropy:1);return b}get glTexture(){return this._glTexture}get memoryEstimate(){var a;
if(!(a=this._glTexture?.usedMemory)){a=this._data;var b=this._parameters;if(null==a)a=0;else if(e.isArrayBuffer(a)||e.isUint8Array(a))a=b.encoding===g.TextureEncodingMimeType.KTX2_ENCODING?k.estimateMemoryKTX2(a,!!b.mipmap):b.encoding===g.TextureEncodingMimeType.BASIS_ENCODING?k.estimateMemoryBasis(a,!!b.mipmap):a.byteLength;else{var {width:c,height:d}=a instanceof Image||a instanceof ImageData||a instanceof HTMLCanvasElement||a instanceof HTMLVideoElement?u(a):b;a=(b.mipmap?4/3:1)*c*d*(b.components||
4)||0}}return a}load(a){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const b=this._data;if(null==b)return this._glTexture=new n.Texture(a,this._createDescriptor(a),null);this._parameters.reloadable||(this._data=void 0);return"string"===typeof b?this._loadFromURL(a,b):b instanceof Image?this._loadFromImageElement(a,b):b instanceof HTMLVideoElement?this._loadFromVideoElement(a,b):b instanceof ImageData||b instanceof HTMLCanvasElement?this._loadFromImage(a,
b):e.isUint8Array(b)&&this._parameters.encoding===g.TextureEncodingMimeType.DDS_ENCODING?this._loadFromDDSData(a,b):e.isArrayBuffer(b)&&this._parameters.encoding===g.TextureEncodingMimeType.DDS_ENCODING?this._loadFromDDSData(a,new Uint8Array(b)):(e.isArrayBuffer(b)||e.isUint8Array(b))&&this._parameters.encoding===g.TextureEncodingMimeType.KTX2_ENCODING?this._loadFromKTX2(a,b):(e.isArrayBuffer(b)||e.isUint8Array(b))&&this._parameters.encoding===g.TextureEncodingMimeType.BASIS_ENCODING?this._loadFromBasis(a,
b):e.isUint8Array(b)?this._loadFromPixelData(a,b):e.isArrayBuffer(b)?this._loadFromPixelData(a,new Uint8Array(b)):null}_frameUpdate(a,b){if(null==this._glTexture||a.readyState<l.HAVE_CURRENT_DATA||b===a.currentTime)return b;this._glTexture.setData(a);this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap();this._parameters.updateCallback&&this._parameters.updateCallback();return a.currentTime}_loadFromDDSData(a,b){return this._glTexture=D.createDDSTexture(a,this._createDescriptor(a),
b)}_loadFromKTX2(a,b){return this._loadAsync(()=>k.createTextureKTX2(a,this._createDescriptor(a),b).then(c=>this._glTexture=c))}_loadFromBasis(a,b){return this._loadAsync(()=>k.createTextureBasis(a,this._createDescriptor(a),b).then(c=>this._glTexture=c))}_loadFromPixelData(a,b){E.assert(0<this._parameters.width&&0<this._parameters.height);const c=this._createDescriptor(a);c.pixelFormat=1===this._parameters.components?f.PixelFormat.LUMINANCE:3===this._parameters.components?f.PixelFormat.RGB:f.PixelFormat.RGBA;
c.width=this._parameters.width??0;c.height=this._parameters.height??0;return this._glTexture=new n.Texture(a,c,b)}_loadFromURL(a,b){return this._loadAsync(async c=>{const d=await z.requestImage(b,{signal:c});h.throwIfAborted(c);return this._loadFromImage(a,d)})}_loadFromImageElement(a,b){return b.complete?this._loadFromImage(a,b):this._loadAsync(async c=>{const d=await A.loadImageAsync(b,b.src,!1,c);h.throwIfAborted(c);return this._loadFromImage(a,d)})}_loadFromVideoElement(a,b){return b.readyState>=
l.HAVE_CURRENT_DATA?this._loadFromImage(a,b):this._loadFromVideoElementAsync(a,b)}_loadFromVideoElementAsync(a,b){return this._loadAsync(c=>new Promise((d,I)=>{const w=()=>{b.removeEventListener("loadeddata",v);b.removeEventListener("error",p);r.removeMaybe(J)},v=()=>{b.readyState>=l.HAVE_CURRENT_DATA&&(w(),d(this._loadFromImage(a,b)))},p=K=>{w();I(K||new x("Failed to load video"))};b.addEventListener("loadeddata",v);b.addEventListener("error",p);const J=h.onAbort(c,()=>p(h.createAbortError()))}))}_loadFromImage(a,
b){if(!(b instanceof HTMLVideoElement)){var {maxTextureSize:c}=a.parameters;b=this._parameters.downsampleUncompressed?t.downsampleImage(b,c):t.ensureImageMaxSize(b,c)}c=u(b);this._parameters.width=c.width;this._parameters.height=c.height;const d=this._createDescriptor(a);d.pixelFormat=3===this._parameters.components?f.PixelFormat.RGB:f.PixelFormat.RGBA;d.width=c.width;d.height=c.height;return this._glTexture=new n.Texture(a,d,b)}_loadAsync(a){const b=new AbortController;this._loadingController=b;
const c=a(b.signal);this._loadingPromise=c;a=()=>{this._loadingController===b&&(this._loadingController=null);this._loadingPromise===c&&(this._loadingPromise=null)};c.then(a,a);return c}unload(){this._glTexture=r.disposeMaybe(this._glTexture);if(null!=this._loadingController){const a=this._loadingController;this._loadingPromise=this._loadingController=null;a.abort()}this.events.emit("unloaded")}}var l;(function(a){a[a.HAVE_NOTHING=0]="HAVE_NOTHING";a[a.HAVE_METADATA=1]="HAVE_METADATA";a[a.HAVE_CURRENT_DATA=
2]="HAVE_CURRENT_DATA";a[a.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA";a[a.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(l||={});const H={wrap:{s:f.TextureWrapMode.REPEAT,t:f.TextureWrapMode.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};q.Texture=G;Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});
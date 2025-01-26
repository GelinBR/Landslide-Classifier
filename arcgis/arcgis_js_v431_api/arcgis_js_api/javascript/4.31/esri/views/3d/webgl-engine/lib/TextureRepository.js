// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Evented ../../../../core/Logger ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ./basicInterfaces ./ContentObjectType ./ITexture ./TextureTechnique ./TextureTechniqueConfiguration ./Util ../../../support/Scheduler".split(" "),function(d,f,r,t,l,m,h,C,D,u,n,v,p,w,x,y,z){d.TextureRepository=
class extends r{constructor(b,a,e){super({});this._stage=b;this._techniques=a;this._rctx=e;this._textures=new Map;this._loadingCount=0;this._frameUpdates=new Map;this.events=new t;this._frameTask=b.view.resourceController.scheduler.registerTask(z.TaskPriority.TEXTURE_UNLOAD)}normalizeCtorArgs(){return{}}destroy(){this._frameTask.remove();this._stage.forEachOfType(v.ContentObjectType.Texture,b=>b.unload())}get updating(){return 0<this._loadingCount||this._frameTask.updating}get textureTechnique(){null==
this._textureTechnique&&(this._textureTechnique=this._techniques.acquire(w.TextureTechnique,new x.TextureTechniqueConfiguration));return this._textureTechnique}acquire(b){const a=this._textures.get(b);return a?(a.ref(),a.loadingPromise??a):this._createNewRef(b)}update(){let b=!1;this._frameUpdates.forEach(a=>{const e=a.texture.frameUpdate(a.previousToken);0<=e&&e!==a.previousToken&&(a.previousToken=e,b=!0)});b&&this.events.emit("changed",n.RenderRequestType.BACKGROUND)}_createNewRef(b){const a=this._stage.getObject(b);
if(null==a)return y.assert(void 0!==a),null;const e=a.events.on("unloaded",()=>{e.remove();this._onTextureUnloaded(b)}),c=new A(b,()=>{this._frameTask.schedule(()=>{c.isUnreferenced&&a.unload()})});this._textures.set(b,c);c.ref();if(a.glTexture)return this._updateGLTexture(c,a.glTexture),p.isFrameUpdateTexture(a)&&this._frameUpdates.set(b,{texture:a,previousToken:-1}),c;this._loadingCount++;c.loadingPromise=this._stage.schedule(()=>{const k=a.load(this._rctx),q=g=>{this._loadingCount--;c.loadingPromise=
null;this._updateGLTexture(c,g);p.isFrameUpdateTexture(a)&&this._frameUpdates.set(b,{texture:a,previousToken:-1});return c},B=g=>{this._loadingCount--;c.loadingPromise=null;m.isAbortError(g)||l.getLogger(this).error(g);return null};return m.isPromiseLike(k)?k.then(q,B):q(k)});return c.loadingPromise}_updateGLTexture(b,a){b.glTexture=a;this.events.emit("changed",n.RenderRequestType.UPDATE)}_onTextureUnloaded(b){this._textures.delete(b);this._frameUpdates.delete(b)}};f.__decorate([h.property()],d.TextureRepository.prototype,
"_loadingCount",void 0);f.__decorate([h.property()],d.TextureRepository.prototype,"_frameTask",void 0);f.__decorate([h.property()],d.TextureRepository.prototype,"updating",null);d.TextureRepository=f.__decorate([u.subclass("esri.views.3d.webgl-engine.lib.TextureRepository")],d.TextureRepository);class A{constructor(b,a){this.id=b;this._release=a;this._refCount=0}get isUnreferenced(){return 0===this._refCount}ref(){++this._refCount}release(){--this._refCount;0<this._refCount||(0===this._refCount?this._release():
(l.getLogger("esri.views.3d.webgl-engine.lib.TextureRepository.RefCountedTextureImpl").error("Cannot dereference texture that has no references!"),this._refCount=0))}}Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
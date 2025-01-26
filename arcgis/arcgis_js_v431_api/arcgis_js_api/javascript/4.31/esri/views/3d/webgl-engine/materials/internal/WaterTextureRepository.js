// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../assets ../../../../../core/Accessor ../../../../../core/asyncUtils ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../../../support/requestImageUtils ../../core/shaderModules/interfaces ../../lib/basicInterfaces ../../../../webgl/enums ../../../../webgl/Texture ../../../../webgl/TextureDescriptor".split(" "),
function(a,g,k,r,t,u,h,v,l,B,C,w,x,y,m,n,z,A){a.WaterTextureRepository=class extends r{constructor(){super(...arguments);this._passParameters=new p;this._resourcesTask=null}get passParameters(){return this._passParameters}destroy(){this._resourcesTask=h.abortMaybe(this._resourcesTask);this._passParameters.waveNormal=h.disposeMaybe(this._passParameters.waveNormal);this._passParameters.wavePerturbation=h.disposeMaybe(this._passParameters.wavePerturbation)}get updating(){return!!this._resourcesTask&&
!this._resourcesTask.finished}ensureResources(e){this._resourcesTask||(this._resourcesTask=t.createTask(async f=>{await Promise.allSettled([this._loadImageResource(e,k.getAssetUrl("esri/images/materials/water/normals.jpg"),b=>this._passParameters.waveNormal=b,f),this._loadImageResource(e,k.getAssetUrl("esri/images/materials/water/perturbation.jpg"),b=>this._passParameters.wavePerturbation=b,f)])}));return this._resourcesTask.finished?m.ResourceState.LOADED:m.ResourceState.LOADING}async _loadImageResource(e,
f,b,q){try{const c=await x.requestImage(f,{signal:q});v.throwIfAborted(q);const d=new A.TextureDescriptor(c.width,c.height);d.pixelFormat=n.PixelFormat.RGB;d.samplingMode=n.TextureSamplingMode.LINEAR_MIPMAP_LINEAR;d.hasMipmap=!0;d.maxAnisotropy=8;b(new z.Texture(e,d,c))}catch(c){u.getLogger(this).error("Failed to load water material normal texture.",c)}}};g.__decorate([l.property()],a.WaterTextureRepository.prototype,"_resourcesTask",void 0);g.__decorate([l.property({type:Boolean,readOnly:!0})],a.WaterTextureRepository.prototype,
"updating",null);a.WaterTextureRepository=g.__decorate([w.subclass("esri.views.3d.webgl-engine.materials.internal.WaterTextureRepository")],a.WaterTextureRepository);class p extends y.NoParameters{}a.WaterTexturePassParameters=p;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
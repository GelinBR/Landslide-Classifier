// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/compilerUtils ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../core/signal ../../../core/accessorSupport/decorators/property ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../core/libs/gl-matrix-2/math/mat3 ../../../core/libs/gl-matrix-2/math/mat4 ../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../core/libs/gl-matrix-2/math/vec2 ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../core/libs/gl-matrix-2/factories/vec3f32 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/ellipsoidUtils ./Clouds ../../../chunks/Clouds.glsl ./CloudsPresets ./CloudsTechnique ./CloudsTechniqueConfiguration ./NoiseTextureAtlas ../../support/Scheduler ../../support/Yield ../../webgl/enums ../../webgl/FramebufferObject ../../webgl/TextureDescriptor".split(" "),
function(e,k,B,C,n,A,d,D,l,R,S,E,F,G,H,v,w,p,I,J,r,u,f,x,t,K,L,y,z,M,N){e.CloudsRenderer=class extends B{constructor(a){super(a);this._state=D.signal(r.CubeMapState.Idle);this._passParameters=new u.CloudsPassParameters;this._weatherTileCount=128;this._tileIndex=this._faceIndex=0;this._tilesPerFace=1;this.coverage=n.lerp(f.cloudPresets.default.coverage[0],f.cloudPresets.default.coverage[1],.5);this.density=n.lerp(f.cloudPresets.default.density[0],f.cloudPresets.default.density[1],.5);this.absorption=
n.lerp(f.cloudPresets.default.absorption[0],f.cloudPresets.default.absorption[1],.5);this.cloudSize=n.lerp(f.cloudPresets.default.cloudSize[0],f.cloudPresets.default.cloudSize[1],.5);this.detailSize=n.lerp(f.cloudPresets.default.detailSize[0],f.cloudPresets.default.detailSize[1],.5);this.smoothness=n.lerp(f.cloudPresets.default.smoothness[0],f.cloudPresets.default.smoothness[1],.5);this.cloudHeight=n.lerp(f.cloudPresets.default.cloudHeight[0],f.cloudPresets.default.cloudHeight[1],.5);this.raymarchingSteps=
f.cloudPresets.default.raymarchingSteps;this._viewMatrix=H.create();this.running=this._dirty=!0;this._configuration=new t.CloudsTechniqueConfiguration}initialize(){var a=J.getReferenceEllipsoid(this.view.spatialReference);this._passParameters.cloudRadius=.5*a.radius;a=()=>this.setDirty();this.addHandles([this.view.resourceController.scheduler.registerTask(L.TaskPriority.CLOUDS_GENERATOR,this),d.watch(()=>this.coverage,a,d.initial),d.watch(()=>this.density,a,d.initial),d.watch(()=>this.absorption,
a,d.initial),d.watch(()=>this.cloudSize,a,d.initial),d.watch(()=>this.detailSize,a,d.initial),d.watch(()=>this.smoothness,a,d.initial),d.watch(()=>this.cloudHeight,a,d.initial),d.watch(()=>this.raymarchingSteps,a,d.initial)]);const b=w.clone(this._computeWeatherTile());let g=0;this.addHandles(d.watch(()=>{const c=this._computeWeatherTile();v.equals(b,c)||(++g,v.copy(b,c));return g},a))}destroy(){this.destroyCubeMap();this._passParameters.noiseTexture=A.destroyMaybe(this._passParameters.noiseTexture)}_precompileTechniques(){this._configuration.steps=
this.raymarchingSteps;this._configuration.writeTextureChannels=r.CloudsTextureChannels.RG;this.context.techniques.precompile(x.CloudsTechnique,this._configuration);this._configuration.writeTextureChannels=r.CloudsTextureChannels.BA;this.context.techniques.precompile(x.CloudsTechnique,this._configuration)}_acquireTechnique(){switch(this.raymarchingSteps){case t.RayMarchingSteps.SIXTEEN:this._tilesPerFace=1;break;case t.RayMarchingSteps.HUNDRED:this._tilesPerFace=4;break;case t.RayMarchingSteps.COUNT:case t.RayMarchingSteps.TWOHUNDRED:this._tilesPerFace=
8;break;default:C.neverReached(this.raymarchingSteps)}this._configuration.writeTextureChannels=1-this.parameters.readChannels;this._configuration.steps=this.raymarchingSteps;return this.context.techniques.acquire(x.CloudsTechnique,this._configuration)}_computeWeatherTile(){const {camera:a,environment:b}=this.view,{latitude:g,longitude:c}=a.position;if(null==g||null==c)return w.ZEROS;v.set(m,(g+90)/180,(c+180)/360);var h=Math.floor(this._weatherTileCount*Math.abs(2*m[0]-1));m[0]=Math.floor(2*this._weatherTileCount*
m[0]);m[1]=Math.floor(4*(this._weatherTileCount-h)*m[1]);var q=h=0;"virtual"!==b?.lighting?.type&&null!=b?.lighting?.date&&(q=new Date(b.lighting.date),q.setUTCHours(b.lighting.date.getUTCHours()+(b.lighting.displayUTCOffset??0)),h=31*q.getUTCMonth()+q.getUTCDate(),q=q.getUTCFullYear());m[0]=(m[0]+h)%(2*this._weatherTileCount);m[1]=(m[1]+q%100)%(4*this._weatherTileCount);return m}get state(){return this._state.value}set state(a){this._state.value=a}get usedMemory(){return(this._fbo?.usedMemory??0)+
(this._passParameters.noiseTexture?.textureAtlas?.usedMemory??0)}_ensureNoiseTexture(){let a;(a=this._passParameters).noiseTexture??(a.noiseTexture=new K.NoiseTextureAtlas({context:this.context}));return this._passParameters.noiseTexture}_ensureFrameBufferCube(a){const b=this.context.renderContext.rctx;null==this._fbo&&(a=new N.TextureDescriptor(a),a.target=z.TextureType.TEXTURE_CUBE_MAP,a.wrapMode=z.TextureWrapMode.CLAMP_TO_EDGE,this._fbo=new M.FramebufferObject(b,a),this.parameters.data=this);b.unbindTexture(this._fbo.colorTexture);
return this._fbo}get cubeMap(){return this._fbo}get parameters(){return this.context.renderContext.bind.clouds}destroyCubeMap(){this._fbo=A.disposeMaybe(this._fbo);this.parameters.data=null}applyPreset(a,b){const g=a.median,c=h=>{const q=n.lerp(h[0],h[1],g);return.5>b?n.lerp(h[0],q,2*b):n.lerp(q,h[1],2*(b-.5))};this.coverage=c(a.coverage);this.density=c(a.density);this.absorption=c(a.absorption);this.cloudSize=c(a.cloudSize);this.detailSize=c(a.detailSize);this.smoothness=c(a.smoothness);this.cloudHeight=
c(a.cloudHeight);this.raymarchingSteps=a.raymarchingSteps;this._precompileTechniques()}setDirty(){this._dirty=this.running=!0}runTask(a){if(this.state===r.CubeMapState.Fading)return y.Yield;this._dirty&&(this._faceIndex=this._tileIndex=0,this.state=r.CubeMapState.Rendering,this._passParameters.absorption=this.absorption,this._passParameters.density=this.density,this._passParameters.cloudSize=this.cloudSize,this._passParameters.detailSize=this.detailSize,this._passParameters.smoothness=this.smoothness,
this._passParameters.cloudHeight=this.cloudHeight,this._passParameters.coverage=this.coverage,this._ensureNoiseTexture().updateWeatherMap(this._computeWeatherTile()),this._dirty=!1);const b=this._acquireTechnique();if(!this._ensureNoiseTexture().textureAtlas||!b.compiled)return b.release(),y.Yield;G.targetTo(this._viewMatrix,O,P[this._faceIndex],Q[this._faceIndex]);F.fromMat4(this._passParameters.viewMatrix,this._viewMatrix);const g=this.context.renderContext.rctx,c=g.getViewport();var h=u.cubeMapSize/
this._tilesPerFace;g.setViewport(0,this._tileIndex*h,u.cubeMapSize,h);h=this._ensureFrameBufferCube(u.cubeMapSize);g.bindFramebuffer(h);g.bindTechnique(b,this.context.renderContext.bind,this._passParameters);h.setColorTextureTarget(z.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X+this._faceIndex);g.screen.draw();b.release();g.gl.flush();g.setViewport(c.x,c.y,c.width,c.height);this.requestRender();++this._tileIndex;4===this._faceIndex&&this._tileIndex===this._tilesPerFace?(this._faceIndex=this._tileIndex=
0,this.state=r.CubeMapState.Ready,this.running=!1):this._tileIndex===this._tilesPerFace&&(++this._faceIndex,this._tileIndex=0);a.madeProgress();return y.Yield}};k.__decorate([l.property({constructOnly:!0})],e.CloudsRenderer.prototype,"context",void 0);k.__decorate([l.property({constructOnly:!0})],e.CloudsRenderer.prototype,"view",void 0);k.__decorate([l.property({constructOnly:!0})],e.CloudsRenderer.prototype,"requestRender",void 0);k.__decorate([l.property()],e.CloudsRenderer.prototype,"coverage",
void 0);k.__decorate([l.property()],e.CloudsRenderer.prototype,"density",void 0);k.__decorate([l.property()],e.CloudsRenderer.prototype,"absorption",void 0);k.__decorate([l.property()],e.CloudsRenderer.prototype,"cloudSize",void 0);k.__decorate([l.property()],e.CloudsRenderer.prototype,"detailSize",void 0);k.__decorate([l.property()],e.CloudsRenderer.prototype,"smoothness",void 0);k.__decorate([l.property()],e.CloudsRenderer.prototype,"cloudHeight",void 0);k.__decorate([l.property()],e.CloudsRenderer.prototype,
"raymarchingSteps",void 0);k.__decorate([l.property()],e.CloudsRenderer.prototype,"running",void 0);e.CloudsRenderer=k.__decorate([E.subclass("esri.views.3d.environment.CloudsRenderer")],e.CloudsRenderer);const P=[p.fromValues(1,0,0),p.fromValues(-1,0,0),p.fromValues(0,1,0),p.fromValues(0,-1,0),p.fromValues(0,0,1)],Q=[p.fromValues(0,1,0),p.fromValues(0,1,0),p.fromValues(0,0,-1),p.fromValues(0,0,1),p.fromValues(0,1,0)],O=I.zeros(),m=w.zeros();Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
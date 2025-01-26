// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/maybe ../../../../../core/accessorSupport/decorators/property ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../../../chunks/vec32 ../../../../../geometry/support/clipRay ../../../../../geometry/support/frustum ../../../../../geometry/support/lineSegment ../../../../../geometry/support/ray ../../../../ViewingMode ../../../webgl ../../../webgl/RenderNode ../blit/Blit ./LaserlinePathData ./LaserlinePathTechnique ./LaserlinePathTechniqueConfiguration ./LaserlineTechnique ./LaserlineTechniqueConfiguration ../../lib/basicInterfaces ../../materials/internal/MaterialUtil ../../shaders/CompositingTechniqueConfiguration ../../../../webgl/enums".split(" "),
function(e,f,H,x,k,I,J,y,g,l,z,r,A,t,n,B,C,u,m,v,D,E,c,F,G,w){e.LaserLineRenderer=class extends B{constructor(a){super(a);this.produces=n.InternalRenderCategory.LASERLINES;this.consumes={required:[n.InternalRenderCategory.LASERLINES,"normals"]};this.requireGeometryDepth=!0;this._configuration=new E.LaserlineTechniqueConfiguration;this._pathTechniqueConfiguration=new v.LaserlinePathTechniqueConfiguration;this._pathVerticalPlaneEnabled=this._intersectsLineInfinite=this._intersectsLineEnabled=this._lineVerticalPlaneEnabled=
this._pointDistanceEnabled=this._heightManifoldEnabled=!1;this._passParameters=new m.LaserlinePathPassParameters;const b=a.view._stage.renderView.techniques,d=new v.LaserlinePathTechniqueConfiguration;d.contrastControlEnabled=a.contrastControlEnabled;b.precompile(m.LaserlinePathTechnique,d)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper;this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===t.ViewingMode.Global;this._pathTechniqueConfiguration.contrastControlEnabled=
this.contrastControlEnabled;this._techniques.precompile(m.LaserlinePathTechnique,this._pathTechniqueConfiguration);this._blit=new C.Blit(this._techniques,G.BlitMode.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=x.disposeMaybe(this._pathVerticalPlaneData);this._blit=null}get _techniques(){return this.view._stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(a){this._heightManifoldEnabled!==a&&(this._heightManifoldEnabled=
a,this.requestRender(c.RenderRequestType.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(a){g.copy(this._passParameters.heightManifoldTarget,a);this.requestRender(c.RenderRequestType.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(a){a!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=a,this.requestRender(c.RenderRequestType.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(a){g.copy(this._passParameters.pointDistanceTarget,
a);this.requestRender(c.RenderRequestType.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(a){g.copy(this._passParameters.pointDistanceOrigin,a);this.requestRender(c.RenderRequestType.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(a){a!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=a,this.requestRender(c.RenderRequestType.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(a){r.copy(a,
this._passParameters.lineVerticalPlaneSegment);this.requestRender(c.RenderRequestType.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(a){a!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=a,this.requestRender(c.RenderRequestType.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(a){r.copy(a,this._passParameters.intersectsLineSegment);this.requestRender(c.RenderRequestType.UPDATE)}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(a){a!==
this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=a,this.requestRender(c.RenderRequestType.UPDATE))}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(a){a!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=a,this.requestRender(c.RenderRequestType.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(a){a!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=
a,null!=this._pathVerticalPlaneData&&this.requestRender(c.RenderRequestType.UPDATE))}set pathVerticalPlaneVertices(a){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new u.LaserlinePathData(this._passParameters.renderCoordsHelper));this._pathVerticalPlaneData.vertices=a;this.pathVerticalPlaneEnabled&&this.requestRender(c.RenderRequestType.UPDATE)}set pathVerticalPlaneBuffers(a){null==this._pathVerticalPlaneData&&(this._pathVerticalPlaneData=new u.LaserlinePathData(this._passParameters.renderCoordsHelper));
this._pathVerticalPlaneData.buffers=a;this.pathVerticalPlaneEnabled&&this.requestRender(c.RenderRequestType.UPDATE)}setParameters(a){F.updateParameters(this._passParameters,a)&&this.requestRender(c.RenderRequestType.UPDATE)}precompile(){this._acquireTechnique().release()}render(a){const b=a.find(({name:p})=>p===n.InternalRenderCategory.LASERLINES);if(!this.bindParameters.decorations||null==this._blit)return b;const d=this.renderingContext;a=a.find(({name:p})=>"normals"===p);this._passParameters.normals=
a?.getTexture();a=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified();this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return d.bindFramebuffer(b.fbo),a(),b;this._passParameters.colors=b.getTexture();const q=this.fboCache.acquire(b.fbo.width,b.fbo.height,"laser lines");d.bindFramebuffer(q.fbo);d.setClearColor(0,0,0,0);d.clear(w.FramebufferBit.COLOR|w.FramebufferBit.DEPTH);a();
d.unbindTexture(b.getTexture());this._blit.blend(d,q,b,this.bindParameters)||this.requestRender(c.RenderRequestType.UPDATE);q.release();return b}_acquireTechnique(){this._configuration.heightManifoldEnabled=this.heightManifoldEnabled;this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled;this._configuration.pointDistanceEnabled=this.pointDistanceEnabled;this._configuration.intersectsLineEnabled=this.intersectsLineEnabled;this._configuration.contrastControlEnabled=this.contrastControlEnabled;
this._configuration.spherical=this.view.state.viewingMode===t.ViewingMode.Global;return this._techniques.acquire(D.LaserlineTechnique,this._configuration)}_renderUnified(){if(this._updatePassParameters()){var a=this._acquireTechnique();if(a.compiled){const b=this.renderingContext;b.bindTechnique(a,this.bindParameters,this._passParameters);b.screen.draw()}else this.requestRender(c.RenderRequestType.UPDATE);a.release()}}_renderPath(){if(null!=this._pathVerticalPlaneData){var a=this._techniques.acquire(m.LaserlinePathTechnique,
this._pathTechniqueConfiguration);if(a.compiled){const b=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin;b.bindTechnique(a,this.bindParameters,this._passParameters);this._pathVerticalPlaneData.draw(b)}else this.requestRender(c.RenderRequestType.UPDATE);a.release()}}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const a=this.bindParameters.camera,b=this._passParameters;if(this._intersectsLineInfinite){l.fromRay(A.wrap(b.intersectsLineSegment.origin,
b.intersectsLineSegment.vector),h);h.c0=-Number.MAX_VALUE;if(!z.intersectClipRay(a.frustum,h))return!1;l.getStart(h,b.lineStartWorld);l.getEnd(h,b.lineEndWorld)}else g.copy(b.lineStartWorld,b.intersectsLineSegment.origin),g.add(b.lineEndWorld,b.intersectsLineSegment.origin,b.intersectsLineSegment.vector);return!0}get test(){}};f.__decorate([k.property({constructOnly:!0})],e.LaserLineRenderer.prototype,"contrastControlEnabled",void 0);f.__decorate([k.property({constructOnly:!0})],e.LaserLineRenderer.prototype,
"isDecoration",void 0);f.__decorate([k.property()],e.LaserLineRenderer.prototype,"produces",void 0);f.__decorate([k.property()],e.LaserLineRenderer.prototype,"consumes",void 0);e.LaserLineRenderer=f.__decorate([y.subclass("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],e.LaserLineRenderer);const h=l.create();Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
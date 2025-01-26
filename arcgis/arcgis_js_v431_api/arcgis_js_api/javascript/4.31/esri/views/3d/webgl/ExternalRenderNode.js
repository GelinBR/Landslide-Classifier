// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./RenderContext ./RenderNode".split(" "),function(a,c,e,d,k,l,m,f,g,h){a.ExternalRenderNode=class extends h{constructor(b){super(b);this.produces="opaque-color";this.renderFunc=null;this._externalContext=new g(b.view,this)}initialize(){this.consumes.required=[this.produces];
this.addHandles(e.watch(()=>this.view.ready,b=>{b?this.setup&&(this._externalContext.rctx=this.renderingContext,this.resetWebGLState(),this.bindRenderTarget(),this.setup(this._externalContext),this.requestRender()):this.dispose&&this.dispose(this._externalContext)},e.initial))}destroy(){this.dispose&&(this.dispose(this._externalContext),this.dispose=null)}render(){this._updateContext();this.resetWebGLState();const b=this.bindRenderTarget();this.renderFunc(this._externalContext);return b}_updateContext(){this._externalContext.rctx=
this.renderingContext;this._externalContext.camera.copyFrom(this.bindParameters.camera);this._externalContext.sunLight=this.bindParameters.lighting.legacy}};c.__decorate([d.property({constructOnly:!0})],a.ExternalRenderNode.prototype,"produces",void 0);c.__decorate([d.property({constructOnly:!0})],a.ExternalRenderNode.prototype,"renderFunc",void 0);c.__decorate([d.property({constructOnly:!0})],a.ExternalRenderNode.prototype,"setup",void 0);c.__decorate([d.property()],a.ExternalRenderNode.prototype,
"dispose",void 0);a.ExternalRenderNode=c.__decorate([f.subclass("esri.views.3d.webgl.ExternalRenderNode")],a.ExternalRenderNode);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
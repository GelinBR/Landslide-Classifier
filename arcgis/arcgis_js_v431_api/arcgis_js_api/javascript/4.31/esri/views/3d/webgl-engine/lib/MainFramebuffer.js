// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/maybe ../../../../chunks/vec42 ../../../../core/libs/gl-matrix-2/factories/vec4f32 ../../../../core/libs/gl-matrix-2/factories/vec4f64 ../../webgl/formats ./BindParameters ../../../webgl/enums ../../../webgl/FramebufferObject".split(" "),function(d,e,g,h,k,f,l,b,m){class n{constructor(a){this._fbos=a;this._requiresEmission=!1;this._size=new l.ViewportSize(0,0);this._clearColor=k.create()}dispose(){this._color=e.releaseMaybe(this._color);this.releaseDepth()}initialize(a,
c,p,q){this._size.width=a;this._size.height=c;m.ensureAttachmentMaxSize(this._size,this._fbos.rctx.parameters.maxTextureSize);a=this._color;this._color=null;this.releaseDepth();this._requiresEmission=q;g.copy(this._clearColor,p);return a}releaseDepth(){this._color?.detachDepth();this._depth=e.releaseMaybe(this._depth)}update(a){const c=this._ensureColor();c.attachDepth(this.depth);this._color=a(c)}bind(){var a=null==this._color;this.color.attachDepth(this.depth);this._fbos.rctx.bindFramebuffer(this.color.fbo);
a&&(a=this._fbos.rctx,a.setClearStencil(0),a.setClearColor(this._clearColor[0],this._clearColor[1],this._clearColor[2],this._clearColor[3]),a.clear(b.FramebufferBit.COLOR|b.FramebufferBit.DEPTH|b.FramebufferBit.STENCIL),this._requiresEmission&&a.gl.clearBufferfv(a.gl.COLOR,1,h.ZEROS))}_acquireColor(){return this._requiresEmission?this._fbos.acquire(this._size.width,this._size.height,"acquired-color").acquireColor(b.ColorAttachment.COLOR_ATTACHMENT1,f.ColorFormat.RGBA,"emissive"):this._fbos.acquire(this._size.width,
this._size.height,"acquired-color")}_acquireDepth(){return this._fbos.acquireDepth(f.DepthFormat.DEPTH_STENCIL_TEXTURE,this._size.width,this._size.height,"depth")}get size(){return this._size}get color(){return this._ensureColor()}get depth(){this._depth??(this._depth=this._acquireDepth());return this._depth}_ensureColor(){this._color??(this._color=this._acquireColor());return this._color}}d.MainFramebuffer=n;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
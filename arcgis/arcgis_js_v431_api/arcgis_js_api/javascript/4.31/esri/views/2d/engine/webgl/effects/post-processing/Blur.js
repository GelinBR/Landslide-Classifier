// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../VertexStream","../../../../../webgl/enums","../../../../../webgl/FramebufferObject","../../../../../webgl/TextureDescriptor"],function(m,p,k,q,r){const t=[1,0],u=[0,1];class v{constructor(){this._blurFBO=null;this._size=[0,0];this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",
0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(a,e,b){const {context:c}=a,{type:d,radius:g}=b;0!==g&&(this._createOrResizeResources(a),this._quad||(this._quad=new p(c,[-1,-1,1,-1,-1,1,1,1])),b=this._quad,b.bind(),"blur"===d?this._gaussianBlur(a,e,g):this._radialBlur(a,e),b.unbind())}_gaussianBlur(a,e,b){const {context:c,state:d,painter:g,pixelRatio:l}=a;var {size:h}=
d,{materialManager:f}=g;a=this._quad;h=[Math.round(l*h[0]),Math.round(l*h[1])];const n=this._blurFBO;f=f.getProgram(this._programDesc.gaussianBlur,[{name:"radius",value:Math.ceil(b)}]);c.useProgram(f);c.setBlendingEnabled(!1);c.bindFramebuffer(n);c.bindTexture(e.colorTexture,4);f.setUniform1i("u_colorTexture",4);f.setUniform2fv("u_texSize",h);f.setUniform2fv("u_direction",t);f.setUniform1f("u_sigma",b);a.draw();c.bindFramebuffer(e);c.setStencilWriteMask(0);c.setStencilTestEnabled(!1);c.setDepthWriteEnabled(!1);
c.setDepthTestEnabled(!1);c.bindTexture(n?.colorTexture,5);f.setUniform1i("u_colorTexture",5);f.setUniform2fv("u_direction",u);a.draw();c.setBlendingEnabled(!0);c.setBlendFunction(k.BlendFactor.ONE,k.BlendFactor.ONE_MINUS_SRC_ALPHA);c.setStencilTestEnabled(!0)}_radialBlur(a,e){const {context:b,painter:c}=a,{materialManager:d}=c,g=this._programDesc;a=this._quad;const l=this._blurFBO;b.bindFramebuffer(l);const h=d.getProgram(g.radialBlur);b.useProgram(h);b.setBlendingEnabled(!1);b.bindTexture(e.colorTexture,
4);h.setUniform1i("u_colorTexture",4);a.draw();b.bindFramebuffer(e);b.setStencilWriteMask(0);b.setStencilTestEnabled(!1);b.setDepthWriteEnabled(!1);b.setDepthTestEnabled(!1);b.setBlendingEnabled(!0);e=d.getProgram(g.blit);b.useProgram(e);b.bindTexture(l?.colorTexture,5);e.setUniform1i("u_texture",5);b.setBlendFunction(k.BlendFactor.ONE,k.BlendFactor.ONE_MINUS_SRC_ALPHA);a.draw()}_createOrResizeResources(a){const {context:e,state:b,pixelRatio:c}=a;var {size:d}=b;a=Math.round(c*d[0]);d=Math.round(c*
d[1]);this._blurFBO&&this._size[0]===a&&this._size[1]===d||(this._size[0]=a,this._size[1]=d,this._blurFBO?this._blurFBO.resize(a,d):(a=new r.TextureDescriptor(a,d),a.internalFormat=k.PixelFormat.RGBA,a.wrapMode=k.TextureWrapMode.CLAMP_TO_EDGE,this._blurFBO=new q.FramebufferObject(e,a)))}}m.Blur=v;Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
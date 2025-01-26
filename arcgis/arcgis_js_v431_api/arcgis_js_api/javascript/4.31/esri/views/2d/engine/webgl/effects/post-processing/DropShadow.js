// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/maybe ../../../../../../core/screenUtils ../../VertexStream ../../../../../webgl/enums ../../../../../webgl/FramebufferObject ../../../../../webgl/Texture ../../../../../webgl/TextureDescriptor".split(" "),function(r,p,t,A,d,u,B,q){const C=[1,0],D=[0,1];class E{constructor(){this._verticalBlurFBO=this._horizontalBlurFBO=this._layerFBOTexture=null;this._size=[0,0];this._quad=null;this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",
attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture=p.disposeMaybe(this._layerFBOTexture);this._horizontalBlurFBO=p.disposeMaybe(this._horizontalBlurFBO);this._verticalBlurFBO=p.disposeMaybe(this._verticalBlurFBO)}draw(c,b,e){const {context:a,state:h,
painter:F}=c,{materialManager:v}=F,w=this._programDesc,l=b.width,m=b.height,n=[Math.round(l),Math.round(m)],{blurRadius:x,offsetX:G,offsetY:H,color:f}=e;e=[t.pt2px(G),t.pt2px(H)];this._createOrResizeResources(c,l,m,n);const y=this._horizontalBlurFBO;c=this._verticalBlurFBO;a.setStencilWriteMask(0);a.setStencilTestEnabled(!1);a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);const z=this._layerFBOTexture;b.copyToTexture(0,0,l,m,0,0,z);this._quad||(this._quad=new A(a,[-1,-1,1,-1,-1,1,1,1]));a.setViewport(0,
0,n[0],n[1]);const k=this._quad;k.bind();a.setBlendingEnabled(!1);const g=v.getProgram(w.blur,[{name:"radius",value:Math.ceil(x)}]);a.useProgram(g);a.bindFramebuffer(y);a.bindTexture(b.colorTexture,4);g.setUniform1i("u_colorTexture",4);g.setUniform2fv("u_texSize",n);g.setUniform2fv("u_direction",C);g.setUniform1f("u_sigma",x);k.draw();a.bindFramebuffer(c);a.bindTexture(y?.colorTexture,5);g.setUniform1i("u_colorTexture",5);g.setUniform2fv("u_direction",D);k.draw();a.bindFramebuffer(b);a.setViewport(0,
0,l,m);b=v.getProgram(w.composite);a.useProgram(b);a.bindTexture(c?.colorTexture,2);b.setUniform1i("u_blurTexture",2);a.bindTexture(z,3);b.setUniform1i("u_layerFBOTexture",3);b.setUniform4fv("u_shadowColor",[f[0]/255*f[3],f[1]/255*f[3],f[2]/255*f[3],f[3]]);b.setUniformMatrix3fv("u_displayViewMat3",h.displayMat3);b.setUniform2fv("u_shadowOffset",e);k.draw();a.setBlendingEnabled(!0);a.setStencilTestEnabled(!0);a.setBlendFunction(d.BlendFactor.ONE,d.BlendFactor.ONE_MINUS_SRC_ALPHA);k.unbind()}_createOrResizeResources(c,
b,e,a){({context:c}=c);if(!this._horizontalBlurFBO||this._size[0]!==b||this._size[1]!==e){this._size[0]=b;this._size[1]=e;if(this._horizontalBlurFBO)this._horizontalBlurFBO.resize(a[0],a[1]);else{const h=new q.TextureDescriptor(a[0],a[1]);h.internalFormat=d.PixelFormat.RGBA;h.wrapMode=d.TextureWrapMode.CLAMP_TO_EDGE;this._horizontalBlurFBO=new u.FramebufferObject(c,h)}this._verticalBlurFBO?this._verticalBlurFBO.resize(a[0],a[1]):(a=new q.TextureDescriptor(a[0],a[1]),a.internalFormat=d.PixelFormat.RGBA,
a.wrapMode=d.TextureWrapMode.CLAMP_TO_EDGE,this._verticalBlurFBO=new u.FramebufferObject(c,a));this._layerFBOTexture?this._layerFBOTexture.resize(b,e):(a=new q.TextureDescriptor,a.internalFormat=d.PixelFormat.RGBA,a.wrapMode=d.TextureWrapMode.CLAMP_TO_EDGE,a.width=b,a.height=e,this._layerFBOTexture=new B.Texture(c,a))}}}r.DropShadow=E;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
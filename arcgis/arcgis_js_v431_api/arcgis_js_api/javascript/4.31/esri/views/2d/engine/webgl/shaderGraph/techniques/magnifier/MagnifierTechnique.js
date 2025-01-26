// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../core/mathUtils ../../../../../../../core/maybe ../../../../../../../core/urlUtils ../../utils ../Technique ../TechniqueType ../shaders/MagnifierShader ../../../../../../webgl/enums ../../../../../../webgl/Texture ../../../../../../webgl/TextureDescriptor".split(" "),function(q,r,m,x,y,z,A,B,g,n,C){class D extends z.Technique{constructor(){super(...arguments);this.type=A.TechniqueType.Magnifier;this._resourcePixelRatio=1;this._position=[0,0,0,0];this.shaders={magnifier:new B.MagnifierShader}}updateResources(b,
c,d,e){b.pixelRatio!==this._resourcePixelRatio&&this._destroyResources();this._readbackTexture||this._initializeResources(b,c,d,e);const {context:h,pixelRatio:f}=b,{factor:a,offset:t,position:u}=e;({size:d}=b.state);e=e.size*f;c=Math.ceil(1/a*e);this._readbackTexture.resize(c,c);b=f*d[0];d=f*d[1];var k=.5*c,l=.5*c;const v=r.clamp(f*u.x,k,b-k-1),w=r.clamp(d-f*u.y,l,d-l-1);k=v-k;l=w-l;const p=this._readbackTexture;h.bindTexture(p,0);h.gl.copyTexImage2D(p.descriptor.target,0,p.descriptor.pixelFormat,
k,l,c,c,0);c=t.y*f;this._position[0]=-1+(v+t.x*f)/b*2;this._position[1]=-1+(w-c)/d*2;this._position[2]=e/b*2;this._position[3]=e/d*2}render(b,c){const {context:d,painter:e}=b;e.setPipelineState(y.simplePipelineState);e.submitDrawMesh(d,{shader:this.shaders.magnifier,uniforms:{config:{readbackTexture:{texture:this._readbackTexture,unit:0},maskTexture:{texture:this._maskTexture,unit:7},overlayTexture:{texture:this._overlayTexture,unit:6},drawPos:this._position,...c}},defines:null,optionalAttributes:null,
useComputeBuffer:!1},e.quadMesh)}shutdown(){this._destroyResources()}_initializeResources(b,c,d,e){const h=b.context;this._resourcePixelRatio=b.pixelRatio;const f=Math.ceil(e.size*b.pixelRatio);d.width=f;d.height=f;const a=new C.TextureDescriptor;a.internalFormat=g.PixelFormat.RGBA;a.wrapMode=g.TextureWrapMode.CLAMP_TO_EDGE;a.samplingMode=g.TextureSamplingMode.NEAREST;a.flipped=!0;a.preMultiplyAlpha=!x.isSVG(d.src)||!b.context.driverTest.svgPremultipliesAlpha.result;this._overlayTexture=new n.Texture(h,
a,d);c.width=f;c.height=f;a.pixelFormat=a.internalFormat=g.PixelFormat.ALPHA;this._maskTexture=new n.Texture(h,a,c);b=1/e.factor;a.pixelFormat=a.internalFormat=g.PixelFormat.RGBA;a.width=a.height=Math.ceil(b*f);a.samplingMode=g.TextureSamplingMode.LINEAR;a.flipped=!1;this._readbackTexture=new n.Texture(h,a)}_destroyResources(){m.disposeMaybe(this._maskTexture);m.disposeMaybe(this._overlayTexture);m.disposeMaybe(this._readbackTexture)}}q.MagnifierTechnique=D;Object.defineProperty(q,Symbol.toStringTag,
{value:"Module"})});
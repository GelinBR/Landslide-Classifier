// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../chunks/tslib.es6","../../GraphShaderModule","../../graph/glsl","./utils"],function(B,m,l,b,h){function k(a,c,f,d,e){return new b.Vec4(a.multiply(d).multiply(e).add(c.multiply(d).multiply(h.oneMinus(e))).add(f.multiply(e).multiply(h.oneMinus(d))),d.add(e.multiply(h.oneMinus(d))))}function t(a,c){return(new b.Float(1)).subtract(b.step(new b.Float(.5),c)).multiply(h.oneMinus((new b.Float(2)).multiply(h.oneMinus(c).multiply(h.oneMinus(a))))).add(b.step(new b.Float(.5),
c).multiply((new b.Float(2)).multiply(c).multiply(a)))}function q(a,c){return b.ifElse(b.equal(a,new b.Float(0)),new b.Float(0),b.ifElse(b.equal(c,new b.Float(1)),new b.Float(1),b.min(new b.Float(1),a.divide((new b.Float(1)).subtract(c)))))}function r(a,c){return b.ifElse(b.equal(a,new b.Float(1)),new b.Float(1),b.ifElse(b.equal(c,new b.Float(0)),new b.Float(0),h.oneMinus(b.min(new b.Float(1),h.oneMinus(a).divide(c)))))}function u(a,c){return(new b.Float(1)).subtract(b.step(new b.Float(.5),c)).multiply((new b.Float(2)).multiply(c).multiply(a)).add(b.step(new b.Float(.5),
c).multiply(h.oneMinus((new b.Float(2)).multiply(h.oneMinus(c).multiply(h.oneMinus(a))))))}function v(a,c){return b.cond([b.lessThanEqual(c,new b.Float(.5)),()=>{var f=(new b.Float(2)).multiply(c);f=h.oneMinus(f);const d=h.oneMinus(a);return a.subtract(f.multiply(a).multiply(d))}],[b.lessThanEqual(a,new b.Float(.25)),()=>{var f=(new b.Float(2)).multiply(c);f=h.minusOne(f).multiply(a);const d=(new b.Float(16)).multiply(a).subtract(new b.Float(12)).multiply(a).add(new b.Float(3));return a.add(f.multiply(d))}],
[!0,()=>{var f=(new b.Float(2)).multiply(c);f=h.minusOne(f);const d=b.sqrt(a).subtract(a);return a.add(f.multiply(d))}])}function w(a,c){const f=h.oneMinus(b.step(new b.Float(.5),c)).multiply(r(a,(new b.Float(2)).multiply(c)));a=b.step(new b.Float(.5),c).multiply(q(a,(new b.Float(2)).multiply(h.minusScalar(c,.5))));return f.add(a)}function x(a){return b.min(b.min(a.r,a.g),a.b)}function C(a){return b.max(b.max(a.r,a.g),a.b)}function y(a){return b.dot(a,new b.Vec3(.3,.59,.11))}function D(a){return C(a).subtract(x(a))}
function G(a){const c=y(a),f=x(a),d=C(a);return b.cond([b.lessThan(f,new b.Float(0)),()=>{const e=a.subtract(c).multiply(c),g=c.subtract(f);return c.add(e.divide(g))}],[b.greaterThan(d,new b.Float(1)),()=>{var e=a.subtract(c),g=h.oneMinus(c);e=e.multiply(g);g=d.subtract(c);return c.add(e.divide(g))}],[!0,a])}function z(a,c){const f=y(a);c=y(c).subtract(f);a=a.add(new b.Vec3(c));return G(a)}function E(a,c,f){const d=x(a),e=D(a),g=D(c);c=b.ifElse(b.greaterThan(e,new b.Float(0)),()=>a.subtract(d).multiply(g).divide(e),
new b.Vec3(0));return z(c,f)}function A(a,c){return b.ifElse(b.equal(c,new b.Float(1)),c,()=>{var f=h.oneMinus(c);f=a.multiply(a).divide(f);return b.min(f,new b.Float(1))})}class F extends l.VertexInput{}m.__decorate([l.location(0,b.Vec2)],F.prototype,"position",void 0);class H extends l.FragmentInput{}class n extends l.UniformGroup{}m.__decorate([l.uniform(b.Sampler2D)],n.prototype,"layerTexture",void 0);m.__decorate([l.uniform(b.Sampler2D)],n.prototype,"backbufferTexture",void 0);m.__decorate([l.uniform(b.Float)],
n.prototype,"opacity",void 0);m.__decorate([l.uniform(b.Float)],n.prototype,"inFadeOpacity",void 0);class p extends l.GraphShaderModule{vertex(a){const c=a.position;a=new b.Vec4(h.uvToClip(a.position),0,1);return{uv:c,glPosition:a}}fragment(a){const c=new l.FragmentOutput;var f=b.texture2D(this.config.layerTexture,a.uv),d=b.texture2D(this.config.backbufferTexture,a.uv),e=b.ifElse(b.equal(f.a,new b.Float(0)),f.rgb,f.rgb.divide(f.a));a=b.ifElse(b.equal(d.a,new b.Float(0)),d.rgb,d.rgb.divide(d.a));const g=
this.config.opacity.multiply(f.a);d=d.a;switch(this.blendMode){case "destination-over":c.glFragColor=new b.Vec4(e.multiply(g).multiply(h.oneMinus(d)).add(a.multiply(d)),g.add(d).subtract(g.multiply(d)));break;case "source-in":e=new b.Vec4(e.multiply(g).multiply(d),g.multiply(d));a=(new b.Vec4(a.multiply(d),d)).multiply(h.oneMinus(this.config.opacity)).multiply(this.config.inFadeOpacity);c.glFragColor=e.add(a);break;case "destination-in":e=new b.Vec4(a.multiply(d).multiply(g),d.multiply(g));a=(new b.Vec4(a.multiply(d),
d)).multiply(new b.Vec4(h.oneMinus(this.config.opacity).multiply(this.config.inFadeOpacity)));c.glFragColor=e.add(a);break;case "source-out":c.glFragColor=new b.Vec4(e.multiply(g).multiply(h.oneMinus(d)),g.multiply(h.oneMinus(d)));break;case "destination-out":c.glFragColor=new b.Vec4(a.multiply(d).multiply(h.oneMinus(g)),d.multiply(h.oneMinus(g)));break;case "source-atop":c.glFragColor=new b.Vec4(e.multiply(g).multiply(d).add(a.multiply(d.multiply(h.oneMinus(g)))),d);break;case "destination-atop":c.glFragColor=
new b.Vec4(e.multiply(g.multiply(h.oneMinus(d))).add(a.multiply(d).multiply(g)),g);break;case "xor":c.glFragColor=new b.Vec4(e.multiply(g.multiply(h.oneMinus(d))).add(a.multiply(d.multiply(h.oneMinus(g)))),g.multiply(h.oneMinus(d)).add(d.multiply(h.oneMinus(g))));break;case "multiply":c.glFragColor=new b.Vec4(e.multiply(g).multiply(a.multiply(d)).add(e.multiply(g).multiply(h.oneMinus(d))).add(a.multiply(d).multiply(h.oneMinus(g))),g.add(d.multiply(h.oneMinus(g))));break;case "screen":c.glFragColor=
new b.Vec4(e.add(a).subtract(e.multiply(a)).multiply(g.multiply(d)).add(e.multiply(g).multiply(h.oneMinus(d))).add(a.multiply(d).multiply(h.oneMinus(g))),g.add(d.multiply(h.oneMinus(g))));break;case "overlay":f=new b.Vec3(t(a.r,e.r),t(a.g,e.g),t(a.b,e.b));c.glFragColor=k(f,e,a,g,d);break;case "darken":f=b.min(e,a);c.glFragColor=k(f,e,a,g,d);break;case "lighter":c.glFragColor=new b.Vec4(e.multiply(g).add(a.multiply(d)),g.add(d));break;case "lighten":f=b.max(e,a);c.glFragColor=k(f,e,a,g,d);break;case "color-dodge":f=
b.clamp(new b.Vec3(q(a.r,e.r),q(a.g,e.g),q(a.b,e.b)),new b.Vec3(0),new b.Vec3(1));c.glFragColor=k(f,e,a,g,d);break;case "color-burn":f=new b.Vec3(r(a.r,e.r),r(a.g,e.g),r(a.b,e.b));c.glFragColor=k(f,e,a,g,d);break;case "hard-light":f=new b.Vec3(u(a.r,e.r),u(a.g,e.g),u(a.b,e.b));c.glFragColor=k(f,e,a,g,d);break;case "soft-light":f=new b.Vec3(v(a.r,e.r),v(a.g,e.g),v(a.b,e.b));c.glFragColor=k(f,e,a,g,d);break;case "difference":f=b.abs(a.subtract(e));c.glFragColor=k(f,e,a,g,d);break;case "exclusion":f=
e.add(a).subtract((new b.Float(2)).multiply(e).multiply(a));c.glFragColor=k(f,e,a,g,d);break;case "invert":c.glFragColor=new b.Vec4((new b.Vec3(1)).subtract(a).multiply(g).multiply(d).add(a.multiply(d).multiply(h.oneMinus(g))),d);break;case "vivid-light":f=new b.Vec3(b.clamp(w(a.r,e.r),new b.Float(0),new b.Float(1)),b.clamp(w(a.g,e.g),new b.Float(0),new b.Float(1)),b.clamp(w(a.b,e.b),new b.Float(0),new b.Float(1)));c.glFragColor=k(f,e,a,g,d);break;case "hue":f=E(e,a,a);c.glFragColor=k(f,e,a,g,d);
break;case "saturation":f=E(a,e,a);c.glFragColor=k(f,e,a,g,d);break;case "color":f=z(e,a);c.glFragColor=k(f,e,a,g,d);break;case "luminosity":f=z(a,e);c.glFragColor=k(f,e,a,g,d);break;case "plus":c.glFragColor=b.clamp(new b.Vec4(f.r.add(a.r),f.g.add(a.g),f.b.add(a.b),g.add(d)),new b.Vec4(0),new b.Vec4(1));break;case "minus":c.glFragColor=new b.Vec4(b.clamp(new b.Vec3(a.r.subtract(f.r),a.g.subtract(f.g),a.b.subtract(f.b)),new b.Vec3(0),new b.Vec3(1)),d.multiply(g));break;case "average":f=a.add(e).divide(2);
c.glFragColor=k(f,e,a,g,d);break;case "reflect":f=b.clamp(new b.Vec3(A(a.r,e.r),A(a.g,e.g),A(a.b,e.b)),new b.Vec3(0),new b.Vec3(1));c.glFragColor=k(f,e,a,g,d);break;default:c.glFragColor=f.multiply(this.config.opacity)}return c}}m.__decorate([l.define],p.prototype,"blendMode",void 0);m.__decorate([l.uniform(n)],p.prototype,"config",void 0);m.__decorate([m.__param(0,l.input(F))],p.prototype,"vertex",null);m.__decorate([m.__param(0,l.input(H))],p.prototype,"fragment",null);B.BlendShader=p;Object.defineProperty(B,
Symbol.toStringTag,{value:"Module"})});
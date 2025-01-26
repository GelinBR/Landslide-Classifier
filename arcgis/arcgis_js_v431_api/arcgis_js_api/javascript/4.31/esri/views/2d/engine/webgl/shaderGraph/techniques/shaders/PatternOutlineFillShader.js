// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../../chunks/tslib.es6 ../../GraphShaderModule ../../graph/glsl ./AFeatureShader ./LineShader ./LocalTileOffset ./MosaicInfo ./OutlineFillShader ./PatternFillShader".split(" "),function(g,a,d,b,p,q,r,t,h,m){class k extends h.OutlineFillVertexInput{}a.__decorate([d.location(9,b.Vec4)],k.prototype,"tlbr",void 0);a.__decorate([d.location(10,b.Float)],k.prototype,"inverseRasterizationScale",void 0);class n extends h.OutlineFillFragmentInput{}class f extends h.OutlineFillShader{vertex(e,
c){return{...h.getOutlineFillVertexData(this,e,c),...m.getPatternFillVertexData(this,e)}}fragment(e){var {isOutline:c}=e;c=b.greaterThan(c,new b.Float(.5));var l=q.getLineFragmentColor(e,this.antialiasingControls.blur);const u=m.getPatternFillFragmentColor(e,this.mosaicInfo);l=b.ifElse(c,l,u);c=b.ifElse(c,new b.Float(1/255),new b.Float(0));return this.getFragmentOutput(l,e,c)}}a.__decorate([d.uniform(t.MosaicInfo)],f.prototype,"mosaicInfo",void 0);a.__decorate([d.uniform(r.LocalTileOffset)],f.prototype,
"localTileOffset",void 0);a.__decorate([a.__param(0,d.input(k)),a.__param(1,d.input(p.BaseHittestVertexInput))],f.prototype,"vertex",null);a.__decorate([a.__param(0,d.input(n))],f.prototype,"fragment",null);g.PatternOutlineFillFragmentInput=n;g.PatternOutlineFillShader=f;g.PatternOutlineFillVertexInput=k;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ./LinePattern3D ./lineStyles".split(" "),function(b,c,e,l,m,n,f,g,a,h){var d;c=c.strict()({dash:"dash","dash-dot":"dash-dot","dash-dot-dot":"long-dash-dot-dot",dot:"dot","long-dash":"long-dash","long-dash-dot":"long-dash-dot",null:"none","short-dash":"short-dash",
"short-dash-dot":"short-dash-dot","short-dash-dot-dot":"short-dash-dot-dot","short-dot":"short-dot",solid:"solid"});a=d=class extends a{constructor(k){super(k);this.type="style";this.style="solid"}clone(){return new d({style:this.style})}};b.__decorate([e.property({type:["style"]})],a.prototype,"type",void 0);b.__decorate([f.enumeration(c),e.property({type:h.lineStyles})],a.prototype,"style",void 0);return a=d=b.__decorate([g.subclass("esri.symbols.patterns.LineStylePattern3D")],a)});
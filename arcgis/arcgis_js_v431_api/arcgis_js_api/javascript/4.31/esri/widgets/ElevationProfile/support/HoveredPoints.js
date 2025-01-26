// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Collection ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ./constants ../../support/AnchorElementViewModel".split(" "),function(e,h,n,p,k,l,v,w,x,q,r,t){e.HoveredPoints=class extends n{constructor(a){super(a);this._hoveredPoints=new p}initialize(){this.addHandles(k.watch(()=>this._hoveredPoints.toArray().map(({anchor:a,
element:b})=>({screenLocation:a.screenLocation,element:b})),a=>{for(const {screenLocation:b,element:d}of a)b&&(d.style.transform=`translate(${b.x}px, ${b.y}px)`)},k.syncAndInitial))}destroy(){this._hoveredPoints.drain(a=>this._destroyHoveredPoint(a))}update(a){var b=this.view;const d=this._hoveredPoints,f=a.length;for(;this._hoveredPoints.length>f;)this._destroyHoveredPoint(this._hoveredPoints.pop());for(;this._hoveredPoints.length<f;){var g=this._makeHoveredPoint();d.push(g);b.surface?.appendChild(g.element)}for(b=
0;b<f;++b)g=d.at(f-1-b),this._updateHoveredPoint(g,a[b])}_makeHoveredPoint(){const {size:a,borderStyle:b,borderColor:d,borderWidth:f,boxShadow:g}=r.getConfig().hoveredPointsStyle,u=new t({view:this.view,screenLocationEnabled:!0}),m=document.createElement("div"),c=m.style;c.position="absolute";c.top="0";c.left="0";c.contain="strict";c.boxSizing="border-box";c.width=`${a}px`;c.height=`${a}px`;c.marginTop=`-${a/2}px`;c.marginLeft=`-${a/2}px`;c.border=`${b} ${f}px ${d}`;c.borderRadius=`${a}px`;c.boxShadow=
g;return{anchor:u,element:m}}_updateHoveredPoint({anchor:a,element:b},d){a.screenLocationEnabled=!0;a.location=d.hoveredPoint;a=b.style;a.display="block";a.background=d.color.toCss()}_destroyHoveredPoint({anchor:a,element:b}){a.destroy();this.view.surface?.removeChild(b)}};h.__decorate([l.property()],e.HoveredPoints.prototype,"view",void 0);h.__decorate([l.property()],e.HoveredPoints.prototype,"_hoveredPoints",void 0);e.HoveredPoints=h.__decorate([q.subclass("esri.widgets.ElevationProfile.support.HoveredPoints")],
e.HoveredPoints);Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../chunks/tslib.es6 ../core/ArrayPool ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass".split(" "),function(q,f,g,r,h,v,w,x,u){function l(b,a){return a?k[b].valueToClassName[a].split(" "):[]}const k={widthBreakpoint:{getValue(b){const a=b.viewSize[0];b=b.breakpoints;const c=this.values;return a<=b.xsmall?c.xsmall:a<=b.small?c.small:a<=b.medium?c.medium:a<=b.large?c.large:c.xlarge},
values:{xsmall:"xsmall",small:"small",medium:"medium",large:"large",xlarge:"xlarge"},valueToClassName:{xsmall:"esri-view-width-xsmall esri-view-width-less-than-small esri-view-width-less-than-medium esri-view-width-less-than-large esri-view-width-less-than-xlarge",small:"esri-view-width-small esri-view-width-greater-than-xsmall esri-view-width-less-than-medium esri-view-width-less-than-large esri-view-width-less-than-xlarge",medium:"esri-view-width-medium esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-less-than-large esri-view-width-less-than-xlarge",
large:"esri-view-width-large esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-greater-than-medium esri-view-width-less-than-xlarge",xlarge:"esri-view-width-xlarge esri-view-width-greater-than-xsmall esri-view-width-greater-than-small esri-view-width-greater-than-medium esri-view-width-greater-than-large"}},heightBreakpoint:{getValue(b){const a=b.viewSize[1];b=b.breakpoints;const c=this.values;return a<=b.xsmall?c.xsmall:a<=b.small?c.small:a<=b.medium?c.medium:
a<=b.large?c.large:c.xlarge},values:{xsmall:"xsmall",small:"small",medium:"medium",large:"large",xlarge:"xlarge"},valueToClassName:{xsmall:"esri-view-height-xsmall esri-view-height-less-than-small esri-view-height-less-than-medium esri-view-height-less-than-large esri-view-height-less-than-xlarge",small:"esri-view-height-small esri-view-height-greater-than-xsmall esri-view-height-less-than-medium esri-view-height-less-than-large esri-view-height-less-than-xlarge",medium:"esri-view-height-medium esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-less-than-large esri-view-height-less-than-xlarge",
large:"esri-view-height-large esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-greater-than-medium esri-view-height-less-than-xlarge",xlarge:"esri-view-height-xlarge esri-view-height-greater-than-xsmall esri-view-height-greater-than-small esri-view-height-greater-than-medium esri-view-height-greater-than-large"}},orientation:{getValue(b){b=b.viewSize;const a=this.values;return b[1]>=b[0]?a.portrait:a.landscape},values:{portrait:"portrait",landscape:"landscape"},
valueToClassName:{portrait:"esri-view-orientation-portrait",landscape:"esri-view-orientation-landscape"}}},m={xsmall:544,small:768,medium:992,large:1200};q.BreakpointsOwner=b=>{b=class extends b{constructor(...a){super(...a);this.heightBreakpoint=this.widthBreakpoint=this.orientation=null;this.breakpoints=m}initialize(){this.addHandles(r.watch(()=>[this.breakpoints,this.size],()=>this._updateClassNames(),r.initial))}destroy(){this.destroyed||this._removeActiveClassNames()}set breakpoints(a){var c=
this._get("breakpoints");a!==c&&(c=a,c&&c.xsmall<c.small&&c.small<c.medium&&c.medium<c.large||(a=JSON.stringify(m,null,2),console.warn("provided breakpoints are not valid, using defaults:"+a),a=m),this._set("breakpoints",{...a}))}_updateClassNames(){if(this.container){var a=g.acquire(),c=g.acquire(),e=!1,d;for(d in k){const t=this[d],n=k[d].getValue({viewSize:this.size,breakpoints:this.breakpoints});t!==n&&(e=!0,this[d]=n,l(d,t).forEach(p=>c.push(p)),l(d,n).forEach(p=>a.push(p)))}e&&(this._applyClassNameChanges(a,
c),g.release(a),g.release(c))}}_applyClassNameChanges(a,c){const e=this.container;e&&(c.forEach(d=>e.classList.remove(d)),a.forEach(d=>e.classList.add(d)))}_removeActiveClassNames(){const a=this.container;if(a)for(var c in k)l(c,this[c]).forEach(e=>a.classList.remove(e))}};f.__decorate([h.property()],b.prototype,"breakpoints",null);f.__decorate([h.property()],b.prototype,"orientation",void 0);f.__decorate([h.property()],b.prototype,"widthBreakpoint",void 0);f.__decorate([h.property()],b.prototype,
"heightBreakpoint",void 0);return b=f.__decorate([u.subclass("esri.views.BreakpointsOwner")],b)};Object.defineProperty(q,Symbol.toStringTag,{value:"Module"})});
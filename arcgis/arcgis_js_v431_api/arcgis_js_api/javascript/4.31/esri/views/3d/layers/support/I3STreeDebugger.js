// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../geometry ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/Logger ../../../../core/accessorSupport/decorators/subclass ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/projection/projectBuffer ../../../support/TileTreeDebugger ../../../../geometry/Polygon".split(" "),
function(l,m,y,q,p,z,A,r,t,u,c,v,k,w,x){l.I3STreeDebugger=class extends w.TileTreeDebugger{constructor(n){super(n)}getTiles(){const n=this.lv.getVisibleNodes(),g=this.view.renderSpatialReference,h=this.nodeSR;return n.map(d=>{{const f=d.serviceObbInIndexSR;if(null==f||null==g)d=null;else{t.fromQuat(e,f.quaternion);c.copy(a,f.center);k.projectBuffer(a,h,0,a,g,0);e[12]=a[0];e[13]=a[1];e[14]=a[2];var b=[[],[],[]];c.transformMat4(a,f.halfSize,e);k.projectBuffer(a,g,0,a,h,0);b[0].push([a[0],a[1]]);c.copy(a,
f.halfSize);a[0]=-a[0];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0);b[0].push([a[0],a[1]]);c.copy(a,f.halfSize);a[0]=-a[0];a[1]=-a[1];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0);b[0].push([a[0],a[1]]);c.copy(a,f.halfSize);a[1]=-a[1];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0);b[0].push([a[0],a[1]]);b[1].push(b[0][0]);b[1].push(b[0][1]);c.copy(a,f.halfSize);a[0]=-a[0];a[2]=-a[2];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0);b[1].push([a[0],a[1]]);c.copy(a,f.halfSize);a[2]=
-a[2];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0);b[1].push([a[0],a[1]]);b[2].push(b[0][0]);b[2].push(b[0][3]);c.copy(a,f.halfSize);a[1]=-a[1];a[2]=-a[2];c.transformMat4(a,a,e);k.projectBuffer(a,g,0,a,h,0);b[2].push([a[0],a[1]]);b[2].push(b[1][3]);b=new x({rings:b,spatialReference:h});d={lij:[d.level,d.childCount,0],label:d.id,geometry:b}}}return d}).filter(q.isSome).sort((d,b)=>d.lij[0]===b.lij[0]?d.label>b.label?-1:1:d.lij[0]-b.lij[0])}};m.__decorate([p.property({constructOnly:!0})],l.I3STreeDebugger.prototype,
"lv",void 0);m.__decorate([p.property({constructOnly:!0})],l.I3STreeDebugger.prototype,"nodeSR",void 0);l.I3STreeDebugger=m.__decorate([r.subclass("esri.views.3d.layers.support.I3STreeDebugger")],l.I3STreeDebugger);const e=u.create(),a=v.create();Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
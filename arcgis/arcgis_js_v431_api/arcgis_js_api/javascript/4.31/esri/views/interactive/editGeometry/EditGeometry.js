// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../core/arrayUtils ../../../core/compilerUtils ../../../core/Evented ../../../geometry/Polygon ../../../geometry/Polyline ../coordinateHelper ./unnormalizationHelper".split(" "),function(n,y,z,A,B,C,D,v){function w(a,c,b){const e=a.coordinateHelper;b=new q(c.spatialReference,b);b.index=0;const h=new r(b);h.index=0;h.pos=e.pointToVector(c);b.vertices.push(h);a.components.push(b)}class r{constructor(a){this.component=a;this.rightEdge=this.leftEdge=null;this.type="vertex";this.index=
null}get pos(){return this._pos}set pos(a){this._pos=a;this.component.unnormalizeVertexPositions()}}class t{constructor(a,c,b){this.component=a;this.leftVertex=c;this.rightVertex=b;this.type="edge";c.rightEdge=this;b.leftEdge=this}}class q{constructor(a,c){this._spatialReference=a;this._viewingMode=c;this.vertices=[];this.edges=[];this.index=null}unnormalizeVertexPositions(){1>=this.vertices.length||v.unnormalize(this.vertices,v.getUnnormalizationInfo(this._spatialReference,this._viewingMode))}updateVertexIndex(a,
c){if(0!==this.vertices.length){var b=this.vertices[0],e=null;do e=a,e.index=c++,a=e.rightEdge?e.rightEdge.rightVertex:null;while(null!=a&&a!==b);e.leftEdge&&e!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(e),this.vertices.length-1)}}getFirstVertex(){return this.vertices.at(0)}getLastVertex(){return this.vertices.at(-1)}isClosed(){return 2<this.vertices.length&&null!==this.vertices[0].leftEdge}swapVertices(a,c){const b=this.vertices[a];this.vertices[a]=this.vertices[c];
this.vertices[c]=b}iterateVertices(a){if(0!==this.vertices.length){var c=this.vertices[0],b=c;do a(b,b.index),b=null!=b.rightEdge?b.rightEdge.rightVertex:null;while(b!==c&&null!=b)}}}class x extends A{constructor(a,c){super();this.type=a;this.coordinateHelper=c;this._geometry=null;this._dirty=!0;this.components=[]}get geometry(){if(this._dirty){switch(this.type){case "point":this._geometry=this._toPoint();break;case "polyline":this._geometry=this._toPolyline();break;case "polygon":this._geometry=
this._toPolygon();break;case "mesh":break;default:z.neverReached(this.type)}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}get allVertices(){return Array.from(this.iterateVertices())}*iterateVertices(){for(const a of this.components)for(const c of a.vertices)yield c}notifyChanges(a){this._dirty=!0;this.emit("change",a)}_toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const a=
[],c=this.coordinateHelper.vectorToArray;for(const b of this.components){if(1>b.vertices.length)continue;const e=[];let h=b.vertices.find(f=>null==f.leftEdge);const g=h;do e.push(c(h.pos)),h=h.rightEdge?h.rightEdge.rightVertex:null;while(h&&h!==g);a.push(e)}return new C({paths:a,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const a=[],c=this.coordinateHelper.vectorToArray;for(const b of this.components){if(1>b.vertices.length)continue;
const e=[],h=b.vertices[0];let g=h;const f=g;do e.push(c(g.pos)),g=null!=g.rightEdge?g.rightEdge.rightVertex:null;while(g&&g!==f);b.isClosed()&&e.push(c(h.pos));a.push(e)}return new B({rings:a,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(a,c){var b=D.createCoordinateHelper(a.hasZ,a.hasM,a.spatialReference);b=new x(a.type,b);switch(a.type){case "polygon":var e=a.spatialReference,h=b.coordinateHelper;a=a.rings;for(var g=
0;g<a.length;++g){var f=a[g],d=new q(e,c);d.index=g;var l=2<f.length&&y.equals(f[0],f[f.length-1]),k=l?f.length-1:f.length;for(var m=0;m<k;++m){var p=h.arrayToVector(f[m]);const u=new r(d);d.vertices.push(u);u.pos=p;u.index=m}f=d.vertices.length-1;for(k=0;k<f;++k)m=new t(d,d.vertices[k],d.vertices[k+1]),d.edges.push(m);l&&(l=new t(d,d.vertices[d.vertices.length-1],d.vertices[0]),d.edges.push(l));b.components.push(d)}break;case "polyline":e=a.spatialReference;h=b.coordinateHelper;a=a.paths;for(g=0;g<
a.length;++g){l=a[g];d=new q(e,c);d.index=g;f=l.length;for(k=0;k<f;++k)m=h.arrayToVector(l[k]),p=new r(d),d.vertices.push(p),p.pos=m,p.index=k;l=d.vertices.length-1;for(f=0;f<l;++f)k=new t(d,d.vertices[f],d.vertices[f+1]),d.edges.push(k);b.components.push(d)}break;case "point":w(b,a,c);break;case "mesh":w(b,a.origin,c),b._geometry=a,b._dirty=!1}return b}}n.Component=q;n.Edge=t;n.EditGeometry=x;n.Vertex=r;n.isMeshEditGeometry=function(a){return"mesh"===a.type};Object.defineProperty(n,Symbol.toStringTag,
{value:"Module"})});
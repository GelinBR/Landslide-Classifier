/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import e from"../core/Evented.js";import{m as t}from"./handleUtils.js";import{c as i,f as s,e as r,a as n}from"./vec3f64.js";import{l as o}from"./coordsUtils.js";import{e as a,r as h}from"../core/lang.js";import{n as c}from"./compilerUtils.js";import l from"../geometry/Polygon.js";import d from"../geometry/Polyline.js";import{h as p,u,m as _,v as g,s as m,i as f,d as y,r as x,y as v}from"./vec2.js";import{c as V,f as E,b as T}from"./vec2f64.js";import{f as P,l as M,o as w,i as A,F as D,p as C,c as R,n as S,s as Z,d as U,y as G,g as z}from"./vec3.js";import{l as b,c as L,a as I}from"./vec4.js";import{c as X,f as O,b as Y}from"./vec4f64.js";import N from"../geometry/Point.js";import{l as k}from"./unitUtils.js";import{V as j}from"./ViewingMode.js";import{c as H,d as B}from"./mathUtils.js";import{c as q,t as F,o as W,z as J,k as K,a as Q,j as $,p as ee,g as te,D as ie}from"./plane.js";import{b as se,L as re}from"./geometry2dUtils.js";var ne,oe,ae;!function(e){e[e.Z=0]="Z",e[e.M=1]="M"}(ne||(ne={}));class he{constructor(e){this.spatialReference=e}createVector(){return this._tag(V())}pointToVector(e){return this._tag(E(e.x,e.y))}arrayToVector(e){return this._tag(E(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e,t=new N){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new N){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t){if(e)return t??={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"},t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return p(s,e,t,i)}addDelta(e,t,i){e[0]+=t,e[1]+=i}distance(e,t){return u(e,t)}getZ(e,t=void 0){return t}hasZ(){return!1}getM(e,t=void 0){return t}hasM(){return!1}clone(e){return this._tag(T(e))}copy(e,t){return _(t,e)}fromXYZ(e){return this._tag(E(e[0],e[1]))}toXYZ(e,t=i()){return P(t,e[0],e[1],0)}pointToXYZ(e,t=i()){return P(t,e.x,e.y,0)}equals(e,t){return g(e,t)}_tag(e){return e}}class ce{constructor(e,t){this._valueType=e,this.spatialReference=t}createVector(){return this._tag(i())}pointToVector(e){return this._tag(s(e.x,e.y,this._valueType===ne.Z?e.z:e.m))}arrayToVector(e){return this._tag(s(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return this._valueType===ne.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e,t=new N){return t.x=e[0],t.y=e[1],t.z=this._valueType===ne.Z?e[2]:void 0,t.m=this._valueType===ne.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new N){return t.x=e[0],t.y=e[1],t.z=this._valueType===ne.Z?e[2]:void 0,t.m=this._valueType===ne.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t){if(!e)return;t??={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"};const i=this._valueType===ne.Z,s=this._valueType===ne.M;return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=s?e[2]:void 0,t.hasZ=i,t.hasM=s,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return M(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,this._valueType===ne.Z&&(e[2]+=s)}distance(e,t){return this._valueType===ne.Z?w(e,t):u(e,t)}getZ(e,t=void 0){return this._valueType===ne.Z?e[2]:t}hasZ(){return this._valueType===ne.Z}getM(e,t=void 0){return this._valueType===ne.M?e[2]:t}hasM(){return this._valueType===ne.M}clone(e){return this._tag(r(e))}copy(e,t){return A(t,e)}fromXYZ(e,t=0,i=0){return this._tag(s(e[0],e[1],this._valueType===ne.Z?e.length>2?e[2]:t:i))}toXYZ(e,t=i()){return P(t,e[0],e[1],this._valueType===ne.Z?e[2]:0)}pointToXYZ(e,t=i()){return P(t,e.x,e.y,this._valueType===ne.Z?e.z??0:0)}equals(e,t){return D(e,t)}_tag(e){return e}}class le{constructor(e){this.spatialReference=e}createVector(){return this._tag(X())}pointToVector(e){return this._tag(O(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag(O(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e,t=new N){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new N){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t){if(e)return t??={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"},t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return b(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,e[2]+=s}distance(e,t){return w(e,t)}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this._tag(Y(e))}copy(e,t){return L(t,e)}fromXYZ(e,t=0,i=0){return this._tag(O(e[0],e[1],e.length>2?e[2]:t,i))}toXYZ(e,t=i()){return P(t,e[0],e[1],e[2])}pointToXYZ(e,t=i()){return P(t,e.x,e.y,e.z??0)}equals(e,t){return I(e,t)}_tag(e){return e}}function de(e,t,i){return e&&t?new le(i):t?new ce(ne.M,i):e?new ce(ne.Z,i):new he(i)}class pe{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}}class ue{constructor(e,t,i){this.component=e,this.leftVertex=t,this.rightVertex=i,this.type="edge",t.rightEdge=this,i.leftEdge=this}}class _e{constructor(e,t){this._spatialReference=e,this._viewingMode=t,this.vertices=[],this.edges=[],this.index=null}unnormalizeVertexPositions(){this.vertices.length<=1||function(e,t){if(!t.supported)return;let i=1/0,s=-1/0;const r=t.upperBoundX-t.lowerBoundX;e.forEach((e=>{let n=e.pos[0];for(;n<t.lowerBoundX;)n+=r;for(;n>t.upperBoundX;)n-=r;i=Math.min(i,n),s=Math.max(s,n),e.pos[0]=n}));const n=s-i;r-n<n&&e.forEach((e=>{e.pos[0]<0&&(e.pos[0]+=r)}))}(this.vertices,function(e,t){const i=k(e);return t===j.Global&&i?{supported:!0,lowerBoundX:i.valid[0],upperBoundX:i.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}(this._spatialReference,this._viewingMode))}updateVertexIndex(e,t){if(0===this.vertices.length)return;const i=this.vertices[0];let s=null,r=e,n=t;do{s=r,s.index=n++,r=s.rightEdge?s.rightEdge.rightVertex:null}while(null!=r&&r!==i);s.leftEdge&&s!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(s),this.vertices.length-1)}getFirstVertex(){return this.vertices.at(0)}getLastVertex(){return this.vertices.at(-1)}isClosed(){return this.vertices.length>2&&null!==this.vertices[0].leftEdge}swapVertices(e,t){const i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i}iterateVertices(e){if(0===this.vertices.length)return;const t=this.vertices[0];let i=t;do{e(i,i.index),i=null!=i.rightEdge?i.rightEdge.rightVertex:null}while(i!==t&&null!=i)}}class ge extends e{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this._dirty=!0,this.components=[]}get geometry(){if(this._dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon();break;case"mesh":break;default:c(this.type)}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}get allVertices(){return Array.from(this.iterateVertices())}*iterateVertices(){for(const e of this.components)for(const t of e.vertices)yield t}notifyChanges(e){this._dirty=!0,this.emit("change",e)}_toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[];let r=i.vertices.find((e=>null==e.leftEdge));const n=r;do{s.push(t(r.pos)),r=r.rightEdge?r.rightEdge.rightVertex:null}while(r&&r!==n);e.push(s)}return new d({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[],r=i.vertices[0];let n=r;const o=n;do{s.push(t(n.pos)),n=null!=n.rightEdge?n.rightEdge.rightVertex:null}while(n&&n!==o);i.isClosed()&&s.push(t(r.pos)),e.push(s)}return new l({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(e,t){const i=e.spatialReference,s=de(e.hasZ,e.hasM,i),r=new ge(e.type,s);switch(e.type){case"polygon":!function(e,t,i){const s=t.spatialReference,r=e.coordinateHelper,n=t.rings;for(let t=0;t<n.length;++t){const o=n[t],h=new _e(s,i);h.index=t;const c=o.length>2&&a(o[0],o[o.length-1]),l=c?o.length-1:o.length;for(let e=0;e<l;++e){const t=r.arrayToVector(o[e]),i=new pe(h);h.vertices.push(i),i.pos=t,i.index=e}const d=h.vertices.length-1;for(let e=0;e<d;++e){const t=h.vertices[e],i=h.vertices[e+1],s=new ue(h,t,i);h.edges.push(s)}if(c){const e=new ue(h,h.vertices[h.vertices.length-1],h.vertices[0]);h.edges.push(e)}e.components.push(h)}}(r,e,t);break;case"polyline":!function(e,t,i){const s=t.spatialReference,r=e.coordinateHelper,n=t.paths;for(let t=0;t<n.length;++t){const o=n[t],a=new _e(s,i);a.index=t;const h=o.length;for(let e=0;e<h;++e){const t=r.arrayToVector(o[e]),i=new pe(a);a.vertices.push(i),i.pos=t,i.index=e}const c=a.vertices.length-1;for(let e=0;e<c;++e){const t=a.vertices[e],i=a.vertices[e+1],s=new ue(a,t,i);a.edges.push(s)}e.components.push(a)}}(r,e,t);break;case"point":me(r,e,t);break;case"mesh":me(r,e.origin,t),r._geometry=e,r._dirty=!1}return r}}function me(e,t,i){const s=t.spatialReference,r=e.coordinateHelper,n=new _e(s,i);n.index=0;const o=new pe(n);o.index=0,o.pos=r.pointToVector(t),n.vertices.push(o),e.components.push(n)}function fe(e){return"mesh"===e.type}!function(e){e[e.NEW_STEP=0]="NEW_STEP",e[e.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"}(oe||(oe={}));class ye{constructor(e,t,i){this._editGeometry=e,this._component=t,this._pos=i,this._addedVertex=null,this._originalEdge=null,this._left=null,this._right=null}apply(){let e="redo";null==this._addedVertex&&(e="apply",this._addedVertex=new pe(this._component));const t=this._component.getLastVertex();if(null==t)this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,this._addedVertex.index=0;else{let e=null;t.rightEdge&&(this._originalEdge=t.rightEdge,e=this._originalEdge.rightVertex,this._component.edges.splice(this._component.edges.indexOf(this._originalEdge),1)),this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,null==this._left&&(this._left=new ue(this._component,t,this._addedVertex)),this._component.edges.push(this._left),t.rightEdge=this._left,null!=this._originalEdge&&null!=e&&(null==this._right&&(this._right=new ue(this._component,this._addedVertex,e)),this._component.edges.push(this._right),e.leftEdge=this._right),this._component.updateVertexIndex(this._addedVertex,t.index+1)}this._editGeometry.notifyChanges({operation:e,addedVertices:[this._addedVertex]})}undo(){null!=this._addedVertex&&(this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex),1),null!=this._left&&(this._component.edges.splice(this._component.edges.indexOf(this._left),1),this._left.leftVertex.rightEdge=null),null!=this._right&&(this._component.edges.splice(this._component.edges.indexOf(this._right),1),this._right.rightVertex.leftEdge=null),null!=this._originalEdge&&(this._component.edges.push(this._originalEdge),this._originalEdge.leftVertex.rightEdge=this._originalEdge,this._originalEdge.rightVertex.leftEdge=this._originalEdge),null!=this._left?this._component.updateVertexIndex(this._left.leftVertex,this._left.leftVertex.index):this._component.updateVertexIndex(this._addedVertex,0),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this._addedVertex]}))}accumulate(){return!1}}class xe{constructor(e,t,i){this._editGeometry=e,this._vertices=t,this.operation=i,this._undone=!1}apply(){this._vertices.forEach((e=>this.operation.apply(e))),this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:this._undone?"redo":"apply",updatedVertices:this._vertices})}undo(){this._vertices.forEach((e=>this.operation.undo(e))),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:this._vertices}),this._undone=!0}canAccumulate(e){if(this._undone||e._vertices.length!==this._vertices.length)return!1;for(let t=0;t<e._vertices.length;++t)if(e._vertices[t]!==this._vertices[t])return!1;return this.operation.canAccumulate(e.operation)}accumulate(e){return!!(e instanceof xe&&this.canAccumulate(e))&&(this._vertices.forEach((t=>this.operation.accumulate(t,e.operation))),this.operation.accumulateParams(e.operation),this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:"apply",updatedVertices:this._vertices}),!0)}}!function(e){e[e.CUMULATIVE=0]="CUMULATIVE",e[e.REPLACE=1]="REPLACE"}(ae||(ae={}));class ve{constructor(e,t,i=0){this._editGeometry=e,this._vertices=t,this._minNumberOfVertices=i,this.removedVertices=null}apply(){let e="redo";if(null==this.removedVertices){const t=this.removedVertices=[];this._vertices.forEach((e=>{const i=this._removeVertex(e);null!=i&&t.push(i)})),e="apply"}else this.removedVertices.forEach((e=>{this._removeVertex(e.removedVertex)}));this._editGeometry.notifyChanges({operation:e,removedVertices:this._vertices})}undo(){this.removedVertices?.forEach((e=>{this._undoRemoveVertex(e)})),this._editGeometry.notifyChanges({operation:"undo",addedVertices:this._vertices})}accumulate(){return!1}_removeVertex(e){const t=e.component;if(t.vertices.length<=this._minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,r=e.rightEdge;return t.vertices.splice(t.vertices.indexOf(e),1),s&&(t.edges.splice(t.edges.indexOf(s),1),s.leftVertex.rightEdge=null),r&&(t.edges.splice(t.edges.indexOf(r),1),r.rightVertex.leftEdge=null),0===e.index&&r&&this._vertices.length>0&&t.swapVertices(t.vertices.indexOf(r.rightVertex),0),s&&r&&(i.createdEdge=new ue(t,s.leftVertex,r.rightVertex),t.edges.push(i.createdEdge)),r&&t.updateVertexIndex(r.rightVertex,r.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,i=e.removedVertex.component,s=t.leftEdge,r=t.rightEdge;e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),s&&(i.edges.push(s),s.leftVertex.rightEdge=s),r&&(i.edges.push(r),r.rightVertex.leftEdge=r),i.updateVertexIndex(t,t.index)}}class Ve{constructor(e,t,i){this._editGeometry=e,this._edge=t,this._t=i,this.createdVertex=null,this._left=null,this._right=null}apply(){let e="redo";const t=this._edge,i=t.component,s=t.leftVertex,r=t.rightVertex;i.edges.splice(i.edges.indexOf(t),1),null==this.createdVertex&&(e="apply",this.createdVertex=new pe(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this._editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this._t,this._editGeometry.coordinateHelper.createVector()),null==this._left&&(this._left=new ue(i,s,this.createdVertex)),this._left.leftVertex.leftEdge?i.edges.push(this._left):i.edges.unshift(this._left),s.rightEdge=this._left,null==this._right&&(this._right=new ue(i,this.createdVertex,r)),i.edges.push(this._right),r.leftEdge=this._right,i.updateVertexIndex(this.createdVertex,s.index+1),this._editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}undo(){if(null==this.createdVertex||null==this._left||null==this._right)return null;const e=this._edge,t=e.component,i=this.createdVertex.leftEdge,s=this.createdVertex.rightEdge,r=i?.leftVertex,n=s?.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this._left),1),t.edges.splice(t.edges.indexOf(this._right),1),this._edge.leftVertex.leftEdge?t.edges.push(this._edge):t.edges.unshift(this._edge),r&&(r.rightEdge=e),n&&(n.leftEdge=e),r&&t.updateVertexIndex(r,r.index),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}class Ee{constructor(e,t,i){this._editGeometry=e,this._vertex=t,this._pos=i}apply(){const e=null==this._originalPosition;e&&(this._originalPosition=this._vertex.pos),this._apply(e?"apply":"redo")}undo(){this._vertex.pos=this._originalPosition,this._editGeometry.notifyChanges({operation:"undo",updatedVertices:[this._vertex]})}accumulate(e){return e instanceof Ee&&e._vertex===this._vertex&&(this._pos=e._pos,this._apply("apply"),!0)}_apply(e){this._vertex.pos=this._pos,this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:e,updatedVertices:[this._vertex]})}}class Te{constructor(e,t){this._editGeometry=e,this._component=t,this._createdEdge=null}apply(){let e="redo";if(null==this._createdEdge){e="apply";const t=this._component.getFirstVertex(),i=this._component.getLastVertex();if(this._component.isClosed()||this._component.vertices.length<3||null==t||null==i)return;this._createdEdge=new ue(this._component,i,t)}this._createdEdge.leftVertex.rightEdge=this._createdEdge,this._createdEdge.rightVertex.leftEdge=this._createdEdge,this._component.edges.push(this._createdEdge),this._editGeometry.notifyChanges({operation:e})}undo(){null!=this._createdEdge&&(h(this._component.edges,this._createdEdge),this._createdEdge.leftVertex.rightEdge=null,this._createdEdge.rightVertex.leftEdge=null,this._editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}class Pe{constructor(e,t,i,s){this._editGeometry=e,this.dx=t,this.dy=i,this.dz=s,this._firstTime=!0}apply(){const e=this._firstTime?"apply":"redo";this._firstTime=!1,this._apply(e,this.dx,this.dy,this.dz)}undo(){this._apply("undo",-this.dx,-this.dy,-this.dz)}accumulate(e){const t=this._editGeometry.geometry;return e instanceof Pe&&e._editGeometry.geometry===t&&(this._apply("apply",e.dx,e.dy,e.dz),this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz,!0)}_apply(e,t,i,s){const r=this._editGeometry.geometry;r.offset(t,i,s);const n=this._editGeometry.components[0].getFirstVertex();if(!n)return;const o=this._editGeometry.coordinateHelper;n.pos=o.pointToVector(r.origin),this._editGeometry.notifyChanges({operation:e,updatedVertices:[n]})}}class Me{constructor(e,t,i,s){this._helper=e,this.dx=t,this.dy=i,this.dz=s}_move(e,t,i,s){this._helper.addDelta(e.pos,t,i,s)}apply(e){this._move(e,this.dx,this.dy,this.dz)}undo(e){this._move(e,-this.dx,-this.dy,-this.dz)}canAccumulate(e){return e instanceof Me}accumulate(e,t){this._move(e,t.dx,t.dy,t.dz)}accumulateParams(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}}class we{get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}constructor(e,t,i,s=0,r=Re.IMMEDIATE){this._helper=e,this._planeType=t,this._edge=i,this.distance=s,this._plane=q(),this._offsetPlane=q(),this._minDistance=-1/0,this._maxDistance=1/0,this._selectedArrow=1,r===Re.IMMEDIATE&&this._initialize()}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){const e=this._toXYZ(this._edge.leftVertex.pos),t=this._toXYZ(this._edge.leftVertex.leftEdge?.leftVertex?.pos),s=this._toXYZ(this._edge.rightVertex.pos),r=this._toXYZ(this._edge.rightVertex.rightEdge?.rightVertex?.pos);this._edgeDirection=C(i(),e,s),t?(this._left=this._computeNeighbor(e,t,this._edgeDirection),this._right=this._computeNeighbor(s,r,this._edgeDirection,this._left)):(this._right=this._computeNeighbor(s,r,this._edgeDirection),this._left=this._computeNeighbor(e,t,this._edgeDirection,this._right))}_toXYZ(e){return null!=e?this._helper.toXYZ(e):null}_pointToXYZ(e){return this._toXYZ(this._helper.pointToVector(e))}_computeNeighbor(e,t,s,r){const n=i();if(t){C(n,e,t);const i=!this._passesBisectingAngleThreshold(n,s);return{start:e,end:t,direction:i?this._bisectVectorsPerpendicular(s,n):n,isOriginalDirection:!i}}return this._helper.hasZ()?r&&(R(n,s,r.direction),R(n,n,s),S(n,n),Math.sign(n[1])!==Math.sign(s[0])&&Z(n,n,-1)):P(n,-s[1],s[0],0),{start:e,end:t,direction:n,isOriginalDirection:!0}}_passesBisectingAngleThreshold(e,t){const i=Math.abs(F(t,e));return i>=Ae&&i<=Math.PI-Ae}_bisectVectorsPerpendicular(e,t){const s=U(e,t)<0?e:G(i(),e),r=Math.abs(U(s,t));if(!(r<De||r>1-De))return this._bisectDirection(s,t);const n=R(i(),s,[0,0,1]);return S(n,n)}_bisectDirection(e,t){const s=z(i(),e,t);return S(s,s)}_initializePlane(){const e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right);U(e,t)<0&&G(t,t),W(this._left.start,this._bisectDirection(e,t),this._plane)}_computeNormalDirection(e){const t=R(i(),e.direction,this._edgeDirection);S(t,t);const s=R(i(),this._edgeDirection,t);return this._planeType===Ce.XY&&(s[2]=0),S(s,s)}_initializeDistanceConstraints(){null==this._left.end||this.requiresSplitEdgeLeft||this._updateDistanceConstraint(J(this._plane,this._left.end)),null==this._right.end||this.requiresSplitEdgeRight||this._updateDistanceConstraint(J(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}_updateIntersectDistanceConstraint(e){const t=te(e),s=this._edgeDirection,r=z(i(),this._left.start,this._left.direction),n=z(i(),this._right.start,this._right.direction),o=this._pointInBasis2D(V(),t,s,this._left.start),a=this._pointInBasis2D(V(),t,s,r),h=this._pointInBasis2D(V(),t,s,this._right.start),c=this._pointInBasis2D(V(),t,s,n),[l]=se({start:a,end:o,type:re.LINE},{start:c,end:h,type:re.LINE});if(!l)return;const d=m(V(),o,a);f(d,d);const p=m(V(),l,a),u=y(d,p),_=z(i(),r,Z(i(),this._left.direction,-u)),g=J(e,_);this._updateDistanceConstraint(g)}_pointInBasis2D(e,t,i,s){return e[0]=K(t,s),e[1]=K(i,s),e}_offset(e,t){Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),Q(this._offsetPlane,this._plane),this._offsetPlane[3]-=t;const s=(e,t,s)=>null!=t&&ie(this._offsetPlane,e,z(i(),e,t),s),r=i();(e===this._edge.leftVertex?s(this._left.start,this._left.direction,r):s(this._right.start,this._right.direction,r))&&this._helper.copy(this._helper.fromXYZ(r,void 0,this._helper.getM(e.pos)),e.pos)}selectArrowFromStartPoint(e){this._selectedArrow=$(this.plane,this._pointToXYZ(e))?1:-1}get selectedArrow(){return this._selectedArrow}signedDistanceToPoint(e){return J(this.plane,this._pointToXYZ(e))}clampedStartAndEnd(e){const t=this._helper.toXYZ(this._helper.pointToVector(e)),s=ee(this._plane,t,i()),r=J(this._plane,t),n=H(r,this._minDistance,this._maxDistance);return M(t,s,t,n/r),{start:s,end:t}}apply(e){this._offset(e,this.distance)}undo(e){this._offset(e,0)}canAccumulate(e){return e instanceof we&&this._edge.leftVertex.index===e._edge.leftVertex.index&&this._edge.rightVertex.index===e._edge.rightVertex.index&&this._edge.component===e._edge.component&&this._maybeEqualsVec3(this._left.direction,e._left.direction)&&this._maybeEqualsVec3(this._right.direction,e._right.direction)&&D(te(this._plane),te(e._plane))}accumulate(e,t){const i=this._plane[3]-t._plane[3]+t.distance;this._offset(e,i)}accumulateParams(e){const t=e.distance-e._plane[3];this.distance=t+this._plane[3]}clone(){const e=new we(this._helper,this._planeType,this._edge,this.distance,Re.DEFERRED);return Q(e._plane,this._plane),Q(e._offsetPlane,this._offsetPlane),e._maxDistance=this._maxDistance,e._minDistance=this._minDistance,e._left=this._cloneNeighbor(this._left),e._right=this._cloneNeighbor(this._right),e._edgeDirection=A(i(),this._edgeDirection),e}_maybeEqualsVec3(e,t){return null==e&&null==t||null!=e&&null!=t&&D(e,t)}_cloneNeighbor({start:e,end:t,direction:s,isOriginalDirection:r}){return{start:A(i(),e),end:null!=t?A(i(),t):null,direction:A(i(),s),isOriginalDirection:r}}}const Ae=B(15),De=.001;var Ce,Re,Se;!function(e){e[e.XYZ=0]="XYZ",e[e.XY=1]="XY"}(Ce||(Ce={})),function(e){e[e.IMMEDIATE=0]="IMMEDIATE",e[e.DEFERRED=1]="DEFERRED"}(Re||(Re={}));class Ze{constructor(e,t,i=ae.CUMULATIVE){this.origin=e,this.angle=t,this._accumulationType=i}_rotate(e,t){x(e.pos,e.pos,this.origin,t)}apply(e){this._rotate(e,this.angle)}undo(e){this._rotate(e,-this.angle)}canAccumulate(e){return e instanceof Ze&&a(this.origin,e.origin)}accumulate(e,t){const i=t._accumulationType===ae.REPLACE;this._rotate(e,i?t.angle-this.angle:t.angle)}accumulateParams(e){const t=e._accumulationType===ae.REPLACE;this.angle=t?e.angle:this.angle+e.angle}}class Ue{constructor(e,t,i,s,r=ae.CUMULATIVE){this.origin=e,this.axis1=t,this.factor1=i,this.factor2=s,this._accumulationType=r,this.axis2=E(t[1],-t[0])}_scale(e,t,i){v(e.pos,e.pos,this.origin,this.axis1,t),v(e.pos,e.pos,this.origin,this.axis2,i)}apply(e){this._scale(e,this.factor1,this.factor2)}undo(e){this._scale(e,1/this.factor1,1/this.factor2)}canAccumulate(e){return e instanceof Ue&&a(this.origin,e.origin)&&a(this.axis1,e.axis1)}accumulate(e,t){t._accumulationType===ae.REPLACE?this._scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this._scale(e,t.factor1,t.factor2)}accumulateParams(e){const t=e._accumulationType===ae.REPLACE;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}class Ge{constructor(e,t){this._editGeometry=e,this._newPositions=t}apply(){const e=null==this._originalPositions?"apply":"redo";if(!this._originalPositions){const e=this._editGeometry.coordinateHelper;this._originalPositions=this._editGeometry.allVertices.map((t=>e.clone(t.pos)))}this._apply(e,this._newPositions)}undo(){this._originalPositions&&this._apply("undo",this._originalPositions)}accumulate(e){return e instanceof Ge&&(this._newPositions=e._newPositions,this._apply("apply",this._newPositions),!0)}_apply(e,t){const i=this._editGeometry.coordinateHelper,s=this._editGeometry.allVertices;for(let e=0;e<s.length;e++)i.copy(t[e],s[e].pos);this._editGeometry.components.forEach((e=>e.unnormalizeVertexPositions())),this._editGeometry.notifyChanges({operation:e,updatedVertices:s})}}const ze=Symbol();class be{constructor(e){this._operations=[],this._closed=!1,this[Se]=!0,e&&(this._operations=e,this._closed=!0)}close(){this._closed=!0}apply(){for(const e of this._operations)e.apply()}undo(){for(let e=this._operations.length-1;e>=0;e--)this._operations[e].undo()}accumulate(e){if(this._closed)return!1;const t=this._operations.length?this._operations[this._operations.length-1]:null;return t&&t.accumulate(e)||(this._operations.push(e),e.apply()),!0}}Se=ze;class Le extends e{constructor(e,t){super(),this.data=e,this.viewingMode=t,this._undoStack=[],this._redoStack=[],this._listener=this.data.on("change",(e=>{e.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:e.addedVertices,operation:e.operation}),e.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:e.removedVertices,operation:e.operation}),e.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:e.updatedVertices,operation:e.operation})}))}destroy(){this._listener.remove()}splitEdge(e,t){return this._apply(new Ve(this.data,e,t))}updateVertices(e,t,i=oe.ACCUMULATE_STEPS){return this._apply(new xe(this.data,e,t),i)}move(e,t,i,s=oe.ACCUMULATE_STEPS){return fe(this.data)?this._apply(new Pe(this.data,e,t,i),s):this.moveVertices(this.data.allVertices,e,t,i,s)}moveVertices(e,t,i,s,r=oe.ACCUMULATE_STEPS){return fe(this.data)?this._apply(new Pe(this.data,t,i,s),r):this.updateVertices(e,new Me(this.data.coordinateHelper,t,i,s),r)}scale(e,t,i,s,r=oe.ACCUMULATE_STEPS,n=ae.CUMULATIVE){return this.scaleVertices(this.data.allVertices,e,t,i,s,r,n)}scaleVertices(e,t,i,s,r,n=oe.ACCUMULATE_STEPS,o=ae.CUMULATIVE){return this.updateVertices(e,new Ue(t,i,s,r,o),n)}rotate(e,t,i=oe.ACCUMULATE_STEPS,s=ae.CUMULATIVE){return this.rotateVertices(this.data.allVertices,e,t,i,s)}rotateVertices(e,t,i,s=oe.ACCUMULATE_STEPS,r=ae.CUMULATIVE){return this.updateVertices(e,new Ze(t,i,r),s)}removeVertices(e){return this._apply(new ve(this.data,e,this._minNumVerticesPerType))}appendVertex(e){return 0===this.data.components.length?null:this._apply(new ye(this.data,this.data.components[0],e))}setVertexPosition(e,t){return this._apply(new Ee(this.data,e,t))}offsetEdge(e,t,i,s=oe.ACCUMULATE_STEPS){return this.updateVertices([t.leftVertex,t.rightVertex],new we(this.data.coordinateHelper,e,t,i),s)}trySetGeometry(e,t=oe.ACCUMULATE_STEPS){const{data:i}=this,{coordinateHelper:s}=i;if(i.type!==e.type||!i.spatialReference.equals(e.spatialReference)||s.hasZ()!==e.hasZ||s.hasM()!==e.hasM||!o(i.geometry,e)||fe(i))return;const r=Array.from(ge.fromGeometry(e,this.viewingMode).iterateVertices(),(e=>e.pos));return this.setVertexPositions(r,t)}setVertexPositions(e,t=oe.ACCUMULATE_STEPS){return this._apply(new Ge(this.data,e),t)}createResetState(){if(fe(this.data))return this._createResetStateMesh();const e=this.data.geometry.clone();return t((()=>this.trySetGeometry(e)))}closeComponent(e){return this.data.components.includes(e)?this._apply(new Te(this.data,e)):null}canRemoveVertex(e){return e.vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new be;return this._apply(e),t((()=>e.close()))}undo(){if(this._undoStack.length>0){const e=this._undoStack.pop();return e.undo(),this._redoStack.push(e),e}return null}redo(){if(this._redoStack.length>0){const e=this._redoStack.pop();return e.apply(),this._undoStack.push(e),e}return null}get canUndo(){return this._undoStack.length>0}get canRedo(){return this._redoStack.length>0}get lastOperation(){return this._undoStack.length>0?this._undoStack[this._undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}_apply(e,t=oe.ACCUMULATE_STEPS){return t!==oe.NEW_STEP&&null!=this.lastOperation&&this.lastOperation.accumulate(e)||(e.apply(),this._undoStack.push(e),this._redoStack=[]),e}_createResetStateMesh(){if(!fe(this.data))return t();const e=this.data.geometry,{vertexSpace:i}=e;if(i.origin){const s=n(i.origin);return t((()=>{e.vertexSpace.origin=s}))}const s=e.vertexAttributes.clonePositional();return t((()=>{e.vertexAttributes=s,e.vertexAttributesChanged()}))}static fromGeometry(e,t){return new Le(ge.fromGeometry(e,t),t)}}export{oe as A,_e as C,Le as E,Me as M,we as O,Ce as P,Ze as R,Ue as S,xe as U,ge as a,ae as b,de as c};

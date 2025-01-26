// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../EditGeometry"],function(f,g){class h{constructor(b,a,c=0){this._editGeometry=b;this._vertices=a;this._minNumberOfVertices=c;this.removedVertices=null}apply(){let b="redo";if(null==this.removedVertices){const a=this.removedVertices=[];this._vertices.forEach(c=>{c=this._removeVertex(c);null!=c&&a.push(c)});b="apply"}else this.removedVertices.forEach(a=>{this._removeVertex(a.removedVertex)});this._editGeometry.notifyChanges({operation:b,removedVertices:this._vertices})}undo(){this.removedVertices?.forEach(b=>
{this._undoRemoveVertex(b)});this._editGeometry.notifyChanges({operation:"undo",addedVertices:this._vertices})}accumulate(){return!1}_removeVertex(b){const a=b.component;if(a.vertices.length<=this._minNumberOfVertices)return null;const c={removedVertex:b,createdEdge:null},e=b.leftEdge,d=b.rightEdge;a.vertices.splice(a.vertices.indexOf(b),1);e&&(a.edges.splice(a.edges.indexOf(e),1),e.leftVertex.rightEdge=null);d&&(a.edges.splice(a.edges.indexOf(d),1),d.rightVertex.leftEdge=null);0===b.index&&d&&0<
this._vertices.length&&a.swapVertices(a.vertices.indexOf(d.rightVertex),0);e&&d&&(c.createdEdge=new g.Edge(a,e.leftVertex,d.rightVertex),a.edges.push(c.createdEdge));d&&a.updateVertexIndex(d.rightVertex,d.rightVertex.index-1);return c}_undoRemoveVertex(b){const a=b.removedVertex,c=b.removedVertex.component,e=a.leftEdge,d=a.rightEdge;b.createdEdge&&c.edges.splice(c.edges.indexOf(b.createdEdge),1);c.vertices.push(a);e&&(c.edges.push(e),e.leftVertex.rightEdge=e);d&&(c.edges.push(d),d.rightVertex.leftEdge=
d);c.updateVertexIndex(a,a.index)}}f.RemoveVertices=h;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
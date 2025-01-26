// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../geometry ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../ViewingMode ./DrawAction ./DrawTool ./input/DrawEvents ./support/surfaceCoordinateSystems ../input/InputManager ../interactive/keybindings ../interactive/editGeometry/EditGeometry ../interactive/editGeometry/EditGeometryOperations ../support/screenUtils ../../geometry/Point".split(" "),function(h,g,m,v,
w,x,n,k,p,q,e,r,b,d,l,t,f,u){g=class extends p{constructor(a){super(a);this._addVertexOnPointerUp=this._panEnabled=this._isDragging=!1;this.viewAlignedCoordinateSystem=this._drawTool=null;this.mode="freehand"}initialize(){"2d"===this.view.type?this._addViewHandles():this._addDrawTool()}destroy(){this._removeDrawTool();this.emit("destroy")}complete(){this._completeDrawing()}_getGeometryZValue(){return this.hasZ&&0<this.vertices.length?this.vertices[0][2]:this.defaultZ}_addViewHandles(){"click"===this.mode?
this.addHandles(this._getClickModeViewHandles()):this.addHandles(this._getDragModeViewHandles())}_getDragModeViewHandles(){return[this.view.on("immediate-click",a=>{a.stopPropagation();a.mapPoint&&!this._panEnabled&&null!=this.getCoordsFromScreenPoint(f.createScreenPointFromEvent(a))&&(this._vertexAddHandler(a),this._drawCompleteHandler(a))},b.ViewEventPriorities.TOOL),this.view.on("pointer-down",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),this._panEnabled||(this._resetGeometry(),
this._addVertexOnPointerUp=!0,this._cursorScreenPoint=f.createScreenPointFromEvent(a),this._activePointerId=a.pointerId,this._vertexAddHandler(a),this._isDragging=!1,"touch"===a.pointerType&&this._updateCursor()))},b.ViewEventPriorities.TOOL),this.view.on("pointer-move",a=>{this._abortSnapping();null==this._activePointerId&&"touch"!==a.pointerType&&(this._cursorScreenPoint=f.createScreenPointFromEvent(a),this._updateCursor())},b.ViewEventPriorities.TOOL),this.view.on("pointer-drag",a=>{this._shouldHandlePointerEvent(a)&&
(this._abortSnapping(),this._isDragging=!0,this._cursorScreenPoint=f.createScreenPointFromEvent(a),this._updateCursor())},b.ViewEventPriorities.TOOL),this.view.on("pointer-up",a=>{this._shouldHandlePointerEvent(a)&&this._addVertexOnPointerUp&&(this._abortSnapping(),this._activePointerId=null,this._isDragging&&this._vertexAddHandler(a),2===this._committedVertices.length&&this._drawCompleteHandler(a),this._isDragging=!1)},b.ViewEventPriorities.TOOL),this.view.on("key-down",a=>{a.key===d.sketchKeys.complete&&
this._cursorScreenPoint?(this._abortSnapping(),this._vertexAddHandler(a),this._drawCompleteHandler(a)):a.key===d.sketchKeys.pan&&(this._panEnabled=!0)},b.ViewEventPriorities.TOOL),this.view.on("key-up",a=>{a.key===d.sketchKeys.pan&&(this._panEnabled=!1)},b.ViewEventPriorities.TOOL),this.view.on("drag",a=>{null!=this._activePointerId&&a.stopPropagation()},b.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],a=>{a.stopPropagation()},b.ViewEventPriorities.TOOL)]}_getClickModeViewHandles(){return[this.view.on("pointer-down",
a=>{this._abortSnapping();this._cursorScreenPoint=f.createScreenPointFromEvent(a);this._activePointerId=a.pointerId;this._isDragging=!1;"touch"===a.pointerType&&this._updateCursor()},b.ViewEventPriorities.TOOL),this.view.on("pointer-move",a=>{this._abortSnapping();this._cursorScreenPoint=f.createScreenPointFromEvent(a);null==this._activePointerId&&"touch"!==a.pointerType&&this._updateCursor()},b.ViewEventPriorities.TOOL),this.view.on("pointer-drag",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),
this._isDragging=!0)},b.ViewEventPriorities.TOOL),this.view.on("pointer-up",a=>{this._shouldHandlePointerEvent(a)&&(this._abortSnapping(),this._activePointerId=null,a.stopPropagation(),this._isDragging||this._vertexAddHandler(a),2!==this.vertices.length||this._isDragging||this._drawCompleteHandler(a),this._isDragging=!1)},b.ViewEventPriorities.TOOL),this.view.on("key-down",a=>{a.key===d.sketchKeys.vertexAdd&&this._cursorScreenPoint&&(this._vertexAddHandler(a),2===this.vertices.length&&this._drawCompleteHandler(a));
a.key===d.sketchKeys.complete&&this._cursorScreenPoint&&2===this.vertices.length&&(this._vertexAddHandler(a),this._drawCompleteHandler(a))},b.ViewEventPriorities.TOOL)]}_addDrawTool(){const a=new q.DrawTool({view:this.view,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"segment",mode:this.mode});this._drawTool=a;this.view.addAndActivateTool(a);this.addHandles([a.on("vertex-add",c=>{1===c.vertices.length&&this.emit("vertex-add",new e.VertexAddEvent(this.view,c.vertices[0].vertexIndex,
a.getVertexCoords()))}),a.on("cursor-update",c=>{1===c.vertices.length&&this.emit("cursor-update",new e.CursorUpdateEvent(this.view,c.vertices[0].vertexIndex,a.getVertexCoords()))}),a.on("complete",c=>{this.emit("draw-complete",new e.DrawCompleteEvent(a.getVertexCoords()));this._removeDrawTool()}),this.view.on("key-down",c=>{c.key!==d.sketchKeys.vertexAdd||c.repeat||"click"!==this.mode?c.key!==d.sketchKeys.complete||c.repeat||a.completeCreateOperation():0<a.drawOperation.numCommittedVertices?a.completeCreateOperation():
a.drawOperation.commitStagedVertex()},b.ViewEventPriorities.TOOL)])}_removeDrawTool(){this._drawTool&&(this.view.tools.remove(this._drawTool),this._drawTool=null)}_addVertex(a){a=this._coordinateHelper.arrayToVector(a);this._isDuplicateOfLastVertex(a)||(this._lastVertexUnsnapped=this._stagedVertexUnsnapped,this._popCursorVertex(),this._editGeometryOperations.appendVertex(a),1===this._committedVertices.length&&(this.viewAlignedCoordinateSystem=r.createViewAlignedCoordinateSystem(this.view,this._committedVertices[0])),
a=new e.VertexAddEvent(this.view,this._committedVertices.length-1,this.vertices),this.emit("vertex-add",a))}_updateCursor(){this._popCursorVertex();if(this._cursorScreenPoint){var a=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);null!=a&&this._pushCursorVertex(a.vertex,()=>this.emit("cursor-update",new e.CursorUpdateEvent(this.view,this._activeComponent.vertices.length,this.vertices,null!=this._stagedVertex?new u(this._stagedVertex):null)))}}_completeDrawing(){if(this._drawTool)this._drawTool.completeCreateOperation(),
this.removeAllHandles();else if(this._activePointerId=null,this._popCursorVertex(),this._cursorScreenPoint=null,this._isDragging=!1,this._abortSnapping(),null!=this._snappingManager&&this._snappingManager.doneSnapping(),!(1>this.vertices.length)){var a=new e.DrawCompleteEvent(this.vertices);this.emit("draw-complete",a);a.defaultPrevented||this.removeAllHandles()}}_resetGeometry(){this._editGeometryOperations.destroy();this._editGeometryOperations=new t.EditGeometryOperations(new l.EditGeometry("polygon",
this._coordinateHelper),k.ViewingMode.Local);this._activeComponent=new l.Component(this._coordinateHelper.spatialReference,k.ViewingMode.Local);this._editGeometryOperations.data.components.push(this._activeComponent)}};h.__decorate([m.property({type:["freehand","click"]})],g.prototype,"mode",void 0);return g=h.__decorate([n.subclass("esri.views.draw.SegmentDrawAction")],g)});
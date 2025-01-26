// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Evented ../../core/maybe ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../support/elevationInfoUtils ./DrawOperation ./drawSurfaces ../interactive/InteractiveToolBase".split(" "),function(b,c,h,k,d,q,r,t,l,m,n,g,p){b.DrawTool=class extends h.EventedMixin(p.InteractiveToolBase){constructor(a){super(a);this.defaultZ=0;this.elevationInfo=null;this.hasZ=
!0;this.snapToScene=this.mode=null;this.type="draw-3d"}initialize(){const a=this.view,f=m.getEffectiveElevationInfo(this.hasZ,this.elevationInfo);this.drawOperation=new n.DrawOperation({view:a,manipulators:this.manipulators,geometryType:this.geometryType,drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:"3d"===a.type?new g.SceneDrawSurface(a,f):null,elevationDrawSurface:"3d"===a.type?new g.ElevationDrawSurface(f,this.defaultZ,a):null,hasM:!1,
elevationInfo:f});this.addHandles([this.drawOperation.on("vertex-add",e=>this.onVertexAdd(e)),this.drawOperation.on("vertex-remove",e=>this.onVertexRemove(e)),this.drawOperation.on("vertex-update",e=>this.onVertexUpdate(e)),this.drawOperation.on("cursor-update",e=>this.onCursorUpdate(e)),this.drawOperation.on("complete",e=>this.onComplete(e))]);this.finishToolCreation()}destroy(){this.drawOperation=k.destroyMaybe(this.drawOperation);this._set("view",null)}set enabled(a){this.drawOperation.interactive=
a;this._set("enabled",a)}get updating(){return this.drawOperation?.updating??!1}completeCreateOperation(){this.drawOperation.complete()}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}getVertexCoords(){return this.drawOperation.geometryIncludingUncommittedVertices}onInputEvent(a){this.drawOperation.onInputEvent(a)}canRedo(){return this.drawOperation.canRedo}canUndo(){return this.drawOperation.canUndo}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo()}onComplete(a){this.emit("complete",
a)}onCursorUpdate(a){this.emit("cursor-update",a)}onVertexAdd(a){this.emit("vertex-add",a)}onVertexRemove(a){this.emit("vertex-remove",a)}onVertexUpdate(a){this.emit("vertex-update",a)}};c.__decorate([d.property({constructOnly:!0,nonNullable:!0})],b.DrawTool.prototype,"defaultZ",void 0);c.__decorate([d.property()],b.DrawTool.prototype,"drawOperation",void 0);c.__decorate([d.property({constructOnly:!0})],b.DrawTool.prototype,"elevationInfo",void 0);c.__decorate([d.property({value:!0})],b.DrawTool.prototype,
"enabled",null);c.__decorate([d.property({constructOnly:!0})],b.DrawTool.prototype,"geometryType",void 0);c.__decorate([d.property({constructOnly:!0})],b.DrawTool.prototype,"hasZ",void 0);c.__decorate([d.property({constructOnly:!0})],b.DrawTool.prototype,"mode",void 0);c.__decorate([d.property()],b.DrawTool.prototype,"snapToScene",void 0);c.__decorate([d.property({readOnly:!0})],b.DrawTool.prototype,"type",void 0);c.__decorate([d.property({readOnly:!0})],b.DrawTool.prototype,"updating",null);c.__decorate([d.property({constructOnly:!0,
nonNullable:!0})],b.DrawTool.prototype,"view",void 0);b.DrawTool=c.__decorate([l.subclass("esri.views.draw.DrawTool")],b.DrawTool);Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
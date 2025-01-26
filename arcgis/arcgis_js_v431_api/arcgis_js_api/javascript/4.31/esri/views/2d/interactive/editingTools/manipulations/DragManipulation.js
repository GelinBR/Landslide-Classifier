// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./Manipulation ../../../../interactive/dragEventPipeline ../../../../interactive/GraphicManipulator ../../../../interactive/editGeometry/interfaces ../../../../interactive/support/utils".split(" "),function(m,n,p,x,q,y){class z extends n.Manipulation{constructor(b){super();this._view=b.view;this._tool=b.tool;this._graphic=b.graphic;this._manipulator=this._createManipulator();this.forEachManipulator(k=>this._tool.manipulators.add(k))}destroy(){this.forEachManipulator(b=>{this._tool.manipulators.remove(b);
b.destroy()});this._graphic=this._manipulator=this._view=this._tool=null}forEachManipulator(b){b(this._manipulator,n.ManipulatorType.TRANSLATE_XY)}createDragPipeline(b,k){let r=null,d=null,e=0,f=0,g=0;const {offsetX:t,offsetY:u,size:v}=y.getSymbolInfo(this._graphic.symbol);return p.createManipulatorDragEventPipeline(this._manipulator,(D,A)=>{A.next(a=>{if("start"===a.action){const c=b();r=c.editGeometryOperations;d=c.constraints}return a}).next(p.screenToMap(this._view)).next(a=>{const {x:c,y:h,z:w}=
a.mapEnd;if(d&&(c+t<d.xmin||h+u-v<d.ymin||c+t>d.xmax||h+u-v>d.ymax))return a;if("start"===a.action||0===e&&0===f&&0===g)e=a.mapStart.x,f=a.mapStart.y,g=a.mapStart.z;var l=c-e;const B=h-f,C=w-g;e=c;f=h;g=w;l=r.move(l,B,C,"start"===a.action?q.AccumulationBehavior.NEW_STEP:q.AccumulationBehavior.ACCUMULATE_STEPS);k(a,l);return a})})}_createManipulator(){return new x.GraphicManipulator({view:this._view,graphic:this._graphic,selectable:!0,cursor:"move"})}}m.DragManipulation=z;Object.defineProperty(m,Symbol.toStringTag,
{value:"Module"})});
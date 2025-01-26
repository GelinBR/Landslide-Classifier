// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../core/asyncUtils ../../../core/handleUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/reactiveUtils ../../../support/elevationInfoUtils ../../../views/3d/interactive/editingTools/settings ../../../views/3d/interactive/visualElements/OutlineVisualElement ../../../views/3d/layers/graphics/GraphicState ../../../views/3d/webgl-engine/lib/Material ../../../views/support/layerViewUtils".split(" "),function(g,k,h,e,l,m,n,p,q,r,t,u){function f(a){return null!=a.geometry&&
"polyline"===a.geometry.type}class v{constructor(a){this._params=a;this._visualElementHandle=this._highlightHandle=this._highlightTask=null;this._settings=new p.Settings({getTheme:()=>this._params.view.effectiveTheme})}destroy(){this.remove()}remove(){this._highlightTask=e.abortMaybe(this._highlightTask);this._highlightHandle=e.removeMaybe(this._highlightHandle);this._visualElementHandle=e.removeMaybe(this._visualElementHandle)}showHighlight(a){this.remove();if(null!=a&&f(a)){var b=a.layer;this._highlightTask=
k.createTask(async c=>{const d=await this._params.view.whenLayerView(b);l.throwIfAborted(c);u.highlightsSupported(d)&&(this._highlightHandle=d.highlight(a))})}}showReshaping(a){this.remove();if(null!=a){var b=this._params.view,c=new q.OutlineVisualElement({view:b,geometry:f(a)?a.geometry:null,attached:!1,elevationInfo:n.getGraphicEffectiveElevationInfo(a),renderOccluded:t.RenderOccludedFlag.OccludeAndTransparentStencil,isDecoration:!0}),d=new r.GraphicState({graphic:a});b=[m.watch(()=>d.isDraped,
w=>{c.isDraped=w}),d.on("changed",()=>{c.geometry=f(a)?a.geometry:null}),b.trackGraphicState(d),b.maskOccludee(a),h.destroyHandle(c)];this._settings.visualElements.lineObjects.outline.apply(c);c.attached=!0;this._visualElementHandle=h.handlesGroup(b)}}}g.InputRepresentation3D=v;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
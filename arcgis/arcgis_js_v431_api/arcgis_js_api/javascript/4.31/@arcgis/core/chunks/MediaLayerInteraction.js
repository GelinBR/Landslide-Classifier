/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import{m as o,d as s,a as i}from"./handleUtils.js";import{debounce as r}from"../core/promiseUtils.js";import{initial as n}from"../core/reactiveUtils.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{U as d}from"./UpdatingHandles.js";import{V as c}from"./InputManager.js";import"../core/Handles.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/Error.js";import"../config.js";import"./asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./ensureType.js";import"./shared.js";import"./SimpleObservable.js";import"./Queue.js";import"../core/signal.js";const p=Symbol(),m=Symbol(),h=Symbol();let u=class extends t{constructor(e){super(e),this._tool=null,this._updatingHandles=new d,this.enabled=!1,this._onPointerMove=r((async e=>{const t=await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e));this.destroyed||(this.removeHandles(m),t&&t!==this.selectedElement&&(this.view.cursor="pointer",this.addHandles(o((()=>this.view.cursor=null)),m)))}))}initialize(){this.addHandles(s(this._updatingHandles)),this._updatingHandles.add((()=>this.enabled),(e=>this._setEnabled(e)),n),this._updatingHandles.add((()=>this._preferredInteractionTool),(()=>this._preferredInteractionToolChanged()))}get _validatedSelectedElement(){const e=this.selectedElement;if(!e)return null;const{layer:{source:t}}=this;return t?"hasElement"in t?t.hasElement(e)?e:null:t===e?e:null:null}get _preferredInteractionTool(){return this.options?.tool??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(e){if(this.removeHandles(p),!e)return;const{view:t}=this;this.addHandles([t.on("immediate-click",(e=>this._onClick(e)),c.TOOL),t.on("pointer-move",(e=>this._onPointerMove(e).catch((()=>{}))),c.TOOL),t.on("key-down",(e=>{"z"===e.key&&this._tool?.canUndo()&&(this._tool.undo(),e.stopPropagation()),"r"===e.key&&this._tool?.canRedo()&&(this._tool.redo(),e.stopPropagation())})),this._updatingHandles.add((()=>this._validatedSelectedElement),(e=>this._selectedElementChanged(e)),n),o((()=>{t.cursor=null,this._removeTool()}))],p)}async _findElementAtScreenPoint(e){const t=(await this.view.hitTest(e,{include:[this.layer]})).results[0];return"media"===t?.type?t.element:null}async _onClick(e){await this._updatingHandles.addPromise(e.async((async()=>{const t=await this._findElementAtScreenPoint(e);this.destroyed||(t&&e.stopPropagation(),this.selectedElement=t,this.selectedElement&&(this.view.cursor=null))})))}_preferredInteractionToolChanged(){const{_tool:e}=this;e&&(this._preferredInteractionTool===e.type||this._updatingHandles.addPromise(this._recreateTool()))}async _recreateTool(){this.removeHandles(h),this._removeTool();const e=this._validatedSelectedElement;if(!e)return;const t=new AbortController;this.addHandles(i(t),h);const{TransformTool:s,ControlPointsTransformTool:r}=await import("./editingTools.js");if(t.signal.aborted)return;const{view:n}=this;switch(this._preferredInteractionTool){case"transform":this._tool=new s({target:e,view:n});break;case"reshape":this._tool=new r({mediaElement:e,view:n})}this.addHandles([o((()=>{this._tool&&(n.tools.remove(this._tool),this._tool=null)}))],this._tool),n.addAndActivateTool(this._tool)}_removeTool(){this._tool&&this.removeHandles(this._tool)}async _selectedElementChanged(e){e?.georeference?await this._updatingHandles.addPromise(this._recreateTool()):this._removeTool()}};e([a()],u.prototype,"_validatedSelectedElement",null),e([a()],u.prototype,"_preferredInteractionTool",null),e([a({constructOnly:!0})],u.prototype,"view",void 0),e([a({constructOnly:!0})],u.prototype,"layer",void 0),e([a()],u.prototype,"selectedElement",void 0),e([a()],u.prototype,"enabled",void 0),e([a()],u.prototype,"options",void 0),e([a()],u.prototype,"updating",null),u=e([l("esri.views.2d.layers.support.MediaLayerInteraction")],u);export{u as MediaLayerInteraction};

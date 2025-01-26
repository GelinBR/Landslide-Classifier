/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../core/Collection.js";import e from"../../core/Evented.js";import{watch as i,on as o,initial as r}from"../../core/reactiveUtils.js";import{property as a}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as c}from"../../core/accessorSupport/decorators/subclass.js";import l from"../LayerList/ListItem.js";import{f as m}from"../../chunks/layerListUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../core/Identifiable.js";import"../../core/accessorSupport/decorators/cast.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../chunks/ActionSlider.js";import"../../support/actions/ActionToggle.js";import"../LayerList/ListItemPanel.js";import"../Widget.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/assets.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/componentsUtils.js";import"../../chunks/jsxWidgetSupport.js";import"../support/widget.js";import"../../chunks/accessibleHandler.js";import"../../chunks/messageBundle.js";import"../../chunks/vmEvent.js";import"../../chunks/jsxFactory.js";import"../../chunks/themeUtils.js";const n="layer-list-mode",p=s.ofType(l);let h=class extends e.EventedAccessor{constructor(t){super(t),this.catalogItems=new p,this.checkPublishStatusEnabled=!1,this.catalogLayer=null,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.view=null}initialize(){this.addHandles([i((()=>[this.catalogLayer?.loaded,this.view?.ready]),(()=>this._compileList()),r),o((()=>this.catalogLayer?.dynamicGroupLayer.layers),"change",(()=>this._compileList())),i((()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled]),(()=>this._recompileList()))])}destroy(){this.view=null,this.catalogItems.removeAll()}get state(){const{view:t,catalogLayer:s}=this;return t?.ready&&s?.loaded?"ready":t&&s?"loading":"disabled"}get totalItems(){return this.catalogItems.flatten((t=>t.children)).length}triggerAction(t,s){t&&!t.disabled&&this.emit("trigger-action",{action:t,item:s})}_createListItem(t){const{view:s,listItemCreatedFunction:e,checkPublishStatusEnabled:i,listModeDisabled:o}=this;return new l({checkPublishStatusEnabled:i,listModeDisabled:o,layer:t,listItemCreatedFunction:e,view:s})}_removeAllItems(){this.catalogItems.removeAll()}_getViewableLayers(t){return t?this.listModeDisabled?t:t.filter((t=>"hide"!==m(t))):void 0}_watchLayersListMode(t){this.removeHandles(n),t&&!this.listModeDisabled&&this.addHandles(i((()=>t.filter((t=>"listMode"in t)).map((t=>t.listMode)).toArray()),(()=>this._compileList())),n)}_compileList(){const{catalogLayer:t}=this;if(!t?.loaded)return;const s=t?.dynamicGroupLayer.layers;this._watchLayersListMode(s);const e=this._getViewableLayers(s);e?.length?(this._createNewItems(e),this._removeItems(e),this._sortItems(e)):this._removeAllItems()}_createNewItems(t){const{catalogItems:s}=this;t.forEach((t=>{s.some((s=>s.layer===t))||s.add(this._createListItem(t))}))}_removeItems(t){const{catalogItems:s}=this,e=[];s.forEach((s=>{s&&t?.includes(s.layer)||e.push(s)})),s.removeMany(e)}_sortItems(t){const{catalogItems:s}=this;s.sort(((s,e)=>{const i=t.indexOf(s.layer),o=t.indexOf(e.layer);return i>o?-1:i<o?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}};t([a({type:p})],h.prototype,"catalogItems",void 0),t([a()],h.prototype,"checkPublishStatusEnabled",void 0),t([a()],h.prototype,"catalogLayer",void 0),t([a()],h.prototype,"listItemCreatedFunction",void 0),t([a({nonNullable:!0})],h.prototype,"listModeDisabled",void 0),t([a({readOnly:!0})],h.prototype,"state",null),t([a()],h.prototype,"totalItems",null),t([a()],h.prototype,"view",void 0),h=t([c("esri.widgets.CatalogLayerList.CatalogLayerListViewModel")],h);const d=h;export{d as default};

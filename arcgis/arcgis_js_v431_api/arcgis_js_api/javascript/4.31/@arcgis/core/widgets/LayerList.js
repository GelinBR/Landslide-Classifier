/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import o,{d as i}from"../core/Accessor.js";import{IdentifiableMixin as s}from"../core/Identifiable.js";import{L as l}from"../chunks/Logger.js";import{R as a}from"../chunks/ReactiveMap.js";import{on as r,initial as n}from"../core/reactiveUtils.js";import{property as c}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import d from"./Widget.js";import{L as m}from"../chunks/LayerListItem.js";import h from"./LayerList/LayerListViewModel.js";import u from"./LayerList/ListItem.js";import{r as y,o as g,e as _,p as f,s as L,q as v}from"../chunks/layerListUtils.js";import{l as b}from"../chunks/componentsUtils.js";import{g as I}from"../chunks/globalCss.js";import{c as w}from"../chunks/listUtils.js";import{b as j}from"../chunks/widgetUtils.js";import{m as E}from"../chunks/messageBundle.js";import{v as C}from"../chunks/vmEvent.js";import{t as k}from"../chunks/jsxFactory.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/assets.js";import"../chunks/domUtils.js";import"../core/Promise.js";import"../chunks/uuid.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/projector.js";import"../chunks/jsxWidgetSupport.js";import"../layers/catalog/catalogUtils.js";import"../chunks/actionUtils.js";import"../chunks/utils21.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../chunks/ActionSlider.js";import"../support/actions/ActionToggle.js";import"./LayerList/ListItemPanel.js";import"./support/widget.js";import"../chunks/accessibleHandler.js";import"../chunks/themeUtils.js";const F="esri-layer-list",M=`${F}__item`,O={base:F,actionMenu:`${F}__action-menu`,actionGroup:`${F}__action-group`,filterNoResults:`${F}__filter-no-results`,item:M,itemActive:`${M}--active`,itemContent:`${M}-content`,itemContentBottom:`${M}-content-bottom`,itemMessage:`${M}-message`,itemInvisible:`${M}--invisible`,itemActionIcon:`${M}-action-icon`,itemActionImage:`${M}-action-image`,itemTemporaryIcon:`${M}-temporary-icon`,itemTableIcon:`${M}-table-icon`,itemCatalogIcon:`${M}-catalog-icon`,statusIndicator:`${F}__status-indicator`,publishing:`${F}__publishing`,updating:`${F}__updating`,connectionStatus:`${F}__connection-status`,connectionStatusConnected:`${F}__connection-status--connected`,visibleToggle:`${F}__visible-toggle`,visibleIcon:`${F}__visible-icon`};let T=class extends o{constructor(){super(...arguments),this.catalogLayerList=!0,this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryLayerIndicators=!1}};e([c({type:Boolean,nonNullable:!0})],T.prototype,"catalogLayerList",void 0),e([c({type:Boolean,nonNullable:!0})],T.prototype,"closeButton",void 0),e([c({type:Boolean,nonNullable:!0})],T.prototype,"collapseButton",void 0),e([c({type:Boolean,nonNullable:!0})],T.prototype,"errors",void 0),e([c({type:Boolean,nonNullable:!0})],T.prototype,"filter",void 0),e([c({type:Boolean,nonNullable:!0})],T.prototype,"flow",void 0),e([c({type:Boolean,nonNullable:!0})],T.prototype,"heading",void 0),e([c({type:Boolean,nonNullable:!0})],T.prototype,"statusIndicators",void 0),e([c({type:Boolean,nonNullable:!0})],T.prototype,"temporaryLayerIndicators",void 0),T=e([p("esri.widgets.LayerList.LayerListVisibleElements")],T);const A=T,N=t.ofType(u);let P=class extends(s(d)){constructor(e,o){super(e,o),this._activeItem=null,this._tooltipReferenceMap=new a,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._focusLayerFlowItem=null,this._layerListMap=new a,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this._rootGroupUid=`operational-${this.uid}`,this._openedLayersController=null,this.catalogLayerList=null,this.catalogOptions=null,this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.knowledgeGraphOptions=null,this.layerTablesEnabled=new t(["knowledge-graph"]),this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.mapImageOptions=null,this.messages=null,this.messagesCommon=null,this.minDragEnabledItems=y,this.minFilterItems=g,this.openedLayers=new t,this.openedLayerLists=new t,this.selectedItems=new N,this.selectionMode="none",this.tableList=null,this.tileOptions=null,this.viewModel=new h,this.visibilityAppearance="default",this.visibleElements=new A,this._canMove=({dragEl:e,fromEl:t,toEl:o},i)=>{const s="pull"===i?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,l=_(e);if(!l?.sortable)return!1;const a=_(t),r=f(t),n=_(o),c=f(o),p=!!r&&!!c&&r===c,d={selected:l,from:a,to:n},m=t.group,h=o.group,u=a?.layer?.type??"",y=n?.layer?.type??"",g=new Set(["map-image","catalog","knowledge-graph"]);return m&&h&&"function"==typeof s?s.call(null,d):p&&!g.has(u)&&!g.has(y)&&"sublayer"!==l?.layer?.type},this._onCatalogOpen=e=>{this.openedLayers.push(e.layer.parent),this._focusLayerFlowItem=e.layer.uid},this._onTablesOpen=e=>{this.openedLayers.push(e.layer),this._focusLayerFlowItem=e.layer.uid},this._onPanelOpen=()=>{this._focusPanelFlowItem=!0},this._onSelectedDragItemLayerUidChange=e=>{this._selectedDragItemLayerUid=e},this._onTooltipReferenceChange=(e,t)=>{t?this._tooltipReferenceMap.set(e,t):this._tooltipReferenceMap.delete(e)},this._onTriggerAction=(e,t)=>{this.triggerAction(e,t)},this._clearActiveItem=()=>{this._activeItem=null},this._setActiveItem=e=>{if("default"!==this.visibilityAppearance)return;const t=Array.from(e.composedPath()).find((e=>e.classList?.contains(O.item)));this._activeItem=_(t)},this._onCalciteListOrderChange=e=>{const{_lastDragDetail:t}=this,{toEl:o,fromEl:i,dragEl:s,newIndex:l}=e;if(i&&o&&(t?.newIndex!==l||t?.dragEl!==s||t?.toEl!==o||t?.fromEl!==i))if(this._lastDragDetail=e,i!==o)this._moveLayerFromChildList({toEl:o,fromEl:i,dragEl:s,newIndex:l});else{const e=Array.from(i.children).filter((e=>e?.matches("calcite-list-item"))).map((e=>e.value));this._sortLayers(i,e)}}}initialize(){this.addHandles(r((()=>this.openedLayers),"change",(()=>this._handleOpenedLayersChange()),n))}loadDependencies(){return b({button:()=>import("../chunks/calcite-button.js"),flow:()=>import("../chunks/calcite-flow.js"),"flow-item":()=>import("../chunks/calcite-flow-item.js"),list:()=>import("../chunks/calcite-list.js"),notice:()=>import("../chunks/calcite-notice.js"),tooltip:()=>import("../chunks/calcite-tooltip.js")})}destroy(){this._destroyOpenedLayerLists(),this._tooltipReferenceMap.clear()}get _totalItems(){return this.viewModel.operationalItems.flatten((e=>e.children.filter((e=>"catalog-dynamic-group"!==e.layer.type)))).length}get _dragEnabled(){return this._totalItems>=this.minDragEnabledItems&&this.dragEnabled}get _filterEnabled(){return this._totalItems>=this.minFilterItems&&this.visibleElements.filter}get _renderedOpenLayerFlowItems(){return this.openedLayers.toArray().map((e=>this._renderLayerFlowItem(e)))}get icon(){return"layers"}set icon(e){this._overrideIfSome("icon",e)}get label(){return this.messages?.widgetLabel??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get multipleSelectionEnabled(){return i(l.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),"multiple"===this.selectionMode}set multipleSelectionEnabled(e){i(l.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.selectionEnabled?"single":"none"}get operationalItems(){return this.viewModel.operationalItems}set operationalItems(e){this.viewModel.operationalItems=e}get selectionEnabled(){return i(l.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),"none"!==this.selectionMode&&this.dragEnabled}set selectionEnabled(e){i(l.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){const e=this.viewModel?.state,t={[I.hidden]:"loading"===e,[I.disabled]:"disabled"===e},o=this.operationalItems?.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)));return k("div",{class:this.classes(O.base,I.widget,I.panel,t)},o?.length?[this._renderItemTooltips(o),this._renderItems(o)]:this._renderNoItems())}async _createFlowList(e,t){const{_layerListMap:o}=this,i=o.get(e);if(i)return i;const s="catalog"===e.type?await this._createCatalogLayerList(e):await this._createTableList(e);return t.aborted||o.set(e,s),s}async _handleOpenedLayersChange(){const{_layerListMap:e,openedLayers:t,openedLayerLists:o}=this;this._openedLayersController?.abort();const i=new AbortController,{signal:s}=i;this._openedLayersController=i,e.forEach(((o,i)=>{t.includes(i)||(o.destroy(),e.delete(i))}));const l=await Promise.all(t.map((e=>this._createFlowList(e,s))));if(s.aborted)return;o.removeAll(),o.addMany(l);const a=o.at(-1);a?"catalogLayer"in a?(this._set("catalogLayerList",a),this._set("tableList",null)):(this._set("catalogLayerList",null),this._set("tableList",a)):(this._set("catalogLayerList",null),this._set("tableList",null))}_destroyOpenedLayerLists(){this.openedLayerLists.destroyAll(),this.openedLayers.removeAll(),this._layerListMap.clear()}_renderItemTooltip(e){const{_tooltipReferenceMap:t,messages:o}=this;return e?k("calcite-tooltip",{key:`tooltip-${e.layer.uid}`,referenceElement:t.get(e.layer.uid)},o.layerIncompatibleTooltip):null}_renderItemTooltipNodes(e){return e.incompatible?this._renderItemTooltip(e):e.children?.filter((e=>!e.hidden)).toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderItemTooltips(e){return e?.toArray().map((e=>this._renderItemTooltipNodes(e)))}_renderNoItemsMessage(){return k("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return k("div",{class:O.itemMessage,key:"esri-layer-list__no-items"},k("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}async _createCatalogLayerList(e){const{default:t}=await import("./CatalogLayerList.js"),{headingLevel:o,catalogOptions:i,view:s,filterPlaceholder:l,listItemCreatedFunction:a,minFilterItems:r,selectionMode:n,visibilityAppearance:c,_onCatalogOpen:p,_onTablesOpen:d,layerTablesEnabled:m}=this;return new t({headingLevel:o,view:s,filterPlaceholder:l,listItemCreatedFunction:a,minFilterItems:r,selectionMode:n,visibilityAppearance:c,...i,catalogLayer:e,layerTablesEnabled:m,onCatalogOpen:p,onTablesOpen:d})}_getTableListParams(e){switch(e.type){case"knowledge-graph":return{...this.knowledgeGraphOptions,tables:e.tables};case"map-image":return{...this.mapImageOptions,tables:e.subtables};case"tile":return{...this.tileOptions,tables:e.subtables};default:return null}}async _createTableList(e){const{default:t}=await import("./TableList.js"),{headingLevel:o,selectionMode:i,dragEnabled:s}=this;return new t({headingLevel:o,selectionMode:i,dragEnabled:s,...this._getTableListParams(e)})}_renderLayerFlowItem(e){const{messages:t,openedLayers:o}=this,i=e.title||this.messages.untitledLayer;return k("calcite-flow-item",{afterCreate:this._focusLayerFlowItemNode,afterUpdate:this._focusLayerFlowItemNode,bind:this,"data-layer-uid":e.uid,description:i,heading:t["catalog"===e.type?"catalogLayers":"tables"],headingLevel:this.headingLevel,key:`flow-layer-list-${e.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),o.pop();const t=o.at(-1);t?this._focusLayerFlowItem=t.uid:this._focusRootFlowItem=!0}},this._layerListMap.get(e)?.render())}_renderPanelFlowItems(e){return e?e.flatten((e=>e.children)).filter((({hidden:e,panel:t})=>!e&&t?.open&&!t.disabled&&t.flowEnabled)).toArray().map((({title:e,panel:t})=>{const o=()=>this._handlePanelFlowItemBack(t);return k("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:e,heading:t.title,headingLevel:this.headingLevel,key:`flow-panel-${t.uid}`,onCalciteFlowItemBack:e=>{e.preventDefault(),o()}},t.render(),k("calcite-button",{appearance:"transparent",onclick:o,slot:"footer-actions",width:"full"},this.messagesCommon.back))})):[]}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,j(e))}_focusLayerFlowItemNode(e){this._focusLayerFlowItem===e.dataset.layerUid&&(this._focusLayerFlowItem=null,j(e))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,j(e))}_renderItems(e){const{visible:t,collapsed:o,_filterEnabled:i,_rootGroupUid:s,visibleElements:{closeButton:l,collapseButton:a,heading:r,flow:n},_dragEnabled:c,selectionMode:p,filterText:d,filterPlaceholder:m,messages:h}=this,u=[k("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:l,closed:!t,collapsed:o,collapsible:a,heading:r?h.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},k("calcite-list",{afterCreate:e=>{e.addEventListener("focusin",this._setActiveItem),e.addEventListener("focusout",this._clearActiveItem)},afterRemoved:e=>{e.removeEventListener("focusin",this._setActiveItem),e.removeEventListener("focusout",this._clearActiveItem)},canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-layer-type":s,dragEnabled:c,filterEnabled:i,filterPlaceholder:m,filterProps:w,filterText:i?d:"",group:s,key:"root-list",label:h.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:p,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListDragEnd:e=>this._handleCalciteListDragEnd(e.detail),onCalciteListFilter:e=>this.filterText=e.target?.filterText??"",onCalciteListOrderChange:e=>this._onCalciteListOrderChange(e.detail)},e?.toArray().map((e=>this._renderItem(e))),e?.length&&i?k("div",{class:O.filterNoResults,slot:"filter-no-results"},k("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e),this._renderedOpenLayerFlowItems];return t?n?k("calcite-flow",{key:"root-flow"},u):u:null}_renderItem(e,t,o){return k(m,{activeItem:this._activeItem,canMove:this._canMove,css:O,dragEnabled:this.dragEnabled,item:e,key:`layerListItem-${e.layer.uid}`,layerTablesEnabled:this.layerTablesEnabled,listModeDisabled:this.viewModel.listModeDisabled,messages:this.messages,messagesCommon:this.messagesCommon,parent:t,parentTitles:o,rootGroupUid:this._rootGroupUid,selectedDragItemLayerUid:this._selectedDragItemLayerUid,selectedItems:this.selectedItems,selectionMode:this.selectionMode,visibilityAppearance:this.visibilityAppearance,visibleElements:this.visibleElements,onAction:this._onTriggerAction,onCatalogOpen:this._onCatalogOpen,onPanelOpen:this._onPanelOpen,onSelectedDragItemLayerUidChange:this._onSelectedDragItemLayerUidChange,onTablesOpen:this._onTablesOpen,onTooltipReferenceChange:this._onTooltipReferenceChange})}_moveLayerFromChildList({toEl:e,fromEl:t,dragEl:o,newIndex:i}){const s=_(o),l=_(e),a=_(t);this.viewModel.moveListItem(s,a,l,i)}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:o,oldIndex:i}=e;t.insertBefore(o,t.children[i])}_sortLayers(e,t){if(e)if(e.group===this._rootGroupUid)L(this.view?.map?.layers,t);else{const o=_(e);if(!o)return;v(o,t)}}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:o}=this;if("none"===t)return;const i=e.target.selectedItems.map((e=>_(e))).filter(Boolean);o.removeAll(),o.addMany(i)}};e([c()],P.prototype,"_activeItem",void 0),e([c()],P.prototype,"_tooltipReferenceMap",void 0),e([c()],P.prototype,"_focusRootFlowItem",void 0),e([c()],P.prototype,"_focusPanelFlowItem",void 0),e([c()],P.prototype,"_focusLayerFlowItem",void 0),e([c()],P.prototype,"_layerListMap",void 0),e([c()],P.prototype,"_totalItems",null),e([c()],P.prototype,"_dragEnabled",null),e([c()],P.prototype,"_filterEnabled",null),e([c()],P.prototype,"_renderedOpenLayerFlowItems",null),e([c({readOnly:!0})],P.prototype,"catalogLayerList",void 0),e([c()],P.prototype,"catalogOptions",void 0),e([c()],P.prototype,"collapsed",void 0),e([c()],P.prototype,"dragEnabled",void 0),e([c()],P.prototype,"filterPlaceholder",void 0),e([c()],P.prototype,"filterText",void 0),e([c()],P.prototype,"headingLevel",void 0),e([c()],P.prototype,"icon",null),e([c()],P.prototype,"knowledgeGraphOptions",void 0),e([c()],P.prototype,"label",null),e([c()],P.prototype,"layerTablesEnabled",void 0),e([c()],P.prototype,"listItemCanGiveFunction",void 0),e([c()],P.prototype,"listItemCanReceiveFunction",void 0),e([c()],P.prototype,"listItemCreatedFunction",null),e([c()],P.prototype,"mapImageOptions",void 0),e([c(),E("esri/widgets/LayerList/t9n/LayerList")],P.prototype,"messages",void 0),e([c(),E("esri/t9n/common")],P.prototype,"messagesCommon",void 0),e([c()],P.prototype,"minDragEnabledItems",void 0),e([c()],P.prototype,"minFilterItems",void 0),e([c()],P.prototype,"multipleSelectionEnabled",null),e([c({readOnly:!0})],P.prototype,"openedLayers",void 0),e([c({readOnly:!0})],P.prototype,"openedLayerLists",void 0),e([c()],P.prototype,"operationalItems",null),e([c()],P.prototype,"selectionEnabled",null),e([c()],P.prototype,"selectedItems",void 0),e([c()],P.prototype,"selectionMode",void 0),e([c({readOnly:!0})],P.prototype,"tableList",void 0),e([c()],P.prototype,"tileOptions",void 0),e([c()],P.prototype,"view",null),e([C("trigger-action"),c({type:h})],P.prototype,"viewModel",void 0),e([c()],P.prototype,"visibilityAppearance",void 0),e([c({type:A,nonNullable:!0})],P.prototype,"visibleElements",void 0),P=e([p("esri.widgets.LayerList")],P);const U=P;export{U as default};

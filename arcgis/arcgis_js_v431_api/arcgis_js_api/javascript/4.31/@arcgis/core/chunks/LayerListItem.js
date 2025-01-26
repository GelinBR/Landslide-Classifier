/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{isLayerFromCatalog as n}from"../layers/catalog/catalogUtils.js";import{g as s,a as o}from"./actionUtils.js";import a from"../widgets/Widget.js";import{a as l,l as r,b as c,c as d,d as p,e as m,h as g}from"./layerListUtils.js";import{l as u}from"./componentsUtils.js";import{t as h}from"./jsxFactory.js";import{b as y}from"./widgetUtils.js";var b;let v=b=class extends a{constructor(e){super(e),this.dragEnabled=!1,this.listModeDisabled=!1,this.parent=null,this.parentTitles=null,this.viewModel=null,this._onActionMenuOpen=e=>{this.item.actionsOpen=e.target.open},this._setTooltipReference=e=>{this.onTooltipReferenceChange?.(this.item.layer.uid,e)},this._removeTooltipReference=()=>{this.onTooltipReferenceChange?.(this.item.layer.uid,null)}}loadDependencies(){return u({"action-group":()=>import("./calcite-action-group.js"),"action-menu":()=>import("./calcite-action-menu.js"),action:()=>import("./calcite-action.js"),icon:()=>import("./calcite-icon.js"),"list-item":()=>import("./calcite-list-item.js"),list:()=>import("./calcite-list.js"),notice:()=>import("./calcite-notice.js")})}render(){const e=this.parentTitles??[],{_title:t,item:i,activeItem:n,selectedDragItemLayerUid:s,selectionMode:o,selectedItems:a,messages:l,parent:r,css:c}=this,d="visibleAtCurrentTimeExtent"in i&&"layerInvisibleAtTime"in l&&!i.visibleAtCurrentTimeExtent?`${t} (${l.layerInvisibleAtTime})`:"visibleAtCurrentScale"in i&&"layerInvisibleAtScale"in l&&!i.visibleAtCurrentScale?`${t} (${l.layerInvisibleAtScale})`:t,p="parent"in i&&"catalog"===i.parent?.layer?.type,{layer:m}=i,g="visibleAtCurrentScale"in i&&!i.visibleAtCurrentScale||"visibleAtCurrentTimeExtent"in i&&!i.visibleAtCurrentTimeExtent;return h("calcite-list-item",{afterCreate:e=>this._focusSelectedDragEl(e,i),afterUpdate:e=>this._focusSelectedDragEl(e,i),class:this.classes(c.item,"itemActive"in c&&{[c.itemActive]:n===i}),"data-item":i,"data-layer-id":m.id,dragDisabled:!i.sortable||p,dragSelected:m.uid===s,id:m.uid,key:`list-item-${m.uid}`,label:t,metadata:{parentTitles:e,_title:t},open:"open"in i&&i.open,selected:"none"!==o&&a.includes(i),title:d,unavailable:g,value:m.uid,onCalciteListItemDragHandleChange:e=>this._handleCalciteListItemDragHandleChange(e,i),onCalciteListItemSelect:e=>"visible"in i&&this._handleCalciteListItemSelect(e,i,r),onCalciteListItemToggle:e=>"open"in i&&this._handleCalciteListItemToggle(e,i)},this._renderedCatalogFootprintIcon,this._renderedCatalogDynamicIcon,h("div",{class:this.classes(c.itemContent,"itemInvisible"in c&&{[c.itemInvisible]:g}),slot:"content"},t),this._renderedItemStatus,this._renderedItemToggle,this._renderedCatalogSelectNode,this._renderedItemTemporaryIcon,this._renderedChildList,this._renderedItemMessage,this._renderedPanel,this._renderedPanelAction,this._renderedActions)}get _title(){const{messages:e}=this;return this.item.title||("untitledTable"in e?e.untitledTable:e.untitledLayer)}get _renderedItemStatus(){const{item:e,parent:t,visibleElements:i,css:n}=this;if(!i.statusIndicators)return null;const{publishing:s}=e,o="updating"in e&&e.updating&&!t,a="connectionStatus"in e?e.connectionStatus:void 0,r=!!a;return h("calcite-icon",{class:this.classes(n.statusIndicator,{[n.publishing]:s},"updating"in n&&{[n.updating]:o},"connectionStatus"in n&&{[n.connectionStatus]:r},"connectionStatusConnected"in n&&{[n.connectionStatusConnected]:r&&"connected"===a}),icon:l({connectionStatus:a,publishing:s}),key:"layer-item-status",scale:"s",slot:"content-end"})}get _renderedItemTemporaryIcon(){const{item:e,visibleElements:t,css:i}=this,{layer:s}=e,o="temporaryLayerIndicators"in t&&t.temporaryLayerIndicators,a="temporaryTableIndicators"in t&&t.temporaryTableIndicators,l="persistenceEnabled"in s&&(n(s)||!s.persistenceEnabled);return(o||a)&&l?h("calcite-icon",{class:i.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messages.temporary}):null}get _renderedItemToggle(){const{item:e,parent:t,messages:i,visibilityAppearance:n,css:s}=this;if(!("visible"in e&&"layerVisibility"in i&&"visibleToggle"in s&&n))return null;const{visible:o}=e,a=t?.visibilityMode;if("inherited"===a)return null;const l=g({visible:o,exclusive:"exclusive"===a,visibilityAppearance:n}),r="checkbox"===n,c=i.layerVisibility;return h("calcite-action",{appearance:"transparent",class:s.visibleToggle,icon:r?l:void 0,key:"visibility-toggle",onclick:()=>this._toggleVisibility(e,t),scale:"s",slot:r?"actions-start":"actions-end",text:c,title:c},r?null:h("calcite-icon",{class:this.classes({[s.visibleIcon]:"exclusive"!==a&&o}),icon:l,scale:"s"}))}get _renderedPanel(){const{panel:e}=this.item;return!e?.open||e.disabled||e.flowEnabled?null:h("div",{class:this.css.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}get _renderedPanelAction(){const{panel:e}=this.item;if(!e?.visible)return null;const{open:t,title:i,disabled:n}=e;return h("calcite-action",{active:t,appearance:"transparent",disabled:n,icon:s(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}get _renderedActions(){switch(this._actionsCount){case 0:return null;case 1:return this._singleAction;default:return this._renderedActionMenu}}get _renderedActionMenu(){const{item:e,messagesCommon:t}=this,i=t.options;return h("calcite-action-menu",{appearance:"transparent",key:"item-action-menu",label:t.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:this._onActionMenuOpen},h("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:i,title:i}),this._renderedActionMenuContent)}get _renderedActionMenuContent(){return this._filteredSections.toArray().map((e=>h("calcite-action-group",{key:`action-section-${e.uid}`},e.toArray().map((e=>this._renderAction({action:e,textEnabled:!0}))))))}get _renderedCatalogFootprintIcon(){const{css:e}=this,t="catalog-footprint"===this.item.layer?.type;return"itemCatalogIcon"in e&&t?h("calcite-icon",{class:e.itemCatalogIcon,icon:"footprint",key:"footprint",scale:"s",slot:"content-start"}):null}get _renderedCatalogDynamicIcon(){const{css:e}=this,t="catalog-dynamic-group"===this.item.layer?.type;return"itemCatalogIcon"in e&&t?h("calcite-icon",{class:e.itemCatalogIcon,icon:"catalog-dataset",key:"catalog-dataset",scale:"s",slot:"content-start"}):null}get _renderedCatalogSelectNode(){const{_title:e,item:t,visibleElements:i}=this;if(!("visible"in t))return;const{layer:n}=t,s="catalog-dynamic-group"===n?.type;return"catalogLayerList"in i&&i.catalogLayerList&&s?h("calcite-action",{appearance:"transparent",disabled:!n.visible,icon:"chevron-right",iconFlipRtl:!0,onclick:()=>this._triggerOnCatalogOpen(t),scale:"s",slot:"actions-end",text:e}):null}get _renderedChildList(){const{dragEnabled:e,item:t,rootGroupUid:i,listModeDisabled:n,selectionMode:s}=this;if(!("visible"in t))return;const o=[...this.parentTitles??[],t.title],{children:a,layer:l}=t,p="catalog-dynamic-group"!==l?.type&&r(t),m=!n&&c(l);return p||!m&&!p&&e&&"group"===l?.type?h("calcite-list",{canPull:e=>!!this.canMove&&this.canMove(e,"pull"),canPut:e=>!!this.canMove&&this.canMove(e,"put"),"data-item":t,"data-layer-type":i,dragEnabled:!!e&&t.childrenSortable&&d(t),group:`${i}-${l.uid}`,key:`child-list-${l.uid}`,selectionAppearance:"border",selectionMode:s},a?.filter((e=>!e.hidden)).toArray().map((e=>this._renderItem(e,t,o))),this._renderedTablesItem):null}get _hasTables(){const{layerTablesEnabled:e}=this,t=this.item.layer;if(!e||!t)return!1;switch(t.type){case"knowledge-graph":return e.includes(t.type)&&!!t.tables?.length;case"map-image":case"tile":return e.includes(t.type)&&!!t.subtables?.length;default:return!1}}get _renderedTablesItem(){const{item:e,messages:t,css:i}=this,{layer:n}=e;return"itemTableIcon"in i&&"visible"in e&&"tables"in t&&this._hasTables?h("calcite-list-item",{class:i.item,"data-layer-id":n.id,dragDisabled:!0,key:`list-item-table-list-tables-${n.uid}`,title:t.tables,onCalciteListItemSelect:()=>this._triggerOnTablesOpen(e)},h("div",{class:i.itemContent,slot:"content"},t.tables),h("calcite-icon",{class:i.itemTableIcon,icon:"table",scale:"s",slot:"content-start"}),h("calcite-icon",{flipRtl:!0,icon:"chevron-right",scale:"s",slot:"content-end"})):null}get _renderedItemMessage(){const{item:e,messages:t,css:i}=this;return e.error?h("div",{class:i.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},h("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},h("div",{slot:"message"},"tableError"in t?t.tableError:t.layerError))):"incompatible"in e&&e.incompatible&&"layerIncompatible"in t?h("div",{class:i.itemMessage,key:"esri-layer-list__incompatible",slot:"content-bottom"},h("calcite-notice",{afterCreate:this._setTooltipReference,afterRemoved:this._removeTooltipReference,bind:this,icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",tabIndex:0,width:"full"},h("div",{slot:"message"},t.layerIncompatible))):null}get _singleAction(){return this._renderAction({action:p(this._filteredSections),textEnabled:!1})}get _filteredSections(){return this.item.actionsSections.map((e=>e.filter((e=>e.visible))))}get _actionsCount(){return this.item.actionsSections.reduce(((e,t)=>e+t.length),0)}_renderAction(e){const{item:t}=this,{action:i,textEnabled:n}=e;if(!i)return null;const{active:o,disabled:a,title:l,type:r,indicator:c}=i;return h("calcite-action",{active:"toggle"===r&&i.value,appearance:"transparent",disabled:a,icon:s(i),indicator:c,key:`action-${i.uid}`,loading:o,onclick:()=>this._triggerAction(t,i),scale:"s",slot:n?void 0:"actions-end",text:l??"",textEnabled:n,title:l??void 0},this._renderFallbackIcon(i))}_renderFallbackIcon(e){const{css:t}=this,{className:i,icon:n}=e;if(n)return null;const s="image"in e?e.image:void 0,a={[t.itemActionIcon]:!!i,[t.itemActionImage]:!!s};return i&&(a[i]=!0),s||i?h("span",{"aria-hidden":"true",class:this.classes(t.itemActionIcon,a),key:"icon",styles:o(s)}):null}_renderItem(e,t,i=[]){return h(b,{activeItem:this.activeItem,canMove:this.canMove,css:this.css,dragEnabled:this.dragEnabled,item:e,key:`layerListItem-${e.layer.uid}`,layerTablesEnabled:this.layerTablesEnabled,listModeDisabled:this.listModeDisabled,messages:this.messages,messagesCommon:this.messagesCommon,parent:t,parentTitles:i,rootGroupUid:this.rootGroupUid,selectedDragItemLayerUid:this.selectedDragItemLayerUid,selectedItems:this.selectedItems,selectionMode:this.selectionMode,visibilityAppearance:this.visibilityAppearance,visibleElements:this.visibleElements,onAction:this.onAction,onCatalogOpen:this.onCatalogOpen,onPanelOpen:this.onPanelOpen,onSelectedDragItemLayerUidChange:this.onSelectedDragItemLayerUidChange,onTablesOpen:this.onTablesOpen,onTooltipReferenceChange:this.onTooltipReferenceChange})}_triggerAction(e,t){t&&e&&("toggle"===t.type&&(t.value=!t.value),this.onAction(t,e))}_triggerOnTablesOpen(e){e&&this.onTablesOpen&&this.onTablesOpen(e)}_triggerOnCatalogOpen(e){e&&this.onCatalogOpen?.(e)}_focusSelectedDragEl(e,t){this.selectedDragItemLayerUid===t.layer.uid&&y(e)}_handleCalciteListItemToggle(e,t){e.stopPropagation(),t.open=e.target.open}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this.onSelectedDragItemLayerUidChange?.(i?t.layer.uid:null)}_handleCalciteListItemSelect(e,t,i){m(e.target)===t&&"none"===this.selectionMode&&"inherited"!==i?.visibilityMode&&this._toggleVisibility(t,i)}_togglePanel(e){e.open=!e.open,e.open&&this.onPanelOpen()}_toggleVisibility(e,t){if(!e)return;const i=t?.visibilityMode;"exclusive"===i&&e.visible||(e.visible=!e.visible)}};v.vnodeSelector="calcite-list-item",e([t()],v.prototype,"activeItem",void 0),e([t()],v.prototype,"canMove",void 0),e([t()],v.prototype,"css",void 0),e([t()],v.prototype,"dragEnabled",void 0),e([t()],v.prototype,"item",void 0),e([t()],v.prototype,"layerTablesEnabled",void 0),e([t()],v.prototype,"listModeDisabled",void 0),e([t()],v.prototype,"messages",void 0),e([t()],v.prototype,"messagesCommon",void 0),e([t()],v.prototype,"onAction",void 0),e([t()],v.prototype,"onPanelOpen",void 0),e([t()],v.prototype,"onCatalogOpen",void 0),e([t()],v.prototype,"onTablesOpen",void 0),e([t()],v.prototype,"onSelectedDragItemLayerUidChange",void 0),e([t()],v.prototype,"onTooltipReferenceChange",void 0),e([t()],v.prototype,"parent",void 0),e([t()],v.prototype,"parentTitles",void 0),e([t()],v.prototype,"rootGroupUid",void 0),e([t()],v.prototype,"selectionMode",void 0),e([t()],v.prototype,"selectedItems",void 0),e([t()],v.prototype,"selectedDragItemLayerUid",void 0),e([t()],v.prototype,"visibleElements",void 0),e([t()],v.prototype,"visibilityAppearance",void 0),e([t()],v.prototype,"_title",null),e([t()],v.prototype,"_renderedItemStatus",null),e([t()],v.prototype,"_renderedItemTemporaryIcon",null),e([t()],v.prototype,"_renderedItemToggle",null),e([t()],v.prototype,"_renderedPanel",null),e([t()],v.prototype,"_renderedPanelAction",null),e([t()],v.prototype,"_renderedActions",null),e([t()],v.prototype,"_renderedActionMenu",null),e([t()],v.prototype,"_renderedActionMenuContent",null),e([t()],v.prototype,"_renderedCatalogFootprintIcon",null),e([t()],v.prototype,"_renderedCatalogDynamicIcon",null),e([t()],v.prototype,"_renderedCatalogSelectNode",null),e([t()],v.prototype,"_renderedChildList",null),e([t()],v.prototype,"_hasTables",null),e([t()],v.prototype,"_renderedTablesItem",null),e([t()],v.prototype,"_renderedItemMessage",null),e([t()],v.prototype,"_singleAction",null),e([t()],v.prototype,"_filteredSections",null),e([t()],v.prototype,"_actionsCount",null),v=b=e([i("esri.widgets.LayerList.LayerListItem")],v);const _=v;export{_ as L};

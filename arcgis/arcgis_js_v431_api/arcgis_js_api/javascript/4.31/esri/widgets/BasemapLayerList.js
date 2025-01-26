// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/Collection ../core/deprecate ../core/Identifiable ../core/Logger ../core/ReactiveMap ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./BasemapLayerList/BasemapLayerListViewModel ./BasemapLayerList/BasemapLayerListVisibleElements ./BasemapLayerList/css ./LayerList/LayerListItem ./LayerList/ListItem ./LayerList/support/layerListUtils ../chunks/componentsUtils ./support/globalCss ./support/Heading ./support/listUtils ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory".split(" "),
function(t,f,A,B,e,C,L,H,g,V,W,M,N,I,F,x,O,P,q,Q,D,R,S,E,J,T,l){function G(a){return a?.closest("[data-basemap-layer-type]")?.getAttribute("data-basemap-layer-type")}const K=a=>Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"})),U=A.ofType(P);e=class extends e.IdentifiableMixin(N){constructor(a,b){super(a,b);this._activeItem=null;this._tooltipReferenceMap=new Map;this._editTitleInput=null;this._focusPanelFlowItem=this._focusRootFlowItem=!1;this._focusLayerFlowItem=
null;this._focusEditingFlowItem=!1;this._layerListMap=new L;this._selectedDragItemLayerUid=this._lastDragDetail=null;this._rootGroupUid=`basemap-${this.uid}`;this.catalogOptions=this.catalogLayerList=this._openedLayersController=null;this.editingTitle=this.dragEnabled=this.collapsed=!1;this.referenceFilterText=this.baseFilterText=this.filterPlaceholder="";this.listItemCanReceiveFunction=this.listItemCanGiveFunction=null;this.headingLevel=2;this.knowledgeGraphOptions=null;this.layerTablesEnabled=new A(["knowledge-graph"]);
this.messagesCommon=this.messages=this.mapImageOptions=null;this.minFilterItems=q.minFilterItems;this.openedLayers=new A;this.openedLayerLists=new A;this.tableList=null;this.selectedItems=new U;this.selectionMode="none";this.tileOptions=null;this.viewModel=new I;this.visibilityAppearance="default";this.visibleElements=new F;this._canMove=({dragEl:c,fromEl:d,toEl:h},k)=>{k="pull"===k?this.listItemCanGiveFunction:this.listItemCanReceiveFunction;c=q.getItem(c);if(!c?.sortable)return!1;var n=q.getItem(d),
p=q.getLayerType(d),r=q.getItem(h),u=q.getLayerType(h);p=!!p&&!!u&&p===u;u={selected:c,from:n,to:r};d=d.group;h=h.group;n=n?.layer?.type??"";r=r?.layer?.type??"";const v=new Set(["map-image","catalog","knowledge-graph"]);return d&&h&&"function"===typeof k?k.call(null,u):p&&!v.has(n)&&!v.has(r)&&"sublayer"!==c?.layer?.type};this._onTriggerAction=(c,d)=>{this.triggerAction(c,d)};this._onTooltipReferenceChange=(c,d)=>{d?this._tooltipReferenceMap.set(c,d):this._tooltipReferenceMap.delete(c)};this._onSelectedDragItemLayerUidChange=
c=>{this._selectedDragItemLayerUid=c};this._onTablesOpen=c=>{this.openedLayers.push(c.layer);this._focusLayerFlowItem=c.layer.uid};this._onPanelOpen=()=>{this._focusPanelFlowItem=!0};this._onCatalogOpen=c=>{this.openedLayers.push(c.layer.parent);this._focusLayerFlowItem=c.layer.uid};this._clearActiveItem=()=>{this._activeItem=null};this._setActiveItem=c=>{"default"===this.visibilityAppearance&&(c=Array.from(c.composedPath()).find(d=>d.classList?.contains(x.css.item)),this._activeItem=q.getItem(c))};
this._onCalciteListOrderChange=c=>{const {_lastDragDetail:d}=this,{toEl:h,fromEl:k,dragEl:n,newIndex:p}=c;k&&h&&(d?.newIndex!==p||d?.dragEl!==n||d?.toEl!==h||d?.fromEl!==k)&&(this._lastDragDetail=c,k===h?(c=Array.from(k.children).filter(r=>r?.matches("calcite-list-item")).map(r=>r.value),this._sortLayers(k,c)):this._moveLayerFromChildList({toEl:h,fromEl:k,dragEl:n,newIndex:p}))}}initialize(){this.addHandles(H.on(()=>this.openedLayers,"change",()=>this._handleOpenedLayersChange(),H.initial))}normalizeCtorArgs(a){return null!=
a?.editingEnabled&&null!=a.visibleElements?{...a,visibleElements:new F({...a.visibleElements,editTitleButton:a.editingEnabled})}:a}loadDependencies(){return Q.loadCalciteComponents({action:()=>new Promise((a,b)=>t(["../chunks/calcite-action"],a,b)),block:()=>new Promise((a,b)=>t(["../chunks/calcite-block"],a,b)),label:()=>new Promise((a,b)=>t(["../chunks/calcite-label"],a,b)),input:()=>new Promise((a,b)=>t(["../chunks/calcite-input"],a,b)),button:()=>new Promise((a,b)=>t(["../chunks/calcite-button"],
a,b)),flow:()=>new Promise((a,b)=>t(["../chunks/calcite-flow"],a,b)),"flow-item":()=>new Promise((a,b)=>t(["../chunks/calcite-flow-item"],a,b)),list:()=>new Promise((a,b)=>t(["../chunks/calcite-list"],a,b)),notice:()=>new Promise((a,b)=>t(["../chunks/calcite-notice"],a,b)),tooltip:()=>new Promise((a,b)=>t(["../chunks/calcite-tooltip"],a,b))})}destroy(){this._tooltipReferenceMap.clear();this._destroyOpenedLayerLists()}get _totalBaseItems(){return this.viewModel.baseItems.flatten(a=>a.children.filter(b=>
"catalog-dynamic-group"!==b.layer.type)).length}get _totalReferenceItems(){return this.viewModel.referenceItems.flatten(a=>a.children.filter(b=>"catalog-dynamic-group"!==b.layer.type)).length}get _baseFilterEnabled(){return this._totalBaseItems>=this.minFilterItems&&this.visibleElements.filter}get _referenceFilterEnabled(){return this._totalReferenceItems>=this.minFilterItems&&this.visibleElements.filter}get _renderedOpenLayerFlowItems(){return this.openedLayers.toArray().map(a=>this._renderLayerFlowItem(a))}get basemapTitle(){return this.viewModel.basemapTitle}set basemapTitle(a){this.viewModel.basemapTitle=
a}get baseListItemCreatedFunction(){return this.viewModel.baseListItemCreatedFunction}set baseListItemCreatedFunction(a){this.viewModel.baseListItemCreatedFunction=a}get editingEnabled(){B.deprecatedProperty(C.getLogger(this),"editingEnabled",{replacement:"selectionMode, dragEnabled, visibleElements.editTitleButton",version:"4.29",warnOnce:!0});return"none"!==this.selectionMode&&this.dragEnabled&&this.visibleElements.editTitleButton}set editingEnabled(a){B.deprecatedProperty(C.getLogger(this),"editingEnabled",
{replacement:"selectionMode, dragEnabled, visibleElements.editTitleButton",version:"4.29",warnOnce:!0});this.dragEnabled=a;this.selectionMode=(this.visibleElements.editTitleButton=a)?this.multipleSelectionEnabled?"multiple":"single":"none"}get icon(){return"layers"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get multipleSelectionEnabled(){B.deprecatedProperty(C.getLogger(this),"multipleSelectionEnabled",
{replacement:"selectionMode",version:"4.29",warnOnce:!0});return"multiple"===this.selectionMode}set multipleSelectionEnabled(a){B.deprecatedProperty(C.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0});this.selectionMode=a?"multiple":this.editingEnabled?"single":"none"}get referenceListItemCreatedFunction(){return this.viewModel.referenceListItemCreatedFunction}set referenceListItemCreatedFunction(a){this.viewModel.referenceListItemCreatedFunction=
a}get baseItems(){return this.viewModel.baseItems}get referenceItems(){return this.viewModel.referenceItems}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}triggerAction(a,b){return this.viewModel.triggerAction(a,b)}render(){const {state:a}=this.viewModel;return l.tsx("div",{class:this.classes(x.css.base,D.globalCss.widget,D.globalCss.panel,{[D.globalCss.hidden]:"loading"===a,[D.globalCss.disabled]:"disabled"===a})},this._renderItems())}async _createCatalogLayerList(a){const {default:b}=
await new Promise((y,z)=>t(["./CatalogLayerList"],m=>y(K(m)),z)),{headingLevel:c,catalogOptions:d,view:h,filterPlaceholder:k,minFilterItems:n,selectionMode:p,visibilityAppearance:r,_onCatalogOpen:u,_onTablesOpen:v,layerTablesEnabled:w}=this;return new b({headingLevel:c,view:h,filterPlaceholder:k,minFilterItems:n,selectionMode:p,visibilityAppearance:r,...d,catalogLayer:a,layerTablesEnabled:w,onCatalogOpen:u,onTablesOpen:v})}_getTableListParams(a){switch(a.type){case "knowledge-graph":return{...this.knowledgeGraphOptions,
tables:a.tables};case "map-image":return{...this.mapImageOptions,tables:a.subtables};case "tile":return{...this.tileOptions,tables:a.subtables};default:return null}}async _createTableList(a){const {default:b}=await new Promise((k,n)=>t(["./TableList"],p=>k(K(p)),n)),{headingLevel:c,selectionMode:d,dragEnabled:h}=this;return new b({headingLevel:c,selectionMode:d,dragEnabled:h,...this._getTableListParams(a)})}async _createFlowList(a,b){const {_layerListMap:c}=this;var d=c.get(a);if(d)return d;d="catalog"===
a.type?await this._createCatalogLayerList(a):await this._createTableList(a);b.aborted||c.set(a,d);return d}async _handleOpenedLayersChange(){const {_layerListMap:a,openedLayers:b,openedLayerLists:c}=this;this._openedLayersController?.abort();var d=new AbortController;const {signal:h}=d;this._openedLayersController=d;a.forEach((k,n)=>{b.includes(n)||(k.destroy(),a.delete(n))});d=await Promise.all(b.map(k=>this._createFlowList(k,h)));h.aborted||(c.removeAll(),c.addMany(d),(d=c.at(-1))?"catalogLayer"in
d?(this._set("catalogLayerList",d),this._set("tableList",null)):(this._set("catalogLayerList",null),this._set("tableList",d)):(this._set("catalogLayerList",null),this._set("tableList",null)))}_destroyOpenedLayerLists(){this.openedLayerLists.destroyAll();this.openedLayers.removeAll();this._layerListMap.clear()}_renderItemTooltip(a){return a?l.tsx("calcite-tooltip",{key:`tooltip-${a.layer.uid}`,referenceElement:this._tooltipReferenceMap.get(a.layer.uid)},this.messages.layerIncompatibleTooltip):null}_renderItemTooltipNodes(a){return a.incompatible?
this._renderItemTooltip(a):a.children?.filter(b=>!b.hidden).toArray().map(b=>this._renderItemTooltipNodes(b))}_renderItemTooltips(a){return a?.toArray().map(b=>this._renderItemTooltipNodes(b))}_focusLayerFlowItemNode(a){this._focusLayerFlowItem===a.dataset.layerUid&&(this._focusLayerFlowItem=null,E.setFocus(a))}_renderPanelFlowItems(a){return a?a.flatten(b=>b.children).filter(({hidden:b,panel:c})=>!b&&c?.open&&!c.disabled&&c.flowEnabled).toArray().map(({title:b,panel:c})=>{const d=()=>this._handlePanelFlowItemBack(c);
return l.tsx("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:b,heading:c.title,headingLevel:this.headingLevel,key:`flow-panel-${c.uid}`,onCalciteFlowItemBack:h=>{h.preventDefault();d()}},c.render(),l.tsx("calcite-button",{appearance:"transparent",onclick:d,slot:"footer-actions",width:"full"},this.messagesCommon.back))}):[]}_handlePanelFlowItemBack(a){a.open=!1;this._focusRootFlowItem=!0}_focusEditingFlowItemNode(a){this._focusEditingFlowItem&&
(this._focusEditingFlowItem=!1,E.setFocus(a))}_focusRootFlowItemNode(a){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,E.setFocus(a))}_focusPanelFlowItemNode(a){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,E.setFocus(a))}_renderItem(a,b,c,d){return l.tsx(O,{activeItem:this._activeItem,canMove:this._canMove,css:x.css,dragEnabled:!b&&this.dragEnabled,item:a,key:`layerListItem-${a.layer.uid}`,layerTablesEnabled:this.layerTablesEnabled,listModeDisabled:this.viewModel.listModeDisabled,
messages:this.messages,messagesCommon:this.messagesCommon,parent:c,parentTitles:d,rootGroupUid:this._rootGroupUid,selectedDragItemLayerUid:this._selectedDragItemLayerUid,selectedItems:this.selectedItems,selectionMode:this.selectionMode,visibilityAppearance:this.visibilityAppearance,visibleElements:this.visibleElements,onAction:this._onTriggerAction,onCatalogOpen:this._onCatalogOpen,onPanelOpen:this._onPanelOpen,onSelectedDragItemLayerUidChange:this._onSelectedDragItemLayerUidChange,onTablesOpen:this._onTablesOpen,
onTooltipReferenceChange:this._onTooltipReferenceChange})}_moveLayerFromChildList({toEl:a,fromEl:b,dragEl:c,newIndex:d}){c=q.getItem(c);const h=q.getItem(a),k=q.getItem(b);b=G(b);a=G(a);b&&a&&this.viewModel.moveListItem({targetItem:c,fromParentItem:k,toParentItem:h,newIndex:d,from:b,to:a})}_handleCalciteListDragEnd(a){const {fromEl:b,dragEl:c,oldIndex:d}=a;b.insertBefore(c,b.children[d])}_sortLayers(a,b){a&&(a.group===this._rootGroupUid?(a=G(a),q.sortLayersToIds("base"===a?this.view?.map?.basemap?.baseLayers:
"reference"===a?this.view?.map?.basemap?.referenceLayers:null,b)):(a=q.getItem(a))&&q.sortChildLayersToIds(a,b))}_handleCalciteListChange(a){const {selectionMode:b,selectedItems:c}=this;"none"!==b&&(a=a.target.selectedItems.map(d=>q.getItem(d)).filter(Boolean),c.removeAll(),c.addMany(a))}_renderEditingInput(){const {messages:a}=this,{basemapTitle:b}=this.viewModel;return l.tsx("div",{class:x.css.editing},l.tsx("calcite-label",null,a.basemapTitle,l.tsx("calcite-input",{afterCreate:c=>this._editTitleInput=
c,label:a.basemapTitle,name:"basemaptitle",pattern:".*\\S+.*",placeholder:a.basemapTitle,required:!0,title:a.basemapTitle,type:"text",value:b??void 0})))}_renderCancelButton(){const {messagesCommon:{cancel:a}}=this;return l.tsx("calcite-button",{appearance:"outline",bind:this,label:a,onclick:this._toggleEditingTitle,slot:"footer",title:a,width:"half"},a)}_renderSubmitButton(){const {messagesCommon:a}=this;return l.tsx("calcite-button",{label:a.form.submit,slot:"footer",title:a.form.submit,type:"submit",
width:"half"},a.form.ok)}_renderEditingForm(){return this.editingTitle?l.tsx("form",{bind:this,onsubmit:this._formSubmit},l.tsx("calcite-flow-item",{afterCreate:this._focusEditingFlowItemNode,afterUpdate:this._focusEditingFlowItemNode,bind:this,heading:this.visibleElements.heading?this.messages.basemapTitle:void 0,headingLevel:this.headingLevel,onCalciteFlowItemBack:a=>{a.preventDefault();this._toggleEditingTitle()}},this._renderEditingInput(),this._renderCancelButton(),this._renderSubmitButton())):
null}_renderEditTitleButton(){const {editingTitle:a,visibleElements:b,messagesCommon:c}=this,d=c.edit;return b.editTitleButton&&!a?l.tsx("calcite-action",{bind:this,icon:"pencil",onclick:this._toggleEditingTitle,slot:"header-actions-end",text:d,title:d}):null}_renderNoLayersInfoMessage(a){return l.tsx("div",{slot:"message"},a)}_renderNoLayersInfo(a,b){return l.tsx("div",{class:x.css.itemMessage},l.tsx("calcite-notice",{icon:"information",key:b,kind:"info",open:!0,width:"full"},this._renderNoLayersInfoMessage(a)))}_getFilteredItems(a){return a?.filter(b=>
!b.hidden&&(this.visibleElements.errors||!b.error))}_renderItems(){const {collapsed:a,visible:b,visibleElements:{closeButton:c,collapseButton:d,heading:h,flow:k},messages:n,viewModel:p,referenceItems:r,baseItems:u}=this,v=this.visibleElements.referenceLayers?this._getFilteredItems(r):null,w=this.visibleElements.baseLayers?this._getFilteredItems(u):null,y=[l.tsx("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:c,closed:!b,collapsed:a,
collapsible:d,heading:h?p.basemapTitle??n.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},this._renderEditTitleButton(),this._renderReferenceSection(v),this._renderBaseSection(w,1===w?.length)),this._renderEditingForm(),this._renderPanelFlowItems(w),this._renderPanelFlowItems(v),this._renderedOpenLayerFlowItems];return b?[k?l.tsx("calcite-flow",{key:"root-flow"},y):y,this._renderItemTooltips(v),this._renderItemTooltips(w)]:null}_renderLayerFlowItem(a){const {messages:b,
openedLayers:c}=this;return l.tsx("calcite-flow-item",{afterCreate:this._focusLayerFlowItemNode,afterUpdate:this._focusLayerFlowItemNode,bind:this,"data-layer-uid":a.uid,description:a.title||this.messages.untitledLayer,heading:b["catalog"===a.type?"catalogLayers":"tables"],headingLevel:this.headingLevel,key:`flow-layer-list-${a.uid}`,onCalciteFlowItemBack:d=>{d.preventDefault();c.pop();(d=c.at(-1))?this._focusLayerFlowItem=d.uid:this._focusRootFlowItem=!0}},this._layerListMap.get(a)?.render())}_renderList(a,
b,c){const {messages:d,dragEnabled:h,selectionMode:k,filterPlaceholder:n,baseFilterText:p,referenceFilterText:r,_baseFilterEnabled:u,_referenceFilterEnabled:v,_rootGroupUid:w}=this,y="reference"===b?d.noReferenceLayers:d.noBaseLayers,z="reference"===b?v:u;return l.tsx("calcite-block",{class:x.css.section,collapsible:!0,heading:"reference"===b?d.referenceHeading:d.baseHeading,headingLevel:R.incrementHeadingLevel(this.headingLevel),key:`block-${b}`,open:!0},0===a?.length?this._renderNoLayersInfo(y,
b):null,l.tsx("calcite-list",{afterCreate:m=>{m.addEventListener("focusin",this._setActiveItem);m.addEventListener("focusout",this._clearActiveItem)},afterRemoved:m=>{m.removeEventListener("focusin",this._setActiveItem);m.removeEventListener("focusout",this._clearActiveItem)},canPull:m=>this._canMove(m,"pull"),canPut:m=>this._canMove(m,"put"),filterProps:S.calciteListFilterProps,["data-basemap-layer-type"]:b,"data-layer-type":w,dragEnabled:h,filterEnabled:z,filterPlaceholder:n,filterText:z?"reference"===
b?r:p:"",group:w,key:`list-${b}`,label:d.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:k,onCalciteListChange:m=>this._handleCalciteListChange(m),onCalciteListDragEnd:m=>this._handleCalciteListDragEnd(m.detail),onCalciteListFilter:m=>this["reference"===b?"referenceFilterText":"baseFilterText"]=m.target?.filterText??"",onCalciteListOrderChange:m=>this._onCalciteListOrderChange(m.detail)},a?.toArray().map(m=>this._renderItem(m,
c)),a?.length&&z?l.tsx("div",{class:x.css.filterNoResults,slot:"filter-no-results"},l.tsx("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoLayersInfoMessage(y))):null))}_renderBaseSection(a,b){return this.visibleElements.baseLayers?this._renderList(a,"base",b):null}_renderReferenceSection(a){return this.visibleElements.referenceLayers?this._renderList(a,"reference",!1):null}_toggleEditingTitle(){var {editingTitle:a}=this;(this.editingTitle=a=!a)?this._focusEditingFlowItem=!0:this._focusRootFlowItem=
!0}_formSubmit(a){a.preventDefault();a=this._editTitleInput?.value;a?.trim()&&(this.basemapTitle=a);this._toggleEditingTitle()}};f.__decorate([g.property()],e.prototype,"_activeItem",void 0);f.__decorate([g.property()],e.prototype,"_tooltipReferenceMap",void 0);f.__decorate([g.property()],e.prototype,"_focusRootFlowItem",void 0);f.__decorate([g.property()],e.prototype,"_focusPanelFlowItem",void 0);f.__decorate([g.property()],e.prototype,"_focusLayerFlowItem",void 0);f.__decorate([g.property()],e.prototype,
"_focusEditingFlowItem",void 0);f.__decorate([g.property()],e.prototype,"_layerListMap",void 0);f.__decorate([g.property()],e.prototype,"_totalBaseItems",null);f.__decorate([g.property()],e.prototype,"_totalReferenceItems",null);f.__decorate([g.property()],e.prototype,"_baseFilterEnabled",null);f.__decorate([g.property()],e.prototype,"_referenceFilterEnabled",null);f.__decorate([g.property()],e.prototype,"_renderedOpenLayerFlowItems",null);f.__decorate([g.property()],e.prototype,"basemapTitle",null);
f.__decorate([g.property({readOnly:!0})],e.prototype,"catalogLayerList",void 0);f.__decorate([g.property()],e.prototype,"catalogOptions",void 0);f.__decorate([g.property()],e.prototype,"collapsed",void 0);f.__decorate([g.property()],e.prototype,"dragEnabled",void 0);f.__decorate([g.property()],e.prototype,"editingTitle",void 0);f.__decorate([g.property()],e.prototype,"filterPlaceholder",void 0);f.__decorate([g.property()],e.prototype,"baseFilterText",void 0);f.__decorate([g.property()],e.prototype,
"referenceFilterText",void 0);f.__decorate([g.property()],e.prototype,"listItemCanGiveFunction",void 0);f.__decorate([g.property()],e.prototype,"listItemCanReceiveFunction",void 0);f.__decorate([g.property()],e.prototype,"baseListItemCreatedFunction",null);f.__decorate([g.property()],e.prototype,"editingEnabled",null);f.__decorate([g.property()],e.prototype,"headingLevel",void 0);f.__decorate([g.property()],e.prototype,"icon",null);f.__decorate([g.property()],e.prototype,"knowledgeGraphOptions",void 0);
f.__decorate([g.property()],e.prototype,"label",null);f.__decorate([g.property()],e.prototype,"layerTablesEnabled",void 0);f.__decorate([g.property()],e.prototype,"mapImageOptions",void 0);f.__decorate([g.property(),J.messageBundle("esri/widgets/BasemapLayerList/t9n/BasemapLayerList")],e.prototype,"messages",void 0);f.__decorate([g.property(),J.messageBundle("esri/t9n/common")],e.prototype,"messagesCommon",void 0);f.__decorate([g.property()],e.prototype,"minFilterItems",void 0);f.__decorate([g.property()],
e.prototype,"multipleSelectionEnabled",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"openedLayers",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"openedLayerLists",void 0);f.__decorate([g.property()],e.prototype,"referenceListItemCreatedFunction",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"tableList",void 0);f.__decorate([g.property({readOnly:!0})],e.prototype,"baseItems",null);f.__decorate([g.property({readOnly:!0})],e.prototype,"referenceItems",null);
f.__decorate([g.property()],e.prototype,"selectedItems",void 0);f.__decorate([g.property()],e.prototype,"selectionMode",void 0);f.__decorate([g.property()],e.prototype,"tileOptions",void 0);f.__decorate([g.property()],e.prototype,"view",null);f.__decorate([T.vmEvent("trigger-action"),g.property({type:I})],e.prototype,"viewModel",void 0);f.__decorate([g.property()],e.prototype,"visibilityAppearance",void 0);f.__decorate([g.property({type:F,nonNullable:!0})],e.prototype,"visibleElements",void 0);return e=
f.__decorate([M.subclass("esri.widgets.BasemapLayerList")],e)});
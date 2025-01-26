/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./Logger.js";import{subclass as o}from"../core/accessorSupport/decorators/subclass.js";import s from"../widgets/Widget.js";import{l as i}from"./componentsUtils.js";import{g as n}from"./timeWidgetUtils.js";import"./widgetUtils.js";import{m as r}from"./messageBundle.js";import{t as p}from"./jsxFactory.js";const l="esri-timezone-picker",c={base:l,trigger:`${l}__trigger`,itemTitle:`${l}__item-title`,itemDescription:`${l}__item_description`};let d=class extends s{constructor(t,e){super(t,e),this.value=null,this.onChange=null,this.open=!1,this.onOpen=null,this.onClose=null,this._selectedId=null,this._onOpen=()=>{this.open=!0,this.onOpen?.()},this._onClose=()=>{this.open=!1,this.onClose?.()},this._killEvent=t=>(t.stopPropagation(),!0),this._onChange=t=>{const e=t.target,o=e.selectedItems?.[0].getAttribute("data-id"),s=a(this._gmtOffsets,o)?.utcOffset;null!=s&&(this._selectedId=o,this.onChange?.(s))}}loadDependencies(){return i({button:()=>import("./calcite-button.js"),dropdown:()=>import("./calcite-dropdown.js"),"dropdown-group":()=>import("./calcite-dropdown-group.js"),"dropdown-item":()=>import("./calcite-dropdown-item.js")})}render(){const t=this._messages;if(!t)return p("div",{class:c.base,key:"empty"});const e=this._selectedItem,o=m(e);return p("div",{class:c.base,key:"container",onpointerdown:this._killEvent},p("calcite-dropdown",{open:this.open,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",onCalciteDropdownClose:this._onClose,onCalciteDropdownOpen:this._onOpen,onCalciteDropdownSelect:this._onChange},p("calcite-button",{appearance:"transparent",class:c.trigger,"data-testid":"timezone-picker-button",key:"trigger",kind:"neutral",scale:"s",slot:"trigger",tabIndex:0,title:t.chooseTimezone},e?.short??""),p("calcite-dropdown-group",{selectionMode:"single"},this._gmtOffsets.map((t=>{const e=m(t);return p("calcite-dropdown-item",{"data-id":e,"data-testid":e,key:e,selected:o===e},p("div",{class:c.itemTitle,key:"title"},t.shortWithUTC),p("div",{class:c.itemDescription,key:"description"},t.long))})))))}get _gmtOffsets(){const t=this._messages;return t?n(t):[]}get _selectedItem(){const t=this._gmtOffsets,e=this.value,o=a(t,this._selectedId);return o?.utcOffset===e?o:function(t,e){return t.find((t=>t.utcOffset===e))}(t,e)}};function a(t,e){return t.find((t=>m(t)===e))}function m(t){return t?`${t.utcOffset}-${t.long}`:void 0}t([e()],d.prototype,"value",void 0),t([e()],d.prototype,"onChange",void 0),t([e()],d.prototype,"open",void 0),t([e()],d.prototype,"onOpen",void 0),t([e()],d.prototype,"onClose",void 0),t([e(),r("esri/widgets/support/t9n/timezone")],d.prototype,"_messages",void 0),t([e()],d.prototype,"_gmtOffsets",null),t([e()],d.prototype,"_selectedItem",null),t([e()],d.prototype,"_selectedId",void 0),d=t([o("esri.widgets.support.TimezonePicker")],d);export{d as T};

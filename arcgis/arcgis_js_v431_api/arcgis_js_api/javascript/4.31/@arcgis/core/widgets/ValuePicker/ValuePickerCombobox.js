/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import{l as o}from"../../chunks/componentsUtils.js";import"../../chunks/widgetUtils.js";import{t as r}from"../../chunks/jsxFactory.js";import{V as i}from"../../chunks/ValuePickerBaseComponent.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/tracking.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/jsxWidgetSupport.js";import"../Widget.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../chunks/domUtils.js";import"../../core/Promise.js";import"../../chunks/uuid.js";import"../../core/accessorSupport/decorators/cast.js";import"../../chunks/projector.js";let l=class extends i{constructor(e,s){super(e,s),this.items=null,this.placeholder=null,this.type="combobox"}loadDependencies(){return o({combobox:()=>import("../../chunks/calcite-combobox.js"),"combobox-item":()=>import("../../chunks/calcite-combobox-item.js")})}get canNext(){return!(!this.items||!this.viewModel)&&this.items.findIndex((({value:e})=>e===this.viewModel.values?.[0]))!==this.items.length-1}get canPlay(){return null!=this.viewModel&&!!this.items?.length}get canPrevious(){const{items:e,viewModel:s}=this;return!(!e||!s)&&0!==e.findIndex((({value:e})=>e===s.values?.[0]))}render(){const{viewModel:e}=this;if(null==e)return r("div",null);const s=e.values?.[0];return r("div",{class:"esri-value-picker__combobox"},r("calcite-combobox",{disabled:e.disabled,label:this.label,maxItems:10,overlayPositioning:"fixed",placeholder:this.placeholder??void 0,selectionMode:"single",onCalciteComboboxChange:s=>{Array.isArray(s.target.value)||(null!=e.values?e.values[0]!==s.target.value&&(e.values=[s.target.value]):e.values=[s.target.value])}},this.items?.map((({value:e,label:t},o)=>r("calcite-combobox-item",{key:o,selected:e===s,textLabel:t,value:e})))))}animate(e){this._step(1,e)}next(){this._step(1)}previous(){this._step(-1)}_step(e,s=!1){const{viewModel:t,items:o}=this;if(!o?.length||!t)return;if(!t.values)return void(t.values=[o[0].value]);const r=o.findIndex((({value:e})=>e===t.values[0]));if(-1===r)return void(t.values=[o[0].value]);const i=r+e;i<0||i>=o.length?t.loop||s?t.values=[o[1===e?0:o.length-1].value]:"playing"===t.state&&t.pause():t.values=[o[i].value]}};e([s()],l.prototype,"canNext",null),e([s()],l.prototype,"canPlay",null),e([s()],l.prototype,"canPrevious",null),e([s()],l.prototype,"items",void 0),e([s()],l.prototype,"placeholder",void 0),e([s()],l.prototype,"type",void 0),l=e([t("esri.widgets.ValuePicker.ValuePickerCombobox")],l);const c=l;export{c as default};

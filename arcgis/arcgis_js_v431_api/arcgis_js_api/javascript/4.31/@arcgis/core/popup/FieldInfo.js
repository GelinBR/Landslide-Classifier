/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{J as o}from"../chunks/jsonMap.js";import{JSONSupport as i}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import p from"./support/FieldInfoFormat.js";import"../config.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/ensureType.js";import"../core/Clonable.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/datetime.js";var a;let l=a=class extends i{constructor(t){super(t),this.fieldName=null,this.format=void 0,this.isEditable=!0,this.label=null,this.stringFieldOption="text-box",this.statisticType=null,this.tooltip=null,this.visible=!0}clone(){return new a({fieldName:this.fieldName,format:this.format?.clone(),isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})}};t([s({type:String,json:{write:!0}})],l.prototype,"fieldName",void 0),t([s({type:p,json:{write:!0}})],l.prototype,"format",void 0),t([s({type:Boolean,json:{write:{alwaysWriteDefaults:!0},default:!0}})],l.prototype,"isEditable",void 0),t([s({type:String,json:{write:!0}})],l.prototype,"label",void 0),t([e(new o({richtext:"rich-text",textarea:"text-area",textbox:"text-box"}),{default:"text-box"})],l.prototype,"stringFieldOption",void 0),t([s({type:["count","sum","min","max","avg","stddev","var"],json:{write:!0}})],l.prototype,"statisticType",void 0),t([s({type:String,json:{write:!0}})],l.prototype,"tooltip",void 0),t([s({type:Boolean,json:{write:!0}})],l.prototype,"visible",void 0),l=a=t([r("esri.popup.FieldInfo")],l);const n=l;export{n as default};

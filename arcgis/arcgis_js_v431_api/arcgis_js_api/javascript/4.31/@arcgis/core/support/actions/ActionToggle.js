/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import o from"./ActionBase.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/tracking.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Identifiable.js";var e;let r=e=class extends o{constructor(s){super(s),this.image=null,this.type="toggle",this.value=!1}clone(){return new e({active:this.active,className:this.className,disabled:this.disabled,icon:this.icon,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image,value:this.value})}};s([t()],r.prototype,"image",void 0),s([t()],r.prototype,"value",void 0),r=e=s([i("esri.support.actions.ActionToggle")],r);const c=r;export{c as default};

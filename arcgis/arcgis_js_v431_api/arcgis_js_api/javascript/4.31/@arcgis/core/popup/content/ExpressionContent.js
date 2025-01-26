/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import e from"../ElementExpressionInfo.js";import t from"./Content.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";var p;let n=p=class extends t{constructor(s){super(s),this.expressionInfo=null,this.type="expression"}clone(){return new p({expressionInfo:this.expressionInfo?.clone()})}};s([o({type:e,json:{write:!0}})],n.prototype,"expressionInfo",void 0),s([o({type:["expression"],readOnly:!0,json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=p=s([r("esri.popup.content.ExpressionContent")],n);const i=n;export{i as default};

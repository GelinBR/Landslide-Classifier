/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import{a as t}from"./ensureType.js";import"../core/lang.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"./Logger.js";import"../config.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";var i;let p=i=class extends o{static from(r){return t(i,r)}constructor(r){super(r),this.sessionId=void 0,this.moment=null}};r([s({type:String,json:{write:!0}})],p.prototype,"sessionId",void 0),r([s({type:Date,json:{type:Number,write:{writer:(r,o)=>{o.moment=r?r.getTime():null}}}})],p.prototype,"moment",void 0),p=i=r([e("esri.rest.versionManagement.gdbVersion.support.DeleteForwardEditsParameters")],p);const m=p;export{m as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import{a as e}from"./ensureType.js";import"../core/lang.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import"../core/Accessor.js";import"../core/Handles.js";import"./Logger.js";import"../config.js";import"./maybe.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";var i;let p=i=class extends o{static from(r){return e(i,r)}constructor(r){super(r),this.ownerName=void 0,this.versionName=void 0,this.description=void 0,this.access=null}};r([s({type:String,json:{write:!0}})],p.prototype,"ownerName",void 0),r([s({type:String,json:{write:!0}})],p.prototype,"versionName",void 0),r([s({type:String,json:{write:!0}})],p.prototype,"description",void 0),r([s({type:["private","public","protected","hidden"],json:{name:"accessPermission",write:!0}})],p.prototype,"access",void 0),p=i=r([t("esri.rest.versionManagement.gdbVersion.support.AlterVersionParameters")],p);const a=p;export{a as default};

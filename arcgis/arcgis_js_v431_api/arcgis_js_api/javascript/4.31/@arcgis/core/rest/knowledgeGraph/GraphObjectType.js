/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as o}from"../../core/JSONSupport.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as s}from"../../core/accessorSupport/decorators/subclass.js";import e from"./FieldIndex.js";import i from"./GraphProperty.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";let p=class extends o{constructor(r){super(r),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null,this.type=null}};r([t({type:String,json:{write:!0}})],p.prototype,"name",void 0),r([t({type:String,json:{write:!0}})],p.prototype,"alias",void 0),r([t({type:String,json:{write:!0}})],p.prototype,"role",void 0),r([t({type:Boolean,json:{write:!0}})],p.prototype,"strict",void 0),r([t({type:[i],json:{write:!0}})],p.prototype,"properties",void 0),r([t({type:[e],json:{write:!0}})],p.prototype,"fieldIndexes",void 0),p=r([s("esri.rest.knowledgeGraph.GraphObjectType")],p);const n=p;export{n as default};

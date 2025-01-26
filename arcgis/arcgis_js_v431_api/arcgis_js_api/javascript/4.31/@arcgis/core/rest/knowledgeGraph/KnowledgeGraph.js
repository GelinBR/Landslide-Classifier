/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import e from"./DataModel.js";import i from"./ServiceDefinition.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"./EntityType.js";import"./GraphObjectType.js";import"./FieldIndex.js";import"./GraphProperty.js";import"./RelationshipType.js";let p=class extends s{constructor(r){super(r),this.dataModel=null,this.serviceDefinition=null}};r([o({type:String,json:{write:!0}})],p.prototype,"url",void 0),r([o({type:e,json:{write:!0}})],p.prototype,"dataModel",void 0),r([o({type:i,json:{write:!0}})],p.prototype,"serviceDefinition",void 0),p=r([t("esri.rest.knowledgeGraph.KnowledgeGraph")],p);const c=p;export{c as default};

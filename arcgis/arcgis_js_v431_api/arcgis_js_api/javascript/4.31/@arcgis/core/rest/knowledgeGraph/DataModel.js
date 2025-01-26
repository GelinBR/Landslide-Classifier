/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import s from"../../geometry/SpatialReference.js";import i from"./EntityType.js";import p from"./RelationshipType.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"./GraphObjectType.js";import"./FieldIndex.js";import"./GraphProperty.js";let n=class extends e{constructor(t){super(t),this.value=null,this.behavior=null}};t([o({type:String,json:{write:!0}})],n.prototype,"value",void 0),t([o({type:String,json:{write:!0}})],n.prototype,"behavior",void 0),n=t([r("esri.rest.knowledgeGraph.SourceTypeValueBehavior")],n);const l=n;let a=class extends e{constructor(t){super(t),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null,this.metaEntityTypes=null,this.provenanceSourceTypeValues=null}};t([o({type:Date,json:{type:Number,write:{writer:(t,e)=>{e.timestamp=t?.getTime()}}}})],a.prototype,"timestamp",void 0),t([o({type:s,json:{write:!0}})],a.prototype,"spatialReference",void 0),t([o({type:Boolean,json:{write:!0}})],a.prototype,"strict",void 0),t([o({type:String,json:{write:!0}})],a.prototype,"objectIdField",void 0),t([o({type:String,json:{write:!0}})],a.prototype,"globalIdField",void 0),t([o()],a.prototype,"arcgisManaged",void 0),t([o()],a.prototype,"identifierInfo",void 0),t([o()],a.prototype,"searchIndexes",void 0),t([o({type:[i],json:{write:!0}})],a.prototype,"entityTypes",void 0),t([o({type:[p],json:{write:!0}})],a.prototype,"relationshipTypes",void 0),t([o({type:[i],json:{write:!0}})],a.prototype,"metaEntityTypes",void 0),t([o({type:[l],json:{write:!0}})],a.prototype,"provenanceSourceTypeValues",void 0),a=t([r("esri.rest.knowledgeGraph.DataModel")],a);const c=a;export{l as S,c as default};

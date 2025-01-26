/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import r from"../../core/Collection.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";var i;let l=i=class extends e{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new r}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};o([s({type:String,json:{write:!0}})],l.prototype,"floorField",void 0),o([s({json:{read:!1,write:!1}})],l.prototype,"viewAllMode",void 0),o([s({json:{read:!1,write:!1}})],l.prototype,"viewAllLevelIds",void 0),l=i=o([t("esri.layers.support.LayerFloorInfo")],l);const p=l;export{p as default};

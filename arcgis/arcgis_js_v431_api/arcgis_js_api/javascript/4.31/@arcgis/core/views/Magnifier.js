/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import t from"../core/Accessor.js";import{c as r}from"../chunks/screenUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/ensureType.js";let i=class extends t{constructor(o){super(o),this.factor=1.5,this.offset=r(0,0),this.position=null,this.size=120,this.maskUrl=null,this.maskEnabled=!0,this.overlayUrl=null,this.overlayEnabled=!0,this.visible=!0}get version(){return this.commitProperty("factor"),this.commitProperty("offset"),this.commitProperty("position"),this.commitProperty("visible"),this.commitProperty("size"),this.commitProperty("maskUrl"),this.commitProperty("maskEnabled"),this.commitProperty("overlayUrl"),this.commitProperty("overlayEnabled"),(this._get("version")||0)+1}};o([s({type:Number})],i.prototype,"factor",void 0),o([s({nonNullable:!0})],i.prototype,"offset",void 0),o([s()],i.prototype,"position",void 0),o([s({type:Number,range:{min:0}})],i.prototype,"size",void 0),o([s()],i.prototype,"maskUrl",void 0),o([s()],i.prototype,"maskEnabled",void 0),o([s()],i.prototype,"overlayUrl",void 0),o([s()],i.prototype,"overlayEnabled",void 0),o([s({readOnly:!0})],i.prototype,"version",null),o([s({type:Boolean})],i.prototype,"visible",void 0),i=o([e("esri.views.Magnifier")],i);const p=i;export{p as default};

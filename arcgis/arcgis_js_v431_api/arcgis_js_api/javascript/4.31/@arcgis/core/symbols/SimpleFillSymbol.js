/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as o}from"../chunks/tslib.es6.js";import r from"../Color.js";import{J as s}from"../chunks/jsonMap.js";import{clone as i}from"../core/lang.js";import{property as t}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{e}from"../chunks/enumeration.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import n from"./FillSymbol.js";import p from"./SimpleLineSymbol.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/ensureType.js";import"../config.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../chunks/tracking.js";import"./Symbol.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/reader.js";import"../chunks/screenUtils.js";import"./LineSymbol.js";import"./LineSymbolMarker.js";import"../chunks/writer.js";import"../chunks/lineMarkers.js";var c;const a=new s({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});let m=c=class extends n{constructor(...o){super(...o),this.color=new r([0,0,0,.25]),this.outline=new p,this.type="simple-fill",this.style="solid"}normalizeCtorArgs(o,r,s){if(o&&"string"!=typeof o)return o;const i={};return o&&(i.style=o),r&&(i.outline=r),s&&(i.color=s),i}clone(){return new c({color:i(this.color),outline:this.outline&&this.outline.clone(),style:this.style})}hash(){return`${super.hash()}${this.style}.${this.color&&this.color.hash()}`}};o([t()],m.prototype,"color",void 0),o([t()],m.prototype,"outline",void 0),o([e({esriSFS:"simple-fill"},{readOnly:!0})],m.prototype,"type",void 0),o([t({type:a.apiValues,json:{read:a.read,write:a.write}})],m.prototype,"style",void 0),m=c=o([l("esri.symbols.SimpleFillSymbol")],m);const u=m;export{u as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{J as s}from"../chunks/jsonMap.js";import{JSONSupport as t}from"../core/JSONSupport.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import i from"./support/AuthoringInfo.js";import"../config.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/ensureType.js";import"../chunks/reader.js";import"./support/AuthoringInfoVisualVariable.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../Color.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";import"../chunks/enumeration.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";const p=new s({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});let n=class extends t{constructor(r){super(r),this.authoringInfo=null,this.type=null}async getRequiredFields(r){if(!this.collectRequiredFields)return[];const s=new Set;return await this.collectRequiredFields(s,r),Array.from(s).sort()}getSymbol(r,s){}async getSymbolAsync(r,s){}getSymbols(){return[]}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};r([o({type:i,json:{write:!0}})],n.prototype,"authoringInfo",void 0),r([o({type:p.apiValues,readOnly:!0,json:{type:p.jsonValues,read:!1,write:{writer:p.write,ignoreOrigin:!0}}})],n.prototype,"type",void 0),n=r([e("esri.renderers.Renderer")],n);const a=n;export{a as default};

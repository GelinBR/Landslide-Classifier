/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"../../../chunks/tslib.es6.js";import{JSONSupport as t}from"../../../core/JSONSupport.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import{I as o}from"../../../chunks/ensureType.js";import"../../../core/lang.js";import{r as e}from"../../../chunks/reader.js";import{subclass as p}from"../../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../../chunks/writer.js";import{t as a,o as c}from"../../../chunks/opacityUtils.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";var n;let l=n=class extends t{constructor(r){super(r),this.label=null,this.opacity=null,this.value=null}readOpacity(r,t){return a(t.transparency)}writeOpacity(r,t,s){t[s]=c(r)}clone(){return new n({label:this.label,opacity:this.opacity,value:this.value})}};r([s({type:String,json:{write:!0}})],l.prototype,"label",void 0),r([s({type:Number,json:{type:o,write:{target:"transparency"}}})],l.prototype,"opacity",void 0),r([e("opacity",["transparency"])],l.prototype,"readOpacity",null),r([i("opacity")],l.prototype,"writeOpacity",null),r([s({type:Number,json:{write:!0}})],l.prototype,"value",void 0),l=n=r([p("esri.renderers.visualVariables.support.OpacityStop")],l);const u=l;export{u as default};

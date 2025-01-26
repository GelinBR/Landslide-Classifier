/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as r}from"../../chunks/tslib.es6.js";import o from"../../Color.js";import{JSONSupport as s}from"../../core/JSONSupport.js";import{L as e}from"../../chunks/Logger.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import{cast as i}from"../../core/accessorSupport/decorators/cast.js";import"../../core/lang.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{f as p}from"../../chunks/ensureType.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";var n;let c=n=class extends s{constructor(r){super(r),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(r){return null==r?r:"function"==typeof r?(e.getLogger(this).error(".field: field must be a string value"),null):p(r)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new n({color:this.color?.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};r([t({type:o,json:{type:[Number],write:!0}})],c.prototype,"color",void 0),r([t({type:String,json:{write:!0}})],c.prototype,"field",void 0),r([i("field")],c.prototype,"castField",null),r([t({type:String,json:{write:!0}})],c.prototype,"label",void 0),r([t({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),r([t({type:String,json:{write:!0}})],c.prototype,"valueExpressionTitle",void 0),c=n=r([l("esri.renderers.support.AttributeColorInfo")],c);const u=c;export{u as default};

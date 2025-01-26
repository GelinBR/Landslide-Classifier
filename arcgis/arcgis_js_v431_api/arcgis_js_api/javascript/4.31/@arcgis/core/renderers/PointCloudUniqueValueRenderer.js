/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import{clone as o}from"../core/lang.js";import{property as r}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{e as s}from"../chunks/enumeration.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import i from"./PointCloudRenderer.js";import{R as n}from"../chunks/RendererLegendOptions.js";import p from"../Color.js";import{JSONSupport as l}from"../core/JSONSupport.js";import{I as u}from"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/jsonMap.js";import"../chunks/tracking.js";import"../chunks/PointSizeSplatAlgorithm.js";import"../core/Clonable.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/colorUtils.js";import"../chunks/mathUtils.js";var c;let a=c=class extends l{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new c({description:this.description,label:this.label,values:o(this.values),color:o(this.color)})}};e([r({type:String,json:{write:!0}})],a.prototype,"description",void 0),e([r({type:String,json:{write:!0}})],a.prototype,"label",void 0),e([r({type:[String],json:{write:!0}})],a.prototype,"values",void 0),e([r({type:p,json:{type:[u],write:!0}})],a.prototype,"color",void 0),a=c=e([t("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],a);const d=a;var m;let j=m=class extends i{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new m({...this.cloneProperties(),field:o(this.field),fieldTransformType:o(this.fieldTransformType),colorUniqueValueInfos:o(this.colorUniqueValueInfos),legendOptions:o(this.legendOptions)})}};e([s({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],j.prototype,"type",void 0),e([r({json:{write:!0},type:String})],j.prototype,"field",void 0),e([r({type:i.fieldTransformTypeKebabDict.apiValues,json:{type:i.fieldTransformTypeKebabDict.jsonValues,read:i.fieldTransformTypeKebabDict.read,write:i.fieldTransformTypeKebabDict.write}})],j.prototype,"fieldTransformType",void 0),e([r({type:[d],json:{write:!0}})],j.prototype,"colorUniqueValueInfos",void 0),e([r({type:n,json:{write:!0}})],j.prototype,"legendOptions",void 0),j=m=e([t("esri.renderers.PointCloudUniqueValueRenderer")],j);const f=j;export{d as C,f as default};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{clone as s}from"../../core/lang.js";import{property as e}from"../../core/accessorSupport/decorators/property.js";import{cast as r}from"../../core/accessorSupport/decorators/cast.js";import{r as o}from"../../chunks/reader.js";import{subclass as p}from"../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../chunks/writer.js";import n from"./Element.js";import{ensureType as m,fromJSON as u,toJSON as a,buildTypeMaps as c}from"../support/elements.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/metadata.js";import"../../core/Error.js";import"../../chunks/tracking.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"./AttachmentElement.js";import"./inputs/attachments/AttachmentInput.js";import"../../chunks/Input.js";import"../../core/Clonable.js";import"./inputs/attachments/support/inputs.js";import"./inputs/attachments/AudioInput.js";import"../../chunks/utils8.js";import"./inputs/attachments/DocumentInput.js";import"./inputs/attachments/ImageInput.js";import"./inputs/attachments/SignatureInput.js";import"./inputs/attachments/VideoInput.js";import"./FieldElement.js";import"./support/inputs.js";import"./inputs/BarcodeScannerInput.js";import"./inputs/TextInput.js";import"./inputs/Input.js";import"./inputs/ComboBoxInput.js";import"./inputs/DatePickerInput.js";import"./inputs/DateTimeOffsetPickerInput.js";import"./inputs/DateTimePickerInput.js";import"./inputs/RadioButtonsInput.js";import"./inputs/SwitchInput.js";import"./inputs/TextAreaInput.js";import"./inputs/TextBoxInput.js";import"./inputs/TimePickerInput.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"./RelationshipElement.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"./TextElement.js";var l;let j=l=class extends n{constructor(t){super(t),this.elements=null,this.initialState="expanded",this.type="group"}castElements(t){return m(t,h,!1)}readElements(t,s){return u(s.formElements,h,!1)}writeElements(t,s){s.formElements=a(t,h,!1)}clone(){return new l({description:this.description,elements:s(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};t([e({json:{write:!0}})],j.prototype,"elements",void 0),t([r("elements")],j.prototype,"castElements",null),t([o("elements",["formElements"])],j.prototype,"readElements",null),t([i("elements")],j.prototype,"writeElements",null),t([e({type:["collapsed","expanded"],json:{write:!0}})],j.prototype,"initialState",void 0),t([e({type:String,json:{read:!1,write:!0}})],j.prototype,"type",void 0),j=l=t([p("esri.form.elements.GroupElement")],j);const h=c(j),d=j;export{d as default};

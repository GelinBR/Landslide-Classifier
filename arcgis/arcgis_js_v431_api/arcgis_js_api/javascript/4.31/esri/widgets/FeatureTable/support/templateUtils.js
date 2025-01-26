// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../core/arrayUtils ../../../tables/elements/AttributeTableAttachmentElement ../../../tables/elements/AttributeTableFieldElement ../../../tables/elements/AttributeTableGroupElement ../../../tables/elements/AttributeTableRelationshipElement ./AttachmentsColumnTemplate ./columnUtils ./FieldColumnTemplate ./GroupColumnTemplate ./RelationshipColumnTemplate".split(" "),function(h,n,p,q,r,t,u,k,v,w,x){function l(c,d){const {description:a,label:b,type:e}=c;if("field"===e){const f=c.fieldName??
void 0;c=d.findIndex(g=>g.field&&g.field===f);d=-1<c?d.at(c)?.order:void 0;return new v({description:a,direction:d,fieldName:f,initialSortPriority:c,label:b})}if("attachment"===e)return new u({description:a,label:b});if("relationship"===e)return new x({description:a,label:b,relationshipId:c.relationshipId})}function m(c){const {fieldName:d,description:a,hidden:b,label:e}=c;if(k.isFieldColumn(c)){if(!b)return new q({description:a,fieldName:d,label:e})}else if(k.isRelationshipColumn(c)){if(!b)return new t({description:a,
label:e,relationshipId:c.relationshipId})}else if(k.isAttachmentsColumn(c)&&!b)return new p({description:a,label:e})}h.createAttributeTableElements=function(c){const d=[];c.forEach(a=>{const {description:b,label:e,hidden:f}=a;k.isGroupColumn(a)?f||(a=a.columns?.map(g=>m(g)).filter(n.isSome),a?.length&&d.push(new r({description:b,elements:a,label:e}))):(a=m(a))&&d.push(a)});return d};h.createColumnTemplates=function(c,d){const a=[];c?.forEach(b=>{const {description:e,label:f,type:g}=b;"group"===g?
(b=b.elements.map(y=>l(y,d)).filter(n.isSome),b?.length&&a.push(new w({description:e,columnTemplates:b,label:f}))):(b=l(b,d))&&a.push(b)});return a};h.createNestedAttributeTableElement=m;h.createNestedColumnTemplate=l;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
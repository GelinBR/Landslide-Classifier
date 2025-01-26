// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../PopupTemplate","../../core/Error","../../intl/messages","./support/utils"],function(g,k,l,m,f){async function n(a){const {layer:b,renderer:c}=a;await b.load();a=c||b.renderer;if("unique-value"!==a?.type)throw new l("unique-values-popup:invalid-parameters","renderer.type must be 'unique-value'");return{layer:b,renderer:a}}async function h(a,b,c="divide"){const {fieldInfos:d,expressionInfos:e}=await f.getFieldAndExpressionInfos({renderer:a,layer:b,normFieldExpressionTemplate:c});
return new k({content:await f.getContentFromFieldInfos(b,{fieldInfos:d,expressionInfos:e}),fieldInfos:d,expressionInfos:e})}g.getTemplates=async function(a){const [{renderer:b,layer:c},d]=await Promise.all([n(a),m.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);a={name:"unique-values",title:d.uniqueValues,value:await h(b,c)};const e=[];f.hasNormalizedField(b)&&e.push({name:"unique-values-percent",title:d.uniqueValuesNormFieldAsPercent,value:await h(b,c,"percentage")});return{primaryTemplate:a,
secondaryTemplates:e}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../PopupTemplate ../../core/Error ../../intl/messages ./support/utils ../../support/popupUtils".split(" "),function(g,k,l,m,f,n){async function p(a){const {layer:b,renderer:c}=a;await b.load();a=c||b.renderer;if("simple"!==a?.type)throw new l("simple-popup:invalid-parameters","renderer.type must be 'simple'");return{layer:b,renderer:a}}async function h(a,b,c="divide"){const {fieldInfos:e,expressionInfos:d}=await f.getFieldAndExpressionInfos({renderer:a,layer:b,normFieldExpressionTemplate:c});
return new k({content:await f.getContentFromFieldInfos(b,{fieldInfos:e,expressionInfos:d}),expressionInfos:d,fieldInfos:e})}g.getTemplates=async function(a){const [{renderer:b,layer:c},e]=await Promise.all([p(a),m.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);a=[];if(!f.getPrimaryVisualVariables(b).length){var d=n.createPopupTemplate(c);return d?{primaryTemplate:{name:"simple",title:e.simple,value:d},secondaryTemplates:a}:null}d={name:"simple",title:e.simple,value:await h(b,c)};f.hasNormalizedField(b)&&
a.push({name:"simple-percent",title:e.simpleNormFieldAsPercent,value:await h(b,c,"percentage")});return{primaryTemplate:d,secondaryTemplates:a}};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
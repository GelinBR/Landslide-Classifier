// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../layers/support/fieldUtils"],function(e,h){function k(a,b){return a.popupTemplate?a.popupTemplate:null!=b&&b.defaultPopupTemplateEnabled&&null!=a.defaultPopupTemplate?a.defaultPopupTemplate:null}e.getFetchPopupTemplate=k;e.getRequiredFields=async function(a,b=a.popupTemplate){if(null==b)return[];const l=await b.getRequiredFields(a.fieldsIndex);({lastEditInfoEnabled:b}=b);const {objectIdField:f,typeIdField:m,globalIdField:g,relationships:n}=a;if(l.includes("*"))return["*"];
b=b?h.getFeatureEditFields(a):[];const c=h.fixFields(a.fieldsIndex,[...l,...b]);m&&c.push(m);c&&f&&a.fieldsIndex?.has(f)&&!c.includes(f)&&c.push(f);c&&g&&a.fieldsIndex?.has(g)&&!c.includes(g)&&c.push(g);n&&n.forEach(d=>{({keyField:d}=d);c&&d&&a.fieldsIndex?.has(d)&&!c.includes(d)&&c.push(d)});return c};e.hasPopupTemplate=function(a,b){return null!=k(a,{defaultPopupTemplateEnabled:b})};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
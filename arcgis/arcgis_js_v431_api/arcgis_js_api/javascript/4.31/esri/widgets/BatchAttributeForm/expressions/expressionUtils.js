// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){f.makeExecutorSetForFormElement=async function({element:a,expressionInfos:c,provider:e}){const d={};if(a.visibilityExpression){var b=c.get(a.visibilityExpression);d.visibilityExpression=b?await e.getArcadeExecutor(b.expression):void 0}"editableExpression"in a&&a.editableExpression&&(b=c.get(a.editableExpression),d.editableExpression=b?await e.getArcadeExecutor(b.expression):void 0);"requiredExpression"in a&&a.requiredExpression&&(b=c.get(a.requiredExpression),d.requiredExpression=
b?await e.getArcadeExecutor(b.expression):void 0);"valueExpression"in a&&a.valueExpression&&(a=c.get(a.valueExpression),d.valueExpression=a?await e.getArcadeExecutor(a.expression):void 0);return d};f.makeExpressionInfosMap=function(a){return new Map(a?.map(c=>[c.name,c]))};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
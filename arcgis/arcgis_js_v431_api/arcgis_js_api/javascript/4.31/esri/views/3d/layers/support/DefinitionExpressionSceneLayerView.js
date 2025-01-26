// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../core/sql/WhereClause ../i3s/I3SUtil".split(" "),function(f,e,d,g,n,p,h,k,l){f.DefinitionExpressionSceneLayerView=c=>{c=class extends c{constructor(){super(...arguments);this._definitionExpressionErrors=0;this._maxDefinitionExpressionErrors=20;this.logError=a=>{this._definitionExpressionErrors<
this._maxDefinitionExpressionErrors&&d.getLogger(this).error("Error while evaluating definitionExpression: "+a);this._definitionExpressionErrors++;this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&d.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){if(!this.i3slayer?.definitionExpression)return null;try{const a=k.WhereClause.create(this.i3slayer.definitionExpression,{fieldsIndex:this.i3slayer.fieldsIndex});if(!a.isStandardized)return d.getLogger(this).error("definitionExpression is using non standard function"),
null;const b=[];l.findFieldsCaseInsensitive(a.fieldNames,this.i3slayer.fields,{missingFields:b});if(0<b.length)return d.getLogger(this).error(`definitionExpression references unknown fields: ${b.join(", ")}`),null;this._definitionExpressionErrors=0;return a}catch(a){return d.getLogger(this).error("Failed to parse definitionExpression: "+a),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(a,b){try{return a.testFeature(b)}catch(m){return this.logError(m),
!1}}_addDefinitionExpressionToQuery(a){if(!this.parsedDefinitionExpression)return a;const b=this.i3slayer.definitionExpression;a=a.clone();a.where=a.where?`(${b}) AND (${a.where})`:b;return a}};e.__decorate([g.property({readOnly:!0})],c.prototype,"parsedDefinitionExpression",null);e.__decorate([g.property({readOnly:!0})],c.prototype,"definitionExpressionFields",null);return c=e.__decorate([h.subclass("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],c)};Object.defineProperty(f,Symbol.toStringTag,
{value:"Module"})});
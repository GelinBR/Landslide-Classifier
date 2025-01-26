// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/arrayUtils ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../../popup/FieldInfo ../../../popup/content/support/ChartMediaInfoValueSeries ../support/featureUtils ../support/relatedFeatureUtils".split(" "),function(k,f,A,m,B,F,C,D,E,l,y){const z={chartAnimation:!0};f=class extends f{constructor(a){super(a);this.abilities=
{...z};this.activeMediaInfoIndex=0;this.expressionAttributes=this.formattedAttributes=this.fieldInfoMap=this.description=this.attributes=null;this.isAggregate=!1;this.title=this.relatedInfos=this.popupTemplate=this.mediaInfos=this.layer=null}castAbilities(a){return{...z,...a}}get activeMediaInfo(){return this.formattedMediaInfos[this.activeMediaInfoIndex]||null}get formattedMediaInfos(){return this._formatMediaInfos()||[]}get formattedMediaInfoCount(){return this.formattedMediaInfos.length}setActiveMedia(a){this._setContentElementMedia(a)}next(){this._pageContentElementMedia(1)}previous(){this._pageContentElementMedia(-1)}_setContentElementMedia(a){const {formattedMediaInfoCount:c}=
this;this.activeMediaInfoIndex=(a+c)%c}_pageContentElementMedia(a){const {activeMediaInfoIndex:c}=this;this._setContentElementMedia(c+a)}_formatMediaInfos(){const {mediaInfos:a,layer:c}=this,d=this.attributes??{},g=this.formattedAttributes??{},n=this.expressionAttributes??{},e=this.fieldInfoMap??new Map;return a?.map(b=>{b=b?.clone();if(!b)return null;b.title=l.substituteFieldsInLinksAndAttributes({attributes:d,fieldInfoMap:e,globalAttributes:g,expressionAttributes:n,layer:c,text:b.title});b.caption=
l.substituteFieldsInLinksAndAttributes({attributes:d,fieldInfoMap:e,globalAttributes:g,expressionAttributes:n,layer:c,text:b.caption});b.altText=l.substituteFieldsInLinksAndAttributes({attributes:d,fieldInfoMap:e,globalAttributes:g,expressionAttributes:n,layer:c,text:b.altText});if("image"===b.type){if(!b.value)return;this._setImageValue({value:b.value,formattedAttributes:g,layer:c});return b.value.sourceURL?b:void 0}if("pie-chart"===b.type||"line-chart"===b.type||"column-chart"===b.type||"bar-chart"===
b.type){if(!b.value)return;this._setChartValue({value:b.value,chartType:b.type,attributes:d,formattedAttributes:g,layer:c,expressionAttributes:n});return b}return null}).filter(A.isSome)??[]}_setImageValue(a){const c=this.fieldInfoMap??new Map,{value:d,formattedAttributes:g,layer:n}=a,{linkURL:e,sourceURL:b}=d;b&&(a=l.fixTokens(b,n),d.sourceURL=l.substituteAttributes({formattedAttributes:g,template:a,fieldInfoMap:c}));e&&(a=l.fixTokens(e,n),d.linkURL=l.substituteAttributes({formattedAttributes:g,
template:a,fieldInfoMap:c}))}_setChartValue(a){const {value:c,attributes:d,formattedAttributes:g,chartType:n,layer:e,expressionAttributes:b}=a,{popupTemplate:u,relatedInfos:v}=this,{fields:r,normalizeField:x}=c;c.fields=l.getFixedFieldNames(r,e);x&&(c.normalizeField=l.getFixedFieldName(x,e));if(r.some(h=>!!(null!=g[h]||l.isRelatedField(h)&&v?.size))){var p=u?.fieldInfos??[];r.forEach((h,q)=>{q=c.colors?.[q];l.isRelatedField(h)?c.series=[...c.series,...this._getRelatedChartInfos({fieldInfos:p,fieldName:h,
formattedAttributes:g,chartType:n,value:c,color:q})]:(h=this._getChartOption({value:c,attributes:d,chartType:n,formattedAttributes:g,expressionAttributes:b,fieldName:h,fieldInfos:p,color:q}),c.series.push(h))})}}_getRelatedChartInfos(a){const {fieldInfos:c,fieldName:d,formattedAttributes:g,chartType:n,value:e,color:b}=a,u=[],v=y.getRelatedFieldInfo(d);a=v&&this.relatedInfos?.get(v.layerId.toString());if(!a)return u;const {relatedFeatures:r,relation:x}=a;if(!x||!r)return u;({cardinality:a}=x);r.forEach(p=>
{const {attributes:h}=p;h&&Object.keys(h).forEach(q=>{q===v.fieldName&&u.push(this._getChartOption({value:e,attributes:h,formattedAttributes:g,fieldName:d,chartType:n,relatedFieldName:q,hasMultipleRelatedFeatures:1<r?.length,fieldInfos:c,color:b}))})});return"one-to-many"===a||"many-to-many"===a?u:[u[0]]}_getTooltip({label:a,value:c,chartType:d}){return"pie-chart"===d?`${a}`:`${a}: ${c}`}_getChartOption(a){const {value:c,attributes:d,formattedAttributes:g,expressionAttributes:n,fieldName:e,relatedFieldName:b,
fieldInfos:u,chartType:v,hasMultipleRelatedFeatures:r,color:x}=a;var p=this.layer,h=this.fieldInfoMap??new Map;const {normalizeField:q,tooltipField:w}=c;a=q?l.isRelatedField(q)?d[y.getRelatedFieldInfo(q).fieldName]:d[q]:null;var t=l.isExpressionField(e)&&n&&void 0!==n[e]?n[e]:b&&void 0!==d[b]?d[b]:void 0!==d[e]?d[e]:g[e];a=new E({fieldName:e,color:x,value:void 0===t?null:t&&a?t/a:t});if(l.isRelatedField(e))return p=h.get(e.toLowerCase()),t=w&&h.get(w.toLowerCase()),h=p?.fieldName??e,t=r&&w?y.getRelatedFieldInfo(w).fieldName:
t?.fieldName??w,a.tooltip=this._getTooltip({label:r&&t?d[t]:g[t]??p?.label??p?.fieldName??b,value:r&&b?d[b]:g[h],chartType:v}),a;h=l.getFieldInfo(u,e);p=l.getFixedFieldName(e,p);h=w&&void 0!==g[w]?g[w]:l.getFieldInfoLabel(h||new D({fieldName:p}),this.popupTemplate?.expressionInfos);a.tooltip=this._getTooltip({label:h,value:g[p],chartType:v});return a}};k.__decorate([m.property()],f.prototype,"abilities",void 0);k.__decorate([B.cast("abilities")],f.prototype,"castAbilities",null);k.__decorate([m.property()],
f.prototype,"activeMediaInfoIndex",void 0);k.__decorate([m.property({readOnly:!0})],f.prototype,"activeMediaInfo",null);k.__decorate([m.property()],f.prototype,"attributes",void 0);k.__decorate([m.property()],f.prototype,"description",void 0);k.__decorate([m.property()],f.prototype,"fieldInfoMap",void 0);k.__decorate([m.property()],f.prototype,"formattedAttributes",void 0);k.__decorate([m.property()],f.prototype,"expressionAttributes",void 0);k.__decorate([m.property({readOnly:!0})],f.prototype,"formattedMediaInfos",
null);k.__decorate([m.property()],f.prototype,"isAggregate",void 0);k.__decorate([m.property()],f.prototype,"layer",void 0);k.__decorate([m.property({readOnly:!0})],f.prototype,"formattedMediaInfoCount",null);k.__decorate([m.property()],f.prototype,"mediaInfos",void 0);k.__decorate([m.property()],f.prototype,"popupTemplate",void 0);k.__decorate([m.property()],f.prototype,"relatedInfos",void 0);k.__decorate([m.property()],f.prototype,"title",void 0);return f=k.__decorate([C.subclass("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")],
f)});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Accessor ../../core/has ../../core/Logger ../../core/MapUtils ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(h,m,w,z,x,r,t,n,A,y){h.FormExpressionsManager=class extends w{constructor(a){super(a);this._fieldReferencesLookup=new Map;this._fieldsAffectedLookup=new Map;this.preserveFieldValuesWhenHidden=!0;this._latestFieldValues={...a.feature.attributes}}initialize(){this._dependencyGraph=
this._buildDependencyGraph()}destroy(){this.resetExecutors()}get _asyncExecutors(){return this.executors.filter(a=>a.isAsync)}get _baseContext(){const {editType:a,layer:c,map:e,originalFeature:d,spatialReference:k,timeZone:b}=this.arcadeContextInfo,l="scene"===c?.type&&null!=c.associatedLayer?c.associatedLayer:c;return[{$originalfeature:d,$editcontext:{editType:a},$layer:l,$featureset:l,$datastore:c?.url,$map:e},{rawOutput:!0,spatialReference:k??void 0,timeZone:b}]}set feature(a){this._latestFieldValues=
{...a?.attributes};this._set("feature",a)}evaluateAll(){return this._evaluate(this.executors)}evaluateAsyncExpressions(){return this._evaluate(this._asyncExecutors)}evaluateExpressions(a){return this._evaluate(a)}evaluateInvalidated(a){const {_fieldReferencesLookup:c,_latestFieldValues:e,feature:d}=this,k=new Set;for(const b of a)if(e[b]=d.getAttribute(b),c.has(b))for(const l of c.get(b))k.add(l);return this._evaluate([...k])}async evaluateInvalidatedByGeometry(){if(this._fieldReferencesLookup.has("#JSAPI_FORM_EXPRESSIONS_MANAGER_GEOMETRY"))return this._evaluate([...this._fieldReferencesLookup.get("#JSAPI_FORM_EXPRESSIONS_MANAGER_GEOMETRY")])}resetExecutors(){for(const a of this.executors)a.reset()}_buildDependencyGraph(){const {_fieldReferencesLookup:a,
_fieldsAffectedLookup:c,executors:e,preserveFieldValuesWhenHidden:d}=this,k=new Map(this.fieldInputs.map(f=>[f.name,f])),b=!1===d,l=new Map(e.map(f=>[f,[]]));for(const f of e){for(const g of f.fieldsUsed){r.getOrCreateMapValue(a,g,()=>new Set).add(f);const p=k.get(g);[p?.valueExpressionExecutor,p?.editableExpressionExecutor,b?p?.group?.visibilityExpressionExecutor:null,b?p?.visibilityExpressionExecutor:null].filter(q=>null!=q&&q!==f).forEach(q=>{l.get(q).push(f);r.getOrCreateMapValue(c,q,()=>new Set).add(p)})}f.geometryUsed&&
r.getOrCreateMapValue(a,"#JSAPI_FORM_EXPRESSIONS_MANAGER_GEOMETRY",()=>new Set).add(f)}return l}async _evaluate(a){const c=new Map,{_dependencyGraph:e,_fieldsAffectedLookup:d,_latestFieldValues:k}=this;for(const b of a)u(b,c,e);for(const [b,{resolver:l,dependencyPromises:f}]of c)Promise.all(f).then(async()=>{const [g,p]=this._makeContext(k);return b.executeAsync(g,p)}).then(()=>{if(d.has(b))for(const g of d.get(b))this._latestFieldValues[g.name]=g.value;l.resolve()},g=>{!g||t.isAbortError(g)||v(g)||
b.markStale();l.reject(g)});a=(await Promise.allSettled(Array.from(c.values(),({resolver:b})=>b.promise))).filter(b=>"rejected"===b.status&&!(t.isAbortError(b.reason)||v(b.reason)));if(0<a.length)throw a=new AggregateError(a,`One or more expression executions failed. First error message: ${a[0].reason}`),x.getLogger(this).error(a),a;}_makeContext(a){const [c,e]=this._baseContext,d=this.feature.clone();d.attributes=a;return[{...c,$feature:d},e]}get test(){}};m.__decorate([n.property()],h.FormExpressionsManager.prototype,
"_asyncExecutors",null);m.__decorate([n.property()],h.FormExpressionsManager.prototype,"_baseContext",null);m.__decorate([n.property()],h.FormExpressionsManager.prototype,"feature",null);m.__decorate([n.property({constructOnly:!0})],h.FormExpressionsManager.prototype,"preserveFieldValuesWhenHidden",void 0);m.__decorate([n.property()],h.FormExpressionsManager.prototype,"executors",void 0);m.__decorate([n.property()],h.FormExpressionsManager.prototype,"fieldInputs",void 0);m.__decorate([n.property()],
h.FormExpressionsManager.prototype,"arcadeContextInfo",void 0);h.FormExpressionsManager=m.__decorate([y.subclass("esri.widgets.FeatureForm.FormExpressionsManager")],h.FormExpressionsManager);const u=(a,c,e)=>{if(!c.has(a)){var d=t.createResolver();c.set(a,{resolver:d,dependencyPromises:[]});a.abort();a=e.get(a);for(const k of a)u(k,c,e),c.get(k).dependencyPromises.push(d.promise)}},v=a=>a&&"object"===typeof a&&"message"in a&&"Cancelled"===a.message;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
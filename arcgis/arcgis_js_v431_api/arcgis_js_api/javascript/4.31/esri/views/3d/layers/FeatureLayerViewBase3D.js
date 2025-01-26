// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/tslib.es6 ../../../core/Error ../../../core/has ../../../core/maybe ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../layers/graphics/dehydratedFeatures ./FeatureLikeLayerView3D ./LayerView3D ./graphics/FeatureGraphics3DGraphicsPipeline ../support/updatingProperties ../webgl-engine/lib/UpdatePolicy ../../layers/FeatureLayerView ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),
function(m,e,n,p,q,k,f,c,C,r,t,u,v,w,x,y,z,A,B){c=class extends B(u.FeatureLikeLayerView3D(z(v.LayerView3D(A)))){constructor(a){super(a)}initialize(){this.addHandles(k.watch(()=>this._updatingRequiredFieldsPromise,a=>this._updatingHandles.addPromise(a),k.syncAndInitial))}destroy(){this._updatingHandles.removeAll();this._fetcherContext=q.destroyMaybe(this._fetcherContext)}get maximumNumberOfFeatures(){return this.graphicsPipeline.maximumNumberOfFeatures}set maximumNumberOfFeatures(a){this.graphicsPipeline.maximumNumberOfFeatures=
a}get maximumNumberOfFeaturesExceeded(){return null!=this.graphicsPipeline&&!this.suspended&&this.graphicsPipeline.maximumNumberOfFeaturesExceeded}get updatingProgressValue(){return this.graphicsPipeline?.updatingProgressValue??0}get updatePolicy(){return this.graphicsPipeline?.updatePolicy??y.UpdatePolicy.ASYNC}get hasZ(){const a=this.layer,b=a.capabilities&&a.capabilities.data;return b&&b.supportsZ?"returnZ"in a&&null!=a.returnZ?a.returnZ:b.supportsZ:!1}get hasM(){const a=this.layer,b=a.capabilities&&
a.capabilities.data;return b&&b.supportsM?"returnM"in a&&null!=a.returnM?a.returnM:!1:!1}setVisibility(a,b){this.graphicsPipeline?.setVisibility(a,b)}createQuery(){return super.createQuery()}queryFeatures(a,b){const d=()=>super.queryFeatures(a,b);return"mesh"===this.layer.geometryType?this._queryFeaturesMesh(this._ensureQuery(a),d):d()}async createGraphicsPipeline(){if(p("feature-pipeline-3d-test")){const {Feature3DPipeline:a}=await new Promise((b,d)=>m(["./graphics/pipeline/Feature3DPipeline"],b,
d));return new a({layerView:this})}return new w.FeatureGraphics3DGraphicsPipeline({layerView:this})}async doRefresh(a){return await this.graphicsPipeline.doRefresh(a)}_popupFeatureHasRequiredFields(a,b){if(!super._popupFeatureHasRequiredFields(a,b))return!1;a=t.getObjectId(a,this.layer.objectIdField);if(null==a)return!0;a=this.graphicsPipeline.getMissingAttributesForFeature(a);if(null==a)return!0;for(const d of b)if(a.has(d))return!1;return!0}get usedMemory(){return this.graphicsPipeline?.usedMemory??
0}get unloadedMemory(){return this.graphicsPipeline?.unloadedMemory??0}get ignoresMemoryFactor(){return this.graphicsPipeline?.ignoresMemoryFactor??!1}async _queryFeaturesMesh(a,b){await this._validateQueryFeaturesMesh(a);b=await b();const d=this.graphicsPipeline;if(a?.outStatistics||null==d)return b;a=this.layer.objectIdField;const g=[];for(const h of b.features)if(h.geometry){const l=d.getHydratedGeometry(h.attributes[a]);l&&(h.geometry=l,g.push(h))}else g.push(h);b.features=g;return b}async _validateQueryFeaturesMesh(a){if(a){var b=
g=>{throw new n("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${g}'`);},d=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const g of d)null!=a[g]&&b(g);"returnM"in a&&a.returnM&&b("returnM");"returnCentroid"in a&&a.returnCentroid&&b("returnCentroid");null==a.outSpatialReference||a.outSpatialReference.equals(this.view.spatialReference)||b("outSpatialReference")}}get test(){}};e.__decorate([f.property()],c.prototype,"layer",
void 0);e.__decorate([f.property()],c.prototype,"graphicsPipeline",void 0);e.__decorate([f.property()],c.prototype,"maximumNumberOfFeatures",null);e.__decorate([f.property()],c.prototype,"maximumNumberOfFeaturesExceeded",null);e.__decorate([f.property(x.updatingProgress)],c.prototype,"updatingProgress",void 0);e.__decorate([f.property({readOnly:!0})],c.prototype,"updatingProgressValue",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"updatePolicy",null);e.__decorate([f.property({readOnly:!0})],
c.prototype,"hasZ",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"hasM",null);return c=e.__decorate([r.subclass("esri.views.3d.layers.FeatureLayerViewBase3D")],c)});
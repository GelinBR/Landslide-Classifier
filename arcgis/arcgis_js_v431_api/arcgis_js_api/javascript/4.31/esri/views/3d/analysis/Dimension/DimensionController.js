// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../analysis/dimensionUtils ../../../../core/Accessor ../../../../core/handleUtils ../../../../core/Logger ../../../../core/reactiveUtils ../../../../core/unitUtils ../../../../core/accessorSupport/decorators/property ../../../../core/has ../../../../core/RandomLCG ../../../../core/accessorSupport/decorators/subclass ../../../../support/getDefaultUnitForView ./lengthDimensionUtils ../../../support/geodesicMeasurementUtils".split(" "),function(c,
d,k,l,m,n,g,p,e,u,v,q,r,f,t){c.DimensionController=class extends l{constructor(b){super(b)}initialize(){const b=g.mapCollection(()=>this.analysisViewData.computations,({computation:a})=>this._watchComputation(a));this.addHandles(m.destroyHandle(b))}get analysis(){return this.analysisViewData.analysis}get _defaultUnit(){return r.getDefaultUnitForView(this.view)}_watchComputation(b){return g.watch(()=>f.computationToGeometryDependencies(b),a=>{const {measureType:h}=a;f.isGeodesicDimension(a)&&h!==k.LengthDimensionMeasureType.Direct?
(a=Math.round(p.convertUnit(t.geodesicDistanceThreshold,"meters","kilometers")),n.getLogger(this).warnOnce(`A ${h} dimension in the analysis (id: '${this.analysis.id}') will not `+"display, because only direct dimensions can measure lengths greater than "+`${a} km. Update the measureType of the affected dimension to "direct" to display it.`),b.geometry=null):(a=f.computeGeometryFromDimension(a,this.view.renderCoordsHelper,b.geometry),b.geometry=a,b.result.length=f.computeLength(a,h,this._defaultUnit))},
g.syncAndInitial)}};d.__decorate([e.property({constructOnly:!0})],c.DimensionController.prototype,"analysisViewData",void 0);d.__decorate([e.property({constructOnly:!0})],c.DimensionController.prototype,"view",void 0);d.__decorate([e.property()],c.DimensionController.prototype,"analysis",null);d.__decorate([e.property()],c.DimensionController.prototype,"_defaultUnit",null);c.DimensionController=d.__decorate([q.subclass("esri.views.3d.analysis.Dimension.DimensionController")],c.DimensionController);
Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
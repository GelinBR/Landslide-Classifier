// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../analysis/AreaMeasurementAnalysis ../../core/reactiveUtils ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../properties/defaultUnit ../../views/3d/interactive/measurementTools/areaMeasurement3D/AreaMeasurement3DTool ../support/InteractiveAnalysisViewModel".split(" "),function(d,k,l,g,e,b,t,u,n,p,q,r){b=class extends r.InteractiveAnalysisViewModel{constructor(a){super(a);
this.analysis=null;this.supportedViewType="3d";this.unsupportedErrorMessage="AreaMeasurement3DViewModel is only supported in 3D views.";this._userUnit=this._userUnitOptions=null}initialize(){this.addHandles(l.watch(()=>({analysis:this.analysis,unit:this.unit}),({analysis:a,unit:c})=>{null!=a&&(a.unit=c)},l.syncAndInitial))}get state(){return this.disabled||!this.ready?"disabled":null==this.tool?"ready":this.tool.state}get measurement(){if(null==this.tool||this.disabled||this.tool.destroyed)return null;
var {analysisView:a}=this;if(null==a)return null;a=a.analysisVisualization;const c=a.viewData,f=c.validMeasurement,h=0===c.intersectingSegments.size,m=h?f?"available":"unavailable":"invalid";return{mode:"euclidean"===c.mode?"euclidean":"geodesic",area:{text:h&&f?a.areaLabel:null,state:m},perimeterLength:{text:h&&f?a.perimeterLengthLabel:null,state:m}}}set unitOptions(a){this._userUnitOptions=a;this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(a){this._userUnit=
a?this._findSelectableUnit(a,this._userUnit):null}get unit(){return null!=this._userUnit?this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit):this._findSelectableUnit(this.defaultUnit)}constructAnalysis(){return new k}constructTool(){return new q({view:this.view,analysis:this.analysis,analysisViewData:this.analysisView,visible:this.visible})}_findSelectableUnit(a,c){const {unitOptions:f}=this;return f.includes(a)?a:null!=c?this._findSelectableUnit(c):f[0]}_filteredOrAllUnits(a){if(null==
a)return g.measurementAreaUnits.slice();a=a.filter(c=>g.measurementAreaUnits.includes(c));return 0===a.length?g.measurementAreaUnits.slice():a}};d.__decorate([e.property({type:k})],b.prototype,"analysis",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"state",null);d.__decorate([e.property({readOnly:!0})],b.prototype,"measurement",null);d.__decorate([e.property()],b.prototype,"unitOptions",null);d.__decorate([e.property()],b.prototype,"unit",null);d.__decorate([e.property(p.defaultUnitPropertyMetadata)],
b.prototype,"defaultUnit",void 0);d.__decorate([e.property()],b.prototype,"_userUnit",void 0);return b=d.__decorate([n.subclass("esri.widgets.AreaMeasurement3D.AreaMeasurement3DViewModel")],b)});
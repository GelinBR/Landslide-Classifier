// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../analysis/SliceAnalysis ../../core/Collection ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../support/AnalysisViewModel".split(" "),function(c,f,g,d,b,l,m,h,k){const e=new Set;b=class extends k.AnalysisViewModel{constructor(a){super(a);this.analysis=null;this.supportedViewType="3d";this.unsupportedErrorMessage="SliceViewModel is only supported in 3D views.";e.add(this)}destroy(){e.delete(this)}get state(){return this.disabled||
!this.ready?"disabled":null==this.tool?"ready":this.tool.state}get shape(){return this.analysis.shape}set shape(a){this.analysis.shape=a}get tiltEnabled(){return this.analysis.tiltEnabled}set tiltEnabled(a){this.analysis.tiltEnabled=a}get layersMode(){return this.tool?.layersMode??"none"}get excludedLayers(){return this.analysis.excludedLayers}set excludedLayers(a){this.analysis.excludedLayers=g.isCollection(a)?a:new g(a)}get excludeGroundSurface(){return this.analysis.excludeGroundSurface}set excludeGroundSurface(a){this.analysis.excludeGroundSurface=
a}async start(){await super.start();e.forEach(a=>{a.view===this.view&&a!==this&&a.clear()});null!=this.analysisView&&(this.analysisView.active=!0)}enterExcludeLayerMode(){null!=this.tool&&this.tool.enterExcludeLayerMode()}exitExcludeLayerMode(){null!=this.tool&&this.tool.exitExcludeLayerMode()}onConnectToAnalysisView(a){a.active=!0}constructAnalysis(){return new f}};c.__decorate([d.property({type:f})],b.prototype,"analysis",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);
c.__decorate([d.property()],b.prototype,"shape",null);c.__decorate([d.property()],b.prototype,"tiltEnabled",null);c.__decorate([d.property()],b.prototype,"layersMode",null);c.__decorate([d.property()],b.prototype,"excludedLayers",null);c.__decorate([d.property({nonNullable:!0})],b.prototype,"excludeGroundSurface",null);return b=c.__decorate([h.subclass("esri.widgets.Slice.SliceViewModel")],b)});
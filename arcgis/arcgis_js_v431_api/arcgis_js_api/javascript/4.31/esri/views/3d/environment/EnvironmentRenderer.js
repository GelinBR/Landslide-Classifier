// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/has ../../../core/maybe ../../../core/reactiveUtils ../../../core/signal ../../../core/accessorSupport/decorators/property ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../chunks/vec32 ../../../geometry/ellipsoidUtils ./Clouds ./CloudsPresets ./CloudsRenderer ./Precipitation ./weather ../webgl-engine/effects/RenderPlugin".split(" "),function(d,e,x,f,c,k,h,y,z,l,m,n,p,q,r,t,u,v){d.EnvironmentRenderer=
class extends v.SyncRenderPlugin{constructor(a){super(a);this.produces=new Map([]);this._clouds=k.signal(null);this._incarnation=0;this._precipitation=null}initialize(){this.view._stage.addRenderPlugin(this)}destroy(){this.removeHandles();this.uninitializeRenderContext();this.view?._stage?.removeRenderPlugin(this);this._set("view",null)}get updating(){return!!this._clouds.value?.running}get weatherVisible(){return m.length(this.view.state.camera.eye)-n.getReferenceEllipsoid(this.view.spatialReference).radius<=
u.heightLimit}get usedMemory(){return this._clouds.value?.usedMemory??0}_fadeOutPrecipitation(){this._precipitation&&(this._precipitationOutgoing?.destroy(),this._precipitationOutgoing=this._precipitation,this._precipitationOutgoing.fadeOut(()=>{this._precipitationOutgoing=f.destroyMaybe(this._precipitationOutgoing)}),this._precipitation=null,++this._incarnation)}get weather(){return this.view?.environmentManager?.weatherEnabled?this.view.environment.weather:null}initializeRenderContext(a){this._context=
a;const b=this.view;a=()=>this._requestRender();this.addHandles([c.watch(()=>this._precipitation,a,c.sync),c.watch(()=>this._clouds.value?.state,a,c.sync),c.watch(()=>b.state.mode,a,c.sync),c.watch(()=>this._updateClouds(),a,c.sync),c.watch(()=>this._updatePrecipitation(),a,c.sync),c.watch(()=>this.weather,g=>this._initWeather(g))])}uninitializeRenderContext(){this._context=null;this._clouds.value=f.destroyMaybe(this._clouds.value);this._precipitation=f.destroyMaybe(this._precipitation);this._precipitationOutgoing=
f.destroyMaybe(this._precipitationOutgoing)}prepareRender(a){const {bind:b,time:g}=a;"local"!==this.view.viewingMode&&b.clouds.data&&(b.clouds.fade(b.camera,g,this.view.qualitySettings.fadeDuration),(a=this._clouds.value)&&a.state===p.CubeMapState.Idle&&0===a.coverage&&!a.running&&a.destroyCubeMap())}acquireTechniques(){return[]}render(){}_requestRender(){this._context?.requestRender()}_initWeather(a){const b=this._context;a&&b?this._clouds.value||(this._clouds.value=new r.CloudsRenderer({context:b,
view:this.view,requestRender:()=>this._requestRender()})):this._clouds.value=f.destroyMaybe(this._clouds.value)}_updateClouds(){var a=this.view.environment.weather;if(null==a||null==this._clouds.value)return++this._incarnation;var b=this._clouds.value,g=b.applyPreset,w=q.cloudPresets[a.type];a:{switch(a.type){case "rainy":case "snowy":case "cloudy":case "sunny":a=a.cloudCover;break a;case "foggy":a=a.fogStrength;break a}a=void 0}g.call(b,w,a);return++this._incarnation}_updatePrecipitation(){const a=
this.view.environment.weather;if(a.type===this._precipitation?.type)return this._incarnation;this._fadeOutPrecipitation();const b=this._context;"rainy"!==a.type&&"snowy"!==a.type||!b||(this._precipitation=new t.Precipitation({view:this.view,techniques:b.techniques,type:a.type}),++this._incarnation);return this._incarnation}get test(){}};e.__decorate([h.property({constructOnly:!0})],d.EnvironmentRenderer.prototype,"view",void 0);e.__decorate([h.property({type:Boolean,readOnly:!0})],d.EnvironmentRenderer.prototype,
"updating",null);e.__decorate([h.property({readOnly:!0})],d.EnvironmentRenderer.prototype,"weatherVisible",null);e.__decorate([h.property()],d.EnvironmentRenderer.prototype,"_context",void 0);d.EnvironmentRenderer=e.__decorate([l.subclass("esri.views.3d.environment.EnvironmentRenderer")],d.EnvironmentRenderer);Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
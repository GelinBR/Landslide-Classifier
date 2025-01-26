// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Accessor ../core/Collection ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/subclass".split(" "),function(c,a,f,g,e,k,l,m,h){a=class extends a{constructor(b){super(b);this.view=null;this.baseLayerViews=new f;this.referenceLayerViews=new f;this._loadingHandle=g.watch(()=>this.view?.map?.basemap,d=>{d&&d.load().catch(()=>{})},g.initial)}destroy(){this._set("view",null);
this._loadingHandle&&(this._loadingHandle.remove(),this._loadingHandle=null);for(const b of this.baseLayerViews)b.destroy();this.baseLayerViews.length=0;for(const b of this.referenceLayerViews)b.destroy();this.referenceLayerViews.length=0}get suspended(){return this.view?this.view.suspended:!0}get updating(){if(this.view?.suspended)return!1;const b=this.view?.map?.basemap;return b&&b.loaded?this.baseLayerViews.some(d=>d.updating)||this.referenceLayerViews.some(d=>d.updating):!1}};c.__decorate([e.property({constructOnly:!0})],
a.prototype,"view",void 0);c.__decorate([e.property({readOnly:!0})],a.prototype,"baseLayerViews",void 0);c.__decorate([e.property({readOnly:!0})],a.prototype,"referenceLayerViews",void 0);c.__decorate([e.property({readOnly:!0})],a.prototype,"suspended",null);c.__decorate([e.property({type:Boolean,readOnly:!0})],a.prototype,"updating",null);return a=c.__decorate([h.subclass("esri.views.BasemapView")],a)});
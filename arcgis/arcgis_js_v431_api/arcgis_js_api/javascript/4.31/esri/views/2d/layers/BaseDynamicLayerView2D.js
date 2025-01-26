// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Logger ../../../core/promiseUtils ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../engine/BitmapContainer ./LayerView2D ./support/ExportStrategy ../../layers/LayerView ../../layers/RefreshableLayerView".split(" "),function(c,f,g,e,a,r,h,k,l,m,n,p){a=class extends p(l.LayerView2DMixin(n)){update(d){this._strategy.update(d).catch(b=>{g.isAbortError(b)||f.getLogger(this).error(b)});
this.notifyChange("updating")}attach(){this._bitmapContainer=new k.BitmapContainer;this.container.addChild(this._bitmapContainer);this._strategy=new m({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy();this._strategy=null;this.container.removeChild(this._bitmapContainer);this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(d,b,q){return this.layer.fetchImageBitmap(d,
b,q)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};c.__decorate([e.property()],a.prototype,"_strategy",void 0);c.__decorate([e.property()],a.prototype,"updating",void 0);return a=c.__decorate([h.subclass("esri.views.2d.layers.BaseDynamicLayerView2D")],a)});
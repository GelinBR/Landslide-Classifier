// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Logger ../../../core/has ../../../core/RandomLCG ../../../core/Error ../../../core/accessorSupport/decorators/subclass ../engine/BitmapTileContainer".split(" "),function(b,c,f,g,h,k,d,e){b.BitmapTileLayerView2D=a=>{a=class extends a{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`);this._bitmapView=new e.BitmapTileContainer(this._tileInfoView);this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView);
this._bitmapView?.removeAllChildren();this._bitmapView=null}};return a=c.__decorate([d.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],a)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
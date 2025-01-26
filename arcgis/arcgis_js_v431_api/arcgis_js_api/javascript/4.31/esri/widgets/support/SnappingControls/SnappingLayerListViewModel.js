// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Collection ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../LayerList/LayerListViewModel ./snappingLayerListUtils ./SnappingListItem".split(" "),function(b,c,e,d,l,m,n,f,g,h,k){b.SnappingLayerListViewModel=class extends g{constructor(){super(...arguments);this.featureSnappingSources=new e}get operationalItemsFlat(){return this.operationalItems.flatten(a=>
a.children)}get selectableItems(){return this.operationalItemsFlat.filter(a=>!a.children?.length)}_compileList(){var a=this.view?.map?.layers;a&&(a=a.filter(h.isValidSnappingLayer),this._watchLayersListMode(a),a=this._getViewableLayers(a),a?.length?(this._createNewItems(a),this._removeItems(a),this._sortItems(a)):this._removeAllItems())}_createListItem(a){return new k.SnappingListItem({layer:a,view:this.view,getFeatureSnappingSources:()=>this.featureSnappingSources})}};c.__decorate([d.property()],
b.SnappingLayerListViewModel.prototype,"featureSnappingSources",void 0);c.__decorate([d.property()],b.SnappingLayerListViewModel.prototype,"operationalItems",void 0);c.__decorate([d.property()],b.SnappingLayerListViewModel.prototype,"operationalItemsFlat",null);c.__decorate([d.property()],b.SnappingLayerListViewModel.prototype,"selectableItems",null);b.SnappingLayerListViewModel=c.__decorate([f.subclass("esri.widgets.support.SnappingControls.SnappingLayerListViewModel")],b.SnappingLayerListViewModel);
Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
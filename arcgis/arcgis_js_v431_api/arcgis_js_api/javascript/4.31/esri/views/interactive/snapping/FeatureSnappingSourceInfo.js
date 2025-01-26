// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/has ../../../core/Logger ../../../core/reactiveUtils ../../../core/sql ../../../core/accessorSupport/decorators/property ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../layers/support/FeatureFilter ../../../layers/support/floorFilterUtils ../../../layers/support/layerUtils ./snappingUtils ../../support/layerViewUtils".split(" "),function(d,f,x,y,z,n,u,h,E,A,p,B,l,v,C){function r(a,b){return null==
a?new p({where:b}):a.where?new p({where:u.sqlAnd(a.where,b)}):new p({where:b})}d.FeatureSnappingSourceInfo=class extends x{set attributeRulesEnabled(a){this._set("attributeRulesEnabled",a);a&&this.loadRules()}get layerView(){return this.view?.allLayerViews?.find(a=>a.layer===this.layer)}get valid(){const {_valid:a,snappingSource:b,layer:c}=this;return b&&c?a:!1}get subtypeFilter(){const {layer:a,snappingSource:b}=this;if(!l.isSubtypeGroupLayer(a)||!a.subtypes?.length||!b)return{mode:"not-in-use",
filter:null};const c=b.layerSource.sublayerSources.filter(e=>e.enabled&&e.layer.visible&&C.scaleBoundsPredicate(this.view?.scale,e.layer.effectiveScaleRange.minScale,e.layer.effectiveScaleRange.maxScale)).map(e=>e.layer.subtypeCode);if(!c.length)return{mode:"none-visible",filter:null};if(c.length===a.subtypes.length)return{mode:"all-visible",filter:null};const g=a.fieldsIndex.get(a.subtypeField)?.name??a.subtypeField;return 1===c.length?{mode:"in-use",filter:`${g} = ${c.getItemAt(0)}`}:{mode:"in-use",
filter:`${g} IN (${c.join(", ")})`}}get floorFilter(){const {view:a,layer:b}=this;return a&&b?B.getFloorFilterClause({view:a,layer:b}):null}constructor(a){super(a);this._valid=this.rulesTable=this.snappingSource=this.layer=null}initialize(){if(this.snappingSource&&this.layer){var {layer:a,snappingSource:b}=this;"refresh"in a&&this.addHandles(a.on("refresh",()=>b.refresh()));this.loadRules();this.addHandles([n.watch(()=>b.updating,c=>b.layerSource.updating=c,n.syncAndInitial),n.watch(()=>b.availability,
c=>b.layerSource.availability=c,n.syncAndInitial)])}else this._valid=!1}getFetchCandidatesParameters(a,b,c){if(!this.valid)return[];const {layer:g,layerView:e,floorFilter:w,rulesTable:t,subtypeFilter:m}=this;a={distance:c,mode:this.view?.type??"2d",point:a,coordinateHelper:b.coordinateHelper,returnEdge:!0,vertexMode:"all",filter:e&&"filter"in e?e.filter:null};w&&(a.filter=r(a.filter,w));if("not-in-use"!==m.mode&&"all-visible"!==m.mode){if("none-visible"===m.mode)return[];a.filter?a.filter.where=u.sqlAnd(a.filter.where,
m.mode):a.filter=new p({where:m.filter})}if(!this.attributeRulesEnabled)return[a];c=b.feature;const q="subtype-sublayer"===c?.sourceLayer?.type?c.sourceLayer.parent:c?.sourceLayer;if(t&&c&&v.isUtilityNetworkWebMap(this.view?.map)&&(l.isFeatureLayer(g)||l.isSubtypeGroupLayer(g))&&g.layerId&&(l.isFeatureLayer(q)||l.isSubtypeGroupLayer(q))&&this.view.map.utilityNetworks?.find(D=>D.isUtilityLayer(q))){if("loaded"!==t.loadStatus)return[];b=[];var k=g.layerId;k=t.getFeatureSQL(q,c)?.[k];if(!k)return[];
c=k.anyVertex;(k=k.endVertex)&&c&&k===c&&(k="");k&&b.push({...a,returnEdge:!1,vertexMode:"ends",filter:r(a.filter,k)});c&&b.push({...a,returnEdge:y("snapping-include-edges-when-applying-any-vertex-rule")??!1,vertexMode:"all",filter:r(a.filter,c)});return b}return[a]}async loadRules(){this._valid=null;const {layer:a,view:b,attributeRulesEnabled:c}=this;if(c&&a&&b&&v.isUtilityNetworkWebMap(b?.map)&&(l.isFeatureLayer(a)||l.isSubtypeGroupLayer(a)))try{await Promise.allSettled(b.map.utilityNetworks?.map(e=>
e.load())??[]);const g=b.map.utilityNetworks?.find(e=>e.isUtilityLayer(a));g&&(this.rulesTable=await g.getRulesTable(),await this.rulesTable?.load())}catch(g){this._valid=!1;z.getLogger("esri.views.interactive.snapping.FeatureSnappingSourceInfo").error("Failed to load rules table for snapping source",a.title);return}this._valid=!0}remove(){this.destroy()}destroy(){this.snappingSource?.destroy()}};f.__decorate([h.property({constructOnly:!0})],d.FeatureSnappingSourceInfo.prototype,"layer",void 0);f.__decorate([h.property({constructOnly:!0})],
d.FeatureSnappingSourceInfo.prototype,"snappingSource",void 0);f.__decorate([h.property({constructOnly:!0})],d.FeatureSnappingSourceInfo.prototype,"view",void 0);f.__decorate([h.property({value:!1})],d.FeatureSnappingSourceInfo.prototype,"attributeRulesEnabled",null);f.__decorate([h.property()],d.FeatureSnappingSourceInfo.prototype,"layerView",null);f.__decorate([h.property()],d.FeatureSnappingSourceInfo.prototype,"rulesTable",void 0);f.__decorate([h.property()],d.FeatureSnappingSourceInfo.prototype,
"valid",null);f.__decorate([h.property()],d.FeatureSnappingSourceInfo.prototype,"subtypeFilter",null);f.__decorate([h.property()],d.FeatureSnappingSourceInfo.prototype,"floorFilter",null);f.__decorate([h.property()],d.FeatureSnappingSourceInfo.prototype,"_valid",void 0);d.FeatureSnappingSourceInfo=f.__decorate([A.subclass("esri.views.interactive.snapping.FeatureSnappingSourceInfo")],d.FeatureSnappingSourceInfo);Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
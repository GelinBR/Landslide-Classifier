// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/Accessor ../../../../../core/accessorSupport/decorators/property ../../../../../core/has ../../../../../core/Logger ../../../../../core/RandomLCG ../../../../../core/accessorSupport/decorators/subclass ../../../../../geometry/Point ../../../../../geometry/support/aaBoundingRect ../../../../../layers/support/LOD ../../../../../layers/support/TileInfo ../../../../../layers/support/TileKey".split(" "),function(a,b,d,c,n,p,q,e,f,g,h,
k,l){a.FeatureServiceTilesSimple=class extends d{get tiles(){return[new l.TileKey("0/0/0",0,0,0,g.fromValues(-1E8,-1E8,1E8,1E8))]}get tileInfo(){return new k({origin:new f({x:-1E8,y:1E8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new h({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(m){super(m);this.pointOfInterest=null}};b.__decorate([c.property({readOnly:!0})],a.FeatureServiceTilesSimple.prototype,
"tiles",null);b.__decorate([c.property({readOnly:!0})],a.FeatureServiceTilesSimple.prototype,"tileInfo",null);b.__decorate([c.property({readOnly:!0})],a.FeatureServiceTilesSimple.prototype,"tileSize",null);b.__decorate([c.property({constructOnly:!0})],a.FeatureServiceTilesSimple.prototype,"layer",void 0);b.__decorate([c.property()],a.FeatureServiceTilesSimple.prototype,"pointOfInterest",void 0);a.FeatureServiceTilesSimple=b.__decorate([e.subclass("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],
a.FeatureServiceTilesSimple);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
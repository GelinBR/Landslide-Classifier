// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Collection ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,e,a,c,h,k,l,f){var d;a=d=class extends a.JSONSupport{constructor(g){super(g);this.floorField=null;this.viewAllMode=!1;this.viewAllLevelIds=new e}clone(){return new d({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};
b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"floorField",void 0);b.__decorate([c.property({json:{read:!1,write:!1}})],a.prototype,"viewAllMode",void 0);b.__decorate([c.property({json:{read:!1,write:!1}})],a.prototype,"viewAllLevelIds",void 0);return a=d=b.__decorate([f.subclass("esri.layers.support.LayerFloorInfo")],a)});
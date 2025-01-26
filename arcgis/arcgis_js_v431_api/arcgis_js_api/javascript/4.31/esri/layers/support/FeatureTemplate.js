// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,d,e,c,h,k,l,f){d=new d.JSONMap({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",
esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});a=class extends a.ClonableMixin(e.JSONSupport){constructor(g){super(g);this.thumbnail=this.prototype=this.drawingTool=this.description=
this.name=null}};b.__decorate([c.property({json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"description",void 0);b.__decorate([c.property({json:{read:d.read,write:d.write}})],a.prototype,"drawingTool",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"prototype",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"thumbnail",void 0);return a=b.__decorate([f.subclass("esri.layers.support.FeatureTemplate")],a)});
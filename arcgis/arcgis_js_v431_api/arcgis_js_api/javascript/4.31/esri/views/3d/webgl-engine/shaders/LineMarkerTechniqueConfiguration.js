// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl ../core/shaderLibrary/output/Emissions.glsl ../core/shaderTechnique/ShaderTechniqueConfiguration ../materials/DefaultTechniqueConfiguration".split(" "),function(e,c,f,g,d,h){e.LineMarkerSpace=void 0;(function(a){a[a.Draped=0]="Draped";a[a.Screen=1]="Screen";a[a.World=2]="World";a[a.COUNT=3]="COUNT"})(e.LineMarkerSpace||(e.LineMarkerSpace={}));e.LineMarkerAnchor=void 0;(function(a){a[a.Center=
0]="Center";a[a.Tip=1]="Tip";a[a.COUNT=2]="COUNT"})(e.LineMarkerAnchor||(e.LineMarkerAnchor={}));class b extends h.DefaultTechniqueConfiguration{constructor(){super(...arguments);this.space=e.LineMarkerSpace.Screen;this.anchor=e.LineMarkerAnchor.Center;this.cullAboveTerrain=this.terrainDepthTest=this.hasOccludees=this.vvOpacity=this.vvColor=this.vvSize=this.hasTip=this.hasCap=this.hideOnShortSegments=this.writeDepth=this.hasSlicePlane=this.occluder=!1;this.textureCoordinateType=f.TextureCoordinateType.None;
this.emissionSource=g.EmissionSource.None;this.discardInvisibleFragments=!0;this.occlusionPass=!1;this.hasSliceTranslatedView=this.hasVvInstancing=!0;this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===e.LineMarkerSpace.Draped}}c.__decorate([d.parameter({count:e.LineMarkerSpace.COUNT})],b.prototype,"space",void 0);c.__decorate([d.parameter({count:e.LineMarkerAnchor.COUNT})],b.prototype,"anchor",void 0);c.__decorate([d.parameter()],b.prototype,"occluder",void 0);c.__decorate([d.parameter()],
b.prototype,"hasSlicePlane",void 0);c.__decorate([d.parameter()],b.prototype,"writeDepth",void 0);c.__decorate([d.parameter()],b.prototype,"hideOnShortSegments",void 0);c.__decorate([d.parameter()],b.prototype,"hasCap",void 0);c.__decorate([d.parameter()],b.prototype,"hasTip",void 0);c.__decorate([d.parameter()],b.prototype,"vvSize",void 0);c.__decorate([d.parameter()],b.prototype,"vvColor",void 0);c.__decorate([d.parameter()],b.prototype,"vvOpacity",void 0);c.__decorate([d.parameter()],b.prototype,
"hasOccludees",void 0);c.__decorate([d.parameter()],b.prototype,"terrainDepthTest",void 0);c.__decorate([d.parameter()],b.prototype,"cullAboveTerrain",void 0);e.LineMarkerTechniqueConfiguration=b;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
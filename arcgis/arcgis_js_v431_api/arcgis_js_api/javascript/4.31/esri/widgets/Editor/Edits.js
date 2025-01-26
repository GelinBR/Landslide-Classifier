// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Accessor ../../core/SetUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass".split(" "),function(b,e,l,m,f,p,q,r,n){function h(a,c){a=null==a?{}:a;c=null==c?{}:c;var d=new Set(Object.keys(a));m.addMany(d,Object.keys(c));for(const k of d){d=a[k];var g=c[k];d=null!==d&&void 0!==d&&""!==d||null!==g&&void 0!==g&&""!==g?d===g?!0:!1:!0;if(!d)return!1}return!0}
b.Edits=class extends l{constructor(a){super(a);this._stagedForDelete=!1;this.initialFeature=this.feature=null}get attributesModified(){return!h(this.initialFeature?.attributes,this.feature?.attributes)}get geometryModified(){return this._stringifyGeometry(this.feature)!==this._stringifyGeometry(this.initialFeature)}get stagedForDelete(){return this._stagedForDelete}get modified(){return this.attributesModified||this.geometryModified||this._stagedForDelete}stageDelete(){this._stagedForDelete=!0}unstageDelete(){this._stagedForDelete=
!1}trackChanges(a=this.feature){this.initialFeature=a?.clone()}updateAttributes(a){const {feature:c}=this;c&&(c.attributes=a,this.notifyChange("attributesModified"))}updateGeometry(a){const {feature:c}=this;c&&(c.geometry=a,this.notifyChange("geometryModified"))}_stringifyGeometry(a){a=a?.geometry;return"mesh"===a?.type?(a={transform:a.transform,vertexSpace:a.vertexSpace},null==a?null:JSON.stringify(a)):null==a?null:JSON.stringify(a)}};e.__decorate([f.property()],b.Edits.prototype,"_stagedForDelete",
void 0);e.__decorate([f.property()],b.Edits.prototype,"attributesModified",null);e.__decorate([f.property()],b.Edits.prototype,"feature",void 0);e.__decorate([f.property()],b.Edits.prototype,"geometryModified",null);e.__decorate([f.property()],b.Edits.prototype,"initialFeature",void 0);e.__decorate([f.property()],b.Edits.prototype,"modified",null);b.Edits=e.__decorate([n.subclass("esri.widgets.Editor.Edits")],b.Edits);b.attributesAreEquivalent=h;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
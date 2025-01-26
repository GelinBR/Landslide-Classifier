// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/Cyclical ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/cast ../../core/RandomLCG ../../core/has ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/ensureType ./voxelPlaneUtils".split(" "),function(c,b,e,l,d,k,n,p,m,f,g){b=class extends b.ClonableMixin(l.JSONSupport){constructor(a){super(a);this.enabled=!0;this.label="";this.point=this.normal=null}get orientation(){if(!Array.isArray(this.normal)||
3!==this.normal.length)return 0;const [a]=g.computeOrientationTiltFromNormal(this.normal);return e.cyclicalDegrees.normalize(f.ensureNumber(a),0,!0)}set orientation(a){const h=g.computeNormalFromOrientationTilt(a,this.tilt);this._set("normal",h);this._set("orientation",a)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const [,a]=g.computeOrientationTiltFromNormal(this.normal);return e.cyclicalDegrees.normalize(f.ensureNumber(a),0,!0)}set tilt(a){const h=g.computeNormalFromOrientationTilt(this.orientation,
a);this._set("normal",h);this._set("tilt",a)}};c.__decorate([d.property({type:Boolean,json:{write:!0}})],b.prototype,"enabled",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"label",void 0);c.__decorate([d.property({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),k.cast(a=>e.cyclicalDegrees.normalize(f.ensureNumber(a),0,!0))],b.prototype,"orientation",null);c.__decorate([d.property({type:Number,json:{read:!1},clonable:!1,range:{min:0,max:360}}),k.cast(a=>
e.cyclicalDegrees.normalize(f.ensureNumber(a),0,!0))],b.prototype,"tilt",null);c.__decorate([d.property({type:[Number],json:{write:!0}})],b.prototype,"normal",void 0);c.__decorate([d.property({type:[Number],json:{write:!0}})],b.prototype,"point",void 0);return b=c.__decorate([m.subclass("esri.layers.voxel.VoxelSlice")],b)});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/libs/gl-matrix-2/math/common","./Camera","./Settings"],function(c,b,g,d){class e{constructor(a){this._createCamera=a;this.compared=new g.CompareResult;this.segmentStart=0;this.segmentEnd=1;this.settings={desiredScreenFlow:d.defaultSettings.desiredScreenFlow};this.source=a();this.target=a()}clone(){const a=new e(this._createCamera);a.copyFrom(this);return a}copyFrom(a){this.update(a.source,a.target,a.settings)}update(a,f,h){this.source!==a&&this.source.copyFrom(a);
this.target!==f&&this.target.copyFrom(f);this.source.compareTo(this.target,this.compared);this.settings.desiredScreenFlow=h.desiredScreenFlow??d.defaultSettings.desiredScreenFlow;this.desiredPixelFlow=this.settings.desiredScreenFlow*this.target.size;this.halfWindowSize=this.target.size/2}halfWindowPanAtZoom(a){a=this.target.pixelsPerPanAtZoom(a);return this.halfWindowSize/a}get hasZoom(){return 1E-5<Math.abs(this.compared.sourceZoom-this.compared.targetZoom)}get hasPan(){return this.compared.pan>
b.getEpsilon()}get hasFov(){return Math.abs(this.compared.fov)>b.getEpsilon()}get hasRotate(){return this.compared.rotate>b.getEpsilon()}}c.Definition=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
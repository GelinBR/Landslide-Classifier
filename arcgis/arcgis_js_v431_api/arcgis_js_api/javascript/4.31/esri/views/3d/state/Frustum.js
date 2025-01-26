// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/vec32","../../../core/libs/gl-matrix-2/factories/vec3f64","../../../geometry/support/frustum"],function(e,f,g,c){function h(a,b,d){a.origin=b;a.endpoint=d;f.direction(a.direction,b,d)}class k{get planes(){return this.frustum}get points(){return this._points}get mutablePoints(){return this._points}get direction(){return this._direction}get origin(){return this._origin}constructor(a){this.renderCoordsHelper=a;this.frustum=c.create();this._points=c.createPoints();this.lines=
Array(12);this._origin=g.create();this._direction=g.create();this._altitude=null;for(a=0;12>a;a++)this.lines[a]={origin:null,direction:g.create(),endpoint:null}}update(a){c.fromMatrix(a.viewMatrix,a.projectionMatrix,this.frustum,this._points);f.copy(this._origin,a.eye);f.copy(this._direction,a.viewForward);this._altitude=this.renderCoordsHelper.getAltitude(this._origin);this._updateLines()}updatePoints(a){for(let b=0;b<this._points.length;b++)f.copy(this._points[b],a[b]);c.computePlanes(this.frustum,
this._points);this._updateLines()}get altitude(){return this._altitude}intersectsSphere(a){return c.intersectsSphere(this.frustum,a)}intersectsRay(a){return c.intersectsRay(this.frustum,a)}intersectsLineSegment(a,b){return c.intersectsLineSegment(this.frustum,a,b)}intersectsPoint(a){return c.intersectsPoint(this.frustum,a)}_updateLines(){const a=this._points;for(let b=0;4>b;b++){const d=b+4;h(this.lines[b],a[b],a[d]);h(this.lines[b+4],a[b],3===b?a[0]:a[b+1]);h(this.lines[b+8],a[d],3===b?a[4]:a[d+
1])}}}k.planePointIndices=c.planePointIndices;k.nearFarLineIndices=[[c.PointIndex.NEAR_BOTTOM_LEFT,c.PointIndex.FAR_BOTTOM_LEFT],[c.PointIndex.NEAR_BOTTOM_RIGHT,c.PointIndex.FAR_BOTTOM_RIGHT],[c.PointIndex.NEAR_TOP_RIGHT,c.PointIndex.FAR_TOP_RIGHT],[c.PointIndex.NEAR_TOP_LEFT,c.PointIndex.FAR_TOP_LEFT]];e.LineIndex=void 0;(function(a){a[a.NEAR_FAR_BOTTOM_LEFT=0]="NEAR_FAR_BOTTOM_LEFT";a[a.NEAR_FAR_BOTTOM_RIGHT=1]="NEAR_FAR_BOTTOM_RIGHT";a[a.NEAR_FAR_TOP_RIGHT=2]="NEAR_FAR_TOP_RIGHT";a[a.NEAR_FAR_TOP_LEFT=
3]="NEAR_FAR_TOP_LEFT";a[a.NEAR_BOTTOM=4]="NEAR_BOTTOM";a[a.NEAR_RIGHT=5]="NEAR_RIGHT";a[a.NEAR_TOP=6]="NEAR_TOP";a[a.NEAR_LEFT=7]="NEAR_LEFT";a[a.FAR_BOTTOM=8]="FAR_BOTTOM";a[a.FAR_RIGHT=9]="FAR_RIGHT";a[a.FAR_TOP=10]="FAR_TOP";a[a.FAR_LEFT=11]="FAR_LEFT"})(e.LineIndex||(e.LineIndex={}));e.Frustum=k;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
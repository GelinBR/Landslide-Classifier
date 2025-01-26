// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../sketch/constraints ../../sketch/normalizedPoint ../SnappingDomain ../snappingUtils ./SnappingCandidate ../hints/LineSnappingHint ../hints/RightAngleSnappingHint".split(" "),function(d,g,h,k,l,a,m,e,n,f,p){class q extends n.SnappingCandidate{constructor({targetPoint:r,point1:b,point2:c,isDraped:t}){super(r,new l.VerticalCylinderConstraint(a.fromVec3(h.lerp(k.create(),
b,c,.5)),.5*g.distance(a.asVec2(b),a.asVec2(c))),t,m.SnappingDomain.SELF);this._p1=b;this._p2=c}get hints(){return[new f.LineSnappingHint(e.LineSegmentHintType.REFERENCE,this.targetPoint,this._p1,this.isDraped,this.domain),new f.LineSnappingHint(e.LineSegmentHintType.REFERENCE,this.targetPoint,this._p2,this.isDraped,this.domain),new p.RightAngleSnappingHint(this._p1,this.targetPoint,this._p2,this.isDraped,this.domain)]}}d.RightAngleTriangleSnappingCandidate=q;Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/SimpleGeometryCursor","../../../chunks/Geometry","../../../chunks/Transformation2D","../../../chunks/QuadraticBezier"],function(p,l,h,u,k){function v(a,b,c,e){const f=a.getImpl().getAttributeStreamRef(0);e=a.getPointCount();const d=b.getXY(),g=a.createInstance();c=k.adjustToleranceForTEClustering(c);var m=new k.Envelope2D;a.queryEnvelope(m);m.inflateCoords(c,c);if(m.contains(d)){m=c*c;let w=!1;c=u.makePrimitiveArray(e,!1);for(let n=0;n<e;n++){var q=f.read(2*n),r=
f.read(2*n+1);q-=d.x;r-=d.y;q*q+r*r<=m&&(w=!0,c[n]=!0)}if(w)for(b=0;b<e;b++)c[b]||g.addPoints(a,b,b+1);else g.addPoints(a,0,e),g.add(b)}else g.addPoints(a,0,e),g.add(b);return g}class x{getOperatorType(){return 10003}supportsCurves(){return!0}accelerateGeometry(a,b,c){return!1}canAccelerateGeometry(a){return!1}executeMany(a,b,c,e){return new y(a,b,c,e)}execute(a,b,c,e){a=new l.SimpleGeometryCursor([a]);b=new l.SimpleGeometryCursor([b]);(c=this.executeMany(a,b,c,e).next())||h.throwInternalErrorException("null output");
return c}}class y extends l.GeometryCursor{constructor(a,b,c,e){super();this.m_progressTracker=e;this.m_index=-1;this.m_inputGeoms=a;this.m_spatialReference=c;this.m_rightGeom=b.next();this.m_bEmpty=!this.m_rightGeom;h.throwIfMesh(this.m_rightGeom)}tock(){h.geometryReleaseAssert(0);return!1}getRank(){h.geometryReleaseAssert(0);return 0}next(){if(this.m_bEmpty)return null;var a=this.m_inputGeoms.next();if(a){h.throwIfMesh(a);this.m_index=this.m_inputGeoms.getGeometryID();var b=this.m_rightGeom,c=this.m_spatialReference,
e=this.m_progressTracker,f=a.getDimension(),d=b.getDimension();if(f!==d)a=f>d?a:b;else if(a.isEmpty())a=b;else if(!b.isEmpty()){f=new k.Envelope2D;d=new k.Envelope2D;var g=new k.Envelope2D;a.queryEnvelope(f);b.queryEnvelope(d);g.setCoords({env2D:f});g.mergeEnvelope2D(d);f=k.calculateToleranceFromGeometryForOp(c,g,!0);d=a.getGeometryType();g=b.getGeometryType();d===h.GeometryType.enumPoint&&g===h.GeometryType.enumPoint?(c=k.adjustToleranceForTEClustering(f),c*=c,e=a.getXY(),f=b.getXY(),d=new k.MultiPoint({vd:a.getDescription()}),
u.Point2D.sqrDistance(e,f)>c&&(d.add(a),d.add(b)),a=d):a=d===h.GeometryType.enumPoint&&g===h.GeometryType.enumMultiPoint?v(b,a,f):d===h.GeometryType.enumMultiPoint&&g===h.GeometryType.enumPoint?v(a,b,f):k.symmetricDifference(a,b,c,e)}return a}return null}getGeometryID(){return this.m_index}}const t=new x;p.execute=function(a,b,c){return t.execute(a,b,c,null)};p.executeMany=function(a,b,c){a=t.executeMany(new l.SimpleGeometryCursor(a),new l.SimpleGeometryCursor([b]),c,null);return Array.from(a)};p.supportsCurves=
function(){return t.supportsCurves()};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
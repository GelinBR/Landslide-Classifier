// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/Geometry","../../chunks/QuadraticBezier","./support/converterAPI"],function(A,n,p,y){function G(a,m,e){const b=[];var d=[];for(a=a.querySegmentIterator();a.nextPath();){a.resetToFirstSegment();var f=a.nextSegment().getStartXY(),c=a.getPathIndex(),k=a.getStartPointIndex();b.push(f);d.push({m_path:c,m_pointIndex:k});a.resetToLastSegment();f=a.previousSegment().getEndXY();c=a.getPathIndex();k=a.getEndPointIndex();b.push(f);d.push({m_path:c,m_pointIndex:k})}a=new p.AttributeStreamOfInt32(0);
for(f=0;f<b.length;f++)a.add(f);(new p.BucketSort).sort(a,0,a.size(),{userSort(g,h,t){t.sort(g,h,(u,l)=>b[u].compare(b[l]))},getValue(g){return b[g].y}});for(f=0;f<a.size()-1;f++)if(c=b[a.read(f)],c.equals(b[a.read(f+1)])){do k=d[a.read(f)],e.push(k),f++;while(f<a.size()&&c.equals(b[a.read(f)]));f--}m.length=e.length;for(d=0;d<e.length;d++)m[d]=d;m.sort((g,h)=>{g=e[g];h=e[h];return g.m_path<h.m_path?-1:g.m_path>h.m_path?1:g.m_pointIndex<h.m_pointIndex?-1:1})}class H{getOperatorType(){return 10007}supportsCurves(){return!1}accelerateGeometry(a,
m,e){return!1}canAccelerateGeometry(a){return!1}execute(a,m,e,b,d){if(a.isEmpty()||m.isEmpty())a=null;else if(0!==(b&8)&&0!==(b&16))a=null;else{0!==(b&2)&&0!==(b&4)&&n.throwInvalidArgumentException("");d=new p.Envelope2D;var f=new p.Envelope2D;a.queryEnvelope(d);m.queryEnvelope(f);d.mergeEnvelope2D(f);e=p.calculateToleranceFromGeometryForOp(e,d,!0).total();n.throwIfCurves(a);n.throwIfCurves(m);var c=!1;let l;d=a.querySegmentIterator();m=m.querySegmentIterator();f=0;const q=new p.SegmentBuffer,v=new p.Point({vd:a.getDescription()}),
w=new p.Point({vd:a.getDescription()}),D=[],B=[];for(G(a,D,B);d.nextPath();){var k=!0;let r=0;for(;2!==r;){0===r?d.nextSegment().getGeometryType()!==n.GeometryType.enumLine&&n.throwNotImplementedException(""):(d.resetToLastSegment(),d.previousSegment().getGeometryType()!==n.GeometryType.enumLine&&n.throwNotImplementedException(""),c&&k&&(k=d.getPathIndex(),l.addSegmentsFromPath(a,k,0,a.getSegmentCountPath(k),!0),k=!1));r++;var g=!1;if(f<B.length){var h=B[D[f]],t=d.getPathIndex();h.m_path===t&&(t=
1===r?d.getStartPointIndex():d.getEndPointIndex(),h.m_pointIndex===t&&(g=!0,f++))}if(1===r){if(0!==(b&8))continue}else if(0!==(b&16))continue;if(!g){1===r?d.previousSegment():d.nextSegment();t=g=1===r?d.nextSegment():d.previousSegment();const z=t.calculateLength2D();m.resetToFirstPath();let C=!1;for(h=Number.NaN;m.nextPath();){for(;m.hasNextSegment();){var u=m.nextSegment();u.getGeometryType()!==n.GeometryType.enumLine&&n.throwNotImplementedException("");const {bIntersect:I,t1:x,t2:E}=p.intersectInfiniteLines(t,
u);if(I&&(u=u.calculateLength2D(),E*u>=-e&&(1-E)*u>=-e))if(1===r)if(x*z<=-e){if(Number.isNaN(h)||x>h)h=x}else{if(x*z<=e){h=Number.NaN;C=!0;break}}else if((1-x)*z<=-e){if(Number.isNaN(h)||x<h)h=x}else if((1-x)*z<=e){h=Number.NaN;C=!0;break}}if(C)break}if(!Number.isNaN(h)){if(!c)for(l=a.createInstance(),c=0;c<d.getPathIndex();c++)l.addPath(a,c,!0);if(1===r){g.queryCoord(h,v);c=d.getPathIndex();0!==(b&2)?a.getPointByVal(a.getPathStart(c),w):0!==(b&4)&&w.setEmpty();0===(b&1)&&(q.create(g.getGeometryType()),
g.copyTo(q.get()),q.get().setEnd(v),q.get().reverse(),l.addSegment(q.get(),!0),k=!1);l.addSegmentsFromPath(a,c,0,a.getSegmentCountPath(c),k);0!==(b&1)&&(k=l.getPathStart(c),l.setPointByVal(k,v));if(0!==(b&2)||0!==(b&4))k=l.getPathStart(c),c=v.getXY(),w.setXY(c),l.setPointByVal(k,w);c=!0;k=!1}else{c=d.getPathIndex();k&&(l.addSegmentsFromPath(a,c,0,a.getSegmentCountPath(c),!0),k=!1);0!==(b&2)?a.getPointByVal(a.getPathEnd(c)-1,w):0!==(b&4)&&w.setEmpty();g.queryCoord(h,v);0===(b&1)?(q.create(g.getGeometryType()),
g.copyTo(q.get()),q.get().setEnd(v),l.addSegment(q.get(),!1)):(g=l.getPathEnd(c),l.setPointByVal(g-1,v));if(0!==(b&2)||0!==(b&4))c=l.getPathEnd(c),g=v.getXY(),w.setXY(g),l.setPointByVal(c-1,w);c=!0}}}}}a=c?l:null}return a}}const F=new H;A.execute=function(a,m,e){let b=0;e&&(e.relocateEnds&&(b|=1),e.keepEndAttributes&&(b|=2),e.noEndAttributes&&(b|=4),e.noExtendAtFrom&&(b|=8),e.noExtendAtTo&&(b|=16));e=y.getSpatialReference(a);return(a=F.execute(y.fromPolyline(a),y.fromPolyline(m),y.fromSpatialReference(e),
b,null))?y.toPolyline(a,e):null};A.supportsCurves=function(){return F.supportsCurves()};Object.defineProperty(A,Symbol.toStringTag,{value:"Module"})});
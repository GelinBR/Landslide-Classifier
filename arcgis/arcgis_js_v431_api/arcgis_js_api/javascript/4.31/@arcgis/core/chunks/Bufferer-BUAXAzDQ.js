/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{a as e,b as t}from"./tslib.es6.js";import{e as s,t as i,a as n,G as r,y as m,d as o,z as a,b as h,A as l,l as c,h as u,P as f,c as _,g,T as d,p,m as b,o as y,B as P}from"./Transformation2D.js";import{aB as x,S as C,G as D,aC as w,aD as T,L as v,aE as S,a as I,p as M,h as V,b as E,P as k,F as R,w as A,aF as B,q as X,R as Y,E as F,n as L,a6 as q}from"./converterAPI.js";import{c as z}from"./GeometryCleaner-k94LXQsr.js";import{O as G}from"./OperatorGeneralize.js";class N{getOperatorType(){return 10104}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}supportsCurves(){return!0}isSimple(e,t,s,i,n){return 5===x(e,t,s,i,n)}executeMany(e,t,s,i){return new j(e,t,s,i)}execute(e,t,i,n){const r=new C([e]),m=this.executeMany(r,t,i,n).next();return m||s("null output"),m}}class j extends D{constructor(e,t,s,n){super(),e||i(""),this.m_progressTracker=n,this.m_bForceSimplify=s,this.m_index=-1,this.m_inputGeometryCursor=e,this.m_spatialReference=t}next(){const e=this.m_inputGeometryCursor.next();return e?(n(e),this.m_index=this.m_inputGeometryCursor.getGeometryID(),this.simplify(e)):null}getGeometryID(){return this.m_index}tock(){return!1}getRank(){return 1}simplify(e){return e||i(""),w(e,this.m_spatialReference,this.m_bForceSimplify,this.m_progressTracker)}}var O;function U(e,t,s,i,n,r){return{m_from:e.clone(),m_to:t.clone(),m_center:s.clone(),m_next:n,m_type:i}}function J(e,t,s,i,n){return{m_from:e.clone(),m_to:t.clone(),m_next:s,m_type:4,m_center:new f}}!function(e){e[e.enumDummy=256]="enumDummy",e[e.enumLine=1]="enumLine",e[e.enumArc=2]="enumArc",e[e.enumMiter=8]="enumMiter",e[e.enumBevel=16]="enumBevel",e[e.enumJoinMask=26]="enumJoinMask",e[e.enumConnectionMask=27]="enumConnectionMask"}(O||(O={}));class Q extends D{constructor(e,t,s,i,n,r,m,o,a,h){super(),this.m_index=0,this.m_bufferedPolygon=null,this.m_x=0,this.m_y=0,this.m_progressTracker=h,this.m_parent=e,this.m_mp=t,this.m_distance=s,this.m_spatialReference=i,this.m_densifyDist=o,this.m_maxVertexInCompleteCircle=a,this.m_joins=n,this.m_caps=r,this.m_miterLimit=m}next(){const e=new k;for(;;){if(this.m_index===this.m_mp.getPointCount())return null;if(1===this.m_caps)return this.m_index=this.m_mp.getPointCount(),new I({vd:this.m_mp.getDescription()});if(this.m_mp.getPointByVal(this.m_index,e),this.m_index++,!e.isEmpty())break}let t,s=!1;if(null===this.m_bufferedPolygon&&(this.m_x=e.getX(),this.m_y=e.getY(),this.m_bufferedPolygon=this.m_parent.buffer(e,this.m_distance,this.m_spatialReference,this.m_joins,this.m_caps,this.m_miterLimit,this.m_densifyDist,this.m_maxVertexInCompleteCircle),s=!0),t=this.m_index<this.m_mp.getPointCount()?this.m_bufferedPolygon.clone():this.m_bufferedPolygon,!s){const s=new d,i=e.getX()-this.m_x,n=e.getY()-this.m_y;s.setShiftCoords(i,n),t.applyTransformation(s)}return q(t,0),t}getGeometryID(){return 0}getRank(){return g(0),-1}tock(){return!0}}class H extends D{constructor(e){super(),this.m_currentPathIndex=0,this.m_polyline=e}next(){if(!this.m_polyline)return null;const e=this.m_polyline.getImpl(),t=e.getPathCount();if(this.m_currentPathIndex<t){const t=this.m_currentPathIndex;if(this.m_currentPathIndex++,!e.isClosedPathInXYPlane(t)){let s=e.getXY(e.getPathEnd(t)-1);for(;this.m_currentPathIndex<e.getPathCount();){const t=e.getXY(e.getPathStart(this.m_currentPathIndex));if(e.isClosedPathInXYPlane(this.m_currentPathIndex))break;if(!t.equals(s))break;s=e.getXY(e.getPathEnd(this.m_currentPathIndex)-1),this.m_currentPathIndex++}}if(0===t&&this.m_currentPathIndex===this.m_polyline.getPathCount()){const e=this.m_polyline;return this.m_polyline=null,e}const s=new E({vd:this.m_polyline.getDescription()});s.addPath(this.m_polyline,t,!0);for(let i=t+1;i<this.m_currentPathIndex;i++)s.addSegmentsFromPath(this.m_polyline,i,0,e.getSegmentCountPath(i),!1);return this.m_currentPathIndex===this.m_polyline.getPathCount()&&(this.m_polyline=null),s}return null}getGeometryID(){return 0}getRank(){return g(0),-1}tock(){return!0}}class K extends D{constructor(e,t,s){super(),this.m_geometry=null,this.m_index=0,this.m_bufferer=e,this.m_geoms=t,this.m_index=0,this.m_bFilter=s}next(){if(null===this.m_geometry&&(this.m_index=0,this.m_geometry=this.m_geoms.next(),!this.m_geometry))return null;const e=this.m_geometry.getImpl();if(this.m_index<e.getPathCount()){const e=this.m_index;return this.m_index++,this.m_bufferer.bufferPolylinePath(this.m_geometry,e,this.m_bFilter)}return this.m_geometry=null,this.next()}getGeometryID(){return 0}getRank(){return g(0),-1}tock(){return!0}}class W extends D{constructor(e){super(),this.m_index=0,this.m_bufferer=e}next(){const e=this.m_bufferer.m_geometry;if(this.m_index<e.getPathCount()){const t=this.m_index,s=e.calculateRingArea2D(this.m_index);for(g(s>0),this.m_index++;this.m_index<e.getPathCount()&&!(e.calculateRingArea2D(this.m_index)>0);)this.m_index++;let i;return i=0===t&&this.m_index===e.getPathCount()?this.m_bufferer.bufferPolygonImpl(e,0,e.getPathCount()):this.m_bufferer.bufferPolygonImpl(e,t,this.m_index),i}return null}getGeometryID(){return 0}getRank(){return g(0),-1}tock(){return!0}}class Z{constructor(e){this.m_geometry=null,this.m_bufferCommands=[],this.m_originalGeomType=r.enumUnknown,this.m_maxVertexInCompleteCircle=-1,this.m_circleTemplateSize=-1,this.m_oldCircleTemplateSize=0,this.m_spatialReference=null,this.m_tolerance=new T(0,0),this.m_smallTolerance=new T(0,0),this.m_filterTolerance=0,this.m_densifyDist=-1,this.m_distance=Number.NaN,this.m_absDistance=0,this.m_absDistanceReversed=0,this.m_dA=-1,this.m_miterLimit=4,this.m_joins=0,this.m_caps=0,this.m_bRoundBuffer=!0,this.m_bOutputLoops=!0,this.m_bFilter=!0,this.m_circleTemplate=[],this.m_leftStack=[],this.m_middleStack=[],this.m_helperLine1=new v,this.m_helperLine2=new v,this.m_helperArray=[],this.m_progressCounter=0,this.m_densificator=S.constructDefault(e),this.m_progressTracker=e}buffer(e,t,s,n,r,f,_,g){if(e||i("Geometry.Bufferer.Impl.Buffer"),_<0&&i("Geometry.Bufferer.Impl.Buffer"),m(e.getGeometryType())&&o("Unsupported geometry type."),e.isEmpty())return new I({vd:e.getDescription()});if(this.m_joins=n,this.m_caps=r,this.m_bRoundBuffer=!1,this.m_miterLimit=f,this.m_originalGeomType=e.getGeometryType(),a(this.m_originalGeomType)?this.m_bRoundBuffer=0===this.m_joins:h(this.m_originalGeomType)?this.m_bRoundBuffer=0===this.m_caps:l(this.m_originalGeomType)&&(this.m_bRoundBuffer=0===this.m_joins&&0===this.m_caps),this.m_bFilter=this.m_bRoundBuffer,this.m_geometry=z(e),this.m_geometry.isEmpty())return new I({vd:e.getDescription()});const d=new M;this.m_geometry.queryLooseEnvelope(d),t>0&&d.inflateCoords(t,t),this.m_tolerance=V(s,d,!0),this.m_smallTolerance=V(null,d,!0),g<=0&&(g=96),this.m_spatialReference=s,this.m_distance=t,this.m_absDistance=Math.abs(this.m_distance),this.m_absDistanceReversed=0!==this.m_absDistance?1/this.m_absDistance:0,Number.isNaN(_)||0===_?_=1e-5*this.m_absDistance:_>.5*this.m_absDistance&&(_=.5*this.m_absDistance),g<12&&(g=12);const p=Math.abs(t)*(1-Math.cos(Math.PI/g));if(p>_)_=p;else if(0!==t){const e=Math.PI/Math.acos(1-_/Math.abs(t));e<g-1&&(g=Math.trunc(e))<12&&(g=12,_=Math.abs(t)*(1-Math.cos(Math.PI/g)))}this.m_densifyDist=_,this.m_maxVertexInCompleteCircle=g,this.m_filterTolerance=this.m_bRoundBuffer?Math.min(this.m_smallTolerance.total(),.25*this.m_densifyDist):0,this.m_circleTemplateSize=this.calcN(),this.m_circleTemplateSize!==this.m_oldCircleTemplateSize&&(this.m_circleTemplate.length=0,this.m_oldCircleTemplateSize=this.m_circleTemplateSize),this.m_densifyDist>0&&c(this.m_geometry)&&(this.m_geometry=this.m_densificator.densifyEx(this.m_geometry,0,this.m_densifyDist,0,0!==this.m_joins,u()));const b=this.bufferImpl();return this.m_geometry=null,b}generateCircleTemplate(){if(this.m_circleTemplate.length)return;const e=this.m_circleTemplateSize,t=Math.trunc((e+3)/4),s=.5*Math.PI/t;this.m_dA=s,this.m_circleTemplate.length=4*t;const i=Math.cos(s),n=Math.sin(s),r=f.construct(0,1);for(let e=0;e<t;e++)this.m_circleTemplate[e+0*t]=f.construct(r.y,-r.x),this.m_circleTemplate[e+1*t]=f.construct(-r.x,-r.y),this.m_circleTemplate[e+2*t]=f.construct(-r.y,r.x),this.m_circleTemplate[e+3*t]=r.clone(),r.rotateReverse(i,n)}bufferImpl(){const e=this.m_geometry.getGeometryType();if(_(e)){const e=new E({vd:this.m_geometry.getDescription()});return e.addSegment(this.m_geometry,!0),this.m_geometry=e,this.bufferImpl()}if(this.m_distance<=this.m_tolerance.total()){if(!a(e))return new I({vd:this.m_geometry.getDescription()});if(this.m_distance<0){const e=new M;if(this.m_geometry.queryEnvelope(e),e.width()<=2*this.m_absDistance||e.height()<=2*this.m_absDistance)return new I({vd:this.m_geometry.getDescription()})}}switch(this.m_geometry.getGeometryType()){case r.enumPoint:return this.bufferPoint();case r.enumMultiPoint:return this.bufferMultiPoint();case r.enumPolyline:return this.bufferPolyline();case r.enumPolygon:return this.bufferPolygon();case r.enumEnvelope:return this.bufferEnvelope();default:s("")}}bufferPolyline(){if(this.isDegenerateGeometry(this.m_geometry)){const e=new k;this.m_geometry.getPointByVal(0,e);const t=new M;return this.m_geometry.queryEnvelope(t),e.setXY(t.getCenter()),this.bufferDegeneratePath(e,!0)}const e=this.m_geometry,t=this.m_geometry.getDescription();this.m_geometry=null;const s=new H(e);let i,n;i=0===this.m_joins?(new G).executeMany(s,.25*this.m_densifyDist,!1,this.m_progressTracker):s,n=this.m_bRoundBuffer?(new N).executeMany(i,null,!0,this.m_progressTracker):i;const r=new K(this,n,this.m_bFilter),m=(new R).executeMany(r,this.m_spatialReference,this.m_progressTracker,2),o=(new A).executeMany(m,this.m_spatialReference,!1,this.m_progressTracker).next();return null!==o?o:new I({vd:t})}bufferPolygon(){if(0===this.m_distance)return this.m_geometry;this.generateCircleTemplate();const e=(new A).execute(this.m_geometry,null,!1,this.m_progressTracker);if(this.m_distance<0){if(this.m_geometry=e,this.m_geometry.isEmpty())return this.m_geometry;const t=this.m_geometry,s=this.bufferPolygonImpl(t,0,t.getPathCount());return(new A).execute(s,this.m_spatialReference,!1,this.m_progressTracker)}{if(this.m_geometry=e,this.isDegenerateGeometry(this.m_geometry)){const e=new k;this.m_geometry.getPointByVal(0,e);const t=new M;return this.m_geometry.queryEnvelope(t),e.setXY(t.getCenter()),this.bufferDegeneratePath(e,!0)}const t=new W(this),s=(new R).executeMany(t,this.m_spatialReference,this.m_progressTracker,2),i=(new A).executeMany(s,this.m_spatialReference,!1,this.m_progressTracker).next();return null!==i?i:new I({vd:this.m_geometry.getDescription()})}}bufferPolygonImpl(e,t,s){const i=e,n=i.getImpl();let r=new I({vd:e.getDescription()});for(let m=t;m<s;m++){if(n.getPathSize(m)<1)continue;const t=n.calculateRingArea2D(m),s=new M;if(n.queryPathEnvelope(m,s),this.m_distance>0)if(t>0)if(this.isDegeneratePath(n,m)){const e=new k;n.getPointByVal(n.getPathStart(m),e),e.setXY(s.getCenter()),r.add(this.bufferDegeneratePath(e,!0),!1)}else{const t=new E({vd:e.getDescription()}),s=t.getImpl();if(B(this.m_geometry,m)){const e=this.bufferConvexPath(i,m);r.add(e,!1)}else{this.bufferClosedPath(this.m_geometry,m,s,this.m_bRoundBuffer,1);const e=this.bufferCleanup(t);r.add(e,!1)}}else{if(s.width()+this.m_tolerance.total()<=2*this.m_absDistance||s.height()+this.m_tolerance.total()<=2*this.m_absDistance)continue;const t=new E({vd:e.getDescription()}),i=t.getImpl();if(this.bufferClosedPath(this.m_geometry,m,i,this.m_bRoundBuffer,1),!t.isEmpty()){const e=s,n=Math.max(1,this.m_absDistance),m=e.clone();m.inflateCoords(n,n),i.addEnvelope(m,!1);const o=this.bufferCleanup(t);r.reserve(r.getPointCount()+o.getPointCount()-4),se(o,r,m,!0)}}else if(t>0){if(s.width()+this.m_tolerance.total()<=2*this.m_absDistance||s.height()+this.m_tolerance.total()<=2*this.m_absDistance)continue;const t=new E({vd:e.getDescription()}),i=t.getImpl();if(this.bufferClosedPath(this.m_geometry,m,i,this.m_bRoundBuffer,-1),!t.isEmpty()){const e=new M;i.queryLooseEnvelope(e);const s=Math.max(1,this.m_absDistance),n=e.clone();n.inflateCoords(s,s),i.addEnvelope(n,!1),se(this.bufferCleanup(t),r,n,!0)}}else{const t=new E({vd:e.getDescription()}),s=t.getImpl();this.bufferClosedPath(this.m_geometry,m,s,this.m_bRoundBuffer,-1);const i=this.bufferCleanup(t);for(let e=0,t=i.getPathCount();e<t;e++)r.addPath(i,e,!0)}}if(this.m_distance>0)return r.getPathCount()>1?this.bufferCleanup(r):$(r);{const e=new M;if(r.queryLooseEnvelope(e),r.isEmpty())return $(r);{const t=Math.max(1,this.m_absDistance),s=e.clone();s.inflateCoords(t,t),r.addEnvelope(s,!1);const i=this.bufferCleanup(r);r=new I;const n=new I({vd:i.getDescription()});return se(i,n,s,!1),$(n)}}}bufferPoint(){return this.bufferPointImpl(this.m_geometry)}bufferPointImpl(e){const t=new I({vd:e.getDescription()});return 0===this.m_caps?(this.addCircle(t.getImpl(),e),this.setStrongSimple(t)):2===this.m_caps?(this.addSquare(t.getImpl(),e),this.setStrongSimple(t)):t}bufferDegeneratePath(e,t){const s=new I({vd:e.getDescription()});return t&&0===this.m_joins||!t&&0===this.m_caps?(this.addCircle(s.getImpl(),e),this.setStrongSimple(s)):t||2!==this.m_caps?s:(this.addSquare(s.getImpl(),e),this.setStrongSimple(s))}bufferMultiPoint(){const e=new Q(this,this.m_geometry,this.m_distance,this.m_spatialReference,this.m_joins,this.m_caps,this.m_miterLimit,this.m_densifyDist,this.m_maxVertexInCompleteCircle,this.m_progressTracker);return(new R).executeMany(e,this.m_spatialReference,this.m_progressTracker,2).next()}bufferEnvelope(){let e=new I({vd:this.m_geometry.getDescription()});if(this.m_distance<=0){if(0===this.m_distance)e.addEnvelope(this.m_geometry,!1),ee(this.m_geometry,this.m_tolerance.total())&&(e=this.setStrongSimple(e));else{const t=new X;this.m_geometry.queryEnvelope(t),t.inflateCoords(this.m_distance,this.m_distance),e.addEnvelope(t,!1),ee(t,this.m_tolerance.total())&&(e=this.setStrongSimple(e))}return e}if(1===this.m_joins){const t=new X({copy:this.m_geometry});return t.inflateCoords(this.m_absDistance,this.m_absDistance),e.addEnvelope(t,!1),e}const t=this.m_geometry.clone();if(0===t.width()||0===t.height()){if(0===t.width()&&0===t.height()){const e=new k({vd:this.m_geometry.getDescription()});return t.queryCornerByVal(0,e),this.m_geometry=e,this.bufferImpl()}const e=new E({vd:this.m_geometry.getDescription()}),s=new k;return t.queryCornerByVal(0,s),e.startPathPoint(s),t.queryCornerByVal(2,s),e.lineToPoint(s),this.m_geometry=e,this.bufferImpl()}return e.addEnvelope(this.m_geometry,!1),this.m_geometry=e,this.bufferConvexPath(e,0)}bufferConvexPath(e,t){this.generateCircleTemplate();const i=e.hasAttribute(10),n=new I({vd:e.getDescription()}),r=n.getImpl();n.reserve((this.m_circleTemplate.length/10+4)*e.getPathSize(t));const m=new f,o=new f,a=new f,h=new f(0,0),l=new f,c=new f,u=e.getImpl(),_=e.getPathSize(t),g=e.getPathStart(t);for(let n=0,f=e.getPathSize(t);n<f;n++){const e=u.getXY(g+n),t=u.getXY(g+(n+1)%_),f=u.getXY(g+(n+2)%_);l.setSub(t,e),0===l.length()&&s("");const d=i&&!!(1&u.getAttributeAsInt(10,(n+1)%_,0));l.normalize();const p=l.clone();l.leftPerpendicularThis(),l.scale(this.m_absDistance),m.setAdd(l,e),o.setAdd(l,t),0===n?r.startPath(m):r.lineTo(m),r.lineTo(o),c.setSub(f,t),0===c.length()&&s(""),c.normalize();const b=c.clone();c.leftPerpendicularThis(),c.scale(this.m_absDistance),a.setAdd(c,t);let y=O.enumArc;const P=d?0:this.m_joins;if(2===P)y=O.enumBevel;else if(1===P){const e=-p.crossProduct(b);h.setSub(p,b),h.scale(this.m_absDistance/e),h.length()<this.m_miterLimit*this.m_absDistance?(h.addThis(t),y=O.enumMiter):y=O.enumBevel}else h.assign(t);this.addJoin(y,r,h,o,a,!1,!1)}return $(n)}bufferPolylinePath(e,t,s){this.generateCircleTemplate();const i=e,n=i.getImpl();if(n.getPathSize(t)<1)return null;let r;if(r=this.m_bRoundBuffer?n.isClosedPathInXYPlane(t):n.isClosedPath(t),this.isDegeneratePath(n,t)&&this.m_distance>0){const e=new k;n.getPointByVal(n.getPathStart(t),e);const s=new M;return n.queryPathEnvelope(t,s),e.setXY(s.getCenter()),this.bufferDegeneratePath(e,r)}const m=new E({vd:e.getDescription()});m.reserve((Math.trunc(this.m_circleTemplate.length/10)+4)*n.getPathSize(t));const o=m.getImpl();return r?2!==this.bufferClosedPath(i,t,o,s,1)&&this.bufferClosedPath(i,t,o,s,-1):this.bufferOpenPath(i,t,o,s),this.bufferCleanup(m)}progress_(){}bufferCleanup(e,t=!1){const s=t?this.m_tolerance:this.m_smallTolerance;return Y(e,s,!0,!t,-1,this.m_progressTracker,0,!1)}calcN(){if(0===this.m_densifyDist)return this.m_maxVertexInCompleteCircle;const e=1-this.m_densifyDist*Math.abs(this.m_absDistanceReversed);let t=4;return t=e<-1?4:2*Math.PI/Math.acos(e)+.5,t<4?t=4:t>this.m_maxVertexInCompleteCircle&&(t=this.m_maxVertexInCompleteCircle),Math.trunc(t)}addJoin(e,t,s,i,n,r,m){if(this.generateCircleTemplate(),r&&(t.startPath(i),r=!1),e===O.enumBevel)return void(m&&t.lineTo(n));if(e===O.enumMiter){const e=s.clone();return t.lineTo(e),void(m&&t.lineTo(n))}const o=new f;o.setSub(i,s),o.scale(this.m_absDistanceReversed);const a=new f;a.setSub(n,s),a.scale(this.m_absDistanceReversed);let h=Math.atan2(o.y,o.x)/this.m_dA;h<0&&(h=this.m_circleTemplate.length+h),h=this.m_circleTemplate.length-h;let l=Math.atan2(a.y,a.x)/this.m_dA;l<0&&(l=this.m_circleTemplate.length+l),l=this.m_circleTemplate.length-l,l<h&&(l+=this.m_circleTemplate.length);let c=Math.trunc(l),u=Math.ceil(h),_=this.m_circleTemplate[u%this.m_circleTemplate.length].clone();_.scaleAddThis(this.m_absDistance,s);const g=10*this.m_tolerance.total();_.sub(i).length()<g&&(u+=1),_=this.m_circleTemplate[c%this.m_circleTemplate.length].clone(),_.scaleAddThis(this.m_absDistance,s),_.sub(n).length()<g&&(c-=1);let d=c-u;d++;for(let e=0,i=u%this.m_circleTemplate.length;e<d;e++,i=(i+1)%this.m_circleTemplate.length)_=this.m_circleTemplate[i].clone(),_.scaleAddThis(this.m_absDistance,s),t.lineTo(_),this.progress_();m&&t.lineTo(n)}bufferClosedPath(e,t,s,i,n){const r=new F,m=r.addPathFromMultiPath(e,t,!0);return this.bufferClosedPathImpl(r,m,s,i,n)}bufferClosedPathImpl(s,i,n,r,m){const o=s.getFirstVertex(s.getFirstPath(i)),a=new k;if(s.queryPoint(o,a),s.filterClosePoints(this.m_filterTolerance,!1,!1,!1,-1),s.getPointCount(i)<2)return m<0?0:(this.m_bRoundBuffer&&this.addCircle(n,a),2);g(s.getFirstPath(i)!==L),g(s.getFirstVertex(s.getFirstPath(i))!==L);const h=s.getXY(s.getFirstVertex(s.getFirstPath(i))),l=new d;if(l.setShift(h.negate()),s.applyTransformation(l),r){const r=function(s,i,n,r,m,o,a){const h=function(s,i,n,r,m,o,a){const h={stack:[],error:void 0,hasError:!1};try{const t=s.getFirstPath(i),r=s.createUserIndex();e(h,b((()=>{s.removeUserIndex(r)}),!1),!1),function(e,t,s,i){let n=-1;const r=new f,m=new f,o=new f;for(let s=0,a=e.getPathSize(i),h=e.getFirstVertex(i);s<a;++s){-1===n&&(e.queryXY(h,m),n=e.getPrevVertex(h),-1!==n&&(e.queryXY(n,r),o.setSub(m,r),o.normalize()));const s=e.getNextVertex(h);if(-1===s)break;const i=e.getXY(s),a=i.sub(m);a.normalize(),-1!==n&&a.dotProduct(o)<-.99&&Math.abs(a.crossProduct(o))<1e-7&&e.setUserIndex(h,t,1),n=h,h=s,r.assign(m),m.assign(i),o.assign(a)}}(s,r,0,t);for(let e=0;e<100;++e){if(0===s.getPathSize(t))return 1;let e=s.getFirstVertex(t),i=s.getPathSize(t);if(i<3)return 1;s.isClosedPath(t)||(i-=1);const o=64;let h=0,l=!1;for(let t=0;t<i&&e!==L;t++){let c=0,u=e;for(let h=1,l=Math.min(o,i-t);h<l;h++)if(u=s.getNextVertexEx(u,n),h>1){const t=te(s,r,e,u,n,m,a,o);if(-1===t)break;c+=t,i-=t}if(h+=c,l=c>0,l){const t=s.getPrevVertexEx(e,n);if(-1!==t){e=t,i++;continue}}e=s.getNextVertexEx(e,n)}if(0===h)break}return s.filterClosePoints(o,!1,!1,!1,-1),1}catch(e){h.error=e,h.hasError=!0}finally{t(h)}}(s,i,n,0,m,o,a);return h}(s,i,m,0,this.m_absDistance,this.m_filterTolerance,this.m_densifyDist);if(g(1===r),s.getPointCount(i)<2)return m<0?0:(this.addCircle(n,a),2)}const c=0!==this.m_joins&&s.getVertexDescription().hasAttribute(10);this.m_bufferCommands.length=0;const u=s.getFirstPath(i);let _=s.getFirstVertex(u),p=1===m?s.getPrevVertex(_):s.getNextVertex(_),y=1===m?s.getNextVertex(_):s.getPrevVertex(_),P=!0;const x=new f,C=new f,D=new f,w=new f,T=new f,v=new f,S=new f,I=new f,M=this.m_absDistance,V=s.getPathSize(u),E=new f(0,0);for(let e=0;e<V;e++){C.assign(s.getXY(y)),P&&(x.assign(s.getXY(_)),D.assign(s.getXY(p)),v.setSub(x,D),v.normalize(),I.leftPerpendicularOther(v),I.scale(M),w.setAdd(I,x));const e=c&&!!(1&s.getAttributeAsDbl(10,_,0));T.setSub(C,x),T.normalize(),S.leftPerpendicularOther(T),S.scale(M);const t=new f;t.setAdd(x,S);const i=v.crossProduct(T),n=v.dotProduct(T);if(i<0||n<0&&i<Math.abs(n)*Number.EPSILON*8){let s=!1;const n=e?0:this.m_joins;if(1===n){const e=-i;E.setSub(v,T),E.scale(this.m_absDistance/e),E.length()<this.m_miterLimit*this.m_absDistance&&(E.addThis(x),s=!0),this.m_bufferCommands.push(U(w,t,E,s?O.enumMiter:O.enumBevel,this.m_bufferCommands.length+1))}else this.m_bufferCommands.push(U(w,t,x,0===n?O.enumArc:O.enumBevel,this.m_bufferCommands.length+1))}else w.equals(t)||(this.m_bufferCommands.push(J(w,x,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(J(x,t,this.m_bufferCommands.length+1)));const r=new f;r.setAdd(C,S),this.m_bufferCommands.push(U(t,r,x,O.enumLine,this.m_bufferCommands.length+1)),w.setCoordsPoint2D(r),I.setCoordsPoint2D(S),D.setCoordsPoint2D(x),x.setCoordsPoint2D(C),v.setCoordsPoint2D(T),p=_,_=y,P=!1,y=1===m?s.getNextVertex(_):s.getPrevVertex(_)}return this.m_bufferCommands.at(-1).m_next=0,this.processBufferCommands(n),l.setShift(h),n.applyTransformationToPath(l,n.getPathCount()-1),1}bufferOpenPath(e,t,s,i){if(this.m_bRoundBuffer){const n=new E({vd:e.getDescription()});return n.addPath(e,t,!1),n.addSegmentsFromPath(e,t,0,e.getSegmentCountPath(t),!1),this.bufferClosedPath(n,0,s,i,1)}let n=0;const r=new E({vd:e.getDescription()}),m=new f(0,0);{const i=new F,o=i.addPathFromMultiPath(e,t,!1),a=i.getFirstVertex(i.getFirstPath(o)),h=new k;if(i.queryPoint(a,h),m.assign(h.getXY()),i.filterClosePoints(0,!1,!1,!1,-1),i.getPointCount(o)<2)return this.m_bRoundBuffer&&this.addCircle(s,h),2;const l=i.getGeometry(i.getFirstGeometry());r.addPath(l,0,!1),n=r.getPointCount()-1,r.addSegmentsFromPath(l,0,0,l.getSegmentCountPath(0)-1,!1)}const o=new F,a=o.addPathFromMultiPath(r,0,!0);g(o.getFirstPath(a)!==L),g(o.getFirstVertex(o.getFirstPath(a))!==L);const h=new d;h.setShift(m.negate()),o.applyTransformation(h),this.m_bufferCommands.length=0;const l=o.getFirstPath(a),c=0!==this.m_joins&&o.getVertexDescription().hasAttribute(10);let u=o.getFirstVertex(l),_=o.getPrevVertex(u),p=o.getNextVertex(u),b=!0;const y=new f,P=new f,x=new f,C=new f,D=new f,w=new f,T=new f,v=new f,S=this.m_absDistance,I=o.getPathSize(l),M=new f(0,0);for(let e=0;e<I;e++){let t=!1;0!==e&&e!==n||(t=!0),P.assign(o.getXY(p)),b&&(y.assign(o.getXY(u)),x.assign(o.getXY(_)),w.setSub(y,x),w.normalize(),v.leftPerpendicularOther(w),v.scale(S),C.setAdd(v,y));const s=c&&!!(1&o.getAttributeAsDbl(10,u,0));D.setSub(P,y),D.normalize(),T.leftPerpendicularOther(D),T.scale(S);const i=new f;i.setAdd(y,T);const r=w.crossProduct(D),m=w.dotProduct(D);if(r<0||m<0&&r<Math.abs(m)*Number.EPSILON*8)if(t)if(0===this.m_caps)this.m_bufferCommands.push(U(C,i,y,O.enumArc,this.m_bufferCommands.length+1));else if(1===this.m_caps)this.m_bufferCommands.push(U(C,i,y,O.enumLine,this.m_bufferCommands.length+1));else{const e=D.mul(this.m_absDistance).negate(),t=e.clone();e.addThis(C),t.addThis(i),this.m_bufferCommands.push(U(C,e,y,O.enumLine,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(U(e,t,y,O.enumLine,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(U(t,i,y,O.enumLine,this.m_bufferCommands.length+1))}else{let e=!1;const t=s?0:this.m_joins;if(1===t){const t=-r;M.setSub(w,D),M.scale(this.m_absDistance/t),M.length()<this.m_miterLimit*this.m_absDistance&&(M.addThis(y),e=!0),this.m_bufferCommands.push(U(C,i,M,e?O.enumMiter:O.enumBevel,this.m_bufferCommands.length+1))}else this.m_bufferCommands.push(U(C,i,y,0===t?O.enumArc:O.enumBevel,this.m_bufferCommands.length+1))}else C.equals(i)||(this.m_bufferCommands.push(J(C,y,this.m_bufferCommands.length+1)),this.m_bufferCommands.push(J(y,i,this.m_bufferCommands.length+1)));const a=new f;a.setAdd(P,T),this.m_bufferCommands.push(U(i,a,y,O.enumLine,this.m_bufferCommands.length+1)),C.setCoordsPoint2D(a),v.setCoordsPoint2D(T),x.setCoordsPoint2D(y),y.setCoordsPoint2D(P),w.setCoordsPoint2D(D),_=u,u=p,b=!1,p=o.getNextVertex(u)}return this.m_bufferCommands.at(-1).m_next=0,this.processBufferCommands(s),h.setShift(m),s.applyTransformationToPath(h,s.getPathCount()-1),1}processBufferCommands(e){const t=this.cleanupBufferCommands();let s=!0,i=t+1;for(let n=t;i!==t;n=i){const t=this.m_bufferCommands[n];i=-1!==t.m_next?t.m_next:(n+1)%this.m_bufferCommands.length,t.m_type&&(s&&(e.startPath(t.m_from),s=!1),t.m_type&O.enumJoinMask?this.addJoin(t.m_type,e,t.m_center,t.m_from,t.m_to,!1,!0):e.lineTo(t.m_to))}}cleanupBufferCommands(){this.m_helperArray=p(f,9);let e=0;for(let t=0,s=this.m_bufferCommands.length;t<s;){const s=this.m_bufferCommands[t];if(s.m_type&O.enumConnectionMask){e=t;break}t=s.m_next}let t=e+1;for(let s=e;t!==e;s=t){const e=this.m_bufferCommands[s];t=e.m_next;let i=1,n=null;for(;t!==s&&(n=this.m_bufferCommands[t],!(n.m_type&O.enumConnectionMask));)t=n.m_next,i++;1!==i&&(e.m_type&n.m_type)===O.enumLine&&(this.m_helperLine1.setStartXY(e.m_from),this.m_helperLine1.setEndXY(e.m_to),this.m_helperLine2.setStartXY(n.m_from),this.m_helperLine2.setEndXY(n.m_to),1===this.m_helperLine1.intersect(this.m_helperLine2,this.m_helperArray,null,null,this.m_smallTolerance.total())&&(e.m_to.assign(this.m_helperArray[0]),n.m_from.assign(this.m_helperArray[0]),e.m_next=t))}return e}isDegeneratePath(e,t){if(1===e.getPathSize(t))return!0;if(0===this.m_joins&&0===this.m_caps){const s=new M;if(e.queryPathEnvelope(t,s),Math.max(s.width(),s.height())<.5*this.m_densifyDist)return!0}return!1}isDegenerateGeometry(e){if(0===this.m_joins&&0===this.m_caps){const t=new M;if(e.queryEnvelope(t),Math.max(t.width(),t.height())<.5*this.m_densifyDist)return!0}return!1}addCircle(e,t){const s=t.getXY();if(0!==this.m_circleTemplate.length){let t=this.m_circleTemplate[0].clone();t.scaleAddThis(this.m_absDistance,s),e.startPath(t);for(let i=1,n=this.m_circleTemplate.length;i<n;i++)t=this.m_circleTemplate[i].clone(),t.scaleAddThis(this.m_absDistance,s),e.lineTo(t);return}const i=this.m_circleTemplateSize,n=Math.trunc((i+3)/4),r=.5*Math.PI/n;e.reserve(4*n);const m=Math.cos(r),o=Math.sin(r);for(let t=3;t>=0;t--){const i=f.construct(0,this.m_absDistance);switch(t){case 0:for(let t=0;t<n;t++)e.lineToCoords(i.x+s.x,i.y+s.y),i.rotateReverse(m,o);break;case 1:for(let t=0;t<n;t++)e.lineToCoords(-i.y+s.x,i.x+s.y),i.rotateReverse(m,o);break;case 2:for(let t=0;t<n;t++)e.lineToCoords(-i.x+s.x,-i.y+s.y),i.rotateReverse(m,o);break;default:e.startPathCoords(i.y+s.x,-i.x+s.y);for(let t=1;t<n;t++)i.rotateReverse(m,o),e.lineToCoords(i.y+s.x,-i.x+s.y)}this.progress_()}}addSquare(e,t){const s=new X({vd:t.getDescription()});s.setCoords(t.getX(),t.getY(),t.getX(),t.getY()),s.inflateCoords(this.m_absDistance,this.m_absDistance),e.addEnvelope(s,!1)}setStrongSimple(e){return e.getImpl().setIsSimple(4,this.m_tolerance.total()),e.getImpl().updateOGCFlagsProtected(),e}}function $(e){return q(e,0),e}function ee(e,t){return!!e.isEmpty()||Math.min(e.width(),e.height())>t}function te(e,t,s,i,n,r,m,o){const a=e.getXY(s),h=e.getXY(i);if(a.equals(h))return-1;const l=.25*m,c=.25*m,u=new f;u.setSub(h,a);const _=u.length(),d=_*_*.25,p=r*r-d;if(p<=d)return-1;const b=Math.sqrt(p);u.normalize();const x=u.clone();x.rightPerpendicularThis();const C=d/b,D=C<=c,w=f.lerp(h,a,.5),T=x.clone(),v=C-l;T.scaleAddThis(Math.max(0,v),w),x.negate().scaleAddThis(b,w);const S=3.61*P(r-c),I=T.sub(a),M=T.sub(h);let V=!1,E=0;const k=y(64,0);g(o===k.length);{for(let r=e.getPrevVertexEx(i,n);r!==s;){if(1===e.getUserIndex(r,t))return-1;if(!e.getXY(r).equals(h))break;{const t=e.getPrevVertexEx(r,n);e.removeVertex(r,!1),r=t}}const r=new f,m=a.clone();k[E++]=1;for(let o=e.getNextVertexEx(s,n);o!==i;){if(1===e.getUserIndex(o,t))return-1;const s=e.getXY(o);if(s.equals(m)){const t=e.getNextVertexEx(o,n);e.removeVertex(o,!1),o=t;continue}k[E++]=0;const i=new f;if(i.setSub(s,a),i.dotProduct(x)<0)return 0;(f.sqrDistance(s,a)>S||f.sqrDistance(s,h)>S)&&(V=!0);let l=0;if(s.sub(a).crossProduct(I)>=0&&(l=1),s.sub(h).crossProduct(M)<=0&&(l|=2),0===l)return 0;k[E-1]=l,r.assign(m),m.assign(s),o=e.getNextVertexEx(o,n)}if(1===E)return 0;g(E<k.length),k[E++]=2}let R=!0;for(let e=1,t=0;e<E;e++)if(k[e]!==k[e-1]&&(t++,R=t<3&&(1===t&&3===k[e]||2===t&&2===k[e]),!R))return 0;if(E>2&&R&&(3===E||!V)){let t=0,r=e.getNextVertexEx(s,n);for(D||(e.setXY(r,T),r=e.getNextVertexEx(r,n));r!==i;){const s=e.getNextVertexEx(r,n);e.removeVertex(r,!1),r=s,++t}return t}if(g(3!==E),V&&E>3)return 0;const A=a.clone();let B=s;const X=a.clone();let Y=1,F=-1,L=B,q=0;for(E=1;L!==i;){L=e.getNextVertexEx(L,n);const t=k[E++];if(0===t){if(L===i)break;continue}const s=e.getXY(L);if(-1!==F){if(F&Y&t&3){e.removeVertex(B,!0),q++,B=L,X.setCoordsPoint2D(s),Y=t;continue}if(3===Y&&0!==F&&0!==t){if(X.setCoordsPoint2D(T),D||X.equals(A)){e.removeVertex(B,!0),q++,B=L,X.setCoordsPoint2D(s),Y=t;continue}e.setXY(B,X)}}F=Y,A.setCoordsPoint2D(X),B=L,Y=t,X.setCoordsPoint2D(s)}return q}function se(e,t,s,i){for(let n=0,r=e.getPathCount();n<r;n++){const r=e.getXY(e.getPathStart(n));r.x!==s.xmin&&r.x!==s.xmax&&t.addPath(e,n,i)}}export{Z as B};

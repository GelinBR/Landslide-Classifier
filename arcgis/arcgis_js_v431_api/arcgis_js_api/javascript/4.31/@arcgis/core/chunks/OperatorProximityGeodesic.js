/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{a as e,b as t}from"./tslib.es6.js";import{t as s,G as o,i as r,d as n,e as i,g as a,p as c,P as m,o as l,s as u}from"./Transformation2D.js";import{m as g,a as p,c as f}from"./SideCalculator2D-CsYV5zVZ.js";import{a as y,M as d,P as S,d as j,ad as N,ae as x,af as h,ag as A,r as C,ah as P,ai as w,aj as E,ak as _,a3 as T,a1 as G,a2 as I,al as D,am as b,o as U,an as v,ao as R,ap as q,G as k}from"./converterAPI.js";import{O as B}from"./OperatorShapePreservingDensify.js";import"../geometry.js";import"./ensureType.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"../geometry/Extent.js";import"../core/accessorSupport/decorators/property.js";import"./utils.js";import"./handleUtils.js";import"./metadata.js";import"../core/Error.js";import"../core/accessorSupport/decorators/subclass.js";import"./tracking.js";import"../geometry/Geometry.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./boundsUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"./OperatorGeodeticDensifyByLength.js";class M{getOperatorType(){return 10501}supportsCurves(){return!1}accelerateGeometry(e,t,s){return!1}canAccelerateGeometry(e){return!1}getNearestCoordinate(e,t,c,l,u,_){if(t.isNAN()&&s("NAN xy coordinates are not allowed"),e.isEmpty())return g();if(Number.isNaN(l)&&(l=0),l>=0||s("maxDeviationMeters"),0===e.getDimension())return this.getNearestVertex(e,t,c);const G=e.getGeometryType();if(G===o.enumGeometryCollection){const s=e;let o=g();for(let e=0,r=s.getGeometryCount();e<r;++e){const r=s.getGeometry(e),n=this.getNearestCoordinate(r,t,c,l,u,_);if(!n.isEmpty()){if(0===n.m_distance)return n;n.m_distance>=o.m_distance||(o=n,o.m_geometryIndex=e)}}return o}if(G===o.enumEnvelope){const s=new y;return s.addEnvelope(e,!1),this.getNearestCoordinate(s,t,c,l,u,_)}r(G)||n("Operation is not implemented for this geometry type");const I=e;if((u||_)&&G===o.enumPolygon){const s=()=>{const e=p(t,-1,0);return e.m_bRightSide=!0,e};if(c.isPannable()){const o=(new d).foldInto360Range(new S(t),c);if(o.isEmpty())return g();const r=(new d).foldInto360Range(e,c);if(r.isEmpty())return g();if((new j).execute(r,o,c,null)&&u)return s()}else{const e=(new d).clipToSpatialReference(new S(t),c,null,1);if(e.isEmpty())return g();const o=N(I,c,0,null);if(o.isEmpty())return g();if((new j).execute(o,e,c,null)&&u)return s()}}const D=c!==c.getGCS()?c.getSRToGCSTransform():null,b=new m;if(D?(new d).transform(D,[t],1,[b],!1):b.assign(t),b.isNAN())return g();const U=V(I,t,c,1);let v=U.m_distance;if(0===v)return U;Number.isNaN(v)?v=Number.POSITIVE_INFINITY:v*=1+1e-7;const q=c.getGCS(),k=q.getUnit().getUnitToBaseFactor(),M=b.clone();M.scale(k);const O=T();c.querySpheroidData(O);const X=x(O.majorSemiAxis,O.e2,M),L=h(O.majorSemiAxis,O.e2),z=new F(I.querySegmentIterator());0===l&&(l=.01);const H=O.majorSemiAxis*A(45),J=(new B).executeMany(z,c,H,l,0,null),Z=[];let K=-1;const Q=new R,W=new C;for(let t=J.next();null!==t;t=J.next()){if(t.isEmpty())continue;const s=J.getGeometryID(),o=e.getPathIndexFromPointIndex(s);e.isClosedPath(o)&&I.getPathEnd(o);const r=t;for(let e=0,t=r.getPathCount();e<t;++e){Z.length=0;for(let t=r.getPathStart(e),s=r.getPathEnd(e);t<s;++t)Z.push(r.getXY(t));if(D&&(new d).transform(D,Z,Z.length,Z,!1),Z.length>3){const e=Y(Z,Z.length,b,q,1);if(e.m_distance<v){v=e.m_distance,Q.assign(x(O.majorSemiAxis,O.e2,e.m_coordinate.mul(k))),K=s;let t=e.m_vertexIndex;t+1===Z.length&&(t-=1),r.getSegmentBuffer(t,W,!0)}}Z.forEach((e=>e.mulThis(k)));const t=x(O.majorSemiAxis,O.e2,Z[0]),o=new R;for(let e=1,n=Z.length;e<n;++e){const n=x(O.majorSemiAxis,O.e2,Z[e]);if(P(L,X,t,n,o)<v){const{first:o,second:i}=w(O.majorSemiAxis,O.e2,X,t,n,2,null);if(i<=v){const o=new R,{first:i,second:a}=w(O.majorSemiAxis,O.e2,X,t,n,0,o);a<v&&(v=a,Q.assign(o),K=s,r.getSegmentBuffer(e-1,W,!0))}}t.assign(n)}}}if(!Number.isFinite(v))return g();-1===K&&s("");const $=E(O.majorSemiAxis,O.e2,Q);$.divThis(k);const ee=$.clone(),te=c!==c.getGCS()?c.getGCSToSRTransform():null;te&&(new d).transform(te,[$],1,[ee],!1),ee.isNAN()&&i("closestPoint2DSr.isNAN()"),a(!W.empty());const se=W.get().getClosestCoordinate(ee,!1);ee.assign(W.get().getCoord2D(se)),D?(new d).transform(D,[ee],1,[$],!1):$.assign(ee),a(!$.isNAN());const oe=this.getNearestVertex(new S($),b,c.getGCS()),re=p(ee,K,oe.m_distance);if(_&&e.getDimension()>0){const s=f(e,t,-1,-1),o=0!==s&&3!==s;re.m_bRightSide=o}return re}getNearestVertex(e,t,r){if(t.isNAN()&&s("NAN xy coordinates are not allowed"),e.isEmpty())return g();switch(e.getGeometryType()){case o.enumPoint:return O(e,t,r);case o.enumMultiPoint:case o.enumPolyline:case o.enumPolygon:return V(e,t,r);default:n("")}}getNearestVertexPoint2D(e,t,s,o){return a(0),{}}getNearestVertices(r,i,a,c,g){if(i.isNAN()&&s("NAN xy coordinates are not allowed"),r.isEmpty())return[];switch(r.getGeometryType()){case o.enumPoint:{const e=O(r,i,a);if(!e.isEmpty()&&e.m_distance<c&&g>=1){const t=[];return t.push(e),t}return[]}case o.enumMultiPoint:case o.enumPolyline:case o.enumPolygon:return function(o,r,n,i,a){const c={stack:[],error:void 0,hasError:!1};try{0===n.getCoordinateSystemType()&&s("Cannot use local SR");let t=o.getAttributeStreamRef(0),g=o.getPointCount();const f=n.getGCS(),y=r.clone();if(1!==n.getCoordinateSystemType()){const e=n.getSRToGCSTransform();if(b(e,[r],1,[y],null),y.isNAN())return[];const s=(new d).execute(o,e,null);t=s.getAttributeStreamRef(0),g=s.getPointCount()}const S=f.getUnit().getUnitToBaseFactor(),j=l(g,0);for(let e=0;e<g;++e)j[e]=e;U(g,j);const N=T();f.querySpheroidData(N);const h=y.clone();h.scale(S);const A=x(N.majorSemiAxis,N.e2,h),C=[];let P=g;const w=new m,E=new m;for(let e=0;e<P;){if(t.queryPoint2D(2*j[e],w),w.isNAN())continue;E.assign(w),E.scale(S);const s=x(N.majorSemiAxis,N.e2,E);R.distance(s,A)>i?(j[P-1]=u(j[e],j[e]=j[P-1]),P--):e++}const _=(e,t)=>e.m_distance-t.m_distance,v=e(c,new G,!1);for(let e=0;e<P;e++)t.queryPoint2D(2*j[e],w),w.isNAN()||(I.geodeticDistance(N.majorSemiAxis,N.e2,h.x,h.y,w.x*S,w.y*S,v,null,null,D.PE_LINETYPE_GEODESIC),v.val<i&&C.push(p(w,j[e],v.val)));return C.sort(_),C.slice(0,a)}catch(e){c.error=e,c.hasError=!0}finally{t(c)}}(r,i,a,c,g);default:n("")}}}function O(o,r,n){const i={stack:[],error:void 0,hasError:!1};try{if(0===n.getCoordinateSystemType()&&s("Cannot use local SR"),1!==n.getCoordinateSystemType()){const e=new Array(2);e[0]=o.getXY(),e[1]=r.clone();const t=c(m,2);2!==_(n,e,2,t)&&s("Point cannot be projected to GCS");const i=n.getGCS(),a=O(new S(t[0]),t[1],i);return p(a.m_coordinate,0,a.m_distance)}const t=n.getUnit().getUnitToBaseFactor(),a=o.getXY();a.scale(t);const l=r.clone();l.scale(t);const u=T();n.querySpheroidData(u);const g=e(i,new G,!1);I.geodeticDistance(u.majorSemiAxis,u.e2,a.x,a.y,l.x,l.y,g,null,null,D.PE_LINETYPE_GEODESIC);const f=o.getXY();return p(f,0,g.val)}catch(e){i.error=e,i.hasError=!0}finally{t(i)}}function V(o,r,n,i=0){0===n.getCoordinateSystemType()&&s("Cannot use local SR");let a=o.getAttributeStreamRef(0),c=o.getPointCount();const g=n.getGCS(),f=r.clone();if(1!==n.getCoordinateSystemType()){const e=n.getSRToGCSTransform();if(b(e,[r],1,[f],null),f.isNAN())return p(m.getNAN(),-1,Number.NaN);const t=(new d).execute(o,e,null);a=t.getAttributeStreamRef(0),c=t.getPointCount()}const y=g.getUnit().getUnitToBaseFactor(),S=l(c,0);for(let e=0;e<c;++e)S[e]=e;U(c,S);const j=T();g.querySpheroidData(j);const N=f.clone();N.scale(y);const h=x(j.majorSemiAxis,j.e2,N);let A=-1,C=Number.MAX_VALUE;const P=v(j.majorSemiAxis,j.e2);let w=c;const E=new m,_=new m;for(let e=0;e<w;){if(a.queryPoint2D(2*S[e],E),E.isNAN())continue;_.assign(E),_.scale(y);const t=x(j.majorSemiAxis,j.e2,_);if(R.distance(t,h)>C){S[w-1]=u(S[e],S[e]=S[w-1]),w--;continue}const s=q(P,t,h);s<C&&(A=S[e],C=s),e++}if(0!==j.e2){const s={stack:[],error:void 0,hasError:!1};try{const t=e(s,new G,!1);for(let e=0;e<w;e++){if(a.queryPoint2D(2*S[e],E),E.isNAN())continue;_.assign(E),_.scale(y);const s=x(j.majorSemiAxis,j.e2,_);R.distance(s,h)>C||(I.geodeticDistance(j.majorSemiAxis,j.e2,N.x,N.y,_.x,_.y,t,null,null,i),t.val<C&&(A=S[e],C=t.val))}}catch(e){s.error=e,s.hasError=!0}finally{t(s)}}const D=new m;return-1!==A&&D.assign(o.getXY(A)),p(D,A,C)}function Y(o,r,n,i,a=0){0===i.getCoordinateSystemType()&&s("Cannot use local SR");const f=i.getGCS(),y=n.clone();if(1!==i.getCoordinateSystemType()){const e=i.getSRToGCSTransform();if(b(e,[n],1,[y],null),y.isNAN())return g();const t=c(m,r);b(e,o,r,t,null);const s=Y(t,r,n,f,a);return s.isEmpty()?s:p(o[s.m_vertexIndex],s.m_vertexIndex,s.m_distance)}const d=f.getUnit().getUnitToBaseFactor(),S=l(r,0);for(let e=0;e<r;++e)S[e]=e;U(r,S);const j=T();f.querySpheroidData(j);const N=y.clone();N.scale(d);const h=x(j.majorSemiAxis,j.e2,N);let A=-1,C=Number.MAX_VALUE;const P=v(j.majorSemiAxis,j.e2);let w=r;for(let e=0;e<w;){const t=o[S[e]];if(t.isNAN())continue;const s=t.clone();s.scale(d);const r=x(j.majorSemiAxis,j.e2,s);if(R.distance(r,h)>C){S[w-1]=u(S[e],S[e]=S[w-1]),w--;continue}const n=q(P,r,h);n<C&&(A=S[e],C=n),e++}if(0!==j.e2){const s={stack:[],error:void 0,hasError:!1};try{const t=e(s,new G,!1);for(let e=0;e<w;e++){const s=o[S[e]];if(s.isNAN())continue;const r=s.clone();r.scale(d);const n=x(j.majorSemiAxis,j.e2,r);R.distance(n,h)>C||(I.geodeticDistance(j.majorSemiAxis,j.e2,N.x,N.y,r.x,r.y,t,null,null,a),t.val<C&&(A=S[e],C=t.val))}}catch(e){s.error=e,s.hasError=!0}finally{t(s)}}const E=new m;return-1!==A&&E.assign(o[A]),p(E,A,C)}class F extends k{constructor(e){super(),this.m_first=!0,this.m_segIter=e,this.m_segIter.stripAttributes()}tock(){return!0}getRank(){return 1}next(){if(this.m_first){if(!this.m_segIter.nextPath())return null;this.m_first=!1}for(;;){if(this.m_segIter.hasNextSegment())return this.m_segIter.nextSegment().clone();if(!this.m_segIter.nextPath())break}return null}getGeometryID(){return this.m_segIter.getStartPointIndex()}}export{M as OperatorProximityGeodesic};

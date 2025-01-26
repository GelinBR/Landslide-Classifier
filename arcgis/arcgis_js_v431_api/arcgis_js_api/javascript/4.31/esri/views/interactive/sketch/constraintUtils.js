// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../geometry ../../../core/quantityUtils ../../../core/unitUtils ../../../chunks/vec32 ../../../geometry/projection/projectVectorToVector ../../../geometry/support/geodesicUtils ../../../layers/graphics/dehydratedPoint ../../../support/elevationInfoUtils ./constraints ./normalizedPoint ../../support/angularMeasurementUtils ../../../geometry/SpatialReference".split(" "),function(p,S,r,A,y,u,J,K,L,n,m,l,M){function N(b,d,a,e){if(null!=a&&null!=b){var c=v(b,e);if(null!=c){a=l.getDegreesGeographic(a);
var f=h=>{if(null!=h){var k=m.createWritable();h=r.createAngle(h,"degrees","geographic");if(l.pointFromDistanceAlongAzimuth(k,c,e.measurementSR,10,h,e.mode))return new n.VerticalHalfPlaneConstraint(c,k)}},g=()=>{if(null!=d&&null!=b)return l.getDegreesGeographic(l.directionBetweenPoints(d,b))};switch(e.directionMode){case l.DirectionMode.Absolute:return f(a);case l.DirectionMode.Relative:return g=g(),null==g?void 0:f(g+a);case l.DirectionMode.RelativeBilateral:return g=g(),null==g?void 0:n.constraintOrSet([f(g+
a),f(g-a)])}}}}function B(b,d){b=w(b,d)?.value??void 0;return null!=b?new n.HorizontalPlaneConstraint(b):void 0}function z(b,d,a){const {context:e,longitude:c,latitude:f,direction:g,distance:h,elevation:k}=a;if(null!=c||null!=f||null!=h||null!=k||null!=g)return null!=c||null!=f?(b=l.getDegreesGeographic(c),d=l.getDegreesGeographic(f),a=w(k,e)?.value??void 0,new n.CoordinateConstraint(b,d,a)):O(b,d,a)}function O(b,d,{context:a,direction:e,distance:c,elevation:f}){if(null==d)return B(f,a);const {view:g,
elevationInfo:h,measurementSR:k}=a,q=m.fromPoint(d,g,h);if(k&&u.projectVectorToVector(q,d.spatialReference,C,k)){var [P,Q]=C,D=null!=c?r.valueInUnit(c,"meters"):void 0;e=l.getDegreesGeographic(e);var E=w(f,a)?.value??void 0;f=F=>{const G=new n.GeodesicConstraint([P,Q],k,D,E,F);return null==D||null==F||null==E&&a.hasZ?G:new n.PointConstraint(G.closestTo(q))};if(null==e)return f(void 0);c=()=>{if(null!=b&&null!=d)return l.getDegreesGeographic(l.directionBetweenPoints(b,d))};switch(a.directionMode){case l.DirectionMode.Absolute:return f(e);
case l.DirectionMode.Relative:return c=c(),null==c?void 0:f(c+e);case l.DirectionMode.RelativeBilateral:return c=c(),null==c?void 0:n.constraintOrSet([f(c+e),f(c-e)])}}}function H({x:b,y:d,elevation:a,context:e}){x.x=b?.value??0;x.y=d?.value??0;x.spatialReference=e.spatialReference;const c=v(x,e,R);return new n.CoordinateConstraint(null!=b&&null!=c?c[0]:void 0,null!=d&&null!=c?c[1]:void 0,w(a,e)?.value??void 0)}function I(b){let d;for(const a of b)a&&(d=d?.intersect(a)??a);return d}function v(b,d,
a=m.createWritable()){const {view:e,elevationInfo:c,measurementSR:f,origin:g,mode:h}=d;m.fromPoint(b,e,c,a);if(u.projectVectorToVector(a,b.spatialReference,a,f))return"geodesic"!==h&&y.subtract(a,a,g),a}function w(b,{view:d,origin:a,elevationInfo:e,hasZ:c,measurementSR:f}){if(null!=b&&c&&(c=A.verticalLengthUnitFromSpatialReference(f),null!=c)){var [g,h]=a;b=r.valueInUnit(b,c);d="3d"===d?.type?L.getConvertedElevationFromXYZ(d,g,h,b,f,e):b;if(null!=d)return r.createLength(d,c)}}const C=m.createWritable(),
R=m.createWritable(),t=m.createWritable(),x=K.makeDehydratedPoint(0,0,0,M.WGS84);p.constraintSpaceToPoint=function(b,d,a,e){const {view:c,measurementSR:f,spatialReference:g,origin:h,mode:k}=a;"geodesic"===k?y.copy(t,b):y.add(t,b,h);if(u.projectVectorToVector(t,f,t,g))return m.toElevationAlignedDehydratedPoint(t,c,d,a,e)};p.getConstraintContext=function(b,d,a,e,c,f){let g="geodesic",h=J.geodesicCompatibleSpatialReference(a);const k=m.createWritable();m.fromPoint(b,d,e,k);k[2]=0;h&&u.projectVectorToVector(k,
a,k,h)||(g="euclidean",h=a);return{mode:g,view:d,elevationInfo:e,hasZ:c,directionMode:f,spatialReference:b.spatialReference,measurementSR:h,origin:k}};p.getGeodesicConstraint=z;p.getPointConstraint=function(b){return"geodesic"===b.context.mode?z(null,null,b):H(b)};p.getPolylineOrPolygonConstraint=function(b,d,a){const {context:e,x:c,y:f,distance:g,direction:h,elevation:k}=a;if("geodesic"===e.mode)return z(d,b,a);if(null!=c||null!=f)return H(a);if(null==g||null==b)a=void 0;else{var q=A.lengthUnitFromSpatialReference(e.measurementSR);
null==q?a=void 0:(a=v(b,e),null==a?a=void 0:(q=r.valueInUnit(g,q),a=new n.VerticalCylinderConstraint(a,q)))}return I([a,N(b,d,h,e),B(k,e)])};p.intersectAll=I;p.pointToConstraintSpace=v;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../Dictionary ../executionError ../kernel ../../chunks/languageUtils ./centroid ./measures ../../core/unitUtils ../../geometry/Extent ../../geometry/Geometry ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils".split(" "),function(y,x,f,n,e,t,z,D,w,m,A,u,v,r,B){function C(h,l){if("polygon"!==h.type&&"polyline"!==h.type&&"extent"!==h.type)return 0;var p=1;if(h.spatialReference.vcsWkid||h.spatialReference.latestVcsWkid){p=
t.getMetersPerVerticalUnitForSR(h.spatialReference);var b=D.getMetersPerUnitForSR(h.spatialReference);p/=b}b=0;if("polyline"===h.type)for(var d of h.paths)for(var c=1;c<d.length;c++)b+=t.segmentLength3d(d[c],d[c-1],p);else if("polygon"===h.type)for(c of h.rings){for(d=1;d<c.length;d++)b+=t.segmentLength3d(c[d],c[d-1],p);if(c[0][0]!==c[c.length-1][0]||c[0][1]!==c[c.length-1][1]||void 0!==c[0][2]&&c[0][2]!==c[c.length-1][2])b+=t.segmentLength3d(c[0],c[c.length-1],p)}else"extent"===h.type&&(b+=2*t.segmentLength3d([h.xmin,
h.ymin,0],[h.xmax,h.ymin,0],p),b+=2*t.segmentLength3d([h.xmin,h.ymin,0],[h.xmin,h.ymax,0],p),b=2*b+4*Math.abs(e.defaultUndefined(h.zmax,0)*p-e.defaultUndefined(h.zmin,0)*p));h=new r({hasZ:!1,hasM:!1,spatialReference:h.spatialReference,paths:[[[0,0],[0,b]]]});return k.planarLength(h,l)}let k=null;y.registerFunctions=function(h,l){function p(b,d,c){e.pcCheck(c,2,2,b,d);if(!(c[0]instanceof m&&c[1]instanceof m||c[0]instanceof m&&null===c[1]||c[1]instanceof m&&null===c[0]||null===c[0]&&null===c[1]))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,d);}h.disjoint=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);p(b,d,a);return null===a[0]||null===a[1]?!0:k.disjoint(a[0],a[1])})};h.intersects=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);p(b,d,a);return null===a[0]||null===a[1]?!1:k.intersects(a[0],a[1])})};h.touches=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);p(b,d,a);return null===a[0]||null===a[1]?!1:k.touches(a[0],a[1])})};h.crosses=
function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);p(b,d,a);return null===a[0]||null===a[1]?!1:k.crosses(a[0],a[1])})};h.within=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);p(b,d,a);return null===a[0]||null===a[1]?!1:k.within(a[0],a[1])})};h.contains=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);p(b,d,a);return null===a[0]||null===a[1]?!1:k.contains(a[0],a[1])})};h.overlaps=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);
p(b,d,a);return null===a[0]||null===a[1]?!1:k.overlaps(a[0],a[1])})};h.equals=function(b,d){return l(b,d,(c,g,a)=>{e.pcCheck(a,2,2,b,d);return a[0]===a[1]?!0:a[0]instanceof m&&a[1]instanceof m?k.equals(a[0],a[1]):e.isDate(a[0])&&e.isDate(a[1])||e.isTime(a[0])&&e.isTime(a[1])||e.isDateOnly(a[0])&&e.isDateOnly(a[1])?a[0].equals(a[1]):!1})};h.relate=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,3,3,b,d);if(a[0]instanceof m&&a[1]instanceof m)return k.relate(a[0],a[1],
e.toString(a[2]));if(a[0]instanceof m&&null===a[1]||a[1]instanceof m&&null===a[0]||null===a[0]&&null===a[1])return!1;throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);})};h.intersection=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);p(b,d,a);return null===a[0]||null===a[1]?null:k.intersect(a[0],a[1])})};h.union=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);c=[];if(0===a.length)throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.WrongNumberOfParameters,
d);if(1===a.length)if(e.isArray(a[0]))for(a=e.autoCastFeatureToGeometry(a[0]),g=0;g<a.length;g++){if(null!==a[g]){if(!(a[g]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);c.push(a[g])}}else if(e.isImmutableArray(a[0]))for(a=e.autoCastFeatureToGeometry(a[0].toArray()),g=0;g<a.length;g++){if(null!==a[g]){if(!(a[g]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);c.push(a[g])}}else{if(a[0]instanceof m)return e.fixSpatialReference(n.cloneGeometry(a[0]),
b.spatialReference);if(null===a[0])return null;throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);}else for(g=0;g<a.length;g++)if(null!==a[g]){if(!(a[g]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);c.push(a[g])}return 0===c.length?null:k.union(c)})};h.difference=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);p(b,d,a);return null===a[0]?null:null===a[1]?n.cloneGeometry(a[0]):k.difference(a[0],a[1])})};h.symmetricdifference=
function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);p(b,d,a);return null===a[0]&&null===a[1]?null:null===a[0]?n.cloneGeometry(a[1]):null===a[1]?n.cloneGeometry(a[0]):k.symmetricDifference(a[0],a[1])})};h.clip=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,d);if(!(a[1]instanceof w)&&null!==a[1])throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(null===a[0])return null;if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,d);return null===a[1]?null:k.clip(a[0],a[1])})};h.cut=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,d);if(!(a[1]instanceof r)&&null!==a[1])throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(null===a[0])return[];if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return null===a[1]?[n.cloneGeometry(a[0])]:k.cut(a[0],a[1])})};h.area=function(b,
d){return l(b,d,(c,g,a)=>{e.pcCheck(a,1,2,b,d);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isArray(a[0])||e.isImmutableArray(a[0]))return c=e.autoCastArrayOfPointsToPolygon(a[0],b.spatialReference),null===c?0:k.planarArea(c,n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return k.planarArea(a[0],n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)))})};h.areageodetic=function(b,
d){return l(b,d,(c,g,a)=>{e.pcCheck(a,1,2,b,d);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isArray(a[0])||e.isImmutableArray(a[0]))return c=e.autoCastArrayOfPointsToPolygon(a[0],b.spatialReference),null===c?0:k.geodesicArea(c,n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return k.geodesicArea(a[0],n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)))})};h.length=function(b,
d){return l(b,d,(c,g,a)=>{e.pcCheck(a,1,2,b,d);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isArray(a[0])||e.isImmutableArray(a[0]))return c=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference),null===c?0:k.planarLength(c,n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return k.planarLength(a[0],n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)))})};h.length3d=function(b,
d){return l(b,d,(c,g,a)=>{e.pcCheck(a,1,2,b,d);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isArray(a[0])||e.isImmutableArray(a[0]))return c=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference),null===c?0:!0===c.hasZ?C(c,n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1))):k.planarLength(c,n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return!0===a[0].hasZ?C(a[0],
n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1))):k.planarLength(a[0],n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)))})};h.lengthgeodetic=function(b,d){return l(b,d,(c,g,a)=>{e.pcCheck(a,1,2,b,d);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isArray(a[0])||e.isImmutableArray(a[0]))return c=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference),null===c?0:k.geodesicLength(c,n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,d);return k.geodesicLength(a[0],n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)))})};h.distance=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,d);c=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))c=e.autoCastArrayOfPointsToMultiPoint(a[0],b.spatialReference);g=a[1];if(e.isArray(a[1])||e.isImmutableArray(a[1]))g=e.autoCastArrayOfPointsToMultiPoint(a[1],b.spatialReference);if(!(c instanceof m))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,d);if(!(g instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return k.distance(c,g,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})};h.distancegeodetic=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,d);c=a[0];g=a[1];if(!(c instanceof u))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(!(g instanceof u))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,
d);const q=new r({paths:[],spatialReference:c.spatialReference});q.addPath([c,g]);return k.geodesicLength(q,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})};h.densify=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,d);if(null===a[0])return null;if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);c=e.toNumber(a[1]);if(isNaN(c))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,
d);if(0>=c)throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return a[0]instanceof v||a[0]instanceof r?k.densify(a[0],c,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]instanceof w?k.densify(v.fromExtent(a[0]),c,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]})};h.densifygeodetic=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,d);if(null===a[0])return null;if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,d);c=e.toNumber(a[1]);if(isNaN(c))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(0>=c)throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return a[0]instanceof v||a[0]instanceof r?k.geodesicDensify(a[0],c,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]instanceof w?k.geodesicDensify(v.fromExtent(a[0]),c,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]})};h.generalize=function(b,
d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,4,b,d);if(null===a[0])return null;if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);c=e.toNumber(a[1]);if(isNaN(c))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return k.generalize(a[0],c,e.toBoolean(e.defaultUndefined(a[2],!0)),n.convertLinearUnitsToCode(e.defaultUndefined(a[3],-1)))})};h.buffer=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);
e.pcCheck(a,2,3,b,d);if(null===a[0])return null;if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);c=e.toNumber(a[1]);if(isNaN(c))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return 0===c?n.cloneGeometry(a[0]):k.buffer(a[0],c,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})};h.buffergeodetic=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,d);if(null===a[0])return null;
if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);c=e.toNumber(a[1]);if(isNaN(c))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return 0===c?n.cloneGeometry(a[0]):k.geodesicBuffer(a[0],c,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})};h.offset=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,6,b,d);if(null===a[0])return null;if(!(a[0]instanceof v||a[0]instanceof r))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,d);c=e.toNumber(a[1]);if(isNaN(c))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);g=e.toNumber(e.defaultUndefined(a[4],10));if(isNaN(g))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);const q=e.toNumber(e.defaultUndefined(a[5],0));if(isNaN(q))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return k.offset(a[0],c,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)),e.toString(e.defaultUndefined(a[3],
"round")).toLowerCase(),g,q)})};h.rotate=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,d);if(null===a[0])return null;if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);c=a[0]instanceof w?v.fromExtent(a[0]):a[0];g=e.toNumber(a[1]);if(isNaN(g))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);a=e.defaultUndefined(a[2],null);if(null===a)return k.rotate(c,g);if(a instanceof u)return k.rotate(c,
g,a);throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);})};h.centroid=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,d);if(null===a[0])return null;c=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))c=e.autoCastArrayOfPointsToMultiPoint(a[0],b.spatialReference);if(null===c)return null;if(!(c instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return c instanceof u?e.fixSpatialReference(n.cloneGeometry(c),
b.spatialReference):c instanceof v?c.centroid:c instanceof r?t.centroidPolyline(c):c instanceof A?t.centroidMultiPoint(c):c instanceof w?c.center:null})};h.measuretocoordinate=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,d);if(null===a[0])return null;c=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))c=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference);if(null===c)return null;if(!(c instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,
d);if(!(c instanceof r))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(e.isNumber(!1===a[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return(a=z.measureToCoordinate(c,a[1]))?x.convertObjectToArcadeDictionary(a,e.defaultTimeZone(b),!1,!0):null})};h.pointtocoordinate=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,d);if(null===a[0])return null;c=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))c=
e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference);if(null===c)return null;if(!(c instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(!(c instanceof r))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);g=a[1];if(null===g)return null;if(!(g instanceof u))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(e.isNumber(!1===a[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,
d);return(a=z.pointToCoordinate(c,g))?x.convertObjectToArcadeDictionary(a,e.defaultTimeZone(b),!1,!0):null})};h.distancetocoordinate=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,d);if(null===a[0])return null;c=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))c=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference);if(null===c)return null;if(!(c instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(!(c instanceof
r))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(e.isNumber(!1===a[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return(a=z.distanceToCoordinate(c,a[1]))?x.convertObjectToArcadeDictionary(a,e.defaultTimeZone(b),!1,!0):null})};h.multiparttosinglepart=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,d);if(null===a[0])return null;if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,
d);if(a[0]instanceof u||a[0]instanceof w)return[e.fixSpatialReference(n.cloneGeometry(a[0]),b.spatialReference)];c=k.simplify(a[0]);if(c instanceof v){a=[];g=[];for(var q=0;q<c.rings.length;q++)if(c.isClockwise(c.rings[q])){const E=B.fromJSON({rings:[c.rings[q]],hasZ:!0===c.hasZ,hasM:!0===c.hasM,spatialReference:c.spatialReference.toJSON()});a.push(E)}else g.push({ring:c.rings[q],pt:c.getPoint(q,0)});for(c=0;c<g.length;c++)for(q=0;q<a.length;q++)if(a[q].contains(g[c].pt)){a[q].addRing(g[c].ring);
break}return a}if(c instanceof r){a=[];for(g=0;g<c.paths.length;g++)q=B.fromJSON({paths:[c.paths[g]],hasZ:!0===c.hasZ,hasM:!0===c.hasM,spatialReference:c.spatialReference.toJSON()}),a.push(q);return a}if(a[0]instanceof A){c=[];a=e.fixSpatialReference(n.cloneGeometry(a[0]),b.spatialReference);for(g=0;g<a.points.length;g++)c.push(a.getPoint(g));return c}return null})};h.issimple=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,d);if(null===a[0])return!0;if(!(a[0]instanceof
m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return k.isSimple(a[0])})};h.simplify=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,d);if(null===a[0])return null;if(!(a[0]instanceof m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return k.simplify(a[0])})};h.convexhull=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,d);if(null===a[0])return null;if(!(a[0]instanceof
m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);return k.convexHull(a[0])})};h.nearestcoordinate=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,d);if(!(a[0]instanceof m||null===a[0]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(!(a[1]instanceof u||null===a[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(null===a[0]||null===a[1])return null;c=k.nearestCoordinate(a[0],
a[1]);return null===c||c.isEmpty?null:x.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},e.defaultTimeZone(b),!1,!0)})};h.nearestvertex=function(b,d){return l(b,d,(c,g,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,d);if(!(a[0]instanceof m||null===a[0]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,d);if(!(a[1]instanceof u||null===a[1]))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,d);if(null===a[0]||null===a[1])return null;c=k.nearestVertex(a[0],a[1]);return null===c||c.isEmpty?null:x.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},e.defaultTimeZone(b),!1,!0)})}};y.setGeometryEngine=function(h){k=h};Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});
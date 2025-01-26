// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../ArcadePortal ../Dictionary ../executionError ../kernel ../../chunks/languageUtils ../portalUtils ./centroid ./measures ../../core/unitUtils ../../geometry/Extent ../../geometry/Geometry ../../geometry/geometryEngineAsync ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils ../../portal/Portal ../../portal/support/utils".split(" "),function(z,A,t,f,n,e,B,u,y,H,x,l,k,C,v,w,q,D,E,F){function r(g,b,c){e.pcCheck(g,
2,2,b,c);if(!(g[0]instanceof l&&g[1]instanceof l||g[0]instanceof l&&null===g[1]||g[1]instanceof l&&null===g[0]||null===g[0]&&null===g[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);}async function G(g,b){if("polygon"!==g.type&&"polyline"!==g.type&&"extent"!==g.type)return 0;var c=1;if(g.spatialReference.vcsWkid||g.spatialReference.latestVcsWkid){c=u.getMetersPerVerticalUnitForSR(g.spatialReference);var d=H.getMetersPerUnitForSR(g.spatialReference);c/=d}d=0;if("polyline"===
g.type)for(var h of g.paths)for(var a=1;a<h.length;a++)d+=u.segmentLength3d(h[a],h[a-1],c);else if("polygon"===g.type)for(a of g.rings){for(h=1;h<a.length;h++)d+=u.segmentLength3d(a[h],a[h-1],c);if(a[0][0]!==a[a.length-1][0]||a[0][1]!==a[a.length-1][1]||void 0!==a[0][2]&&a[0][2]!==a[a.length-1][2])d+=u.segmentLength3d(a[0],a[a.length-1],c)}else"extent"===g.type&&(d+=2*u.segmentLength3d([g.xmin,g.ymin,0],[g.xmax,g.ymin,0],c),d+=2*u.segmentLength3d([g.xmin,g.ymin,0],[g.xmin,g.ymax,0],c),d=2*d+4*Math.abs(e.defaultUndefined(g.zmax,
0)*c-e.defaultUndefined(g.zmin,0)*c));g=new q({hasZ:!1,hasM:!1,spatialReference:g.spatialReference,paths:[[[0,0],[0,d]]]});return k.planarLength(g,b)}z.registerFunctions=function(g){"async"===g.mode&&(g.functions.disjoint=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);r(a,b,c);return null===a[0]||null===a[1]?!0:k.disjoint(a[0],a[1])})},g.functions.intersects=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);r(a,
b,c);return null===a[0]||null===a[1]?!1:k.intersects(a[0],a[1])})},g.functions.touches=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);r(a,b,c);return null===a[0]||null===a[1]?!1:k.touches(a[0],a[1])})},g.functions.crosses=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);r(a,b,c);return null===a[0]||null===a[1]?!1:k.crosses(a[0],a[1])})},g.functions.within=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>
{a=e.autoCastFeatureToGeometry(a);r(a,b,c);return null===a[0]||null===a[1]?!1:k.within(a[0],a[1])})},g.functions.contains=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);r(a,b,c);return null===a[0]||null===a[1]?!1:k.contains(a[0],a[1])})},g.functions.overlaps=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);r(a,b,c);return null===a[0]||null===a[1]?!1:k.overlaps(a[0],a[1])})},g.functions.equals=function(b,c){return g.standardFunctionAsync(b,
c,(d,h,a)=>{e.pcCheck(a,2,2,b,c);return a[0]===a[1]?!0:a[0]instanceof l&&a[1]instanceof l?k.equals(a[0],a[1]):e.isDate(a[0])&&e.isDate(a[1])||e.isTime(a[0])&&e.isTime(a[1])||e.isDateOnly(a[0])&&e.isDateOnly(a[1])?a[0].equals(a[1]):!1})},g.functions.relate=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,3,3,b,c);if(a[0]instanceof l&&a[1]instanceof l)return k.relate(a[0],a[1],e.toString(a[2]));if(a[0]instanceof l&&null===a[1]||a[1]instanceof l&&
null===a[0]||null===a[0]&&null===a[1])return!1;throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);})},g.functions.intersection=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);r(a,b,c);return null===a[0]||null===a[1]?null:k.intersect(a[0],a[1])})},g.functions.union=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);d=[];if(0===a.length)throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.WrongNumberOfParameters,
c);if(1===a.length)if(e.isArray(a[0]))for(a=e.autoCastFeatureToGeometry(a[0]),h=0;h<a.length;h++){if(null!==a[h]){if(!(a[h]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);d.push(a[h])}}else if(e.isImmutableArray(a[0]))for(a=e.autoCastFeatureToGeometry(a[0].toArray()),h=0;h<a.length;h++){if(null!==a[h]){if(!(a[h]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);d.push(a[h])}}else{if(a[0]instanceof l)return e.fixSpatialReference(n.cloneGeometry(a[0]),
b.spatialReference);if(null===a[0])return null;throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);}else for(h=0;h<a.length;h++)if(null!==a[h]){if(!(a[h]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);d.push(a[h])}return 0===d.length?null:k.union(d)})},g.functions.difference=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);r(a,b,c);return null===a[0]?null:null===a[1]?n.cloneGeometry(a[0]):
k.difference(a[0],a[1])})},g.functions.symmetricdifference=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);r(a,b,c);return null===a[0]&&null===a[1]?null:null===a[0]?n.cloneGeometry(a[1]):null===a[1]?n.cloneGeometry(a[0]):k.symmetricDifference(a[0],a[1])})},g.functions.clip=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(!(a[1]instanceof x)&&null!==a[1])throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return null===a[1]?null:k.clip(a[0],a[1])})},g.functions.cut=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(!(a[1]instanceof q)&&null!==a[1])throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(null===a[0])return[];if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,c);return null===a[1]?[n.cloneGeometry(a[0])]:k.cut(a[0],a[1])})},g.functions.area=function(b,c){return g.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isFeatureSet(a[0])){a=await a[0].sumArea(n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)),!1,b.abortSignal);if(b.abortSignal.aborted)throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.Cancelled,c);return a}if(e.isArray(a[0])||
e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolygon(a[0],b.spatialReference),null===d?0:k.planarArea(d,n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return k.planarArea(a[0],n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)))})},g.functions.areageodetic=function(b,c){return g.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=e.autoCastFeatureToGeometry(a);
if(null===a[0])return 0;if(e.isFeatureSet(a[0])){a=await a[0].sumArea(n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)),!0,b.abortSignal);if(b.abortSignal.aborted)throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.Cancelled,c);return a}if(e.isArray(a[0])||e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolygon(a[0],b.spatialReference),null===d?0:k.geodesicArea(d,n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,c);return k.geodesicArea(a[0],n.convertSquareUnitsToCode(e.defaultUndefined(a[1],-1)))})},g.functions.length=function(b,c){return g.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isFeatureSet(a[0])){a=await a[0].sumLength(n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)),!1,b.abortSignal);if(b.abortSignal.aborted)throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.Cancelled,
c);return a}if(e.isArray(a[0])||e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference),null===d?0:k.planarLength(d,n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return k.planarLength(a[0],n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)))})},g.functions.length3d=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=e.autoCastFeatureToGeometry(a);
if(null===a[0])return 0;if(e.isArray(a[0])||e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference),null===d?0:!0===d.hasZ?G(d,n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1))):k.planarLength(d,n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return!0===a[0].hasZ?G(a[0],n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1))):k.planarLength(a[0],n.convertLinearUnitsToCode(e.defaultUndefined(a[1],
-1)))})},g.functions.lengthgeodetic=function(b,c){return g.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,1,2,b,c);a=e.autoCastFeatureToGeometry(a);if(null===a[0])return 0;if(e.isFeatureSet(a[0])){a=await a[0].sumLength(n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)),!0,b.abortSignal);if(b.abortSignal.aborted)throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.Cancelled,c);return a}if(e.isArray(a[0])||e.isImmutableArray(a[0]))return d=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference),
null===d?0:k.geodesicLength(d,n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)));if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return k.geodesicLength(a[0],n.convertLinearUnitsToCode(e.defaultUndefined(a[1],-1)))})},g.functions.distance=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);d=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))d=e.autoCastArrayOfPointsToMultiPoint(a[0],
b.spatialReference);h=a[1];if(e.isArray(a[1])||e.isImmutableArray(a[1]))h=e.autoCastArrayOfPointsToMultiPoint(a[1],b.spatialReference);if(!(d instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(!(h instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return k.distance(d,h,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})},g.functions.distancegeodetic=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=
e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);d=a[0];h=a[1];if(!(d instanceof v))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(!(h instanceof v))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);const m=new q({paths:[],spatialReference:d.spatialReference});m.addPath([d,h]);return k.geodesicLength(m,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})},g.functions.densify=function(b,c){return g.standardFunctionAsync(b,c,(d,h,
a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);if(isNaN(d))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(0>=d)throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return a[0]instanceof w||a[0]instanceof q?k.densify(a[0],d,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]instanceof
x?k.densify(w.fromExtent(a[0]),d,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]})},g.functions.densifygeodetic=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);if(isNaN(d))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(0>=d)throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,c);return a[0]instanceof w||a[0]instanceof q?k.geodesicDensify(a[0],d,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]instanceof x?k.geodesicDensify(w.fromExtent(a[0]),d,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1))):a[0]})},g.functions.generalize=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,4,b,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);if(isNaN(d))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return k.generalize(a[0],d,e.toBoolean(e.defaultUndefined(a[2],!0)),n.convertLinearUnitsToCode(e.defaultUndefined(a[3],-1)))})},g.functions.buffer=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,
c);d=e.toNumber(a[1]);if(isNaN(d))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return 0===d?n.cloneGeometry(a[0]):k.buffer(a[0],d,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})},g.functions.buffergeodetic=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);
if(isNaN(d))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return 0===d?n.cloneGeometry(a[0]):k.geodesicBuffer(a[0],d,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)))})},g.functions.offset=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,6,b,c);if(null===a[0])return null;if(!(a[0]instanceof w||a[0]instanceof q))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);d=e.toNumber(a[1]);
if(isNaN(d))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);h=e.toNumber(e.defaultUndefined(a[4],10));if(isNaN(h))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);const m=e.toNumber(e.defaultUndefined(a[5],0));if(isNaN(m))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return k.offset(a[0],d,n.convertLinearUnitsToCode(e.defaultUndefined(a[2],-1)),e.toString(e.defaultUndefined(a[3],"round")).toLowerCase(),h,m)})},
g.functions.rotate=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,3,b,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);d=a[0]instanceof x?w.fromExtent(a[0]):a[0];h=e.toNumber(a[1]);if(isNaN(h))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);a=e.defaultUndefined(a[2],null);if(null===a)return k.rotate(d,h);if(a instanceof v)return k.rotate(d,
h,a);throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);})},g.functions.centroid=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);if(null===a[0])return null;d=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))d=e.autoCastArrayOfPointsToMultiPoint(a[0],b.spatialReference);if(null===d)return null;if(!(d instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return d instanceof
v?e.fixSpatialReference(n.cloneGeometry(d),b.spatialReference):d instanceof w?d.centroid:d instanceof q?u.centroidPolyline(d):d instanceof C?u.centroidMultiPoint(d):d instanceof x?d.center:null})},g.functions.measuretocoordinate=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(null===a[0])return null;d=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))d=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference);if(null===d)return null;
if(!(d instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(!(d instanceof q))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(e.isNumber(!1===a[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return(a=y.measureToCoordinate(d,a[1]))?t.convertObjectToArcadeDictionary(a,e.defaultTimeZone(b),!1,!0):null})},g.functions.pointtocoordinate=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=
e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(null===a[0])return null;d=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))d=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference);if(null===d)return null;if(!(d instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(!(d instanceof q))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);h=a[1];if(null===h)return null;if(!(h instanceof v))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,
c);if(e.isNumber(!1===a[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return(a=y.pointToCoordinate(d,h))?t.convertObjectToArcadeDictionary(a,e.defaultTimeZone(b),!1,!0):null})},g.functions.distancetocoordinate=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(null===a[0])return null;d=a[0];if(e.isArray(a[0])||e.isImmutableArray(a[0]))d=e.autoCastArrayOfPointsToPolyline(a[0],b.spatialReference);if(null===
d)return null;if(!(d instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(!(d instanceof q))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(e.isNumber(!1===a[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return(a=y.distanceToCoordinate(d,a[1]))?t.convertObjectToArcadeDictionary(a,e.defaultTimeZone(b),!1,!0):null})},g.functions.multiparttosinglepart=function(b,c){return g.standardFunctionAsync(b,
c,async(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(a[0]instanceof v||a[0]instanceof x)return[e.fixSpatialReference(n.cloneGeometry(a[0]),b.spatialReference)];d=await k.simplify(a[0]);if(d instanceof w){a=[];h=[];for(var m=0;m<d.rings.length;m++)if(d.isClockwise(d.rings[m])){const p=D.fromJSON({rings:[d.rings[m]],hasZ:!0===d.hasZ,hasM:!0===d.hasM,spatialReference:d.spatialReference.toJSON()});
a.push(p)}else h.push({ring:d.rings[m],pt:d.getPoint(m,0)});for(d=0;d<h.length;d++)for(m=0;m<a.length;m++)if(a[m].contains(h[d].pt)){a[m].addRing(h[d].ring);break}return a}if(d instanceof q){a=[];for(h=0;h<d.paths.length;h++)m=D.fromJSON({paths:[d.paths[h]],hasZ:!0===d.hasZ,hasM:!0===d.hasM,spatialReference:d.spatialReference.toJSON()}),a.push(m);return a}if(a[0]instanceof C){d=[];a=e.fixSpatialReference(n.cloneGeometry(a[0]),b.spatialReference);for(h=0;h<a.points.length;h++)d.push(a.getPoint(h));
return d}return null})},g.functions.issimple=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);if(null===a[0])return!0;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return k.isSimple(a[0])})},g.functions.simplify=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,
f.ExecutionErrorCodes.InvalidParameter,c);return k.simplify(a[0])})},g.functions.convexhull=function(b,c){return g.standardFunctionAsync(b,c,(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,1,1,b,c);if(null===a[0])return null;if(!(a[0]instanceof l))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);return k.convexHull(a[0])})},g.functions.getuser=function(b,c){return g.standardFunctionAsync(b,c,async(d,h,a)=>{e.pcCheck(a,0,2,b,c);d=e.defaultUndefined(a[1],"");h=!0===
d;d=!0===d||!1===d?"":e.toString(d);if(0===a.length||a[0]instanceof A){var m=b.services?.portal?b.services.portal:E.getDefault();0<a.length&&(m=B.getPortal(a[0],m));if(m=await F.lookupUser(m,d,h)){m=JSON.parse(JSON.stringify(m));for(var p of["lastLogin","created","modified"])void 0!==m[p]&&null!==m[p]&&(m[p]=new Date(m[p]));return t.convertObjectToArcadeDictionary(m,e.defaultTimeZone(b))}return null}p=null;e.isFeatureSet(a[0])&&(p=a[0]);if(p){h=!1;if(d)return null;await p.load();a=await p.getOwningSystemUrl();
if(!a)return!d&&(m=await p.getIdentityUser())?t.convertObjectToArcadeDictionary({username:m},e.defaultTimeZone(b)):null;p=b.services?.portal?b.services.portal:E.getDefault();p=B.getPortal(new A(a),p);if(p=await F.lookupUser(p,d,h)){p=JSON.parse(JSON.stringify(p));for(m of["lastLogin","created","modified"])void 0!==p[m]&&null!==p[m]&&(p[m]=new Date(p[m]));return t.convertObjectToArcadeDictionary(p,e.defaultTimeZone(b))}return null}throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,
c);})},g.functions.nearestcoordinate=function(b,c){return g.standardFunctionAsync(b,c,async(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(!(a[0]instanceof l||null===a[0]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(!(a[1]instanceof v||null===a[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(null===a[0]||null===a[1])return null;d=await k.nearestCoordinate(a[0],a[1]);return null===d?null:t.convertObjectToArcadeDictionary({coordinate:d.coordinate,
distance:d.distance,sideOfLine:0===d.distance?"straddle":d.isRightSide?"right":"left"},e.defaultTimeZone(b),!1,!0)})},g.functions.nearestvertex=function(b,c){return g.standardFunctionAsync(b,c,async(d,h,a)=>{a=e.autoCastFeatureToGeometry(a);e.pcCheck(a,2,2,b,c);if(!(a[0]instanceof l||null===a[0]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(!(a[1]instanceof v||null===a[1]))throw new f.ArcadeExecutionError(b,f.ExecutionErrorCodes.InvalidParameter,c);if(null===a[0]||
null===a[1])return null;d=await k.nearestVertex(a[0],a[1]);return null===d?null:t.convertObjectToArcadeDictionary({coordinate:d.coordinate,distance:d.distance,sideOfLine:0===d.distance?"straddle":d.isRightSide?"right":"left"},e.defaultTimeZone(b),!1,!0)})})};Object.defineProperty(z,Symbol.toStringTag,{value:"Module"})});
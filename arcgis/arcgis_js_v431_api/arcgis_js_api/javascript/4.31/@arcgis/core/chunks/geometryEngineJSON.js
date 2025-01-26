/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{G as e}from"./geometryEngineBase.js";import{j as n}from"./json.js";const t=Object.freeze(Object.defineProperty({__proto__:null,buffer:function(t,r,i,o,u=!1){return e.buffer(n,t,r,i,o,u)},changeDefaultSpatialReferenceTolerance:function(n,t){e.changeDefaultSpatialReferenceTolerance(n,t)},clearDefaultSpatialReferenceTolerance:function(n){e.clearDefaultSpatialReferenceTolerance(n)},clip:function(t,r,i){return e.clip(n,t,r,i)},contains:function(t,r,i){return e.contains(n,t,r,i)},convexHull:function(t,r,i=!1){return e.convexHull(n,t,r,i)},crosses:function(t,r,i){return e.crosses(n,t,r,i)},cut:function(t,r,i){return e.cut(n,t,r,i)},densify:function(t,r,i,o){return e.densify(n,t,r,i,o)},difference:function(t,r,i){return e.difference(n,t,r,i)},disjoint:function(t,r,i){return e.disjoint(n,t,r,i)},distance:function(t,r,i,o){return e.distance(n,t,r,i,o)},equals:function(t,r,i){return e.equals(n,t,r,i)},extendedSpatialReferenceInfo:function(n){return e.extendedSpatialReferenceInfo(n)},flipHorizontal:function(n,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=e.flipHorizontal(t,r);return i.spatialReference=n,i},flipVertical:function(n,t,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const i=e.flipVertical(t,r);return i.spatialReference=n,i},generalize:function(t,r,i,o,u){return e.generalize(n,t,r,i,o,u)},geodesicArea:function(t,r,i,o){return e.geodesicArea(n,t,r,i,o)},geodesicBuffer:function(t,r,i,o,u,c,f){return e.geodesicBuffer(n,t,r,i,o,u,c,f)},geodesicDensify:function(t,r,i,o,u=0){return e.geodesicDensify(n,t,r,i,o,u)},geodesicLength:function(t,r,i,o){return e.geodesicLength(n,t,r,i,o)},intersect:function(t,r,i){return e.intersect(n,t,r,i)},intersectLinesToPoints:function(t,r,i){return null==r||null==i?[]:e.intersectLinesToPoints(n,t,r,i)},intersects:function(t,r,i){return e.intersects(n,t,r,i)},isSimple:function(t,r){return e.isSimple(n,t,r)},nearestCoordinate:function(t,r,i,o=!0){return e.nearestCoordinate(n,t,r,i,o)},nearestVertex:function(t,r,i){return e.nearestVertex(n,t,r,i)},nearestVertices:function(t,r,i,o,u){return e.nearestVertices(n,t,r,i,o,u)},offset:function(t,r,i,o,u,c,f){return e.offset(n,t,r,i,o,u,c,f)},overlaps:function(t,r,i){return e.overlaps(n,t,r,i)},planarArea:function(t,r,i){return e.planarArea(n,t,r,i)},planarLength:function(t,r,i){return e.planarLength(n,t,r,i)},relate:function(t,r,i,o){return e.relate(n,t,r,i,o)},rotate:function(n,t,r,i){if(null==t||null==i)throw new Error("Illegal Argument Exception");const o=e.rotate(t,r,i);return o.spatialReference=n,o},simplify:function(t,r){return e.simplify(n,t,r)},symmetricDifference:function(t,r,i){return e.symmetricDifference(n,t,r,i)},touches:function(t,r,i){return e.touches(n,t,r,i)},union:function(t,r,i=null){return e.union(n,t,r,i)},within:function(t,r,i){return e.within(n,t,r,i)}},Symbol.toStringTag,{value:"Module"}));export{t as g};

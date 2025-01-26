// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Error ../../../geometry/support/contains ../../../geometry/support/intersects ../../../geometry/support/jsonUtils ../../../geometry/support/spatialReferenceUtils ../contains ../featureConversionUtils ../OptimizedGeometry ./geometryUtils ./projectionSupport".split(" "),function(u,k,m,n,v,f,p,q,r,t,l,w){function x(){return new Promise((b,a)=>u(["../../../geometry/geometryEngineJSON"],b,a))}const y={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",
esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null};var z={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,
esriSpatialRelRelation:!1},A={esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},B={esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};k.canQueryWithRBush=function(b){if(f.isExtent(b))return!0;if(f.isPolygon(b)){for(const a of b.rings)if(5!==a.length||a[0][0]!==a[1][0]||a[0][0]!==a[4][0]||a[2][0]!==a[3][0]||a[0][1]!==
a[3][1]||a[0][1]!==a[4][1]||a[1][1]!==a[2][1])return!1;return!0}return!1};k.checkSpatialQuerySupport=async function(b,a,c){const {spatialRel:g,geometry:e}=b;if(e){if(null==g||!0!==z[g])throw new m("unsupported-query","Unsupported query spatial relationship",{query:b});if(p.isValid(e.spatialReference)&&p.isValid(c)){if(null==e||!0!==A[f.getJsonType(e)])throw new m("unsupported-query","Unsupported query geometry type",{query:b});if(null==a||!0!==B[a])throw new m("unsupported-query","Unsupported layer geometry type",
{query:b});if(b.outSR)return w.checkProjectionSupport(b.geometry?.spatialReference,b.outSR)}}};k.getSpatialQueryOperator=function(b,a,c,g,e){if(f.isPolygon(a)&&"esriGeometryPoint"===c&&("esriSpatialRelIntersects"===b||"esriSpatialRelContains"===b)){const d=r.convertFromPolygon(new t,a,!1,!1);return Promise.resolve(h=>q.polygonContainsPoint(d,!1,!1,h))}if(f.isPolygon(a)&&"esriGeometryMultipoint"===c){const d=r.convertFromPolygon(new t,a,!1,!1);if("esriSpatialRelContains"===b)return Promise.resolve(h=>
q.polygonContainsMultipoint(d,!1,!1,h,g,e))}if(f.isExtent(a)&&"esriGeometryPoint"===c&&("esriSpatialRelIntersects"===b||"esriSpatialRelContains"===b))return Promise.resolve(d=>n.extentContainsPoint(a,l.getGeometry(c,g,e,d)));if(f.isExtent(a)&&"esriGeometryMultipoint"===c&&"esriSpatialRelContains"===b)return Promise.resolve(d=>n.extentContainsMultipoint(a,l.getGeometry(c,g,e,d)));if(f.isExtent(a)&&"esriSpatialRelIntersects"===b){const d=v.getExtentIntersector(c);return Promise.resolve(h=>d(a,l.getGeometry(c,
g,e,h)))}return x().then(d=>{const h=d[y[b]].bind(null,a.spatialReference,a);return C=>h(l.getGeometry(c,g,e,C))})};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
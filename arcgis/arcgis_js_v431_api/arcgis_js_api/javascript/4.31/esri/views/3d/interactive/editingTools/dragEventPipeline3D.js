// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/projection ../../../../geometry/support/plane ../../../../geometry/support/ray ../../../../geometry/support/vector ../../../../geometry/support/vectorStacks ../../../../support/elevationInfoUtils ../../support/geometryUtils/ray ../../webgl-engine/lib/Intersector ../../webgl-engine/lib/IntersectorInterfaces ../../webgl-engine/lib/verticalOffsetUtils ../../../interactive/dragEventPipeline ../../../../geometry/Point".split(" "),
function(h,R,n,J,l,p,x,r,y,K,z,L,t,M,A,B,N,u){function C(a,b){return D(a,()=>b)}function D(a,b){const c=p.create(),d=p.create();let g=!1;return f=>{const k=b(f);if("start"===f.action){var e=n.screenPointObjectToArray(f.screenStart,n.castScreenPointArray(z.sv2d.get()));e=t.fromScreen(a.state.camera,e,v);null!=e&&(g=r.intersectRay(k,e,c))}if(!g)return null;e=n.screenPointObjectToArray(f.screenEnd,n.castScreenPointArray(z.sv2d.get()));e=t.fromScreen(a.state.camera,e,v);return null==e?null:r.intersectRay(k,
e,d)?{...f,renderStart:c,renderEnd:d,plane:k,ray:e}:null}}function O(a,b,c=0,d=null,g=null){let f=null;return k=>{if("start"===k.action&&(f=a.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(k.screenStart.x,k.screenStart.y),b,c,g),null!=f&&null!=d&&!x.projectPoint(f,f,d))||null==f)return null;const e=a.sceneIntersectionHelper.intersectElevationFromScreen(n.createScreenPointArray(k.screenEnd.x,k.screenEnd.y),b,c,g);return null!=e?null==d||x.projectPoint(e,e,d)?{...k,mapStart:f,
mapEnd:e}:null:null}}function E(a,b,c,d=null,g=null){b=L.getZForElevationMode(b,a,c);return O(a,c,b,d,g)}function P(a,b){const c=F,d=G,g=r.create();a.renderCoordsHelper.worldUpAtPosition(b,c);a=l.cross(r.getNormal(g),c,l.subtract(d,b,a.state.camera.eye));l.cross(a,a,c);return r.fromPositionAndNormal(b,a,g)}function H(a,b){const c=p.create(),d=l.length(b);a.renderCoordsHelper.worldUpAtPosition(b,c);const g=p.create(),f=p.create(),k=e=>{l.subtract(e,e,b);K.projectPoint(c,e,e);"global"===a.viewingMode&&
l.length(e)*Math.sign(l.dot(c,e))<-d+.001&&l.subtract(e,l.scale(e,c,.001),b);l.add(e,e,b);return e};return e=>{e.renderStart=k(l.copy(g,e.renderStart));e.renderEnd=k(l.copy(f,e.renderEnd));return e}}function I(a,b){const c=a.renderCoordsHelper;return d=>{const g=c.fromRenderCoords(d.renderStart,new u({spatialReference:b})),f=c.fromRenderCoords(d.renderEnd,new u({spatialReference:b}));return null!=g&&null!=f?{...d,mapStart:g,mapEnd:f}:null}}h.SurfaceType=void 0;(function(a){a[a.GROUND=0]="GROUND";
a[a.OTHER=1]="OTHER"})(h.SurfaceType||(h.SurfaceType={}));const Q=J.create(),F=p.create(),G=p.create(),v=y.create();h.convertToMapCoordinates=I;h.hideManipulatorWhileDragging=function(a){let b=null;return c=>{switch(c.action){case "start":b=a.disableDisplay();break;case "end":case "cancel":null!=b&&(b.remove(),b=null)}return c}};h.projectToWorldUp=H;h.screenToMap3D=function(a,b=null){const c=M.newIntersector(a.state.viewingMode);c.options.selectionMode=!0;c.options.store=A.StoreResults.MIN;c.options.hud=
!1;const d=n.createScreenPointArray(),g={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},f=p.create(),k=b??a.spatialReference,e=m=>{a.map.ground&&1>a.map.ground.opacity?g.exclude.add(B.terrainId):g.exclude.delete(B.terrainId);a.sceneIntersectionHelper.intersectIntersectorScreen(n.screenPointObjectToArray(m,d),c,g);m=c.results.min;if(m.getIntersectionPoint(f))m=m.intersector===A.IntersectorType.TERRAIN?h.SurfaceType.GROUND:h.SurfaceType.OTHER;else if(c.results.ground.getIntersectionPoint(f))m=
h.SurfaceType.GROUND;else return null;return{location:a.renderCoordsHelper.fromRenderCoords(f,new u({spatialReference:k})),surfaceType:m}};let w;return m=>{if("start"===m.action){var q=e(m.screenStart);w=null!=q?q.location:null}if(null==w)return null;q=e(m.screenEnd);return null!=q?.location?{...m,mapStart:w,mapEnd:q.location,surfaceType:q.surfaceType}:null}};h.screenToMapXYAtLocation=E;h.screenToMapXYForManipulatedObject=function(a,b,c,d){a=c.toMap(a.screenStart);return null!=a?E(b,a,c.elevationInfo,
d):null};h.screenToRenderPlane=C;h.screenToRenderPlaneFromEvent=function(a){return D(a,b=>b.plane)};h.screenToRenderRay=function(a,b){const c=d=>{d=n.screenPointObjectToArray(d,n.castScreenPointArray(Q));d=t.fromScreen(a.state.camera,d,v);return null==d?null:y.closestPoints(b,d,F,G)?.[0]};return d=>{const g=c(d.screenStart);if(null==g)return null;const f=c(d.screenEnd);return null==f?null:{...d,renderStart:g,renderEnd:f}}};h.screenToZConstrained=function(a,b,c){let d=null;const g=new N.EventPipeline;
g.next(C(a,P(a,b))).next(H(a,b)).next(I(a,c)).next(f=>{f.mapEnd.x=f.mapStart.x;f.mapEnd.y=f.mapStart.y;d=f});return f=>{d=null;g.execute(f);return d}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
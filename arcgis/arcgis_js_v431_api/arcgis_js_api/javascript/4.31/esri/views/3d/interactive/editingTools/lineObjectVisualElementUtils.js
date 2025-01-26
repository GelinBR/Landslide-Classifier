// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/handleUtils ../../../../core/mathUtils ../../../../core/reactiveUtils ../../../../core/signal ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../Manipulator3D ./GrabbingState ./manipulatedObjectUtils ./ManipulatorState ./ManipulatorType ./settings ../visualElements/ExtendedLineVisualElement ../visualElements/LaserlineVisualElement ../visualElements/OutlineVisualElement ../../webgl-engine/lib/Material".split(" "),function(A,l,H,f,B,w,I,
J,C,x,K,L,D,M,N,O,P){function Q(b){const {view:d,object:a}=b;b=x.manipulatedObjectGeometry(a);const c=new O.OutlineVisualElement({view:d,geometry:y(b)?b:null,elevationInfo:a.elevationInfo,attached:!1,isDecoration:!0}),h=new D.Settings({getTheme:()=>d.effectiveTheme}),g=l.handlesGroup([f.watch(()=>h.visualElements.lineObjects.outline,k=>k.apply(c),f.initial),f.watch(()=>h.visualElements.lineObjects.shadowStyle,k=>k.apply(c),f.initial),f.watch(()=>a.visible,()=>{c.attached=a.visible}),f.watch(()=>a.isDraped,
k=>{c.isDraped=k},f.initial),a.on("committed",()=>{const k=x.manipulatedObjectGeometry(a);c.geometry=y(k)?k:null}),l.destroyHandle(c)]);c.attached=a.visible;return{visualElement:c,remove:()=>g.remove()}}function R(b,d){const {object:a,view:c}=b,h=[];var g=a.elevationInfo;const k="on-the-ground"===g.mode||!g.offset&&"absolute-height"!==g.mode,m=new K.ManipulatorState,r=new D.Settings({getTheme:()=>c.effectiveTheme}),u=r.visualElements,n=new M.ExtendedLineVisualElement({view:c,extensionType:u.zVerticalLine.extensionType,
innerWidth:1,attached:!1,writeDepthEnabled:!1,renderOccluded:P.RenderOccludedFlag.OccludeAndTransparent,isDecoration:!0});g=H.deg2rad(u.heightPlaneAngleCutoff);const v=new N.LaserlineVisualElement({view:c,attached:!1,angleCutoff:g,isDecoration:!0}),E=B.signal(1);h.push(f.watch(()=>({lineShadowStyle:r.visualElements.lineObjects.shadowStyle,pointShadowStyle:r.visualElements.pointObjects.shadowStyle,alpha:E.value}),({lineShadowStyle:e,pointShadowStyle:z,alpha:F})=>{e.apply(d,F);z.apply(n,F)},f.initial));
const G=B.signal(1);h.push(f.watch(()=>({heightPlane:r.visualElements.heightPlane,alpha:G.value}),({heightPlane:e,alpha:z})=>e.apply(v,z),f.initial));const q=()=>{m.update(b);var e=x.manipulatedObjectGeometry(a);a.visible&&(!k||!a.isDraped&&y(e)&&e.hasZ)?(d.laserlineEnabled=!0,E.value=m.grabbingState&C.GrabbingState.XY?u.laserlineAlphaMultiplier:1,G.value=m.grabbingState&C.GrabbingState.Z?u.laserlineAlphaMultiplier:1,e=1===m.numSelected?m.firstSelected:1<m.numSelected&&null!=m.firstGrabbedXY?m.firstGrabbedXY:
null,null!=e?(n.setStartEndFromWorldDownAtLocation(e.renderLocation),n.attached=!0):n.attached=!1,S(b,d,v,m)):(d.laserlineEnabled=!1,n.attached=!1,v.attached=!1)};h.push(f.watch(()=>r.visualElements.zVerticalLine,e=>e.apply(n),f.initial));h.push(a.on("committed",q),f.watch(()=>a.visible,q),d.events.on("attachment-origin-changed",q),l.destroyHandle(n),l.destroyHandle(v));const t=[];g=()=>{l.removeHandles(t);t.length=0;b.forEachManipulator(e=>t.push(e.events.on("grab-changed",q)));b.forEachManipulator(e=>
t.push(e.events.on("select-changed",q)));q()};g();h.push(b.onManipulatorsChanged(g),l.refHandle(()=>l.handlesGroup(t)));return l.handlesGroup(h)}function S(b,d,a,c){if(0<c.numSelected){w.set(p,0,0,0);let h=0;b.forEachManipulator((g,k)=>{k===L.ManipulatorType.TRANSLATE_XY&&g.selected&&g instanceof J.Manipulator3D&&(w.add(p,p,g.renderLocation),h++)});0<h?(a.heightManifoldTarget=w.scale(p,p,1/h),a.attached=!0):a.attached=!1}else d=d.attachmentOrigin,null!=d&&b.view.renderCoordsHelper.toRenderCoords(d,
p)?(a.heightManifoldTarget=p,a.attached=!0):a.attached=!1}function y(b){return null!=b&&("polygon"===b.type||"polyline"===b.type)}const p=I.create();A.createVisualElements=function(b){const {object:d}=b,a=Q(b);b=R(b,a.visualElement);const c=[a,b];d.maskOccludee&&c.push(d.maskOccludee());return{visualElement:a.visualElement,remove:()=>l.removeHandles(c)}};Object.defineProperty(A,Symbol.toStringTag,{value:"Module"})});
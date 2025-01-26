// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../Graphic ../../core/handleUtils ../../core/promiseUtils ../../core/reactiveUtils ./workflowUtils".split(" "),function(q,h,r,e,l,t,m){function n(f){return"scene"===f?.layer?.type}h.handleModelUpload=async function({view:f,data:g,signal:u,next:v,cancel:k}){const {creationInfo:a}=g;if(!a||!n(a))return e.makeHandle();const {layer:p}=a,w=null!=a.geometryToPlace;a.geometryToPlace=null;if(w)return k(),e.makeHandle();({Upload:k}=await new Promise((b,x)=>q(["./Upload"],b,x)));
l.throwIfAborted(u);const d=new k;g.upload=d;let c=null;g=e.handlesGroup([t.watch(()=>d.state,b=>{switch(b){case "default":c?.remove();break;case "pending":c?.remove();c=m.showProgressCursor(f);break;case "success":a.maxFeatures=1;({result:b}=d);"georeferenced"===b?.type||"georeferenced-reprojected"===b?.type?(a.geometryToPlace=b.mesh,a.initialFeature=new r({attributes:m.getCreationAttributes(a),geometry:b.mesh,sourceLayer:p}),f.goTo(a.initialFeature,{animate:!1}).catch(l.ignoreAbortErrors)):a.geometryToPlace=
b?.mesh;c?.remove();v();break;case "error":c?.remove()}}),e.makeHandle(()=>{d.cancel();c?.remove()})]);d.uploadTo(p);return g};h.isModelUpload=n;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
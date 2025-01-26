// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../analysis/Viewshed/ViewshedConfiguration ../../analysis/Viewshed/viewshedToolUtils ./Object3DVisualElement ../../webgl-engine/lib/Attribute ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/VertexAttribute ../../webgl-engine/materials/ColorMaterial".split(" "),function(B,t,n,
w,l,u,x,y,G,H,I,J,K){function L(g,a){const {horizontalFieldOfView:k,verticalFieldOfView:r}=a;var h=l.set(M,0,0,1),c=l.set(C,0,1,0),b=l.set(D,1,0,0);y.rotateBy(h,h,t.deg2rad(r/2),c);y.rotateBy(h,h,t.deg2rad(k/2),b);var f=t.deg2rad(k),m=l.copy(N,b);a=Math.ceil(Math.abs(f)/x.arcAnglePerSegment)+1;f=E(-f/(a-1));f=n.fromRotation(v,f,m);var d=t.deg2rad(-r);m=Math.ceil(Math.abs(d)/x.arcAnglePerSegment)+1;d=E(d/(m-1));c=l.copy(C,c);b=n.fromRotation(F,t.deg2rad(k)/2,b);l.transformMat4(c,c,b);b=F;const p=[];
var e=l.copy(D,h);for(let q=0;q<a;q++){n.fromRotation(b,d,c);for(let z=0;z<m;z++){const A=3*(z*a+q);p[A]=e[0];p[A+1]=e[1];p[A+2]=e[2];l.transformMat4(e,e,b)}l.transformMat4(c,c,f);l.transformMat4(h,h,f);l.copy(e,h)}h=a*m;p[3*h]=0;p[3*h+1]=0;p[3*h+2]=0;f=[];for(d=0;d<a-1;d++)for(c=0;c<m-1;c++)b=6*(c*(a-1)+d),f[b]=c*a+d,f[b+1]=(c+1)*a+d,f[b+2]=c*a+d+1,f[b+3]=c*a+d+1,f[b+4]=(c+1)*a+d,f[b+5]=(c+1)*a+d+1;f=[f];if(360!==k&&0!==r){d=[];c=[];for(b=0;b<m-1;b++)e=3*b,d[e]=h,d[e+1]=(b+1)*a,d[e+2]=b*a,c[e]=h,
c[e+1]=b*a+a-1,c[e+2]=(b+1)*a+a-1;f.push(d,c)}if(180!==r&&0!==k){d=[];c=[];for(b=0;b<a-1;b++)e=3*b,d[e]=h,d[e+1]=b,d[e+2]=b+1,c[e]=h,c[e+1]=b+(m-1)*a+1,c[e+2]=b+(m-1)*a;f.push(d,c)}return f.map(q=>{q=[[J.VertexAttribute.POSITION,new H.Attribute(p,q,3,!0)]];return new I.Geometry(g,q)})}function E(g){return isNaN(g)?1:g}class O extends G.Object3DVisualElement{constructor(g){super(g);this._viewshedComputedData=this._material=null;this._material=new K.ColorMaterial({...x.viewshedVisualizationConfiguration.shapeMaterialParameters,
isDecoration:this.isDecoration,writeDepth:!1});this.applyProperties(g)}get viewshedComputedData(){return this._viewshedComputedData}set viewshedComputedData(g){this._viewshedComputedData=g;this.updateTransform()}updateTransform(){const g=this._viewshedComputedData;if(null!=g){var a=w.create(),k=g.farDistanceRenderSpace;n.fromScaling(a,u.fromValues(k,k,k));y.getViewshedRotationMatrix(g,v);n.mul(a,v,a);n.fromTranslation(v,this._viewshedComputedData.observerRenderSpace);n.mul(a,v,a);this.transform=a}}createExternalResources(){}destroyExternalResources(){}forEachExternalMaterial(g){null!=
this._material&&g(this._material)}createGeometries(g){const {_material:a,viewshedComputedData:k}=this;null!=k&&null!=a&&k.isValid()&&L(a,k).forEach(r=>g.addGeometry(r))}}const M=u.create(),C=u.create(),D=u.create(),N=u.create(),v=w.create(),F=w.create();B.ViewshedShapeVisualElement=O;Object.defineProperty(B,Symbol.toStringTag,{value:"Module"})});
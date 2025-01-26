// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/libs/gl-matrix-2/math/mat4 ../../../../core/libs/gl-matrix-2/factories/mat4f64 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/projection/computeTranslationToOriginAndRotation ../../../../geometry/projection/projectBuffer ../../../../layers/graphics/dehydratedFeatureUtils ../../support/ElevationProvider ../../webgl-engine/lib/VertexAttribute".split(" "),function(k,C,D,E,F,y,G,u,z){function x(a,c,b,d,e){const g=(G.isDehydratedPoint(a)?a.z:u.isSamplePosition(a)?
a.array[a.offset+2]:a[2])||0;switch(b.mode){case "on-the-ground":b=u.getElevationAtPoint(c,a,"ground")??0;e.verticalDistanceToGround=0;e.sampledElevation=b;e.z=b;break;case "relative-to-ground":a=u.getElevationAtPoint(c,a,"ground")??0;b=b.geometryZWithOffset(g,d);e.verticalDistanceToGround=b;e.sampledElevation=a;e.z=b+a;break;case "relative-to-scene":a=u.getElevationAtPoint(c,a,"scene")??0;b=b.geometryZWithOffset(g,d);e.verticalDistanceToGround=b;e.sampledElevation=a;e.z=b+a;break;case "absolute-height":b=
b.geometryZWithOffset(g,d);d=u.getElevationAtPoint(c,a,"ground")??0;e.verticalDistanceToGround=b-d;e.sampledElevation=d;e.z=b;break;default:e.z=0}}function A(a,c){for(let b=0;b<a.geometries.length;++b){const d=a.geometries[b].getMutableAttribute(z.VertexAttribute.CENTEROFFSETANDDISTANCE);d&&d.data[3]!==c&&(d.data[3]=c,a.geometryVertexAttributeUpdated(a.geometries[b],z.VertexAttribute.CENTEROFFSETANDDISTANCE))}}class B{constructor(){this.z=this.sampledElevation=this.verticalDistanceToGround=0}}k.SymbolUpdateType=
void 0;(function(a){a[a.NONE=0]="NONE";a[a.UPDATE=1]="UPDATE";a[a.RECREATE=2]="RECREATE"})(k.SymbolUpdateType||(k.SymbolUpdateType={}));const H={"absolute-height":{applyElevationAlignmentBuffer:function(a,c,b,d,e,g,f,h){g=h.calculateOffsetRenderUnits(f);h=h.featureExpressionInfoContext;c*=3;d*=3;for(f=0;f<e;++f){const l=a[c+1],n=a[c+2];b[d]=a[c];b[d+1]=l;b[d+2]=null==h?n+g:g;c+=3;d+=3}return 0},requiresAlignment:function(a){const c=a.featureExpressionInfoContext;return 0!==a.meterUnitOffset||null!=
c}},"on-the-ground":{applyElevationAlignmentBuffer:function(a,c,b,d,e,g){let f=0;const h=g.spatialReference;c*=3;d*=3;for(let l=0;l<e;++l){const n=a[c],m=a[c+1],p=g.getElevation(n,m,a[c+2],h,"ground")??0;f+=p;b[d]=n;b[d+1]=m;b[d+2]=p;c+=3;d+=3}return f/e},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function(a,c,b,d,e,g,f,h){let l=0;f=h.calculateOffsetRenderUnits(f);h=h.featureExpressionInfoContext;const n=g.spatialReference;c*=3;d*=3;for(let m=0;m<e;++m){const p=
a[c],q=a[c+1],v=a[c+2],r=g.getElevation(p,q,v,n,"ground")??0;l+=r;b[d]=p;b[d+1]=q;b[d+2]=null==h?v+r+f:r+f;c+=3;d+=3}return l/e},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function(a,c,b,d,e,g,f,h){let l=0;f=h.calculateOffsetRenderUnits(f);h=h.featureExpressionInfoContext;const n=g.spatialReference;c*=3;d*=3;for(let m=0;m<e;++m){const p=a[c],q=a[c+1],v=a[c+2],r=g.getElevation(p,q,v,n,"scene")??0;l+=r;b[d]=p;b[d+1]=q;b[d+2]=null==h?v+r+f:r+f;c+=3;d+=3}return l/e},
requiresAlignment:()=>!0}},I=D.create(),t=new B,w=E.create();k.SampleElevationInfo=B;k.applyElevationAlignmentForHUD=function(a,c,b,d,e){x(c,b,e,d,t);A(a,t.verticalDistanceToGround);b=t.sampledElevation;e=C.copy(I,a.transformation);w[0]=c.x;w[1]=c.y;w[2]=t.z;F.computeTranslationToOriginAndRotation(c.spatialReference,w,e,d.spatialReference)?a.transformation=e:console.warn("Could not locate symbol object properly, it might be misplaced");return b};k.applyPerVertexElevationAlignment=function(a,c,b,d,
e,g,f,h,l,n,m){const p=H[m.mode];let q=0;if(y.projectBuffer(a,c,b,d,l.spatialReference,e,h)&&(p?.requiresAlignment(m)?(q=p.applyElevationAlignmentBuffer(d,e,g,f,h,l,n,m),a=g,e=f):a=d,y.projectBuffer(a,l.spatialReference,e,g,n.spatialReference,f,h)))return q};k.elevationModeChangeUpdateType=function(a,c,b){return"on-the-ground"===c&&"on-the-ground"===b?a.staysOnTheGround:c===b||"on-the-ground"!==c&&"on-the-ground"!==b?null==c||null==b?a.definedChanged:k.SymbolUpdateType.UPDATE:a.onTheGroundChanged};
k.evaluateElevationAlignmentAtPoint=function(a,c,b,d){x(a,c,b,d,t);return t.z};k.evaluateElevationInfoAtPoint=x;k.needsElevationUpdates2D=function(a){return"relative-to-ground"===a||"relative-to-scene"===a};k.needsElevationUpdates3D=function(a){return"absolute-height"!==a};k.updateVertexPointGroundDistance=A;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
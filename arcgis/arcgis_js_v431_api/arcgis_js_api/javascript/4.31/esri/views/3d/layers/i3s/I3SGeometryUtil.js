// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/projection/projectBuffer ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/DoubleArray".split(" "),function(h,m,p,q,k,r){function n(b,g,c,f,d){b=g.getComponentAabb(c,b,t);g=g.getObjectTransform(c);for(c=0;8>c;++c)e[0]=c&1?b[0]:b[3],e[1]=c&2?b[1]:b[4],e[2]=c&4?b[2]:b[5],m.transformMat3(e,e,g.rotationScale),m.add(e,e,g.position),f[d++]=e[0],f[d++]=e[1],f[d++]=e[2];
return f}const t=k.create(),e=p.create();h.boundingBoxCornerPoints=n;h.boundingBoxCornersPointsStride=24;h.createGetFeatureExtent=function(b,g,c){const f=r.newDoubleArray(24);return d=>{var a=d.meta.featureExtents;if(null==a){a=new Float64Array(6*d.meta.featureIds.length);d.meta.featureExtents=a;for(let l=0;l<a.length;l+=6)a[l]=Number.POSITIVE_INFINITY}a=new Float64Array(a.buffer,6*d.index*Float64Array.BYTES_PER_ELEMENT,6);a[0]===Number.POSITIVE_INFINITY&&(n(d.index,c,d.meta.objectHandle,f,0),q.projectBuffer(f,
g,0,f,b,0)?k.fromBuffer(f,a):k.set(a,k.zero));return a}};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
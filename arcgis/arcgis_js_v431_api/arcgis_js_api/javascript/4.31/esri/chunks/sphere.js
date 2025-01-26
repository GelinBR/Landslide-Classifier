// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../core/has ../core/Logger ../core/mathUtils ../core/libs/gl-matrix-2/math/mat4 ./vec32 ../core/libs/gl-matrix-2/factories/vec3f64 ./vec42 ../core/libs/gl-matrix-2/factories/vec4f64 ../core/libs/gl-matrix-2/math/common ../geometry/support/Axis ../geometry/support/ray ../geometry/support/sphereUtils ../geometry/support/vector ../geometry/support/vectorStacks".split(" "),function(e,w,x,ea,fa,h,n,p,q,ha,r,G,H,ia,l){function t(){return q.create()}function y(a,b){return p.copy(b,a)}function I(a,
b){return q.fromValues(a[0],a[1],a[2],b)}function J(a){return a}function K(a){a[0]=a[1]=a[2]=a[3]=0}function L(a,b){a[0]=a[1]=a[2]=0;a[3]=b;return a}function M(a){return a[3]}function N(a){return a}function O(a,b,c,d){return q.fromValues(a,b,c,d)}function P(a,b,c){a!==c&&(c[0]=a[0],c[1]=a[1],c[2]=a[2]);c[3]=a[3]+b;return c}function Q(a,b,c){a!==c&&y(a,c);return c}function R(a,b){return b}function m(a,b,c){if(null==b||!S(a,b,u))return!1;let {t0:d,t1:f}=u;if(0>d||f<d&&0<f)d=f;if(0>d)return!1;if(c){const {origin:g,
direction:k}=b;c[0]=g[0]+k[0]*d;c[1]=g[1]+k[1]*d;c[2]=g[2]+k[2]*d}return!0}function T(a,b,c){b=G.fromPoints(b,c);if(!S(a,b,u))return[];const {origin:d,direction:f}=b,{t0:g,t1:k}=u;b=ja=>{const z=n.create();h.scaleAndAdd(z,d,f,ja);return v(a,z,z)};return Math.abs(g-k)<ha.getEpsilon()?[b(g)]:[b(g),b(k)]}function S(a,b,c){const {origin:d,direction:f}=b,g=ka;g[0]=d[0]-a[0];g[1]=d[1]-a[1];g[2]=d[2]-a[2];b=f[0]*f[0]+f[1]*f[1]+f[2]*f[2];if(0===b)return!1;const k=2*(f[0]*g[0]+f[1]*g[1]+f[2]*g[2]);a=k*k-4*
b*(g[0]*g[0]+g[1]*g[1]+g[2]*g[2]-a[3]*a[3]);if(0>a)return!1;a=Math.sqrt(a);c.t0=(-k-a)/(2*b);c.t1=(-k+a)/(2*b);return!0}function U(a,b){return m(a,b,null)}function V(a,b,c){if(m(a,b,c))return c;a=A(a,b,l.sv3d.get());h.add(c,b.origin,h.scale(l.sv3d.get(),b.direction,h.distance(b.origin,a)/h.length(b.direction)));return c}function A(a,b,c){const d=l.sv3d.get(),f=l.sm4d.get();h.cross(d,b.origin,b.direction);const g=a[3];h.cross(c,d,b.origin);h.scale(c,c,1/h.length(c)*g);a=B(a,b.origin);b=ia.angle(b.origin,
c);fa.fromRotation(f,b+a,d);h.transformMat4(c,c,f);return c}function W(a,b,c,d){a=a[3];var f=a*a;b+=.5*Math.PI;const g=c*c+f-2*Math.cos(b)*c*a;c=Math.sqrt(g);f=g-f;return 0>=f?.5:Math.min(1,(Math.acos(Math.sqrt(f)/c)-Math.asin(a/(c/Math.sin(b)))+.5*d)/d)}function X(a,b,c){if(m(a,b,c))return c;G.closestPoint(b,a,c);return v(a,c,c)}function v(a,b,c){b=h.subtract(l.sv3d.get(),b,a);b=h.scale(l.sv3d.get(),b,a[3]/h.length(b));return h.add(c,b,a)}function Y(a,b){b=h.subtract(l.sv3d.get(),b,a);b=h.squaredLength(b);
return Math.sqrt(Math.abs(b-a[3]*a[3]))}function B(a,b){b=h.subtract(l.sv3d.get(),b,a);b=h.length(b);a=a[3];return ea.acosClamped(a/(a+Math.abs(a-b)))}function C(a,b,c,d){a=h.subtract(D,b,a);switch(c){case r.Axis.X:return c=H.cartesianToSpherical(a,D)[2],h.set(d,-Math.sin(c),Math.cos(c),0);case r.Axis.Y:return a=H.cartesianToSpherical(a,D),c=a[1],a=a[2],b=Math.sin(c),h.set(d,-b*Math.cos(a),-b*Math.sin(a),Math.cos(c));case r.Axis.Z:return h.normalize(d,a)}}function E(a,b){b=h.subtract(F,b,a);return h.length(b)-
a[3]}function Z(a,b,c,d){const f=E(a,b);a=C(a,b,r.Axis.Z,F);c=h.scale(F,a,c-f);return h.add(d,b,c)}function aa(a,b){b=h.squaredDistance(a,b);a=a[3];return b<=a*a}function ba(a,b,c=q.create()){const d=h.distance(a,b),f=a[3],g=b[3];if(d+g<f)return p.copy(c,a),c;if(d+f<g)return p.copy(c,b),c;h.lerp(c,a,b,(d+g-f)/(2*d));c[3]=(d+f+g)/2;return c}w=t();const ca=x=p.equals,u={t0:0,t1:0},ka=n.create(),D=n.create(),F=n.create(),da=t(),la=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:w,altitudeAt:E,
angleToSilhouette:B,axisAt:C,cameraFrustumCoverage:W,clear:K,closestPoint:X,closestPointOnSilhouette:A,containsPoint:aa,copy:y,create:t,distanceToSilhouette:Y,elevate:P,equals:ca,exactEquals:x,fromCenterAndRadius:I,fromRadius:L,fromValues:O,getCenter:N,getExtent:R,getRadius:M,intersectLine:T,intersectRay:m,intersectRayClosestSilhouette:V,intersectsRay:U,projectPoint:v,setAltitudeAt:Z,setExtent:Q,tmpSphere:da,union:ba,wrap:J},Symbol.toStringTag,{value:"Module"}));e.NullSphere=w;e.altitudeAt=E;e.angleToSilhouette=
B;e.axisAt=C;e.cameraFrustumCoverage=W;e.clear=K;e.closestPoint=X;e.closestPointOnSilhouette=A;e.containsPoint=aa;e.copy=y;e.create=t;e.distanceToSilhouette=Y;e.elevate=P;e.equals=ca;e.exactEquals=x;e.fromCenterAndRadius=I;e.fromRadius=L;e.fromValues=O;e.getCenter=N;e.getExtent=R;e.getRadius=M;e.intersectLine=T;e.intersectRay=m;e.intersectRayClosestSilhouette=V;e.intersectsRay=U;e.projectPoint=v;e.setAltitudeAt=Z;e.setExtent=Q;e.sphere=la;e.tmpSphere=da;e.union=ba;e.wrap=J});
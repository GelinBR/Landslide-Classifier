/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{a as t,c as n,n as e,f as s,m as o,s as r,g as a,d as h,i as l}from"./vec3.js";import{f as u,a as c,c as f}from"./vec3f32.js";import{c as i,a as p,f as w}from"./vec3f64.js";import{h as g}from"./aaBoundingBox.js";import{n as O,G as M,f as A}from"./StencilUtils.js";import{g as I,a as m}from"./Indices.js";import{c as y,o as N,i as P}from"./plane.js";import{w as T}from"./ray.js";import{A as S}from"./Attribute.js";import{C as R}from"./Material.js";import{a as d}from"./Util.js";import{V as L}from"./VertexAttribute.js";var b;!function(t){t.length=function(t,n){const e=t[n],s=t[n+1],o=t[n+2];return Math.sqrt(e*e+s*s+o*o)},t.normalize=function(t,n){const e=t[n],s=t[n+1],o=t[n+2],r=1/Math.sqrt(e*e+s*s+o*o);t[n]*=r,t[n+1]*=r,t[n+2]*=r},t.scale=function(t,n,e){t[n]*=e,t[n+1]*=e,t[n+2]*=e},t.add=function(t,n,e,s,o,r=n){(o=o||t)[r]=t[n]+e[s],o[r+1]=t[n+1]+e[s+1],o[r+2]=t[n+2]+e[s+2]},t.subtract=function(t,n,e,s,o,r=n){(o=o||t)[r]=t[n]-e[s],o[r+1]=t[n+1]-e[s+1],o[r+2]=t[n+2]-e[s+2]}}(b||(b={}));const j=b,E=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],U=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],v=[0,0,1,0,1,1,0,1],V=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],x=new Array(36);for(let t=0;t<6;t++)for(let n=0;n<6;n++)x[6*t+n]=t;const C=new Array(36);for(let t=0;t<6;t++)C[6*t]=0,C[6*t+1]=1,C[6*t+2]=2,C[6*t+3]=2,C[6*t+4]=3,C[6*t+5]=0;function F(t,n){Array.isArray(n)||(n=[n,n,n]);const e=new Array(24);for(let t=0;t<8;t++)e[3*t]=E[t][0]*n[0],e[3*t+1]=E[t][1]*n[1],e[3*t+2]=E[t][2]*n[2];return new M(t,[[L.POSITION,new S(e,V,3,!0)],[L.NORMAL,new S(U,x,3)],[L.UV0,new S(v,C,2)]])}const q=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],G=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],B=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],z=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function D(t,n){Array.isArray(n)||(n=[n,n,n]);const e=new Array(18);for(let t=0;t<6;t++)e[3*t]=q[t][0]*n[0],e[3*t+1]=q[t][1]*n[1],e[3*t+2]=q[t][2]*n[2];return new M(t,[[L.POSITION,new S(e,B,3,!0)],[L.NORMAL,new S(G,z,3)]])}const k=u(-.5,0,-.5),Z=u(.5,0,-.5),H=u(0,0,.5),J=u(0,.5,0),K=c(),Q=c(),W=c(),X=c(),Y=c();t(K,k,J),t(Q,k,Z),n(W,K,Q),e(W,W),t(K,Z,J),t(Q,Z,H),n(X,K,Q),e(X,X),t(K,H,J),t(Q,H,k),n(Y,K,Q),e(Y,Y);const $=[k,Z,H,J],_=[0,-1,0,W[0],W[1],W[2],X[0],X[1],X[2],Y[0],Y[1],Y[2]],tt=[0,1,2,3,1,0,3,2,1,3,0,2],nt=[0,0,0,1,1,1,2,2,2,3,3,3];function et(t,n){Array.isArray(n)||(n=[n,n,n]);const e=new Array(12);for(let t=0;t<4;t++)e[3*t]=$[t][0]*n[0],e[3*t+1]=$[t][1]*n[1],e[3*t+2]=$[t][2]*n[2];return new M(t,[[L.POSITION,new S(e,tt,3,!0)],[L.NORMAL,new S(_,nt,3)]])}function st(t,n,e,s,o={uv:!0}){const r=-Math.PI,a=2*Math.PI,h=-Math.PI/2,l=Math.PI,u=Math.max(3,Math.floor(e)),c=Math.max(2,Math.floor(s)),f=(u+1)*(c+1),i=O(3*f),p=O(3*f),w=O(2*f),g=[];let A=0;for(let t=0;t<=c;t++){const e=[],s=t/c,o=h+s*l,f=Math.cos(o);for(let t=0;t<=u;t++){const h=t/u,l=r+h*a,c=Math.cos(l)*f,g=Math.sin(o),O=-Math.sin(l)*f;i[3*A]=c*n,i[3*A+1]=g*n,i[3*A+2]=O*n,p[3*A]=c,p[3*A+1]=g,p[3*A+2]=O,w[2*A]=h,w[2*A+1]=s,e.push(A),++A}g.push(e)}const m=new Array;for(let t=0;t<c;t++)for(let n=0;n<u;n++){const e=g[t][n],s=g[t][n+1],o=g[t+1][n+1],r=g[t+1][n];0===t?(m.push(e),m.push(o),m.push(r)):t===c-1?(m.push(e),m.push(s),m.push(o)):(m.push(e),m.push(s),m.push(o),m.push(o),m.push(r),m.push(e))}const y=[[L.POSITION,new S(i,m,3,!0)],[L.NORMAL,new S(p,m,3,!0)]];return o.uv&&y.push([L.UV0,new S(w,m,2,!0)]),o.offset&&(y[0][0]=L.OFFSET,y.push([L.POSITION,new S(Float64Array.from(o.offset),I(m.length),3,!0)])),new M(t,y)}function ot(t,n,e,s){const o=rt(n,e,s);return new M(t,o)}function rt(t,n,e){const s=t;let o,r;if(e)o=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const t=s*(1+Math.sqrt(5))/2;o=[-s,t,0,s,t,0,-s,-t,0,s,-t,0,0,-s,t,0,s,t,0,-s,-t,0,s,-t,t,0,-s,t,0,s,-t,0,-s,-t,0,s],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let n=0;n<o.length;n+=3)j.scale(o,n,t/j.length(o,n));let a={};function h(n,e){n>e&&([n,e]=[e,n]);const s=n.toString()+"."+e.toString();if(a[s])return a[s];let r=o.length;return o.length+=3,j.add(o,3*n,o,3*e,o,r),j.scale(o,r,t/j.length(o,r)),r/=3,a[s]=r,r}for(let t=0;t<n;t++){const t=r.length,n=new Array(4*t);for(let e=0;e<t;e+=3){const t=r[e],s=r[e+1],o=r[e+2],a=h(t,s),l=h(s,o),u=h(o,t),c=4*e;n[c]=t,n[c+1]=a,n[c+2]=u,n[c+3]=s,n[c+4]=l,n[c+5]=a,n[c+6]=o,n[c+7]=u,n[c+8]=l,n[c+9]=a,n[c+10]=l,n[c+11]=u}r=n,a={}}const l=A(o);for(let t=0;t<l.length;t+=3)j.normalize(l,t);return[[L.POSITION,new S(A(o),r,3,!0)],[L.NORMAL,new S(l,r,3,!0)]]}function at(t,n,e,s,o,r,a,h,l,u=null){const c=e?p(e):i(),f=n?p(n):w(0,0,1),g=s?[255*s[0],255*s[1],255*s[2],s.length>3?255*s[3]:255]:[255,255,255,255],O=null!=r&&2===r.length?r:[1,1],A=null!=o?[o]:[0],m=I(1),y=[[L.POSITION,new S(c,m,3,!0)],[L.NORMAL,new S(f,m,3,!0)],[L.COLOR,new S(g,m,4,!0)],[L.SIZE,new S(O,m,2)],[L.ROTATION,new S(A,m,1,!0)]];if(h&&y.push([L.UV0,new S(h,m,h.length)]),null!=a&&(a=[a[0],a[1],a[2],a[3]],y.push([L.CENTEROFFSETANDDISTANCE,new S(a,m,4)])),l){const t=[l[0],l[1],l[2],l[3]];y.push([L.FEATUREATTRIBUTE,new S(t,m,4)])}return new M(t,y,null,R.Point,u)}const ht=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0]];function lt(t,n=ht){const e=new Array(12);for(let t=0;t<4;t++)for(let s=0;s<3;s++)e[3*t+s]=n[t][s];const s=[0,1,2,2,3,0],o=[0,0,0,0,0,0],r=[[L.POSITION,new S(e,s,3,!0)],[L.NORMAL,new S([0,0,1],o,3,!0)],[L.UV0,new S([0,0,1,0,1,1,0,1],s,2,!0)],[L.COLOR,new S([255,255,255,255],o,4,!0)]];return new M(t,r)}function ut(t,n,e,s,o=!0,r=!0){let a=0;const h=n,l=t;let c=u(0,a,0),f=u(0,a+l,0),i=u(0,-1,0),p=u(0,1,0);s&&(a=l,f=u(0,0,0),c=u(0,a,0),i=u(0,1,0),p=u(0,-1,0));const w=[f,c],g=[i,p],M=e+2,A=Math.sqrt(l*l+h*h);if(s)for(let t=e-1;t>=0;t--){const n=t*(2*Math.PI/e),s=u(Math.cos(n)*h,a,Math.sin(n)*h);w.push(s);const o=u(l*Math.cos(n)/A,-h/A,l*Math.sin(n)/A);g.push(o)}else for(let t=0;t<e;t++){const n=t*(2*Math.PI/e),s=u(Math.cos(n)*h,a,Math.sin(n)*h);w.push(s);const o=u(l*Math.cos(n)/A,h/A,l*Math.sin(n)/A);g.push(o)}const I=new Array,m=new Array;if(o){for(let t=3;t<w.length;t++)I.push(1),I.push(t-1),I.push(t),m.push(0),m.push(0),m.push(0);I.push(w.length-1),I.push(2),I.push(1),m.push(0),m.push(0),m.push(0)}if(r){for(let t=3;t<w.length;t++)I.push(t),I.push(t-1),I.push(0),m.push(t),m.push(t-1),m.push(1);I.push(0),I.push(2),I.push(w.length-1),m.push(1),m.push(2),m.push(g.length-1)}const y=O(3*M);for(let t=0;t<M;t++)y[3*t]=w[t][0],y[3*t+1]=w[t][1],y[3*t+2]=w[t][2];const N=O(3*M);for(let t=0;t<M;t++)N[3*t]=g[t][0],N[3*t+1]=g[t][1],N[3*t+2]=g[t][2];return[[L.POSITION,new S(y,I,3,!0)],[L.NORMAL,new S(N,m,3,!0)]]}function ct(t,n,e,s,o,r=!0,a=!0){return new M(t,ut(n,e,s,o,r,a))}function ft(t,o,l,i,p,w,g){const A=p?f(p):u(1,0,0),I=w?f(w):u(0,0,0);g??=!0;const m=c();e(m,A);const y=c();r(y,m,Math.abs(o));const N=c();r(N,y,-.5),a(N,N,I);const P=u(0,1,0);Math.abs(1-h(m,P))<.2&&s(P,0,0,1);const T=c();n(T,m,P),e(T,T),n(P,T,m);const R=2*i+(g?2:0),d=i+(g?2:0),b=O(3*R),j=O(3*d),E=O(2*R),U=new Array(3*i*(g?4:2)),v=new Array(3*i*(g?4:2));g&&(b[3*(R-2)]=N[0],b[3*(R-2)+1]=N[1],b[3*(R-2)+2]=N[2],E[2*(R-2)]=0,E[2*(R-2)+1]=0,b[3*(R-1)]=b[3*(R-2)]+y[0],b[3*(R-1)+1]=b[3*(R-2)+1]+y[1],b[3*(R-1)+2]=b[3*(R-2)+2]+y[2],E[2*(R-1)]=1,E[2*(R-1)+1]=1,j[3*(d-2)]=-m[0],j[3*(d-2)+1]=-m[1],j[3*(d-2)+2]=-m[2],j[3*(d-1)]=m[0],j[3*(d-1)+1]=m[1],j[3*(d-1)+2]=m[2]);const V=(t,n,e)=>{U[t]=n,v[t]=e};let x=0;const C=c(),F=c();for(let t=0;t<i;t++){const n=t*(2*Math.PI/i);r(C,P,Math.sin(n)),r(F,T,Math.cos(n)),a(C,C,F),j[3*t]=C[0],j[3*t+1]=C[1],j[3*t+2]=C[2],r(C,C,l),a(C,C,N),b[3*t]=C[0],b[3*t+1]=C[1],b[3*t+2]=C[2],E[2*t]=t/i,E[2*t+1]=0,b[3*(t+i)]=b[3*t]+y[0],b[3*(t+i)+1]=b[3*t+1]+y[1],b[3*(t+i)+2]=b[3*t+2]+y[2],E[2*(t+i)]=t/i,E[2*t+1]=1;const e=(t+1)%i;V(x++,t,t),V(x++,t+i,t),V(x++,e,e),V(x++,e,e),V(x++,t+i,t),V(x++,e+i,e)}if(g){for(let t=0;t<i;t++){const n=(t+1)%i;V(x++,R-2,d-2),V(x++,t,d-2),V(x++,n,d-2)}for(let t=0;t<i;t++){const n=(t+1)%i;V(x++,t+i,d-1),V(x++,R-1,d-1),V(x++,n+i,d-1)}}const q=[[L.POSITION,new S(b,U,3,!0)],[L.NORMAL,new S(j,v,3,!0)],[L.UV0,new S(E,U,2,!0)]];return new M(t,q)}function it(t,n,e,s,o,r){s=s||10,o=null==o||o,d(n.length>1);const a=[],h=[];for(let t=0;t<s;t++){a.push([0,-t-1,-(t+1)%s-1]);const n=t/s*2*Math.PI;h.push([Math.cos(n)*e,Math.sin(n)*e])}return pt(t,h,n,[[0,0,0]],a,o,r)}function pt(o,h,c,f,p,w,g=u(0,0,0)){const A=h.length,I=O(c.length*A*3+(6*f.length||0)),m=O(c.length*A*3+(f?6:0)),R=new Array,d=new Array;let b=0,j=0;const E=i(),U=i(),v=i(),V=i(),x=i(),C=i(),F=i(),q=i(),G=i(),B=i(),z=i(),D=i(),k=i(),Z=y();s(G,0,1,0),t(U,c[1],c[0]),e(U,U),w?(a(q,c[0],g),e(v,q)):s(v,0,0,1),It(U,v,G,G,x,v,mt),l(V,v),l(D,x);for(let t=0;t<f.length;t++)r(C,x,f[t][0]),r(q,v,f[t][2]),a(C,C,q),a(C,C,c[0]),I[b++]=C[0],I[b++]=C[1],I[b++]=C[2];m[j++]=-U[0],m[j++]=-U[1],m[j++]=-U[2];for(let t=0;t<p.length;t++)R.push(p[t][0]>0?p[t][0]:-p[t][0]-1+f.length),R.push(p[t][1]>0?p[t][1]:-p[t][1]-1+f.length),R.push(p[t][2]>0?p[t][2]:-p[t][2]-1+f.length),d.push(0),d.push(0),d.push(0);let H=f.length;const J=f.length-1;for(let s=0;s<c.length;s++){let o=!1;s>0&&(l(E,U),s<c.length-1?(t(U,c[s+1],c[s]),e(U,U)):o=!0,a(B,E,U),e(B,B),a(z,c[s-1],V),N(c[s],B,Z),P(Z,T(z,E),q)?(t(q,q,c[s]),e(v,q),n(x,B,v),e(x,x)):It(B,V,D,G,x,v,mt),l(V,v),l(D,x)),w&&(a(q,c[s],g),e(k,q));for(let t=0;t<A;t++)if(r(C,x,h[t][0]),r(q,v,h[t][1]),a(C,C,q),e(F,C),m[j++]=F[0],m[j++]=F[1],m[j++]=F[2],a(C,C,c[s]),I[b++]=C[0],I[b++]=C[1],I[b++]=C[2],!o){const n=(t+1)%A;R.push(H+t),R.push(H+A+t),R.push(H+n),R.push(H+n),R.push(H+A+t),R.push(H+A+n);for(let t=0;t<6;t++){const n=R.length-6;d.push(R[n+t]-J)}}H+=A}const K=c[c.length-1];for(let t=0;t<f.length;t++)r(C,x,f[t][0]),r(q,v,f[t][1]),a(C,C,q),a(C,C,K),I[b++]=C[0],I[b++]=C[1],I[b++]=C[2];const Q=j/3;m[j++]=U[0],m[j++]=U[1],m[j++]=U[2];const W=H-A;for(let t=0;t<p.length;t++)R.push(p[t][0]>=0?H+p[t][0]:-p[t][0]-1+W),R.push(p[t][2]>=0?H+p[t][2]:-p[t][2]-1+W),R.push(p[t][1]>=0?H+p[t][1]:-p[t][1]-1+W),d.push(Q),d.push(Q),d.push(Q);const X=[[L.POSITION,new S(I,R,3,!0)],[L.NORMAL,new S(m,d,3,!0)]];return new M(o,X)}function wt(t,n,e,s){d(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),d(3===n[0].length,"createPolylineGeometry(): malformed vertex"),d(null==e||e.length===n.length,"createPolylineGeometry: need same number of points and normals"),d(null==e||3===e[0].length,"createPolylineGeometry(): malformed normal");const o=g(3*n.length),r=new Array(2*(n.length-1));let a=0,h=0;for(let t=0;t<n.length;t++){for(let e=0;e<3;e++)o[a++]=n[t][e];t>0&&(r[h++]=t-1,r[h++]=t)}const l=[[L.POSITION,new S(o,r,3,!0)]];if(e){const t=O(3*e.length);let s=0;for(let o=0;o<n.length;o++)for(let n=0;n<3;n++)t[s++]=e[o][n];l.push([L.NORMAL,new S(t,r,3,!0)])}return s&&l.push([L.COLOR,new S(s,m(s.length/4),4)]),new M(t,l,null,R.Line)}function gt(t,n,e,s,o,r=0){const a=new Array(18),h=[[-e,r,o/2],[s,r,o/2],[0,n+r,o/2],[-e,r,-o/2],[s,r,-o/2],[0,n+r,-o/2]];for(let t=0;t<6;t++)a[3*t]=h[t][0],a[3*t+1]=h[t][1],a[3*t+2]=h[t][2];return new M(t,[[L.POSITION,new S(a,[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5],3,!0)]])}function Ot(t,n){const e=t.getMutableAttribute(L.POSITION).data;for(let t=0;t<e.length;t+=3){const r=e[t],a=e[t+1],h=e[t+2];s(yt,r,a,h),o(yt,yt,n),e[t]=yt[0],e[t+1]=yt[1],e[t+2]=yt[2]}}function Mt(t,n=t){const e=t.attributes,s=e.get(L.POSITION).data,o=e.get(L.NORMAL).data;if(o){const t=n.getMutableAttribute(L.NORMAL).data;for(let n=0;n<o.length;n+=3){const e=o[n+1];t[n+1]=-o[n+2],t[n+2]=e}}if(s){const t=n.getMutableAttribute(L.POSITION).data;for(let n=0;n<s.length;n+=3){const e=s[n+1];t[n+1]=-s[n+2],t[n+2]=e}}}function At(t,s,o,r,a){return!(Math.abs(h(s,t))>a||(n(o,t,s),e(o,o),n(r,o,t),e(r,r),0))}function It(t,n,e,s,o,r,a){return At(t,n,o,r,a)||At(t,e,o,r,a)||At(t,s,o,r,a)}const mt=.99619469809,yt=i();export{at as a,lt as b,wt as c,st as d,ct as e,pt as f,gt as g,ft as h,it as i,ut as j,Mt as k,D as l,et as m,F as n,ot as o,It as p,rt as q,Ot as t};

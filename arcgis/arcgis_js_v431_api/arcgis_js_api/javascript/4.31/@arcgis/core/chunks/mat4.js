/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{g as t}from"./common.js";function a(t,a){return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function s(t,a,s,n,h,M,r,o,u,c,b,e,i,f,m,l,x){return t[0]=a,t[1]=s,t[2]=n,t[3]=h,t[4]=M,t[5]=r,t[6]=o,t[7]=u,t[8]=c,t[9]=b,t[10]=e,t[11]=i,t[12]=f,t[13]=m,t[14]=l,t[15]=x,t}function n(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function h(t,a){if(t===a){const s=a[1],n=a[2],h=a[3],M=a[6],r=a[7],o=a[11];t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=s,t[6]=a[9],t[7]=a[13],t[8]=n,t[9]=M,t[11]=a[14],t[12]=h,t[13]=r,t[14]=o}else t[0]=a[0],t[1]=a[4],t[2]=a[8],t[3]=a[12],t[4]=a[1],t[5]=a[5],t[6]=a[9],t[7]=a[13],t[8]=a[2],t[9]=a[6],t[10]=a[10],t[11]=a[14],t[12]=a[3],t[13]=a[7],t[14]=a[11],t[15]=a[15];return t}function M(t,a){return r(t,a)||n(t),t}function r(t,a){const s=a[0],n=a[1],h=a[2],M=a[3],r=a[4],o=a[5],u=a[6],c=a[7],b=a[8],e=a[9],i=a[10],f=a[11],m=a[12],l=a[13],x=a[14],q=a[15],d=s*o-n*r,p=s*u-h*r,v=s*c-M*r,g=n*u-h*o,j=n*c-M*o,k=h*c-M*u,w=b*l-e*m,y=b*x-i*m,z=b*q-f*m,A=e*x-i*l,B=e*q-f*l,C=i*q-f*x;let D=d*C-p*B+v*A+g*z-j*y+k*w;return D?(D=1/D,t[0]=(o*C-u*B+c*A)*D,t[1]=(h*B-n*C-M*A)*D,t[2]=(l*k-x*j+q*g)*D,t[3]=(i*j-e*k-f*g)*D,t[4]=(u*z-r*C-c*y)*D,t[5]=(s*C-h*z+M*y)*D,t[6]=(x*v-m*k-q*p)*D,t[7]=(b*k-i*v+f*p)*D,t[8]=(r*B-o*z+c*w)*D,t[9]=(n*z-s*B-M*w)*D,t[10]=(m*j-l*v+q*d)*D,t[11]=(e*v-b*j-f*d)*D,t[12]=(o*y-r*A-u*w)*D,t[13]=(s*A-n*y+h*w)*D,t[14]=(l*p-m*g-x*d)*D,t[15]=(b*g-e*p+i*d)*D,t):null}function o(t,a,s){const n=a[0],h=a[1],M=a[2],r=a[3],o=a[4],u=a[5],c=a[6],b=a[7],e=a[8],i=a[9],f=a[10],m=a[11],l=a[12],x=a[13],q=a[14],d=a[15];let p=s[0],v=s[1],g=s[2],j=s[3];return t[0]=p*n+v*o+g*e+j*l,t[1]=p*h+v*u+g*i+j*x,t[2]=p*M+v*c+g*f+j*q,t[3]=p*r+v*b+g*m+j*d,p=s[4],v=s[5],g=s[6],j=s[7],t[4]=p*n+v*o+g*e+j*l,t[5]=p*h+v*u+g*i+j*x,t[6]=p*M+v*c+g*f+j*q,t[7]=p*r+v*b+g*m+j*d,p=s[8],v=s[9],g=s[10],j=s[11],t[8]=p*n+v*o+g*e+j*l,t[9]=p*h+v*u+g*i+j*x,t[10]=p*M+v*c+g*f+j*q,t[11]=p*r+v*b+g*m+j*d,p=s[12],v=s[13],g=s[14],j=s[15],t[12]=p*n+v*o+g*e+j*l,t[13]=p*h+v*u+g*i+j*x,t[14]=p*M+v*c+g*f+j*q,t[15]=p*r+v*b+g*m+j*d,t}function u(t,a,s){const n=s[0],h=s[1],M=s[2];if(a===t)t[12]=a[0]*n+a[4]*h+a[8]*M+a[12],t[13]=a[1]*n+a[5]*h+a[9]*M+a[13],t[14]=a[2]*n+a[6]*h+a[10]*M+a[14],t[15]=a[3]*n+a[7]*h+a[11]*M+a[15];else{const s=a[0],r=a[1],o=a[2],u=a[3],c=a[4],b=a[5],e=a[6],i=a[7],f=a[8],m=a[9],l=a[10],x=a[11];t[0]=s,t[1]=r,t[2]=o,t[3]=u,t[4]=c,t[5]=b,t[6]=e,t[7]=i,t[8]=f,t[9]=m,t[10]=l,t[11]=x,t[12]=s*n+c*h+f*M+a[12],t[13]=r*n+b*h+m*M+a[13],t[14]=o*n+e*h+l*M+a[14],t[15]=u*n+i*h+x*M+a[15]}return t}function c(t,a,s){const n=s[0],h=s[1],M=s[2];return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=a[3]*n,t[4]=a[4]*h,t[5]=a[5]*h,t[6]=a[6]*h,t[7]=a[7]*h,t[8]=a[8]*M,t[9]=a[9]*M,t[10]=a[10]*M,t[11]=a[11]*M,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t}function b(s,n,h,M){let r=M[0],o=M[1],u=M[2],c=Math.sqrt(r*r+o*o+u*u);if(c<=t())return void a(s,n);c=1/c,r*=c,o*=c,u*=c;const b=Math.sin(h),e=Math.cos(h),i=1-e,f=n[0],m=n[1],l=n[2],x=n[3],q=n[4],d=n[5],p=n[6],v=n[7],g=n[8],j=n[9],k=n[10],w=n[11],y=r*r*i+e,z=o*r*i+u*b,A=u*r*i-o*b,B=r*o*i-u*b,C=o*o*i+e,D=u*o*i+r*b,E=r*u*i+o*b,F=o*u*i-r*b,G=u*u*i+e;s[0]=f*y+q*z+g*A,s[1]=m*y+d*z+j*A,s[2]=l*y+p*z+k*A,s[3]=x*y+v*z+w*A,s[4]=f*B+q*C+g*D,s[5]=m*B+d*C+j*D,s[6]=l*B+p*C+k*D,s[7]=x*B+v*C+w*D,s[8]=f*E+q*F+g*G,s[9]=m*E+d*F+j*G,s[10]=l*E+p*F+k*G,s[11]=x*E+v*F+w*G,n!==s&&(s[12]=n[12],s[13]=n[13],s[14]=n[14],s[15]=n[15])}function e(t,a,s){const n=Math.sin(s),h=Math.cos(s),M=a[4],r=a[5],o=a[6],u=a[7],c=a[8],b=a[9],e=a[10],i=a[11];return a!==t&&(t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[4]=M*h+c*n,t[5]=r*h+b*n,t[6]=o*h+e*n,t[7]=u*h+i*n,t[8]=c*h-M*n,t[9]=b*h-r*n,t[10]=e*h-o*n,t[11]=i*h-u*n,t}function i(t,a,s){const n=Math.sin(s),h=Math.cos(s),M=a[0],r=a[1],o=a[2],u=a[3],c=a[8],b=a[9],e=a[10],i=a[11];return a!==t&&(t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=M*h-c*n,t[1]=r*h-b*n,t[2]=o*h-e*n,t[3]=u*h-i*n,t[8]=M*n+c*h,t[9]=r*n+b*h,t[10]=o*n+e*h,t[11]=u*n+i*h,t}function f(t,a,s){const n=Math.sin(s),h=Math.cos(s),M=a[0],r=a[1],o=a[2],u=a[3],c=a[4],b=a[5],e=a[6],i=a[7];return a!==t&&(t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15]),t[0]=M*h+c*n,t[1]=r*h+b*n,t[2]=o*h+e*n,t[3]=u*h+i*n,t[4]=c*h-M*n,t[5]=b*h-r*n,t[6]=e*h-o*n,t[7]=i*h-u*n,t}function m(t,a){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=a[0],t[13]=a[1],t[14]=a[2],t[15]=1,t}function l(t,a){return t[0]=a[0],t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=a[1],t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=a[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function x(a,s,h){if(0===s)return n(a);let M=h[0],r=h[1],o=h[2],u=Math.sqrt(M*M+r*r+o*o);if(u<=t())return null;u=1/u,M*=u,r*=u,o*=u;const c=Math.sin(s),b=Math.cos(s),e=1-b;return a[0]=M*M*e+b,a[1]=r*M*e+o*c,a[2]=o*M*e-r*c,a[3]=0,a[4]=M*r*e-o*c,a[5]=r*r*e+b,a[6]=o*r*e+M*c,a[7]=0,a[8]=M*o*e+r*c,a[9]=r*o*e-M*c,a[10]=o*o*e+b,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}function q(t,a){const s=Math.sin(a),n=Math.cos(a);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=n,t[6]=s,t[7]=0,t[8]=0,t[9]=-s,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function d(t,a){const s=Math.sin(a),n=Math.cos(a);return t[0]=n,t[1]=0,t[2]=-s,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=s,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function p(t,a){const s=Math.sin(a),n=Math.cos(a);return t[0]=n,t[1]=s,t[2]=0,t[3]=0,t[4]=-s,t[5]=n,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function v(t,a){return t[0]=a[12],t[1]=a[13],t[2]=a[14],t}function g(t,a){const s=a[0],n=a[1],h=a[2],M=a[4],r=a[5],o=a[6],u=a[8],c=a[9],b=a[10];return t[0]=Math.sqrt(s*s+n*n+h*h),t[1]=Math.sqrt(M*M+r*r+o*o),t[2]=Math.sqrt(u*u+c*c+b*b),t}function j(t,a){const s=a[0]+a[5]+a[10];let n=0;return s>0?(n=2*Math.sqrt(s+1),t[3]=.25*n,t[0]=(a[6]-a[9])/n,t[1]=(a[8]-a[2])/n,t[2]=(a[1]-a[4])/n):a[0]>a[5]&&a[0]>a[10]?(n=2*Math.sqrt(1+a[0]-a[5]-a[10]),t[3]=(a[6]-a[9])/n,t[0]=.25*n,t[1]=(a[1]+a[4])/n,t[2]=(a[8]+a[2])/n):a[5]>a[10]?(n=2*Math.sqrt(1+a[5]-a[0]-a[10]),t[3]=(a[8]-a[2])/n,t[0]=(a[1]+a[4])/n,t[1]=.25*n,t[2]=(a[6]+a[9])/n):(n=2*Math.sqrt(1+a[10]-a[0]-a[5]),t[3]=(a[1]-a[4])/n,t[0]=(a[8]+a[2])/n,t[1]=(a[6]+a[9])/n,t[2]=.25*n),t}function k(t,a,s,n){const h=a[0],M=a[1],r=a[2],o=a[3],u=h+h,c=M+M,b=r+r,e=h*u,i=h*c,f=h*b,m=M*c,l=M*b,x=r*b,q=o*u,d=o*c,p=o*b,v=n[0],g=n[1],j=n[2];return t[0]=(1-(m+x))*v,t[1]=(i+p)*v,t[2]=(f-d)*v,t[3]=0,t[4]=(i-p)*g,t[5]=(1-(e+x))*g,t[6]=(l+q)*g,t[7]=0,t[8]=(f+d)*j,t[9]=(l-q)*j,t[10]=(1-(e+m))*j,t[11]=0,t[12]=s[0],t[13]=s[1],t[14]=s[2],t[15]=1,t}function w(t,a,s,n,h){const M=a[0],r=a[1],o=a[2],u=a[3],c=M+M,b=r+r,e=o+o,i=M*c,f=M*b,m=M*e,l=r*b,x=r*e,q=o*e,d=u*c,p=u*b,v=u*e,g=n[0],j=n[1],k=n[2],w=h[0],y=h[1],z=h[2],A=(1-(l+q))*g,B=(f+v)*g,C=(m-p)*g,D=(f-v)*j,E=(1-(i+q))*j,F=(x+d)*j,G=(m+p)*k,H=(x-d)*k,I=(1-(i+l))*k;return t[0]=A,t[1]=B,t[2]=C,t[3]=0,t[4]=D,t[5]=E,t[6]=F,t[7]=0,t[8]=G,t[9]=H,t[10]=I,t[11]=0,t[12]=s[0]+w-(A*w+D*y+G*z),t[13]=s[1]+y-(B*w+E*y+H*z),t[14]=s[2]+z-(C*w+F*y+I*z),t[15]=1,t}function y(t,a){const s=a[0],n=a[1],h=a[2],M=a[3],r=s+s,o=n+n,u=h+h,c=s*r,b=n*r,e=n*o,i=h*r,f=h*o,m=h*u,l=M*r,x=M*o,q=M*u;return t[0]=1-e-m,t[1]=b+q,t[2]=i-x,t[3]=0,t[4]=b-q,t[5]=1-c-m,t[6]=f+l,t[7]=0,t[8]=i+x,t[9]=f-l,t[10]=1-c-e,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function z(t,a,s,n,h,M,r){const o=1/(s-a),u=1/(h-n),c=1/(M-r);return t[0]=2*M*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=2*M*u,t[6]=0,t[7]=0,t[8]=(s+a)*o,t[9]=(h+n)*u,t[10]=(r+M)*c,t[11]=-1,t[12]=0,t[13]=0,t[14]=r*M*2*c,t[15]=0,t}function A(t,a,s,n,h,M,r){const o=1/(a-s),u=1/(n-h),c=1/(M-r);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*u,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(a+s)*o,t[13]=(h+n)*u,t[14]=(r+M)*c,t[15]=1,t}function B(a,s,h,M){const r=s[0],o=s[1],u=s[2];let c=r-h[0],b=o-h[1],e=u-h[2];const i=t();if(Math.abs(c)<i&&Math.abs(b)<i&&Math.abs(e)<i)return void n(a);let f=1/Math.sqrt(c*c+b*b+e*e);c*=f,b*=f,e*=f;const m=M[0],l=M[1],x=M[2];let q=l*e-x*b,d=x*c-m*e,p=m*b-l*c;f=Math.sqrt(q*q+d*d+p*p),f?(f=1/f,q*=f,d*=f,p*=f):(q=0,d=0,p=0);let v=b*p-e*d,g=e*q-c*p,j=c*d-b*q;f=Math.sqrt(v*v+g*g+j*j),f?(f=1/f,v*=f,g*=f,j*=f):(v=0,g=0,j=0),a[0]=q,a[1]=v,a[2]=c,a[3]=0,a[4]=d,a[5]=g,a[6]=b,a[7]=0,a[8]=p,a[9]=j,a[10]=e,a[11]=0,a[12]=-(q*r+d*o+p*u),a[13]=-(v*r+g*o+j*u),a[14]=-(c*r+b*o+e*u),a[15]=1}function C(t,a,s,n){const h=a[0],M=a[1],r=a[2],o=n[0],u=n[1],c=n[2];let b=h-s[0],e=M-s[1],i=r-s[2],f=b*b+e*e+i*i;f>0&&(f=1/Math.sqrt(f),b*=f,e*=f,i*=f);let m=u*i-c*e,l=c*b-o*i,x=o*e-u*b;return f=m*m+l*l+x*x,f>0&&(f=1/Math.sqrt(f),m*=f,l*=f,x*=f),t[0]=m,t[1]=l,t[2]=x,t[3]=0,t[4]=e*x-i*l,t[5]=i*m-b*x,t[6]=b*l-e*m,t[7]=0,t[8]=b,t[9]=e,t[10]=i,t[11]=0,t[12]=h,t[13]=M,t[14]=r,t[15]=1,t}function D(t,a){return t[0]===a[0]&&t[1]===a[1]&&t[2]===a[2]&&t[3]===a[3]&&t[4]===a[4]&&t[5]===a[5]&&t[6]===a[6]&&t[7]===a[7]&&t[8]===a[8]&&t[9]===a[9]&&t[10]===a[10]&&t[11]===a[11]&&t[12]===a[12]&&t[13]===a[13]&&t[14]===a[14]&&t[15]===a[15]}function E(a,s){if(a===s)return!0;const n=a[0],h=a[1],M=a[2],r=a[3],o=a[4],u=a[5],c=a[6],b=a[7],e=a[8],i=a[9],f=a[10],m=a[11],l=a[12],x=a[13],q=a[14],d=a[15],p=s[0],v=s[1],g=s[2],j=s[3],k=s[4],w=s[5],y=s[6],z=s[7],A=s[8],B=s[9],C=s[10],D=s[11],E=s[12],F=s[13],G=s[14],H=s[15],I=t();return Math.abs(n-p)<=I*Math.max(1,Math.abs(n),Math.abs(p))&&Math.abs(h-v)<=I*Math.max(1,Math.abs(h),Math.abs(v))&&Math.abs(M-g)<=I*Math.max(1,Math.abs(M),Math.abs(g))&&Math.abs(r-j)<=I*Math.max(1,Math.abs(r),Math.abs(j))&&Math.abs(o-k)<=I*Math.max(1,Math.abs(o),Math.abs(k))&&Math.abs(u-w)<=I*Math.max(1,Math.abs(u),Math.abs(w))&&Math.abs(c-y)<=I*Math.max(1,Math.abs(c),Math.abs(y))&&Math.abs(b-z)<=I*Math.max(1,Math.abs(b),Math.abs(z))&&Math.abs(e-A)<=I*Math.max(1,Math.abs(e),Math.abs(A))&&Math.abs(i-B)<=I*Math.max(1,Math.abs(i),Math.abs(B))&&Math.abs(f-C)<=I*Math.max(1,Math.abs(f),Math.abs(C))&&Math.abs(m-D)<=I*Math.max(1,Math.abs(m),Math.abs(D))&&Math.abs(l-E)<=I*Math.max(1,Math.abs(l),Math.abs(E))&&Math.abs(x-F)<=I*Math.max(1,Math.abs(x),Math.abs(F))&&Math.abs(q-G)<=I*Math.max(1,Math.abs(q),Math.abs(G))&&Math.abs(d-H)<=I*Math.max(1,Math.abs(d),Math.abs(H))}function F(a){const s=t(),n=a[0],h=a[1],M=a[2],r=a[4],o=a[5],u=a[6],c=a[8],b=a[9],e=a[10];return Math.abs(1-(n*n+r*r+c*c))<=s&&Math.abs(1-(h*h+o*o+b*b))<=s&&Math.abs(1-(M*M+u*u+e*e))<=s}function G(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[8]&&0===t[9]&&1===t[10]}const H=o;export{H as A,p as B,b as C,q as D,w as E,d as F,A as G,C as H,k as a,m as b,a as c,e as d,D as e,x as f,j as g,i as h,r as i,y as j,g as k,n as l,o as m,s as n,G as o,F as p,M as q,f as r,c as s,h as t,z as u,E as v,B as w,u as x,v as y,l as z};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{c as s,f as t}from"./vec3f64.js";import{g as n}from"./common.js";import{d as a,c as o,b as c,n as r}from"./vec3.js";import{s as i,n as e,e as f}from"./vec4.js";function u(s,t,n){n*=.5;const a=Math.sin(n);return s[0]=a*t[0],s[1]=a*t[1],s[2]=a*t[2],s[3]=Math.cos(n),s}function h(s,t){const a=2*Math.acos(t[3]),o=Math.sin(a/2);return o>n()?(s[0]=t[0]/o,s[1]=t[1]/o,s[2]=t[2]/o):(s[0]=1,s[1]=0,s[2]=0),a}function M(s,t,n){const a=t[0],o=t[1],c=t[2],r=t[3],i=n[0],e=n[1],f=n[2],u=n[3];return s[0]=a*u+r*i+o*f-c*e,s[1]=o*u+r*e+c*i-a*f,s[2]=c*u+r*f+a*e-o*i,s[3]=r*u-a*i-o*e-c*f,s}function m(s,t){const n=t[0],a=t[1],o=t[2],c=t[3],r=n*n+a*a+o*o+c*c,i=r?1/r:0;return s[0]=-n*i,s[1]=-a*i,s[2]=-o*i,s[3]=c*i,s}function p(s,t){return s[0]=-t[0],s[1]=-t[1],s[2]=-t[2],s[3]=t[3],s}function j(s,t,n,a){const o=.5*Math.PI/180;t*=o,n*=o,a*=o;const c=Math.sin(t),r=Math.cos(t),i=Math.sin(n),e=Math.cos(n),f=Math.sin(a),u=Math.cos(a);return s[0]=c*e*u-r*i*f,s[1]=r*i*u+c*e*f,s[2]=r*e*f-c*i*u,s[3]=r*e*u+c*i*f,s}const v=i,g=e,I=f;function P(s,t,n){const i=a(t,n);return i<-.999999?(o(b,d,t),c(b)<1e-6&&o(b,x,t),r(b,b),u(s,b,Math.PI),s):i>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(o(b,t,n),s[0]=b[0],s[1]=b[1],s[2]=b[2],s[3]=1+i,g(s,s))}const b=s(),d=t(1,0,0),x=t(0,1,0);export{v as a,p as c,I as e,j as f,h as g,m as i,M as m,P as r,u as s};

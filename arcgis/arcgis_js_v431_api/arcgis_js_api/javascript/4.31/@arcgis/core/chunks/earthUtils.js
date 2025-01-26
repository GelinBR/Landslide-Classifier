/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{b as t,r as n,d as o}from"./mathUtils.js";import{t as s}from"./unitUtils.js";import u from"../geometry/Point.js";function r(n,s,u){if(null==s.longitude||null==s.latitude||null==u.longitude||null==u.latitude)throw new Error("Invalid points: no lon/lat");return function(n,s,u,r,e){const i=o(u),a=o(e),l=i-a,c=o(s)-o(r),d=Math.sin(l/2),h=Math.sin(c/2),f=2*t(Math.sqrt(d*d+Math.cos(i)*Math.cos(a)*h*h))*n;return Math.round(1e4*f)/1e4}(n,s.longitude,s.latitude,u.longitude,u.latitude)}function e(t,n,o){const e=n.spatialReference,i=s(e),a=new u(n.x,t.y,e),l=new u(o.x,t.y,e),c=new u(t.x,n.y,e),d=new u(t.x,o.y,e);return{lon:r(i.radius,a,l),lat:r(i.radius,c,d)}}function i(s,u,r){const e=u/r,i=o(s),a=Math.sin(e/2),l=Math.cos(i),c=2*t(Math.sqrt(a*a/(l*l)));return n(c)}function a(t,n){let o=t/15;return n||(o=Math.round(o)),o}function l(t,n){const o=t?.[0];if(null==o)return null;n||(n={hours:0,minutes:0,seconds:0}),n.hours=a(o,!0);const s=n.hours%1;n.hours-=s,n.minutes=60*s;const u=n.minutes%1;return n.minutes-=u,n.seconds=Math.round(60*u),n}export{e as a,i as g,a as l,l as p};

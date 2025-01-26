/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../geometry/Polygon.js";import"../geometry/Polyline.js";function t(t){return t?{originPosition:"upper-left"===t.originPosition?"upperLeft":"lower-left"===t.originPosition?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance,1,1]:[1,1,1,1],translate:null!=t.extent?[t.extent.xmin,t.extent.ymax,t.extent.zmin??0,t.extent.mmin??0]:[0,0,0,0]}:null}function n(t){if(function(t){return"lowerLeft"===t.originPosition&&4===t.scale.length&&4===t.translate.length}(t))return t;const{originPosition:n,scale:e,translate:r}=t,o=e[0]??1,s=e[1]??1;return{originPosition:"lowerLeft",scale:[o,"lowerLeft"===n?s:-s,e[2]??1,e[3]??1],translate:[r[0]??0,r[1]??0,r[2]??0,r[3]??0]}}function e({scale:t,translate:n},e){return e*t[0]+n[0]}function r({scale:t,translate:n},e){return e*t[1]+n[1]}function o({scale:t,translate:n},e){return(e??0)*t[2]+n[2]}function s({scale:t,translate:n},e){return e?e*t[3]+n[3]:0}function l(t,n){return t&&n?c:t&&!n?a:!t&&n?u:i}const i=(t,n)=>{const o=new Array(n.length);if(!n.length)return o;const s=n[0];let l=e(t,s[0]),i=r(t,s[1]);o[0]=[l,i];const{scale:a,originPosition:u}=t,c=a[0],f="lowerLeft"===u?a[1]:-a[1];for(let t=1;t<n.length;t++){const[e,r]=n[t];l+=c*e,i+=f*r,o[t]=[l,i]}return o},a=(t,n)=>{const s=new Array(n.length);if(!n.length)return s;const l=n[0];let i=e(t,l[0]),a=r(t,l[1]);s[0]=[i,a,o(t,l[2])];const{scale:u,originPosition:c}=t,f=u[0],g="lowerLeft"===c?u[1]:-u[1];for(let e=1;e<n.length;e++){const[r,l,u]=n[e];i+=f*r,a+=g*l,s[e]=[i,a,o(t,u)]}return s},u=(t,n)=>{const o=new Array(n.length);if(!n.length)return o;const l=n[0];let i=e(t,l[0]),a=r(t,l[1]);o[0]=[i,a,s(t,l[2])];const{scale:u,originPosition:c}=t,f=u[0],g="lowerLeft"===c?u[1]:-u[1];for(let e=1;e<n.length;e++){const[r,l,u]=n[e];i+=f*r,a+=g*l,o[e]=[i,a,s(t,u)]}return o},c=(t,n)=>{const l=new Array(n.length);if(!n.length)return l;const i=n[0];let a=e(t,i[0]),u=r(t,i[1]);l[0]=[a,u,o(t,i[2]),s(t,i[3])];const{scale:c,originPosition:f}=t,g=c[0],h="lowerLeft"===f?c[1]:-c[1];for(let e=1;e<n.length;e++){const[r,i,c,f]=n[e];a+=g*r,u+=h*i,l[e]=[a,u,o(t,c),s(t,f)]}return l};function f(t,n,e){const r=new Array(e.length);for(let o=0;o<e.length;o++)r[o]=n(t,e[o]);return r}function g(t,e,r){const o=n(t);return e.x=function({scale:t,translate:n},e){return Math.round((e-n[0])/t[0])}(o,r.x),e.y=function({scale:t,translate:n},e){return Math.round((e-n[1])/t[1])}(o,r.y),null!=r.z&&(e.z=function({scale:t,translate:n},e){return Math.round(((e??0)-n[2])/t[2])}(o,r.z)),null!=r.m&&(e.m=function({scale:t,translate:n},e){return e?Math.round((e-n[3])/t[3]):0}(o,r.m)),e}function h(t,e,r,o=r?.hasZ??!1,s=r?.hasM??!1){if(null!=r){const i=n(t);e.points=l(o,s)(i,r.points),e.hasZ=o,e.hasM=s}return e}function m(t,l,i,a=null!=i?.z,u=null!=i?.m){if(null==i)return l;const c=n(t);return l.x=e(c,i.x),l.y=r(c,i.y),a&&(l.z=o(c,i.z)),u&&(l.m=s(c,i.m)),l}function y(t,e,r,o=r?.hasZ??!1,s=r?.hasM??!1){if(null!=r){const i=n(t);e.rings=f(i,l(o,s),r.rings),e.hasZ=o,e.hasM=s}return e}function p(t,e,r,o=r?.hasZ??!1,s=r?.hasM??!1){if(null!=r){const i=n(t);e.paths=f(i,l(o,s),r.paths),e.hasZ=o,e.hasM=s}return e}export{y as a,h as b,m as c,n,g as q,t,p as u};

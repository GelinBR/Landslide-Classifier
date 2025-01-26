/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{r as t}from"./mathUtils.js";import{c as n}from"./aaBoundingRect.js";import{g as s}from"./boundsUtils.js";import{g as e}from"./coordsUtils.js";function i(t,n,s,i){if(null==i||t.hasZ||(i=void 0),"point"===t.type)return t.x+=n,t.y+=s,t.hasZ&&null!=i&&(t.z+=i),t;if("multipoint"===t.type){const e=t.points;for(let t=0;t<e.length;t++)e[t]=l(e[t],n,s,i);return t}if("extent"===t.type)return t.xmin+=n,t.xmax+=n,t.ymin+=s,t.ymax+=s,null!=i&&(t.zmin??=0,t.zmin+=i,t.zmax??=0,t.zmax+=i),t;const o=e(t),r="polyline"===t.type?t.paths:t.rings;for(let t=0;t<o.length;t++){const e=o[t];for(let t=0;t<e.length;t++)e[t]=l(e[t],n,s,i)}return"paths"in t?t.paths=r:t.rings=r,t}function o(t,n,s,o,r){const a=t.clone(),m=o.resolution;if("point"===a.type){if(r)i(a,n*m,-s*m);else{const t=o.state.transform,e=o.state.inverseTransform,i=t[0]*a.x+t[2]*a.y+t[4],r=t[1]*a.x+t[3]*a.y+t[5];a.x=e[0]*(i+n)+e[2]*(r+s)+e[4],a.y=e[1]*(i+n)+e[3]*(r+s)+e[5]}return a}if("multipoint"===a.type){if(r)i(a,n*m,-s*m);else{const t=a.points,e=o.state.transform,i=o.state.inverseTransform;for(let o=0;o<t.length;o++){const r=t[o],a=e[0]*r[0]+e[2]*r[1]+e[4],m=e[1]*r[0]+e[3]*r[1]+e[5],l=i[0]*(a+n)+i[2]*(m+s)+i[4],f=i[1]*(a+n)+i[3]*(m+s)+i[5];t[o]=x(r,l,f,void 0)}}return a}if("extent"===a.type){if(r)i(a,n*m,-s*m);else{const t=o.state.transform,e=o.state.inverseTransform,i=t[0]*a.xmin+t[2]*a.ymin+t[4],r=t[1]*a.xmin+t[3]*a.ymin+t[5],m=t[0]*a.xmax+t[2]*a.ymax+t[4],l=t[1]*a.xmax+t[3]*a.ymax+t[5];a.xmin=e[0]*(i+n)+e[2]*(r+s)+e[4],a.ymin=e[1]*(i+n)+e[3]*(r+s)+e[5],a.xmax=e[0]*(m+n)+e[2]*(l+s)+e[4],a.ymax=e[1]*(m+n)+e[3]*(l+s)+e[5]}return a}if(r)i(a,n*m,-s*m);else{const t=e(a),i="polyline"===a.type?a.paths:a.rings,r=o.state.transform,m=o.state.inverseTransform;for(let e=0;e<t.length;e++){const i=t[e];for(let t=0;t<i.length;t++){const e=i[t],o=r[0]*e[0]+r[2]*e[1]+r[4],a=r[1]*e[0]+r[3]*e[1]+r[5],l=m[0]*(o+n)+m[2]*(a+s)+m[4],f=m[1]*(o+n)+m[3]*(a+s)+m[5];i[t]=x(e,l,f,void 0)}}"paths"in a?a.paths=i:a.rings=i}return a}function r(t,i,o,r){if("point"===t.type){const{x:n,y:s}=t,e=r?r[0]:n,a=r?r[1]:s,m=t.clone(),l=(n-e)*i+e,x=(s-a)*o+a;return m.x=l,m.y=x,m}if("multipoint"===t.type){const a=e(t),m=n(),[l,f,y,c]=s(m,[a]),p=r?r[0]:(l+y)/2,u=r?r[1]:(c+f)/2,h=t.clone(),g=h.points;for(let t=0;t<g.length;t++){const n=g[t],[s,e]=n,r=(s-p)*i+p,a=(e-u)*o+u;g[t]=x(n,r,a,void 0)}return h}if("extent"===t.type){const{xmin:n,xmax:s,ymin:e,ymax:a}=t,m=r?r[0]:(n+s)/2,l=r?r[1]:(a+e)/2,x=t.clone();if(x.xmin=(n-m)*i+m,x.ymax=(a-l)*o+l,x.xmax=(s-m)*i+m,x.ymin=(e-l)*o+l,x.xmin>x.xmax){const t=x.xmin,n=x.xmax;x.xmin=n,x.xmax=t}if(x.ymin>x.ymax){const t=x.ymin,n=x.ymax;x.ymin=n,x.ymax=t}return x}const a=e(t),m=n(),[l,f,y,c]=s(m,a),p=r?r[0]:(l+y)/2,u=r?r[1]:(c+f)/2,h=t.clone(),g="polyline"===h.type?h.paths:h.rings;for(let t=0;t<a.length;t++){const n=a[t];for(let s=0;s<n.length;s++){const e=n[s],[r,a]=e,m=(r-p)*i+p,l=(a-u)*o+u;g[t][s]=x(e,m,l,void 0)}}return"paths"in h?h.paths=g:h.rings=g,h}function a(t,n,s,e,i,o){const r=Math.sqrt((s-t)*(s-t)+(e-n)*(e-n));return Math.sqrt((i-t)*(i-t)+(o-n)*(o-n))/r}function m(n,s,e,i=!1){const o=Math.atan2(s.y-e.y,s.x-e.x)-Math.atan2(n.y-e.y,n.x-e.x),r=Math.atan2(Math.sin(o),Math.cos(o));return i?r:t(r)}function l(t,n,s,e){return x(t,t[0]+n,t[1]+s,null!=t[2]&&null!=e?t[2]+e:void 0)}function x(t,n,s,e){const i=[n,s];return t.length>2&&i.push(null!=e?e:t[2]),t.length>3&&i.push(t[3]),i}export{a,o as c,m as g,i as m,r as s};

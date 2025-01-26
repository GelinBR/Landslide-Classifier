/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import t from"../../Color.js";import{g as o}from"../../chunks/colorUtils2.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/vec4.js";import"../../chunks/common.js";import"../../chunks/vec4f64.js";async function n(o){await o.whenReady();const n=o.basemapView?.baseLayerViews.map((t=>t.layer)).toArray()??[];if(!n.length){const n=getComputedStyle(o.container).backgroundColor,r=n?new t(n):void 0;return("background"in o?o.background?.color:void 0)||(0!==r?.a?r:null)||null}const r=(await o.takeScreenshot({format:"png",layers:n})).data.data,s=r.length;let a=0,e=0,c=0,i=0,u=0,l=0;for(let t=0;t<s;t+=4){const o=r[t],n=r[t+1],s=r[t+2],m=r[t+3],h=m/255;a+=o*o*h,e+=n*n*h,c+=s*s*h,u+=h,m&&(i+=m,l++)}return a=Math.round(Math.sqrt(a/u)),e=Math.round(Math.sqrt(e/u)),c=Math.round(Math.sqrt(c/u)),new t([a,e,c,i/l/255])}async function r(t){if(!t)return null;const r=await n(t);return null!=r?o(r):null}export{n as getBackgroundColor,r as getBackgroundColorTheme};

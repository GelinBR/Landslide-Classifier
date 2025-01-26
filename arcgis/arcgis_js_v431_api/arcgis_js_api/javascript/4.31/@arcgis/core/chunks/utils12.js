/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import t from"../Color.js";import{isSymbol3D as e,isSymbol2D as o}from"../symbols.js";import{f as n}from"./asyncUtils.js";import"../core/lang.js";import{a as r,p as s}from"./screenUtils.js";import{O as l}from"./vec3f64.js";import{e as i}from"./jsonUtils.js";import{getCIMSymbolColor as a}from"../symbols/support/cimSymbolUtils.js";import{g as c}from"./assets.js";import u from"../request.js";import{L as f}from"./LRUCache.js";import{S as m}from"./Symbol3DMaterial.js";const y="picture-fill",h="simple-fill",p="simple-marker",d=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),b=new f(1e3);function w(t){const e=t.style;let o=null;if(t)switch(t.type){case p:"cross"!==e&&"x"!==e&&(o=t.color);break;case h:e&&"solid"!==e?"none"!==e&&(o={type:"pattern",x:0,y:0,src:c(`esri/symbols/patterns/${e}.png`),width:5,height:5}):o=t.color;break;case y:o={type:"pattern",src:t.url,width:r(t.width)*t.xscale,height:r(t.height)*t.yscale,x:r(t.xoffset),y:r(t.yoffset)};break;case"text":o=t.color;break;case"cim":o=a(t)}return o}function g(t,e){const o=t+"-"+e;return void 0!==b.get(o)?Promise.resolve(b.get(o)):u(t,{responseType:"image"}).then((t=>{const n=t.data,r=n.naturalWidth,s=n.naturalHeight,l=document.createElement("canvas");l.width=r,l.height=s;const i=l.getContext("2d");i.fillStyle=e,i.fillRect(0,0,r,s),i.globalCompositeOperation="destination-in",i.drawImage(n,0,0);const a=l.toDataURL();return b.put(o,a),a}))}function j(t){if(!t)return null;let e=null;switch(t.type){case h:case y:case p:e=j(t.outline);break;case"simple-line":{const o=r(t.width);null!=t.style&&"none"!==t.style&&0!==o&&(e={color:t.color,style:L(t.style),width:o,cap:t.cap,join:"miter"===t.join?r(t.miterLimit):t.join},e.dashArray=k(e).join(",")||"none");break}default:e=null}return e}function k(t){if(!t?.style)return[];const{dashArray:e,style:o,width:n}=t;if("string"==typeof e&&"none"!==e)return e.split(",").map((t=>Number(t)));const r=n??0,s=d.has(o)?d.get(o).map((t=>t*r)):[];if("butt"!==t.cap)for(const[t,e]of s.entries())s[t]=t%2==1?e+r:Math.max(e-r,1);return s}const L=(()=>{const t={};return e=>{if(t[e])return t[e];const o=e.replaceAll("-","");return t[e]=o,o}})(),x=new t([128,128,128]),S=new t("white");function z(t){if(!t)return 0;if(e(t)){const e=function(t){const e=t.symbolLayers?.at(-1);if(e&&"outline"in e)return e?.outline?.size}(t);return null!=e?e:0}return s(j(t)?.width)}function v(t){if(null==t||!("symbolLayers"in t)||null==t.symbolLayers)return!1;switch(t.type){case"point-3d":return t.symbolLayers.some((t=>"object"===t.type));case"line-3d":return t.symbolLayers.some((t=>"path"===t.type));case"polygon-3d":return t.symbolLayers.some((t=>"object"===t.type||"extrude"===t.type));default:return!1}}function U(t){return t.resource?.href??""}function C(n,r){if(!n)return null;let s=null;return e(n)?s=function(e){const o=e.symbolLayers;if(!o)return null;let n=null;return o.forEach((t=>{"object"===t.type&&t.resource?.href||(n="water"===t.type?t.color:t.material?t.material.color:null)})),n?new t(n):null}(n):o(n)&&(s="cim"===n.type?a(n):n.color?new t(n.color):null),s?R(s,r):null}function R(e,o){if(null==o||null==e)return e;const n=e.toRgba();return n[3]=n[3]*o,new t(n)}function E(n,r,s){n&&(r||null!=s)&&(r&&(r=new t(r)),e(n)?function(t,e,o){const n=t.symbolLayers;if(!n)return;const r=t=>R(e=e??t??(null!=o?S:null),o);n.forEach((t=>{if("object"!==t.type||!t.resource?.href||e)if("water"===t.type)t.color=r(t.color);else{const e=null!=t.material?t.material.color:null,n=r(e);null==t.material?t.material=new m({color:n}):t.material.color=n,null!=o&&"outline"in t&&null!=t.outline?.color&&(t.outline.color=R(t.outline.color,o))}}))}(n,r,s):o(n)&&function(t,e,o){(e=e??t.color)&&(t.color=R(e,o)),null!=o&&"outline"in t&&t.outline?.color&&(t.outline.color=R(t.outline.color,o))}(n,r,s))}function M(t){for(const e of t)if("number"==typeof e)return e;return null}function O(t,e,o){for(let n=0;n<3;n++){const r=t[n];switch(r){case"symbol-value":{const t=o[n];return null!=t?t/e[n]:1}case"proportional":break;default:if(r&&e[n])return r/e[n]}}return 1}function A(t,e,o,n){switch(t){case"proportional":return o*n;case"symbol-value":return null!=e?e:o;default:return t}}async function D(t,r){if(t&&r)return e(t)?async function(t,e){const o=t.symbolLayers;o&&await n(o,(async t=>async function(t,e){switch(t.type){case"extrude":!function(t,e){t.size="number"==typeof e[2]?e[2]:0}(t,e);break;case"icon":case"line":case"text":!function(t,e){const o=M(e);null!=o&&(t.size=o)}(t,e);break;case"path":!function(t,e){const o=O(e,l,[t.width,void 0,t.height]);t.width=A(e[0],t.width,1,o),t.height=A(e[2],t.height,1,o)}(t,e);break;case"object":await async function(t,e){const{resourceSize:o,symbolSize:n}=await async function(t){const{computeObjectLayerResourceSize:e}=await import("./symbolLayerUtils.js"),o=await e(t,10),{width:n,height:r,depth:s}=t,l=[n,s,r];let i=1;for(let t=0;t<3;t++){const e=l[t];if(null!=e){i=e/o[t];break}}for(let t=0;t<3;t++)null==l[t]&&(l[t]=o[t]*i);return{resourceSize:o,symbolSize:l}}(t),r=O(e,o,n);t.width=A(e[0],n[0],o[0],r),t.depth=A(e[1],n[1],o[1],r),t.height=A(e[2],n[2],o[2],r)}(t,e)}}(t,e)))}(t,r):void(o(t)&&function(t,e){const o=M(e);if(null!=o)switch(t.type){case"simple-marker":t.size=o;break;case"picture-marker":{const e=t.width/t.height;e>1?(t.width=o,t.height=o*e):(t.width=o*e,t.height=o);break}case"simple-line":t.width=o;break;case"text":t.font.size=o}}(t,r))}function I(t,n,r){if(t&&null!=n)if(e(t)){const e=t.symbolLayers;e&&e.forEach((t=>{if("object"===t.type)switch(r){case"tilt":t.tilt=(t.tilt??0)+n;break;case"roll":t.roll=(t.roll??0)+n;break;default:t.heading=(t.heading??0)+n}"icon"===t.type&&(t.angle+=n)}))}else o(t)&&("simple-marker"!==t.type&&"picture-marker"!==t.type&&"text"!==t.type||(t.angle+=n))}function N(t){if(!t)return null;const e=t.effects.filter((t=>"bloom"!==t.type)).map((t=>t.toJSON()));return i(e)}function q(t){return null!=t&&"polygon-3d"===t.type&&t.symbolLayers.some((t=>"extrude"===t.type))}async function H(t,e){return await t.fetchSymbol(e)||t.fetchCIMSymbol(e)}export{D as a,I as b,E as c,g as d,w as e,H as f,z as g,j as h,v as i,k as j,C as k,N as l,L as m,U as n,x as o,R as p,q as s};

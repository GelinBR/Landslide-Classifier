/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{L as r}from"./Logger.js";import o from"../layers/support/LabelClass.js";const t=()=>r.getLogger("esri.layers.support.labelingInfo"),l=/\[([^[\]]+)\]/gi;function n(e,r,t){return e?e.map((e=>{const n=new o;if(n.read(e,t),n.labelExpression){const e=r.fields||r.layerDefinition?.fields||this.fields;n.labelExpression=n.labelExpression.replaceAll(l,((r,o)=>`[${function(e,r){if(!r)return e;const o=e.toLowerCase();for(let e=0;e<r.length;e++){const t=r[e].name;if(t.toLowerCase()===o)return t}return e}(o,e)}]`))}return n})):null}const s={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryMultiPatch:["always-horizontal"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along","above-along","below-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function a(r,o){const l=[];for(const n of r){const r=n.labelPlacement,a=s[o];if(!n.symbol)return t().warn("No ILabelClass symbol specified."),[];if(!a)return t().error(new e("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${o}' is not supported`)),[];if(a.includes(r))l.push(n);else{const e=a[0];r&&t().warn(`Found invalid label placement type ${r} for ${o}. Defaulting to ${e}`);const s=n.clone();s.labelPlacement=e,l.push(s)}}return l}export{n as r,a as v};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{O as r}from"../core/Accessor.js";function e(r,e,n){const o=e.flatten((({sublayers:r})=>r)).length;return o!==r.length||!!r.some((r=>r.originIdOf("minScale")>n||r.originIdOf("maxScale")>n||r.originIdOf("renderer")>n||r.originIdOf("labelingInfo")>n||r.originIdOf("opacity")>n||r.originIdOf("labelsVisible")>n||r.originIdOf("source")>n))||!i(r,e)}function n(e,n,o){return!!e.some((e=>{const n=e.source,i=!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(null==n.gdbVersion||n.gdbVersion===o);return e.commitProperty("renderer"),e.commitProperty("labelingInfo"),e.commitProperty("opacity"),e.commitProperty("labelsVisible"),!i||e.originIdOf("renderer")>r.SERVICE||e.originIdOf("labelingInfo")>r.SERVICE||e.originIdOf("opacity")>r.SERVICE||e.originIdOf("labelsVisible")>r.SERVICE}))||!i(e,n)}function i(r,e){if(!r?.length||null==e)return!0;const n=e.slice().reverse().flatten((({sublayers:r})=>r&&r.toArray().reverse())).map((r=>r.id)).toArray();if(r.length>n.length)return!1;let i=0;const o=n.length;for(const{id:e}of r){for(;i<o&&n[i]!==e;)i++;if(i>=o)return!1}return!0}function o(r){return!!r&&r.some((r=>null!=r.minScale||null!=r.layerDefinition?.minScale))}export{n as a,o as i,e as s};

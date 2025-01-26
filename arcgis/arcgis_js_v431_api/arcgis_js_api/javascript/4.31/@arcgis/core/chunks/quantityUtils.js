/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{y as t,n}from"./unitUtils.js";function e(t){return{value:t}}function u(n,e){return{type:t(e),value:n,unit:e}}function a(n,e){return{type:t(e),value:n,unit:e}}function r(n,e,u="arithmetic"){return{type:t(e),value:n,unit:e,rotationType:u}}function i(n,e){const u=s(n,e);return"angle"===n.type?r(u,e,n.rotationType):function(n,e){return{type:t(e),value:n,unit:e}}(u,e)}function s(t,e){return n(t.value,t.unit,e)}function o(t,e){return null==t?e:null==e||t.value>n(e.value,e.unit,t.unit)?t:e}function c(t,n){return null==t?null:{...t,value:t.value*n}}function l(t,n,e){if(n===e)return t;switch(e){case"arithmetic":case"geographic":return 90-t}}const f=u(0,"meters"),p=a(0,"square-meters");r(0,"radians");const v=r(0,"degrees"),g=r(0,"degrees","geographic");export{l as a,a as b,r as c,u as d,e,v as f,p as g,g as h,o as m,c as s,i as t,s as v,f as z};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../core/lang.js";import{c as e,d as t}from"./screenUtils.js";function n(t){return e(t.x,t.y)}function c(e){return t(e.x,e.y)}function i(t,n){const c=(t instanceof HTMLElement?t:t.surface)?.getBoundingClientRect();return c?e(n.clientX-c.left,n.clientY-c.top):e(0,0)}function a(e,t){return t instanceof Event?i(e,t):n(t)}function r(e){if(e instanceof Event)return!0;if("object"==typeof e&&"type"in e)switch(e.type){case"click":case"double-click":case"pointer-down":case"pointer-drag":case"pointer-enter":case"pointer-leave":case"pointer-up":case"pointer-move":case"immediate-click":case"immediate-double-click":case"hold":case"drag":case"mouse-wheel":return!0;default:return!1}return!1}export{c as a,i as b,n as c,a as d,r as i};

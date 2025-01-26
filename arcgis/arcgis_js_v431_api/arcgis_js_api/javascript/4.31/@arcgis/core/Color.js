/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{h as t,i as r,g as s}from"./chunks/colorUtils.js";import{c as i}from"./chunks/mathUtils.js";import{d as a}from"./chunks/ensureType.js";import"./core/lang.js";import"./chunks/Logger.js";import"./config.js";function e(t){return i(a(t),0,255)}function n(t,r,s){return t=Number(t),isNaN(t)?s:t<r?r:t>s?s:t}function o(t,r){const s=t.toString(16).padStart(2,"0");return r?s.slice(0,1):s}class h{static blendColors(t,r,s,i=new h){return i.r=Math.round(t.r+(r.r-t.r)*s),i.g=Math.round(t.g+(r.g-t.g)*s),i.b=Math.round(t.b+(r.b-t.b)*s),i.a=t.a+(r.a-t.a)*s,i._sanitize()}static fromRgb(r,s){const i=r.toLowerCase().match(/^(rgba?|hsla?)\(([\s.\-,%0-9]+)\)/);if(i){const r=i[2].split(/\s*,\s*/),a=i[1];if("rgb"===a&&3===r.length||"rgba"===a&&4===r.length){const t=r[0];if("%"===t.charAt(t.length-1)){const t=r.map((t=>2.56*parseFloat(t)));return 4===r.length&&(t[3]=parseFloat(r[3])),h.fromArray(t,s)}return h.fromArray(r.map((t=>parseFloat(t))),s)}if("hsl"===a&&3===r.length||"hsla"===a&&4===r.length)return h.fromArray(t(parseFloat(r[0]),parseFloat(r[1])/100,parseFloat(r[2])/100,parseFloat(r[3])),s)}return null}static fromHex(t,r=new h){if("#"!==t[0]||isNaN(Number(`0x${t.slice(1)}`)))return null;switch(t.length){case 4:case 5:{const s=parseInt(t.slice(1,2),16),i=parseInt(t.slice(2,3),16),a=parseInt(t.slice(3,4),16),e=5===t.length?15:parseInt(t.slice(4),16);return h.fromArray([s+16*s,i+16*i,a+16*a,(e+16*e)/255],r)}case 7:case 9:{const s=parseInt(t.slice(1,3),16),i=parseInt(t.slice(3,5),16),a=parseInt(t.slice(5,7),16),e=7===t.length?255:parseInt(t.slice(7),16);return h.fromArray([s,i,a,e/255],r)}default:return null}}static fromArray(t,r=new h){return r._set(Number(t[0]),Number(t[1]),Number(t[2]),Number(t[3])),isNaN(r.a)&&(r.a=1),r._sanitize()}static fromString(t,i){const a=r(t)?s(t):null;return a&&h.fromArray(a,i)||h.fromRgb(t,i)||h.fromHex(t,i)}static fromJSON(t){return null!=t?new h([t[0],t[1],t[2],(t[3]??255)/255]):void 0}static toUnitRGB(t){return null!=t?[t.r/255,t.g/255,t.b/255]:null}static toUnitRGBA(t){return null!=t?[t.r/255,t.g/255,t.b/255,null!=t.a?t.a:1]:null}constructor(t){this.r=255,this.g=255,this.b=255,this.a=1,t&&this.setColor(t)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(t){return"string"==typeof t?h.fromString(t,this):Array.isArray(t)?h.fromArray(t,this):(this._set(t.r??0,t.g??0,t.b??0,t.a??1),t instanceof h||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(t){const r=t?.capitalize??!1,s=t?.digits??6,i=3===s||4===s,a=4===s||8===s,e=`#${o(this.r,i)}${o(this.g,i)}${o(this.b,i)}${a?o(Math.round(255*this.a),i):""}`;return r?e.toUpperCase():e}toCss(t=!1){const r=this.r+", "+this.g+", "+this.b;return t?`rgba(${r}, ${this.a})`:`rgb(${r})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(t=h.AlphaMode.ALWAYS){const r=e(this.r),s=e(this.g),i=e(this.b);return t===h.AlphaMode.ALWAYS||1!==this.a?[r,s,i,e(255*this.a)]:[r,s,i]}clone(){return new h(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(t){return null!=t&&t.r===this.r&&t.g===this.g&&t.b===this.b&&t.a===this.a}_sanitize(){return this.r=Math.round(n(this.r,0,255)),this.g=Math.round(n(this.g,0,255)),this.b=Math.round(n(this.b,0,255)),this.a=n(this.a,0,1),this}_set(t,r,s,i){this.r=t,this.g=r,this.b=s,this.a=i}}h.prototype.declaredClass="esri.Color",function(t){var r;(r=t.AlphaMode||(t.AlphaMode={}))[r.ALWAYS=0]="ALWAYS",r[r.UNLESS_OPAQUE=1]="UNLESS_OPAQUE"}(h||(h={}));const l=h;export{l as default};

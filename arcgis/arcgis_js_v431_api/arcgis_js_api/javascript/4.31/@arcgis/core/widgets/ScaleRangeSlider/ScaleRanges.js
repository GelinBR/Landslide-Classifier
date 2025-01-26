/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import n from"../../core/Accessor.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";var a;const r=147914382,s=[{id:"room",minScale:100},{id:"rooms",minScale:400},{id:"smallBuilding",minScale:800},{id:"building",minScale:1999},{id:"buildings",minScale:3999},{id:"street",minScale:7499},{id:"streets",minScale:14999},{id:"neighborhood",minScale:29999},{id:"town",minScale:59999},{id:"city",minScale:119999},{id:"cities",minScale:249999},{id:"metropolitanArea",minScale:499999},{id:"county",minScale:999999},{id:"counties",minScale:1999999},{id:"stateProvince",minScale:3999999},{id:"statesProvinces",minScale:6999999},{id:"countriesSmall",minScale:14999999},{id:"countriesBig",minScale:34999999},{id:"continent",minScale:99999999},{id:"world",minScale:r}];function c(e,n){const t=s,i=t.length,a=[];let r,c=e;e=e>=0?e:0,n=n>0?n:t[i-1].minScale;for(let s=0;s<i;s++){const i=Math.min(t[s].minScale,n);r=Math.min(i,n),e<=i&&c<n&&a.push({id:t[s].id,maxScale:Math.max(c,e),minScale:r}),c=r+1}return a.reverse(),function(e){if(0===e.length)return e;const[n]=e,t=e[e.length-1];return n.minScale===n.maxScale&&(e.shift(),n.minScale+=1),t.minScale===t.maxScale&&(e.pop(),t.maxScale-=1),e}(a)}let l=a=class extends n{constructor(){super(...arguments),this.ranges=[]}static fromScaleRange({maxScale:e,minScale:n}){return new a({ranges:c(e,n)})}static async fromLayer(e){await e.when();const n="tileInfo"in e?e.tileInfo?.lods:void 0;let t;return t=n?c(n[n.length-1].scale,n[0].scale):c(0,0),new a({ranges:t})}get firstRange(){return this.ranges[0]}get lastRange(){const e=this.ranges;return e[e.length-1]}get length(){return this.ranges.length}get maxScale(){return this.lastRange.maxScale}get minScale(){return this.firstRange.minScale}isMinScaleEdge(e){const{firstRange:n}=this,t=n.minScale,i=a.RecommendedScales[n.id]||n.maxScale;return e<=t&&e>=i}isMaxScaleEdge(e){const{lastRange:n}=this,t=n.maxScale;return e<=(a.RecommendedScales[n.id]||n.minScale)&&e>=t}findScaleRange(e){const n=this.ranges;let t;if(e>=n[0].maxScale)return n[0];if(e<=n[n.length-1].minScale)return n[n.length-1];for(let i=0;i<n.length;i++){const a=n[i];if(e>=a.maxScale&&e<=a.minScale){t=a;break}}return t}findScaleRangeByIndex(e){return this.ranges[this._clampScaleRangeIndex(e)]}scaleToRangeIndex(e){return this.ranges.indexOf(this.findScaleRange(e))}clampScale(e){return Math.min(this.minScale,Math.max(this.maxScale,e))}clampMinScale(e){return 0===e?this.minScale:this.clampScale(e)}clampMaxScale(e){return this.clampScale(e)}contains(e){const n=this.ranges;let t=!1;for(let i=0;i<n.length;i++){const{maxScale:a,minScale:r}=n[i];if(e>=a&&e<=r){t=!0;break}}return t}_clampScaleRangeIndex(e){if(e<=0)return 0;const n=this.ranges.length-1;return e>n?n:Math.floor(e)}};l.RecommendedScales=Object.freeze({world:r,continent:5e7,countriesBig:25e6,countriesSmall:12e6,statesProvinces:6e6,stateProvince:3e6,counties:15e5,county:75e4,metropolitanArea:32e4,cities:16e4,city:8e4,town:4e4,neighborhood:2e4,streets:1e4,street:5e3,buildings:2500,building:1250,smallBuilding:800,rooms:400,room:100}),e([t()],l.prototype,"firstRange",null),e([t()],l.prototype,"lastRange",null),e([t()],l.prototype,"length",null),e([t()],l.prototype,"maxScale",null),e([t()],l.prototype,"minScale",null),e([t({constructOnly:!0})],l.prototype,"ranges",void 0),l=a=e([i("esri.widgets.ScaleRangeSlider.ScaleRanges")],l);const o=l;export{o as default};

// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["../lang","./PropertyOrigin"],function(g,e){class h{constructor(){this._propertyOriginMap=new Map;this._originStores=Array(e.originIdNum);this._values=new Map;this.multipleOriginsSupported=!0}clone(a){const b=new h;var c=this._originStores[e.OriginId.DEFAULTS];c&&c.forEach((d,f)=>{b.set(f,g.clone(d),e.OriginId.DEFAULTS)});for(let d=e.OriginId.SERVICE;d<e.originIdNum;d++)(c=this._originStores[d])&&c.forEach((f,k)=>{a&&a.has(k)||b.set(k,g.clone(f),d)});return b}get(a,b){return(b=void 0===b?
this._values:this._originStores[b])?b.get(a):void 0}keys(a){return(a=null==a?this._values:this._originStores[a])?[...a.keys()]:[]}set(a,b,c=e.OriginId.USER){var d=this._originStores[c];d||(d=new Map,this._originStores[c]=d);d.set(a,b);return!this._values.has(a)||this._propertyOriginMap.get(a)<=c?(d=this._values.get(a),this._values.set(a,b),this._propertyOriginMap.set(a,c),d!==b):!1}delete(a,b=e.OriginId.USER){var c=this._originStores[b];if(c){var d=c.get(a);c.delete(a);if(this._values.has(a)&&this._propertyOriginMap.get(a)===
b)for(this._values.delete(a),--b;0<=b;b--)if((c=this._originStores[b])&&c.has(a)){this._values.set(a,c.get(a));this._propertyOriginMap.set(a,b);break}return d}}has(a,b){return(b=void 0===b?this._values:this._originStores[b])?b.has(a):!1}revert(a,b){for(;0<b&&!this.has(a,b);)--b;const c=this._originStores[b]?.get(a),d=this._values.get(a);this._values.set(a,c);this._propertyOriginMap.set(a,b);return d!==c}originOf(a){return this._propertyOriginMap.get(a)||e.OriginId.DEFAULTS}forEach(a){this._values.forEach(a)}}
return h});
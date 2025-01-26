// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./locale"],function(e,f){function g(a){const b=a||l;if(!h.has(b)){var d=f.getLocale();d=p[f.getLocale()]||d;h.set(b,new Intl.NumberFormat(d,a))}return h.get(b)}const p={ar:"ar-u-nu-latn"};let h=new WeakMap,l={};f.beforeLocaleChange(()=>{h=new WeakMap;l={}});const m=new Map;e.convertNumberFormatToIntlOptions=function(a={}){const b={};null!=a.digitSeparator&&(b.useGrouping=a.digitSeparator);null!=a.places&&(b.minimumFractionDigits=b.maximumFractionDigits=a.places);return b};e.formatNumber=
function(a,b){Object.is(a,-0)&&(a=0);return g(b).format(a)};e.getFormatter=g;e.parseNumber=function(a,b=f.getLocale()){if(!a)return null;var d=m.get(b);if(!d){d=g().formatToParts(12345.6);const n=[...g({useGrouping:!1}).format(9876543210)].reverse(),q=new Map(n.map((c,k)=>[c,k])),r=new RegExp(`[${d.find(c=>"group"===c.type)?.value}]`,"g"),t=new RegExp(`[${d.find(c=>"decimal"===c.type)?.value}]`),u=new RegExp(`[${n.join("")}]`,"g"),v=/[\u200E\u200F\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069\u061C]/g,
w=/[-\u2212\u2013\u2014\u2015]/g;d=c=>{c=c.trim().replaceAll(r,"").replace(t,".").replace(u,k=>String(q.get(k))).replaceAll(v,"").replaceAll(w,"-");if(""===c)return null;c=Number(c);return isNaN(c)?null:c};m.set(b,d)}return d(a)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
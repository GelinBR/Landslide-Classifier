// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../assets","../has","../urlUtils"],function(d,e,l,f){d.defaultLoaderUrl=null;d.defaultLoaderUrl=f.makeAbsolute(e.getAssetUrl("esri/core/workers/init.js"));const b={};b.baseUrl=f.makeAbsolute(e.getAssetUrl("dojo/"));b.packages=[{name:"esri",location:"../esri"}];d.loaderConfig=function(a){const c={async:a.async,isDebug:a.isDebug,locale:a.locale,baseUrl:a.baseUrl,has:{...a.has},map:{...a.map},packages:a.packages?.slice()||[],paths:{...b.paths,...a.paths}};a.hasOwnProperty("async")||
(c.async=!0);a.hasOwnProperty("isDebug")||(c.isDebug=!1);a.baseUrl||(c.baseUrl=b.baseUrl);b.packages?.forEach(g=>{a:{var h=c.packages??[];for(const k of h)if(k.name===g.name)break a;h.push(g)}});return c};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
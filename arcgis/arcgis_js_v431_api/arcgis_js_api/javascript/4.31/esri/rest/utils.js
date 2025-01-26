// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../config ../kernel ../core/lang ../core/urlUtils ../support/apiKeyUtils".split(" "),function(e,h,k,l,m,n){function g(a,c,p){const f={};for(const d in a)if("declaredClass"!==d){var b=a[d];null!=b&&"function"!==typeof b&&(Array.isArray(b)?f[d]=b.map(q=>g(q)):"object"===typeof b?b.toJSON?(b=b.toJSON(p?.[d]),f[d]=c?b:JSON.stringify(b)):f[d]=c?b:JSON.stringify(b):f[d]=b)}return f}e.asValidOptions=function(a,c){return c?{...c,query:{...(a??{}),...c.query}}:{query:a}};e.encode=g;e.getToken=
function(a,c){return a?n.isApiKeyApplicable(a,c)?c||h.apiKey:k.id?.findCredential(a)?.token:null};e.parseUrl=function(a){return"string"===typeof a?m.urlToObject(a):l.clone(a)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
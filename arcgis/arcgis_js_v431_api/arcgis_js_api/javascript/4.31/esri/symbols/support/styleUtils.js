// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../core/Error ../../core/has ../../core/promiseUtils ../../core/urlUtils ../../portal/Portal ../../portal/PortalQueryParams ./styleCache".split(" "),function(g,p,k,q,r,l,t,u,m){async function v(a,b){try{return{data:(await n(a,b)).data,baseUrl:l.removeFile(a),styleUrl:a}}catch(c){return r.throwIfAbortError(c),null}}function w(a,b,c){const d=null!=b.portal?b.portal:t.getDefault();let f;b=`${d.url} - ${d.user?.username} - ${a}`;const h=m.cachedStyles.get(b);if(h)return h;
c=x(a,d,c).then(e=>{f=e;return e.fetchData()}).then(e=>({data:e,baseUrl:f.itemUrl??"",styleName:a}));m.cachedStyles.set(b,c);return c}function x(a,b,c){return b.load(c).then(()=>{const d=new u({disableExtraQuery:!0,query:`owner:${"esri_en"} AND type:${"Style"} AND typekeywords:"${a}"`});return b.queryItems(d,c)}).then(({results:d})=>{let f=null;const h=a.toLowerCase();if(d&&Array.isArray(d))for(const e of d)if(e.typeKeywords?.some(y=>y.toLowerCase()===h)&&"Style"===e.type&&"esri_en"===e.owner){f=
e;break}if(!f)throw new k("symbolstyleutils:style-not-found",`The style '${a}' could not be found`,{styleName:a});return f.load(c)})}function n(a,b){b={responseType:"json",query:{f:"json"},...b};return p(l.normalize(a),b)}g.Style2DUrlTemplate="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f\x3djson";g.fetchStyle=function(a,b,c){return null!=a?.styleUrl?v(a.styleUrl,c):null!=a?.styleName?w(a.styleName,b,c):Promise.reject(new k("symbolstyleutils:style-url-and-name-missing",
"Either styleUrl or styleName is required to resolve a style"))};g.makeCIMSymbolRef=function(a){return null===a||"CIMSymbolReference"===a.type?a:{type:"CIMSymbolReference",symbol:a}};g.requestJSON=n;g.symbolUrlFromStyleItem=function(a,b,c=["gltf"]){if("cimRef"===b)return encodeURI(a.cimRef);if(a.formatInfos&&!q("enable-feature:force-wosr"))for(const d of c)if(b=a.formatInfos.find(f=>f.type===d))return b.href;return encodeURI(a.webRef)};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
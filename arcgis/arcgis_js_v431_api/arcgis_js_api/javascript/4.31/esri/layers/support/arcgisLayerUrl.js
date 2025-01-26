// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/urlUtils","../../chunks/persistableUrlUtils"],function(d,f,q){function h(a){if(null==a)return null;a=f.urlToObject(a);a=a?.path.match(m)||a?.path.match(r);if(!a)return null;const [,b,c,e,g]=a;a=c.indexOf("/");return{title:k(-1!==a?c.slice(a+1):c),serverType:n[e.toLowerCase()],sublayer:null!=g&&""!==g?parseInt(g,10):null,url:{path:b}}}function p(a){return(a=f.urlToObject(a).path.match(t))?{serviceUrl:a[1],sublayerId:Number(a[2])}:null}function k(a){a=a.replaceAll(/\s*[/_]+\s*/g,
" ");return a[0].toUpperCase()+a.slice(1)}const n={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",knowledgegraphserver:"KnowledgeGraphServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer","3dtilesserver":"3DTilesServer",videoserver:"VideoServer"},l=Object.values(n),m=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${l.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),r=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^/\\n]+)\\/(${l.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,
"i"),t=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;d.cleanTitle=k;d.isArcGISUrl=function(a){return m.test(a)};d.isHostedAgolService=function(a){a=f.getOrigin(a,!0);if(!a)return!1;a=a.toLowerCase();return a.endsWith(".arcgis.com")&&(a.startsWith("services")||a.startsWith("tiles")||a.startsWith("features"))};d.isServerOrServicesAGOLUrl=function(a){if(!a)return!1;a=(new f.Url(f.makeAbsolute(a))).authority?.toLowerCase();return"server.arcgisonline.com"===a||"services.arcgisonline.com"===a};d.isWmsServer=function(a){if(!a)return!1;
var b=a.toLowerCase();a=b.includes("/services/");const c=b.includes("/mapserver/wmsserver"),e=b.includes("/imageserver/wmsserver");b=b.includes("/wmsserver");return a&&(c||e||b)};d.parse=h;d.parseNonStandardSublayerUrl=p;d.sanitizeUrl=function(a,b){return a?f.removeTrailingSlash(f.removeQueryParameters(a,b)):a};d.sanitizeUrlWithLayerId=function(a){let {url:b}=a;if(!b)return{url:b};b=f.removeQueryParameters(b,a.logger);const c=f.urlToObject(b),e=h(c.path);let g=void 0;null!=e?(null!=e.sublayer&&null==
a.layer.layerId&&(g=e.sublayer),b=e.url.path):a.nonStandardUrlAllowed&&(a=p(c.path),null!=a&&(b=a.serviceUrl,g=a.sublayerId));return{url:f.removeTrailingSlash(b),layerId:g}};d.serverTypes=l;d.titleFromUrlAndName=function(a,b){const c=[];a&&(a=h(a),null!=a&&a.title&&c.push(a.title));b&&(b=k(b),c.push(b));if(2===c.length){if(c[0].toLowerCase().includes(c[1].toLowerCase()))return c[0];if(c[1].toLowerCase().includes(c[0].toLowerCase()))return c[1]}return c.join(" - ")};d.writeUrlWithLayerId=function(a,
b,c,e,g){q.write(b,e,"url",g);e.url&&null!=a.layerId&&(e.url=f.join(e.url,c,a.layerId.toString()))};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
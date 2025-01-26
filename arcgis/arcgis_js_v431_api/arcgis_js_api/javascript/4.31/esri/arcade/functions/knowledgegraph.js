// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../config ../../geometry ../ArcadePortal ../Dictionary ../executionError ../../chunks/languageUtils ../portalUtils ../../geometry/Geometry ../../geometry/projection ../../geometry/support/webMercatorUtils ../../portal/Portal ../../portal/PortalItem ../../rest/geometryService/project ../../rest/knowledgeGraph/Entity ../../rest/knowledgeGraph/GraphQueryStreaming ../../rest/knowledgeGraph/ObjectValue ../../rest/knowledgeGraph/Path ../../rest/knowledgeGraph/Relationship ../../rest/support/ProjectParameters ../../geometry/SpatialReference".split(" "),
function(v,w,D,Q,E,x,h,f,F,y,q,z,A,G,H,I,J,K,L,M,N,B){async function O(a){var b=D.geometryServiceUrl??"";if(b){var d=a.map(e=>e.container[e.indexer]);d=new N({geometries:d,outSpatialReference:B.WGS84});b=await H.project(b,d);for(d=0;d<b.length;d++){const e=a[d];e.container[e.indexer]=b[d]}}else{q.isLoaded()||await q.load();for(d of a)d.container[d.indexer]=q.project(d.container[d.indexer],B.WGS84)}}async function C(a,b){a=new G({portal:a,id:b});await a.load();null===n&&(n=await new Promise((d,e)=>
v(["../../rest/knowledgeGraphService"],d,e)));return await n.fetchKnowledgeGraph(a.url)}function r(a,b,d,e,g){if(null===a)return null;if(f.isString(a)||f.isNumber(a))return a;if(f.isDate(a)||f.isDate(a))return a.toJSDate();if(f.isDateOnly(a))return a.toStorageFormat();if(f.isTime(a))return a.toStorageString();if(f.isDictionary(a)){var c={};for(const l of a.keys())c[l]=r(a.field(l),b,d,e,g),c[l]instanceof y&&g.push({container:c,indexer:l});return c}if(f.isArray(a)){a=a.map(l=>r(l,b,d,e,g));for(c=0;c<
a.length;c++)a[c]instanceof y&&g.push({container:a,indexer:c});return a}if(f.isGeometry(a))return a.spatialReference.isWGS84?a:a.spatialReference.isWebMercator&&b?z.webMercatorToGeographic(a):a}function P(a,b){if(!a)return a;if(a.spatialReference.isWGS84&&b.spatialReference.isWebMercator)return z.geographicToWebMercator(a);if(a.spatialReference.equals(b.spatialReference))return a;throw new h.ArcadeExecutionError(b,h.ExecutionErrorCodes.WrongSpatialReference,null);}function t(a,b){if(!a)return null;
const d={};for(const e in a)d[e]=p(a[e],b);return d}function p(a,b){return null===a?null:f.isArray(a)?a.map(d=>p(d,b)):a instanceof I?{graphTypeName:a.typeName,id:a.id,graphType:"entity",properties:t(a.properties,b)}:a instanceof K?{graphType:"object",properties:t(a.properties,b)}:a instanceof M?{graphTypeName:a.typeName,id:a.id,graphType:"relationship",originId:a.originId??null,destinationId:a.destinationId??null,properties:t(a.properties,b)}:a instanceof L?{graphType:"path",path:a.path?a.path.map(d=>
p(d,b)):null}:f.isGeometry(a)?P(a,b):f.isString(a)||f.isNumber(a)||f.isJsDate(a)?a:null}let n=null;w.registerFunctions=function(a){"async"===a.mode&&(a.functions.knowledgegraphbyportalitem=function(b,d){return a.standardFunctionAsync(b,d,(e,g,c)=>{f.pcCheck(c,2,2,b,d);if(null===c[0])throw new h.ArcadeExecutionError(b,h.ExecutionErrorCodes.PortalRequired,d);if(c[0]instanceof E)return e=f.toString(c[1]),g=b.services?.portal?b.services.portal:A.getDefault(),c=F.getPortal(c[0],g),C(c,e);if(!1===f.isString(c[0]))throw new h.ArcadeExecutionError(b,
h.ExecutionErrorCodes.InvalidParameter,d);c=f.toString(c[0]);e=b.services?.portal??A.getDefault();return C(e,c)})},a.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),a.functions.querygraph=function(b,d){return a.standardFunctionAsync(b,d,async(e,g,c)=>{f.pcCheck(c,2,4,b,d);e=c[0];if(!f.isKnowledgeGraph(e))throw new h.ArcadeExecutionError(b,h.ExecutionErrorCodes.InvalidParameter,d);g=c[1];if(!f.isString(g))throw new h.ArcadeExecutionError(b,h.ExecutionErrorCodes.InvalidParameter,d);
null===n&&(n=await new Promise((k,m)=>v(["../../rest/knowledgeGraphService"],k,m)));let l=null;c=f.defaultUndefined(c[2],null);if(!(c instanceof x||null===c))throw new h.ArcadeExecutionError(b,h.ExecutionErrorCodes.InvalidParameter,d);if(c){let k=[];l=r(c,!0,!1,b,k);k=k.filter(m=>!m.container[m.indexer].spatialReference.isWGS84);0<k.length&&await O(k)}c=new J({openCypherQuery:g,bindParameters:l});11.2<(e?.serviceDefinition?.currentVersion??11.3)&&(c.outputSpatialReference=b.spatialReference);e=(await n.executeQueryStreaming(e,
c)).resultRowsStream.getReader();c=[];try{for(;;){const {done:k,value:m}=await e.read();if(k)break;if(f.isArray(m))for(const u of m)c.push(p(u,b));else{g=[];for(const u of m)g.push(p(m[u],b));c.push(g)}}}catch(k){throw k;}return x.convertJsonToArcade(c,f.defaultTimeZone(b),!1,!0)})},a.signatures.push({name:"querygraph",min:2,max:4}))};Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../utils","./support/QueryNamedTraceConfigurationsResult"],function(f,g,e,h){f.queryNamedTraceConfigurations=async function(d,a,b){d=e.parseUrl(d);const c=a.toJSON();a.globalIds&&0<a.globalIds.length&&(c.globalIds=JSON.stringify(a.globalIds));a.creators&&0<a.creators.length&&(c.creators=JSON.stringify(a.creators));a.tags&&0<a.tags.length&&(c.tags=JSON.stringify(a.tags));a.names&&0<a.names.length&&(c.names=JSON.stringify(a.names));a=e.encode({...d.query,...c,f:"json"});
b=e.asValidOptions(a,{...b,method:"post"});({data:b}=await g(`${d.path}/traceConfigurations/query`,b));return h.fromJSON(b)};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
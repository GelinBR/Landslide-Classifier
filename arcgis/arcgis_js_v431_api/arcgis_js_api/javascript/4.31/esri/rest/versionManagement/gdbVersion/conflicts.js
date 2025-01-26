// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../request ../../../core/Error ../../utils ./serverVersionUtils ./support/ConflictsResult".split(" "),function(d,k,h,e,l,m){const c=new Map;d.conflicts=async function(a,b,f,g){c.has(a)||await l.addServerVersion(c,a);if(11.1>=(c.get(a)?.serverVersion??0))throw new h("conflicts:enterprise-version","versioning API requires ArcGIS Enterprise version 11.2 or higher");if(!b)throw new h("conflicts:missing-guid","guid for version is missing");a=e.parseUrl(a);f=f.toJSON();g=e.asValidOptions(a.query,
{query:e.encode({...f,f:"json"}),...g,method:"post"});b.startsWith("{")&&(b=b.slice(1,-1));({data:b}=await k(`${a.path}/versions/${b}/conflicts`,g));return m.fromJSON(b)};d.serverVersionCacheMap=c;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
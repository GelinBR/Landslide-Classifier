// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../geometry ../request ../core/accessorSupport/ensureType ../portal/Portal ./utils ./support/FetchPlaceParameters ./support/PlacesQueryParameters ./support/PlacesQueryResult ../views/support/projectionUtils ../geometry/SpatialReference".split(" "),function(e,v,l,k,m,f,t,n,u,p,q){async function r(a,c,b,d){c={...c,categoryIds:b.categoryIds?.join(),icon:b.icon,offset:b.offset,pageSize:b.pageSize,searchText:b.searchText,token:b.apiKey};c=f.asValidOptions(c,d);({data:c}=await l(a,c));a=
new u({results:c.results});const {pagination:g,links:h}=c;if(g?.nextUrl||h?.next)a.nextQueryParams=b.clone(),c=f.parseUrl(g?.nextUrl||h?.next).query,a.nextQueryParams.offset=Number(c.offset);if(g?.previousUrl||h?.previous)a.previousQueryParams=b.clone(),b=f.parseUrl(g?.previousUrl||h?.previous).query,a.previousQueryParams.offset=Number(b.offset);return a}e.fetchPlace=async function(a,c){a=k.ensureClass(t,a);const b={icon:a.icon,requestedFields:a.requestedFields?.join(),token:a.apiKey};c=f.asValidOptions(b,
c);({data:a}=await l(`${a.url}/places/${a.placeId}`,c));return a};e.queryPlacesNearPoint=async function(a,c){a=k.ensureClass(n,a);const b={radius:a.radius};let d=a.point;d&&!d.spatialReference.isWGS84&&(d=await p.projectWithEngineOrService(d,q.WGS84,m.getDefault(),c?.signal));d&&(b.x=d.x,b.y=d.y);return r(`${a.url}/places/near-point`,b,a,c)};e.queryPlacesWithinExtent=async function(a,c){a=k.ensureClass(n,a);const b={};let d=a.extent;d&&!d.spatialReference.isWGS84&&(d=await p.projectWithEngineOrService(d,
q.WGS84,m.getDefault(),c?.signal));d&&(b.xmin=d.xmin,b.ymin=d.ymin,b.xmax=d.xmax,b.ymax=d.ymax);return r(`${a.url}/places/within-extent`,b,a,c)};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./Dictionary ./executionError ./ImmutablePathArray ./ImmutablePointArray ../chunks/languageUtils ../core/Accessor".split(" "),function(f,m,g,h,n,d,p){function k(a,b,c,q,l=1){b=b.toLowerCase();switch(b){case "hasz":return a=a.hasZ,void 0===a?!1:a;case "hasm":return a=a.hasM,void 0===a?!1:a;case "spatialreference":return b=a.spatialReference._arcadeCacheId,void 0===b&&(c=!0,p.isFrozen(a.spatialReference)&&(c=!1),c&&(e++,b=a.spatialReference._arcadeCacheId=e)),a=new m({wkt:a.spatialReference.wkt,
wkid:a.spatialReference.wkid}),void 0!==b&&(a._arcadeCacheId="SPREF"+b.toString()),a}switch(a.type){case "extent":switch(b){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return a=a[b],void 0!==a?a:null;case "type":return"Extent"}break;case "polygon":switch(b){case "rings":return b=a.cache._arcadeCacheId,void 0===b&&(e++,b=e,a.cache._arcadeCacheId=b),new h(a.rings,a.spatialReference,!0===a.hasZ,!0===a.hasM,b);case "type":return"Polygon"}break;case "point":switch(b){case "x":case "y":case "z":case "m":return a[b]??
null;case "type":return"Point"}break;case "polyline":switch(b){case "paths":return b=a.cache._arcadeCacheId,void 0===b&&(e++,b=e,a.cache._arcadeCacheId=b),new h(a.paths,a.spatialReference,!0===a.hasZ,!0===a.hasM,b);case "type":return"Polyline"}break;case "multipoint":switch(b){case "points":return b=a.cache._arcadeCacheId,void 0===b&&(e++,b=e,a.cache._arcadeCacheId=b),new n(a.points,a.spatialReference,!0===a.hasZ,!0===a.hasM,b,1);case "type":return"Multipoint"}}if(1===l)throw new g.ArcadeExecutionError(c,
g.ExecutionErrorCodes.InvalidIdentifier,q);return 2===l?{keystate:"notfound"}:null}let e=0;f.geometryMember=k;f.getNestedOptionalValue=function(a,b){if(null==a)return null;if(!d.isArray(b))if(d.isImmutableArray(b))b=b.toArray();else if(null!=b)b=[b];else return null;for(const c of b){if(d.isFeature(a)){if(!1===d.isString(c)||!a.hasField(c))return null;a=a.field(c)}else if(d.isDictionary(a)){if(!1===d.isString(c)||!a.hasField(c))return null;a=a.field(c)}else if(d.isGeometry(a)){if(!1===d.isString(c))return null;
a=k(a,c,null,null,0)}else if(d.isArray(a)){if(!1===d.isNumber(c))return null;a=0<=c?a[c]:a[a.length+c]}else if(d.isImmutableArray(a)){if(!1===d.isNumber(c))return null;a=0<=c?a.get(c):a.get(a.length()+c)}else return null;if(null==a)return null}return a};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
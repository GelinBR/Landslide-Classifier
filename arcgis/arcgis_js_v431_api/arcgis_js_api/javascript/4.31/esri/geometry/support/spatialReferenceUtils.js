// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/string","../../chunks/pe","./SupportedGCSWkids","./WKIDUnitConversion"],function(c,n,d,h,A){function p(a){return/^\s*(?:GEOD|GEODETIC|GEOG|GEOGRAPHIC|PROJ|PROJECTED|VERT|VERTICAL|ENG|ENGINEERING|PARAMETRIC|TIME|DERIVEDPROJ|COMPOUND|BOUND)CRS/i.test(a)}function q(a){a=a?.wkid;return null!=a&&2E3<=a&&t.includes(a)}function u(a){return a===h.SupportedGCSWkids.GCSMARS2000||a===h.SupportedGCSWkids.GCSMARS2000_SPHERE}function v(a){return u(a?.wkid)}function w(a){return a===
h.SupportedGCSWkids.GCSMOON2000}function x(a){return w(a?.wkid)}function y(a){if(null==a)return!1;const b=a.wkid;return null!=b&&2E3<=b?!0:null!=a.wkt2||null!=a.wkt}const t=[102100,102113,3857,3785,900913],B=[4326,...t,104905,104971],k=[-2.0037508342788905E7,2.0037508342788905E7],l=[-2.0037508342787E7,2.0037508342787E7],r={wkTemplate:'PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',
valid:k,origin:l,dx:1E-5},z={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:k,origin:l,dx:1E-5},
102100:r,3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:k,origin:l,dx:1E-5},3857:r,4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',
altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1E-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',
valid:[-180,180],origin:[-180,90],dx:1E-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1E-5},900913:r};n={wkid:4326,wkt:n.replace(z[4326].wkTemplate,{Central_Meridian:"0.0"})};c.equals=function(a,b){if(a===b)return!0;if(null==a||null==b)return!1;const e=a.wkid,f=b.wkid;if(null!=e||null!=f){if(e===f||q(a)&&q(b))return!0;
a=a.latestWkid;if(null!=a&&f===a)return!0;b=b.latestWkid;return null!=b&&e===b?!0:!1}let g,m;a.wkt2&&b.wkt2?(g=a.wkt2,m=b.wkt2):a.wkt&&b.wkt&&(g=a.wkt,m=b.wkt);return g&&m?g.toUpperCase()===m.toUpperCase():!1};c.equalsWithProjectionEngine=async function(a,b){if(a===b)return!0;d.isLoaded()||await d.load();const e=f=>{const g=f.wkt2||f.wkt;return g?d.PeFactory.fromString(d.PeDefs.PE_TYPE_NONE,g)?.getCode():(f=f.wkid??f.latestWkid)?d.PeFactory.coordsys(f)?.getCode():null};a=a?e(a):null;b=b?e(b):null;
return null!=a&&null!=b&&a===b};c.getInfo=function(a){a=a?.wkid;return null!=a&&2E3<=a?z[a]||null:null};c.getWktFromWkt=async function(a,b){if(1===b&&!p(a)||2===b&&p(a))return a;d.isLoaded()||await d.load();return d.PeFactory.fromString(d.PeDefs.PE_TYPE_NONE,a)?.toString(1===b?d.PeDefs.PE_STR_FMT_WKT:d.PeDefs.PE_STR_FMT_WKT2)??null};c.isCGCS2000=function(a){return a?.wkid===h.SupportedGCSWkids.CGCS2000};c.isEarth=function(a){return!(v(a)||x(a))};c.isGeographic=function(a){if(!y(a))return!1;const {wkid:b}=
a;return b?null==A[b]:(a=a.wkt2||a.wkt)?/^\s*(?:GEOGCS|GEOGCRS|GEOGRAPHICCRS)/i.test(a):!1};c.isMars=v;c.isMoon=x;c.isPlateCarree=function(a){return 32662===a?.wkid};c.isValid=y;c.isWGS84=function(a){return 4326===a?.wkid};c.isWKIDFromMars=u;c.isWKIDFromMoon=w;c.isWKT2=p;c.isWebMercator=q;c.isWrappable=function(a){a=a?.wkid;return null!=a&&2E3<=a&&B.includes(a)};c.plateCarree={wkid:32662};c.srToRESTValue=function(a){if(a){var {wkid:b,vcsWkid:e}=a;if(b)return e?JSON.stringify({wkid:b,vcsWkid:e}):String(b);
a=a.wkt||a.wkt2;return JSON.stringify(a?e?{wkt:a,vcsWkid:e}:{wkt:a}:{})}};c.webMercator={wkid:102100,latestWkid:3857};c.webMercatorOrigin=l;c.webMercatorValid=k;c.wgs84=n;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
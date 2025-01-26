// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./core/accessorSupport/ensureType ./geometry/Extent ./geometry/Geometry ./geometry/Multipoint ./geometry/Point ./geometry/Polygon ./geometry/Polyline ./geometry/SpatialReference ./geometry/support/typeUtils ./geometry/support/jsonUtils".split(" "),function(a,b,d,c,e,f,g,h,m,k,n){const l={base:c,key:"type",typeMap:{extent:d,multipoint:e,point:f,polyline:h,polygon:g}};b=b.ensureOneOfType(l);a.Extent=d;a.BaseGeometry=c;a.Multipoint=e;a.Point=f;a.Polygon=g;a.Polyline=h;a.SpatialReference=
m;a.featureGeometryTypeKebabDictionary=k.featureGeometryTypeKebabDictionary;a.typeKebabDictionary=k.typeKebabDictionary;a.fromJSON=n.fromJSON;a.ensureType=b;a.geometryTypes=l;a.isGeometry=function(p){return p instanceof c};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
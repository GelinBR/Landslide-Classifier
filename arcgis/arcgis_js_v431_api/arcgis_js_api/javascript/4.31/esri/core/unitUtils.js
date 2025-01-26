// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./has ./jsonMap ../geometry/ellipsoidUtils ../geometry/support/Ellipsoid ../geometry/support/spatialReferenceUtils ../geometry/support/WKIDUnitConversion".split(" "),function(c,q,k,K,r,t,n){function p(a){a=L[a];if(!a)throw Error("unknown type");return a}function x(a){return l[a].baseUnit}function u(a,b=null){b=b||p(a);return l[b].baseUnit===a}function f(a,b,d){if(b===d)return a;const e=p(b);if(e!==p(d))throw Error("incompatible units");a=u(b,e)?a:a*l[e].units[b].inBaseUnits;return u(d,
e)?a:a/l[e].units[d].inBaseUnits}function y(a){switch(a){case "metric":return"meters";case "imperial":return"feet";default:return a}}function z(a,b){a=f(a,b,"meters");return 3E3>Math.abs(a)?"meters":"kilometers"}function A(a,b){a=f(a,b,"meters");return 1E5>Math.abs(a)?"meters":"kilometers"}function B(a,b){a=f(a,b,"feet");return 1E3>Math.abs(a)?"feet":"miles"}function C(a,b){a=f(a,b,"feet");return 1E5>Math.abs(a)?"feet":"miles"}function D(a){return M.fromJSON(a.toLowerCase())||null}function E(a){const b=
m(a),d=K.getReferenceEllipsoid(a).metersPerDegree;return b>=d?"meters":g(a)}function m(a,b=r.earth.metersPerDegree){return F(a,!0)??b}function F(a,b=!1){const d=a?.wkid??null;a=a?.wkt2??a?.wkt??null;let e=null;if(d){if(t.isWKIDFromMars(d))return r.mars.metersPerDegree;if(t.isWKIDFromMoon(d))return r.moon.metersPerDegree;e=h.values[h[d]];!e&&b&&G.has(d)&&(e=N)}else a&&(v(a)?e=H(I.exec(a),e):/^GEOCCS/i.test(a)&&(e=H(J.exec(a),e)));return e}function H(a,b){return a?.[1]?parseFloat(a[1].split(",")[1]):
b}function g(a){var b=a?.wkid??null,d=a?.wkt2??a?.wkt??null;a=null;if(b)a=h.units[h[b]];else if(d&&(b=v(d)?I:/^GEOCCS/i.test(d)?J:null)&&(b=b.exec(d),b?.[1]&&(b=b[1],a=/[\\"']{1}([^\\"']+)/.exec(b)?.[1],!a||!h.units.includes(a)))){b=parseFloat(b.split(",")[1]);a=null;d=h.values;for(let e=0;e<d.length;++e)if(1E-7>Math.abs(b-d[e])){a=h.units[e];break}}return null!=a?D(a):null}function v(a){return/^\s*(?:PROJCS|PROJCRS|PROJECTEDCRS)/i.test(a)}const N=r.earth.radius*Math.PI/200,I=/(?:LENGTH)?UNIT\[([^\]]+)]]$/i,
h=n,J=/UNIT\[([^\]]+)]/i,G=new Set([4305,4807,4810,4811,4812,4816,4819,4821,4901,4902,37225,104025,104026,104139,104140]),M=k.strict()({meter:"meters",foot:"feet",foot_us:"us-feet",foot_clarke:"clarke-feet",yard_clarke:"clarke-yards",link_clarke:"clarke-links",yard_sears:"sears-yards",foot_sears:"sears-feet",chain_sears:"sears-chains",chain_benoit_1895_b:"benoit-1895-b-chains",yard_indian:"indian-yards",yard_indian_1937:"indian-1937-yards",foot_gold_coast:"gold-coast-feet",chain:"chains",chain_sears_1922_truncated:"sears-1922-truncated-chains",
"50_kilometers":"50-kilometers","150_kilometers":"150-kilometers"});q={millimeters:{inBaseUnits:.001},centimeters:{inBaseUnits:.01},decimeters:{inBaseUnits:.1},meters:{inBaseUnits:1},kilometers:{inBaseUnits:1E3},inches:{inBaseUnits:.0254},feet:{inBaseUnits:.3048},yards:{inBaseUnits:.9144},miles:{inBaseUnits:1609.344},"nautical-miles":{inBaseUnits:1852},"us-feet":{inBaseUnits:1200/3937},"clarke-feet":{inBaseUnits:.3047972654},"clarke-yards":{inBaseUnits:.9143917962},"clarke-links":{inBaseUnits:.201166195164},
"sears-yards":{inBaseUnits:.9143984146160287},"sears-feet":{inBaseUnits:.3047994715386762},"sears-chains":{inBaseUnits:20.11676512155263},"benoit-1895-b-chains":{inBaseUnits:20.11678249437587},"indian-yards":{inBaseUnits:.9143985307444408},"indian-1937-yards":{inBaseUnits:.91439523},"gold-coast-feet":{inBaseUnits:.3047997101815088},chains:{inBaseUnits:20.1168},"sears-1922-truncated-chains":{inBaseUnits:20.116756},"50-kilometers":{inBaseUnits:5E4},"150-kilometers":{inBaseUnits:15E4}};n={"square-millimeters":{inBaseUnits:1E-6},
"square-centimeters":{inBaseUnits:1E-4},"square-decimeters":{inBaseUnits:.1*.1},"square-meters":{inBaseUnits:1},"square-kilometers":{inBaseUnits:1E6},"square-inches":{inBaseUnits:6.4516E-4},"square-feet":{inBaseUnits:.09290304},"square-yards":{inBaseUnits:.83612736},"square-miles":{inBaseUnits:2589988.110336},"square-us-feet":{inBaseUnits:(a=>a*a)(1200/3937)},acres:{inBaseUnits:4046.8564224},ares:{inBaseUnits:100},hectares:{inBaseUnits:1E4}};const l={length:{baseUnit:"meters",units:q},area:{baseUnit:"square-meters",
units:n},volume:{baseUnit:"liters",units:{liters:{inBaseUnits:1},"cubic-millimeters":{inBaseUnits:1E3*1E-9},"cubic-centimeters":{inBaseUnits:.001},"cubic-decimeters":{inBaseUnits:1},"cubic-meters":{inBaseUnits:1E3},"cubic-kilometers":{inBaseUnits:1E12},"cubic-inches":{inBaseUnits:.016387064},"cubic-feet":{inBaseUnits:.09290304*304.8},"cubic-yards":{inBaseUnits:764.554857984},"cubic-miles":{inBaseUnits:4.16818182544058E12}}},angle:{baseUnit:"radians",units:{radians:{inBaseUnits:1},degrees:{inBaseUnits:Math.PI/
180}}}},L=(()=>{const a={};for(const b in l)for(const d in l[b].units)a[d]=b;return a})(),w="metric imperial inches feet yards miles nautical-miles us-feet meters kilometers".split(" "),O=new Map([["meters","square-meters"],["feet","square-feet"],["us-feet","square-us-feet"]]);q=k.strict()({esriAcres:"acres",esriAres:"ares",esriHectares:"hectares",esriSquareCentimeters:"square-centimeters",esriSquareDecimeters:"square-decimeters",esriSquareFeet:"square-feet",esriSquareInches:"square-inches",esriSquareKilometers:"square-kilometers",
esriSquareMeters:"square-meters",esriSquareMiles:"square-miles",esriSquareMillimeters:"square-millimeters",esriSquareUsFeet:"square-us-feet",esriSquareYards:"square-yards"});n=k.strict()({esriCentimeters:"centimeters",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",esriNauticalMiles:"nautical-miles",esriYards:"yards"});k=k.strict()({esriDUDecimalDegrees:"degrees",esriDURadians:"radians"});
c.adaptiveImperialAreaUnit=function(a,b){a=f(a,b,"square-feet");return 1E6>Math.abs(a)?"square-feet":"square-miles"};c.adaptiveImperialLengthUnit=B;c.adaptiveImperialVerticalLengthUnit=C;c.adaptiveLengthUnit=function(a,b,d){switch(d){case "metric":return z(a,b);case "imperial":return B(a,b);default:return d}};c.adaptiveMetricAreaUnit=function(a,b){a=f(a,b,"square-meters");return 3E6>Math.abs(a)?"square-meters":"square-kilometers"};c.adaptiveMetricLengthUnit=z;c.adaptiveMetricVerticalLengthUnit=A;
c.adaptiveVerticalLengthUnit=function(a,b,d){switch(d){case "metric":return A(a,b);case "imperial":return C(a,b);default:return d}};c.angleUnitsJSONMap=k;c.areaUnitFromSpatialReference=function(a){a=g(a);return null==a?null:O.get(a)};c.areaUnitsJSONMap=q;c.baseUnitForUnit=function(a){return x(p(a))};c.baseUnitForUnitType=x;c.convertFromSpatialReferenceUnit=function(a,b,d,e=!1){if(!e&&b.isGeographic)throw Error("Unable to convert from an angular unit to a linear unit.");e=g(b);e!==d&&(e?a=f(a,e,d):
(a*=m(b),a=f(a,"meters",d)));return a};c.convertToSpatialReferenceUnit=function(a,b,d,e=!1){if(!e&&d.isGeographic)throw Error("Unable to convert from a linear unit to an angular unit.");e=g(d);b!==e&&(a=e?f(a,b,e):f(a,b,"meters")/m(d));return a};c.convertUnit=f;c.defaultAreaUnit=function(a){switch(a){case "metric":return"square-meters";case "imperial":return"square-feet";default:return a}};c.defaultLengthUnit=y;c.defaultVerticalLengthUnit=function(a){return y(a)};c.getDefaultUnitSystem=function(a){a=
g(a);if(null==a)return null;switch(a){case "feet":case "us-feet":case "clarke-feet":case "clarke-yards":case "clarke-links":case "sears-yards":case "sears-feet":case "sears-chains":case "benoit-1895-b-chains":case "indian-yards":case "indian-1937-yards":case "gold-coast-feet":case "chains":case "sears-1922-truncated-chains":return"imperial";case "50-kilometers":case "150-kilometers":case "meters":return"metric"}return null};c.getMetersPerCartesianUnitForSR=function(a){return t.isGeographic(a)?1:m(a)};
c.getMetersPerUnit=F;c.getMetersPerUnitForSR=m;c.getMetersPerVerticalUnitForSR=function(a){if(null!=a&&!t.isEarth(a))return 1;a=m(a);return 1E5<a?1:a};c.getUnitString=g;c.getVerticalUnitStringForSR=E;c.gradGcsIds=G;c.inchesPerMeter=39.37;c.isBaseUnit=u;c.isMeasurementSystem=function(a){return"imperial"===a||"metric"===a};c.isProjectedWKT=v;c.lengthToDegrees=function(a,b,d){return f(a,b,"meters")/(d*Math.PI/180)};c.lengthUnitFromSpatialReference=function(a){a=g(a);return null!=a&&w.includes(a)?a:null};
c.lengthUnitsJSONMap=n;c.measurementAreaUnits="metric imperial square-inches square-feet square-yards square-miles square-us-feet square-meters square-kilometers acres ares hectares".split(" ");c.measurementLengthUnits=w;c.unitFromRESTJSON=D;c.unitType=p;c.verticalLengthUnitFromSpatialReference=function(a){a=E(a);return null!=a&&w.includes(a)?a:null};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
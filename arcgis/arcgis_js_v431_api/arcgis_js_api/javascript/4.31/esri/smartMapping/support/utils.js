// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../intl/date ../../layers/support/fieldUtils ../../support/arcadeOnDemand ../../support/basemapUtils ../../time/timeZoneUtils".split(" "),function(e,g,m,v,w,n){function l(a){return String(a).padStart(2,"0")}function r(a,b,c){if("date"===b||"number"===b){"number"===b&&(a=new Date(a));b=c?a.getFullYear():a.getUTCFullYear();const d=l((c?a.getMonth():a.getUTCMonth())+1),h=l(c?a.getDate():a.getUTCDate()),k=l(c?a.getHours():a.getUTCHours()),f=l(c?a.getMinutes():a.getUTCMinutes());a=l(c?
a.getSeconds():a.getUTCSeconds());a=`TIMESTAMP'${b}-${d}-${h} ${k}:${f}:${a}'`}return a}function p(a,b){if(b instanceof Date)return"date";if("number"===typeof b)return"number";if("string"===typeof b&&(a=a.getField(b),"\x3cnow\x3e"!==b.toLowerCase()&&m.isDateField(a)))return"field"}const t={light:"streets gray topo terrain oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector topo-3d navigation-3d streets-3d osm-3d gray-3d arcgis-light-gray arcgis-navigation arcgis-streets arcgis-streets-relief arcgis-topographic arcgis-oceans osm-standard osm-standard-relief osm-streets osm-streets-relief osm-light-gray arcgis-terrain arcgis-charted-territory arcgis-community arcgis-colored-pencil arcgis-modern-antique arcgis-midcentury arcgis-newspaper arcgis-hillshade-light".split(" "),
dark:"satellite hybrid dark-gray dark-gray-vector streets-night-vector navigation-dark-3d streets-dark-3d dark-gray-3d arcgis-imagery arcgis-imagery-standard arcgis-dark-gray arcgis-navigation-night arcgis-streets-night osm-dark-gray arcgis-nova arcgis-hillshade-dark".split(" ")},u={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864E5},x=new Set(["integer","small-integer"]);let q=null;e.castIntegerFieldToFloat=function(a){return`cast(${a} as float)`};e.dateTypes=
["date","date-only","timestamp-offset"];e.defaultBasemapGroups=t;e.defaultStatisticTypes={exclude:["median"]};e.fieldDelimiter=",";e.formatAnyDate=function(a,b){const {format:c,timeZoneOptions:d,fieldType:h}=b??{};let k;d&&({timeZone:f,timeZoneName:k}=n.getTimeZoneFormattingOptions(d.layerTimeZone,d.datesInUnknownTimezone,d.viewTimeZone,g.convertDateFormatToIntlOptions(c||"short-date-short-time"),h));if("string"===typeof a&&isNaN(Date.parse("time-only"===h?`1970-01-01T${a}Z`:a)))return a;switch(h){case "date-only":var f=
g.convertDateFormatToIntlOptions(c||"short-date");return"string"===typeof a?g.formatDateOnly(a,{...f}):g.formatDate(a,{...f,timeZone:n.utc});case "time-only":return f=g.convertDateFormatToIntlOptions(c||"short-time"),"string"===typeof a?g.formatTimeOnly(a,f):g.formatDate(a,{...f,timeZone:n.utc});case "timestamp-offset":if(!f&&"string"===typeof a&&(new Date(a)).toISOString()!==a)return a;f=(b=c||d?g.convertDateFormatToIntlOptions(c||"short-date-short-time"):void 0)?{...b,timeZone:f,timeZoneName:k}:
void 0;return"string"===typeof a?g.formatTimestamp(a,f):g.formatDate(a,f);default:return b=c||d?g.convertDateFormatToIntlOptions(c||"short-date-short-time"):void 0,g.formatDate("string"===typeof a?new Date(a):a,b?{...b,timeZone:f,timeZoneName:k}:void 0)}};e.getBasemapGroup=function(a,b=t){for(const c in b)if(b[c].includes(a))return c};e.getBasemapId=function(a,b,c=!0){let d=null;a&&("string"===typeof a?b.includes(a)&&(d=a):d=w.getWellKnownBasemapId(a));return c?d||"gray":d};e.getDateDiffSQL=function(a,
b,c,d){const {hasQueryEngine:h}=a;c=r(c,p(a,c),h);a=r(b,p(a,b),h);a=`(${c} - ${a})`;d=u[d];b="/";1>d&&(d=1/d,b="*");return{sqlExpression:1===d?a:`(${a} ${b} ${d})`,sqlWhere:null}};e.getDateType=p;e.getFieldsList=async function(a){const {field:b,field2:c,field3:d,normalizationField:h,valueExpression:k}=a;a=[];k&&(q||({arcadeUtils:a}=await v.loadArcade(),q=a),a=q.extractFieldNames(k));b&&a.push(b);c&&a.push(c);d&&a.push(d);h&&a.push(h);return a};e.getNormalizationType=function(a){let b=a.normalizationType;
b||(a.normalizationField?b="field":null!=a.normalizationTotal&&(b="percent-of-total"));return b??void 0};e.isAnyDateField=function(a){return m.isDateField(a)||m.isDateOnlyField(a)||m.isTimestampOffsetField(a)};e.isIntegerField=function(a,b){a=b&&a.getField(b);return!!a&&x.has(a.type)};e.unitValueInDays=u;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
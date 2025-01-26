// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../widgets/support/dateUtils"],function(d,f){function h(a){return null!=a&&("date-only"===a.type||"esriFieldTypeDateOnly"===a.type)}function k(a){return null!=a&&("timestamp-offset"===a.type||"esriFieldTypeTimestampOffset"===a.type)}function l(a){return null!=a&&("time-only"===a.type||"esriFieldTypeTimeOnly"===a.type)}function m(a,c){var b=c??a?.domain;if(b&&"range"===b.type){c="range"in b?b.range[0]:b.minValue;b="range"in b?b.range[1]:b.maxValue;var e=null!=a&&r.has(a.type);
return h(a)||l(a)||k(a)?{...n(a,b,c),isInteger:e}:{min:null!=c&&"number"===typeof c?c:null,max:null!=b&&"number"===typeof b?b:null,rawMin:c,rawMax:b,isInteger:e}}}function n(a,c,b){return h(a)?{min:f.dateOnlyToDateTime(b)?.toMillis(),max:f.dateOnlyToDateTime(c)?.toMillis(),rawMin:b,rawMax:c}:l(a)?{min:f.timeOnlyToDateTime(b)?.toMillis(),max:f.timeOnlyToDateTime(c)?.toMillis(),rawMin:b,rawMax:c}:k(a)?{min:f.timestampOffsetToDateTime(b)?.toMillis(),max:f.timestampOffsetToDateTime(c)?.toMillis(),rawMin:b,
rawMax:c}:{max:null,min:null}}d.DomainValidationError=void 0;(function(a){a.VALUE_OUT_OF_RANGE="domain-validation-error::value-out-of-range";a.INVALID_CODED_VALUE="domain-validation-error::invalid-coded-value"})(d.DomainValidationError||(d.DomainValidationError={}));const r=new Set("integer small-integer big-integer esriFieldTypeInteger esriFieldTypeSmallInteger esriFieldTypeBigInteger".split(" "));d.dateTimeFieldValuesToNumericRange=n;d.getDomainRange=m;d.validateDomainValue=function(a,c,b){const e=
b??a?.domain;if(!e)return null;switch(e.type){case "range":const {min:p,max:q}=m(a,b);if(null!=p&&+c<p||null!=q&&+c>q)return d.DomainValidationError.VALUE_OUT_OF_RANGE;break;case "coded-value":if(null==e.codedValues||e.codedValues.every(g=>null==g||g.code!==c))return d.DomainValidationError.INVALID_CODED_VALUE;break;case "codedValue":if(null==e.codedValues||e.codedValues.every(g=>null==g||g.code!==c))return d.DomainValidationError.INVALID_CODED_VALUE}return null};Object.defineProperty(d,Symbol.toStringTag,
{value:"Module"})});
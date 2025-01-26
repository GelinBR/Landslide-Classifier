// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../Dictionary","../executionError","../../chunks/languageUtils","../../core/maybe"],function(x,N,f,r,X){function D(a){if(!1===r.isString(a))throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.InvalidParameter,null);return a}function H(a,b){b=10**b;return Math.round(a*b)/b}function y(a){const b=parseFloat(a.toString().replace(Math.trunc(a).toString(),"0"))*Math.sign(a);return 0>a?{fraction:b,integer:Math.ceil(a)}:{fraction:b,integer:Math.floor(a)}}function z(a,b){switch(a){case h.north:return"SHORT"===
b?"N":"North";case h.east:return"SHORT"===b?"E":"East";case h.south:return"SHORT"===b?"S":"South";case h.west:return"SHORT"===b?"W":"West"}}function I(a,b){return a-Math.floor(a/b)*b}function J(a){switch(a){case d.truncated_degrees:case d.decimal_degrees:return 360;case d.radians:return Y;case d.gradians:return 400;case d.seconds:return 1296E3;case d.fractional_degree_minutes:return 60;case d.fractional_minute_seconds:return 60;default:throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,
null,{reason:"unsupported evaluations"});}}function O(a){switch(a.toUpperCase().trim()){case "NORTH":case "NORTHAZIMUTH":case "NORTH AZIMUTH":return g.north_azimuth;case "POLAR":return g.polar;case "QUADRANT":return g.quadrant;case "SOUTH":case "SOUTHAZIMUTH":case "SOUTH AZIMUTH":return g.south_azimuth}throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"unsupported directionType"});}function P(a){switch(a.toUpperCase().trim()){case "D":case "DD":case "DECIMALDEGREE":case "DECIMAL DEGREE":case "DEGREE":case "DECIMALDEGREES":case "DECIMAL DEGREES":case "DEGREES":return d.decimal_degrees;
case "DMS":case "DEGREESMINUTESSECONDS":case "DEGREES MINUTES SECONDS":return d.degrees_minutes_seconds;case "R":case "RAD":case "RADS":case "RADIAN":case "RADIANS":return d.radians;case "G":case "GON":case "GONS":case "GRAD":case "GRADS":case "GRADIAN":case "GRADIANS":return d.gradians}throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"unsupported units"});}function Q(a,b,c){let e=null;switch(b){case d.decimal_degrees:e=w(a,3600);break;case d.seconds:e=a;break;case d.gradians:e=
w(a,3240);break;case d.radians:e=w(a,R);break;default:throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});}switch(c){case d.decimal_degrees:return E(e,3600);case d.seconds:return e;case d.gradians:return E(e,3240);case d.radians:return e/R;default:throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});}}function F(a){X.assertIsSome(a);switch(a){case d.decimal_degrees:case d.truncated_degrees:case d.degrees_minutes_seconds:return d.decimal_degrees;
case d.gradians:return d.gradians;case d.fractional_degree_minutes:return d.fractional_degree_minutes;case d.radians:return d.radians;case d.seconds:case d.fractional_minute_seconds:return d.seconds}}function Z(a){switch(r.toNumber(a)){case 1:return{first:h.north,second:h.east};case 2:return{first:h.south,second:h.east};case 3:return{first:h.south,second:h.west};case 4:return{first:h.north,second:h.west}}return null}function S(a){switch(a.toUpperCase().trim()){case "N":case "NORTH":return h.north;
case "E":case "EAST":return h.east;case "S":case "SOUTH":return h.south;case "W":case "WEST":return h.west}return null}function A(a){a=parseFloat(a);if(r.isNumber(a)){if(isNaN(a))throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"invalid conversion"});return a}throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"invalid conversion"});}function K(a,b,c){const e=c===g.quadrant;let l=null;var m=null;let n=0;var k=0;k=0;if(e){if(2>a.length)throw new f.ArcadeExecutionError(null,
f.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});k=1;(m=Z(r.toString(a[a.length-1])))?(l=m.first,m=m.second):(n=1,l=S(r.toString(a[0])),m=S(r.toString(a[a.length-1])));if(null===l||null===m)throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"invalid conversion"});}switch(b){case d.decimal_degrees:case d.radians:case d.gradians:if(0===a.length)break;return e?q.createFromAngleMeridianAndDirection(t.createFromAngleAndUnits(A(a[n]),F(b)),l,m):q.createFromAngleAndDirection(t.createFromAngleAndUnits(A(a[n]),
F(b)),c);case d.degrees_minutes_seconds:k=a.length-k-n;if(3===k)return a=t.createFromDegreesMinutesSeconds(A(a[n]),A(a[n+1]),A(a[n+2])),e?q.createFromAngleMeridianAndDirection(a,l,m):q.createFromAngleAndDirection(a,c);if(1===k)return a=A(a[n]),a=v.numberToDms(a),a=t.createFromDegreesMinutesSeconds(a.m_degrees,a.m_minutes,a.m_seconds),e?q.createFromAngleMeridianAndDirection(a,l,m):q.createFromAngleAndDirection(a,c)}throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"invalid conversion"});
}function aa(a){const b=new Set([" ","-","/","'",'"',"\\","^","\u00b0",T,"\t","\r","\n","*"]);let c="";for(let e=0;e<a.length;e++){const l=a.charAt(e);c=b.has(l)?c+"RRSPLITRRSPLITRR":c+l}return c.split("RRSPLITRRSPLITRR").filter(e=>""!==e)}function L(a,b,c){const e={padding:0,rounding:0,newpos:b};let l=!1;for(;b<a.length;){const m=a[b];if(m===c)l?e.rounding++:e.padding++,b++;else if("."===m)l=!0,b++;else break}e.newpos=b-1;return e}const G=a=>(b,c,e=14)=>+a(b,c).toFixed(e),ba=(a,b)=>a+b,ca=(a,b)=>
a-b,da=(a,b)=>a*b,ea=(a,b)=>a/b,M=(a,b,c)=>G(ba)(a,b,c),w=(a,b,c)=>G(da)(a,b,c),E=(a,b,c)=>G(ea)(a,b,c),Y=2*Math.PI,R=648E3/Math.PI,T=String.fromCharCode(7501);var h;(function(a){a[a.north=0]="north";a[a.east=1]="east";a[a.south=2]="south";a[a.west=3]="west"})(h||={});var d;(function(a){a[a.decimal_degrees=1]="decimal_degrees";a[a.seconds=2]="seconds";a[a.degrees_minutes_seconds=3]="degrees_minutes_seconds";a[a.radians=4]="radians";a[a.gradians=5]="gradians";a[a.truncated_degrees=6]="truncated_degrees";
a[a.fractional_degree_minutes=7]="fractional_degree_minutes";a[a.fractional_minute_seconds=8]="fractional_minute_seconds"})(d||={});var g;(function(a){a[a.north_azimuth=1]="north_azimuth";a[a.polar=2]="polar";a[a.quadrant=3]="quadrant";a[a.south_azimuth=4]="south_azimuth"})(g||={});var U;(function(a){a[a.meridian=0]="meridian";a[a.direction=1]="direction"})(U||={});class v{constructor(a,b,c){this.m_degrees=a;this.m_minutes=b;this.m_seconds=c}getField(a){switch(a){case d.decimal_degrees:case d.truncated_degrees:return this.m_degrees;
case d.fractional_degree_minutes:return this.m_minutes;case d.seconds:case d.fractional_minute_seconds:return this.m_seconds;default:throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});}}static secondsToDMS(a){const b=y(a).fraction;a=y(a).integer;const c=Math.floor(a/3600);a-=3600*c;const e=Math.floor(a/60);return new v(c,e,a-60*e+b)}static numberToDms(a){var b=y(a).fraction;a=y(a).integer;const c=w(y(100*b).fraction,100);b=y(100*b).integer;
return new v(a,b,c)}format(a,b){b=H(this.m_seconds,b);let c=this.m_minutes,e=this.m_degrees;if(a===d.seconds||a===d.fractional_minute_seconds)60<=b&&(b-=60,++c),60<=c&&(c=0,++e),360<=e&&(e=0);else if(a===d.fractional_degree_minutes)b=0,c=30<=this.m_seconds?this.m_minutes+1:this.m_minutes,e=this.m_degrees,60<=c&&(c=0,++e),360<=e&&(e=0);else if(a===d.decimal_degrees||a===d.truncated_degrees)a=E(this.m_seconds,3600),b=E(this.m_minutes,60),e=Math.round(this.m_degrees+b+a),b=c=0;return new v(e,c,b)}static dmsToSeconds(a,
b,c){return 3600*a+60*b+c}}class fa{constructor(a,b,c){this.meridian=a;this.angle=b;this.direction=c}fetchAzimuth(a){return a===U.meridian?this.meridian:this.direction}}class q{constructor(a){this._angle=a}static createFromAngleAndDirection(a,b){return new q(new t(q._convertDirectionFormat(a.extractAngularUnits(d.seconds),b,g.north_azimuth)))}getAngle(a){const b=this._angle.extractAngularUnits(d.seconds);switch(a){case g.north_azimuth:case g.south_azimuth:case g.polar:return new t(q._convertDirectionFormat(b,
g.north_azimuth,a));case g.quadrant:return a=q.secondsNorthAzimuthToQuadrant(b),new t(a.angle)}}getMeridian(a){const b=this._angle.extractAngularUnits(d.seconds);switch(a){case g.north_azimuth:return h.north;case g.south_azimuth:return h.south;case g.polar:return h.east;case g.quadrant:return q.secondsNorthAzimuthToQuadrant(b).meridian}}getDirection(a){const b=this._angle.extractAngularUnits(d.seconds);switch(a){case g.north_azimuth:return h.east;case g.south_azimuth:return h.west;case g.polar:return h.north;
case g.quadrant:return q.secondsNorthAzimuthToQuadrant(b).direction}}static secondsNorthAzimuthToQuadrant(a){const b=324E3>=a||972E3<=a?h.north:h.south;return new fa(b,b===h.north?Math.min(1296E3-a,a):Math.abs(a-648E3),648E3<a?h.west:h.east)}static createFromAngleMeridianAndDirection(a,b,c){return new q(new t(q.secondsQuadrantToNorthAzimuth(a.extractAngularUnits(d.seconds),b,c)))}static secondsQuadrantToNorthAzimuth(a,b,c){return b===h.north?c===h.east?a:1296E3-a:c===h.east?648E3-a:648E3+a}static _convertDirectionFormat(a,
b,c){let e=0;switch(b){case g.north_azimuth:e=a;break;case g.polar:e=324E3-a;break;case g.quadrant:throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});case g.south_azimuth:e=a+648E3}a=0;switch(c){case g.north_azimuth:a=e;break;case g.polar:a=324E3-e;break;case g.quadrant:throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});case g.south_azimuth:a=e-648E3}a%=1296E3;return 0>a?1296E3+a:
a}}class t{constructor(a){this._seconds=a}static createFromAngleAndUnits(a,b){return new t(Q(a,b,d.seconds))}extractAngularUnits(a){return Q(this._seconds,d.seconds,F(a))}static createFromDegreesMinutesSeconds(a,b,c){return new t(M(M(w(a,3600),w(b,60)),c))}}class V{constructor(a,b,c,e){this.view=a;this.angle=b;this.merdian=c;this.direction=e;this._formattedDms=this._dms=null}static createFromStringAndBearing(a,b,c){return new V(a,b.getAngle(c),b.getMeridian(c),b.getDirection(c))}fetchAngle(){return this.angle}fetchMeridian(){return this.merdian}fetchDirection(){return this.direction}fetchView(){return this.view}fetchDms(){null===
this._dms&&this._calculateDms();return this._dms}fetchFormattedDms(){null===this._formattedDms&&this._calculateDms();return this._formattedDms}_calculateDms(){var a=null;let b=d.truncated_degrees,c=0;for(a=0;a<this.view.length;a++){const e=this.view[a];switch(e){case "m":a=L(this.view,a,e);b=b===d.truncated_degrees?d.fractional_degree_minutes:b;a=a.newpos;continue;case "s":a=L(this.view,a,e),b=d.fractional_minute_seconds,c=c<a.rounding?a.rounding:c,a=a.newpos}}this._dms=v.secondsToDMS(this.angle.extractAngularUnits(d.seconds));
this._formattedDms=v.secondsToDMS(this.angle.extractAngularUnits(d.seconds)).format(b,c)}}x.convertDirection=function(a,b,c){if(!(b instanceof N))throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.InvalidParameter,null);if(!1===b.hasField("directionType"))throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"missing directionType"});if(!1===b.hasField("angleType"))throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"missing angleType"});
var e=O(D(b.field("directiontype")));b=P(D(b.field("angletype")));if(r.isNumber(a)){a=r.toNumber(a);if(e===g.quadrant)throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});b===d.degrees_minutes_seconds?(a=v.numberToDms(a),e=q.createFromAngleAndDirection(t.createFromDegreesMinutesSeconds(a.m_degrees,a.m_minutes,a.m_seconds),e)):e=q.createFromAngleAndDirection(t.createFromAngleAndUnits(a,F(b)),e)}else if(r.isString(a))e=K(aa(a),b,e);else if(r.isArray(a))e=
K(a,b,e);else if(r.isImmutableArray(a))e=K(a.toArray(),b,e);else throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});if(!(c instanceof N))throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.InvalidParameter,null);if(!1===c.hasField("directionType"))throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"missing directionType"});if(!1===c.hasField("outputType"))throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,
null,{reason:"missing angleType"});a=O(D(c.field("directiontype")));b=c.hasField("angleType")?P(D(c.field("angletype"))):null;var l=D(c.field("outputType")).toUpperCase().trim();if(!a||!l)throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});if(!(b||"TEXT"===l&&c.hasField("format")))throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"invalid unit"});switch(l){case "VALUE":if(a===g.quadrant||b===d.degrees_minutes_seconds)return c=
e.getAngle(a),a===g.quadrant&&b===d.degrees_minutes_seconds?(c=v.secondsToDMS(c.extractAngularUnits(d.seconds)),e=[z(e.getMeridian(a),"SHORT"),c.m_degrees,c.m_minutes,c.m_seconds,z(e.getDirection(a),"SHORT")]):b===d.degrees_minutes_seconds?(e=v.secondsToDMS(c.extractAngularUnits(d.seconds)),e=[e.m_degrees,e.m_minutes,e.m_seconds]):e=a===g.quadrant?[z(e.getMeridian(a),"SHORT"),c.extractAngularUnits(b),z(e.getDirection(a),"SHORT")]:[c.extractAngularUnits(b)],e;if((c=F(b))&&b!==d.degrees_minutes_seconds)e=
e.getAngle(a).extractAngularUnits(c);else throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});return e;case "TEXT":l="";c.hasField("format")&&(l=r.toString(c.field("format")));if(null===l||""===l){c="";switch(b){case d.decimal_degrees:c=a===g.quadrant?"DD.DD\u00b0":"DDD.DD\u00b0";break;case d.degrees_minutes_seconds:c=a===g.quadrant?"dd\u00b0 mm' ss\"":"ddd\u00b0 mm' ss.ss\"";break;case d.radians:c="R.RR";break;case d.gradians:c="GGG.GG"+T;break;
default:throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"conversion error"});}a===g.quadrant&&(c="p "+c+" b");l=c}c=l;var m="",n=null,k=null;b=V.createFromStringAndBearing(c,e,a);l={D:d.decimal_degrees,d:d.truncated_degrees,m:d.fractional_degree_minutes,s:d.fractional_minute_seconds,R:d.radians,G:d.gradians};for(k=0;k<c.length;k++){var p=c[k];switch(p){case "[":n=c;p={escaped:"",newpos:k};for(k++;k<n.length;){var B=n[k];k++;if("]"===B)break;p.escaped+=B}p.newpos=
k-1;n=p;m+=n.escaped;k=n.newpos;continue;case "D":case "d":case "m":case "s":case "R":case "G":n=L(c,k,p);k=e.getAngle(a);a:{p=l[p];B=n.padding;var u=n.rounding,W=b;let C=null;switch(p){case d.decimal_degrees:case d.radians:case d.gradians:C=I(H(k.extractAngularUnits(p),u),J(p));k=C.toFixed(u).padStart(B+u+(0<u?1:0),"0");break a;case d.truncated_degrees:case d.fractional_degree_minutes:C=I(W.fetchFormattedDms().getField(p),J(p));k=C.toFixed(u).padStart(B+u+(0<u?1:0),"0");break a;case d.fractional_minute_seconds:C=
I(H(W.fetchDms().getField(p),u),J(p));k=C.toFixed(u).padStart(B+u+(0<u?1:0),"0");break a;default:throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.LogicError,null,{reason:"unexpected evaluation"});}}m+=k;k=n.newpos;continue;case "P":case "p":m+=z(b.fetchMeridian(),"p"===p?"SHORT":"LONG");continue;case "B":case "b":m+=z(b.fetchDirection(),"b"===p?"SHORT":"LONG");continue;default:m+=p}}return m;default:throw new f.ArcadeExecutionError(null,f.ExecutionErrorCodes.InvalidParameter,null);}};x.preciseAdd=
M;x.preciseDivide=E;x.preciseMinus=(a,b,c)=>G(ca)(a,b,c);x.preciseMultiply=w;Object.defineProperty(x,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/mathUtils","../../../geometry/ellipsoidUtils","../../../geometry/Point"],function(f,e,p,h){function k(b,a,c){if(null==a.longitude||null==a.latitude||null==c.longitude||null==c.latitude)throw Error("Invalid points: no lon/lat");return m(b,a.longitude,a.latitude,c.longitude,c.latitude)}function m(b,a,c,d,g){c=e.deg2rad(c);g=e.deg2rad(g);a=e.deg2rad(a);const l=e.deg2rad(d);d=Math.sin((c-g)/2);a=Math.sin((a-l)/2);c=2*e.asinClamped(Math.sqrt(d*d+Math.cos(c)*Math.cos(g)*
a*a));return Math.round(c*b*1E4)/1E4}function n(b,a){b/=15;a||(b=Math.round(b));return b}f.getGreatCircleDistance=m;f.getGreatCircleDistanceFromPoints=k;f.getGreatCircleSpanAt=function(b,a,c){const d=a.spatialReference,g=p.getReferenceEllipsoid(d),l=new h(a.x,b.y,d),q=new h(c.x,b.y,d);a=new h(b.x,a.y,d);b=new h(b.x,c.y,d);return{lon:k(g.radius,l,q),lat:k(g.radius,a,b)}};f.getLonDeltaForDistance=function(b,a,c){a/=c;b=e.deg2rad(b);a=Math.sin(a/2);b=Math.cos(b);b=2*e.asinClamped(Math.sqrt(a*a/(b*b)));
return e.rad2deg(b)};f.longitudeToTimezone=n;f.positionToTimezoneInfo=function(b,a){b=b?.[0];if(null==b)return null;a||={hours:0,minutes:0,seconds:0};a.hours=n(b,!0);b=a.hours%1;a.hours-=b;a.minutes=60*b;b=a.minutes%1;a.minutes-=b;a.seconds=Math.round(60*b);return a};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
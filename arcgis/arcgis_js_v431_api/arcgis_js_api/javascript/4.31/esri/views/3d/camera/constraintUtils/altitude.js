// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/mathUtils ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../geometry/support/ray ./common ./ConstraintTypes ./InteractionType ../../support/intersectionUtils".split(" "),function(n,v,t,h,w,g,x,k,y){function p(a,c,e=g.defaultConstraintOptions){var b=a.state.constraints.altitude;b=a.state.isGlobal&&b?e.interactionType===k.InteractionType.TUMBLE&&g.hasConstraintType(e.selection,x.ConstraintTypes.TILT)?!1:!0:!1;if(!b||!a.state.constraints.altitude)return 0;
var d=a.state.constraints.altitude;b=z;b.min=d.min;b.max=d.max;d=e.interactionType;if(d!==k.InteractionType.NONE){var {min:l,max:f}=b,{interactionStartCamera:q,interactionFactor:A}=e;if(q){e=d===k.InteractionType.TUMBLE||d===k.InteractionType.ZOOM;d=p(a,q);var u=0===d?0:a.renderCoordsHelper.getAltitude(q.eye);b.min=l;b.max=f;g.adjustRangeForInteraction(d,u,e,A,.05*u,b)}}a=a.renderCoordsHelper.getAltitude(c.eye);a=v.clamp(a,b.min,b.max)-a;return 1E-6>=Math.abs(a)?0:a}const z={min:0,max:0},B=h.create(),
m=h.create(),C=h.create(),r=h.create();n.applyAltitudeConstraint=function(a,c,e=g.defaultConstraintOptions){var b=p(a,c,e);if(0===b)return!1;const d=a.renderCoordsHelper,l=d.getAltitude(c.eye)+b;var f=g.interactionDirectionTowardsConstraintMinimization;e=e.interactionDirection;b=Math.sign(b);a.renderCoordsHelper.worldUpAtPosition(c.eye,m);t.scale(m,m,b);f=f.call(g,c,e,m,B);a=t.copy(C,c.viewForward);f=d.intersectInfiniteManifold(w.wrap(c.eye,f),l,r);c.eye=null!=f?f:d.setAltitude(r,l,c.eye);c.center=
y.closestPointOnRay(r,c.eye,a,c.center);return!0};n.getAltitudeConstraintError=p;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
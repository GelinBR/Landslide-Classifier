/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{a as t,b as e}from"./tslib.es6.js";import{G as s,P as i,a,b as n,O as r,L as h}from"./converterAPI.js";import{t as l,a as m,b as o,G as c,c as u,i as _,d as g,m as k,P as p,s as f}from"./Transformation2D.js";class P{getOperatorType(){return 10204}supportsCurves(){return!0}accelerateGeometry(t,e,s){return!1}canAccelerateGeometry(t){return!1}executeMany(t,e,s,i){return new d(t,e,s,i)}execute(t,e,s,i){return t||l("null param is not allowed."),new d(null,e,s,i).generalize(t)}}class d extends s{constructor(t,e,s,a){super(),this.m_pline=null,this.m_point=new i,this.m_stack=[],this.m_resultstack=[],this.m_callCount=0,this.m_progressTracker=a,this.m_geoms=t,this.m_maxDeviation=e,this.m_bRemoveDegenerateParts=s}tock(){return!0}getRank(){return 1}next(){const t=this.m_geoms.next();return null===t?null:(m(t),this.generalize(t))}getGeometryID(){return this.m_geoms.getGeometryID()}generalize(s){const i=s.getGeometryType();if(o(i))return s;if(i===c.enumEnvelope){const t=new a({vd:s.getDescription()});return t.addEnvelope(s,!1),this.generalize(t)}if(u(i)){const t=new n({vd:s.getDescription()});return t.addSegment(s,!0),this.generalize(t)}if(_(i)||g(""),s.isEmpty()||this.m_maxDeviation<=0)return s;const l=(new r).execute(s,0,.05*this.m_maxDeviation,0,this.m_progressTracker);s.hasNonLinearSegments()&&(this.m_maxDeviation*=.95);const m=l,p=s.createInstance();p.getGeometryType()===c.enumPolygon&&p.setFillRule(s.getFillRule()),this.m_xy=m.getAttributeStreamRef(0);{const s={stack:[],error:void 0,hasError:!1};try{const e=new h;this.m_pline=e,t(s,k((()=>{this.m_pline=null}),!1),!1);for(let t=0,e=m.getPathCount();t<e;t++)this.generalizePath(m.getImpl(),t,p.getImpl())}catch(t){s.error=t,s.hasError=!0}finally{e(s)}}return this.m_resultstack.length=0,this.m_stack.length=0,p}generalizePath(t,e,s){if(t.getPathSize(e)<2)return;this.m_resultstack.length=0,this.m_stack.length=0;const i=t.getPathStart(e),a=t.getPathEnd(e)-1,n=t.isClosedPath(e),r=t.isClosedPathInXYPlane(e);let h=0,l=-1;this.m_stack.push(n?i:a),this.m_stack.push(i);let m=!1,o=!1;for(!this.m_bRemoveDegenerateParts&&r&&(m=!0,o=!0);this.m_stack.length>1;){const e=this.m_stack.at(-1);this.m_stack.pop();const s=this.m_stack.at(-1);let i=t.getXY(e);this.m_pline.setStartXY(i),i=t.getXY(s),this.m_pline.setEndXY(i);const n=[0];let r=this.findGreatestDistance(e,s,a,n);r>=0&&(m?m=!1:(o&&n[0]>h&&(h=n[0],l=r),n[0]<=this.m_maxDeviation&&(r=-1))),r>=0?(this.m_stack.push(r),this.m_stack.push(e)):this.m_resultstack.push(e)}n||this.m_resultstack.push(this.m_stack[0]);const c=this.m_resultstack.length;if(c===t.getPathSize(e)&&c===this.m_stack.length)s.addPath(t,e,!0);else if(this.m_resultstack.length>0){if(this.m_bRemoveDegenerateParts&&this.m_resultstack.length<=2){if(n||1===this.m_resultstack.length)return;if(p.distance(t.getXY(this.m_resultstack[0]),t.getXY(this.m_resultstack[1]))<=this.m_maxDeviation)return}if(o&&l>=0&&h<=this.m_maxDeviation){const t=this.m_resultstack.at(-1)>l;this.m_resultstack.push(l),t&&(this.m_resultstack[this.m_resultstack.length-2]=f(this.m_resultstack[this.m_resultstack.length-1],this.m_resultstack[this.m_resultstack.length-1]=this.m_resultstack[this.m_resultstack.length-2]))}for(let e=0,i=this.m_resultstack.length;e<i;e++)t.getPointByVal(this.m_resultstack[e],this.m_point),0===e?s.startPathPoint(this.m_point):s.lineToPoint(this.m_point);if(n){for(let t=this.m_resultstack.length;t<3;t++)s.lineToPoint(this.m_point);s.closePathWithLine()}}}findGreatestDistance(t,e,s,i){let a=e-1;e<=t&&(a=s);let n=-1,r=0;const h=new p;for(let e=t+1;e<=a;e++){this.m_xy.queryPoint2D(2*e,h);const t=h.x,s=h.y,i=this.m_pline.getClosestCoordinate(h,!1);h.assign(this.m_pline.getCoord2D(i)),h.x-=t,h.y-=s;const a=h.length();a>r&&(n=e,r=a),this.m_callCount++}return i[0]=r,n}}export{P as O};

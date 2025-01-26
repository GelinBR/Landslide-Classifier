/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{i as t}from"../../core/lang.js";import{X as e}from"../../chunks/unitUtils.js";import{S as r,F as s,G as i,p as n,g as o,t as u,c as m,f as c}from"../../chunks/converterAPI.js";import{t as p,e as a,a as l}from"../../chunks/Transformation2D.js";import{B as h}from"../../chunks/Bufferer-BUAXAzDQ.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/JSONSupport.js";import"../../chunks/tslib.es6.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../geometry.js";import"../Extent.js";import"../Geometry.js";import"../../chunks/reader.js";import"../SpatialReference.js";import"../../chunks/writer.js";import"../Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../support/webMercatorUtils.js";import"../Multipoint.js";import"../../chunks/zmUtils.js";import"../Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../Polyline.js";import"../../chunks/typeUtils.js";import"../support/jsonUtils.js";import"../../chunks/GeometryCleaner-k94LXQsr.js";import"../../chunks/OperatorGeneralize.js";class j extends i{constructor(t,e,r,s,i,o,u){super(),this.m_currentUnionEnvelope2D=new n,this.m_index=-1,this.m_dindex=-1,this.m_progressTracker=u,this.m_bufferer=new h(u),this.m_inputGeoms=t,this.m_spatialReference=e,this.m_distances=r,this.m_maxDeviation=s,this.m_maxVerticesInFullCircle=i}tock(){return!0}getRank(){return 1}next(){{let t;for(;t=this.m_inputGeoms.next();)return l(t),this.m_index=this.m_inputGeoms.getGeometryID(),this.m_dindex+1<this.m_distances.length&&this.m_dindex++,this.buffer(t,this.m_distances[this.m_dindex]);return null}}getGeometryID(){return this.m_index}buffer(t,e){return this.m_bufferer.buffer(t,e,this.m_spatialReference,0,0,4,this.m_maxDeviation,this.m_maxVerticesInFullCircle)}}const f=new class{getOperatorType(){return 10004}supportsCurves(){return!0}accelerateGeometry(t,e,r){return!1}canAccelerateGeometry(t){return!1}executeMany(t,e,r,s,i){return this.executeManyEx(t,e,r,Number.NaN,96,s,i)}execute(t,e,s,i){Number.isFinite(s)||p("Invalid distance for buffer operation");const n=new r([t]),o=[s],u=this.executeMany(n,e,o,!1,i).next();return u||a("null buffer output"),u}executeManyEx(t,e,r,i,n,o,u){if(void 0!==r.find((t=>!Number.isFinite(t)))&&p("Invalid distance for buffer operation"),o){const o=new j(t,e,r,i,n,!1,u);return(new s).executeMany(o,e,u,2)}return new j(t,e,r,i,n,!1,u)}};function k(t,r,s={}){const{unit:i}=s,n=o(t);return i&&(r=e(r,i,n)),u(function(t,e,r){return f.execute(t,e,r,null)}(c(t),m(n),r),n)}function d(s,i,n={}){let{maxDeviation:p=NaN,maxVerticesInFullCircle:a=96,union:l=!1,unit:h}=n;const j=s.map(c),k=o(s);return h&&(i=i.map((t=>e(t,h,k))),p&&(p=e(p,h,k))),function(t,e,s,i,n,o){const u=f.executeManyEx(new r(t),e,s,i,n,o,null);return Array.from(u)}(j,m(k),i,p,a,l).map((t=>u(t,k))).filter(t)}function x(){return f.supportsCurves()}export{k as execute,d as executeMany,x as supportsCurves};

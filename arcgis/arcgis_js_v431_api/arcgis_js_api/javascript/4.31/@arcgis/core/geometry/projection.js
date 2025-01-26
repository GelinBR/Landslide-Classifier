/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import n from"../core/Error.js";import{throwIfAborted as e,waitTick as r}from"../core/promiseUtils.js";import{t}from"../chunks/tracking.js";import{S as o}from"../chunks/SimpleObservable.js";import{c as s}from"../chunks/vec3f64.js";import{J as i,ad as l,ae as u,f as a,m as c,i as p,b as f,af as m,z as h,H as j}from"../chunks/unitUtils.js";import d from"./Extent.js";import g from"./Multipoint.js";import y from"./Point.js";import R from"./Polygon.js";import k from"./Polyline.js";import x from"./SpatialReference.js";import{p as w,g as z,a as M}from"../chunks/projectBuffer.js";import S from"./support/GeographicTransformation.js";import{g as b}from"../chunks/zscale.js";import"../core/lang.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/handleUtils.js";import"../chunks/maybe.js";import"../chunks/utils.js";import"../chunks/ObservableBase.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/metadata.js";import"../chunks/ensureType.js";import"../core/accessorSupport/decorators/property.js";import"../core/scheduling.js";import"./Geometry.js";import"../chunks/reader.js";import"../chunks/writer.js";import"./support/webMercatorUtils.js";import"../chunks/zmUtils.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/geodesicConstants.js";import"./support/GeographicTransformationStep.js";function v(n,e,r,t,o,s){return P[0]=n,P[1]=e,P[2]=r,w(P,t,0,o,s,0)}const P=s();let Z=null,U=null,A=null,E={};const G=new o;function L(){return!!Z&&j()}function O(){return!!L()||(t(G),W(),!1)}function T(n,e){return!n||!e||V(n,e)||O()}function _(n,e){return!V(n,e)&&!L()}function W(n){return null==A&&(A=Promise.all([i(),import("../chunks/geometryEngineBase.js").then((n=>n.g)),import("../chunks/hydrated.js")])),A.then((([,r,{hydratedAdapter:t}])=>{e(n),U=t,Z=r.default,Z._enableProjection(l),G.notify()}))}function B(n,e,r=null,t=null){return Array.isArray(n)?0===n.length?[]:C(U,n,n[0].spatialReference,e,r,t):C(U,[n],n.spatialReference,e,r,t)[0]}function C(n,e,r,t,o=null,s=null){if(null==r||null==t)return e;if(V(r,t,o))return e.map((n=>$(n,r,t)));if(null==o&&u(r))return e.map((n=>$(n,r,x.WGS84))).map((n=>I(n,t)));if(null==o&&u(t))return e.map((n=>I(n,x.WGS84))).map((n=>$(n,x.WGS84,t)));if(null==o){const n=S.cacheKey(r,t);void 0!==E[n]?o=E[n]:(null==(o=J(r,t,void 0))&&(o=new S),E[n]=o)}if(null==Z||null==n)throw new K;return null!=s?Z._project(n,e,r,t,o,s):Z._project(n,e,r,t,o)}function q(n,e){const r=H([n],e);return null!=r.pending?{pending:r.pending,geometry:null}:null!=r.geometries?{pending:null,geometry:r.geometries[0]}:{pending:null,geometry:null}}function H(n,e){if(!L())for(const r of n)if(null!=r&&!a(r.spatialReference,e)&&c(r.spatialReference)&&c(e)&&!V(r.spatialReference,e))return t(G),{pending:W(),geometries:null};return{pending:null,geometries:n.map((n=>null==n?null:a(n.spatialReference,e)?n:c(n.spatialReference)&&c(e)?I(n,e):null))}}function J(n,e,r=null){if(null==n||null==e)return null;if(null==Z||null==U)throw new K;const t=Z._getTransformation(U,n,e,r,r?.spatialReference);return null!==t?S.fromGE(t):null}function F(n,e,r=null){if(null==Z||null==U)throw new K;const t=Z._getTransformationBySuitability(U,n,e,r,r?.spatialReference);if(null!==t){const n=[];for(const e of t)n.push(S.fromGE(e));return n}return[]}class K extends n{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}function N(){Z=null,U=null,A=null,E={}}const D={get loadPromise(){return A}};function I(n,e){try{const r=B(n,e);if(null==r)return null;"xmin"in n&&"xmin"in r&&(r.zmin=n.zmin,r.zmax=n.zmax);const t=b(r.type,n.spatialReference,e);return null!=t&&t(r),r}catch(n){if(!(n instanceof K))throw n;return null}}async function Q(n,e,r){const t=n.spatialReference;return null!=t&&null!=e&&await Y(t,e,null,r),I(n,e)}function V(n,e,r){return!r&&(!!a(n,e)||c(n)&&c(e)&&!!z(n,e,M))}function X(n,e){if(a(n,e))return!0;if(!c(n)||!c(e))return!1;const r=p(n)||f(n)||m(n),t=p(e)||f(e)||m(e);return r&&t}async function Y(n,e,t,o){if(L())return r(o);if(Array.isArray(n)){for(const{source:e,dest:r,geographicTransformation:t}of n)if(e&&r&&!V(e,r,t))return W(o)}else if(n&&e&&!V(n,e,t))return W(o);return r(o)}function $(n,e,r){return n?"x"in n?en(n,e,new y,r,0):"xmin"in n?cn(n,e,new d,r,0):"rings"in n?un(n,e,new R,r,0):"paths"in n?sn(n,e,new k,r,0):"points"in n?tn(n,e,new g,r,0):null:null}function nn(n,e,r=e.spatialReference,t=0){return null!=r&&null!=n.spatialReference&&null!=en(n,n.spatialReference,e,r,t)}function en(n,e,r,t,o){fn[0]=n.x,fn[1]=n.y;const s=n.z;return fn[2]=void 0!==s?s:o,w(fn,e,0,fn,t,0)?(r.x=fn[0],r.y=fn[1],r.spatialReference=t,void 0!==s||h(t)?(r.z=fn[2],r.hasZ=!0):(r.z=void 0,r.hasZ=!1),void 0===n.m?(r.m=void 0,r.hasM=!1):(r.m=n.m,r.hasM=!0),r):null}function rn(n,e,r=e.spatialReference,t=0){return null!=n.spatialReference&&null!=r&&null!=tn(n,n.spatialReference,e,r,t)}function tn(n,e,r,t,o){const{points:s,hasZ:i,hasM:l}=n,u=[],a=s.length,c=[];for(const n of s)c.push(n[0],n[1],i?n[2]:o);if(!w(c,e,0,c,t,0,a))return null;const p=i||h(t);for(let n=0;n<a;++n){const e=3*n,r=c[e],t=c[e+1];p&&l?u.push([r,t,c[e+2],s[n][3]]):p?u.push([r,t,c[e+2]]):l?u.push([r,t,s[n][2]]):u.push([r,t])}return r.points=u,r.spatialReference=t,r.hasZ=i,r.hasM=l,r}function on(n,e,r=e.spatialReference,t=0){return null!=n.spatialReference&&null!=r&&null!=sn(n,n.spatialReference,e,r,t)}function sn(n,e,r,t,o){const{paths:s,hasZ:i,hasM:l}=n,u=[];if(!pn(s,i??!1,l??!1,e,u,t,o))return null;const a=i||h(t);return r.paths=u,r.spatialReference=t,r.hasZ=a,r.hasM=l,r}function ln(n,e,r=e.spatialReference,t=0){return null!=n.spatialReference&&null!=r&&null!=un(n,n.spatialReference,e,r,t)}function un(n,e,r,t,o){const{rings:s,hasZ:i,hasM:l}=n,u=[];if(!pn(s,i??!1,l??!1,e,u,t,o))return null;const a=i||h(t);return r.rings=u,r.spatialReference=t,r.hasZ=a,r.hasM=l,r}function an(n,e,r=e.spatialReference,t=0){return null!=n.spatialReference&&null!=r&&null!=cn(n,n.spatialReference,e,r,t)}function cn(n,e,r,t,o){const{xmin:s,ymin:i,xmax:l,ymax:u,hasZ:a,hasM:c}=n;if(!v(s,i,a?n.zmin:o,e,fn,t))return null;const p=a||h(t);return r.xmin=fn[0],r.ymin=fn[1],p&&(r.zmin=fn[2]),v(l,u,a?n.zmax:o,e,fn,t)?(r.xmax=fn[0],r.ymax=fn[1],p&&(r.zmax=fn[2]),c&&(r.mmin=n.mmin,r.mmax=n.mmax),r.spatialReference=t,r):null}function pn(n,e,r,t,o,s,i=0){const l=new Array;for(const r of n)for(const n of r)l.push(n[0],n[1],e?n[2]:i);if(!w(l,t,0,l,s,0))return!1;let u=0;o.length=0;const a=e||h(s);for(const e of n){const n=new Array;for(const t of e)a&&r?n.push([l[u++],l[u++],l[u++],t[3]]):a?n.push([l[u++],l[u++],l[u++]]):r?(n.push([l[u++],l[u++],t[2]]),u++):(n.push([l[u++],l[u++]]),u++);o.push(n)}return!0}const fn=s(),mn=Object.freeze(Object.defineProperty({__proto__:null,canProjectWithoutEngine:V,getTransformation:J,getTransformations:F,initializeProjection:Y,isEqualBaseGCS:X,isLoaded:L,isLoadedOrLoad:O,isLoadedOrLoadFor:T,load:W,project:B,projectExtent:an,projectMany:C,projectMultipoint:rn,projectOrLoad:q,projectOrLoadMany:H,projectPoint:nn,projectPolygon:ln,projectPolyline:on,projectWithZConversion:Q,projectWithoutEngine:$,requiresLoad:_,test:D,tryProjectWithZConversion:I,unload:N},Symbol.toStringTag,{value:"Module"}));export{mn as a,V as canProjectWithoutEngine,J as getTransformation,F as getTransformations,Y as initializeProjection,X as isEqualBaseGCS,L as isLoaded,O as isLoadedOrLoad,T as isLoadedOrLoadFor,W as load,v as p,B as project,an as projectExtent,C as projectMany,rn as projectMultipoint,q as projectOrLoad,H as projectOrLoadMany,nn as projectPoint,ln as projectPolygon,on as projectPolyline,Q as projectWithZConversion,$ as projectWithoutEngine,_ as requiresLoad,D as test,I as tryProjectWithZConversion,N as unload};

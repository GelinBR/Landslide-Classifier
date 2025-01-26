/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import{n as e,o as r,q as t,r as o,s as i,t as c}from"../chunks/unitUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import a from"./Point.js";import m from"./Polygon.js";import u from"./SpatialReference.js";import{directGeodeticSolver as h}from"./support/geodesicUtils.js";import{webMercatorToGeographic as l,geographicToWebMercator as j}from"./support/webMercatorUtils.js";import"../chunks/jsonMap.js";import"../config.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"../core/JSONSupport.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/ensureType.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"./Geometry.js";import"./Extent.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/zmUtils.js";import"../geometry.js";import"./Multipoint.js";import"./Polyline.js";import"../chunks/typeUtils.js";import"./support/jsonUtils.js";import"../chunks/geodesicConstants.js";var d;let g=d=class extends m{constructor(s){super(s),this.center=null,this.geodesic=!1,this.numberOfPoints=60,this.radius=1e3,this.radiusUnit="meters"}initialize(){const s=this.center,n=this.numberOfPoints;if(this.hasZ=s?.hasZ??!1,0!==this.rings.length||!s)return;const p=e(this.radius,this.radiusUnit,"meters"),a=s.spatialReference;let m,u="geographic";if(a.isWebMercator?u="webMercator":(null!=(a.wkid&&r[a.wkid])||(a.wkt2||a.wkt)&&t(a.wkt2||a.wkt))&&(u="projected"),this.geodesic){let e;switch(u){case"webMercator":e=l(s);break;case"projected":console.error("Creating a geodesic circle requires the center to be specified in web mercator or geographic coordinate system");break;case"geographic":e=s}m=this._createGeodesicCircle(e,p,n),"webMercator"===u&&(m=j(m))}else{let e;"webMercator"===u||"projected"===u?e=p/o(s.spatialReference):"geographic"===u&&(e=i(p,"meters",c(s.spatialReference).radius)),m=this._createPlanarCircle(s,e,n)}this.spatialReference=m.spatialReference,this.addRing(m.rings[0])}clone(){const{center:s,numberOfPoints:e,radius:r,radiusUnit:t,geodesic:o}=this;return new d({center:s?.clone(),numberOfPoints:e,radius:r,radiusUnit:t,geodesic:o})}_createGeodesicCircle(s,e,r){let t=0;const o=[];for(;t<360;){const i=[0,0],c=[s.x,s.y];h(i,c,t,e,u.WGS84),this.hasZ&&i.push(s.z),o.push(i),t+=360/r}return o.push(o[0]),new m({rings:[o]})}_createPlanarCircle(s,e,r){const t=[],o=2*Math.PI/r;for(let i=0;i<r;++i){const r=o*i,c=[s.x+Math.cos(-r)*e,s.y+Math.sin(-r)*e];this.hasZ&&c.push(s.z),t.push(c)}return t.push(t[0]),new m({spatialReference:s.spatialReference,rings:[t]})}};s([n({type:a})],g.prototype,"center",void 0),s([n()],g.prototype,"geodesic",void 0),s([n()],g.prototype,"numberOfPoints",void 0),s([n()],g.prototype,"radius",void 0),s([n()],g.prototype,"radiusUnit",void 0),g=d=s([p("esri.geometry.Circle")],g);const k=g;export{k as default};

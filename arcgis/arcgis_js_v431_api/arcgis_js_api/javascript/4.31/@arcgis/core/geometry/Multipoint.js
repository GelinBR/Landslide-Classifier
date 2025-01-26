/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{clone as s}from"../core/lang.js";import{property as e}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{subclass as r}from"../core/accessorSupport/decorators/subclass.js";import{w as i}from"../chunks/writer.js";import o from"./Extent.js";import n from"./Geometry.js";import a from"./Point.js";import{u as p}from"../chunks/zmUtils.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../core/Error.js";import"../config.js";import"../chunks/tracking.js";import"./SpatialReference.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/JSONSupport.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"./support/webMercatorUtils.js";import"../chunks/reader.js";import"../core/accessorSupport/decorators/cast.js";var h;function c(t){return(s,e)=>null==s?e:null==e?s:t(s,e)}let m=h=class extends n{constructor(...t){super(...t),this.points=[],this.type="multipoint"}normalizeCtorArgs(t,s){if(!t&&!s)return{};const e={};var r;Array.isArray(t)?(e.points=t,e.spatialReference=s):!(r=t)||"esri.geometry.SpatialReference"!==r.declaredClass&&null==r.wkid?(t.points&&(e.points=t.points),t.spatialReference&&(e.spatialReference=t.spatialReference),t.hasZ&&(e.hasZ=t.hasZ),t.hasM&&(e.hasM=t.hasM)):e.spatialReference=t;const i=e.points?.[0];return i&&(void 0===e.hasZ&&void 0===e.hasM?(e.hasZ=i.length>2,e.hasM=!1):void 0===e.hasZ?e.hasZ=i.length>3:void 0===e.hasM&&(e.hasM=i.length>3)),e}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const t=this.points;if(!t.length)return null;const s=new o,e=this.hasZ,r=this.hasM,i=e?3:2,n=t[0],a=c(Math.min),p=c(Math.max);let h,m,l,u,[f,j]=n,[y,d]=n;for(let s=0,o=t.length;s<o;s++){const o=t[s],[n,c]=o;if(f=a(f,n),j=a(j,c),y=p(y,n),d=p(d,c),e&&o.length>2){const t=o[2];h=a(h,t),l=p(l,t)}if(r&&o.length>i){const t=o[i];m=a(m,t),u=p(u,t)}}return s.xmin=f,s.ymin=j,s.xmax=y,s.ymax=d,s.spatialReference=this.spatialReference,e?(s.zmin=h,s.zmax=l):(s.zmin=void 0,s.zmax=void 0),r?(s.mmin=m,s.mmax=u):(s.mmin=void 0,s.mmax=void 0),s}writePoints(t,e){e.points=s(this.points)}addPoint(t){return p(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this.notifyChange("points"),this}clone(){const t={points:s(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new h(t)}getPoint(t){if(!this._validateInputs(t))return null;const s=this.points[t],e={x:s[0],y:s[1],spatialReference:this.spatialReference};let r=2;return this.hasZ&&(e.z=s[2],r=3),this.hasM&&(e.m=s[r]),new a(e)}removePoint(t){if(!this._validateInputs(t))return null;const s=new a(this.points.splice(t,1)[0],this.spatialReference);return this.notifyChange("points"),s}setPoint(t,s){return this._validateInputs(t)?(p(this,s),Array.isArray(s)||(s=s.toArray()),this.points[t]=s,this.notifyChange("points"),this):this}toJSON(t){return this.write({},t)}_validateInputs(t){return null!=t&&t>=0&&t<this.points.length}};t([e({readOnly:!0})],m.prototype,"cache",null),t([e()],m.prototype,"extent",null),t([e({type:[[Number]],json:{write:{isRequired:!0}}})],m.prototype,"points",void 0),t([i("points")],m.prototype,"writePoints",null),m=h=t([r("esri.geometry.Multipoint")],m),m.prototype.toJSON.isDefaultToJSON=!0;const l=m;export{l as default};

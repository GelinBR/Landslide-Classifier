/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{addTokenParameter as t}from"../kernel.js";import o from"../request.js";import{addProxy as r}from"../core/urlUtils.js";import{m as s}from"./query.js";import e from"../rest/query/support/AttachmentInfo.js";import"../core/lang.js";import"../config.js";import"../core/Error.js";import"./Logger.js";import"../core/promiseUtils.js";import"./handleUtils.js";import"./maybe.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../geometry/support/jsonUtils.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./jsonMap.js";import"./assets.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./boundsUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"../geometry/Polyline.js";import"../geometry/support/normalizeUtils.js";import"./normalizeUtilsCommon.js";import"./simplify.js";import"../geometry.js";import"./typeUtils.js";import"./utils9.js";import"./utils10.js";import"./pbfQueryUtils.js";import"./pbf.js";import"./OptimizedGeometry.js";import"./OptimizedFeature.js";import"./OptimizedFeatureSet.js";import"./queryZScale.js";import"./zscale.js";function i(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o}function m(o,s){const i={};for(const m of s){const{parentObjectId:s,parentGlobalId:p,attachmentInfos:j}=m;for(const m of j){const{id:j}=m,a=r(t(`${o.path}/${s}/attachments/${j}`)),n=e.fromJSON(m);n.set({url:a,parentObjectId:s,parentGlobalId:p}),i[s]?i[s].push(n):i[s]=[n]}}return i}function p(t,r,e){let m={query:s({...t.query,f:"json",...i(r)})};return e&&(m={...e,...m,query:{...e.query,...m.query}}),o(t.path+"/queryAttachments",m).then((t=>t.data.attachmentGroups))}async function j(t,r,s){const{objectIds:e}=r,i=[];for(const r of e)i.push(o(t.path+"/"+r+"/attachments",s));return Promise.all(i).then((t=>e.map(((o,r)=>({parentObjectId:o,attachmentInfos:t[r].data.attachmentInfos})))))}export{p as executeAttachmentQuery,j as fetchAttachments,m as processAttachmentQueryResult};

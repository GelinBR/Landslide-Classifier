/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import o from"../../Color.js";import{c as t,g as r,a as i}from"../../chunks/symbologyUtils.js";import{t as e}from"../../chunks/utils20.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/ensureType.js";import"../../core/lang.js";import"../../chunks/Logger.js";import"../../config.js";import"../../chunks/utils3.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/handleUtils.js";import"../../chunks/datetime.js";import"../../layers/support/fieldUtils.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/tslib.es6.js";import"../../chunks/assets.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/persistableUrlUtils.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils.js";import"../../chunks/utils2.js";import"../../chunks/screenUtils.js";import"../../chunks/mat4.js";import"../../chunks/common.js";const a=[128,128,128,1],s=[128,128,128,1],n="4px",p="40px",c={primary:{color:[227,139,79,1],noDataColor:a,outline:{color:[255,255,255,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:n,maxSize:p,opacity:.8},secondary:[{color:[128,128,128,1],noDataColor:a,outline:{color:[255,255,255,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:n,maxSize:p,opacity:.8},{color:[255,255,255,1],noDataColor:a,outline:{color:[128,128,128,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:n,maxSize:p,opacity:.8}]},m={primary:{color:[227,139,79,1],noDataColor:s,outline:{color:[92,92,92,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:n,maxSize:p,opacity:.8},secondary:[{color:[178,178,178,1],noDataColor:s,outline:{color:[92,92,92,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:n,maxSize:p,opacity:.8},{color:[26,26,26,1],noDataColor:s,outline:{color:[128,128,128,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:n,maxSize:p,opacity:.8}]},l=[0,0,0,0],u={color:l,outline:{color:[166,166,166,.25],width:"1px"}},h={color:l,outline:{color:[153,153,153,.25],width:"1px"}},d=t({themeDictionary:{default:{name:"default",label:"Default",description:"Default theme for visualizing features by varying their size to show data.",schemes:{point:{light:c,dark:m},polyline:{light:{primary:{color:[226,119,40,1],noDataColor:a,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},secondary:[{color:[77,77,77,1],noDataColor:a,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},{color:[153,153,153,1],noDataColor:a,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"}]},dark:{primary:{color:[226,119,40,1],noDataColor:s,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},secondary:[{color:[255,255,255,1],noDataColor:s,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},{color:[153,153,153,1],noDataColor:s,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"}]}},polygon:{light:{primary:{marker:c.primary,background:h,opacity:c.primary.opacity},secondary:[{marker:c.secondary[0],background:h,opacity:c.secondary[0].opacity},{marker:c.secondary[1],background:h,opacity:c.secondary[1].opacity}]},dark:{primary:{marker:m.primary,background:u,opacity:m.primary.opacity},secondary:[{marker:m.secondary[0],background:u,opacity:m.secondary[0].opacity},{marker:m.secondary[1],background:u,opacity:m.secondary[1].opacity}]}}}}}});function y(o){return r(d,o)}function j(o){if("mesh"===o.geometryType)return null;const t=i({basemap:o.basemap,geometryType:o.geometryType,basemapTheme:o.basemapTheme,theme:d.get("default")});if(!t)return;const{schemesInfo:r,basemapId:e,basemapTheme:a}=t;return{primaryScheme:x(o,r.primary),secondarySchemes:r.secondary.map((t=>x(o,t))).filter(Boolean),basemapId:e,basemapTheme:a}}function k(t){if(!t)return;const r={...t};return"color"in r&&r.color&&(r.color=new o(r.color)),"noDataColor"in r&&r.noDataColor&&(r.noDataColor=new o(r.noDataColor)),"outline"in r&&r.outline&&(r.outline={color:r.outline.color&&new o(r.outline.color),width:r.outline.width}),"marker"in r&&r.marker&&(r.marker=k(r.marker)),"background"in r&&r.background&&(r.background=k(r.background)),r}function x(t,r){const i="mesh"!==t.geometryType&&t.worldScale?t.view:null;switch(t.geometryType){case"point":case"multipoint":{const o=r;return g({color:o.color,noDataColor:o.noDataColor,outline:o.outline,size:o.size,noDataSize:o.noDataSize,minSize:o.minSize,maxSize:o.maxSize,opacity:o.opacity||1},i)}case"polyline":{const t=r;return function(t,r){return{color:new o(t.color),noDataColor:new o(t.noDataColor),width:r?e(t.width,r):t.width,noDataWidth:r?e(t.noDataWidth,r):t.noDataWidth,minWidth:r?e(t.minWidth,r):t.minWidth,maxWidth:r?e(t.maxWidth,r):t.maxWidth,opacity:1}}({color:t.color,noDataColor:t.noDataColor,width:t.width,noDataWidth:t.noDataWidth,minWidth:t.minWidth,maxWidth:t.maxWidth},i)}case"polygon":{const t=r,e=t.marker;return delete e.opacity,function(t,r){const i=g(t.marker,r);return delete i.opacity,{marker:i,background:{color:new o(t.background.color),outline:{color:new o(t.background.outline.color),width:t.background.outline.width}},opacity:t.opacity}}({marker:e,background:t.background,opacity:t.opacity||1},i)}}}function g(t,r){return{color:new o(t.color),noDataColor:new o(t.noDataColor),outline:{color:new o(t.outline.color),width:t.outline.width},size:r?e(t.size,r):t.size,noDataSize:r?e(t.noDataSize,r):t.noDataSize,minSize:r?e(t.minSize,r):t.minSize,maxSize:r?e(t.maxSize,r):t.maxSize,opacity:t.opacity}}export{k as cloneScheme,j as getSchemes,y as getThemes};

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{O as s}from"../../chunks/OperatorProximity.js";import{Y as t,X as r}from"../../chunks/unitUtils.js";import{f as o,D as i,g as e}from"../../chunks/converterAPI.js";import{t as n}from"../../chunks/proximityResult.js";import"../../chunks/Transformation2D.js";import"../../chunks/SideCalculator2D-CsYV5zVZ.js";import"../../core/lang.js";import"../../chunks/jsonMap.js";import"../../config.js";import"../../chunks/Logger.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/JSONSupport.js";import"../../chunks/tslib.es6.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../geometry.js";import"../Extent.js";import"../Geometry.js";import"../../chunks/reader.js";import"../SpatialReference.js";import"../../chunks/writer.js";import"../Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../support/webMercatorUtils.js";import"../Multipoint.js";import"../../chunks/zmUtils.js";import"../Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../Polyline.js";import"../../chunks/typeUtils.js";import"../support/jsonUtils.js";const c=new s;function p(s,r,p={}){const{calculateLeftRightSide:m=!1,testPolygonInterior:u=!0,unit:a}=p,j=c.getNearestCoordinate(o(s),i(r).getXY(),u,m);if(a&&j.m_distance){const r=e(s);j.m_distance=t(j.m_distance,r,a)}return n(j,s,m)}function m(s,r,p={}){const{unit:m}=p,u=c.getNearestVertex(o(s),i(r).getXY());if(m&&u.m_distance){const r=e(s);u.m_distance=t(u.m_distance,r,m)}return n(u,s)}function u(s,p,m,u,a={}){const{unit:j}=a,l=e(s);return j&&m&&(m=r(m,j,l)),c.getNearestVertices(o(s),i(p).getXY(),m,u).map((r=>(j&&r.m_distance&&(r.m_distance=t(r.m_distance,l,j)),n(r,s))))}function a(){return c.supportsCurves()}export{p as getNearestCoordinate,m as getNearestVertex,u as getNearestVertices,a as supportsCurves};

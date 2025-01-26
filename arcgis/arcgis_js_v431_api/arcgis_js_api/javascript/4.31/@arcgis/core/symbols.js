/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{b as s}from"./chunks/ensureType.js";import{c as o}from"./core/accessorSupport/decorators/subclass.js";import r from"./symbols/CIMSymbol.js";export{default as ExtrudeSymbol3DLayer}from"./symbols/ExtrudeSymbol3DLayer.js";export{default as BaseFillSymbol}from"./symbols/FillSymbol.js";export{default as FillSymbol3DLayer}from"./symbols/FillSymbol3DLayer.js";export{default as Font}from"./symbols/Font.js";export{default as IconSymbol3DLayer}from"./symbols/IconSymbol3DLayer.js";import e from"./symbols/LabelSymbol3D.js";import t from"./symbols/LineSymbol3D.js";export{default as LineSymbol3DLayer}from"./symbols/LineSymbol3DLayer.js";export{default as BaseMarkerSymbol}from"./symbols/MarkerSymbol.js";import m from"./symbols/MeshSymbol3D.js";export{default as ObjectSymbol3DLayer}from"./symbols/ObjectSymbol3DLayer.js";export{default as PathSymbol3DLayer}from"./symbols/PathSymbol3DLayer.js";import l from"./symbols/PictureFillSymbol.js";import i from"./symbols/PictureMarkerSymbol.js";import p from"./symbols/PointSymbol3D.js";import a from"./symbols/PolygonSymbol3D.js";import y from"./symbols/SimpleFillSymbol.js";import n from"./symbols/SimpleLineSymbol.js";import c from"./symbols/SimpleMarkerSymbol.js";import b from"./symbols/Symbol.js";export{default as BaseSymbol3D}from"./symbols/Symbol3D.js";export{default as BaseSymbol3DLayer}from"./symbols/Symbol3DLayer.js";import j from"./symbols/TextSymbol.js";export{default as TextSymbol3DLayer}from"./symbols/TextSymbol3DLayer.js";export{default as WaterSymbol3DLayer}from"./symbols/WaterSymbol3DLayer.js";import u from"./symbols/WebStyleSymbol.js";export{default as LineCallout3D,L as LineCallout3DBorder}from"./symbols/callouts/LineCallout3D.js";import"./core/lang.js";import"./chunks/Logger.js";import"./config.js";import"./chunks/metadata.js";import"./chunks/utils.js";import"./chunks/handleUtils.js";import"./chunks/tracking.js";import"./core/Error.js";import"./chunks/tslib.es6.js";import"./core/accessorSupport/decorators/property.js";import"./chunks/enumeration.js";import"./chunks/jsonMap.js";import"./chunks/reader.js";import"./chunks/writer.js";import"./layers/support/fieldUtils.js";import"./core/Accessor.js";import"./core/Handles.js";import"./chunks/maybe.js";import"./chunks/ObservableBase.js";import"./core/scheduling.js";import"./core/promiseUtils.js";import"./core/sql.js";import"./intl.js";import"./chunks/date.js";import"./chunks/locale.js";import"./chunks/datetime.js";import"./chunks/number.js";import"./chunks/substitute.js";import"./chunks/messages.js";import"./request.js";import"./kernel.js";import"./core/urlUtils.js";import"./core/JSONSupport.js";import"./chunks/assets.js";import"./chunks/mathUtils.js";import"./geometry.js";import"./geometry/Extent.js";import"./geometry/Geometry.js";import"./geometry/SpatialReference.js";import"./chunks/unitUtils.js";import"./geometry/Point.js";import"./core/accessorSupport/decorators/cast.js";import"./geometry/support/webMercatorUtils.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/coordsUtils.js";import"./chunks/Axis.js";import"./chunks/extentUtils.js";import"./chunks/boundsUtils.js";import"./chunks/aaBoundingRect.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./geometry/support/jsonUtils.js";import"./chunks/utils4.js";import"./symbols/edges/Edges3D.js";import"./Color.js";import"./chunks/colorUtils.js";import"./chunks/screenUtils.js";import"./chunks/materialUtils.js";import"./chunks/opacityUtils.js";import"./symbols/edges/SketchEdges3D.js";import"./symbols/edges/SolidEdges3D.js";import"./chunks/Symbol3DMaterial.js";import"./chunks/vec3f64.js";import"./symbols/patterns/LineStylePattern3D.js";import"./symbols/patterns/StylePattern3D.js";import"./chunks/utils5.js";import"./chunks/colors.js";import"./chunks/symbolLayerUtils3D.js";import"./chunks/aaBoundingBox.js";import"./chunks/persistableUrlUtils.js";import"./core/Collection.js";import"./core/Evented.js";import"./chunks/shared.js";import"./chunks/SimpleObservable.js";import"./chunks/calloutUtils.js";import"./symbols/callouts/Callout3D.js";import"./symbols/support/Symbol3DVerticalOffset.js";import"./symbols/LineStyleMarker3D.js";import"./core/Clonable.js";import"./chunks/lineMarkers.js";import"./chunks/urlUtils.js";import"./core/reactiveUtils.js";import"./chunks/asyncUtils.js";import"./symbols/LineSymbol.js";import"./symbols/LineSymbolMarker.js";import"./chunks/collectionUtils.js";import"./portal/Portal.js";import"./core/Loadable.js";import"./core/Promise.js";import"./portal/PortalGroup.js";import"./portal/PortalQueryParams.js";import"./portal/PortalQueryResult.js";import"./portal/PortalUser.js";import"./portal/PortalFolder.js";import"./symbols/support/StyleOrigin.js";import"./chunks/Thumbnail.js";function k(s){return s instanceof b}function d(s){if(!s)return!1;switch(s.type){case"picture-fill":case"picture-marker":case"simple-fill":case"simple-line":case"simple-marker":case"text":case"cim":return!0;default:return!1}}function f(s){if(!s)return!1;switch(s.type){case"label-3d":case"line-3d":case"mesh-3d":case"point-3d":case"polygon-3d":return!0;default:return!1}}const h={base:b,key:"type",typeMap:{"simple-fill":y,"picture-fill":l,"picture-marker":i,"simple-line":n,"simple-marker":c,text:j,"label-3d":e,"line-3d":t,"mesh-3d":m,"point-3d":p,"polygon-3d":a,"web-style":u,cim:r},errorContext:"symbol"},S={base:b,key:"type",typeMap:{"picture-marker":i,"simple-marker":c,"point-3d":p,cim:r},errorContext:"symbol"},x={base:b,key:"type",typeMap:{"simple-line":n,"line-3d":t,cim:r},errorContext:"symbol"},D={base:b,key:"type",typeMap:{"simple-fill":y,"picture-fill":l,"polygon-3d":a,cim:r},errorContext:"symbol"},g={base:b,key:"type",typeMap:{"picture-marker":i,"simple-marker":c,text:j,"web-style":u,cim:r},errorContext:"symbol"},U=o({types:h}),M={base:b,key:"type",typeMap:{"simple-fill":y,"picture-fill":l,"picture-marker":i,"simple-line":n,"simple-marker":c,text:j,"line-3d":t,"mesh-3d":m,"point-3d":p,"polygon-3d":a,"web-style":u,cim:r},errorContext:"symbol"},P={base:b,key:"type",typeMap:{text:j,"label-3d":e},errorContext:"symbol"},C={base:b,key:"type",typeMap:{"label-3d":e,"line-3d":t,"mesh-3d":m,"point-3d":p,"polygon-3d":a,"web-style":u},errorContext:"symbol"},w={base:b,key:"type",typeMap:{"line-3d":t,"mesh-3d":m,"point-3d":p,"polygon-3d":a,"web-style":u,cim:r},errorContext:"symbol"},B={base:b,key:"type",typeMap:{"label-3d":e},errorContext:"symbol"},F=s(h);export{b as BaseSymbol,r as CIMSymbol,e as LabelSymbol3D,t as LineSymbol3D,m as MeshSymbol3D,l as PictureFillSymbol,i as PictureMarkerSymbol,p as PointSymbol3D,a as PolygonSymbol3D,y as SimpleFillSymbol,n as SimpleLineSymbol,c as SimpleMarkerSymbol,j as TextSymbol,u as WebStyleSymbol,F as ensureType,k as isSymbol,d as isSymbol2D,f as isSymbol3D,x as lineSymbolTypes,S as pointSymbolTypes,D as polygonSymbolTypes,U as readSymbol,h as symbolTypes,C as symbolTypes3D,g as symbolTypesCluster,P as symbolTypesLabel,B as symbolTypesLabel3D,M as symbolTypesRenderer,w as symbolTypesRenderer3D};

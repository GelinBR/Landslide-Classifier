/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../symbols.js";import e from"../core/Error.js";import{clone as r}from"../core/lang.js";import n from"../renderers/visualVariables/support/SizeStop.js";import{P as a}from"./enums2.js";import t from"../symbols/CIMSymbol.js";var i;function o(r){if(null!=r.minDataValue&&null!=r.maxDataValue&&null!=r.minSize&&null!=r.maxSize&&"number"==typeof r.minSize&&"number"==typeof r.maxSize)return[new n({value:r.minDataValue,size:r.minSize}),new n({value:r.maxDataValue,size:r.maxSize})];throw new e("create-reference-size-symbol","Invalid size variable")}function l(e){const{view:r,field:n,normalizationField:a,sizeStops:t,sizeByScaleEnabled:o}=e,{value:l,size:s}=t[0],{value:m,size:c}=t[1];let u,y=0;n&&(y=`$feature["${n}"]`,u=`\n      if(!HasValue($feature, "${n}")){\n        return 0;\n      }\n      $feature["${n}"];\n    `),a&&(y=`$feature["${n}"] / $feature["${a}"]`,u=`if(!HasValue($feature, "${n}") || !HasValue($feature, "${a}") || $feature["${a}"] <= 0){\n        return 0;\n      }\n      $feature["${n}"];\n      $feature["${a}"];`);const p={type:"CIMExpressionInfo",title:"Size in pixels of outer ring",expression:o?`\n      ${u}\n      var maxSize = ${c};\n      var referenceScale = ${r.scale};\n      return (maxSize * (referenceScale / $view.scale));\n    `:`${u}\n      return ${c}`,returnType:"Default"},f={type:"CIMExpressionInfo",title:"Size in pixels of inner ring",expression:`\n        ${u}\n        var value = ${y};\n\n        var referenceScale = ${r.scale};\n        var referenceScaleRatio = ${o?"(referenceScale / $view.scale)":1};\n        var maxSize = ${c} * referenceScaleRatio;\n        var minSize = ${s} * referenceScaleRatio;\n\n        var minDataValue = ${l};\n        var maxDataValue = ${m};\n\n        var ratio = Constrain(( value - minDataValue ) / ( maxDataValue - minDataValue ), 0, 1);\n\n        var innerDotSize = Constrain(maxSize * ratio, minSize, maxSize);\n        return innerDotSize;\n      `,returnType:"Default"};return[{type:"CIMPrimitiveOverride",primitiveName:i.OuterRing,propertyName:"Size",valueExpressionInfo:p},{type:"CIMPrimitiveOverride",primitiveName:i.InnerDot,propertyName:"Size",valueExpressionInfo:f}]}function s(e){switch(e){case"circle":return{rings:[[[8.5,.2],[7.06,.33],[5.66,.7],[4.35,1.31],[3.16,2.14],[2.14,3.16],[1.31,4.35],[.7,5.66],[.33,7.06],[.2,8.5],[.33,9.94],[.7,11.34],[1.31,12.65],[2.14,13.84],[3.16,14.86],[4.35,15.69],[5.66,16.3],[7.06,16.67],[8.5,16.8],[9.94,16.67],[11.34,16.3],[12.65,15.69],[13.84,14.86],[14.86,13.84],[15.69,12.65],[16.3,11.34],[16.67,9.94],[16.8,8.5],[16.67,7.06],[16.3,5.66],[15.69,4.35],[14.86,3.16],[13.84,2.14],[12.65,1.31],[11.34,.7],[9.94,.33],[8.5,.2]]]};case"square":return{rings:[[[.5,.5],[.5,16.5],[16.5,16.5],[16.5,.5],[.5,.5]]]};case"diamond":return{rings:[[[8.5,.5],[.2,8.5],[8.5,16.5],[16.5,8.5],[8.5,.5]]]};case"hexagon-pointy":return{rings:[[[15.86,12.75],[15.86,4.25],[8.5,0],[1.14,4.25],[1.14,12.75],[8.5,17],[15.86,12.75]]]};case"hexagon-flat":return{rings:[[[12.75,15.86],[17,8.5],[12.75,1.14],[4.25,1.14],[0,8.5],[4.25,15.86],[12.75,15.86]]]}}}function m(e){const{type:r,color:n,colorLocked:t}=e;return{type:"CIMVectorMarker",enable:!0,colorLocked:!1,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",primitiveName:i.OuterRing,frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:s(r),symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:n.toArray(),colorLocked:!!t,effects:[{type:"CIMGeometricEffectDonut",width:.75}]}]}}],scaleSymbolsProportionally:!1,respectFrame:!0,markerPlacement:{type:"CIMMarkerPlacementPolygonCenter",placePerPart:!1,method:a.OnPolygon,offsetX:0,offsetY:0,clipAtBoundary:!1},size:20}}function c(e){const{type:r,color:n}=e;return{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:0},anchorPointUnits:"Relative",primitiveName:i.InnerDot,frame:{xmin:0,ymin:0,xmax:17,ymax:17},markerGraphics:[{type:"CIMMarkerGraphic",geometry:s(r),symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:n.toArray()}]}}],scaleSymbolsProportionally:!0,respectFrame:!0,markerPlacement:{type:"CIMMarkerPlacementPolygonCenter",placePerPart:!1,method:a.OnPolygon,offsetX:0,offsetY:0,clipAtBoundary:!1},size:10}}function u(e){const{primitiveOverrides:r}=e;return new t({data:{type:"CIMSymbolReference",symbol:{type:"CIMPolygonSymbol",symbolLayers:[m(e),c(e)]},primitiveOverrides:r}})}function y(e){return"CIMVectorMarker"===e?.type?e.markerGraphics?.[0]:void 0}function p(e){return"CIMPolygonSymbol"===e?.symbol?.type?e.symbol.symbolLayers?.[0]:void 0}function f(e,r){"CIMVectorMarker"===e?.type&&null!=r&&(e.size=r)}function v(e,r){const n=y(e);n&&null!=r&&(n.geometry=s(r))}function S(e,r){const n=p(y(e));n&&null!=r&&(n.color=r.toArray())}function z(e,r,n){const a=p(y(e));a&&null!=r&&n&&(a.colorLocked=r)}function d(e,n){const{outerRingSize:a,innerDotSize:t,type:o,color:l,colorLocked:s,primitiveOverrides:m}=n,c="CIMPolygonSymbol"===e.data.symbol?.type?e.data.symbol.symbolLayers:null;if(2===c?.length)for(const e of c){const r=e.primitiveName===i.OuterRing;f(e,r?a:t),v(e,o),S(e,l),z(e,s,r)}return null!=a&&null!=t&&(e.data.primitiveOverrides=null),void 0!==m&&(e.data.primitiveOverrides=r(m)),e}!function(e){e.OuterRing="reference-size-outer-ring",e.InnerDot="reference-size-inner-dot"}(i||(i={}));export{u as a,l as c,o as g,d as u};

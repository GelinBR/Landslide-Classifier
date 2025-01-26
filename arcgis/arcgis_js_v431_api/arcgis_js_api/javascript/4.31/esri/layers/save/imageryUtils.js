// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./utils","../../portal/support/portalItemUtils"],function(d,f,c){function g(a){if("imagery"===a.type)return{isValid:!0};({raster:a}=a);a="Function"===a?.datasetFormat?a.primaryRasters?.rasters[0]:a;return{isValid:"RasterTileServer"===a?.datasetFormat&&("Raster"===a.tileType||"Map"===a.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function h(a){a=a.layerJSON;return Promise.resolve(a&&Object.keys(a).length?a:null)}async function k(a,b){const {parsedUrl:e,
title:l,fullExtent:m}=a;b.url=e.path;b.title||(b.title=l);try{b.extent=await c.getWGS84ExtentForItem(m)}catch{b.extent=void 0}c.removeTypeKeyword(b,c.typeKeyword.METADATA);c.toggleTypeKeyword(b,c.typeKeyword.TILED_IMAGERY,"imagery-tile"===a.type)}d.save=async function(a,b){return f.save({layer:a,itemType:"Image Service",validateLayer:g,createItemData:h,errorNamePrefix:"imagery"===a.type?"imagery-layer-save":"imagery-tile-layer-save"},b)};d.saveAs=async function(a,b,e){return f.saveAs({layer:a,itemType:"Image Service",
validateLayer:g,createItemData:h,errorNamePrefix:"imagery"===a.type?"imagery-layer-save-as":"imagery-tile-layer-save-as",newItem:b,setItemProperties:k},e)};Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
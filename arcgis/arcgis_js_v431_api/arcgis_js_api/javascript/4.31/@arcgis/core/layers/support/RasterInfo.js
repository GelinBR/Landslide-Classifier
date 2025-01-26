/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{clone as o}from"../../core/lang.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import s from"../../geometry/Extent.js";import n from"../../geometry/SpatialReference.js";import p from"./RasterBandInfo.js";import a from"./RasterSensorInfo.js";import l from"../../geometry/Point.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";var h;let m=h=class extends e{constructor(){super(...arguments),this.blockWidth=void 0,this.blockHeight=void 0,this.compression=null,this.origin=null,this.firstPyramidLevel=null,this.maximumPyramidLevel=null,this.pyramidScalingFactor=2,this.pyramidBlockWidth=null,this.pyramidBlockHeight=null,this.isVirtualTileInfo=!1,this.tileInfo=null,this.transposeInfo=null,this.blockBoundary=null}clone(){return new h({blockWidth:this.blockWidth,blockHeight:this.blockHeight,compression:this.compression,origin:o(this.origin),firstPyramidLevel:this.firstPyramidLevel,maximumPyramidLevel:this.maximumPyramidLevel,pyramidResolutions:o(this.pyramidResolutions),pyramidScalingFactor:this.pyramidScalingFactor,pyramidBlockWidth:this.pyramidBlockWidth,pyramidBlockHeight:this.pyramidBlockHeight,isVirtualTileInfo:this.isVirtualTileInfo,tileInfo:o(this.tileInfo),transposeInfo:o(this.transposeInfo),blockBoundary:o(this.blockBoundary)})}};t([i({type:Number,json:{write:!0}})],m.prototype,"blockWidth",void 0),t([i({type:Number,json:{write:!0}})],m.prototype,"blockHeight",void 0),t([i({type:String,json:{write:!0}})],m.prototype,"compression",void 0),t([i({type:l,json:{write:!0}})],m.prototype,"origin",void 0),t([i({type:Number,json:{write:!0}})],m.prototype,"firstPyramidLevel",void 0),t([i({type:Number,json:{write:!0}})],m.prototype,"maximumPyramidLevel",void 0),t([i({json:{write:!0}})],m.prototype,"pyramidResolutions",void 0),t([i({type:Number,json:{write:!0}})],m.prototype,"pyramidScalingFactor",void 0),t([i({type:Number,json:{write:!0}})],m.prototype,"pyramidBlockWidth",void 0),t([i({type:Number,json:{write:!0}})],m.prototype,"pyramidBlockHeight",void 0),t([i({type:Boolean,json:{write:!0}})],m.prototype,"isVirtualTileInfo",void 0),t([i({json:{write:!0}})],m.prototype,"tileInfo",void 0),t([i()],m.prototype,"transposeInfo",void 0),t([i()],m.prototype,"blockBoundary",void 0),m=h=t([r("esri.layers.support.RasterStorageInfo")],m);const u=m;var d;let y=d=class extends e{constructor(t){super(t),this.attributeTable=null,this.bandCount=null,this.colormap=null,this.extent=null,this.format=void 0,this.height=null,this.width=null,this.histograms=null,this.keyProperties={},this.multidimensionalInfo=null,this.noDataValue=null,this.pixelSize=null,this.pixelType=null,this.isPseudoSpatialReference=!1,this.spatialReference=null,this.statistics=null,this.storageInfo=null,this.transform=null}get bandInfos(){const t=this.keyProperties.BandProperties,{bandCount:e}=this;if(!t?.length||t.length<e){const t=[];for(let o=1;o<=e;o++)t.push(new p({name:"band_"+o}));return t}const o=t.map((t=>p.fromJSON(t)));for(let t=0;t<o.length;t++)o[t].name=o[t].name||"band_"+(t+1);return o}get dataType(){const t=this.keyProperties?.DataType?.toLowerCase()??"generic";return"stdtime"===t?"standard-time":t}get nativeExtent(){return this._get("nativeExtent")||this.extent}set nativeExtent(t){t&&this._set("nativeExtent",t)}get nativePixelSize(){if(null==this.transform||!this.transform.affectsPixelSize)return this.pixelSize;const t=this.nativeExtent;return{x:t.width/this.width,y:t.height/this.height}}get hasMultidimensionalTranspose(){return!!this.storageInfo?.transposeInfo}get sensorInfo(){if(this.keyProperties?.SensorName)return a.fromJSON(this.keyProperties)}clone(){return new d({attributeTable:o(this.attributeTable),bandCount:this.bandCount,colormap:o(this.colormap),extent:o(this.extent),format:this.format,height:this.height,width:this.width,histograms:o(this.histograms),keyProperties:o(this.keyProperties),multidimensionalInfo:o(this.multidimensionalInfo),noDataValue:this.noDataValue,pixelSize:o(this.pixelSize),pixelType:this.pixelType,isPseudoSpatialReference:this.isPseudoSpatialReference,spatialReference:o(this.spatialReference),statistics:o(this.statistics),storageInfo:o(this.storageInfo),transform:o(this.transform)})}};t([i({json:{write:!0}})],y.prototype,"attributeTable",void 0),t([i({json:{write:!0}})],y.prototype,"bandCount",void 0),t([i({readOnly:!0})],y.prototype,"bandInfos",null),t([i({json:{write:!0}})],y.prototype,"colormap",void 0),t([i({type:String,readOnly:!0})],y.prototype,"dataType",null),t([i({type:s,json:{write:!0}})],y.prototype,"extent",void 0),t([i({type:s,json:{write:!0}})],y.prototype,"nativeExtent",null),t([i({json:{write:!0}})],y.prototype,"nativePixelSize",null),t([i({json:{write:!0}})],y.prototype,"format",void 0),t([i({json:{write:!0}})],y.prototype,"height",void 0),t([i({json:{write:!0}})],y.prototype,"width",void 0),t([i({json:{write:!0}})],y.prototype,"hasMultidimensionalTranspose",null),t([i({json:{write:!0}})],y.prototype,"histograms",void 0),t([i({json:{write:!0}})],y.prototype,"keyProperties",void 0),t([i({json:{write:!0}})],y.prototype,"multidimensionalInfo",void 0),t([i({json:{write:!0}})],y.prototype,"noDataValue",void 0),t([i({json:{write:!0}})],y.prototype,"pixelSize",void 0),t([i({json:{write:!0}})],y.prototype,"pixelType",void 0),t([i()],y.prototype,"isPseudoSpatialReference",void 0),t([i({readOnly:!0})],y.prototype,"sensorInfo",null),t([i({type:n,json:{write:!0}})],y.prototype,"spatialReference",void 0),t([i({json:{write:!0}})],y.prototype,"statistics",void 0),t([i({type:u,json:{write:!0}})],y.prototype,"storageInfo",void 0),t([i({json:{write:!0}})],y.prototype,"transform",void 0),y=d=t([r("esri.layers.support.RasterInfo")],y);const c=y;export{u as R,c as default};

// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){class h{constructor(a,e,c,b){this._maxValue=this._minValue=this._hasNoDataValues=null;"pixelData"in a?(this.values=a.pixelData,this.width=a.width,this.height=a.height,this.noDataValue=a.noDataValue):(this.values=a,this.width=e,this.height=c,this.noDataValue=b)}get hasNoDataValues(){null==this._hasNoDataValues&&(this._hasNoDataValues=this.values.includes(this.noDataValue));return this._hasNoDataValues}get minValue(){this._ensureBounds();return this._minValue}get maxValue(){this._ensureBounds();
return this._maxValue}_ensureBounds(){if(null==this._minValue){var {noDataValue:a,values:e}=this,c=Infinity,b=-Infinity,g=!0;for(const d of e)d===a?this._hasNoDataValues=!0:(c=d<c?d:c,b=d>b?d:b,g=!1);g?this._maxValue=this._minValue=0:(this._minValue=c,this._maxValue=-3E38<b?b:0)}}}f.ElevationTileData=h;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
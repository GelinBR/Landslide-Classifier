// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry/support/aaBoundingRect ../../viewpointUtils ./BrushRasterBitmap ./RasterTile ../webgl/enums ../webgl/TileContainer".split(" "),function(f,h,k,l,m,g,n){class p extends n{constructor(){super(...arguments);this.isCustomTilingScheme=!1}createTile(a){const b=this._getTileBounds(a),[c,d]=this.tileInfoView.tileInfo.size,e=this.tileInfoView.getTileResolution(a.level);return new m.RasterTile(a,e,b[0],b[3],c,d)}prepareRenderPasses(a){const b=a.registerRenderPass({name:"imagery (tile)",
brushes:[l],target:()=>this.children.map(c=>c.bitmap),drawPhase:g.WGLDrawPhase.MAP});return[...super.prepareRenderPasses(a),b]}doRender(a){if(this.visible&&a.drawPhase===g.WGLDrawPhase.MAP){var {rasterFunctionChain:b}=this;if(b){if(!b.hasFocalFunction){const [c,d]=this.tileInfoView.tileInfo.size;a.renderPass="raster";a.rasterFunction={name:"Reproject",parameters:{targetImageSize:[c,d],requireNNEdge:b.isSourceSingleBand},pixelType:"f32",id:0,isNoopProcess:!1};super.doRender(a)}if(b?.functions.length){const {functions:c,
hasBranches:d}=b;for(b=0;b<c.length;b++){const e=c[b];"Constant"!==e.name&&"Identity"!==e.name&&(a.renderPass="raster",a.rasterFunction=e,a.hasBranches=d,super.doRender(a))}}a.rasterFunction=null;a.renderPass="bitmap"}else a.renderPass="raster-bitmap";super.doRender(a)}}_getTileBounds(a){const b=this.tileInfoView.getTileBounds(h.create(),a);if(this.isCustomTilingScheme&&a.world){const {tileInfo:d}=this.tileInfoView,e=k.getWorldWidth(d.spatialReference);if(e){var c=d.lodAt(a.level);if(!c)return b;
({resolution:c}=c);c*=d.size[0];b[0]=e*a.world+d.origin.x+a.col*c;b[2]=b[0]+c}}return b}}f.RasterTileContainer=p;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
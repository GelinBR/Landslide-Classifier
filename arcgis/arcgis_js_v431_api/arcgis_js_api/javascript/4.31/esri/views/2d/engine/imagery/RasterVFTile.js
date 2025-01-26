// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/math/mat3","../../../../core/libs/gl-matrix-2/factories/mat3f32","./RasterVFDisplayObject","../webgl/TiledDisplayObject"],function(k,l,m,n,p){class q extends p.TiledDisplayObject{constructor(a,b,c,g,d,e,h=null){super(a,b,c,g,d,e);this.tileData=new n.RasterVFDisplayObject(h);this.tileData.coordScale=[d,e];this.tileData.once("isReady",()=>this.ready())}destroy(){super.destroy();this.tileData.destroy();this.stage=this.tileData=null}set stencilRef(a){this.tileData.stencilRef=
a}get stencilRef(){return this.tileData.stencilRef}_createTransforms(){return{displayViewScreenMat3:m.create(),tileMat3:m.create()}}setTransform(a){super.setTransform(a);const b=this.resolution/(a.resolution*a.pixelRatio),c=this.transforms.tileMat3,[g,d]=this.tileData.offset,[e,h]=a.toScreenNoRotation([0,0],[this.x+g*this.resolution,this.y-d*this.resolution]),{symbolTileSize:f}=this.tileData.symbolizerParameters;l.set(c,Math.round((this.width-this.tileData.offset[0])/f)*f/this.rangeX*b,0,0,0,Math.round((this.height-
this.tileData.offset[1])/f)*f/this.rangeY*b,0,e,h,1);l.multiply(this.transforms.displayViewScreenMat3,a.displayViewMat3,c);this.tileData.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.tileData.stage=this.stage}onDetach(){this.tileData.stage=null}}k.RasterVFTile=q;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
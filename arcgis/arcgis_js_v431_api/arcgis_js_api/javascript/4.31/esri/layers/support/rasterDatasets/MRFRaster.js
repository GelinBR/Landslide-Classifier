// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../PixelBlock ../RasterInfo ../RasterStorageInfo ./BaseRaster ./pamParser ./xmlUtilities ../rasterFormats/utils ../rasterFunctions/stretchUtils ../../../geometry/SpatialReference ../../../geometry/Extent ../../../geometry/Point".split(" "),function(z,x,A,B,N,O,P,G,H,
I,J,K,D,t,L,M,y,E,F){const v=new Map;v.set("Int8","s8");v.set("UInt8","u8");v.set("Int16","s16");v.set("UInt16","u16");v.set("Int32","s32");v.set("UInt32","u32");v.set("Float32","f32");v.set("Float64","f32");v.set("Double64","f32");const w=new Map;w.set("none",{blobExtension:".til",isOneSegment:!0,decoderFormat:"bip"});w.set("lerc",{blobExtension:".lrc",isOneSegment:!1,decoderFormat:"lerc"});w.set("deflate",{blobExtension:".pzp",isOneSegment:!0,decoderFormat:"deflate"});w.set("jpeg",{blobExtension:".pjg",
isOneSegment:!0,decoderFormat:"jpg"});x=class extends K{constructor(){super(...arguments);this._storageIndex=this._files=null;this.datasetFormat="MRF"}async fetchRawTile(a,b,c,e={}){const {blockWidth:g,blockHeight:r,blockBoundary:q}=this.rasterInfo.storageInfo;var d=q[a];if(!d||d.maxRow<b||d.maxCol<c||d.minRow>b||d.minCol>c)return null;const {bandCount:h,pixelType:p}=this.rasterInfo,{ranges:k,actualTileWidth:l,actualTileHeight:f}=this._getTileLocation(a,b,c);if(!k||0===k.length)return null;if(0===
k[0].from&&0===k[0].to)return a=new Uint8Array(g*r),new H({width:g,height:r,pixels:void 0,mask:a,validPixelCount:0});({bandIds:b}=this.ioConfig);c=this._getBandSegmentCount();d=[];for(a=a=0;a<c;a++)b&&!b.includes(a)||d.push(this.request(this._files.data,{range:{from:k[a].from,to:k[a].to},responseType:"array-buffer",signal:e.signal}));e=await Promise.all(d);a=e.map(n=>n.data.byteLength).reduce((n,C)=>n+C);d=new Uint8Array(a);const m=[];let u=0;for(a=0;a<c;a++)m.push(u),d.set(new Uint8Array(e[a].data),
u),u+=e[a].data.byteLength;a=w.get(this.rasterInfo.storageInfo.compression).decoderFormat;b=await this.decodePixelBlock(d.buffer,{width:g,height:r,format:a,planes:b?.length||h,offsets:m,pixelType:p});if(null==b)return null;({noDataValue:c}=this.rasterInfo);if(null!=c&&"lerc"!==a&&!b.mask&&(c=c[0],null!=c)){e=b.width*b.height;d=new Uint8Array(e);if(1E24<Math.abs(c))for(a=0;a<e;a++)1E-6<Math.abs((b.pixels[0][a]-c)/c)&&(d[a]=1);else for(a=0;a<e;a++)b.pixels[0][a]!==c&&(d[a]=1);b.mask=d}e=c=0;if(l!==
g||f!==r)if(d=b.mask)for(a=0;a<r;a++)for(e=a*g,c=a<f?l:0;c<g;c++)d[e+c]=0;else for(d=new Uint8Array(g*r),b.mask=d,a=0;a<f;a++)for(e=a*g,c=0;c<l;c++)d[e+c]=1;return b}async _open(a){this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);var b=a?a.signal:null,c=await this.request(this.url,{responseType:"xml",signal:b});const {rasterInfo:e,files:g}=this._parseHeader(c.data),{skipMapInfo:r,skipExtensions:q=[]}=this.ioConfig;q.includes("aux.xml")||r||(a=await this._fetchAuxiliaryData(a),null!=a&&
(e.statistics=a.statistics??e.statistics,(e.histograms=a.histograms)&&null==e.statistics&&(e.statistics=M.estimateStatisticsFromHistograms(a.histograms))));r&&this.updateImageSpaceRasterInfo(e);this._set("rasterInfo",e);this._files=g;b=(await this.request(g.index,{responseType:"array-buffer",signal:b})).data;if(0<b.byteLength%16)throw Error("invalid array buffer must be multiples of 16");var d,h;if(L.isPlatformLittleEndian){a=new Uint8Array(b);var p=new ArrayBuffer(b.byteLength);c=new Uint8Array(p);
for(d=0;d<b.byteLength/4;d++)for(h=0;4>h;h++)c[4*d+h]=a[4*d+3-h];b=new Uint32Array(p)}else b=new Uint32Array(b);this._storageIndex=b;const {blockWidth:k,blockHeight:l}=this.rasterInfo.storageInfo;b=this.rasterInfo.storageInfo.pyramidScalingFactor;const {width:f,height:m}=this.rasterInfo;a=[];c=this._getBandSegmentCount();p=0;for(d=-1;p<this._storageIndex.length;){d++;h=Math.ceil(f/k/b**d)-1;const u=Math.ceil(m/l/b**d)-1;p+=(h+1)*(u+1)*c*4;a.push({maxRow:u,maxCol:h,minCol:0,minRow:0})}this.rasterInfo.storageInfo.blockBoundary=
a;0<d&&(this.rasterInfo.storageInfo.firstPyramidLevel=1,this.rasterInfo.storageInfo.maximumPyramidLevel=d);this.updateTileInfo()}_getBandSegmentCount(){return w.get(this.rasterInfo.storageInfo.compression).isOneSegment?1:this.rasterInfo.bandCount}_getTileLocation(a,b,c){const {blockWidth:e,blockHeight:g,pyramidScalingFactor:r}=this.rasterInfo.storageInfo,{width:q,height:d}=this.rasterInfo,h=this._getBandSegmentCount();let p,k;var l,f=0;let m=0;for(l=0;l<a;l++)m=r**l,p=Math.ceil(q/e/m),k=Math.ceil(d/
g/m),f+=p*k;m=r**a;p=Math.ceil(q/e/m);k=Math.ceil(d/g/m);f=4*(f+(b*p+c))*h;a=this._storageIndex.subarray(f,f+4*h);f=l=0;const u=[];for(let n=0;n<h;n++)l=a[4*n]*2**32+a[4*n+1],f=l+a[4*n+2]*2**32+a[4*n+3],u.push({from:l,to:f});return{ranges:u,actualTileWidth:c<p-1?e:Math.ceil(q/m)-e*(p-1),actualTileHeight:b<k-1?g:Math.ceil(d/m)-g*(k-1)}}_parseHeader(a){var b=t.getElement(a,"MRF_META/Raster");if(!b)throw new A("mrf:open","not a valid MRF format");var c=t.getElement(b,"Size"),e=parseInt(c.getAttribute("x"),
10),g=parseInt(c.getAttribute("y"),10);const r=parseInt(c.getAttribute("c"),10);c=(t.getElementValue(b,"Compression")||"none").toLowerCase();if(!w.has(c))throw new A("mrf:open","currently does not support compression "+c);var q=t.getElementValue(b,"DataType")||"UInt8";const d=v.get(q);if(null==d)throw new A("mrf:open","currently does not support pixel type "+q);var h=t.getElement(b,"PageSize");q=parseInt(h.getAttribute("x"),10);h=parseInt(h.getAttribute("y"),10);b=t.getElement(b,"DataValues");let p;
b&&(b=b.getAttribute("NoData"),null!=b&&(p=b.trim().split(" ").map(C=>parseFloat(C))));if(t.getElement(a,"MRF_META/CachedSource"))throw new A("mrf:open","currently does not support MRF referencing other data files");var k=t.getElement(a,"MRF_META/GeoTags"),l=t.getElement(k,"BoundingBox");b=!1;if(null!=l){var f=parseFloat(l.getAttribute("minx"));var m=parseFloat(l.getAttribute("miny")),u=parseFloat(l.getAttribute("maxx"));l=parseFloat(l.getAttribute("maxy"));var n=t.getElementValue(k,"Projection")||
"";k=y.WGS84;"LOCAL_CS[]"!==n?n.toLowerCase().startsWith("epsg:")?(n=Number(n.slice(5)),isNaN(n)||0===n||(k=new y({wkid:n}))):k=D.parseSpatialReference(n)??y.WGS84:(b=!0,k=new y({wkid:3857}));f=new E(f,m,u,l);f.spatialReference=k}else b=!0,f=new E({xmin:-.5,ymin:.5-g,xmax:e-.5,ymax:.5,spatialReference:new y({wkid:3857})});m=t.getElement(a,"MRF_META/Rsets");u=parseInt(m?.getAttribute("scale")||"2",10);m=f.spatialReference;q=new J({origin:new F({x:f.xmin,y:f.ymax,spatialReference:m}),blockWidth:q,blockHeight:h,
pyramidBlockWidth:q,pyramidBlockHeight:h,compression:c,pyramidScalingFactor:u});h=new F({x:f.width/e,y:f.height/g,spatialReference:m});e=new I({width:e,height:g,extent:f,isPseudoSpatialReference:b,spatialReference:m,bandCount:r,pixelType:d,pixelSize:h,noDataValue:p,storageInfo:q});g=t.getElementValue(a,"datafile");a=t.getElementValue(a,"IndexFile");a={mrf:this.url,index:a||this.url.replace(".mrf",".idx"),data:g||this.url.replace(".mrf",w.get(c).blobExtension)};return{rasterInfo:e,files:a}}async _fetchAuxiliaryData(a){try{const {data:b}=
await this.request(this.url+".aux.xml",{responseType:"xml",signal:a?.signal});return D.parsePAMInfo(b)}catch{return null}}};z.__decorate([B.property()],x.prototype,"_files",void 0);z.__decorate([B.property()],x.prototype,"_storageIndex",void 0);z.__decorate([B.property({type:String,json:{write:!0}})],x.prototype,"datasetFormat",void 0);return x=z.__decorate([G.subclass("esri.layers.support.rasterDatasets.MRFRaster")],x)});
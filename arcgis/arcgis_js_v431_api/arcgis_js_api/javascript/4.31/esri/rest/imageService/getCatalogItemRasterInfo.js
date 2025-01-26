// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../request ../../geometry/Extent ../../geometry/Point ../../layers/support/RasterInfo ../../layers/support/RasterStorageInfo ../utils".split(" "),function(g,h,l,m,n,p,f){g.getCatalogItemRasterInfo=async function(c,a,b){c=f.parseUrl(c);var d=f.encode({...c?.query,f:"json"});b=f.asValidOptions(d,b);c=`${c?.path}/${a}/info`;a=h(`${c}`,b);b=h(`${c}/keyProperties`,b);b=await Promise.allSettled([a,b]);a="fulfilled"===b[0].status?b[0].value.data:null;b="fulfilled"===b[1].status?b[1].value.data:
null;c=null;a.statistics?.length&&(c=a.statistics.map(e=>({min:e[0],max:e[1],avg:e[2],stddev:e[3]})));d=l.fromJSON(a.extent);const q=Math.ceil(d.width/a.pixelSizeX-.1),r=Math.ceil(d.height/a.pixelSizeY-.1),k=d.spatialReference,t=new m({x:a.pixelSizeX,y:a.pixelSizeY,spatialReference:k}),u=a.histograms?.length?a.histograms:null,v=new p({origin:a.origin,blockWidth:a.blockWidth,blockHeight:a.blockHeight,firstPyramidLevel:a.firstPyramidLevel,maximumPyramidLevel:a.maxPyramidLevel});return new n({width:q,
height:r,bandCount:a.bandCount,extent:d,spatialReference:k,pixelSize:t,pixelType:a.pixelType.toLowerCase(),statistics:c,histograms:u,keyProperties:b,storageInfo:v})};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
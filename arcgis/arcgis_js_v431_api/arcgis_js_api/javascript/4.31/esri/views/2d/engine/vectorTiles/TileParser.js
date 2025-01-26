// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../../core/pbf ../../../../core/promiseUtils ../../../../geometry/libtess ../../../../geometry/support/TileClipper ./Feature ./GeometryUtils ./IndexMemoryBuffer ./SourceLayerData ./VertexMemoryBuffer ./buckets/CircleBucket ./buckets/FillBucket ./buckets/LineBucket ./buckets/SymbolBucket ./style/StyleDefinition ../../tiling/enums".split(" "),function(y,z,A,x,B,C,t,D,u,E,F,G,H,v,I){class J{constructor(a,c,b,e,f,h){this._pbfTiles={};this._tileClippers={};this._client=b;this._tile=c;this._sourceDataMaxLOD=
e;if(h){this._styleLayerUIDs=new Set;for(const k of h)this._styleLayerUIDs.add(k)}this._styleRepository=f;this._layers=this._styleRepository?.layers??[];const [l,q,g]=c.tileKey.split("/").map(parseFloat);this._level=l;c=C.getTileMargins(this._level);for(const k of Object.keys(a))b=a[k],this._pbfTiles[k]=new y(new Uint8Array(b.protobuff),new DataView(b.protobuff)),b.refKey&&([b]=b.refKey.split("/").map(parseFloat),b=l-b,0<b&&(e=(1<<b)-1,this._tileClippers[k]=new x.TileClipper(b,q&e,g&e,8,c))),this._tileClippers[k]||
(this._tileClippers[k]=new x.SimpleBuilder)}_canParseStyleLayer(a){return!this._styleLayerUIDs||this._styleLayerUIDs.has(a)}async parse(a){const c=A.loadLibtess(),b=this._initialize(a),{returnedBuckets:e}=b;this._processLayers(b);this._linkReferences(b);this._filterFeatures(b);const f=[],h=new Set,l=(g,k)=>{h.has(g)||(f.push({name:g,repeat:k}),h.add(g))},q={};for(const g of e)g.getResources(g.tileClipper,l,q);if(this._tile.status===I.TileStatus.INVALID)return[];a=this._fetchResources(f,q,a);return Promise.all([...a,
c]).then(()=>this._processFeatures(b.returnedBuckets))}_initialize(a){a=a?.signal;const c=this._parseTileData(this._pbfTiles),b=this._layers,e=this._level,f=this._tileClippers,h=new Map;return{signal:a,sourceNameToTileData:c,layers:b,zoom:e,sourceNameToTileClipper:f,sourceNameToUniqueSourceLayerBuckets:{},sourceNameToUniqueSourceLayers:{},returnedBuckets:[],layerIdToBucket:{},referencerUIDToReferencedId:h}}_processLayers(a){const {sourceNameToTileData:c,zoom:b,layers:e,sourceNameToTileClipper:f,sourceNameToUniqueSourceLayerBuckets:h,
sourceNameToUniqueSourceLayers:l,returnedBuckets:q,layerIdToBucket:g,referencerUIDToReferencedId:k}=a;a=this._sourceDataMaxLOD;for(let w=e.length-1;0<=w;w--){const d=e[w];if(b<a){if(d.minzoom&&b<Math.floor(d.minzoom)||d.maxzoom&&b>=d.maxzoom)continue}else if(d.maxzoom&&b>=d.maxzoom)continue;if(d.type===v.StyleLayerType.BACKGROUND||!this._canParseStyleLayer(d.uid)||!c[d.source]||!f[d.source])continue;var n=f[d.source];const r=d.sourceLayer;var p=c[d.source][r];if(p){var m=l[d.source];m||=l[d.source]=
new Set;m.add(d.sourceLayer);if(d.refLayerId)k.set(d.uid,d.refLayerId);else if(m=this._createBucket(d))m.layerUIDs=[d.uid],m.layerExtent=p.extent,m.tileClipper=n,(n=h[d.source])||(n=h[d.source]={}),(p=n[r])||(p=n[r]=[]),p.push(m),q.push(m),g[d.id]=m}}}_linkReferences(a){const {layerIdToBucket:c,referencerUIDToReferencedId:b}=a;b.forEach((e,f)=>{c[e]&&c[e].layerUIDs.push(f)})}_filterFeatures(a){const {signal:c,sourceNameToTileData:b,sourceNameToUniqueSourceLayerBuckets:e,sourceNameToUniqueSourceLayers:f}=
a;a=10*this._level;const h=10*(this._level+1),l=[],q=[];for(const p of Object.keys(f))f[p].forEach(m=>{l.push(m);q.push(p)});for(let p=0;p<l.length;p++){var g=q[p],k=l[p];if(!b[g]||!e[g])continue;const m=b[g][k];g=e[g][k];if(!g||0===g.length)continue;if(z.isAborted(c))break;k=0;const w=m.getData();for(;w.nextTag(2);){var n=w.getMessage();const d=new B(n,m,k++);n.release();if(n=d.values){const r=n._minzoom;if(r&&r>=h)continue;if((n=n._maxzoom)&&n<=a)continue}for(const r of g)r.pushFeature(d)}}}_fetchResources(a,
c,b){const e=[],f=this._tile.getWorkerTileHandler();0<a.length&&(a=f.fetchSprites(a,this._client,b),e.push(a));for(const h in c)a=c[h],0<a.size&&(a=f.fetchGlyphs(this._tile.tileKey,h,a,this._client,b),e.push(a));return e}_processFeatures(a){a=a.filter(c=>c.hasFeatures()||this._canParseStyleLayer(c.layer.uid));for(const c of a)c.processFeatures(c.tileClipper);return a}_parseTileData(a){const c={};for(const b of Object.keys(a)){const e=a[b],f={};for(;e.next();)switch(e.tag()){case 3:const h=e.getMessage(),
l=new D(h);h.release();f[l.name]=l;break;default:e.skip()}c[b]=f}return c}_createBucket(a){switch(a.type){case v.StyleLayerType.BACKGROUND:return null;case v.StyleLayerType.FILL:return this._createFillBucket(a);case v.StyleLayerType.LINE:return this._createLineBucket(a);case v.StyleLayerType.CIRCLE:return this._createCircleBucket(a);case v.StyleLayerType.SYMBOL:return this._createSymbolBucket(a)}}_createFillBucket(a){return new F(a,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new u.FillVertexBuffer(a.fillMaterial.getStride()),
new t.TriangleIndexBuffer,new u.OutlineVertexBuffer(a.outlineMaterial.getStride()),new t.TriangleIndexBuffer)}_createLineBucket(a){return new G(a,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new u.LineVertexBuffer(a.lineMaterial.getStride()),new t.TriangleIndexBuffer)}_createCircleBucket(a){return new E(a,this._level,this._tile.getWorkerTileHandler().getSpriteItems(),new u.CircleVertexBuffer(a.circleMaterial.getStride()),new t.TriangleIndexBuffer)}_createSymbolBucket(a){const c=
this._tile;return new H(c.tileKey,a,this._level,new u.SymbolVertexBuffer(a.iconMaterial.getStride()),new t.TriangleIndexBuffer,new u.SymbolVertexBuffer(a.textMaterial.getStride()),new t.TriangleIndexBuffer,c.placementEngine,c.getWorkerTileHandler())}}return J});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/has ../../../../core/libs/gl-matrix-2/math/mat3 ../../../../core/libs/gl-matrix-2/factories/mat3f32 ./enums ./RenderBucket ./decluttering/config ../webgl/TiledDisplayObject".split(" "),function(l,u,h,m,g,k,n,q){class p extends q.TiledDisplayObject{constructor(a,b,c,e,d,f,r,t=null){super(a,b,c,e,d,f,4096,4096);this.styleRepository=r;this._memCache=t;this.type="vector-tile";this._referenced=1;this._hasSymbolBuckets=!1;this._usedMemory=256;this.layerData=new Map;this.status=
"loading";this.allSymbolsFadingOut=!1;this.lastOpacityUpdate=0;this.symbols=new Map;this.decluttered=this.neededForCoverage=this.isCoverage=!1;this.parentTile=null;this.childrenTiles=new Set;this.featureIndex=null;this.triangleCount=0;this._processed=!1;this.id=a.id}get hasSymbolBuckets(){return this._hasSymbolBuckets}get isFading(){return this._hasSymbolBuckets&&performance.now()-this.lastOpacityUpdate<n.fadeDuration}get isHoldingForFade(){return this._hasSymbolBuckets&&(!this.allSymbolsFadingOut||
performance.now()-this.lastOpacityUpdate<n.fadeDuration)}get wasRequested(){return"errored"===this.status||"loaded"===this.status||"reloading"===this.status}setData(a){this.changeDataImpl(a);this.requestRender();this.ready();this._processed=!0}deleteLayerData(a){let b=!1;for(const c of a)if(a=this.layerData.get(c))this._usedMemory-=a.usedMemory,a.type===g.BucketType.SYMBOL&&this.symbols.delete(c)&&(b=!0),a.destroy(),this.layerData.delete(c);this._memCache?.updateSize(this.key.id,this,this._usedMemory);
b&&(this.featureIndex?.clear(),this.emit("symbols-changed"));this.requestRender()}processed(){return this._processed}hasData(){return 0<this.layerData.size}hasFeatures(){const a=this.layerData.values();for(const b of a)if(b.hasData())return!0;return!1}dispose(){"unloaded"!==this.status&&(p._destroyRenderBuckets(this.layerData),this.layerData.clear(),this.featureIndex=null,this._usedMemory=0,this.destroy(),this.status="unloaded")}release(){0===--this._referenced&&(this.dispose(),this.stage=null)}retain(){++this._referenced}get usedMemory(){return this._usedMemory}get usedMemoryPerReference(){return this._usedMemory/
(this._referenced||1)}changeDataImpl(a){this.featureIndex?.clear();let b=!1;if(a){const {bucketsWithData:c,emptyBuckets:e}=a;a=this._createRenderBuckets(c);if(e&&0<e.byteLength){const d=new Uint32Array(e);for(const f of d)this._deleteLayerData(f)}for(const [d,f]of a)this._deleteLayerData(d),f.type===g.BucketType.SYMBOL&&(this.symbols.set(d,f.symbols),b=!0),this._usedMemory+=f.usedMemory,this.layerData.set(d,f);this._memCache?.updateSize(this.key.id,this,this.usedMemory)}this._hasSymbolBuckets=!1;
for(const c of this.layerData.values())c.type===g.BucketType.SYMBOL&&(this._hasSymbolBuckets=!0);b&&this.emit("symbols-changed")}attachWithContext(a){this.stage={context:a,trashDisplayObject(b){b.processDetach()},untrashDisplayObject(){return!1}}}setTransform(a){super.setTransform(a);var b=this.resolution/(a.resolution*a.pixelRatio);const c=this.width/this.rangeX*b;b*=this.height/this.rangeY;const e=[0,0];a.toScreen(e,[this.x,this.y]);const d=this.transforms.tileUnitsToPixels;h.identity(d);h.translate(d,
d,e);h.rotate(d,d,Math.PI*a.rotation/180);h.scale(d,d,[c,b,1])}_createTransforms(){return{displayViewScreenMat3:m.create(),tileMat3:m.create(),tileUnitsToPixels:m.create()}}static _destroyRenderBuckets(a){if(a){var b=new Set;for(const c of a.values())b.has(c)||(c.destroy(),b.add(c));a.clear()}}_createRenderBuckets(a){const b=new Map,c=new Map;for(const e of a){a=this._deserializeBucket(e,c);for(const d of a.layerUIDs)b.set(d,a)}return b}_deserializeBucket(a,b){let c=b.get(a);if(c)return c;switch((new Uint32Array(a))[0]){case g.BucketType.FILL:c=
new k.FillRenderBucket(a,this.styleRepository);break;case g.BucketType.LINE:c=new k.LineRenderBucket(a,this.styleRepository);break;case g.BucketType.SYMBOL:c=new k.SymbolRenderBucket(a,this.styleRepository,this);break;case g.BucketType.CIRCLE:c=new k.CircleRenderBucket(a,this.styleRepository)}b.set(a,c);return c}_deleteLayerData(a){if(this.layerData.has(a)){var b=this.layerData.get(a);this._usedMemory-=b.usedMemory;b.destroy();this.layerData.delete(a)}}}l.VectorTile=p;l.tracer=null;Object.defineProperty(l,
Symbol.toStringTag,{value:"Module"})});
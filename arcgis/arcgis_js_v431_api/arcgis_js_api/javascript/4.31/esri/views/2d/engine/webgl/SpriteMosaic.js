// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../../core/Error ../../../../core/has ./definitions ./GeometryUtils ./Rect ./RectangleBinPack ../../../webgl/enums ../../../webgl/Texture ../../../webgl/TextureDescriptor".split(" "),function(y,r,n,t,u,v,z,A,B){function l(a){return a&&"static"===a.type}function w(a,c){const b=new B.TextureDescriptor;b.width=c[0];b.height=c[1];b.wrapMode=z.TextureWrapMode.CLAMP_TO_EDGE;return new A.Texture(a,b,null)}class x{constructor(a,c,b=0){this._mosaicPages=[];this._pageHeight=this._pageWidth=this._currentPage=
this._maxItemSize=0;this._mosaicRects=new Map;this._spriteCopyQueue=[];this.pixelRatio=1;this._pageWidth=a;this._pageHeight=c;0<b&&(this._maxItemSize=b);this.pixelRatio=window.devicePixelRatio||1;this._binPack=new v(this._pageWidth,this._pageHeight);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(Math.floor(this._pageWidth)*Math.floor(this._pageHeight))},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(a){return a>=this._mosaicPages.length?-1:this._mosaicPages[a].size[0]}getHeight(a){return a>=
this._mosaicPages.length?-1:this._mosaicPages[a].size[1]}getPageTexture(a){return a<this._mosaicPages.length?this._mosaicPages[a].texture:null}has(a){return this._mosaicRects.has(a)}get itemCount(){return this._mosaicRects.size}getSpriteItem(a){return this._mosaicRects.get(a)}addSpriteItem(a,c,b,d,e,f,g=1,m=.5,q=1){if(this._mosaicRects.has(a))return this._mosaicRects.get(a);let h,k,p;l(b)?[h,k,p]=this._allocateImage(c[0],c[1]):(h=new u(0,0,c[0],c[1]),k=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:b,
size:[c[0]+2*n.spritePadding,c[1]+2*n.spritePadding],dirty:!0,texture:void 0}));if(0>=h.width||0>=h.height)return null;f={type:"sprite",rect:h,width:c[0],height:c[1],sdf:e,simplePattern:f,rasterizationScale:g,sdfPaddingRatio:m,sdfDecodeCoeff:q,page:k};this._mosaicRects.set(a,f);l(b)&&(r("esri-mosaic-debug")&&this._showDebugSprite(c,b.data),this._copy({rect:h,spriteSize:c,spriteData:b.data,page:k,pageSize:p,repeat:d,sdf:e}));return f}hasItemsToProcess(){return 0!==this._spriteCopyQueue.length}processNextItem(){const a=
this._spriteCopyQueue.pop();a&&this._copy(a)}getMosaicItemPosition(a){a=this.getSpriteItem(a);const c=a?.rect;if(!c)return null;c.width=a.width;c.height=a.height;const b=n.spritePadding,d=this._mosaicPages[a.page].size;return{size:[a.width,a.height],tl:[(c.x+b)/d[0],(c.y+b)/d[1]],br:[(c.x+b+a.width)/d[0],(c.y+b+a.height)/d[1]],page:a.page}}bind(a,c,b=0,d=0){const e=this._mosaicPages[b],f=e.mosaicsData;let g=e.texture;g||(g=w(a,e.size),e.texture=g);g.setSamplingMode(c);l(f)?(a.bindTexture(g,d),e.dirty&&
(g.setData(new Uint8Array(f.data.buffer)),g.generateMipmap(),r("esri-mosaic-debug")&&this._showDebugPage(b))):(f.data.loadFrame(g),a.bindTexture(g,d),g.generateMipmap());e.dirty=!1}getTexture(a,c=0){const b=this._mosaicPages[c],d=b.mosaicsData;let e=b.texture;e||(e=w(a,b.size),b.texture=e);l(d)?b.dirty&&(e.setData(new Uint8Array(d.data.buffer)),e.generateMipmap(),r("esri-mosaic-debug")&&this._showDebugPage(c)):(d.data.loadFrame(e),e.generateMipmap());b.dirty=!1;return e}dispose(){this._binPack=null;
for(const c of this._mosaicPages){var a=c.texture;a&&a.dispose();a=c.mosaicsData;l(a)||a.data.destroy()}this._mosaicPages=null;this._mosaicRects.clear()}static _copyBits(a,c,b,d,e,f,g,m,q,h,k){let p=d*c+b;g=m*f+g;if(k)for(g-=f,k=-1;k<=h;k++,p=((k+h)%h+d)*c+b,g+=f)for(m=-1;m<=q;m++)e[g+m]=a[p+(m+q)%q];else for(b=0;b<h;b++){for(d=0;d<q;d++)e[g+d]=a[p+d];p+=c;g+=f}}_copy(a){if(!(a.page>=this._mosaicPages.length)){var c=this._mosaicPages[a.page],b=c.mosaicsData;if(!l(c.mosaicsData))throw new y("mapview-invalid-resource",
"unsuitable data type!");x._copyBits(a.spriteData,a.spriteSize[0],0,0,b.data,a.pageSize[0],a.rect.x+n.spritePadding,a.rect.y+n.spritePadding,a.spriteSize[0],a.spriteSize[1],a.repeat);c.dirty=!0}}_allocateImage(a,c){a+=2*n.spritePadding;c+=2*n.spritePadding;var b=Math.max(a,c);if(this._maxItemSize&&this._maxItemSize<b){b=2**Math.ceil(t.log2(a));const d=2**Math.ceil(t.log2(c));a=new u(0,0,a,c);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(b*d)},size:[b,d],dirty:!0,texture:void 0});
return[a,this._mosaicPages.length-1,[b,d]]}b=this._binPack.allocate(a,c);return 0>=b.width?(b=this._mosaicPages[this._currentPage],!b.dirty&&l(b.mosaicsData)&&(b.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new v(this._pageWidth,this._pageHeight),this._allocateImage(a,c)):[b,this._currentPage,
[this._pageWidth,this._pageHeight]]}_showDebugSprite([a,c],b){const d=document.createElement("canvas");d.width=a;d.height=c;d.setAttribute("style",`position: absolute; top: ${4+204*C++}px; right: 208px; width: 200px; height: 200px; border: 1px solid black;`);const e=d.getContext("2d");a=new ImageData(a,c);a.data.set(new Uint8Array(b.buffer));e.putImageData(a,0,0);document.body.appendChild(d)}_showDebugPage(a){const {size:[c,b],mosaicsData:d}=this._mosaicPages[a];if(l(d)){var e=`mosaicDebugPage${a}`,
f=document.getElementById(e)??document.createElement("canvas");f.id=e;f.width=c;f.height=b;f.setAttribute("style",`position: absolute; top: ${4+204*a}px; right: 4px; width: 200px; height: 200px; border: 1px solid black;`);a=f.getContext("2d");e=new ImageData(c,b);e.data.set(new Uint8Array(d.data.buffer));a.putImageData(e,0,0);document.body.appendChild(f)}}}let C=0;return x});
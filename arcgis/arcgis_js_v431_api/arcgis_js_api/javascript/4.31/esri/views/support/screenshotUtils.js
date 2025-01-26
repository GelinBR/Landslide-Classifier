// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../core/has","../../core/mathUtils","../../core/imageUtils"],function(p,W,C,N){function D(a,b){const {format:d,quality:e,rotation:g,disableDecorations:k}=a||{};var c=z(a,b.padding);var f=b.width-c.left-c.right;b=b.height-c.top-c.bottom;c={x:0,y:0,width:f,height:b};if(a?.area){null!=a.area.x&&(c.x=Math.floor(a.area.x));null!=a.area.y&&(c.y=Math.floor(a.area.y));var h=null!=a.area.width?Math.floor(a.area.width):null,m=null!=a.area.height?Math.floor(a.area.height):null;c.width=
f-c.x;c.height=b-c.y;null!=h&&null!=m?(c.width=Math.min(c.width,h),c.height=Math.min(c.height,m)):null==h&&null!=m?(h=Math.min(c.width,h),c.height*=h/c.width,c.width=h):null!=h&&null==m&&(h=Math.min(c.height,m),c.width*=h/c.height,c.height=h)}c=O(c,a);h=Math.floor(Math.max(c.x,0));m=Math.floor(Math.max(c.y,0));f={x:h,y:m,width:Math.floor(Math.min(c.width,f-h)),height:Math.floor(Math.min(c.height,b-m))};b=f.width/f.height;c=c.width/c.height;c!==b&&(c>b?(b=Math.floor(f.width/c),f={x:f.x,y:Math.floor(f.y+
(f.height-b)/2),width:f.width,height:b}):(b=Math.floor(f.height*c),f={x:Math.floor(f.x+(f.width-b)/2),y:f.y,width:b,height:f.height}));const {width:n,height:r}=P(a,f);b=E(d);c=F[b];c=C.clamp(null!=e?e:c,0,100);return{format:b,quality:c,area:f,width:n,height:r,rotation:g,disableDecorations:!!k,ignoreBackground:!!a?.ignoreBackground,ignorePadding:!!a?.ignorePadding}}function G(a,b){null==A&&(A=document.createElement("canvas"));var d=A;if(b.premultipliedAlpha){var e=a.data;const k=e.length;for(let c=
0;c<k;c+=4){var g=e[c+3];255!==g&&0<g&&(g=255/g,e[c]*=g,e[c+1]*=g,e[c+2]*=g)}}d.width=a.width;d.height=a.height;e=d.getContext("2d",{willReadFrequently:!0});e.putImageData(a,0,0);b.flipY&&(e.save(),e.globalCompositeOperation="copy",e.scale(1,-1),e.translate(0,-e.canvas.height),e.drawImage(e.canvas,0,0),e.restore());return{ctx:e,canvas:d}}function H(a,b){return a.toDataURL(Q[b.format],b.quality/100)}function P(a,b){if(!a)return b;const d=a.width;a=a.height;if(null!=d&&null!=a)return{width:Math.floor(d),
height:Math.floor(a)};if(null==d&&null==a)return b;b=b.width/b.height;return null==a?{width:Math.floor(d),height:Math.floor(d/b)}:{width:Math.floor(a*b),height:Math.floor(a)}}function O(a,b){if(null==b?.width||null==b.height)return a;b=b.width/b.height;const d=a.width/a.height;if(d===b)return a;if(d<b)return b=Math.floor(a.height*b),a.x-=(b-a.width)/2,a.width=b,a;b=Math.floor(a.width/b);a.y-=(b-a.height)/2;a.height=b;return a}function z(a,b){return!b||a?.ignorePadding?R:b}function E(a){switch(a){case "png":case "jpg":case "jpeg":return a;
case null:case void 0:return"png";default:return"png"}}let A=null;const Q={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"},F={png:100,jpg:98,jpeg:98},R={top:0,right:0,bottom:0,left:0};p.createEmptyImageData=N.createEmptyImageData;p.completeUserSettings=D;p.encode=function(a,b,d){const {ctx:e,canvas:g}=G(a,d);a=e.getImageData(0,0,a.width,a.height);b=H(g,b);g.width=0;g.height=0;return{dataUrl:b,data:a}};p.encodeData=function(a,b){const {ctx:d,canvas:e}=G(a,b);a=d.getImageData(0,0,a.width,a.height);
e.width=0;e.height=0;return a};p.getFormatAndQuality=function(a,b){a=E(a);const d=F[a];b=C.clamp(null!=b?b:d,0,100);return{format:a,quality:b}};p.getMaximumResolutionScale=function(a,b){return b/Math.max(a[0],a[1])};p.resampleHermite=function(a,b,d,e=0,g=0,k=a.width-e,c=a.height-g,f=!1){const {data:h}=a,{width:m,height:n,data:r}=b;k/=m;c/=n;const S=Math.ceil(k/2),T=Math.ceil(c/2);a=a.width;for(let q=0;q<n;q++)for(let t=0;t<m;t++){const v=4*(t+(f?n-q-1:q)*m);let w=0,I=0,J=0,K=0,L=0,M=0;const U=(q+
.5)*c;for(let x=Math.floor(q*c);x<(q+1)*c;x++){var B=Math.abs(U-(x+.5))/T;const V=(t+.5)*k;B*=B;for(let y=Math.floor(t*k);y<(t+1)*k;y++){var l=Math.abs(V-(y+.5))/S;l=Math.sqrt(B+l*l);if(1<=l)continue;l=2*l*l*l-3*l*l+1;const u=4*(e+y+(g+x)*a);M+=l*h[u+3];I+=l;!d&&255>h[u+3]&&(l=l*h[u+3]/255);J+=l*h[u];K+=l*h[u+1];L+=l*h[u+2];w+=l}}r[v]=J/w;r[v+1]=K/w;r[v+2]=L/w;r[v+3]=M/I}return b};p.screenshotSuperSampleSettings=function(a,b,d){if(!b)return a;const {framebufferWidth:e,framebufferHeight:g,pixelRatio:k,
region:c}=a;b=z(a,d);d=b.left+b.right;const f=b.top+b.bottom,h=e-d,m=g-f,n=Math.min(8,Math.min((2048-d)/h,(2048-f)/m));return 1.5>n?a:{...a,framebufferWidth:Math.round(h*n)+d,framebufferHeight:Math.round(m*n)+f,pixelRatio:k*n,resample:{region:{x:Math.round((c.x-b.left)*n)+b.left,y:Math.round((c.y-b.top)*n)+b.top,width:Math.round(c.width*n),height:Math.round(c.height*n)},width:e,height:g}}};p.toDataUrl=H;p.toRenderSettings=function(a,b){const d=D(a,b),e=d.area,g=d.width/e.width,k=z(d,b.padding),c=
k.left+k.right,f=k.top+k.bottom;return{framebufferWidth:Math.floor((b.width-c)*g+c),framebufferHeight:Math.floor((b.height-f)*g+f),region:{x:Math.floor(e.x*g)+k.left,y:Math.floor(e.y*g)+k.top,width:d.width,height:d.height},format:d.format,quality:d.quality,rotation:d.rotation,pixelRatio:g,layers:a?.layers??[],disableDecorations:d.disableDecorations,ignoreBackground:d.ignoreBackground,ignorePadding:d.ignorePadding,objectAndLayerIdColor:!1}};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
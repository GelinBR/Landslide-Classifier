// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/has","../../../../../core/Error","../../../../../core/promiseUtils","../../../../../core/urlUtils"],function(d,n,f,g,h){function l(a){if(!(a instanceof HTMLImageElement))return"image/png";a=a.src;return h.isDataProtocol(a)?(a=h.dataComponents(a),"image/jpeg"===a?.mediaType?a.mediaType:"image/png"):/\.png$/i.test(a)?"image/png":/\.(jpg|jpeg)$/i.test(a)?"image/jpeg":"image/png"}function e(a){if(a instanceof HTMLCanvasElement)return a;if(a instanceof HTMLVideoElement)return null;
const b=document.createElement("canvas");b.width=a.width;b.height=a.height;const c=b.getContext("2d");a instanceof HTMLImageElement?c.drawImage(a,0,0,a.width,a.height):a instanceof ImageData&&c.putImageData(a,0,0);return b}d.encodeBase64DataUri=function(a){const b=[];a=new Uint8Array(a);for(let c=0;c<a.length;c++)b.push(String.fromCharCode(a[c]));return"data:application/octet-stream;base64,"+btoa(b.join(""))};d.imageToArrayBuffer=async function(a,b){const c=e(a);if(null==c)throw new f("imageToArrayBuffer",
"Unsupported image type");const k=l(a);a=await new Promise(m=>c.toBlob(m,k));g.throwIfAborted(b);if(!a)throw new f("imageToArrayBuffer","Failed to encode image");a=await a.arrayBuffer();g.throwIfAborted(b);return{data:a,type:k}};d.imageToDataURI=function(a){a=e(a);return null!=a?a.toDataURL():""};d.imageTypeToCanvas=e;d.isArrayBufferPNG=function(a){if(8>a.byteLength)return!1;a=new Uint8Array(a);return 137===a[0]&&80===a[1]&&78===a[2]&&71===a[3]&&13===a[4]&&10===a[5]&&26===a[6]&&10===a[7]};Object.defineProperty(d,
Symbol.toStringTag,{value:"Module"})});
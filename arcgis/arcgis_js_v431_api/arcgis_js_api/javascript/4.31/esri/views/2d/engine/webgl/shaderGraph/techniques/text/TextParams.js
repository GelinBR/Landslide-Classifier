// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../symbols/cim/utils"],function(e,l){class m{constructor(a){const {offsetX:f,offsetY:g,postAngle:h,fontSize:c,haloSize:n,outlineSize:p,scaleFactor:b,transforms:d}=a;this.offsetX=f;this.offsetY=g;this.postAngle=h;this.fontSize=Math.min(c,96);this.haloSize=n??0;this.outlineSize=p??0;if((this.transforms=d)&&1<d.infos.length){a=l.applyParentTransform(c,h,!1,f,g,d,!1);this.fontSize=Math.min(a.size,96);const k=a.size/c;this.haloSize*=k;this.outlineSize*=k;this.postAngle=
a.rotation;this.offsetX=a.offsetX;this.offsetY=a.offsetY}b&&(this.fontSize*=b,this.offsetX*=b,this.offsetY*=b)}}e.TextMeshTransformProps=m;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
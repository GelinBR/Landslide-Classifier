// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){class c{static local(){null===c.instance&&(c.instance=new c);return c.instance}execute(a,b,d,g,h){return new f(a,b,d)}}c.instance=null;class f{constructor(a,b,d){this._inputGeometries=a;this._offsetX=void 0!==b.offsetX?b.offsetX*d:0;this._offsetY=void 0!==b.offsetY?b.offsetY*d:0}next(){let a=this._inputGeometries.next();for(;a;){if(0<a.totalSize)return this._move(a.clone(),this._offsetX,this._offsetY);a=this._inputGeometries.next()}return null}_move(a,b,d){for(;a.nextPath();)for(;a.nextPoint();)a.x+=
b,a.y+=d;a.reset();return a}}e.EffectMove=c;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
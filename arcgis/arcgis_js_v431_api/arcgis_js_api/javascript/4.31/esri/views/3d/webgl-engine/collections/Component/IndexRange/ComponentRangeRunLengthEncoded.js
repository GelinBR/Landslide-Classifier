// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){class h{constructor(b){this._totalCount=b;this._componentCountCache=-1;this._indexRanges=[0,b]}allVisible(){return this.componentCount===this._totalCount}allInvisible(){return 0===this._indexRanges.length}isVisible(b){if(0>b||b>=this._totalCount)return!1;if(this.allVisible())return!0;const c=this._indexRanges;let a=0,d=c.length/2;if(b<c[2*a]||b>c[2*d]+c[2*d+1])return!1;for(;0<d-a;){const e=Math.floor(.5*(a+d)),f=c[2*e];if(b<f){if(1===d-a)break;d=e}else{if(b<f+c[2*e+
1])return!0;if(1===d-a)break;a=e+1}}return!1}get componentCount(){if(-1===this._componentCountCache){const b=this._indexRanges;let c=0;for(let a=0;a<b.length;a+=2)c+=b[a+1];this._componentCountCache=c}return this._componentCountCache}reset(b){if("all"===b||b.length===this._totalCount)this._indexRanges=[0,this._totalCount];else{{const d=[];if(0!==b.length){var c=b[0],a=1;for(let e=1;e<b.length;e++){const f=b[e];c+a===f?a+=1:(d.push(c),d.push(a),c=f,a=1)}d.push(c);d.push(a)}b=d}this._indexRanges=b}this._componentCountCache=
-1}forEachComponent(b){const c=this._indexRanges;for(let d=0;d<c.length;d+=2){var a=c[d];const e=a+c[d+1];for(;a<e;a++)if(!b(a))return!1}return!0}forEachComponentRange(b){const c=this._indexRanges;for(let a=0;a<c.length;a+=2){const d=c[a];if(!b(d,d+c[a+1]))return!1}return!0}computeOffsetRanges(b){const c=Array(this._indexRanges.length),a=this._indexRanges;for(let e=0;e<a.length;e+=2){var d=a[e];const f=b[d];d=b[d+a[e+1]];c[e]=f;c[e+1]=d-f}return c}}g.ComponentRangeRunLengthEncoded=h;Object.defineProperty(g,
Symbol.toStringTag,{value:"Module"})});
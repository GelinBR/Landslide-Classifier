// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["./ImmutableArray","../geometry/Point"],function(g,e){class f extends g{constructor(b,a,c,d,h,k){super(b);this._lazyPt=[];this._hasM=this._hasZ=!1;this._spRef=a;this._hasZ=c;this._hasM=d;this._cacheId=h;this._partId=k}get(b){if(void 0===this._lazyPt[b]){var a=this._elements[b];if(void 0===a)return;const c=this._hasZ,d=this._hasM;a=c&&!d?new e(a[0],a[1],a[2],void 0,this._spRef):d&&!c?new e(a[0],a[1],void 0,a[2],this._spRef):c&&d?new e(a[0],a[1],a[2],a[3],this._spRef):new e(a[0],a[1],this._spRef);
a.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+b.toString();this._lazyPt[b]=a}return this._lazyPt[b]}equalityTest(b){return b===this?!0:null===b||!1===b instanceof f?!1:b.getUniqueHash()===this.getUniqueHash()}getUniqueHash(){return this._cacheId.toString()+"-"+this._partId.toString()}}return f});
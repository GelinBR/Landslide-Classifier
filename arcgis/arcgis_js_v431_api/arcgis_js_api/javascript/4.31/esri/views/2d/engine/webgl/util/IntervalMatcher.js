// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./Matcher"],function(f,h){class g extends h.FeatureMatcher{constructor(a,b){super();this._intervals=[];this._isMaxInclusive=b;this._field=a}static async fromIntervalSchema(a,b){var c=await a.storage.createComputedField(b);const d=new g(c,b.isMaxInclusive);await Promise.all(b.intervals.map(async e=>{const k=await a.createMeshWriters(e.meshes);d.add(e,k)}));c=await a.createMeshWriters(b.defaultSymbol);d.setDefault(c);b=await a.createMeshWriters(b.backgroundFill);d.setBackgroundFill(b);
return d}add(a,b){this._intervals.push({interval:a,result:b});this._intervals.sort((c,d)=>c.interval.min-d.interval.min)}size(){return super.size()+this._intervals.length}doMatch(a,b){a=this._field?.read(a,b);if(null==a||isNaN(a)||Infinity===a||-Infinity===a)return null;for(b=0;b<this._intervals.length;b++){const {interval:c,result:d}=this._intervals[b],e=this._isMaxInclusive?a<=c.max:a<c.max;if(a>=c.min&&e)return d}return null}}f.IntervalMatcher=g;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
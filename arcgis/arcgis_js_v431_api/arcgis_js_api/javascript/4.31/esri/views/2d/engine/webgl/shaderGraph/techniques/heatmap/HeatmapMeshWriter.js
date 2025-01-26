// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../mesh/MeshWriter","../../../../../../webgl/enums"],function(g,k,e){const h={createComputedParams:a=>a,optionalAttributes:{},attributes:{pos:{type:e.DataType.SHORT,count:2,pack:"position",packPrecisionFactor:10},id:{type:e.DataType.UNSIGNED_BYTE,count:3,pack:"id"},bitset:{type:e.DataType.UNSIGNED_BYTE,count:1},offset:{type:e.DataType.BYTE,count:2,packAlternating:{count:4,pack:()=>[[-1,-1],[1,-1],[-1,1],[1,1]]}}}};class l extends k.MeshWriter{constructor(){super(...arguments);this.vertexSpec=
h}_write(a,b){a.recordStart(this.instanceId,this.attributeLayout);const f=b.getDisplayId();if("esriGeometryPoint"===b.geometryType){const d=b.readXForDisplay();b=b.readYForDisplay();this._writeQuad(a,f,d,b)}else"esriGeometryMultipoint"===b.geometryType&&b.readGeometryForDisplay()?.forEachVertex((d,c)=>{0<=d&&512>=d&&0<=c&&512>=c&&this._writeQuad(a,f,d,c)});a.recordEnd()}_writeQuad(a,b,f,d){const c=a.vertexCount();this._writeVertex(a,b,f,d);a.indexWrite(c+0);a.indexWrite(c+1);a.indexWrite(c+2);a.indexWrite(c+
1);a.indexWrite(c+3);a.indexWrite(c+2)}}g.HeatmapMeshWriter=l;g.heatmapVertexSpec=h;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
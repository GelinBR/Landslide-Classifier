// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../../../geometry/GeometryCursor","../../../../../../../symbols/cim/effects/CIMEffectHelper","./loadGeometryEngine","./MeshWriterVertexPack"],function(f,h,k,g,l){class m{constructor(a,b,c,d){this._instanceId=a;this._evaluator=b;this._enabledOptionalAttributes=c;this._viewParams=d;this._evaluator.evaluator=e=>this.vertexSpec.createComputedParams(e)}get _vertexPack(){if(!this._cachedVertexPack){const a=l.MeshWriterVertexPack.fromVertexSpec(this.vertexSpec,this._enabledOptionalAttributes);
this._evaluator.hasDynamicProperties||a.pack(this._evaluator.evaluatedMeshParams,this._viewParams);this._cachedVertexPack=a}return this._cachedVertexPack}get evaluatedMeshParams(){return this._evaluator.evaluatedMeshParams}get hasEffects(){return!!this.evaluatedMeshParams.effects}get instanceId(){return this._instanceId}get attributeLayout(){return this._vertexPack.attributeLayout}setReferences(a){this._references=a}getBoundsInfo(){return null}getTileInfo(){return this._viewParams.tileInfo}async loadDependencies(){var a;
a:{if(a=this._evaluator.inputMeshParams.effects?.effectInfos)for(const b of a)switch(b.effect.type){case "CIMGeometricEffectBuffer":case "CIMGeometricEffectOffset":case "CIMGeometricEffectDonut":a=!0;break a}a=!1}a&&await g.loadGeometryEngine()}enqueueRequest(a,b,c){this._evaluator.hasDynamicProperties&&this._evaluator.enqueueRequest(a,b,c)}write(a,b,c,d,e){this.ensurePacked(b,c,d);if((b=this.evaluatedMeshParams.effects)&&0!==b.length){if(d=c.readGeometryForDisplay()?.clone()){d=h.GeometryCursor.fromOptimizedCIM(d,
c.geometryType);var n=g.getGeometryEngine();d.invertY();for(b=k.CIMEffectHelper.executeEffects(b,d,a.id||"",n);d=b.next();)d.invertY(),this._write(a,c,d,e)}}else this._write(a,c,void 0,e)}ensurePacked(a,b,c){this._evaluator.hasDynamicProperties&&(a=this._evaluator.evaluateMeshParams(a,b,c),this._vertexPack.pack(a,this._viewParams))}_writeVertex(a,b,c,d,e){this._vertexPack.writeVertex(a,b,c,d,this.evaluatedMeshParams,e)}}f.MeshWriter=m;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
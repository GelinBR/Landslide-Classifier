// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../definitions","./FillMeshWriter","../../../../../../webgl/enums"],function(d,f,e,g){const k={createComputedParams:a=>a,optionalAttributes:e.fillVertexSpec.optionalAttributes,attributes:{...e.fillVertexSpec.attributes,tlbr:{count:4,type:g.DataType.UNSIGNED_SHORT,pack:({sprite:a})=>{const {rect:c,width:b,height:l}=a;a=c.x+f.spritePadding;const h=c.y+f.spritePadding;return[a,h,a+b,h+l]}},inverseRasterizationScale:{count:1,type:g.DataType.BYTE,packPrecisionFactor:16,pack:({sprite:a})=>
1/a.rasterizationScale}}};class m extends e.FillMeshWriter{constructor(){super(...arguments);this.vertexSpec=k}_write(a,c,b){b=b?.asOptimized()??c.readGeometryForDisplay();if(b=this._clip(b))a.recordStart(this.instanceId,this.attributeLayout,this.evaluatedMeshParams.sprite?.textureBinding),this._writeGeometry(a,c,b),a.recordEnd()}}d.PatternFillMeshWriter=m;d.patternFillVertexSpec=k;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../vectorTiles/style/StyleDefinition","./WGLBrush","../../../../webgl/enums"],function(m,r,t,g){class u extends t{constructor(){super(...arguments);this._programOptions={id:!1}}dispose(){}drawMany(d,c){const {context:e,displayLevel:k,requiredLevel:v,state:n,painter:w,spriteMosaic:x,styleLayerUID:l,requestRender:p,allowDelayedRender:y}=d;if(c.some(a=>a.layerData.get(l)?.circleIndexCount??!1)){d=d.styleLayer;var q=d.circleMaterial,b=w.vectorTilesMaterialManager,f=d.getPaintValue("circle-translate",
k),h=d.getPaintValue("circle-translate-anchor",k);b=b.getMaterialProgram(e,q,this._programOptions);if(y&&null!=p&&!b.compiled)p();else{e.useProgram(b);b.setUniformMatrix3fv("u_displayMat3",h===r.TranslateAnchor.VIEWPORT?n.displayMat3:n.displayViewMat3);b.setUniform2fv("u_circleTranslation",f);b.setUniform1f("u_depth",d.z);b.setUniform1f("u_antialiasingWidth",1.2);f=-1;for(const a of c)a.layerData.has(l)&&(a.key.level!==f&&(f=a.key.level,q.setDataUniforms(b,k,d,f,x)),c=a.layerData.get(l),c.circleIndexCount&&
(c.prepareForRendering(e),h=c.vao,null!=h&&(e.bindVAO(h),b.setUniformMatrix3fv("u_dvsMat3",a.transforms.displayViewScreenMat3),v!==a.key.level?e.setStencilFunction(g.CompareFunction.EQUAL,a.stencilRef,255):e.setStencilFunction(g.CompareFunction.GREATER,255,255),e.drawElements(g.PrimitiveType.TRIANGLES,c.circleIndexCount,g.DataType.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*c.circleIndexStart),a.triangleCount+=c.circleIndexCount/3)))}}}}m.WGLBrushVTLCircle=u;Object.defineProperty(m,Symbol.toStringTag,
{value:"Module"})});
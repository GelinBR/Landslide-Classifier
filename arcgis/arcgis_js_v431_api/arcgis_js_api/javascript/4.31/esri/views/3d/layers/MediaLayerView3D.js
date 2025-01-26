// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Error ../../../core/handleUtils ../../../core/has ../../../core/perspectiveUtils ../../../core/promiseUtils ../../../core/reactiveUtils ../../../core/accessorSupport/decorators/property ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../core/libs/gl-matrix-2/factories/mat3f64 ../../../geometry/support/aaBoundingRect ../../../layers/support/MediaElementView ./interfaces ./LayerView3D ./support/MediaLayerInteraction ../terrain/OverlayRenderer ../webgl-engine/lib/Attribute ../webgl-engine/lib/Geometry ../webgl-engine/lib/ModelDirtyTypes ../webgl-engine/lib/RenderGeometry ../webgl-engine/lib/Texture ../webgl-engine/lib/UpdatePolicy ../webgl-engine/lib/VertexAttribute ../webgl-engine/materials/ImageMaterial ../../layers/LayerView ../../layers/MediaLayerView ../../support/layerViewUtils ../../webgl/enums".split(" "),
function(h,z,r,f,A,x,p,k,R,S,B,C,D,E,F,G,H,q,t,I,u,J,K,L,l,M,N,O,P,y){f=class extends G.LayerView3D(O(N)){get interactive(){return this._interaction.enabled}set interactive(a){this._interaction&&(this._interaction.enabled=a)}get selectedElement(){return this._interaction.selectedElement}set selectedElement(a){this._interaction&&(this._interaction.selectedElement=a)}get visibleAtCurrentScale(){return P.isInEffectiveScaleRange(this.layer.effectiveScaleRange,this.view.scale)}constructor(a){super(a);
this.type="media-3d";this.drapeSourceType=F.DrapeSourceType.Features;this.updatePolicy=L.UpdatePolicy.ASYNC;this._uidToElement=new Map;this._renderedElements=new Map;this._lastDrapingExtent=null;this._update=x.debounce(async(d,e,v)=>{d=await this._collectMediaElements(d,e,v);this._synchronizeRenderElements(d)},0);const {view:c,layer:b}=a;this._interaction=new H.MediaLayerInteraction({view:c,layer:b});this.addHandles(p.watch(()=>this.interactionOptions,d=>this._interaction.options=d,p.syncAndInitial))}initialize(){const {view:a,
layer:c}=this;this._renderer=a.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);const b=()=>this._updateWithLastDrapingExtent();this.addHandles([r.makeHandle(()=>a.basemapTerrain.overlayManager.unregisterDrapeSource(this)),p.on(()=>c.effectiveSource,"change",b),p.on(()=>c.effectiveSource,"refresh",b)]);this._updatingHandles.add(()=>this.suspended,b)}setDrapingExtent(a,c){this._lastDrapingExtent={overlays:a,spatialReference:c};this._updateWithLastDrapingExtent()}getHit(a){return(a=this._uidToElement.get(a))?
{type:"media",element:a,layer:this.layer}:null}isUpdating(){return super.isUpdating()||this._interaction.updating}_updateWithLastDrapingExtent(){if(null==this._lastDrapingExtent||this.suspended)this._renderer&&this._synchronizeRenderElements(new Set);else{var {overlays:a,spatialReference:c}=this._lastDrapingExtent;this._updatingHandles.addPromise(this._update(a,c).catch(()=>{}))}}async _collectMediaElements(a,c,b){const d=this.layer.effectiveSource;return null==d?new Set:new Set((await Promise.all(a.map(e=>
d.queryElements(D.toExtent(e.extent,c),{signal:b})))).flat())}_synchronizeRenderElements(a){this._synchronizeRenderElementsRemove(a);this._synchronizeRenderElementsAdd(a)}_synchronizeRenderElementsRemove(a){this._renderedElements.forEach((c,b)=>{a.has(b)||(this._removeElement(b,c),this.emit("element-render-changed",{element:b}))})}_synchronizeRenderElementsAdd(a){for(const c of a)this._renderedElements.has(c)||this._createRenderElement(c)}_removeElement(a,{renderData:c,handle:b}){this._destroyRenderData(a,
c);this._renderedElements.delete(a);this._uidToElement.delete(a.uid);b.remove()}async _createRenderElement(a){const c=new E.MediaElementView({spatialReference:this.view.spatialReference,element:a}),b={renderData:null,handle:r.handlesGroup([this._updatingHandles.add(()=>a.opacity,d=>{null!=b.renderData&&b.renderData.material.setParameters({opacity:d})}),this._updatingHandles.add(()=>c.coords,()=>{null!=b.renderData?this._updateGeometry(c,b,b.renderData):this._initializeRenderData(c,b)}),this._updatingHandles.add(()=>
a.content,()=>this._initializeRenderData(c,b)),r.destroyHandle(c)])};this._renderedElements.set(a,b);this._uidToElement.set(a.uid,a);this._updatingHandles.addPromise(a.load().catch(()=>{}));this._initializeRenderData(c,b)}_initializeRenderData(a,c){const {coords:b,element:d}=a,{contentWidth:e,contentHeight:v}=d;if(null==b||null==d.content)c.renderData=this._destroyRenderData(d,c.renderData);else if(null==c.renderData){a=this._createTexture(d.content);var m=a.load(this.view._stage.renderView.renderingContext);
this.view._stage.add(a);x.isPromiseLike(m)&&this._updatingHandles.addPromise(m);m=new M.ImageMaterial({initTextureTransparent:!0,textureId:a.id,opacity:d.opacity,perspectiveInterpolation:!0});var g=this._getPositionAttributeArray(b),Q=this._getPerspectiveDivideAttributeArray(g,e,v),w=[0,1,2,0,2,3];g=new I.Geometry(m,[[l.VertexAttribute.POSITION,new t.Attribute(g,w,3,!0)],[l.VertexAttribute.UV0,new t.Attribute([0,0,1,0,1,1,0,1],w,2,!0)],[l.VertexAttribute.PERSPECTIVEDIVIDE,new t.Attribute(Q,w,1,!0)]]);
g=new J.RenderGeometry(g,{layerUid:this.layer.uid,graphicUid:d.uid});this._renderer.addGeometries([g],u.DirtyOperation.ADD);c.renderData={renderGeometry:g,texture:a,material:m};this.emit("element-render-changed",{element:d})}}_updateGeometry(a,c,b){const {coords:d,element:e}=a;null==d||null==e.content?c.renderData=this._destroyRenderData(e,c.renderData):(a=this._getPositionAttributeArray(d),b.renderGeometry.geometry.setAttributeData(l.VertexAttribute.POSITION,a),a=this._getPerspectiveDivideAttributeArray(a,
e.contentWidth,e.contentHeight),b.renderGeometry.geometry.setAttributeData(l.VertexAttribute.PERSPECTIVEDIVIDE,a),b.renderGeometry.geometry.invalidateBoundingInfo(),this._renderer.modifyGeometries([b.renderGeometry],u.DirtyState.GEOMETRY),this.emit("element-render-changed",{element:e}))}_getPositionAttributeArray(a){const [c,b,d,e]=a.rings[0];return[c[0],c[1],q.drapedZ,e[0],e[1],q.drapedZ,d[0],d[1],q.drapedZ,b[0],b[1],q.drapedZ]}_getPerspectiveDivideAttributeArray(a,c,b){A.getProjectiveTransform(n,
[0,0,c,0,c,b,0,b],[a[0],a[1],a[3],a[4],a[6],a[7],a[9],a[10]]);a=n[6]/n[8]*c;b*=n[7]/n[8];return[1,1+a,1+a+b,1+b]}_destroyRenderData(a,c){if(null==c)return null;const b=c.texture;b.unload();this.view._stage.remove(b);this._renderer.removeGeometries([c.renderGeometry],u.DirtyOperation.REMOVE);this.emit("element-render-changed",{element:a});return null}_createTexture(a){const c=a instanceof HTMLImageElement?a.naturalWidth:a.width,b=a instanceof HTMLImageElement?a.naturalHeight:a.height;if("getFrame"in
a)throw new z("media-layer-view-3d","animation is not supported");return new K.Texture(a,{wrap:{s:y.TextureWrapMode.CLAMP_TO_EDGE,t:y.TextureWrapMode.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:c,height:b,mipmap:!0,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){}};h.__decorate([k.property({readOnly:!0})],f.prototype,"type",void 0);h.__decorate([k.property()],f.prototype,"layer",void 0);h.__decorate([k.property()],f.prototype,"interactive",null);h.__decorate([k.property()],
f.prototype,"selectedElement",null);h.__decorate([k.property({readOnly:!0})],f.prototype,"visibleAtCurrentScale",null);f=h.__decorate([B.subclass("esri.views.3d.layers.MediaLayerView3D")],f);const n=C.create();return f});
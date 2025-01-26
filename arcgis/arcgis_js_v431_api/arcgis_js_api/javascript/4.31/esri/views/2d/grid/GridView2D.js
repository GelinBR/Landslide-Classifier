// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../core/Handles ../../../core/mathUtils ../../../core/maybe ../../../core/reactiveUtils ../../../core/unitUtils ../../../core/libs/gl-matrix-2/math/mat3 ../../../core/libs/gl-matrix-2/factories/mat3f32 ../../../core/libs/gl-matrix-2/math/vec2 ../../../core/libs/gl-matrix-2/factories/vec2f32 ../../../core/libs/gl-matrix-2/factories/vec2f64 ../../../geometry/projection ../../../geometry/support/normalizeUtils ../../../geometry/support/scaleUtils ../../../geometry/support/spatialReferenceUtils ../engine/DisplayObject ../engine/webgl/enums ../engine/webgl/shaderGraph/techniques/grid/GridTechnique ./constants ./gridUtils".split(" "),
function(B,v,C,m,D,n,E,f,r,F,w,G,H,x,I,J,K,L,y){function z(a){const [c,g,d,e]=a.toArray().map(l=>l/255);return[c*e,g*e,d*e,e]}const t=F.create();class M extends I.DisplayObject{constructor(){super();this._handles=new B;this._metersPerSRUnit=this._projectedCenter=null;this._technique=new K.GridTechnique;this._grid=null;this.visible=!0}destroy(){this._handles=C.destroyMaybe(this._handles);this._technique.shutdown()}get grid(){return this._grid}set grid(a){this._grid=a;this._handles.removeAll();this._handles.add([m.watch(()=>
a?.center,()=>{this._projectedCenter=null},m.initial),m.watch(()=>[a?.center,a?.dynamicScaling,a?.majorLineColor,a?.majorLineInterval,a?.minorLineColor,a?.rotateWithMap,a?.rotation,a?.spacing,a?.units],()=>this.requestRender(),m.initial)])}_createTransforms(){return{displayViewScreenMat3:E.create()}}doRender(a){if(a.drawPhase===J.WGLDrawPhase.MAP&&null!=this.grid&&this.visible){var {spacing:c,units:g,majorLineInterval:d,dynamicScaling:e,majorLineColor:l,minorLineColor:p}=this.grid;if(0!==c&&(this._updateDerivedValues(a),
null!=this._projectedCenter&&null!=this._metersPerSRUnit)){var {scale:q,spatialReference:u}=a.state,h=D.convertUnit(c,g,"meters"),b=this._metersPerSRUnit*H.getResolutionForScale(q,u),k=h/b;!e&&k<L.minimumPixelsPerStrideForDisplayWhenScalingOff||(h*=y.getScaleFactor(d,k,e),this._updateTransform(a,b,h),this._technique.render(a,{transform:{dvs:this.transforms.displayViewScreenMat3},config:{pxPerCell:h/b,minorLineColor:z(p),majorLineColor:z(l),majorLineInterval:d,halfWidth:.25,aaWidth:.5}}))}}}_updateDerivedValues(a){if(this.grid){var {center:c}=
this.grid;({spatialReference:a}=a.state);this._projectedCenter&&x.equals(this._projectedCenter.spatialReference,a)||(this._metersPerSRUnit=null,x.equals(c.spatialReference,a)?this._projectedCenter=c:w.isLoadedOrLoadFor(c.spatialReference,a)?this._projectedCenter=w.project(c,a):this.requestRender());null==this._metersPerSRUnit&&null!=this._projectedCenter&&(this._metersPerSRUnit=y.measureMetersPerUnitAtReferencePoint(this._projectedCenter))}}_updateTransform(a,c,g){const {grid:d}=this,{center:e,rotation:l,
size:p,spatialReference:q}=a.state;if(null!=d&&null!=this._projectedCenter&&null!=this._metersPerSRUnit){a=p[0]/2*c;var u=p[1]/2*c,h=this._metersPerSRUnit/g,b=this._projectedCenter,k=v.deg2rad(d.rotation),A=v.deg2rad(l);c=this.transforms.displayViewScreenMat3;n.fromRotation(c,-k);var N=q.isWrappable?G.getClosestDenormalizedXToReference(b.x,e[0],q):b.x;b=f.set(t,N,b.y);b=f.sub(t,e,b);f.scale(b,b,h);d.rotateWithMap||f.rotate(b,b,r.ZEROS,-A);f.rotate(b,b,r.ZEROS,-k);f.scale(b,b,1/d.majorLineInterval);
b[0]-=Math.trunc(b[0]);b[1]-=Math.trunc(b[1]);f.scale(b,b,d.majorLineInterval);f.rotate(b,b,r.ZEROS,k);n.translate(c,c,b);d.rotateWithMap&&n.rotate(c,c,A);g=f.set(t,a/g,u/g);n.scaleByVec2(c,c,g)}}}return M});
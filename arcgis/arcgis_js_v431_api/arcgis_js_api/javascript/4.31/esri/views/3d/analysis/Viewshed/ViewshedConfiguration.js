// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../Color","../../../../core/mathUtils","../../webgl-engine/lib/basicInterfaces","../../webgl-engine/lib/Material"],function(a,b,c,e,f){c=c.deg2rad(2);class g{constructor(){this.collisionRadius=5;this.fovUnfocusedArcWidth=4;this.fovFocusedArcWidth=2*this.fovUnfocusedArcWidth;this.scaleOrientSize=90;this.scaleOrientHandleRadius=.025;this.scaleOrientMinDistance=1;this.scaleOrientArrowTipLength=.3;this.scaleOrientArrowTipFocusMultiplier=2/1.5;this.observerSize=5;this.hoverTimeoutMilliseconds=
1E3;this.viewAngleThreshold=10}getFovArcWidth(d){return d?this.fovFocusedArcWidth:this.fovUnfocusedArcWidth}getScaleOrientArrowTipLength(d){return this.scaleOrientArrowTipLength*(d?this.scaleOrientArrowTipFocusMultiplier:1)}}const h=new g;class k{constructor(){this.frameWidthNotSelected=.3;this.frameWidthSelected=1;this.frameColor=new b([255,255,255,.99]);this.observerPointConfiguration={size:6,pixelSnappingEnabled:!1,primitive:"circle",elevationInfo:{mode:"absolute-height",offset:0},outlineSize:0,
color:b.toUnitRGBA(new b([3,252,111,1]))};this.shapeMaterialParameters={color:[.33,.33,.33,.25],renderOccluded:f.RenderOccludedFlag.Occlude,cullFace:e.CullFaceOptions.Back,writeDepth:!1}}}const l=new k;a.arcAnglePerSegment=c;a.creationVerticalOffset=1.5;a.viewshedToolManipulatorConfiguration=h;a.viewshedVisualizationConfiguration=l;Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
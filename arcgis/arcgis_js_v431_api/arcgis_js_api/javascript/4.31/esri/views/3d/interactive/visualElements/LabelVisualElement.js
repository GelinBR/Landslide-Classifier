// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../Color ../../../../core/Handles ../../../../core/reactiveUtils ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/math/vec2 ../../../../chunks/vec32 ../../../../core/libs/gl-matrix-2/factories/vec3f64 ../support/viewUtils ./VisualElement ../../../overlay/LineOverlayItem ../../../overlay/TextOverlayItem".split(" "),function(u,v,E,F,l,d,G,q,y,H,I,J){function z(a,c,e,g){a.eval(c,w,A);G.add(B,w,A);return y.renderScreenSpaceTangent(w,B,e,g)}class K extends H.VisualElement{constructor(a){super(a);
this._handles=new E;this._calloutItem=this._textItem=null;this._showText=this._showCallout=!0;this._geometry=null;this._text="-";this._fontSize=14;this._backgroundColor=new v([0,0,0,.6]);this._calloutColor=new v([0,0,0,.5]);this._textColor=new v([255,255,255]);this._distance=25;this._anchor="right";this.updatePositionOnCameraMove=!0;this.applyProperties(a)}get geometry(){return this._geometry}set geometry(a){this._geometry=a;this.updateLabelPosition()}get isDecoration(){return this._isDecoration}set isDecoration(a){this._isDecoration=
a;this._textItem&&(this._textItem.isDecoration=a);this._calloutItem&&(this._calloutItem.isDecoration=a)}get textItem(){return this._textItem}get text(){return this._text}set text(a){this._text=a;this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(a){this._fontSize=a;this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(a){this._backgroundColor=a;this.attached&&(this._textItem.backgroundColor=
this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(a){this._calloutColor=a;this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(a){this._textColor=a;this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(a){this._distance!==a&&(this._distance=a,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(a){this._anchor!==a&&(this._anchor=
a,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(a){return this.attached?this.textItem.visible&&a.textItem.visible&&!!this.view.overlay?.overlaps(this._textItem,a.textItem):!1}updateLabelPosition(){if(this.attached){this._showCallout=this._showText=!1;var {geometry:a,view:c,visible:e}=this;if(null!=a&&c._stage)switch(a.type){case "point":if(!this._computeLabelPositionFromPoint(a.point,h))break;if(a.callout){var g=this._camera;const k=a.callout.distance;d.add(r,
r,[0,a.callout.offset]);g.renderToScreen(r,h);d.set(b,0,1);d.scale(b,b,k);d.add(b,b,r);g.renderToScreen(b,n);this._showCallout=this._updatePosition(h,n)}else this._textItem.position=[h[0],h[1]],this._textItem.anchor="center";this._showText=!0;break;case "corner":if(!this._computeLabelPositionFromCorner(a,this._distance,h,n))break;this._showCallout=this._updatePosition(h,n);this._showText=!0;break;case "segment":this._computeLabelPositionFromSegment(a,this._distance,this._anchor,h,n)&&(this._showText=
!0,g=this._updatePosition(h,n),this._showCallout=!1!==a.callout&&g,this._showCallout||(this._textItem.anchor="center"))}this.updateVisibility(e)}}_computeLabelPositionFromPoint(a,c){const e=this._camera;e.projectToRenderScreen(a,f);if(0>f[2]||1<f[2])return!1;e.renderToScreen(f,c);return!0}_computeLabelPositionFromCorner(a,c,e,g){if(!a)return!1;const k=this._camera;z(a.left,1,k,m);d.negate(m,m);z(a.right,0,k,C);d.add(b,m,C);d.negate(b,b);d.normalize(b,b);k.projectToRenderScreen(a.left.endRenderSpace,
f);if(0>f[2]||1<f[2])return!1;k.renderToScreen(f,e);d.scale(b,b,c);d.add(b,b,f);k.renderToScreen(b,g);return!0}_computeLabelPositionFromSegment(a,c,e,g,k){if(!a)return!1;const x=a.segment,t=this._camera;y.renderScreenSpaceTangent(x.startRenderSpace,x.endRenderSpace,t,m);d.set(b,-m[1],m[0]);let p=!1;switch(e){case "top":p=0>b[1];break;case "bottom":p=0<b[1];break;case "left":p=0<b[0];break;case "right":p=0>b[0]}p&&d.negate(b,b);if(0===d.length(b))switch(e){case "top":b[1]=1;break;case "bottom":b[1]=
-1;break;case "left":b[0]=-1;break;case "right":b[0]=1}x.eval(L[a.sampleLocation],D);t.projectToRenderScreen(D,f);if(0>f[2]||1<f[2])return!1;t.renderToScreen(f,g);d.scale(b,b,c);d.add(b,b,f);t.renderToScreen(b,k);return!0}_updatePosition(a,c){if(c){const e=c[0]-a[0],g=c[1]-a[1];this._textItem.position=[c[0],c[1]];this._textItem.anchor=Math.abs(e)>Math.abs(g)?0<e?"left":"right":0<g?"top":"bottom";this._calloutItem.startPosition=[a[0],a[1]];this._calloutItem.endPosition=[c[0],c[1]];return!0}this._textItem.position=
[a[0],a[1]];this._textItem.anchor="center";return!1}createResources(){this._textItem=new J({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor,isDecoration:this._isDecoration});this._calloutItem=new I({color:this._calloutColor.toRgba(),visible:!0,width:2,isDecoration:this._isDecoration});this.updateLabelPosition();this.view.overlay?.items.addMany([this._textItem,this._calloutItem]);this.updatePositionOnCameraMove&&this._handles.add(F.watch(()=>
this.view.state.camera,()=>this.updateLabelPosition()))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]);this._handles.removeAll()}updateVisibility(a){this._textItem.visible=this._showText&&a;this._calloutItem.visible=this._showCallout&&a}}const w=q.create(),B=q.create(),A=q.create(),m=l.createRenderScreenPointArray(),C=l.createRenderScreenPointArray(),b=l.createRenderScreenPointArray(),D=q.create(),f=l.createRenderScreenPointArray3(),
r=l.createRenderScreenPointArray(),h=l.createScreenPointArray(),n=l.createScreenPointArray(),L={start:0,center:.5,end:1};u.LabelVisualElement=K;u.mirrorPosition=function(a){switch(a){case "top":return"bottom";case "right":return"left";case "bottom":return"top";case "left":return"right"}};Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});
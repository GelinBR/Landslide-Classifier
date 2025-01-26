// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../Color ../../core/colorUtils ../../core/Error ../../core/fontUtils ../../core/screenUtils ./gfxUtils ./previewUtils ./renderUtils ./textUtils".split(" "),function(u,B,C,L,M,n,q,p,N,v){function D(a,b){const d=O.getContext("2d"),c=[];b&&(b.weight&&c.push(b.weight),b.size&&c.push(b.size+"px"),b.family&&c.push(b.family));d.font=c.join(" ");const {width:k,actualBoundingBoxLeft:g,actualBoundingBoxRight:l,actualBoundingBoxAscent:h,actualBoundingBoxDescent:m}=d.measureText(a);return{width:Math.ceil(Math.max(k,
g+l)),height:Math.ceil(h+m),x:Math.floor(g),y:Math.floor((h-m)/2)}}function r(a){var b=a?.size;a=null!=b&&"object"===typeof b&&"width"in b?n.pt2px(b.width):null;b=null!=b&&"object"===typeof b&&"height"in b?n.pt2px(b.height):null;return{width:a,height:b}}async function P(a,b){const d=b.fill,c=a.color;"pattern"===d?.type&&c&&"picture-fill"!==a.type&&(a=await q.getPatternUrlWithColor(d.src,c.toCss(!0)),d.src=a,b.fill=d)}async function Q(a,b,d,c){if("font"in a&&a.font&&"text"===b.shape.type){try{await M.loadFont(a.font)}catch{}var {width:k,
height:g}=r(c);if(!/[\uE600-\uE6FF]/.test(b.shape.text)){const {width:l,height:h,x:m,y:f}=D(b.shape.text,{weight:b.font?.weight,size:b.font?.size,family:b.font?.family});d[0]=k??l;d[1]=g??h;b.shape.x=m;b.shape.y=f;a="angle"in a?a.angle:null;null!=c?.rotation&&(a=(a??0)+c.rotation);a&&(c=Math.PI/180*a,d[1]=d[0]*Math.abs(Math.sin(c))+d[1]*Math.abs(Math.cos(c)))}}}function R(a,b,d,c,k){if(null!=a.haloColor&&null!=a.haloSize){k.masking??(k.masking=d.map(()=>[]));const g=n.pt2px(a.haloSize);c[0]+=g;c[1]+=
g;d.unshift([{...b,fill:null,stroke:{color:a.haloColor,width:2*g,join:"round",cap:"round"}}]);k.masking.unshift([{shape:{type:"rect",x:0,y:0,width:c[0]+2*v.backgroundPadding,height:c[1]+2*v.backgroundPadding},fill:[255,255,255],stroke:null},{...b,fill:[0,0,0,0],stroke:null}])}if(null!=a.backgroundColor||null!=a.borderLineColor)c[0]+=2*v.backgroundPadding,c[1]+=2*v.backgroundPadding,d.unshift([{shape:{type:"rect",x:0,y:0,width:c[0],height:c[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,
width:n.pt2px(a.borderLineSize)}}]),k.masking?.unshift([])}function E(a,b){return a>b?"dark":"light"}function F(a,b){var d="number"===typeof b?.size?b?.size:null,c=null!=d?n.pt2px(d):null,k=null!=b?.maxSize?n.pt2px(b.maxSize):null;d="angle"in a?a.angle:null;null!=b?.rotation&&(d=(d??0)+b.rotation);var g=q.getFill(a),l=q.getStroke(a);"dark"!==G(a,245)||b?.ignoreWhiteSymbols||(l={width:.75,...l,color:"#bdc3c7"});g={shape:null,fill:g,stroke:l,offset:[0,0]};l?.width&&(l.width=Math.min(l.width,S));var h=
l?.width||0,m=null==b?.size?!1:null!=b?.scale?b?.scale:!0,f=0,e=0;let t=!1;switch(a.type){case "simple-marker":l=a.style;const {width:z,height:T}=r(b);e=f=c=z===T&&null!=z?z:null!=c?c:Math.min(n.pt2px(a.size),k||w);switch(l){case "circle":g.shape={type:"circle",cx:0,cy:0,r:.5*c};m||(f+=h,e+=h);break;case "cross":g.shape={type:"path",path:[{command:"M",values:[0,.5*e]},{command:"L",values:[f,.5*e]},{command:"M",values:[.5*f,0]},{command:"L",values:[.5*f,e]}]};break;case "diamond":g.shape={type:"path",
path:[{command:"M",values:[0,.5*e]},{command:"L",values:[.5*f,0]},{command:"L",values:[f,.5*e]},{command:"L",values:[.5*f,e]},{command:"Z",values:[]}]};m||(f+=h,e+=h);break;case "square":g.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,0]},{command:"L",values:[f,e]},{command:"L",values:[0,e]},{command:"Z",values:[]}]};m||(f+=h,e+=h);d&&(t=!0);break;case "triangle":g.shape={type:"path",path:[{command:"M",values:[.5*f,0]},{command:"L",values:[f,e]},{command:"L",values:[0,
e]},{command:"Z",values:[]}]};m||(f+=h,e+=h);d&&(t=!0);break;case "x":g.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,e]},{command:"M",values:[f,0]},{command:"L",values:[0,e]}]};d&&(t=!0);break;case "path":g.shape={type:"path",path:a.path||""},m||(f+=h,e+=h),d&&(t=!0),m=!0}break;case "simple-line":const {width:U,height:V}=r(b);f=(m=q.getDashArray(l).reduce((W,X)=>W+X,0))&&Math.ceil(H/m);a=V??c??h;m=U??(m*f||H);l&&(l.width=a);f=m;e=a;m=!0;g.shape={type:"path",path:[{command:"M",
values:[a/2,e/2]},{command:"L",values:[f-a/2,e/2]}]};break;case "picture-fill":case "simple-fill":a="object"===typeof b?.symbolConfig&&!!b?.symbolConfig?.isSquareFill;const {width:x,height:y}=r(b);f=!a&&x!==y||null==x?null!=c?c:Y:x;e=!a&&x!==y||null==y?f:y;m||(f+=h,e+=h);m=!0;g.shape=a?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[f,0]},{command:"L",values:[f,e]},{command:"L",values:[0,e]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:p.shapes.fill[0];break;case "picture-marker":f=
Math.min(n.pt2px(a.width),k||w);e=Math.min(n.pt2px(a.height),k||w);const {width:A,height:Z}=r(b);c=A===Z&&null!=A?A:null!=c?c:Math.max(f,e);e=f/e;f=1>=e?Math.ceil(c*e):c;e=1>=e?c:Math.ceil(c/e);g.shape={type:"image",x:-Math.round(f/2),y:-Math.round(e/2),width:f,height:e,src:a.url||""};d&&(t=!0);break;case "text":l=b?.overrideText||a.text||"Aa";h=a.font;const {width:aa,height:I}=r(b);c=null!=I?I:null!=c?c:Math.min(n.pt2px(h.size),k||w);const {width:ba,height:J}=D(l,{weight:h.weight,size:c,family:h.family});
k=/[\uE600-\uE6FF]/.test(l);f=aa??(k?c:ba);e=k?c:J;let K=.5*(k?c:J);k&&(K+=5);g.shape={type:"text",text:l,x:a.xoffset||0,y:a.yoffset||K,align:"middle",alignBaseline:a.verticalAlignment,decoration:h&&h.decoration,rotated:a.rotated,kerning:a.kerning};g.font=h&&{size:c,style:h.style,decoration:h.decoration,weight:h.weight,family:h.family}}return{shapeDescriptor:g,size:[f,e],renderOptions:{node:b?.node,scale:m,opacity:b?.opacity,rotations:[d],useRotationSize:t,effectView:b?.effectView,ariaLabel:b?.ariaLabel}}}
function G(a,b=225){var d=q.getFill(a);a=q.getStroke(a);d=!d||"type"in d?null:new B(d);a=a?.color?new B(a?.color):null;d=d?E(C.getColorLuminance(d),b):null;return(a=a?E(C.getColorLuminance(a),b):null)?d?d===a?d:225<=b?"light":"dark":a:d}const Y=p.SymbolSizeDefaults.size,w=p.SymbolSizeDefaults.maxSize,S=p.SymbolSizeDefaults.maxOutlineSize,H=p.SymbolSizeDefaults.lineWidth,O=document.createElement("canvas");u.getContrastingBackgroundTheme=G;u.getRenderSymbolParameters=F;u.previewSymbol2D=async function(a,
b){const {shapeDescriptor:d,size:c,renderOptions:k}=F(a,b);if(!d.shape)throw new L("symbolPreview: renderPreviewHTML2D","symbol not supported.");await P(a,d);await Q(a,d,c,b);const g=[[d]];"object"===typeof b?.symbolConfig&&b?.symbolConfig?.applyColorModulation&&(b=.6*c[0],g.unshift([{...d,offset:[-b,0],fill:p.adjustColorBrightness(d.fill,-.3)}]),g.push([{...d,offset:[b,0],fill:p.adjustColorBrightness(d.fill,.3)}]),c[0]+=2*b,k.scale=!1);"text"===a.type&&R(a,d,g,c,k);return N.renderSymbol(g,c,k)};
Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ../../libs/maquette/projection ../../libs/maquette/h ../../libs/maquette/projector".split(" "),function(d,b,e,r,t,u,n,v,h,w){b=class extends b{get startPosition(){return[this.startX,this.startY]}set startPosition(a){this._set("startX",a[0]);this._set("startY",a[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(a){this._set("endX",
a[0]);this._set("endY",a[1])}constructor(a){super(a);this.endY=this.endX=this.startY=this.startX=0;this.width=1;this.color=[0,0,0,.5];this.isDecoration=this.visible=!0}get _strokeStyle(){const a=this.color;return`rgba(${a[0]}, ${a[1]}, ${a[2]}, ${a[3]})`}get _lineCap(){return"round"}render(){const {height:a,left:c,top:k,width:g,x1:l,x2:f,y1:p,y2:q}=this._calculateCoordinates(m);return h.h("div",{classes:{"esri-line-overlay-item":!0},styles:{left:c+"px",top:k+"px",width:g+"px",height:a+"px",visibility:this.visible?
"visible":"hidden"}},[h.h("svg",{width:g,height:a},[h.h("line",{x1:l,y1:p,x2:f,y2:q,style:`stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`})])])}renderCanvas(a){if(this.visible){a.strokeStyle=this._strokeStyle;a.lineWidth=this.width;a.lineCap=this._lineCap;var c=this._calculateCoordinates(m);a.beginPath();a.moveTo(c.left+c.x1,c.top+c.y1);a.lineTo(c.left+c.x2,c.top+c.y2);a.stroke()}}_calculateCoordinates(a){const c=Math.min(this.startX,this.endX),k=Math.max(this.startX,
this.endX),g=Math.min(this.startY,this.endY),l=Math.max(this.startY,this.endY),f=this.width;a.left=c-f;a.top=g-f;a.width=k-c+2*f;a.height=Math.max(20,l-g+2*f);a.x1=this.startX-c+f;a.y1=this.startY-g+f;a.x2=this.endX-c+f;a.y2=this.endY-g+f;return a}};d.__decorate([e.property()],b.prototype,"startX",void 0);d.__decorate([e.property()],b.prototype,"startY",void 0);d.__decorate([e.property()],b.prototype,"endX",void 0);d.__decorate([e.property()],b.prototype,"endY",void 0);d.__decorate([e.property()],
b.prototype,"startPosition",null);d.__decorate([e.property()],b.prototype,"endPosition",null);d.__decorate([e.property()],b.prototype,"width",void 0);d.__decorate([e.property()],b.prototype,"color",void 0);d.__decorate([e.property()],b.prototype,"visible",void 0);d.__decorate([e.property()],b.prototype,"isDecoration",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"_strokeStyle",null);b=d.__decorate([n.subclass("esri.views.overlay.LineOverlayItem")],b);const m={left:0,top:0,width:0,height:0,
x1:0,y1:0,x2:0,y2:0};return b});
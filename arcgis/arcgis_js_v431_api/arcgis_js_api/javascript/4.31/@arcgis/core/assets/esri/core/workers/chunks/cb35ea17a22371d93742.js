"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3601],{35902:(e,t,o)=>{o.d(t,{A:()=>c});var r,s,i=o(13226),n=o(16699),l=o(36544);function a(e){return(0,n.c)((0,l.d)(e),0,255)}function p(e,t,o){return e=Number(e),isNaN(e)?o:e<t?t:e>o?o:e}function u(e,t){const o=e.toString(16).padStart(2,"0");return t?o.slice(0,1):o}o(32773),o(20266),o(90740);class d{static blendColors(e,t,o,r=new d){return r.r=Math.round(e.r+(t.r-e.r)*o),r.g=Math.round(e.g+(t.g-e.g)*o),r.b=Math.round(e.b+(t.b-e.b)*o),r.a=e.a+(t.a-e.a)*o,r._sanitize()}static fromRgb(e,t){const o=e.toLowerCase().match(/^(rgba?|hsla?)\(([\s.\-,%0-9]+)\)/);if(o){const e=o[2].split(/\s*,\s*/),r=o[1];if("rgb"===r&&3===e.length||"rgba"===r&&4===e.length){const o=e[0];if("%"===o.charAt(o.length-1)){const o=e.map((e=>2.56*parseFloat(e)));return 4===e.length&&(o[3]=parseFloat(e[3])),d.fromArray(o,t)}return d.fromArray(e.map((e=>parseFloat(e))),t)}if("hsl"===r&&3===e.length||"hsla"===r&&4===e.length)return d.fromArray((0,i.h)(parseFloat(e[0]),parseFloat(e[1])/100,parseFloat(e[2])/100,parseFloat(e[3])),t)}return null}static fromHex(e,t=new d){if("#"!==e[0]||isNaN(Number(`0x${e.slice(1)}`)))return null;switch(e.length){case 4:case 5:{const o=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),s=parseInt(e.slice(3,4),16),i=5===e.length?15:parseInt(e.slice(4),16);return d.fromArray([o+16*o,r+16*r,s+16*s,(i+16*i)/255],t)}case 7:case 9:{const o=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),s=parseInt(e.slice(5,7),16),i=7===e.length?255:parseInt(e.slice(7),16);return d.fromArray([o,r,s,i/255],t)}default:return null}}static fromArray(e,t=new d){return t._set(Number(e[0]),Number(e[1]),Number(e[2]),Number(e[3])),isNaN(t.a)&&(t.a=1),t._sanitize()}static fromString(e,t){const o=(0,i.i)(e)?(0,i.g)(e):null;return o&&d.fromArray(o,t)||d.fromRgb(e,t)||d.fromHex(e,t)}static fromJSON(e){return null!=e?new d([e[0],e[1],e[2],(e[3]??255)/255]):void 0}static toUnitRGB(e){return null!=e?[e.r/255,e.g/255,e.b/255]:null}static toUnitRGBA(e){return null!=e?[e.r/255,e.g/255,e.b/255,null!=e.a?e.a:1]:null}constructor(e){this.r=255,this.g=255,this.b=255,this.a=1,e&&this.setColor(e)}get isBright(){return.299*this.r+.587*this.g+.114*this.b>=127}setColor(e){return"string"==typeof e?d.fromString(e,this):Array.isArray(e)?d.fromArray(e,this):(this._set(e.r??0,e.g??0,e.b??0,e.a??1),e instanceof d||this._sanitize()),this}toRgb(){return[this.r,this.g,this.b]}toRgba(){return[this.r,this.g,this.b,this.a]}toHex(e){const t=e?.capitalize??!1,o=e?.digits??6,r=3===o||4===o,s=4===o||8===o,i=`#${u(this.r,r)}${u(this.g,r)}${u(this.b,r)}${s?u(Math.round(255*this.a),r):""}`;return t?i.toUpperCase():i}toCss(e=!1){const t=this.r+", "+this.g+", "+this.b;return e?`rgba(${t}, ${this.a})`:`rgb(${t})`}toString(){return this.toCss(!0)}toJSON(){return this.toArray()}toArray(e=d.AlphaMode.ALWAYS){const t=a(this.r),o=a(this.g),r=a(this.b);return e===d.AlphaMode.ALWAYS||1!==this.a?[t,o,r,a(255*this.a)]:[t,o,r]}clone(){return new d(this.toRgba())}hash(){return this.r<<24|this.g<<16|this.b<<8|255*this.a}equals(e){return null!=e&&e.r===this.r&&e.g===this.g&&e.b===this.b&&e.a===this.a}_sanitize(){return this.r=Math.round(p(this.r,0,255)),this.g=Math.round(p(this.g,0,255)),this.b=Math.round(p(this.b,0,255)),this.a=p(this.a,0,1),this}_set(e,t,o,r){this.r=e,this.g=t,this.b=o,this.a=r}}d.prototype.declaredClass="esri.Color",(s=(r=d||(d={})).AlphaMode||(r.AlphaMode={}))[s.ALWAYS=0]="ALWAYS",s[s.UNLESS_OPAQUE=1]="UNLESS_OPAQUE";const c=d},22858:(e,t,o)=>{o.d(t,{P:()=>y,a:()=>d});var r=o(32816),s=o(29298),i=(o(32773),o(20266),o(88663)),n=o(69421),l=o(93804),a=o(99924);const p=new l.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let u=class extends a.oY{};(0,r._)([(0,s.MZ)({type:p.apiValues,readOnly:!0,nonNullable:!0,json:{type:p.jsonValues,read:!1,write:p.write}})],u.prototype,"type",void 0),u=(0,r._)([(0,n.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],u);const d=u;var c;let h=c=class extends d{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new c({scaleFactor:this.scaleFactor})}};(0,r._)([(0,i.e)({pointCloudSplatAlgorithm:"splat"})],h.prototype,"type",void 0),(0,r._)([(0,s.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],h.prototype,"scaleFactor",void 0),h=c=(0,r._)([(0,n.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],h);const y=h},41740:(e,t,o)=>{o.d(t,{R:()=>c});var r=o(32816),s=o(52731),i=o(93804),n=o(99924),l=o(29298),a=(o(32773),o(20266),o(88663)),p=o(69421);const u=(0,i.s)()({ascendingValues:"ascending-values",descendingValues:"descending-values"});let d=class extends((0,s.O)(n.oY)){constructor(e){super(e),this.title=null,this.order=null}};(0,r._)([(0,l.MZ)({type:String,json:{write:!0}})],d.prototype,"title",void 0),(0,r._)([(0,a.e)(u)],d.prototype,"order",void 0),d=(0,r._)([(0,p.$)("esri.renderers.support.RendererLegendOptions")],d);const c=d},52731:(e,t,o)=>{o.d(t,{O:()=>p,P:()=>u});var r=o(32816),s=o(41390),i=o(32773),n=(o(20266),o(57732)),l=o(93181),a=o(69421);o(29298),o(36544),o(40499),o(6407),o(90740),o(58498),o(13671),o(91047),o(45371),o(80959);const p=e=>{let t=class extends e{clone(){const e=(0,l.g)(this);(0,n.b)(e,"unable to clone instance of non-accessor class");const t=e.metadata,o=e.store,r={},a=new Map;for(const e in t){const n=t[e],l=o?.originOf(e),p=n.clonable;if(n.readOnly||!1===p||l!==s.O.USER&&l!==s.O.DEFAULTS&&l!==s.O.WEB_MAP&&l!==s.O.WEB_SCENE)continue;const u=this[e];let d=null;d="function"==typeof p?p(u):"reference"===p?u:(0,i.TU)(u),null!=u&&null==d||(l===s.O.DEFAULTS?a.set(e,d):r[e]=d)}const p=new(0,Object.getPrototypeOf(this).constructor)(r);if(a.size){const e=(0,l.g)(p)?.store;if(e)for(const[t,o]of a)e.set(t,o,s.O.DEFAULTS)}return p}};return t=(0,r._)([(0,a.$)("esri.core.Clonable")],t),t};let u=class extends(p(s.T)){};u=(0,r._)([(0,a.$)("esri.core.Clonable")],u)},39928:(e,t,o)=>{o.d(t,{A:()=>m});var r,s=o(32816),i=o(32773),n=o(29298),l=(o(20266),o(88663)),a=o(69421),p=o(21476),u=o(41740),d=o(35902),c=o(99924),h=o(36544);o(93181),o(13671),o(40499),o(6407),o(90740),o(93804),o(91047),o(22858),o(52731),o(41390),o(58498),o(45371),o(80959),o(13226),o(16699);let y=r=class extends c.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,i.o8)(this.color)})}};(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,s._)([(0,n.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],y.prototype,"minValue",void 0),(0,s._)([(0,n.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],y.prototype,"maxValue",void 0),(0,s._)([(0,n.MZ)({type:d.A,json:{type:[h.I],write:!0}})],y.prototype,"color",void 0),y=r=(0,s._)([(0,a.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],y);const f=y;var b;let g=b=class extends p.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new b({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,i.o8)(this.colorClassBreakInfos),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,s._)([(0,l.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],g.prototype,"type",void 0),(0,s._)([(0,n.MZ)({json:{write:!0},type:String})],g.prototype,"field",void 0),(0,s._)([(0,n.MZ)({type:u.R,json:{write:!0}})],g.prototype,"legendOptions",void 0),(0,s._)([(0,n.MZ)({type:p.A.fieldTransformTypeKebabDict.apiValues,json:{type:p.A.fieldTransformTypeKebabDict.jsonValues,read:p.A.fieldTransformTypeKebabDict.read,write:p.A.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,s._)([(0,n.MZ)({type:[f],json:{write:!0}})],g.prototype,"colorClassBreakInfos",void 0),g=b=(0,s._)([(0,a.$)("esri.renderers.PointCloudClassBreaksRenderer")],g);const m=g},21476:(e,t,o)=>{o.d(t,{A:()=>v});var r,s=o(32816),i=o(93804),n=o(99924),l=o(32773),a=o(29298),p=(o(20266),o(69421)),u=o(22858),d=o(88663);o(90740),o(41390),o(40499),o(93181),o(13671),o(58498),o(91047),o(45371),o(80959),o(6407),o(36544);let c=r=class extends n.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,s._)([(0,a.MZ)({type:String,json:{write:!0}})],c.prototype,"field",void 0),(0,s._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"minValue",void 0),(0,s._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],c.prototype,"maxValue",void 0),c=r=(0,s._)([(0,p.$)("esri.renderers.support.pointCloud.ColorModulation")],c);const h=c;var y;let f=y=class extends u.a{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,s._)([(0,d.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],f.prototype,"type",void 0),(0,s._)([(0,a.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"size",void 0),(0,s._)([(0,a.MZ)({type:Boolean,json:{write:!0}})],f.prototype,"useRealWorldSymbolSizes",void 0),f=y=(0,s._)([(0,p.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],f);const b={key:"type",base:u.a,typeMap:{"fixed-size":f,splat:u.P}},g=(0,i.s)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let m=class extends n.oY{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.o8)(this.pointSizeAlgorithm),colorModulation:(0,l.o8)(this.colorModulation),pointsPerInch:(0,l.o8)(this.pointsPerInch)}}};(0,s._)([(0,a.MZ)({type:g.apiValues,readOnly:!0,nonNullable:!0,json:{type:g.jsonValues,read:!1,write:g.write}})],m.prototype,"type",void 0),(0,s._)([(0,a.MZ)({types:b,json:{write:!0}})],m.prototype,"pointSizeAlgorithm",void 0),(0,s._)([(0,a.MZ)({type:h,json:{write:!0}})],m.prototype,"colorModulation",void 0),(0,s._)([(0,a.MZ)({json:{write:!0},nonNullable:!0,type:Number})],m.prototype,"pointsPerInch",void 0),m=(0,s._)([(0,p.$)("esri.renderers.PointCloudRenderer")],m),(m||(m={})).fieldTransformTypeKebabDict=new i.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const v=m},8401:(e,t,o)=>{o.d(t,{A:()=>h});var r,s=o(32816),i=o(32773),n=o(29298),l=(o(20266),o(88663)),a=o(69421),p=o(21476),u=o(41740),d=o(24079);o(36544),o(93181),o(13671),o(40499),o(6407),o(90740),o(93804),o(91047),o(99924),o(41390),o(58498),o(45371),o(80959),o(22858),o(52731),o(35902),o(13226),o(16699),o(56273);let c=r=class extends p.A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,i.o8)(this.field),fieldTransformType:(0,i.o8)(this.fieldTransformType),stops:(0,i.o8)(this.stops),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,s._)([(0,l.e)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,s._)([(0,n.MZ)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,s._)([(0,n.MZ)({type:u.R,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,s._)([(0,n.MZ)({type:p.A.fieldTransformTypeKebabDict.apiValues,json:{type:p.A.fieldTransformTypeKebabDict.jsonValues,read:p.A.fieldTransformTypeKebabDict.read,write:p.A.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,s._)([(0,n.MZ)({type:[d.A],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,s._)([(0,a.$)("esri.renderers.PointCloudStretchRenderer")],c);const h=c},14232:(e,t,o)=>{o.d(t,{A:()=>m});var r,s=o(32816),i=o(32773),n=o(29298),l=(o(20266),o(88663)),a=o(69421),p=o(21476),u=o(41740),d=o(35902),c=o(99924),h=o(36544);o(93181),o(13671),o(40499),o(6407),o(90740),o(93804),o(91047),o(22858),o(52731),o(41390),o(58498),o(45371),o(80959),o(13226),o(16699);let y=r=class extends c.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,i.o8)(this.values),color:(0,i.o8)(this.color)})}};(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"description",void 0),(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],y.prototype,"label",void 0),(0,s._)([(0,n.MZ)({type:[String],json:{write:!0}})],y.prototype,"values",void 0),(0,s._)([(0,n.MZ)({type:d.A,json:{type:[h.I],write:!0}})],y.prototype,"color",void 0),y=r=(0,s._)([(0,a.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const f=y;var b;let g=b=class extends p.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new b({...this.cloneProperties(),field:(0,i.o8)(this.field),fieldTransformType:(0,i.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,i.o8)(this.colorUniqueValueInfos),legendOptions:(0,i.o8)(this.legendOptions)})}};(0,s._)([(0,l.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],g.prototype,"type",void 0),(0,s._)([(0,n.MZ)({json:{write:!0},type:String})],g.prototype,"field",void 0),(0,s._)([(0,n.MZ)({type:p.A.fieldTransformTypeKebabDict.apiValues,json:{type:p.A.fieldTransformTypeKebabDict.jsonValues,read:p.A.fieldTransformTypeKebabDict.read,write:p.A.fieldTransformTypeKebabDict.write}})],g.prototype,"fieldTransformType",void 0),(0,s._)([(0,n.MZ)({type:[f],json:{write:!0}})],g.prototype,"colorUniqueValueInfos",void 0),(0,s._)([(0,n.MZ)({type:u.R,json:{write:!0}})],g.prototype,"legendOptions",void 0),g=b=(0,s._)([(0,a.$)("esri.renderers.PointCloudUniqueValueRenderer")],g);const m=g},24079:(e,t,o)=>{o.d(t,{A:()=>c});var r,s=o(32816),i=o(35902),n=o(99924),l=o(29298),a=o(36544),p=(o(32773),o(69421)),u=o(56273);o(13226),o(16699),o(20266),o(90740),o(41390),o(40499),o(93181),o(13671),o(58498),o(91047),o(45371),o(80959),o(6407);let d=r=class extends n.oY{constructor(e){super(e),this.color=null,this.label=null,this.value=null}writeValue(e,t,o){t[o]=e??0}clone(){return new r({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,s._)([(0,l.MZ)({type:i.A,json:{type:[a.I],write:!0}})],d.prototype,"color",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],d.prototype,"label",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],d.prototype,"value",void 0),(0,s._)([(0,u.w)("value")],d.prototype,"writeValue",null),d=r=(0,s._)([(0,p.$)("esri.renderers.visualVariables.support.ColorStop")],d);const c=d}}]);
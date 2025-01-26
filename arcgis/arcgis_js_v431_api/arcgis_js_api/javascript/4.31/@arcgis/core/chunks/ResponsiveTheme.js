/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{T as e,C as t,M as i,r as a,e as n,a as r,f as s}from"./Theme.js";class l extends e{setupDefaultRules(){super.setupDefaultRules(),this.rule("InterfaceColors").setAll({stroke:t.fromHex(0),fill:t.fromHex(2829099),primaryButton:t.lighten(t.fromHex(6788316),-.2),primaryButtonHover:t.lighten(t.fromHex(6779356),-.2),primaryButtonDown:t.lighten(t.fromHex(6872181),-.2),primaryButtonActive:t.lighten(t.fromHex(6872182),-.2),primaryButtonText:t.fromHex(16777215),primaryButtonStroke:t.lighten(t.fromHex(6788316),-.2),secondaryButton:t.fromHex(3881787),secondaryButtonHover:t.lighten(t.fromHex(3881787),.1),secondaryButtonDown:t.lighten(t.fromHex(3881787),.15),secondaryButtonActive:t.lighten(t.fromHex(3881787),.2),secondaryButtonText:t.fromHex(12303291),secondaryButtonStroke:t.lighten(t.fromHex(3881787),-.2),grid:t.fromHex(12303291),background:t.fromHex(0),alternativeBackground:t.fromHex(16777215),text:t.fromHex(16777215),alternativeText:t.fromHex(0),disabled:t.fromHex(11382189),positive:t.fromHex(5288704),negative:t.fromHex(11730944)})}}class o extends e{constructor(e,t){super(e,t),Object.defineProperty(this,"_dp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"responsiveRules",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this._dp=new i([this._root._rootContainer.onPrivate("width",(e=>{this._isUsed()&&this._maybeApplyRules()})),this._root._rootContainer.onPrivate("height",(e=>{this._isUsed()&&this._maybeApplyRules()}))])}static widthXXS(e,t){return e<=o.XXS}static widthXS(e,t){return e<=o.XS}static widthS(e,t){return e<=o.S}static widthM(e,t){return e<=o.M}static widthL(e,t){return e<=o.L}static widthXL(e,t){return e<=o.XL}static widthXXL(e,t){return e<=o.XXL}static heightXXS(e,t){return t<=o.XXS}static heightXS(e,t){return t<=o.XS}static heightS(e,t){return t<=o.S}static heightM(e,t){return t<=o.M}static heightL(e,t){return t<=o.L}static heightXL(e,t){return t<=o.XL}static heightXXL(e,t){return t<=o.XXL}static isXXS(e,t){return e<=o.XXS&&t<=o.XXS}static isXS(e,t){return e<=o.XS&&t<=o.XS}static isS(e,t){return e<=o.S&&t<=o.S}static isM(e,t){return e<=o.M&&t<=o.M}static isL(e,t){return e<=o.L&&t<=o.L}static isXL(e,t){return e<=o.XL&&t<=o.XL}static isXXL(e,t){return e<=o.XXL&&t<=o.XXL}static maybeXXS(e,t){return e<=o.XXS||t<=o.XXS}static maybeXS(e,t){return e<=o.XS||t<=o.XS}static maybeS(e,t){return e<=o.S||t<=o.S}static maybeM(e,t){return e<=o.M||t<=o.M}static maybeL(e,t){return e<=o.L||t<=o.L}static maybeXL(e,t){return e<=o.XL||t<=o.XL}static maybeXXL(e,t){return e<=o.XXL||t<=o.XXL}static newEmpty(e){return new this(e,!0)}addRule(e){return e.name&&!e.template&&(e.template=this.rule(e.name,e.tags)),this.responsiveRules.push(e),this._maybeApplyRule(e),e}removeRule(e){a(this.responsiveRules,e)}dispose(){this._dp&&this._dp.dispose()}_isUsed(){return-1!==this._root._rootContainer.get("themes").indexOf(this)}_maybeApplyRules(){n(this.responsiveRules,(e=>{this._maybeUnapplyRule(e)})),n(this.responsiveRules,(e=>{this._maybeApplyRule(e)}))}_maybeApplyRule(e){if(e.applied)return;const t=this._root._rootContainer.getPrivate("width"),i=this._root._rootContainer.getPrivate("height");e.relevant.call(e,t,i)&&(e.applied=!0,e.template&&e.settings&&e.template.setAll(e.settings),e.applying&&e.applying.call(e))}_maybeUnapplyRule(e){if(!e.applied)return;const t=this._root._rootContainer.getPrivate("width"),i=this._root._rootContainer.getPrivate("height");e.relevant.call(e,t,i)||(e.applied=!1,e.template&&e.template.removeAll(),e.removing&&e.removing.call(e))}setupDefaultRules(){super.setupDefaultRules();const e=e=>this.addRule(e);e({name:"Chart",relevant:o.widthXXS,settings:{paddingLeft:0,paddingRight:0}}),e({name:"Chart",relevant:o.heightXXS,settings:{paddingTop:0,paddingBottom:0}}),e({name:"Bullet",relevant:o.isXS,settings:{forceHidden:!0}}),e({name:"Legend",relevant:o.isXS,settings:{forceHidden:!0}}),e({name:"HeatLegend",tags:["vertical"],relevant:o.widthXS,settings:{forceHidden:!0}}),e({name:"HeatLegend",tags:["horizontal"],relevant:o.heightXS,settings:{forceHidden:!0}}),e({name:"Label",tags:["heatlegend","start"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"Label",tags:["heatlegend","end"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"Button",tags:["resize"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"AxisRendererX",relevant:o.heightXS,settings:{inside:!0}}),e({name:"AxisRendererY",relevant:o.widthXS,settings:{inside:!0}}),e({name:"AxisRendererXLabel",relevant:o.heightXS,settings:{minPosition:.1,maxPosition:.9}}),e({name:"AxisLabel",tags:["y"],relevant:o.widthXS,settings:{centerY:r,maxPosition:.9}}),e({name:"AxisLabel",tags:["x"],relevant:o.heightXXS,settings:{forceHidden:!0}}),e({name:"AxisLabel",tags:["x","minor"],relevant:o.widthXXL,settings:{forceHidden:!0}}),e({name:"AxisLabel",tags:["y"],relevant:o.widthXXS,settings:{forceHidden:!0}}),e({name:"AxisLabel",tags:["y","minor"],relevant:o.heightXXL,settings:{forceHidden:!0}}),e({name:"AxisTick",tags:["x"],relevant:o.heightXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),e({name:"AxisTick",tags:["y"],relevant:o.widthXXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),e({name:"Grid",relevant:o.maybeXXS,settings:{forceHidden:!0}}),e({name:"RadialLabel",tags:["radial"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"RadialLabel",tags:["circular"],relevant:o.maybeS,settings:{inside:!0}}),e({name:"AxisTick",relevant:o.maybeS,settings:{inside:!0}}),e({name:"RadialLabel",tags:["circular"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"AxisTick",tags:["circular"],relevant:o.maybeXS,settings:{inside:!0}}),e({name:"PieChart",relevant:o.maybeXS,settings:{radius:s(99)}}),e({name:"PieChart",relevant:o.widthM,settings:{radius:s(99)}}),e({name:"RadialLabel",tags:["pie"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"RadialLabel",tags:["pie"],relevant:o.widthM,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pie"],relevant:o.maybeXS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pie"],relevant:o.widthM,settings:{forceHidden:!0}}),e({name:"FunnelSeries",relevant:o.widthM,settings:{alignLabels:!1}}),e({name:"Label",tags:["funnel","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Tick",tags:["funnel","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Label",tags:["funnel","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["funnel","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"PyramidSeries",relevant:o.widthM,settings:{alignLabels:!1}}),e({name:"Label",tags:["pyramid","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pyramid","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Label",tags:["pyramid","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pyramid","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"PictorialStackedSeries",relevant:o.widthM,settings:{alignLabels:!1}}),e({name:"Label",tags:["pictorial","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pictorial","vertical"],relevant:o.widthL,settings:{forceHidden:!0}}),e({name:"Label",tags:["pictorial","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Tick",tags:["pictorial","horizontal"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Label",tags:["flow","horizontal"],relevant:o.widthS,settings:{forceHidden:!0}}),e({name:"Label",tags:["flow","vertical"],relevant:o.heightS,settings:{forceHidden:!0}}),e({name:"Chord",relevant:o.maybeXS,settings:{radius:s(99)}}),e({name:"Label",tags:["hierarchy","node"],relevant:o.maybeXS,settings:{forceHidden:!0}})}}Object.defineProperty(o,"XXS",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(o,"XS",{enumerable:!0,configurable:!0,writable:!0,value:200}),Object.defineProperty(o,"S",{enumerable:!0,configurable:!0,writable:!0,value:300}),Object.defineProperty(o,"M",{enumerable:!0,configurable:!0,writable:!0,value:400}),Object.defineProperty(o,"L",{enumerable:!0,configurable:!0,writable:!0,value:600}),Object.defineProperty(o,"XL",{enumerable:!0,configurable:!0,writable:!0,value:800}),Object.defineProperty(o,"XXL",{enumerable:!0,configurable:!0,writable:!0,value:1e3});export{l as D,o as R};

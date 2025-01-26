// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../Color ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/RandomLCG ../core/has ../core/accessorSupport/decorators/subclass ./Histogram ./Slider ./Widget ./HistogramRangeSlider/HistogramRangeSliderViewModel ./smartMapping/support/utils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(e,n,p,f,r,d,B,u,v,w,x,y,z,t,C,A,q){d=class extends x{constructor(a,
h){super(a,h);this._barElements=[];this.dataLineCreatedFunction=this.dataLines=this.barCreatedFunction=this._slider=this._histogram=null;this.excludedBarColor=new n("#d7e5f0");this.includedBarColor=new n("#599dd4");this.messages=null;this.standardDeviationCount=1;this.viewModel=new y}initialize(){const {average:a,bins:h,hasTimeData:m,max:b,min:k,viewModel:g}=this;this._updateBarFill=this._updateBarFill.bind(this);this._histogram=new v({average:a,bins:h,barCreatedFunction:(c,l)=>{0===c&&(this._barElements=
[]);this._barElements.push(l);this._updateBarFill(c,l);this.barCreatedFunction&&this.barCreatedFunction(c,l)},dataLines:this._getDataLines(),dataLineCreatedFunction:(c,l)=>{this.dataLineCreatedFunction&&this.dataLineCreatedFunction(c,l)},labelFormatFunction:this.labelFormatFunction,layout:"horizontal",max:b,min:k});this._slider=new w({labelFormatFunction:this.labelFormatFunction,layout:"horizontal",visibleElements:{labels:!0,rangeLabels:!0},rangeLabelInputsEnabled:!m,viewModel:g});this.addHandles([this._slider.on("max-change",
c=>this.emit("max-change",c)),this._slider.on("min-change",c=>this.emit("min-change",c)),this._slider.on("segment-drag",c=>{this._updateBarFills();this.emit("segment-drag",c)}),this._slider.on("thumb-change",c=>{this._updateBarFills();this.emit("thumb-change",c)}),this._slider.on("thumb-drag",c=>{this._updateBarFills();this.emit("thumb-drag",c)}),p.watch(()=>this.bins,c=>{if(c&&this._histogram.bins){const l=this._histogram.bins.length-c.length;this._barElements.splice(-l,l)}else this._barElements=
[];this._histogram.set({bins:c});this._updateBarFills();this.scheduleRender()}),p.watch(()=>[this.max,this.min,this.rangeType,this.values],([c,l])=>{this._histogram.set({max:c,min:l});this._updateBarFills();this.scheduleRender()}),p.watch(()=>[this.average,this.dataLines,this.standardDeviation,this.standardDeviationCount],([c])=>{this._histogram.set({average:c,dataLines:this._getDataLines()})}),p.watch(()=>this.labelFormatFunction,c=>{this._histogram.set({labelFormatFunction:c})}),p.watch(()=>this.hasTimeData,
c=>{this._slider.set({rangeLabelInputsEnabled:!c})})])}get average(){return this.viewModel.average}set average(a){this.viewModel.average=a}get bins(){return this.viewModel.bins}set bins(a){this.viewModel.bins=a}get hasTimeData(){return this.viewModel.hasTimeData}set hasTimeData(a){this.viewModel.hasTimeData=a}get icon(){return"arrow-double-horizontal"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get labelFormatFunction(){return this.viewModel.labelFormatFunction}set labelFormatFunction(a){this.viewModel.labelFormatFunction=
a}get max(){return this.viewModel.max}set max(a){this.viewModel.max=a}get min(){return this.viewModel.min}set min(a){this.viewModel.min=a}get precision(){return this.viewModel.precision}set precision(a){this.viewModel.precision=a}get rangeType(){return this.viewModel.rangeType}set rangeType(a){this.viewModel.rangeType=a}get standardDeviation(){return this.viewModel.standardDeviation}set standardDeviation(a){this.viewModel.standardDeviation=a}get values(){return this.viewModel.values}set values(a){this.viewModel.values=
a}generateWhereClause(a){return this.viewModel.generateWhereClause(a)}render(){const {rangeType:a,viewModel:h,label:m}=this,b=this.classes("esri-histogram-range-slider",t.globalCss.widget,`${"esri-histogram-range-slider__range-type--"}${a}`,"disabled"===h.state?t.globalCss.disabled:null);return q.tsx("div",{"aria-label":m,class:b},"disabled"===h.state?null:this._renderContent())}_renderContent(){return[this._renderHistogram(),this._renderSlider()]}_renderSlider(){return q.tsx("div",{class:"esri-histogram-range-slider__slider-container",
key:`${this.id}-slider-container`},this._slider.render())}_renderHistogram(){return q.tsx("div",{class:"esri-histogram-range-slider__histogram-container"},this._histogram.render())}_getDataLines(){return[...this._getStandardDeviationDataLines(),...(this.dataLines||[])]}_getStandardDeviationDataLines(){const {average:a,standardDeviation:h,standardDeviationCount:m}=this;return z.getDeviationValues(h,a,m).map(b=>({value:b}))}_updateBarFills(){this._barElements.forEach((a,h)=>this._updateBarFill(h,a))}_updateBarFill(a,
h){h.setAttribute("fill",this._getFillForBar(a)?.toHex()??"")}_getFillForBar(a){const {bins:h,rangeType:m,values:b}=this;if(-1===a||!h?.length||!m||!b?.length)return null;a=h[a];if(!a)return null;const {maxValue:k,minValue:g}=a;a=k-g;const c=b[0]>g&&b[0]<k;switch(m){case "less-than":case "at-most":if(c)return this._getBlendedColor((b[0]-g)/a);if(k<=b[0])break;return this.excludedBarColor;case "greater-than":case "at-least":if(c)return this._getBlendedColor(1-(b[0]-g)/a);if(g>=b[0])break;return this.excludedBarColor;
case "between":if(2===b.length){if(b[0]>g&&b[0]<k)return this._getBlendedColor(1-(b[0]-g)/a);if(b[1]>g&&b[1]<k)return this._getBlendedColor((b[1]-g)/a);if(!(g>=b[0]&&k<=b[1]))return this.excludedBarColor}break;case "not-between":if(2===b.length){if(b[0]>g&&b[0]<k)return this._getBlendedColor((b[0]-g)/a);if(b[1]>g&&b[1]<k)return this._getBlendedColor(1-(b[1]-g)/a);if(g>b[0]&&k<b[1])return this.excludedBarColor}}return this.includedBarColor}_getBlendedColor(a){return n.blendColors(this.excludedBarColor,
this.includedBarColor,a)}};e.__decorate([f.property()],d.prototype,"average",null);e.__decorate([f.property()],d.prototype,"barCreatedFunction",void 0);e.__decorate([f.property()],d.prototype,"bins",null);e.__decorate([f.property()],d.prototype,"dataLines",void 0);e.__decorate([f.property()],d.prototype,"dataLineCreatedFunction",void 0);e.__decorate([f.property({type:n,json:{type:[r.Integer],write:!0}})],d.prototype,"excludedBarColor",void 0);e.__decorate([f.property()],d.prototype,"hasTimeData",
null);e.__decorate([f.property({type:n,json:{type:[r.Integer],write:!0}})],d.prototype,"includedBarColor",void 0);e.__decorate([f.property()],d.prototype,"icon",null);e.__decorate([f.property()],d.prototype,"label",null);e.__decorate([f.property()],d.prototype,"labelFormatFunction",null);e.__decorate([f.property()],d.prototype,"max",null);e.__decorate([f.property(),A.messageBundle("esri/widgets/HistogramRangeSlider/t9n/HistogramRangeSlider")],d.prototype,"messages",void 0);e.__decorate([f.property()],
d.prototype,"min",null);e.__decorate([f.property()],d.prototype,"precision",null);e.__decorate([f.property()],d.prototype,"rangeType",null);e.__decorate([f.property()],d.prototype,"standardDeviation",null);e.__decorate([f.property()],d.prototype,"standardDeviationCount",void 0);e.__decorate([f.property()],d.prototype,"values",null);e.__decorate([f.property()],d.prototype,"viewModel",void 0);return d=e.__decorate([u.subclass("esri.widgets.HistogramRangeSlider")],d)});
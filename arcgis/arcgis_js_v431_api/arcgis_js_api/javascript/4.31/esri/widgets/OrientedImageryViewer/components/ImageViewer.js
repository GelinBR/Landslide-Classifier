// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../../views/MapView ../../Widget ./ImageViewerViewModel ../../support/globalCss ../../support/widgetUtils ../../support/decorators/vmEvent ../../support/jsxFactory".split(" "),function(c,d,b,p,q,f,g,h,e,k,r,l,m){b=class extends h{constructor(){super(...arguments);this.viewModel=new e;this._afterContainerCreate=
a=>{this.imageRenderer.container=a};this.addGraphic=(a,n)=>{this.viewModel.addGraphic(a,n)};this.addManyGraphics=a=>{this.viewModel.addManyGraphics(a)};this.clearGraphics=()=>{this.viewModel.clearGraphics()};this.clearImage=()=>{this.viewModel.clearImage()};this.loadImage=async a=>this.viewModel.loadImage(a);this.removeGraphic=a=>{this.viewModel.removeGraphic(a)};this.removeManyGraphics=a=>{this.viewModel.removeManyGraphics(a)}}get autoLoad(){return this.viewModel.autoLoad}set autoLoad(a){this.viewModel.autoLoad=
a}get brightness(){return this.viewModel.brightness}set brightness(a){this.viewModel.brightness=a}get clickAction(){return this.viewModel.clickAction}set clickAction(a){this.viewModel.clickAction=a}get contrast(){return this.viewModel.contrast}set contrast(a){this.viewModel.contrast=a}get customParameters(){return this.viewModel.customParameters}set customParameters(a){this.viewModel.customParameters=a}get error(){return this.viewModel.error}get imageSize(){const a=this.viewModel.image?.serviceRasterInfo;
return a?[a.width,a.height]:[0,0]}get imagePointsInView(){return this.viewModel.imagePointsInView}get imageRenderer(){return this.viewModel.imageRenderer}get imageRotation(){return this.viewModel.imageRotation}set imageRotation(a){this.viewModel.imageRotation=a}get imageSource(){return this.viewModel.imageSource}set imageSource(a){this.viewModel.imageSource=a}get sharpness(){return this.viewModel.sharpness}set sharpness(a){this.viewModel.sharpness=a}get state(){return this.viewModel.state}render(){return m.tsx("div",
{afterCreate:this._afterContainerCreate,bind:this,class:this.classes(k.globalCss.widget,"esri-image-viewer")})}};c.__decorate([d.property({type:Boolean})],b.prototype,"autoLoad",null);c.__decorate([d.property({type:Number}),d.property()],b.prototype,"brightness",null);c.__decorate([d.property()],b.prototype,"clickAction",null);c.__decorate([d.property({type:Number})],b.prototype,"contrast",null);c.__decorate([d.property({type:Object})],b.prototype,"customParameters",null);c.__decorate([d.property({readOnly:!0})],
b.prototype,"error",null);c.__decorate([d.property()],b.prototype,"imageSize",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"imagePointsInView",null);c.__decorate([d.property({readOnly:!0,type:g})],b.prototype,"imageRenderer",null);c.__decorate([d.property()],b.prototype,"imageRotation",null);c.__decorate([d.property()],b.prototype,"imageSource",null);c.__decorate([l.vmEvent(["click","hittest-response","pixel-location"]),d.property({type:e})],b.prototype,"viewModel",void 0);c.__decorate([d.property({type:Number})],
b.prototype,"sharpness",null);c.__decorate([d.property({readOnly:!0})],b.prototype,"state",null);return b=c.__decorate([f.subclass("esri.widgets.OrientedImageryViewer.components.ImageViewer")],b)});
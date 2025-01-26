// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/lang ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/subclass ../intl/date ../views/VideoView ./Slider ./Widget ../chunks/componentsUtils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ./VideoPlayer/css ./VideoPlayer/VideoPlayerViewModel ./VideoPlayer/components/MetadataSection ./VideoPlayer/components/PlayerActionsGroup ./VideoPlayer/components/PlayerControlsGroup ./VideoPlayer/components/SettingsButton".split(" "),
function(k,e,u,m,f,d,F,v,w,x,y,z,A,B,G,C,b,g,n,p,q,r,D){function t(a){return w.formatDate(1E3*Math.round(a),{minute:"2-digit",second:"2-digit"})}function E(a){a.prepend(this)}d=class extends z{constructor(a,c){super(a,c);this._settings=u.clone(D.defaultSettings);this._metadataVisible=!1;this._slider=new y({visibleElements:{labels:!1,rangeLabels:!1},min:0,max:100,values:[0],thumbsConstrained:!1});this.videoView=new x({container:document.createElement("div")});this.viewModel=new n}initialize(){this.addHandles([m.watch(()=>
this.viewModel.layer,()=>{this.videoView.layer=this.viewModel.layer},m.initial),this._slider.on(["thumb-change","thumb-drag"],({value:a})=>{this.viewModel.seekTo(a*this.viewModel.duration/100)})])}loadDependencies(){return Promise.all([q.loadPlayerActionsGroupComponents(),r.loadPlayerControlsGroupComponents(),p.loadMetadataSectionComponents(),A.loadCalciteComponents({progress:()=>new Promise((a,c)=>k(["../chunks/calcite-progress"],a,c)),panel:()=>new Promise((a,c)=>k(["../chunks/calcite-panel"],a,
c)),scrim:()=>new Promise((a,c)=>k(["../chunks/calcite-scrim"],a,c))})])}get icon(){return"video-web"}set icon(a){this._overrideIfSome("icon",a)}get layer(){return this.viewModel.layer}set layer(a){this.viewModel.layer=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}render(){return b.tsx("div",{class:this.classes(g.css.base,B.globalCss.widget)},b.tsx("calcite-panel",{heading:this.layer?.title||"Video Player"},this._renderLoadingScrim(),this._renderBuffering(),this._renderVideoSection(),
this._renderActionBar(),this._renderMetadataSection()))}_renderLoadingScrim(){const {state:a}=this.viewModel;return this.videoView.ready?null:b.tsx("calcite-scrim",{loading:"error"!==a},"error"===a?this.messages.errorLoadingLayer:null)}_renderBuffering(){const {currentTime:a,buffered:c,duration:h}=this.viewModel;return this.viewModel.ended||c/(h||1)>a/(h||1)?null:b.tsx("calcite-progress",{type:"indeterminate"})}_renderVideoSection(){const {buffered:a,currentTime:c,duration:h}=this.viewModel,l=this.videoView.container;
if(!l)return null;l.className=g.css.videoView;this._slider.values=[c/(h||1)*100];return b.tsx("section",{afterCreate:E,bind:l},b.tsx("div",{class:g.css.sliderProgressContainer},b.tsx("progress",{class:g.css.progress,max:"1",value:`${a/(h||1)}`}),b.tsx("div",{class:g.css.slider},this._slider.render())))}_renderActionBar(){return b.tsx("div",{class:g.css.playerToolbar},b.tsx(q.PlayerActionsGroup,{messages:this.messages,viewModel:this.viewModel}),b.tsx("div",{class:g.css.playerTimecode},t(this.viewModel.currentTime),
" / ",t(this.viewModel.duration)),b.tsx(r.PlayerControlsGroup,{messages:this.messages,settings:this._settings,toggleMetadata:()=>this._metadataVisible=!this._metadataVisible,viewModel:this.viewModel}))}_renderMetadataSection(){return this._metadataVisible?b.tsx(p.MetadataSection,{messages:this.messages,viewModel:this.viewModel}):null}};e.__decorate([f.property()],d.prototype,"_settings",void 0);e.__decorate([f.property()],d.prototype,"icon",null);e.__decorate([f.property()],d.prototype,"layer",null);
e.__decorate([f.property(),C.messageBundle("esri/widgets/VideoPlayer/t9n/VideoPlayer")],d.prototype,"messages",void 0);e.__decorate([f.property()],d.prototype,"videoView",void 0);e.__decorate([f.property({type:n})],d.prototype,"viewModel",void 0);e.__decorate([f.property()],d.prototype,"view",null);return d=e.__decorate([v.subclass("esri.widgets.VideoPlayer")],d)});
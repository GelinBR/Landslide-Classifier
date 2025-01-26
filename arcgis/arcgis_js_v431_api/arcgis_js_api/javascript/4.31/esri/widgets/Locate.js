// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/deprecate ../core/Logger ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ./Widget ./Locate/LocateViewModel ../chunks/componentsUtils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory".split(" "),function(h,c,l,m,d,b,z,u,v,n,w,p,A,q,x,g){b=class extends v{constructor(a,e){super(a,e);this.messagesCommon=this.messages=
null;this.viewModel=new n;this._locate=()=>{const {viewModel:f}=this;"locating"===f.state?f.cancelLocate():f.locate().catch(()=>{})}}loadDependencies(){return w.loadCalciteComponents({button:()=>new Promise((a,e)=>h(["../chunks/calcite-button"],a,e)),loader:()=>new Promise((a,e)=>h(["../chunks/calcite-loader"],a,e)),tooltip:()=>new Promise((a,e)=>h(["../chunks/calcite-tooltip"],a,e))})}get geolocationOptions(){return this.viewModel.geolocationOptions}set geolocationOptions(a){this.viewModel.geolocationOptions=
a}get goToLocationEnabled(){return this.viewModel.goToLocationEnabled}set goToLocationEnabled(a){this.viewModel.goToLocationEnabled=a}get goToOverride(){return this.viewModel.goToOverride}set goToOverride(a){this.viewModel.goToOverride=a}get graphic(){return this.viewModel.graphic}set graphic(a){this.viewModel.graphic=a}get icon(){return"gps-off"}set icon(a){this._overrideIfSome("icon",a)}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get popupEnabled(){return this.viewModel.popupEnabled}set popupEnabled(a){this.viewModel.popupEnabled=
a}get rotationEnabled(){l.deprecatedProperty(m.getLogger(this),"rotationEnabled",{replacement:"use Track widget",version:"4.29",warnOnce:!0});return this.viewModel.rotationEnabled}set rotationEnabled(a){l.deprecatedProperty(m.getLogger(this),"rotationEnabled",{replacement:"use Track widget",version:"4.29",warnOnce:!0});this.viewModel.rotationEnabled=a}get scale(){return this.viewModel.scale}set scale(a){this.viewModel.scale=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}cancelLocate(){this.viewModel.cancelLocate()}locate(){return this.viewModel.locate()}render(){const {viewModel:a,
icon:e}=this,{state:f}=a,k="locating"===f,r=k?this.messagesCommon.cancel:this.messages.title,y="feature-unsupported"===f,t=this._localizeError(this.viewModel?.error);return g.tsx("div",{class:this.classes("esri-locate",p.globalCss.widget)},!y&&g.tsx("calcite-button",{class:p.globalCss.widgetButton,disabled:"disabled"===f,iconStart:k?void 0:e,kind:"neutral",label:r,onclick:this._locate,title:r},k?g.tsx("calcite-loader",{inline:!0,label:""}):null),t?g.tsx("calcite-tooltip",{open:!0,overlayPositioning:"fixed",
referenceElement:this.container},t):null)}_localizeError(a){if(a instanceof GeolocationPositionError)return a.code===GeolocationPositionError.PERMISSION_DENIED?this.messages?.permissionError:a.code===GeolocationPositionError.TIMEOUT?this.messages?.timeoutError:this.messages?.positionUnavailable;if(a instanceof Error)return a.message}};c.__decorate([d.property()],b.prototype,"geolocationOptions",null);c.__decorate([d.property()],b.prototype,"goToLocationEnabled",null);c.__decorate([d.property()],b.prototype,
"goToOverride",null);c.__decorate([d.property()],b.prototype,"graphic",null);c.__decorate([d.property()],b.prototype,"icon",null);c.__decorate([d.property()],b.prototype,"label",null);c.__decorate([d.property(),q.messageBundle("esri/widgets/Locate/t9n/Locate")],b.prototype,"messages",void 0);c.__decorate([d.property(),q.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);c.__decorate([d.property()],b.prototype,"popupEnabled",null);c.__decorate([d.property()],b.prototype,"rotationEnabled",
null);c.__decorate([d.property()],b.prototype,"scale",null);c.__decorate([d.property()],b.prototype,"view",null);c.__decorate([d.property({type:n}),x.vmEvent(["locate","locate-error"])],b.prototype,"viewModel",void 0);return b=c.__decorate([u.subclass("esri.widgets.Locate")],b)});
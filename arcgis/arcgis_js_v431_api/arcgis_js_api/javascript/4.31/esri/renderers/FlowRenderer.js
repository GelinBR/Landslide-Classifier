// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../Color ../core/jsonMap ../core/JSONSupport ../core/screenUtils ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/RandomLCG ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./mixins/VisualVariablesMixin ./support/AuthoringInfo ./support/RendererLegendOptions".split(" "),function(b,k,d,a,f,c,E,F,G,l,m,n,p,q){var g;d=new d.JSONMap({flow_from:"flow-from",flow_to:"flow-to"});a=g=class extends n.VisualVariablesMixin(a.JSONSupport){constructor(e){super(e);
this.density=.8;this.color=new k([255,255,255,1]);this.maxPathLength=200;this.trailWidth=1.5;this.flowSpeed=10;this.trailLength=100;this.smoothing=0;this.flowRepresentation="flow-from";this.type="flow";this.legendOptions=this.authoringInfo=null;this.trailCap="butt";this.background="none"}clone(){const {density:e,maxPathLength:h,trailWidth:r,flowSpeed:t,trailLength:u,smoothing:v,flowRepresentation:w,trailCap:x,background:y}=this,z=this.color.clone(),B=(this.visualVariables||[]).map(A=>A.clone()),C=
this.authoringInfo?.clone(),D=this.legendOptions?.clone();return new g({density:e,color:z,maxPathLength:h,trailWidth:r,flowSpeed:t,trailLength:u,trailCap:x,background:y,smoothing:v,flowRepresentation:w,visualVariables:B,authoringInfo:C,legendOptions:D})}getSymbol(e,h){}async getSymbolAsync(e,h){}getSymbols(){return[]}};b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"density",void 0);b.__decorate([c.property({type:k,json:{write:{allowNull:!0}}})],a.prototype,"color",void 0);b.__decorate([c.property({type:Number,
cast:f.toPt,json:{write:!0}})],a.prototype,"maxPathLength",void 0);b.__decorate([c.property({type:Number,cast:f.toPt,json:{write:!0}})],a.prototype,"trailWidth",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"flowSpeed",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"trailLength",void 0);b.__decorate([c.property({type:Number,cast:f.toPt,json:{write:!1}})],a.prototype,"smoothing",void 0);b.__decorate([c.property({type:d.apiValues,json:{type:d.jsonValues,
read:{reader:d.read},write:{writer:d.write}}})],a.prototype,"flowRepresentation",void 0);b.__decorate([l.enumeration({flowRenderer:"flow"})],a.prototype,"type",void 0);b.__decorate([c.property({type:p,json:{write:!0}})],a.prototype,"authoringInfo",void 0);b.__decorate([c.property({type:q,json:{write:!0}})],a.prototype,"legendOptions",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"trailCap",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,
"background",void 0);return a=g=b.__decorate([m.subclass("esri.renderers.FlowRenderer")],a)});
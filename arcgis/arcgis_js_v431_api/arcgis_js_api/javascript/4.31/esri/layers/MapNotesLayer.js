// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../geometry ../Graphic ../symbols ../core/Collection ../core/Error ../core/lang ../core/MultiOriginJSONSupport ../core/object ../core/Warning ../core/accessorSupport/decorators/property ../core/has ../core/Logger ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../geometry/projection ../geometry/support/aaBoundingRect ../geometry/support/normalizeUtils ../geometry/support/spatialReferenceUtils ./FeatureLayer ./GraphicsLayer ./Layer ./graphics/objectIdUtils ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./support/Field ../symbols/SimpleFillSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleMarkerSymbol ../symbols/TextSymbol ../geometry/SpatialReference ../geometry/Extent".split(" "),
function(d,e,H,ca,w,I,x,J,K,A,h,da,ea,t,B,L,r,l,M,N,O,P,Q,R,S,T,U,V,C,W,X,D,Y,u,Z){function v(b){return"markup"===b.featureCollectionType||b.layers.some(a=>null!=a.layerDefinition.visibilityField||!E(a))}function E({layerDefinition:b,featureSet:a}){const c=b.geometryType??a.geometryType;return y.find(g=>c===g.geometryTypeJSON&&b.drawingInfo?.renderer?.symbol?.type===g.identifyingSymbol.type)}function F(){return new Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const G=new C({name:"OBJECTID",alias:"OBJECTID",
type:"oid",nullable:!1,editable:!1}),aa=new C({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let n=class extends P{constructor(b){super(b);this.visibilityMode="inherited"}initialize(){for(const b of this.graphics)b.sourceLayer=this.layer;this.graphics.on("after-add",b=>{b.item.sourceLayer=this.layer});this.graphics.on("after-remove",b=>{b.item.sourceLayer=null})}get fullExtent(){const b=this.layer?.spatialReference,a=this.fullBounds;return b?null==a?r.projectOrLoad(F(),
b).geometry:l.toExtent(a,b):null}get fullBounds(){const b=this.layer?.spatialReference;if(!b)return null;const a=l.empty();this.graphics.forEach(c=>{c=null!=c.geometry?r.projectOrLoad(c.geometry,b).geometry:null;null!=c&&l.expand(a,"point"===c.type?c:c.extent,a)});return l.equals(a,l.negativeInfinity)?null:a}get sublayers(){return this.graphics}};d.__decorate([h.property({readOnly:!0})],n.prototype,"fullExtent",null);d.__decorate([h.property({readOnly:!0})],n.prototype,"fullBounds",null);d.__decorate([h.property({readOnly:!0})],
n.prototype,"sublayers",null);d.__decorate([h.property()],n.prototype,"layer",void 0);d.__decorate([h.property()],n.prototype,"layerId",void 0);d.__decorate([h.property({readOnly:!0})],n.prototype,"visibilityMode",void 0);n=d.__decorate([B.subclass("esri.layers.MapNotesLayer.MapNotesSublayer")],n);const y=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new W).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",
id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new X).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new D).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new D).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new Y).toJSON()}];
e=class extends S.BlendLayer(V.ScaleRangeLayer(T.OperationalLayer(U.PortalLayer(J.MultiOriginJSONMixin(Q))))){constructor(b){super(b);this.capabilities={operations:{supportsMapNotesEditing:!0}};this.featureCollectionJSON=this.featureCollections=null;this.featureCollectionType="notes";this.legendEnabled=!1;this.listMode="hide-children";this.maxScale=this.minScale=0;this.spatialReference=u.WGS84;this.sublayers=new w(y.map(a=>new n({id:a.id,layerId:a.layerId,title:a.title,layer:this})));this.title="Map Notes";
this.type="map-notes";this.visibilityMode="inherited"}readCapabilities(b,a,c){return{operations:{supportsMapNotesEditing:!v(a)&&"portal-item"!==c?.origin}}}readFeatureCollections(b,a,c){if(!v(a))return null;b=a.layers.map(g=>{const f=new O;f.read(g,c);return f});return new w({items:b})}readLegacyfeatureCollectionJSON(b,a){return v(a)?x.clone(a.featureCollection):null}get fullExtent(){const b=this.spatialReference,a=l.empty();null!=this.sublayers?this.sublayers.forEach(({fullBounds:c})=>null!=c?l.expand(a,
c,a):a,a):this.featureCollectionJSON?.layers.some(c=>c.layerDefinition.extent)&&this.featureCollectionJSON.layers.forEach(c=>{c=r.projectOrLoad(c.layerDefinition.extent,b).geometry;null!=c&&l.expand(a,c,a)});return l.equals(a,l.negativeInfinity)?r.projectOrLoad(F(),b).geometry:l.toExtent(a,b)}readMinScale(b,a){for(const c of a.layers)if(null!=c.layerDefinition.minScale)return c.layerDefinition.minScale;return 0}readMaxScale(b,a){for(const c of a.layers)if(null!=c.layerDefinition.maxScale)return c.layerDefinition.maxScale;
return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(b,a){return a.layers.length?u.fromJSON(a.layers[0].layerDefinition.spatialReference):u.WGS84}readSublayers(b,a,c){if(v(a))return null;b=[];c=a.layers.reduce((g,f)=>Math.max(g,f.layerDefinition.id??-1),-1)+1;for(const g of a.layers){const {layerDefinition:f,
featureSet:k}=g;a=f.id??c++;const p=E(g);null!=p&&(a=new n({id:p.id,title:f.name,layerId:a,layer:this,graphics:k.features.map(({geometry:q,symbol:m,attributes:z,popupInfo:ba})=>H.fromJSON({attributes:z,geometry:q,symbol:m,popupTemplate:ba}))}),b.push(a))}return new w(b)}writeSublayers(b,a,c,g){const {minScale:f,maxScale:k}=this;if(null!=b)if(c=b.some(m=>0<m.graphics.length),this.capabilities.operations.supportsMapNotesEditing){c=[];var p=this.spatialReference.toJSON();a:for(var q of b)for(const m of q.graphics)if(null!=
m.geometry){p=m.geometry.spatialReference.toJSON();break a}for(const m of y)q=b.find(z=>m.id===z.id),this._writeMapNoteSublayer(c,q,m,f,k,p,g);K.setDeepValue("featureCollection.layers",c,a)}else c&&g?.messages?.push(new I("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer"))}get textLayer(){return this._findSublayer("textLayer")}load(b){this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},b));return Promise.resolve(this)}read(b,a){"featureCollection"in
b&&(b=x.clone(b),Object.assign(b,b.featureCollection));super.read(b,a)}async beforeSave(){if(null!=this.sublayers){var b=null,a=[];for(const g of this.sublayers)for(const f of g.graphics)if(null!=f.geometry){const k=f.geometry;b?N.equals(k.spatialReference,b)||(r.canProjectWithoutEngine(k.spatialReference,b)||r.isLoaded()||await r.load(),f.geometry=r.project(k,b)):b=k.spatialReference;a.push(f)}var c=await M.normalizeCentralMeridian(a.map(g=>g.geometry));a.forEach((g,f)=>g.geometry=c[f])}}_findSublayer(b){return null==
this.sublayers?null:this.sublayers?.find(a=>a.id===b)??null}_writeMapNoteSublayer(b,a,c,g,f,k,p){const q=[];if(null!=a){for(const m of a.graphics)this._writeMapNote(q,m,c.geometryType,p);this._normalizeObjectIds(q,G);b.push({layerDefinition:{name:a.title,drawingInfo:{renderer:{type:"simple",symbol:x.clone(c.identifyingSymbol)}},id:a.layerId,geometryType:c.geometryTypeJSON,minScale:g,maxScale:f,objectIdField:"OBJECTID",fields:[G.toJSON(),aa.toJSON()],spatialReference:k},featureSet:{features:q,geometryType:c.geometryTypeJSON}})}}_writeMapNote(b,
a,c,g){if(null!=a){var {geometry:f,symbol:k,popupTemplate:p}=a;null!=f&&(f.type!==c?g?.messages?.push(new A("map-notes-layer:invalid-geometry-type",`Geometry "${f.type}" cannot be saved in "${c}" layer`,{graphic:a})):null==k?g?.messages?.push(new A("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:a})):(a={attributes:{...a.attributes},geometry:f.toJSON(),symbol:k.toJSON()},null!=p&&(a.popupInfo=p.toJSON()),b.push(a)))}}_normalizeObjectIds(b,a){a=a.name;let c=R.findLastObjectIdFromFeatures(a,
b)+1;const g=new Set;for(const f of b){f.attributes||(f.attributes={});({attributes:b}=f);if(null==b[a]||g.has(b[a]))b[a]=c++;g.add(b[a])}}};d.__decorate([h.property({readOnly:!0})],e.prototype,"capabilities",void 0);d.__decorate([t.reader(["portal-item","web-map"],"capabilities",["layers"])],e.prototype,"readCapabilities",null);d.__decorate([h.property({readOnly:!0})],e.prototype,"featureCollections",void 0);d.__decorate([t.reader(["web-map","portal-item"],"featureCollections",["layers"])],e.prototype,
"readFeatureCollections",null);d.__decorate([h.property({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],e.prototype,"featureCollectionJSON",void 0);d.__decorate([t.reader(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],e.prototype,"readLegacyfeatureCollectionJSON",null);d.__decorate([h.property({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],e.prototype,"featureCollectionType",void 0);d.__decorate([h.property({readOnly:!0})],
e.prototype,"fullExtent",null);d.__decorate([h.property({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],e.prototype,"legendEnabled",void 0);d.__decorate([h.property({type:["show","hide","hide-children"]})],e.prototype,"listMode",void 0);d.__decorate([h.property({type:Number,nonNullable:!0,json:{write:!1}})],e.prototype,"minScale",void 0);d.__decorate([t.reader(["web-map","portal-item"],"minScale",
["layers"])],e.prototype,"readMinScale",null);d.__decorate([h.property({type:Number,nonNullable:!0,json:{write:!1}})],e.prototype,"maxScale",void 0);d.__decorate([t.reader(["web-map","portal-item"],"maxScale",["layers"])],e.prototype,"readMaxScale",null);d.__decorate([h.property({readOnly:!0})],e.prototype,"multipointLayer",null);d.__decorate([h.property({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],e.prototype,"operationalLayerType",void 0);d.__decorate([h.property({readOnly:!0})],e.prototype,
"pointLayer",null);d.__decorate([h.property({readOnly:!0})],e.prototype,"polygonLayer",null);d.__decorate([h.property({readOnly:!0})],e.prototype,"polylineLayer",null);d.__decorate([h.property({type:u})],e.prototype,"spatialReference",void 0);d.__decorate([t.reader(["web-map","portal-item"],"spatialReference",["layers"])],e.prototype,"readSpatialReference",null);d.__decorate([h.property({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],e.prototype,"sublayers",void 0);d.__decorate([t.reader("web-map",
"sublayers",["layers"])],e.prototype,"readSublayers",null);d.__decorate([L.writer("web-map","sublayers")],e.prototype,"writeSublayers",null);d.__decorate([h.property({readOnly:!0})],e.prototype,"textLayer",null);d.__decorate([h.property()],e.prototype,"title",void 0);d.__decorate([h.property({readOnly:!0,json:{read:!1}})],e.prototype,"type",void 0);return e=d.__decorate([B.subclass("esri.layers.MapNotesLayer")],e)});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/CollectionFlattener ../core/loadAll ../core/Logger ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/utils ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/PropertyOrigin ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./support/lazyLayerLoader ../portal/PortalItem ../support/collectionUtils ../support/LayersMixin ../support/TablesMixin ../support/tagSymbols ../webdoc/interfaces ../webdoc/support/saveUtils ../webdoc/support/writeUtils".split(" "),
function(q,d,r,t,u,c,n,k,g,O,P,v,w,x,p,y,z,A,B,C,D,E,F,G,H,I,J,m,K,L){c=class extends A.BlendLayer(D.ScaleRangeLayer(B.OperationalLayer(C.PortalLayer(I.TablesMixin(H.LayersMixin(c.MultiOriginJSONMixin(z))))))){constructor(a){super(a);this.allLayers=new r({getCollections:()=>[this.layers],getChildrenFunction:b=>"layers"in b?b.layers:null});this.allTables=G.createFlattenedTablesCollection(this);this.fullExtent=void 0;this.operationalLayerType="GroupLayer";this.spatialReference=void 0;this.type="group";
this._debouncedSaveOperations=n.debounce(async(b,e,f)=>{const {save:h,saveAs:l}=await new Promise((M,N)=>q(["./save/groupLayerUtils"],M,N));switch(b){case m.SaveOperationType.SAVE:return h(this,e);case m.SaveOperationType.SAVE_AS:return l(this,f,e)}})}initialize(){this._enforceVisibility(this.visibilityMode,this.visible);this.addHandles([k.watch(()=>{let a=this.parent;for(;a&&"parent"in a&&a.parent;)a=a.parent;return a&&J.WebSceneTag in a},a=>{this.removeHandles("prevent-adding-tables");a&&(this.tables.removeAll(),
this.addHandles(k.on(()=>this.tables,"before-add",b=>{b.preventDefault();u.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")}),"prevent-adding-tables"))},k.syncAndInitial),k.watch(()=>this.visible,this._onVisibilityChange.bind(this),k.sync)])}destroy(){this.allLayers.destroy();this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===
y.OriginId.USER}_writeLayers(a,b,e,f){const h=[];if(!a)return h;a.forEach(l=>{l=L.getLayerJSON(l,f.webmap?f.webmap.getLayerJSONFromResourceInfo(l):null,f);l?.layerType&&h.push(l)});b.layers=h}set portalItem(a){this._set("portalItem",a)}readPortalItem(a,b,e){const {itemId:f,layerType:h}=b;if("GroupLayer"===h&&f)return new F({id:f,portal:e?.portal})}writePortalItem(a,b){a?.id&&(b.itemId=a.id)}set visibilityMode(a){const b=this._get("visibilityMode")!==a;this._set("visibilityMode",a);b&&this._enforceVisibility(a,
this.visible)}async beforeSave(){return K.beforeSave(this)}load(a){a=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:E.layerLookupMap},a).catch(b=>{n.throwIfAbortError(b);if(this.sourceIsPortalItem)throw b;});this.addResolvingPromise(a);return Promise.resolve(this)}async loadAll(){return t.loadAll(this,a=>{a(this.layers,this.tables)})}async save(a){return this._debouncedSaveOperations(m.SaveOperationType.SAVE,a)}async saveAs(a,
b){return this._debouncedSaveOperations(m.SaveOperationType.SAVE_AS,b,a)}layerAdded(a){a.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(a):"inherited"===this.visibilityMode&&(a.visible=this.visible);this.hasHandles(a.uid)?console.error(`Layer read to Grouplayer: uid=${a.uid}`):this.addHandles(k.watch(()=>a.visible,b=>this._onChildVisibilityChange(a,b),k.sync),a.uid)}layerRemoved(a){this.removeHandles(a.uid);this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(a){this.layers.forEach(b=>
{b!==a&&(b.visible=!1)})}_enforceVisibility(a,b){if(v.getProperties(this).initialized){var e=this.layers,f=e.find(h=>h.visible);switch(a){case "exclusive":e.length&&!f&&(f=e.at(0),f.visible=!0);this._turnOffOtherLayers(f);break;case "inherited":e.forEach(h=>{h.visible=b})}}}_onVisibilityChange(a){"inherited"===this.visibilityMode&&this.layers.forEach(b=>{b.visible=a})}_onChildVisibilityChange(a,b){switch(this.visibilityMode){case "exclusive":b?this._turnOffOtherLayers(a):this._isAnyLayerVisible()||
(a.visible=!0);break;case "inherited":a.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(a=>a.visible)}};d.__decorate([g.property({readOnly:!0,dependsOn:[]})],c.prototype,"allLayers",void 0);d.__decorate([g.property({readOnly:!0})],c.prototype,"allTables",void 0);d.__decorate([g.property({json:{read:!0,write:!0}})],c.prototype,"blendMode",void 0);d.__decorate([g.property()],c.prototype,"fullExtent",void 0);d.__decorate([g.property({readOnly:!0})],c.prototype,"sourceIsPortalItem",
null);d.__decorate([g.property({json:{read:!1,write:{ignoreOrigin:!0}}})],c.prototype,"layers",void 0);d.__decorate([p.writer("layers")],c.prototype,"_writeLayers",null);d.__decorate([g.property({type:["GroupLayer"]})],c.prototype,"operationalLayerType",void 0);d.__decorate([g.property({json:{origins:{"web-map":{read:!1,write:{overridePolicy(a,b,e){return{enabled:"Group Layer"===a?.type&&e?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],c.prototype,"portalItem",null);d.__decorate([w.reader("web-map",
"portalItem",["itemId"])],c.prototype,"readPortalItem",null);d.__decorate([p.writer("web-map","portalItem",{itemId:{type:String}})],c.prototype,"writePortalItem",null);d.__decorate([g.property()],c.prototype,"spatialReference",void 0);d.__decorate([g.property({json:{read:!1},readOnly:!0,value:"group"})],c.prototype,"type",void 0);d.__decorate([g.property({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(a,b,
e)=>{"inherited"!==a&&(b[e]=a)}}}}})],c.prototype,"visibilityMode",null);return c=d.__decorate([x.subclass("esri.layers.GroupLayer")],c)});
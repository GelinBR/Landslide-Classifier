// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../geometry ../core/Collection ../core/Error ../core/Logger ../core/MapUtils ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/has ../core/RandomLCG ../core/accessorSupport/decorators/subclass ../core/accessorSupport/PropertyOrigin ./Layer ./graphics/featureConversionUtils ./graphics/OptimizedGeometry ./knowledgeGraph/IdealEdgeLengthTypeOptions ./knowledgeGraph/KnowledgeGraphLayerDataManager ./knowledgeGraph/KnowledgeGraphSublayer ./knowledgeGraph/layerUtils ./knowledgeGraph/SessionMemoryStorage ./knowledgeGraph/supportUtils ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/ScaleRangeLayer ../libs/linkchartlayout/LinkChartLayout ../rest/knowledgeGraphService ../geometry/Extent ../geometry/Point ../geometry/Polyline".split(" "),
function(z,x,T,U,I,ba,pa,qa,ca,F,Ba,Ca,ra,da,sa,R,ta,ea,ua,S,l,va,wa,xa,ya,za,w,Aa,fa,W,ha){x=class extends ya.OperationalLayer(xa.BlendLayer(za.ScaleRangeLayer(pa.MultiOriginJSONMixin(sa)))){constructor(a){super(a);this.dataPreloadedInLocalCache=!1;this.defaultLinkChartConfig=null;this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"};this._graphTypeLookup=new Map;this.knowledgeGraph=this.dataManager=null;this.layers=new (T.ofType(S));this.entityLinkChartDiagramLookup=new Map;this.relationshipLinkChartDiagramLookup=
new Map;this.linkChartExtent=new fa({xmin:-1E-7,ymin:-1E-7,xmax:1E-7,ymax:1E-7});this.memberRelationshipTypes=this.memberEntityTypes=null;this.operationalLayerType="LinkChartLayer";this.sublayerIdsCache=new Map;this.tables=new (T.ofType(S));this.type="link-chart";this.chronologicalAuxiliaryGraphics=null;this._originalInclusionList=a?.inclusionModeDefinition;if(a?.dataPreloadedInLocalCache&&!a?.inclusionModeDefinition)throw new U("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");
this.addHandles(ca.watch(()=>this.layers.concat(this.tables),(c,d)=>this._handleSublayersChange(c,d),ca.sync))}normalizeCtorArgs(a){if(!a)return{};const {url:c,title:d,dataPreloadedInLocalCache:b,defaultLinkChartConfig:e}=a;return{url:c,title:d,dataPreloadedInLocalCache:b,defaultLinkChartConfig:e}}_initializeLayerProperties(a){if(!this.title&&this.url){var c=this.url.split("/");this.title=c[c.length-2]}const d=new Set;let b=[],e=[];if(a.inclusionModeDefinition&&(!a.inclusionModeDefinition.namedTypeDefinitions||
1>a.inclusionModeDefinition.namedTypeDefinitions.size))throw new U("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");a.knowledgeGraph.dataModel.entityTypes?.forEach(f=>{f.name&&this._graphTypeLookup.set(f.name,f)});a.knowledgeGraph.dataModel.relationshipTypes?.forEach(f=>{f.name&&this._graphTypeLookup.set(f.name,f)});a.inclusionModeDefinition?.generateAllSublayers?(b=a.knowledgeGraph.dataModel.entityTypes??
[],e=a.knowledgeGraph.dataModel.relationshipTypes??[]):a.inclusionModeDefinition?.namedTypeDefinitions&&0<a.inclusionModeDefinition?.namedTypeDefinitions.size?a.inclusionModeDefinition?.namedTypeDefinitions.forEach((f,q)=>{(f=this._graphTypeLookup.get(q))?"relationship"===f.type?d.has(q)||(d.add(q),e.push(f)):"entity"===f.type?d.has(q)||(d.add(q),b.push(f)):(I.getLogger(this).warn(`A named type, ${q}, was in the inclusion list that wasn't properly modeled and will be removed`),a.inclusionModeDefinition?.namedTypeDefinitions.delete(q)):
(I.getLogger(this).warn(`A named type, ${q}, was in the inclusion list that wasn't in the data model and will be removed`),a.inclusionModeDefinition?.namedTypeDefinitions.delete(q))}):(b=a.knowledgeGraph.dataModel.entityTypes??[],e=a.knowledgeGraph.dataModel.relationshipTypes??[]);c=new ua.KnowledgeGraphLayerDataManager({knowledgeGraph:a.knowledgeGraph,inclusionModeDefinition:a.inclusionModeDefinition});this.knowledgeGraph=a.knowledgeGraph;this.memberEntityTypes=b;this.memberRelationshipTypes=e;this.dataManager=
c}load(a){const c=async()=>{const d=[],b=[];this.loadLayerAssumingLocalCache();await l.initializeLayersFromClientData(this);this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1);this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach(e=>{e.useAllData=!1});await this._initializeDiagram();this.layers.forEach(e=>{b.push(e.refreshCachedQueryEngine());d.push(new Promise(f=>{e.on("layerview-create",()=>{f(null)})}))});this.tables.forEach(e=>
{b.push(e.refreshCachedQueryEngine())});await Promise.all(b)};this.addResolvingPromise(new Promise(d=>{Aa.fetchKnowledgeGraph(this.url).then(async b=>{this._initializeLayerProperties({knowledgeGraph:b,inclusionModeDefinition:this._originalInclusionList});this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},this.dataManager.knowledgeGraph.dataModel.entityTypes?.forEach(e=>{e.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e.name,
{useAllData:!0})}),this.dataManager.knowledgeGraph.dataModel.relationshipTypes?.forEach(e=>{e.name&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.set(e.name,{useAllData:!0})}));if(this.dataPreloadedInLocalCache){b=va.getInstance();for(const [e,f]of this.dataManager.inclusionModeDefinition?.namedTypeDefinitions??[])for(const q of f.members?.values()??[]){const J=b.readFromStoreById(`${e}__${q.id}`);J&&ba.getOrCreateMapValue(this.dataManager.sublayerCaches,e,()=>new Map).set(q.id,J)}await c()}else this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,
!1,"GEOGRAPHIC"===this.defaultLinkChartConfig?.layoutMode,!0).then(async()=>{qa.throwIfAborted(a);await c()}));d(null)})}));return Promise.resolve(this)}set inclusionModeDefinition(a){"loaded"===this.loadStatus||"failed"===this.loadStatus?I.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded."):this._set("inclusionModeDefinition",a)}async addRecords(a,c){let d=[];c?.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&
(d=await wa.getRelationshipEndNodeIds(a,this.dataManager.knowledgeGraph));a=a.concat(d).filter(b=>!this.sublayerIdsCache.get(b.typeName)?.has(b.id));await this._handleNewRecords(a)}async removeRecords(a,{cascadeRemoveRelationships:c=!0,recalculateLayout:d=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1}){let b=[];for(const f of a)!1===this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(f.typeName)?.useAllData&&this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.get(f.typeName)?.members?.has(f.id)&&
b.push(f);if(c){a=new Set;c=[];for(const f of b)if(this.dataManager.nodeConnectionsLookup.has(f.id))for(const q of this.dataManager.nodeConnectionsLookup.get(f.id))a.add(q);for(const f of a)if(this.dataManager.memberIdTypeLookup.has(f))for(const q of this.dataManager.memberIdTypeLookup.get(f))this.dataManager.relationshipTypeNames.has(q)&&c.push({id:f,typeName:q});b=b.concat(c)}this.dataManager.removeFromLayer(b);for(const f of b)this.sublayerIdsCache.get(f.typeName)?.delete(f.id),this.dataManager.relationshipTypeNames.has(f.typeName)?
this.relationshipLinkChartDiagramLookup.delete(f.id):this.entityLinkChartDiagramLookup.delete(f.id);d&&await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const e=[];this.layers.forEach(f=>{e.push(f.refreshCachedQueryEngine())});await Promise.all(e);this._refreshNamedTypes();return b}async expand(a,c){a=await this.dataManager.getConnectedRecordIds(a,c);c=a.filter(d=>!this.sublayerIdsCache.get(d.typeName)?.has(d.id));await this._handleNewRecords(a);
return{records:c}}loadLayerAssumingLocalCache(){const a=[...this.memberRelationshipTypes,...this.memberEntityTypes];this.originIdOf("layers")===da.OriginId.DEFAULTS?this._createSublayers(a,this.layers,c=>!!c.geometryType):this._updateSublayers(a,this.layers);this.originIdOf("tables")===da.OriginId.DEFAULTS?this._createSublayers(a,this.tables,c=>!c.geometryType):this._updateSublayers(a,this.tables);this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((c,d)=>{const b=ba.getOrCreateMapValue(this.sublayerIdsCache,
d,()=>new Set);c.members?.forEach(({id:e,linkChartLocation:f})=>{b.add(e);f&&(f=f instanceof ta?f:R.convertFromGeometry(f),this.dataManager.relationshipTypeNames.has(d)?this.relationshipLinkChartDiagramLookup.set(e,f):this.entityLinkChartDiagramLookup.set(e,f))})})}async calculateLinkChartLayout(a="RADIAL_TREE",c){const d=[],b=[],e=[];this.dataManager.sublayerCaches.forEach((g,p)=>{this.dataManager.entityTypeNames.has(p)?g.forEach(h=>{d.push({typeName:p,feature:h})}):this.dataManager.relationshipTypeNames.has(p)&&
g.forEach(h=>{b.push({typeName:p,feature:h})})});this.entityLinkChartDiagramLookup=new Map;this.relationshipLinkChartDiagramLookup=new Map;const f=new Map,q=new Map,J=new Map,K=new Map,r=new Uint8Array(d.length),A=new Float64Array(d.length),B=new Float64Array(d.length),ia=new Float64Array(d.length),ja=new Float64Array(d.length),X=new Uint32Array(b.length),Y=new Uint32Array(b.length),ka=new Float64Array(b.length),la=new Float64Array(b.length),t=[];var C=new fa({xmin:-1E-7,ymin:-1E-7,xmax:1E-7,ymax:1E-7});
let m=0,G=0;var V=w.LCChronologicalLayout.apply;switch("GEOGRAPHIC"===a?"FORCE_DIRECTED":a){case "FORCE_DIRECTED":var D=w.LCForceDirectedLayout.apply;break;case "COMMUNITY":D=w.LCCommunityLayout.apply;break;case "HIERARCHICAL":D=w.LCHierarchicalLayout.apply;break;case "RADIAL_TREE":D=w.LCRadialTreeLayout.apply;break;case "SMART_TREE":D=w.LCSmartTreeLayout.apply;break;default:D=w.LCSimpleLayout.apply}let Z=!1;d.forEach(({typeName:g,feature:p})=>{if("CHRONOLOGICAL_SINGLE"!==a&&"CHRONOLOGICAL_MULTIPLE"!==
a&&c?.lockedNodeLocations?.has(p.attributes[l.systemOidFieldName])){"GEOGRAPHIC"===a&&this.dataManager.geographicLookup.has(g)?r[m]=w.NodeFlag.IsGeographic:r[m]=w.NodeFlag.None;var h=c.lockedNodeLocations.get(p.attributes[l.systemOidFieldName]);A[m]=h.x;B[m]=h.y}else if("GEOGRAPHIC"===a&&this.dataManager.geographicLookup.has(g)){r[m]=w.NodeFlag.IsGeographic;h=null;h=p.attributes[this.dataManager.geographicLookup.get(g).name];switch(this.dataManager.geographicLookup.get(g)?.geometryType){case "esriGeometryPoint":A[m]=
h?.x;B[m]=h?.y;break;case "esriGeometryPolygon":h=h?.centroid;null!=h?.x&&null!=h?.y?(A[m]=h.x,B[m]=h.y):r[m]=w.NodeFlag.IsMovable;break;case "esriGeometryPolyline":h=h?.extent?.center;null!=h?.x&&null!=h?.y?(A[m]=h.x,B[m]=h.y):r[m]=w.NodeFlag.IsMovable;break;case "esriGeometryMultipoint":h=h?.extent?.center;null!=h?.x&&null!=h?.y?(A[m]=h.x,B[m]=h.y):r[m]=w.NodeFlag.IsMovable;break;default:r[m]=w.NodeFlag.IsMovable}if(null==A[m]||null==B[m]||Number.isNaN(A[m])||Number.isNaN(B[m]))r[m]=w.NodeFlag.IsMovable,
A[m]=0,B[m]=0}else if("CHRONOLOGICAL_SINGLE"===a||"CHRONOLOGICAL_MULTIPLE"===a){!Z&&c?.lockedNodeLocations?.has(p.attributes[l.systemOidFieldName])&&(Z=!0);h=c?.timeInfoByTypeName?.get(g);var L=h?.startField;L=L&&h?.startField?p.attributes[L]:null;ia[m]=L?(new Date(L)).getTime():NaN;h=(L=h?.endField)&&h?.endField?p.attributes[L]:null;ja[m]=h?(new Date(h)).getTime():NaN;A[m]=0;B[m]=0;r[m]=w.NodeFlag.IsMovable}else r[m]=w.NodeFlag.IsMovable,A[m]=0,B[m]=0;K.set(p.attributes[l.systemOidFieldName],m);
t[m]={feature:p,typeName:g};m++});Z&&I.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");let ma=!1;const aa=new Map;b.forEach(g=>{var p=g.feature.attributes[l.systemOriginIdFieldName],h=g.feature.attributes[l.systemDestinationIdFieldName];const L=K.get(p),na=K.get(h);var M=c?.timeInfoByTypeName?.get(g.typeName),Q=c?.timeInfoByTypeName?M?.startField:null;Q=Q?g.feature.attributes[Q]:null;M=(M=M?.endField)?g.feature.attributes[M]:
null;if(void 0!==L&&void 0!==na){p=p+"-"+h;if("CHRONOLOGICAL_SINGLE"===a||"CHRONOLOGICAL_MULTIPLE"===a)p=p+"-"+Q+"-"+M;h=aa.get(p);if(!h?.has(g.typeName)){X[G]=L;Y[G]=na;if("CHRONOLOGICAL_SINGLE"===a||"CHRONOLOGICAL_MULTIPLE"===a)ka[G]=Q?(new Date(Q)).getTime():NaN,la[G]=M?(new Date(M)).getTime():NaN;void 0===h?aa.set(p,new Map([[g.typeName,G]])):h.set(g.typeName,G);G++}e.push(g)}else ma=!0,this.relationshipLinkChartDiagramLookup.set(p,null)});ma&&I.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");
const oa=this._validateLayoutSettings(a,c);var O=this._convertLayoutSettingsToCalculationSettings(oa);await w.load();var k=!1;let H=null;"CHRONOLOGICAL_SINGLE"===a||"CHRONOLOGICAL_MULTIPLE"===a?({success:k,links:H,graphics:D}=V(r,A,B,ia,ja,X.subarray(0,G),Y.subarray(0,G),ka.subarray(0,G),la.subarray(0,G),"CHRONOLOGICAL_MULTIPLE"===a,c?.chronologicalLayoutSettings??{}),k&&(this.chronologicalAuxiliaryGraphics=D)):{success:k,links:H}=D(r,A,B,X.subarray(0,G),Y.subarray(0,G),O.computationBudgetTime,O.idealEdgeLengthMultiplier,
O.repulsionRadiusMultiplier);if(!k)throw new U("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(k=0;k<t.length;k++)84.9999<B[k]?B[k]=84.9999:-84.9999>B[k]&&(B[k]=-84.9999),179.9999<A[k]?A[k]=179.9999:-179.9999>A[k]&&(A[k]=-179.9999),t[k].feature.attributes[l.systemLayoutGeometryFieldName]=new W(A[k],B[k]),f.has(t[k].typeName)?f.get(t[k].typeName)?.set(t[k].feature.attributes[l.systemOidFieldName],t[k].feature):(D=new Map,D.set(t[k].feature.attributes[l.systemOidFieldName],
t[k].feature),f.set(t[k].typeName,D)),J.set(t[k].feature.attributes[l.systemOidFieldName],t[k].feature),D=R.convertFromGeometry(t[k].feature.attributes[l.systemLayoutGeometryFieldName]),this.entityLinkChartDiagramLookup.set(t[k].feature.attributes[l.systemOidFieldName],t[k].feature.attributes[l.systemLayoutGeometryFieldName]?D:null),t[k].feature.attributes[l.systemLayoutGeometryFieldName].x<C.xmin&&(C.xmin=t[k].feature.attributes[l.systemLayoutGeometryFieldName].x),t[k].feature.attributes[l.systemLayoutGeometryFieldName].x>
C.xmax&&(C.xmax=t[k].feature.attributes[l.systemLayoutGeometryFieldName].x),t[k].feature.attributes[l.systemLayoutGeometryFieldName].y<C.ymin&&(C.ymin=t[k].feature.attributes[l.systemLayoutGeometryFieldName].y),t[k].feature.attributes[l.systemLayoutGeometryFieldName].y>C.ymax&&(C.ymax=t[k].feature.attributes[l.systemLayoutGeometryFieldName].y);this.linkChartExtent.xmin=C.xmin;this.linkChartExtent.xmax=C.xmax;this.linkChartExtent.ymin=C.ymin;this.linkChartExtent.ymax=C.ymax;if(!H)throw new U("knowledge-graph:layout-failed",
"Attempting to retrieve link geometry from diagram engine failed");C=new Map;k=new Map;D=new Map;V=new Set;for(O=0;O<e.length;O++){var n=[];const g=e[O];var P=g.feature.attributes[l.systemOriginIdFieldName],u=g.feature.attributes[l.systemDestinationIdFieldName],v=P+"-"+u;if("CHRONOLOGICAL_SINGLE"===a||"CHRONOLOGICAL_MULTIPLE"===a){var y=c?.timeInfoByTypeName?.get(g.typeName),E=c?.timeInfoByTypeName?y?.startField:null;y=y?.endField;v+="-"+(E?g.feature.attributes[E]:null)+"-"+(y?g.feature.attributes[y]:
null)}E=aa.get(v).get(g.typeName);y=0===E?0:H?.vertexEndIndex[E-1];if(!V.has(E)){V.add(E);if(H.types[E]===w.LinkType.Recursive){E=[H.vertices[2*y],H.vertices[2*y+1]];y=[H.vertices[2*(y+1)],H.vertices[2*(y+1)+1]];var N=[.5*(E[0]+y[0]),.5*(E[1]+y[1])];const p=[N[0]-E[0],N[1]-E[1]],h=[N[0]+p[1],N[1]-p[0]];N=[N[0]-p[1],N[1]+p[0]];n.push(E);n.push(h);n.push(y);n.push(N);n.push(E)}else if(H.types[E]===w.LinkType.Regular)for(;y<H.vertexEndIndex[E];y++)n.push([H.vertices[2*y],H.vertices[2*y+1]]);else{I.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");
continue}if("CHRONOLOGICAL_SINGLE"!==a&&"CHRONOLOGICAL_MULTIPLE"!==a){P=t[K.get(P)]?.feature.attributes[l.systemLayoutGeometryFieldName];u=t[K.get(u)]?.feature.attributes[l.systemLayoutGeometryFieldName];if(n[0][0]!==P.x||n[0][1]!==P.y)n[0]=[P.x,P.y];if(n[n.length-1][0]!==u.x||n[n.length-1][1]!==u.y)n[n.length-1]=[u.x,u.y]}for(u=1;u<n.length-1;u++)85.5<n[u][1]?n[u][1]=85.5:-85.5>n[u][1]&&(n[u][1]=-85.5),179.9999<n[u][0]?n[u][0]=179.9999:-179.9999>n[u][0]&&(n[u][0]=-179.9999);C.has(v)?C.get(v).push(n):
C.set(v,[n])}n=C.get(v);k.has(v)||(k.set(v,new Map),D.set(v,new Map));u=k.get(v);v=D.get(v);u.has(g.typeName)||(u.set(g.typeName,n.shift()),v.set(g.typeName,0));n=u.get(g.typeName);v.set(g.typeName,v.get(g.typeName)+1);v=new ha({paths:[n]});g.feature.attributes[l.systemLayoutGeometryFieldName]=v;q.has(g.typeName)?q.get(g.typeName)?.set(g.feature.attributes[l.systemOidFieldName],g.feature):(v=new Map,v.set(g.feature.attributes[l.systemOidFieldName],g.feature),q.set(g.typeName,v));J.set(g.feature.attributes[l.systemOidFieldName],
g.feature);v=R.convertFromGeometry(g.feature.attributes[l.systemLayoutGeometryFieldName]);this.relationshipLinkChartDiagramLookup.set(g.feature.attributes[l.systemOidFieldName],g.feature.attributes[l.systemLayoutGeometryFieldName]?v:null)}for(const g of e)g.feature.attributes[l.systemAggregationCountFieldName]=D.get(g.feature.attributes[l.systemOriginIdFieldName]+"-"+g.feature.attributes[l.systemDestinationIdFieldName])?.get(g.typeName)??null;this._currentLinkChartConfig={layoutMode:a,layoutOptions:oa};
return{nodes:f,links:q,idMap:J}}async applyNewLinkChartLayout(a="RADIAL_TREE",c){const d=[];await this._calculateLayoutWithSublayerTimeInfo(a,c);this.layers.forEach(b=>{d.push(b.refreshCachedQueryEngine())});await Promise.all(d);this._refreshNamedTypes()}getCurrentNodeLocations(){const a=new Map;this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach(c=>{c?.members?.forEach(d=>{var b=d.linkChartLocation;const e=d.id;b&&("x"in b?(d=b.x,b=b.y):(d=b.coords[0],b=b.coords[1]),a.set(e,new W({x:d,
y:b})))})});return a}async synchronizeInclusionListWithCache(){return new Promise(a=>{this.dataManager.inclusionModeDefinition?.namedTypeDefinitions.forEach((c,d)=>{c.useAllData=!1;if(c.members&&0<c.members.size&&this.dataManager.sublayerCaches.get(d)){var b=new Set(Array.from(this.dataManager.sublayerCaches.get(d).keys()));Array.from(c.members.keys()).filter(e=>!b.has(e)).forEach(e=>{c.members?.delete(e)})}});a()})}async refreshLinkChartCache(a){await this.dataManager.refreshCacheContent(a);const c=
[];this.layers.forEach(d=>{c.push(d.refreshCachedQueryEngine())});await Promise.all(c);this._refreshNamedTypes()}async connectBetweenEntities(a){let c=[];for(const d of this.dataManager.relationshipTypeNames){const b=this.sublayerIdsCache.get(d);b&&(c=c.concat(Array.from(b.keys())))}a=await this.dataManager.getRelationshipsBetweenNodes(a,c);await this._handleNewRecords(a);return{records:a}}async connectFromEntities(a){let c=[];for(var d of this.dataManager.relationshipTypeNames){var b=this.sublayerIdsCache.get(d);
b&&(c=c.concat(Array.from(b.keys())))}d=[];for(const e of this.dataManager.entityTypeNames)(b=this.sublayerIdsCache.get(e))&&(d=d.concat(Array.from(b)));a=await this.dataManager.getRelationshipsFromNodes(a,d,c);await this._handleNewRecords(a);return{records:a}}getCurrentLayout(){return this._currentLinkChartConfig.layoutMode}async _calculateLayoutWithSublayerTimeInfo(a="RADIAL_TREE",c){const d=new Map;this.layers.forEach(b=>{d.set(b.objectType.name,b.timeInfo)});await this.calculateLinkChartLayout(a,
{timeInfoByTypeName:d,...c})}async _handleNewRecords(a){const c=[];this.dataManager.addToLayer(a);for(var d of a)this.sublayerIdsCache.has(d.typeName)||(this.sublayerIdsCache.set(d.typeName,new Set),c.push(d.typeName)),this.sublayerIdsCache.get(d.typeName).add(d.id);for(const b of c)if(d=this._graphTypeLookup.get(b)){const e=this._createSublayer(d);"entity"===d.type?this.dataManager.entityTypeNames.add(b):this.dataManager.relationshipTypeNames.add(b);e.geometryType?this.layers.push(e):this.tables.push(e);
this.dataManager.sublayerCaches.set(b,new Map)}await l.initializeLayersFromClientData(this,c);await this.dataManager.refreshCacheContent(a.map(b=>b.id));a=Object.assign({},this._currentLinkChartConfig.layoutOptions);a.lockedNodeLocations=new Map;for(const [b,e]of this.entityLinkChartDiagramLookup.entries())e&&a.lockedNodeLocations.set(b,new W(e.coords[0],e.coords[1]));await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,a)}_createSublayers(a,c,d){a.forEach(b=>{const e=this._createSublayer(b);
d(e)&&c.push(e);this._updateSublayerCaches(b)})}_updateSublayers(a,c){c.forEach(d=>{d.parentCompositeLayer=this;const b=a.find(e=>e.type===d.graphType&&e.name===d.graphTypeName);b&&(d.objectType=b,d.read({title:b.name},{origin:"service"}),this._updateSublayerCaches(b))})}_updateSublayerCaches(a){const c=this.dataManager.sublayerCaches;c.has(a.name)||c.set(a.name,new Map)}async _initializeDiagram(){this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?(this.dataManager.inclusionModeDefinition?.namedTypeDefinitions?.forEach((a,
c)=>{a?.members?.forEach(d=>{var b=d.linkChartLocation;d=d.id;if(b){b="x"in b?{x:b.x,y:b.y}:{x:b.coords[0],y:b.coords[1]};var e=R.convertFromGeometry(b);this.dataManager.relationshipTypeNames.has(c)?this.relationshipLinkChartDiagramLookup.set(d,e):this.entityLinkChartDiagramLookup.set(d,e);this.linkChartExtent.xmin>b.x&&(this.linkChartExtent.xmin=b.x);this.linkChartExtent.xmax<b.x&&(this.linkChartExtent.xmax=b.x);this.linkChartExtent.ymin>b.y&&(this.linkChartExtent.ymin=b.y);this.linkChartExtent.ymax<
b.y&&(this.linkChartExtent.ymax=b.y)}})}),this.memberRelationshipTypes.forEach(a=>{a.name&&this.dataManager.sublayerCaches.get(a.name)?.forEach(c=>{var d=this.relationshipLinkChartDiagramLookup.get(c.attributes[l.systemOriginIdFieldName]);const b=this.relationshipLinkChartDiagramLookup.get(c.attributes[l.systemDestinationIdFieldName]);d&&b?(d=R.convertFromGeometry(new ha({paths:[[[d.coords[0],d.coords[1]],[b.coords[0],b.coords[1]]]]})),this.relationshipLinkChartDiagramLookup.set(c.attributes[l.systemOidFieldName],
d)):this.relationshipLinkChartDiagramLookup.set(c.attributes[l.systemOidFieldName],null)})})):await this._calculateLayoutWithSublayerTimeInfo(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...(this.defaultLinkChartConfig.layoutOptions||{})}):await this._calculateLayoutWithSublayerTimeInfo("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const a of this.layers)a.emit("refresh",{dataChanged:!0});for(const a of this.tables)a.emit("refresh",
{dataChanged:!0})}_validateLayoutSettings(a,c){const d=r=>Object.values(ea.IdealEdgeLengthTypeOptions).includes(r),b=r=>"number"===typeof r&&!isNaN(r)&&0<=r,e={organicLayoutSettings:{},chronologicalLayoutSettings:{}};if(!(new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC","CHRONOLOGICAL_MULTIPLE","CHRONOLOGICAL_SINGLE"])).has(a)||!c)return e;c.organicLayoutSettings??(c.organicLayoutSettings={});const {computationBudgetTime:f,repulsionRadiusMultiplier:q,idealEdgeLength:J,idealEdgeLengthType:K}=c.organicLayoutSettings;
(r=>"number"===typeof r&&!isNaN(r)&&1<=r)(f)?e.organicLayoutSettings.computationBudgetTime=f:void 0!==f&&I.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting");(r=>"number"===typeof r&&!isNaN(r)&&1<=r)(q)?e.organicLayoutSettings.repulsionRadiusMultiplier=q:void 0!==q&&I.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting");"GEOGRAPHIC"!==a||void 0===J&&void 0===K||(d(K)?e.organicLayoutSettings.idealEdgeLengthType=
K:void 0!==K&&I.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),b(J)?e.organicLayoutSettings.idealEdgeLength=J:void 0!==J&&I.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting"));"CHRONOLOGICAL_MULTIPLE"!==a&&"CHRONOLOGICAL_SINGLE"!==a||!c.chronologicalLayoutSettings||(a=c.chronologicalLayoutSettings,a.durationLineWidth&&0>a.durationLineWidth&&I.getLogger(this).warn("Invalid layout durationLineWidth setting, will revert to default setting"));
return e}_convertLayoutSettingsToCalculationSettings(a){a.organicLayoutSettings??(a.organicLayoutSettings={});let c=a.organicLayoutSettings.idealEdgeLength;a.organicLayoutSettings.idealEdgeLengthType===ea.IdealEdgeLengthTypeOptions.ABSOLUTE&&(c=void 0===c?-1:-1*c);return{computationBudgetTime:a.organicLayoutSettings.computationBudgetTime,repulsionRadiusMultiplier:a.organicLayoutSettings.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:c}}_createSublayer(a){return new S({objectType:a,parentCompositeLayer:this,
graphType:a.type})}_handleSublayersChange(a,c){c&&(c.forEach(d=>{d.parent=null}),this.removeHandles("sublayers-owner"));a&&(a.forEach(d=>{d.parent=this}),this.addHandles([a.on("after-add",({item:d})=>{d.parent=this}),a.on("after-remove",({item:d})=>{d.parent=null})],"sublayers-owner"))}};z.__decorate([F.property()],x.prototype,"dataPreloadedInLocalCache",void 0);z.__decorate([F.property()],x.prototype,"defaultLinkChartConfig",void 0);z.__decorate([F.property()],x.prototype,"dataManager",void 0);z.__decorate([F.property()],
x.prototype,"inclusionModeDefinition",null);z.__decorate([F.property()],x.prototype,"knowledgeGraph",void 0);z.__decorate([F.property({type:T.ofType(S),json:{write:{ignoreOrigin:!0}}})],x.prototype,"layers",void 0);z.__decorate([F.property()],x.prototype,"entityLinkChartDiagramLookup",void 0);z.__decorate([F.property()],x.prototype,"relationshipLinkChartDiagramLookup",void 0);z.__decorate([F.property()],x.prototype,"linkChartExtent",void 0);z.__decorate([F.property()],x.prototype,"memberEntityTypes",
void 0);z.__decorate([F.property()],x.prototype,"memberRelationshipTypes",void 0);z.__decorate([F.property({type:["LinkChartLayer"]})],x.prototype,"operationalLayerType",void 0);z.__decorate([F.property()],x.prototype,"sublayerIdsCache",void 0);z.__decorate([F.property({type:T.ofType(S),json:{write:{ignoreOrigin:!0}}})],x.prototype,"tables",void 0);z.__decorate([F.property({json:{read:!1}})],x.prototype,"type",void 0);z.__decorate([F.property({json:{read:!1}})],x.prototype,"chronologicalAuxiliaryGraphics",
void 0);return x=z.__decorate([ra.subclass("esri.layers.LinkChartLayer")],x)});
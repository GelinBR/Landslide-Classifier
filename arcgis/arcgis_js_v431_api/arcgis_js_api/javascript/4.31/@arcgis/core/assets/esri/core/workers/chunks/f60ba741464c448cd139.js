"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5414],{24877:(e,t,r)=>{r.d(t,{C:()=>u});var s=r(32816),i=r(17745),o=r(67321),n=r(29298),a=r(69421),l=r(41390);let p=class extends i.A{constructor(e){super(e),this.getCollections=null}initialize(){this.addHandles((0,l.a)((()=>this._refresh()),o.OH))}destroy(){this.getCollections=null}_refresh(){const e=null!=this.getCollections?this.getCollections():null;if(null==e)return void this.removeAll();let t=0;for(const r of e)null!=r&&(t=this._processCollection(t,r));this.splice(t,this.length)}_createNewInstance(e){return new i.A(e)}_processCollection(e,t){if(!t)return e;const r=this.itemFilterFunction??(e=>!!e);for(const s of t)if(s){if(r(s)){const t=this.indexOf(s,e);t>=0?t!==e&&this.reorder(s,e):this.add(s,e),++e}if(this.getChildrenFunction){const t=this.getChildrenFunction(s);if(Array.isArray(t))for(const r of t)e=this._processCollection(e,r);else e=this._processCollection(e,t)}}return e}};(0,s._)([(0,n.MZ)()],p.prototype,"getCollections",void 0),(0,s._)([(0,n.MZ)()],p.prototype,"getChildrenFunction",void 0),(0,s._)([(0,n.MZ)()],p.prototype,"itemFilterFunction",void 0),p=(0,s._)([(0,a.$)("esri.core.CollectionFlattener")],p);const u=p},71868:(e,t,r)=>{r.d(t,{a:()=>i});var s=r(64102);function i(e,t,r){if(!r?.features||!r.hasZ)return;const i=(0,s.g)(r.geometryType,t,e.outSpatialReference);if(null!=i)for(const e of r.features)i(e.geometry)}},61904:(e,t,r)=>{r.d(t,{b:()=>w,g:()=>y});var s=r(32773),i=r(1985);function o(e,t,r){return!!a(e,t,r)}function n(e,t,r){return a(e,t,r)}function a(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const l={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function p(e){const t=e?.supportedSpatialAggregationStatistics?.map((e=>e.toLowerCase()));return{envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function u(e,t){const r=e?.supportedOperationsWithCacheHint?.map((e=>e.toLowerCase()));return!!r?.includes(t.toLowerCase())}function d(e){const t=e?.supportedStatisticTypes?.map((e=>e.toLowerCase()));return{count:!!t?.includes("count"),sum:!!t?.includes("sum"),min:!!t?.includes("min"),max:!!t?.includes("max"),avg:!!t?.includes("avg"),var:!!t?.includes("var"),stddev:!!t?.includes("stddev"),percentileContinuous:!!t?.includes("percentile_continuous"),percentileDiscrete:!!t?.includes("percentile_discrete"),envelope:!!t?.includes("envelopeaggregate"),centroid:!!t?.includes("centroidaggregate"),convexHull:!!t?.includes("convexhullaggregate")}}function y(e,t){return{analytics:c(e),attachment:h(e),data:g(e),metadata:f(e),operations:v(e.capabilities,e,t),query:m(e,t),queryBins:S(e),queryRelated:b(e),queryTopFeatures:_(e),editing:M(e)}}function c(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryAnalytics")}}function h(e){const t=e.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:u(e.advancedQueryCapabilities,"queryAttachments"),supportsResize:o(e,"supportsAttachmentsResizing",!1)};return t&&Array.isArray(t)&&t.forEach((e=>{const t=l[e.name];t&&(r[t]=!!e.isEnabled)})),r}function g(e){return{isVersioned:o(e,"isDataVersioned",!1),isBranchVersioned:o(e,"isDataBranchVersioned",!1),supportsAttachment:o(e,"hasAttachments",!1),supportsM:o(e,"hasM",!1),supportsZ:o(e,"hasZ",!1)}}function f(e){return{supportsAdvancedFieldProperties:o(e,"supportsFieldDescriptionProperty",!1)}}function v(e,t,r){const s=e?e.toLowerCase().split(",").map((e=>e.trim())):[],n=r?(0,i.p)(r):null,a=s.includes(null!=n&&"MapServer"===n.serverType?"data":"query"),l=s.includes("editing")&&!t.datesInUnknownTimezone;let p=l&&s.includes("create"),u=l&&s.includes("delete"),d=l&&s.includes("update");const y=s.includes("changetracking"),c=t.advancedQueryCapabilities;return l&&!(p||u||d)&&(p=u=d=!0),{supportsCalculate:o(t,"supportsCalculate",!1),supportsTruncate:o(t,"supportsTruncate",!1),supportsValidateSql:o(t,"supportsValidateSql",!1),supportsAdd:p,supportsDelete:u,supportsEditing:l,supportsChangeTracking:y,supportsQuery:a,supportsQueryAnalytics:o(c,"supportsQueryAnalytic",!1),supportsQueryAttachments:o(c,"supportsQueryAttachments",!1),supportsQueryBins:o(c,"supportsQueryBins",!1),supportsQueryTopFeatures:o(c,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:o(t,"supportsAttachmentsResizing",!1),supportsSync:s.includes("sync"),supportsUpdate:d,supportsExceedsLimitStatistics:o(t,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:o(t,"supportsAsyncConvert3D",!1)}}function m(e,t){const r=e.advancedQueryCapabilities,a=e.ownershipBasedAccessControlForFeatures,l=e.archivingInfo,d=e.currentVersion,y=t?.includes("MapServer"),c=!y||d>=(0,s.h)("mapserver-pbf-version-support"),h=(0,i.i)(t),g=new Set((e.supportedQueryFormats??"").split(",").map((e=>e.toLowerCase().trim())));return{maxRecordCount:n(e,"maxRecordCount",void 0),maxRecordCountFactor:n(e,"maxRecordCountFactor",void 0),standardMaxRecordCount:n(e,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:p(r),supportsCacheHint:o(r,"supportsQueryWithCacheHint",!1)||u(r,"query"),supportsCentroid:o(r,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:h,supportsDefaultSpatialReference:o(r,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:o(r,"supportsDisjointSpatialRel",!1),supportsDistance:o(r,"supportsQueryWithDistance",!1),supportsDistinct:o(r,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:o(r,"supportsReturningQueryExtent",!1),supportsFormatPBF:c&&g.has("pbf"),supportsFullTextSearch:o(r,"supportsFullTextSearch",!1),supportsGeometryProperties:o(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:o(r,"supportsHavingClause",!1),supportsHistoricMoment:o(l,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:o(r,"supportsMaxRecordCountFactor",!1),supportsOrderBy:o(r,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:o(r,"supportsPagination",!1),supportsPercentileStatistics:o(r,"supportsPercentileStatistics",!1),supportsQuantization:o(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:o(e,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:o(a,"allowAnonymousToQuery",!0),supportsQueryByOthers:o(a,"allowOthersToQuery",!0),supportsQueryGeometry:o(e,"supportsReturningQueryGeometry",!1),supportsResultType:o(r,"supportsQueryWithResultType",!1),supportsSpatialAggregationStatistics:o(r,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:o(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:o(e,"useStandardizedQueries",!1),supportsStatistics:o(r,"supportsStatistics",e.supportsStatistics),supportsTopFeaturesQuery:o(r,"supportsTopFeaturesQuery",!1),tileMaxRecordCount:n(e,"tileMaxRecordCount",void 0)}}function b(e){const t=e.advancedQueryCapabilities,r=o(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:o(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:u(t,"queryRelated")}}function _(e){return{supportsCacheHint:u(e.advancedQueryCapabilities,"queryTopFilter")}}function S(e){const t=e?e.queryBinsCapabilities:void 0;return{supportsDate:o(t,"supportsDateBin",!1),supportsFixedInterval:o(t,"supportsFixedIntervalBin",!1),supportsAutoInterval:o(t,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:o(t,"supportsFixedBoundariesBin",!1),supportedStatistics:d(t)}}function M(e){const t=e.ownershipBasedAccessControlForFeatures,r=e?e.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:o(e,"allowGeometryUpdates",!0),supportsGlobalId:o(e,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:o(e,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:o(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:o(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:o(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:o(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:o(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:o(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:o(t,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:o(r,"supportsAsyncApplyEdits",!1),zDefault:n(e,"zDefault",void 0)}}function w(e){return{operations:{supportsAppend:o(e,"supportsAppend",!1),supportsCoverageQuery:e?.playbackInfo?.klv["0601"]??!1,supportsExportClip:o(e,"supportsExportClip",!1),supportsExportFrameset:o(e,"supportsExportFrameset",!1),supportsMensuration:o(e,"supportsMensuration",!1),supportsUpdate:o(e,"supportsUpdate",!1)}}}},75414:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Ye});var s=r(32816),i=r(17745),o=r(24877),n=r(6407),a=r(32773),l=r(65283),p=r(20266),u=r(2810),d=r(80959),y=r(99063),c=r(29298),h=r(49877),g=r(69421),f=r(7969),v=r(73597),m=r(27281),b=r(72393),_=(r(91381),r(49011),r(43682),r(54481),r(89253),r(60027),r(16677),r(17813),r(32397)),S=r(64604),M=r(93804),w=r(73509),A=r(28276),Z=r(88663),F=r(44600),x=r(77125),I=r(80473),T=r(36544),C=r(98238),O=(r(90740),r(40499),r(93181),r(13671),r(91047),r(41390),r(58498),r(45371),r(99924)),L=(r(2160),r(69763),r(18683),r(29512),r(56273),r(64752),r(48844),r(29208),r(1178),r(49755)),R=r(30011);r(55270),r(50214),r(59192),r(54483),r(95779),r(13262),r(346),r(16699),r(94345),r(36533),r(84200),r(97827),r(91695),r(18169),r(20762),r(48402),r(67504),r(92517),r(77037),r(54131),r(19869),r(53065),r(20804),r(87357),r(25946),r(63834),r(19969),r(9207),r(64524);let j=class extends((0,I.sA)(u.a)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,s._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],j.prototype,"title",void 0),(0,s._)([(0,h.r)("service","title",["alias","name"])],j.prototype,"readTitle",null),(0,s._)([(0,c.MZ)()],j.prototype,"layer",void 0),(0,s._)([(0,c.MZ)({type:T.I,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],j.prototype,"id",void 0),(0,s._)([(0,h.r)("service","id")],j.prototype,"readIdOnlyOnce",null),(0,s._)([(0,c.MZ)((0,C.r)(String))],j.prototype,"modelName",void 0),(0,s._)([(0,c.MZ)((0,C.r)(Boolean))],j.prototype,"isEmpty",void 0),(0,s._)([(0,c.MZ)({type:Boolean,nonNullable:!0})],j.prototype,"legendEnabled",void 0),(0,s._)([(0,c.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],j.prototype,"visible",void 0),(0,s._)([(0,c.MZ)({type:Number,json:{write:!0}})],j.prototype,"opacity",void 0),j=(0,s._)([(0,g.$)("esri.layers.buildingSublayers.BuildingSublayer")],j);const B=j;var E=r(52560),Q=r(38093),P=r(79875),q=r(33125),D=r(29180),k=r(73600),N=r(20978),U=r(36117),$=r(95365),z=(r(4048),r(85232),r(93471),r(35902),r(13226),r(53252),r(34039),r(70061)),H=(r(3495),r(97906),r(65023),r(31424),r(74676),r(2589),r(53610),r(29447),r(78273),r(49475),r(32368),r(7391),r(22529),r(43534),r(38094),r(67723),r(47239),r(59858),r(63728),r(7182),r(81272),r(44945),r(47788),r(19297),r(82408),r(69277),r(70580),r(75191),r(24319),r(62092),r(4157),r(62401),r(52731),r(89322),r(20138),r(53370),r(46946),r(3816),r(71992),r(80167),r(4478),r(91808),r(7161),r(55586),r(35121),r(92229),r(18344),r(64884),r(23351),r(51222),r(42870),r(67321),r(73067),r(54512),r(53103),r(19648),r(42948),r(51961),r(62399),r(64995),r(33150),r(58173),r(66110),r(67520),r(27532),r(48103),r(65085),r(33611),r(84857),r(60373),r(98187),r(16794),r(52357),r(11090),r(49319),r(93546),r(29570),r(34592),r(79825),r(95101),r(67578),r(17857),r(82537),r(14896),r(95611),r(98089),r(91366),r(43435),r(73435),r(56487),r(6399),r(9498),r(24079),r(38149),r(19681),r(40328),r(84539),r(65299),r(6510),r(38641),r(73502),r(3827),r(65174),r(78328),r(23916),r(54616),r(25018),r(41740),r(57111),r(75651),r(88614),r(1030),r(15319),r(60785),r(23787),r(22151),r(54912),r(83002),r(24330),r(91276),r(18527),r(62482),r(45476),r(4718),r(69310),r(85351),r(1535),r(9943),r(3112),r(46626),r(45560),r(56303),r(85890),r(55884),r(89601),r(85472),r(79323),r(74148),r(3175),r(66959),r(78774),r(8884),r(38212),r(81095),r(4798),r(67470),r(25579),r(69660),r(85994),r(35935),r(23070),r(95717),r(968),r(85901),r(82458),r(37740),r(25329),r(82140),r(40988),r(42586),r(44370),r(18653),r(95637),r(59930),r(45862),r(72762),r(71613),r(70534),r(45817),r(58194),r(4734),r(11494),r(6801),r(41003),r(9380),r(90509),r(71868),r(64102),r(8824),r(44864),r(17872),r(67315)),V=r(8368),K=(r(1985),r(31315),r(12119),r(13201),r(47215),r(47812),r(4335)),G=(r(99781),r(93049)),W=(r(25643),r(56367),r(8904),r(81284),r(78860),r(26805),r(13983),r(29201),r(32826),r(58196),r(86941),r(1739),r(81618),r(89575),r(71895),r(27084),r(61904),r(21914),r(29755),r(97511),r(32264),r(68849),r(82842),r(10224),r(36309),r(133),r(62959),r(74159),r(90197),r(76636),r(88730)),Y=(r(6837),r(96625),r(38424)),J=(r(43059),r(89935),r(49813),r(82454),r(78281),r(47387),r(46728),r(23439),r(98335),r(46935),r(96807));r(69448),r(35619),r(31175),r(78644),r(66322),r(60408),r(59955),r(58396),r(40558),r(26809),r(43577),r(86741),r(5611),r(92080),r(85914),r(46484),r(4685),r(56887),r(97538),r(29222),r(62214),r(85480),r(62079),r(66573),r(63536),r(70045),r(50123),r(88160),r(16055),r(26442),r(23937),r(92349),r(91658),r(8844),r(57760),r(18435);const X=(0,Q.d)();let ee=class extends(w.A.LoadableMixin((0,A.g)(B))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new P.A(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,s=t.associatedLayerID;return null!=r&&"number"==typeof s?new x.default({portalItem:r,customParameters:this.customParameters,layerId:s}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,q.f)(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,p.L.getLogger(this),t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return(0,N.tn)(this,e)}async _fetchService(e){const t=(await(0,S.A)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:E.z,{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}=e;return{query:t,data:{supportsZ:r,supportsM:s,isVersioned:i}}}createQuery(){const e=new k.A;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const r=(0,R.hL)(this.fieldsIndex,await(0,$.g)(this,(0,$.a)(this)));return(0,U.q)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new n.A("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new m.A({attributes:r[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new n.A("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new n.A("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,s._)([(0,c.MZ)({readOnly:!0})],ee.prototype,"parsedUrl",null),(0,s._)([(0,c.MZ)({type:D.I,readOnly:!0})],ee.prototype,"nodePages",void 0),(0,s._)([(0,c.MZ)({type:[D.a],readOnly:!0})],ee.prototype,"materialDefinitions",void 0),(0,s._)([(0,c.MZ)({type:[D.b],readOnly:!0})],ee.prototype,"textureSetDefinitions",void 0),(0,s._)([(0,c.MZ)({type:[D.c],readOnly:!0})],ee.prototype,"geometryDefinitions",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],ee.prototype,"serviceUpdateTimeStamp",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],ee.prototype,"store",void 0),(0,s._)([(0,c.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],ee.prototype,"rootNode",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),(0,s._)([(0,c.MZ)(X.fields)],ee.prototype,"fields",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],ee.prototype,"fieldsIndex",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:x.default})],ee.prototype,"associatedLayer",void 0),(0,s._)([(0,h.r)("service","associatedLayer",["associatedLayerID"])],ee.prototype,"readAssociatedLayer",null),(0,s._)([(0,c.MZ)(X.outFields)],ee.prototype,"outFields",void 0),(0,s._)([(0,c.MZ)({type:String,readOnly:!0})],ee.prototype,"objectIdField",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:String,json:{read:!1}})],ee.prototype,"displayField",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:String})],ee.prototype,"apiKey",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:String})],ee.prototype,"customParameters",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:F.A})],ee.prototype,"fullExtent",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:f.A})],ee.prototype,"spatialReference",null),(0,s._)([(0,c.MZ)({readOnly:!0})],ee.prototype,"version",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:L.E})],ee.prototype,"elevationInfo",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Number})],ee.prototype,"minScale",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Number})],ee.prototype,"maxScale",null),(0,s._)([(0,c.MZ)({readOnly:!0,type:Number})],ee.prototype,"effectiveScaleRange",null),(0,s._)([(0,c.MZ)({type:["hide","show"],json:{write:!0}})],ee.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)({types:_.w,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ee.prototype,"renderer",void 0),(0,s._)([(0,c.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ee.prototype,"definitionExpression",void 0),(0,s._)([(0,c.MZ)(C.p)],ee.prototype,"popupEnabled",void 0),(0,s._)([(0,c.MZ)({type:b.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],ee.prototype,"popupTemplate",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ee.prototype,"normalReferenceFrame",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),(0,s._)([(0,c.MZ)()],ee.prototype,"types",null),(0,s._)([(0,c.MZ)()],ee.prototype,"typeIdField",null),(0,s._)([(0,c.MZ)({json:{write:!1}}),(0,Z.e)(new M.J({"3DObject":"3d-object",Point:"point"}))],ee.prototype,"layerType",void 0),(0,s._)([(0,c.MZ)()],ee.prototype,"geometryType",null),(0,s._)([(0,c.MZ)()],ee.prototype,"profile",null),(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],ee.prototype,"capabilities",null),(0,s._)([(0,c.MZ)({readOnly:!0})],ee.prototype,"statisticsInfo",void 0),ee=(0,s._)([(0,g.$)("esri.layers.buildingSublayers.BuildingComponentSublayer")],ee);const te=ee;var re;const se={type:i.A,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ie}}},read:!1}};function ie(e,t,r){if(e&&Array.isArray(e))return new i.A(e.map((e=>{const t=function(e){return"group"===e.layerType?oe:te}(e);if(t){const s=new t;return s.read(e,r),s}return r?.messages&&e&&r.messages.push(new g.W("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:r})),null})))}let oe=re=class extends B{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,l.a)(this,(e=>re.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};var ne;(0,s._)([(0,c.MZ)({type:["hide","show","hide-children"],json:{write:!0}})],oe.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)(se)],oe.prototype,"sublayers",void 0),oe=re=(0,s._)([(0,g.$)("esri.layers.buildingSublayers.BuildingGroupSublayer")],oe),(ne=oe||(oe={})).sublayersProperty=se,ne.readSublayers=ie,ne.forEachSublayer=function e(t,r){t.forEach((t=>{r(t),"building-group"===t.type&&e(t.sublayers,r)}))};const ae=oe;var le=r(26024),pe=r(50472);let ue=class extends O.oY{};(0,s._)([(0,c.MZ)({readOnly:!0,json:{read:!1}})],ue.prototype,"type",void 0),ue=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilterMode")],ue);const de=ue;var ye;let ce=ye=class extends de{constructor(){super(...arguments),this.type="solid"}clone(){return new ye}};(0,s._)([(0,c.MZ)({type:["solid"],readOnly:!0,json:{write:!0}})],ce.prototype,"type",void 0),ce=ye=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilterModeSolid")],ce);const he=ce;var ge;let fe=ge=class extends de{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new ge({edges:(0,a.o8)(this.edges)})}};(0,s._)([(0,Z.e)({wireFrame:"wire-frame"})],fe.prototype,"type",void 0),(0,s._)([(0,c.MZ)(z.s)],fe.prototype,"edges",void 0),fe=ge=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilterModeWireFrame")],fe);const ve=fe;var me;let be=me=class extends de{constructor(){super(...arguments),this.type="x-ray"}clone(){return new me}};(0,s._)([(0,c.MZ)({type:["x-ray"],readOnly:!0,json:{write:!0}})],be.prototype,"type",void 0),be=me=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilterModeXRay")],be);const _e=be;var Se;const Me={nonNullable:!0,types:{key:"type",base:de,typeMap:{solid:he,"wire-frame":ve,"x-ray":_e}},json:{read:e=>{switch(e?.type){case"solid":return he.fromJSON(e);case"wireFrame":return ve.fromJSON(e);case"x-ray":return _e.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let we=Se=class extends O.oY{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new he,this.title=""}clone(){return new Se({filterExpression:this.filterExpression,filterMode:(0,a.o8)(this.filterMode),title:this.title})}};(0,s._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],we.prototype,"filterExpression",void 0),(0,s._)([(0,c.MZ)(Me)],we.prototype,"filterMode",void 0),(0,s._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],we.prototype,"title",void 0),we=Se=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilterBlock")],we);const Ae=we;let Ze=class extends O.oY{constructor(){super(...arguments),this.type=null}};(0,s._)([(0,c.MZ)({type:String,readOnly:!0,json:{write:!0}})],Ze.prototype,"type",void 0),Ze=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilterAuthoringInfo")],Ze);const Fe=Ze;var xe;let Ie=xe=class extends O.oY{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new xe({filterType:this.filterType,filterValues:(0,a.o8)(this.filterValues)})}};(0,s._)([(0,c.MZ)({type:String,json:{write:!0}})],Ie.prototype,"filterType",void 0),(0,s._)([(0,c.MZ)({type:[String],json:{write:!0}})],Ie.prototype,"filterValues",void 0),Ie=xe=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilterAuthoringInfoType")],Ie);const Te=Ie;var Ce;const Oe=i.A.ofType(Te);let Le=Ce=class extends O.oY{clone(){return new Ce({filterTypes:(0,a.o8)(this.filterTypes)})}};(0,s._)([(0,c.MZ)({type:Oe,json:{write:!0}})],Le.prototype,"filterTypes",void 0),Le=Ce=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],Le);const Re=Le;var je;const Be=i.A.ofType(Re);let Ee=je=class extends Fe{constructor(){super(...arguments),this.type="checkbox"}clone(){return new je({filterBlocks:(0,a.o8)(this.filterBlocks)})}};(0,s._)([(0,c.MZ)({type:["checkbox"]})],Ee.prototype,"type",void 0),(0,s._)([(0,c.MZ)({type:Be,json:{write:!0}})],Ee.prototype,"filterBlocks",void 0),Ee=je=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Ee);const Qe=Ee;var Pe;const qe=i.A.ofType(Ae);let De=Pe=class extends O.oY{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,G.g)(),this.name=null}clone(){return new Pe({description:this.description,filterBlocks:(0,a.o8)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,a.o8)(this.filterAuthoringInfo)})}};(0,s._)([(0,c.MZ)({type:String,json:{write:!0}})],De.prototype,"description",void 0),(0,s._)([(0,c.MZ)({type:qe,json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"filterBlocks",void 0),(0,s._)([(0,c.MZ)({types:{key:"type",base:Fe,typeMap:{checkbox:Qe}},json:{read:e=>"checkbox"===e?.type?Qe.fromJSON(e):null,write:!0}})],De.prototype,"filterAuthoringInfo",void 0),(0,s._)([(0,c.MZ)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"id",void 0),(0,s._)([(0,c.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],De.prototype,"name",void 0),De=Pe=(0,s._)([(0,g.$)("esri.layers.support.BuildingFilter")],De);const ke=De;let Ne=class extends O.oY{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,s._)([(0,c.MZ)({type:String})],Ne.prototype,"fieldName",void 0),(0,s._)([(0,c.MZ)({type:String})],Ne.prototype,"modelName",void 0),(0,s._)([(0,c.MZ)({type:String})],Ne.prototype,"label",void 0),(0,s._)([(0,c.MZ)({type:Number})],Ne.prototype,"min",void 0),(0,s._)([(0,c.MZ)({type:Number})],Ne.prototype,"max",void 0),(0,s._)([(0,c.MZ)({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],Ne.prototype,"mostFrequentValues",void 0),(0,s._)([(0,c.MZ)({type:[Number]})],Ne.prototype,"subLayerIds",void 0),Ne=(0,s._)([(0,g.$)("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],Ne);let Ue=class extends(w.A.LoadableMixin((0,A.g)(O.oY))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(p.L.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await(0,S.A)(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};(0,s._)([(0,c.MZ)({constructOnly:!0,type:String})],Ue.prototype,"url",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,type:[Ne],json:{read:{source:"summary"}}})],Ue.prototype,"fields",null),Ue=(0,s._)([(0,g.$)("esri.layers.support.BuildingSummaryStatistics")],Ue);const $e=Ue;var ze=r(2026);r(79697),r(335),r(75485),r(8410);const He=i.A.ofType(ke),Ve=(0,a.o8)(ae.sublayersProperty),Ke=Ve.json?.origins;Ke&&(Ke["web-scene"]={type:[te],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},Ke["portal-item"]={type:[te],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let Ge=class extends((0,le.w6)((0,V.A)((0,W.q)((0,Y.A)((0,J.j)((0,u.M)((0,K.d)((0,H.p)(v.A))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new o.C({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new He,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,r){const s=ae.readSublayers(e,t,r);return ae.forEachSublayer(s,(e=>e.layer=this)),this._allSublayerOverrides&&(function(e,t){t.forEach((t=>We(e,t)))}(s,this._allSublayerOverrides),this._allSublayerOverrides=null),s}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?function(e,t,r){const s=[];ae.forEachSublayer(e,(e=>{const t=e.write({},r);Object.keys(t).length>1&&s.push(t)})),s.length>0&&(t.sublayers=s)}(this.sublayers,e,t):this._allSublayerOverrides&&function(e,t,r){const s=r?.origin&&e.get(r.origin);s&&(t.sublayers=[],s.overrides.forEach((e=>{t.sublayers.push((0,a.o8)(e))})))}(this._allSublayerOverrides,e,t)),e}read(e,t){if(super.read(e,t),("web-scene"===t?.origin||"portal-item"===t?.origin)&&Array.isArray(e?.sublayers)){const r=function(e,t){const r=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?r.set(s.id,s):t.messages?.push(new n.A("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:r,context:t}}(e.sublayers,t);this.sublayers?We(this.sublayers,r):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(t.origin,r))}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=(0,y.fj)(this.parsedUrl?.path,t.statisticsHRef);return new $e({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(d.QP).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(r),Promise.resolve(this)}loadAll(){return(0,l.l)(this,(e=>{ae.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(le.Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(le.Xh.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new n.A("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:t}=await(0,pe.f)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=t}catch(e){p.L.getLogger(this).warn("Associated feature service item could not be loaded",e)}}_validateElevationInfo(){const e=this.elevationInfo,t="Building scene layers";(0,ze.l)(p.L.getLogger(this),(0,ze.e)(t,"absolute-height",e)),(0,ze.l)(p.L.getLogger(this),(0,ze.f)(t,e))}};function We(e,t){const{overrides:r,context:s}=t;ae.forEachSublayer(e,(e=>e.read(r.get(e.id),s)))}(0,s._)([(0,c.MZ)({type:["BuildingSceneLayer"]})],Ge.prototype,"operationalLayerType",void 0),(0,s._)([(0,c.MZ)({readOnly:!0})],Ge.prototype,"allSublayers",void 0),(0,s._)([(0,c.MZ)(Ve)],Ge.prototype,"sublayers",void 0),(0,s._)([(0,h.r)("service","sublayers")],Ge.prototype,"readSublayers",null),(0,s._)([(0,c.MZ)({type:He,nonNullable:!0,json:{write:!0}})],Ge.prototype,"filters",void 0),(0,s._)([(0,c.MZ)({type:String,json:{write:!0}})],Ge.prototype,"activeFilterId",void 0),(0,s._)([(0,c.MZ)({readOnly:!0,type:$e})],Ge.prototype,"summaryStatistics",void 0),(0,s._)([(0,h.r)("summaryStatistics",["statisticsHRef"])],Ge.prototype,"readSummaryStatistics",null),(0,s._)([(0,c.MZ)({type:[String],json:{read:!1}})],Ge.prototype,"outFields",void 0),(0,s._)([(0,c.MZ)(C.s)],Ge.prototype,"fullExtent",void 0),(0,s._)([(0,c.MZ)(C.a)],Ge.prototype,"legendEnabled",void 0),(0,s._)([(0,c.MZ)({type:["show","hide","hide-children"]})],Ge.prototype,"listMode",void 0),(0,s._)([(0,c.MZ)((0,C.r)(f.A))],Ge.prototype,"spatialReference",void 0),(0,s._)([(0,c.MZ)(C.e)],Ge.prototype,"elevationInfo",null),(0,s._)([(0,c.MZ)({json:{read:!1},readOnly:!0})],Ge.prototype,"type",void 0),(0,s._)([(0,c.MZ)()],Ge.prototype,"associatedFeatureServiceItem",void 0),Ge=(0,s._)([(0,g.$)("esri.layers.BuildingSceneLayer")],Ge);const Ye=Ge},27084:(e,t,r)=>{r.d(t,{A:()=>y});var s=r(32816),i=r(52731),o=r(93804),n=r(99924),a=r(29298),l=(r(32773),r(20266),r(69421));r(41390),r(40499),r(93181),r(13671),r(58498),r(91047),r(45371),r(80959),r(6407),r(90740),r(36544);const p=new o.J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),u=new o.J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let d=class extends((0,i.O)(n.oY)){constructor(e){super(e),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,s._)([(0,a.MZ)({json:{read:p.read,write:p.write}})],d.prototype,"cardinality",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"composite",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"id",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"keyField",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"keyFieldInRelationshipTable",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"name",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"relatedTableId",void 0),(0,s._)([(0,a.MZ)({json:{read:!0,write:!0}})],d.prototype,"relationshipTableId",void 0),(0,s._)([(0,a.MZ)({json:{read:u.read,write:u.write}})],d.prototype,"role",void 0),d=(0,s._)([(0,l.$)("esri.layers.support.Relationship")],d);const y=d}}]);
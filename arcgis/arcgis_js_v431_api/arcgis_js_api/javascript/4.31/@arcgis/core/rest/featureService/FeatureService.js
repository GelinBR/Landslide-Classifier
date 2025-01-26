/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../config.js";import{id as e}from"../../kernel.js";import r from"../../request.js";import{clone as o,i}from"../../core/lang.js";import p from"../../core/Error.js";import{IdentifiableMixin as a}from"../../core/Identifiable.js";import{JSONSupportMixin as n}from"../../core/JSONSupport.js";import l from"../../core/Loadable.js";import{throwIfAborted as u,throwIfAbortError as m}from"../../core/promiseUtils.js";import{property as c}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{r as d}from"../../chunks/reader.js";import{subclass as y}from"../../core/accessorSupport/decorators/subclass.js";import j from"../../geometry/SpatialReference.js";import{g as h,a as b,b as f,i as k,u as g,d as S}from"../../chunks/applyEditsUtils.js";import{checkEditingCapabilities as v,normalizeEdits as U,normalizeGeometries as I}from"../../chunks/editingSupport.js";import{e as C,i as D,a as R,c as V}from"../../chunks/EditBusLayer.js";import{s as E}from"../../chunks/featureLayerUtils.js";import{f as F}from"../../chunks/layerUtils.js";import{g as P,r as A,a as w}from"../../chunks/serviceCapabilitiesUtils.js";import M from"../../portal/PortalItem.js";import{g as L}from"../../chunks/portalItemUtils.js";import{i as T}from"../../core/urlUtils.js";import{p as O,a as x,e as N}from"../../chunks/utils9.js";import{u as Q}from"../../chunks/editsZScale.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/tracking.js";import"../../chunks/ensureType.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../core/Promise.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../chunks/writer.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../geometry/projection.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../geometry/support/MeshTransform.js";import"../../chunks/mat4.js";import"../../chunks/common.js";import"../../chunks/mat4f64.js";import"../../chunks/quat.js";import"../../chunks/vec3.js";import"../../chunks/vec4.js";import"../../chunks/quatf64.js";import"../../chunks/axisAngleDegrees.js";import"../../chunks/uuid.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils10.js";import"../../chunks/infoFor3D.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../chunks/featureQueryAll.js";import"../support/Query.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../support/StatisticDefinition.js";import"../../time/TimeExtent.js";import"../../chunks/timeUtils.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../support/AlgorithmicColorRamp.js";import"../support/ColorRamp.js";import"../support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../chunks/RendererLegendOptions.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../support/AttachmentQuery.js";import"../support/RelationshipQuery.js";import"../../chunks/arcgisLayerUrl.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";function q(t,s){const e=s.id;return{id:e,name:s.name,url:`${t}/${e}`,type:s.type||"Table"}}function _(t){return{isDataVersioned:A(t,"hasVersionedData",!1),isDataBranchVersioned:A(t,"hasBranchVersionedData",!1)}}function B(t,s){const e=t?t.toLowerCase().split(",").map((t=>t.trim())):[],r=e.includes("query"),o=e.includes("editing")&&!s.datesInUnknownTimezone;let i=o&&e.includes("create"),p=o&&e.includes("delete"),a=o&&e.includes("update");return o&&!(i||p||a)&&(i=p=a=!0),{supportsAdd:i,supportsDelete:p,supportsEditing:o,supportsChangeTracking:e.includes("changetracking"),supportsQuery:r,supportsQueryDataElements:A(s,"supportsQueryDataElements",!1),supportsQueryDomains:A(s,"supportsQueryDomains",!1),supportsQueryContingentValues:A(s,"supportsQueryContingentValues",!1),supportsSync:e.includes("sync"),supportsUpdate:a}}function J(t){return{maxRecordCountFactor:w(t,"maxRecordCountFactor",void 0),maxRecordCount:w(t,"maxRecordCount",void 0)}}function G(t){const s=t?.advancedEditingCapabilities;return{supportsGlobalId:A(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:A(s,"supportsReturnServiceEditsInSourceSR",!1),supportsSplit:A(s,"supportsSplit",!1),supportsAsyncApplyEdits:A(s,"supportsAsyncApplyEdits",!1)}}function W(t){const s=t?.syncCapabilities,e=s?.supportedSyncDataOptions;return{supportsAsync:A(s,"supportsAsync",!1),supportedSyncDataOptions:{annotations:!(1&~e),dimensions:!(2&~e),contingentValues:!(4&~e),attributeRules:!(8&~e),utilityNetworkSystem:!(16&~e),annotationFullModel:!(32&~e),include3DObjects:!(64&~e),utilityNetworkMissingLayers:!(128&~e),preserveTrueCurves:!(256&~e)}}}let z=class extends(n(a(l))){constructor(t){super(t),this.url=null,this.sourceJSON=null,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1,this.userTypeExtensions=[],this.layerInfos=null,this.tableInfos=null,this.capabilities=null}read(t,s){this.sourceJSON=t,super.read(t,s)}get utilityNetworkUrl(){if(this.sourceJSON)for(const t of this.sourceJSON.layers)if("Utility Network Layer"===t.type)return`${this.url}/${t.id}`;return null}get versionManagementServiceUrl(){return this.sourceJSON?.hasBranchVersionedData&&!T(this.url)?this.url.replace(/\/FeatureServer/i,"/VersionManagementServer"):null}readLayerInfos(t,s){return(s.layers||[]).map((t=>{const{type:s,geometryType:e}=t;return{...q(this.url,t),type:s||"Feature Layer",geometryType:e}}))}readTableInfos(t,s){return(s.tables||[]).map((t=>q(this.url,t)))}readCapabilities(t,s){return function(t){return{data:_(t),sync:W(t),operations:B(t.capabilities,t),query:J(t),editing:G(t)}}(s)}get effectiveCapabilities(){const t=this.capabilities;if(!t)return null;const s=o(t),{operations:e}=s;return this.userHasUpdateItemPrivileges?(e.supportsAdd=e.supportsDelete=e.supportsEditing=e.supportsQuery=e.supportsUpdate=!0,s):(this.userHasFullEditingPrivileges&&e.supportsEditing&&(e.supportsAdd=e.supportsDelete=e.supportsUpdate=!0),s)}load(t){return this.addResolvingPromise(this._fetchService(this.url,t).then((()=>this._setUserPrivileges(t)))),Promise.resolve(this)}async fetchAllLayersAndTables(t){return await this.load(t),this._fetchLayersAndTablesPromise||=this._fetchLayersAndTables(this.url),u(t),this._fetchLayersAndTablesPromise}async applyEdits(t,s){let e=null;try{const{results:r,edits:i,editedFeatures:p}=await this._internalApplyEdits(t,s),a=t=>t.filter((t=>!t.error)).map(o);let n=0;return r.map((t=>{e=C(this.url,t.id,s?.gdbVersion,!0);const r={edits:i[n],addedFeatures:a(t.addFeatureResults),updatedFeatures:a(t.updateFeatureResults),deletedFeatures:a(t.deleteFeatureResults),addedAttachments:a(t.addAttachmentResults),updatedAttachments:a(t.updateAttachmentResults),deletedAttachments:a(t.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:t.editMoment?new Date(t.editMoment):null};n+=1,p.length>0&&(r.editedFeatures=p),e.resolve(r),e=null})),r}catch(t){throw e&&e.reject(t),t}}async _setUserPrivileges(t){if(s.userPrivilegesApplied)try{const{features:{fullEdit:s},content:{updateItem:e}}=await this._fetchUserPrivileges(this.sourceJSON.serviceItemId,t);this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",e)}catch(t){m(t)}}async _fetchUserPrivileges(t,s){const r=!0,o=!1,i=!1;if(!t)return{features:{edit:r,fullEdit:o},content:{updateItem:i}};let p,a,n;try{p=await F(this.url,s)}catch(t){m(t)}try{const t=null!=s?s.signal:null;a=await(e?.getCredential(`${p}/sharing`,{prompt:!1,signal:t}))}catch(t){m(t)}if(!a)return{features:{edit:r,fullEdit:o},content:{updateItem:i}};try{if(n=new M({id:t,portal:{url:p}}),await n.load(s),n.portal.user)return L(n)}catch(t){m(t)}return{features:{edit:r,fullEdit:o},content:{updateItem:i}}}async _internalApplyEdits(t,s){await E(this.url);const e=s?.globalIdUsed??!1,o=j.fromJSON(this.sourceJSON.spatialReference),{edits:p,options:a}=await this._processApplyEditsParams(t,s),n=await Promise.all(p.map((async t=>{const s=t.addFeatures?.map((t=>h({spatialReference:o},t,null)))??[],r=(await Promise.all(s)).filter(i),p=r.length>0?r:null,a=t.updateFeatures?.map((t=>h({spatialReference:o},t,null)))??[],n=(await Promise.all(a)).filter(i),l=n.length>0?n:null,u=b(t.identifierFields,t.deleteFeatures,e),m=u.length>0?u:null;Q(p,l,o);const c=await f(t.identifierFields,t);let d=null;return c&&(d={adds:c.adds.length>0?c.adds:void 0,updates:c.updates.length>0?c.updates:void 0,deletes:c.deletes.length>0?c.deletes:void 0}),{id:t.id,adds:p,updates:l,deletes:m,attachments:d}}))),l={gdbVersion:a?.gdbVersion,rollbackOnFailure:!0,useGlobalIds:e,returnEditMoment:!0,honorSequenceOfEdits:a?.honorSequenceOfEdits,usePreviousEditMoment:a?.usePreviousEditMoment,returnServiceEditsInSourceSR:!1,returnServiceEditsOption:"originalAndCurrentFeatures",async:!1};await D(this.url,s?.gdbVersion,!0);const u=R(this.url,s?.gdbVersion||null);l.edits=JSON.stringify(n);const m=O(this.url),c=x(m.query,{query:N({...l,f:"json"}),method:"post"});let d;u&&(c.authMode="immediate",c.query.sessionId=V);try{d=await r(this.url+"/applyEdits",c)}catch(t){if(!k(t))throw t;c.authMode="immediate",d=await r(this.url+"/applyEdits",c)}return{...H(d),edits:p}}async _processApplyEditsParams(t,s){const e={...s};return{edits:await Promise.all(t.map((async t=>{const e=this.effectiveCapabilities,r=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(v(t,e,s,!!r,!!o,"feature-service"),!e.data.isDataVersioned&&s?.gdbVersion)throw new p("feature-service:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isDataVersioned'");const i=U(t,e,"feature-service");return{...await I(i),id:t.id,identifierFields:t.identifierFields}}))),options:e}}async _fetchService(t,s){if(this.sourceJSON)return void this.read(this.sourceJSON,{url:O(t)});const e=await r(t,{responseType:"json",query:{f:"json"},...s});this.read(e.data,{url:O(t)})}async _fetchLayersAndTables(t){const s=`${t}/layers`,e=await r(s,{responseType:"json",query:{f:"json"}});return{layers:e.data.layers.map((t=>{const{type:s,geometryType:e}=t,r=q(this.url,t),o=P(t,r.url);return{...r,type:s||"Feature Layer",geometryType:e,capabilities:o}})),tables:e.data.tables.map((t=>{const s=q(this.url,t),e=P(t,s.url);return{...s,capabilities:e}}))}}};function H(t){const s=t.data,e=[];return{results:s.map((t=>{const s={addResults:t.addResults??[],updateResults:t.updateResults??[],deleteResults:t.deleteResults??[],attachments:t.attachments,editMoment:t.editMoment},r=g(s),o=t.editedFeatures,i=o?.spatialReference?new j({wkid:o?.spatialReference.wkid,wkt:o?.spatialReference.wkt,latestWkid:o?.spatialReference.latestWkid,latestVcsWkid:o?.spatialReference.latestVcsWkid,vcsWkid:o?.spatialReference.vcsWkid}):null,p=o?S(o,i):null;return p&&e.push({layerId:t.id,editedFeatures:p}),{id:t.id,editedFeatures:p,...r}})),editedFeatures:e}}t([c()],z.prototype,"url",void 0),t([c()],z.prototype,"sourceJSON",void 0),t([c()],z.prototype,"userHasFullEditingPrivileges",void 0),t([c()],z.prototype,"userHasUpdateItemPrivileges",void 0),t([c({readOnly:!0})],z.prototype,"utilityNetworkUrl",null),t([c({readOnly:!0})],z.prototype,"versionManagementServiceUrl",null),t([c()],z.prototype,"userTypeExtensions",void 0),t([c({json:{read:{source:["layers"]}}})],z.prototype,"layerInfos",void 0),t([d("layerInfos",["layers"])],z.prototype,"readLayerInfos",null),t([c({json:{read:{source:["tables"]}}})],z.prototype,"tableInfos",void 0),t([d("tableInfos",["tables"])],z.prototype,"readTableInfos",null),t([c({readOnly:!0,json:{read:{source:["hasVersionedData","hasBranchVersionedData","capabilities","supportsQueryDataElements","supportsQueryDomains","supportsQueryContingentValues","maxRecordCountFactor","maxRecordCount","advancedEditingCapabilities","supportsApplyEditsWithGlobalIds","syncCapabilities","datesInUnknownTimezone"]}}})],z.prototype,"capabilities",void 0),t([d("capabilities",["hasVersionedData","hasBranchVersionedData","capabilities","supportsQueryDataElements","supportsQueryDomains","supportsQueryContingentValues","maxRecordCountFactor","maxRecordCount","advancedEditingCapabilities","supportsApplyEditsWithGlobalIds","syncCapabilities","datesInUnknownTimezone"])],z.prototype,"readCapabilities",null),t([c({readOnly:!0})],z.prototype,"effectiveCapabilities",null),z=t([y("esri.rest.featureService.FeatureService")],z);const $=z;export{$ as default};

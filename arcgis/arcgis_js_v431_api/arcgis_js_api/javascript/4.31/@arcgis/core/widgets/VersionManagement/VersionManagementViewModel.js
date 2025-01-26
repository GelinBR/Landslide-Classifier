/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import o from"../../core/Collection.js";import t from"../../core/Error.js";import{L as s}from"../../chunks/Logger.js";import{watch as i,on as n}from"../../core/reactiveUtils.js";import{removeTrailingSlash as a}from"../../core/urlUtils.js";import{property as p}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{U as l}from"../../chunks/UpdatingHandles.js";import{f as u}from"../../chunks/layerUtils.js";import c from"../../portal/Portal.js";import{h as d,a as h}from"../../chunks/utils23.js";import v from"../../rest/featureService/FeatureService.js";import{createFeatureServices as g}from"../../rest/featureService/utils.js";import{getVersioningStates as j}from"../../versionManagement/utils.js";import y from"../../versionManagement/VersioningState.js";import k from"../../versionManagement/VersionManagementService.js";import{createVersionAdapters as f}from"../../versionManagement/versionAdapters/utils.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Evented.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/asyncUtils.js";import"../../core/JSONSupport.js";import"../../kernel.js";import"../../request.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/reader.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/locale.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../core/Identifiable.js";import"../../chunks/applyEditsUtils.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../geometry/projection.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../geometry/support/MeshTransform.js";import"../../chunks/mat4.js";import"../../chunks/common.js";import"../../chunks/mat4f64.js";import"../../chunks/quat.js";import"../../chunks/vec3.js";import"../../chunks/vec4.js";import"../../chunks/quatf64.js";import"../../chunks/axisAngleDegrees.js";import"../../chunks/editingSupport.js";import"../../chunks/uuid.js";import"../../geometry/support/normalizeUtils.js";import"../../chunks/normalizeUtilsCommon.js";import"../../chunks/simplify.js";import"../../chunks/utils9.js";import"../../chunks/utils10.js";import"../../chunks/EditBusLayer.js";import"../../chunks/infoFor3D.js";import"../../chunks/featureLayerUtils.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../chunks/featureQueryAll.js";import"../../rest/support/Query.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../time/TimeExtent.js";import"../../chunks/timeUtils.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../chunks/lengthUtils.js";import"../../chunks/commonProperties.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../renderers/UniqueValueRenderer.js";import"../../chunks/diffUtils.js";import"../../chunks/RendererLegendOptions.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../chunks/styleUtils.js";import"../../rest/support/AttachmentQuery.js";import"../../rest/support/RelationshipQuery.js";import"../../chunks/serviceCapabilitiesUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../chunks/portalItemUtils.js";import"../../chunks/editsZScale.js";import"../../layers/catalog/catalogUtils.js";let w=class extends r{constructor(e){super(e),this._portalLookup=new Map,this._updatingHandlesLoad=new l,this._updatingHandlesExecute=new l,this.advancedEditingUserTypeExtensionLookup=new Map,this.executionError=void 0,this.featureServiceLookup=new Map,this.loadError=void 0,this.serverVersionLookup=new Map,this.serviceNameLookup=new Map,this.userLookup=new Map,this.versionIdentifierLookup=new Map,this.versionInfoLookup=new Map,this.versionAdministratorLookup=new Map,this.versionManagementServiceLookup=new Map,this.versioningStateLookup=new Map,this.view=null,this.versioningStates=null}initialize(){this._viewChangeHandle(),this.addHandles([i((()=>this.view),(()=>{this._resetAllLookupProperties(),this._viewChangeHandle()})),i((()=>this.versioningStates),(()=>{this._resetVersioningLookupProperties(),this._setVersioningStatesLookups()}))])}destroy(){this._updatingHandlesLoad.destroy(),this._updatingHandlesExecute.destroy()}get state(){return this._updatingHandlesLoad.updating?"loading":this.loadError?"disabled":this._updatingHandlesExecute.updating?"executing":this.executionError?"failed":"ready"}async alterVersion(e){return this._updatingHandlesExecute.addPromise(this._alterVersionInternal(e))}async changeVersion(e,r,o){return this._updatingHandlesExecute.addPromise(this._changeVersionInternal(e,r,o))}async createVersion(e){return this._updatingHandlesExecute.addPromise(this._createVersionInternal(e))}async deleteVersion(e,r,o){return this._updatingHandlesExecute.addPromise(this._deleteVersionInternal(e,r,o))}async getVersionInfos(e){return this._updatingHandlesExecute.addPromise(this._getVersionInfosInternal(e))}async _alterVersionInternal(e){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new t("version-management-view-model:load-error",this.loadError);this._setExecutionError();const r=this.versioningStateLookup.get(e.featureServerUrl);if(!r)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new t("version-management-view-model:execution-error",this.executionError);if(!this.serverVersionLookup.has(e.featureServerUrl)||this.serverVersionLookup.get(e.featureServerUrl)<=11.1)throw this._logError("version-management-view-model:execution-error","no-valid-enterprise-version"),new t("version-management-view-model:execution-error",this.executionError);if(!this.advancedEditingUserTypeExtensionLookup.get(e.featureServerUrl))throw this._logError("version-management-view-model:execution-error","no-advanced-editing-user-type-extension"),new t("version-management-view-model:execution-error",this.executionError);const{featureServerUrl:o,versionIdentifier:s,...i}=e,n=await r.alterVersion(s,i).catch((e=>{throw this._logExecutionError(e),e}));return await this.getVersionInfos(o),n}async _changeVersionInternal(e,r,o){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new t("version-management-view-model:load-error",this.loadError);this._setExecutionError();const s=this.versioningStateLookup.get(e);if(!s)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new t("version-management-view-model:execution-error",this.executionError);const i={name:r,guid:o};return await s.changeVersion(i).catch((e=>{throw this._logExecutionError(e),e}))}_updateVersionableItems(e){this._updatingHandlesLoad.addPromise((async()=>{f(e.added).forEach((e=>{const r=e.featureServiceUrl,o=this.versioningStateLookup.get(r);o&&(o.versionableItems.find((r=>r.versionableItem===e.versionableItem))||o.versionableItems.add(e))})),f(e.removed).forEach((e=>{const{allLayers:r,allTables:o}=this.view.map,t=e.featureServiceUrl,s=this.versioningStateLookup.get(t);if(!s)return void this._logError("version-management-view-model:execution-error","no-version-management-service-found");const i=e=>("feature"===e.type||"subtype-group"===e.type)&&(e.url?.includes(t)??!1);[...r.filter(i),...o.filter(i)].length||(this.featureServiceLookup.delete(t),this.serviceNameLookup.delete(t),this.versioningStateLookup.delete(t),this.versioningStates.remove(s));const n=s.versionableItems.find((r=>r.versionableItem===e.versionableItem));n&&s.versionableItems.remove(n)}))})())}async _createVersionInternal(e){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new t("version-management-view-model:load-error",this.loadError);this._setExecutionError();const r=e.featureServerUrl,o=this.versioningStateLookup.get(r);if(!o)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new t("version-management-view-model:execution-error",this.executionError);const s=this.advancedEditingUserTypeExtensionLookup.get(e.featureServerUrl),i=this.userLookup.get(r).toUpperCase(),n=this._isEmptyString(e.ownerName)?i:e.ownerName?.trim().toUpperCase();if(n!==i){if(this.serverVersionLookup.get(r)<=11.1)throw this._logError("version-management-view-model:execution-error","versioning-api-error"),new t("version-management-view-model:execution-error",this.executionError);if(!s)throw this._logError("version-management-view-model:execution-error","no-advanced-editing-user-type-extension"),new t("version-management-view-model:execution-error",this.executionError)}let a=await(this.versioningStateLookup.get(r)?.getVersionInfos());if("SDE"===n?.toUpperCase()&&"DEFAULT"===e.versionName.toUpperCase()||a?.find((r=>r.versionIdentifier.name.toUpperCase()===(n+"."+e.versionName).toUpperCase()||r.versionIdentifier.name.toUpperCase()===(i+"."+e.versionName).toUpperCase())))throw this._logError("version-management-view-model:execution-error","no-valid-version-name"),new t("version-management-view-model:execution-error",this.executionError);const p=await o.versionManagementService.createVersion({versionName:e.versionName,access:n!==i?"public":e.access,description:e.description}).catch((e=>{throw this._logExecutionError(e),e}));if(n!==i){const{guid:o,name:t}=p.versionIdentifier,s={featureServerUrl:r,versionIdentifier:{guid:o,name:t},access:e.access,ownerName:n};await this.alterVersion(s)||this.deleteVersion(r,i+"."+e.versionName,p.versionIdentifier.guid)}return await this.getVersionInfos(r),a=await(this.versioningStateLookup.get(r)?.getVersionInfos()),a?.find((e=>e.versionIdentifier.guid===p.versionIdentifier.guid))}async _deleteVersionInternal(e,r,o){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new t("version-management-view-model:load-error",this.loadError);this._setExecutionError();const s=this.versioningStateLookup.get(e);if(!s)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new t("version-management-view-model:execution-error",this.executionError);if(this.serverVersionLookup.get(e)<=11.1)throw this._logError("version-management-view-model:execution-error","versioning-api-error"),new t("version-management-view-model:execution-error",this.executionError);if(!this.advancedEditingUserTypeExtensionLookup.get(e))throw this._logError("version-management-view-model:execution-error","no-advanced-editing-user-type-extension"),new t("version-management-view-model:execution-error",this.executionError);const i={name:r,guid:o};return await s.deleteVersion(i).catch((e=>{throw this._logExecutionError(e),new t("version-management-view-model:execution-error",this.executionError)}))}async _getVersionInfosInternal(e){if("disabled"===this.state)throw this._logError("version-management-view-model:load-error",this.loadError),new t("version-management-view-model:load-error",this.loadError);this._setExecutionError();const r=this.featureServiceLookup.get(e)?.featureService;if(!r)throw this._logError("version-management-view-model:execution-error","no-feature-service-found"),new t("version-management-view-model:execution-error",this.executionError);r.loaded||await r.load().catch((e=>{throw this._logExecutionError(e),e}));const o=r.url;this.serverVersionLookup.set(o,r.sourceJSON?.currentVersion??0),this.serverVersionLookup.get(o)<=11.1&&this.advancedEditingUserTypeExtensionLookup.set(o,!1);const s=this.userLookup.get(e);this._portalLookup.get(e)&&s?(this.advancedEditingUserTypeExtensionLookup.set(o,await d(this._portalLookup.get(e),s,"advediting")),this.versionAdministratorLookup.set(o,await h(this._portalLookup.get(e),s,"features:user:manageVersions"))):(this.advancedEditingUserTypeExtensionLookup.set(o,!1),this.versionAdministratorLookup.set(o,!1));const i=this.versioningStateLookup.get(e);if(!i)throw this._logError("version-management-view-model:execution-error","no-versioning-state-found"),new t("version-management-view-model:execution-error",this.executionError);return i.loaded||await i.load().catch((e=>{throw this._logExecutionError(e),e})),await i.getVersionInfos(!0).catch((e=>{throw this._logExecutionError(e),e}))}_isEmptyString(e){return!e||0===e.trim().length}_logError(e,r){switch(s.getLogger(this).error(new t(e,r)),e){case"version-management-view-model:load-error":this._setLoadError(r);break;case"version-management-view-model:execution-error":this._setExecutionError(r)}}_logExecutionError(e){this._logError("version-management-view-model:execution-error",e.message)}async _viewChangeHandle(){this._updatingHandlesLoad.addPromise((async()=>{if(this._setLoadError(),!this.view)return void this._setLoadError("no-view-property");if(this.view&&"2d"!==this.view.type)return void this._logError("version-management-view-model:load-error","sceneView-not-supported");this.removeHandles("map-change-handle"),this.addHandles([i((()=>this.view?.map),(()=>{this._resetAllLookupProperties(),this._mapChangeHandle(this.versioningStates)}))],"map-change-handle");const e=await this._getVersioningStates();await this._mapChangeHandle(e)})())}async _mapChangeHandle(e){this._updatingHandlesLoad.addPromise((async()=>{this._setLoadError(),this.removeHandles("map-layers-tables-change-handle"),this.addHandles([n((()=>this.view?.map.allLayers),"change",(e=>{(e.added.some((({type:e})=>"feature"===e))||e.removed.some((({type:e})=>"feature"===e))||e.added.some((({type:e})=>"subtype-group"===e))||e.removed.some((({type:e})=>"subtype-group"===e)))&&(this._resetServiceRelatedLookupProperties(),this._propertiesChangeInternal(this.versioningStates),this._updateVersionableItems(e))})),n((()=>this.view?.map.allTables),"change",(e=>{(e.added.some((({type:e})=>"feature"===e))||e.removed.some((({type:e})=>"feature"===e))||e.added.some((({type:e})=>"subtype-group"===e))||e.removed.some((({type:e})=>"subtype-group"===e)))&&(this._resetServiceRelatedLookupProperties(),this._propertiesChangeInternal(this.versioningStates),this._updateVersionableItems(e))}))],"map-layers-tables-change-handle"),await this._propertiesChangeInternal(e)})())}async _propertiesChangeInternal(e){this._updatingHandlesLoad.addPromise((async()=>{const r=e=>"feature"===e.type||"subtype-group"===e.type,{allLayers:o,allTables:t}=this.view.map;if(this._setLoadError(),this.featureServiceLookup=g([...o.filter(r),...t.filter(r)]),this.featureServiceLookup.size){this._updateFeatureServiceLookup(e),this.serviceNameLookup=new Map;for(const e of this.featureServiceLookup.values()){const{featureService:r,featureService:{url:o}}=e;if(!this.serviceNameLookup.has(o)){if(r.loaded||await r.load().catch((e=>{s.getLogger(this).error(e)})),!r.versionManagementServiceUrl){this.featureServiceLookup.delete(o);continue}const e=await u(o),t=new c({authMode:"immediate",url:e});await t.load().catch((e=>{s.getLogger(this).error(e)}));const i=t.user?.username;if(!r.loaded||!t.loaded||!i)continue;this.serviceNameLookup.set(a(o),o.split("/").at(-2)),this.userLookup.set(o,i),this._portalLookup.set(o,t)}}this.removeHandles("versioning-states-change-handle"),e.forEach((e=>this._handleVersioningStateLookupUpdate(e))),await this._updateVersioningStates(e),this.versioningStates=e}else this._logError("version-management-view-model:load-error","no-feature-services")})())}_updateFeatureServiceLookup(e){for(const r of e){const e=r.featureServiceUrl;if(!this.featureServiceLookup.has(e)){const o=new v({url:e}),t=r.versionableItems.toArray().flatMap((e=>"network"===e.type?null:e.versionableItem));this.featureServiceLookup.set(e,{featureService:o,layers:t})}}}async _updateVersioningStates(e){for(const r of this.featureServiceLookup.values()){const t=r.featureService;if(t.versionManagementServiceUrl){if(!e.find((e=>e.featureServiceUrl===t.url))&&t.versionManagementServiceUrl){const s=new o(f(r.layers)),i=new y({versionManagementService:new k({url:t.versionManagementServiceUrl}),versionableItems:s});e.add(i),this._handleVersioningStateLookupUpdate(i)}await this.getVersionInfos(t.url)}}}async _getVersioningStates(){return this.versioningStates&&this.versioningStates.length?this.versioningStates:this.view?await j(this.view,!1):(this._logError("version-management-view-model:load-error","no-view-property"),new o)}_handleVersioningStateLookupUpdate(e){this.versioningStateLookup.set(e.featureServiceUrl,e),this._addHandlesToVersioningState(e),this.versionIdentifierLookup.set(e.featureServiceUrl,e.currentVersionInfo?.versionIdentifier),this.versionManagementServiceLookup.set(e.featureServiceUrl,e.versionManagementService)}async _setVersioningStatesLookups(){this._updatingHandlesLoad.addPromise((async()=>{this.versioningStates&&(this.removeHandles("versioning-states-change-handle"),this._updateFeatureServiceLookup(this.versioningStates),this.versioningStates.forEach((e=>this._handleVersioningStateLookupUpdate(e))),await this._updateVersioningStates(this.versioningStates))})())}_addHandlesToVersioningState(e){this.addHandles([i((()=>e.versionInfos),(()=>{this.versionInfoLookup.set(e.featureServiceUrl,e.versionInfos)})),i((()=>e.currentVersionInfo?.versionIdentifier),(()=>{this.versionIdentifierLookup.set(e.featureServiceUrl,e.currentVersionInfo?.versionIdentifier)}))],"versioning-states-change-handle")}_resetVersioningLookupProperties(){this.versionIdentifierLookup=new Map,this.versionInfoLookup=new Map,this.versionManagementServiceLookup=new Map,this.versioningStateLookup=new Map}_resetAllLookupProperties(){this._portalLookup=new Map,this.advancedEditingUserTypeExtensionLookup=new Map,this.serverVersionLookup=new Map,this.userLookup=new Map,this.versioningStates=new o,this._resetVersioningLookupProperties(),this._resetServiceRelatedLookupProperties()}_resetServiceRelatedLookupProperties(){this.featureServiceLookup=new Map,this.serviceNameLookup=new Map}_setExecutionError(e){this._set("executionError",e)}_setLoadError(e){this._set("loadError",e)}};e([p()],w.prototype,"_portalLookup",void 0),e([p()],w.prototype,"advancedEditingUserTypeExtensionLookup",void 0),e([p({readOnly:!0})],w.prototype,"executionError",void 0),e([p()],w.prototype,"featureServiceLookup",void 0),e([p({readOnly:!0})],w.prototype,"loadError",void 0),e([p()],w.prototype,"serverVersionLookup",void 0),e([p()],w.prototype,"serviceNameLookup",void 0),e([p({readOnly:!0})],w.prototype,"state",null),e([p()],w.prototype,"userLookup",void 0),e([p()],w.prototype,"versionIdentifierLookup",void 0),e([p()],w.prototype,"versionInfoLookup",void 0),e([p()],w.prototype,"versionAdministratorLookup",void 0),e([p()],w.prototype,"versionManagementServiceLookup",void 0),e([p()],w.prototype,"versioningStateLookup",void 0),e([p()],w.prototype,"view",void 0),e([p()],w.prototype,"versioningStates",void 0),w=e([m("esri.widgets.VersionManagement.VersionManagementViewModel")],w);const S=w;export{S as default};

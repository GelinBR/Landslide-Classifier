/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{c as e}from"../../chunks/asyncUtils.js";import s from"../../core/Collection.js";import{d as r}from"../../core/Accessor.js";import o from"../../core/Error.js";import i from"../../core/Evented.js";import{m as a}from"../../chunks/handleUtils.js";import{L as p}from"../../chunks/Logger.js";import{a as n,r as l,d as m}from"../../chunks/maybe.js";import{throwIfAborted as u,createResolver as c}from"../../core/promiseUtils.js";import{watch as h,on as d,when as j,whenOnce as y,syncAndInitial as k,initial as f,sync as w}from"../../core/reactiveUtils.js";import{property as g}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import{subclass as b}from"../../core/accessorSupport/decorators/subclass.js";import{U as v}from"../../chunks/UpdatingHandles.js";import I from"../../layers/GraphicsLayer.js";import{i as U}from"../../chunks/editableLayers.js";import{a as F,f as S}from"../../chunks/layerUtils.js";import{p as _}from"../../core/urlUtils.js";import{S as C}from"../../chunks/SketchOptions.js";import{S as W}from"../../chunks/SnappingManager.js";import M from"../../views/interactive/snapping/SnappingOptions.js";import E from"../Attachments/AttachmentsViewModel.js";import V,{w as T}from"./CreateFeaturesWorkflow.js";import L from"./UpdateWorkflow.js";import A from"./support/EditorItem.js";import O from"../FeatureTemplates/FeatureTemplatesViewModel.js";import P from"../Sketch/SketchViewModel.js";import R from"../Spinner/SpinnerViewModel.js";import"../../core/scheduling.js";import"../../chunks/ensureType.js";import"../../chunks/tracking.js";import"../../chunks/utils.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/ObservableBase.js";import"../../core/Handles.js";import"../../chunks/metadata.js";import"../../config.js";import"../../chunks/GraphicsCollection.js";import"../../Graphic.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../core/JSONSupport.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../layers/Layer.js";import"../../time/TimeExtent.js";import"../../chunks/timeUtils.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/utils2.js";import"../../chunks/mat4.js";import"../../chunks/common.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../layers/catalog/catalogUtils.js";import"../../views/interactive/sketch/SketchLabelOptions.js";import"../../views/interactive/sketch/SketchTooltipOptions.js";import"../../chunks/SketchTooltipVisibleElements.js";import"../../views/interactive/sketch/SketchValueOptions.js";import"../../chunks/angularMeasurementUtils.js";import"../../chunks/Cyclical.js";import"../../chunks/quantityUtils.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/vec3.js";import"../../chunks/projectVectorToVector.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../chunks/projectPointToVector.js";import"../../geometry/projection.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/dehydratedPoint.js";import"../../geometry/support/geodesicUtils.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/normalizedPoint.js";import"../../chunks/Settings2.js";import"../../chunks/RightAngleSnappingHint.js";import"../../chunks/snappingUtils.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/plane.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/mathUtils2.js";import"../../chunks/sphere.js";import"../../chunks/ray.js";import"../../chunks/mat3.js";import"../../chunks/geometry2dUtils.js";import"../../rest/support/Query.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../chunks/spatialRelationships.js";import"../../rest/support/StatisticDefinition.js";import"../../chunks/InputManager.js";import"../../chunks/Queue.js";import"../../core/signal.js";import"../../chunks/keybindings.js";import"../../chunks/utils6.js";import"../../chunks/Version.js";import"../../chunks/Version2.js";import"../../chunks/viewUtils.js";import"../../views/interactive/snapping/FeatureSnappingLayerSource.js";import"../../rest/query/support/AttachmentInfo.js";import"../../rest/support/AttachmentQuery.js";import"../../chunks/featureUtils.js";import"../../chunks/utils3.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../chunks/loadAll.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/uuid.js";import"../../chunks/helpMessageUtils.js";import"./CreateFeaturesWorkflowData.js";import"../../chunks/ReactiveMap.js";import"./Edits.js";import"../../chunks/diffUtils.js";import"../../chunks/drapedUtils.js";import"../../chunks/sizeVariableUtils.js";import"../../chunks/visualVariableUtils.js";import"../../chunks/compilerUtils.js";import"../../symbols/support/jsonUtils.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../symbols/support/symbolUtils.js";import"../../chunks/utils12.js";import"../../symbols/support/cimSymbolUtils.js";import"../../chunks/utils7.js";import"../../chunks/enums2.js";import"../../chunks/LRUCache.js";import"../../chunks/MemCache.js";import"../../chunks/colorUtils2.js";import"../../chunks/projector.js";import"../../chunks/widgetUtils.js";import"../../chunks/mat2df32.js";import"../../chunks/mat2d.js";import"../../chunks/jsxFactory.js";import"../../chunks/jsxWidgetSupport.js";import"../../chunks/webStyleSymbolUtils.js";import"../../chunks/devEnvironmentUtils.js";import"../../chunks/styleUtils.js";import"../../chunks/GraphicState.js";import"../../chunks/hitTestSelectUtils.js";import"../../chunks/templateUtils.js";import"./Workflow.js";import"../FeatureForm/FeatureFormViewModel.js";import"../../form/FormTemplate.js";import"../../form/ExpressionInfo.js";import"../../form/elements/GroupElement.js";import"../../form/elements/Element.js";import"../../form/support/elements.js";import"../../form/elements/AttachmentElement.js";import"../../form/elements/inputs/attachments/AttachmentInput.js";import"../../chunks/Input.js";import"../../form/elements/inputs/attachments/support/inputs.js";import"../../form/elements/inputs/attachments/AudioInput.js";import"../../chunks/utils8.js";import"../../form/elements/inputs/attachments/DocumentInput.js";import"../../form/elements/inputs/attachments/ImageInput.js";import"../../form/elements/inputs/attachments/SignatureInput.js";import"../../form/elements/inputs/attachments/VideoInput.js";import"../../form/elements/FieldElement.js";import"../../form/elements/support/inputs.js";import"../../form/elements/inputs/BarcodeScannerInput.js";import"../../form/elements/inputs/TextInput.js";import"../../form/elements/inputs/Input.js";import"../../form/elements/inputs/ComboBoxInput.js";import"../../form/elements/inputs/DatePickerInput.js";import"../../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../../form/elements/inputs/DateTimePickerInput.js";import"../../form/elements/inputs/RadioButtonsInput.js";import"../../form/elements/inputs/SwitchInput.js";import"../../form/elements/inputs/TextAreaInput.js";import"../../form/elements/inputs/TextBoxInput.js";import"../../form/elements/inputs/TimePickerInput.js";import"../../form/elements/RelationshipElement.js";import"../../form/elements/TextElement.js";import"../../chunks/formUtils.js";import"../../chunks/arcgisLayerUrl.js";import"../../layers/support/Subtype.js";import"../../chunks/featureFormUtils.js";import"../FeatureForm/FieldInput.js";import"../FeatureForm/EditableInput.js";import"../FeatureForm/InputBase.js";import"../../chunks/formUtils2.js";import"../../arcade.js";import"../../chunks/TimeOnly.js";import"../../chunks/UnknownTimeZone.js";import"../../chunks/ImmutableArray.js";import"../../layers/FeatureLayer.js";import"../../renderers/ClassBreaksRenderer.js";import"../../renderers/Renderer.js";import"../../renderers/support/AuthoringInfo.js";import"../../renderers/support/AuthoringInfoVisualVariable.js";import"../../chunks/colorRamps.js";import"../../rest/support/AlgorithmicColorRamp.js";import"../../rest/support/ColorRamp.js";import"../../rest/support/MultipartColorRamp.js";import"../../renderers/mixins/VisualVariablesMixin.js";import"../../renderers/visualVariables/ColorVariable.js";import"../../renderers/visualVariables/VisualVariable.js";import"../../renderers/visualVariables/support/ColorStop.js";import"../../renderers/visualVariables/OpacityVariable.js";import"../../renderers/visualVariables/support/OpacityStop.js";import"../../renderers/visualVariables/RotationVariable.js";import"../../renderers/visualVariables/SizeVariable.js";import"../../renderers/visualVariables/support/SizeStop.js";import"../../renderers/support/ClassBreakInfo.js";import"../../chunks/commonProperties.js";import"../../chunks/RendererLegendOptions.js";import"../../renderers/DictionaryRenderer.js";import"../../layers/support/FieldsIndex.js";import"../../chunks/OverrideHelper.js";import"../../chunks/quantizationUtils.js";import"../../renderers/DotDensityRenderer.js";import"../../renderers/support/AttributeColorInfo.js";import"../../renderers/HeatmapRenderer.js";import"../../renderers/support/HeatmapColorStop.js";import"../../chunks/heatmapUtils.js";import"../../renderers/PieChartRenderer.js";import"../../renderers/SimpleRenderer.js";import"../../renderers/UniqueValueRenderer.js";import"../../renderers/support/UniqueValue.js";import"../../renderers/support/UniqueValueClass.js";import"../../renderers/support/UniqueValueGroup.js";import"../../renderers/support/UniqueValueInfo.js";import"../../renderers/support/jsonUtils.js";import"../../chunks/MultiOriginJSONSupport.js";import"../../chunks/layerContainerType.js";import"../../core/workers/workers.js";import"../../core/workers/Connection.js";import"../../core/workers/RemoteClient.js";import"../../chunks/editsZScale.js";import"../../chunks/queryZScale.js";import"../../rest/support/FeatureSet.js";import"../../layers/mixins/APIKeyMixin.js";import"../../chunks/ArcGISService.js";import"../../layers/mixins/CustomParametersMixin.js";import"../../chunks/EditBusLayer.js";import"../../layers/mixins/FeatureEffectLayer.js";import"../../layers/support/FeatureEffect.js";import"../../layers/support/FeatureFilter.js";import"../../layers/mixins/FeatureLayerBase.js";import"../../geometry/HeightModelInfo.js";import"../../chunks/commonProperties2.js";import"../../tables/AttributeTableTemplate.js";import"../../tables/elements/AttributeTableGroupElement.js";import"../../tables/elements/AttributeTableElement.js";import"../../tables/support/elements.js";import"../../tables/elements/AttributeTableAttachmentElement.js";import"../../tables/elements/AttributeTableFieldElement.js";import"../../tables/elements/AttributeTableRelationshipElement.js";import"../../chunks/featureLayerUtils.js";import"../../chunks/featureQueryAll.js";import"../../rest/support/RelationshipQuery.js";import"../../layers/support/GeometryFieldsInfo.js";import"../../layers/support/LayerFloorInfo.js";import"../../layers/support/Relationship.js";import"../../chunks/serviceCapabilitiesUtils.js";import"../../layers/mixins/FeatureReductionLayer.js";import"../../layers/support/AggregateField.js";import"../../layers/support/ExpressionInfo.js";import"../../chunks/FeatureReduction.js";import"../../layers/support/FeatureReductionBinning.js";import"../../layers/support/LabelClass.js";import"../../chunks/labelUtils.js";import"../../layers/support/FeatureReductionCluster.js";import"../../layers/support/FeatureReductionSelection.js";import"../../chunks/clusterUtils.js";import"../../chunks/MD5.js";import"../../layers/mixins/OperationalLayer.js";import"../../layers/mixins/OrderedLayer.js";import"../../chunks/OrderByInfo.js";import"../../layers/mixins/PortalLayer.js";import"../../chunks/portalItemUtils.js";import"../../layers/mixins/PublishableLayer.js";import"../../layers/support/PublishingInfo.js";import"../../layers/mixins/RefreshableLayer.js";import"../../layers/mixins/TemporalLayer.js";import"../../layers/support/TimeInfo.js";import"../../time/TimeInterval.js";import"../../layers/support/FeatureTemplate.js";import"../../layers/support/FeatureType.js";import"../../chunks/fieldProperties.js";import"../../chunks/labelingInfo.js";import"../../chunks/versionUtils.js";import"../../chunks/styleUtils2.js";import"../../support/popupUtils.js";import"../../chunks/AlphaCutoff.js";import"../../chunks/interfaces2.js";import"../FeatureForm/GroupInput.js";import"../FeatureForm/RelationshipInput.js";import"../../chunks/FeatureRelationshipViewModel.js";import"../../chunks/ReactiveSet.js";import"../../views/draw/support/HighlightHelper.js";import"../../chunks/layerUtils2.js";import"../../chunks/layerViewUtils.js";import"./UpdateWorkflowData.js";import"../../chunks/infoFor3D.js";import"../../chunks/ViewingMode.js";import"../FeatureTemplates/TemplateItem.js";import"../FeatureTemplates/TemplateItemGroup.js";import"../../chunks/isSupportedObject.js";import"../../chunks/screenUtils2.js";import"../../chunks/AnchorElementViewModel.js";const x="esri.widgets.Editor.EditorViewModel",D=["create-features","update"];function B(t,e,s){p.getLogger(x).error(new o(t,e,s))}function G(t,e){return t?.find((t=>t.layer===e))}let H=class extends i.EventedAccessor{constructor(t){super(t),this._sketchEventListenerHandle=null,this._sketchGraphicsLayer=new I({listMode:"hide",internal:!0}),this._snappingManager=null,this._updateItemsTask=null,this._updatingHandles=new v,this._featureTemplatesViewModelLocked=!1,this.activeWorkflow=null,this._activityQueue=new s,this.editorItems=new s,this.failures=[],this.hideTemplatesForInactiveLayers=!1,this.attachmentsViewModel=new E({capabilities:{editing:!0}}),this.featureTemplatesViewModel=new O({disabledItemFunction:({layer:t})=>this._itemIsSuspended(t)}),this.layerInfos=null,this.ownSketchViewModel=new P({layer:this._sketchGraphicsLayer}),this.sketchOptions=new C,this.snappingOptions=new M({attributeRulesEnabled:!0}),this.spinnerViewModel=new R,this.pageStack=[],this.showDiscardEditsPrompt=()=>Promise.resolve(!0),this._candidateCommitted=!1,this.back=async()=>{this.canGoBack&&(this.activeWorkflow?.hasPreviousStep?await this.activeWorkflow.back(this.showDiscardEditsPrompt):await this._cancelWorkflow({force:!this.hasPendingEdits}))},this.saveWorkflow=async()=>{const{featureFormViewModel:t}=this;if(t){if(t.submit(),!t.submittable||t.hasPendingSubtypeChoice)return;const e=t.getValues();if(t.validateContingencyConstraints(e,{includeIncompleteViolations:!0}).length>0)return}await(this.activeWorkflow?.save())},this.selectFeature=(t,e=!1)=>{const s=this.activeWorkflow;this._candidateCommitted||"update"!==s?.type||(s.data.rootFeature=t,e&&(s.next(),this._candidateCommitted=!0))}}initialize(){this.addHandles([h((()=>{const t=this.view,e=t?.map?.editableLayers,s=t?.allLayerViews,r=s?.filter((t=>!!e?.includes(t.layer)));return[e,r,this.layerInfos,this.allowedWorkflows]}),(()=>this._updateEditorItems()),k),h((()=>this.hideTemplatesForInactiveLayers),(()=>this.syncFeatureTemplates())),d((()=>this.activeWorkflow),"cancel",(()=>this.emit("workflow-cancel"))),d((()=>this.activeWorkflow),"commit",(()=>this.emit("workflow-commit"))),d((()=>this.activeWorkflow),"complete",(()=>{this.emit("workflow-commit"),this._set("activeWorkflow",null)})),j((()=>this.view?.map),(t=>t.add(this._sketchGraphicsLayer)),f),d((()=>this.editorItems),"change",(()=>this._afterEditorItemsChange())),h((()=>[this.canCreate,this.canUpdateVisible]),(()=>this._afterEditorItemsChange())),h((()=>this.page),((t,e)=>{const s=[...this.pageStack];if(-1===s.indexOf(t))s.push(t);else for(;s.length&&s.at(-1)!==t;)s.pop();this.pageStack=s}),k),j((()=>"awaiting-update-feature-candidate"===this.state),(()=>this._candidateCommitted=!1)),d((()=>this.featureTemplatesViewModel),"select",(async({item:t,oldItem:e})=>{const{activeWorkflow:s}=this;if(s){if("update"===s.type&&"awaiting-feature-creation-info"===s.activeWorkflow?.stepId)return;try{await this.cancelWorkflow({force:!this.hasPendingEdits})}catch{return void this.featureTemplatesViewModel.select(e,{emit:!1})}}if(!t)return;const r={layer:t.layer,template:t.template};if(t.supportsUpload)return this.featureTemplatesViewModel.select(e,{emit:!1}),this.startCreateFeaturesWorkflow(r);this.startCreateFeaturesWorkflowAtFeatureCreation(r)})),d((()=>this.view),"key-down",(t=>{"Escape"===t.key&&this.activeWorkflow?.keyboardCancellationEnabled&&(t.stopPropagation(),this.back())})),d((()=>this.sketchViewModel),["create","delete","update"],(t=>{const{activeWorkflow:e}=this,s="update"===e?.type,r=s?e.activeWorkflow?.layer:e?.layer,o=s?e?.activeWorkflow?.parentLayer:void 0,i=`sketch-${t.type}`;this.emit(i,{type:i,detail:t,layer:r,parentLayer:o})}),w),h((()=>this.view),(t=>{if(this._snappingManager=m(this._snappingManager),!t)return;const e=this.snappingOptions;this._snappingManager=new W({view:t,options:e}),this.ownSketchViewModel.snappingManager=this._snappingManager}),k),h((()=>this.snappingOptions),(t=>{this._snappingManager&&(this._snappingManager.options=t)}),k)])}destroy(){this._cancelWorkflow({warnIfNoWorkflow:!1}).then((()=>{this.view?.map?.remove(this._sketchGraphicsLayer),this.view=null})),this._updateItemsTask=n(this._updateItemsTask),this._updatingHandles.destroy(),this._sketchEventListenerHandle=l(this._sketchEventListenerHandle)}get allowedWorkflows(){return this._get("allowedWorkflows")}set allowedWorkflows(t){r(p.getLogger(this),"allowedWorkflows",{replacement:"Editor.visibleElements",version:"4.29",warnOnce:!0}),t&&0!==t.length||(t=[...D]),this._set("allowedWorkflows",t)}get canCreate(){return this.editorItems.some((t=>t.supportsCreateFeaturesWorkflow))}get canCreateVisible(){return!!this.featureTemplatesLayers.length}get canUpdate(){return this.editorItems.some((t=>t.supportsUpdateWorkflow))}get canUpdateVisible(){return this.editorItems.some((t=>t.supportsUpdateWorkflow&&t.visible))}get featureTemplatesLayers(){const t=new s;for(const e of this.editorItems){const s=e.supportsCreateFeaturesWorkflow&&!e.isTable,r=this.hideTemplatesForInactiveLayers&&!e.visible;s&&!r&&t.push(e.layer)}return t}get editableItems(){return r(p.getLogger(this),"editableItems",{replacement:"editorItems",version:"4.29",warnOnce:!0}),this.editorItems.map((t=>{const{capabilities:e,disabled:s,hasInvalidFormTemplate:r,layer:o}=t,i=[],a=e.create,p=e.update,n=e.delete;return a.enabled&&i.push("create"),p.enabled&&i.push("update"),n.enabled&&i.push("delete"),{layer:o,supports:i,suspended:s,attributeUpdatesEnabled:p.attributes,geometryUpdatesEnabled:p.geometry,attachmentsOnCreateEnabled:a.attachments.enabled,attachmentsOnUpdateEnabled:p.attachments.enabled,hasInvalidFormTemplate:r,hasAttachments:e.attachments.enabled}}))}get featureFormViewModel(){const{activeWorkflow:t}=this;return"update"===t?.type?t.activeFeatureFormViewModel:"create-features"===t?.type?t.featureFormViewModel:null}get labelOptions(){return this.sketchOptions.labels}set labelOptions(t){this.sketchOptions.labels=t}get sketchViewModel(){const{activeWorkflow:t}=this;return"update"===t?.type?t.activeSketchViewModel:"create-features"===t?.type?t.sketchViewModel:this.ownSketchViewModel}get state(){if(!this.view?.ready)return"disabled";const t=this.attachmentsViewModel.mode;if("add"===t)return"adding-attachment";if("edit"===t)return"editing-attachment";const{activeWorkflow:e}=this;return e?.stepId?"update"===e.type&&e.activeWorkflow?.stepId?e.activeWorkflow.stepId:e.stepId:"ready"}get syncing(){return this._activityQueue.length>0}get updating(){return this._updatingHandles.updating||!0===this.activeWorkflow?.updating}get tooltipOptions(){return this.sketchOptions.tooltips}set tooltipOptions(t){this.sketchOptions.tooltips=t}get valueOptions(){return this.sketchOptions.values}set valueOptions(t){this.sketchOptions.values=t}set view(t){this.ownSketchViewModel.view=t,this.spinnerViewModel.view=t,this._set("view",t)}get page(){const{activeWorkflow:t,state:e}=this;if("update"===t?.type&&"awaiting-feature-to-update"===t.stepId)return"ready";if("create-features"===t?.type&&0===t.numPendingFeatures){const e=t.data.upload;if(e)return"default"===e.state?"ready":"creating-features-upload-details"}return e??"disabled"}get featureFormDisabled(){const{activeWorkflow:t}=this;return"update"===t?.type&&!1===t.activeEditorItem?.capabilities.update.attributes}get canGoBack(){return null!=this.activeWorkflow&&!this.syncing}get shouldShowDeleteButton(){const{activeWorkflow:t}=this;return!!t&&"update"===t.type&&!!t.activeEditorItem?.capabilities.delete.enabled}get hasPendingEdits(){return this.activeWorkflow?.hasPendingEdits??!1}get snappingManager(){return this._snappingManager}async startCreateFeaturesWorkflowAtFeatureTypeSelection(){return this.startCreateFeaturesWorkflow()}async startCreateFeaturesWorkflowAtFeatureCreation(t){return this.startCreateFeaturesWorkflow(t,"creating-features")}async startCreateFeaturesWorkflow(t,e="awaiting-feature-creation-info"){if(await y((()=>!this.updating)),!this.canCreate)throw new o("editing:unsupported-workflow","Creating features is unsupported or disabled.");const s=this._createUpdatingResolver();try{await this._cancelWorkflow();const s=this._createCreateFeaturesWorkflow(t,e);this._set("activeWorkflow",s),await s.start()}catch(t){this._logErrorAndCancelWorkflow(t)}finally{s.resolve()}}async startCreateFeaturesWorkflowAtFeatureEdit(t){await y((()=>!this.updating));const e=this._createUpdatingResolver();try{const{initialFeature:e}=t,s=e.sourceLayer=e.layer,r=s?this.findEditorItemForLayer(s):void 0;if(!r?.supportsCreateFeaturesWorkflow)throw new o("editing:unsupported-workflow","Creating features is unsupported or disabled for this layer.");await this._cancelWorkflow();const i=this._createCreateFeaturesWorkflow({initialFeature:e,layer:r.layer,maxFeatures:1},"creating-features");this._set("activeWorkflow",i),await i.start()}catch(t){this._logErrorAndCancelWorkflow(t)}finally{e.resolve()}}async startUpdateWorkflowAtFeatureSelection(){if(await y((()=>!this.updating)),!this.canUpdate)return void B("editing:unsupported-workflow","Update workflow is unsupported or disabled.");const t=this._createUpdatingResolver();try{await this._cancelWorkflow();const t=this._createUpdateWorkflow();this._set("activeWorkflow",t),await t.start()}catch(t){this._logErrorAndCancelWorkflow(t)}finally{t.resolve()}}async startUpdateWorkflowAtMultipleFeatureSelection(t){if(await y((()=>!this.updating)),!this.canUpdate)return void B("editing:unsupported-workflow","Update workflow is unsupported or disabled.");const e=this._createUpdatingResolver();try{await this._cancelWorkflow();const e=this._createUpdateWorkflow("awaiting-update-feature-candidate");e.data.candidates=t,this._set("activeWorkflow",e),await e.start()}catch(t){this._logErrorAndCancelWorkflow(t)}finally{e.resolve()}}async startUpdateWorkflowAtFeatureEdit(t){if(await y((()=>!this.updating)),!this.canUpdate)return void B("editing:unsupported-workflow","Update workflow is unsupported or disabled.");const e=this._createUpdatingResolver();try{await this._cancelWorkflow();const e=this._createUpdateWorkflow("editing-existing-feature");e.data.rootFeature=t,this._set("activeWorkflow",e),await e.start()}catch(t){this._logErrorAndCancelWorkflow(t)}finally{e.resolve()}}async deleteFeatureFromWorkflow(){const{activeWorkflow:t}=this;t&&"update"===t.type?await t.deleteActiveFeature():B("editing:unsupported-workflow","Deleting requires an active update workflow.")}async cancelWorkflow(t){return this._cancelWorkflow({warnIfNoWorkflow:!0,...t})}findEditorItemForLayer(t){return this.editorItems.find((e=>e.layer===t))}itemHasInvalidFormTemplate(t){return null!=t&&!0===this.findEditorItemForLayer(t.layer)?.hasInvalidFormTemplate}syncFeatureTemplates(){this._featureTemplatesViewModelLocked||(this.featureTemplatesViewModel.layers=this.featureTemplatesLayers.toArray())}async toggleUpdateWorkflow(){this.canUpdate&&(this.hasPendingEdits&&!await this.showDiscardEditsPrompt()||(this.activeWorkflow&&"awaiting-feature-to-update"===this.state?await this.cancelWorkflow({force:!0}):await this.startUpdateWorkflowAtFeatureSelection()))}lockFeatureTemplatesViewModel(){return this._featureTemplatesViewModelLocked=!0,a((()=>{this._featureTemplatesViewModelLocked=!1,this.syncFeatureTemplates()}))}async _getEditorItemCandidates(t){const{view:e}=this;if(!e?.map)return[];const{map:s}=e,r=s.editableLayers.toArray()??[],o=s.allTables.toArray().filter(F)??[];return await Promise.allSettled([...r.map((t=>"subtype-group"===t.type?t.loadAll():Promise.resolve())),...o.map((t=>t.load()))]),u(t),[...r.reverse(),...o.reverse()].filter((t=>U(t)&&("mesh"!==t.geometryType||"3d"===e.type))).flatMap((t=>"subtype-group"===t.type?t.sublayers.toArray():t))}_drainEditorItems(){this.editorItems.drain((t=>t.destroy()))}async _updateEditorItems(){n(this._updateItemsTask);const{view:t}=this,s=e((async e=>{if(!t?.map||!t?.allLayerViews)return;const s=await this._getEditorItemCandidates(e);if(!s.length)return void this._drainEditorItems();const r=[],o=[],i=[],{layerInfos:a}=this;for(const e of s){const s=G(a,e),p=await T(t,e).catch((()=>null));(s?r:p?o:i).push(new A({layer:e,layerInfo:s,layerView:p}))}a?.length&&r.sort(((t,e)=>a.findIndex((({layer:e})=>e===t.layer))-a.findIndex((({layer:t})=>t===e.layer))));const p=[...r,...o,...i];e.aborted||(this._drainEditorItems(),this.editorItems.addMany(p))}));this._updatingHandles.addPromise(s.promise),this._updateItemsTask=s}_afterEditorItemsChange(){const{activeWorkflow:t}=this;if(this.syncFeatureTemplates(),!t)return;const{stepId:e}=t;"create-features"!==t.type?"update"===t.type&&("awaiting-feature-to-update"===e&&!this.canUpdateVisible||"awaiting-update-feature-candidate"===e&&!t.hasUpdatableCandidates)&&this._cancelWorkflow():"awaiting-feature-creation-info"!==e||this.canCreate||this._cancelWorkflow()}async _cancelWorkflow(t){const e=this.activeWorkflow;if(e)return t&&!1===t.force?(await e.cancel(t),void this._set("activeWorkflow",null)):(this.emit("workflow-cancel"),this._set("activeWorkflow",null),void await e.cancel(t));t?.warnIfNoWorkflow&&B("editing:no-active-workflow","There is no active workflow to cancel.")}_createCreateFeaturesWorkflow(t,e){return V.create({viewModel:this,creationInfo:t,sketchOptions:this.sketchOptions,snappingManager:this._snappingManager,startAt:e,applyEditsCallback:(t,e,s)=>this._applyEdits(t,e,s),addAttachmentsCallback:(t,e)=>this._addAttachments(t,e)})}_createUpdateWorkflow(t){return L.create({viewModel:this,sketchOptions:this.sketchOptions,snappingManager:this._snappingManager,startAt:t,applyEditsCallback:(t,e,s)=>this._applyEdits(t,e,s),addAttachmentsCallback:(t,e)=>this._addAttachments(t,e)})}_addAttachments(t,e){const s=e.map((e=>this._addAttachment(t,e.feature,e.attachment)))??[];return Promise.all(s)}async _addAttachment(t,e,s){let r=null;if(!("addAttachment"in t)||null==t.capabilities?.attachment)throw new o("editor:attachments-not-supported","Adding attachments is not supported for this layer type");return await this._queueOperation((async()=>(r=await(t.addAttachment?.(e,s).catch((t=>{throw t?.error||t})))??null,r))),r}async _applyEdits(t,e,s){let r=null;const o=t.url?await S(t.url):null,i={returnServiceEditsOption:o&&_(o)||RegExp("/hosted/","i").test(t.url)?void 0:"original-and-current-features",...s};return await this._queueOperation((async()=>{const{view:s}=this;if(!s)return null;const o=await T(s,t).catch((()=>null));return r=await t.applyEdits(e,i),o&&await y((()=>!o.updating)),r})),r}_queueOperation(t){this._activityQueue.push(t);const e=(t,e)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)};return t().then((t=>{if(null!=t&&"error"in t&&null!=t.error)throw t.error;if(null!=t&&"addFeatureResults"in t){const{addFeatureResults:e,deleteFeatureResults:s,updateFeatureResults:r}=t,o=e.find((t=>!!t.error))||r.find((t=>!!t.error))||s.find((t=>!!t.error));if(o)throw o.error}return t})).catch((s=>{B("editing:operation-error","An error occurred.",{error:s});const r={error:s,retry:()=>(e(r,this.failures),this._queueOperation(t)),cancel:()=>{e(r,this.failures)}};this._set("failures",[...this.failures,r])})).then((()=>{e(t,this._activityQueue)}))}_createUpdatingResolver(){const t=c();return this._updatingHandles.addPromise(t.promise),t}_logErrorAndCancelWorkflow(t){const{name:e,message:s,details:r}=t;B(e??"editing:workflow-start-failed",s??void 0,r??t),this._cancelWorkflow({force:!0})}_itemIsSuspended(t){const e=this.findEditorItemForLayer(t);return null!=e&&(!e.visible||e.disabled)}};t([g()],H.prototype,"_snappingManager",void 0),t([g({readOnly:!0})],H.prototype,"activeWorkflow",void 0),t([g({readOnly:!0})],H.prototype,"_activityQueue",void 0),t([g({value:[...D]})],H.prototype,"allowedWorkflows",null),t([g({readOnly:!0})],H.prototype,"canCreate",null),t([g()],H.prototype,"canCreateVisible",null),t([g({readOnly:!0})],H.prototype,"canUpdate",null),t([g()],H.prototype,"canUpdateVisible",null),t([g()],H.prototype,"featureTemplatesLayers",null),t([g()],H.prototype,"editableItems",null),t([g()],H.prototype,"editorItems",void 0),t([g({readOnly:!0})],H.prototype,"failures",void 0),t([g()],H.prototype,"hideTemplatesForInactiveLayers",void 0),t([g()],H.prototype,"attachmentsViewModel",void 0),t([g()],H.prototype,"featureFormViewModel",null),t([g()],H.prototype,"featureTemplatesViewModel",void 0),t([g()],H.prototype,"labelOptions",null),t([g()],H.prototype,"layerInfos",void 0),t([g()],H.prototype,"ownSketchViewModel",void 0),t([g()],H.prototype,"sketchOptions",void 0),t([g()],H.prototype,"sketchViewModel",null),t([g({type:M,nonNullable:!0})],H.prototype,"snappingOptions",void 0),t([g()],H.prototype,"spinnerViewModel",void 0),t([g()],H.prototype,"state",null),t([g({readOnly:!0})],H.prototype,"syncing",null),t([g()],H.prototype,"updating",null),t([g()],H.prototype,"tooltipOptions",null),t([g()],H.prototype,"valueOptions",null),t([g()],H.prototype,"view",null),t([g()],H.prototype,"pageStack",void 0),t([g()],H.prototype,"showDiscardEditsPrompt",void 0),t([g()],H.prototype,"_candidateCommitted",void 0),t([g()],H.prototype,"page",null),t([g()],H.prototype,"featureFormDisabled",null),t([g()],H.prototype,"canGoBack",null),t([g()],H.prototype,"shouldShowDeleteButton",null),t([g()],H.prototype,"hasPendingEdits",null),t([g()],H.prototype,"snappingManager",null),H=t([b(x)],H);const q=H;export{q as default};

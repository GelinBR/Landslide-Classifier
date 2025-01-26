/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../core/Error.js";import{clone as o}from"../core/lang.js";import{s as r}from"../config.js";import{property as i}from"../core/accessorSupport/decorators/property.js";import"../chunks/Logger.js";import{subclass as s}from"../core/accessorSupport/decorators/subclass.js";import n from"./FeatureLayer.js";import{useViewTimeProperty as p}from"./mixins/TemporalLayer.js";import{J as m}from"../chunks/jsonMap.js";import{ClonableMixin as a}from"../core/Clonable.js";import{JSONSupportMixin as l}from"../core/JSONSupport.js";import u from"../core/Accessor.js";import{m as c}from"../chunks/unitUtils.js";import{a as j,C as y,E as h}from"../chunks/ElevationSourceDefinitions.js";import d from"../time/TimeExtent.js";import{S as f}from"../chunks/interfaces2.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../chunks/tracking.js";import"../PopupTemplate.js";import"../core/Collection.js";import"../core/Evented.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/mathUtils.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/content/UtilityNetworkAssociationsContent.js";import"../popup/support/UtilityNetworkAssociationType.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/screenUtils.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../chunks/vec3f64.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/sizeVariableUtils.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../chunks/layerUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/RendererLegendOptions.js";import"../renderers/DictionaryRenderer.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"../chunks/Version2.js";import"./support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../chunks/OverrideHelper.js";import"../chunks/colorUtils2.js";import"../chunks/vec4.js";import"../chunks/common.js";import"../chunks/vec4f64.js";import"../chunks/utils7.js";import"../chunks/enums2.js";import"../chunks/quantizationUtils.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/MultiOriginJSONSupport.js";import"../chunks/layerContainerType.js";import"../form/FormTemplate.js";import"../form/ExpressionInfo.js";import"../form/elements/GroupElement.js";import"../form/elements/Element.js";import"../form/support/elements.js";import"../form/elements/AttachmentElement.js";import"../form/elements/inputs/attachments/AttachmentInput.js";import"../chunks/Input.js";import"../form/elements/inputs/attachments/support/inputs.js";import"../form/elements/inputs/attachments/AudioInput.js";import"../chunks/utils8.js";import"../form/elements/inputs/attachments/DocumentInput.js";import"../form/elements/inputs/attachments/ImageInput.js";import"../form/elements/inputs/attachments/SignatureInput.js";import"../form/elements/inputs/attachments/VideoInput.js";import"../form/elements/FieldElement.js";import"../form/elements/support/inputs.js";import"../form/elements/inputs/BarcodeScannerInput.js";import"../form/elements/inputs/TextInput.js";import"../form/elements/inputs/Input.js";import"../form/elements/inputs/ComboBoxInput.js";import"../form/elements/inputs/DatePickerInput.js";import"../form/elements/inputs/DateTimeOffsetPickerInput.js";import"../form/elements/inputs/DateTimePickerInput.js";import"../form/elements/inputs/RadioButtonsInput.js";import"../form/elements/inputs/SwitchInput.js";import"../form/elements/inputs/TextAreaInput.js";import"../form/elements/inputs/TextBoxInput.js";import"../form/elements/inputs/TimePickerInput.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../form/elements/RelationshipElement.js";import"../form/elements/TextElement.js";import"../chunks/formUtils.js";import"./Layer.js";import"../chunks/timeUtils.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"../chunks/Queue.js";import"../core/workers/RemoteClient.js";import"../chunks/editsZScale.js";import"../chunks/queryZScale.js";import"../chunks/zscale.js";import"../rest/support/FeatureSet.js";import"./support/Field.js";import"../chunks/fieldType.js";import"./mixins/APIKeyMixin.js";import"../chunks/ArcGISService.js";import"../chunks/arcgisLayerUrl.js";import"./mixins/BlendLayer.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/utils2.js";import"../chunks/mat4.js";import"./mixins/CustomParametersMixin.js";import"../chunks/EditBusLayer.js";import"../chunks/uuid.js";import"./mixins/FeatureEffectLayer.js";import"./support/FeatureEffect.js";import"./support/FeatureFilter.js";import"../rest/support/Query.js";import"../chunks/DataLayerSource.js";import"../chunks/FullTextSearch.js";import"../chunks/spatialRelationships.js";import"../rest/support/StatisticDefinition.js";import"./mixins/FeatureLayerBase.js";import"../geometry/HeightModelInfo.js";import"../chunks/commonProperties2.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../tables/AttributeTableTemplate.js";import"../tables/elements/AttributeTableGroupElement.js";import"../tables/elements/AttributeTableElement.js";import"../tables/support/elements.js";import"../tables/elements/AttributeTableAttachmentElement.js";import"../tables/elements/AttributeTableFieldElement.js";import"../tables/elements/AttributeTableRelationshipElement.js";import"../chunks/featureLayerUtils.js";import"../chunks/featureQueryAll.js";import"../rest/support/AttachmentQuery.js";import"../rest/support/RelationshipQuery.js";import"./support/GeometryFieldsInfo.js";import"./support/LayerFloorInfo.js";import"./support/Relationship.js";import"../chunks/serviceCapabilitiesUtils.js";import"./support/Subtype.js";import"./mixins/FeatureReductionLayer.js";import"./support/AggregateField.js";import"./support/ExpressionInfo.js";import"../chunks/FeatureReduction.js";import"./support/FeatureReductionBinning.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"./support/FeatureReductionCluster.js";import"./support/FeatureReductionSelection.js";import"../chunks/clusterUtils.js";import"../chunks/MD5.js";import"./mixins/OperationalLayer.js";import"./mixins/OrderedLayer.js";import"../chunks/OrderByInfo.js";import"./mixins/PortalLayer.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./mixins/PublishableLayer.js";import"./support/PublishingInfo.js";import"./mixins/RefreshableLayer.js";import"./mixins/ScaleRangeLayer.js";import"./support/FeatureTemplate.js";import"./support/FeatureType.js";import"../chunks/fieldProperties.js";import"../chunks/labelingInfo.js";import"./support/TimeInfo.js";import"../time/TimeInterval.js";import"../chunks/versionUtils.js";import"../chunks/styleUtils2.js";import"../support/popupUtils.js";import"../chunks/AlphaCutoff.js";let b=class extends u{set horizontalWKID(t){t?c({wkid:+t})?this._set("horizontalWKID",+t):this._set("horizontalWKID",t):this._set("horizontalWKID",null)}set verticalWKID(t){t?this._set("verticalWKID",isFinite(t)&&c({wkid:+t})?+t:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:t,focalLength:e,principalOffsetPoint:o,radialDistortionCoefficients:r,tangentialDistortionCoefficients:i}=this;return t?.length>1&&!Number.isNaN(e)&&o?.length>1&&r?.length>1&&i?.length>1}};t([i({json:{write:!0}})],b.prototype,"affineTransformations",void 0),t([i({json:{write:!0}})],b.prototype,"focalLength",void 0),t([i({json:{write:!0}})],b.prototype,"principalOffsetPoint",void 0),t([i({json:{write:!0}})],b.prototype,"radialDistortionCoefficients",void 0),t([i({json:{write:!0}})],b.prototype,"tangentialDistortionCoefficients",void 0),t([i({json:{write:!0}})],b.prototype,"horizontalWKID",null),t([i({json:{write:!0}})],b.prototype,"verticalWKID",null),t([i({json:{write:!0}})],b.prototype,"x",void 0),t([i({json:{write:!0}})],b.prototype,"y",void 0),t([i({json:{write:!0}})],b.prototype,"z",void 0),t([i({json:{write:!0}})],b.prototype,"type",void 0),b=t([s("esri.layers.orientedImagery.core.CameraOrientation")],b);const g=b;let v=class extends(a(l(g))){constructor(){super(...arguments),this.type=1}toString(){const{type:t,horizontalWKID:e,verticalWKID:o,x:r,y:i,z:s,heading:n,pitch:p,roll:m,affineTransformations:a,focalLength:l,principalOffsetPoint:u,radialDistortionCoefficients:c,tangentialDistortionCoefficients:j}=this,y=[t,e,o,r,i,s,n,p,m];return this.isAdvanced&&(a?.forEach((t=>y.push(t))),y.push(l),u?.forEach((t=>y.push(t))),c?.forEach((t=>y.push(t))),j?.forEach((t=>y.push(t)))),y.map((t=>Number.isNaN(t)?"":t)).join("|")}};t([i({json:{write:!0}})],v.prototype,"type",void 0),t([i({type:[Number],json:{write:!0}})],v.prototype,"affineTransformations",void 0),t([i({type:Number,json:{write:!0}})],v.prototype,"focalLength",void 0),t([i({type:[Number],json:{write:!0}})],v.prototype,"principalOffsetPoint",void 0),t([i({type:[Number],json:{write:!0}})],v.prototype,"radialDistortionCoefficients",void 0),t([i({type:[Number],json:{write:!0}})],v.prototype,"tangentialDistortionCoefficients",void 0),t([i({type:Number,json:{write:!0}})],v.prototype,"heading",void 0),t([i({type:Number,json:{write:!0}})],v.prototype,"pitch",void 0),t([i({type:Number,json:{write:!0}})],v.prototype,"roll",void 0),t([i({type:Number,json:{write:!0}})],v.prototype,"x",void 0),t([i({type:Number,json:{write:!0}})],v.prototype,"y",void 0),t([i({type:Number,json:{write:!0}})],v.prototype,"z",void 0),v=t([s("esri.layers.orientedImagery.core.CameraOrientationHPR")],v);const k=v;let P=class extends(a(l(g))){constructor(){super(...arguments),this.type=4}toString(){const{type:t,latitude:e,longitude:o,ellipsoidRadius:r,squaredEccentricity:i,properties:s}=this,n=`${s}`.split("|");return n.splice(1,1),`${t}|${e}|${o}|${r}|${i}|${n.join("|")}`}};t([i({json:{write:!0}})],P.prototype,"type",void 0),t([i({json:{write:!0},type:Number})],P.prototype,"latitude",void 0),t([i({json:{write:!0},type:Number})],P.prototype,"longitude",void 0),t([i({json:{write:!0},type:Number})],P.prototype,"ellipsoidRadius",void 0),t([i({json:{write:!0},type:Number})],P.prototype,"squaredEccentricity",void 0),t([i({json:{write:!0}})],P.prototype,"properties",void 0),P=t([s("esri.layers.orientedImagery.core.CameraOrientationLTP")],P);const S=P;let I=class extends(a(l(g))){constructor(){super(...arguments),this.type=2}toString(){const{type:t,horizontalWKID:e,verticalWKID:o,x:r,y:i,z:s,omega:n,phi:p,kappa:m,affineTransformations:a,focalLength:l,principalOffsetPoint:u,radialDistortionCoefficients:c,tangentialDistortionCoefficients:j}=this,y=[t,e,o,r,i,s,n,p,m];return this.isAdvanced&&(a?.forEach((t=>y.push(t))),y.push(l),u?.forEach((t=>y.push(t))),c?.forEach((t=>y.push(t))),j?.forEach((t=>y.push(t)))),y.map((t=>isNaN(t)?"":t)).join("|")}};t([i({json:{write:!0}})],I.prototype,"type",void 0),t([i({type:[Number],json:{write:!0}})],I.prototype,"affineTransformations",void 0),t([i({type:Number,json:{write:!0}})],I.prototype,"focalLength",void 0),t([i({type:[Number],json:{write:!0}})],I.prototype,"principalOffsetPoint",void 0),t([i({type:[Number],json:{write:!0}})],I.prototype,"radialDistortionCoefficients",void 0),t([i({type:[Number],json:{write:!0}})],I.prototype,"tangentialDistortionCoefficients",void 0),t([i({type:Number,json:{write:!0}})],I.prototype,"omega",void 0),t([i({type:Number,json:{write:!0}})],I.prototype,"phi",void 0),t([i({type:Number,json:{write:!0}})],I.prototype,"kappa",void 0),t([i({type:Number,json:{write:!0}})],I.prototype,"x",void 0),t([i({type:Number,json:{write:!0}})],I.prototype,"y",void 0),t([i({type:Number,json:{write:!0}})],I.prototype,"z",void 0),I=t([s("esri.layers.orientedImagery.core.CameraOrientationOPK")],I);const w=I;let x=class extends(a(l(g))){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:t,focalLength:e,principalOffsetPoint:o,radialDistortionCoefficients:r,tangentialDistortionCoefficients:i}=this;return t?.length>1||!Number.isNaN(e)||o?.length>1||r?.length>1||i?.length>1}toString(){const{type:t,horizontalWKID:e,verticalWKID:o,x:r,y:i,z:s,yaw:n,pitch:p,roll:m,affineTransformations:a,focalLength:l,principalOffsetPoint:u,radialDistortionCoefficients:c,tangentialDistortionCoefficients:j}=this,y=[t,e,o,r,i,s,n,p,m];return this.isAdvanced&&(a?.forEach((t=>y.push(t))),y.push(l),u?.forEach((t=>y.push(t))),u?.forEach((t=>y.push(t))),c?.forEach((t=>y.push(t))),j?.forEach((t=>y.push(t)))),y.map((t=>Number.isNaN(t)?"":t)).join("|")}};t([i({json:{write:!0}})],x.prototype,"type",void 0),t([i({type:[Number],json:{write:!0}})],x.prototype,"affineTransformations",void 0),t([i({type:Number,json:{write:!0}})],x.prototype,"focalLength",void 0),t([i({type:[Number],json:{write:!0}})],x.prototype,"principalOffsetPoint",void 0),t([i({type:[Number],json:{write:!0}})],x.prototype,"radialDistortionCoefficients",void 0),t([i({type:[Number],json:{write:!0}})],x.prototype,"tangentialDistortionCoefficients",void 0),t([i({type:Number,json:{write:!0}})],x.prototype,"yaw",void 0),t([i({type:Number,json:{write:!0}})],x.prototype,"pitch",void 0),t([i({type:Number,json:{write:!0}})],x.prototype,"roll",void 0),t([i({type:Number,json:{write:!0}})],x.prototype,"x",void 0),t([i({type:Number,json:{write:!0}})],x.prototype,"y",void 0),t([i({type:Number,json:{write:!0}})],x.prototype,"z",void 0),x=t([s("esri.layers.orientedImagery.core.CameraOrientationYPR")],x);const D=x;var C;!function(t){t[t.HPR=1]="HPR",t[t.OPK=2]="OPK",t[t.YPR=3]="YPR",t[t.LTP=4]="LTP"}(C||(C={}));const U=new Map;function N(t,e,o){return e&&(t=`${e}${t}`),o&&(t+=`${o}`),t}function L(t,e,o){return t?j(t)?new y(t):function(t,e,o){let{url:r}=t;return r?(r=N(r,e,o),new h({...t,url:r})):null}(t,e,o):t}U.set(`${C.OPK}`,{desc:"Using Omega Phi Kappa",constructor:w}),U.set(`${C.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:k}),U.set(`${C.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:D}),U.set(`${C.LTP}`,{desc:"Using Local Tangent Plane",constructor:S});const T=new m({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),O=new m({Feet:"feet",Meter:"meter"}),R=new m({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),E=new Map;E.set(`${C.HPR}`,(function(t){const[e,o,r,i,s,n,p,m,a,l,u,c,j,y,h,d,f,b,g,v,k,P]=t.slice(1);return{horizontalWKID:e,verticalWKID:o,x:r,y:i,z:s,heading:n,pitch:p,roll:m,...M([a,l,u,c,j,y],[d,f],[b,g,v],[k,P],h)}})),E.set(`${C.YPR}`,(function(t){const[e,o,r,i,s,n,p,m,a,l,u,c,j,y,h,d,f,b,g,v,k,P]=t.slice(1);return{horizontalWKID:e,verticalWKID:o,x:r,y:i,z:s,yaw:n,pitch:p,roll:m,...M([a,l,u,c,j,y],[d,f],[b,g,v],[k,P],h)}})),E.set(`${C.OPK}`,(function(t){const[e,o,r,i,s,n,p,m,a,l,u,c,j,y,h,d,f,b,g,v,k,P]=t.slice(1);return{horizontalWKID:e,verticalWKID:o,x:r,y:i,z:s,omega:n,phi:p,kappa:m,...M([a,l,u,c,j,y],[d,f],[b,g,v],[k,P],h)}})),E.set(`${C.LTP}`,(function(t){const[e,o,r,i,s,...n]=t.slice(1),p=E.get(s),m=U.get(s)?.constructor;return p&&m?{latitude:e,longitude:o,ellipsoidRadius:r,squaredEccentricity:i,properties:new m(p([s,"",...n]))}:null}));const V=t=>{const e=t.map((t=>parseFloat(t))).filter((t=>!isNaN(t)));if(e.length===t.length)return e};function M(t,e,o,r,i){const s=V(t),n=V(e),p=V(o),m=V(r);return{affineTransformations:6===s?.length?s:void 0,focalLength:6===s?.length?parseFloat(i):void 0,principalOffsetPoint:2!==n?.length?[0,0]:n,radialDistortionCoefficients:3!==p?.length?[0,0,0]:p,tangentialDistortionCoefficients:2!==m?.length?[0,0]:m}}function F(t){if(!t)return null;const e=`${t}`.split("|");if(0===e.length)return null;const o=U.get(e[0]);if(!o)return null;const r=E.get(e[0]);return r?new(0,o.constructor)(r(e)):null}const A=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),z=(t,e)=>!A.has(e)&&t;function K(t,e,o,r){const{name:i,write:s,read:n}=((t,e,o)=>{const r=`orientedImageryProperties.${t}`;return{name:r,write:e?{ignoreOrigin:!0,target:r,writer:e}:{ignoreOrigin:!0},read:o?{ignoreOrigin:!0,source:r,reader:o}:{ignoreOrigin:!0}}})(t,e,o),p={name:i,write:s,read:n,origins:{service:{name:`orientedImageryInfo.${i}`,write:e,read:o},"web-scene":{name:i,write:z(s,t),read:z(n,t)},"web-map":{name:i,write:s,read:n}}};return r&&p.origins?(p.type=r,p.origins["web-map"].type=r,p.origins["web-scene"].type=r,p):p}let W=class extends n{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:t,demPathPrefix:e,demPathSuffix:o}=this;return L(t,e,o)}async save(t){return this._debouncedSaveOperations(f.SAVE,t)}async saveAs(t,e){return this._debouncedSaveOperations(f.SAVE_AS,e,t)}findFirstValidLayerId(t){return t.layers?.find((t=>this.supportedSourceTypes.has(t.type)))?.id}_verifySource(){if(super._verifySource(),"point"!==this.geometryType)throw new e("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};var $;t([i({type:Number,json:K("cameraHeading")})],W.prototype,"cameraHeading",void 0),t([i({type:Number,json:K("cameraHeight")})],W.prototype,"cameraHeight",void 0),t([i({type:Number,json:K("cameraPitch")})],W.prototype,"cameraPitch",void 0),t([i({type:Number,json:K("cameraRoll")})],W.prototype,"cameraRoll",void 0),t([i({type:Number,json:K("coveragePercent")})],W.prototype,"coveragePercent",void 0),t([i({type:String,json:K("demPathPrefix")})],W.prototype,"demPathPrefix",void 0),t([i({type:String,json:K("demPathSuffix")})],W.prototype,"demPathSuffix",void 0),t([i({type:String,json:K("depthImagePathPrefix")})],W.prototype,"depthImagePathPrefix",void 0),t([i({type:String,json:K("depthImagePathSuffix")})],W.prototype,"depthImagePathSuffix",void 0),t([i({type:Object,json:K("elevationSource")})],W.prototype,"elevationSource",void 0),t([i({readOnly:!0})],W.prototype,"effectiveElevationSource",null),t([i({type:Number,json:K("farDistance")})],W.prototype,"farDistance",void 0),t([i()],W.prototype,"geometryType",void 0),t([i({type:Number,json:K("horizontalFieldOfView")})],W.prototype,"horizontalFieldOfView",void 0),t([i({type:String,json:K("horizontalMeasurementUnit")})],W.prototype,"horizontalMeasurementUnit",void 0),t([i({type:String,json:K("imagePathPrefix")})],W.prototype,"imagePathPrefix",void 0),t([i({type:String,json:K("imagePathSuffix")})],W.prototype,"imagePathSuffix",void 0),t([i({type:Number,json:K("imageRotation")})],W.prototype,"imageRotation",void 0),t([i({type:Number,json:K("maximumDistance")})],W.prototype,"maximumDistance",void 0),t([i({type:Number,json:K("nearDistance")})],W.prototype,"nearDistance",void 0),t([i({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],W.prototype,"operationalLayerType",void 0),t([i({json:{...K("orientationAccuracy",((t,e,o)=>{r(o,t.join(";"),e)}),(t=>{const e=t?.split(";")?.map(Number);return function(t){return Array.isArray(t)&&9===t?.length&&!t.some(isNaN)}(e)?e:[0,0,0,0,0,0,0,0,0]}),String)}})],W.prototype,"orientationAccuracy",void 0),t([i({json:{...K("orientedImageryType",R.write,R.read,R.jsonValues.slice(1))}})],W.prototype,"orientedImageryType",void 0),t([i({json:{read:!1},value:"oriented-imagery",readOnly:!0})],W.prototype,"type",void 0),t([i({type:T.apiValues,json:{...K("timeIntervalUnit",T.write,T.read,T.jsonValues)}})],W.prototype,"timeIntervalUnit",void 0),t([i(($=o(p),$.json?($.json.origins=$.json.origins??{},$.json.origins["web-scene"]={write:!1,read:!1},$):$))],W.prototype,"useViewTime",void 0),t([i({type:Number,json:K("verticalFieldOfView")})],W.prototype,"verticalFieldOfView",void 0),t([i({type:O.apiValues,json:{...K("verticalMeasurementUnit",O.write,O.read,O.jsonValues)}})],W.prototype,"verticalMeasurementUnit",void 0),t([i({type:String,json:K("videoPathPrefix")})],W.prototype,"videoPathPrefix",void 0),t([i({type:String,json:K("videoPathSuffix")})],W.prototype,"videoPathSuffix",void 0),t([i({type:d,json:{origins:{"web-scene":{write:!1,read:!1}}}})],W.prototype,"visibilityTimeExtent",void 0),W=t([s("esri.layers.OrientedImageryLayer")],W);const B=W,H=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));export{C,H as O,U as a,N as b,F as c,g as d,B as default,L as g,R as o};

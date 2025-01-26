/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../PopupTemplate.js";import o from"../core/Collection.js";import i from"../core/Error.js";import{L as r}from"../chunks/Logger.js";import{M as s}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as n}from"../core/promiseUtils.js";import{property as l}from"../core/accessorSupport/decorators/property.js";import{c as a,I as p}from"../chunks/ensureType.js";import"../core/lang.js";import{r as m}from"../chunks/reader.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import{n as c}from"../chunks/vec3.js";import{f as d}from"../chunks/vec3f64.js";import h from"../geometry/Extent.js";import y from"./Layer.js";import{APIKeyMixin as f}from"./mixins/APIKeyMixin.js";import{A as j}from"../chunks/ArcGISService.js";import{CustomParametersMixin as b}from"./mixins/CustomParametersMixin.js";import{OperationalLayer as v}from"./mixins/OperationalLayer.js";import{PortalLayer as g}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as x}from"./mixins/ScaleRangeLayer.js";import{SceneService as S}from"./mixins/SceneService.js";import{s as V}from"../chunks/arcgisLayerUrl.js";import{a as k,u as w}from"../chunks/commonProperties2.js";import I from"./support/Field.js";import T from"./support/FieldsIndex.js";import U from"./support/TimeInfo.js";import{ClonableMixin as A}from"../core/Clonable.js";import{c as P}from"../chunks/Cyclical.js";import{JSONSupport as L}from"../core/JSONSupport.js";import{p as C}from"../chunks/persistable.js";import{c as F}from"../chunks/voxelPlaneUtils.js";import N from"./voxel/VoxelSlice.js";import{r as R}from"../chunks/persistableUrlUtils.js";import D from"./voxel/VoxelVariable.js";import z from"./voxel/VoxelVariableStyle.js";import M from"./voxel/VoxelVolume.js";import E from"./voxel/VoxelVolumeStyle.js";import{createPopupTemplate as O}from"../support/popupUtils.js";import q from"../time/TimeExtent.js";import B from"../time/TimeInterval.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../config.js";import"../chunks/writer.js";import"./support/fieldUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../chunks/assets.js";import"../chunks/mathUtils.js";import"../geometry.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../geometry/Multipoint.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../chunks/colorUtils.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/content/UtilityNetworkAssociationsContent.js";import"../popup/support/UtilityNetworkAssociationType.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/common.js";import"../core/Loadable.js";import"../core/Promise.js";import"../chunks/timeUtils.js";import"../chunks/layerContainerType.js";import"../chunks/ElevationInfo.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../tables/AttributeTableTemplate.js";import"../tables/elements/AttributeTableGroupElement.js";import"../tables/elements/AttributeTableElement.js";import"../tables/support/elements.js";import"../tables/elements/AttributeTableAttachmentElement.js";import"../tables/elements/AttributeTableFieldElement.js";import"../tables/elements/AttributeTableRelationshipElement.js";import"../chunks/opacityUtils.js";import"../chunks/asyncUtils.js";import"../chunks/layerUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/originUtils.js";import"../chunks/multiOriginJSONSupportUtils.js";import"../geometry/HeightModelInfo.js";import"../chunks/I3SIndexInfo.js";import"../chunks/jsonContext.js";import"../chunks/resourceUtils2.js";import"../chunks/uuid.js";import"../chunks/resourceUtils.js";import"../chunks/saveUtils.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/UnknownTimeZone.js";import"../chunks/MD5.js";import"../chunks/resourceExtension.js";import"../chunks/quat.js";import"../chunks/vec4.js";import"../chunks/quatf64.js";import"./voxel/VoxelTransferFunctionStyle.js";import"../chunks/collectionUtils.js";import"./voxel/VoxelUniqueValue.js";import"./voxel/VoxelDynamicSection.js";let _=class extends(A(L)){constructor(){super(...arguments),this.enabled=!0,this.href=null,this.id=null,this.label="",this.normal=null,this.point=null,this.sizeInPixel=null,this.slices=null,this.timeId=0,this.variableId=null}get orientation(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=F(this.normal);return P.normalize(a(e),0,!0)}get tilt(){if(!Array.isArray(this.normal)||3!==this.normal.length)return 0;const[e,t]=F(this.normal);return P.normalize(a(t),0,!0)}};e([l({type:Boolean,json:{default:!0,write:!0}})],_.prototype,"enabled",void 0),e([l({type:String,json:{origins:{service:{read:R}},write:{enabled:!0,isRequired:!0}}}),C({origins:["web-scene"],type:"resource",prefix:"sections",compress:!0})],_.prototype,"href",void 0),e([l({type:p,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"id",void 0),e([l({type:String,json:{write:!0}})],_.prototype,"label",void 0),e([l({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],_.prototype,"orientation",null),e([l({type:Number,clonable:!1,readOnly:!0,range:{min:0,max:360}})],_.prototype,"tilt",null),e([l({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"normal",void 0),e([l({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"point",void 0),e([l({type:[p],json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"sizeInPixel",void 0),e([l({type:[N],json:{write:!0}})],_.prototype,"slices",void 0),e([l({type:p,json:{default:0,write:!0}})],_.prototype,"timeId",void 0),e([l({type:p,json:{write:{enabled:!0,isRequired:!0}}})],_.prototype,"variableId",void 0),_=e([u("esri.layers.voxel.VoxelSection")],_);const J=_;let G=class extends L{constructor(){super(...arguments),this.diffuseFactor=.5,this.specularFactor=.5}};e([l({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],G.prototype,"diffuseFactor",void 0),e([l({type:Number,range:{min:0,max:1},json:{default:.5,write:!0}})],G.prototype,"specularFactor",void 0),G=e([u("esri.layers.voxel.VoxelSimpleShading")],G);const $=G;var W;let H=W=class extends L{constructor(){super(...arguments),this.apronWidth=1,this.brickSize=[32,32,32],this.maxLodLevel=0,this.nodeSize=[4,4,4]}isValid(){const e=new W;return e.apronWidth===this.apronWidth&&e.maxLodLevel===this.maxLodLevel&&!!this.brickSize&&!!this.nodeSize&&!(!Array.isArray(this.brickSize)||!Array.isArray(this.nodeSize))&&3===this.brickSize.length&&3===this.nodeSize.length&&32===this.brickSize[0]&&32===this.brickSize[1]&&32===this.brickSize[2]&&4===this.nodeSize[0]&&4===this.nodeSize[1]&&4===this.nodeSize[2]}};e([l({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"apronWidth",void 0),e([l({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"brickSize",void 0),e([l({type:Number,json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"maxLodLevel",void 0),e([l({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],H.prototype,"nodeSize",void 0),H=W=e([u("esri.layers.voxel.VoxelVolumeIndex")],H);const Q=H;let K=class extends(S(j(v(g(x(s(b(f(y))))))))){constructor(e){super(e),this.serviceRoot="",this.operationalLayerType="Voxel",this.legendEnabled=!0,this.title=null,this.sections=null,this.currentVariableId=0,this.volumeStyles=null,this.renderMode="volume",this.variableStyles=null,this.enableSlices=!0,this.enableSections=!0,this.enableDynamicSections=!0,this.enableIsosurfaces=!0,this.shading=new $,this.opacity=1,this.variables=new o,this.volumes=new o,this.index=null,this.minScale=0,this.maxScale=0,this.type="voxel",this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.fullExtent=null,this.popupEnabled=!1,this.popupTemplate=null,this.test=null,this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0,this.volumeStyles=new(o.ofType(E)),this.variableStyles=new(o.ofType(z)),this.sections=new(o.ofType(J))}normalizeCtorArgs(e){return e?.constantUpscaling&&(this.test={constantUpscaling:!0},delete e.constantUpscaling),e}set url(e){this._set("url",V(e,r.getLogger(this)))}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(n).then((()=>this._fetchService(t))).then((()=>this.serviceRoot=this.url));return this.addResolvingPromise(o),Promise.resolve(this)}read(e,t){super.read(e,t),"service"===t?.origin&&this.version.major<=3&&this.version.minor<=0&&!this.getAtOrigin("popupTemplate","service")&&this.setAtOrigin("popupTemplate",this.createPopupTemplate(),"service");for(const e of this.volumes)e.spatialReference=this.spatialReference}readVersion(e,t){return super.parseVersionString(e)}validateLayer(e){if(e.layerType&&e.layerType!==this.operationalLayerType)throw new i("voxel-layer:layer-type-not-supported","VoxelLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor)||this.version.major<3)throw new i("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"});if(this.version.major>3)throw new i("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"3.x"})}readFullExtent(e,t,o){if(null!=e&&"object"==typeof e){const i=h.fromJSON(e,o);if(0===i.zmin&&0===i.zmax&&Array.isArray(t.volumes)){const e=M.fromJSON(t.volumes[0]);if(e.isValid&&"xyt"!==e.volumeType){const t=e.dimensions[2];if(t.isRegular){let e=t.regularSpacing.offset,o=t.regularSpacing.offset+t.regularSpacing.scale*(t.size-1);if(e>o){const t=e;e=o,o=t}i.zmin=e,i.zmax=o}}}return i}return null}get fields(){const e=[new I({name:"Voxel.Position",alias:"Voxel Position",domain:null,editable:!1,length:128,type:"string"}),new I({name:"Voxel.CurrentVariable",alias:"Current Variable",domain:null,editable:!1,length:128,type:"string"})];for(const t of this.variables){const o=new I({name:t.name,alias:t.description,domain:null,editable:!1,length:128,type:"discrete"===t.renderingFormat.continuity?"string":"double"});e.push(o)}const t=this.getVolume(null);if(null!=t){if("xyzt"===t.volumeType||"xyt"===t.volumeType){const t=new I({name:"Voxel.LocalTime",alias:"Local Time",domain:null,editable:!1,length:256,type:"date"});e.push(t);const o=new I({name:"Voxel.SourceTime",alias:"Source Time",domain:null,editable:!1,length:256,type:"string"});e.push(o)}if("xyt"!==t.volumeType){const t=new I({name:"Voxel.Depth",alias:"Depth",domain:null,editable:!1,length:128,type:"double"});e.push(t)}}return e}get fieldsIndex(){return this.loaded?new T(this.fields):null}getField(e){return this.fieldsIndex?.get(e)}get defaultPopupTemplate(){return this.createPopupTemplate()}createPopupTemplate(e){const t=this.fields;return O({fields:t,title:"{Voxel.Position}"},e)}getConfiguration(){const e={layerType:this.operationalLayerType,version:this.version.versionString,name:this.title,spatialReference:this.spatialReference,fullExtent:this.fullExtent,volumes:this.volumes.toJSON(),variables:this.variables.toJSON(),index:this.index?.toJSON(),sections:this.getSections(),style:{volumeStyles:this.getVolumeStyles(),currentVariableId:this.currentVariableId,renderMode:this.renderMode,variableStyles:this.getVariableStyles(),enableSections:this.enableSections,enableDynamicSections:this.enableDynamicSections,enableIsosurfaces:this.enableIsosurfaces,enableSlices:this.enableSlices,shading:this.shading}};return e.index&&this.index?.isValid()?JSON.stringify(e):""}getVariableStyle(e){let t=-1;if(t=null!=e?e:this.currentVariableId,!this.variableStyles||-1===t)return null;const o=this.variableStyles.findIndex((e=>e.variableId===t));return o<0?null:this.variableStyles.at(o)}getVariable(e){let t=-1;if(t=null!=e?e:this.currentVariableId,!this.variables||-1===t)return null;const o=this.variables.findIndex((e=>e.id===t));return o<0?null:this.variables.at(o)}getVolume(e){const t=this.getVariable(e);return null!=t?this.volumes.find((({id:e})=>e===t.volumeId)):null}get timeInfo(){const e=this.getVolume(null);if("xyzt"!==e?.volumeType)return null;const t=e.timeStops;if(!t?.length)return null;const o=new q({start:t[0],end:t.at(-1)});return new U({fullTimeExtent:o,stops:t})}getVolumeStyle(e){const t=this.getVariable(e);return null!=t?this.volumeStyles.find((({volumeId:e})=>e===t.volumeId)):null}getColorForContinuousDataValue(e,t,o){const i=this.getVariable(e);if(null==i||"continuous"!==i.renderingFormat?.continuity)return null;if(!this.variableStyles)return null;const r=this.variableStyles.findIndex((t=>t.variableId===e));if(r<0)return null;const s=this.variableStyles.at(r);return s?.transferFunction?s.transferFunction.getColorForContinuousDataValue(t,o):null}getSections(){const e=[];for(const t of this.sections)e.push(new J({enabled:t.enabled,href:t.href,id:t.id,label:t.label,normal:t.normal,point:t.point,sizeInPixel:t.sizeInPixel,slices:t.slices,timeId:t.timeId,variableId:t.variableId}));return e}getVariableStyles(){const e=[];for(const t of this.variableStyles){const o=this._getVariable(t);if(null!=o){const i=t.clone();i.isosurfaces.length>4&&(i.isosurfaces=i.isosurfaces.slice(0,3),r.getLogger(this).error("A maximum of 4 isosurfaces are supported for Voxel Layers."));for(const e of i.isosurfaces)if(!e.colorLocked){const t=this.getColorForContinuousDataValue(i.variableId,e.value,!1);null===t||t.equals(e.color)||(e.color=t)}if("continuous"===o.renderingFormat.continuity)(null===i.transferFunction||i.transferFunction.colorStops.length<2)&&r.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. At least 2 color stops are required in the transferFunction for continuous Voxel Layer variables.`),null!==i.transferFunction&&(Array.isArray(i.transferFunction.stretchRange)&&2===i.transferFunction.stretchRange.length||(r.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. The stretchRange of the transferFunction for continuous Voxel Layer variables must be of the form [minimumDataValue, maximumDataValue].`),i.transferFunction.stretchRange=[0,1],i.transferFunction.colorStops.removeAll()));else if("discrete"===o.renderingFormat.continuity)if(0===t.uniqueValues.length)r.getLogger(this).error(`VoxelVariableStyle for variable ${o.id} is invalid. Unique values are required for discrete Voxel Layer variables.`);else for(const e of t.uniqueValues)null!==e.label&&void 0!==e.label||null===e.value||void 0===e.value||(e.label=e.value.toString());e.push(i)}else r.getLogger(this).error(`VoxelVariable ID=${t.variableId} doesn't exist, VoxelVariableStyle for this VoxelVariable will be ignored.`)}return e}getVolumeStyles(){const e=[];for(const t of this.volumeStyles){const o=this._getVolumeFromVolumeId(t.volumeId);if(null!=o){const i=t.clone();for(const e of i.slices)this._isPlaneValid(e,[0,1,o.zDimension],o.dimensions)||(e.enabled=!1,e.label="invalid");for(const e of i.dynamicSections)this._isPlaneValid(e,[0,1,o.zDimension],o.dimensions)||(e.enabled=!1,e.label="invalid");e.push(i)}else r.getLogger(this).error(`VoxelVolume ID=${t.volumeId} doesn't exist, VoxelVolumeStyle for this VoxelVolume will be ignored.`)}return e}_getVariable(e){const t=e.variableId;for(const e of this.variables)if(e.id===t)return e;return null}_getVolumeFromVolumeId(e){for(const t of this.volumes)if(t.id===e)return t;return null}_isPlaneValid(e,t,o){if(!e.point)return!1;if(!Array.isArray(e.point)||3!==e.point.length)return!1;if(!e.normal)return!1;if(!Array.isArray(e.normal)||3!==e.normal.length)return!1;const i=d(e.normal[0],e.normal[1],e.normal[2]);return c(i,i),!(Math.abs(i[0])+Math.abs(i[1])+Math.abs(i[2])<1e-6||(e.normal[0]=i[0],e.normal[1]=i[1],e.normal[2]=i[2],0))}};e([l({type:["Voxel"]})],K.prototype,"operationalLayerType",void 0),e([l(k)],K.prototype,"legendEnabled",void 0),e([l({json:{write:!0}})],K.prototype,"title",void 0),e([l(w)],K.prototype,"url",null),e([l({type:o.ofType(J),json:{origins:{"web-scene":{name:"layerDefinition.sections",write:!0}}}})],K.prototype,"sections",void 0),e([l({type:p,json:{origins:{"web-scene":{name:"layerDefinition.style.currentVariableId",write:{enabled:!0,isRequired:!0,ignoreOrigin:!0}},service:{name:"style.currentVariableId"}}}})],K.prototype,"currentVariableId",void 0),e([l({type:o.ofType(E),json:{origins:{"web-scene":{name:"layerDefinition.style.volumeStyles",write:!0},service:{name:"style.volumeStyles"}}}})],K.prototype,"volumeStyles",void 0),e([l({type:["volume","surfaces"],json:{origins:{"web-scene":{name:"layerDefinition.style.renderMode",write:!0},service:{name:"style.renderMode"}}}})],K.prototype,"renderMode",void 0),e([l({type:o.ofType(z),json:{origins:{"web-scene":{name:"layerDefinition.style.variableStyles",write:!0},service:{name:"style.variableStyles"}}}})],K.prototype,"variableStyles",void 0),e([l({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSlices",write:!0},service:{name:"style.enableSlices"}}}})],K.prototype,"enableSlices",void 0),e([l({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableSections",write:!0},service:{name:"style.enableSections"}}}})],K.prototype,"enableSections",void 0),e([l({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableDynamicSections",write:!0},service:{name:"style.enableDynamicSections"}}}})],K.prototype,"enableDynamicSections",void 0),e([l({type:Boolean,json:{origins:{"web-scene":{name:"layerDefinition.style.enableIsosurfaces",write:!0},service:{name:"style.enableIsosurfaces"}}}})],K.prototype,"enableIsosurfaces",void 0),e([l({type:$,json:{origins:{"web-scene":{name:"layerDefinition.style.shading",write:!0},service:{name:"style.shading"}}}})],K.prototype,"shading",void 0),e([l({type:["show","hide"]})],K.prototype,"listMode",void 0),e([l({type:Number,range:{min:0,max:1},nonNullable:!0,json:{read:!1,write:!1,origins:{"web-scene":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],K.prototype,"opacity",void 0),e([l({type:o.ofType(D)})],K.prototype,"variables",void 0),e([l({type:o.ofType(M)})],K.prototype,"volumes",void 0),e([l({type:Q})],K.prototype,"index",void 0),e([l({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],K.prototype,"minScale",void 0),e([l({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],K.prototype,"maxScale",void 0),e([l({json:{read:!1},readOnly:!0})],K.prototype,"type",void 0),e([l({readOnly:!0,json:{name:"serviceVersion"}})],K.prototype,"version",void 0),e([m("service","version")],K.prototype,"readVersion",null),e([l({type:h})],K.prototype,"fullExtent",void 0),e([m("service","fullExtent",["fullExtent"])],K.prototype,"readFullExtent",null),e([l({readOnly:!0,clonable:!1,json:{read:!1}})],K.prototype,"fields",null),e([l({readOnly:!0})],K.prototype,"fieldsIndex",null),e([l({type:Boolean,json:{name:"disablePopup",read:{reader:(e,t)=>!t.disablePopup},write:{enabled:!0,ignoreOrigin:!0,writer(e,t,o){t[o]=!e}},origins:{"portal-item":{default:!0},"web-scene":{default:!0}}}})],K.prototype,"popupEnabled",void 0),e([l({type:t,json:{name:"popupInfo",write:!0}})],K.prototype,"popupTemplate",void 0),e([l({readOnly:!0,json:{read:!1}})],K.prototype,"defaultPopupTemplate",null),e([l({type:U,readOnly:!0,json:{read:!1}})],K.prototype,"timeInfo",null),e([l({type:q,json:{read:!1}})],K.prototype,"timeExtent",void 0),e([l({type:B,json:{read:!1}})],K.prototype,"timeOffset",void 0),e([l({type:Boolean,nonNullable:!0,json:{origins:{"web-scene":{name:"timeAnimation",write:!0},service:{read:!1}}}})],K.prototype,"useViewTime",void 0),K=e([u("esri.layers.VoxelLayer")],K);const Z=K;export{Z as default};

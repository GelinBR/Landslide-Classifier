/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../chunks/tslib.es6.js";import t from"../core/Collection.js";import r from"../core/Error.js";import{L as s}from"../chunks/Logger.js";import{M as o}from"../chunks/MultiOriginJSONSupport.js";import{debounce as i}from"../core/promiseUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import{cast as p}from"../core/accessorSupport/decorators/cast.js";import"../core/lang.js";import{r as m}from"../chunks/reader.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{w as c}from"../chunks/writer.js";import{O as l}from"../core/Accessor.js";import u from"./Layer.js";import{BlendLayer as j}from"./mixins/BlendLayer.js";import{OperationalLayer as h}from"./mixins/OperationalLayer.js";import{PortalLayer as d}from"./mixins/PortalLayer.js";import{ScaleRangeLayer as y}from"./mixins/ScaleRangeLayer.js";import f from"./support/ControlPointsGeoreference.js";import g from"./support/ImageElement.js";import k from"./support/LocalMediaElementSource.js";import{i as b}from"./support/MediaElementBase.js";import S from"./support/VideoElement.js";import{S as v}from"../chunks/interfaces2.js";import"../core/Evented.js";import"../chunks/handleUtils.js";import"../core/Handles.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/ensureType.js";import"../chunks/utils.js";import"../chunks/metadata.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/JSONSupport.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/Point.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Identifiable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../time/TimeExtent.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/utils2.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/common.js";import"../chunks/layerContainerType.js";import"../chunks/commonProperties2.js";import"../chunks/persistableUrlUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/number.js";import"../chunks/substitute.js";import"../chunks/messages.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../tables/AttributeTableTemplate.js";import"../tables/elements/AttributeTableGroupElement.js";import"../tables/elements/AttributeTableElement.js";import"../tables/support/elements.js";import"../tables/elements/AttributeTableAttachmentElement.js";import"../tables/elements/AttributeTableFieldElement.js";import"../tables/elements/AttributeTableRelationshipElement.js";import"../chunks/opacityUtils.js";import"../chunks/asyncUtils.js";import"../chunks/layerUtils.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/vec3f64.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../core/Clonable.js";import"../chunks/perspectiveUtils.js";import"../chunks/mat3.js";import"../chunks/mat3f64.js";import"../chunks/vec2.js";import"../chunks/vec3.js";import"../chunks/vec2f64.js";import"../chunks/GeoreferenceBase.js";import"../chunks/imageUtils.js";import"../chunks/uuid.js";import"../chunks/resourceExtension.js";import"../chunks/collectionUtils.js";import"../core/reactiveUtils.js";import"../chunks/BoundsStore.js";import"../chunks/PooledRBush.js";import"../chunks/quickselect.js";import"../chunks/MediaElementView.js";import"../chunks/normalizeUtilsSync.js";import"../chunks/normalizeUtilsCommon.js";import"./support/CornersGeoreference.js";import"./support/ExtentAndRotationGeoreference.js";function w(e){return"object"==typeof e&&null!=e&&"type"in e}function E(e){return w(e)&&("image"===e.type||"video"===e.type)}let U=class extends(j(y(h(d(o(u)))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=i((async(e,t,r)=>{const{save:s,saveAs:o}=await import("../chunks/mediaLayerUtils.js");switch(e){case v.SAVE:return s(this,t);case v.SAVE_AS:return o(this,r,t)}})),this.source=new k}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let s=this.source;if(!s)throw new r("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const o=this._getSourceOverride(s,this.georeference);o&&(this.setAtOrigin("source",o,"web-map"),this.setAtOrigin("source",o,"web-scene"),s=o);const i=w(s)?new k({elements:new t([s])}):s;this._set("effectiveSource",i),this.spatialReference&&(i.spatialReference=this.spatialReference),await i.load(e),this.spatialReference=i.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,t){return e&&"itemId"in t&&t.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("source",e):s.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new k({elements:new t(e)}):e instanceof t?new k({elements:e}):e:null}readSource(e,t,r){if("itemId"in t&&t.itemId)return;const s=this._createSource(t);return s?.read(t,r),s}writeSource(e,t,s,o){if(e&&e instanceof k){const t=e.elements.length;if(1!==t)return void(o?.messages&&o.messages.push(new r("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${t}.`)));e=e.elements.at(0)}E(e)?e.write(t,o):o?.messages&&(e?o.messages.push(new r("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):o.messages.push(new r("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(v.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(v.SAVE_AS,t,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new g;case"video":return new S}return null}_getSourceOverride(e,t){if(w(e)&&this.originIdOf("source")===l.PORTAL_ITEM&&t&&(this.originIdOf("georeference")===l.WEB_MAP||this.originIdOf("georeference")===l.WEB_SCENE)){const r=e.toJSON(),s=this._createSource(r);return s.read({...r},{origin:"portal-item"}),s.read({georeference:t},{origin:"web-map"}),s.read({georeference:t},{origin:"web-scene"}),s}return null}};e([n({readOnly:!0})],U.prototype,"effectiveSource",void 0),e([n({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],U.prototype,"georeference",void 0),e([m("web-document","georeference")],U.prototype,"readGeoreference",null),e([n({type:String})],U.prototype,"copyright",void 0),e([n({readOnly:!0})],U.prototype,"fullExtent",null),e([n({type:["MediaLayer"]})],U.prototype,"operationalLayerType",void 0),e([n({type:["show","hide"]})],U.prototype,"listMode",void 0),e([n({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:f}},overridePolicy(e,t,r){return{enabled:!0,allowNull:!1,ignoreOrigin:b(this,r?.origin)&&E(e)&&!!e.georeference&&e.originIdOf("georeference")>l.PORTAL_ITEM}}}}})],U.prototype,"source",null),e([p("source")],U.prototype,"castSource",null),e([m("source",["url"])],U.prototype,"readSource",null),e([c("source")],U.prototype,"writeSource",null),e([n()],U.prototype,"spatialReference",void 0),e([n({readOnly:!0})],U.prototype,"type",void 0),U=e([a("esri.layers.MediaLayer")],U);const O=U;export{O as default};

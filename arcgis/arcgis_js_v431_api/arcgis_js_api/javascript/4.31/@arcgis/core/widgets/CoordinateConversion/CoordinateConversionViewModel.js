/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{g as o}from"../../chunks/assets.js";import s from"../../Graphic.js";import"../../intl.js";import e from"../../core/Collection.js";import i from"../../core/Error.js";import r from"../../core/Evented.js";import{L as n}from"../../chunks/Logger.js";import{watch as a,when as p,initial as m}from"../../core/reactiveUtils.js";import{property as l}from"../../core/accessorSupport/decorators/property.js";import{cast as c}from"../../core/accessorSupport/decorators/cast.js";import"../../core/lang.js";import{subclass as h}from"../../core/accessorSupport/decorators/subclass.js";import d from"../../geometry/Point.js";import{load as u}from"../../geometry/projection.js";import j from"../../symbols/PictureMarkerSymbol.js";import y from"./support/Conversion.js";import{i as v,a as g}from"./support/Format.js";import{g as f,s as b}from"../../chunks/formatUtils.js";import{GoToMixin as _}from"../support/GoTo.js";import{o as C,g as w}from"../../chunks/locale.js";import{f as k}from"../../chunks/messages.js";import"../../config.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../geometry.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../chunks/date.js";import"../../chunks/datetime.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/projectBuffer.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../geometry/coordinateFormatter.js";import"../../chunks/number2.js";const S="default",L=new d([0,0,500]),M=["mgrs","utm","usng","dd","dms","ddm"],P="esri__coordinateConversionWidgetState",U="view";let D=class extends(_(r.EventedAccessor)){constructor(t){super(t),this._conversionPromise=null,this._locationGraphic=null,this._pointerCount=0,this.conversions=new e,this.formats=new e,this.formatterAvailable=!1,this.messages=null,this.filteredFormats=new e,this.locationSymbol=new j({url:o("esri/images/search/search-symbol-32.png"),width:24,height:24}),this.storageEnabled=!0,this.storageType="session",this.view=null,this._saveWidgetState=this._saveWidgetState.bind(this),this._handleFormatChange=this._handleFormatChange.bind(this),this._handleConversionChange=this._handleConversionChange.bind(this),this._handleViewChange=this._handleViewChange.bind(this),this._onClick=this._onClick.bind(this),this._onPointerMove=this._onPointerMove.bind(this),this._onPointerDown=this._onPointerDown.bind(this),this._onPointerUp=this._onPointerUp.bind(this)}initialize(){const t=async()=>this.messages=await k("esri/widgets/CoordinateConversion/t9n/CoordinateConversion");this.formats.addMany(f()),t().then((()=>{if(!this.destroyed&&(b(this.messages,this.formats),this.storageEnabled&&this._loadWidgetState(),this.formats.forEach((t=>{t.viewModel=this,this.addHandles(a((()=>t.currentPattern),this._saveWidgetState),t.name??"unnamed-format")})),this.addHandles(this.conversions.on("change",this._handleConversionChange),"conversions"),this.addHandles(this.formats.on("change",this._handleFormatChange),"formats"),this.addHandles(C((()=>{t().then((()=>{b(this.messages,this.formats)}))}))),u().then((()=>{this.formatterAvailable=!0})).catch((t=>{n.getLogger(this).error(new i("coordinate-conversion:projection-load-failed","Failed to load the projection module.",{error:t})),this.formatterAvailable=!1,this._filterFormatsAndConversions()})).then((()=>this.addHandles(a((()=>this.view),this._handleViewChange,m),"view-change"))),0===this.conversions.length)){const t=this.formats.find((t=>"xy"===t.name))||this.formats.at(0);this.conversions.add(new y({format:t}))}}))}destroy(){this.removeHandles(),this._cleanUpView(this.view),this.view=null}castConversions(t){return this._castToConversions(t)}set currentLocation(t){this._set("currentLocation",t),this._updateConversions()}get currentLocation(){return this._get("currentLocation")||null}set mode(t){switch(t){case"capture":this.currentLocation=null,this._startCaptureMode(),this._set("mode",t);break;case"live":this._startLiveMode(),this._set("mode",t)}}get mode(){return this._get("mode")||"live"}get state(){const{messages:t,view:o}=this,s=o?.ready;return t?s?"ready":o?"loading":"disabled":"disabled"}get storage(){const{storageType:t}=this;return"session"===t?sessionStorage:localStorage}get waitingForConversions(){return null!=this._conversionPromise}setLocation(t){if(this._locationGraphic&&this.view?.graphics.remove(this._locationGraphic),!t)return;const o=t.clone();o.hasZ&&(o.z=void 0),this._locationGraphic=new s({geometry:o,symbol:this.locationSymbol}),this.view?.graphics.add(this._locationGraphic)}async convert(t,o){if(!v(o))throw new i("coordinate-conversion:invalid-point","Invalid point cannot be converted.",{point:o});return Promise.resolve().then((()=>t.convert(o)))}async goToLocation(t){const{view:o}=this;if(!o)throw new i("coordinate-conversion:go-to-failed","no view");const s="3d"===o.type?o.clippingArea:null,e=o.map?.basemap?.baseLayers;if(s||e?.length>0){const o=s??e.at(0)?.fullExtent;if(null!=o&&!o.contains(t))throw new i("coordinate-conversion:go-to-failed","Point outside basemap extent.",{point:t})}return this.callGoTo({target:t})}pause(){this.currentLocation=null,this.removeHandles(U),this.view&&(this.view.cursor=S,this._locationGraphic&&this.view.graphics.remove(this._locationGraphic))}async previewConversion(t,o=this.currentLocation||L){return(await F(t,o)).displayCoordinate}resume(){"capture"===this.mode?this._startCaptureMode():this._startLiveMode()}reverseConvert(t,o){return o.reverseConvert(t)}async updateConversions(t,o){if("point"!==o?.type)throw this._clearConversions(this.conversions),new i("coordinate-conversion:invalid-input-point","Point is invalid, conversions cannot be updated.",{point:o});return this._convertMany(t,o)}_castToConversions(t){const o=new e;return t.forEach((t=>{let s=null;if(t instanceof y)s=t;else if("string"==typeof t){const o=this.formats.find((o=>o.name===t));o&&(s=new y({format:o}))}s&&o.add(s)})),o}_cleanUpView(t){t&&(this._locationGraphic&&t.graphics.remove(this._locationGraphic),this.removeHandles(U),t.cursor=S)}_clearConversions(t){t.forEach((t=>{t.position={location:null,coordinate:null}}))}async _convertMany(t,o){return Promise.all(t.map((t=>F(t,o))))}_handleConversionChange(t){for(const o of t.added){const{format:t}=o;t&&(t.viewModel=this,this.currentLocation&&(this._set("waitingForConversions",!0),this.convert(t,this.currentLocation).then((t=>{o.position=t,this._set("waitingForConversions",!1)}))))}this._saveWidgetState()}_handleFormatChange(t){t.added.forEach((t=>{this.addHandles(a((()=>t.currentPattern),this._saveWidgetState),t.name??"unnamed-format"),t.viewModel=this})),t.removed.forEach((t=>{t.viewModel=null;const o=this.conversions.filter((o=>o.format===t));this.conversions.removeMany(o),t.name&&this.removeHandles(t.name)}))}_loadWidgetState(){try{const t=JSON.parse(this.storage.getItem(P));t&&this._setWidgetState(t)}catch(t){n.getLogger(this).error(new i("coordinate-conversion:invalid-session-storage-json","Could not read from storage.",{error:t}))}}_startCaptureMode(){this.removeHandles(U),this.view&&(this.view.cursor="crosshair",this.currentLocation&&this.setLocation(this.currentLocation),this.addHandles(this.view.on("click",this._onClick),U))}_startLiveMode(){this._pointerCount=0,this.removeHandles(U),this.view&&(this.view.cursor=S,this._locationGraphic&&this.view.graphics.remove(this._locationGraphic),this.addHandles([this.view.on("pointer-down",this._onPointerDown),this.view.on("pointer-up",this._onPointerUp),this.view.on("pointer-move",this._onPointerMove)],U))}_handleViewChange(t,o){o&&o!==t&&this._cleanUpView(o),t&&("capture"===this.mode?this._startCaptureMode():this._startLiveMode(),o&&this._filterFormatsAndConversions())}_onClick(t){if(0===t.button){const o=this.view?.toMap(t),s=o?.normalize();this.setLocation(s),this.currentLocation=s}}_onPointerDown(t){const{pointerType:o}=t;if(this._pointerCount++,("touch"===o||"pen"===o)&&1===this._pointerCount){const o=this.view?.toMap(t);this.currentLocation=o?.normalize()}}_onPointerMove(t){const{pointerType:o}=t;if("mouse"===o||1===this._pointerCount){const o=this.view?.toMap(t);this.currentLocation=o?.normalize()}}_onPointerUp(){this._pointerCount--}_setWidgetState(t){try{t.formats.forEach((o=>{const s=this.formats.find((t=>t.name===o.name));s&&t.locale===w()&&o.currentPattern&&(s.currentPattern=o.currentPattern),s&&o.index>=0&&this.conversions.add(new y({format:s}))}))}catch(t){n.getLogger(this).warn(new i("coordinate-conversion:session-storage-read-error","Could not get widget state from stored JSON.",{error:t}))}}_saveWidgetState(){if(!this.storageEnabled)return;const t=this._toJSON();try{this.storage.setItem(P,JSON.stringify({formats:t,locale:w()}))}catch(t){n.getLogger(this).error(new i("coordinate-conversion:local-storage-write-error","Could not write to localStorage.",{error:t}))}}async _updateConversions(){try{await this.updateConversions(this.conversions.toArray(),this.currentLocation)}catch{}}_toJSON(){return this.formats.filter((t=>{const o=t.name;return"xy"===o||"basemap"===o||g(o)})).map((t=>({name:t.name,currentPattern:t.currentPattern,defaultPattern:t.defaultPattern,index:this.conversions.findIndex((o=>o.format===t))}))).sort(((t,o)=>t.index-o.index)).toArray()}_filterFormatsAndConversions(){const{formatterAvailable:t,conversions:o,formats:s}=this;t||this.addHandles(p((()=>this.view?.spatialReference),(t=>{const e=t.isWebMercator||t.isWGS84,i=s.filter((t=>{const{name:o}=t;return!!function(t){return M.includes(t)}(o)||"xy"===o&&!e})),r=this.filteredFormats.filter((t=>"xy"===t.name&&e&&!this.formats.includes(t))),n=o.filter((t=>i.includes(t.format)));s.removeMany(i),o.removeMany(n),this.filteredFormats.addMany(i.filter((t=>!this.filteredFormats.includes(t)))),s.addMany(r)}),{once:!0,initial:!0}),U)}};async function F(t,o){try{t.position=await(t.format?.convert(o))}catch(o){t.position=null}return t}t([l()],D.prototype,"conversions",void 0),t([c("conversions")],D.prototype,"castConversions",null),t([l({type:d})],D.prototype,"currentLocation",null),t([l()],D.prototype,"formats",void 0),t([l()],D.prototype,"messages",void 0),t([l()],D.prototype,"mode",null),t([l()],D.prototype,"filteredFormats",void 0),t([l({readOnly:!0})],D.prototype,"state",null),t([l()],D.prototype,"locationSymbol",void 0),t([l({readOnly:!0,dependsOn:["storageType"]})],D.prototype,"storage",null),t([l()],D.prototype,"storageEnabled",void 0),t([l()],D.prototype,"storageType",void 0),t([l({readOnly:!0})],D.prototype,"waitingForConversions",null),t([l()],D.prototype,"view",void 0),D=t([h("esri.widgets.CoordinateConversion.CoordinateConversionViewModel")],D);const x=D;export{x as default};

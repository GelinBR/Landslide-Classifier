/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as o}from"../../chunks/tslib.es6.js";import t from"../../request.js";import"../../core/lang.js";import{s}from"../../chunks/jsonMap.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{onAbort as r,createAbortError as i}from"../../core/promiseUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/Logger.js";import{e as p}from"../../chunks/enumeration.js";import{subclass as a}from"../../core/accessorSupport/decorators/subclass.js";import{p as m,e as l}from"../../chunks/utils9.js";import c from"../geoprocessor/GPOptions.js";import u from"../../geometry/SpatialReference.js";import{normalizeCentralMeridian as j}from"../../geometry/support/normalizeUtils.js";import b from"../../layers/support/Field.js";import y from"../../layers/support/MapImage.js";import h from"./ArealUnit.js";import d from"./DataFile.js";import f from"./FeatureSet.js";import S from"./LinearUnit.js";import g,{d as k,m as C}from"./ParameterValue.js";import J from"./RasterData.js";import I from"./GPMessage.js";import"../../config.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/ensureType.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../chunks/unitUtils.js";import"../../chunks/assets.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Polygon.js";import"../../chunks/coordsUtils.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/boundsUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/normalizeUtilsCommon.js";import"../../geometry/support/jsonUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/simplify.js";import"../../geometry.js";import"../../chunks/typeUtils.js";import"../../chunks/utils10.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/networkEnums.js";import"../../Graphic.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/datetime.js";import"../../chunks/number.js";import"../../chunks/substitute.js";import"../../chunks/messages.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/content/UtilityNetworkAssociationsContent.js";import"../../popup/support/UtilityNetworkAssociationType.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../chunks/vec3f64.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";async function U(o,s,e,r,i){const n={},p={},a=[];return function(o,t,s){for(const e in o){const r=o[e];if(r&&"object"==typeof r&&r instanceof f){const{features:o}=r;s[e]=[t.length,t.length+o.length],o.forEach((o=>{t.push(o.geometry)}))}}}(r,a,n),j(a).then((a=>{const{outSpatialReference:l,processExtent:c,processSpatialReference:u,returnColumnName:j,returnFeatureCollection:b,returnM:y,returnZ:h}=e,{path:d}=m(o);for(const o in n){const[t,s]=n[o];p[o]=a.slice(t,s)}const f=l?l.wkid||l:null,S=u?u.wkid||u:null,g="execute"===s?{returnColumnName:j||void 0,returnFeatureCollection:b||void 0,returnM:y||void 0,returnZ:h||void 0}:null,k=v({...c?{context:{extent:c,outSR:f,processSR:S}}:{"env:outSR":f,"env:processSR":S},...r,...g,f:"json"},null,p),C={...i,query:k};return t(`${d}/${s}`,C)}))}async function D(o,t){switch(o){case"areal-unit":return h.fromJSON(t);case"boolean":case"double":case"long":case"string":case"value-table":return t;case"date":return new Date(t);case"data-file":return d.fromJSON(t);case"linear-unit":return S.fromJSON(t);case"feature-record-set-layer":if("url"in t)return d.fromJSON(t);if("layerDefinition"in t){const o=new(0,(await import("../../layers/FeatureLayer.js")).default),{layerDefinition:s,featureSet:e}=t;return o.read({layerDefinition:s,featureSet:e},{origin:"portal-item"}),o.spatialReference=u.fromJSON(e.spatialReference??s.spatialReference??s.extent.spatialReference),o}return f.fromJSON(t);case"record-set":return"url"in t?d.fromJSON(t):f.fromJSON(t);case"raster-data":case"raster-data-layer":return"mapImage"in t?y.fromJSON(t.mapImage):J.fromJSON(t);case"field":return b.fromJSON(t)}}async function T(o){const t=k.fromJSON(o.dataType),{paramName:s}=o,e=function(o){return o.startsWith(C)}(t)?await async function(o,t){const s=function(o){return o.replace(C,"")}(o),e="composite"===s?t.map((o=>D(k.fromJSON(o.dataType),o.value))):t.map((o=>D(s,o)));return Promise.all(e)}(t,o.value):await D(t,o.value);return new g({dataType:t,paramName:s,value:e})}function v(o,t,s){for(const t in o){const s=o[t];Array.isArray(s)?o[t]=JSON.stringify(s.map((o=>v({item:o},!0).item))):s instanceof Date&&(o[t]=s.getTime())}return l(o,t,s)}var w;const M=s()({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"},{ignoreUnknown:!1}),O=1e3;let L=w=class extends e{constructor(o){super(o),this.jobId=null,this.jobStatus=null,this.messages=null,this.progress=null,this.requestOptions=null,this.sourceUrl=null,this._cancelJobTimer=void 0,this._jobCompletionTimer=void 0}async cancelJob(o){const{jobId:s,sourceUrl:e}=this,{path:n}=m(e),p={...this.requestOptions,...o,query:{f:"json"}},a=`${n}/jobs/${s}/cancel`,{data:l}=await t(a,p),{messages:c,jobStatus:u,progress:j}=w.fromJSON(l);return this.set({messages:c,jobStatus:u,progress:j}),"job-cancelled"===u?this:new Promise(((t,s)=>{r(p.signal,(()=>{this._clearCancelJobTimer(),s(i())})),this._clearCancelJobTimer(),this._cancelJobTimer=setInterval((()=>{this._cancelJobTimer||s(i()),this.checkJobStatus(o).then((({jobStatus:o})=>{switch(o){case"job-cancelling":break;case"job-deleted":case"job-deleting":case"job-executing":case"job-failed":case"job-new":case"job-submitted":case"job-succeeded":case"job-timed-out":case"job-waiting":this._clearCancelJobTimer(),s(this);break;case"job-cancelled":this._clearCancelJobTimer(),t(this)}}))}),O)}))}destroy(){clearInterval(this._cancelJobTimer),clearInterval(this._jobCompletionTimer)}async checkJobStatus(o){const{path:s}=m(this.sourceUrl),e={...this.requestOptions,...o,query:{f:"json"}},r=`${s}/jobs/${this.jobId}`,{data:i}=await t(r,e),{messages:n,jobStatus:p,progress:a}=w.fromJSON(i);return this.set({messages:n,jobStatus:p,progress:a}),this}async fetchResultData(o,s,e){s=c.from(s||{});const{returnColumnName:r,returnFeatureCollection:i,returnM:n,returnZ:p,outSpatialReference:a}=s,{path:l}=m(this.sourceUrl),u=v({returnColumnName:r||null,returnFeatureCollection:i||null,returnM:n||null,returnZ:p||null,outSR:a,returnType:"data",f:"json"},null),j={...this.requestOptions,...e,query:u},b=`${l}/jobs/${this.jobId}/results/${o}`,{data:y}=await t(b,j);return T(y)}async fetchResultImage(o,s,e){const{path:r}=m(this.sourceUrl),i=v({...s.toJSON(),f:"json"}),n={...this.requestOptions,...e,query:i},p=`${r}/jobs/${this.jobId}/results/${o}`,{data:a}=await t(p,n);return T(a)}async fetchResultMapImageLayer(){const{path:o}=m(this.sourceUrl),t=o.indexOf("/GPServer/"),s=`${o.slice(0,Math.max(0,t))}/MapServer/jobs/${this.jobId}`;return new(0,(await import("../../layers/MapImageLayer.js")).default)({url:s})}async waitForJobCompletion(o={}){const{interval:t=O,signal:s,statusCallback:e}=o;return new Promise(((o,n)=>{r(s,(()=>{this._clearJobCompletionTimer(),n(i())})),this._clearJobCompletionTimer(),this._jobCompletionTimer=setInterval((()=>{this._jobCompletionTimer||n(i()),this.checkJobStatus().then((({jobStatus:t})=>{switch(t){case"job-succeeded":this._clearJobCompletionTimer(),o(this);break;case"job-executing":case"job-new":case"job-submitted":case"job-waiting":e&&e(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-failed":case"job-timed-out":this._clearJobCompletionTimer(),n(this)}})).catch((o=>{this._clearJobCompletionTimer(),n(o)}))}),t)}))}_clearCancelJobTimer(){clearInterval(this._cancelJobTimer),this._cancelJobTimer=void 0}_clearJobCompletionTimer(){clearInterval(this._jobCompletionTimer),this._jobCompletionTimer=void 0}};o([n()],L.prototype,"jobId",void 0),o([p(M,{ignoreUnknown:!1})],L.prototype,"jobStatus",void 0),o([n({type:[I]})],L.prototype,"messages",void 0),o([n()],L.prototype,"progress",void 0),o([n()],L.prototype,"requestOptions",void 0),o([n({json:{write:!0}})],L.prototype,"sourceUrl",void 0),L=w=o([a("esri.rest.support.JobInfo")],L);const N=L;export{U as c,T as d,N as default};

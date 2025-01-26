/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import t from"../core/Error.js";import{a as e}from"./MultiOriginJSONSupport.js";import{whenOnce as o}from"../core/reactiveUtils.js";import{hasSameCanonicalPortal as r,urlToObject as a}from"../core/urlUtils.js";import{u as i}from"./originUtils.js";import s from"../geometry/SpatialReference.js";import{f as n}from"./unitUtils.js";import{webMercatorToGeographic as p}from"../geometry/support/webMercatorUtils.js";import{b as l}from"./arcgisLayerUrl.js";import{k as m,i as c}from"./layerUtils.js";import u from"../portal/Portal.js";import d from"../portal/PortalItem.js";import{c as f}from"./jsonContext.js";import{r as j,t as y,a as w,h as g}from"./portalItemUtils.js";import{p as h}from"./project.js";import b from"../rest/support/ProjectParameters.js";import{f as _,h as U,i as P}from"./basemapUtils.js";import{s as R}from"./resourceUtils2.js";import{b as v,e as S}from"./saveUtils.js";import"../core/lang.js";import"./Logger.js";import"../config.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/JSONSupport.js";import"./asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./multiOriginJSONSupportUtils.js";import"./writer.js";import"./jsonMap.js";import"./assets.js";import"../request.js";import"../kernel.js";import"./persistableUrlUtils.js";import"../core/Loadable.js";import"../core/Promise.js";import"./reader.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"./locale.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../geometry/projection.js";import"./vec3f64.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./coordsUtils.js";import"./Axis.js";import"./extentUtils.js";import"./boundsUtils.js";import"./aaBoundingRect.js";import"./mathUtils.js";import"../geometry/Polyline.js";import"./projectBuffer.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"./zscale.js";import"../geometry/support/jsonUtils.js";import"./utils9.js";import"./utils10.js";import"../Basemap.js";import"./collectionUtils.js";import"./loadAll.js";import"./messages.js";import"../support/BasemapStyle.js";import"./writeUtils.js";import"./utils2.js";import"./colorUtils.js";import"./screenUtils.js";import"./mat4.js";import"./common.js";import"./uuid.js";import"./resourceUtils.js";const O=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map((t=>t.toLowerCase()));async function W(e,r,a){a??={},function(e,o){if(!o.portalItem)throw new t(`${e.name}:portal-item-not-set`,"Portal item to save to has not been set on the WebMap");T(e,o.portalItem)}(e,r),await o((()=>!r.updatingFromView)),await r.load(),await M(r),await v(r),await C(e,r);const i=r.portalItem,{json:s,jsonContext:n}=await A(r,i);return S(n,{errorName:`${e.name}:save`},a),await E(r,i),await async function(t,e,o,r,a){await o.update({data:r}),Z(t,e,o,r,a)}(e,r,i,s,n),await Promise.all([r.updateItemThumbnail(),R(r.resourceReferences,n)]),i}async function A(t,e){const o=f(e,"web-map",!0),r=t.write({},o);return await Promise.all(o.resources.pendingOperations),{json:r,jsonContext:o}}async function I(e,r,a,i){i??={};const s=function(t,e){let o=d.from(e);return o.id&&(o=o.clone(),o.id=null),o.type||(o.type=t.itemType),o.portal||(o.portal=u.getDefault()),T(t,o),o}(e,a);await o((()=>!r.updatingFromView)),await r.load(),await M(r),await v(r),await C(e,r);const{json:n,jsonContext:p}=await A(r,s);S(p,{errorName:`${e.name}:save`},i),await async function(t,e){j(e,k),j(e,J),j(e,y.METADATA),j(e,D),j(e,F),j(e,$),j(e,V),j(e,N),await E(t,e)}(r,s);const l=r.getThumbnailState(),m=await async function(e,o,r,a,i,s){const n=o.portalItem,p={item:n,authenticated:!(!n?.id||!n.portal.user)},l=r.portal;await l.signIn();const{copyAllowed:m,itemReloaded:c}=await X(p,l);if(p.authenticated||=c,!m)throw new t(`${e.name}:save-as-copy-not-allowed`,"Owner of this map does not allow others to save a copy");const u=await Y(r,p,a,s);return o.portalItem=r,Z(e,o,r,a,i),u}(e,r,s,n,p,i);return m&&(r.resourceReferences.portalItem=s),r.restoreThumbnailFromState(l),await Promise.all([r.updateItemThumbnail(),R(r.resourceReferences,p)]),s}function T(e,o){if(o.type!==e.itemType)throw new t(`${e.name}:portal-item-wrong-type`,`Portal item needs to have type "${e.itemType}"`)}async function C(e,r){if(!r.basemap?.baseLayers.length)throw new t(`${e.name}:save`,"Map does not have a valid basemap with a base layer.");let a=null;if(await o((()=>{const t=_(r.initialViewProperties,r.basemap);return a=t.spatialReference,!t.updating})),!n(a,r.initialViewProperties.spatialReference))throw new t(`${e.name}:save`,"The spatial reference of the basemap is not compatible with the one from the map.",{expected:r.initialViewProperties.spatialReference,actual:a})}function M(t){const e=[];return t.basemap&&e.push(t.basemap.load()),t.ground&&e.push(t.ground.load()),Promise.allSettled(e).then((()=>{}))}async function E(t,e){e.extent=await async function(t,e){const o=e.clone().normalize();let r;if(o.length>1)for(const t of o)r?t.width>r.width&&(r=t):r=t;else r=o[0];return async function(t,e){const o=e.spatialReference;if(o.isWGS84)return e.clone();if(o.isWebMercator)return p(e);const{getGeometryServiceURL:r}=await import("./geometryServiceUtils.js"),a=await r(t),i=new b({geometries:[e],outSpatialReference:s.WGS84});return(await h(a,i))[0]}(t,r)}(t.portalItem,t.initialViewProperties.viewpoint.targetGeometry),await async function(t,e){w(e,G),await function(t){const e=q(t).map((t=>t.load())).toArray();return Promise.allSettled(e).then((()=>{}))}(t),function(t,e){g(e,k)||g(e,V)||g(e,N)||g(e,$)||!Q(t)?j(e,x):w(e,x)}(t,e),function(t,e){Q(t)?w(e,B):j(e,B)}(t,e),function(t,e){!g(e,D)&&function(t){return q(t).filter((t=>"group"!==t.type)).every((e=>e.loaded&&function(t,e){return m(e)&&e.capabilities.operations.supportsSync||function(t){return c(t)||"map-notes"===t.type||"route"===t.type}(e)&&!e.portalItem||function(t){return("tile"===t.type||"vector-tile"===t.type)&&(t.capabilities.operations.supportsExportTiles||function(t){return"tile"===t.type&&l(t.url)&&O.some((e=>t.url?.toLowerCase().includes("/"+e+"/")))}(t)||P(t))}(e)&&!function(t){return"vector-tile"===t.type&&Object.keys(t.sourceNameToSource).length>1}(e)&&e.spatialReference.equals(t.initialViewProperties.spatialReference)}(t,e)))}(t)?w(e,L):j(e,L)}(t,e),function(t,e){U(t.basemap)?w(e,H):j(e,H)}(t,e),function(t,e){t.utilityNetworks?.length?w(e,K):j(e,K)}(t,e),function(t,e){t.ipsInfo?w(e,z):j(e,z)}(t,e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((t,e,o)=>o.indexOf(t)===e)))}(t,e)}const G=y.JSAPI,k="CollectorDisabled",x="Collector",B="Data Editing",D="OfflineDisabled",L="Offline",V="Workforce Project",N="Workforce Worker",$="Workforce Dispatcher",F="Offline Map Areas",J="FieldMapsDisabled",H=y.DEVELOPER_BASEMAP,K="UtilityNetwork",z="IPS";function q(t){return t.allLayers.concat(t.allTables)}function Q(t){return q(t).some((t=>t.loaded&&m(t)&&t.capabilities.operations.supportsEditing&&t.editingEnabled&&("subtype-group"!==t.type||t.sublayers.some((t=>t.editingEnabled)))))}async function X(t,e){const{item:o,authenticated:r}=t;return o?.id&&o.typeKeywords?.includes("useOnly")?o.portal.portalHostname!==e.portalHostname?{copyAllowed:!1,itemReloaded:!1}:(r||await o.reload(),{copyAllowed:"admin"===o.itemControl||"update"===o.itemControl,itemReloaded:!0}):{copyAllowed:!0,itemReloaded:!1}}async function Y(t,e,o,a){const i=t.portal,{item:s}=e,{folder:n,copyAllResources:p}=a;let l=!1;if(p&&s?.id&&r(s.portal.url,i.url)&&parseInt(s.portal.currentVersion,10)>=2023){const{total:t}=await s.fetchResources();l=!!t}if(l){const e=await s.copy({copyResources:"all",folder:n});t.id=e.id,t.portal=e.portal;const r=t.toJSON();await t.load(),t.read(r),await t.update({data:o})}else await i.user.addItem({item:t,folder:n,data:o});return l}function Z(t,o,r,s,n){e.prototype.read.call(o,{version:s.version,authoringApp:s.authoringApp,authoringAppVersion:s.authoringAppVersion},{origin:t.origin,ignoreDefaults:!0,url:r.itemUrl?a(r.itemUrl):void 0}),i(n),o.resourceInfo=s}export{A as createJSON,Y as initializeNewItem,X as isCopyAllowed,W as save,I as saveAs};

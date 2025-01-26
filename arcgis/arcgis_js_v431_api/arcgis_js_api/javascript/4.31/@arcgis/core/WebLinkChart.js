/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"./chunks/tslib.es6.js";import o from"./WebDocument2D.js";import e from"./core/Error.js";import{watch as r}from"./core/reactiveUtils.js";import{property as i}from"./core/accessorSupport/decorators/property.js";import"./core/lang.js";import"./chunks/Logger.js";import{subclass as s}from"./core/accessorSupport/decorators/subclass.js";import{O as n}from"./core/Accessor.js";import{s as p}from"./chunks/jsonMap.js";import{ClonableMixin as a}from"./core/Clonable.js";import{a as l}from"./chunks/MultiOriginJSONSupport.js";import{JSONSupport as m}from"./core/JSONSupport.js";import{I as c}from"./chunks/ensureType.js";import{e as u}from"./chunks/enumeration.js";import h from"./webmap/InitialViewProperties.js";import{c as j}from"./chunks/utils6.js";import{V as y}from"./chunks/Version.js";import"./kernel.js";import"./core/urlUtils.js";import"./config.js";import"./core/Handles.js";import"./chunks/maybe.js";import"./chunks/metadata.js";import"./chunks/utils.js";import"./chunks/handleUtils.js";import"./chunks/tracking.js";import"./chunks/ObservableBase.js";import"./core/scheduling.js";import"./core/promiseUtils.js";import"./Map.js";import"./Basemap.js";import"./request.js";import"./core/Collection.js";import"./core/Evented.js";import"./chunks/shared.js";import"./chunks/SimpleObservable.js";import"./chunks/collectionUtils.js";import"./core/Loadable.js";import"./core/Promise.js";import"./chunks/loadAll.js";import"./chunks/asyncUtils.js";import"./chunks/writer.js";import"./geometry/SpatialReference.js";import"./chunks/unitUtils.js";import"./chunks/assets.js";import"./portal/Portal.js";import"./chunks/reader.js";import"./geometry/Extent.js";import"./geometry/Geometry.js";import"./geometry/Point.js";import"./core/accessorSupport/decorators/cast.js";import"./geometry/support/webMercatorUtils.js";import"./chunks/locale.js";import"./portal/PortalGroup.js";import"./portal/PortalQueryParams.js";import"./portal/PortalQueryResult.js";import"./portal/PortalUser.js";import"./portal/PortalFolder.js";import"./portal/PortalItem.js";import"./portal/PortalItemResource.js";import"./portal/PortalRating.js";import"./chunks/persistableUrlUtils.js";import"./chunks/messages.js";import"./support/BasemapStyle.js";import"./chunks/writeUtils.js";import"./chunks/layerUtils.js";import"./Ground.js";import"./Color.js";import"./chunks/colorUtils.js";import"./chunks/mathUtils.js";import"./chunks/compilerUtils.js";import"./chunks/opacityUtils.js";import"./chunks/CollectionFlattener.js";import"./chunks/editableLayers.js";import"./layers/catalog/catalogUtils.js";import"./chunks/basemapUtils.js";import"./chunks/utils2.js";import"./chunks/screenUtils.js";import"./chunks/mat4.js";import"./chunks/common.js";import"./chunks/collectionUtils2.js";import"./support/LayersMixin.js";import"./layers/Layer.js";import"./geometry.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/coordsUtils.js";import"./chunks/Axis.js";import"./chunks/extentUtils.js";import"./chunks/boundsUtils.js";import"./chunks/aaBoundingRect.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./geometry/support/jsonUtils.js";import"./core/Identifiable.js";import"./time/TimeExtent.js";import"./chunks/timeUtils.js";import"./chunks/date.js";import"./chunks/datetime.js";import"./support/TablesMixin.js";import"./Viewpoint.js";import"./Camera.js";import"./CameraLayout.js";import"./chunks/Cyclical.js";import"./chunks/portalItemUtils.js";import"./geometry/projection.js";import"./chunks/vec3f64.js";import"./chunks/projectBuffer.js";import"./chunks/geodesicConstants.js";import"./geometry/support/GeographicTransformation.js";import"./geometry/support/GeographicTransformationStep.js";import"./chunks/zscale.js";import"./support/MapFloorInfo.js";import"./layers/support/FacilityLayerInfo.js";import"./layers/support/LevelLayerInfo.js";import"./layers/support/SiteLayerInfo.js";import"./chunks/interfaces2.js";import"./chunks/Widgets.js";import"./webdoc/widgets/TimeSlider.js";import"./time/TimeInterval.js";import"./chunks/thumbnailUtils.js";import"./chunks/jsonContext.js";import"./chunks/project.js";import"./chunks/utils9.js";import"./chunks/utils10.js";import"./rest/support/ProjectParameters.js";import"./webmap/ApplicationProperties.js";import"./webdoc/applicationProperties/Viewing.js";import"./webdoc/applicationProperties/Search.js";import"./webdoc/applicationProperties/SearchLayer.js";import"./webdoc/applicationProperties/SearchLayerField.js";import"./chunks/fieldType.js";import"./webdoc/applicationProperties/SearchTable.js";import"./webdoc/applicationProperties/SearchTableField.js";import"./webmap/Bookmark.js";import"./chunks/SlideThumbnail.js";import"./chunks/timeProperties.js";import"./webmap/background/ColorBackground.js";import"./chunks/Version2.js";const d=p()({none:"none",startAndEnd:"start-and-end",startOnly:"start-only"}),g=p()({absoluteValue:"absolute-value",multiplier:"multiplier"}),k=new Map([["basic-grid","SIMPLE"],["geographic-organic-standard","GEOGRAPHIC"],["hierarchical-bottom-to-top","HIERARCHICAL"],["hierarchical-top-to-bottom","HIERARCHICAL"],["organic-community","COMMUNITY"],["organic-fusiform","FORCE_DIRECTED"],["organic-leaf-circle","FORCE_DIRECTED"],["organic-standard","FORCE_DIRECTED"],["radial-node-centric","RADIAL_TREE"],["radial-root-centric","RADIAL_TREE"],["tree-bottom-to-top","SMART_TREE"],["tree-left-to-right","SMART_TREE"],["tree-right-to-left","SMART_TREE"],["tree-top-to-bottom","SMART_TREE"],["chronological-mono-timeline","CHRONOLOGICAL_SINGLE"],["chronological-multi-timeline","CHRONOLOGICAL_MULTIPLE"]]);let v=class extends(a(m)){constructor(t){super(t),this.durationLineWidth=5,this.entityPositionAtDurationRatio=1,this.eventsTicksVisualization="start-and-end",this.lineSeparationMultiplier=1,this.moveFirstBends=!0,this.secondBendRatio=.3,this.separateTimeOverlaps=!0,this.separateTimelineOverlaps=!0,this.separatedLineShapeRatio=0,this.showDurationLineForNonZeroDurationEntityEvents=!1,this.showNonZeroDurationIntervalBounds=!1,this.spaceSeparatedLinesEvenly=!1,this.timeBannerUTCOffsetInMinutes=0,this.timeDirection="right",this.useBezierCurves=!1}};t([i({type:c,range:{min:1,max:10},json:{write:!0}})],v.prototype,"durationLineWidth",void 0),t([i({type:Number,range:{min:0,max:1},json:{write:!0}})],v.prototype,"entityPositionAtDurationRatio",void 0),t([u(d)],v.prototype,"eventsTicksVisualization",void 0),t([i({type:Number,range:{min:0},json:{write:!0}})],v.prototype,"lineSeparationMultiplier",void 0),t([i({type:Boolean,json:{write:!0}})],v.prototype,"moveFirstBends",void 0),t([i({type:Number,range:{min:0,max:1},json:{write:!0}})],v.prototype,"secondBendRatio",void 0),t([i({type:Boolean,json:{write:!0}})],v.prototype,"separateTimeOverlaps",void 0),t([i({type:Boolean,json:{write:!0}})],v.prototype,"separateTimelineOverlaps",void 0),t([i({type:Number,range:{min:0,max:1},json:{write:!0}})],v.prototype,"separatedLineShapeRatio",void 0),t([i({type:Boolean,json:{write:!0}})],v.prototype,"showDurationLineForNonZeroDurationEntityEvents",void 0),t([i({type:Boolean,json:{write:!0}})],v.prototype,"showNonZeroDurationIntervalBounds",void 0),t([i({type:Boolean,json:{write:!0}})],v.prototype,"spaceSeparatedLinesEvenly",void 0),t([i({type:c,json:{write:!0}})],v.prototype,"timeBannerUTCOffsetInMinutes",void 0),t([i({type:["bottom","left","right","top"],json:{write:!0}})],v.prototype,"timeDirection",void 0),t([i({type:Boolean,json:{write:!0}})],v.prototype,"useBezierCurves",void 0),v=t([s("esri.linkChart.ChronologicalLayoutSettings")],v);const w=v;let b=class extends(a(m)){constructor(t){super(t),this.absoluteIdealEdgeLength=1,this.autoRepulsionRadius=!0,this.idealEdgeLengthType="multiplier",this.multiplicativeIdealEdgeLength=1,this.repulsionRadiusMultiplier=1}};t([i({type:Number,range:{min:0,max:360},json:{write:!0}})],b.prototype,"absoluteIdealEdgeLength",void 0),t([i({type:Boolean,json:{write:!0}})],b.prototype,"autoRepulsionRadius",void 0),t([u(g)],b.prototype,"idealEdgeLengthType",void 0),t([i({type:Number,range:{min:0,max:5},json:{write:!0}})],b.prototype,"multiplicativeIdealEdgeLength",void 0),t([i({type:Number,range:{min:1,max:99},json:{write:!0}})],b.prototype,"repulsionRadiusMultiplier",void 0),b=t([s("esri.linkChart.OrganicLayoutSettings")],b);const L=b;let f=class extends(a(m)){constructor(t){super(t),this.chronologicalLayoutSettings=null,this.organicLayoutSettings=null}};t([i({type:w,json:{write:!0}})],f.prototype,"chronologicalLayoutSettings",void 0),t([i({type:L,json:{write:!0}})],f.prototype,"organicLayoutSettings",void 0),f=t([s("esri.linkChart.LayoutSettings")],f);const C=f;let E=class extends(a(m)){constructor(t){super(t),this.mode="visible"}};t([i({type:["hidden","visible"],json:{write:!0}})],E.prototype,"mode",void 0),E=t([s("esri.linkChart.NonspatialDataDisplay")],E);const R=E;let S=class extends(a(l)){constructor(t){super(t),this.aggregatedEntitiesUrl=null,this.aggregatedRelationshipsUrl=null,this.autoCollapseRelationships=!0,this.centralityIsUpToDate=!0,this.entitiesUrl=null,this.layoutSettings=null,this.layoutType="organic-standard",this.nonspatialDataDisplay=null,this.relationshipsUrl=null}};t([i({type:String,json:{write:!0}})],S.prototype,"aggregatedEntitiesUrl",void 0),t([i({type:String,json:{write:!0}})],S.prototype,"aggregatedRelationshipsUrl",void 0),t([i({type:Boolean,json:{write:!0}})],S.prototype,"autoCollapseRelationships",void 0),t([i({type:Boolean,json:{write:!0}})],S.prototype,"centralityIsUpToDate",void 0),t([i({type:String,json:{write:!0}})],S.prototype,"entitiesUrl",void 0),t([i({type:C,json:{write:!0}})],S.prototype,"layoutSettings",void 0),t([i({type:["basic-grid","chronological-mono-timeline","chronological-multi-timeline","geographic-organic-standard","hierarchical-bottom-to-top","hierarchical-top-to-bottom","organic-community","organic-fusiform","organic-leaf-circle","organic-standard","radial-node-centric","radial-root-centric","tree-bottom-to-top","tree-left-to-right","tree-right-to-left","tree-top-to-bottom"],json:{write:!0}})],S.prototype,"layoutType",void 0),t([i({type:R,json:{write:!0}})],S.prototype,"nonspatialDataDisplay",void 0),t([i({type:String,json:{write:!0}})],S.prototype,"relationshipsUrl",void 0),S=t([s("esri.linkChart.LinkChartProperties")],S);const T=S;var U;const I={currentVersion:j,createInitialViewProperties:()=>new h,parseVersion:y.parse,itemType:"Web Link Chart",name:"linkchart",origin:"link-chart"};let P=U=class extends o{constructor(t){super(t),this.mapType="webLinkChart",this.linkChartProperties=new T}initialize(){this.addHandles(r((()=>this.linkChartProperties.layoutType),(async t=>{if(this.linkChartProperties.originIdOf("layoutType")!==n.LINK_CHART&&k.has(t)){const o=k.get(t);await(this.activeLinkChartLayer?.applyNewLinkChartLayout(o))}})))}get activeLinkChartLayer(){return this.layers.find((({type:t})=>"link-chart"===t))}get context(){return I}static fromJSON(t){if(t)return new U({resourceInfo:t});throw new e("linkchart:empty-resource","Expected a JSON resource but got nothing")}};t([i({readOnly:!0})],P.prototype,"activeLinkChartLayer",null),t([i({json:{write:!0}})],P.prototype,"mapType",void 0),t([i({type:T,nonNullable:!0,json:{write:!0}})],P.prototype,"linkChartProperties",void 0),P=U=t([s("esri.WebLinkChart")],P);const O=P;export{O as default};

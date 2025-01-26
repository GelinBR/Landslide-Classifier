// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./definitions"],function(a,b){a.json={title:"PointCloud Layer config on layer item",type:"object",properties:{layers:{type:"array",items:{properties:{customParameters:{$ref:"#/definitions/customParameters_schema.json"},disablePopup:{type:"boolean",description:"disablePopups allows a client to ignore popups defined by the service item."},id:{type:"integer",description:"ID of the service layer."},layerDefinition:{type:"object",description:"A layerDefinition object defining the attribute schema and drawing information for the layer.",
allOf:[{$ref:"#/definitions/layerDefinition_schema.json"},{properties:{drawingInfo:{allOf:[{$ref:"#/definitions/drawingInfo_schema.json"},{properties:{renderer:{},transparency:{}},additionalProperties:!1}]},elevationInfo:{},filters:{},maxScale:{},minScale:{}},additionalProperties:!1}]},listMode:{type:"string",description:"To show or hide the layer in the layer list",enum:["hide","show"],default:"show"},popupInfo:{description:"A popupInfo object defining the content of pop-up windows when you click a point.",
$ref:"#/definitions/popupInfo_schema.json"},showLegend:{type:"boolean",description:"Boolean value indicating whether to display the layer in the legend. Default value is `true`.",default:!0},visibility:{type:"boolean",description:"Boolean property determining whether the layer is initially visible",default:!0},visibilityTimeExtent:{description:"Represents time extent that will control when a layer should be visible based on webscene's current time. Visibility time extent only affects the layer visibility and will not filter the data.",
$ref:"#/definitions/timeExtent_schema.json"}},additionalProperties:!1}}},additionalProperties:!1,$schema:"http://json-schema.org/draft-07/schema",definitions:b.schema_definitions};Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
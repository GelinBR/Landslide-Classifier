// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../core/accessorSupport/layerContainerType ./FeatureReduction ./FeatureReductionBinning ./FeatureReductionCluster ./FeatureReductionSelection".split(" "),function(b,g,a,c,d,e){const f={key:"type",base:a.FeatureReduction,typeMap:{cluster:d,binning:c}};b.featureReductionProperty={types:{key:"type",base:a.FeatureReduction,typeMap:{selection:e,cluster:d,binning:c}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:f},"portal-item":{types:f},
"web-scene":{types:{key:"type",base:a.FeatureReduction,typeMap:{selection:e}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:g.excludeTables}}}}};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
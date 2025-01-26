// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../assets","../intl/messages"],function(c,a,e){c.esriBasemapDefinitions={satellite:{id:"satellite",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/satellite.jpg")},baseMapLayers:[{id:"satellite-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1}]},hybrid:{id:"hybrid",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/hybrid.jpg")},
baseMapLayers:[{id:"hybrid-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Imagery",showLegend:!1,visibility:!0,opacity:1},{id:"hybrid-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/30d6b8271e1849cd9c3042060001f425/resources/styles/root.json",layerType:"VectorTileLayer",title:"Hybrid Reference Layer",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},terrain:{id:"terrain",
classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/terrain.jpg")},baseMapLayers:[{id:"terrain-base-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Terrain Base",showLegend:!1,visibility:!0,opacity:1},{id:"terrain-reference-layer",url:"//services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Reference Overlay",
isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},oceans:{id:"oceans",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/oceans.jpg")},baseMapLayers:[{id:"oceans-base-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Base",showLegend:!1,visibility:!0,opacity:1},{id:"oceans-reference-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",
layerType:"ArcGISTiledMapServiceLayer",title:"World Ocean Reference",isReference:!0,showLegend:!1,visibility:!0,opacity:1}]},osm:{id:"osm",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/osm.jpg")},baseMapLayers:[{id:"osm-base-layer",layerType:"OpenStreetMap",title:"Open Street Map",showLegend:!1,visibility:!0,opacity:1}]},"dark-gray-vector":{id:"dark-gray-vector",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/dark-gray-vector.jpg")},baseMapLayers:[{id:"dark-gray-base-layer",
styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/5e9b3685f4c24d8781073dd928ebda50/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Base",visibility:!0,opacity:1},{id:"dark-gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/747cb7a5329c478cbe6981076cc879c5/resources/styles/root.json",layerType:"VectorTileLayer",title:"Dark Gray Reference",isReference:!0,visibility:!0,opacity:1}]},get "dark-gray"(){return{...this["dark-gray-vector"],
id:"dark-gray"}},"gray-vector":{id:"gray-vector",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/gray-vector.jpg")},baseMapLayers:[{id:"gray-base-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/291da5eab3a0412593b66d384379f89f/resources/styles/root.json",layerType:"VectorTileLayer",title:"Light Gray Base",visibility:!0,opacity:1},{id:"gray-reference-layer",styleUrl:"https://cdn.arcgis.com/sharing/rest/content/items/1768e8369a214dfab4e2167d5c5f2454/resources/styles/root.json",
layerType:"VectorTileLayer",title:"Light Gray Reference",isReference:!0,visibility:!0,opacity:1}]},get gray(){return{...this["gray-vector"],id:"gray"}},"streets-vector":{id:"streets-vector",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/streets-vector.jpg")},baseMapLayers:[{id:"streets-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets",visibility:!0,
opacity:1}]},get streets(){return{...this["streets-vector"],id:"streets"}},"topo-vector":{id:"topo-vector",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/topo-vector.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"topo-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",
layerType:"VectorTileLayer",title:"World Topo",visibility:!0,opacity:1}]},get topo(){return{...this["topo-vector"],id:"topo"}},"streets-night-vector":{id:"streets-night-vector",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/streets-night.jpg")},baseMapLayers:[{id:"streets-night-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Night",visibility:!0,
opacity:1}]},"streets-relief-vector":{id:"streets-relief-vector",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/streets-relief.jpg")},baseMapLayers:[{id:"world-hillshade-layer",url:"//services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer",layerType:"ArcGISTiledMapServiceLayer",title:"World Hillshade",showLegend:!1,visibility:!0,opacity:1},{id:"streets-relief-vector-base-layer",styleUrl:"//www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",
title:"World Streets Relief",layerType:"VectorTileLayer",visibility:!0,opacity:1}]},"streets-navigation-vector":{id:"streets-navigation-vector",classic:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/streets-navigation.jpg")},baseMapLayers:[{id:"streets-navigation-vector-base-layer",styleUrl:"//cdn.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",layerType:"VectorTileLayer",title:"World Streets Navigation",visibility:!0,opacity:1}]},
"topo-3d":{id:"topo-3d",is3d:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/topo-3d.png")},baseMapLayers:[{id:"topo-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/1e7d1784d1ef4b79ba6764d0bd6c3150/resources/styles/root.json",layerType:"VectorTileLayer",title:"Topographic",visibility:!0,opacity:1},{id:"topo-3d-trees",title:"Trees",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Trees_Thematic_v1/SceneServer",itemId:"f75fef56b2d944fe92ef9f7737b4f953",
layerType:"ArcGISSceneServiceLayer"},{id:"topo-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",itemId:"a84404ad39c64c328d0596e361ec459b",layerType:"ArcGISSceneServiceLayer"},{id:"topo-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",layerType:"ArcGISSceneServiceLayer"}]},"navigation-3d":{id:"navigation-3d",
is3d:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/navigation-3d.jpg")},baseMapLayers:[{id:"navigation-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/ccc904ff872b4144b94934e55e32784b/resources/styles/root.json",layerType:"VectorTileLayer",title:"Navigation",visibility:!0,opacity:1},{id:"navigation-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",itemId:"a84404ad39c64c328d0596e361ec459b",
layerType:"ArcGISSceneServiceLayer"},{id:"navigation-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",layerType:"ArcGISSceneServiceLayer"}]},"streets-3d":{id:"streets-3d",is3d:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/streets-3d.png")},baseMapLayers:[{id:"streets-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/198298c4c64c4cb19de5b46aa00c198d/resources/styles/root.json",
layerType:"VectorTileLayer",title:"Streets",visibility:!0,opacity:1},{id:"streets-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",itemId:"a84404ad39c64c328d0596e361ec459b",layerType:"ArcGISSceneServiceLayer"},{id:"streets-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",layerType:"ArcGISSceneServiceLayer"}]},
"osm-3d":{id:"osm-3d",is3d:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/osm-3d.png")},baseMapLayers:[{id:"osm-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/8628d259c9d14bdc848771c23c513940/resources/styles/root.json",layerType:"VectorTileLayer",title:"OpenStreetMap",visibility:!0,opacity:1},{id:"osm-3d-trees",title:"Trees",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Trees_Thematic_v1/SceneServer",itemId:"f75fef56b2d944fe92ef9f7737b4f953",
layerType:"ArcGISSceneServiceLayer"},{id:"osm-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",itemId:"a84404ad39c64c328d0596e361ec459b",layerType:"ArcGISSceneServiceLayer"},{id:"osm-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",layerType:"ArcGISSceneServiceLayer"}]},"gray-3d":{id:"gray-3d",
is3d:!0,get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/gray-3d.png")},baseMapLayers:[{id:"gray-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/01a14b466345455ba4176d2e6390db92/resources/styles/root.json",layerType:"VectorTileLayer",title:"Streets",visibility:!0,opacity:1},{id:"gray-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_DarkLabels_v1/SceneServer",itemId:"a84404ad39c64c328d0596e361ec459b",
layerType:"ArcGISSceneServiceLayer"},{id:"gray-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",layerType:"ArcGISSceneServiceLayer"}]},"navigation-dark-3d":{id:"navigation-dark-3d",itemId:"5a1365328b4943f09a54cf5fd1205707",is3d:!0,baseMapLayers:[{id:"navigation-dark-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/451a1777ab3f4bf095fae24a117439d9/resources/styles/root.json",
layerType:"VectorTileLayer",title:"Navigation Dark"},{id:"navigation-dark-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_LightLabels_v1/SceneServer/layers/0",itemId:"f364b70b012a4da5a4b5921e193eac4a",layerType:"ArcGISSceneServiceLayer"},{id:"navigation-dark-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",
layerType:"ArcGISSceneServiceLayer"}]},"streets-dark-3d":{id:"streets-dark-3d",itemId:"8a4efa2c20484ec9b4557895e65736ff",is3d:!0,baseMapLayers:[{id:"streets-dark-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/bc599b6d741a4ac084b7eea7bf8c5938/resources/styles/root.json",layerType:"VectorTileLayer",title:"OpenStreetMap Streets Night (for 3D)"},{id:"streets-dark-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_LightLabels_v1/SceneServer",
itemId:"f364b70b012a4da5a4b5921e193eac4a",layerType:"ArcGISSceneServiceLayer"},{id:"streets-dark-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",layerType:"ArcGISSceneServiceLayer"}]},"dark-gray-3d":{id:"dark-gray-3d",itemId:"a8b7322a5fe94002bb0f5e0eeb0c5c18",is3d:!0,baseMapLayers:[{id:"dark-gray-3d-base-layer",styleUrl:"https://www.arcgis.com/sharing/rest/content/items/4178f71acb934fb89f169e7d667c20c6/resources/styles/root.json",
layerType:"VectorTileLayer",title:"OpenStreetMap Dark Gray Canvas (for 3D)"},{id:"dark-gray-3d-places-and-labels",title:"Places and Labels",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_LightLabels_v1/SceneServer/layers/0",itemId:"f364b70b012a4da5a4b5921e193eac4a",layerType:"ArcGISSceneServiceLayer"},{id:"dark-gray-3d-buildings",title:"Buildings",url:"https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",itemId:"ca0470dbbddb4db28bad74ed39949e25",
layerType:"ArcGISSceneServiceLayer"}]},"arcgis-imagery":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/hybrid.jpg")},title:"Imagery Hybrid",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",isReference:!0}]},
"arcgis-imagery-standard":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/satellite.jpg")},title:"Imagery",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Imagery",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/World_Imagery/MapServer"}]},"arcgis-imagery-labels":{title:"Hybrid [Reference]",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Imagery:Labels",title:"Hybrid Reference Layer",
isReference:!0}]},"arcgis-light-gray":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/gray-vector.jpg")},title:"Light Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Base",title:"Light Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:LightGray:Labels",title:"Light Gray Canvas Labels",isReference:!0}]},"arcgis-dark-gray":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/dark-gray.jpg")},
title:"Dark Gray Canvas",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Base",title:"Dark Gray Canvas Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:DarkGray:Labels",title:"Dark Gray Canvas Labels",isReference:!0}]},"arcgis-navigation":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/streets-navigation.jpg")},title:"Navigation",baseMapLayers:[{layerType:"VectorTileLayer",
styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Navigation",title:"World Navigation Map"}]},"arcgis-navigation-night":{title:"Navigation (Dark Mode)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:NavigationNight",title:"World Navigation Map (Dark Mode)"}]},"arcgis-streets":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/streets-vector.jpg")},title:"Streets",baseMapLayers:[{layerType:"VectorTileLayer",
styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Streets",title:"World Street Map"}]},"arcgis-streets-night":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/streets-night.jpg")},title:"Streets (Night)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsNight",title:"World Street Map (Night)"}]},"arcgis-streets-relief":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/streets-relief.jpg")},
title:"Streets (with Relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:StreetsRelief:Base",title:"World Street Map (with Relief)"}]},"arcgis-topographic":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/topo.jpg")},title:"Topographic",
baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Topographic:Base",title:"World Topographic Map"}]},"arcgis-oceans":{get thumbnailUrl(){return a.getAssetUrl("esri/images/basemap/oceans.jpg")},title:"Oceans",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",
showLegend:!1,title:"World Ocean Base",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Oceans:Labels",title:"World Ocean Reference",isReference:!0}]},"osm-standard":{title:"OpenStreetMap",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Standard",title:"OpenStreetMap"}]},"osm-standard-relief":{title:"OpenStreetMap (with relief)",
baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StandardRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-streets":{title:"OpenStreetMap (Streets)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:Streets",
title:"OpenStreetMap (Streets)"}]},"osm-streets-relief":{title:"OpenStreetMap (Streets with relief)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:StreetsRelief:Base",layerType:"VectorTileLayer",title:"OpenStreetMap Relief Base"}]},"osm-light-gray":{title:"OpenStreetMap (Light Gray Canvas)",
baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Base",title:"OSM (Light Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:LightGray:Labels",title:"OSM (Light Gray Reference)",isReference:!0}]},"osm-dark-gray":{title:"OpenStreetMap (Dark Gray Canvas)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Base",
title:"OSM (Dark Gray Base)"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/OSM:DarkGray:Labels",title:"OSM (Dark Gray Reference)",isReference:!0}]},"arcgis-terrain":{title:"Terrain with Labels",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Base",
title:"World Terrain Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Terrain:Detail",title:"World Terrain Reference",isReference:!0}]},"arcgis-community":{title:"Community",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Community",title:"Community"}]},"arcgis-charted-territory":{title:"Charted Territory",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,
title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ChartedTerritory:Base",title:"Charted Territory"}]},"arcgis-colored-pencil":{title:"Colored Pencil",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ColoredPencil",title:"Colored Pencil"}]},"arcgis-nova":{title:"Nova",
baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Nova",title:"Nova"}]},"arcgis-modern-antique":{title:"Modern Antique",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:ModernAntique:Base",
title:"Modern Antique"}]},"arcgis-midcentury":{title:"Mid-Century",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Midcentury",title:"Mid-Century"}]},"arcgis-newspaper":{title:"Newspaper",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:Newspaper",title:"Newspaper"}]},"arcgis-hillshade-light":{title:"Hillshade",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",
showLegend:!1,title:"World Hillshade",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer"}]},"arcgis-hillshade-dark":{title:"Hillshade (Dark)",baseMapLayers:[{layerType:"ArcGISTiledMapServiceLayer",showLegend:!1,title:"World Hillshade (Dark)",url:"https://ibasemaps-api.arcgis.com/arcgis/rest/services/Elevation/World_Hillshade_Dark/MapServer"}]},"arcgis-human-geography":{title:"Human Geography",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Base",
title:"Human Geography Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Detail",title:"Human Geography Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeography:Label",title:"Human Geography Label",isReference:!0}]},"arcgis-human-geography-dark":{title:"Human Geography (Dark)",baseMapLayers:[{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Base",
title:"Human Geography Dark Base"},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Detail",title:"Human Geography Dark Detail",isReference:!0},{layerType:"VectorTileLayer",styleUrl:"https://basemaps-api.arcgis.com/arcgis/rest/services/styles/ArcGIS:HumanGeographyDark:Label",title:"Human Geography Dark Label",isReference:!0}]}};c.getBasemapTitle=async function(b){if(b){var f=b.includes("-vector")?b.slice(0,b.indexOf("-vector")):
b.includes("-3d")?b.slice(0,b.indexOf("-3d")):b,d=await e.fetchMessageBundle("esri/t9n/basemaps");return d[b]||d[f]}};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
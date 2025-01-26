// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../assets ../core/Error ../core/JSONSupport ../core/lang ../core/Loadable ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/Extent ./Portal ./PortalItemResource ./PortalRating ../chunks/persistableUrlUtils".split(" "),function(p,e,x,q,d,k,y,t,f,z,A,B,u,v,C,r,D){var l;const E=new Set("3DTiles Service;CSV;Feature Collection;Feature Service;Feed;GeoJson;Group Layer;Image Service;KML;Map Service;Media Layer;Scene Service;Stream Service;Vector Tile Service;WFS;WMS;WMTS".split(";")),
F=new Set(["KML","GeoJson","CSV"]);d=l=class extends d.JSONSupportMixin(y){static from(a){return z.ensureClass(l,a)}constructor(a){super(a);this.id=this.groupCategories=this.extent=this.description=this.culture=this.created=this.classification=this.categories=this.avgRating=this.applicationProxies=this.apiKey=this.accessInformation=this.access=null;this.isOrgItem=!1;this.url=this.typeKeywords=this.type=this.title=this.tags=this.spatialReference=this.sourceUrl=this.sourceJSON=this.snippet=this.size=
this.screenshots=this.portal=this.ownerFolder=this.owner=this.numViews=this.numRatings=this.numComments=this.name=this.modified=this.licenseInfo=this.itemControl=null}destroy(){this.portal=null}get displayName(){const a=this.type,b=this.typeKeywords||[];let c=a;"Feature Service"===a||"Feature Collection"===a?c=b.includes("Table")?"Table":b.includes("Route Layer")?"Route Layer":b.includes("Markup")?"Markup":"Feature Layer":"Image Service"===a?c=b.includes("Elevation 3D Layer")?"Elevation Layer":b.includes("Tiled Imagery")?
"Tiled Imagery Layer":"Imagery Layer":"Scene Service"===a?c="Scene Layer":"Video Service"===a?c="Video Layer":"Scene Package"===a?c="Scene Layer Package":"Stream Service"===a?c="Feature Layer":"Geoprocessing Service"===a?c=b.includes("Web Tool")?"Tool":"Geoprocessing Service":"Geoenrichment Service"===a?c="GeoEnrichment Service":"Geocoding Service"===a?c="Locator":"Microsoft Powerpoint"===a?c="Microsoft PowerPoint":"GeoJson"===a?c="GeoJSON":"Globe Service"===a?c="Globe Layer":"Vector Tile Service"===
a?c="Tile Layer":"netCDF"===a?c="NetCDF":"Map Service"===a?c=b.includes("Spatiotemporal")||!b.includes("Hosted Service")&&!b.includes("Tiled")||b.includes("Relational")?"Map Image Layer":"Tile Layer":a?.toLowerCase().includes("add in")?c=a.replaceAll(/(add in)/gi,"Add-In"):"datastore catalog service"===a?c="Big Data File Share":"Compact Tile Package"===a?c="Tile Package (tpkx)":"Raster function template"===a?c="Raster Function Template":"OGCFeatureServer"===a?c="OGC Feature Layer":"web mapping application"===
a&&b.includes("configurableApp")?c="Instant App":"Insights Page"===a?c="Insights Report":"Excalibur Imagery Project"===a?c="Excalibur Project":"3DTiles Service"===a?c="3D tiles layer":"3DTiles Package"===a&&(c="3D tiles package");return c}readExtent(a){return a&&a.length?new u(a[0][0],a[0][1],a[1][0],a[1][1]):null}get iconUrl(){var a=this.type?.toLowerCase()||"";const b=this.typeKeywords||[];var c=!1,g=!1;let h=!1,n=!1,m=!1,w=!1;c=g=!1;0<a.indexOf("service")||"feature collection"===a||"kml"===a||
"wms"===a||"wmts"===a||"wfs"===a?(c=b.includes("Hosted Service"),"feature service"===a||"feature collection"===a||"kml"===a||"wfs"===a?(g=b.includes("Table"),h=b.includes("Route Layer"),n=b.includes("Markup"),m=b.includes("Spatiotemporal"),w=b.includes("UtilityNetwork"),a=m&&g?"spatiotemporaltable":g?"table":h?"routelayer":n?"markup":m?"spatiotemporal":w?"utilitynetwork":c?"featureshosted":"features"):"map service"===a||"wms"===a||"wmts"===a?(m=b.includes("Spatiotemporal"),g=b.includes("Relational"),
a=m||g?"mapimages":c||b.includes("Tiled")||"wmts"===a?"maptiles":"mapimages"):a="scene service"===a?b.includes("Line")?"sceneweblayerline":b.includes("3DObject")?"sceneweblayermultipatch":b.includes("Point")?"sceneweblayerpoint":b.includes("IntegratedMesh")?"sceneweblayermesh":b.includes("PointCloud")?"sceneweblayerpointcloud":b.includes("Polygon")?"sceneweblayerpolygon":b.includes("Building")?"sceneweblayerbuilding":b.includes("Voxel")?"sceneweblayervoxel":"sceneweblayer":"image service"===a?b.includes("Elevation 3D Layer")?
"elevationlayer":b.includes("Tiled Imagery")?"tiledimagerylayer":"imagery":"stream service"===a?"streamlayer":"vector tile service"===a?"vectortile":"datastore catalog service"===a?"datastorecollection":"geocoding service"===a?"geocodeservice":"video service"===a?b.includes("Live Stream")?"livestreamvideolayer":"videolayer":"geoprocessing service"===a?b.includes("Web Tool")?"tool":"layers":"geodata service"===a?"geodataservice":"3dtiles service"===a?b.includes("3DObject")?"3dobjecttileslayer":b.includes("IntegratedMesh")?
"integratedmeshtileslayer":"3dtileslayer":"layers"):a="web map"===a||"cityengine web scene"===a?"maps":"web scene"===a?b.includes("ViewingMode-Local")?"webscenelocal":"websceneglobal":"web mapping application"===a&&b.includes("configurableApp")?"instantapps":"web mapping application"===a||"mobile application"===a||"application"===a||"operation view"===a||"desktop application"===a?"apps":"map document"===a||"map package"===a||"published map"===a||"scene document"===a||"globe document"===a||"basemap package"===
a||"mobile basemap package"===a||"mobile map package"===a||"project package"===a||"project template"===a||"pro map"===a||"layout"===a||"layer"===a&&b.includes("ArcGIS Pro")||"explorer map"===a&&b.indexOf("Explorer Document")?"mapsgray":"service definition"===a||"shapefile"===a||"cad drawing"===a||"geojson"===a||"netcdf"===a||"administrative report"===a?"datafiles":"360 vr experience"===a?"360vr":"explorer add in"===a||"desktop add in"===a||"windows viewer add in"===a||"windows viewer configuration"===
a?"appsgray":"arcgis pro add in"===a||"arcgis pro configuration"===a?"addindesktop":"pdf"===a?"pdf":"microsoft word"===a?"word":"microsoft excel"===a?"excel":"microsoft powerpoint"===a?"ppt":"rule package"===a||"file geodatabase"===a||"sqlite geodatabase"===a||"csv collection"===a||"kml collection"===a||"windows mobile package"===a||"map template"===a||"desktop application template"===a||"gml"===a||"arcpad package"===a||"code sample"===a||"document link"===a||"earth configuration"===a||"operations dashboard add in"===
a||"rules package"===a||"workflow manager package"===a||"explorer map"===a&&b.includes("Explorer Mapping Application")||b.includes("Document")?"datafilesgray":"network analysis service"===a||"geoprocessing service"===a||"geodata service"===a||"geometry service"===a||"geoprocessing package"===a||"locator package"===a||"geoprocessing sample"===a||"workflow manager service"===a?"toolsgray":"layer"===a||"layer package"===a||"explorer layer"===a?"layersgray":"analysis model"===a?"analysismodel":"scene package"===
a?"scenepackage":"3dtiles package"===a?"3dtileslayerpackage":"3dtiles service"===a?"3dtileslayer":"mobile scene package"===a?"mobilescenepackage":"tile package"===a||"compact tile package"===a?"tilepackage":"task file"===a?"taskfile":"report template"===a?"report-template":"statistical data collection"===a?"statisticaldatacollection":"insights workbook"===a?"workbook":"insights model"===a?"insightsmodel":"insights page"===a?"insightspage":"insights theme"===a?"insightstheme":"hub initiative"===a?
"hubinitiative":"hub page"===a?"hubpage":"hub site application"===a?"hubsite":"hub event"===a?"hubevent":"hub project"===a?"hubproject":"relational database connection"===a?"relationaldatabaseconnection":"big data file share"===a?"datastorecollection":"image collection"===a?"imagecollection":"desktop style"===a?"desktopstyle":"style"===a?b.includes("Dictionary")?"dictionarystyle":"style":"dashboard"===a?"dashboard":"raster function template"===a?"rasterprocessingtemplate":"vector tile package"===
a?"vectortilepackage":"ortho mapping project"===a?"orthomappingproject":"ortho mapping template"===a?"orthomappingtemplate":"solution"===a?"solutions":"geopackage"===a?"geopackage":"deep learning package"===a?"deeplearningpackage":"real time analytic"===a?"realtimeanalytics":"reality mapping project"===a?"realitymappingproject":"big data analytic"===a?"bigdataanalytics":"feed"===a?"feed":"excalibur imagery project"===a?"excaliburimageryproject":"notebook"===a?"notebook":"storymap"===a?"storymap":
"survey123 add in"===a?"survey123addin":"mission"===a?"mission":"mission report"===a?"missionreport":"mission template"===a?"missiontemplate":"quickcapture project"===a?"quickcaptureproject":"pro report"===a?"proreport":"pro report template"===a?"proreporttemplate":"urban model"===a?"urbanmodel":"urban project"===a?"urbanproject":"web experience"===a?"experiencebuilder":"web experience template"===a?"webexperiencetemplate":"experience builder widget"===a?"experiencebuilderwidget":"experience builder widget package"===
a?"experiencebuilderwidgetpackage":"workflow"===a?"workflow":"kernel gateway connection"===a?"kernelgatewayconnection":"insights script"===a?"insightsscript":"hub initiative template"===a?"hubinitiativetemplate":"storymap theme"===a?"storymaptheme":"knowledge graph"===a?"knowledgegraph":"knowledge graph layer"===a?"knowledgegraphlayer":"knowledge studio project"===a?"knowledgestudio":"native application"===a?"nativeapp":"native application installer"===a?"nativeappinstaller":"web link chart"===a?
"linkchart":"knowledge graph web investigation"===a?"investigation":"ogcfeatureserver"===a?"features":"pro presentation"===a?"propresentation":"pro project"===a?"proproject":"insights workbook package"===a?"insightsworkbookpackage":"apache parquet"===a?"apacheparquet":"notebook code snippet library"===a?"notebookcodesnippets":"suitability model"===a?"suitabilitymodel":"esri classifier definition"===a?"classifierdefinition":"esri classification schema"===a?"classificationschema":"insights data engineering workbook"===
a?"dataengineeringworkbook":"insights data engineering model"===a?"dataengineeringmodel":"deep learning studio project"===a?"deeplearningproject":"discussion"===a?"discussion":"allsource project"===a?"allsourceproject":"api key"===a?"apikey":"data pipeline"===a?"datapipelines":"group layer"===a?(c=b.includes("Map"))?"layergroup2d":"layergroup":"media layer"===a?"onlinemedialayer":"form"===a?b.includes("Survey123")?"survey":"datafilesgray":"csv"===a?"csv":"image"===a?"image":"maps";return a?x.getAssetUrl("esri/images/portal/"+
a+"16.png"):null}get isLayer(){return null!=this.type&&E.has(this.type)}get itemCdnUrl(){return D.toCDNUrl(this.itemUrl)}get itemPageUrl(){const a=this.portal?.itemPageUrl;return a&&this.id?`${a}?id=${this.id}`:null}get itemUrl(){const a=this.portal?.restUrl;return a&&this.id?`${a}/content/items/${this.id}`:null}get thumbnailUrl(){const a=this.itemUrl,b=this.thumbnail;return a&&b?this.portal?.normalizeUrl(`${a}/info/${b}?f=json`)??null:null}get userItemUrl(){const a=this.portal?.restUrl;if(!a)return null;
const b=this.owner||this.portal?.user?.username;return b?`${a}/content/users/${this.ownerFolder?`${b}/${this.ownerFolder}`:b}/items/${this.id}`:null}load(a){const b=this.portal??(this.portal=v.getDefault()),c=b.load(a).then(()=>this.sourceJSON?this.sourceJSON:this.id&&this.itemUrl?b.request(this.itemUrl,{signal:null!=a?a.signal:null,query:{token:this.apiKey}}):{}).then(g=>{this.sourceJSON=g;this.read(g)});this.addResolvingPromise(c);return Promise.resolve(this)}async addRating(a){const b={method:"post",
query:{}};a instanceof r&&(a=a.rating);null==a||isNaN(a)||"number"!==typeof a||(b.query.rating=a);if(!this.portal)return null;await this.portal.request(this.itemUrl+"/addRating",b);return new r({rating:a,created:new Date})}clone(){var a={access:this.access,accessInformation:this.accessInformation,applicationProxies:k.clone(this.applicationProxies),avgRating:this.avgRating,categories:k.clone(this.categories),classification:k.clone(this.classification),created:k.clone(this.created),culture:this.culture,
description:this.description,extent:k.clone(this.extent),groupCategories:k.clone(this.groupCategories),id:this.id,itemControl:this.itemControl,licenseInfo:this.licenseInfo,modified:k.clone(this.modified),name:this.name,numComments:this.numComments,numRatings:this.numRatings,numViews:this.numViews,owner:this.owner,ownerFolder:this.ownerFolder,portal:this.portal,screenshots:k.clone(this.screenshots),size:this.size,snippet:this.snippet,sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,
tags:k.clone(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:k.clone(this.typeKeywords),url:this.url};this.loaded&&(a.loadStatus="loaded");a=(new l({sourceJSON:this.sourceJSON})).set(a);a._set("isOrgItem",this.isOrgItem);return a}createPostQuery(){const a=this.toJSON();for(var b of["tags","typeKeywords","categories"])a[b]=a[b]?.join(", ");for(const c of["extent","classification"])(b=a[c])&&(a[c]=JSON.stringify(b));return a}async deleteRating(){await this.portal.request(this.itemUrl+
"/deleteRating",{method:"post"})}fetchData(a="json",b){return this.portal.request(this.itemUrl+"/data",{responseType:a,...b,query:{token:this.apiKey}})}async fetchRating(a){a=await this.portal.request(this.itemUrl+"/rating",{query:{token:this.apiKey},...a});return null!=a.rating?(a.created=new Date(a.created),new r(a)):null}fetchRelatedItems(a,b){return this.portal.requestToTypedArray(this.itemUrl+"/relatedItems",{query:{...a,token:this.apiKey},...b},l)}getThumbnailUrl(a){let b=this.thumbnailUrl;
b&&a&&(b+=`&w=${a}`);return b}reload(){return this.portal.request(this.itemUrl??"",{cacheBust:!0,query:{token:this.apiKey}}).then(a=>{this.applicationProxies&&!Object.hasOwn(a,"appProxies")&&(this.applicationProxies=null);this.sourceJSON=a;this.read(a);return this})}update(a){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const b=a?.data,c={method:"post"};c.query=this.createPostQuery();for(const g in c.query)null===c.query[g]&&(c.query[g]="");c.query.clearEmptyFields=!0;null!=
b&&("string"===typeof b?c.query.text=b:"object"===typeof b&&(c.query.text=JSON.stringify(b)));return this.portal.request(`${this.userItemUrl}/update`,c).then(()=>this.reload())}):Promise.reject(new q("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async copy(a){if(!this.id)throw new q("portal:item-does-not-exist","The item does not exist yet");await this.load();const {portal:b,itemUrl:c}=this;await b.signIn();const {copyResources:g,folder:h,tags:n,title:m}=a||{};
a={method:"post",query:{copyPrivateResources:"all"===g,folder:"string"===typeof h?h:h?.id,includeResources:!!g,tags:n?.join(","),title:m}};({itemId:a}=await b.request(`${c}/copy`,a));return new l({id:a,portal:b})}updateThumbnail(a){return this.id?this.load().then(()=>this.portal.signIn()).then(()=>{const b=a.thumbnail,c=a.filename,g={method:"post"};if("string"===typeof b)t.isDataProtocol(b)?g.query={data:b}:g.query={url:t.makeAbsolute(b)},null!=c&&(g.query.filename=c);else{const h=new FormData;null!=
c?h.append("file",b,c):h.append("file",b);g.body=h}return this.portal.request(`${this.userItemUrl}/updateThumbnail`,g).then(()=>this.reload())}):Promise.reject(new q("portal:item-does-not-exist","The item does not exist yet and cannot be updated"))}async fetchResources(a={},b){const {fetchResources:c}=await new Promise((g,h)=>p(["./support/resourceUtils"],g,h));return c(this,a,b)}async addResource(a,b,c){const {addOrUpdateResources:g}=await new Promise((h,n)=>p(["./support/resourceUtils"],h,n));a.portalItem=
this;await g(this,[{resource:a,content:b,compress:c?.compress,access:c?.access}],"add",c);return a}async removeResource(a,b){const {removeResource:c}=await new Promise((g,h)=>p(["./support/resourceUtils"],g,h));if(a.portalItem&&a.portalItem.itemUrl!==this.itemUrl)throw new q("removeresource:portal-item-mismatch","The portal item associated with the provided resource does not match the item");return c(this,a,b)}async removeAllResources(a){const {removeAllResources:b}=await new Promise((c,g)=>p(["./support/resourceUtils"],
c,g));return b(this,a)}resourceFromPath(a){return new C({portalItem:this,path:a})}toJSON(){var a=this.extent;a={accessInformation:this.accessInformation,categories:k.clone(this.categories),classification:k.clone(this.classification),created:this.created?.getTime(),description:this.description,extent:a&&[[a.xmin,a.ymin],[a.xmax,a.ymax]],id:this.id,isOrgItem:this.isOrgItem,licenseInfo:this.licenseInfo,modified:this.modified?.getTime(),name:this.name,owner:this.owner,ownerFolder:this.ownerFolder,snippet:this.snippet,
sourceUrl:this.sourceUrl,spatialReference:this.spatialReference,tags:k.clone(this.tags),thumbnail:this.thumbnail,title:this.title,type:this.type,typeKeywords:k.clone(this.typeKeywords),url:this.url};return k.fixJson(a)}static fromJSON(a){if(!a)return null;if(a.declaredClass)throw Error("JSON object is already hydrated");return new l({sourceJSON:a})}_getPostQuery(){const a=this.toJSON();for(const b in a)"tags"===b&&null!==a[b]&&(a[b]=a[b].join(", ")),"typeKeywords"===b&&null!==a[b]&&(a[b]=a[b].join(", ")),
"extent"===b&&a[b]&&(a[b]=JSON.stringify(a[b]));return a}};e.__decorate([f.property({type:["private","shared","org","public"]})],d.prototype,"access",void 0);e.__decorate([f.property()],d.prototype,"accessInformation",void 0);e.__decorate([f.property({type:String})],d.prototype,"apiKey",void 0);e.__decorate([f.property({json:{read:{source:"appProxies"}}})],d.prototype,"applicationProxies",void 0);e.__decorate([f.property()],d.prototype,"avgRating",void 0);e.__decorate([f.property()],d.prototype,"categories",
void 0);e.__decorate([f.property()],d.prototype,"classification",void 0);e.__decorate([f.property({type:Date})],d.prototype,"created",void 0);e.__decorate([f.property()],d.prototype,"culture",void 0);e.__decorate([f.property()],d.prototype,"description",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"displayName",null);e.__decorate([f.property({type:u})],d.prototype,"extent",void 0);e.__decorate([A.reader("extent")],d.prototype,"readExtent",null);e.__decorate([f.property()],d.prototype,
"groupCategories",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"iconUrl",null);e.__decorate([f.property()],d.prototype,"id",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"isLayer",null);e.__decorate([f.property({type:Boolean,readOnly:!0})],d.prototype,"isOrgItem",void 0);e.__decorate([f.property()],d.prototype,"itemControl",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"itemPageUrl",null);e.__decorate([f.property({readOnly:!0})],d.prototype,"itemUrl",
null);e.__decorate([f.property()],d.prototype,"licenseInfo",void 0);e.__decorate([f.property({type:Date})],d.prototype,"modified",void 0);e.__decorate([f.property()],d.prototype,"name",void 0);e.__decorate([f.property()],d.prototype,"numComments",void 0);e.__decorate([f.property()],d.prototype,"numRatings",void 0);e.__decorate([f.property()],d.prototype,"numViews",void 0);e.__decorate([f.property()],d.prototype,"owner",void 0);e.__decorate([f.property()],d.prototype,"ownerFolder",void 0);e.__decorate([f.property({type:v})],
d.prototype,"portal",void 0);e.__decorate([f.property()],d.prototype,"screenshots",void 0);e.__decorate([f.property()],d.prototype,"size",void 0);e.__decorate([f.property()],d.prototype,"snippet",void 0);e.__decorate([f.property()],d.prototype,"sourceJSON",void 0);e.__decorate([f.property({type:String})],d.prototype,"sourceUrl",void 0);e.__decorate([f.property({type:String})],d.prototype,"spatialReference",void 0);e.__decorate([f.property()],d.prototype,"tags",void 0);e.__decorate([f.property()],
d.prototype,"thumbnail",void 0);e.__decorate([f.property({readOnly:!0})],d.prototype,"thumbnailUrl",null);e.__decorate([f.property()],d.prototype,"title",void 0);e.__decorate([f.property()],d.prototype,"type",void 0);e.__decorate([f.property()],d.prototype,"typeKeywords",void 0);e.__decorate([f.property({type:String,json:{read(a,b){F.has(b.type)&&(b=this.portal?.restUrl,a||=b&&this.id?`${b}/content/items/${this.id}/data`:null);return a}}})],d.prototype,"url",void 0);e.__decorate([f.property({readOnly:!0})],
d.prototype,"userItemUrl",null);return d=l=e.__decorate([B.subclass("esri.portal.PortalItem")],d)});
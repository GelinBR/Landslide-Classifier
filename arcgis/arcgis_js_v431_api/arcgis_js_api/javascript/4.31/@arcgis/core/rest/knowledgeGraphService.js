/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import"../geometry.js";import{id as e}from"../kernel.js";import t from"../request.js";import r from"../core/Error.js";import{L as n}from"../chunks/Logger.js";import a from"./knowledgeGraph/GraphQueryResult.js";import{G as o}from"../chunks/GraphQueryResultHeader.js";import i from"./knowledgeGraph/GraphQueryStreamingResult.js";import s from"./knowledgeGraph/KnowledgeGraph.js";import l from"./knowledgeGraph/ServiceDefinition.js";import{g as d}from"../chunks/assets.js";import{h as p}from"../core/lang.js";import c from"../geometry/Multipoint.js";import u from"../geometry/Point.js";import y from"../geometry/Polygon.js";import h from"../geometry/Polyline.js";import f from"../geometry/Geometry.js";import g from"./knowledgeGraph/Entity.js";import m from"./knowledgeGraph/Relationship.js";import _ from"../geometry/SpatialReference.js";import w,{S as E}from"./knowledgeGraph/DataModel.js";import T from"./knowledgeGraph/EntityType.js";import G from"./knowledgeGraph/FieldIndex.js";import"./knowledgeGraph/GraphObjectType.js";import v from"./knowledgeGraph/GraphProperty.js";import k from"./knowledgeGraph/RelationshipType.js";import I from"./knowledgeGraph/SearchIndex.js";import"./knowledgeGraph/GraphObject.js";import{O as P}from"../chunks/ObjectValue.js";import R from"./knowledgeGraph/Path.js";import b from"./knowledgeGraph/GraphApplyEditsResult.js";import"../chunks/ensureType.js";import"../geometry/Extent.js";import"../chunks/tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/metadata.js";import"../config.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/tracking.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../geometry/support/webMercatorUtils.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/JSONSupport.js";import"../chunks/writer.js";import"../core/urlUtils.js";import"../chunks/reader.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../chunks/zmUtils.js";import"../chunks/coordsUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/boundsUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"./knowledgeGraph/GraphNamedObject.js";function S(e,t,n){if(0!==e.error_code)throw new r(t,n,{errorCode:e.error_code,errorMessage:e.error_message})}function D(e,t,r,n){const a=new r.ClientDataKey;a.deleteLater(),a.key_string=e;const o=new r.ClientDataFetchRequestParameter;o.deleteLater(),o.set_key(a);const i=t.get(e);return i&&!n&&(o.v_tag={v_tag:i.version}),o}const M="esri/rest/knowledgeGraph/wasmInterface/";let O;async function j(){if(O)return O;const e=!!p("wasm-simd");return O=async function(e){if(e){const{default:e}=await import("../chunks/arcgis-knowledge-client-core-simd.js").then((e=>e.a));return e({locateFile:e=>d(M+e)})}const{default:t}=await import("../chunks/arcgis-knowledge-client-core.js").then((e=>e.a));return t({locateFile:e=>d(M+e)})}(e),O}var C,x,F,A,N,L,U,z,q,Y,H,K,Q,V;function W(e,t){const r=new t.ArrayValue;return r.deleteLater(),e.forEach((e=>{r.add_value($(e,t))})),r}function B(e,t){const r=new t.ObjectValue;r.deleteLater();for(const[n,a]of Object.entries(e))r.set_key_value(n,$(a,t));return r}function Z(e,t){if(e instanceof c)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.geometry_type=r.geometry_type=t.esriGeometryType.esriGeometryMultipoint,r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],a=[];a[0]=e.points.length;let o=0;return e.points.forEach((e=>{e.forEach((e=>{n[o]=e,o++}))})),r.coords=new Float64Array(n),r.lengths=new Uint32Array(a),r}(e,t);if(e instanceof u)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.geometry_type=t.esriGeometryType.esriGeometryPoint,r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],a=[];a[0]=1,n[0]=e.x,n[1]=e.y;let o=2;return e.hasZ&&(n[o]=e.z,o++),e.hasM&&(n[o]=e.m,o++),r.coords=new Float64Array(n),r.lengths=new Uint32Array(a),r}(e,t);if(e instanceof h||e instanceof y)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],a=[];let o=[];e instanceof h?(r.geometry_type=t.esriGeometryType.esriGeometryPolyline,o=e.paths):e instanceof y&&(r.geometry_type=t.esriGeometryType.esriGeometryPolygon,o=e.rings);let i=0,s=0;return o.forEach((e=>{let t=0;e.forEach((e=>{t++,e.forEach((e=>{n[s]=e,s++}))})),a[i]=t,i++})),r.coords=new Float64Array(n),r.lengths=new Uint32Array(a),r}(e,t);throw new r("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:e})}function $(e,t){if(null==e)return"";if("object"!=typeof e)return e;if(e instanceof Date)return e;if(e instanceof f)return Z(e,t);if(Array.isArray(e)){const r=new t.ArrayValue;return r.deleteLater(),e.forEach((e=>{r.add_value($(e,t))})),r}return B(e,t)}function J(e,t){if(!e.typeName)throw new r("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(e instanceof g){const r=new t.EntityValue;r.deleteLater(),r.type_name=e.typeName;for(const[n,a]of Object.entries(e.properties))r.set_key_value(n,X(a,t));return e.id&&r.set_id(e.id),r}if(e instanceof m){const r=new t.RelationshipValue;r.deleteLater(),r.type_name=e.typeName;for(const[n,a]of Object.entries(e.properties))r.set_key_value(n,X(a,t));return e.id&&r.set_id(e.id),e.originId&&e.destinationId&&r.set_related_entity_ids(e.originId,e.destinationId),r}throw new r("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function X(e,t){return null==e?null:"object"!=typeof e||e instanceof Date?e:e instanceof f?Z(e,t):null}!function(e){e[e.OBJECT=0]="OBJECT",e[e.ENTITY=1]="ENTITY",e[e.RELATIONSHIP=2]="RELATIONSHIP",e[e.PATH=3]="PATH",e[e.ARRAY=4]="ARRAY"}(C||(C={})),function(e){e[e.view=0]="view",e[e.edit=1]="edit"}(x||(x={})),function(e){e[e.exclude=0]="exclude",e[e.include=1]="include"}(F||(F={})),function(e){e[e.ClientDataKeyTypeUNSPECIFIED=0]="ClientDataKeyTypeUNSPECIFIED",e[e.ClientDataKeyTypeString=1]="ClientDataKeyTypeString"}(A||(A={})),function(e){e[e.ClientDataTypeUNSPECIFIED=0]="ClientDataTypeUNSPECIFIED",e[e.ClientDataTypeString=1]="ClientDataTypeString"}(N||(N={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.ClientData=1]="ClientData",e[e.NotModified=2]="NotModified"}(L||(L={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.Error=1]="Error",e[e.ClientDataValue=2]="ClientDataValue"}(U||(U={})),function(e){e[e.Regular=0]="Regular",e[e.Provenance=1]="Provenance",e[e.Document=2]="Document"}(z||(z={})),function(e){e[e.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",e[e.esriFieldTypeInteger=1]="esriFieldTypeInteger",e[e.esriFieldTypeSingle=2]="esriFieldTypeSingle",e[e.esriFieldTypeDouble=3]="esriFieldTypeDouble",e[e.esriFieldTypeString=4]="esriFieldTypeString",e[e.esriFieldTypeDate=5]="esriFieldTypeDate",e[e.esriFieldTypeOID=6]="esriFieldTypeOID",e[e.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",e[e.esriFieldTypeBlob=8]="esriFieldTypeBlob",e[e.esriFieldTypeRaster=9]="esriFieldTypeRaster",e[e.esriFieldTypeGUID=10]="esriFieldTypeGUID",e[e.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",e[e.esriFieldTypeXML=12]="esriFieldTypeXML",e[e.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",e[e.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",e[e.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",e[e.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset"}(q||(q={})),function(e){e[e.esriGeometryNull=0]="esriGeometryNull",e[e.esriGeometryPoint=1]="esriGeometryPoint",e[e.esriGeometryMultipoint=2]="esriGeometryMultipoint",e[e.esriGeometryPolyline=3]="esriGeometryPolyline",e[e.esriGeometryPolygon=4]="esriGeometryPolygon",e[e.esriGeometryEnvelope=5]="esriGeometryEnvelope",e[e.esriGeometryAny=6]="esriGeometryAny",e[e.esriGeometryMultiPatch=7]="esriGeometryMultiPatch"}(Y||(Y={})),function(e){e[e.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",e[e.esriUUIDESRI=1]="esriUUIDESRI",e[e.esriUUIDRFC4122=2]="esriUUIDRFC4122"}(H||(H={})),function(e){e[e.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",e[e.esriTypeEntity=1]="esriTypeEntity",e[e.esriTypeRelationship=2]="esriTypeRelationship",e[e.esriTypeBoth=4]="esriTypeBoth"}(K||(K={})),function(e){e[e.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",e[e.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",e[e.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",e[e.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",e[e.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",e[e.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",e[e.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",e[e.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",e[e.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",e[e.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension",e[e.esriGraphPropertyProvenanceInstanceId=10]="esriGraphPropertyProvenanceInstanceId",e[e.esriGraphPropertyProvenanceSourceType=11]="esriGraphPropertyProvenanceSourceType",e[e.esriGraphPropertyProvenanceSourceName=12]="esriGraphPropertyProvenanceSourceName",e[e.esriGraphPropertyProvenanceSource=13]="esriGraphPropertyProvenanceSource",e[e.esriGraphPropertyProvenanceComment=14]="esriGraphPropertyProvenanceComment",e[e.esriGraphPropertyProvenanceTypeName=15]="esriGraphPropertyProvenanceTypeName",e[e.esriGraphPropertyProvenancePropertyName=16]="esriGraphPropertyProvenancePropertyName"}(Q||(Q={})),function(e){e[e.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",e[e.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",e[e.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"}(V||(V={}));let ee=!1;function te(e){return{name:e.name,alias:e.alias,role:z[e.role.value]?z[e.role.value]:null,strict:e.strict,properties:oe(e.properties),fieldIndexes:ie(e.field_indexes)}}function re(e){e.deleteLater();const t=te(e),r=[];for(let t=0;t<e.end_points.size();t++){const n=e.end_points.get(t);r.push({originEntityType:n.origin_entity_type,destinationEntityType:n.dest_entity_type})}return e.end_points.delete(),new k(Object.assign({endPoints:r},t))}function ne(e){const t=[];for(let n=0;n<e.size();n++)t.push(((r=e.get(n)).deleteLater(),new T(te(r))));var r;return e.delete(),t}function ae(e){const t=[];for(let r=0;r<e.size();r++)t.push(e.get(r));return e.delete(),t}function oe(e){const t=[];for(let n=0;n<e.size();n++){const a=((r=e.get(n)).deleteLater(),new v({alias:r.alias,name:r.name,fieldType:q[r.field_type.value]?q[r.field_type.value]:null,geometryType:Y[r.geometry_type.value]?Y[r.geometry_type.value]:null,hasM:r.has_m,hasZ:r.has_z,nullable:r.nullable,editable:r.editable,required:r.required,defaultVisibility:r.default_visibility,systemMaintained:r.system_maintained,role:Q[r.role.value],defaultValue:r.default_value}));"esriFieldTypeBigInteger"===a.fieldType&&(ee=!0),t.push(a)}var r;return e.delete(),t}function ie(e){const t=[];for(let n=0;n<e.size();n++)t.push(((r=e.get(n)).deleteLater(),new G({name:r.name,unique:r.unique,ascending:r.ascending,description:r.description,fieldNames:ae(r.fields)})));var r;return e.delete(),t}function se(e){const t=[];for(let r=0;r<e.size();r++)t.push(re(e.get(r)));return e.delete(),t}function le(e){const t=[];for(let n=0;n<e.size();n++){const a=e.get(n);a.deleteLater(),t.push(new E({behavior:(r=a).behavior,value:r.value}))}var r;return e.delete(),t}function de(e){const t=[];for(let r=0;r<e.size();r++){const r=new I,n=e.get(0);r.name=n.name,r.supportedCategory=K[n.supported_category.value];const a=n.analyzers.size();for(let e=0;e<a;e++)r.analyzers.push({name:n.analyzers.get(e).name});n.analyzers.delete();for(let e=0;e<n.search_properties.keys().size();e++){const t=n.search_properties.keys().get(e),a=n.search_properties.get(t),o=[];for(let e=0;e<a.property_names.size();e++)o.push(a.property_names.get(e));r.searchProperties.set(t,{propertyNames:o})}t.push(r)}return e.delete(),t}var pe;function ce(e,t){const n={paths:[],hasM:!1,hasZ:!1},a=ue(e,n),{coords:o,geometry_type:i,lengths:s}=e;if(i.value!==t)throw new r("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");let l=0;return s.forEach((e=>{const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<a;t++)e[t]=o[l],l++;t.push(e)}n.paths.push(t)})),n}function ue(e,t){let r=2;return e.has_z?(t.hasZ=e.has_z,r++):t.hasZ=!1,e.has_m?(t.hasM=e.has_m,r++):t.hasM=!1,r}!function(e){e[e.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",e[e.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",e[e.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",e[e.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",e[e.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",e[e.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",e[e.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",e[e.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH"}(pe||(pe={}));const ye=()=>n.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors");function he(e,t,r){return((e,t,r)=>{if(null==e)return null;if("object"!=typeof e)return e;if("getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case pe.ESRI_GEOMETRY_POINT:return function(e,t){const r={spatialReference:t};let n=2;ue(e,r);const a=e.coords;return r.x=a[0],r.y=a[1],e.has_z&&(r.z=a[n],n++),e.has_m&&(r.m=a[n]),new u(r)}(e,r);case pe.ESRI_GEOMETRY_MULTIPOINT:return function(e,t){const r={spatialReference:t},n=ue(e,r),a=e.lengths,o=e.coords,i=a[0];r.points=[];let s=0;for(let e=0;e<i;e++){const e=[];for(let t=0;t<n;t++)e[t]=o[s],s++;r.points.push(e)}return new c(r)}(e,r);case pe.ESRI_GEOMETRY_POLYLINE:return function(e,t){const{paths:r,hasM:n,hasZ:a}=ce(e,pe.ESRI_GEOMETRY_POLYLINE);return new h({paths:r,hasM:n,hasZ:a,spatialReference:t})}(e,r);case pe.ESRI_GEOMETRY_POLYGON:return function(e,t){const{paths:r,hasM:n,hasZ:a}=ce(e,pe.ESRI_GEOMETRY_POLYGON);return new y({rings:r,hasM:n,hasZ:a,spatialReference:t})}(e,r);case pe.ESRI_GEOMETRY_ENVELOPE:case pe.ESRI_GEOMETRY_MULTI_PATCH:return ye().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case pe.ESRI_GEOMETRY_NULL:case pe.ESRI_GEOMETRY_ANY:default:return ye().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return ye().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case C.OBJECT:return function(e,t,r){return new P(ge(e,t,r))}(e,t,r);case C.ENTITY:return fe(e,t,r);case C.RELATIONSHIP:return me(e,t,r);case C.PATH:return function(e,t,r){const n=e.entity_count(),a=e.relationship_count(),o=[];for(let i=0;i<n;i++)o.push(fe(e.get_entity_at(i),t,r)),i<a&&o.push(me(e.get_relationship_at(i),t,r));return new R({path:o})}(e,t,r);case C.ARRAY:return function(e,t,r){const n=[],a=e.count();for(let o=0;o<a;o++){const a=e.get_value_at(o);n.push(he(a,t,r))}return n}(e,t,r);default:return ye().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}})(e,t,r)}function fe(e,t,r){const n=e.type_name,a=ge(e,t,r),o=e.get_id();return new g(Object.assign({typeName:n,id:o},a))}function ge(e,t,r){const n={},a=e.key_count();for(let o=0;o<a;o++)n[e.get_key_at(o)]=he(e.get_value_at(o),t,r);return{properties:n}}function me(e,t,r){const n=e.type_name,a=ge(e,t,r);return new m(Object.assign({typeName:n,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},a))}function _e(e){const t=[];for(let r=0;r<e.get_header_keys().size();r++)t.push(e.get_header_keys().get(r));const r=new _(e.get_out_sr());return new o({headerKeys:t,outSpatialReference:r,exceededTransferLimit:e.exceeded_transfer_limit()})}const we=new Map,Ee=()=>new Map(we.entries()),Te={fetchKnowledgeGraph:async e=>{const t=new s({url:e}),r=[];return r.push(De(t)),r.push(Me(t)),await Promise.all(r),t},refreshDataModel:async e=>{e.dataModel=await Le(e)},refreshServiceDefinition:async e=>{const r=(await t(e.url,{query:{f:"json"}})).data;return r.capabilities=r?.capabilities?.split(","),r.supportedQueryFormats=r?.supportedQueryFormats?.split(","),e.serviceDefinition=new l(r),e.serviceDefinition},executeQueryStreaming:async(e,t,n)=>{const a=`${e.url}/graph/query`;await Ce(e);const o=await Fe(a,n);if(!e.serviceDefinition?.supportsProvenance&&"include"===t.provenanceBehavior)throw new r("knowledge-graph:provenance-not-supported","The Knowledge Graph Service definition indicated that provenance is not supported");o.data.body=await async function(e,t){const n=await j(),a=new n.GraphQueryRequestEncoder;if(a.deleteLater(),e.outputSpatialReference?a.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:e.outputSpatialReference.wkt??""}:a.output_spatial_reference=n.SpatialReferenceUtil.WGS84(),a.open_cypher_query=e.openCypherQuery,e.bindParameters)for(const[t,r]of Object.entries(e.bindParameters))xe(t,r,a,n);if(e.bindGeometryQuantizationParameters)o=e.bindGeometryQuantizationParameters,a.input_quantization_parameters={xy_resolution:o.xyResolution,x_false_origin:o.xFalseOrigin,y_false_origin:o.yFalseOrigin,z_resolution:o.zResolution,z_false_origin:o.zFalseOrigin,m_resolution:o.mResolution,m_false_origin:o.mFalseOrigin};else{if(t.dataModel||await De(t),4326!==t.dataModel?.spatialReference?.wkid)throw new r("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");a.input_quantization_parameters=n.InputQuantizationUtil.WGS84_lossless()}var o,i;e.outputQuantizationParameters&&function(e,t,n){if(!e.extent)throw new r("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",e.extent);if(!e.quantizeMode)throw new r("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",e.quantizeMode);if(!e.tolerance)throw new r("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",e.quantizeMode);t.output_quantization_parameters={extent:{xmax:e.extent.xmax,ymax:e.extent.ymax,xmin:e.extent.xmin,ymin:e.extent.ymin},quantize_mode:n.esriQuantizeMode[e.quantizeMode],tolerance:e.tolerance}}(e.outputQuantizationParameters,a,n),e.provenanceBehavior&&(i=e.provenanceBehavior,a.provenance_behavior={value:F[i]});try{a.encode()}catch(e){throw new r("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:e})}const s=a.get_encoding_result();if(0!==s.error.error_code)throw new r("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:s.error.error_code,errorMessage:s.error.error_message});return structuredClone(s.get_byte_buffer())}(t,e);const s=await je(o.data.url,o.data);if(e.dataModel){const t=await Ne(s,e.dataModel);return new i({resultRowsStream:t.readableStream,resultHeader:t.resultHeader})}throw new r("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(e,t,n)=>{if(e.serviceDefinition?.dataEditingNotSupported)throw new r("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const a=`${e.url}/graph/applyEdits`;await Ce(e);const o=await Fe(a,n);return o.data.body=await async function(e,t){if(t.dataModel||await De(t),!t.dataModel)throw new r("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const n=await j(),a=!!e.options?.cascadeDelete,o=new n.GraphApplyEditsEncoder(n.SpatialReferenceUtil.WGS84(),e.options?.inputQuantizationParameters?(i=e.options?.inputQuantizationParameters,{xy_resolution:i.xyResolution,x_false_origin:i.xFalseOrigin,y_false_origin:i.yFalseOrigin,z_resolution:i.zResolution,z_false_origin:i.zFalseOrigin,m_resolution:i.mResolution,m_false_origin:i.mFalseOrigin}):n.InputQuantizationUtil.WGS84_lossless());var i;o.deleteLater(),o.cascade_delete=a;try{let t;e.entityAdds?.forEach((e=>{t=o.add_entity(J(e,n)),S(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),e.relationshipAdds?.forEach((e=>{if(!e.originId||!e.destinationId)throw new r("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");t=o.add_relationship(J(e,n)),S(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),e.entityUpdates?.forEach((e=>{if(!e.id)throw new r("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_entity(J(e,n)),S(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),e.relationshipUpdates?.forEach((e=>{if(!e.id)throw new r("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_relationship(J(e,n)),S(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),e.entityDeletes?.forEach((e=>{if(!e.typeName)throw new r("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!0);t.deleteLater(),e.ids?.forEach((e=>{t.delete_by_id(e)}))})),e.relationshipDeletes?.forEach((e=>{if(!e.typeName)throw new r("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!1);e.ids?.forEach((e=>{t.delete_by_id(e)}))})),o.encode()}catch(e){throw new r("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:e})}const s=o.get_encoding_result();return S(s.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(s.get_byte_buffer())}(t,e),async function(e){const t=e.headers.get("content-type");if(t?.includes("application/x-protobuf")){const t=await e.arrayBuffer(),r=new((await j()).GraphApplyEditsDecoder);return r.deleteLater(),r.decode(new Uint8Array(t)),function(e){const t=e.has_error(),r=new b({hasError:t,error:t?{errorCode:e.error.error_code,errorMessage:e.error.error_message}:null}),n=e.get_edit_results_count();for(let t=0;t<n;t++){const n=e.get_edit_results_at(t),a=e.get_edit_results_type_name_at(t),o=[],i=[],s=[],l=n.get_add_results_count(),d=n.get_update_results_count(),p=n.get_delete_results_count();for(let e=0;e<l;e++){const t=n.get_add_result_at(e);o.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}for(let e=0;e<d;e++){const t=n.get_update_result_at(e);i.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}for(let e=0;e<p;e++){const t=n.get_delete_result_at(e);s.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}r.editResults.push({typeName:a,adds:o,updates:i,deletes:s})}return r}(r)}throw new r("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:t,data:e.text()})}(await je(o.data.url,o.data))},executeQuery:async(e,n,o)=>{const i=`${e.url}/graph/query`,s=await t(i,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:n.openCypherQuery,...o?.query},signal:o?.signal,timeout:o?.timeout}),l=s.getHeader?.("content-type"),d=s.data;if(l?.includes("application/x-protobuf")){const t=new((await j()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel){const r=Ae(t,d,e.dataModel);return new a({resultRows:r.resultRows,resultHeader:r.resultHeader})}throw new r("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new r("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:l,data:s.data})},executeSearch:async(e,n,o)=>{const i=n.typeCategoryFilter,s=`${e.url}/graph/search`,l=await t(s,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${n.searchQuery}"`,typeCategoryFilter:i,...o?.query},signal:o?.signal,timeout:o?.timeout}),d=l.getHeader?.("content-type"),p=l.data;if(d?.includes("application/x-protobuf")){const t=new((await j()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel){const r=Ae(t,p,e.dataModel);return new a({resultRows:r.resultRows,resultHeader:r.resultHeader})}throw new r("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new r("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:d,data:l.data})},executeSearchStreaming:async(e,t,n)=>{const a=`${e.url}/graph/search`;await Ce(e);const o=await Fe(a,n);o.data.body=await async function(e){const t=await j(),n=new t.GraphSearchRequestEncoder;if(n.deleteLater(),n.search_query=e.searchQuery,n.type_category_filter=t.esriNamedTypeCategory[e.typeCategoryFilter],!0===e.returnSearchContext&&(n.return_search_context=e.returnSearchContext),null!=e.start&&e.start>0&&(n.start_index=e.start),null!=e.num&&(n.max_num_results=e.num),null!=e.idsFilter&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{n.set_ids_filter(W(e.idsFilter,t))}catch(e){throw new r("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:e})}e.namedTypesFilter?.forEach((e=>{n.add_named_type_filter(e)}));try{n.encode()}catch(e){throw new r("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:e})}const a=n.get_encoding_result();if(0!==a.error.error_code)throw new r("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:a.error.error_code,errorMessage:a.error.error_message});return structuredClone(a.get_byte_buffer())}(t);const s=await je(o.data.url,o.data);if(e.dataModel){const t=await Ne(s,e.dataModel);return new i({resultRowsStream:t.readableStream,resultHeader:t.resultHeader})}throw new r("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},fetchClientDataAtKeys:async(e,t,n={ignoreCache:!1})=>{if(!t.length)return new Map;let a=we.get(e.url||"");a||(a=new Map,we.set(e.url||"",a));const o=new Map(a.entries()),i=`${e.url}/clientData/fetch`;t=Array.from(new Set(t));const s=await j(),l=function(e,t,r,n=!1){const a=new r.ClientDataFetchRequestEncoder;a.deleteLater();for(const o of e){const e=D(o,t,r,n);a.add_client_data_fetch_request_parameter(e)}a.encode();const o=a.get_encoding_result();return S(o.error,"knowledge-graph:fetchClientDataAtKeys-encoding-failed","Attempting to encode the fetchClientDataAtKeys failed"),structuredClone(o.get_byte_buffer())}(t,a,s,n.ignoreCache),d=await Fe(i,n.requestOptions);d.data.body=l;const p=await je(d.data.url,d.data),c=p.headers.get("content-type");if(c?.includes("application/x-protobuf")){const e=new s.ClientDataFetchResponseDecoder;e.deleteLater();const t=await p.arrayBuffer();return e.decode(new Uint8Array(t)),e.has_error()&&S(e.error,"knowledge-graph:fetchClientDataAtKeys-decoding-error","An error occurred while decoding the client data keys response"),function(e,t,r,n=!1){const a=new Map;for(let o=0;o<e.get_results_count();o++){const i=e.get_result_at(o);if(i.get_fetch_result_case().value!==U.ClientDataValue||0!==i.error().error_code){const e=i.get_key().key_string;r.has(e)&&t.delete(e);continue}const s=i.get_value(),l=i.get_key().key_string,d=r.get(l);let p;if(s.get_data_case().value===L.NotModified&&d)p=d.value;else{if(s.get_data_case().value!==L.ClientData)continue;{p=s.get_data().client_data_string;const e=i.get_value().get_v_tag().v_tag;n||t.set(l,{key:l,version:e,value:p})}}a.set(l,p)}return a}(e,a,o,n.ignoreCache)}throw new r("knowledge-graph:unexpected-server-response","server returned an unexpected response when fetching client data",{responseType:c,data:p})},fetchAllClientDataKeys:async(e,n)=>{const a=`${e.url}/clientData`,o=await t(a,{responseType:"array-buffer",query:{f:"pbf"},signal:n?.signal,timeout:n?.timeout}),i=o.getHeader?.("content-type"),s=o.data;if(i?.includes("application/x-protobuf")){const e=new((await j()).ClientDataKeysResponseDecoder);return e.deleteLater(),e.decode(new Uint8Array(s)),e.has_error()&&S(e.error,"knowledge-graph:fetchAllClientDataKeys-decoding-error","An error occurred while decoding the client data keys response"),function(e){const t=e.get_keys(),r=new Array;for(let e=0;e<t.get_keys_count();e++){const n=t.get_key_at(e);n.get_client_data_key_type().value===A.ClientDataKeyTypeString&&r.push(n.key_string)}return r}(e)}throw new r("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:i,data:o.data})},clearClientDataCache:()=>we.clear(),_fetchWrapper:async(e,t)=>fetch(e,t)};async function Ge(e,t,r){return Te.executeApplyEdits(e,t,r)}async function ve(e,t,r){return Te.executeQuery(e,t,r)}async function ke(e,t,r){return Te.executeQueryStreaming(e,t,r)}async function Ie(e,t,r){return Te.executeSearch(e,t,r)}async function Pe(e,t,r){return Te.executeSearchStreaming(e,t,r)}function Re(e,t){return Te.fetchAllClientDataKeys(e,t)}function be(e,t,r){return Te.fetchClientDataAtKeys(e,t,r)}async function Se(e){return Te.fetchKnowledgeGraph(e)}async function De(e){return Te.refreshDataModel(e)}async function Me(e){return Te.refreshServiceDefinition(e)}function Oe(){return Te.clearClientDataCache()}async function je(e,t){return Te._fetchWrapper(e,t)}async function Ce(t){const r=e?.findCredential(t.url);r||(t.dataModel?await Le(t):await De(t))}function xe(e,t,r,n){null==t?r.set_param_key_value(e,""):"object"!=typeof t||t instanceof Date?r.set_param_key_value(e,t):t instanceof f?r.set_param_key_value(e,Z(t,n)):Array.isArray(t)?r.set_param_key_value(e,W(t,n)):r.set_param_key_value(e,B(t,n))}async function Fe(e,r){return t(e,{responseType:"native-request-init",method:"post",query:{f:"pbf",...r?.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:r?.signal,timeout:r?.timeout})}function Ae(e,t,n,a){e.push_buffer(new Uint8Array(t));const o=[];let i,s,l=0;for(;e.next_row();){i&&s||(i=a??_e(e),s=i.outSpatialReference??new _({wkid:4326})),l||(l=e.get_header_keys().size());const t=new Array(l);for(let r=0;r<l;r++){const a=e.get_value(r);t[r]=he(a,n,s)}o.push(t)}if(e.has_error())throw new r("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - inner row decoding",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return{resultHeader:i,resultRows:o}}async function Ne(e,t){const a=e.headers.get("content-type");if(e.headers.get("content-length")&&n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),a?.includes("application/x-protobuf")){const a=e.body?.getReader(),i=new((await j()).GraphQueryDecoder);let s,l,d;i.deleteLater();const p=new Promise(((e,t)=>{l=e,d=t}));let c=!1;return{readableStream:new ReadableStream({async start(e){try{return function p(){return a?.read().then((({done:u,value:y})=>{try{if(u){let t;if(i.has_error()?t=new r("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - query stream done",{errorCode:i.error.error_code,errorMessage:i.error.error_message}):c||l(new o),a.releaseLock(),t)throw e.error(t),d(t),t;return void e.close()}const n=Ae(i,y,t,s),h=n.resultRows;return h.length>0&&e.enqueue(h),!s&&n.resultHeader&&(s=n.resultHeader,l(n.resultHeader),c=!0),p()}catch(e){throw n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(e),d(e),new r("knowledge-graph:unexpected-server-response","Error inside streaming data return parsing",{error:e})}}))}()}catch(t){a?.releaseLock(),e.error(new r("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:t})),e.close()}}}),resultHeader:await p}}throw new r("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:a,data:e.text()})}async function Le(e){const a=`${e.url}/dataModel/queryDataModel`,o=await t(a,{responseType:"array-buffer",query:{f:"pbf"}}),i=o.getHeader?.("content-type"),s=o.data;if(i?.includes("application/x-protobuf")){const e=(await j()).decode_data_model_from_protocol_buffer(new Uint8Array(s));if(!e)throw new r("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return function(e){e.deleteLater(),ee=!1;const t=new w({timestamp:e.timestamp,spatialReference:new _(e.spatial_reference),strict:e.strict,objectIdField:e.objectid_property,globalIdField:e.globalid_property,arcgisManaged:e.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:V[e.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],databaseNativeIdentifier:e.identifier_info?.identifier_mapping_info?.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:e.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:H[e.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]}},searchIndexes:de(e.search_indexes),entityTypes:ne(e.entity_types),relationshipTypes:se(e.relationship_types),metaEntityTypes:ne(e.meta_entity_types),provenanceSourceTypeValues:le(e.provenance_source_type_values.value_behavior_array)});return ee&&n.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("A big integer field was detected in the retrieved data model.  The `big-integer` field type is not fully supported in web clients.  Please see https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#type"),t}(e)}throw new r("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:i,data:o.data})}const Ue=Object.freeze(Object.defineProperty({__proto__:null,_fetchWrapper:je,_getClientDataCacheCopy:Ee,clearClientDataCache:Oe,clientDataCache:we,executeApplyEdits:Ge,executeQuery:ve,executeQueryStreaming:ke,executeSearch:Ie,executeSearchStreaming:Pe,fetchAllClientDataKeys:Re,fetchClientDataAtKeys:be,fetchKnowledgeGraph:Se,kgRestServices:Te,refreshDataModel:De,refreshServiceDefinition:Me},Symbol.toStringTag,{value:"Module"}));export{je as _fetchWrapper,Ee as _getClientDataCacheCopy,Oe as clearClientDataCache,we as clientDataCache,Ge as executeApplyEdits,ve as executeQuery,ke as executeQueryStreaming,Ie as executeSearch,Pe as executeSearchStreaming,Re as fetchAllClientDataKeys,be as fetchClientDataAtKeys,Se as fetchKnowledgeGraph,j as g,Ue as k,Te as kgRestServices,De as refreshDataModel,Me as refreshServiceDefinition};

// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/promiseUtils ../../../../../../core/SetUtils ../../../../../../layers/support/FieldsIndex ../../../../../../libs/parquet/parquet ./ALoadStrategy ./chunks/FeatureSnapshotSourceChunk ../../support/FeatureSetReaderJSON ../../support/FeatureSetReaderParquet".split(" "),function(h,n,k,p,q,r,l,t,u){class v extends r.ALoadStrategy{constructor(a,b,d,e){super(e);this._service=a;this._metadata=b;this._schema=d;this._chunkId=0;this._files=[];this._availableFields=new Set(d.mutable.availableFields);
({geometryInfo:a}=this._service);"location"===a.type?(this._availableFields.add(a.latitudeFieldName),this._availableFields.add(a.longitudeFieldName)):this._availableFields.add(a.primaryFieldName)}destroy(){for(const a of this._files)a.destroy()}get about(){return{willQueryAllFeatures:!0,willQueryFullResolutionGeometry:!0}}async updateFields(a){await this._promise;a=new Set(a);const b=k.difference(a,this._availableFields);this._availableFields=k.union(b,this._availableFields);await Promise.all(this._files.map(d=>
{const e=Array.from(b).map(g=>d.metadata.getFieldIndex(g));return d.inner.updateChunks(new Uint16Array(e))}))}async load(a){null==this._promise&&(this._promise=this._download());return this._promise}unload(a){}async addParquetFile(a){this._insert(a)}async _insert(a){const b=await q.ParquetFile.create(a,{geometryInfo:this._service.geometryInfo,outSpatialReference:this._service.outSpatialReference,getCustomParameters:()=>this._schema.mutable.dataFilter.customParameters}),{geometryInfo:d}=this._service;
n.throwIfAborted(this._options);const {fields:e,timeZoneByFieldName:g}=this._service.metadata.fieldsIndex;a=e.map(c=>({...c,index:b.metadata.getFieldIndex(c.name)}));const m=p.fromJSON({fields:a,timeZoneByFieldName:g});a=new Uint16Array(Array.from(this._availableFields.values()).map(c=>m.get(c)?.index));await b.inner.readChunksWithCallback(a,c=>{var f=this._chunkId++;c=new u.FeatureSetReaderParquet(this._metadata,m,d,c,f);f=new l.FeatureSnapshotSourceChunk(c,null,f,!1);this._store.insert(f)});this._files.push(b)}async _download(){try{await Promise.all(this._service.source.urls.map(b=>
this._insert(b)));const a=new l.FeatureSnapshotSourceChunk(t.FeatureSetReaderJSON.empty(this._metadata),null,-1,!0);this._store.insert(a)}catch(a){throw console.error(a),a;}}}h.ParquetLoadStrategy=v;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
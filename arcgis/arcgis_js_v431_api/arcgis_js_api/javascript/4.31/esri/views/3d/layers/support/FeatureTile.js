// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/arrayUtils ../../../../core/signal ../../../../geometry/support/aaBoundingRect ../../../../layers/graphics/dehydratedFeatures ../graphics/graphicUtils".split(" "),function(b,m,g,f,h,n){const k=new Set;class p{constructor(a){this.descriptor=a;this.fetchStatus=b.FetchStatus.FETCH_NEEDED;this.fetchingFeatureResolution=this.displayingFeatureResolution=0;this._featuresLength=g.signal(0);this._numVertices=0;this._featuresMissing=g.signal(!0);this._fetchFailed=g.signal(!1);
this._shuffled=!1;this._numFeatures=-1;this._emptyFeatureRatio=g.signal(0);this._estimatedSize=-1;this._estimatedUnusedSize=0;this._estimatedUnusedSizeDirty=!1;this._displayingFeatures=null;this.alive=!0;this.filtered=!1;this._features=null;this._featureLimit=g.signal(0);this._availableFields=k;this.displayingFeatureResolution=this.fetchingFeatureResolution=a.resolution}get featuresMissing(){return this._featuresMissing.value}set featuresMissing(a){this._featuresMissing.value=a}get missingAttributes(){return this._missingAttributes}get fetchFailed(){return this._fetchFailed.value}set fetchFailed(a){this._fetchFailed.value=
a}get displayingFeatures(){return this._displayingFeatures}set displayingFeatures(a){this._displayingFeatures=a;this.extentIncludingBorrowedFeatures=null}get perTileMaximumNumberOfFeaturesExceeded(){const a=(this.fetchStatus===b.FetchStatus.DONE||this.fetchStatus===b.FetchStatus.FULL)&&this.featuresMissing;return!this.filtered&&(a||this.hasFeatureLimit)}get features(){return this._features}get featureLimit(){return this._featureLimit.value}set featureLimit(a){this._featureLimit.value!==a&&(this._featureLimit.value=
a,this._estimatedUnusedSizeDirty=!0)}get hasFeatureLimit(){return this.featureLimit!==this._featuresLength.value}get hasAllFeatures(){return!(this.featuresMissing||this.fetchFailed||this.hasFeatureLimit)}get availableFields(){return this._availableFields}setFeatures(a,c,d,e){this._availableFields=d??k;this._features=a;this._featuresLength.value=a?.length??0;this._shuffled=!1;this._estimatedSize=-1;this._estimatedUnusedSizeDirty=!0;this._missingAttributes=e;a&&0<a.length?(this._emptyFeatureRatio.value=
c/(a.length+c),this._numVertices=a.reduce((q,r)=>q+h.numVertices(r.geometry),0)):this._numVertices=this._emptyFeatureRatio.value=0}computeZQuantizationFactor(){if(this._features&&0<this._features.length){const a=this._features.reduce((c,{geometry:d})=>Math.max(c,n.computeMaxZ(d)??0),0);return Math.floor(a/this.descriptor.planetRadius)+1}return 1}get emptyFeatureRatio(){return this._emptyFeatureRatio.value}get numFeatures(){return this.hasPreciseFeatureCount?this._numFeatures:this._features?this._features.length:
0}set numFeatures(a){this._numFeatures=a}get hasPreciseFeatureCount(){return-1<this._numFeatures}get needsFeatureCount(){return-1===this._numFeatures}get numVertices(){return this._numVertices}get id(){return this.descriptor.id}get estimatedSize(){this.updateMemoryEstimates();return this._estimatedSize}get estimatedUnusedSize(){return this._estimatedUnusedSize}updateMemoryEstimates(){if(0>this._estimatedSize){this._estimatedUnusedSize=this._estimatedSize=0;if(this._features)for(var a=0;a<this._features.length;++a){const c=
h.estimateSize(this._features[a]);this._estimatedSize+=c;a>=this.featureLimit&&(this._estimatedUnusedSize+=c)}return!0}if(this._estimatedUnusedSizeDirty){this._estimatedUnusedSize=0;this._estimatedUnusedSizeDirty=!1;if(this._features)for(a=this.featureLimit;a<this._features.length;++a)this._estimatedUnusedSize+=h.estimateSize(this._features[a]);return!0}return!1}get isFetching(){return this.fetchStatus===b.FetchStatus.FETCHING||this.fetchStatus===b.FetchStatus.REFETCHING}get isRefetching(){return this.fetchStatus===
b.FetchStatus.REFETCHING}get needsFetching(){return this.fetchStatus===b.FetchStatus.FETCH_NEEDED||this.fetchStatus===b.FetchStatus.REFETCH_NEEDED}get needsRefetching(){return this.fetchStatus===b.FetchStatus.REFETCH_NEEDED}get isFetched(){return this.fetchStatus===b.FetchStatus.DONE||this.fetchStatus===b.FetchStatus.FULL}resetFetching(){this.fetchStatus=this.fetchStatus===b.FetchStatus.REFETCHING?b.FetchStatus.REFETCH_NEEDED:b.FetchStatus.FETCH_NEEDED}get needsDisplayUpdate(){var a;if(a=!!this._features){a:{a=
this._features;var c=this.displayingFeatures,d=this.featureLimit;if(null==c||null==a||d!==c.length||d>a.length)a=!1;else{for(let e=0;e<d;++e)if(a[e]!==c[e]){a=!1;break a}a=!0}}a=!a}return a}intersects(a){if(null==a||!this.descriptor.extent)return!0;f.fromExtent(a,l);return f.intersects(this.descriptor.extent,l)}intersectionIncludingBorrowed(a,c){const d=null!=this.extentIncludingBorrowedFeatures?this.extentIncludingBorrowedFeatures:this.descriptor.extent;if(!a&&!d)return f.copy(c,f.positiveInfinity),
c;null!=a?(f.fromExtent(a,c),f.intersection(c,d,c)):f.copy(c,d);return c}_shuffle(a){this._features&&(this._features.sort((c,d)=>h.getObjectId(c,a)-h.getObjectId(d,a)),m.shuffle(this._features,16438),this._estimatedUnusedSizeDirty=this._shuffled=!0)}reduceFeatures(a,c,d){if(0>=a)return!1;if(!this._features)return this.featureLimit=0,!1;let e=!1;this.featureLimit=Math.ceil(this.numFeatures*a);this.featureLimit>this._features.length&&(this.featureLimit=this._features.length,this.fetchStatus===b.FetchStatus.DONE&&
0<this._features.length&&(this.fetchStatus=b.FetchStatus.REFETCH_NEEDED,e=!0));!this._shuffled&&1>a&&this._shuffle(d);a=Math.max(this.featureLimit,Math.ceil(c*this.numFeatures));this._features.length>a&&(this._features.length=a,this._featuresLength.value=a,this.featuresMissing=!0,this.fetchStatus===b.FetchStatus.FULL&&(this.fetchStatus=b.FetchStatus.DONE));return e}get cache(){return{availableFields:this._availableFields,features:this._features,numFeatures:this._numFeatures,emptyFeatureRatio:this._emptyFeatureRatio.value,
fetchStatus:this.fetchStatus,featuresMissing:this.featuresMissing}}set cache(a){this.requestController=null;this._availableFields=a.availableFields;this._features=a.features;this._featuresLength.value=a.features?.length??0;this._numFeatures=a.numFeatures;this._emptyFeatureRatio.value=a.emptyFeatureRatio;this.fetchStatus=a.fetchStatus;this.featuresMissing=a.featuresMissing;this._estimatedSize=-1;this._estimatedUnusedSizeDirty=!0}}b.FetchStatus=void 0;(function(a){a[a.FETCH_NEEDED=0]="FETCH_NEEDED";
a[a.REFETCH_NEEDED=1]="REFETCH_NEEDED";a[a.FETCHING=2]="FETCHING";a[a.REFETCHING=3]="REFETCHING";a[a.DONE=4]="DONE";a[a.FULL=5]="FULL"})(b.FetchStatus||(b.FetchStatus={}));const l=f.create();b.FeatureTile=p;b.failedFeatureCount=-2;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
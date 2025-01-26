// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/libs/gl-matrix-2/factories/vec4f64","../../../../chunks/sphere","./I3SUtil","../../support/ElevationRange"],function(b,g,h,k,l){class f extends l.ElevationRange{constructor(a,c){super(NaN,NaN);this.id=a;this.serviceMbsInIndexSR=c;this.serviceMbsInRenderSR=h.fromValues(0,0,0,-1)}invalidateServiceBVsInRenderSR(){k.invalidateMbs(this.serviceMbsInRenderSR);this.serviceObbInRenderSR?.invalidate()}shareServiceBVsInRenderSRWith(a){this.serviceObbInRenderSR=a.serviceObbInRenderSR;
this.serviceMbsInRenderSR=a.serviceMbsInRenderSR}}b.NodeFilterImpact=void 0;(function(a){a[a.Unmodified=0]="Unmodified";a[a.Culled=1]="Culled";a[a.NotChecked=2]="NotChecked"})(b.NodeFilterImpact||(b.NodeFilterImpact={}));b.NodeIMModificationImpact=void 0;(function(a){a[a.Unmodified=0]="Unmodified";a[a.PotentiallyModified=1]="PotentiallyModified";a[a.Culled=2]="Culled";a[a.Unknown=3]="Unknown";a[a.NotChecked=4]="NotChecked"})(b.NodeIMModificationImpact||(b.NodeIMModificationImpact={}));class m extends f{constructor(a,
c,d,e,n,p,q,r,t,u){super(a,d);this.index=c;this.childCount=e;this.level=n;this.resources=p;this.version=q;this.lodMetric=r;this.maxError=t;this.numFeatures=u;this.failed=!1;this.cacheState=b.CacheState.Unknown;this.childrenLoaded=this.memory=this.vertexCount=0;this.hasModifications=!1;this.imModificationImpact=b.NodeIMModificationImpact.NotChecked;this.elevationAgnosticBoundingVolume=g.fromValues(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR();this.elevationAgnosticBoundingVolume[3]=
-1}}b.CacheState=void 0;(function(a){a[a.Unknown=0]="Unknown";a[a.Uncached=1]="Uncached";a[a.Cached=2]="Cached"})(b.CacheState||(b.CacheState={}));b.LodMetric=void 0;(function(a){a[a.None=0]="None";a[a.MaxScreenThreshold=1]="MaxScreenThreshold";a[a.ScreenSpaceRelative=2]="ScreenSpaceRelative";a[a.RemovedFeatureDiameter=3]="RemovedFeatureDiameter";a[a.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"})(b.LodMetric||(b.LodMetric={}));b.NodeState=void 0;(function(a){a[a.Hole=0]="Hole";
a[a.Leaf=1]="Leaf"})(b.NodeState||(b.NodeState={}));class v{constructor(a,c,d,e){this.nodeHasLOD=a;this.isChosen=c;this.lodLevel=d;this.version=e}}b.Node=m;b.NodeBase=f;b.NodeTraversalState=v;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
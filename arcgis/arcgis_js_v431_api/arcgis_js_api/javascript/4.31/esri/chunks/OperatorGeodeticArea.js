// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./Geometry ./QuadraticBezier ./Transformation2D ./OperatorShapePreservingLength ./tslib.es6 ./GeodeticDistanceCalculator-CJvEB3vc".split(" "),function(S,z,f,m,V,C,W){function T(a,b,d,e,c){a=(new f.OperatorDensify).execute(a,b,0,0,c);e=e?(new f.OperatorProject).execute(a,e,c):a;var k=1===d.getUnit().getUnitToBaseFactor()?Math.PI/180:1;const g=new f.Envelope2D;e.queryEnvelope(g);const h=new f.Envelope2D;a=new f.Envelope2D;b=new f.Envelope2D;h.setCoords({xmin:g.xmin,ymin:75*k,xmax:g.xmax,
ymax:90*k});a.setCoords({xmin:g.xmin,ymin:-60*k,xmax:g.xmax,ymax:75*k});b.setCoords({xmin:g.xmin,ymin:-90*k,xmax:g.xmax,ymax:-60*k});h.inflateCoords(.01*h.width(),0);a.inflateCoords(.01*a.width(),0);b.inflateCoords(.01*b.width(),0);k=0+N(e,h,d,c);k+=N(e,a,d,c);return k+=N(e,b,d,c)}function N(a,b,d,e){a=(new f.OperatorClip).execute(a,b,d,e);if(null!==a&&!a.isEmpty()){b=new f.Envelope2D;a.queryEnvelope(b);b:{var c=d.getUnit().getUnitToBaseFactor(),k=b.getCenter();k.scale(180*c/Math.PI);var g=new m.Point2D;
g.x=0;var h=g.y=0;if(0===h){45<k.y?(g.y=m.geometryHalfPi,h=0):-45>k.y?(g.y=-m.geometryHalfPi,h=1):45<=k.x&&135>k.x?(g.x=m.geometryHalfPi,h=2):135<=k.x||-135>k.x?(g.x=m.geometryHalfPi,h=3):-45>k.x&&-135<=k.x?(g.x=-m.geometryHalfPi,h=4):(g.x=0,h=5);k=c*Math.sqrt(m.sqr(b.xmin-b.xmax)+m.sqr(b.ymin-b.ymax));var l=g.clone(),n=b.getCenter();n.scale(c);2>h&&(l.x=n.x);if(m.Point2D.distance(l,n)+.5*k>m.geometryHalfPi){var p=null;break b}}c=H[h];if(null!==c&&c.getGCS().equalHorizontal(d))p=c;else{c=d.getText();
k=g.x;g=g.y;l=0;n=-1;6!==h?n=f.peDefs.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA:(z.geometryReleaseAssert(!1),l=0,n=f.peDefs.PE_PRJ_CYLINDRICAL_EQAREA);var q=f.getTempName("EqualAreaPCS");n===f.peDefs.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA?p=`PROJCS["${q}",${c},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${0}],PARAMETER["False_Northing",${0}],PARAMETER["Central_Meridian",${k}],PARAMETER["Latitude_of_Origin",${g}],UNIT["Meter",1.0]]`:n===f.peDefs.PE_PRJ_CYLINDRICAL_EQAREA?p=`PROJCS["${q}",${c},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${0}],PARAMETER["False_Northing",${0}],PARAMETER["Central_Meridian",${k}],PARAMETER["Standard_Parallel_1",${l}],PARAMETER["Latitude_of_Origin",${g}],UNIT["Meter",1.0]]`:
z.throwInternalErrorException("getEqualAreaPcsFixed");p=f.createFromWKT$2(p);H[h]&&H[h].destroy();H[h]=p}}if(null!==p)var r=m.makePair(p,!1);else p=d.getText(),n=d.getUnit().getUnitToBaseFactor(),h=(b.xmin+b.width()/2)*n,g=(b.ymin+b.height()/2)*n,k=c=0,l=-1,b.ymin*n>=75*Math.PI/180||b.ymax*n<=-60*Math.PI/180?l=f.peDefs.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA:0<b.ymin||0>b.ymax?(c=(b.ymin+1/3*b.height())*n,k=(b.ymin+2/3*b.height())*n,l=f.peDefs.PE_PRJ_ALBERS):(c=(b.ymin+2/3*b.height())*n,l=f.peDefs.PE_PRJ_CYLINDRICAL_EQAREA),
b=f.getTempName("EqualAreaPCS"),l===f.peDefs.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA?r=`PROJCS["${b}",${p},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${0}],PARAMETER["False_Northing",${0}],PARAMETER["Central_Meridian",${h}],PARAMETER["Latitude_of_Origin",${g}],UNIT["Meter",1.0]]`:l===f.peDefs.PE_PRJ_ALBERS?r=`PROJCS["${b}",${p},PROJECTION["Albers"],PARAMETER["False_Easting",${0}],PARAMETER["False_Northing",${0}],PARAMETER["Central_Meridian",${h}],PARAMETER["Standard_Parallel_1",${c}],PARAMETER["Standard_Parallel_2",${k}],PARAMETER["Latitude_of_Origin",${g}],UNIT["Meter",1.0]]`:
l===f.peDefs.PE_PRJ_CYLINDRICAL_EQAREA?r=`PROJCS["${b}",${p},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${0}],PARAMETER["False_Northing",${0}],PARAMETER["Central_Meridian",${h}],PARAMETER["Standard_Parallel_1",${c}],PARAMETER["Latitude_of_Origin",${g}],UNIT["Meter",1.0]]`:z.throwInternalErrorException("getEqualAreaPCSInstance"),r=m.makePair(f.createFromWKT$2(r),!0);const {first:v,second:t}=r;d=f.createEx(d,v,null);e=(new f.OperatorProject).execute(a,d,e).calculateArea2D();t&&v.destroy();
return e}return 0}function O(){return{m_p_PCS:new m.Point2D,m_factor:Number.NaN,setValues:X,assign:Y}}function X(a,b){this.m_factor=a;this.m_p_PCS.assign(b)}function Y(a){this.m_factor=a.m_factor;this.m_p_PCS.assign(a.m_p_PCS)}function P(){return{sin_phi:Number.NaN,one_p_sin_phi:Number.NaN,one_m_sin_phi:Number.NaN,one_m_e_2_sin_2_phi:Number.NaN,sin_half_phi_pf:Number.NaN,sin_half_phi_pz:Number.NaN,sin_half_asin_e_sin_phi_pf:Number.NaN,sin_half_asin_e_sin_phi_pz:Number.NaN,atanh_sin_phi:Number.NaN,
atanh_esin_phi:Number.NaN,make_negative:!1,initialize:Z,changeSign:aa,assign:ba,clone:ca}}function Z(a,b,d,e){const c=.5*a;this.sin_phi=Math.sin(a);a=b*this.sin_phi;b=.5*Math.asin(a);this.one_p_sin_phi=1+this.sin_phi;this.one_m_sin_phi=1-this.sin_phi;this.one_m_e_2_sin_2_phi=(1+a)*(1-a);this.sin_half_phi_pf=Math.sin(c+d);this.sin_half_phi_pz=Math.sin(c+e);this.sin_half_asin_e_sin_phi_pf=Math.sin(b+d);this.sin_half_asin_e_sin_phi_pz=Math.sin(b+e);this.atanh_sin_phi=Math.log(this.sin_half_phi_pf/this.sin_half_phi_pz);
this.atanh_esin_phi=Math.log(this.sin_half_asin_e_sin_phi_pf/this.sin_half_asin_e_sin_phi_pz)}function aa(){this.sin_phi=-this.sin_phi;let a=this.one_p_sin_phi;this.one_p_sin_phi=this.one_m_sin_phi;this.one_m_sin_phi=a;a=this.sin_half_phi_pf;this.sin_half_phi_pf=this.sin_half_phi_pz;this.sin_half_phi_pz=a;a=this.sin_half_asin_e_sin_phi_pf;this.sin_half_asin_e_sin_phi_pf=this.sin_half_asin_e_sin_phi_pz;this.sin_half_asin_e_sin_phi_pz=a;this.atanh_sin_phi=-this.atanh_sin_phi;this.atanh_esin_phi=-this.atanh_esin_phi}
function ba(a){this.sin_phi=a.sin_phi;this.one_p_sin_phi=a.one_p_sin_phi;this.one_m_sin_phi=a.one_m_sin_phi;this.one_m_e_2_sin_2_phi=a.one_m_e_2_sin_2_phi;this.sin_half_phi_pf=a.sin_half_phi_pf;this.sin_half_phi_pz=a.sin_half_phi_pz;this.sin_half_asin_e_sin_phi_pf=a.sin_half_asin_e_sin_phi_pf;this.sin_half_asin_e_sin_phi_pz=a.sin_half_asin_e_sin_phi_pz;this.atanh_sin_phi=a.atanh_sin_phi;this.atanh_esin_phi=a.atanh_esin_phi;this.make_negative=a.make_negative}function ca(){return{...this}}class da{constructor(a,
b,d,e,c=100){this.m_startPt=a.clone();this.m_endPt=b.clone();this.m_cE2=e;this.m_cE=Math.sqrt(this.m_cE2);this.m_c1By2e=1/(2*this.m_cE);this.m_cRpu=d.getGCS().getUnit().getUnitToBaseFactor();this.isPcs=2===d.getCoordinateSystemType();this.PEProjcs=d.getPECoordSys();this.m_points=Array(2*c)}setSegmentEndPoints(a,b){this.m_startPt.assign(a);this.m_endPt.assign(b)}makeFunctor(){return a=>{const b=[0,0];b[0]=this.m_startPt.x*(1-a)+this.m_endPt.x*a;b[1]=this.m_startPt.y*(1-a)+this.m_endPt.y*a;this.isPcs&&
f.peCSTransformations.projToGeogCenter(this.PEProjcs,1,b,0);a=Math.sin(b[1]*this.m_cRpu);return 0===this.m_cE2?a:-(Math.log((1-this.m_cE*a)/(1+this.m_cE*a))*this.m_c1By2e)+a/(1-this.m_cE2*a*a)}}makeArrayFunctor(){z.geometryReleaseAssert(0);return{}}}const H=[null,null,null,null,null,null,null];class ea{getOperatorType(){return 10314}supportsCurves(){return!0}accelerateGeometry(a,b,d){return!1}canAccelerateGeometry(a){return!1}execute(a,b,d){0===b.getCoordinateSystemType()&&z.throwInvalidArgumentException("");
if(a.isEmpty()||2>a.getDimension())return 0;z.throwIfMesh(a);if(a.getGeometryType()===z.GeometryType.enumEnvelope){var e=new f.Polygon;e.addEnvelope(a,!1);return this.execute(e,b,d)}e=a;1<a.getDescription().getAttributeCount()&&(e=a.clone(),e.dropAllAttributes());var c=(new f.OperatorDensify).execute(e,0,b.getTolerance(0),0,d),k=null;e=b.getGCS();e!==b&&(k=f.createEx(b,e));c=(new f.OperatorSimplify).execute(c,b,!1,d);if(c.isEmpty())return 0;c===a&&(c=a.clone());if(b.isPannable()){e=c;a=new f.Envelope2D;
e.queryEnvelope(a);k=f.calculateToleranceFromGeometryForOp(b,a,!0).total();c=b.getPannableExtent();c.xmin=a.xmin-10*k;c.xmax=a.xmax+10*k;k=(new f.OperatorClip).execute(e,c,b,d).getImpl().querySegmentIterator();k.stripAttributes();c=f.makeSpheroidData();b.querySpheroidData(c);d=c.e2;e=0===d?2:1;var g=new m.Point2D(0,0),h=new m.Point2D(0,0);a=new m.KahanSummator(0);for(var l=new da(g,h,b,d,100);k.nextPath();)for(;k.hasNextSegment();){var n=k.nextSegment();g.assign(n.getStartXY());h.assign(n.getEndXY());
l.setSegmentEndPoints(g,h);n=f.integrateByRomberg(6,0,1,1E-12,1E-15,l.makeFunctor());a.pe((h.x-g.x)*n)}k=c.majorSemiAxis;return e*k*k*(1-d)*Math.PI*a.getResult()/b.getPannableExtent().width()}a:{a=c;c=a.calculateLength2D();g=(new V.OperatorShapePreservingLength).execute(a,b,d)/25E3;h=c/a.getSegmentCount()*2;g=Math.min(h,c/g);0===g&&(g=1);c=m.makePair(g,c/g);g=T(a,c.first,e,k,d);h=1;n=l=0;do{h++;c.first*=.5;if(c.first<50*b.getTolerance(0)){b=g;break a}c.second*=2;n=T(a,c.first,e,k,d);l=Math.abs(n-
g);g=n}while(1<Math.abs(g)&&l>1E-8*Math.abs(g)&&(65E3>c.second&&8>h||4>h));b=n}return b}}class fa{constructor(a,b,d,e){this.m_ptStart=new f.Point3D;this.m_ptEnd=new f.Point3D;this.m_ptStart.assign(b);this.m_ptEnd.assign(d);this.m_deltaX=this.m_ptEnd.x-this.m_ptStart.x;this.m_deltaY=this.m_ptEnd.y-this.m_ptStart.y;this.m_e=Math.sqrt(a);this.m_e2=a;this.m_c1MinusE2=1-a;a=Math.sin(e);this.m_baseA=0===this.m_e2?2*a:a*(m.atanhUOverU(this.m_e*a)+1/(1-this.m_e2*a*a))}setSegmentEndPoints(a,b){this.m_ptStart.assign(a);
this.m_ptEnd.assign(b);this.m_deltaX=this.m_ptEnd.x-this.m_ptStart.x;this.m_deltaY=this.m_ptEnd.y-this.m_ptStart.y}makeFunctor(){return a=>{var b=1-a;const d=b*this.m_ptStart.x+a*this.m_ptEnd.x,e=b*this.m_ptStart.y+a*this.m_ptEnd.y;b=b*this.m_ptStart.z+a*this.m_ptEnd.z;a=d*d+e*e;b/=Math.sqrt(b*b+this.m_c1MinusE2*this.m_c1MinusE2*a);if(0===this.m_e2)b*=2;else{const c=m.atanhUOverU(this.m_e*b);b*=c+1/(1-this.m_e2*b*b)}return(this.m_deltaY*d-this.m_deltaX*e)/a*(b-this.m_baseA)}}}class ha{constructor(a,
b,d){this.m_transformPCS2GCS=null;this.m_scaleToRadians=new m.Transformation2D;this.m_scaleToDegrees=new m.Transformation2D;this.m_progressTracker=d;z.geometryReleaseAssert(4!==b);this.m_curveType=b;(this.m_inputSR=a)&&0!==a.getCoordinateSystemType()||z.throwInvalidArgumentException("");this.m_inputGCS=a.getGCS();this.m_rpu=this.m_b=this.m_eSquared=this.m_a=0}executePolygonGeodeticArea(a){var b=a.clone();b.dropAllAttributes();a.hasNonLinearSegments()&&(b=(new f.OperatorDensify).execute(b,0,this.m_inputSR.getTolerance(0),
0,this.m_progressTracker));if(this.m_inputSR.isPannable()){a=new f.Envelope2D;b.queryEnvelope(a);var d=this.m_inputSR.getPannableExtent();if(!d.containsEnvelope(a)){var e=d.getCenterX()-a.getCenterX();const g=new m.Transformation2D;g.setShiftCoords(e,0);b.applyTransformation(g);a.move(e,0);e=new m.Envelope1D;d.queryIntervalX(e);d=new m.Envelope1D;a.queryIntervalX(d);b=e.contains(d)?f.clipGeometryFromTopAndBottom(b,this.m_inputSR):(new f.OperatorProject).foldInto360RangeGeodetic(b,this.m_inputSR,this.m_curveType)}}this.m_transformPCS2GCS?
(b=(new f.OperatorSimplify).execute(b,this.m_inputSR,!1,this.m_progressTracker),a=b.createInstance(),f.projectMultiPathVerticesPCSToGCS(this.m_transformPCS2GCS,b,a,this.m_progressTracker)||(a=(new f.OperatorProject).execute(b,this.m_transformPCS2GCS,this.m_progressTracker))):a=(new f.OperatorSimplify).execute(b,this.m_inputGCS,!1,this.m_progressTracker);if(a.isEmpty())return 0;if(1===this.m_curveType){var c=f.makeSpheroidData();this.m_inputGCS.querySpheroidData(c);this.m_a=c.majorSemiAxis;this.m_eSquared=
c.e2;return this.loxodromeArea(a)}b=a.getImpl();this.m_rpu=this.m_inputGCS.getUnit().getUnitToBaseFactor();this.m_scaleToRadians.setScale(this.m_rpu);b.applyTransformation(this.m_scaleToRadians);this.m_scaleToDegrees=this.m_scaleToRadians;this.m_scaleToDegrees.invertThis();b=f.makeSpheroidData();this.m_inputGCS.querySpheroidData(b);this.m_a=b.majorSemiAxis;this.m_b=b.minorSemiAxis;this.m_eSquared=b.e2;if(2===this.m_curveType)return this.executeClippedPolygonGreatEllipticArea(a);b={stack:[],error:void 0,
hasError:!1};try{var k=f.peFactory.unit(9101);const g=this.m_inputGCS.getPECoordSys();c=C.__addDisposableResource(b,g.cloneAlterUnits(k),!1);let h=this.executeClippedPolygonGeodeticArea(a,c,0),l,n;k=0;do k++,l=this.executeClippedPolygonGeodeticArea(a,c,k),n=Math.abs(l-h),h=l;while(1<Math.abs(l)&&n>1E-8*Math.abs(l)&&7>k);return l}catch(g){b.error=g,b.hasError=!0}finally{C.__disposeResources(b)}}executeClippedPolygonGeodeticArea(a,b,d){const e={stack:[],error:void 0,hasError:!1};try{const k=new f.Envelope2D;
a.queryEnvelope(k);const g=C.__addDisposableResource(e,this.getEqualAreaPCSInstance(b,k),!1);var c=a.clone();f.PEGeogToProjSimple(g,c);const h=c.getImpl().getAttributeStreamRef(0),l=a.getImpl().getAttributeStreamRef(0),n=C.__addDisposableResource(e,new f.PeDoubleClass,!1),p=C.__addDisposableResource(e,new f.PeDoubleClass,!1);b=[0,0];const q=m.makeStructArray(O,40),r=m.makePrimitiveArray(40,-1),v=O(),t=O();let u,w,x=c.calculateArea2D();const E=new m.KahanSummator(0),A=.5*Math.PI,y=1E-10*Math.abs(x)+
1E-6,ia=a.getPathCount();let I,Q,F,G;const B=new m.Point2D,D=new m.Point2D,J=new m.Point2D,K=new m.Point2D,L=new m.Point2D,M=new m.Point2D;let U,R;Q=a.getPathStart(0);for(I=0;I<ia;I++,Q=F)for(F=a.getPathEnd(I),h.queryPoint2D(F-1<<1,J),l.queryPoint2D(F-1<<1,B),Math.abs(B.y)>A&&(B.y=m.copySign(A,B.y)),G=Q;G<F;G++,J.assign(K),B.assign(D)){h.queryPoint2D(G<<1,K);l.queryPoint2D(G<<1,D);Math.abs(D.y)>A&&(D.y=m.copySign(A,D.y));U=m.Point2D.distance(J,K);if(50>U||0===B.y&&0===D.y)continue;f.peLineType.geodeticDistance(this.m_a,
this.m_eSquared,B.x,B.y,D.x,D.y,n,p,null,this.m_curveType);const ja=n.val,ka=p.val;v.setValues(0,J);t.setValues(1,K);w=d;q[0].assign(t);r[0]=d;for(u=0;0<=u;){R=.5*(v.m_factor+t.m_factor);f.peLineType.geodeticCoordinate(this.m_a,this.m_eSquared,B.x,B.y,ja*R,ka,n,p,this.m_curveType);L.x=n.val;L.y=p.val;b[0]=L.x;b[1]=L.y;f.peCSTransformations.geogToProj(g,1,b);M.x=b[0];M.y=b[1];const la=-M.offset(v.m_p_PCS,t.m_p_PCS),ma=m.Point2D.distance(v.m_p_PCS,t.m_p_PCS);c=.5*la*ma;E.pe(c);if(Math.abs(c)>y||0<Math.abs(c)&&
0<w)t.setValues(R,M),u++,q[u].assign(t),Math.abs(c)<=y?(w--,r[u-1]=w):w=r[u-1],r[u]=w;else{if(0>=u)break;v.assign(t);u--;t.assign(q[u]);w=r[u]}}}x+=E.getResult();return Math.abs(x)}catch(k){e.error=k,e.hasError=!0}finally{C.__disposeResources(e)}}executeClippedPolygonGreatEllipticArea(a){const b=[],d=[],e=new m.Point2D,c=new m.Point2D,k=f.curvToCart(1,this.m_eSquared,new m.Point2D(0,.5*Math.PI)),g=new m.KahanSummator(0),h=new m.KahanSummator(0),l=new m.KahanSummator(0),n=new f.Point3D,p=new f.Point3D;
var q=new f.Envelope2D;a.queryLooseEnvelope(q);let r=0;q.containsCoords(q.xmin,0)||(r=Math.abs(q.ymin)<Math.abs(q.ymax)?q.ymin:q.ymax);q=new fa(this.m_eSquared,n,p,r);const v=this.m_a*this.m_a;a=a.getImpl().querySegmentIterator();for(a.stripAttributes();a.nextPath();)for(;a.hasNextSegment();){var t=a.nextSegment();e.assign(t.getStartXY());c.assign(t.getEndXY());c.x-e.x>Math.PI?e.x+=2*Math.PI:c.x-e.x<-Math.PI&&(c.x+=2*Math.PI);this.splitSegmentCrossingItegralThreshold(t,b,d);for(let A of b)n.assign(f.curvToCart(this.m_a,
this.m_eSquared,A.getStartXY())),p.assign(f.curvToCart(this.m_a,this.m_eSquared,A.getEndXY())),q.setSegmentEndPoints(n,p),this.adaptiveIntegrationWithRomberg(q,g);for(let A of d){t=A.getStartXY();let y=A.getEndXY();var u=r;0>t.y&&(y=m.swap(t,t=y),t.y=-t.y,y.y=-y.y,u=-u);var w=f.curvToCart(1,this.m_eSquared,t),x=f.curvToCart(1,this.m_eSquared,y),E=Math.min(t.y,y.y);u=f.areaBetweenParallelsAndMeridiansOfUnitSpheroid(this.m_eSquared,t.x,y.x,u,E);h.pe(u);E=Math.abs(f.areaBetweenParallelsAndMeridiansOfUnitSpheroid(this.m_eSquared,
t.x,y.x,E,m.geometryHalfPi));u=new f.Point3D;u.setSub(w,k);w=new f.Point3D;w.setSub(x,k);x=new f.Point3D;x.setCrossProductVector(u,w);x=v*(E-.5*x.length());x=m.copySign(x,y.x-t.x);l.pe(x)}b.length=0;d.length=0}return l.getResult()+v*(.5*(1-this.m_eSquared)*g.getResult()+h.getResult())}getEqualAreaPCSInstance(a,b){const d=b.getCenterX();let e,c;const k=b.height();let g;(g=b.ymin>45*Math.PI/180||b.ymax<45*-Math.PI/180)?e=m.copySign(.5*Math.PI,b.getCenterY()):(e=b.getCenterY(),c=b.ymin+2/3*k);b=f.getTempName("EqualAreaPCS");
a=a.toString();return g?f.peFactory.fromString(f.peDefs.PE_TYPE_PROJCS,`PROJCS["${b}", ${a}, PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${0}],PARAMETER["False_Northing", ${0}],PARAMETER["Central_Meridian", ${d}], PARAMETER["Latitude_of_Origin", ${e}], UNIT["Meter",1.0]]`):f.peFactory.fromString(f.peDefs.PE_TYPE_PROJCS,`PROJCS["${b}", ${a}, PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting", ${0}],PARAMETER["False_Northing", ${0}],PARAMETER["Central_Meridian", ${d}],PARAMETER["Standard_Parallel_1", ${c}],PARAMETER["Latitude_of_Origin", ${e}],UNIT["Meter",1.0]]`)}splitSegmentCrossingItegralThreshold(a,
b,d){const e=f.curvToCart(this.m_a,this.m_eSquared,new m.Point2D(0,m.geometryHalfPi)),c=f.curvToCart(this.m_a,this.m_eSquared,new m.Point2D(0,-m.geometryHalfPi));a=this.splitSegmentPassingThroughPole(a);for(let k of a){a=k.getStartXY();const g=k.getEndXY(),h=f.curvToCart(this.m_a,this.m_eSquared,a),l=f.curvToCart(this.m_a,this.m_eSquared,g),n=new m.Point2D,p=new f.Point3D;let q=f.Point3D.sqrDistance(e,h),r=f.Point3D.sqrDistance(h,l);if(100>=q){if(400<r)p.assign(l.sub(h)),p.normalizeThis(),p.assign(h.add(p.mul(20))),
n.assign(f.cartToCurv(this.m_a,this.m_eSquared,p));else{d.push(new f.Line({start:a,end:g}));continue}d.push(new f.Line({start:a,end:n}));a.assign(n)}h.assign(f.curvToCart(this.m_a,this.m_eSquared,a));q=f.Point3D.sqrDistance(e,l);r=f.Point3D.sqrDistance(h,l);if(100>=q){if(400<r)p.assign(l.sub(h)),p.normalizeThis(),p.assign(l.sub(p.mul(20))),n.assign(f.cartToCurv(this.m_a,this.m_eSquared,p));else{d.push(new f.Line({start:a,end:g}));continue}d.push(new f.Line({start:n,end:g}));g.assign(n)}h.assign(f.curvToCart(this.m_a,
this.m_eSquared,a));l.assign(f.curvToCart(this.m_a,this.m_eSquared,g));q=f.Point3D.sqrDistance(c,h);r=f.Point3D.sqrDistance(h,l);if(100>=q){if(400<r)p.assign(l.sub(h)),p.normalizeThis(),p.assign(h.add(p.mul(20))),n.assign(f.cartToCurv(this.m_a,this.m_eSquared,p));else{d.push(new f.Line({start:a,end:g}));continue}d.push(new f.Line({start:a,end:n}));a.assign(n)}h.assign(f.curvToCart(this.m_a,this.m_eSquared,a));l.assign(f.curvToCart(this.m_a,this.m_eSquared,g));q=f.Point3D.sqrDistance(c,l);r=f.Point3D.sqrDistance(h,
l);if(100>=q){if(400<r)p.assign(l.sub(h)),p.normalizeThis(),p.assign(l.sub(p.mul(20))),n.assign(f.cartToCurv(this.m_a,this.m_eSquared,p));else{d.push(new f.Line({start:a,end:g}));continue}d.push(new f.Line({start:n,end:g}));g.assign(n)}b.push(new f.Line({start:a,end:g}))}}splitSegmentPassingThroughPole(a){const b={stack:[],error:void 0,hasError:!1};try{const d=[],e=new f.Point3D,c=new f.Point3D,k=new f.Point3D,g=new m.Point2D,h=a.getStartXY(),l=a.getEndXY(),n=C.__addDisposableResource(b,new f.PeDoubleClass,
!1);f.peLineType.geodeticDistance(this.m_a,this.m_eSquared,h.x,h.y,l.x,l.y,n,null,null,2);if(3.124139361<Math.abs(l.x-h.x)&&20<n.val){const p=new W.GeodeticDistanceFunctor(new m.Point2D(0,90),h.divide(this.m_rpu),l.divide(this.m_rpu),this.m_inputGCS,2,2);let q=f.brentMinimization(p.makeFunctor(),0,1,1E-10);if(10>=q.second&&0<q.first&&1>q.first)return e.assign(f.curvToCart(this.m_a,this.m_eSquared,h)),c.assign(f.curvToCart(this.m_a,this.m_eSquared,l)),m.lerpPoint3D(e,c,q.first,k),g.assign(f.cartToCurv(this.m_a,
this.m_eSquared,k)),d.push(new f.Line({start:h,end:g})),d.push(new f.Line({start:g,end:l})),d;p.setPointDistFrom(new m.Point2D(0,-90));q=f.brentMinimization(p.makeFunctor(),0,1,1E-10);if(10>=q.second&&0<q.first&&1>q.first)return e.assign(f.curvToCart(this.m_a,this.m_eSquared,h)),c.assign(f.curvToCart(this.m_a,this.m_eSquared,l)),m.lerpPoint3D(e,c,q.first,k),g.assign(f.cartToCurv(this.m_a,this.m_eSquared,k)),d.push(new f.Line({start:h,end:g})),d.push(new f.Line({start:g,end:l})),d}d.push(new f.Line({start:h,
end:l}));return d}catch(d){b.error=d,b.hasError=!0}finally{C.__disposeResources(b)}}adaptiveIntegrationWithRomberg(a,b){a=a.makeFunctor();let d=0,e=1,c=a(d),k=a(e),g=(d+e)/2,h=a(g),l=Math.abs(h-c),n=Math.abs(k-h),p=0;for(;32>p++&&(.1>l/n||.1>n/l);)l<n?(b.pe(f.integrateByRomberg(5,d,g,1E-14,1E-17,a)),d=g,c=h):(b.pe(f.integrateByRomberg(5,g,e,1E-14,1E-17,a)),e=g,k=h),g=(d+e)/2,h=Math.abs(a(g)),l=Math.abs(h-c),n=Math.abs(k-h);b.pe(f.integrateByRomberg(5,d,e,1E-14,1E-17,a))}loxodromeAreaHemi(a,b,d,e,
c){d=d.clone();c=c.clone();let k;let g,h,l,n,p;d.make_negative&&d.changeSign();c.make_negative&&c.changeSign();b=e-b;if(1===Math.abs(d.sin_phi)||1===Math.abs(c.sin_phi))return a.half_qp*b;if(d.sin_phi===c.sin_phi)return e=.5*a.one_m_e_2*d.sin_phi*(1/d.one_m_e_2_sin_2_phi+m.atanhUOverU(a.e*d.sin_phi))*b;var q=Math.log(c.sin_half_phi_pf*d.sin_half_phi_pz/(c.sin_half_phi_pz*d.sin_half_phi_pf));var r=Math.log(c.sin_half_asin_e_sin_phi_pf*d.sin_half_asin_e_sin_phi_pz/(c.sin_half_asin_e_sin_phi_pz*d.sin_half_asin_e_sin_phi_pf));
1===this.m_eSquared?(e=0,q=.5*(q+c.sin_phi/c.one_m_e_2_sin_2_phi-d.sin_phi/d.one_m_e_2_sin_2_phi),k=0):(e=-2*a.atanh_e_over_e*(Math.log(c.one_p_sin_phi/d.one_p_sin_phi)-a.e*r),q=(q-a.e*r)/a.one_m_e_2,k=(Math.log(c.one_m_e_2_sin_2_phi/d.one_m_e_2_sin_2_phi)+e/a.atanh_e_over_e)/a.one_m_e_2);r=-r*(d.atanh_esin_phi+c.atanh_esin_phi);g=1/d.one_m_e_2_sin_2_phi-1/c.one_m_e_2_sin_2_phi;h=m.dilogarithmEzOverE(c.one_m_sin_phi/a.one_p_e,a.e)-m.dilogarithmEzOverE(d.one_m_sin_phi/a.one_p_e,a.e);l=m.dilogarithmEzOverE(c.one_p_sin_phi/
a.one_p_e,a.e)-m.dilogarithmEzOverE(d.one_p_sin_phi/a.one_p_e,a.e);n=m.dilogarithmEzOverE(d.one_m_sin_phi/-a.one_m_e,a.e)-m.dilogarithmEzOverE(c.one_m_sin_phi/-a.one_m_e,a.e);p=m.dilogarithmEzOverE(d.one_p_sin_phi/-a.one_m_e,a.e)-m.dilogarithmEzOverE(c.one_p_sin_phi/-a.one_m_e,a.e);e=.25/q*(k+r+g+e+.5*(h+l+n+p))+a.half_qp;d=.5*a.one_m_e_2*d.sin_phi*(1/d.one_m_e_2_sin_2_phi+m.atanhUOverU(a.e*d.sin_phi));a=.5*a.one_m_e_2*c.sin_phi*(1/c.one_m_e_2_sin_2_phi+m.atanhUOverU(a.e*c.sin_phi));a<d&&(c=d,d=a,
a=c);e<d&&(e=d);e>a&&(e=a);return e*b}loxodromeArea(a){const b=Math.PI/180;let d=0;const e={e:Number.NaN,one_p_e:Number.NaN,one_m_e:Number.NaN,one_m_e_2:Number.NaN,atanh_e_over_e:Number.NaN,half_qp:Number.NaN,f:Number.NaN,z:Number.NaN},c=P(),k=P();e.e=Math.sqrt(this.m_eSquared);e.one_p_e=1+e.e;e.one_m_e=1-e.e;e.one_m_e_2=1-this.m_eSquared;e.atanh_e_over_e=m.atanhUOverU(e.e);e.half_qp=1<=this.m_eSquared?1:.5*(1+e.atanh_e_over_e*e.one_m_e_2);e.f=.25*Math.PI;e.z=.75*Math.PI;k.initialize(0,e.e,e.f,e.z);
const g=a.getPathCount(),h=new m.Point2D,l=new m.Point2D,n=a.getImpl().getAttributeStreamRef(0);for(let r=0;r<g;r++){const v=a.getPathStart(r),t=a.getPathEnd(r);if(!(1>=t-v)){n.queryPoint2D(2*(t-1),h);for(let u=v;u<t;u++){n.queryPoint2D(2*u,l);const w=h.y*b;var p=l.y*b;u===v?(c.initialize(w,e.e,e.f,e.z),c.make_negative=!1):c.assign(k);k.initialize(p,e.e,e.f,e.z);k.make_negative=!1;if(0>h.y*l.y){if(90<=h.y&&-90>=l.y||90<=l.y&&-90>=h.y)return Number.NaN;p=P();p.initialize(0,e.e,e.f,e.z);p.make_negative=
!1;var q=c.atanh_sin_phi-e.e*c.atanh_esin_phi;const x=k.atanh_sin_phi-e.e*k.atanh_esin_phi;q=(x*h.x-q*l.x)/(x-q);0>w?(c.make_negative=!0,d-=this.loxodromeAreaHemi(e,h.x*b,c,q*b,p),c.make_negative=!1,d+=this.loxodromeAreaHemi(e,q*b,p,l.x*b,k)):(d+=this.loxodromeAreaHemi(e,h.x*b,c,q*b,p),k.make_negative=!0,d-=this.loxodromeAreaHemi(e,q*b,p,l.x*b,k),k.make_negative=!1)}else 0<=h.y?d+=this.loxodromeAreaHemi(e,h.x*b,c,l.x*b,k):(c.make_negative=!0,k.make_negative=!0,d-=this.loxodromeAreaHemi(e,h.x*b,c,
l.x*b,k),c.make_negative=!1,k.make_negative=!1);h.assign(l)}}}return this.m_a*d*this.m_a}calculate(a){if(a.isEmpty()||2>a.getDimension())return 0;if(a.getGeometryType()===z.GeometryType.enumEnvelope){const b=new f.Polygon;b.addEnvelope(a,!1);return this.calculate(b)}this.m_inputSR!==this.m_inputGCS&&null===this.m_transformPCS2GCS&&(this.m_transformPCS2GCS=f.createEx(this.m_inputSR,this.m_inputGCS,null));return this.executePolygonGeodeticArea(a)}}class na{getOperatorType(){return 10311}supportsCurves(){return!0}accelerateGeometry(a,
b,d){return!1}canAccelerateGeometry(a){return!1}execute(a,b,d,e){z.throwIfMesh(a);return 4===d?(new ea).execute(a,b,e):(new ha(b,d,e)).calculate(a)}}S.OperatorGeodeticArea=na;Object.defineProperty(S,Symbol.toStringTag,{value:"Module"})});
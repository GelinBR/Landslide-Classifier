// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../core/Error","../../../../../layers/support/FieldsIndex","../../../../../rest/query/operations/pbfFeatureServiceParser"],function(k,x,y,q){class r{constructor(){this.exceededTransferLimit=this.hasFeatures=!1;this.vertexCount=this.objectIdFieldIndex=this.featureCount=this.fieldCount=0;this.offsets={attributes:[],geometry:[]};this.centroid=[]}}k.FeatureSetHeader=r;k.parseHeader=function(a,g,l=!1){a=a.asUnsafe();const z=a.pos(),b=new r;let f=0,e=0,t=null,u=null,v=null,
m=!1;const w=[];for(;a.next();)switch(a.tag()){case 1:t=a.getString();break;case 3:u=a.getString();break;case 12:v=a.processMessage(q.parseTransform);break;case 9:b.exceededTransferLimit=a.getBool();if(b.exceededTransferLimit){b.offsets.geometry=l?new Float64Array(8E3):new Int32Array(8E3);b.centroid=l?new Float64Array(16E3):new Int32Array(16E3);for(var d=0;d<b.centroid.length;d++)b.centroid[d]=268435455}break;case 13:d=a.processMessage(q.parseField);d.index=f++;w.push(d);break;case 15:d=a.getLength();
d=a.pos()+d;if(!b.exceededTransferLimit){var h=b.centroid;b.offsets.geometry.push(0);h.push(268435455);h.push(268435455)}!m&&b.exceededTransferLimit&&(m=!0,b.offsets.attributes=l?new Float64Array(8E3*f):new Uint32Array(8E3*f));for(h=e*f;a.pos()<d&&a.next();)switch(a.tag()){case 1:m?b.offsets.attributes[h++]=a.pos():b.offsets.attributes.push(a.pos());var c=a.getLength();a.skipLen(c);break;case 2:if(g)for(c=a.getLength(),c=a.pos()+c;a.pos()<c&&a.next();)switch(a.tag()){case 3:a.getUInt32();var n=a.getSInt64(),
p=a.getSInt64();b.centroid[2*e]=n;b.centroid[2*e+1]=p;break;default:a.skip()}else b.offsets.geometry[e]=a.pos(),c=a.getLength(),b.vertexCount+=c,a.skipLen(c);break;case 4:c=a.getLength();for(c=a.pos()+c;a.pos()<c&&a.next();)switch(a.tag()){case 3:a.getUInt32();n=a.getSInt64();p=a.getSInt64();b.centroid[2*e]=n;b.centroid[2*e+1]=p;break;default:a.skip()}break;default:a.skip()}e++;b.hasFeatures=!0;break;default:a.skip()}g=t||u;if(!g)throw new x("FeatureSet has no objectId or globalId field name");b.fields=
new y(w);b.featureCount=e;b.fieldCount=f;b.objectIdFieldIndex=b.fields.get(g)?.index;b.transform=v;b.displayIds=new Uint32Array(b.featureCount);b.groupIds=new Uint16Array(b.featureCount);a.move(z);return b};Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
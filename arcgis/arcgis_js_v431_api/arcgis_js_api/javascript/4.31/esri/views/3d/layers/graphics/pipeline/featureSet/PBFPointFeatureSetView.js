// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/Error ../../../../../../core/pbf ../../../../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../../../../core/libs/rbush/PooledRBush ../../../../../../geometry/support/aaBoundingBox ../../../../../../geometry/support/quantizationUtils ../../../../../../layers/graphics/OptimizedGeometry ../../../../../../layers/support/FieldsIndex ../../../../../../rest/query/operations/pbfFeatureServiceParser".split(" "),function(r,w,x,t,y,z,A,u,B,v){function p(){const a=
new w("pbf-parsing-failed","Error while parsing PBF",Error());console.error(a);throw a;}function q(a){var b=a.getLength();for(b=a.pos()+b;a.pos()<b&&a.next();)switch(a.tag()){case 1:return a.getString();case 2:return a.getFloat();case 3:return a.getDouble();case 4:return a.getSInt32();case 5:return a.getUInt32();case 6:return a.getInt64();case 7:return a.getUInt64();case 8:return a.getSInt64();case 9:return a.getBool();default:return a.skip(),null}return null}class C{constructor(a){this._reader=a=
new x(new Uint8Array(a),new DataView(a));a:{for(;a.next();)switch(a.tag()){case 2:b:{for(var b=a.getMessage();b.next();)switch(b.tag()){case 1:let f=a=void 0;var c=b.getMessage();let g=b=!1,k=0;const h=[],e=[],l=[];for(;c.next();)switch(c.tag()){case 1:a=c.getString();break;case 7:0!==c.getEnum()&&p();break;case 9:b=c.getBool()??!1;break;case 12:f=A.normalizeTransform(c.processMessage(v.parseTransform));break;case 13:var d=c.processMessage(v.parseField);d.index=k++;h.push(d);break;case 15:e.push(c.pos());
d=c.getUInt32();for(d=c.pos()+d;c.pos()<d&&c.next();)switch(c.tag()){case 1:l.push(c.pos());c.skip();break;default:c.skip()}break;case 10:g=c.getBool()??!1;break;default:c.skip()}c=new B(h);null!=f&&g&&null!=a&&c.has(a)||p();a={transform:f,exceededTransferLimit:b,fieldsIndex:c,objectIdFieldName:a,featureIndices:e,attributeIndices:l};break b;default:b.skip()}p();a=void 0}break a;default:a.skip()}p();a=void 0}this._index=a}get featureCount(){return this._index.featureIndices.length}get exceededTransferLimit(){return this._index.exceededTransferLimit}getObjectId(a){return this.getAttribute(a,
this._index.objectIdFieldName)}getAttribute(a,b){const {_index:{fieldsIndex:c,attributeIndices:d}}=this;b=c.get(b)?.index;if(null!=b){var f=this._reader;f.move(d[a*c.fields.length+b]);return q(f)}}getAttributeAsTimestamp(a,b){a=this.getAttribute(a,b);return"string"===typeof a?(new Date(a)).getTime():"number"===typeof a||null==a?a:null}getAttributes(a){const {_index:{fieldsIndex:b,attributeIndices:c}}=this;a*=b.fields.length;const d=this._reader,f={};for(const g of b.fields)d.move(c[a+g.index]),f[g.name]=
q(d);return f}getCoordinates(a,b,c=0){const d=this._reader,{transform:f,featureIndices:g}=this._index,{scale:k,translate:h}=f;d.move(g[a]);this._readCoordinates(k,h,b,c)}getOptimizedGeometry(a){const b=t.create();this.getCoordinates(a,b);return new u([],b)}getCentroid(a,{hasZ:b,hasM:c}){this.getCoordinates(a,n);const [d,f,g]=n;a=[d,f];b&&(a[3]=g);c&&(a[b?4:3]=0);return new u([],a)}getBounds(a){this.getCoordinates(a,n);const [b,c]=n;a=new y.BBox;a.minX=b;a.minY=c;a.maxX=b;a.maxY=c;return a}getBoundingBox(a){this.getCoordinates(a,
n);const [b,c,d]=n;return z.fromValues(b,c,d,b,c,d)}readAllObjectIds(a,b=0){const c=this._reader,{_index:d,featureCount:f}=this,{objectIdFieldName:g,attributeIndices:k,fieldsIndex:h}=d,e=h.get(g).index,l=h.fields.length;for(let m=0;m<f;++m)c.move(k[m*l+e]),a[b++]=q(c);return b}readAllCoordinates(a,b=0){const c=this._reader,{transform:d,featureIndices:f}=this._index,{scale:g,translate:k}=d;for(const h of f)c.move(h),b=this._readCoordinates(g,k,a,b);return b}_readCoordinates([a,b,c],[d,f,g],k,h){const e=
this._reader;var l=e.getLength();for(l=e.pos()+l;e.pos()<l&&e.next();)switch(e.tag()){case 2:var m=e.getLength();for(m=e.pos()+m;e.pos()<m&&e.next();)switch(e.tag()){case 3:e.getUInt32();k[h++]=d+a*e.getSInt64();k[h++]=f+b*e.getSInt64();k[h++]=g+c*e.getSInt64();break;default:e.skip()}break;default:e.skip()}return h}}const n=t.create();r.PBFPointFeatureSetView=C;Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
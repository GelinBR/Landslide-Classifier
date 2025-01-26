// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../chunks/tslib.es6 ./Accessor ./accessorSupport/defaultsStoreUtils ./accessorSupport/MultiOriginStore ./accessorSupport/PropertyOrigin ./accessorSupport/read ./accessorSupport/utils ./accessorSupport/decorators/subclass".split(" "),function(e,m,q,r,t,l,u,f,n){const p=k=>{k=class extends k{constructor(...a){super(...a);a=f.getProperties(this);const c=a.store,b=new t;a.store=b;r.setupConstructedDefaults(a,c,b)}read(a,c){u.read(this,a,c)}getAtOrigin(a,c){const b=f.getProperties(this).store,
g=l.nameToId(c);if("string"===typeof a)return b.get(a,g);const h={};a.forEach(d=>{h[d]=b.get(d,g)});return h}originOf(a){return l.idToName(this.originIdOf(a))}originIdOf(a){return f.getProperties(this).store.originOf(a)}revert(a,c){const b=f.getProperties(this).store,g=l.nameToId(c),h=f.getProperties(this);("string"===typeof a?"*"===a?b.keys(g):[a]:a).forEach(d=>{h.invalidate(d);b.revert(d,g);h.commit(d)})}};return k=m.__decorate([n.subclass("esri.core.ReadOnlyMultiOriginJSONSupport")],k)};e.ReadOnlyMultiOriginJSONSupport=
class extends p(q){};e.ReadOnlyMultiOriginJSONSupport=m.__decorate([n.subclass("esri.core.ReadOnlyMultiOriginJSONSupport")],e.ReadOnlyMultiOriginJSONSupport);e.ReadOnlyMultiOriginJSONMixin=p;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
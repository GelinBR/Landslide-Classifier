// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../Accessor","./PropertyOrigin","./utils"],function(g,h,k,l){function m(n,d){var f=l.getProperties(n),e=l.getProperties(d);f=f.store;d=e.store;e=e.metadata;for(const a in e){var b=e[a],c=f.originOf(a);const p=d.originOf(a);b.readOnly||p===k.OriginId.DEFAULTS||(c!==k.OriginId.DEFAULTS?(b=f.get(a),c=d.get(a),b&&c&&c instanceof h&&b instanceof h&&b instanceof c.constructor&&m(b,c)):n.set(a,d.get(a)))}}g.overrideDefaultsFrom=m;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
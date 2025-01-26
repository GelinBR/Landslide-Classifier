// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("./deprecate ./Handles ./Logger ./maybe ./accessorSupport/beforeDestroy ./accessorSupport/get ./accessorSupport/interfaces ./accessorSupport/metadata ./accessorSupport/Properties ./accessorSupport/set ./accessorSupport/testSupport ./accessorSupport/watch ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(v,w,x,y,z,m,A,B,C,D,n,p,E,F){function G(a){if(null==a)return{value:a};if(Array.isArray(a))return{type:[a[0]],value:null};switch(typeof a){case "object":return a.constructor?.__accessorMetadata__||
a instanceof Date?{type:a.constructor,value:a}:a;case "boolean":return{type:Boolean,value:a};case "string":return{type:String,value:a};case "number":return{type:Number,value:a};case "function":return{type:a,value:null}}}const d=Symbol("Accessor-Handles"),h=Symbol("Accessor-Initialized");class f{static createSubclass(a={}){if(Array.isArray(a))throw Error("Multi-inheritance unsupported since 4.16");const {properties:b,declaredClass:e,constructor:q}=a;delete a.declaredClass;delete a.properties;delete a.constructor;
const k=this;class g extends k{constructor(...c){super(...c);this.inherited=null;q&&q.apply(this,c)}}B.getPropertiesMetadata(g.prototype);for(const c in a){const r=a[c];g.prototype[c]="function"===typeof r?function(...H){const t=this.inherited;this.inherited=function(...l){if(k.prototype[c])return k.prototype[c].apply(this,l)};let u=void 0;try{u=r.apply(this,H)}catch(l){throw this.inherited=t,l;}this.inherited=t;return u}:a[c]}for(const c in b)a=G(b[c]),E.property(a)(g.prototype,c);return F.subclass(e)(g)}static freeze(a){a instanceof
f?a.__accessor__.mutable=!1:Object.freeze(a);return a}static isFrozen(a){return a instanceof f?!a.__accessor__.mutable:Object.isFrozen(a)}constructor(...a){this[I]=null;this[J]=!1;if(this.constructor===f)throw Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");const b=new C(this);Object.defineProperty(this,"__accessor__",{enumerable:!1,value:b});0<a.length&&(b.ctorArgs=this.normalizeCtorArgs?.apply(this,a)??a[0]);n.getAccessorInterceptor()?.onInstanceConstruct(this)}postscript(){const a=
this.__accessor__,b=a.ctorArgs;a.initialize();b&&(this.set(b),a.ctorArgs=null);a.constructed();this.initialize();this[h]=!0}initialize(){}[z.beforeDestroySymbol](){this[d]=y.destroyMaybe(this[d])}destroy(){this.destroyed||(p.removeTarget(this),this.__accessor__.destroy(),n.getAccessorInterceptor()?.onInstanceDestroy(this))}[Symbol.dispose](){this.destroy()}get constructed(){return this.__accessor__&&this.__accessor__.initialized||!1}get initialized(){return this[h]}get destroyed(){return this.__accessor__?.lifecycle===
A.Lifecycle.DESTROYED||!1}commitProperty(a){m.get(this,a)}get(a){v.deprecatedFunction(x.getLogger(this),"`Accessor.get` is deprecated in favor of using optional chaining",{version:"4.28",see:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"});return m.get(this,a)}hasOwnProperty(a){return this.__accessor__?this.__accessor__.has(a):Object.prototype.hasOwnProperty.call(this,a)}keys(){return this.__accessor__?this.__accessor__.keys():[]}set(a,b){D.set(this,
a,b);return this}watch(a,b,e){return p.watch(this,a,b,e)}addHandles(a,b){if(this.destroyed){a=Array.isArray(a)?a:[a];for(const e of a)e.remove()}else(this[d]??(this[d]=new w)).add(a,b)}removeHandles(a){this[d]?.remove(a)}removeAllHandles(){this[d]?.removeAll()}removeHandlesReference(a){this[d]?.removeReference(a)}hasHandles(a){return!0===this[d]?.has(a)}_override(a,b){void 0===b?this.__accessor__.clearOverride(a):this.__accessor__.override(a,b)}_clearOverride(a){return this.__accessor__.clearOverride(a)}_overrideIfSome(a,
b){null==b?this.__accessor__.clearOverride(a):this.__accessor__.override(a,b)}_isOverridden(a){return this.__accessor__.isOverridden(a)}notifyChange(a){this.__accessor__.notifyChange(a)}_get(a){return this.__accessor__.internalGet(a)}_set(a,b){this.__accessor__.internalSet(a,b);return this}}var I=d;var J=h;return f});
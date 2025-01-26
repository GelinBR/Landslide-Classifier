// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ./ObservableBase ./PropertyOrigin ./tracking ./tracking/Flags ./tracking/TrackingTarget".split(" "),function(g,k,l,e,c,m){class n extends k.ObservableBase{constructor(a,b){super();this.propertyName=a;this.metadata=b;this.trackingTarget=new m.TrackingTarget(this);this.flags=0;this.flags=c.Flags.Dirty|(b.nonNullable?c.Flags.NonNullable:0)|(b.hasOwnProperty("value")?c.Flags.HasDefaultValue:0)|(void 0===b.get?c.Flags.DepTrackingInitialized:0)|(void 0===b.dependsOn?c.Flags.AutoTracked:
0)}destroy(){if(this.flags&c.Flags.Dirty)this.onCommitted();super.destroy();this.trackingTarget.destroy()}getComputed(a){a.mutable&&e.trackAccess(this);var b=a.store;const f=this.propertyName;var d=this.flags;const h=b.get(f);if(d&c.Flags.Computing||~d&c.Flags.Dirty&&b.has(f))return h;this.flags|=c.Flags.Computing;a=a.host;d&c.Flags.AutoTracked?d=e.runTracked(this.trackingTarget,this.metadata.get,a):(e.trackExplicitDependencies(a,this),d=this.metadata.get.call(a));this.flags|=c.Flags.DepTrackingInitialized;
b.set(f,d,l.OriginId.COMPUTED);b=b.get(f);b===h?this.flags&=~c.Flags.Dirty:e.runUntracked(this.commit,this);this.flags&=~c.Flags.Computing;return b}notifyChange(){this.onInvalidated();this.onCommitted()}invalidate(){this.onInvalidated()}commit(){this.flags&=~c.Flags.Dirty;this.onCommitted()}onInvalidated(){~this.flags&c.Flags.Overridden&&(this.flags|=c.Flags.Dirty);const a=this._observers;if(a&&0<a.length)for(const b of a)b.onInvalidated()}onCommitted(){var a=this._observers;if(a&&0<a.length){a=a.slice();
for(const b of a)b.onCommitted()}}}g.Property=n;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
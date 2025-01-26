// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/JSONSupport ../../../core/lang ../../../core/Logger ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/accessorSupport/decorators/subclass ./AttachmentsColumnTemplate ./ColumnTemplate ./columnUtils ./FieldColumnTemplate ./GroupColumnTemplate ./RelationshipColumnTemplate".split(" "),function(f,c,p,q,r,t,u,h,k,v,l,m,n){var g;c=g=class extends c.JSONSupport{constructor(d){super(d);this.columnTemplates=
[]}castColumnTemplates(d){if(!d||!Array.isArray(d))return[];const b=[];d.forEach(a=>{if(a instanceof l||a instanceof m||a instanceof k||a instanceof h||a instanceof n)b.push(a);else if(v.isTemplateObjectWithType(a)){const e=a.type;"field"===e?b.push(new l(a)):"group"===e?b.push(new m(a)):"column"===e?b.push(new k(a)):"attachment"===e?b.push(new h(a)):"relationship"===e&&b.push(new n(a))}else q.getLogger(this).warn("Property 'type' is missing from the provided template. Template removed from 'tableTemplate.columnTemplates'.")});
return b}clone(){return new g({columnTemplates:p.clone(this.columnTemplates)})}};f.__decorate([r.property()],c.prototype,"columnTemplates",void 0);f.__decorate([t.cast("columnTemplates")],c.prototype,"castColumnTemplates",null);return c=g=f.__decorate([u.subclass("esri.widgets.FeatureTable.support.TableTemplate")],c)});
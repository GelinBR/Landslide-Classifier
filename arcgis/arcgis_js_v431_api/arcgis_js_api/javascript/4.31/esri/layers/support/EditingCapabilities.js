// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Accessor ../../core/accessorSupport/decorators/property ../../core/has ../../core/Logger ../../core/RandomLCG ../../core/accessorSupport/decorators/subclass ./layerUtils".split(" "),function(b,a,c,m,n,p,l,g){a=class extends a{constructor(d){super(d);this.layer=null}get attachments(){return{enabled:this._effectiveEnabled&&!!this._effectiveCapabilities?.data.supportsAttachment}}get create(){const {_effectiveCapabilities:d,layer:f}=this,e=this._createEnabled;
return{attachments:{enabled:e&&this.attachments.enabled},attributes:e,enabled:e,geometry:e,reliesOnOwnerAdminPrivileges:!f.capabilities?.operations.supportsAdd&&!!d?.operations.supportsAdd}}get delete(){const {_effectiveCapabilities:d,layer:f}=this;return{enabled:this._effectiveEnabled&&!!d?.operations.supportsDelete,reliesOnOwnerAdminPrivileges:!f.capabilities?.operations.supportsDelete&&!!d?.operations.supportsDelete}}get reliesOnOwnerAdminPrivileges(){return this._effectiveEnabled&&!this.layer.editingEnabled||
this.create.reliesOnOwnerAdminPrivileges||this.update.reliesOnOwnerAdminPrivileges||this.delete.reliesOnOwnerAdminPrivileges}get update(){const {_effectiveCapabilities:d,layer:f}=this,e=this._updateEnabled,h=this.attachments.enabled,k=h&&this._canCreateOrUpdate;return{attachments:{enabled:h,create:k,update:k},attributes:e,enabled:e,geometry:!(!e||!d?.editing.supportsGeometryUpdate),reliesOnOwnerAdminPrivileges:!f.capabilities?.operations.supportsUpdate&&!!d?.operations.supportsUpdate}}get _createEnabled(){return this._effectiveEnabled&&
!!this._effectiveCapabilities?.operations.supportsAdd}get _updateEnabled(){return this._effectiveEnabled&&!!this._effectiveCapabilities?.operations.supportsUpdate}get _canCreateOrUpdate(){return!(!this._createEnabled&&!this._updateEnabled)}get _effectiveEnabled(){return g.getEffectiveEditingEnabled(this.layer)}get _effectiveCapabilities(){return g.getEffectiveLayerCapabilities(this.layer)}};b.__decorate([c.property()],a.prototype,"attachments",null);b.__decorate([c.property()],a.prototype,"create",
null);b.__decorate([c.property()],a.prototype,"delete",null);b.__decorate([c.property()],a.prototype,"layer",void 0);b.__decorate([c.property()],a.prototype,"reliesOnOwnerAdminPrivileges",null);b.__decorate([c.property()],a.prototype,"update",null);b.__decorate([c.property()],a.prototype,"_createEnabled",null);b.__decorate([c.property()],a.prototype,"_updateEnabled",null);b.__decorate([c.property()],a.prototype,"_canCreateOrUpdate",null);b.__decorate([c.property()],a.prototype,"_effectiveEnabled",
null);b.__decorate([c.property()],a.prototype,"_effectiveCapabilities",null);return a=b.__decorate([l.subclass("esri.layers.support.EditingCapabilities")],a)});
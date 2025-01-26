// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/NestedMap","./ExternalRenderNode"],function(e,g,f){class h{constructor(){this._renderers=new g.NestedMap}add(d,a){const c={view:d,setup:"function"===typeof a.setup?b=>a.setup(b):null,dispose:"function"===typeof a.dispose?b=>a.dispose(b):null};"function"===typeof a.render&&(this._renderers.set(d,a,new f.ExternalRenderNode({...c,renderFunc:b=>a.render(b),produces:"opaque-color"})),c.setup=c.dispose=null);"function"===typeof a.renderTransparent&&this._renderers.set(d,
a,new f.ExternalRenderNode({...c,renderFunc:b=>a.renderTransparent(b),produces:"transparent-color"}))}remove(d,a){const c=this._renderers.get(d,a);c&&(this._renderers.delete(d,a),c.destroy())}}e.ExternalRendererStore=h;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
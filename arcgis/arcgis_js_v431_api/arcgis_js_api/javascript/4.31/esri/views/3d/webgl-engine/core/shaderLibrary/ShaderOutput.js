// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){function d(a){return a===b.ShaderOutput.Highlight||a===b.ShaderOutput.ObjectAndLayerIdColor}function c(a){return a===b.ShaderOutput.Color}function f(a){return c(a)||g(a)}function h(a){return c(a)||a===b.ShaderOutput.Highlight}function k(a){return c(a)||d(a)}function l(a){return f(a)||d(a)}function m(a){return k(a)||e(a)}function n(a){return l(a)||e(a)}function e(a){return a===b.ShaderOutput.Depth}function g(a){return a===b.ShaderOutput.ColorEmission}b.ShaderOutput=void 0;
(function(a){a[a.Color=0]="Color";a[a.ColorEmission=1]="ColorEmission";a[a.Depth=2]="Depth";a[a.Normal=3]="Normal";a[a.Shadow=4]="Shadow";a[a.ShadowHighlight=5]="ShadowHighlight";a[a.ShadowExcludeHighlight=6]="ShadowExcludeHighlight";a[a.ViewshedShadow=7]="ViewshedShadow";a[a.Highlight=8]="Highlight";a[a.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor";a[a.COUNT=10]="COUNT"})(b.ShaderOutput||(b.ShaderOutput={}));b.is2DGeometryOutput=function(a){return c(a)||d(a)};b.is3DGeometryOutput=function(a){return m(a)||
a===b.ShaderOutput.Normal};b.is3DGeometryOutputMRT=function(a){return n(a)||a===b.ShaderOutput.Normal};b.isColor=c;b.isColorEmission=g;b.isColorEmissionHighlightOIDOrDepth=n;b.isColorEmissionHighlightOrOID=l;b.isColorHighlightOIDOrDepth=m;b.isColorHighlightOrDepth=function(a){return h(a)||e(a)};b.isColorHighlightOrOID=k;b.isColorOrColorEmission=f;b.isColorOrHighlight=h;b.isColorOrOID=function(a){return c(a)||a===b.ShaderOutput.ObjectAndLayerIdColor};b.isDepth=e;b.isHighlightOrOID=d;b.isShadowRelatedOutput=
function(a){return a===b.ShaderOutput.Shadow||a===b.ShaderOutput.ShadowHighlight||a===b.ShaderOutput.ShadowExcludeHighlight||a===b.ShaderOutput.ViewshedShadow};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
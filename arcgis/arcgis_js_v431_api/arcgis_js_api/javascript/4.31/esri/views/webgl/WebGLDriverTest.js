// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./testAppleAmdDrawArrays","./testDoublePrecisionArithmetic","./testFloatBufferBlend","./testSVGPremultipliedAlpha"],function(b,c,d,e,f){class g{constructor(a){this.rctx=a;this.floatBufferBlend=new e.FloatBufferBlend(a);this.svgPremultipliesAlpha=new f.SVGPremultipliedAlpha(a);this.doublePrecisionRequiresObfuscation=new d.DoublePrecisionRequiresObfuscation(a);this.drawArraysRequiresIndicesTypeReset=new c.DrawArraysRequiresIndicesTypeReset(a)}dispose(){this.doublePrecisionRequiresObfuscation.dispose();
this.svgPremultipliesAlpha.dispose();this.floatBufferBlend.dispose();this.drawArraysRequiresIndicesTypeReset.dispose()}}b.WebGLDriverTest=g;Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
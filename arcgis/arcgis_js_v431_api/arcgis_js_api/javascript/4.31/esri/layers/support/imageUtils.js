// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(c){let b=null;c.checkWebPSupport=function(e){if(b)return b;const f={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA\x3d\x3d",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA\x3d\x3d",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return b=new Promise(d=>
{const a=new Image;a.onload=()=>{a.onload=a.onerror=null;d(0<a.width&&0<a.height)};a.onerror=()=>{a.onload=a.onerror=null;d(!1)};a.src="data:image/webp;base64,"+f[e]})};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
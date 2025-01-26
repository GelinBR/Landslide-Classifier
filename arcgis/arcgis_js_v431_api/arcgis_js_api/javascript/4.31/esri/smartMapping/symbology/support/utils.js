// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../../core/screenUtils","../../support/utils"],function(e,g,h){function l(a,b){return a.r===b.r&&a.g===b.g&&a.b===b.b}function m(a){var b=a.width;const d=a.height;let c=a.pixelSizeAt(a.toMap(g.createScreenPoint(.5*b,.5*d),{exclude:[]}));0>=c&&(c=a.pixelSizeAt(a.toMap(g.createScreenPoint(.5*b,.95*d),{exclude:[]})),0>=c&&(b=a.camera.position.clone(),b.z=0,c=2*a.pixelSizeAt(b)));return c}const n=h.defaultBasemapGroups.light,p=h.defaultBasemapGroups.dark,q=[...n,...p];e.getBasemapTheme=
function(a){a=h.getBasemapId(a,q,!1);if(!a)return null;if(n.includes(a))return"light";if(p.includes(a))return"dark"};e.getPixelSize=m;e.getTagsFromSchemes=function(a){if(!a)return[];const b=new Set,d=[a.primaryScheme];a.secondarySchemes&&d.push(...a.secondarySchemes);for(const c of d)c&&"tags"in c&&c.tags&&c.tags.forEach(f=>b.add(f));return[...b]};e.hasIdenticalColors=function(a,b){let d=0;if(a.length===b.length){let c=a.every((f,k)=>l(f,b[k]));c?d=1:(c=a.slice().reverse().every((f,k)=>l(f,b[k])))&&
(d=-1)}return d};e.toWorldScale=function(a,b){return Math.ceil(m(b)*g.pt2px(g.toPt(a)))};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
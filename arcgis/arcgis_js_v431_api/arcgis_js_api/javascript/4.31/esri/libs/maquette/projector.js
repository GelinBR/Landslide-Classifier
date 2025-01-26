// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./dom"],function(r,p){let t;t=Array.prototype.find?(h,f)=>h.find(f):(h,f)=>h.filter(f)[0];let w=(h,f)=>{let d=h;f.forEach(k=>{d=d&&d.children?t(d.children,e=>e.domNode===k):void 0});return d},x=(h,f,d)=>{let k=function(e){d("domEvent",e);var c=f(),g=e.currentTarget,m=c.domNode;let l=[];for(;g&&g!==m;)l.push(g),g=g.parentNode;l.reverse();c=w(c.getLastRender(),l);h.scheduleRender();let n;c&&(n=c.properties[`on${e.type}`].apply(c.properties.bind||this,arguments));d("domEventProcessed",
e);return n};return(e,c,g,m)=>k};r.createProjector=h=>{let f,d=p.applyDefaultProjectionOptions(h),k=d.performanceLogger,e=!0,c,g=!1,m=[],l=[],n=(b,a,u)=>{let q;d.eventHandlerInterceptor=x(f,()=>q,k);q=b(a,u(),d);m.push(q);l.push(u)},v=()=>{c=void 0;if(e){e=!1;k("renderStart",void 0);for(let b=0;b<m.length;b++){let a=l[b]();k("rendered",void 0);m[b].update(a);k("patched",void 0)}k("renderDone",void 0);e=!0}};return f={renderNow:v,scheduleRender:()=>{c||g||(c=requestAnimationFrame(v))},stop:()=>{c&&
(cancelAnimationFrame(c),c=void 0);g=!0},resume:()=>{g=!1;e=!0;f.scheduleRender()},append:(b,a)=>{n(p.dom.append,b,a)},insertBefore:(b,a)=>{n(p.dom.insertBefore,b,a)},merge:(b,a)=>{n(p.dom.merge,b,a)},replace:(b,a)=>{n(p.dom.replace,b,a)},detach:b=>{for(let a=0;a<l.length;a++)if(l[a]===b)return l.splice(a,1),m.splice(a,1)[0];throw Error("renderFunction was not found");}}};Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
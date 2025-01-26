// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../core/promiseUtils ../../core/uuid ../../portal/support/resourceUtils".split(" "),function(x,m,y,n,z,h){async function r(b,c,d){if(c?.resources){var e=c.portalItem===b.portalItem?new Set(b.paths):new Set;b.paths.length=0;b.portalItem=c.portalItem;var f=new Set(c.resources.toKeep.map(a=>a.resource.path)),t=new Set,u=[];f.forEach(a=>{e.delete(a);b.paths.push(a)});var k=[],p=[],l=[];for(const a of c.resources.toUpdate)if(e.delete(a.resource.path),f.has(a.resource.path)||
t.has(a.resource.path)){const {resource:g,content:A,finish:v}=a,q=h.getSiblingOfSameTypeI(g,z.generateUUID());b.paths.push(q.path);k.push({resource:q,content:await h.contentToBlob(A),compress:a.compress});v&&l.push(()=>v(q))}else{b.paths.push(a.resource.path);p.push({resource:a.resource,content:await h.contentToBlob(a.content),compress:a.compress});const g=a.finish;g&&l.push(()=>g(a.resource));t.add(a.resource.path)}for(const a of c.resources.toAdd)if(b.paths.push(a.resource.path),e.has(a.resource.path))e.delete(a.resource.path);
else{k.push({resource:a.resource,content:await h.contentToBlob(a.content),compress:a.compress});const g=a.finish;g&&l.push(()=>g(a.resource))}if(k.length||p.length)({addOrUpdateResources:f}=await new Promise((a,g)=>x(["../../portal/support/resourceUtils"],a,g))),await f(c.portalItem,k,"add",d),await f(c.portalItem,p,"update",d);l.forEach(a=>a());if(0===u.length)return e;c=await n.allSettledErrors(u);n.throwIfAborted(d);if(0<c.length)throw new y("save:resources","Failed to save one or more resources",
{errors:c});return e}}async function w(b,c,d){if(b&&c.portalItem){var e=[];for(const f of b)b=c.portalItem.resourceFromPath(f),e.push(b.portalItem.removeResource(b,d));await n.eachAlways(e)}}m.saveResources=async function(b,c,d){b=await r(b,c,d);await w(b,c,d)};m.updateItemWithResources=async function(b,c,d,e,f){d=await r(d,e,f);await b.update({data:c});await w(d,e,f)};Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom","./action-group","./action-menu"],function(k,p,r,l,t){const q=a=>a.reduce((b,c)=>b+c,0)/a.length,u=({width:a,actionWidth:b,layout:c,height:d,actionHeight:e,groupCount:h})=>Math.floor((("horizontal"===c?a:d)-2*h)/("horizontal"===c?b:e)),n=a=>Array.from(a.querySelectorAll("calcite-action")).filter(b=>b.closest("calcite-action-menu")?b.slot===t.SLOTS.trigger:!0),v=({tooltip:a,referenceElement:b,expanded:c,ref:d})=>{a&&(a.referenceElement=!c&&b?b:null);d&&
d(b);return b};k.ExpandToggle=({expanded:a,expandText:b,collapseText:c,expandLabel:d,collapseLabel:e,toggle:h,el:g,position:f,tooltip:m,ref:w,scale:x})=>{const y="rtl"===r.getElementDir(g);b=a?c:b;d=a?e:d;e=["chevrons-left","chevrons-right"];y&&e.reverse();g=(f="end"===(f||g.closest("calcite-shell-panel")?.position||"start"))?e[1]:e[0];f=f?e[0]:e[1];return p.h("calcite-action",{icon:a?g:f,id:"expand-toggle",label:d,onClick:h,ref:z=>v({tooltip:m,referenceElement:z,expanded:a,ref:w}),scale:x,text:b,
textEnabled:a,title:a||m?null:b})};k.geActionDimensions=a=>{a=a.filter(c=>c.slot!==l.SLOTS.menuActions);const b=a?.length;return{actionWidth:b?q(a.map(c=>c.clientWidth||0)):0,actionHeight:b?q(a.map(c=>c.clientHeight||0)):0}};k.getOverflowCount=({layout:a,actionCount:b,actionWidth:c,width:d,actionHeight:e,height:h,groupCount:g})=>Math.max(b-u({width:d,actionWidth:c,layout:a,height:h,actionHeight:e,groupCount:g}),0);k.overflowActions=({actionGroups:a,expanded:b,overflowCount:c})=>{let d=c;a.reverse().forEach(e=>
{let h=0;const g=n(e).reverse();g.forEach(f=>{f.slot===l.SLOTS.menuActions&&(f.removeAttribute("slot"),f.textEnabled=b)});0<d&&g.some(f=>{1<g.filter(m=>!m.slot).length&&2<g.length&&!f.closest("calcite-action-menu")&&(f.textEnabled=!0,f.setAttribute("slot",l.SLOTS.menuActions),h++,1<h&&d--);return 1>d});p.forceUpdate(e)})};k.queryActions=n;k.toggleChildActionText=function({el:a,expanded:b}){n(a).filter(c=>c.slot!==l.SLOTS.menuActions).forEach(c=>c.textEnabled=b);a.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(c=>
c.expanded=b)}});
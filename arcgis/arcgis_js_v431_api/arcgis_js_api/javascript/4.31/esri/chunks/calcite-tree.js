// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom"],function(p,l,k){function w(a){return Array.from(a.querySelectorAll("calcite-tree-item:not([disabled])")).filter(b=>{for(;b!==a&&void 0!==b;){const c=b.parentElement;if("CALCITE-TREE-ITEM"===c?.tagName&&c.hasChildren&&!c.expanded)return!1;b=b.parentElement}return!0})}function u(){"undefined"!==typeof customElements&&["calcite-tree"].forEach(a=>{switch(a){case "calcite-tree":customElements.get(a)||customElements.define(a,v)}})}const v=l.proxyCustomElement(class extends l.H{constructor(){super();
this.__registerHost();this.__attachShadow();this.calciteTreeSelect=l.createEvent(this,"calciteTreeSelect",6);this.keyDownHandler=a=>{if(!this.child){var b=this.el,c=a.target,g="ArrowRight ArrowDown ArrowLeft ArrowUp Home End Tab".split(" ");if("CALCITE-TREE-ITEM"===c?.tagName&&this.el.contains(c)&&g.includes(a.key))if(b=w(b),"Tab"===a.key)b.forEach(h=>h.tabIndex=-1);else if("ArrowDown"===a.key)g=b.indexOf(c),b[g+1]?.focus(),a.preventDefault();else if("ArrowUp"===a.key)g=b.indexOf(c),b[g-1]?.focus(),
a.preventDefault();else if("ArrowLeft"===a.key)c.hasChildren&&c.expanded?c.expanded=!1:b.slice(0,b.indexOf(c)).reverse().find(h=>h.depth===c.depth-1)?.focus(),a.preventDefault();else if("ArrowRight"===a.key)!c.disabled&&c.hasChildren&&(c.expanded?(g=b.indexOf(c),b[g+1]?.focus()):c.expanded=!0,a.preventDefault());else if("Home"===a.key){if(b=b.shift())b.focus(),a.preventDefault()}else"End"===a.key&&(b=b.pop())&&(b.focus(),a.preventDefault())}};this.lines=!1;this.child=void 0;this.scale="m";this.selectionMode=
"single";this.selectedItems=[]}componentWillRender(){const a=this.el.parentElement?.closest("calcite-tree");this.lines=a?a.lines:this.lines;this.scale=a?a.scale:this.scale;this.selectionMode=a?a.selectionMode:this.selectionMode;this.child=!!a}render(){return l.h(l.Host,{key:"5b08de1c59622b78985de9019bf4ba11d605a07f","aria-multiselectable":this.child?void 0:k.toAriaBoolean("multiple"===this.selectionMode||"multichildren"===this.selectionMode),onKeyDown:this.keyDownHandler,role:this.child?void 0:"tree",
tabIndex:this.getRootTabIndex()},l.h("slot",{key:"00a037cf92cb5facadc4b2961a9369b6ae0631f5"}))}onFocus(){if(!this.child){const a=this.el.querySelector("calcite-tree-item[selected]:not([disabled])")||this.el.querySelector("calcite-tree-item:not([disabled])");k.focusElement(a)}}onFocusIn(a){a.relatedTarget!==this.el&&this.el.contains(a.relatedTarget)||this.el.removeAttribute("tabindex")}onFocusOut(a){this.el.contains(a.relatedTarget)||(this.el.tabIndex=this.getRootTabIndex())}onInternalTreeItemSelect(a){if(!this.child){var b=
a.target,c=k.nodeListToArray(b.querySelectorAll("calcite-tree-item"));a.preventDefault();a.stopPropagation();if("ancestors"===this.selectionMode)this.updateAncestorTree(a);else{var g="none"===this.selectionMode,h=null!==this.selectionMode&&(!b.hasChildren||b.hasChildren&&("children"===this.selectionMode||"multichildren"===this.selectionMode)),q="multichildren"===this.selectionMode&&b.hasChildren,m=!g&&a.detail.modifyCurrentSelection&&("multiple"===this.selectionMode||"multichildren"===this.selectionMode),
n=!m&&(("single"===this.selectionMode||"multiple"===this.selectionMode)&&0>=c.length||"children"===this.selectionMode||"multichildren"===this.selectionMode||"single-persist"===this.selectionMode&&!b.hasChildren),d=["multiple","none","single","single-persist"].includes(this.selectionMode)&&b.hasChildren,f=[];h&&f.push(b);n&&k.nodeListToArray(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach(e=>{f.includes(e)||(e.selected=!1)});d&&["multiple","none","single","single-persist"].includes(this.selectionMode)&&
(b.expanded=!b.expanded);q&&c.forEach(e=>{e.selected=!1;e.hasChildren&&(e.expanded=!1)});m&&window.getSelection().removeAllRanges();m&&b.selected?f.forEach(e=>{e.disabled||(e.selected=!1)}):g||f.forEach(e=>{e.disabled||(e.selected="single"!==this.selectionMode||!e.selected)});this.selectedItems=g?[]:k.nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter(e=>e.selected);this.calciteTreeSelect.emit();a.stopPropagation()}}}updateAncestorTree(a){function b(d,f){const e=d.filter(r=>r.selected),
t=d.filter(r=>!r.selected);f.selected=e.length===d.length;f.indeterminate=0<e.length&&0<t.length}const c=a.target;a=a.detail.updateItem;if(!(c.disabled||c.indeterminate&&!a)){for(var g=[],h=c.parentElement.closest("calcite-tree-item");h;)g.push(h),h=h.parentElement.closest("calcite-tree-item");h=Array.from(c.querySelectorAll("calcite-tree-item:not([disabled])"));var q=h.filter(d=>!d.hasChildren),m=h.filter(d=>d.hasChildren);var n=a?c.hasChildren?!(c.selected||c.indeterminate):!c.selected:c.selected;
q.forEach(d=>{d.selected=n;d.indeterminate=!1});m.reverse().forEach(d=>{const f=Array.from(d.querySelectorAll(":scope \x3e calcite-tree \x3e calcite-tree-item"));b(f,d)});a&&(c.hasChildren?b(h,c):(c.selected=n,c.indeterminate=!1));g.forEach(d=>{var f=k.nodeListToArray(d.querySelectorAll("calcite-tree-item"));const e=f.filter(t=>t.selected);0===e.length?(d.selected=!1,d.indeterminate=!1):(f=e.length<f.length,d.indeterminate=f,d.selected=!f)});this.selectedItems=k.nodeListToArray(this.el.querySelectorAll("calcite-tree-item")).filter(d=>
d.selected);a&&this.calciteTreeSelect.emit()}}getRootTabIndex(){return this.child?-1:0}get el(){return this}static get style(){return":host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tree",{lines:[1540],child:[1540],scale:[1537],selectionMode:[1537,"selection-mode"],selectedItems:[1040]},[[0,"focus","onFocus"],[0,"focusin","onFocusIn"],[0,"focusout","onFocusOut"],[0,"calciteInternalTreeItemSelect",
"onInternalTreeItemSelect"]]]);u();p.CalciteTree=v;p.defineCustomElement=u;Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
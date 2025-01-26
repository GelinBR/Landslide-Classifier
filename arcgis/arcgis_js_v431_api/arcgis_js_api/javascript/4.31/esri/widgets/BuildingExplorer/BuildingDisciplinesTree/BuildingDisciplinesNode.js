// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("require ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/Logger ../../../core/RandomLCG ../../../core/accessorSupport/decorators/subclass ../../Widget ../support/LayerTreeNode ../../../chunks/componentsUtils ../../support/widgetUtils ../../support/jsxFactory".split(" "),function(f,e,g,c,u,v,n,p,q,r,w,d){var l;const t={expand:"expand",collapse:"collapse",hideSublayer:"hideSublayer",showSublayer:"showSublayer"};c=l=class extends p{constructor(a){super(a);
this.messages=t;this._toggledAll=this.toggleSiblingsVisibility=!1;this._onCheckboxClick=b=>{b.stopPropagation();(b.metaKey||b.ctrlKey)&&this.toggleSiblingsVisibility&&(this.node.toggleAllSiblingsVisibility(),this._toggledAll=!0)};this._onCheckboxToggle=b=>{this._toggledAll?this._toggledAll=!1:this.node.toggleVisibility(b.target.checked)}}loadDependencies(){return r.loadCalciteComponents({checkbox:()=>new Promise((a,b)=>f(["../../../chunks/calcite-checkbox"],a,b)),label:()=>new Promise((a,b)=>f(["../../../chunks/calcite-label"],
a,b)),tree:()=>new Promise((a,b)=>f(["../../../chunks/calcite-tree"],a,b)),"tree-item":()=>new Promise((a,b)=>f(["../../../chunks/calcite-tree-item"],a,b))})}render(){const {node:a,messages:b}=this;if(a.isDiscipline&&!a.hasChildren)return d.tsx("div",{key:`${a.id}-empty`});const h=a.visible,k=!0===h,m=k?b?.hideSublayer:b?.showSublayer;return d.tsx("div",{class:"esri-building-disciplines-tree-node",key:a.id},d.tsx("calcite-tree-item",null,d.tsx("calcite-label",{class:"esri-building-disciplines-tree-node__label",
layout:"inline"},d.tsx("calcite-checkbox",{checked:k,indeterminate:null===h,label:m,onclick:this._onCheckboxClick,title:m,onCalciteCheckboxChange:this._onCheckboxToggle}),a.title),this._renderedChildren))}get _renderedChildren(){const {node:a}=this;if(!a.hasChildren)return null;const {messages:b}=this,{toggleSiblingsVisibility:h}=this;return d.tsx("calcite-tree",{slot:"children"},this.node.children.toArray().reverse().map(k=>d.tsx(l,{messages:b,node:k,toggleSiblingsVisibility:h})))}};e.__decorate([g.property({type:q.LayerTreeNode})],
c.prototype,"node",void 0);e.__decorate([g.property()],c.prototype,"messages",void 0);e.__decorate([g.property({nonNullable:!0})],c.prototype,"toggleSiblingsVisibility",void 0);e.__decorate([g.property()],c.prototype,"_renderedChildren",null);return c=l=e.__decorate([n.subclass("esri.widgets.BuildingExplorer.BuildingDisciplinesTree.BuildingDisciplinesNode")],c)});
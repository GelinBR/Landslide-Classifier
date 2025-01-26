// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","./componentsUtils","./dom","./locale"],function(g,b,u,h){function k(){"undefined"!==typeof customElements&&["calcite-loader"].forEach(a=>{switch(a){case "calcite-loader":customElements.get(a)||customElements.define(a,l)}})}const c={loader:"loader",loaderParts:"loader__svgs",loaderPart:"loader__svg",loaderPartId:a=>`${c.loaderPart}--${a}`,loaderText:"loader__text",loaderPercentage:"loader__percentage"},l=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();
this.__attachShadow();this.formatValue=()=>"determinate-value"!==this.type?`${this.value}`:this.formatter.format(this.value/100);this.inline=this.complete=!1;this.label=void 0;this.scale="m";this.type="indeterminate";this.value=0;this.effectiveLocale=this.text=""}valueChangeHandler(){this.complete=this.type.startsWith("determinate")&&100===this.value}connectedCallback(){h.connectLocalized(this);this.updateFormatter()}disconnectedCallback(){h.disconnectLocalized(this)}componentWillLoad(){requestAnimationFrame(()=>
this.valueChangeHandler())}render(){const {el:a,inline:v,label:w,scale:m,text:n,type:x,value:p}=this,y=a.id||u.guid(),d=v?this.getInlineSize(m):this.getSize(m),q=.45*d,z=`0 0 ${d} ${d}`,e=x.startsWith("determinate"),r=2*q*Math.PI,t=p/100*r,A=Math.floor(p),B={"stroke-dasharray":`${t} ${r-t}`};return b.h(b.Host,{key:"8272bdfae9fff51b19ed8fa66197eb93b53feb4c","aria-label":w,"aria-valuemax":e?"100":void 0,"aria-valuemin":e?"0":void 0,"aria-valuenow":e?A.toString():void 0,id:y,role:"progressbar"},b.h("div",
{key:"3d410c178af39bb57cc478bdd06c0392f6ba71a3",class:c.loaderParts},[1,2,3].map(f=>b.h("svg",{"aria-hidden":"true",class:{[c.loaderPart]:!0,[c.loaderPartId(f)]:!0},key:f,style:e&&3===f?B:void 0,viewBox:z},b.h("circle",{cx:d/2,cy:d/2,r:q}))),e&&b.h("div",{key:"4ccc633930dee031bf769908d712df39e0677bbb",class:c.loaderPercentage},this.formatValue())),n&&b.h("div",{key:"6d0d51988bdfafee2a19faed9e14d3bda06d79b5",class:c.loaderText},n))}formatterPropsChange(){this.updateFormatter()}getSize(a){return{s:32,
m:56,l:80}[a]}getInlineSize(a){return{s:12,m:16,l:20}[a]}updateFormatter(){"determinate-value"===this.type&&this.formatter?.resolvedOptions().locale!==this.effectiveLocale&&(this.formatter=new Intl.NumberFormat(this.effectiveLocale,{style:"percent"}))}get el(){return this}static get watchers(){return{value:["valueChangeHandler"],effectiveLocale:["formatterPropsChange"],type:["formatterPropsChange"]}}static get style(){return'@charset "UTF-8";@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{position:relative;margin-inline:auto;display:none;align-items:center;justify-content:center;opacity:1;min-block-size:var(--calcite-loader-size);font-size:var(--calcite-loader-font-size);stroke:var(--calcite-color-brand);stroke-width:3;fill:none;transform:scale(1, 1);animation:loader-color-shift calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 2 / var(--calcite-internal-duration-factor)) alternate-reverse infinite linear;padding-block:var(--calcite-loader-padding, 4rem);will-change:contents}:host([scale\x3ds]){--calcite-loader-font-size:var(--calcite-font-size--3);--calcite-loader-size:2rem;--calcite-loader-size-inline:0.75rem;--calcite-internal-loader-value-line-height:0.625rem}:host([scale\x3dm]){--calcite-loader-font-size:var(--calcite-font-size-0);--calcite-loader-size:4rem;--calcite-loader-size-inline:1rem;--calcite-internal-loader-value-line-height:1.375rem}:host([scale\x3dl]){--calcite-loader-font-size:var(--calcite-font-size-2);--calcite-loader-size:6rem;--calcite-loader-size-inline:1.5rem;--calcite-internal-loader-value-line-height:1.71875rem}:host([no-padding]){padding-block:0px}:host{display:flex}.loader__text{display:block;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);margin-block-start:calc(var(--calcite-loader-size) + 1.5rem)}.loader__percentage{display:block;text-align:center;color:var(--calcite-color-text-1);font-size:var(--calcite-loader-font-size);inline-size:var(--calcite-loader-size);line-height:var(--calcite-internal-loader-value-line-height);align-self:center}.loader__svgs{position:absolute;overflow:visible;opacity:1;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);inset-inline-start:50%;margin-inline-start:calc(var(--calcite-loader-size) / 2 * -1);animation-iteration-count:infinite;animation-timing-function:linear;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.66 / var(--calcite-internal-duration-factor));animation-name:loader-clockwise;display:flex}.loader__svg{position:absolute;inset-block-start:0px;transform-origin:center;overflow:visible;inset-inline-start:0;inline-size:var(--calcite-loader-size);block-size:var(--calcite-loader-size);animation-iteration-count:infinite;animation-timing-function:linear}.loader__svg--1{animation-name:loader-offset-1}.loader__svg--2{animation-name:loader-offset-2}.loader__svg--3{animation-name:loader-offset-3}:host([type\x3ddeterminate]),:host([type\x3ddeterminate-value]){animation:none;stroke:var(--calcite-color-border-3)}:host([type\x3ddeterminate]) .loader__svgs,:host([type\x3ddeterminate-value]) .loader__svgs{animation:none}:host([type\x3ddeterminate]) .loader__svg--3,:host([type\x3ddeterminate-value]) .loader__svg--3{animation:none;stroke:var(--calcite-color-brand);stroke-dasharray:150.79632;transform:rotate(-90deg);transition:all var(--calcite-internal-animation-timing-fast) linear}:host([inline]){position:relative;margin:0px;animation:none;stroke:currentColor;stroke-width:2;padding-block:0px;block-size:var(--calcite-loader-size-inline);min-block-size:var(--calcite-loader-size-inline);inline-size:var(--calcite-loader-size-inline);margin-inline-end:calc(var(--calcite-loader-size-inline) * 0.5);vertical-align:calc(var(--calcite-loader-size-inline) * -1 * 0.2)}:host([inline]) .loader__svgs{inset-block-start:0px;margin:0px;inset-inline-start:0;inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([inline]) .loader__svg{inline-size:var(--calcite-loader-size-inline);block-size:var(--calcite-loader-size-inline)}:host([complete]){opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity var(--calcite-internal-animation-timing-medium) linear 1000ms, transform var(--calcite-internal-animation-timing-medium) linear 1000ms}:host([complete]) .loader__svgs{opacity:0;transform:scale(0.75, 0.75);transform-origin:center;transition:opacity calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms, transform calc(180ms * var(--calcite-internal-duration-factor)) linear 800ms}:host([complete]) .loader__percentage{color:var(--calcite-color-brand);transform:scale(1.05, 1.05);transform-origin:center;transition:color var(--calcite-internal-animation-timing-medium) linear, transform var(--calcite-internal-animation-timing-medium) linear}.loader__svg--1{stroke-dasharray:27.9252444444 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 4.8 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-1{0%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-83.7757333333}100%{stroke-dasharray:27.9252444444 251.3272;stroke-dashoffset:-279.2524444444}}.loader__svg--2{stroke-dasharray:55.8504888889 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 6.4 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-2{0%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-97.7383555556}100%{stroke-dasharray:55.8504888889 223.4019555556;stroke-dashoffset:-279.2524444444}}.loader__svg--3{stroke-dasharray:13.9626222222 139.6262222222;animation-duration:calc(var(--calcite-internal-animation-timing-slow) / var(--calcite-internal-duration-factor) * 7.734 / var(--calcite-internal-duration-factor))}@keyframes loader-offset-3{0%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:0}50%{stroke-dasharray:139.6262222222 139.6262222222;stroke-dashoffset:-76.7944222222}100%{stroke-dasharray:13.9626222222 265.2898222222;stroke-dashoffset:-279.2524444444}}@keyframes loader-color-shift{0%{stroke:var(--calcite-color-brand)}33%{stroke:var(--calcite-color-brand-press)}66%{stroke:var(--calcite-color-brand-hover)}100%{stroke:var(--calcite-color-brand)}}@keyframes loader-clockwise{100%{transform:rotate(360deg)}}:host([hidden]){display:none}[hidden]{display:none}'}},
[1,"calcite-loader",{complete:[1540],inline:[516],label:[1],scale:[513],type:[513],value:[2],text:[1],effectiveLocale:[32]},void 0,{value:["valueChangeHandler"],effectiveLocale:["formatterPropsChange"],type:["formatterPropsChange"]}]);k();g.Loader=l;g.defineCustomElement=k});
// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(n){function g(b,h,l,v){function w(c,p){var e;let a,k;a=c;for(e=0;8>e;e++){k=((r*a+q)*a+m)*a-c;if(Math.abs(k)<p)return a;var f=(3*r*a+2*q)*a+m;if(1E-6>Math.abs(f))break;a-=k/f}f=0;e=1;a=c;if(a<f)return f;if(a>e)return e;for(;f<e;){k=((r*a+q)*a+m)*a;if(Math.abs(k-c)<p)break;c>k?f=a:e=a;a=.5*(e-f)+f}return a}const m=3*b,q=3*(l-b)-m,r=1-m-q,t=3*h,u=3*(v-h)-t,x=1-t-u;return function(c,p=1E-6){c=w(c,p);return((x*c+u)*c+t)*c}}const y=/^cubic-bezier\((.*)\)/,d={};d.ease=g(.25,
.1,.25,1);d.linear=g(0,0,1,1);d.easeIn=d["ease-in"]=g(.42,0,1,1);d.easeOut=d["ease-out"]=g(0,0,.58,1);d.easeInOut=d["ease-in-out"]=g(.42,0,.58,1);n.easingFunctions=d;n.parse=function(b){let h=d[b]||null;!h&&(b=y.exec(b))&&(b=b[1].split(",").map(l=>parseFloat(l.trim())),4!==b.length||b.some(l=>isNaN(l))||(h=g.apply(g,b)));return h};n.unitBezier=g;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
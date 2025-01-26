// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../core/jsonMap ../PixelBlock ../rasterFormats/pixelRangeUtils ./customBandIndexUtils ./pixelUtils".split(" "),function(p,q,r,t,y,z){function u(e,d,g){const h=g.length,b=new Float32Array(h);for(let a=0;a<h;a++)if(null==e||e[a]){const c=d[a],f=g[a],k=c+f;k&&(b[a]=(c-f)/k)}return[b]}function A(e,d,g){const h=g.length,b=new Float32Array(h);for(let a=0;a<h;a++)if(null==e||e[a]){const c=d[a],f=g[a];f&&(b[a]=c/f)}return[b]}function B(e,d,g){const h=d.length,b=new Float32Array(h);for(let a=
0;a<h;a++)if(null==e||e[a]){const c=d[a],f=g[a];f&&(b[a]=c/f-1)}return[b]}function C(e,d,g,h){const b=g.length,a=new Float32Array(b);for(let c=0;c<b;c++)if(null==e||e[c]){const f=g[c],k=d[c],l=k+f+h;l&&(a[c]=(k-f)/l*(1+h))}return[a]}function D(e,d,g,h,b,a){const c=g.length,f=new Float32Array(c);a=-b*h+a*(1+h*h);for(let k=0;k<c;k++)if(null==e||e[k]){const l=g[k],m=d[k],n=b*m+l+a;n&&(f[k]=h*(m-h*l-b)/n)}return[f]}function E(e,d,g){const h=g.length,b=new Float32Array(h);for(let a=0;a<h;a++)if(null==
e||e[a]){const c=d[a],f=2*c+1;b[a]=.5*(f-Math.sqrt(f*f-8*(c-g[a])))}return[b]}function F(e,d,g){const h=g.length,b=new Float32Array(h);for(let c=0;c<h;c++)if(null==e||e[c]){const f=g[c];var a=d[c];1!==f&&0!==a+f+.5&&(a=(2*(a*a-f*f)+1.5*a+.5*f)/(a+f+.5),b[c]=a*(1-.25*a)-(f-.125)/(1-f))}return[b]}function G(e,d,g,h,b){const a=g.length,c=new Float32Array(a),f=1/Math.sqrt(1+h*h);for(let k=0;k<a;k++)if(null==e||e[k])c[k]=(d[k]-h*g[k]-b)*f;return[c]}function H(e,d){const [g,h,b,a,c,f]=d;d=g.length;const k=
new Float32Array(d);for(let l=0;l<d;l++)if(null==e||e[l])k[l]=-.2848*g[l]-.2435*h[l]-.5436*b[l]+.7243*a[l]+.084*c[l]-.18*f[l];return[k]}function I(e,d){const [g,h,b,a,c]=d;d=g.length;const f=new Float32Array(d),k=new Float32Array(d),l=new Float32Array(d);for(let m=0;m<d;m++)if(null==e||e[m])f[m]=c[m]?a[m]/c[m]*100:0,k[m]=g[m]?a[m]/g[m]*100:0,l[m]=b[m]?h[m]/b[m]*(a[m]/b[m])*100:0;return[f,k,l]}function J(e,d){const [g,h,b]=d;d=g.length;const a=new Float32Array(d);for(let c=0;c<d;c++)if(null==e||e[c])for(c=
0;c<d;c++){const f=g[c],k=h[c],l=k+f-b[c];l&&(a[c]=(k-f)/l)}return[a]}function K(e,d){const [g,h,b]=d;d=g.length;const a=new Float32Array(d);for(let c=0;c<d;c++)if(null==e||e[c])for(c=0;c<d;c++){const f=g[c],k=h[c],l=b[c],m=Math.sqrt((2*f+1)**2-(6*f-5*Math.sqrt(k))-.5);m&&(a[c]=1.5*(1.2*(f-l)-2.5*(k-l))/m)}return[a]}function L(e,d){const [g,h,b]=d;d=g.length;const a=new Float32Array(d);for(let c=0;c<d;c++)if(null==e||e[c])for(c=0;c<d;c++){const f=g[c];a[c]=100*(f-h[c])-10*(f-b[c])}return[a]}function M(e,
d){const [g,h,b]=d;d=g.length;const a=new Float32Array(d);for(let c=0;c<d;c++)if(null==e||e[c])for(c=0;c<d;c++){const f=g[c],k=h[c],l=f+6*k-7.5*b[c]+1;l&&(a[c]=2.5*(f-k)/l)}return[a]}function N(e,d,g=.5){const [h,b,a]=d;d=b.length;const c=new Float32Array(d);for(let f=0;f<d;f++)if(null==e||e[f])for(f=0;f<d;f++){const k=h[f],l=b[f],m=a[f],n=k+g*l+(1-g)*m;n&&(c[f]=(k-g*l-(1-g)*m)/n)}return[c]}function O(e,d,g){const h=g.length,b=new Float32Array(h);for(let a=0;a<h;a++)if(null==e||e[a])for(a=0;a<h;a++){const c=
(.1-d[a])**2+(.06-g[a])**2;c&&(b[a]=1/c)}return[b]}q=new q.JSONMap({0:"custom",1:"ndvi",2:"savi",3:"tsavi",4:"msavi",5:"gemi",6:"pvi",7:"gvitm",8:"sultan",9:"vari",10:"gndvi",11:"sr",12:"ndvi-re",13:"sr-re",14:"mtvi2",15:"rtvi-core",16:"ci-re",17:"ci-g",18:"ndwi",19:"evi",20:"iron-oxide",21:"ferrous-minerals",22:"clay-minerals",23:"wndwi",24:"bai",25:"nbr",26:"ndbi",27:"ndmi",28:"ndsi",29:"mndwi"},{useNumericKeys:!0});p.bandIndexMethodMap=q;p.calculateBandIndex=function(e,d){if(!z.isValidPixelBlock(e))return e;
const {equation:g,method:h}=d;var b=d.bandIndexes.map(l=>l-1);const {pixels:a,mask:c}=e;switch(h){case "gndvi":case "nbr":case "ndbi":case "ndvi":case "ndvi-re":case "ndsi":case "ndmi":case "mndwi":b=u(c,a[b[0]],a[b[1]]);break;case "ndwi":b=u(c,a[b[1]],a[b[0]]);break;case "sr":case "sr-re":case "iron-oxide":case "ferrous-minerals":case "clay-minerals":b=A(c,a[b[0]],a[b[1]]);break;case "ci-g":case "ci-re":b=B(c,a[b[0]],a[b[1]]);break;case "savi":b=C(c,a[b[0]],a[b[1]],b[2]+1);break;case "tsavi":b=D(c,
a[b[0]],a[b[1]],b[2]+1,b[3]+1,b[4]+1);break;case "msavi":b=E(c,a[b[0]],a[b[1]]);break;case "gemi":b=F(c,a[b[0]],a[b[1]]);break;case "pvi":b=G(c,a[b[0]],a[b[1]],b[2]+1,b[3]+1);break;case "gvitm":b=H(c,[a[b[0]],a[b[1]],a[b[2]],a[b[3]],a[b[4]],a[b[5]]]);break;case "sultan":b=I(c,[a[b[0]],a[b[1]],a[b[2]],a[b[3]],a[b[4]]]);break;case "vari":b=J(c,[a[b[0]],a[b[1]],a[b[2]]]);break;case "mtvi2":b=K(c,[a[b[0]],a[b[1]],a[b[2]]]);break;case "rtvi-core":b=L(c,[a[b[0]],a[b[1]],a[b[2]]]);break;case "evi":b=M(c,
[a[b[0]],a[b[1]],a[b[2]]]);break;case "wndwi":b=N(c,[a[b[0]],a[b[1]],a[b[2]]],b[3]?b[3]+1:.5);break;case "bai":b=O(c,a[b[0]],a[b[1]]);break;case "custom":b=y.calculateCustomBandIndex(c,a,g);break;default:return e}const {outputPixelType:f="f32"}=d;d=null!=f&&t.isIntegerPixelType(f);let k;c?(k=new Uint8Array(e.width*e.height),k.set(c)):d&&(k=(new Uint8Array(e.width*e.height)).fill(255));d&&(b=b.map(l=>{const m=r.createEmptyBand(f,l.length);t.clipBandToPixelTypeRange(l,k,f,m);return m}));e=new r({width:e.width,
height:e.height,pixelType:f,pixels:b,mask:k});e.updateStatistics();return e};p.calculateNDVI=function(e,d,g,h){const {mask:b,pixels:a,width:c,height:f}=e;e=a[g];d=a[d];g=d.length;const k=h?new Uint8Array(g):new Float32Array(g),l=h?100:1,m=h?100.5:0;for(let n=0;n<g;n++)if(null==b||b[n]){const v=e[n],w=d[n],x=v+w;x&&(k[n]=(v-w)/x*l+m)}h=new r({width:c,height:f,mask:b,pixelType:h?"u8":"f32",pixels:[k]});h.updateStatistics();return h};p.getBandMatrix3=function(e){const d=new Float32Array(9);d[3*e[0]]=
1;d[3*e[1]+1]=1;d[3*e[2]+2]=1;return d};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
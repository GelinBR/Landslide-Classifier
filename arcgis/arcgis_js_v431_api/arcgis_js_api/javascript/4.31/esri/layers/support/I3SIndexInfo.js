// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports","../../request","../../core/Error"],function(f,g,p){f.fetchIndexInfo=async function(c,a,b,h,k,l,m){var d=null;if(null!=b){d=`${c}/nodepages/`;const e=d+Math.floor(b.rootIndex/b.nodesPerPage);try{return{type:"page",rootPage:(await g(e,{query:{f:"json",...h,token:k},responseType:"json",signal:m})).data,rootIndex:b.rootIndex,pageSize:b.nodesPerPage,lodMetric:b.lodSelectionMetricType,urlPrefix:d}}catch(n){null!=l&&l.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",
e,n),d=n}}if(!a)return null;a=a?.split("/").pop();c=`${c}/nodes/`;a=c+a;try{return{type:"node",rootNode:(await g(a,{query:{f:"json",...h,token:k},responseType:"json",signal:m})).data,urlPrefix:c}}catch(e){throw new p("sceneservice:root-node-missing","Root node missing.",{pageError:d,nodeError:e,url:a});}};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
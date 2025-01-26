// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define("exports ../../../../../chunks/tslib.es6 ../../../../../core/has ../../../../../core/Logger ../../../../../core/string ./ShaderBuilder2D ./graph/glsl ./graph/GlslGraphWriter ./graph/ShaderGraphContext ./graph/ShaderGraphNode ./typed/TypedShaderProgram".split(" "),function(h,r,q,x,y,z,n,u,v,A,w){function m(b,a,c){const d=b.constructor[a]??[];b.constructor.hasOwnProperty(a)||Object.defineProperty(b.constructor,a,{value:d.slice()});b.constructor[a].push(c)}q=(b,a)=>(c,d)=>{c.constructor.builtins.push({builtin:b,
propertyKey:d,typeCtor:a})};class t{}t.builtins=[];r.__decorate([q("gl_VertexID",n.Int)],t.prototype,"glVertexID",void 0);class B{}class p{}p.builtins=[];r.__decorate([q("gl_FragCoord",n.Vec4)],p.prototype,"glFragCoord",void 0);r.__decorate([q("gl_PointCoord",n.Vec2)],p.prototype,"glPointCoord",void 0);class C{}class D{constructor(){this.type="uniform-group"}get _uniforms(){return this.constructor.uniforms??[]}}class E{constructor(){this.logShader=!1;this.computeAttributes={}}get vertexInput(){const b=
this._shaderModuleClass.inputs.findLast(a=>"vertex"===a.propertyKey&&0===a.parameterIndex);if(!b)throw Error("Unable to find vertex input parameter");return b}get computeInput(){return this._shaderModuleClass.inputs.findLast(b=>"vertex"===b.propertyKey&&1===b.parameterIndex)}get fragmentInput(){const b=this._shaderModuleClass.inputs.findLast(a=>"fragment"===a.propertyKey);if(!b)throw Error("Unable to find fragment input parameter");return b}get transformFeedbackBindings(){return this.fragmentInput.inputCtor.transformFeedbackBindings??
[]}get locations(){return[...this.vertexInput.inputCtor.locations,...(this.computeInput?.inputCtor.locations??[])]}get locationsMap(){const b=new Map,a=new Set;for(const c of this.locations)a.has(c.index)?x.getLogger("esri.views.2d.engine.webgl.shaderGraph.GraphShaderModule").warnOnce("mapview-rendering",`Unable to assigned attribute ${c.propertyKey} to ${c.index}. Index already in use`,{locationsMap:b}):(b.set(c.propertyKey,c.index),a.add(c.index));return b}get locationInfo(){if(!this._locationInfo){const b=
this.locationsMap,a=Array.from(b.entries()).map(([c,d])=>`${c}.${d}`).join(".");this._locationInfo={hash:y.numericHash(a),locations:b,computeAttributeMap:this.computeAttributes}}return this._locationInfo}get renamedLocationsMap(){const b=new Map;for(const a of this.locations)b.set("a_"+a.propertyKey,a.index);return b}get optionPropertyKeys(){if(!this._optionPropertyKeys){const b=new Set;for(const a of this._options)b.add(a.propertyKey);this._optionPropertyKeys=b}return this._optionPropertyKeys}get _shaderModuleClass(){return this.constructor}get _defines(){return this._shaderModuleClass.defines??
[]}get _options(){return this._shaderModuleClass.options??[]}get _uniforms(){return this._shaderModuleClass.uniforms??[]}getProgram(b,a,c,d){try{const {vertex:e,fragment:f,uniformBindings:k}=this._generateShaders(b,a,c,d);return new w.TypedShaderProgram(e,f,this.renamedLocationsMap,this.locationInfo,k,this.transformFeedbackBindings)}catch(e){return new w.TypedShaderProgram("","",this.renamedLocationsMap,this.locationInfo,[],this.transformFeedbackBindings)}}getDebugUniformClassInfo(b){var a=this._options.find(c=>
c.propertyKey===b);if(a)return{type:"option",className:a.typeCtor};a=this._uniforms.find(c=>c.propertyKey===b);if(!a)throw Error(`Unable to find uniform class type for property: ${b}`);return{type:"required",className:a.typeCtor}}getShaderKey(b,a,c,d){const e=Object.keys(b).map(l=>`${l}.${b[l]}`).join("."),f=Object.keys(c).map(l=>`${l}.${c[l]}`).join("."),k=Object.keys(d).map(l=>`${l}.${d[l]}`).join("."),g=Object.keys(a).filter(l=>this.optionPropertyKeys.has(l)&&a[l]).join(".");return`${this.constructor.name}.${e}.${f}.${k}.${g}`}_generateShaders(b,
a,c,d){const e=[];this._setDefines(c);this._setOptionalUniforms(e,a);this._setRequiredUniforms(e);a=this._hydrateVertexInput(d);d=this._injectPackPrecisionFactor(a,b);b=(c=this._hydrateComputeInput())&&this._injectComputePackPrecisionFactor(c,b);const f=this.vertex(d,b);b=this._hydrateFragmentInput(f);d=this.fragment(b);const k=new Set;for(var g in d)A.setReachableUids(k,d[g]);g=this._getVertexInputBuiltins();g=v.ShaderGraphContext.createVertex({...a,...c},f,g,e,this.transformFeedbackBindings,k);
(new u.GlslShaderWriter).write(g);a=this._getFragmentInputBuiltins(d);a.set("glPointCoord","gl_PointCoord");a=v.ShaderGraphContext.createFragment(b,d,a,e,g,this.transformFeedbackBindings);(new u.GlslShaderWriter).write(a);a=this._createShaderBuilder(g,a);g=a.generate("vertex",!0);a=a.generate("fragment",!0);this.logShader&&(console.log(g),console.log(a));return{vertex:g,fragment:a,uniformBindings:e}}_setDefines(b){for(const a in b)this[a]=b[a]}_setOptionalUniforms(b,a){for(const c of this._options)this[c.propertyKey]=
a[c.propertyKey]?this._hydrateUniformGroup(b,c):null}_setRequiredUniforms(b){for(const a of this._uniforms)this[a.propertyKey]=this._hydrateUniformGroup(b,a)}_hydrateUniformGroup(b,a){const c=new a.typeCtor;for(const d of c._uniforms??[]){const e=new d.typeCtor,f=`u_${a.propertyKey}_${d.propertyKey}`,k=e.type,g=[a.propertyKey,d.propertyKey].join(".");if("type"in d.typeCtor&&"array"===d.typeCtor.type){const l=e;b.push({shaderModulePath:g,uniformName:f,uniformType:k,uniformArrayLength:l.size,uniformArrayElementType:l.elementType.type,
uniformHydrated:e})}else b.push({shaderModulePath:g,uniformName:f,uniformType:k,uniformHydrated:e});c[d.propertyKey]=e}return c}_hydrateVertexInput(b){var a=this.vertexInput.inputCtor;const c=a.locations.reduce((d,e)=>!1===b[e.propertyKey]?d:{...d,[e.propertyKey]:new e.typeCtor},{});for(const {propertyKey:d,typeCtor:e}of a.builtins)a=new e,c[d]=a;return c}_hydrateComputeInput(){return null==this.computeInput?null:this.computeInput.inputCtor.locations.reduce((b,a)=>({...b,[a.propertyKey]:new a.typeCtor}),
{})}_injectPackPrecisionFactor(b,a){const c={};for(const d in b){const e=b[d],f=a[d];if(f){if("float"!==e.type&&"vec2"!==e.type&&"vec3"!==e.type&&"vec4"!==e.type)throw Error(`InternalError: packPrecisionFactor requires GenType, but found ${e.type}`);c[d]=e.divide(new n.Float(f))}else c[d]=e}return c}_injectComputePackPrecisionFactor(b,a){const c={},d=new Map;for(var e in this.computeAttributes)for(var f of this.computeAttributes[e]??[])d.set(f,e);for(const k in b)if(e=b[k],f=d.get(k))if(f=a[f]){if("float"!==
e.type&&"vec2"!==e.type&&"vec3"!==e.type&&"vec4"!==e.type)throw Error(`InternalError: packPrecisionFactor requires GenType, but found ${e.type}`);c[k]=e.divide(new n.Float(f))}else c[k]=e;return c}_hydrateFragmentInput(b){const a={};for(const c in b)a[c]=b[c];for(const {propertyKey:c,typeCtor:d}of p.builtins)b=new d,a[c]=b;return a}_getVertexInputBuiltins(){const b=this.vertexInput.inputCtor,a=new Map;for(const {builtin:c,propertyKey:d}of b.builtins)a.set(d,c);return a}_getFragmentInputBuiltins(b){b=
b.constructor;const a=new Map;for(const c of b.builtins??[])a.set(c.propertyKey,c.builtin);return a}_createShaderBuilder(b,a){const c=new z.ShaderBuilder2D;this._insertDebugInfo(c);b.insertVertexShader(c);a.insertFragmentShader(c);return c}_insertDebugInfo(b){b.vertex.code.add("// DEFINES: ");b.vertex.code.add("// --------------------------------------------------------- ");for(const a of this._defines)this[a.propertyKey]?b.vertex.code.add(`//   ${a.propertyKey}: true`):b.vertex.code.add(`//   ${a.propertyKey}: false`);
b.vertex.code.add("");b.vertex.code.add("// OPTIONS: ");b.vertex.code.add("// --------------------------------------------------------- ");for(const a of this._options)this[a.propertyKey]?b.vertex.code.add(`//   ${a.propertyKey}: true`):b.vertex.code.add(`//   ${a.propertyKey}: false`)}}h.ComputeVertexInput=B;h.FragmentInput=p;h.FragmentOutput=C;h.GraphShaderModule=E;h.UniformGroup=D;h.VertexInput=t;h.builtin=b=>(a,c)=>{m(a,"builtins",{builtin:b,propertyKey:c})};h.define=(b,a)=>{m(b,"defines",{propertyKey:a})};
h.input=b=>(a,c,d)=>{m(a,"inputs",{inputCtor:b,propertyKey:c,parameterIndex:d})};h.location=function(b,a){return(c,d)=>{m(c,"locations",{typeCtor:a,propertyKey:d,parameterIndex:null,index:b})}};h.option=b=>(a,c)=>{m(a,"options",{typeCtor:b,propertyKey:c})};h.transformFeedback=function(b){return(a,c)=>{m(a,"transformFeedbackBindings",{propertyKey:c,parameterIndex:null,index:b})}};h.uniform=b=>(a,c)=>{m(a,"uniforms",{typeCtor:b,propertyKey:c})};Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
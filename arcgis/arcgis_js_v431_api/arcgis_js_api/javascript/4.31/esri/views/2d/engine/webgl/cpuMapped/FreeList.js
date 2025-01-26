// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.31/esri/copyright.txt for details.
//>>built
define(["exports"],function(g){class f{constructor(a){this.next=null;if(Array.isArray(a)){this.data=a[0];var c=this;for(let b=1;b<a.length;b++)c.next=new f([a[b]]),c=c.next}else this.data=a}*values(){let a=this;for(;a;)yield a.data,a=a.next}forEach(a){let c=this;for(;c;)a(c.data),c=c.next}get last(){return this.next?this.next.last:this}}class h{constructor(a){this._head=null;null!=a&&(this._head=new f(a))}get head(){return this._head}maxAvailableSpace(){if(null==this._head)return 0;let a=0;this._head.forEach(c=>
{a=Math.max(a,c.end-c.start)});return a}firstFit(a){if(null==this._head)return null;var c=null;let b=this._head;for(;b;){const d=b.data.end-b.data.start;if(d===a)return c?c.next=b.next:this._head=b.next,b.data.start;if(d>a)return c=b.data.start,b.data.start+=a,c;c=b;b=b.next}return null}free(a,c){const b=a+c;if(null==this._head)this._head=new f({start:a,end:b});else if(b<=this._head.data.start)if(b===this._head.data.start)this._head.data.start-=c;else{var d=new f({start:a,end:b});d.next=this._head;
this._head=d}else{d=this._head;for(var e=d.next;e;){if(e.data.start>=b){if(d.data.end===a){d.data.end+=c;d.data.end===e.data.start&&(d.data.end+=e.data.end-e.data.start,d.next=e.next);return}if(e.data.start===b){e.data.start-=c;return}a=new f({start:a,end:b});a.next=d.next;d.next=a;return}d=e;e=e.next}a===d.data.end?d.data.end+=c:(a=new f({start:a,end:b}),d.next=a)}}clear(){this._head=null}}g.FreeList=h;g.List=f;Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
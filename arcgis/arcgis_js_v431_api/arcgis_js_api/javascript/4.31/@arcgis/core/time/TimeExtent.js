/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{JSONSupport as e}from"../core/JSONSupport.js";import{t as r,o as s}from"../chunks/timeUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"../chunks/Logger.js";import{r as i}from"../chunks/reader.js";import{subclass as l}from"../core/accessorSupport/decorators/subclass.js";import{w as o}from"../chunks/writer.js";import{s as a}from"../chunks/date.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/datetime.js";import"../chunks/ensureType.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";var u;let m=u=class extends e{static get allTime(){return c}static get empty(){return d}static fromArray(t){return new u({start:null!=t[0]?new Date(t[0]):t[0],end:null!=t[1]?new Date(t[1]):t[1]})}constructor(t){super(t),this.end=null,this.start=null}readEnd(t,e){return null!=e.end?new Date(e.end):null}writeEnd(t,e){e.end=t?.getTime()??null}get isAllTime(){return this.equals(u.allTime)}get isEmpty(){return this.equals(u.empty)}readStart(t,e){return null!=e.start?new Date(e.start):null}writeStart(t,e){e.start=t?.getTime()??null}clone(){return new u({end:this.end,start:this.start})}equals(t){if(!t)return!1;const e=this.start?.getTime()??this.start,r=this.end?.getTime()??this.end,s=t.start?.getTime()??t.start,n=t.end?.getTime()??t.end;return e===s&&r===n}expandTo(t,e=a){if(this.isEmpty||this.isAllTime)return this.clone();let n=this.start;n&&(n=r(n,t,e));let i=this.end;if(i){const n=r(i,t,e);i=i.getTime()===n.getTime()?n:s(n,1,t,e)}return new u({start:n,end:i})}intersection(t){if(!t)return this.clone();if(this.isEmpty||t.isEmpty)return u.empty;if(this.isAllTime)return t.clone();if(t.isAllTime)return this.clone();const e=this.start?.getTime()??-1/0,r=this.end?.getTime()??1/0,s=t.start?.getTime()??-1/0,n=t.end?.getTime()??1/0;let i,l;return s>=e&&s<=r?i=s:e>=s&&e<=n&&(i=e),r>=s&&r<=n?l=r:n>=e&&n<=r&&(l=n),null==i||null==l||isNaN(i)||isNaN(l)?u.empty:new u({start:i===-1/0?null:new Date(i),end:l===1/0?null:new Date(l)})}offset(t,e,r=a){if(this.isEmpty||this.isAllTime)return this.clone();const n=new u,{start:i,end:l}=this;return null!=i&&(n.start=s(i,t,e,r)),null!=l&&(n.end=s(l,t,e,r)),n}toArray(){return this.isEmpty?[void 0,void 0]:[this.start?.getTime()??null,this.end?.getTime()??null]}union(t){if(!t||t.isEmpty)return this.clone();if(this.isEmpty)return t.clone();if(this.isAllTime||t.isAllTime)return c.clone();const e=null!=this.start&&null!=t.start?new Date(Math.min(this.start.getTime(),t.start.getTime())):null,r=null!=this.end&&null!=t.end?new Date(Math.max(this.end.getTime(),t.end.getTime())):null;return new u({start:e,end:r})}};t([n({type:Date,json:{write:{allowNull:!0}}})],m.prototype,"end",void 0),t([i("end")],m.prototype,"readEnd",null),t([o("end")],m.prototype,"writeEnd",null),t([n({readOnly:!0,json:{read:!1}})],m.prototype,"isAllTime",null),t([n({readOnly:!0,json:{read:!1}})],m.prototype,"isEmpty",null),t([n({type:Date,json:{write:{allowNull:!0}}})],m.prototype,"start",void 0),t([i("start")],m.prototype,"readStart",null),t([o("start")],m.prototype,"writeStart",null),m=u=t([l("esri.time.TimeExtent")],m);const p=m,c=new m,d=new m({start:void 0,end:void 0});export{p as default};

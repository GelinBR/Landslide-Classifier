/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import{ClonableMixin as e}from"../../core/Clonable.js";import{JSONSupport as r}from"../../core/JSONSupport.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{r as o}from"../../chunks/reader.js";import{subclass as l}from"../../core/accessorSupport/decorators/subclass.js";import{w as n}from"../../chunks/writer.js";import s from"../../time/TimeExtent.js";import a from"../../time/TimeInterval.js";import{t as m}from"../../chunks/date.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/ensureType.js";import"../../chunks/timeUtils.js";import"../../chunks/datetime.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/enumeration.js";function p(t,e){return a.fromJSON({value:t,unit:e})}let u=class extends(e(r)){constructor(t){super(t),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeZone=null,this.trackIdField=null,this.useTime=!0,this.stops=null}readFullTimeExtent(t,e){return e.timeExtent&&Array.isArray(e.timeExtent)&&2===e.timeExtent.length?s.fromArray(e.timeExtent):null}writeFullTimeExtent(t,e){null!=t?.start&&null!=t.end?e.timeExtent=t.toArray():e.timeExtent=null}readInterval(t,e){return e.timeInterval&&e.timeIntervalUnits?p(e.timeInterval,e.timeIntervalUnits):e.defaultTimeInterval&&e.defaultTimeIntervalUnits?p(e.defaultTimeInterval,e.defaultTimeIntervalUnits):null}writeInterval(t,e){e.timeInterval=t?.toJSON().value??null,e.timeIntervalUnits=t?.toJSON().unit??null}};t([i({type:Boolean,json:{name:"exportOptions.timeDataCumulative",write:!0}})],u.prototype,"cumulative",void 0),t([i({type:String,json:{name:"endTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"endField",void 0),t([i({type:s,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"fullTimeExtent",void 0),t([o("fullTimeExtent",["timeExtent"])],u.prototype,"readFullTimeExtent",null),t([n("fullTimeExtent")],u.prototype,"writeFullTimeExtent",null),t([i({type:Boolean,json:{write:!0}})],u.prototype,"hasLiveData",void 0),t([i({type:a,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"interval",void 0),t([o("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],u.prototype,"readInterval",null),t([n("interval")],u.prototype,"writeInterval",null),t([i({type:String,json:{name:"startTimeField",write:{enabled:!0,allowNull:!0}}})],u.prototype,"startField",void 0),t([i(m("timeReference",!0))],u.prototype,"timeZone",void 0),t([i({type:String,json:{write:{enabled:!0,allowNull:!0}}})],u.prototype,"trackIdField",void 0),t([i({type:Boolean,json:{name:"exportOptions.useTime",write:!0}})],u.prototype,"useTime",void 0),t([i({type:[Date],json:{read:!1}})],u.prototype,"stops",void 0),u=t([l("esri.layers.support.TimeInfo")],u);const d=u;export{d as default};

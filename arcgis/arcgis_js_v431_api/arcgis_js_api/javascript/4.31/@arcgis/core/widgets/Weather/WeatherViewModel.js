/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import{L as t}from"../../chunks/Logger.js";import{watch as o,syncAndInitial as s}from"../../core/reactiveUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import{subclass as i}from"../../core/accessorSupport/decorators/subclass.js";import a from"../../views/3d/environment/CloudyWeather.js";import p from"../../views/3d/environment/FoggyWeather.js";import l from"../../views/3d/environment/RainyWeather.js";import h from"../../views/3d/environment/SnowyWeather.js";import c from"../../views/3d/environment/SunnyWeather.js";import{v as m}from"../../chunks/weather.js";import"../../core/lang.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/ensureType.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../core/JSONSupport.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";var u,y;!function(e){e.Disabled="disabled",e.Ready="ready",e.Error="error"}(u||(u={})),function(e){e.NotVisible="not-visible",e.LocalScene="local-scene",e.NoAtmosphere="no-atmosphere",e.UnsupportedView="unsupported-view"}(y||(y={}));let d=class extends r{constructor(e){super(e),this.view=null,this._weatherByType={sunny:new c,cloudy:new a,rainy:new l,snowy:new h,foggy:new p},this._settingWeather=!1}initialize(){this.addHandles([o((()=>this.current),(e=>{this._settingWeather||null==e||(this._weatherByType={...this._weatherByType,[e.type]:e})}),s)])}get state(){const e=this.view;return null!=e&&e.ready?null!=this.error?this.error===y.NotVisible?u.Ready:u.Error:u.Ready:u.Disabled}get weatherByType(){return this._weatherByType}get error(){const e=this.view;return null!=e&&e.ready?"3d"!==e.type?y.UnsupportedView:"local"===e.viewingMode?y.LocalScene:e.environment.atmosphereEnabled?e.environmentManager.weatherVisible?null:y.NotVisible:y.NoAtmosphere:null}get current(){return this._environment?.weather??this._weatherByType.sunny}set current(e){const r=this._environment;r&&(r.weather=e)}get _environment(){const e=this.view;return null!=e&&"3d"===e.type?e.environment:null}setWeatherByType(e){if(!m(e,t.getLogger(this)))return;const r=this._environment;null!=r&&(this._settingWeather=!0,r.weather=this._weatherByType[e],this._settingWeather=!1)}setSnowCoverEnabled(e){const r=this.current;"snowCover"in r&&(r.snowCover=e?"enabled":"disabled")}};e([n()],d.prototype,"view",void 0),e([n()],d.prototype,"state",null),e([n()],d.prototype,"_weatherByType",void 0),e([n()],d.prototype,"weatherByType",null),e([n()],d.prototype,"error",null),e([n()],d.prototype,"current",null),e([n()],d.prototype,"_environment",null),d=e([i("esri.widgets.Weather.WeatherViewModel")],d);const w=d;export{u as W,y as a,w as default};

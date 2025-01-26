/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{createAbortError as e}from"../../core/promiseUtils.js";import{property as i}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as t}from"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/handleUtils.js";import"../../core/Error.js";import"../../config.js";import"../../chunks/maybe.js";import"../../chunks/ensureType.js";import"../../chunks/utils.js";import"../../chunks/metadata.js";import"../../chunks/tracking.js";const r=r=>{let a=class extends r{constructor(...s){super(...s),this.layer=null}get interactive(){return null!=this.analysisView&&this.analysisView.interactive}set interactive(s){null!=this.analysisView&&(this.analysisView.interactive=s)}get selectedViewshed(){return null!=this.analysisView?this.analysisView.selectedViewshed:null}set selectedViewshed(s){null!=this.analysisView&&(this.analysisView.selectedViewshed=s)}async createViewsheds(s){if(null==this.analysisView)throw e();await this.analysisView.createViewsheds(s)}};return s([i()],a.prototype,"layer",void 0),s([i()],a.prototype,"interactive",null),s([i()],a.prototype,"selectedViewshed",null),a=s([t("esri.views.layers.ViewshedLayerView")],a),a};export{r as default};

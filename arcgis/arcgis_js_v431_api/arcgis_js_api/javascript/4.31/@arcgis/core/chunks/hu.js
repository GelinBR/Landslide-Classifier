/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{d as r}from"./calcite-input-time-picker.js";import"./componentsUtils.js";import"./assets.js";import"../config.js";import"../core/lang.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/Error.js";import"./Logger.js";import"../core/JSONSupport.js";import"./tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"./maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"./metadata.js";import"./utils.js";import"./handleUtils.js";import"./tracking.js";import"./ensureType.js";import"../core/accessorSupport/decorators/property.js";import"./ObservableBase.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./form.js";import"./dom.js";import"./interactive.js";import"./key.js";import"./label.js";import"./component.js";import"./loadable.js";import"./locale2.js";import"./observers.js";import"./focusTrapComponent.js";import"./t9n.js";import"./math.js";import"./icon.js";import"./Validation.js";import"./input3.js";import"./action.js";import"./loader.js";import"./input-message.js";import"./input-text.js";import"./progress.js";import"./popover.js";import"./floating-ui.js";import"./debounce.js";import"./openCloseComponent.js";import"./Heading2.js";import"./FloatingArrow.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.0
 */
var t={name:"hu",weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),ordinal:function(r){return r+"."},weekStart:1,relativeTime:{future:"%s múlva",past:"%s",s:function(r,t,o,s){return"néhány másodperc"+(s||t?"":"e")},m:function(r,t,o,s){return"egy perc"+(s||t?"":"e")},mm:function(r,t,o,s){return r+" perc"+(s||t?"":"e")},h:function(r,t,o,s){return"egy "+(s||t?"óra":"órája")},hh:function(r,t,o,s){return r+" "+(s||t?"óra":"órája")},d:function(r,t,o,s){return"egy "+(s||t?"nap":"napja")},dd:function(r,t,o,s){return r+" "+(s||t?"nap":"napja")},M:function(r,t,o,s){return"egy "+(s||t?"hónap":"hónapja")},MM:function(r,t,o,s){return r+" "+(s||t?"hónap":"hónapja")},y:function(r,t,o,s){return"egy "+(s||t?"év":"éve")},yy:function(r,t,o,s){return r+" "+(s||t?"év":"éve")}},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"}};r.locale(t,null,!0);export{t as default};

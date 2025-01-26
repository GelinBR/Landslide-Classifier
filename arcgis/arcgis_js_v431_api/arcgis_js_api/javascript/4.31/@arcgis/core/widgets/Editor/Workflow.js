/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../core/Error.js";import s from"../../core/Evented.js";import{throwIfNotAbortError as i,createResolver as n}from"../../core/promiseUtils.js";import{property as o}from"../../core/accessorSupport/decorators/property.js";import"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import{U as a}from"../../chunks/UpdatingHandles.js";import"../../config.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/ensureType.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../core/Collection.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";let p=class extends s.EventedAccessor{constructor(t){super(t),this._indexHistory=[],this._lastStepIndex=-1,this._stepIndex=-1,this._updatingHandles=new a,this._handleKeys={afterCommit:"after-commit",beforeCommit:"before-commit"},this.data=void 0,this.started=!1,this.steps=[],this.type=null,this._pendingOperation=null}destroy(){this._updatingHandles.destroy()}get hasNextStep(){const{steps:t}=this;return!!(t&&this._stepIndex<t.filter((t=>!t.parent)).length-1)}get hasPreviousStep(){return this._stepIndex>0}get reliesOnOwnerAdminPrivileges(){return!1}get hasInvalidFormTemplate(){return!1}get shouldShowAttachments(){return!1}get shouldAllowAttachmentEditing(){return!1}get stepId(){const{steps:t}=this,e=t&&t[this._stepIndex];return e&&e.id}get helpMessage(){}get hasPendingEdits(){return!1}get keyboardCancellationEnabled(){return!0}get updating(){return this._updatingHandles.updating}async back(t=()=>Promise.resolve(!0)){this.hasPendingEdits&&!await t()||(this.hasPreviousStep?await this.previous({cancelCurrentStep:!0}):await this.cancel({force:!0}))}async cancel(t={force:!0}){return!1!==t.force?this._cancel(t):new Promise(((s,i)=>{this.emit("cancel-request",{controller:{allow:()=>{this._cancel({...t,force:!0}).then(s)},deny:()=>i(new e("workflow:cancel-denied","Request to cancel workflow was denied."))}})}))}async commit(){this.removeHandles(this._handleKeys.beforeCommit),this.onCommit&&await this.onCommit(this.data),this.removeHandles(this._handleKeys.afterCommit),this.emit("commit")}async go(t){const{steps:e}=this,s=e.findIndex((e=>e.id===t));this._indexHistory.push(this._stepIndex),await this._go(s)}async next(){this._indexHistory.push(this._stepIndex),await this._go(this._stepIndex+1)}async previous(t={cancelCurrentStep:!1}){await this._go(this._indexHistory.pop(),t.cancelCurrentStep)}async reset(){await this._cancel({emitCancelEvent:!1}),await this.start()}async save(){await this.commit(),await this.reset()}async start(){this._set("started",!0);const t=-1===this._stepIndex?0:this._stepIndex;await this._go(t)}async _cancel({emitCancelEvent:t=!0,error:e}={}){this.started&&(this._set("started",!1),await this._transaction((()=>this.steps[this._stepIndex]?.tearDown({canceled:!0})))),this.removeHandles([this._handleKeys.afterCommit,this._handleKeys.beforeCommit]),this._resetIndexing(t),t&&this.emit("cancel",{error:e})}_go(t=-1,e=!1){return this._transaction((async()=>{const{steps:s}=this;if(!(t<=-1||t>=s.length)){if(!this.started)return this._stepIndex=t,void this._notifyStepProps();this._lastStepIndex>-1&&await s[this._lastStepIndex].tearDown({canceled:e});try{await s[t].setUp()}catch(t){i(t)}this._lastStepIndex=t,this._stepIndex=t,this._notifyStepProps()}}))}async _transaction(t){const e=this._pendingOperation,s=n(),i=(e??Promise.resolve()).then((()=>s.promise));this._pendingOperation=i,this._updatingHandles.addPromise(i);try{e&&await e,await t()}finally{s.resolve(),i===this._pendingOperation&&(this._pendingOperation=null)}}_resetIndexing(t=!0){this._stepIndex=-1,this._lastStepIndex=-1,this._indexHistory.length=0,t&&this._notifyStepProps()}_notifyStepProps(){this.notifyChange("stepId"),this.notifyChange("hasPreviousStep"),this.notifyChange("hasNextStep")}};t([o()],p.prototype,"data",void 0),t([o()],p.prototype,"hasNextStep",null),t([o()],p.prototype,"hasPreviousStep",null),t([o()],p.prototype,"onCommit",void 0),t([o()],p.prototype,"reliesOnOwnerAdminPrivileges",null),t([o()],p.prototype,"hasInvalidFormTemplate",null),t([o()],p.prototype,"shouldShowAttachments",null),t([o()],p.prototype,"shouldAllowAttachmentEditing",null),t([o()],p.prototype,"started",void 0),t([o({readOnly:!0})],p.prototype,"stepId",null),t([o()],p.prototype,"steps",void 0),t([o({readOnly:!0})],p.prototype,"type",void 0),t([o()],p.prototype,"helpMessage",null),t([o()],p.prototype,"hasPendingEdits",null),t([o()],p.prototype,"keyboardCancellationEnabled",null),t([o()],p.prototype,"updating",null),p=t([r("esri.widgets.Editor.Workflow")],p);const h=p;export{h as default};

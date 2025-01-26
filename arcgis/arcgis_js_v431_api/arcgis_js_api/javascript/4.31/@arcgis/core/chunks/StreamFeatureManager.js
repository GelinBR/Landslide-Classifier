/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.31/esri/copyright.txt for details.
*/
import{C as t}from"./CircularArray.js";import{c as e}from"./mathUtils.js";const s="__esri_timestamp__";class i{constructor(t,e,s,i,r=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=s,this._purgeOptions=i,this.store=t,this.objectIdField=e,this.purgeInterval=r,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}removeById(t){this._removed.push(t)}removeByTrackId(t){const e=this._trackIdToObservations.get(t);if(e)for(const t of e.entries)this._removed.push(t)}add(s){if(this._useGeneratedIds){const t=this._nextId();s.attributes[this.objectIdField]=t,s.objectId=t}else s.objectId=s.attributes[this.objectIdField];const i=s.objectId;if(this._addOrUpdated.set(i,s),this._maxAge=Math.max(this._maxAge,s.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return null==this._trackIdLessObservations&&(this._trackIdLessObservations=new t(1e5)),void this._trackIdLessObservations.enqueue(i);const r=s.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(r)){const s=null!=this._purgeOptions?.maxObservations?this._purgeOptions.maxObservations:1e3,i=e(s,0,1e3);this._trackIdToObservations.set(r,new t(i))}const o=this._trackIdToObservations.get(r),d=o?.enqueue(i);null!=d&&(this._addOrUpdated.has(d)?this._addOrUpdated.delete(d):this._removed.push(d))}checkForUpdates(){const t=this._getToAdd(),e=this._getToRemove(),i=performance.now();i-this._lastPurge>=this.purgeInterval&&(this._purge(i),this._lastPurge=i);const r=[];if(null!=e)for(const t of e){const e=this.store.removeById(t);null!=e&&r.push(e)}const o=[];if(null!=t){const r=new Set(e??[]);for(const e of t)r.has(e.objectId)||(e.attributes[s]=i,this.store.add(e),o.push(e))}return!(!o.length&&!r?.length||(this.store.update(o,r),0))}_getToAdd(){if(!this._addOrUpdated.size)return null;const t=new Array(this._addOrUpdated.size);let e=0;return this._addOrUpdated.forEach((s=>t[e++]=s)),this._addOrUpdated.clear(),t}_getToRemove(){const t=this._removed;return this._removed.length?(this._removed=[],t):null}_nextId(){const t=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,t}_purge(t){const e=this._purgeOptions;null!=e&&(this._purgeSomeByDisplayCount(e),this._purgeByAge(e),this._purgeByAgeReceived(t,e),this._purgeTracks())}_purgeSomeByDisplayCount(t){if(!t.displayCount)return;let e=this.store.size;if(e>t.displayCount){if(this._timeInfo.trackIdField)for(const s of this._trackIdToObservations.values())if(e>t.displayCount&&s.size){const t=s.dequeue();this._removed.push(t),e--}if(null!=this._trackIdLessObservations){let s=e-t.displayCount;for(;s-- >0;){const t=this._trackIdLessObservations.dequeue();null!=t&&this._removed.push(t)}}}}_purgeByAge(t){const e=this._timeInfo?.startTimeField;if(!t.age||!e)return;const s=60*t.age*1e3,i=this._maxAge-s;this.store.forEach((t=>{t.attributes[e]<i&&this._removed.push(t.objectId)}))}_purgeByAgeReceived(t,e){if(!e.ageReceived)return;const i=t-60*e.ageReceived*1e3;this.store.forEach((t=>{t.attributes[s]<i&&this._removed.push(t.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((t,e)=>{0===t.size&&this._trackIdToObservations.delete(e)}))}}export{i as S};

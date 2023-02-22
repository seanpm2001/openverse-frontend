/*! For license information please see audio.e605c76d.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[145,19,149],{"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.async-iterator.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.symbol.to-string-tag.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.json.to-string-tag.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.math.to-string-tag.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.26.1/node_modules/core-js/modules/es.array.slice.js");var esm_typeof=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/typeof.js"),asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VButton=__webpack_require__("./src/components/VButton.vue");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==Object(esm_typeof.a)(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(void 0===method){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}var VLoadMorevue_type_script_lang_ts_=Object(runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},setup:function setup(){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),searchStore=Object(search.b)(),isFetching=Object(runtime.a)((function(){return mediaStore.fetchState.isFetching})),canLoadMore=Object(runtime.a)((function(){return""!==searchStore.searchTerm&&!mediaStore.fetchState.fetchingError&&!mediaStore.fetchState.isFinished&&mediaStore.resultCount>0})),onLoadMore=function(){var _ref=Object(asyncToGenerator.a)(_regeneratorRuntime().mark((function _callee(){return _regeneratorRuntime().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!isFetching.value){_context.next=2;break}return _context.abrupt("return");case 2:return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{buttonLabel:Object(runtime.a)((function(){return isFetching.value?i18n.t("browse-page.loading"):i18n.t("browse-page.load")})),isFetching:isFetching,onLoadMore:onLoadMore,canLoadMore:canLoadMore}}}),components_VLoadMorevue_type_script_lang_ts_=VLoadMorevue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VButton",{directives:[{name:"show",rawName:"v-show",value:this.canLoadMore,expression:"canLoadMore"}],attrs:{size:"large",variant:"full",disabled:this.isFetching,"data-testid":"load-more"},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{}}},"./src/pages/search/audio.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),use_focus_filters=__webpack_require__("./src/composables/use-focus-filters.ts"),focus_management=__webpack_require__("./src/utils/focus-management.ts"),ui=__webpack_require__("./src/stores/ui.ts"),provides=__webpack_require__("./src/types/provides.ts"),feature_flag=__webpack_require__("./src/stores/feature-flag.ts"),VSnackbar=__webpack_require__("./src/components/VSnackbar.vue"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),search_page_types=__webpack_require__("./src/pages/search/search-page.types.ts"),search_audiovue_type_script_lang_ts_=Object(runtime.b)({name:"AudioSearch",components:{VSnackbar:VSnackbar.default,VAudioTrack:VAudioTrack.default,VGridSkeleton:VGridSkeleton.default,VLoadMore:VLoadMore.default},props:search_page_types.propTypes,setup:function setup(props){var featureFlagStore=Object(feature_flag.b)();Object(runtime.w)({title:"".concat(props.searchTerm," | Openverse"),meta:featureFlagStore.isOn("new_header")?[{hid:"robots",name:"robots",content:"all"}]:void 0});var uiStore=Object(ui.a)(),results=Object(runtime.a)((function(){return props.resultItems.audio})),isDesktopLayout=Object(runtime.a)((function(){return uiStore.isDesktopLayout})),filterVisibleRef=Object(runtime.f)(provides.b),audioTrackSize=Object(runtime.a)((function(){return isDesktopLayout.value?filterVisibleRef.value?"l":"m":"s"})),focusFilters=Object(use_focus_filters.a)(),isMouseDown=Object(runtime.p)(!1);return{results:results,audioTrackSize:audioTrackSize,handleShiftTab:function handleShiftTab(event,i){0===i&&focusFilters.focusFilterSidebar(event,focus_management.a.Last)},handleMouseDown:function handleMouseDown(){isMouseDown.value=!0},isSnackbarVisible:Object(runtime.a)((function(){return uiStore.areInstructionsVisible})),showSnackbar:function showSnackbar(){isMouseDown.value?isMouseDown.value=!1:uiStore.showInstructionsSnackbar()},hideSnackbar:function hideSnackbar(){uiStore.hideInstructionsSnackbar()}}},head:{}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(search_audiovue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",{staticClass:"-mx-2 md:-mx-4"},[_c("VSnackbar",{attrs:{size:"large","is-visible":_vm.isSnackbarVisible}},[_c("i18n",{attrs:{path:"audio-results.snackbar.text",tag:"p"},scopedSlots:_vm._u([_vm._l(["spacebar","left","right"],(function(keyboardKey){return{key:keyboardKey,fn:function fn(){return[_c("kbd",{key:keyboardKey,staticClass:"font-sans"},[_vm._v(_vm._s(_vm.$t("audio-results.snackbar.".concat(keyboardKey))))])]},proxy:!0}}))],null,!0)})],1),_vm._v(" "),0!==_vm.results.length||_vm.fetchState.isFinished?_vm._e():_c("VGridSkeleton",{attrs:{"is-for-tab":"audio"}}),_vm._v(" "),_vm._l(_vm.results,(function(audio,i){return _c("VAudioTrack",{key:audio.id,staticClass:"mb-2 md:mb-1",attrs:{audio:audio,size:_vm.audioTrackSize,layout:"row"},on:{"shift-tab":function shiftTab($event){return _vm.handleShiftTab($event,i)},interacted:_vm.hideSnackbar},nativeOn:{mousedown:function mousedown($event){return _vm.handleMouseDown.apply(null,arguments)},focus:function focus($event){return _vm.showSnackbar.apply(null,arguments)}}})})),_vm._v(" "),_c("VLoadMore")],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSnackbar:__webpack_require__("./src/components/VSnackbar.vue").default,VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"AudioSearch",exportName:"default",description:"",tags:{}}},"./src/pages/search/search-page.types.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={resultItems:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}}}]);
//# sourceMappingURL=audio.e605c76d.iframe.bundle.js.map
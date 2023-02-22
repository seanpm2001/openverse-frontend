(window.webpackJsonp=window.webpackJsonp||[]).push([[185,20,189],{"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLoadMorevue_type_script_lang_ts_=Object(dist_runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},setup:function setup(){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),searchStore=Object(search.b)(),isFetching=Object(dist_runtime.a)((function(){return mediaStore.fetchState.isFetching})),canLoadMore=Object(dist_runtime.a)((function(){return""!==searchStore.searchTerm&&!mediaStore.fetchState.fetchingError&&!mediaStore.fetchState.isFinished&&mediaStore.resultCount>0})),onLoadMore=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!isFetching.value){_context.next=2;break}return _context.abrupt("return");case 2:return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{buttonLabel:Object(dist_runtime.a)((function(){return isFetching.value?i18n.t("browse-page.loading"):i18n.t("browse-page.load")})),isFetching:isFetching,onLoadMore:onLoadMore,canLoadMore:canLoadMore}}}),components_VLoadMorevue_type_script_lang_ts_=VLoadMorevue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VButton",{directives:[{name:"show",rawName:"v-show",value:this.canLoadMore,expression:"canLoadMore"}],attrs:{size:"large",variant:"full",disabled:this.isFetching,"data-testid":"load-more"},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{}}},"./src/pages/search/audio.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),use_media_query=__webpack_require__("./src/composables/use-media-query.ts"),use_browser_detection=__webpack_require__("./src/composables/use-browser-detection.ts"),use_focus_filters=__webpack_require__("./src/composables/use-focus-filters.ts"),focus_management=__webpack_require__("./src/utils/focus-management.ts"),ui=__webpack_require__("./src/stores/ui.ts"),VSnackbar=__webpack_require__("./src/components/VSnackbar.vue"),VAudioTrack=__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VGridSkeleton=__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue"),search_page_types=__webpack_require__("./src/pages/search/search-page.types.ts"),search_audiovue_type_script_lang_ts_=Object(runtime.b)({name:"AudioSearch",components:{VSnackbar:VSnackbar.default,VAudioTrack:VAudioTrack.default,VGridSkeleton:VGridSkeleton.default,VLoadMore:VLoadMore.default},props:search_page_types.propTypes,setup:function setup(props){Object(runtime.w)({title:"".concat(props.searchTerm," | Openverse")});var results=Object(runtime.a)((function(){return props.resultItems.audio})),isMinScreenMd=Object(use_media_query.a)("md",{shouldPassInSSR:!0}),isMobile=Object(use_browser_detection.a)(),audioTrackSize=Object(runtime.a)((function(){return!isMinScreenMd.value||isMobile?"s":props.isFilterVisible?"l":"m"})),focusFilters=Object(use_focus_filters.a)(),isMouseDown=Object(runtime.p)(!1),uiStore=Object(ui.a)();return{results:results,audioTrackSize:audioTrackSize,handleShiftTab:function handleShiftTab(event,i){0===i&&focusFilters.focusFilterSidebar(event,focus_management.a.Last)},handleMouseDown:function handleMouseDown(){isMouseDown.value=!0},isSnackbarVisible:Object(runtime.a)((function(){return uiStore.areInstructionsVisible})),showSnackbar:function showSnackbar(){isMouseDown.value?isMouseDown.value=!1:uiStore.showInstructionsSnackbar()},hideSnackbar:function hideSnackbar(){uiStore.hideInstructionsSnackbar()}}},head:{}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(search_audiovue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",{staticClass:"-mx-2 md:-mx-4"},[_c("VSnackbar",{attrs:{size:"large","is-visible":_vm.isSnackbarVisible}},[_c("i18n",{attrs:{path:"audio-results.snackbar.text",tag:"p"},scopedSlots:_vm._u([_vm._l(["spacebar","left","right"],(function(keyboardKey){return{key:keyboardKey,fn:function fn(){return[_c("kbd",{key:keyboardKey,staticClass:"font-sans"},[_vm._v(_vm._s(_vm.$t("audio-results.snackbar.".concat(keyboardKey))))])]},proxy:!0}}))],null,!0)})],1),_vm._v(" "),0!==_vm.results.length||_vm.fetchState.isFinished?_vm._e():_c("VGridSkeleton",{attrs:{"is-for-tab":"audio"}}),_vm._v(" "),_vm._l(_vm.results,(function(audio,i){return _c("VAudioTrack",{key:audio.id,staticClass:"mb-2 md:mb-1",attrs:{audio:audio,size:_vm.audioTrackSize,layout:"row"},on:{"shift-tab":function shiftTab($event){return _vm.handleShiftTab($event,i)},interacted:_vm.hideSnackbar},nativeOn:{mousedown:function mousedown($event){return _vm.handleMouseDown.apply(null,arguments)},focus:function focus($event){return _vm.showSnackbar.apply(null,arguments)}}})})),_vm._v(" "),_c("VLoadMore")],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSnackbar:__webpack_require__("./src/components/VSnackbar.vue").default,VGridSkeleton:__webpack_require__("./src/components/VSkeleton/VGridSkeleton.vue").default,VAudioTrack:__webpack_require__("./src/components/VAudioTrack/VAudioTrack.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"AudioSearch",exportName:"default",description:"",tags:{}}},"./src/pages/search/search-page.types.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"propTypes",(function(){return propTypes}));var propTypes={resultItems:{type:Object,required:!0},fetchState:{type:Object,required:!0},isFilterVisible:{type:Boolean,required:!1},searchTerm:{type:String,required:!0},supported:{type:Boolean,required:!1}}},"./src/stores/ui.ts":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useUiStore}));var pinia__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/pinia@2.0.20_bwmvgbrvs54y3u2q642yxns4ge/node_modules/pinia/dist/pinia.mjs"),useUiStore=Object(pinia__WEBPACK_IMPORTED_MODULE_0__.c)("ui",{state:function state(){return{instructionsSnackbarState:"not_shown"}},getters:{areInstructionsVisible:function areInstructionsVisible(state){return"visible"===state.instructionsSnackbarState}},actions:{showInstructionsSnackbar:function showInstructionsSnackbar(){"not_shown"===this.instructionsSnackbarState&&(this.instructionsSnackbarState="visible")},hideInstructionsSnackbar:function hideInstructionsSnackbar(){this.instructionsSnackbarState="dismissed"}}})}}]);
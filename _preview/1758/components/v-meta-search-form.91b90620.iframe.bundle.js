(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/components/VMetaSearch/VMetaSearchForm.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),focus_management=__webpack_require__("./src/utils/focus-management.ts"),emits=__webpack_require__("./src/types/emits.ts"),VMetaSourceList=__webpack_require__("./src/components/VMetaSearch/VMetaSourceList.vue"),VMetaSearch_VMetaSearchFormvue_type_script_lang_ts_=Object(runtime.b)({name:"VMetaSearchForm",components:{VMetaSourceList:VMetaSourceList.default},props:{query:{type:Object,required:!0},type:{type:String,required:!0},isSupported:{type:Boolean,default:!1},hasNoResults:{type:Boolean,required:!0}},emits:{tab:Object(emits.a)()},setup:function setup(_,_ref){var emit=_ref.emit,sectionRef=Object(runtime.p)(),lastFocusableElement=Object(runtime.a)((function(){var focusable=Object(focus_management.c)(sectionRef.value);return focusable[focusable.length-1]}));return{sectionRef:sectionRef,handleTab:function handleTab(event){event.target===lastFocusableElement.value&&emit("tab",event)}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VMetaSearch_VMetaSearchFormvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",{key:_vm.type,ref:"sectionRef",staticClass:"meta-search p-6 text-center",attrs:{"data-testid":"meta-search-form"},on:{keydown:function keydown($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")||$event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey?null:_vm.handleTab.apply(null,arguments)}}},[_vm.hasNoResults?_c("i18n",{staticClass:"text-base font-normal leading-[130%]",attrs:{path:"meta-search.form.no-results-title",tag:"p"},scopedSlots:_vm._u([{key:"type",fn:function fn(){return[_vm._v(_vm._s(_vm.$t("meta-search.form.types.".concat(_vm.type))))]},proxy:!0},{key:"query",fn:function fn(){return[_vm._v(_vm._s(_vm.query.q))]},proxy:!0}])}):_c("i18n",{staticClass:"text-base font-normal leading-[130%]",attrs:{path:_vm.isSupported?"meta-search.form.supported-title":"meta-search.form.unsupported-title",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"type",fn:function fn(){return[_vm._v(_vm._s(_vm.$t("meta-search.form.types.".concat(_vm.type))))]},proxy:!0}],null,!1,4181752762)}),_vm._v(" "),_c("i18n",{staticClass:"text-base font-normal leading-[130%]",attrs:{path:"meta-search.form.caption",tag:"p"},scopedSlots:_vm._u([{key:"type",fn:function fn(){return[_vm._v(_vm._s(_vm.$t("meta-search.form.types-plural.".concat(_vm.type))))]},proxy:!0},{key:"break",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("VMetaSourceList",{staticClass:"my-8 md:justify-center",attrs:{type:_vm.type,query:_vm.query}}),_vm._v(" "),_c("p",{staticClass:"my-0 mx-auto max-w-3xl text-base font-normal leading-[130%]"},[_vm._v("\n    "+_vm._s(_vm.$t("meta-search.caption",{openverse:"Openverse"}))+"\n  ")])],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VMetaSourceList:__webpack_require__("./src/components/VMetaSearch/VMetaSourceList.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMetaSearchForm",exportName:"default",description:"",tags:{},props:[{name:"query",type:{name:"ApiQueryParams"},required:!0},{name:"type",type:{name:"MediaType"},required:!0},{name:"isSupported",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasNoResults",type:{name:"boolean"},required:!0}],events:[{name:"tab"}]}}}]);
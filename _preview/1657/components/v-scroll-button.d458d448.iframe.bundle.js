(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/components/VScrollButton.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.32.0_efpv4fxq5hpknftnxyzfo2vyxy/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),emits=__webpack_require__("./src/types/emits.ts"),components_VScrollButtonvue_type_script_lang_ts_=Object(runtime.b)({name:"VScrollButton",props:{isFilterSidebarVisible:{type:Boolean,default:!0}},emits:{tab:Object(emits.a)()},setup:function setup(props){return{hClass:Object(runtime.a)((function(){return props.isFilterSidebarVisible?"ltr:right-[21rem] rtl:left-[21rem]":"ltr:right-4 rtl:left-4"})),scrollToTop:function scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.9.8_pv3e62hihcgilzzlt4q6ljqzyu/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VScrollButtonvue_type_script_lang_ts_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("button",{staticClass:"scroll fixed bottom-4 h-14 w-14 rounded-full bg-pink text-center text-white transition-all duration-100 ease-linear hover:bg-dark-pink hover:shadow-md",class:_vm.hClass,attrs:{"aria-label":_vm.$t("browse-page.aria.scroll"),type:"button"},on:{click:_vm.scrollToTop,keydown:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")||$event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey?null:_vm.$emit("tab",$event)}}},[_c("svg",{staticClass:"h-full w-full fill-curr",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"}},[_c("path",{attrs:{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}})])])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VScrollButton",exportName:"default",description:"",tags:{},props:[{name:"isFilterSidebarVisible",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"tab"}]}}}]);
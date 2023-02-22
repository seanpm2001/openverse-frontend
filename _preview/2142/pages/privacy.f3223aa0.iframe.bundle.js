(window.webpackJsonp=window.webpackJsonp||[]).push([[156,12],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),components_VContentPagevue_type_script_lang_ts_=Object(runtime.b)({name:"VContentPage"}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("div",{staticClass:"pt-5 md:pt-10",attrs:{dir:"ltr"}},[_c("div",{staticClass:"prose-h1:text-bold prose prose-sm mx-auto mb-10 max-w-none px-6 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-semibold md:max-w-4xl md:prose-base md:prose-h1:mb-10 md:prose-h2:mt-10 md:prose-h3:mt-10 lg:mb-30 lg:px-0 lg:prose-headings:text-3xl lg:prose-h1:text-6xl xl:max-w-5xl"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/privacy.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),feature_flag=__webpack_require__("./src/stores/feature-flag.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VLink=__webpack_require__("./src/components/VLink.vue"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),pages_privacyvue_type_script_lang_ts_=Object(runtime.b)({name:"VPrivacyPage",components:{VLink:VLink.default,VContentPage:VContentPage.default},setup:function setup(){var i18n=Object(use_i18n.a)(),featureFlagStore=Object(feature_flag.b)();Object(runtime.w)({title:"".concat(i18n.t("privacy.title",{openverse:"Openverse"})," | Openverse"),meta:featureFlagStore.isOn("new_header")?[{hid:"robots",name:"robots",content:"all"}]:void 0})},head:{}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_privacyvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VContentPage",[_c("h1",[_vm._v("\n    "+_vm._s(_vm.$t("privacy.title",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"privacy.intro.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{href:"https://wordpress.org/about/privacy/"}},[_vm._v(_vm._s(_vm.$t("privacy.intro.link")))])]},proxy:!0},{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0}])}),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("privacy.cookies.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"privacy.cookies.content",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0}])}),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("privacy.contact.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"privacy.contact.content",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"email",fn:function fn(){return[_c("VLink",{attrs:{href:"mailto:openverse@wordpress.org"}},[_vm._v("openverse@wordpress.org")])]},proxy:!0},{key:"issue",fn:function fn(){return[_c("VLink",{attrs:{href:"https://github.com/WordPress/openverse/issues/new/choose"}},[_vm._v("\n        "+_vm._s(_vm.$t("privacy.contact.issue")))])]},proxy:!0},{key:"chat",fn:function fn(){return[_c("VLink",{attrs:{href:"https://make.wordpress.org/chat/"}},[_vm._v("\n        "+_vm._s(_vm.$t("privacy.contact.chat")))])]},proxy:!0}])})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__("./src/components/VLink.vue").default,VContentPage:__webpack_require__("./src/components/VContentPage.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VPrivacyPage",exportName:"default",description:"",tags:{}}}}]);
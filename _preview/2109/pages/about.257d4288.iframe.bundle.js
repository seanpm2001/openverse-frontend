(window.webpackJsonp=window.webpackJsonp||[]).push([[158,12],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),components_VContentPagevue_type_script_lang_ts_=Object(runtime.b)({name:"VContentPage"}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("div",{staticClass:"pt-5 md:pt-10",attrs:{dir:"ltr"}},[_c("div",{staticClass:"prose-h1:text-bold prose prose-sm mx-auto mb-10 max-w-none px-6 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-semibold md:max-w-4xl md:prose-base md:prose-h1:mb-10 md:prose-h2:mt-10 md:prose-h3:mt-10 lg:mb-30 lg:px-0 lg:prose-headings:text-3xl lg:prose-h1:text-6xl xl:max-w-5xl"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/about.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),feature_flag=__webpack_require__("./src/stores/feature-flag.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VLink=__webpack_require__("./src/components/VLink.vue"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),pages_aboutvue_type_script_lang_ts_=Object(runtime.b)({name:"AboutPage",components:{VLink:VLink.default,VContentPage:VContentPage.default},layout:"content-layout",setup:function setup(){var i18n=Object(use_i18n.a)(),featureFlagStore=Object(feature_flag.b)();Object(runtime.w)({title:"".concat(i18n.t("about.title",{openverse:"Openverse"})," | Openverse"),meta:featureFlagStore.isOn("new_header")?[{hid:"robots",name:"robots",content:"all"}]:void 0})},head:{}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_aboutvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VContentPage",[_c("h1",[_vm._v("\n    "+_vm._s(_vm.$t("about.title",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("about.description.content",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"about.collection.content",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"common-crawl",fn:function fn(){return[_c("VLink",{attrs:{href:"https://commoncrawl.org/"}},[_vm._v("Common Crawl")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"about.planning.content",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"frontend",fn:function fn(){return[_c("VLink",{attrs:{href:"https://github.com/wordpress/openverse-frontend/"}},[_vm._v(_vm._s(_vm.$t("about.planning.frontend",{openverse:"Openverse"})))])]},proxy:!0},{key:"api",fn:function fn(){return[_c("VLink",{attrs:{href:"https://github.com/wordpress/openverse-api/"}},[_vm._v(_vm._s(_vm.$t("about.planning.api",{openverse:"Openverse"})))])]},proxy:!0},{key:"catalog",fn:function fn(){return[_c("VLink",{attrs:{href:"https://github.com/wordpress/openverse-catalog/"}},[_vm._v(_vm._s(_vm.$t("about.planning.catalog",{openverse:"Openverse"})))])]},proxy:!0},{key:"community",fn:function fn(){return[_c("VLink",{attrs:{href:"https://make.wordpress.org/openverse/"}},[_vm._v(_vm._s(_vm.$t("about.planning.community")))])]},proxy:!0},{key:"working",fn:function fn(){return[_c("VLink",{attrs:{href:"https://github.com/orgs/WordPress/projects/3"}},[_vm._v(_vm._s(_vm.$t("about.planning.working")))])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"about.transfer.content",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"creative-commons",fn:function fn(){return[_c("VLink",{attrs:{href:"https://creativecommons.org/2021/05/03/cc-search-to-join-wordpress/"}},[_vm._v("Creative Commons")])]},proxy:!0},{key:"wordpress",fn:function fn(){return[_c("VLink",{attrs:{href:"https://ma.tt/2021/04/cc-search-to-join-wordpress-org/"}},[_vm._v("WordPress")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"about.declaration.content",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"terms",fn:function fn(){return[_c("VLink",{attrs:{href:"https://creativecommons.org/terms/"}},[_vm._v(_vm._s(_vm.$t("about.declaration.terms",{openverse:"Openverse"})))])]},proxy:!0}])}),_vm._v(" "),_c("h2",{attrs:{id:"external-sources"}},[_vm._v("\n    "+_vm._s(_vm.$t("external-sources-page.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"external-sources-page.intro",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"link",fn:function fn(){return[_c("VLink",{attrs:{href:"/sources"}},[_vm._v(_vm._s(_vm.$t("external-sources-page.link")))])]},proxy:!0}])}),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("external-sources-page.license",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("external-sources-page.explanation",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("external-sources-page.relationships",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("external-sources-page.new.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"external-sources-page.new.content",tag:"p"},scopedSlots:_vm._u([{key:"issue",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":"issue",href:"https://github.com/WordPress/openverse-catalog/issues/new?assignees=&labels=%F0%9F%9A%A6+status%3A+awaiting+triage%2C%F0%9F%A7%B9+status%3A+ticket+work+required%2C%E2%98%81%EF%B8%8F+provider%3A+any&template=new_source_suggestion.yml&title=%3CSource+name+here%3E"}},[_vm._v(_vm._s(_vm.$t("external-sources-page.new.issue")))])]},proxy:!0},{key:"email",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":"email",href:"mailto:openverse@wordpress.org"}},[_vm._v(_vm._s(_vm.$t("external-sources-page.new.email")))])]},proxy:!0}])}),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("external-sources-page.why.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"external-sources-page.why.content",tag:"p"},scopedSlots:_vm._u([{key:"old",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":"email",href:"https://oldsearch.creativecommons.org"}},[_vm._v(_vm._s(_vm.$t("external-sources-page.why.old")))])]},proxy:!0}])}),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("external-sources-page.why.new",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"external-sources-page.why.feedback-suggestions",tag:"p"},scopedSlots:_vm._u([{key:"feedback",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("external-sources-page.why.aria-label"),href:"/feedback"}},[_vm._v(_vm._s(_vm.$t("external-sources-page.why.feedback-link")))])]},proxy:!0}])})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__("./src/components/VLink.vue").default,VContentPage:__webpack_require__("./src/components/VContentPage.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"AboutPage",exportName:"default",description:"",tags:{}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[184,13],{"./src/components/VContentPage.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),components_VContentPagevue_type_script_lang_ts_=Object(runtime.b)({name:"VContentPage"}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js");const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VContentPagevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("div",{staticClass:"pt-5 md:pt-10",attrs:{dir:"ltr"}},[_c("div",{staticClass:"prose-h1:text-bold prose prose-sm mx-auto mb-10 max-w-none px-6 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:font-semibold prose-h3:text-2xl prose-h3:font-semibold md:prose-base md:max-w-4xl md:prose-h1:mb-10 md:prose-h2:mt-10 md:prose-h3:mt-10 lg:mb-30 lg:px-0 lg:prose-headings:text-3xl lg:prose-h1:text-6xl xl:max-w-5xl"},[this._t("default",null,{default:""})],2)])}),[],!1,null,null,null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VContentPage",exportName:"default",description:"",tags:{},slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/pages/search-help.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.regexp.to-string.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VLink=__webpack_require__("./src/components/VLink.vue"),VContentPage=__webpack_require__("./src/components/VContentPage.vue"),search_helpvue_type_script_lang_ts_=Object(runtime.b)({name:"VSearchHelpPage",components:{VLink:VLink.default,VContentPage:VContentPage.default},setup:function setup(){var app=Object(runtime.v)().app;return{pathFromQuery:function pathFromQuery(queryString){var quote=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return app.localePath({path:"search",query:{q:quote?'"'.concat(queryString,'"'):queryString}})},providerSearchLink:function providerSearchLink(providerCode){return'https://search.creativecommons.org/search?q=provider%3A%20"'.concat(providerCode,'"')}}},head:function head(){return{title:"".concat(this.$t("search-guide.title",{openverse:"Openverse"})," | Openverse")}}}),pages_search_helpvue_type_script_lang_ts_=search_helpvue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(pages_search_helpvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VContentPage",[_c("h1",[_vm._v("\n    "+_vm._s(_vm.$t("search-guide.title",{openverse:"Openverse"}))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("search-guide.intro"))+"\n  ")]),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("search-guide.exact.title"))+"\n  ")]),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.exact.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("search-guide.exact.aria-label"),href:_vm.pathFromQuery("Claude Monet",!0)}},[_c("em",[_vm._v(_vm._s(_vm.$t("search-guide.exact.claude-monet")))])])]},proxy:!0}])}),_vm._v(" "),_c("h2",[_vm._v("\n    "+_vm._s(_vm.$t("search-guide.combine.title"))+"\n  ")]),_vm._v(" "),_c("p",[_vm._v("\n    "+_vm._s(_vm.$t("search-guide.combine.description"))+"\n  ")]),_vm._v(" "),_c("ul",[_c("i18n",{attrs:{path:"search-guide.combine.and",tag:"li"},scopedSlots:_vm._u([{key:"symbol",fn:function fn(){return[_c("code",{attrs:{"aria-label":_vm.$t("search-guide.combine.aria-labels.plus").toString()}},[_vm._v("+\n        ")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.combine.or",tag:"li"},scopedSlots:_vm._u([{key:"symbol",fn:function fn(){return[_c("code",{attrs:{"aria-label":_vm.$t("search-guide.combine.aria-labels.vertical-bar").toString()}},[_vm._v("|\n        ")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.combine.negate",tag:"li"},scopedSlots:_vm._u([{key:"symbol",fn:function fn(){return[_c("code",{attrs:{"aria-label":_vm.$t("search-guide.combine.aria-labels.minus").toString()}},[_vm._v("-\n        ")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.combine.prefix",tag:"li"},scopedSlots:_vm._u([{key:"symbol",fn:function fn(){return[_c("code",{attrs:{"aria-label":_vm.$t("search-guide.combine.aria-labels.star").toString()}},[_vm._v("*\n        ")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.combine.precedence",tag:"li"},scopedSlots:_vm._u([{key:"open",fn:function fn(){return[_c("code",{attrs:{"aria-label":_vm.$t("search-guide.combine.aria-labels.open").toString()}},[_vm._v("(\n        ")])]},proxy:!0},{key:"close",fn:function fn(){return[_c("code",{attrs:{"aria-label":_vm.$t("search-guide.combine.aria-labels.close").toString()}},[_vm._v(")\n        ")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.combine.fuzziness",tag:"li"},scopedSlots:_vm._u([{key:"symbol",fn:function fn(){return[_c("code",{attrs:{"aria-label":_vm.$t("search-guide.combine.aria-labels.fuzziness").toString()}},[_vm._v("~N\n        ")])]},proxy:!0}])})],1),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.example.and.description",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("search-guide.example.and.aria-label").toString(),href:_vm.pathFromQuery("dog%2Bcat")}},[_c("em",[_vm._v(_vm._s(_vm.$t("search-guide.example.and.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.example.or.description",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("search-guide.example.or.aria-label"),href:_vm.pathFromQuery("dog%7Ccat")}},[_c("em",[_vm._v(_vm._s(_vm.$t("search-guide.example.or.example").toString()))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mt-4",attrs:{path:"search-guide.example.negate.description",tag:"p"},scopedSlots:_vm._u([{key:"operator",fn:function fn(){return[_c("em",{attrs:{"aria-label":_vm.$t("search-guide.example.negate.operator-aria-label").toString()}},[_vm._v("-\n        "+_vm._s(_vm.$t("search-guide.example.negate.operator-name").toString()))])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mb-4",attrs:{path:"search-guide.example.negate.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("search-guide.example.negate.aria-label"),href:_vm.pathFromQuery("dog%20-pug")}},[_c("em",[_vm._v(_vm._s(_vm.$t("search-guide.example.negate.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mt-4",attrs:{path:"search-guide.example.prefix.description",tag:"p"},scopedSlots:_vm._u([{key:"operator",fn:function fn(){return[_c("em",{attrs:{"aria-label":_vm.$t("search-guide.example.prefix.aria-label").toString()}},[_vm._v("*\n        "+_vm._s(_vm.$t("search-guide.example.prefix.operator-name").toString()))])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mb-4",attrs:{path:"search-guide.example.prefix.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("search-guide.example.prefix.aria-label"),href:_vm.pathFromQuery("net%2a")}},[_c("em",[_vm._v(_vm._s(_vm.$t("search-guide.example.prefix.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.example.precedence.description",tag:"p"},scopedSlots:_vm._u([{key:"highlight",fn:function fn(){return[_c("em",[_vm._v("( and )")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mb-4",attrs:{path:"search-guide.example.precedence.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("search-guide.example.precedence.aria-label"),href:_vm.pathFromQuery("dogs%20%2B%20%28corgis%20%7C%20labrador%29")}},[_c("em",[_vm._v(_vm._s(_vm.$t("search-guide.example.precedence.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])}),_vm._v(" "),_c("i18n",{attrs:{path:"search-guide.example.fuzziness.description",tag:"p"},scopedSlots:_vm._u([{key:"highlight",fn:function fn(){return[_c("em",{attrs:{"aria-label":"tilde N"}},[_vm._v("~N")])]},proxy:!0},{key:"link",fn:function fn(){return[_c("VLink",{attrs:{href:"https://en.wikipedia.org/wiki/Levenshtein_distance"}},[_vm._v("\n        "+_vm._s(_vm.$t("search-guide.example.fuzziness.link-text"))+"\n      ")])]},proxy:!0}])}),_vm._v(" "),_c("i18n",{staticClass:"mb-4",attrs:{path:"search-guide.example.fuzziness.content",tag:"p"},scopedSlots:_vm._u([{key:"link",fn:function fn(){return[_c("VLink",{attrs:{"aria-label":_vm.$t("search-guide.example.fuzziness.aria-label"),href:_vm.pathFromQuery("theatre~1")}},[_c("em",[_vm._v(_vm._s(_vm.$t("search-guide.example.fuzziness.example")))])])]},proxy:!0},{key:"br",fn:function fn(){return[_c("br")]},proxy:!0}])})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLink:__webpack_require__("./src/components/VLink.vue").default,VContentPage:__webpack_require__("./src/components/VContentPage.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSearchHelpPage",exportName:"default",description:"",tags:{}}}}]);
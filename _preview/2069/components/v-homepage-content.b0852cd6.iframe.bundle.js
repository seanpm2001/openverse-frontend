(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/VHomepageContent.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var VLink=__webpack_require__("./src/components/VLink.vue"),VStandaloneSearchBar=__webpack_require__("./src/components/VHeader/VSearchBar/VStandaloneSearchBar.vue"),components_VHomepageContentvue_type_script_lang_ts_={name:"VHomepageContent",components:{VSearchTypePopover:__webpack_require__("./src/components/VContentSwitcher/VSearchTypePopover.vue").default,VStandaloneSearchBar:VStandaloneSearchBar.default,VLink:VLink.default},props:{handleSearch:{type:Function,required:!0},searchType:{type:String,required:!0},setSearchType:{type:Function,required:!0},isSm:{type:Boolean,required:!0}}},componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VHomepageContentvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;return _c("div",[_c("h2",{staticClass:"mt-auto mb-2 text-[40px] font-light leading-tight lg:text-[63px]"},[_vm._v("\n    "+_vm._s(_vm.$t("hero.subtitle"))+"\n  ")]),_vm._v(" "),_c("p",{staticClass:"text-base leading-relaxed"},[_vm._v("\n    "+_vm._s(_vm.$t("hero.description"))+"\n  ")]),_vm._v(" "),_c("VStandaloneSearchBar",{staticClass:"mt-4 md:mt-6",on:{submit:_vm.handleSearch}},[_c("VSearchTypePopover",{staticClass:"mx-3 group-focus-within:bg-white group-hover:bg-white",attrs:{"active-item":_vm.searchType,placement:"searchbar","show-label":_vm.isSm},on:{select:_vm.setSearchType}})],1),_vm._v(" "),_c("i18n",{staticClass:"mt-4 text-sr",attrs:{path:"hero.disclaimer.content",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"license",fn:function fn(){return[_c("VLink",{staticClass:"text-dark-charcoal underline hover:text-dark-charcoal",attrs:{href:"https://creativecommons.org/licenses/"}},[_vm._v(_vm._s(_vm.$t("hero.disclaimer.license")))])]},proxy:!0}])})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSearchTypePopover:__webpack_require__("./src/components/VContentSwitcher/VSearchTypePopover.vue").default,VStandaloneSearchBar:__webpack_require__("./src/components/VHeader/VSearchBar/VStandaloneSearchBar.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VHomepageContent",exportName:"default",description:"",tags:{},props:[{name:"handleSearch",type:{name:"(query: string) => void"},required:!0},{name:"searchType",type:{name:"SearchType"},required:!0},{name:"setSearchType",type:{name:"(searchType: SearchType) => void"},required:!0},{name:"isSm",type:{name:"boolean"},required:!0}]}}}]);
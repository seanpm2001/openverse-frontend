(window.webpackJsonp=window.webpackJsonp||[]).push([[4,13,24],{"./node_modules/.pnpm/build-url@6.0.1/node_modules/build-url/dist/build-url.js":function(module,exports,__webpack_require__){(function(){"use strict";var root=this,previousBuildUrl=root.buildUrl,encodedParam=function(param){return null===param?"":encodeURIComponent(String(param).trim())},buildUrl=function(url,options){var key,builtUrl,caseChange,queryString=[];if(caseChange=!(!options||!options.lowerCase)&&!!options.lowerCase,null===url?builtUrl="":"object"==typeof url?(builtUrl="",options=url):builtUrl=url,options){if(options.path){builtUrl&&"/"===builtUrl[builtUrl.length-1]&&(builtUrl=builtUrl.slice(0,-1));var localVar=String(options.path).trim();caseChange&&(localVar=localVar.toLowerCase()),0===localVar.indexOf("/")?builtUrl+=localVar:builtUrl+="/"+localVar}if(options.queryParams){for(key in options.queryParams){var param;if(options.queryParams.hasOwnProperty(key)&&void 0!==options.queryParams[key])if(options.disableCSV&&Array.isArray(options.queryParams[key])&&options.queryParams[key].length)for(var i=0;i<options.queryParams[key].length;i++)param=options.queryParams[key][i],queryString.push(key+"="+encodedParam(param));else param=caseChange?options.queryParams[key].toLowerCase():options.queryParams[key],queryString.push(key+"="+encodedParam(param))}builtUrl+="?"+queryString.join("&")}options.hash&&(builtUrl+=caseChange?"#"+String(options.hash).trim().toLowerCase():"#"+String(options.hash).trim())}return builtUrl};buildUrl.noConflict=function(){return root.buildUrl=previousBuildUrl,buildUrl},module.exports&&(exports=module.exports=buildUrl),exports.buildUrl=buildUrl}).call(this)},"./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.10.0_g2ee3j26zdrv6uisguvqzeqcse/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=740cf7ce&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,"h1[data-v-740cf7ce]:first-letter{text-transform:uppercase}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.10.0_g2ee3j26zdrv6uisguvqzeqcse/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=740cf7ce&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.10.0_g2ee3j26zdrv6uisguvqzeqcse/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=740cf7ce&prod&scoped=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("ff629736",content,!0,{sourceMap:!1})},"./src/components/VExternalSearch/VExternalSearchForm.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.regexp.to-string.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),focus_management=__webpack_require__("./src/utils/focus-management.ts"),emits=__webpack_require__("./src/types/emits.ts"),ui=__webpack_require__("./src/stores/ui.ts"),use_dialog_control=__webpack_require__("./src/composables/use-dialog-control.ts"),VExternalSourceList=__webpack_require__("./src/components/VExternalSearch/VExternalSourceList.vue"),VButton=__webpack_require__("./src/components/VButton.vue"),VIcon=__webpack_require__("./src/components/VIcon/VIcon.vue"),VPopoverContent=__webpack_require__("./src/components/VPopover/VPopoverContent.vue"),VModalContent=__webpack_require__("./src/components/VModal/VModalContent.vue"),caret_down=__webpack_require__("./src/assets/icons/caret-down.svg"),caret_down_default=__webpack_require__.n(caret_down),VExternalSearch_VExternalSearchFormvue_type_script_lang_ts_=Object(runtime.b)({name:"VExternalSearchForm",components:{VModalContent:VModalContent.default,VPopoverContent:VPopoverContent.default,VIcon:VIcon.default,VButton:VButton.default,VExternalSourceList:VExternalSourceList.default},props:{type:{type:String,required:!0},searchTerm:{type:String,required:!0},externalSources:{type:Array,required:!0},isSupported:{type:Boolean,default:!1},hasNoResults:{type:Boolean,required:!0}},emits:{tab:Object(emits.a)()},setup:function setup(_,_ref){var emit=_ref.emit,sectionRef=Object(runtime.p)(null),triggerRef=Object(runtime.p)(null),uiStore=Object(ui.a)(),isMd=Object(runtime.a)((function(){return uiStore.isBreakpoint("md")})),triggerElement=Object(runtime.a)((function(){var _a;return null===(_a=triggerRef.value)||void 0===_a?void 0:_a.$el})),lockBodyScroll=Object(runtime.a)((function(){return!isMd.value})),isVisible=Object(runtime.p)(!1),_useDialogControl=Object(use_dialog_control.a)({visibleRef:isVisible,nodeRef:sectionRef,lockBodyScroll:lockBodyScroll,emit:emit}),closeDialog=_useDialogControl.close,openDialog=_useDialogControl.open,onTriggerClick=_useDialogControl.onTriggerClick,triggerA11yProps=_useDialogControl.triggerA11yProps,lastFocusableElement=Object(runtime.a)((function(){var focusable=Object(focus_management.c)(sectionRef.value);return focusable[focusable.length-1]}));return{sectionRef:sectionRef,triggerRef:triggerRef,triggerElement:triggerElement,handleTab:function handleTab(event){event.target===lastFocusableElement.value&&emit("tab",event)},isMd:isMd,closeDialog:closeDialog,openDialog:openDialog,onTriggerClick:onTriggerClick,triggerA11yProps:triggerA11yProps,isVisible:isVisible,caretDownIcon:caret_down_default.a}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VExternalSearch_VExternalSearchFormvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",{key:_vm.type,ref:"sectionRef",staticClass:"external-sources flex flex-row place-items-center justify-center py-4",attrs:{"data-testid":"external-sources-form"},on:{keydown:function keydown($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")||$event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey?null:_vm.handleTab.apply(null,arguments)}}},[!_vm.hasNoResults&&_vm.isSupported?_c("i18n",{staticClass:"text-base font-normal leading-[130%]",attrs:{path:"external-sources.form.supported-title",tag:"p"}}):_vm.hasNoResults||_vm.isSupported?_c("i18n",{staticClass:"text-base font-normal leading-[130%]",attrs:{path:"external-sources.form.no-results-title",tag:"p"},scopedSlots:_vm._u([{key:"type",fn:function fn(){return[_vm._v(_vm._s(_vm.$t("external-sources.form.types.".concat(_vm.type))))]},proxy:!0},{key:"query",fn:function fn(){return[_vm._v(_vm._s(_vm.searchTerm))]},proxy:!0}])}):_c("i18n",{staticClass:"text-base font-normal leading-[130%]",attrs:{path:"external-sources.form.unsupported-title",tag:"p"},scopedSlots:_vm._u([{key:"openverse",fn:function fn(){return[_vm._v("Openverse")]},proxy:!0},{key:"type",fn:function fn(){return[_vm._v(_vm._s(_vm.$t("external-sources.form.types.".concat(_vm.type))))]},proxy:!0}])}),_vm._v(" "),_c("VButton",{ref:"triggerRef",staticClass:"caption-regular min-w-max gap-1 py-1 px-3 text-dark-charcoal pe-1 ms-2 focus-visible:border-tx",attrs:{id:"external-sources-button",pressed:_vm.triggerA11yProps["aria-expanded"],"aria-haspopup":"dialog","aria-controls":_vm.isMd?"external-sources-popover":"external-sources-modal",variant:"dropdown-label",size:"disabled"},on:{click:_vm.onTriggerClick}},[_vm._v(_vm._s(_vm.$t("external-sources.button").toString())),_c("VIcon",{staticClass:"text-dark-charcoal-40",class:{"text-white":_vm.triggerA11yProps["aria-expanded"]},attrs:{"icon-path":_vm.caretDownIcon}})],1),_vm._v(" "),_vm.triggerElement?[_vm.isMd?_c("VPopoverContent",{attrs:{id:"external-sources-popover","aria-labelledby":"external-sources-button",hide:_vm.closeDialog,"trigger-element":_vm.triggerElement,visible:_vm.isVisible,"z-index":"popover"}},[_c("VExternalSourceList",{staticClass:"flex flex-col",attrs:{"external-sources":_vm.externalSources},on:{close:_vm.closeDialog}})],1):_c("VModalContent",{attrs:{id:"external-sources-modal","aria-labelledby":"external-sources-button","trigger-element":_vm.triggerElement,hide:_vm.closeDialog,visible:_vm.isVisible,variant:"centered"}},[_c("VExternalSourceList",{staticClass:"flex-col justify-center",attrs:{"external-sources":_vm.externalSources},on:{close:_vm.closeDialog}})],1)]:_vm._e()],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VIcon:__webpack_require__("./src/components/VIcon/VIcon.vue").default,VButton:__webpack_require__("./src/components/VButton.vue").default,VExternalSourceList:__webpack_require__("./src/components/VExternalSearch/VExternalSourceList.vue").default,VPopoverContent:__webpack_require__("./src/components/VPopover/VPopoverContent.vue").default,VModalContent:__webpack_require__("./src/components/VModal/VModalContent.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VExternalSearchForm",exportName:"default",description:"",tags:{},props:[{name:"type",type:{name:"MediaType"},required:!0},{name:"searchTerm",type:{name:"string"},required:!0},{name:"externalSources",type:{name:"ExternalSource[]"},required:!0},{name:"isSupported",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hasNoResults",type:{name:"boolean"},required:!0}],events:[{name:"tab"}]}},"./src/components/VSearchGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.number.constructor.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),media=__webpack_require__("./src/constants/media.ts"),errors=__webpack_require__("./src/constants/errors.ts"),emits=__webpack_require__("./src/types/emits.ts"),defineProperty=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),build_url=(__webpack_require__("./node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/.pnpm/core-js@3.27.2/node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/.pnpm/build-url@6.0.1/node_modules/build-url/dist/build-url.js")),build_url_default=__webpack_require__.n(build_url),additionalSourceBuilders=[{name:"Centre For Ageing Better",image:function image(search){return{url:"https://ageingbetter.resourcespace.com/pages/search.php",queryParams:{search:search.q}}}},{name:"EDU images",image:function image(search){return{url:"https://images.all4ed.org",queryParams:{s:search.q}}}},{name:"Google Images",image:function image(search){return{url:"https://www.google.com/search",queryParams:{q:search.q,tbm:"isch",tbs:"il:cl"}}}},{name:"Images of Empowerment",image:function image(search){return{url:"https://www.imagesofempowerment.org/",queryParams:{s:search.q}}}},{name:"Open Clip Art Library",image:function image(search){return{url:"http://www.openclipart.org/search/",queryParams:{query:search.q}}}},{name:"Nappy",image:function image(search){return{url:"https://www.nappy.co/",queryParams:{s:search.q}}}},{name:"The Greats",image:function image(search){return{url:"https://www.thegreats.co/artworks/",queryParams:{theme:"0",search:search.q}}}},{name:"ccMixter",audio:function audio(search){return{url:"http://dig.ccmixter.org/search",queryParams:{lic:"open",searchp:search.q}}}},{name:"SoundCloud",audio:function audio(search){return{url:"https://soundcloud.com/search/sounds",queryParams:{q:search.q,"filter.license":"to_share"}}}},{name:"Europeana",audio:function audio(search){return{url:"https://www.europeana.eu/en/search",queryParams:{page:"1",qf:'TYPE:"SOUND"',query:"".concat(search.q," AND RIGHTS:*creative*")}}},video:function video(search){return{url:"https://www.europeana.eu/en/search",queryParams:{page:"1",qf:'TYPE:"VIDEO"',query:"".concat(search.q," AND RIGHTS:*creative*")}}}},{name:"Vimeo",video:function video(search){return{url:"https://vimeo.com/search",queryParams:{license:"by",q:search.q}}}},{name:"Wikimedia Commons",video:function video(search){return{url:"https://commons.wikimedia.org/w/index.php",queryParams:{search:"".concat(search.q),title:"Special:MediaSearch",type:"video"}}}},{name:"YouTube",video:function video(search){return{url:"https://www.youtube.com/results",queryParams:{search_query:search.q,sp:"EgIwAQ%3D%3D"}}}},Object(defineProperty.a)({name:"Sketchfab"},media.e,(function(search){return{url:"https://sketchfab.com/search",queryParams:{q:search.q,licenses:["322a749bcfa841b29dff1e8a1bb74b0b","b9ddc40b93e34cdca1fc152f39b9f375","72360ff1740d419791934298b8b6d270","bbfe3f7dbcdd4122b966b85b9786a989","2628dbe5140a4e9592126c8df566c0b7","34b725081a6a4184957efaec2cb84ed3","7c23a1ba438d4306920229c12afcb5f9"]},disableCSV:!0}})),Object(defineProperty.a)({name:"Thingiverse"},media.e,(function(search){return{url:"https://www.thingiverse.com/search",queryParams:{type:"things",q:search.q}}}))],get_additional_sources_getAdditionalSources=function getAdditionalSources(mediaType,query){return function getAdditionalSourceBuilders(mediaType){return additionalSourceBuilders.filter((function(source){return source[mediaType]}))}(mediaType).map((function(source){var urlFunc=source[mediaType];if(urlFunc){var urlInfo=urlFunc(function transformSearchQuery(query){var _a;return{q:null!==(_a=query.q)&&void 0!==_a?_a:""}}(query));return{url:build_url_default()(urlInfo.url,urlInfo),name:source.name}}}))},VExternalSearchForm=__webpack_require__("./src/components/VExternalSearch/VExternalSearchForm.vue"),VErrorSection=__webpack_require__("./src/components/VErrorSection/VErrorSection.vue"),VErrorImage=__webpack_require__("./src/components/VErrorSection/VErrorImage.vue"),VNoResults=__webpack_require__("./src/components/VErrorSection/VNoResults.vue"),VSearchResultsTitle=__webpack_require__("./src/components/VSearchResultsTitle.vue"),components_VSearchGridvue_type_script_lang_ts_=Object(runtime.b)({name:"VSearchGrid",components:{VErrorSection:VErrorSection.default,VExternalSearchForm:VExternalSearchForm.default,VErrorImage:VErrorImage.default,VNoResults:VNoResults.default,VSearchResultsTitle:VSearchResultsTitle.default},props:{supported:{type:Boolean,required:!0},query:{type:Object,required:!0},searchType:{type:String,required:!0},fetchState:{type:Object,required:!0},resultsCount:{type:Number,required:!0}},emits:{tab:Object(emits.a)()},setup:function setup(props){var hasNoResults=Object(runtime.a)((function(){return!!props.supported&&Boolean(""!==props.query.q&&props.fetchState.hasStarted&&0===props.resultsCount)})),externalSourcesType=Object(runtime.a)((function(){return Object(media.j)(props.searchType)?props.searchType:media.d})),isAllView=Object(runtime.a)((function(){return props.searchType===media.a})),externalSources=Object(runtime.a)((function(){return get_additional_sources_getAdditionalSources(externalSourcesType.value,props.query)})),searchTerm=Object(runtime.a)((function(){return props.query.q||""}));return{hasNoResults:hasNoResults,externalSourcesType:externalSourcesType,isAllView:isAllView,NO_RESULT:errors.a,externalSources:externalSources,searchTerm:searchTerm}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VSearchGridvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return!_vm.fetchState.hasStarted||_vm.fetchState.isFetching||!_vm.fetchState.isFetching&&_vm.resultsCount?_c("section",[_vm.query.q&&_vm.supported?_c("header",{staticClass:"mt-5",class:_vm.isAllView?"mb-10":"mb-8"},[_c("VSearchResultsTitle",{attrs:{size:_vm.isAllView?"large":"default"}},[_vm._v("\n      "+_vm._s(_vm.searchTerm)+"\n    ")])],1):_vm._e(),_vm._v(" "),_vm._t("media"),_vm._v(" "),_c("VExternalSearchForm",{attrs:{type:_vm.externalSourcesType,"has-no-results":_vm.hasNoResults,"external-sources":_vm.externalSources,"search-term":_vm.searchTerm,"is-supported":_vm.supported},on:{tab:function tab($event){return _vm.$emit("tab",$event)}}})],2):_c("VErrorSection",{staticClass:"w-full py-10",scopedSlots:_vm._u([{key:"image",fn:function fn(){return[_c("VErrorImage",{attrs:{"error-code":"NO_RESULT"}})]},proxy:!0}])},[_vm._v(" "),_c("VNoResults",{attrs:{"external-sources":_vm.externalSources,"search-term":_vm.searchTerm}})],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VSearchResultsTitle:__webpack_require__("./src/components/VSearchResultsTitle.vue").default,VExternalSearchForm:__webpack_require__("./src/components/VExternalSearch/VExternalSearchForm.vue").default,VErrorImage:__webpack_require__("./src/components/VErrorSection/VErrorImage.vue").default,VNoResults:__webpack_require__("./src/components/VErrorSection/VNoResults.vue").default,VErrorSection:__webpack_require__("./src/components/VErrorSection/VErrorSection.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VSearchGrid",exportName:"default",description:"",tags:{},props:[{name:"supported",type:{name:"boolean"},required:!0},{name:"query",type:{name:"ApiQueryParams"},required:!0},{name:"searchType",type:{name:"SearchType"},required:!0},{name:"fetchState",type:{name:"FetchState"},required:!0},{name:"resultsCount",type:{name:"number"},required:!0}],events:[{name:"tab"}],slots:[{name:"media"}]}},"./src/components/VSearchResultsTitle.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),components_VSearchResultsTitlevue_type_script_lang_ts_=Object(runtime.b)({name:"VSearchResultsTitle",props:{size:{required:!1,default:"default",type:String}}}),componentNormalizer=(__webpack_require__("./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=740cf7ce&prod&scoped=true&lang=css&"),__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_VSearchResultsTitlevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("h1",{staticClass:"sr-only break-words md:not-sr-only",class:["large"===this.size?"heading-1":"heading-2"]},[this._t("default",null,{default:""})],2)}),[],!1,null,"740cf7ce",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"VSearchResultsTitle",exportName:"default",description:"",tags:{},props:[{name:"size",values:["default","large"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"default"'}}],slots:[{name:"default",scoped:!0,bindings:[{name:"default",title:"binding"}]}]}},"./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=740cf7ce&prod&scoped=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.10.0_g2ee3j26zdrv6uisguvqzeqcse/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/index.js?!./src/components/VSearchResultsTitle.vue?vue&type=style&index=0&id=740cf7ce&prod&scoped=true&lang=css&")}}]);
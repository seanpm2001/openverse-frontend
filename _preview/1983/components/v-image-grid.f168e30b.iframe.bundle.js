(window.webpackJsonp=window.webpackJsonp||[]).push([[17,14,18],{"./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.10.0_g2ee3j26zdrv6uisguvqzeqcse/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/index.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=47bab75e&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/runtime/api.js")((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,'@media (min-width: 768px){.image-grid[data-v-47bab75e]:after{content:"";-webkit-box-flex:999999999;-ms-flex-positive:999999999;flex-grow:999999999}}',""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},"./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.10.0_g2ee3j26zdrv6uisguvqzeqcse/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/index.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=47bab75e&prod&scoped=true&lang=css&":function(module,exports,__webpack_require__){var content=__webpack_require__("./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.10.0_g2ee3j26zdrv6uisguvqzeqcse/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/index.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=47bab75e&prod&scoped=true&lang=css&");content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__("./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/lib/addStylesClient.js").default)("44ca3624",content,!0,{sourceMap:!1})},"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.png"},"./src/components/VImageGrid/VImageCell.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.concat.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),VLink=__webpack_require__("./src/components/VLink.vue"),image_not_available_placeholder=__webpack_require__("./src/assets/image_not_available_placeholder.png"),image_not_available_placeholder_default=__webpack_require__.n(image_not_available_placeholder),maxAspect=16/9,toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VImageGrid_VImageCellvue_type_script_lang_ts_=Object(runtime.b)({name:"VImageCell",components:{VLicense:VLicense.default,VLink:VLink.default},props:{image:{type:Object,required:!0}},setup:function setup(props){var imgHeight=Object(runtime.p)(props.image.height||100),imgWidth=Object(runtime.p)(props.image.width||100),imageAspect=Object(runtime.a)((function(){return imgWidth.value/imgHeight.value})),containerAspect=Object(runtime.a)((function(){return imageAspect.value>maxAspect?maxAspect:imageAspect.value<.75?.75:imageAspect.value})),iPadding=Object(runtime.a)((function(){return imageAspect.value<.75?1/.75*100:imageAspect.value>maxAspect?56.25:1/imageAspect.value*100})),imageWidth=Object(runtime.a)((function(){return imageAspect.value<maxAspect?100:imageAspect.value/maxAspect*100})),imageTop=Object(runtime.a)((function(){return imageAspect.value>.75?0:(.75-imageAspect.value)/(.75*imageAspect.value*.75)*-50})),imageLeft=Object(runtime.a)((function(){return imageAspect.value<maxAspect?0:(imageAspect.value-maxAspect)/maxAspect*-50})),imageUrl=Object(runtime.a)((function(){if(imageAspect.value>2.3333333333333335)return toAbsolutePath(props.image.url);var url=props.image.thumbnail||props.image.url;return toAbsolutePath(url)})),containerStyle=Object(runtime.a)((function(){var containerWidth=253.125*containerAspect.value;return"width: ".concat(containerWidth,"px;flex-grow: ").concat(containerWidth)})),figureStyle=Object(runtime.a)((function(){return"width: ".concat(imageWidth.value,"%; top: ").concat(imageTop.value,"%; left:").concat(imageLeft.value,"%;")}));return{imgHeight:imgHeight,imgWidth:imgWidth,containerStyle:containerStyle,figureStyle:figureStyle,iPadding:iPadding,imageUrl:imageUrl,getImageForeignUrl:function getImageForeignUrl(){return toAbsolutePath(props.image.foreign_landing_url)},onImageLoadError:function onImageLoadError(event){var element=event.target;element.src!==props.image.url?element.src=props.image.url:element.src=image_not_available_placeholder_default.a},getImgDimension:function getImgDimension(event){var element=event.target;imgHeight.value=element.naturalHeight,imgWidth.value=element.naturalWidth}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VImageGrid_VImageCellvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VLink",{staticClass:"group relative block w-full overflow-hidden rounded-sm bg-dark-charcoal-10 text-dark-charcoal-10 focus:outline-none focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px]",style:_vm.containerStyle,attrs:{href:"/image/"+_vm.image.id,"aria-label":_vm.image.title},nativeOn:{keydown:function keydown($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")?null:$event.shiftKey?$event.ctrlKey||$event.altKey||$event.metaKey?null:_vm.$emit("shift-tab",$event):null}}},[_c("figure",{staticClass:"absolute w-full",style:_vm.figureStyle},[_c("img",{ref:"img",staticClass:"margin-auto block w-full",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.imageUrl,width:_vm.imgWidth,height:_vm.imgHeight},on:{load:_vm.getImgDimension,error:function error($event){return _vm.onImageLoadError($event)}}}),_vm._v(" "),_c("figcaption",{staticClass:"invisible absolute left-0 bottom-0 bg-white p-1 text-dark-charcoal group-hover:visible group-focus:visible"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)]),_vm._v(" "),_c("i",{staticClass:"block",style:"padding-bottom:".concat(_vm.iPadding,"%"),attrs:{"aria-hidden":""}})])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"ImageDetail"},required:!0}],events:[{name:"shift-tab"}]}},"./src/components/VImageGrid/VImageGrid.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),emits=__webpack_require__("./src/types/emits.ts"),VLoadMore=__webpack_require__("./src/components/VLoadMore.vue"),VImageCell=__webpack_require__("./src/components/VImageGrid/VImageCell.vue"),VImageGrid_VImageGridvue_type_script_lang_ts_=Object(runtime.b)({name:"ImageGrid",components:{VLoadMore:VLoadMore.default,VImageCell:VImageCell.default},props:{images:{type:Array,default:function _default(){return[]}},isSinglePage:{type:Boolean,required:!0},fetchState:{type:Object,required:!0}},emits:{"shift-tab":Object(emits.a)()},setup:function setup(props,_ref){var emit=_ref.emit;return{isError:Object(runtime.a)((function(){return Boolean(props.fetchState.fetchingError)})),handleShiftTab:function handleShiftTab(event,index){0===index&&(event.preventDefault(),emit("shift-tab"))}}}}),componentNormalizer=(__webpack_require__("./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=47bab75e&prod&scoped=true&lang=css&"),__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js")),component=Object(componentNormalizer.a)(VImageGrid_VImageGridvue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("section",[_c("div",{staticClass:"image-grid flex flex-wrap gap-4"},_vm._l(_vm.images,(function(image,index){return _c("VImageCell",{key:image.id,attrs:{image:image},on:{"shift-tab":function shiftTab($event){return _vm.handleShiftTab($event,index)}}})})),1),_vm._v(" "),_vm.isError&&!_vm.fetchState.isFinished?_c("h5",{staticClass:"py-4"},[_vm._v("\n    "+_vm._s(_vm.fetchState.fetchingError)+"\n  ")]):_vm._e(),_vm._v(" "),_vm.isSinglePage?_vm._e():_c("footer",{staticClass:"pt-4"},[_c("VLoadMore")],1)])}),[],!1,null,"47bab75e",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VImageCell:__webpack_require__("./src/components/VImageGrid/VImageCell.vue").default,VLoadMore:__webpack_require__("./src/components/VLoadMore.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"ImageGrid",exportName:"default",description:"",tags:{},props:[{name:"images",type:{name:"ImageDetail[]"},defaultValue:{func:!0,value:"() => []"}},{name:"isSinglePage",description:'VImageGrid is used for the search grid and the related images.\nIn the related images, it is just a single page of results without the\n"Load More" button, and in the search grid it is a grid that can load\nmore images on the "Load More" button click.',type:{name:"boolean"},required:!0},{name:"fetchState",type:{name:"FetchState"},required:!0}],events:[{name:"shift-tab"}]}},"./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=47bab75e&prod&scoped=true&lang=css&":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/.pnpm/vue-docgen-loader@1.5.0_j5ed4dj4suhyi3wzdvabtf7vta/node_modules/vue-docgen-loader/lib/index.js?!./node_modules/.pnpm/vue-style-loader@4.1.3/node_modules/vue-style-loader/index.js?!./node_modules/.pnpm/css-loader@5.2.7_webpack@4.46.0/node_modules/css-loader/dist/cjs.js?!./node_modules/.pnpm/vue-loader@15.10.0_g2ee3j26zdrv6uisguvqzeqcse/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@4.3.0_jgovvjlmnszlgzfyletnwk36ji/node_modules/postcss-loader/dist/cjs.js?!./node_modules/.pnpm/@nuxt+components@2.2.1/node_modules/@nuxt/components/dist/loader.js?!./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/index.js?!./src/components/VImageGrid/VImageGrid.vue?vue&type=style&index=0&id=47bab75e&prod&scoped=true&lang=css&")},"./src/components/VLoadMore.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var asyncToGenerator=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist_runtime=(__webpack_require__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"),__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs")),media=__webpack_require__("./src/stores/media/index.ts"),search=__webpack_require__("./src/stores/search.ts"),use_i18n=__webpack_require__("./src/composables/use-i18n.ts"),VButton=__webpack_require__("./src/components/VButton.vue"),VLoadMorevue_type_script_lang_ts_=Object(dist_runtime.b)({name:"VLoadMore",components:{VButton:VButton.default},setup:function setup(){var i18n=Object(use_i18n.a)(),mediaStore=Object(media.a)(),searchStore=Object(search.b)(),isFetching=Object(dist_runtime.a)((function(){return mediaStore.fetchState.isFetching})),canLoadMore=Object(dist_runtime.a)((function(){return""!==searchStore.searchTerm&&!mediaStore.fetchState.fetchingError&&!mediaStore.fetchState.isFinished&&mediaStore.resultCount>0})),onLoadMore=function(){var _ref=Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!isFetching.value){_context.next=2;break}return _context.abrupt("return");case 2:return _context.next=4,mediaStore.fetchMedia({shouldPersistMedia:!0});case 4:case"end":return _context.stop()}}),_callee)})));return function onLoadMore(){return _ref.apply(this,arguments)}}();return{buttonLabel:Object(dist_runtime.a)((function(){return isFetching.value?i18n.t("browse-page.loading"):i18n.t("browse-page.load")})),isFetching:isFetching,onLoadMore:onLoadMore,canLoadMore:canLoadMore}}}),components_VLoadMorevue_type_script_lang_ts_=VLoadMorevue_type_script_lang_ts_,componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(components_VLoadMorevue_type_script_lang_ts_,(function render(){var _c=this._self._c;this._self._setupProxy;return _c("VButton",{directives:[{name:"show",rawName:"v-show",value:this.canLoadMore,expression:"canLoadMore"}],attrs:{size:"large",variant:"full",disabled:this.isFetching,"data-testid":"load-more"},on:{click:this.onLoadMore}},[this._v("\n  "+this._s(this.buttonLabel)+"\n")])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VButton:__webpack_require__("./src/components/VButton.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VLoadMore",exportName:"default",description:"",tags:{}}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/assets/image_not_available_placeholder.png":function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"img/image_not_available_placeholder.png"},"./src/components/VAllResultsGrid/VImageCellSquare.vue":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/.pnpm/core-js@3.22.5/node_modules/core-js/modules/es.array.concat.js");var runtime=__webpack_require__("./node_modules/.pnpm/@nuxtjs+composition-api@0.33.1_cche4dkf5nk7uchm2m2hnrg5am/node_modules/@nuxtjs/composition-api/dist/runtime/index.mjs"),VLink=__webpack_require__("./src/components/VLink.vue"),VLicense=__webpack_require__("./src/components/VLicense/VLicense.vue"),image_not_available_placeholder=__webpack_require__("./src/assets/image_not_available_placeholder.png"),image_not_available_placeholder_default=__webpack_require__.n(image_not_available_placeholder),toAbsolutePath=function toAbsolutePath(url){var prefix=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://";return url.indexOf("http://")>=0||url.indexOf("https://")>=0?url:"".concat(prefix).concat(url)},VAllResultsGrid_VImageCellSquarevue_type_script_lang_ts_=Object(runtime.b)({name:"VImageCell",components:{VLink:VLink.default,VLicense:VLicense.default},props:{image:{type:Object,required:!0}},setup:function setup(props){return{getImageUrl:function getImageUrl(){if(!props.image)return"";var url=props.image.thumbnail||props.image.url;return toAbsolutePath(url)},getImageForeignUrl:function getImageForeignUrl(){return toAbsolutePath(props.image.foreign_landing_url)},onImageLoadError:function onImageLoadError(event){var element=event.target;element.src!==props.image.url?element.src=props.image.url:element.src=image_not_available_placeholder_default.a}}}}),componentNormalizer=__webpack_require__("./node_modules/.pnpm/vue-loader@15.10.0_vfhh4b6254cvzngpxpqvqoexz4/node_modules/vue-loader/lib/runtime/componentNormalizer.js"),component=Object(componentNormalizer.a)(VAllResultsGrid_VImageCellSquarevue_type_script_lang_ts_,(function render(){var _vm=this,_c=_vm._self._c;_vm._self._setupProxy;return _c("VLink",{staticClass:"group block rounded-sm focus:outline-none focus:ring-[3px] focus:ring-pink focus:ring-offset-[3px]",attrs:{itemprop:"contentUrl",title:_vm.image.title,href:"/image/"+_vm.image.id}},[_c("figure",{staticClass:"relative aspect-square rounded-sm",attrs:{itemprop:"image",itemscope:"",itemtype:"https://schema.org/ImageObject"}},[_c("img",{ref:"img",staticClass:"h-full w-full rounded-sm bg-dark-charcoal-10 object-cover text-dark-charcoal-10",attrs:{loading:"lazy",alt:_vm.image.title,src:_vm.getImageUrl(),width:250,height:250,itemprop:"thumbnailUrl"},on:{error:function error($event){return _vm.onImageLoadError($event)}}}),_vm._v(" "),_c("figcaption",{staticClass:"invisible absolute left-0 bottom-0 bg-white p-1 text-dark-charcoal group-hover:visible group-focus:visible"},[_c("span",{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.image.title))]),_vm._v(" "),_c("VLicense",{attrs:{license:_vm.image.license,"hide-name":!0}})],1)])])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VLicense:__webpack_require__("./src/components/VLicense/VLicense.vue").default,VLink:__webpack_require__("./src/components/VLink.vue").default}),__vuedocgen_export_0.__docgenInfo={displayName:"VImageCell",exportName:"default",description:"",tags:{},props:[{name:"image",type:{name:"ImageDetail"},required:!0}]}}}]);
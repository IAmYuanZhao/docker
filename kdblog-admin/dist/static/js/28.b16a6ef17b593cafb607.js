webpackJsonp([28],{Z81v:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"标签名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"标签名字"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"所属类别",prop:"type"}},[a("el-select",{model:{value:t.dataForm.type,callback:function(e){t.$set(t.dataForm,"type",e)},expression:"dataForm.type"}},t._l(t.typeList,function(t){return a("el-option",{key:t.parKey,attrs:{value:t.parKey,label:t.parValue}})}))],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",disabled:t.confirmButtonDisabled},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},o=a("VU/8")({data:function(){return{visible:!1,confirmButtonDisabled:!1,dataForm:{type:""},dataRule:{name:[{required:!0,message:"标签名称不能为空",trigger:"blur"}],type:[{required:!0,message:"所属类别不能为空",trigger:"blur"}]},typeList:this.getSysParamArr("MODULE_TYPE")}},methods:{init:function(t){var e=this;this.dataForm.id=t||"",this.visible=!0,this.confirmButtonDisabled=!1,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id?e.$http({url:e.$http.adornUrl("/admin/operation/tag/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&200===a.code&&(e.dataForm=a.tag)}):e.dataForm={}})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/admin/operation/tag/"+(t.dataForm.id?"update":"save")),method:t.dataForm.id?"put":"post",data:t.$http.adornData(t.dataForm)}).then(function(e){var a=e.data;t.confirmButtonDisabled=!0,a&&200===a.code?t.$message({message:"操作成功",type:"success",duration:1e3,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},r,!1,null,null,null);e.default=o.exports}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b1da6300"],{"294d":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"line-height":"1.8"}},[1==e.qType||2==e.qType?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[i("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),i("div",{staticClass:"q-content"},e._l(e.question.items,(function(t){return i("span",{key:t.id,staticClass:"q-item-contain"},[i("span",{staticClass:"q-item-prefix"},[e._v(e._s(t.prefix))]),i("span",{staticClass:"q-item-content",domProps:{innerHTML:e._s(t.content)}})])})),0)]):3==e.qType?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[i("div",{staticClass:"q-title",staticStyle:{display:"inline","margin-right":"10px"},domProps:{innerHTML:e._s(e.question.title)}}),i("span",[e._v("（")]),e._l(e.question.items,(function(t){return i("span",{key:t.id},[i("span",{staticClass:"q-item-content",domProps:{innerHTML:e._s(t.content)}})])})),i("span",[e._v("）")])],2):4==e.qType?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[i("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}})]):5==e.qType?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[e._v(" 题干："),i("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),e._v(" 答案："),i("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.correct)}}),e._v(" 解析："),i("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.analyze)}})]):i("div")])},r=[],s=(i("a9e3"),{name:"QuestionShow",props:{question:{type:Object,default:function(){return{}}},qLoading:{type:Boolean,default:!1},qType:{type:Number,default:0}},methods:{}}),o=s,a=i("2877"),l=Object(a["a"])(o,n,r,!1,null,null,null);t["a"]=l.exports},"2ac8":function(e,t,i){"use strict";var n=i("b775");t["a"]={pageList:function(e){return Object(n["a"])("/api/admin/question/page",e)},edit:function(e){return Object(n["a"])("/api/admin/question/edit",e)},select:function(e){return Object(n["a"])("/api/admin/question/select/"+e)},deleteQuestion:function(e){return Object(n["a"])("/api/admin/question/delete/"+e)}}},"2fca":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"form",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[i("el-form-item",{attrs:{label:"Industry：",prop:"industryId",required:""}},[i("el-select",{attrs:{placeholder:"Industry"},on:{change:e.levelChange},model:{value:e.form.industryId,callback:function(t){e.$set(e.form,"industryId",t)},expression:"form.industryId"}},e._l(e.industryFilter,(function(e){return i("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1),i("el-form-item",{attrs:{label:"Skill：",prop:"skillId",required:""}},[i("el-select",{attrs:{placeholder:"Skill"},model:{value:e.form.skillId,callback:function(t){e.$set(e.form,"skillId",t)},expression:"form.skillId"}},e._l(e.subjectFilter,(function(e){return i("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1),i("el-form-item",{attrs:{label:"Question：",prop:"title",required:""}},[i("el-input",{on:{focus:function(t){return e.inputClick(e.form,"title")}},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"Answer：",prop:"correct",required:""}},[i("el-input",{on:{focus:function(t){return e.inputClick(e.form,"correct")}},model:{value:e.form.correct,callback:function(t){e.$set(e.form,"correct",t)},expression:"form.correct"}})],1),i("el-form-item",{attrs:{label:"Analysis：",prop:"analyze",required:""}},[i("el-input",{on:{focus:function(t){return e.inputClick(e.form,"analyze")}},model:{value:e.form.analyze,callback:function(t){e.$set(e.form,"analyze",t)},expression:"form.analyze"}})],1),i("el-form-item",{attrs:{label:"Difficulty：",required:""}},[i("el-rate",{staticClass:"question-item-rate",model:{value:e.form.difficult,callback:function(t){e.$set(e.form,"difficult",t)},expression:"form.difficult"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("Submit")]),i("el-button",{on:{click:e.resetForm}},[e._v("Reset")]),i("el-button",{attrs:{type:"success"},on:{click:e.showQuestion}},[e._v("Preview")])],1)],1),i("el-dialog",{staticStyle:{width:"100%",height:"100%"},attrs:{visible:e.richEditor.dialogVisible,"append-to-body":"","close-on-click-modal":!1,"show-close":!1,center:""},on:{"update:visible":function(t){return e.$set(e.richEditor,"dialogVisible",t)}}},[i("Ueditor",{on:{ready:e.editorReady}}),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.editorConfirm}},[e._v("Confirm")]),i("el-button",{on:{click:function(t){e.richEditor.dialogVisible=!1}}},[e._v("Cancel")])],1)],1),i("el-dialog",{staticStyle:{width:"100%",height:"100%"},attrs:{visible:e.questionShow.dialog},on:{"update:visible":function(t){return e.$set(e.questionShow,"dialog",t)}}},[i("QuestionShow",{attrs:{qType:e.questionShow.qType,question:e.questionShow.question,qLoading:e.questionShow.loading}})],1)],1)},r=[],s=(i("4de4"),i("5530")),o=i("294d"),a=i("63f4"),l=i("2f62"),u=i("2ac8"),c=i("5643"),d={components:{Ueditor:a["a"],QuestionShow:o["a"]},data:function(){return{form:{id:null,questionType:5,industryId:null,skillId:null,title:"",items:[],analyze:"",correct:"",score:"0",difficult:0},subjectFilter:null,industryFilter:null,formLoading:!1,rules:{gradeLevel:[{required:!0,message:"Please select grade",trigger:"change"}],subjectId:[{required:!0,message:"Please select subject",trigger:"change"}],title:[{required:!0,message:"Please enter the question stem",trigger:"blur"}],correct:[{required:!0,message:"Please enter the answer",trigger:"blur"}],analyze:[{required:!0,message:"Please enter parse",trigger:"blur"}],score:[{required:!0,message:"Please enter the score",trigger:"blur"}]},richEditor:{dialogVisible:!1,object:null,parameterName:"",instance:null},questionShow:{qType:0,dialog:!1,question:null,loading:!1}}},created:function(){var e=this,t=this.$route.query.id,i=this;this.initSubject((function(){i.subjectFilter=i.subjects})),this.subjectFilter=this.subjects.filter((function(t){return t.level===e.form.gradeLevel})),t&&0!==parseInt(t)&&(i.formLoading=!0,u["a"].select(t).then((function(e){i.form=e.response,i.formLoading=!1}))),c["a"].list().then((function(t){e.industryFilter=t.response}))},methods:Object(s["a"])(Object(s["a"])({editorReady:function(e){this.richEditor.instance=e;var t=this.richEditor.object[this.richEditor.parameterName];this.richEditor.instance.setContent(t),this.richEditor.instance.focus(!0)},inputClick:function(e,t){this.richEditor.object=e,this.richEditor.parameterName=t,this.richEditor.dialogVisible=!0},editorConfirm:function(){var e=this.richEditor.instance.getContent();this.richEditor.object[this.richEditor.parameterName]=e,this.richEditor.dialogVisible=!1},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(i){if(!i)return!1;e.formLoading=!0,u["a"].edit(e.form).then((function(i){1===i.code?(t.$message.success(i.message),t.delCurrentView(t).then((function(){t.$router.push("/exam/question/list")}))):(t.$message.error(i.message),e.formLoading=!1)})).catch((function(t){e.formLoading=!1}))}))},resetForm:function(){this.$refs["form"].resetFields(),this.form={id:null,questionType:5,gradeLevel:null,subjectId:null,title:"",items:[],analyze:"",correct:"",score:"0",difficult:0}},levelChange:function(){this.form.subjectId=null,console.log(this.subjectFilter)},showQuestion:function(){this.questionShow.dialog=!0,this.questionShow.qType=this.form.questionType,this.questionShow.question=this.form}},Object(l["b"])("exam",{initSubject:"initSubject"})),Object(l["b"])("tagsView",{delCurrentView:"delCurrentView"})),computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(l["c"])("enumItem",["enumFormat"])),Object(l["e"])("enumItem",{questionTypeEnum:function(e){return e.exam.question.typeEnum},levelEnum:function(e){return e.user.levelEnum}})),Object(l["e"])("exam",{subjects:function(e){return e.subjects}}))},m=d,f=i("2877"),p=Object(f["a"])(m,n,r,!1,null,null,null);t["default"]=p.exports},5643:function(e,t,i){"use strict";var n=i("b775");t["a"]={list:function(e){return Object(n["a"])("/api/admin/industry/list")},pageList:function(e){return Object(n["a"])("/api/admin/industry/page",e)},edit:function(e){return Object(n["a"])("/api/admin/industry/edit",e)},select:function(e){return Object(n["a"])("/api/admin/industry/select/"+e)},deleteSubject:function(e){return Object(n["a"])("/api/admin/industry/delete/"+e)}}},"63f4":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("script",{staticStyle:{height:"300px"},attrs:{id:e.randomId,type:"text/plain"}})])},r=[],s={name:"UE",props:{value:{default:function(){return""}}},data:function(){return{randomId:"editor_"+1e17*Math.random(),instance:null,ready:!1}},watch:{value:function(e,t){null!=e&&this.ready&&(this.instance=UE.getEditor(this.randomId),this.instance.setContent(e))}},mounted:function(){this.initEditor()},beforeDestroy:function(){null!==this.instance&&this.instance.destroy&&this.instance.destroy()},methods:{initEditor:function(){var e=this;this.$nextTick((function(){e.instance=UE.getEditor(e.randomId),e.instance.addListener("ready",(function(){e.ready=!0,e.$emit("ready",e.instance)}))}))},getUEContent:function(){return this.instance.getContent()},setText:function(e){this.instance=UE.getEditor(this.randomId),this.instance.setContent(e)}}},o=s,a=i("2877"),l=Object(a["a"])(o,n,r,!1,null,null,null);t["a"]=l.exports}}]);
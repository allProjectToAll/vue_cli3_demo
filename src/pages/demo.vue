<template>
  <div class="demo">
    <br/>
    <br/>
    <div class="clear"></div>
    <!-- /***************************************************************************/ -->
    <div class="titleName">提示信息</div>
    <el-button :plain="true" @click="open1">成功</el-button>
    <el-button :plain="true" @click="open2">警告</el-button>
    <el-button :plain="true" @click="open3">错误</el-button>
      <!-- 编辑新增弹框 -->
     <div class="titleName">编辑新增弹框</div>
    <el-button type="primary" @click="addFn">新增</el-button>
    <el-button type="success" @click="editFn">编辑</el-button>
    <edit-dialog :basicInfo="basicInfo" @on-cancel="basicInfo.dialogAsync == false" @update="update"></edit-dialog>
    <br/>
    <br/>
    <div class="clear"></div>
    <!-- /***************************************************************************/ -->
    <div class="titleName">搜索框</div>
    <search-model :searchInfo="searchInfo" @searchFn="searchFn"></search-model>
    <br/>
    <br/>
    <div class="clear"></div>
    <!-- /***************************************************************************/ -->
    <div class="titleName">分组编辑/新增</div>
    <el-button type="primary" @click="addGroupFn">新增</el-button>
    <el-button type="success" @click="editGroupFn">编辑</el-button>
    <edit-dialog-Group :basicInfo="basicInfoGroup" @on-cancel="basicInfoGroup.dialogAsync == false" @update="updateGroup"></edit-dialog-Group>
    <br/>
    <br/>
    <div class="clear"></div>
    <!-- /***************************************************************************/ -->
    <div class="titleName">icon图标展示</div>
      <el-tooltip content="编辑" placement="top">
        <i class="el-icon-edit"></i>
      </el-tooltip>
      <el-tooltip content="删除" placement="top">
        <i class="el-icon-delete"></i>
      </el-tooltip>
      <el-tooltip content="导入" placement="top">
        <span class="iconfont icon-daoru-tianchong"></span>
      </el-tooltip>
      <el-tooltip content="批量导入" placement="top">
        <i class="el-icon-upload"></i>
      </el-tooltip>
      <el-tooltip content="上传图片" placement="top">
        <span class="iconfont icon-shangchuantupian"></span>
      </el-tooltip>
      <el-tooltip content="上传文件" placement="top">
        <span class="iconfont icon-shangchuanwenjian"></span>
      </el-tooltip>
      <el-tooltip content="详情" placement="top">
        <span class="iconfont icon-xiangqingjingyanliebiaoshuxing"></span>
      </el-tooltip>
    <br/>
    <br/>
    <div class="clear"></div>
    <!-- /***************************************************************************/ -->
    <div class="titleName">上传文件</div>
    <!-- <el-upload class="upload-demo" :action="`${api.getBaseUrl().baseURL}${uploadFile.action}`"  :before-upload="beforeUploadFile" 
    :on-error="uploadFileErro" :on-success="uploadFileSuccess" :file-list="uploadFile.fileList" :show-file-list="uploadFile.showFileList">
      <el-tooltip content="上传文件" placement="top">
        <span class="iconfont icon-shangchuanwenjian"></span>
      </el-tooltip>
    </el-upload> -->
     <br/>
    <br/>
    <div class="clear"></div>
    <!-- /***************************************************************************/ -->
    <div class="titleName">上传图片</div>
    <!-- 上传限制的格式 -->
    <!-- accept=".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF" -->
    <!-- <el-upload class="upload-demo" :action="`${api.getBaseUrl().baseURL}${uploadImg.action}`"  :before-upload="beforeUploadImg" 
    :on-error="uploadImgErro" :on-success="uploadImgSuccess" :file-list="uploadImg.fileList"  accept=".jpg,.png">
      <el-tooltip content="上传图片" placement="top">
        <span class="iconfont icon-shangchuantupian"></span>
      </el-tooltip>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
    </el-upload> -->
    <br/>
    <br/>
    <div class="clear"></div>
    <!-- /***************************************************************************/ -->
    
    

  </div>
</template>

<script>
import editDialog from './basic/editDialog' 
import searchModel from './basic/searchModel' 
import editDialogGroup from './basic/editDialogGroup' 
export default {
    name: 'demo',
    components:{
        editDialog,
        searchModel,
        editDialogGroup,
    },
    data() {
      return {
        basicInfo:{
          cols:12,//8为三列，12为两列，24为一列
          labelWidth:"110px",//前面文字的宽度
          menuName:"展示demo",//该菜单名称
          currentRow:null,//编辑的时候当前行的数据
          dialogAsync:false,//弹框显示
          isModify:false,//是否是修改状态（编辑和新增两种状态）
          addSrc:"/fmsBizCaseInfo/add",//添加地址
          editSrc:"/fmsBizCaseInfo/add",//编辑地址
          rules:{//验证规则
               input: [
                    { required: true, message: '输入框不能为空！', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符！', trigger: 'blur' }
                ],
                datetime1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                checkbox: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
          },
          items:{//下面是所有的字段，以及对应的属性
            input:{
              title: "输入框",
              value: "",
              type:"input",
              disabled:false,
              dropdownList: [],
            },
            select1:{
              title: "下拉框",
              value: "",
              type:"select",
              disabled:false,
              dropdownList: [],
            },
            select2:{
              title: "可搜索下拉框",
              value: "",
              type:"select",
              search:true,
              disabled:false,
              dropdownList: [],
            },
            select3:{
              title: "多选",
              value: [],
              type:"select",
              selectMore:true,
              disabled:false,
              dropdownList: [],
            },
            datetime1:{
              title: "日期带时分秒",
              value: "",
              type:"datetime",
              disabled:false,
              dropdownList: [],
            },
            datetime2:{
              title: "只有年月日",
              value: "",
              type:"date",
              disabled:false,
              dropdownList: [],
            },
            password:{
              title: "密码",
              value: "",
              type:"password",
              disabled:false,
              dropdownList: [],
            },
            radio:{
              title: "单选框",
              value: "",
              type:"radio",
              disabled:false,
              dropdownList: [],
            },
            checkbox:{
              title: "多选框",
              value: [],
              type:"checkbox",
              disabled:false,
              dropdownList: [],
            },
          }
        },
        searchInfo:{
          cols:8,//8为三列，12为两列，24为一列
          labelWidth:"110px",//前面文字的宽度
          items:{//下面是所有的字段，以及对应的属性
            input:{
              title: "输入框",
              value: "",
              type:"input",
              dropdownList: [],
            },
            select1:{
              title: "下拉框",
              value: "",
              type:"select",
              dropdownList: [],
            },
            select2:{
              title: "可搜索下拉框",
              value: "",
              type:"selectSearch",
              dropdownList: [],
            },
            select3:{
              title: "多选",
              value: [],
              type:"selectMore",
              dropdownList: [],
            },
            datetime1:{
              title: "日期带时分秒",
              value: "",
              type:"datetime",
              dropdownList: [],
            },
            datetime2:{
              title: "只有年月日",
              value: "",
              type:"date",
              dropdownList: [],
            },
          }
        },
        basicInfoGroup:{
          cols:12,//8为三列，12为两列，24为一列
          labelWidth:"110px",//前面文字的宽度
          menuName:"分组展示demo",//该菜单名称
          currentRow:null,//编辑的时候当前行的数据
          dialogAsync:false,//弹框显示
          isModify:false,//是否是修改状态（编辑和新增两种状态）
          addSrc:"/fmsBizCaseInfo/add",//添加地址
          editSrc:"/fmsBizCaseInfo/add",//编辑地址
          rules:{//验证规则
               //同上面一样
               input1: [
                    { required: true, message: '输入框不能为空！', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符！', trigger: 'blur' }
                ],
                datetime11: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                input2: [
                    { required: true, message: '输入框不能为空！', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符！', trigger: 'blur' }
                ],
                datetime21: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
          },
          group:{
            groupName:{items1:"分组1",items2:"分组2"},//items1和下面的items1名称需要一直
            groupItems:{
               items1:{//下面是所有的字段，以及对应的属性
                input1:{
                  title: "输入框",
                  value: "",
                  type:"input",
                  disabled:false,
                  dropdownList: [],
                },
                select11:{
                  title: "下拉框",
                  value: "",
                  type:"select",
                  disabled:false,
                  dropdownList: [],
                },
                select12:{
                  title: "可搜索下拉框",
                  value: "",
                  type:"select",
                  search:true,
                  disabled:false,
                  dropdownList: [],
                },
                select13:{
                  title: "多选",
                  value: [],
                  type:"select",
                  selectMore:true,
                  disabled:false,
                  dropdownList: [],
                },
                datetime11:{
                  title: "日期带时分秒",
                  value: "",
                  type:"datetime",
                  disabled:false,
                  dropdownList: [],
                },
                datetime12:{
                  title: "只有年月日",
                  value: "",
                  type:"date",
                  disabled:false,
                  dropdownList: [],
                },
                password1:{
                  title: "密码",
                  value: "",
                  type:"password",
                  disabled:false,
                  dropdownList: [],
                },
                // radio1:{
                //   title: "单选框",
                //   value: "",
                //   type:"radio",
                //   disabled:false,
                //   dropdownList: [],
                // },
                // checkbox1:{
                //   title: "多选框",
                //   value: [],
                //   type:"checkbox",
                //   disabled:false,
                //   dropdownList: [],
                // },
              },
              items2:{//下面是所有的字段，以及对应的属性
                input2:{
                  title: "输入框",
                  value: "",
                  type:"input",
                  dropdown: false,
                  disabled:false,
                  dropdownList: [],
                },
                select21:{
                  title: "下拉框",
                  value: "",
                  type:"select",
                  dropdown: true,
                  disabled:false,
                  dropdownList: [],
                },
                select22:{
                  title: "可搜索下拉框",
                  value: "",
                  type:"select",
                  search:true,
                  dropdown: true,
                  disabled:false,
                  dropdownList: [],
                },
                select23:{
                  title: "多选",
                  value: [],
                  type:"select",
                  selectMore:true,
                  dropdown: true,
                  disabled:false,
                  dropdownList: [],
                },
                datetime21:{
                  title: "日期带时分秒",
                  value: "",
                  type:"datetime",
                  dropdown: false,
                  disabled:false,
                  dropdownList: [],
                },
                datetime22:{
                  title: "只有年月日",
                  value: "",
                  type:"date",
                  dropdown: false,
                  disabled:false,
                  dropdownList: [],
                },
                password2:{
                  title: "密码",
                  value: "",
                  type:"password",
                  dropdown: false,
                  disabled:false,
                  dropdownList: [],
                },
                // radio2:{
                //   title: "单选框",
                //   value: "",
                //   type:"radio",
                //   dropdown: false,
                //   disabled:false,
                //   dropdownList: [],
                // },
                // checkbox2:{
                //   title: "多选框",
                //   value: [],
                //   type:"checkbox",
                //   dropdown: false,
                //   disabled:false,
                //   dropdownList: [],
                // },
              }
            }
          },
         
        },
        uploadFile:{
          action:"",//图片路径
          showFileList:false,//是否展示上传文件在底部
          //`${util.ajax.defaults.baseURL}${"/Image/Upload"}`
          fileList:[],
          loading:null,
        },
        uploadImg:{//`${util.ajax.defaults.baseURL}${"/Image/Upload"}`
          action:"",//图片路径"/Image/Upload"
          showFileList:false,//是否展示上传文件在底部
          fileList:[],
          loading:null,
        },
      }
    },
    props: {
        
    },
    watch: {
        
    },
    created() {
      //初始化给定值
        this.basicInfo.items.checkbox.dropdownList = [{label:"苹果",value:"1"},{label:"橘子",value:"2"},{label:"香蕉",value:"3"}];
        this.basicInfo.items.radio.dropdownList = [{label:"苹果",value:"1"},{label:"橘子",value:"2"},{label:"香蕉",value:"3"}];
        this.basicInfo.items.select1.dropdownList = [{label:"苹果",value:"1"},{label:"橘子",value:"2"},{label:"香蕉",value:"3"}];
        this.basicInfo.items.select2.dropdownList = [{label:"苹果",value:"1"},{label:"橘子",value:"2"},{label:"香蕉",value:"3"}];
        this.basicInfo.items.select3.dropdownList = [{label:"苹果",value:"1"},{label:"橘子",value:"2"},{label:"香蕉",value:"3"}];
    },
    methods: {
      //下面是信息提示的**********************************************************/
      open1(){
        this.$message.success({message: '恭喜你，这是一条成功消息',showClose:false});
      },
      open2(){
        this.$message.warning({message: '警告哦，这是一条警告消息'});
      },
      open3(){
        this.$message.error({message:'错了哦，这是一条错误消息', showClose: false});
      },
      //下面是编辑新增**********************************************************/
        addFn(){
            this.basicInfo.dialogAsync = true;
            this.basicInfo.isModify = false;
        },
        editFn(){
            this.basicInfo.dialogAsync = true;
            this.basicInfo.isModify = true;
            this.basicInfo.currentRow = {id:"1122",input:"12",select1:"2",select2:"3",select3:["1","2"],datetime1:"",datetime2:"",password:"21312",radio:"2",checkbox:["1","2"]};
        },
        update(){
          this.basicInfo.dialogAsync = false;
            this.basicInfo.isModify = false;
            console.log("刷新页面数据")
        },
        //下面是搜索的**********************************************************/
        searchFn(params){
          //搜索结果，params是搜索的参数
          console.log(params)
        },
        //下面是分组编辑*******************************************************/
        addGroupFn(){
          this.basicInfoGroup.dialogAsync = true;
          this.basicInfoGroup.isModify = false;
        },
        editGroupFn(){
          this.basicInfoGroup.dialogAsync = true;
          this.basicInfoGroup.isModify = true;
          this.basicInfoGroup.currentRow = {
            id:"1122",input1:"12",select11:"2",select12:"3",select13:["1","2"],datetime11:"",datetime12:"",password1:"21312",
            input2:"12",select21:"2",select22:"3",select23:["1","2"],datetime21:"",datetime22:"",password2:"21312"};
          
        },
        updateGroup(){
          this.basicInfoGroup.dialogAsync = false;
          this.basicInfoGroup.isModify = false;
          console.log("分组的刷新页面数据")
        },
        //下面是上传文件********************************************************/
        beforeUploadFile(file){
          console.log(file,"上传之前");
          this.uploadFile.loading = this.$loading({
            lock: true,
            text: '正在上传文件',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
        },
        uploadFileSuccess(response, file, fileList){
          console.log(response, file, fileList,111)
          this.$message.success({message: '上传成功'});
          this.uploadFile.loading.close();
        },
        uploadFileErro(err, file, fileList){
          console.log(err, file, fileList,222)
          this.$message.error('上传失败！');
          this.uploadFile.loading.close();
        },
        /****************************************************** */
        //下面是上传图片********************************************************/
        beforeUploadImg(file){
          console.log(file,"上传之前");
          this.uploadFile.loading = this.$loading({lock: true,text: '正在上传图片',
            spinner: 'el-icon-loading',background: 'rgba(0, 0, 0, 0.7)'});
        },
        uploadImgSuccess(response, file, fileList){
          console.log(response, file, fileList,111)
          this.$message.success({message: '上传成功'});
          this.uploadFile.loading.close();
        },
        uploadImgErro(err, file, fileList){
          console.log(err, file, fileList,222)
          this.$message.error('上传失败！');
          this.uploadFile.loading.close();
        },
        /****************************************************** */
        //上传文件的限制
        sizeFn(file){
          var testmsg=file.name.substring(file.name.lastIndexOf('.')+1)				
          const extension = testmsg === 'xls'
          const extension2 = testmsg === 'xlsx'
          const isLt2M = file.size / 1024 / 1024 < 10
          if(!extension && !extension2) {
            this.$message({
              message: '上传文件只能是 xls、xlsx格式!',
              type: 'warning'
            });
            return false;
          }
          if(!isLt2M) {
            this.$message({
              message: '上传文件大小不能超过 10MB!',
              type: 'warning'
            });
            return false;
          }
          // return extension || extension2 && isLt2M
        },
        /****************************************************** */
       
    }
}
</script>
<style lang="less">
.clear{
  clear:both;
}
.demo{
  padding:80px;
}
.titleName{
  font-weight:bolder;
  font-size: 20px;
  line-height:50px;
}
body .el-message--info {
  background: #41A0E6 !important;
  opacity: 0.9;
  border-color: #41A0E6 !important;
}

body .el-message--error {
  background: #E66439 !important;
  opacity: 0.9;
  border-color: #E66439 !important;
}

body .el-message--warning {
  background: #FFAB20 !important;
  opacity: 0.9;
  border-color: #FFAB20 !important;
}

body .el-message--success {
  background: #0ABF74 !important;
  opacity: 0.9;
  border-color: #0ABF74 !important;
}
body .el-message {
  z-index: 20010;
  width: 400px;
  .el-message__icon {
    color: white;
  }
  p.el-message__content {
    color: white;
  }
  .el-message__closeBtn {
    color: white;
  }
}
</style>

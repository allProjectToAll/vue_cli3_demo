<template>
  <div class="test">
    test页面<br/>
   {{reversedMessage}}

    {{storeCount}}
<br/>

  <!-- 滚动轴 只有这一句就可以-->
<EasyScrollbar style="width:300px;height:200px;">
        <div  id="wrapper" style="height: 300px;width:300px;">
            <div style="background-color:blue;text-align: center;">
              <button @click="scrollUp">点击事件</button>
              <div class="scrollContain" style="height:3000px;display:block;"> 
              
              </div>
            </div>
        </div>
</EasyScrollbar>
<!-- 多语言实例-->
中国英文切换：用户名：
{{$t('message.user')}}
<br/>
<!-- 路由 -->
<!-- <router-link to='/about'>关于</router-link>
<router-view></router-view>
跳转到某个路由
this.$router.push({path:"/"}); -->
<br/>
      <button @click="getMess">点击事件</button>
      页面高度{{windowHeight}}

<!--<el-submenu index="5">-->
                <!--<template slot="title">-->
                    <!--<i class="el-icon-location"></i>-->
                    <!--<span>消息管理</span>-->
                <!--</template>-->
                <!--<el-menu-item-group>-->
                    <!--<el-menu-item index="emailList"  @click="$router.push('/emailList')">邮件发送设置</el-menu-item>-->
                    <!--<el-menu-item index="triggerList"  @click="$router.push('/triggerList')">触发器列表</el-menu-item>-->
                    <!--<el-menu-item index="SMSManagement"  @click="$router.push('/SMSManagement')">消息配置</el-menu-item>-->
                <!--</el-menu-item-group>-->
            <!--</el-submenu>-->


<!-- <el-form-item :label="$t('message.TradingArea')" prop="area">
    <el-select v-model="dialogForm.addFieldForm.area" >
        <el-option label="A" value="1"></el-option>
        <el-option label="B" value="2"></el-option>
        <el-option label="C" value="3"></el-option>
    </el-select>
</el-form-item> -->



<!-- 
  是否可用
  <el-table-column align="center" :label="$t('message.IsItAvailable')">
      <template slot-scope="scope">
          <span>{{scope.row.Usable==true?$t('message.Y'):$t('message.N')}}</span>
      </template>
  </el-table-column>
  
  <el-form-item :label="$t('message.IsItAvailable')" prop="isUsable">
        <el-checkbox v-model="dialogForm.addModelForm.isUsable"></el-checkbox>
  </el-form-item>
 -->
<!-- <el-form-item :label="$t('message.SuperiorName')" prop="parentId">
      <el-select v-model="dialogForm.addModelForm.parentId" :placeholder="$t('message.PleaseEnterSuperiorModule')">
          <el-option :label="$t('message.RootModule')" value="0"></el-option>
          <el-option :key=index v-for="(item,index) in getselectParentId" :label="item.name" :value="item.id">
          </el-option>
      </el-select>
  </el-form-item> -->

  <!-- <el-table-column align="center" :label="$t('message.IsItAvailable')">
        <template slot-scope="scope">
          {{scope.row.isUsable == true ? $t("message.Y"):$t("message.N")}}
      </template>
  </el-table-column> -->

<!-- creatDay(day){
      let date = new Date(day);
      let d = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " +date.getHours()+ ":" + date.getMinutes()+":"+date.getSeconds();
      return d;
  }, -->

<!-- 
  循环删除，全部删除完成之后执行删除成功提示
let that = this;
if(this.multipleSelection.length==0){
      this.openErr(this.$t("message.ChoiseTheDelet"));
}else{
      this.$confirm(that.$t("message.SureToDelet"), that.$t("message.Title"), {
        confirmButtonText: that.$t("message.MakeSure"),
        cancelButtonText:  that.$t("message.Cancel"),
        type: 'warning'
    }).then(() => {
        var data =this.multipleSelection;
        var reques = [];
        for (var i = data.length - 1; i >= 0; i--) {
            reques.push(
                that.postAjax("/NoticeTrigger/Delete",{"id":that.multipleSelection[i].id},function(res){},function(res){})
            );
        }
        $.when.apply(this,reques).done(function(){
            that.openErr(that.$t("message.DeleteSuccess"));
            that.getList();
        }).error(function(){})
    }).catch(() => {});
}
 -->
<!-- 点击行选中 -->
 <!-- ref="rowClick" @row-click="rowClick"
 
rowClick(row){
            let index = this.multipleSelection.indexOf(row);
            if (index<0) {
                this.multipleSelection = [];
                this.multipleSelection.push(row);
                this.$refs.rowClick.toggleRowSelection(row,true);
            }else{
                this.multipleSelection.splice(index,1);
                this.$refs.rowClick.toggleRowSelection(row,false);
            }       
        },
 
  -->

<!-- 
  按钮点击，全屏出现加载
 :element-loading-text="$t('message.Inprocessing')" 
              v-loading.fullscreen.lock="fullscreenLoading"

fullscreenLoading:false,

 that.fullscreenLoading = true;


成功和失败都有
  that.fullscreenLoading = false;

  that.fullscreenLoading = false;

 -->


<!-- 
  加载控制按钮  显示影藏
  v-if="IsInArray(btnArray,1)" 

btnArray:[],
this.getBtn();

  getBtn(){
            let that = this;
             this.postAjax("/SmsConfig/Limits",null,function(res){
                console.log(res.body.value);
                that.btnArray = res.body.value;
            },function(res){
                console.log("路径错误");
                 that.openErr(that.$t("message.ErrorToGetBtnLimit"));
            })
        },

 -->

<!-- 刷新
<el-button icon="el-icon-refresh" type="primary" @click="getList"></el-button>

that.openErr(that.$t("message.SuccessToGetList"));
 -->


<!-- 
  只能为数字
  { validator: justNumber, trigger: 'blur' },
  
  var justNumber = (rule, value, callback) => {
                if ( /^[0-9]*$/.test(value)==false ) {
                    callback(new Error(this.$t("message.CodeCanJustNumber")));
                } else {
                    callback();
                }
            };

 -->



  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "这是app的demo页。展示所有效果",
      windowHeight: 0
    };
  },
  created: function() {
    //初始化加载
    var par = {
      count: 10, //10
      start: 0 //(1-1)*10
    };

    this.windowHeight = $("body").height();
    window.onresize = () => {
      return (() => {
        this.windowHeight = $("body").height();
      })();
    };
  },
  mounted() {},
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      return this.msg;
    },
    storeCount: function() {
      return this.$store.state.count;
    }
    // windowHeight:function(){
    //   return $("body").height() ;
    // }
  },
  methods: {
    getMess: function() {
      console.log(this.msg + "--这是方法");
    },
    scrollUp: function() {
      if ($(".scrollContain").attr("display") == "none") {
        $(".scrollContain").css("display", "block");
      } else {
        $(".scrollContain").css("display", "none");
      }
    }
  },
  watch: {
    // windowHeight(curVal,oldVal){
    //   console.log(curVal)
    //   this.windowHeight = curVal;
    // }
  }
};
</script>


<style scoped>

</style>

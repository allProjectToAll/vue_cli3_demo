<template>
  <div class="index">
      <el-container>
        <el-aside  :class="{small:elSideBarSync}">
          <div style="width:200px;height:100%;">
              <side-bar></side-bar>
          </div>
        </el-aside>
        <el-container>
            <el-header>
              <v-header></v-header>
            </el-header>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>
import Sidebar from './common/Sidebar'
import Header from './common/Header'


export default {
  components:{
    'side-bar':Sidebar,
    'v-header':Header
  },
  data () {
    return {
      msg: '这是首页',
    }
  },
  created: function(){ //初始化加载
    //初始化多语言，为了使表格的页脚不出错
    // this.$i18n.locale = localStorage.getItem("langular")||"cn";
  },
  computed:{// 计算属性的 getter
    elSideBarSync: function () {
      return this.$store.state.menu.elSideBarSync;
    }
  },
  methods:{
    getMess:function(){
      console.log(this.msg+"--这是方法");
    },
  }
}
</script>
<style scoped>
.index{
  width:100%;
  height:100%;
}
.el-container{
  width:100%;
  height:100%;
}
.el-header{
    background-color: #eef1f6;
    line-height: 60px;
}
.el-aside{
  overflow: hidden;
  width:200px!important;
  background:#324157;
  color:#bfcbd9;
  height:100%;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  -o-transition: all .5s ease;
  transition: all .5s ease;
}
.el-aside.small{
  width:65px!important;
}
.el-main{
  height:100%;
}
</style>

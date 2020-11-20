<template>
<vue-scroll :ops="ops" style="width:100%;height:100%">
    <div id="wrapper" :style="{height: windowHeight + 'px' }">
        <el-menu :default-active="onRoutes" unique-opened class="el-menu-vertical-demo"
         background-color="#324157" text-color="#bfcbd9" @open="handleOpen" @close="handleClose" :collapse="storeLeftMenu" hide-timeout >
            
          <template v-for="(item1, key) in utils.Menu">
            <el-menu-item :index="returnRouter(item1.path)"  :key="key"  v-if="!item1.childMenu.length"  @click="$router.push(item1.path)">
              <i :class="item1.icon"></i>
              <span slot="title">{{item1.title}}</span>
            </el-menu-item>

            <el-submenu :index="returnRouter(item1.path)"  v-else  :key="key">
                  <template slot="title">
                    <i :class="item1.icon"></i>
                    <span slot="title">{{item1.title}}</span>
                  </template>

                  <template v-for="(item2, index2) in item1.childMenu">
                    <el-menu-item :index="returnRouter(item2.path)"  :key="index2" v-if="! item2.childMenu.length" >
                      <i :class="item2.icon"></i>
                      <span slot="title">{{item2.title}}</span>
                    </el-menu-item>

                    <el-submenu :index="returnRouter(item2.path)"  :key="index2" v-else>
                        <span slot="title"><i :class="item2.icon" class="threeIcon"></i>{{item2.title}}</span>
                        <el-menu-item :index="returnRouter(item3.path)" v-for="(item3,index3) in item2.childMenu" :key="index3" >
                          <i :class="item3.icon"></i>
                          <span slot="title">{{item3.title}}</span>
                        </el-menu-item>
                    </el-submenu>
                  </template>
            </el-submenu>
          </template>
        </el-menu>
    </div>
</vue-scroll>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      windowHeight: 0,
      list: [],
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          keepShow: true
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: false, //是否只有滚动的时候才显示滚动条
          background: "#F5F5F5",//滚动条颜色
          opacity: 0.5,//滚动条透明度
          "overflow-x": "hidden"
        }
      }
    };
  },
  created: function() {
    console.log(this.utils,"utilsutilsutilsutilsutils")
    let that = this;
    //resize控制菜单的高度，从而出现滚动条
    this.windowHeight = document.getElementsByTagName("body").height; //$("body").height();
    window.onresize = () => {
      return (() => {
        this.windowHeight = document.getElementsByTagName("body").height;// $("body").height();
      })();
    };
    this.getList();
  },
  computed: {
    storeLeftMenu: function() {
      //获取store内的值赋值给当前menu展开
      return this.$store.state.menu.leftMenuOpen;
    },
    onRoutes: function() {
      //$route.path
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    returnRouter(router) {
      return router ? router.replace("/", "") : null;
    },
    getList() {
      let that = this;
      // this.postAjax("/Main/GetModules",null,function(res) {
      //     that.list = res.body.value;
      //     that.getArrayList();
      //   },
      //   function(res) {
      //     console.log("路径错误");
      //   }
      // );
    },
  }
};
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.sideBar-contain {
  height: 100%;
  overflow: auto;
}
ul li ul li.el-menu-item {
  /* padding-left: 50px !important; */
}
.el-submenu .el-menu-item {
  /* height: 35px;
  line-height: 35px;
  font-size: 14px; */
}
.threeIcon{
  margin-top:-2px;
  margin-right:10px;
  font-size:18px;
  margin-left:4px;
}

</style>
<style>
/* // 滚动条位置 */
.__bar-is-vertical {
  right: -1px !important;
}
/* // 隐藏横向滚动条 */
.__bar-is-horizontal {
  display: none !important;
}
#wrapper .el-menu{
  border-right:none!important;
}
</style>

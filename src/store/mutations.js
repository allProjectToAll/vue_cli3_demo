export default {
    LOGIN_IN(state, token) {
        state.UserToken = token
    },
    LOGIN_OUT(state) {
        state.UserToken = ''
    },
    toggleNavCollapse(state) {
        state.isSidebarNavCollapse = !state.isSidebarNavCollapse
    },
    setCrumbList(state, list) {
        state.crumbList = list
    },
    
    //////////////////////////////////////////////////////////
    leftMenuChange(state) {//控制菜单左右
        if(state.menu.leftMenuOpen == true){
          state.menu.leftMenuOpen = false;
          state.menu.elSideBarSync = false;
        }else{
          state.menu.leftMenuOpen = true;
          state.menu.elSideBarSync = true;
        }
        console.log(state.menu.leftMenuOpen+"左菜单是否展开");
    },
    setToken(state,res){ //设置token 传递参数
        state.token = res.token;
    },
}

export default {
    get UserToken() {
        return localStorage.getItem('token')
    },
    set UserToken(value) {
        localStorage.setItem('token', value)
    },
    /* 导航菜单是否折叠 */
    // isSidebarNavCollapse: false,
    /* 面包屑导航列表 */
    // crumbList: [],


    count: 999,
    menu:{
        leftMenuOpen:false,//menu页面ul是否展开
        elSideBarSync:false, //menu组件外index页面的盒子是否展开
    },
    token:sessionStorage.getItem("token")|| 0,
    url: process.env.NODE_ENV === 'development' ? 'http://119.96.168.93:8084/api/v1' : 'http://119.96.168.93:8084/api/v1',
    languageObj:{},
    languageCodeObj:{},
    lang: ["","English", "简体中文", "日本語", "한국어","русский"]
}

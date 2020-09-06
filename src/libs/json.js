// 菜单
const Menu = [
    {
        title:"首页",
        icon:"el-icon-s-home",
        name:"demo",
        path:"/demo",
        childMenu:[]
    },
    {
        title:"表单",
        icon:"el-icon-s-release",
        name:"form",
        path:"/form",
        childMenu:[
            {
                title:"按钮",
                icon:"el-icon-s-release",
                name:"btns",
                path:"/btns",
                childMenu:[]
            },
            {
                title:"输入框input",
                icon:"el-icon-s-release",
                name:"inputs",
                path:"/inputs",
                childMenu:[]
            },
            {
                title:"Form",
                icon:"el-icon-s-release",
                name:"form",
                path:"/form",
                childMenu:[]
            },
        ]
    },
    {
        title:"三级菜单",
        icon:"el-icon-s-release",
        name:"threeForm",
        path:"/threeForm",
        childMenu:[
            {
                title:"二级菜单",
                icon:"el-icon-s-release",
                name:"btn2",
                path:"/btn2",
                childMenu:[
                    {
                        title:"404页面",
                        icon:"el-icon-s-release",
                        name:"err",
                        path:"/err",
                        childMenu:[]
                    }
                ]
            },
            {
                title:"二级菜单",
                icon:"el-icon-s-release",
                name:"btn3",
                path:"/btn3",
                childMenu:[]
            },
            {
                title:"二级菜单",
                icon:"el-icon-s-release",
                name:"btn4",
                path:"/btn4",
                childMenu:[]
            }
        ]
    },
    {
        title:"图表",
        icon:"el-icon-s-release",
        name:"echarts",
        path:"/echarts",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
    {
        title:"滚动轴",
        icon:"el-icon-s-release",
        name:"echarts1",
        path:"/echarts1",
        childMenu:[]
    },
]

//正则验证是否为数字，或小数
//val是判断的数字，num是判断最多有多少位小数
// util.toValidate(12.23,2) =》true  
// num为空表示为数字(小数或整数)
// num为0表示为整数
// num为1表示一位小数
// .......
function valiNum(value,num){
    let val = value+"";
    let valPoint = val.substr(val.length-1,1);
    if(valPoint == "."){
        return false;
    }
    // if(!num){
    //     return /^\d+$/.test(val)  || /^(\d+\.\d+)+$/.test(val);;
    // }else{
        if(num==0){
            return /^\d+$/.test(val);
        }else if(num==1){
            return /^\d+$/.test(val) || /^\d+\.\d{1}$/.test(val);
        }else if(num==2){
            return /^\d+$/.test(val) || /^\d+\.\d{1,2}$/.test(val);
        }else if(num==3){
            return /^\d+$/.test(val) || /^\d+\.\d{1,3}$/.test(val);
        }else if(num==4){
            return /^\d+$/.test(val) || /^\d+\.\d{1,4}$/.test(val);
        }else if(num==5){
            return /^\d+$/.test(val) || /^\d+\.\d{1,5}$/.test(val);
        }else if(num==6){
            return /^\d+$/.test(val) || /^\d+\.\d{1,6}$/.test(val);
        }else if(num==7){
            return /^\d+$/.test(val) || /^\d+\.\d{1,7}$/.test(val);
        }else if(num==8){
            return /^\d+$/.test(val) || /^\d+\.\d{1,8}$/.test(val);
        }else if(num==9){
            return /^\d+$/.test(val) || /^\d+\.\d{1,9}$/.test(val);
        }else if(num==10){
            return /^\d+$/.test(val) || /^\d+\.\d{1,10}$/.test(val);
        }else if(!num){
            return /^\d+$/.test(val)  || /^(\d+\.\d+)+$/.test(val);
        }
    // }
}

export default {
    valiNum,
    Menu
}
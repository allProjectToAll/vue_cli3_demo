import { Decimal } from 'decimal.js'
let util = {};
// 菜单
util.Menu = [
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
// .toValidate(12.23,2) =》true  
// num为空表示为数字(小数或整数)
// num为0表示为整数
// num为1表示一位小数
// .......
util.valiNum=(value,num)=>{
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


//数字截取成多少个小数点
//d是要截取的数字，s是截取多少位=》util.toFixed(12.25678,3)=>12.256
util.toFixed = (d,s=0) => {
    if(!d && d!==0){
      return 0;
    }
    // 不要超过 16 位
    if (s === 0)
      return Math.floor(d);
    let str = util.scientificToNumber(d).toString();
    let index = str.indexOf('.');
    if(index !== -1){
      let num = str.length-index-1; //原有小数位数
      if(num<s){
        str = `${str}${'0'.repeat(s-num)}`
      }else{
        str = str.slice(0,index+1+s);
      }
    }else{
      str = `${str}.${'0'.repeat(s)}`
    }
    return str
}

util.scientificToNumber = (value) => {
if(!value && value !==0 ){
    return;
}
// e-7 e+21
let str = value.toString();
let eIndex = str.indexOf('e');
if(eIndex<0){
    return value;
}
let sign = str.substr(eIndex+1,1);
let powNum = str.slice(eIndex+2);
let arr = [];
if(sign === '-'){
    powNum = powNum - 6;
    arr = new Decimal(value).mul(Math.pow(10,powNum)).toString().split('');
    let dotIndex = arr.indexOf('.');
    arr.splice(dotIndex+1,0,'0'.repeat(powNum));
}else{
    powNum = powNum - 20;
    arr = new Decimal(value).div(Math.pow(10,powNum)).toString().split('');
    let dotIndex = arr.indexOf('.');
    if(dotIndex === -1){
    arr.push('0'.repeat(powNum));
    }else{
    let dotNum = arr.length - dotIndex -1; // 小数位数
    arr.splice(dotIndex,1); //去掉小数点
    let diff = dotNum - powNum;
    if(diff <= 0){
        arr.splice(arr.length-1,0,'0'.repeat(diff)) // 补齐 0
    }else{
        arr.splice(arr.length-1-diff,0,'.') // 加上小数点
    }
    }
}
return arr.join('');
}


export default util;

// export default {
//     valiNum,
//     Menu
// }
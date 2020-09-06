// 微信@符号的作用
/**
dataArray:需要筛选的数组，从哪个数组内筛选
modelFile:筛选数组内以什么字段筛选，默认value
getAutocomponentVal: 选中之后传出来的函数
modelVal://初始化绑定的值
**/
<el-autocomponent :dataArray="dataArray" :modelFile="modelFile" :modelVal=""modelVal  @getAutocomponentVal="getAutocomponentVal" ></el-autocomponent>

dataArray:[
  {value:"12323"},
  {value:"12erret3"},
  {value:"1ryu23"},
  {value:"1tyjytj23"},
]
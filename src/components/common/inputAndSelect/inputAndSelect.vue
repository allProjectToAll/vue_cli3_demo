
<template>
    <el-autocomplete class="inline-input" v-model="modelvalue" @keyup.native="keyupFn"
    :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false"
    @select="handleSelect"></el-autocomplete>
</template>
<script>
export default {
    name:"demo",
    data(){
        return {
            restaurants:[],
            modelvalue:"",
            searchStr:"",
            addressIndex:0,//光标的位置
            changeBeforeValue:"",//选择之前的数据
        }
    },
    props:{
        modelVal:String,//初始化绑定的值
        modelFile:String,//筛选数组内以什么字段筛选，默认value，
        dateArray:Array,//绑定的数组
    },
    methods:{
        keyupFn($event){
            this.addressIndex = $event.target.selectionStart;//光标的位置
            this.searchStr = this.modelvalue.slice(0,this.addressIndex);
            this.changeBeforeValue = this.modelvalue;
        },
        querySearch(queryString,cb){
            let indexIn = this.searchStr.lastIndexOf("@");//光标之前最后一个@所在的位置
            let searchString = this.searchStr.slice(indexIn+1);
            if(indexIn == '-1'){//最后一个选中之后，删除最后一个选中值的所有内容，会默认弹出下拉框，再选中会有错误
                cb([]);
                return;
            }
            this.restaurants = this.dateArray?this.dateArray:[];
            var results = searchString? this.restaurants.filter(this.createFilter(searchString)):this.restaurants;
            let modelFile = this.modelFile?this.modelFile:'value';//筛选字段名称
            results = results.map((item)=>{
                return Object.assign(item,{value:item[modelFile]})
            })
            cb(results);
        },
        createFilter(searchString){
            return restaurant =>{
                let modelFile = this.modelFile?this.modelFile:"value";
                return (
                    restaurant[modelFile].toLowerCase().indexOf(searchString.toLowerCase()) != -1
                )
            }
        },
        handleSelect(item){
            let index = this.searchStr.lastIndexOf("@");//光标前最后一个@所在位置
            let valueBefore = this.changeBeforeValue.slice(0,index);//光标前最后一个@前面的所有的值
            let valueAfter = this.changeBeforeValue.slice(this.addressIndex);
            let modelFile = this.modelFile?this.modelFile:"value";
            this.modelvalue = valueBefore + item[modelFile] + valueAfter;
            this.$emit("getAutocompleteVal",this.modelvalue);
        },
    },
    mounted(){
        
        this.modelvalue = this.modelVal?this.modelVal:"";
    }
}
</script>
<template>
  <div class="editDialog">
    <el-dialog :title="dialogTitle" :close-on-click-modal="false" @close="calcel('ruleForm')" :visible.sync="basicInfo.dialogAsync" :width="dialogWidth" :modal-append-to-body="false">
        <!-- :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" -->
        <el-form  :model="ruleForm" ref="ruleForm" :rules="basicInfo.rules" :label-width="basicInfo.labelWidth" class="demo-ruleForm">
            <div v-for="(g,p) in basicInfo.group.groupItems" :key="p">
                <div class="clear"></div>
                <div class="title">{{basicInfo.group.groupName[p]}}:</div>
                <el-col :span="basicInfo.cols" v-for="(item,key) in basicInfo.group.groupItems[p]" :key="key">
                    <template v-if="item.type=='input'">
                        <el-form-item :label="`${item.title}:`" :prop="key">
                            <el-input v-model="item.value" :disabled="item.disabled" @change="ruleFormTobasicInfoitems"></el-input>
                        </el-form-item>
                    </template>
                    <template v-if="item.type=='select'">
                        <el-form-item v-if="item.selectMore" :label="`${item.title}:`" :prop="key">
                            <el-select v-model="item.value" multiple collapse-tags placeholder="请选择" clearable :disabled="item.disabled" @change="ruleFormTobasicInfoitems">
                                <el-option v-for="(i,k) in item.dropdownList" :key="k" :label="i.label" :value="i.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-else-if="item.search" :label="`${item.title}:`" :prop="key">
                            <el-select v-model="item.value"  placeholder="请选择" filterable clearable :disabled="item.disabled" @change="ruleFormTobasicInfoitems">
                                <el-option v-for="(i,k) in item.dropdownList" :key="k" :label="i.label" :value="i.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-else :label="`${item.title}:`" :prop="key">
                            <el-select v-model="item.value" placeholder="请选择" clearable :disabled="item.disabled" @change="ruleFormTobasicInfoitems">
                                <el-option v-for="(i,k) in item.dropdownList" :key="k" :label="i.label" :value="i.value"></el-option>
                            </el-select>
                        </el-form-item>
                    </template>
                    <template v-if="item.type=='datetime'">
                        <el-form-item :label="`${item.title}:`" :prop="key">
                           <el-date-picker v-model="item.value" type="datetime" placeholder="选择日期时间" @change="ruleFormTobasicInfoitems"></el-date-picker>
                        </el-form-item>
                    </template>
                    <template v-if="item.type=='date'">
                        <el-form-item :label="`${item.title}:`" :prop="key">
                           <el-date-picker v-model="item.value" type="date" placeholder="选择日期时间" :disabled="item.disabled" @change="ruleFormTobasicInfoitems"></el-date-picker>
                        </el-form-item>
                    </template>
                    <template v-if="item.type=='password'">
                        <el-form-item :label="`${item.title}:`" :prop="key">
                           <el-input type="password" v-model="item.value" auto-complete="off" :disabled="item.disabled" @change="ruleFormTobasicInfoitems"></el-input>
                        </el-form-item>
                    </template>
                    <template v-if="item.type=='radio'">
                        <el-form-item :label="`${item.title}:`" :prop="key">
                            <el-radio-group v-model="item.value" @change="ruleFormTobasicInfoitems">
                                <el-radio v-for="(i,k) in item.dropdownList" :key="k" :label="i.value" :disabled="item.disabled">{{i.label}}</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </template>
                    <template v-if="item.type=='checkbox'">
                        <el-form-item :label="`${item.title}:`" :prop="key">
                            <el-checkbox-group v-model="item.value" @change="ruleFormTobasicInfoitems">
                                <el-checkbox v-for="(i,k) in item.dropdownList" :key="k" :name="key" :label="i.value" :disabled="item.disabled">{{i.label}}</el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                    </template>
                </el-col>
            </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="calcel('ruleForm')">取 消</el-button>
            <el-button type="primary" @click="addFn('ruleForm')" v-if="!basicInfo.isModify">确 定</el-button>
            <el-button type="primary" @click="saveFn('ruleForm')" v-else>保存</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
    name: 'editDialogGroup',
    data() {
      return {
        ruleForm:{},
        // radio:"",
      }
    },
    props: {
        basicInfo:Object,
    },
    watch: {
        "basicInfo.dialogAsync":{//弹框弹出
            handler(to) {
                if (to){
                    console.log(111,this.basicInfo.isModify)
                    this.ruleForm={};
                    for(let item in this.basicInfo.items){
                        this.ruleForm[item] = this.basicInfo.items[item].value;
                    }
                }else{
                    console.log(22222)
                }
            }
        },
        "basicInfo.isModify":{
            handler(to) {//编辑
                console.log(999999999)
                to && this.init();
            }
        },
    },
    computed: {
        dialogTitle(){
            return this.basicInfo.editSrc?((this.basicInfo.isModify?"修改":"新增") + this.basicInfo.menuName):"详情";
        },
        dialogWidth(){
            let w = "";
            if(this.basicInfo.cols == 24){
                w="500px"
            }else if(this.basicInfo.cols == 12){
                w="800px"
            }else if(this.basicInfo.cols == 8){
                w="1200px"
            }
            return w;
        }
    },
    created() {

    },
    methods: {
        init(){
            for(let i in this.basicInfo.group.groupItems){
                for (let index in this.basicInfo.group.groupItems[i]) {
                    if(this.basicInfo.currentRow.hasOwnProperty(index)){
                        this.basicInfo.group.groupItems[i][index].value = this.basicInfo.currentRow[index];
                    }
                }
            }

            this.ruleForm={};
            for(let item in this.basicInfo.currentRow){
                this.ruleForm[item] = this.basicInfo.currentRow[item].value;
            }
            console.log(this.ruleForm,"this.ruleForm")
        },
        addFn(formName){
            if(!this.basicInfo.addSrc){
                this.calcel();
                return;
            }
            this.ruleFormTobasicInfoitems();
            this.$refs[formName].validate((valid) => {
                if (valid) {
                   let params={};
                   for(let i in this.basicInfo.group.groupItems){
                        for (let index in this.basicInfo.group.groupItems[i]) {
                            if((typeof this.basicInfo.group.groupItems[i][index].value) !="string"){
                                params[index] = this.basicInfo.group.groupItems[i][index].value.join(",");
                                continue;
                            }
                            params[index] = this.basicInfo.group.groupItems[i][index].value;
                        }
                    }
                    this.api.post(this.basicInfo.addSrc,params).then((res) => {
                        this.$message({ showClose: true, message: "添加成功",type: 'success' });
                        this.calcel(formName);
                        this.$emit("update");
                        console.log(res,"11111111111111");
                    }).catch(() => {
                        console.log(params)
                    });
                } else {
                    return false;
                }
            });
        },
        saveFn(formName){
            if(!this.basicInfo.editSrc){
                this.calcel();
                return;
            }
            this.ruleFormTobasicInfoitems();
            this.$refs[formName].validate((valid) => {
                if (valid) {
                   let params={};
                    for(let i in this.basicInfo.group.groupItems){
                        for (let index in this.basicInfo.group.groupItems[i]) {
                            if((typeof this.basicInfo.group.groupItems[i][index].value) !="string"){
                                params[index] = this.basicInfo.group.groupItems[i][index].value.join(",");
                                continue;
                            }
                            params[index] = this.basicInfo.group.groupItems[i][index].value;
                        }
                    }
                    params.caseId = this.basicInfo.currentRow.caseId;  //编辑的时候传id
                    this.api.post(this.basicInfo.editSrc,params).then((res) => {
                        this.$message({ showClose: true, message: "修改成功",type: 'success' });
                        this.calcel(formName);
                        this.$emit("update");
                        console.log(res,"11111111111111");
                    }).catch(() => {
                        console.log(params)
                    });
                } else {
                    return false;
                }
            });
        },
        ruleFormTobasicInfoitems(){
            for(let i in this.basicInfo.group.groupItems){
                for (let index in this.basicInfo.group.groupItems[i]) {
                    this.ruleForm[index] = this.basicInfo.group.groupItems[i][index].value;
                }
            }
        },
        calcel(formName){
            console.log("on-cancel");
            this.$nextTick(()=>{
                this.$refs[formName].resetFields();
                this.$emit("update");
                this.clear();
                this.$emit("on-cancel");
                console.log(this.basicInfo.dialogAsync,this.basicInfo.isModify,767676)
            })
            
        },
        clear(){
            // this.basicInfo.group = {};
            for(let i in this.basicInfo.group.groupItems){
                for (let index in this.basicInfo.group.groupItems[i]) {
                    if(this.basicInfo.group.groupItems[i][index].selectMore || this.basicInfo.group.groupItems[i][index].type=="checkbox"){
                        this.basicInfo.group.groupItems[i][index].value = [];
                    }else{
                        this.basicInfo.group.groupItems[i][index].value = "";
                    }
                }
            }
        }
    }
}
</script>
<style  lang="less">
.editDialog{
    .clear{
        clear:both;
    }
    .title{
        width:100%;
        height:30px;
        font-weight:bolder;
        font-size:16px;
    }
    .el-dialog{
        border-radius: 10px!important;
    }
    .el-dialog__body{
        display: table!important;
    }
    .el-form-item--medium .el-form-item__content, .el-form-item--medium .el-form-item__label{
        font-weight:normal!important
    }
    .el-input__inner{
        width:220px;
    }
    .el-form-item{
        height: 40px;
    }
    .el-dialog__header{
        font-weight:bolder;
    }
}
</style>

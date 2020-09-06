<template>
  <div id="editDialog">
    <el-dialog :title="dialogTitle" @close="calcel('ruleForm')" :visible.sync="basicInfo.dialogAsync" :width="dialogWidth" :modal-append-to-body="false">
        <!-- :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" -->
        <el-form  :model="ruleForm" ref="ruleForm" :rules="basicInfo.rules" :label-width="basicInfo.labelWidth" class="demo-ruleForm">
            <!-- <el-row> -->
                <el-col :span="basicInfo.cols" v-for="(item,key) in basicInfo.items" :key="key">
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

            <!-- </el-row> -->
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
    name: 'editDialog',
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
            return (this.basicInfo.isModify?"修改":"新增") + this.basicInfo.menuName;
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
            for(let i in this.basicInfo.items){
                if(this.basicInfo.currentRow.hasOwnProperty(i)){
                    this.basicInfo.items[i].value = this.basicInfo.currentRow[i];
                }
            }
            this.ruleForm={};
            for(let item in this.basicInfo.items){
                this.ruleForm[item] = this.basicInfo.items[item].value;
            }
            console.log(this.ruleForm,"this.ruleForm")
        },
        addFn(formName){
            this.ruleFormTobasicInfoitems();
            this.$refs[formName].validate((valid) => {
                if (valid) {
                   let params={};
                    for(let i in this.basicInfo.items){
                        if((typeof this.basicInfo.items[i].value) !="string"){
                            params[index] = this.basicInfo.items[i].value.join(",");
                            continue;
                        }
                        params[i] = this.basicInfo.items[i].value
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
            this.ruleFormTobasicInfoitems();
            this.$refs[formName].validate((valid) => {
                if (valid) {
                   let params={};
                    for(let i in this.basicInfo.items){
                        params[i] = this.basicInfo.items[i].value
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
            for(let item in this.basicInfo.items){
                this.ruleForm[item] = this.basicInfo.items[item].value;
            }
        },
        calcel(formName){
            console.log("on-cancel");
            this.$nextTick(()=>{
                this.$refs[formName].resetFields();
                this.basicInfo.dialogAsync = false;
                this.basicInfo.isModify = false;
                this.clear();
                this.$emit("update");
                this.$emit("on-cancel");
            })
            
        },
        clear(){
            for(let item in this.basicInfo.items){
                if(this.basicInfo.items[item].selectMore || this.basicInfo.items[item].type=="checkbox"){
                    this.basicInfo.items[item].value = [];
                }else{
                    this.basicInfo.items[item].value = "";
                }
            }
        }
    }
}
</script>
<style lang="less">
#editDialog{
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
        width:220px!important;
    }
    .el-form-item{
        height: 40px;
    }
    .el-dialog__header{
        font-weight:bolder;
    }
}
</style>

<style>
#editDialog .el-input__inner {
        width:220px!important;
}
</style>

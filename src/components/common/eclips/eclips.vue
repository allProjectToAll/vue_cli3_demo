<template>
    <div class="eclipse_contain">
        <div v-if="ishasOpenBtnType == '1' || !ishasOpenBtnType">
            <div v-if="(!ifMore && !isOpen) || (ifMore && isOpen)" class="normal_content" ref="ellipse" :style="{'line-height':lineHeight+'px'}">
                {{title}}
            </div>
            <div v-if="ifMore && isOpen" class="ellipsisLine2" :style="{'line-height':lineHeight+'px','-webkit-line-clamp':eclipse}">
                {{title}}
            </div>
            <div class="btn_group" v-if="ifMore">
                <span v-if="isOpen" @click="closeH">收起</span>
                <span v-else @click="openH">展开</span>
            </div>
        </div>
        <div v-else>
            <div v-if="!ifMore" class="normal_content" ref="ellipse" :style="{'line-height':lineHeight+'px'}">
                {{title}}
            </div>
            <el-tooltip v-if="ifMore" class="item" effect="dark" :content="title" placement="top">
                <div class="ellipsisLine2" :style="{'line-height':lineHeight+'px','-webkit-line-clamp':eclipse}">
                    {{title}}
                </div>
            </el-tooltip>
        </div>
    </div>
</template>
<script>
export default {
    name:"eclips",
    props:{
        title:String,
        lineHeight:String,
        eclipse:String,
        isShow:Boolean,
        ishasOpenBtnType:String,
    },
    data(){
        return {
            ifMore:false,//是否超过高度
            isOpen:false,//是否已经展开
        }
    },
    watch:{
        title(newVal,oldVal){
            this.getHeight();
        }
    },
    methods:{
        getHeight(){
            if(this.$refs.ellipse.clientHeight > Number(this.lineHeight)*Number(this.eclipse)){
                this.ifMore = true;
            }else{
                this.ifMore = false;
            }
        },
        closeH(){
            this.isOpen = false;
        },
        openH(){
            this.isOpen = true;
        },
    },
    mounted(){
        this.getHeight();
    }
}
</script>
<style scoped lang="scss">
.eclipse_contain{
    width:100%;
    display:table;
}
.normal_content{
    width:100%;
    white-space: normal;
    display: -webkit-box;
    word-break: break-all;
}
.ellipsisLine2{
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    word-break: break-all;
}
.btn_group{
    width:100%;
    span{
        float:right;
        color:#4c88bd;
        cursor: pointer;
        font-size:12px;
        margin-right:10px;
    }
}
</style>
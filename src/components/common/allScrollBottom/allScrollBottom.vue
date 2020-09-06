<template>
    <div>
        <div style="width:500px;height:200px;overflow:auto;background:skyblue;" id="scrolls2">
            <div>
                <table border width="100%">
                    <tr  v-for="(item,index) in tables" :key="index">
                        <td>{{item.name}}</td>
                        <td>{{item.value}}</td>
                    </tr>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
import TotalStatus from './component/total-status'

export default {
    data() {
        return {
            isScroll:true,
            tables:[
                {name:"name1",value:1},
                {name:"name2",value:2},
                {name:"name3",value:3},
                {name:"name4",value:4},
                {name:"name5",value:5},
                {name:"name6",value:6},
                {name:"name7",value:7},
                {name:"name8",value:8},
            ]




        }
    },
    mounted() {
        this.setDate();
        
        let that = this;
        let scrolls = document.getElementById("scrolls2");
        scrolls.onscroll = function(){//监听是不是滚动到最底部，如果滚动到最底部就执行一直在底部，否则取消一直在底部
            that.ifScrollBottom();
        }

    },
    methods:{
        setDate(){
            setInterval(()=>{
                this.tables.push({
                    name:"name8",
                    value:8
                })
                if(this.isScroll){
                    this.scrollTopMeth();
                }
                
            },1000)
        },
        scrollTopMeth(){
            this.$nextTick(()=>{
                let scrolls = document.getElementById("scrolls2");
                scrolls.scrollTop = scrolls.scrollHeight;
            })
        },
        ifScrollBottom(){
            let scrolls = document.getElementById("scrolls2");
            if(scrolls.scrollHeight - scrolls.scrollTop == 200){
                console.log("到达底部");
                this.isScroll = true;
            }else{
                this.isScroll = false;
            }
        }
    },
}
</script>

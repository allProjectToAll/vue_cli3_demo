<template>
  <div class="echarts">

      <div id="echarts" style="width:50%;height:50%;"></div>
      <div id="echarts2" style="width:50%;height:50%;"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '所有效果',
      myChart:null,
      myChart2:null,
    }
  },
  created: function(){

  },
  mounted(){
    var dataX=["当前能耗","上月能耗","去年同期"];
    var dataY=[600,900,1400];
    this.echarts("echarts",'本月能耗分析','能耗',dataX,dataY,'bar','',"#68b928");

    this.echarts2("echarts2");

    // window.onresize = function () {
    //         this.myChart.resize();
    //         this.myChart2.resize();
	//     }

  },
  computed:{// 计算属性的 getter

  },
  methods:{
    echarts(id,title,titleY,signXAxis,signYAxis,type,danwei,bg){
        this.myChart = this.$echarts.init(document.getElementById(id));
        var option = {
	        		title: {
					        text: title
					    },
					    grid:{
							　　x:50,
							　　x2:10,
							　　y2:30
							},
							tooltip: {
						        trigger: ''
						   },
					    legend: {
				        	data:titleY
				    	},
	            toolbox: {
	            	show: true,
	            	feature: {
		            	 magicType: {type: ['line', 'bar']},
				            restore: {},
				            saveAsImage : {show: true,title :'保存为图片'}
	           		}
	            },
	            xAxis: {
					type : 'category',
	                 splitLine:{
	                     show:false, //去掉X轴辅助线
	                 },
			 		axisLabel:{
					    textStyle:{
					    fontSize:12, //刻度大小
							},
			        },
					data: signXAxis
	            },
	            yAxis: {
	            	 type: 'value',
			         axisLabel: {
			            formatter: '{value} '+danwei
			         }
	            },
	            series: [{
	                itemStyle:{
						normal: {
						   color:bg
						}
					},
					name:titleY,
	                type: type,
	                data: signYAxis
	            }]
			  };
       this.myChart.setOption(option);


    },
    echarts2(id){
          this.myChart2 = this.$echarts.init(document.getElementById(id));
        var option2 = {
            title: {
                text: 'Beijing AQI'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data:[123,12,345,54,23,55,111,222,333,444,321,213,321,432],
            },
            yAxis: {
                splitLine: {
                    show: false
                }
            },
            toolbox: {
                left: 'center',
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            dataZoom: [{
                startValue: '2014-06-01'
            }, {
                type: 'inside'
            }],
            visualMap: {
                top: 10,
                right: 10,
                pieces: [{
                    gt: 0,
                    lte: 50,
                    color: '#096'
                }, {
                    gt: 50,
                    lte: 100,
                    color: '#ffde33'
                }, {
                    gt: 100,
                    lte: 150,
                    color: '#ff9933'
                }, {
                    gt: 150,
                    lte: 200,
                    color: '#cc0033'
                }, {
                    gt: 200,
                    lte: 300,
                    color: '#660099'
                }, {
                    gt: 300,
                    color: '#7e0023'
                }],
                outOfRange: {
                    color: '#999'
                }
            },
            series: {
                name: 'Beijing AQI',
                type: 'line',
                data:[123,12,345,54,23,55,111,222,333,444,321,213,321,432],
                markLine: {
                    silent: true,
                    data: [{
                        yAxis: 50
                    }, {
                        yAxis: 100
                    }, {
                        yAxis: 150
                    }, {
                        yAxis: 200
                    }, {
                        yAxis: 300
                    }]
                }
            }
        }
        this.myChart2.setOption(option2);


    }
  }
}
</script>


<style scoped>
   .echarts{
       width:100%;
       height:100%;
   }
</style>

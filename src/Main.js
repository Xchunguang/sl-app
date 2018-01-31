import React from 'react';
import './less/main.less';
import bqFetch from 'root/utils/bqFetch';
import {BQ_SELF} from 'root/config/constant';
import back from './images/back.png';
import InfoModal from './InfoModal';
import {Icon} from 'antd';
//引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/pie';
import  'echarts/lib/chart/bar';
import  'echarts/lib/chart/line';
import  'echarts/lib/chart/map';
import  'echarts/lib/component/geo';
import  'echarts/lib/chart/scatter';

// 引入提示框和标题组件
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import download from "downloadjs";
var sectionStyle = {
  backgroundImage: `url(${back})`,
  backgroundSize:'100% 100%'
};



var ifExitInData = function(name){
	let exit = false;
	for(let i=0;i<cityArr.length;i++){
		if(cityArr[i].name === name){
			exit = true;
			return exit;
		}
	}
	return exit;
}









var getLegendData = function(){
  var legendData = [];
 
    legendData.push({
        name:'空调',
        icon: 'circle',
        textStyle: {
          color: '#ffffff',
          fontSize:14
        }
    });
  
  legendData.push({
        name:'锅炉',
        icon: 'circle',
        textStyle: {
          color: '#ffffff',
          fontSize:14
        }
    });
  return legendData;
}


const cityArr = [
	{
		name:'安徽',
		value:'anhui.json'
	},
	{
		name:'北京',
		value:'beijing.json'
	},
	{
		name:'重庆',
		value:'chongqing.json'
	},
	{
		name:'福建',
		value:'fujian.json'
	},
	{
		name:'甘肃',
		value:'gansu.json'
	},
	{
		name:'广东',
		value:'guangdong.json'
	},
	{
		name:'广西',
		value:'guangxi.json'
	},
	{
		name:'贵州',
		value:'guizhou.json'
	},
	{
		name:'海南',
		value:'hainan.json'
	},
	{
		name:'河北',
		value:'hebei.json'
	},
	{
		name:'黑龙江',
		value:'heilongjiang.json'
	},
	{
		name:'河南',
		value:'henan.json'
	},
	{
		name:'香港',
		value:'hongkong.json'
	},
	{
		name:'湖北',
		value:'hubei.json'
	},
	{
		name:'湖南',
		value:'hunan.json'
	},
	{
		name:'江苏',
		value:'jiangsu.json'
	},
	{
		name:'江西',
		value:'jiangxi.json'
	},
	{
		name:'吉林',
		value:'jilin.json'
	},
	{
		name:'辽宁',
		value:'liaoning.json'
	},
	{
		name:'澳门',
		value:'macau.json'
	},
	{
		name:'内蒙古',
		value:'neimenggu.json'
	},
	{
		name:'宁夏',
		value:'ningxia.json'
	},
	{
		name:'青海',
		value:'qinghai.json'
	},
	{
		name:'山西',
		value:'shan1xi.json'
	},
	{
		name:'陕西',
		value:'shan3xi.json'
	},
	{
		name:'山东',
		value:'shandong.json'
	},
	{
		name:'上海',
		value:'shanghai.json'
	},
	{
		name:'四川',
		value:'sichuan.json'
	},
	{
		name:'台湾',
		value:'taiwan.json'
	},
	{
		name:'天津',
		value:'tianjin.json'
	},
	{
		name:'新疆',
		value:'xinjiang.json'
	},
	{
		name:'西藏',
		value:'xizang.json'
	},
	{
		name:'云南',
		value:'yunnan.json'
	},
	{
		name:'浙江',
		value:'zhejiang.json'
	},


];

//设备类型图标
var mechineTypeChart={};
var pieLegend = ['空调','锅炉'];
var pieData = [
              {
                  value:21931, name:'空调',
                  itemStyle:{
                      normal:{
                          color:'#db4e54'
                      }
                  }
              },
              {
                  value:41221, name:'锅炉',
                  itemStyle:{
                      normal: {
                          color: '#6bd9e1'
                      }
                  }
}];


//设备状态图表
var mechineStateChart = {};
var pieData1Persent = [0,0,0];
var pieLegend1 = ['三包外','已验收','交付中'];
var pieData1 = [
              {
                  value:13593, name:'三包外',
                  itemStyle:{
                      normal:{
                          color:'#77fcfe'
                      }
                  }
              },
              {
                  value:984, name:'已验收',
                  itemStyle:{
                      normal: {
                          color: '#fb5959'
                      }
              	}
			  },
			  {
                  value:937, name:'交付中',
                  itemStyle:{
                      normal: {
                          color: '#f5a623'
                      }
              	}
			  }
];


//交付进度图表
var jiaofuChart = {};
let jiaofuData = [1,2,3,4,5,6];
let jiaofuLegend = ['厂内交付','出厂到货','调试巡查','安装确认','调试申请','调试完成'];


//设备回访图表
var mechineBackChart = {};
let resultW = [1,2,5,3,9,6,1,3,8,];
let resultN = [9,1,5,2,3,9,1,8,4,];
let month = ['03','04','05','06','07','08','09','10','11'];


//设备分布分析图表
var mechineSplitChart = {};
let splitData = [2101,1197,1169,1116,1011,931,907,843,779];
let splitLegend = ['北京','上海','国际','山西','山东','河南','天津','浙江','陕西'];


//设备动态维保分析
var mechineRepireChart = {};
var repireTime=[];
var repireDataFu=[];
var repireData=[];


//地图
var mapChart = {};
var kData=[];
var gData=[];


//根据名称获取json
var getJsonName = function(name){
	for(let i=0;i<cityArr.length;i++){
		if(cityArr[i].name === name){
			return cityArr[i].value;
		}
	}
	return false;
}


function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return '';
}
function getArrIndex(arr,str){
	let index = -1;
	for(let i=0;i<arr.length;i++){
		if(arr[i] === str){
			return i;
		}
	}
	return index;
}

//获取设备类型数据
var getMechineType=function(kongtiaoNum,guoluNum){

	let result = {
		 pieLegend : ['空调','锅炉'],
		 pieData : [
              {
                  value:kongtiaoNum, name:'空调',
                  itemStyle:{
                      normal:{
                          color:'#fb5959'
                      }
                  }
              },
              {
                  value:guoluNum, name:'锅炉',
                  itemStyle:{
                      normal: {
                          color: '#77fcfe'
                      }
                  }
              }]
	}
	return result;
}


//获得设备状态
var getMechineState=function(sbw,yys,jfz){
	let result = {
		 pieLegend : ['三包外','已验收','交付中'],
		 pieData : [
              {
                  value:sbw, name:'三包外',
                  itemStyle:{
                      normal:{
                          color:'#77fcfe'
                      }
                  }
              },
              {
                  value:yys, name:'已验收',
                  itemStyle:{
                      normal: {
                          color: '#fb5959'
                      }
                  }
              },
              {
                  value:jfz, name:'交付中',
                  itemStyle:{
                      normal: {
                          color: '#f6a623'
                      }
                  }
              }]
	}
	return result;
}


//获得设备维保动态分析
var getMechineRepire=function(result){
	let resultFu=[0,0,0,0,0,0,0,0,0,0,0];
	let time=['2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09','2017-10','2017-全部'];
	resultFu=[0,result[0],result[0]+result[1],result[0]+result[1]+result[2],result[0]+result[1]+result[2]+result[3],result[0]+result[1]+result[2]+result[3]+result[4],result[0]+result[1]+result[2]+result[3]+result[4]+result[5],result[0]+result[1]+result[2]+result[3]+result[4]+result[5]+result[6],result[0]+result[1]+result[2]+result[3]+result[4]+result[5]+result[6]+result[7],result[0]+result[1]+result[2]+result[3]+result[4]+result[5]+result[6]+result[7]+result[8],0]
	return {
		result:result,
		resultFu:resultFu,
		time:time
	}
}

//获得设备数和用户数
var getTotalNum=function(){
	return {
		mechineTotal:20796,
		userTotal:10324
	}

}
class Main extends React.Component{
	constructor(props){
		super(props);
		
	
		this.state=({
			selectCity:'home',
			left:0,
			top:0,
			curMechine:{},
			opacity:0,
			loading:false,
			curData:[],
			visible:false
		})
	}

	fetchChartData=(city)=>{
		let url = '/getInfo/'+city;
		return bqFetch(url, {
        	 method: "GET",
        	 headers: {
        		    'Content-Type': 'application/json'
	 		}
		})
	}

	fetchResultData=(sbbh)=>{
		let url = '/getMechine/'+sbbh;
		return bqFetch(url, {
        	 method: "GET",
        	 headers: {
        		    'Content-Type': 'application/json'
	 		}
		})
	}


	fetchMapData=(city)=>{
		let url = '/getGuoluAndKongtiao/'+city;
		return bqFetch(url, {
        	 method: "GET",
        	 headers: {
        		    'Content-Type': 'application/json'
	 		}
		})
	}


	loadCityData=(city,loadChart)=>{

		let self = this;
		this.fetchChartData(city).then(response=>{
			if(response.ok){
				response.json().then(json=>{
					let curpieData1 = getMechineType(json.kongtiaoNum,json.guoluNum);
			        pieLegend = curpieData1.pieLegend;
			        pieData = curpieData1.pieData;


			        let pieData11 = getMechineState(json.sbw,json.yys,json.jfz);
			        pieLegend1 = pieData11.pieLegend;
			        pieData1 = pieData11.pieData;
			        if(!(pieData1[0].value ===0&& pieData1[1].value ===0&&pieData1[2].value ===0)){
			        	pieData1Persent[0] = (parseFloat((parseFloat(pieData1[0].value/(pieData1[0].value+pieData1[1].value+pieData1[2].value))).toFixed(2))*100).toFixed(0);
						pieData1Persent[1] = (parseFloat((parseFloat(pieData1[1].value/(pieData1[0].value+pieData1[1].value+pieData1[2].value))).toFixed(2))*100).toFixed(0);
						pieData1Persent[2] = 100 - parseFloat(pieData1Persent[0]) - parseFloat(pieData1Persent[1]);
			        }else{
			        	pieData1Persent = [0,0,0];
			        }

			        jiaofuData = json.jiaofuArr;



			        resultW = json.resultW;
			        resultN = json.resultN;


			      	let mechineRepireData = getMechineRepire(json.mechineRepire);
			        repireTime=mechineRepireData.time;
			        repireDataFu=mechineRepireData.resultFu;
					repireData=mechineRepireData.result;

					self.loadOption();
					self.setState({
						selectCity:city
					})
				})
			}
		})
		

        
        this.fetchMapData(city).then(response=>{
        	if(response.ok){
        		response.json().then(json=>{
        			kData = json.kongtiao;
        			gData = json.guolu;
        			self.loadChart(loadChart);

        		})
        	}
        })



  


      
	}
	

	

	handleScroll=()=>{
		this.setState({
			opacity:0
		})
	}
	

	getmechineTypeOption=()=>{
		let option={
		    grid:{
		        top:45,
		        bottom:23,
		        left:25
		    },
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}  {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left:'50%',
		        top:'30%',
		        icon:'none',
		        itemWidth:7,
		        itemHeight:7,
		        itemGap:15,
		        data:pieLegend,
		        textStyle:{
		            color:'#637F87',
		            fontSize:12
		        },
		        formatter:function(name){ 
		            return name;
		   		}
		    },
		    series: [
		        {
		            name:'',
		            type:'pie',
		            radius: ['50%', '70%'],
		            center:['25%','50%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '10',
		                        color: '#8DC8D8'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:pieData
		        }
		    ]
		};
		return option;
	}

	getmechineStateOption=()=>{
		let option={
		    grid:{
		        top:45,
		        bottom:23,
		        left:25
		    },
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}  {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left:'45%',
		        top:'30%',
		        icon:'none',
		        itemWidth:7,
		        itemHeight:7,
		        itemGap:15,
		        data:pieLegend1,
		        textStyle:{
		            color:'#637F87',
		            fontSize:12
		        },
		        formatter:function(name){ 
		            return name;
		   		}
		    },
		    series: [
		        {
		            name:'',
		            type:'pie',
		            radius: ['50%', '70%'],
		            center:['25%','50%'],
		            avoidLabelOverlap: false,
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: true,
		                    textStyle: {
		                        fontSize: '10',
		                        color: '#8DC8D8'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:pieData1
		        }
		    ]
		};
		return option;
	}

	getJiaofuOption=()=>{
		let option =  {
		    title : {
		        show:false
		    },
		    grid:{
		        top:15,
		        bottom:40,
		        left:45,
		        right:20
		    },
		    label:{
		    	normal:{
		    		show:true,
	 			   	position:'top'	
		    	}
		    	
		    },
		    color: ['#3398DB'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    xAxis :
		        {
		            type : 'category',
		            data :jiaofuLegend,
		            axisLine:{
		                show:true
		            },
		            axisTick:{
		                show:false
		            },
		            nameTextStyle:{
		                fontSize:5
		            },
		            boundaryGap:true,
		            axisLabel:{
		            	interval:0,
		            	rotate:20,
		            	fontSize:10
		            }
		        },
		    yAxis : {
		        splitLine:{
		            show:false  ,
		            lineStyle:{
		                color:'#637F87',
		                width: 0.5,
		                opacity:0.3
		            }
		        },
		        axisLine:{
		            show:false
		        },
		        axisTick:{
		            show:false
		        },axisLabel:{
			    	formatter:function(value){
			    		if(value == 0){
			    			return value;
			    		}
			    		return value;
			    	}
			    }
		    },textStyle:{
		        color:'#637F87',
		        fontSize:12
		    },
		    series : [
		        {
		            type:'bar',
		            barWidth: '40%',
		            data:jiaofuData,
		            stack:'option3',
		            itemStyle:{
		                normal: {
		                    color: '#6bd9e1'
		                }
		            }
		        }
		    ]
		};
		return option;
	}

	getMechineBackOption=()=>{
		let option = {
		    grid:{
		        top:20,
		        bottom:35,
		        left:45,
		        right:30
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {

		        data:[{
		            name:'三包内',
		            icon:'circle',
		            textStyle:{
		                color:'#637f87',
		                fontSize:8
		            }
		        },{
		            name:'三包外',
		            icon:'circle',
		            textStyle:{
		                color:'#637f87',
		                fontSize:8
		            }
		        }],
		        right:10,
		        top:0,
		        inactiveColor:'#637f87',
		        itemWidth:8
		    },
		    toolbox: {
		        show:false
		    },
		    calculable : true,
		    xAxis :
		        {
		            type : 'category',
		            data :month,
		            axisLine:{
		                show:true
		            },
		            axisTick:{
		                show:false
		            },
		            nameTextStyle:{
		                fontSize:5
		            },
		            boundaryGap:false
		        },
		    yAxis : {
		        splitLine:{
		            show:false,
		            lineStyle:{
		                color:'#637F87',
		                width: 0.5,
		                opacity:0.3
		            }
		        },
		        min:0,
		        axisLine:{
		            show:false
		        },
		    axisTick:{
		        show:false
		    },axisLabel:{
		    	formatter:function(value){
		    		if(value == 0){
		    			return value;
		    		}
		    		return value;
		    	}
		    }
		    },
		    textStyle:{
		        color:'#637F87',
		        fontSize:12
		    },
		    series : [
		        {
		            name:'三包外',
		            type:'line',
		            smooth:false,
		            itemStyle: {normal: {
		                
		                color:'#bb2e0f'
		            }},
		           	lineStyle:{
		           		normal:{
		           			width:1
		           		}
		           	},
		            data:resultW
		        }, {
		            name:'三包内',
		            type:'line',
		            smooth:false,
		            itemStyle: {normal: {
		               
		                color:'#77fcfe'
		            }},
		           	lineStyle:{
		           		normal:{
		           			width:1
		           		}
		           	},
		            data:resultN
		        }
		    ]
		};
		return option;
	}


	getSplitOption=()=>{
		let option =  {
		    title : {
		        show:false
		    },
		    grid:{
		        top:25,
		        bottom:30,
		        left:45,
		        right:20
		    },
		    label:{
		    	normal:{
		    		show:false,
	 			   	position:'top'	
		    	}
		    	
		    },
		    color: ['#3398DB'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    xAxis :
		        {
		            type : 'category',
		            data :splitLegend,
		            axisLine:{
		                show:true
		            },
		            axisTick:{
		                show:false
		            },
		            nameTextStyle:{
		                fontSize:5
		            },
		            boundaryGap:true,
		            axisLabel:{
		            	interval:0,
		            	rotate:0,
		            	fontSize:10
		            }
		        },
		    yAxis : {
		        splitLine:{
		            show:false  ,
		            lineStyle:{
		                color:'#637F87',
		                width: 0.5,
		                opacity:0.3
		            }
		        },
		        axisLine:{
		            show:false
		        },
		        axisTick:{
		            show:false
		        },axisLabel:{
			    	formatter:function(value){
			    		if(value == 0){
			    			return value;
			    		}
			    		return value;
			    	}
			    }
		    },textStyle:{
		        color:'#637F87',
		        fontSize:12
		    },
		    series : [
		        {
		            type:'bar',
		            barWidth: '40%',
		            data:splitData,
		            stack:'option3',
		            itemStyle:{
		                normal: {
		                    color: '#6bd9e1'
		                }
		            }
		        }
		    ]
		};
		return option;
	}

	getRepriedOption=()=>{
		let option = {
		   grid:{
		        top:25,
		        bottom:30,
		        left:50,
		        right:20
		    },
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'none'        // 默认为直线，可选为：'line' | 'shadow'
		        },

		    },
		    toolbox: {
		        show : true,
		        feature : {
		            mark : {show: true},
		            dataView : {show: true, readOnly: false},
		            restore : {show: true},
		            saveAsImage : {show: true}
		        }
		    },
		    xAxis : [
		        {
		            type : 'category',
		            splitLine: {show:false},
		            data : repireTime,

		            axisLine:{
		                show:true
		            },
		            axisTick:{
		                show:false
		            },
		            nameTextStyle:{
		                fontSize:5
		            },
		            boundaryGap:true,
		            axisLabel:{
		            	interval:0,
		            	rotate:0,
		            	fontSize:10,
		            	formatter:function (value, index) {
						    return value.substring(5);
						}
		            }
		        }
		    ],
		    yAxis : 
		        {
		            type : 'value',
		            splitLine:{
		            	show:false
		            },
		            axisLine:{
		            show:false
			        },
			        axisTick:{
			            show:false
			        },
		        }
		    ,
		    textStyle:{
		        color:'#637F87',
		        fontSize:12
		    },
		    series : [
		        {
		            name:'累计',
		            type:'bar',
		            stack: '总量',
		            itemStyle:{
		                normal:{
		                    barBorderColor:'rgba(0,0,0,0)',
		                    color:'rgba(0,0,0,0)'
		                },
		                emphasis:{
		                    barBorderColor:'rgba(0,0,0,0)',
		                    color:'rgba(0,0,0,0)'
		                }
		            },
		            data:repireDataFu
		        },
		        {
		            name:'动态维保',
		            type:'bar',
		            stack: '总量',
		            barWidth:'40%',
		            itemStyle : { normal: {label : {show: false, position: 'inside'}}},
		            data:repireData
		        }
		    ]
		};
		return option;                
	}



	getMapChartOption=()=>{
		let option={
			    	geo: {
			          map: 'chongqing',
			          zoom:1.2,
			          
			          show:true,
			          label: {
			              emphasis: {
			                  show: false
			              }
			          },
			          itemStyle:{
			              normal:{
			                areaColor:'rgba(113,183,238,0.1)',
			                borderColor:'#90d2ed',
			              }
			          },
			        },
			        legend: {
			          type: 'plain',
			          color:'#ffffff',
			          orient: 'vertical',
			          left:'1%',
			          top:'80%',
			          zlevel:4,
			          textStyle:{
			          	color:'#ffffff'
			          },
			          data: getLegendData()
			        },
			        series: [{
			            type: 'map',
			            map: 'chongqing',
			            roam: false,
			            zoom:1.2,
			            itemStyle:{
			              normal:{
			                areaColor:'rgba(113,183,238,0.5)',
			                borderColor:'#90d2ed',
			              },
			              emphasis:{
			                areaColor:'rgba(113,183,238,0.2)',
			              }
			            },
			            label:{
			                normal:{
			                    show: false//隐藏名称
			                }
			            }
			        },
			        {
		            name: '空调',
		            type: 'scatter',
		            zoom:1.2,
		            left:'15%',
		            coordinateSystem: 'geo',
		            data: kData,
		            symbolSize: function (val) {
		                return 6;
		            },
		            showEffectOn: 'emphasis',
		            rippleEffect: {
		                brushType: 'stroke'
		            },
		            hoverAnimation: true,
		            label: {
		                normal: {
		                    show: false
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#fb5959',
		                    shadowBlur: 0.5,
		                    shadowColor: '#333'
		                }
		            },
		            zlevel: 2,
		            z:2
		        },
		        {
		            name: '锅炉',
		            type: 'scatter',
		            zoom:1.2,
		            left:'15%',
		            coordinateSystem: 'geo',
		            data: gData,
		            symbolSize: function (val) {
		                return 6;
		            },
		            showEffectOn: 'emphasis',
		            rippleEffect: {
		                brushType: 'stroke'
		            },
		            hoverAnimation: true,
		            label: {
		                normal: {
		                    show: false
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#fffd38',
		                    shadowBlur: 0.5,
		                    shadowColor: '#333'
		                }
		            },
		            zlevel: 2,
		            z:2
		        }
		        ]
			    };
		return option;
	}





	componentDidMount(){
		
        mechineTypeChart =  echarts.init(document.getElementById('mechineType'));
        mechineStateChart =  echarts.init(document.getElementById('mechineState'));
        jiaofuChart = echarts.init(document.getElementById('jiaofuChart'));
        mechineBackChart = echarts.init(document.getElementById('mechineBackChart'));
        mechineSplitChart = echarts.init(document.getElementById('mechineSplitChart'));
        mechineRepireChart = echarts.init(document.getElementById('mechineRepireChart'));
        mapChart = echarts.init(document.getElementById('mapChart'));

		this.loadCityData(this.state.selectCity,'/mapjson/china.json');
        
        
        let self = this;

        mapChart.on('click', function (params,e) {

			//阻止浏览器冒泡
			var evt = e || window.event;  
			evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble=true);  
		    let city = params.name;
		    let value = getJsonName(city);
		    if(value){
		    	self.loadCityData(city,'/mapjson/'+value);

			    self.setState({
			    	selectCity:city,
			    	opacity:0
			    })
			    
		    }else{
		    	if(/^[\u4e00-\u9fa5]/.test(city)){

		    	}else{
		    		let left = params.event.offsetX+150;
			    	let top = params.event.offsetY+200;
			    	if(top>=470){
			    		top=470;
			    	}
			    	self.setState({
			    		
			    		left:left,
				    	top:top,
				    	opacity:0.95,
				    	loading:true,
			    	})

			    	self.fetchResultData(city).then(response=>{
			    		if(response.ok){
			    			response.json().then(json=>{
			    				if(json.resultentry3id!==-1){
			    					self.setState({
			    						curMechine:json,
			    						loading:false
			    					})
			    				}else{
			    					self.setState({
			    						loading:false,
			    						opacity:0,
			    					})
			    				}
			    			})
			    		}
			    	})
		    	}
		    	
		    	
		    	
		    }
		    
		});



	}



	loadOption=()=>{
		mechineTypeChart.clear();
		mechineStateChart.clear();
		jiaofuChart.clear();
		mechineBackChart.clear();
		mechineSplitChart.clear();
		mechineRepireChart.clear();
		mechineTypeChart.setOption(this.getmechineTypeOption());
		mechineStateChart.setOption(this.getmechineStateOption());
		jiaofuChart.setOption(this.getJiaofuOption());
		mechineBackChart.setOption(this.getMechineBackOption());
		mechineSplitChart.setOption(this.getSplitOption());
		mechineRepireChart.setOption(this.getRepriedOption());
	}
	
	loadChart = (areaName)=>{
		let self = this;
		fetch(areaName)
	        .then((res)=> res.json())
	        .then((json)=>{
            	echarts.registerMap('chongqing', json);
			    mapChart.setOption(this.getMapChartOption());
        	});
	}

	goBack=()=>{
		this.loadCityData('home','/mapjson/china.json');
		
	}
	
	closeInfo=()=>{
		this.setState({
			opacity:0
		})
	}

	closeModal=()=>{
		this.setState({
			visible:false
		})
	}

	render(){
		return (
			<div className='mainBack' style={sectionStyle}>
			 	<div className='chartDiv mechineType'>
			 		<span className='kongtiao'>{pieData[0].value}</span>
			 		<span className='guolu'>{pieData[1].value}</span>
			 		<div className='mechineTypeDiv' id='mechineType'></div>
			 		<div className='title'>设备类型</div>
			 	</div>
			 	<div className='chartDiv mechineState'>
			 		<div className='mechineStateDiv' id='mechineState'></div>
			 		<table className='tableHeader'>
			 			<tbody>
						<tr><th className='th1'></th><th className='th2'>数量</th><th className='th3'>占比</th></tr>
			 			</tbody>
			 		</table>
			 		<table className='stateTable'>
						<tbody>
						<tr><td></td><td style={{'color':'#77fcfe','width':'50px','lineHeight':'27px'}}>{pieData1[0].value}</td><td>{pieData1Persent[0]+'%'}</td></tr>
						<tr><td></td><td style={{'color':'#fb5959'}}>{pieData1[1].value}</td><td>{pieData1Persent[1]+'%'}</td></tr>
						<tr><td></td><td style={{'color':'#f5a623'}}>{pieData1[2].value}</td><td>{pieData1Persent[2]+'%'}</td></tr>
			 			</tbody>
			 		</table>
			 	</div>
			 	<div className='chartDiv jiaofu'>
			 		<div className='jiaofuDiv' id='jiaofuChart'></div>
			 	</div>
			 	<div className='chartDiv mechineBack'>
			 		<div className='mechineBackDiv' id='mechineBackChart'></div>
			 	</div>
			 	<div className='chartDiv mechineSplit'>
			 		<div className='mechineSplitDiv' id='mechineSplitChart'></div>
			 	</div>
		 		<div className='chartDiv mechineRepire'>
		 			<div className='mechineRepireDiv' id='mechineRepireChart'></div>
		 		</div>
			 	
			 	<div className='mechineTotal'>
			 		<span className='mechineTotalSpan'>设备总数</span>
			 		<span className='mechineTotalNum'>{getTotalNum().mechineTotal}</span>
			 	</div>
				<div className='userTotal'>
					<span className='userTotalSpan'>客户总数</span>
			 		<span className='userTotalNum'>{getTotalNum().userTotal}</span>
				</div>

				<div className='mapDiv'>
					<div className='mapChartDiv' id='mapChart'></div>
					<div className='backChina' onClick={this.goBack} style={{'display':this.state.selectCity==='home'?'none':'inline-block'}}><Icon type="arrow-left" /></div>
				</div>
				{/*
				<a href='http://www.slhwremote.com' target="_blank" className='link link1'><Icon type="arrow-right" /> 双良云监控系统</a>
				<a href='http://www.bdp.cn' className='link link2' target="_blank"><Icon type="arrow-right" /> 能耗管理平台</a>
				<a href='http://www.dvr163.com' className='link link3' target="_blank"><Icon type="arrow-right" /> 视频监控系统</a>
				<a href='http://61.177.125.162:9000' className='link link4' target="_blank"><Icon type="arrow-right" /> ESM智慧运维平台</a>
				*/}
				<div className='infoDiv' style={{'left':this.state.left+'px','top':this.state.top+'px','opacity':this.state.opacity,'display':this.state.opacity===0?'none':'inline-block'}}>
					<div className='loading' style={{'display':this.state.loading?'inline-block':'none'}}>
							<Icon type="loading" className='icon'/>
					</div>
					<div className='infoHeader'>
						<div className='infoCircle' style={{'background':this.state.curMechine.name==='空调'?'#fb5959':'#fffd38'}}></div> {this.state.curMechine.name}

						<Icon type="close" className='closeInfo' onClick={this.closeInfo}/>
					</div>
					<div className='infoLine lineGrey'>
						<div className='infoLineLeft'>设备编号</div>
						<div className='infoLineRight'>{this.state.curMechine.sbbh}</div>
					</div>
					<div className='infoLine ' >
						<div className='infoLineLeft'>设备型号</div>
						<div className='infoLineRight'>{this.state.curMechine.sbxh}</div>
					</div>
					<div className='infoLine lineGrey'>
						<div className='infoLineLeft'>发货日期</div>
						<div className='infoLineRight'>{this.state.curMechine.fhrq}</div>
					</div>
					<div className='infoLine '>
						<div className='infoLineLeft'>设备状态</div>
						<div className='infoLineRight'>{this.state.curMechine.sbzt0}</div>
					</div>
					<div className='infoLine lineGrey'>
						<div className='infoLineLeft'>制作公司</div>
						<div className='infoLineRight' title={this.state.curMechine.htkh}>{this.state.curMechine.htkh}</div>
					</div>
					<div className='infoLine '>
						<div className='infoLineLeft'>分公司办</div>
						<div className='infoLineRight' >{this.state.curMechine.fgsb}</div>
					</div>
					<div className='infoLine lineGrey'>
						<div className='infoLineLeft'>用户</div>
						<div className='infoLineRight' title={this.state.curMechine.yh}>{this.state.curMechine.yh}</div>
					</div>
					<div className='infoLine ' >
						<div className='infoLineLeft'>地址</div>
						<div className='infoLineRight' title={this.state.curMechine.dz}>{this.state.curMechine.dz}</div>
					</div>
				</div>
	
				<InfoModal visible={this.state.visible} close={this.closeModal.bind(this)} data={this.state.curData}/>	
			</div>
		)
	}
}
export default Main;
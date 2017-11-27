import React from 'react';
import './less/main.less';
import bqFetch from 'root/utils/bqFetch';
import {BQ_SELF} from 'root/config/constant';
import back from './images/back.png';
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
import 'echarts/lib/component/tooltip'
var sectionStyle = {
  backgroundImage: `url(${back})`,
  backgroundSize:'100% 100%'
};

var geoCoordMap = window.geoCoordMap;

var kongtiaoData = window.kongtiaoData;

var guoluData=window.guoluData;

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



var getGeoCoordMap = function(){
	let result = {};
	for(let i=0;i<resultEntry3.length;i++){
		result[resultEntry3[i].SBBH] = [resultEntry3[i].jd,resultEntry3[i].wd];
	}
	return result;
}

var getKongtiaoMapData = function(){
	let result = [];
	for(let index=0;index<resultEntry3.length;index++){
		if(resultEntry3[index].CODE ==='1001'){
			result.push({
				name:resultEntry3[index].SBBH,
				value:resultEntry3[index].FGSB?resultEntry3[index].FGSB:''
			});
		}
		
	}
	return result;
}

var getGuoluMapData = function(){
	let result = [];
	for(let index=0;index<resultEntry3.length;index++){
		if(resultEntry3[index].CODE ==='1002'){
			result.push({
				name:resultEntry3[index].SBBH,
				value:resultEntry3[index].FGSB
			});
		}
		
	}
	return result;
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

var BQDataTokenID = window.BQDataTokenID;
const globalDsId1 = window.globalDsId1;
const globalDsId2 = window.globalDsId2;
const globalDsId3 = window.globalDsId3;
const allMechine = window.allMechine;
const mechineBackJson = window.mechineBackJson;
const mechineRepireJson = window.mechineRepireJson;
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
var resultEntry1 = window.resultEntry1;
var resultEntry2 = window.resultEntry2;

var resultEntry3 = window.resultEntry3;


//设备维保情况解析构值
var getResultEntry1=function(){
	resultEntry1.splice(0,resultEntry1.length);
	for(let index=0;index<mechineRepireJson.length;index++){
		let result = {};
			[result.zxqdhtrq0,//最新签订合同年月
			result.zzgc,//制造工厂
			result.fgsbbh,//分公司办编号
			result.fgsb,//分公司办
			result.sblb,//设备类别
			result.sbbh,//设备编号
			result.sbxh,//设备型号
			result.fhrq,//发货日期
			result.dsysrq,//调试验收日期
			result.sbqq,//三包讫期
			result.yh,//用户
			result.dz,//设备地址
			result.zxhtbh,//最新合同编号
			result.wblx,//维保类型
			result.bxjzrq,//保修截止日期
			result.zxqdhtrq,//最新签订合同
			result.glsl,//锅炉数量
			result.kdsl,//空调数量
			result.zxqdhtny,//数量
			] = mechineRepireJson[index];
			resultEntry1.push(result);
	}
	

}
//获得设备回访信息
var getResultEntry2 = function(){
	resultEntry2.splice(0,resultEntry2.length);
	for(let index=0;index<mechineBackJson.length;index++){
		let result = {};
		[result.hfsl,//回访数量
			result.nd,//年月
			result.sbw,//三包外
			result.sbn,//三包内
			result.djh,//单据号
			result.hfbz,//回访标准
			result.sblx,//sblx
			result.jylx,//交易类型
			result.hfrq,//回访日期
			result.hfr,//回访人
			result.sbyh,//设备用户
			result.sbdz,//设备地址
			result.sblb,//设备类别
			result.sbbm,//设备编码
			result.sbxh,//设备型号
			result.sbztbm,//设备状态编码
			result.sbztmc,//设备状态名称
			result.zzgc,//制造工厂
			result.FGSB,//FGSB
			result.jd,//经度
			result.wd//纬度
			] = mechineBackJson[index];
			resultEntry2.push(result);
	}
}


//获得全部设备
var getResultEntry3 = function(){
	resultEntry3.splice(0,resultEntry3.length);
	for(let index=0;index<allMechine.length;index++){
		let result = {};
		[	result.sbzt1,//设备状态1
			result.sbzt0,//设备状态2
			result.sbsl,//设备数量
			result.HTKH,//HTKH
			result.YH,//用户
			result.DQYH,//DQYH
			result.WZ,//WZ
			result.DZ,//地址
			result.jd,//经度
			result.wd,//纬度
			result.CODE,//CODE
			result.NAME_,//制造公司
			result.FGSBID,//FGSBID
			result.FGSB,//分公司
			result.SBBH,//设备编码
			result.SBXH,//设备型号
			result.FHRQ,//发货日期
			result.SBZT//设备状态
			] = allMechine[index];
			resultEntry3.push(result);
	}
}

//获取设备类型数据
var getMechineType=function(province){
	let guoluNum = 0;
	let kongtiaoNum = 0;
	for(let i=0;i<resultEntry3.length;i++){
		if(resultEntry3[i].CODE==='1001'){
			if(province!==''&&province!==null){
				if(resultEntry3[i].WZ){
					if(resultEntry3[i].WZ.indexOf(province)>=0){
					kongtiaoNum++;
					}
				}
				
			}else{
				kongtiaoNum++;
			}
			
		}else if(resultEntry3[i].CODE==='1002'){
			if(province!==''&&province!==null){
				if(resultEntry3[i].WZ){
					if(resultEntry3[i].WZ.indexOf(province)>=0){
						guoluNum++;
					}
				}
			}else{
				guoluNum++;
			}
			
		}
	}

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
var getMechineState=function(province){
	let sbw = 0;
	let yys = 0;
	let jfz = 0;
	for(let i=0;i<resultEntry3.length;i++){
		if(resultEntry3[i].sbzt0==='三包外'){
			if(province!==''&&province!==null){
				if(resultEntry3[i].WZ){
					if(resultEntry3[i].WZ.indexOf(province)>=0){
					sbw++;
				}
				}
				
			}else{
				sbw++;
			}
			
		}else if(resultEntry3[i].sbzt0==='已验收'){
			if(province!==''&&province!==null){
				if(resultEntry3[i].WZ){
					if(resultEntry3[i].WZ.indexOf(province)>=0){
						yys++;
					}
				}
			}else{
				yys++;
			}
			
		}else if(resultEntry3[i].sbzt0==='交付中'){
			if(province!==''&&province!==null){
				if(resultEntry3[i].WZ){
					if(resultEntry3[i].WZ.indexOf(province)>=0){
					jfz++;
				}
				}
				
			}else{
				jfz++;
			}
			
		}
	}

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


//获得交付进度数
var getJiaofu=function(province){
	let result = [0,0,0,0,0,0];
	let state = ['01厂内交付','02出厂到货','03调试巡查','04安装确认','05调试申请','06调试完成'];
	for(let i=0;i<resultEntry3.length;i++){

		for(let j=0;j<state.length;j++){
			if(resultEntry3[i].sbzt1===state[j]){
			if(province!==''&&province!==null){
				if(resultEntry3[i].WZ){
					if(resultEntry3[i].WZ.indexOf(province)>=0){
						result[j]++;
					}	
				}
				
			}else{
				result[j]++;
			}
			
		}
		}
		
	}
	return result;
}

//获得设备回访动态信息
var getMechineBack=function(province){
	let resultW = [0,0,0,0,0,0,0,0,0,];
	let resultN = [0,0,0,0,0,0,0,0,0,];
	let month = ['2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09','2017-10','2017-11'];
	for(let i=0;i<resultEntry2.length;i++){
		if(province!==''&&province!==null){
			if(resultEntry2[i].FGSB){	
				if(resultEntry2[i].FGSB.indexOf(province)>=0){
					for(let j=0;j<month.length;j++){
						if(resultEntry2[i].nd===month[j]){
							if(resultEntry2[i].sbztmc.indexOf('三包内')>=0){
								resultN[j]++;
							}
							if(resultEntry2[i].sbztmc.indexOf('三包外')>=0){
								resultW[j]++;
							}
						}
					}
				}
			}
		}else{
			for(var jIndex=0;jIndex<month.length;jIndex++){
						if(resultEntry2[i].nd===month[jIndex]){
							if(resultEntry2[i].sbztmc.indexOf('三包内')>=0){
								resultN[jIndex]++;
							}
							if(resultEntry2[i].sbztmc.indexOf('三包外')>=0){
								resultW[jIndex]++;
							}
							
						}
					}
		}
		

	}
	return {
		resultN:resultN,
		resultW:resultW
	}
}
//获得设备分布分析
var getMechineSplit=function(){
	let result = {};
	for(let i=0;i<resultEntry3.length;i++){
		if(result[resultEntry3[i].FGSB]){
			result[resultEntry3[i].FGSB]++;
		}else{
			result[resultEntry3[i].FGSB] = 1;
		}
	}
	// var sortedArr = result.sort((a, b) => a < b ? 1 : -1);
}


//获得设备维保动态分析
var getMechineRepire=function(province){
	let resultFu=[0,0,0,0,0,0,0,0,0,0,0];
	let result=[0,0,0,0,0,0,0,0,0,0,0];
	let time=['2017-01','2017-02','2017-03','2017-04','2017-05','2017-06','2017-07','2017-08','2017-09','2017-10','2017-全部'];
	for(let i=0;i<resultEntry1.length;i++){
		if(province!==''&&province!==null){
			if(resultEntry1[i].fgsb){
				if(resultEntry1[i].fgsb.indexOf(province)>=0){
					for(let j=0;j<time.length;j++){
						if(resultEntry1[i].zxqdhtrq0){
							if(resultEntry1[i].zxqdhtrq0.indexOf(time[j])>=0){
								result[j]++;
								result[10]++;
							}
						}
						
					}
				}
			}
		}else{
			for(let j=0;j<time.length;j++){
				if(resultEntry1[i].zxqdhtrq0){
					if(resultEntry1[i].zxqdhtrq0.indexOf(time[j])>=0){
						result[j]++;
						result[10]++;
					}
				}
				
			}
		}

		
	}
	resultFu=[0,result[0],result[0]+result[1],result[0]+result[1]+result[2],result[0]+result[1]+result[2]+result[3],result[0]+result[1]+result[2]+result[3]+result[4],result[0]+result[1]+result[2]+result[3]+result[4]+result[5],result[0]+result[1]+result[2]+result[3]+result[4]+result[5]+result[6],result[0]+result[1]+result[2]+result[3]+result[4]+result[5]+result[6]+result[7],result[0]+result[1]+result[2]+result[3]+result[4]+result[5]+result[6]+result[7]+result[8],0]
	return {
		result:result,
		resultFu:resultFu,
		time:time
	}
}

//获得设备数和用户数
var getTotalNum=function(){
	let mechineTotal = resultEntry3.length;
	
	let userNameArr = [];
	for(let i=0;i<resultEntry3.length;i++){
		if(getArrIndex(userNameArr,resultEntry3[i].YH)===(-1)){
			userNameArr.push(resultEntry3[i].YH);
		}
	}
	return {
		mechineTotal:mechineTotal,
		userTotal:userNameArr.length
	}

}
class Main extends React.Component{
	constructor(props){
		super(props);
		if(BQDataTokenID!==''){
			BQDataTokenID = GetQueryString('BQDataTokenID');	
		}
		
		// console.log(BQDataTokenID);
		// console.log(globalDsId1);
		// console.log(globalDsId2);
		// console.log(globalDsId3);
		this.state=({
			selectCity:'',
			left:0,
			top:0,
			curMechine:{},
			opacity:0,
			loading:false
		})
	}

	loadCityData=(city)=>{
		let curpieData1 = getMechineType(city);
        pieLegend = curpieData1.pieLegend;
        pieData = curpieData1.pieData;

        let pieData11 = getMechineState(city);
        pieLegend1 = pieData11.pieLegend;
        pieData1 = pieData11.pieData;
        if(!(pieData1[0].value ===0&& pieData1[1].value ===0&&pieData1[2].value ===0)){
        	pieData1Persent[0] = (parseFloat((parseFloat(pieData1[0].value/(pieData1[0].value+pieData1[1].value+pieData1[2].value))).toFixed(2))*100).toFixed(0);
			pieData1Persent[1] = (parseFloat((parseFloat(pieData1[1].value/(pieData1[0].value+pieData1[1].value+pieData1[2].value))).toFixed(2))*100).toFixed(0);
			pieData1Persent[2] = 100 - parseFloat(pieData1Persent[0]) - parseFloat(pieData1Persent[1]);
        }else{
        	pieData1Persent = [0,0,0];
        }
        

        let jiaofuRealData = getJiaofu(city);
        jiaofuData = jiaofuRealData;


        let mechineBackData = getMechineBack(city);
        resultW = mechineBackData.resultW;
        resultN = mechineBackData.resultN;


        let mechineRepireData = getMechineRepire(city);
        repireTime=mechineRepireData.time;
        repireDataFu=mechineRepireData.resultFu;
		repireData=mechineRepireData.result;

		kData = this.getKongtiaoData(city);
		gData = this.getGuoluData(city);
      
	}
	
    getDsData=(BQDataTokenID,dsId)=>{
        let url=BQ_SELF+'/ds/web/data/export4out/'+BQDataTokenID+'/'+dsId;
            return bqFetch(url, {
                 method: "GET",
                 async:false,
                 headers: {
                        'Content-Type': 'application/json'
                 }
        })
    }
	
	componentWillMount(){
	    // getResultEntry1();
     //    getResultEntry2();
     //    getResultEntry3();

        // geoCoordMap =  getGeoCoordMap();
        // kongtiaoData = getKongtiaoMapData();
        // guoluData = getGuoluMapData();
        // console.log(JSON.stringify(guoluData));
        
        // console.log(JSON.stringify(resultEntry1));
        // console.log(JSON.stringify(resultEntry2));
        // console.log(JSON.stringify(resultEntry3));
        this.loadCityData(this.state.selectCity);
        


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

	getKongtiaoData=(city)=>{
		let result=[];
		for(let i=0;i<kongtiaoData.length;i++){
			if(city!==''&&city!==null){
				if(kongtiaoData[i].value){
					try{
					if(kongtiaoData[i].value.indexOf(city)>=0||city.indexOf(kongtiaoData[i].value)>=0){
						result.push({
							name:kongtiaoData[i].name,
							value:geoCoordMap[kongtiaoData[i].name]
						});
					}}catch(e){}
				}
				
			}else{
				result.push({
					name:kongtiaoData[i].name,
					value:geoCoordMap[kongtiaoData[i].name]
				});
			}
			
		}
		return result;
	}

	getGuoluData=(city)=>{
		let result=[];
		for(let i=0;i<guoluData.length;i++){
			if(city!==''&&city!==null){
				if(guoluData[i].value.indexOf(city)>=0||city.indexOf(guoluData[i].value)>=0){
					result.push({
					name:guoluData[i].name,
					value:geoCoordMap[guoluData[i].name]
				});
				}
			}else{
				result.push({
					name:guoluData[i].name,
					value:geoCoordMap[guoluData[i].name]
				});
			}
			result.push({
				name:guoluData[i].name,
				value:geoCoordMap[guoluData[i].name]
			});
		}
		return result;
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


	getMapDataByBh=(name)=>{
		let result = {};
		for(let i=0;i<resultEntry3.length;i++){
			if(resultEntry3[i].SBBH === name){
				result = resultEntry3[i];
				return result;
			}
		}
		return false;
	}



	componentDidMount(){
		
        mechineTypeChart =  echarts.init(document.getElementById('mechineType'));
        mechineStateChart =  echarts.init(document.getElementById('mechineState'));
        jiaofuChart = echarts.init(document.getElementById('jiaofuChart'));
        mechineBackChart = echarts.init(document.getElementById('mechineBackChart'));
        mechineSplitChart = echarts.init(document.getElementById('mechineSplitChart'));
        mechineRepireChart = echarts.init(document.getElementById('mechineRepireChart'));
        mapChart = echarts.init(document.getElementById('mapChart'));


        this.loadOption();
        this.loadChart('/mapjson/china.json');
        let self = this;
        mapChart.on('click', function (params,e) {

			//阻止浏览器冒泡
			var evt = e || window.event;  
			evt.stopPropagation ? evt.stopPropagation() : (evt.cancelBubble=true);  
		    let city = params.name;
		    let value = getJsonName(city);
		    if(value){
		    	self.loadCityData(city);
		    	self.loadChart('/mapjson/'+value);
		    	
		    	self.loadOption();
			    self.setState({
			    	selectCity:city,
			    	opacity:0
			    })
			    
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
		    	fetch('/mapjson/data.json')
			        .then((res)=> res.json())
			        .then((json)=>{
		            	if(!ifExitInData(city)){
						    let curMap = self.getMapDataByBh(params.name);
						    if(curMap){
								self.setState({
							    	curMechine:curMap,
							    	loading:false
							    })
						    }else{
						    	self.setState({
						    		opacity:0,
						    		loading:false
						    	})
						    }
						    
					    }else{
					    	self.setState({
					    		opacity:0,
					    		loading:false
					    	})
					    }
		        	});
		    	
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
		this.loadCityData('');
		
		
		this.loadOption();
		this.loadChart('/mapjson/china.json');
		this.setState({
			selectCity:''
		})
		
	}
	
	closeInfo=()=>{
		this.setState({
			opacity:0
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
						<tr><th className='th1'></th><th className='th2'>数量</th><th className='th3'>占比</th></tr>
			 		</table>
			 		<table className='stateTable'>
						
						<tr><td></td><td style={{'color':'#77fcfe','width':'50px','lineHeight':'27px'}}>{pieData1[0].value}</td><td>{pieData1Persent[0]+'%'}</td></tr>
						<tr><td></td><td style={{'color':'#fb5959'}}>{pieData1[1].value}</td><td>{pieData1Persent[1]+'%'}</td></tr>
						<tr><td></td><td style={{'color':'#f5a623'}}>{pieData1[2].value}</td><td>{pieData1Persent[2]+'%'}</td></tr>
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
					<div className='backChina' onClick={this.goBack} style={{'display':this.state.selectCity===''?'none':'inline-block'}}><Icon type="arrow-left" /></div>
				</div>

				<a href='http://www.slhwremote.com' target="_blank" className='link link1'><Icon type="arrow-right" /> 双良云监控系统</a>
				<a href='http://www.bdp.cn' className='link link2' target="_blank"><Icon type="arrow-right" /> 能耗管理平台</a>
				<a href='http://www.dvr163.com' className='link link3' target="_blank"><Icon type="arrow-right" /> 视频监控系统</a>
				<a href='http://61.177.125.162:9000' className='link link4' target="_blank"><Icon type="arrow-right" /> ESM智慧运维平台</a>

				<div className='infoDiv' style={{'left':this.state.left+'px','top':this.state.top+'px','opacity':this.state.opacity,'display':this.state.opacity===0?'none':'inline-block'}}>
					<div className='loading' style={{'display':this.state.loading?'inline-block':'none'}}>
							<Icon type="loading" className='icon'/>
					</div>
					<div className='infoHeader'>
						<div className='infoCircle' style={{'background':this.state.curMechine.NAME_==='空调'?'#fb5959':'#fffd38'}}></div> {this.state.curMechine.NAME_}

						<Icon type="close" className='closeInfo' onClick={this.closeInfo}/>
					</div>
					<div className='infoLine lineGrey'>
						<div className='infoLineLeft'>设备编号</div>
						<div className='infoLineRight'>{this.state.curMechine.SBBH}</div>
					</div>
					<div className='infoLine ' >
						<div className='infoLineLeft'>设备型号</div>
						<div className='infoLineRight'>{this.state.curMechine.SBXH}</div>
					</div>
					<div className='infoLine lineGrey'>
						<div className='infoLineLeft'>发货日期</div>
						<div className='infoLineRight'>{this.state.curMechine.FHRQ}</div>
					</div>
					<div className='infoLine '>
						<div className='infoLineLeft'>设备状态</div>
						<div className='infoLineRight'>{this.state.curMechine.sbzt0}</div>
					</div>
					<div className='infoLine lineGrey'>
						<div className='infoLineLeft'>制作公司</div>
						<div className='infoLineRight' title={this.state.curMechine.HTKH}>{this.state.curMechine.HTKH}</div>
					</div>
					<div className='infoLine '>
						<div className='infoLineLeft'>分公司办</div>
						<div className='infoLineRight' >{this.state.curMechine.FGSB}</div>
					</div>
					<div className='infoLine lineGrey'>
						<div className='infoLineLeft'>用户</div>
						<div className='infoLineRight' title={this.state.curMechine.YH}>{this.state.curMechine.YH}</div>
					</div>
					<div className='infoLine ' >
						<div className='infoLineLeft'>地址</div>
						<div className='infoLineRight' title={this.state.curMechine.DZ}>{this.state.curMechine.DZ}</div>
					</div>
				</div>

				
			</div>
		)
	}
}
export default Main;
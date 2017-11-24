import React from 'react';
import './less/main.less';
//引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
const globalDataSet = window.globalDataSet;
class Main extends React.Component{
	constructor(props){
		super(props);
		this.state=({
			
		})
	}
	
	
	
	componentWillMount(){
		console.log(globalDataSet);
	}
	
	componentDidMount(){
		// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
	}
	
	render(){
		return (
			<div>
			 	<div id="main" style={{ width: 400, height: 400 }}></div>
			</div>
		)
	}
}
export default Main;
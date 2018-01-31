import React from 'react';
import {Modal,Table} from 'antd';

class InfoModal extends React.Component{
	constructor(props){
		super(props);
		this.state=({
			visible:false,
			manageData:[],
			curPage:1,
			total:10,
			numberPerPage:5,
		})
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			visible:nextProps.visible,
			curPage:nextProps.visible?1:this.state.curPage,
			manageData:nextProps.data,
			total:nextProps.data.length
		})
	}


	manageColumns=[
		{
			title: '设备状态1',
			dataIndex: 'sbzt1',
			key: 'sbzt1',
		},            
	  {
			title: '设备数量',
			dataIndex: 'sbsl',
			key: 'sbsl',
		}, 
		{
			title: 'DQYH',
			dataIndex: 'DQYH',
			key: 'DQYH',
		}, 
		{
			title: '位置',
			dataIndex: 'WZ',
			key: 'WZ',
		}, 
		{
			title: '制造公司',
			dataIndex: 'NAME_',
			key: 'NAME_',
		}, 
		{
			title: '分公司',
			dataIndex: 'FGSB',
			key: 'FGSB',
		}, 
		{
			title: '设备编码',
			dataIndex: 'SBBH',
			key: 'SBBH',
		}, 
		{
			title: '设备型号',
			dataIndex: 'SBXH',
			key: 'SBXH',
		}, 
		{
			title: '发货时间',
			dataIndex: 'FHRQ',
			key: 'FHRQ',
		}, 
		
	];

	handleOk=()=>{

	}

	handleClose=()=>{
		this.setState({
			visible:false
		})
		this.props.close();
	}

	changePage=(value)=>{
		this.setState({
			curPage:value
		})
	}

	render(){
		return (
			<div>
			<Modal
				visible={this.state.visible}
				title='交付进度详细信息'
				onOk={this.handleOk}	
			 	onCancel={this.handleClose}
			 	width={850}
				className='createManagerModal'
				maskClosable={false}
				>

			<Table className='manageTable' columns={this.manageColumns} bordered={true} dataSource={this.state.manageData} pagination={{current:this.state.curPage,pageSize:this.state.numberPerPage,total:this.state.total,onChange:this.changePage}}/>
					
			</Modal>
			</div>
		)
	}
}
export default InfoModal;
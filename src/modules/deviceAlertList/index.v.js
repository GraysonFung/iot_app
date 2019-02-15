import React from 'react';
import { connect } from 'dva';
import {  List, Icon, ListView } from 'antd-mobile'
import {routerRedux,withRouter} from 'dva/router'
import moment from 'moment'

import ReactDOM from 'react-dom';

moment.locale('zh-cn');

const Item = List.Item;
const Brief = Item.Brief;





class deviceAlert extends React.Component {

	constructor(props) {
		super(props);
		if(this.props.deviceAlertList.haveInit){
			console.log('防止重复初始化')
			return
		}
		
		this.props.dispatch({
  			type:'deviceAlertList/updateState',
  			payload:{
      			height: document.documentElement.clientHeight * 3 / 4,
  			}
  		})
	}
  	componentDidMount(){
  		const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
  		const { pagination, sort, filter,dataSource,haveInit } = this.props.deviceAlertList
    	console.log("渲染alertList")
    	console.log('haveInit',haveInit)
  		if(haveInit){
  			console.log('防止重复初始化渲染')
  			return
  		}
  		this.props.dispatch({
  			type:'deviceAlertList/deviceAlertList',
  			payload:{
  				pagination,
  				sort:{
  					type:"desc",
  					field:'creationTime'
  				},
  				filter,
  				height:hei,
  				haveInit:true
  			}
  		})
  	}
  	onEndReached = (event) => {
  		const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
  		const { pagination, sort, filter,dataSource,list,Loaded } = this.props.deviceAlertList
    	console.log('reach end', event);
    	// console.log('pagination',pagination);

    	if(Loaded){
    		console.log("没有更多了,Loaded",Loaded)
    		return
    	}

      	this.props.dispatch({
  			type:'deviceAlertList/deviceAlertList',
  			payload:{
  				pagination:{
  					...pagination,
    				current:pagination.current+1
  				},
  				sort:{
  					type:"desc",
  					field:'creationTime'
  				},
  				filter,
  				height:hei
  			}
  		})

    }

	render(){

		const thumbIcon=require('../../assets/icon/dpred/icon-设备报警.png');
		const {dispatch,deviceAlertList}=this.props

		const separator = (sectionID, rowID) => (
				<div
				key={`${sectionID}-${rowID}`}
				style={{
					backgroundColor: '#F5F5F9',
					height: '0px',
					borderTop: '1px solid #ECECED',
					borderBottom: '1px solid #ECECED',
				}}
				/>
			);


    	const row = (rowData, sectionID, rowID) => {

    	  return (
					<List  className="my-list" key={rowData.id}>
						<Item extra={moment(rowData.time).fromNow()} 
							onClick={() => {dispatch(routerRedux.push({pathname:`/deviceAlert`,query:{id:rowData.id} }))}}
							align="middle" thumb={thumbIcon} arrow="horizontal" multipleLine>
								报警代码：{rowData.code}
						<Brief>{rowData.name}</Brief>
						</Item>
					</List>
    	  );
    	};

		return(
			
			<ListView
			ref={el => this.lv = el}
			dataSource={deviceAlertList.dataSource}
			renderHeader={() => <span></span>}
			renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
				{this.props.deviceAlertList.Loaded ? '没有更多了' : '加载中...'}
				</div>)}
			renderSectionHeader={sectionData => (
				<div>{`第${sectionData.split(' ')[1]}页`}</div>
				)}
			renderBodyComponent={() => <div />}
			renderRow={row}
			renderSeparator={separator}
			style={{
				height: this.props.deviceAlertList.height,
				overflow: 'auto',
				width:'100%'
			}}
			pageSize={6}
			onScroll={() => { console.log('scroll'); }}
			scrollRenderAheadDistance={500}
			onEndReached={this.onEndReached}
			onEndReachedThreshold={10}
			/>
			
				
			
		)
	}
}





export default withRouter(connect(({deviceAlertList})=>({deviceAlertList}))(deviceAlert));

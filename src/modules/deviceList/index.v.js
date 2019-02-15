import React from 'react';
import { connect } from 'dva';
import {  List, Icon, ListView } from 'antd-mobile'
import {routerRedux,withRouter} from 'dva/router'
import moment from 'moment'
import NavBar from '../../components/navBar'

import ReactDOM from 'react-dom';

moment.locale('zh-cn');

const Item = List.Item;
const Brief = Item.Brief;





class DeviceList extends React.Component {

	constructor(props) {
		super(props);
		if(this.props.deviceList.haveInit){
			return
		}
		
		this.props.dispatch({
  			type:'deviceList/updateState',
  			payload:{
      			height: document.documentElement.clientHeight * 3 / 4,

  			}
  		})
	}
  	componentDidMount(){
  		const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
  		const { pagination, sort, filter,dataSource,haveInit } = this.props.deviceList
  		if(haveInit){
  			return
  		}
  		this.props.dispatch({
  			type:'deviceList/deviceList',
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
  		const { pagination, sort, filter,dataSource,list,Loaded } = this.props.deviceList
    	console.log('reach end', event);
    	// console.log('pagination',pagination);

    	if(Loaded){
    		return
    	}

      	this.props.dispatch({
  			type:'deviceList/deviceList',
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

		const thumbIcon=require('../../assets/5.png');
		const {dispatch,deviceList}=this.props


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
					<List  className="my-list" key={rowID}>
						<Item extra={moment(rowData.creationTime).fromNow()} 
							onClick={() => {dispatch(routerRedux.push({pathname:`/deviceStatus`}))}}
							align="middle" thumb={thumbIcon } arrow="horizontal" multipleLine>
								{rowData.name}
						<Brief>{rowData.deviceBrand}</Brief>
						</Item>
					</List>
    	  );
    	};

		return(
			<div>
			<NavBar>应用</NavBar>
			<ListView
			ref={el => this.lv = el}
			dataSource={deviceList.dataSource}
			renderHeader={() => <span>搜索框</span>}
			renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
				{this.props.deviceList.Loaded ? '没有更多了' : '加载中...'}
				</div>)}
			renderSectionHeader={sectionData => (
				<div>{`第${sectionData.split(' ')[1]}页`}</div>
				)}
			renderBodyComponent={() => <div />}
			renderRow={row}
			renderSeparator={separator}
			style={{
				height: this.props.deviceList.height,
				overflow: 'auto',
				width:'100%'
			}}
			pageSize={6}
			onScroll={() => { console.log('scroll'); }}
			scrollRenderAheadDistance={500}
			onEndReached={this.onEndReached}
			onEndReachedThreshold={10}
			/>
			</div>
			
				
			
		)
	}
}





export default withRouter(connect(({deviceList})=>({deviceList}))(DeviceList));

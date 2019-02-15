import React from 'react';
import { connect } from 'dva';

import NavBar from '../../../../components/navBar'
import {  List, Icon,ListView,WhiteSpace,Tabs,Badge,Accordion } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';




const thumbIcon=require('../../../../assets/icon/dpred/icon-设备报警.png');
const Item = List.Item;
const Brief = Item.Brief;


class devicespStore extends React.Component {
  	componentDidMount(){
          this.props.dispatch({type:'deviceAlert/getspStore'})
  	}
	render(){
          const {deviceAlert,dispatch}=this.props
          const {spStore,index}=deviceAlert
          console.log('modalContent[index]',spStore[index])
          const modalContent=spStore[index]
		return(
			<div style={{marginTop:'0.45rem'}}>
          		<NavBar>备件清单</NavBar>
          		<List  className="my-list">
          		<Item className="my-title-lg" extra="" 
          		onClick={() => {}}
          		align="middle" thumb={require('../../../../assets/5.png')}  multipleLine>
          		备件名称：{modalContent.spName}
          		<Brief>备件型号：{modalContent.spId}</Brief>
          		</Item>
                    <Item>所在库房：{modalContent.houseName}</Item>
                    <Item>库房ID：{modalContent.houseId}</Item>
                    <Item>入库时间:{modalContent.inDate}</Item>
                    <Item>出库时间:{modalContent.outDate}</Item>
                    <Item>价值:{modalContent.storeMoney}</Item>
                    <Item>库存数量:{modalContent.storeNum}</Item>

          		</List>
			</div>
		)
	}
}





export default (connect(({deviceAlert})=>({deviceAlert}))(devicespStore));

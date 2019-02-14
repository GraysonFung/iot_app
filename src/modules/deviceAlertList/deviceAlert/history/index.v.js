import React from 'react';
import { connect } from 'dva';

import NavBar from '../../../../components/navBar'
import {  List, Icon,ListView,WhiteSpace,Tabs,Badge,Accordion } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';




const thumbIcon=require('../../../../assets/icon/dpred/icon-设备报警.png');
const Item = List.Item;
const Brief = Item.Brief;


class devicehistory extends React.Component {
  	componentDidMount(){
          this.props.dispatch({type:'deviceAlert/gethistory'})
  	}
	render(){
          const {deviceAlert,dispatch}=this.props
          const {history,index}=deviceAlert
          console.log('modalContent[index]',history[index])
          const modalContent=history[index]
		return(
			<div style={{marginTop:'0.45rem'}}>
          		<NavBar>故障历史</NavBar>
          		<List  className="my-list">
          		<Item className="my-title-lg" extra="" 
          		onClick={() => {}}
          		align="middle" thumb={require('../../../../assets/5.png')}  multipleLine>
          		故障历史：
          		<Brief>设备型号：#45-683</Brief>
          		<Brief>{modalContent.name}</Brief>
          		</Item>
                    <Item>code：{modalContent.code}</Item>
                    <Item>desc：{modalContent.desc}</Item>
                    <Item>id:{modalContent.id}</Item>
                    <Item>time:{modalContent.time}</Item>
          		</List>
			</div>
		)
	}
}





export default (connect(({deviceAlert})=>({deviceAlert}))(devicehistory));

import React from 'react';
import { connect } from 'dva';

import NavBar from '../../../../components/navBar'
import {  List, Icon,ListView,WhiteSpace,Tabs,Badge,Accordion } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';




const thumbIcon=require('../../../../assets/icon/dpred/icon-设备报警.png');
const Item = List.Item;
const Brief = Item.Brief;


class devicefixlog extends React.Component {
  	componentDidMount(){
          this.props.dispatch({type:'deviceAlert/getfixlog'})
  	}
	render(){
          const {deviceAlert,dispatch}=this.props
          const {fixlog,index}=deviceAlert
          console.log('modalContent[index]',fixlog[index])
          const modalContent=fixlog[index]
          const myUse=modalContent.use.map(item=>(
                    <List className="my-list">
                    <List.Item>备件名称：{item.name}</List.Item>
                    <List.Item>备件数量：{item.number}</List.Item>
                    <List.Item>备件ID:{item.stdId}</List.Item>
                    </List>
               ))
		return(
			<div style={{marginTop:'0.45rem'}}>
          		<NavBar>维修记录</NavBar>
          		<List  className="my-list">
          		<Item className="my-title-lg" extra="" 
          		onClick={() => {}}
          		align="middle" thumb={require('../../../../assets/5.png')}  multipleLine>
          		维修记录：
          		<Brief>设备型号：#45-683</Brief>
          		<Brief>维修人：3班赵清风</Brief>
          		</Item>
                    <Item>code：{modalContent.code}</Item>
                    <Item>desc：{modalContent.desc}</Item>
                    <Item>fixPerson:{modalContent.fixPerson}</Item>
                    <Item>fixTime:{modalContent.fixTime}</Item>
                    <Item>remark:{modalContent.remark}</Item>
                    <Item>repairTime:{modalContent.repairTime}</Item>
                    <Item>status:{modalContent.status}</Item>
                    <Item>type:{modalContent.type}</Item>
                    <Accordion>
                    <Accordion.Panel header="使用备件">
                         {myUse}
                    </Accordion.Panel>
                    </Accordion>
          		</List>
			</div>
		)
	}
}





export default (connect(({deviceAlert})=>({deviceAlert}))(devicefixlog));

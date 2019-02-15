import React from 'react';
import { connect } from 'dva';

import NavBar from '../../../../components/navBar'
import {  List, Icon,ListView,WhiteSpace,Tabs,Badge,Accordion } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';




const thumbIcon=require('../../../../assets/icon/dpred/icon-设备报警.png');
const Item = List.Item;
const Brief = Item.Brief;


class devicefaq extends React.Component {
  	componentDidMount(){
          this.props.dispatch({type:'deviceAlert/getfaq'})
  	}
	render(){
          const {deviceAlert,dispatch}=this.props
          const {faq,index}=deviceAlert
          console.log('modalContent[index]',faq[index])
          const modalContent=faq[index]
		return(
			<div style={{marginTop:'0.45rem'}}>
          		<NavBar>知识库</NavBar>
          		<List  className="my-list">
          		<Item className="my-title-lg" extra="" 
          		onClick={() => {}}
          		align="middle" thumb={require('../../../../assets/5.png')}  multipleLine>
          		常见问题：
          		</Item>
                    <Item>问题：{modalContent.a}</Item>
                    <Item>答案：{modalContent.q}</Item>
          		</List>
			</div>
		)
	}
}





export default (connect(({deviceAlert})=>({deviceAlert}))(devicefaq));

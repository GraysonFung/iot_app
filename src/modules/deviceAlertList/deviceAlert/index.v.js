import React from 'react';
import { connect } from 'dva';
import TabBar from '../../../components/tapBar'
import NavBar from '../../../components/navBar'
import {  List, Icon,ListView,WhiteSpace,Tabs,Badge,Modal } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import  './index.less'
import {routerRedux,withRouter} from 'dva/router'
import moment from 'moment'
import getDeepValue from '../../../utils/getDeepValue'
moment.locale('zh-cn');


const thumbIcon=require('../../../assets/icon/dpred/icon-设备报警.png');
const Item = List.Item;
const Brief = Item.Brief;


class deviceAlert extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: ['1', '2', '3'],
			imgHeight: 176,

		}
	}
  	componentDidMount(){
          console.log("this.props",this.props)
          const {location} = this.props

          this.props.dispatch({type:'deviceAlert/updateState',payload:{warningIndex:getDeepValue(location,'query.id')||1}})
          this.props.dispatch({type:'deviceAlert/getfixlog'})

  	}
	render(){
          const tabs = [
          { title: <Badge >维修记录</Badge> },
          { title: <Badge >故障历史</Badge> },
          { title: <Badge >备件清单</Badge> },
          { title: <Badge >知识库</Badge> },
          ];
          const {deviceAlert,dispatch}=this.props
          const {modalContent,fixlog,index}=deviceAlert
          console.log('modalContent',modalContent)
          console.log('fixlog',fixlog)
          console.log('index',index)
          const fixlogItems=deviceAlert.fixlog.map((item,index)=>{
               return(
                    <List  className="my-list" key={item.id}>
                    <Item extra={''} 
                    onClick={() => {dispatch({type:'deviceAlert/updateState',payload:{index}});dispatch(routerRedux.push('/deviceAlert/fixlog'))}}
                    align="middle" thumb={thumbIcon} arrow="horizontal" multipleLine>
                    维修人：{item.fixPerson}
                    <Brief>维修时间：{item.fixTime}</Brief>

                    </Item>
                    </List>
                    )
          })
          const historyItems=deviceAlert.history.map((item,index)=>{
               return(
                    <List  className="my-list" key={item.id}>
                    <Item extra={moment(item.time).fromNow()} 
                    onClick={() => {dispatch({type:'deviceAlert/updateState',payload:{index}});dispatch(routerRedux.push('/deviceAlert/history'))}}
                    align="middle" thumb={thumbIcon} arrow="horizontal" multipleLine>
                    故障名：{item.name}
                    <Brief>编码：{item.code}</Brief>
                    </Item>
                    </List>
                    )
          })
          const spStoreItems=deviceAlert.spStore.map((item,index)=>{
               return(
                    <List  className="my-list" key={item.id}>
                    <Item extra={moment(item.time).fromNow()} 
                    onClick={() => {dispatch({type:'deviceAlert/updateState',payload:{index}});dispatch(routerRedux.push('/deviceAlert/spStore'))}}
                    align="middle" thumb={thumbIcon} arrow="horizontal" multipleLine>
                    {item.houseName}
                    <Brief>库存：{item.storeNum}</Brief>
                    </Item>
                    </List>
                    )
          })
          const faqItems=deviceAlert.faq.map((item,index)=>{
               return(
                    <List  className="my-list" key={item.id}>
                    <Item extra={''} 
                    onClick={() => {dispatch({type:'deviceAlert/updateState',payload:{index}});dispatch(routerRedux.push('/deviceAlert/faq'))}}
                    align="middle" thumb={thumbIcon} arrow="horizontal" multipleLine>
                    {item.a}
                    <Brief>{item.q}</Brief>
                    </Item>
                    </List>
                    )
          })
          




		return(
			<div style={{marginTop:'0.45rem'}}>
          		<NavBar>设备报警</NavBar>
          		<List  className="my-list">
          		<Item className="my-title-lg" extra="" 
          		onClick={() => {}}
          		align="middle" thumb={require('../../../assets/5.png')}  multipleLine>
          		报警代码：9073
          		<Brief>设备型号：#45-683</Brief>
          		<Brief>责任人：3班赵清风</Brief>
				
          		</Item>
          		</List>

                    <TabBar>
                    <div style={{marginTop:'1.6rem'}}>
                    <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { 
                         console.log('onTabClick', index, tab);
                         switch(index) {
                              case 0:
                              dispatch({type:'deviceAlert/getfixlog'})
                              break;
                              case 1:
                              dispatch({type:'deviceAlert/gethistory'})
                              break;
                              case 2:
                              dispatch({type:'deviceAlert/getspStore'})
                              break;
                              case 3:
                              dispatch({type:'deviceAlert/getfaq'})
                              break;
                         }
                          
                    }}
                    >
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '650px', backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>{fixlogItems}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>{historyItems}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '650px', backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>{spStoreItems}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '650px', backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>{faqItems}</div>
                    </div>
                    </Tabs>
                    </div>
                    </TabBar>
			</div>
		)
	}
}





export default (connect(({deviceAlert})=>({deviceAlert}))(deviceAlert));

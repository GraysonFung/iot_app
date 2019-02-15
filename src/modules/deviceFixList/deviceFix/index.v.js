import React from 'react';
import { connect } from 'dva';
import TabBar from '../../../components/tapBar'
import NavBar from '../../../components/navBar'
import {  List, Icon,ListView,WhiteSpace,Tabs,Badge,Modal,Checkbox } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import  './index.less'
import {routerRedux,withRouter} from 'dva/router'
import moment from 'moment'
moment.locale('zh-cn');

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const thumbIcon=require('../../../assets/icon/dpred/icon-设备报警.png');
const Item = List.Item;
const Brief = Item.Brief;


class DeviceFix extends React.Component {
  	componentDidMount(){
          

  	}
	render(){
          const tabs = [
          { title: <Badge >问题</Badge> },
          { title: <Badge >结果</Badge> }
          ];
          const deviceFix={
               Items1:[
                    {id:1,label:'报警',name:'来源'},
                    {id:2,label:'2019.1.1',name:'时间'},
                    {id:3,label:'排屑机链条锁死,导致卡死',name:'描述'},

               ],
               Items2:[
                    {id:1,label:'状态',name:'已处理'},
                    {id:2,label:'2019.1.3',name:'时间'},
                    {id:3,label:'更换排屑机链条,并将链条检查加入月度点检的点检项',name:'描述'},
               ],


          }

          const Items1=deviceFix.Items1.map((item,index)=>{
               return(
                         <Item key={item.id} onChange={() =>{}} wrap>
                         {item.name}：<br/>{item.label}
                         </Item>
                    )
          })
          const Items2=deviceFix.Items2.map((item,index)=>{
               return(
                         <Item key={item.id} onChange={() =>{}} wrap>
                         {item.name}：<br/>{item.label}
                         </Item>
                    )
          })          


          




		return(
			<div style={{marginTop:'0.45rem'}}>
          		<NavBar>设备维修</NavBar>
          		<List  className="my-list">
          		<Item className="my-title-lg" extra="" 
          		onClick={() => {}}
          		align="middle" thumb={require('../../../assets/5.png')}  multipleLine>
          		维修设备：9073
          		<Brief>设备型号：#45-683</Brief>
          		
				
          		</Item>
          		</List>
                    <div>
                    <TabBar>
                    <div style={{marginTop:'1.6rem'}}>
                    <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { 
                         console.log('onTabClick', index, tab);
                         switch(index) {
                              case 0:
                              // dispatch({type:'deviceFix/getfixlog'})
                              break;
                              case 1:
                              // dispatch({type:'deviceFix/gethistory'})
                              break;
                              case 2:
                              // dispatch({type:'deviceFix/getspStore'})
                              break;
                              case 3:
                              // dispatch({type:'deviceFix/getfaq'})
                              break;
                         }
                          
                    }}
                    >
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center',  backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>
                         <List  className="my-list">
                              {Items1}
                         </List>
                    </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>
                         <List  className="my-list">
                              {Items2}
                         </List>
                    </div>
                    </div>
                    </Tabs>
                    </div>

                    </TabBar>
                    </div>



			</div>
		)
	}
}





export default (connect(({})=>({}))(DeviceFix));

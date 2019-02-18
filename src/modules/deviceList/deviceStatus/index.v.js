import React from 'react';
import { connect } from 'dva';
import TabBar from '../../../components/tapBar'
import NavBar from '../../../components/navBar'
import {  List, Icon,WhiteSpace,Modal } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import {routerRedux,withRouter} from 'dva/router'
import './index.less'

import io from 'socket.io-client';
import config from '../../../config'
console.log('config',config)


const socket = io(config.dataUrl);
socket.on('connect', () => {
  console.log(socket.connected); // true
});
socket.emit('message',{
     flow:true,
     type:'node',
     href:{
          code:'0001',
          node:'0001'
     }
})




const Item = List.Item;
const Brief = Item.Brief;
var data=[];

function getRecord(pointValue) {

      return {
       time: new Date().getTime(),
       value: pointValue
     };
}


class EquipmentStatus extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: ['1', '2', '3'],
			imgHeight: 176,
		}
	}
  	componentDidMount(){
          // console.log(this.props);
          const dispatch=this.props.dispatch
          socket.on('message',(data)=>{
             // console.log(data)
             dispatch({
                type:'deviceStatus/updateState',
                payload:{
                   ...data
                    }
             })
             

          })





  	}
	render(){
          const {dispatch,deviceStatus}=this.props
          const {name,code,status,nodes,modalVisible,modalNum,chart,chartSwitch}=deviceStatus
          const pointValue=nodes[modalNum]?nodes[modalNum].value:false
          // console.log("chart",chart)
          // console.log("chartSwitch",chartSwitch)

          if(modalVisible&&chart&&chartSwitch){
               data.push(getRecord(pointValue))
               data.length>50?data.shift():""
               chart.changeData(data)
          }else{
               data=[]
          }




          
		return(
			<div style={{marginTop:'0.45rem'}}>
          		<NavBar>设备状态</NavBar>
          		<List  className="my-list">
          		<Item className="my-title-lg" extra="" 
          		onClick={() => {}}
          		align="middle" thumb={require('../../../assets/5.png')}  multipleLine>
          		名称：{name}
          		<Brief>设备型号：{code}</Brief>
          		<Brief>设备节拍 : {status?status.beat:'加载中。。。'}</Brief>
                    <Brief>设备代码: {status?status.code:'加载中。。。'}</Brief>
                    <Brief>错误代码: {status?(status.error?'true':'false'):'加载中。。。'}</Brief>
                    <Brief>实时产量: {status?status.real:'加载中。。。'}</Brief>
                    <Brief>设备开机: {status?(status.run?'true':'false'):'加载中。。。'}</Brief>
                    <Brief>设备关机: {status?(status.shutdown?'true':'false'):'加载中。。。'}</Brief>
                    <Brief>设备运行: {status?(status.start?'true':'false'):'加载中。。。'}</Brief>
                    <Brief>设备停止: {status?(status.stop?'true':'false'):'加载中。。。'}</Brief>


				
          		</Item>
          		</List>
                    
          		<WhiteSpace/>

          			<List>
                         {
                              nodes.map((item,index)=>{
                                   return(
                                        <Item
                                        arrow="horizontal"
                                        onClick={
                                             () => {
                                                       dispatch({type:'deviceStatus/drawChart',payload:{modalVisible:true,modalNum:index}});
                                                  }
                                        }
                                        key={item.address}
                                        >{item.name}:{item.value}</Item>     
                                        )
                              })
                         }
          			</List>
                         
                         <Modal
                         visible={modalVisible}
                         transparent
                         title={nodes[modalNum]?nodes[modalNum].name:'加载中。。。'}
                         footer={[{ text: '关闭', onPress: () => { dispatch({type:'deviceStatus/updateState',payload:{modalVisible:false,chartSwitch:false}})  } }]}
                         afterClose={() => { }}
                         >   
                              <List>
                                   <Item>地址：{nodes[modalNum]?nodes[modalNum].address:'加载中。。。'} </Item>
                                   <Item>值:  {nodes[modalNum]?nodes[modalNum].value:'加载中。。。'} </Item>
                              </List>
                              <canvas id="myChart" width="320px" height="260" ref={ref=>(this.canvas1 = ref)}></canvas>
                         </Modal>
                          
			</div>
		)
	}
}







export default connect(({deviceStatus})=>({deviceStatus}))(EquipmentStatus);

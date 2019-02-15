import React from 'react';
import { connect } from 'dva';
import TabBar from '../../../components/tapBar'
import NavBar from '../../../components/navBar'
import {  List, Icon,ListView,WhiteSpace,Tabs,Badge,Modal,Checkbox,TextareaItem } from 'antd-mobile';
import { Carousel, WingBlank,ImagePicker } from 'antd-mobile';
import  './index.less'
import {routerRedux,withRouter} from 'dva/router'
import moment from 'moment'
// import Camera from '../../../components/camera'
import { createForm } from 'rc-form';
// import {cordovaCamera} from '../../../utils'
moment.locale('zh-cn');



const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const thumbIcon=require('../../../assets/icon/dpred/icon-设备报警.png');
const Item = List.Item;
const Brief = Item.Brief;

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: 1,
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: 2,
}];




class equipMaintenance extends React.Component {

  	componentDidMount(){
          this.props.dispatch({
               type:'equipmentMaintenance/updateState',
               payload:{
                    files:data,
                    modalImg:'',
                    modalVisible:false
               }
          })

  	}

     onChange = (files, type, index) => {
          console.log(files, type, index);
          this.props.dispatch({
               type:'equipmentMaintenance/updateState',
               payload:{files}
          });
      };
     onImageClick= (index, fs) => {
          console.log('onImageClick',index,fs)
          this.props.dispatch({
               type:'equipmentMaintenance/updateState',
               payload:{
                    modalImg: fs[index].url,
                    modalVisible:true  
               }
          });
     }
     closeModal=()=>{
          this.props.dispatch({
               type:'equipmentMaintenance/updateState',
               payload:{
                    modalVisible:false  
               }
          });
     }
     onAddImageClick = (e) => {
          // Modal.operation([
          //      { 
          //           text: '拍照', 
          //           onPress: () => {
          //                cordovaCamera.takePicture().then((res)=>{
          //                     this.props.dispatch({
          //                          type:'equipmentMaintenance/addToFiles',
          //                          payload:{
          //                               file: ({
          //                                    url: res,
          //                                    id: '333',
          //                               }),
          //                          }
          //                     })
          //                })
          //           } 
          //      },
          //      {    
          //           text: '从相册选择', 
          //           onPress: () => {
          //                cordovaCamera.openAlbum().then((res)=>{
          //                     this.props.dispatch({
          //                          type:'equipmentMaintenance/addToFiles',
          //                          payload:{
          //                               file: ({
          //                                    url: res,
          //                                    id: '333',
          //                               }),
          //                          }
          //                     })
          //                })
          //           }  
          //      },
          // ])

          e.preventDefault();


      };
	render(){
          // console.log(this.props)
          const { getFieldProps } = this.props.form;
          const {files,modalVisible,modalImg}=this.props.equipmentMaintenance

          const tabs = [
          { title: <Badge >要点</Badge> },
          { title: <Badge >拍照</Badge> },
          { title: <Badge >备注</Badge> }
          ];
          const equipMaintenance={
               Items1:[
                    {id:1,label:'污水箱液位'},
                    {id:2,label:'夹具液压油液位'},
                    {id:3,label:'卡爪液压油液位'},
                    {id:4,label:'丝杠导轨冷却机油液位'},
               ],
               Items2:[

               ],
               Items3:[

               ],


          }

          const Items1=equipMaintenance.Items1.map((item,index)=>{
               return(
                         <CheckboxItem key={item.id} onChange={() =>{}}>
                         {item.label}
                         </CheckboxItem>
                    )
          })
          const Items2=''
          const Items3=equipMaintenance.Items1.map((item,index)=>{
               return(
                    <List  className="my-list" key={item.id}>

                    </List>
                    )
          })


          



		return(

			<div style={{marginTop:'0.45rem'}}>
          		<NavBar>保养明细</NavBar>
          		<List  className="my-list">
          		<Item className="my-title-lg" extra="" 
          		onClick={() => {}}
          		align="middle" thumb={require('../../../assets/5.png')}  multipleLine>
          		保养项目：9073
          		<Brief>设备型号：#45-683</Brief>
          		<Brief>责任人：3班赵清风</Brief>
				
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
                              // dispatch({type:'equipMaintenance/getfixlog'})
                              break;
                              case 1:
                              // dispatch({type:'equipMaintenance/gethistory'})
                              break;
                              case 2:
                              // dispatch({type:'equipMaintenance/getspStore'})
                              break;
                              case 3:
                              // dispatch({type:'equipMaintenance/getfaq'})
                              break;
                         }
                          
                    }}
                    >
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '200px', backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>
                         <List  className="my-list">
                              {Items1}
                         </List>
                    </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center',backgroundColor: '#fff' }}>
                    <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) =>{this.onImageClick(index, fs)}}
                    selectable={files.length < 10}
                    onAddImageClick={this.onAddImageClick}
                    />
                    
                    </div>
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '200px', backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>
                         
                         <TextareaItem
                              {...getFieldProps('count', {
                              initialValue: '请输入...',
                              })}
                              rows={5}
                              count={100}
                         />
                    </div>
                    </div>
                    </Tabs>
                    </div>

                    <div style={{marginTop:'0.1rem'}}>
                    <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { 
                         console.log('onTabClick', index, tab);
                         switch(index) {
                              case 0:
                              // dispatch({type:'equipMaintenance/getfixlog'})
                              break;
                              case 1:
                              // dispatch({type:'equipMaintenance/gethistory'})
                              break;
                              case 2:
                              // dispatch({type:'equipMaintenance/getspStore'})
                              break;
                              case 3:
                              // dispatch({type:'equipMaintenance/getfaq'})
                              break;
                         }

                    }}
                    >
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '300px', backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>{Items1}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', backgroundColor: '#fff' }}>
                    
                    </div>
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '300px', backgroundColor: '#fff' }}>
                    <div style={{width:'100%'}}>
                         <TextareaItem
                              {...getFieldProps('count', {
                              initialValue: '计数功能,我的意见是...',
                              })}
                              rows={5}
                              count={100}
                         />
                    </div>
                    </div>
                    </Tabs>
                    </div>

                    </TabBar>
                    </div>

               <Modal
               visible={modalVisible}
               transparent
               closable
               onClose={this.closeModal}
               >
               <img src={modalImg} style={{ width: '100%' }}/>
               </Modal>

			</div>
		)
	}
}





export default (connect(({equipmentMaintenance})=>({equipmentMaintenance}))(createForm()(equipMaintenance)));

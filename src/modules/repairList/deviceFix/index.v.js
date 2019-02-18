import React from 'react';
import { connect } from 'dva';
import TabBar from '../../../components/tapBar'
import NavBar from '../../../components/navBar'
import { List, Icon, ListView, WhiteSpace, Tabs, Badge, Modal, Checkbox, Steps,InputItem } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import './index.less'
import { routerRedux, withRouter } from 'dva/router'
import { createForm } from 'rc-form'

import moment from 'moment'
moment.locale('zh-cn');

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const thumbIcon = require('../../../assets/icon/dpred/icon-设备报警.png');
const Item = List.Item;
const Brief = Item.Brief;
const Step = Steps.Step


class DeviceFix extends React.Component {
     componentDidMount() {


     }
     render() {
          const tabs = [
               { title: <Badge >问题</Badge> },
               { title: <Badge >结果</Badge> }
          ];
          const deviceFix = {
               Items1: [
                    { id: 1, label: '报警', name: '来源' },
                    { id: 2, label: '2019.1.1', name: '时间' },
                    { id: 3, label: '排屑机链条锁死,导致卡死', name: '描述' },

               ],
               Items2: [
                    { id: 1, label: '状态', name: '已处理' },
                    { id: 2, label: '2019.1.3', name: '时间' },
                    { id: 3, label: '更换排屑机链条,并将链条检查加入月度点检的点检项', name: '描述' },
               ],


          }
          const { getFieldProps } = this.props.form;
          const Items1 = deviceFix.Items1.map((item, index) => {
               return (
                    <InputItem
                         {...getFieldProps('reportRemarks')}
                         clear
                         type="text"
                         placeholder={item.name}
                    >{item.name}：</InputItem>
               )
          })
          const Items2 = deviceFix.Items2.map((item, index) => {
               return (
                    <Item key={item.id} onChange={() => { }} wrap>
                         {item.name}：<br />{item.label}
                    </Item>
               )
          })
          const customIcon = () => (
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
                    <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
                         <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
                         <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
                    </g>
               </svg>
          );
          







          return (
               <div style={{ marginTop: '0.45rem' }}>
                    <NavBar>设备维修</NavBar>


                    <List className="my-list">
                         <Item className="my-title-lg" extra=""
                              onClick={() => { }}
                              align="middle" thumb={require('../../../assets/5.png')} multipleLine>
                              设备：9073
          		<Brief>设备型号：#45-683</Brief>


                         </Item>
                    </List>

                    <div>

                         <TabBar>
                              <div style={{ marginTop: '1.6rem' }}>
                                   <div>
                                        <Steps direction="horizontal">
                                             <Step title="报修" icon={customIcon()} />
                                             <Step title="维修" icon={customIcon()} />
                                             <Step title="审核" icon={customIcon()} />
                                        </Steps>
                                   </div>
                                   <Tabs tabs={tabs}
                                        initialPage={0}
                                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                                        onTabClick={(tab, index) => {
                                             console.log('onTabClick', index, tab);
                                             switch (index) {
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
                                        <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', backgroundColor: '#fff' }}>
                                             <div style={{ width: '100%' }}>
                                                  <List className="my-list">
                                                       {Items1}
                                                  </List>
                                             </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', backgroundColor: '#fff' }}>
                                             <div style={{ width: '100%' }}>
                                                  <List className="my-list">
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





export default (connect(({ app}) => ({app}))(createForm()(DeviceFix)));

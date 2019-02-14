import React from 'react';
import { connect } from 'dva';
import TabBar from '../../components/tapBar'
import NavBar from '../../components/navBar'
import {  List, Icon,WhiteSpace } from 'antd-mobile';
import './index.less'

const Item = List.Item;
const Brief = Item.Brief;




class My extends React.Component {
   componentDidMount(){
       console.log("渲染my")

      this.props.dispatch({
        type:"app/updateState",
        payload:{
          hidden:false,
          selectedTab:'myTab'
        }
      })
    }

 
    render() {

      return (
        <TabBar>
          <NavBar>个人中心</NavBar>
          <div style={{marginTop:'0.45rem'}}>
              <List  className="my-list">
              <Item className="my-title-lg"
              extra="" 
              onClick={() => {}}
              align="middle" thumb={require('../../assets/icon/首页-icon-质量巡检@3x.png')}  multipleLine>
              张建国
              <Brief>冲压1科3班班长</Brief>
              </Item>
              </List>
              
              <List>
              <Item
              className="my-title-sm"
              extra='待完成'
              thumb={require('../../assets/icon/我的-icon-checking record.png')}
              arrow="horizontal"
              onClick={() => {}}
              >品质周报</Item>
              </List>
              <List>
              <Item
              className="my-title-sm"
              extra='待完成'
              thumb={require('../../assets/icon/我的-icon-checking record.png')}
              arrow="horizontal"
              onClick={() => {}}
              >加班审批</Item>
              </List>
              <List>
              <Item
              className="my-title-sm"
              extra='已完成'
              thumb={require('../../assets/icon/我的-icon-checking record.png')}
              arrow="horizontal"
              onClick={() => {}}
              >当班安全巡检</Item>
              </List>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>

              <List>
              <Item
              className="my-title-sm"
              arrow="horizontal"
              onClick={() => {}}
              thumb={require('../../assets/icon/我的-icon-changepassword.png')}
              >设置</Item>
              </List>
              <List>
              <Item
              className="my-title-sm"
              arrow="horizontal"
              onClick={() => {}}
              thumb={require('../../assets/icon/我的-icon-plan.png')}
              >关于</Item>
              </List>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>
              <WhiteSpace style={{backgroundColor:'#fff'}} size="lg"/>



          </div>
        </TabBar>
      );
    }
}
 

// export default Products;
export default connect(({app})=>({app}))(My);
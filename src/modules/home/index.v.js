import React from 'react';
import { connect } from 'dva';
import { Flex, WhiteSpace, List } from 'antd-mobile';
import {withRouter,routerRedux} from 'dva/router'
import style from './index2.less'
import './index.less'
import TapBar from '../../components/tapBar'
import NavBar from '../../components/navBar'
import { Grid } from 'antd-mobile';
import IconConfig from './IconConfig'
const Item = List.Item;
const Brief = Item.Brief;

class FlexExample extends  React.Component {
  componentDidMount(){
    console.log("渲染application")
    this.props.dispatch({
      type:"app/updateState",
      payload:{
        hidden:false,
        selectedTab:'applicationTab'
      }
    })
  }
  render(){
      const data_shebei = IconConfig.dpred.data_shebei;
      const data_zhiliang = IconConfig.dpred.data_zhiliang;
      

    return(
        <TapBar>
          <NavBar>应用</NavBar>
          <div className={style.pageContent}>
                <List  className="my-list">
                <Item  
                onClick={() => {}}
                align="middle" thumb={require('../../assets/icon/首页-设备管理@2x.png')}  multipleLine>
                设备管理
                </Item>
                </List>
                <Grid data={data_shebei} columnNum={4} onClick={_el => {console.log(_el);this.props.dispatch(routerRedux.push(_el.path))}}/>          
                <WhiteSpace  size="lg"/>
          </div>
          <div>
                <List  className="my-list">
                <Item  
                onClick={() => {}}
                align="middle" thumb={require('../../assets/icon/首页-质量@2x.png')}  multipleLine>
                质量管理
                </Item>
                </List>
                <Grid data={data_zhiliang} columnNum={4} />          
                <WhiteSpace  size="lg"/>
          </div>


        </TapBar>
      )
  }
}


















// export default Products;
// export default connect()(Life);
export default withRouter(connect(({app})=>({app}))(FlexExample))
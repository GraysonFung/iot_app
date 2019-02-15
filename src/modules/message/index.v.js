import React from 'react';
import { connect } from 'dva';
import TabBar from '../../components/tapBar'
import NavBar from '../../components/navBar'
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import DeviceAlertList from '../deviceAlertList/index.v'



class message extends React.Component {
  	componentDidMount(){
    	console.log("渲染message")

  	  this.props.dispatch({
  	    type:"app/updateState",
  	    payload:{
  	      hidden:false,
  	      selectedTab:'messageTab'
  	    }
  	  })
  	}
	render(){
		const tabs = [
		{ title: <Badge text={'2'}>质量报警</Badge> },
		{ title: <Badge text={'今日(5)'}>设备报警</Badge> },
		{ title: <Badge dot>保养维护</Badge> },
		];
		return(
			<TabBar>
				<NavBar>消息</NavBar>
				<div style={{marginTop:'0.45rem'}}>
				<Tabs tabs={tabs}
				initialPage={1}
				onChange={(tab, index) => { console.log('onChange', index, tab); }}
				onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
				>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor: '#fff' }}>
				质量报警
				</div>
				<div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', backgroundColor: '#fff' }}>
				<DeviceAlertList/>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '650px', backgroundColor: '#fff' }}>
				保养维护
				</div>
				</Tabs>
				</div>
			</TabBar>

		)
	}
}





// export default Products;
export default connect()(message);

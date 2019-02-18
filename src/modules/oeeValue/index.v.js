import {Component} from 'react';
import React from 'react';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import axios from 'axios';
import TabBar from '../../components/tapBar'
import NavBar from '../../components/navBar'

const Item = List.Item;

class DeviceOeeValue extends Component{
    constructor(props){
        super(props);
        this.state={
            oeeValue:{}
        }
    }

    render(){
        const { getFieldProps } = this.props.form;
        return(
            <TabBar>
                <NavBar>设备OEE</NavBar>
                <div style={{marginTop:'0.45rem'}}>
                    <List renderHeader={() => '数据输入'}>
                    <InputItem
                        {...getFieldProps('offPlanTime')}
                        // onChange={()=>{console.log("form",this.props.form.getFieldValue)}}
                        type="digit"
                        labelNumber="8"
                        placeholder="  请输入数据(20±)"
                        // ref={'offPlanTime'}
                    >计划停止时间(min)：</InputItem>
                    
                    <InputItem
                        // value = {this.state.oeeValue.beatPlan}
                        {...getFieldProps('beatPlan')}

                        clear
                        type="digit"
                        labelNumber="8"
                        placeholder="  请输入数据(1.2±)"
                        // ref={'beatPlan'}
                    >计划节拍(个/min)：</InputItem>
                    
                    <InputItem
                        // value = {this.state.oeeValue.output}
                        {...getFieldProps('output')}
                        clear
                        type="digit"
                        labelNumber="8"
                        placeholder="  请输入数据"
                        // ref={'output'}
                    >产量(个)：</InputItem>
                    
                    <InputItem
                        // value = {this.state.oeeValue.goodNums}
                        {...getFieldProps('goodNums')}
                        
                        clear
                        type="digit"
                        labelNumber="8"
                        placeholder="  请输入数据"
                        // ref={'goodNums'}
                    >良品数(个)：</InputItem>

                    <List.Item>
                        <div
                        style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                        onClick={this.handleClick}
                        >
                        统计
                        </div>
                    </List.Item>
                    </List>
            
                    <WhiteSpace />
                    <WhiteSpace />

                    <List renderHeader={() => 'OEE统计结果如下：'} className="oeeValue">
                        <Item extra={this.state.oeeValue.runRatio>0?(this.state.oeeValue.runRatio*100).toFixed(2)+"%":""}>时间开动率(%)</Item>
                        <Item extra={this.state.oeeValue.beatRatio>0?(this.state.oeeValue.beatRatio*100).toFixed(2)+"%":""}>速度开动(%)</Item>
                        <Item extra={this.state.oeeValue.preRunRatio>0?(this.state.oeeValue.preRunRatio*100).toFixed(2)+"%":""}>净开动率(%)</Item>
                        <Item extra={this.state.oeeValue.preRunPlanRatio>0?(this.state.oeeValue.preRunPlanRatio*100).toFixed(2)+"%":""}>性能开动率(%)</Item>
                        <Item extra={this.state.oeeValue.goodNumsRatio>0?(this.state.oeeValue.goodNumsRatio*100).toFixed(2)+"%":""}>良品率(%)</Item>
                        <Item extra={this.state.oeeValue.deviceMultipleRunRatio>0?(this.state.oeeValue.deviceMultipleRunRatio*100).toFixed(2)+"%":""}>设备综合开动率(%)</Item>
                    </List>    
                </div>
            </TabBar>
        )
    }


    handleClick = () => {

        console.log("form",this.props)
        const newOeeValue = this.state.oeeValue;
        
        const FieldsValue=this.props.form.getFieldsValue()
        //便于展示，真实场景可删除此范围代码
        //随机范围**************************************************************
        const num=Math.floor(Math.random()*5+0)-Math.floor(Math.random()*5+0);       //-5,5之间随机整数
        console.log(num);
        newOeeValue["onTime"] = newOeeValue["onTime"]+ num;
        newOeeValue["offTime"] = newOeeValue["offTime"]+ num;
        newOeeValue["beat"] = newOeeValue["beat"]+ (num/10);      //-0.5,0.5 随机数
        //随机范围**************************************************************

        // newOeeValue["offPlanTime"] = Number(this.refs.offPlanTime.state.value);
        // newOeeValue["beatPlan"] = Number(this.refs.beatPlan.state.value);
        // newOeeValue["output"] = Number(this.refs.output.state.value);
        // newOeeValue["goodNums"] = Number(this.refs.goodNums.state.value);

        newOeeValue["offPlanTime"] = Number(FieldsValue.offPlanTime);
        newOeeValue["beatPlan"] = Number(FieldsValue.beatPlan);
        newOeeValue["output"] = Number(FieldsValue.output);
        newOeeValue["goodNums"] = Number(FieldsValue.goodNums);
        

        //oee计算
        //负荷时间 = 生产时间-计划停止时间              runPlanTime  
        newOeeValue["runPlanTime"] = newOeeValue["onTime"] -newOeeValue["offPlanTime"] ;
        // 开动时间 = 负荷时间-停止时间                  runTime
        newOeeValue["runTime"] = newOeeValue["runPlanTime"] -newOeeValue["offTime"] ;
        
        //时间开动率=开动时间 / 负荷时间               runRatio 
        newOeeValue["runRatio"] = newOeeValue["runTime"]/newOeeValue["runPlanTime"] ;

        //速度开动 = 计划节拍 / 实际节拍               beatRatio    
        newOeeValue["beatRatio"] = newOeeValue["beatPlan"]/newOeeValue["beat"] ;
        //净开动率 = （实际节拍 * 产量）/开动时间       preRunRatio 
        newOeeValue["preRunRatio"] = newOeeValue["beat"]*newOeeValue["output"]/newOeeValue["runTime"] ;

        //性能开动率 = （计划节拍 * 产量）/ 开动时间      preRunPlanRatio
        newOeeValue["preRunPlanRatio"] = newOeeValue["beatPlan"]*newOeeValue["output"]/newOeeValue["runTime"] ;
        //良品率 = 良品数 / 产量                         goodNumsRatio
        newOeeValue["goodNumsRatio"] = newOeeValue["goodNums"]/newOeeValue["output"] ;
        //设备综合开动率 = 时间开动率*性能开动率*良品率       deviceMultipleRunRatio
        newOeeValue["deviceMultipleRunRatio"] = newOeeValue["runRatio"]*newOeeValue["preRunPlanRatio"]*newOeeValue["goodNumsRatio"] ;

        this.setState({
            oeeValue:newOeeValue
        },()=>console.log(this.state.oeeValue))
    }



    componentDidMount() {
        const _this = this;
        axios.get("http://localhost:8000/oeeValue.json")
            .then(function(response){
                const oeeJson = JSON.parse(response.request.response);

                //console.log(response.request.response);
                _this.setState({
                    oeeValue:oeeJson
                })
            })
    }


}


export default createForm()(DeviceOeeValue);
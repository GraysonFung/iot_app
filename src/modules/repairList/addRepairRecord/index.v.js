import { Component } from 'react'
import React from 'react'
import { connect } from 'dva'
import { List, InputItem, WhiteSpace, Steps } from 'antd-mobile'
import { createForm } from 'rc-form'
import { routerRedux, withRouter } from 'dva/router'

import axios from 'axios'
import { TapBar, NavBar } from '../../../components'

const Step = Steps.Step

const Item = List.Item;

class RepairOrder extends Component {
    componentDidMount() {

    }

    handleClick = () => {

        const FieldsValue = this.props.form.getFieldsValue()
        // newOeeValue["offPlanTime"] = Number(FieldsValue.offPlanTime);

    }

    render() {
        const customIcon = () => (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" className="am-icon am-icon-md">
                <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
                    <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
                    <path fill="#FFF" d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z" />
                </g>
            </svg>
        );
        const { getFieldProps } = this.props.form;

        return (
            <div>
                <TapBar>
                    <NavBar>应用</NavBar>
                    <div style={{ marginTop: '0.45rem' }}>
                        <WhiteSpace />
                        <Steps direction="horizontal">
                            <Step title="报修" icon={customIcon()} />
                            <Step title="维修" icon={customIcon()} />
                            <Step title="审核" icon={customIcon()} />
                        </Steps>
                        <List renderHeader={() => '报修单'} >
                            <InputItem
                                {...getFieldProps('reportPerson')}
                                type="text"
                                placeholder="  请选择报修人"
                                editable={false}
                            >报修人：</InputItem>

                            <InputItem
                                {...getFieldProps('reportRemarks')}
                                clear
                                type="text"
                                placeholder="  请输入报修描述"
                            >报修描述：</InputItem>

                            <InputItem
                                {...getFieldProps('reportPhoto')}
                                clear
                                type="text"
                                placeholder="  请上传报修图片"
                            >报修照片：</InputItem>

                            <InputItem
                                {...getFieldProps('reportTime')}
                                clear
                                type="text"
                                placeholder="  报修时间"
                            >报修时间：</InputItem>

                            <List.Item>
                                <div
                                    style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                                    onClick={this.handleClick}
                                >
                                    提交报修
                        </div>
                            </List.Item>
                        </List>
                        <WhiteSpace />
                        <List renderHeader={() => '维修单'} style={{display:''}}>
                            <InputItem
                                {...getFieldProps('repairPerson')}
                                type="text"
                                placeholder="  请选择报修人"
                            >维修人：</InputItem>

                            <InputItem
                                {...getFieldProps('repairRemarks')}
                                clear
                                type="text"
                                placeholder="  请输入报修描述"
                            // ref={'beatPlan'}
                            >维修描述：</InputItem>

                            <InputItem
                                // value = {this.state.oeeValue.output}
                                {...getFieldProps('repairPhoto')}
                                clear
                                type="text"
                                placeholder="  请上传报修图片"
                            // ref={'output'}
                            >维修照片：</InputItem>

                            <InputItem
                                // value = {this.state.oeeValue.goodNums}
                                {...getFieldProps('goodNums')}

                                clear
                                type="text"
                                placeholder="  报修时间"
                            // ref={'goodNums'}
                            >维修时间：</InputItem>

                            <List.Item>
                                <div
                                    style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                                    onClick={this.handleClick}
                                >
                                    提交维修
                        </div>
                            </List.Item>
                        </List>
                        <WhiteSpace />
                        <List renderHeader={() => '审核单'} style={{display:''}}>
                            <InputItem
                                {...getFieldProps('repairPerson')}
                                type="text"
                                placeholder="  请选择审核人"
                            >审核人：</InputItem>

                            <InputItem
                                {...getFieldProps('repairRemarks')}
                                clear
                                type="text"
                                placeholder="  请输入审核描述"
                            // ref={'beatPlan'}
                            >审核描述：</InputItem>

                            <InputItem
                                // value = {this.state.oeeValue.output}
                                {...getFieldProps('repairPhoto')}
                                clear
                                type="text"
                                placeholder="  请上传审核图片"
                            // ref={'output'}
                            >审核照片：</InputItem>

                            <InputItem
                                // value = {this.state.oeeValue.goodNums}
                                {...getFieldProps('goodNums')}

                                clear
                                type="text"
                                placeholder="  审核时间"
                            // ref={'goodNums'}
                            >审核时间：</InputItem>

                            <List.Item>
                                <div
                                    style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                                    onClick={this.handleClick}
                                >
                                    审核确认
                        </div>
                            </List.Item>
                        </List>
                        <WhiteSpace />


                    </div>
                </TapBar>
            </div>
        )
    }









}

const RepairOrderWrapper = createForm()(RepairOrder)
export default connect(({ repair }) => ({ repair }))(RepairOrderWrapper)
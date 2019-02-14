import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col, Button, Input, InputNumber, Select, DatePicker } from 'antd'

class Filter extends Component {

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, { filter }) => {
      if (err) return
      this.props.onSubmit(filter)
    });
  }

  inputRender = (inputType, id, options, placeholder, other) => {
    const {
      getFieldDecorator
    } = this.props.form

    if (inputType === 'text') {
      return getFieldDecorator(id, options)(
        <Input placeholder={`请输入${placeholder}`} />
      )
    }
    if (inputType === 'number') {
      return getFieldDecorator(id, options)(
        <InputNumber placeholder={`请输入${placeholder}`} />
      )
    }
    if (inputType === 'select') {
      return getFieldDecorator(id, options)(
        <Select placeholder={`请选择${placeholder}`} >
          {
            other instanceof Array && other.map(({id, name}) => (
              <Select.Option key={id} value={id}>{name}</Select.Option>
            ))
          }
        </Select>
      )
    }
    if (inputType === 'dateTimeRange') {
      return getFieldDecorator(id, options)(
        <DatePicker.RangePicker 
          showTime={{ format: 'HH:mm:ss' }}
          format="YYYY-MM-DD HH:mm:ss"
          placeholder={['开始时间', '结束时间']}
        />
      )
    }
  }

  render() {
    const {
      filters,
      enums,
      form
    } = this.props

    return (
      <Form onSubmit={this.handleSearch} >
        <Row gutter={24}>
          {
            filters.map(filter => (
              <Col span={8} key={filter[0]}>
                <Form.Item
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  label={filter[1]}
                >
                  {this.inputRender(filter[2], `filter.${filter[0]}`, undefined, filter[1], enums[filter[0]])}
                </Form.Item>
              </Col>
            ))
          }
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item>
              <Button
                style={{ float: 'right', margin: '3.5px' }}
                icon="redo"
                onClick={() => form.resetFields()}
              >重置</Button>
              <Button
                style={{ float: 'right', margin: '3.5px' }}
                icon="search"
                type="primary"
                htmlType="submit"
              >搜索</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    )
  }
}

Filter.propTypes = {
  filters: PropTypes.array.isRequired,
  enums: PropTypes.object,
  onSubmit: PropTypes.func
}

Filter = Form.create()(Filter)

export default Filter
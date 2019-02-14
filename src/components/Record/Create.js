import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Button,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Row,
  Col
} from "antd";

class Create extends Component {
  handleCreate = e => {
    e.preventDefault();
    this.props.form.validateFields((err, { record }) => {
      if (err) return;
      this.props.onSubmit(record);
    });
  };

  inputRender = (inputType, id, options, placeholder, fieldType, other) => {
    const { getFieldDecorator } = this.props.form;

    if (inputType === "text") {
      if (fieldType === "primary") {
        return getFieldDecorator(id, options)(
          <Input placeholder={`自动生成${placeholder}`} disabled />
        );
      } else {
        return getFieldDecorator(id, options)(
          <Input placeholder={`请输入${placeholder}`} />
        );
      }
    }
    if (inputType === "number") {
      return getFieldDecorator(id, options)(
        <InputNumber placeholder={`请输入${placeholder}`} />
      );
    }
    if (inputType === "select") {
      return getFieldDecorator(id, options)(
        <Select placeholder={`请选择${placeholder}`}>
          {other instanceof Array &&
            other.map(({ id, name }) => (
              <Select.Option key={id} value={id}>
                {name}
              </Select.Option>
            ))}
        </Select>
      );
    }
    if (inputType === "dateTime") {
      return fieldType === "createAt" 
        ? getFieldDecorator(id, options)(
          <DatePicker
            showTime={{ format: "HH:mm:ss" }}
            format="YYYY-MM-DD HH:mm:ss"
            placeholder={`自动生成创建时间`}
            disabled
          />
        )
        : getFieldDecorator(id, options)(
          <DatePicker
            showTime={{ format: "HH:mm:ss" }}
            format="YYYY-MM-DD HH:mm:ss"
            placeholder={`请选择${placeholder}`}
          />
        )
    }
  };

  render() {
    const { fields, enums, onBack } = this.props;

    return (
      <Form onSubmit={this.handleCreate}>
        {fields.map(field => (
          <Form.Item
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            label={field[1]}
          >
            {this.inputRender(
              field[2],
              `record.${field[0]}`,
              undefined,
              field[1],
              field[3],
              enums[field[0]]
            )}
          </Form.Item>
        ))}
        <Form.Item>
          <Row>
            <Col span={20} style={{ textAlign: "center" }}>
              <Button
                htmlType="submit"
                type="primary"
                style={{ marginRight: 5 }}
              >
                创建
              </Button>
              <Button onClick={onBack}>返回</Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    );
  }
}

Create.propTypes = {
  fields: PropTypes.array,
  enums: PropTypes.object,
  onSubmit: PropTypes.func,
  onBack: PropTypes.func
};

Create = Form.create()(Create);

export default Create;

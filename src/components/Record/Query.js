import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Button } from "antd";

class Query extends Component {
  componentDidMount() {}

  render() {
    const { fields, data, onBack, enums } = this.props;
    console.log(fields, data);
    console.log(enums);
    return (
      <Fragment>
        <Row>
          <Col offset={2} span={20}>
            {fields.map((item, index) => (
              <Row key={index}>
                <Col span={3} style={{ textAlign: "right" }}>
                  {<h4>{item[1]}：</h4>}
                </Col>
                <Col span={10}>{data[`${item[0]}`] || "无"}</Col>
              </Row>
            ))}
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Button onClick={onBack}>返回</Button>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Query;
Query.propTypes = {
  fields: PropTypes.array.isRequired
};

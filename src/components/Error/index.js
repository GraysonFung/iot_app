import React from 'react'
import { Button } from 'antd-mobile'

class Error extends React.Component {

  render() {
    const {
      title,
      desc,
      btns,
    } = this.props

    // const logoURL = errImgs[type] || errImgs.error

    return (
      <div>
        <div>
          {title && <div>{title}</div>}
          {desc && <div>{desc}</div>}
          {
            btns instanceof Array && btns.length > 0 && (
              <div>
                {btns.map((btn, idx) => (
                  <Button {...btn} key={idx}>{btn.label}</Button>
                ))}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

Error.defaultProps = {
    type: 'error',
    title: '访问出错啦～',
    desc: '',
    btns: [],
}

export default Error;
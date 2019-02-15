import React from 'react';
import F2 from '@antv/f2'
import { connect } from 'dva';
import NavBar from '../../../components/navBar'
import {  List,WhiteSpace } from 'antd-mobile';
import _  from 'lodash';
const Item = List.Item;
const Brief = Item.Brief;

class energyAnalysis extends React.Component {
  componentDidMount(){
    var data = [{
  time: '01',
  value: 65.5,
  type: '变动全CPU'
}, {
  time: '02',
  value: 67,
  type: '变动全CPU'
}, {
  time: '03',
  value: 66.3,
  type: '变动全CPU'
}, {
  time: '04',
  value: 69.2,
  type: '变动全CPU'
}, {
  time: '05',
  value: 68.7,
  type: '变动全CPU'
}, {
  time: '06',
  value: 69,
  type: '变动全CPU'
}, {
  time: '07',
  value: 68,
  type: '变动全CPU'
}, {
  time: '08',
  value: 67.2,
  type: '变动全CPU'
}, {
  time: '09',
  value: 69.3,
  type: '变动全CPU'
}, {
  time: '09',
  value: 69.3,
  type: '变动全CPU'
}, {
  time: '10',
  value: 67.3,
  type: '变动全CPU'
}, {
  time: '11',
  value: 68.2,
  type: '变动全CPU'
}, {
  time: '12',
  value: 65.5,
  type: '变动全CPU'
}, {
  time: '13',
  value: 66.8,
  type: '变动全CPU'
}, {
  time: '14',
  value: 67.3,
  type: '变动全CPU'
}, {
  time: '15',
  value: 68.7,
  type: '变动全CPU'
}, {
  time: '16',
  value: 66.9,
  type: '变动全CPU'
}, {
  time: '17',
  value: 68.5,
  type: '变动全CPU'
}, {
  time: '18',
  value: 67.6,
  type: '变动全CPU'
}, {
  time: '19',
  value: 68.8,
  type: '变动全CPU'
}, {
  time: '20',
  value: 66.9,
  type: '变动全CPU'
}, {
  time: '01',
  value: 67.3,
  type: '指标'
}, {
  time: '02',
  value: 67.3,
  type: '指标'
}, {
  time: '03',
  value: 67.3,
  type: '指标'
}, {
  time: '04',
  value: 67.3,
  type: '指标'
}, {
  time: '05',
  value: 67.3,
  type: '指标'
}, {
  time: '06',
  value: 67.3,
  type: '指标'
}, {
  time: '07',
  value: 67.3,
  type: '指标'
}, {  
  time: '08',
  value: 67.3,
  type: '指标'
}, {
  time: '09',
  value: 67.3,
  type: '指标'
},{
  time: '10',
  value: 67.3,
  type: '指标'
},{
  time: '11',
  value: 67.3,
  type: '指标'
},{
  time: '12',
  value: 67.3,
  type: '指标'
},{
  time: '13',
  value: 67.3,
  type: '指标'
},{
  time: '14',
  value: 67.3,
  type: '指标'
},{
  time: '15',
  value: 67.3,
  type: '指标'
},{
  time: '16',
  value: 67.3,
  type: '指标'
},{
  time: '17',
  value: 67.3,
  type: '指标'
},{
  time: '18',
  value: 67.3,
  type: '指标'
},{
  time: '19',
  value: 67.3,
  type: '指标'
},{
  time: '20',
  value: 67.3,
  type: '指标'
},{
  time: '01',
  value: 65,
  type: '下限'
}, {
  time: '02',
  value: 65,
  type: '下限'
}, {
  time: '03',
  value: 65,
  type: '下限'
}, {
  time: '04',
  value: 65,
  type: '下限'
}, {
  time: '05',
  value: 65,
  type: '下限'
}, {
  time: '06',
  value: 65,
  type: '下限'
}, {
  time: '07',
  value: 65,
  type: '下限'
}, {  
  time: '08',
  value: 65,
  type: '下限'
}, {
  time: '09',
  value: 65,
  type: '下限'
},{
  time: '10',
  value: 65,
  type: '下限'
},{
  time: '11',
  value: 65,
  type: '下限'
},{
  time: '12',
  value: 65,
  type: '下限'
},{
  time: '13',
  value: 65,
  type: '下限'
},{
  time: '14',
  value: 65,
  type: '下限'
},{
  time: '15',
  value: 65,
  type: '下限'
},{
  time: '16',
  value: 65,
  type: '下限'
},{
  time: '17',
  value: 65,
  type: '下限'
},{
  time: '18',
  value: 65,
  type: '下限'
},{
  time: '19',
  value: 65,
  type: '下限'
},{
  time: '20',
  value: 65,
  type: '下限'
},{
  time: '01',
  value: 70,
  type: '上限'
}, {
  time: '02',
  value: 70,
  type: '上限'
}, {
  time: '03',
  value: 70,
  type: '上限'
}, {
  time: '04',
  value: 70,
  type: '上限'
}, {
  time: '05',
  value: 70,
  type: '上限'
}, {
  time: '06',
  value: 70,
  type: '上限'
}, {
  time: '07',
  value: 70,
  type: '上限'
}, {  
  time: '08',
  value: 70,
  type: '上限'
}, {  
  time: '08',
  value: 70,
  type: '上限'
}, {  
  time: '09',
  value: 70,
  type: '上限'
}, {  
  time: '10',
  value: 70,
  type: '上限'
}, {  
  time: '11',
  value: 70,
  type: '上限'
}, {  
  time: '12',
  value: 70,
  type: '上限'
}, {  
  time: '13',
  value: 70,
  type: '上限'
}, {  
  time: '14',
  value: 70,
  type: '上限'
}, {  
  time: '15',
  value: 70,
  type: '上限'
}, {  
  time: '16',
  value: 70,
  type: '上限'
}, {  
  time: '17',
  value: 70,
  type: '上限'
}, {  
  time: '18',
  value: 70,
  type: '上限'
}, {  
  time: '19',
  value: 70,
  type: '上限'
}, {
  time: '20',
  value: 70,
  type: '上限'
}];
var chart = new F2.Chart({
  id: 'mountNode',
  pixelRatio: window.devicePixelRatio
});
chart.source(data, {
  time: {

  },
  value: {
    tickCount: 9,

  }
});
chart.axis('time', {
  line: null,
  label: function label(text, index, total) {
    var textCfg = {};
    if (index === 0) {
      textCfg.textAlign = 'left';
    } else if (index === total - 1) {
      textCfg.textAlign = 'right';
    }
    return textCfg;
  }
});
chart.axis('tem', {
  grid: function grid(text) {
    if (text === '0%') {
      return {
        lineDash: null,
        lineWidth: 1
      };
    }
  }
});
chart.legend({
  position: 'bottom',
  offsetY: -5
});
chart.line().position('time*value').color('type').shape('type', function(type) {
  if (type === '变动全CPU') {
    return 'line';
  }
  if (type === '指标') {
    return 'dash';
  }
  if (type === '上限') {
    return 'line';
  }
  if (type === '上限') {
    return 'line';
  }
});

chart.render();
  }


  render() {
    const data=[{
  time: '01',
  energy:6879,
  value: 65.5,
  type: '变动全CPU'
}, {
  time: '02',
  energy:6825,
  value: 67,
  type: '变动全CPU'
}, {
  time: '03',
  energy:6868,
  value: 66.3,
  type: '变动全CPU'
}, {
  time: '04',
  energy:6911,
  value: 69.1,
  type: '变动全CPU'
}, {
  time: '05',
  energy:6995,
  value: 68.7,
  type: '变动全CPU'
}, {
  time: '06',
  energy:6940,
  
  value: 69,
  type: '变动全CPU'
}, {
  time: '07',
  energy:6975,
  
  value: 68,
  type: '变动全CPU'
}, {
  time: '08',
  energy:6973,
  
  value: 67.2,
  type: '变动全CPU'
}, {
  time: '09',
  energy:6938,
  
  value: 69.3,
  type: '变动全CPU'
}, {
  time: '09',
  energy:6899,
  
  value: 69.3,
  type: '变动全CPU'
}, {
  time: '10',
  energy:6886,
  
  value: 67.3,
  type: '变动全CPU'
}, {
  time: '11',
  energy:6844,
  
  value: 68.2,
  type: '变动全CPU'
}, {
  time: '12',
  energy:6856,
  
  value: 65.5,
  type: '变动全CPU'
}, {
  time: '13',
  energy:6887,
  
  value: 66.8,
  type: '变动全CPU'
}, {
  time: '14',
  energy:6865,
  
  value: 67.3,
  type: '变动全CPU'
}, {
  time: '15',
  energy:6845,
  
  value: 68.7,
  type: '变动全CPU'
}, {
  time: '16',
  energy:6867,
  
  value: 66.9,
  type: '变动全CPU'
}, {
  time: '17',
  energy:6856,
  
  value: 68.5,
  type: '变动全CPU'
}, {
  time: '18',
  energy:6845,
  
  value: 67.6,
  type: '变动全CPU'
}, {
  time: '19',
  energy:6889,
  
  value: 68.8,
  type: '变动全CPU'
}, {
  time: '20',
  energy:6865,
  
  value: 66.9,
  type: '变动全CPU'
}]
    return (
      <div>
        <NavBar>能源报表</NavBar>
        <div style={{marginTop:'0.45rem'}}>
        <List  className="my-list">
        <Item className="my-title-lg" extra="" 
        onClick={() => {}}
        align="middle" thumb={require('../../../assets/5.png')}  multipleLine>
        缸体2#线
        <Brief>前段能源报表</Brief>     
        </Item>
        </List>

        <WhiteSpace/>
        <canvas id="mountNode" width="360px" height="320"></canvas>

        <List>
        {data.map(item=>(
          <Item extra={'CPU'+item.value}>
            2019年1月{item.time}日
            <Brief>加工用能:{item.energy}         产量:{parseInt(item.energy/item.value)}</Brief>

          </Item>
          ))}
        </List>
        </div>
      </div>
    );
  }
}










export default (connect(({})=>({}))(energyAnalysis));
import React from 'react';
import { connect } from 'dva';
import TabBar from '../../components/tapBar'
import NavBar from '../../components/navBar'
import {  List, Icon,WhiteSpace } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import {routerRedux,withRouter} from 'dva/router'
import getDeepValue from '../../utils/getDeepValue'






const F2 = require('@antv/f2');
const Item = List.Item;
const Brief = Item.Brief;
var data = [];


class pointStatus extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: ['1', '2', '3'],
			imgHeight: 176,
		}
	}
  	componentDidMount(){
          console.log(this.props);
          const {dispatch,equipmentStatus}=this.props
          const pointValue=equipmentStatus.nodes[0]?equipmentStatus.nodes[0].value:9

          F2.Animate.registerAnimation('lineUpdate', function(updateShape, animateCfg) {
            var cacheShape = updateShape.get('cacheShape'); // 该动画 shape 的前一个状态
            var cacheAttrs = cacheShape.attrs; // 上一个 shape 属性
            var oldPoints = cacheAttrs.points; // 上一个状态的关键点
            var newPoints = updateShape.attr('points'); // 当前 shape 的关键点
          
            var oldLength = oldPoints.length;
            var newLength = newPoints.length;
            var deltaLength = newLength - oldLength;
          
            var lastPoint = newPoints[newPoints.length - 1];
            for (var i = 0; i < deltaLength; i++) {
                oldPoints.push(lastPoint);
           }
          
           updateShape.attr(cacheAttrs);
           updateShape.animate().to({
                attrs: {
                   points: newPoints
              },
              duration: 800,
              easing: animateCfg.easing
          });
          });
          
          
          // 添加数据，模拟数据，可以指定当前时间的偏移的秒
          function getRecord(offset) {
             offset = offset || 0;
             return {
                time: new Date().getTime() + offset * 1000,
                value: pointValue
           };
          }
          
          data.push(getRecord(-2));
          data.push(getRecord(-1));
          data.push(getRecord());
          
          var chart = new F2.Chart({
             id: 'myChart',
             pixelRatio: window.devicePixelRatio
          });
          
          var defs = {
             time: {
                type: 'timeCat',
                mask: 'HH:mm:ss',
                range: [0, 1]
           },
           value: {
                tickCount: 5,
                min: 8
           }
          };
          chart.source(data, defs);
          chart.axis('time', {
             label: function label(text, index, total) {
                var textCfg = {
                   text: ''
              };
              if (index === 0) {
                   textCfg.textAlign = 'left';
                   textCfg.text = text;
              } else if (index === total - 1) {
                   textCfg.textAlign = 'right';
                   textCfg.text = text;
              }
              return textCfg;
          }
          });
          
          chart.line().position('time*value').animate({
             update: {
                animation: 'lineUpdate'
           }
          });
          
          chart.render();
          
          setInterval(function() {
             chart.changeData(data);
          }, 100);
  	}
	render(){

          const {name,code,status,nodes}=this.props.equipmentStatus
          const pointValue=nodes[0]?nodes[0].value:9
          function getRecord(offset) {
           offset = offset || 0;
           return {
            time: new Date().getTime() + offset * 1000,
            value: pointValue
            };
          }
          data.push(getRecord());
          // chart.changeData(data)

          if(data.length>50){
            data.shift()
            // chart.changeData(data)
          }






          
		return(
			<div style={{marginTop:'0.45rem'}}>
          		<NavBar>设备采集点状态</NavBar>
          		<List  className="my-list">
          		<Item className="my-title-lg" extra="" 
          		onClick={() => {}}
          		align="middle" thumb={require('../../assets/5.png')}  multipleLine>
          		采集点：		

              <div>{getDeepValue(nodes[0],'name')}</div>
              <Brief>地址：{getDeepValue(nodes[0],'address')}</Brief>
              <Brief>值：{getDeepValue(nodes[0],'value')}</Brief>
          		</Item>
          		</List>
               <canvas id="myChart" width="360" height="260"></canvas>
			</div>
		)
	}
}







export default connect(({equipmentStatus})=>({equipmentStatus}))(pointStatus);

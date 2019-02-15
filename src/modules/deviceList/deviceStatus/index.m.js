import modelExtend from 'dva-model-extend'
import {listModel} from '../../common/common'
import F2 from '@antv/f2'

//等模态框加载完再执行，否则定位不到包含在模态框里面的元素
function renderCanvans(){
    var data=[];
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
          
           
    function getRecord(offset) {
             offset = offset || 0;
             return {
                time: new Date().getTime() + offset * 1000,
                value: Math.random() + 10
             };
    }
          
          data.push(getRecord(-2));
          data.push(getRecord(-1));
          data.push(getRecord());
          
          var chart = new F2.Chart({
               id:'myChart',
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
          
          // setInterval(function() {
          //    data.push(getRecord());
          //    chart.changeData(data);
          // }, 1000);
          return {chart,chartSwitch:true}
}

const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});


export default modelExtend(listModel,{

  namespace: 'deviceStatus',

  state: {
    name:'',
    code:'',
    status:{},
    nodes:[],
    modalVisible:false,
    modalNum:0,
    chartSwitch:false,
    chart:{}
  },

  subscriptions: {

  },

  effects: {
    *drawChart({ payload }, { call, put }) {  // eslint-disable-line

        yield put({type:'updateState',payload})
        yield call(delay, 1000)
        yield put({type:'updateChart'})
        // console.log("hahah",myChart)
        // yield put({type:'updateState',payload:{chartSwitch:true}})
        
        
        
    }
  },

  reducers: {
    updateChart(state,{payload}){
      var myChart=renderCanvans();
      return {
        ...state,
        ...myChart
      }
    }
  },

});

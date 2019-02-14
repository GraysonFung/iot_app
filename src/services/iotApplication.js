import { graphql,upperFirst } from '../utils'

import { 
  generateQueryList,
  generateQueryRecord, 
  generateCreateRecord,
  generateUpdateRecord,
  generateDeleteRecord
} from './helpers'

export default {
  // 分页列表
  queryList(data) {
    let { NAME, TITLE, FIELDS, pagination, sort, filter } = data
    const outputs = [
      'totalCount',
      { nodes: FIELDS.map(field => field[0]) }
    ]
    FIELDS.forEach(field => {
      if (field[3] === 'foreign') {
        outputs[1].nodes.push({
          [`iot${upperFirst(field[0].slice(0, -2))}By${upperFirst(field[0])}`]: [ 'username' ]
        })
      }
    })
    filter = ``
    return generateQueryList({ NAME, TITLE, pagination, sort, filter, outputs })
  },
  // 查询记录
  queryRecord(data) {
    const { NAME, TITLE, RECORD, inputs } = data
    const outputs = RECORD.map(record => record[0])
    
    return generateQueryRecord({ NAME, TITLE, inputs, outputs })
  },
  // 创建记录
  createRecord(data) {
    const { NAME, TITLE, inputs } = data
    return generateCreateRecord({ NAME, TITLE, inputs })
  },
  // 更新记录
  updateRecord(data) {
    const { NAME, TITLE, inputs } = data
    return generateUpdateRecord({ NAME, TITLE, inputs })
  },
  // 删除记录
  deleteRecord(data) {
    const { NAME, TITLE, inputs } = data
    return generateDeleteRecord({ NAME, TITLE, inputs })
  },
  //查询枚举
  queryEnums() {
  return graphql(`
    query {
      allIotEnterprises {
        nodes {
          id
          name:username
        }
      }
      iotDictionaryById(id: "534e8935-9ea9-40fc-9929-0926b4bdbe5b") {
        iotDictionariesByParentId {
          nodes {
            id:code
            name
          }
        }
      }
    }
  `, {
    label: `获取枚举`,
    convertRes(res) {
      return {
        enterpriseId: res.allIotEnterprises.nodes,
        status: res.iotDictionaryById.iotDictionariesByParentId.nodes
      }
    },
  })
  },
}
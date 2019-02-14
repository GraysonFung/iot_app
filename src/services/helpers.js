import { graphql, hyphen, pluralize, upperFirst, singularize } from "../utils";

// 分页参数处理
export function generatePageParams(pagination) {
    return `
    first: ${pagination.pageSize}, 
    offset: ${(pagination.current - 1) * pagination.pageSize},
  `;
}

// 排序参数处理
export function generateSortParams(sort) {
    const { type, field } = sort;
    if (!type || !field) return "";
    return `orderBy: ${hyphen(field).toUpperCase()}_${
        type === "asc" ? "ASC" : "DESC"
    },`;
}

// 筛选参数处理
export function generateFilterParams(filter) {
    return filter;
}

// 输入参数处理
export function generateInputs(inputs) {
    let res = "";
    Object.keys(inputs).forEach(key => {
        // 过滤 undefined 情况
        if (inputs[key] !== undefined) {
            res += `
        ${key}: ${JSON.stringify(inputs[key])},`;
        }
    });
    return res;
}

// 输出参数处理
function generateOutputs(outputs) {
    let res = "";
    if (outputs instanceof Array) {
        outputs.forEach(key => {
            // 过滤 undefined 情况
            if (typeof key === "string") {
                res += `
          ${key}`;
            }
            if (typeof key === "object") {
                res += `
          ${generateOutputs(key)}`;
            }
        });
    } else {
        Object.keys(outputs).forEach(key => {
            res += `
        ${key} {
          ${generateOutputs(outputs[key])}
        }`;
        });
    }
    return res;
}

// 列表查询
export function generateQueryList(data, option) {
    const { NAME, TITLE, pagination, sort, filter, outputs } = data;
    return graphql(
        `
    query { 
      all${upperFirst(pluralize(NAME))}(
        ${generatePageParams(pagination)}
        ${generateSortParams(sort)}
        ${generateFilterParams(filter)}
      ) {
        ${generateOutputs(outputs)}
      }
    }
  `,
        option || {
            successTip: true,
            label: `获取${TITLE}列表`,
            convertRes(res) {
                return res[`all${upperFirst(pluralize(NAME))}`];
            }
        }
    );
}

// 查询记录处理
export function generateQueryRecord(data, option) {
    const { NAME, TITLE, inputs, outputs } = data;
    return graphql(
        `
    query { 
      ${singularize(NAME)}ById(id: "${inputs.id}") {
        ${generateOutputs(outputs)}
      }
    }
  `,
        option || {
            label: `获取${TITLE}详情`,
            convertRes(res) {
                return res[`${singularize(NAME)}ById`];
            }
        }
    );
}

// 创建记录处理
export function generateCreateRecord(data, option) {
    const { NAME, TITLE, inputs, outputs } = data;
    return graphql(
        `
    mutation { 
      create${upperFirst(singularize(NAME))}(input: {
        ${singularize(NAME)}: {
          ${generateInputs(inputs)}
        }
      }) {
        ${outputs ? generateInputs(outputs) : "clientMutationId"}
      }
    }
  `,
        option || {
            successTip: true,
            label: `创建${TITLE}`
        }
    );
}

// 更新记录处理
export function generateUpdateRecord(data, option) {
    const { NAME, TITLE, inputs, outputs } = data;
    console.log(inputs);
    return graphql(
        `
    mutation { 
      update${upperFirst(singularize(NAME))}ById(input: {
        id: "${inputs.id}"
        ${singularize(NAME)}Patch: {
          ${generateInputs(inputs)}
        }
      }) {
        ${outputs ? generateInputs(outputs) : "clientMutationId"}
      }
    }
  `,
        option || {
            successTip: true,
            label: `更新${TITLE}`
        }
    );
}

// 删除记录处理
export function generateDeleteRecord(data, option) {
    const { NAME, TITLE, inputs, outputs } = data;
    return graphql(
        `
    mutation { 
      delete${upperFirst(singularize(NAME))}ById(input: {
        id: "${inputs.id}"
      }) {
        ${outputs ? generateInputs(outputs) : "clientMutationId"}
      }
    }
  `,
        option || {
            successTip: true,
            label: `删除${TITLE}`
        }
    );
}

export default [
    {
        // 登录
        path: "/login",
        models: () => [import("../modules/login/index.m")],
        component: () => import("../modules/login/index.v")
    },
    {
        // 首页
        path: "/home",
        models: () => [import("../modules/home/index.m")],
        component: () => import("../modules/home/index.v")
    },
    {
        // 平台管理列表
        path: "/platform/list",
        models: () => [import("../modules/iotPlatform/index.m")],
        component: () => import("../modules/iotPlatform/index.v")
    },
    {
        // 平台管理查询
        path: "/platform/query",
        models: () => [import("../modules/iotPlatform/record/index.m")],
        component: () => import("../modules/iotPlatform/record/index.v")
    },
    {
        // 平台管理创建
        path: "/platform/create",
        models: () => [import("../modules/iotPlatform/record/index.m")],
        component: () => import("../modules/iotPlatform/record/index.v")
    },
    {
        // 平台管理更新
        path: "/platform/update",
        models: () => [import("../modules/iotPlatform/record/index.m")],
        component: () => import("../modules/iotPlatform/record/index.v")
    },

    {
        // 角色管理列表
        path: "/role/list",
        models: () => [import("../modules/iotRole/index.m")],
        component: () => import("../modules/iotRole/index.v")
    },
    {
        // 角色管理查询
        path: "/role/query",
        models: () => [import("../modules/iotRole/record/index.m")],
        component: () => import("../modules/iotRole/record/index.v")
    },
    {
        // 角色管理创建
        path: "/role/create",
        models: () => [import("../modules/iotRole/record/index.m")],
        component: () => import("../modules/iotRole/record/index.v")
    },
    {
        // 角色管理更新
        path: "/role/update",
        models: () => [import("../modules/iotRole/record/index.m")],
        component: () => import("../modules/iotRole/record/index.v")
    },

    {
        // 菜单管理列表
        path: "/menu/list",
        models: () => [import("../modules/iotMenu/index.m")],
        component: () => import("../modules/iotMenu/index.v")
    },
    {
        // 菜单管理查询
        path: "/menu/query",
        models: () => [import("../modules/iotMenu/record/index.m")],
        component: () => import("../modules/iotMenu/record/index.v")
    },
    {
        // 菜单管理创建
        path: "/menu/create",
        models: () => [import("../modules/iotMenu/record/index.m")],
        component: () => import("../modules/iotMenu/record/index.v")
    },
    {
        // 菜单管理更新
        path: "/menu/update",
        models: () => [import("../modules/iotMenu/record/index.m")],
        component: () => import("../modules/iotMenu/record/index.v")
    },

    {
        // 企业管理列表
        path: "/enterprise/list",
        models: () => [import("../modules/iotEnterprise/index.m")],
        component: () => import("../modules/iotEnterprise/index.v")
    },
    {
        // 企业管理查询
        path: "/enterprise/query",
        models: () => [import("../modules/iotEnterprise/record/index.m")],
        component: () => import("../modules/iotEnterprise/record/index.v")
    },
    {
        // 企业管理创建
        path: "/enterprise/create",
        models: () => [import("../modules/iotEnterprise/record/index.m")],
        component: () => import("../modules/iotEnterprise/record/index.v")
    },
    {
        // 企业管理更新
        path: "/enterprise/update",
        models: () => [import("../modules/iotEnterprise/record/index.m")],
        component: () => import("../modules/iotEnterprise/record/index.v")
    },
    {
        // 充值管理列表
        path: "/recharge/list",
        models: () => [import("../modules/iotRecharge/index.m")],
        component: () => import("../modules/iotRecharge/index.v")
    },
    {
        // 充值管理查询
        path: "/recharge/query",
        models: () => [import("../modules/iotRecharge/record/index.m")],
        component: () => import("../modules/iotRecharge/record/index.v")
    },
    {
        // 充值管理创建
        path: "/recharge/create",
        models: () => [import("../modules/iotRecharge/record/index.m")],
        component: () => import("../modules/iotRecharge/record/index.v")
    },
    {
        // 充值管理更新
        path: "/recharge/update",
        models: () => [import("../modules/iotApplication/record/index.m")],
        component: () => import("../modules/iotApplication/record/index.v")
    },

    {
        // 应用管理列表
        path: "/application/list",
        models: () => [import("../modules/iotApplication/index.m")],
        component: () => import("../modules/iotApplication/index.v")
    },
    {
        // 应用管理查询
        path: "/application/query",
        models: () => [import("../modules/iotApplication/record/index.m")],
        component: () => import("../modules/iotApplication/record/index.v")
    },
    {
        // 应用管理创建
        path: "/application/create",
        models: () => [import("../modules/iotApplication/record/index.m")],
        component: () => import("../modules/iotApplication/record/index.v")
    },
    {
        // 应用管理更新
        path: "/application/update",
        models: () => [import("../modules/iotApplication/record/index.m")],
        component: () => import("../modules/iotApplication/record/index.v")
    },

    {
        // 数据管理列表
        path: "/data/list",
        models: () => [import("../modules/iotData/index.m")],
        component: () => import("../modules/iotData/index.v")
    },
    {
        // 数据管理列表查询
        path: "/data/query",
        models: () => [import("../modules/iotData/record/index.m")],
        component: () => import("../modules/iotData/record/index.v")
    },
    {
        // 数据管理列表创建
        path: "/data/create",
        models: () => [import("../modules/iotData/record/index.m")],
        component: () => import("../modules/iotData/record/index.v")
    },
    {
        // 数据管理列表更新
        path: "/data/update",
        models: () => [import("../modules/iotData/record/index.m")],
        component: () => import("../modules/iotData/record/index.v")
    },

    {
        // 设备管理列表
        path: "/device/list",
        models: () => [import("../modules/iotDevice/index.m")],
        component: () => import("../modules/iotDevice/index.v")
    },
    {
        // 设备管理列表查询
        path: "/device/query",
        models: () => [import("../modules/iotDevice/record/index.m")],
        component: () => import("../modules/iotDevice/record/index.v")
    },
    {
        // 设备管理列表创建
        path: "/device/create",
        models: () => [import("../modules/iotDevice/record/index.m")],
        component: () => import("../modules/iotDevice/record/index.v")
    },
    {
        // 设备管理列表创建
        path: "/device/update",
        models: () => [import("../modules/iotDevice/record/index.m")],
        component: () => import("../modules/iotDevice/record/index.v")
    },

    {
        // 地址位管理列表
        path: "/point/list",
        models: () => [import("../modules/iotPoint/index.m")],
        component: () => import("../modules/iotPoint/index.v")
    },
    {
        // 地址位管理列表查询
        path: "/point/query",
        models: () => [import("../modules/iotPoint/record/index.m")],
        component: () => import("../modules/iotPoint/record/index.v")
    },
    {
        // 地址位管理列表创建
        path: "/point/create",
        models: () => [import("../modules/iotPoint/record/index.m")],
        component: () => import("../modules/iotPoint/record/index.v")
    },
    {
        // 地址位管理列表更新
        path: "/point/update",
        models: () => [import("../modules/iotPoint/record/index.m")],
        component: () => import("../modules/iotPoint/record/index.v")
    },

    {
        // 点检管理列表
        path: "/check/list",
        models: () => [import("../modules/iotCheck/index.m")],
        component: () => import("../modules/iotCheck/index.v")
    },
    {
        // 点检管理列表查询
        path: "/check/query",
        models: () => [import("../modules/iotCheck/record/index.m")],
        component: () => import("../modules/iotCheck/record/index.v")
    },
    {
        // 点检管理列表创建
        path: "/check/create",
        models: () => [import("../modules/iotCheck/record/index.m")],
        component: () => import("../modules/iotCheck/record/index.v")
    },
    {
        // 点检管理列表更新
        path: "/check/update",
        models: () => [import("../modules/iotCheck/record/index.m")],
        component: () => import("../modules/iotCheck/record/index.v")
    },

    {
        // 保养管理列表
        path: "/maintenance/list",
        models: () => [import("../modules/iotMaintenance/index.m")],
        component: () => import("../modules/iotMaintenance/index.v")
    },
    {
        // 保养管理列表查询
        path: "/maintenance/query",
        models: () => [import("../modules/iotMaintenance/record/index.m")],
        component: () => import("../modules/iotMaintenance/record/index.v")
    },
    {
        // 保养管理列表创建
        path: "/maintenance/create",
        models: () => [import("../modules/iotMaintenance/record/index.m")],
        component: () => import("../modules/iotMaintenance/record/index.v")
    },
    {
        // 保养管理列表更新
        path: "/maintenance/update",
        models: () => [import("../modules/iotMaintenance/record/index.m")],
        component: () => import("../modules/iotMaintenance/record/index.v")
    },

    {
        // 维修核查列表
        path: "/verification/list",
        models: () => [import("../modules/iotVerification/index.m")],
        component: () => import("../modules/iotVerification/index.v")
    },
    {
        // 维修核查列表查询
        path: "/verification/query",
        models: () => [import("../modules/iotVerification/record/index.m")],
        component: () => import("../modules/iotVerification/record/index.v")
    },
    {
        // 维修核查列表创建
        path: "/verification/create",
        models: () => [import("../modules/iotVerification/record/index.m")],
        component: () => import("../modules/iotVerification/record/index.v")
    },
    {
        // 维修核查列表更新
        path: "/verification/update",
        models: () => [import("../modules/iotVerification/record/index.m")],
        component: () => import("../modules/iotVerification/record/index.v")
    }

    ,
    {
        // 备件位管理列表
        path: "/spare_parts/list",
        models: () => [import("../modules/iotSpareParts/index.m")],
        component: () => import("../modules/iotSpareParts/index.v")
    },
    {
        // 备件位管理列表查询
        path: "/spare_parts/query",
        models: () => [import("../modules/iotSpareParts/record/index.m")],
        component: () => import("../modules/iotSpareParts/record/index.v")
    },
    {
        // 备件位管理列表创建
        path: "/spare_parts/create",
        models: () => [import("../modules/iotSpareParts/record/index.m")],
        component: () => import("../modules/iotSpareParts/record/index.v")
    },
    {
        // 备件位管理列表更新
        path: "/spare_parts/update",
        models: () => [import("../modules/iotSpareParts/record/index.m")],
        component: () => import("../modules/iotSpareParts/record/index.v")
    }

    ,
    {
        // 用户位管理列表
        path: "/user/list",
        models: () => [import("../modules/iotUser/index.m")],
        component: () => import("../modules/iotUser/index.v")
    },
    {
        // 用户位管理列表查询
        path: "/user/query",
        models: () => [import("../modules/iotUser/record/index.m")],
        component: () => import("../modules/iotUser/record/index.v")
    },
    {
        // 用户位管理列表创建
        path: "/user/create",
        models: () => [import("../modules/iotUser/record/index.m")],
        component: () => import("../modules/iotUser/record/index.v")
    },
    {
        // 用户位管理列表更新
        path: "/user/update",
        models: () => [import("../modules/iotUser/record/index.m")],
        component: () => import("../modules/iotUser/record/index.v")
    }


    ,
    {
        // 计划位管理列表
        path: "/plan/list",
        models: () => [import("../modules/iotPlan/index.m")],
        component: () => import("../modules/iotPlan/index.v")
    },
    {
        // 计划位管理列表查询
        path: "/plan/query",
        models: () => [import("../modules/iotPlan/record/index.m")],
        component: () => import("../modules/iotPlan/record/index.v")
    },
    {
        // 计划位管理列表创建
        path: "/plan/create",
        models: () => [import("../modules/iotPlan/record/index.m")],
        component: () => import("../modules/iotPlan/record/index.v")
    },
    {
        // 计划位管理列表更新
        path: "/plan/update",
        models: () => [import("../modules/iotPlan/record/index.m")],
        component: () => import("../modules/iotPlan/record/index.v")
    }
    // {
    //   // 成员管理
    //   path: '/system/member',
    //   models: () => import('../models/member'),
    //   component: () => import('./member'),
    // },
    // {
    //   // 菜单管理
    //   path: '/system/menu',
    //   models: () => import('../models/menu'),
    //   component: () => import('./menu'),
    // },
    // {
    //   // 字典管理
    //   path: '/system/dictionary',
    //   models: () => import('../models/dictionary'),
    //   component: () => import('./dictionary'),
    // },
    // {
    //   // 组织管理
    //   path: '/base_data/org',
    //   models: () => import('../models/org'),
    //   component: () => import('./org'),
    // },
    // {
    //   // 车间管理
    //   path: '/base_data/work_shop',
    //   models: () => import('../models/workShop'),
    //   component: () => import('./workShop'),
    // },
    // {
    //   // 产线管理
    //   path: '/base_data/product_line',
    //   models: () => import('../models/productLine'),
    //   component: () => import('./productLine'),
    // },
    // {
    //   // 设备管理
    //   path: '/base_data/equipment',
    //   models: () => import('../models/equipment'),
    //   component: () => import('./equipment'),
    // },
    // {
    //   // 设备类型
    //   path: '/base_data/equipment_type',
    //   models: () => import('../models/equipmentType'),
    //   component: () => import('./equipmentType'),
    // },
    // {
    //   // 设备文件
    //   path: '/base_data/equipment_file',
    //   models: () => import('../models/equipmentFile'),
    //   component: () => import('./equipmentFile'),
    // },
    // {
    //   // 采集方式
    //   path: '/base_data/collection_mode',
    //   models: () => import('../models/collectionMode'),
    //   component: () => import('./collectionMode'),
    // },
    // {
    //   // 采集点
    //   path: '/base_data/collection_point',
    //   models: () => import('../models/collectionPoint'),
    //   component: () => import('./collectionPoint'),
    // }, {
    //   // 采集点预警
    //   path: '/warning/point',
    //   models: () => import('../models/pointWarning'),
    //   component: () => import('./pointWarning'),
    // },
    // {
    //   // 预警反馈
    //   path: '/warning/feedback',
    //   models: () => import('../models/warningFeedback'),
    //   component: () => import('./warningFeedback'),
    // },
    // {
    //   // 预警推送
    //   path: '/warning/notify',
    //   models: () => import('../models/warningNotify'),
    //   component: () => import('./warningNotify'),
    // },
    // {
    //   // 预警记录
    //   path: '/warning/record',
    //   models: () => import('../models/warningRecord'),
    //   component: () => import('./warningRecord'),
    // },
    // {
    //   // 流程图
    //   path: '/graph/flowChart',
    //   // models: () => import('../models/flowChart'),
    //   component: () => import('./flowChart'),
    // },
    // {
    //   // 720全景
    //   path: '/graph/panorama',
    //   // models: () => import('../models/warningRecord'),
    //   component: () => import('./panorama'),
    // },
    // {
    //   // 图表设置
    //   path: '/graph/grafana',
    //   models: () => import('../models/grafana'),
    //   component: () => import('./grafana'),
    // }
];

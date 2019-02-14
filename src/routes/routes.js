export default [
    {
      path:'/oeeValue',
      models:()=>[],
      component:()=>import('../modules/oeeValue/index.v')
    },
    {
      path:'/message',
      models:()=>[import('../modules/message/deviceAlertList.m')],
      component:()=>import('../modules/message/index.v')
    },
    
    {
      path:'/my',
      models:()=>[],
      component:()=>import('../modules/my/index.v')
    },
    {
      path:'/deviceAlert',
      models:()=>[import('../modules/deviceAlertList/deviceAlert/index.m')],
      component:()=>import('../modules/deviceAlertList/deviceAlert/index.v')
    },
    {
      path:'/deviceAlert/fixlog',
      models:()=>[import('../modules/deviceAlertList/deviceAlert/index.m')],
      component:()=>import('../modules/deviceAlertList/deviceAlert/fixlog/index.v')
    },
    {
      path:'/deviceAlert/history',
      models:()=>[import('../modules/deviceAlertList/deviceAlert/index.m')],
      component:()=>import('../modules/deviceAlertList/deviceAlert/history/index.v')
    },
    {
      path:'/deviceAlert/spStore',
      models:()=>[import('../modules/deviceAlertList/deviceAlert/index.m')],
      component:()=>import('../modules/deviceAlertList/deviceAlert/spStore/index.v')
    },
    {
      path:'/deviceAlert/faq',
      models:()=>[import('../modules/deviceAlertList/deviceAlert/index.m')],
      component:()=>import('../modules/deviceAlertList/deviceAlert/faq/index.v')
    },
    {
      path:'/equipmentFixList',
      models:()=>[import('../modules/equipmentFixList/index.m')],
      component:()=>import('../modules/equipmentFixList/index.v')
    },
    {
      path:'/equipmentFix',
      models:()=>[],
      component:()=>import('../modules/equipmentFixList/equipmentFix/index.v')
    },
    {
      path:'/equipMaintenanceList',
      models:()=>[import('../modules/equipMaintenanceList/index.m')],
      component:()=>import('../modules/equipMaintenanceList/index.v')
    },
    {
      path:'/equipMaintenance',
      models:()=>[import('../modules/equipMaintenanceList/equipMaintenance/index.m')],
      component:()=>import('../modules/equipMaintenanceList/equipMaintenance/index.v')
    },
    {
      path:'/energyAnalysisList',
      models:()=>[import('../modules/energyAnalysisList/index.m')],
      component:()=>import('../modules/energyAnalysisList/index.v')
    },
    {
      path:'/energyAnalysis',
      models:()=>[],
      component:()=>import('../modules/energyAnalysisList/energyAnalysis/index.v')
    },
    {
      path:'/equipmentList',
      models:()=>[import('../modules/equipmentList/index.m')],
      component:()=>import('../modules/equipmentList/index.v')
    },
    {
      path:'/equipmentStatus',
      models:()=>[import('../modules/equipmentList/equipmentStatus/index.m')],
      component:()=>import('../modules/equipmentList/equipmentStatus/index.v')
    },     

    {
      path:'/',
      models:()=>[],
      component:()=>import('../modules/home/index.v')
    },

];

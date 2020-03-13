var projectList = [
  {
    name: '团队组建',
    date: '2017/03',
    description:
      '2017年3月giscafer入职，正好扩招，前端开始组建团队，人数从1个增加到7个'
  },
  {
    name: 'IPS',
    date: '2017/04',
    description: '智能调度系统（5人+）',
    url: 'https://core.1ziton.com'
  },
  {
    name: '大前端组',
    date: '2017/05',
    description:
      'Web前端组与App开发组合并为大前端，技术栈Web为Angular，App为Ionic（团队人数达11+，APP开发3人，Web约7~9人）'
  },
  {
    name: 'CMP',
    date: '2017/06',
    description: '承运商管理系统（2人）',
    url: 'https://cmp.1ziton.com'
  },
  {
    name: 'BOSS',
    date: '2017/09',
    description: '财务结算系统（3人）',
    url: 'https://boss.1ziton.com'
  },
  {
    name: 'BMS',
    date: '2017/08',
    description: '商家管理平台（3人）',
    url: 'https://bms.1ziton.com'
  },
  {
    name: '新家装通 v5.0',
    date: '2017/06',
    description: '原生技术栈App家装通使用Ionic重构（5人，21天上线）',
    url: 'http://jzt.1ziton.com'
  },
  {
    name: '新家装通 v6.0',
    date: '2018/01',
    description: '家装通全面改版（2人）',
    url: 'http://jzt.1ziton.com'
  },
  {
    name: '直营IPS',
    date: '2017/10',
    description: '直营网点系统（2人）',
    url: 'https://self.1ziton.com'
  },
  {
    name: 'WMS v2.0',
    date: '2017/11',
    description: '仓储管理系统（2人+）',
    url: 'https://wms.1ziton.com'
  },
  {
    name: '官网 v2.0',
    date: '2018/01',
    description:
      '一智通官网重构，从PHP技术栈重构为Java技术栈，前端用ng1.x，为了兼容老浏览器（3人+）',
    url: 'https://www.1ziton.com'
  },
  {
    name: '数据大屏',
    date: '2018/04',
    description: '数据大屏展示系统（畅神1人）',
    url:
      'https://user-images.githubusercontent.com/8676711/40115038-b4f1a9a8-5941-11e8-9c48-d9dfeb629c32.png'
  },
  {
    name: 'SCM v2.0',
    date: '2018/06',
    description: 'SCM2.0，重构TMS桌面端到Web端，整合业务（2~4人浮动）'
  },
  {
    name: 'BMS v2.0',
    date: '2018/08',
    description: 'BMS2.0前端改版，优化体验（3人）'
  },
  {
    name: 'WMS v3.0',
    date: '2018/09',
    description: 'WMS3.0启动开发（3人）'
  },
  {
    name: 'WMS PDA',
    date: '2018/09',
    description: 'WMS PDA启动开发，App技术栈转为React Native （vision 1人）'
  },
  {
    name: '方米立临时官网',
    date: '2018/12',
    description: 'giscafer 一人一天开发的工具网站（Node.js+MongoDB+LayUI）',
    url: 'https://yanshuo.io/assets/player/?deck=5c6b5d5da91c9300548b8083#/'
  },
  {
    name: '方米立小程序',
    date: '2018/12',
    description: '使用Taro开发方米立家居电商小程序（2人）'
  },
  {
    name: 'OA考勤小程序',
    date: '2018/12',
    description: 'OA上班打卡和考勤统计小程序版本（Taro）'
  },
  {
    name: '方米立运营端',
    date: '2018/12',
    description: '方米立运营端管理系统（2人）',
    url: 'https://yunying.fangmili.com'
  },
  {
    name: '数据平台系统',
    date: '2018/10',
    description: '数据平台2.0版本（前期1人，风亮）',
    url: 'https://bigdata.1ziton.com'
  },
  {
    name: '小智哥App',
    date: '2019/04',
    description: '小智哥 App （React Native技术栈，2~3人）'
  },
  {
    name: '小智哥运营端',
    date: '2019/04',
    description: '小智哥运营管理系统（主要是大罗（妹子）1人负责）',
    url: 'https://xiaozhige.1ziton.com'
  },
  {
    name: '方米立 v1.4',
    date: '2019/05',
    description: '分销小C端功能上线（2人）'
  },
  {
    name: 'CI/CD流程',
    date: '2019/06',
    description:
      '前端工程化建设，DevOps 流程搭建搭建，14+ 项目集成、QQ机器人消息推送到群（giscafer + 运维配合，断断续续2周）',
    url: 'https://github.com/giscafer/front-end-manual/issues/26'
  },
  {
    name: '官网改版',
    date: '2019/07',
    description: '前端十几个静态页面开发，改版上线（3人，一周上线）',
    url: 'http://www.1zton.com'
  },
  {
    name: '小智哥商家端v1.0',
    date: '2019/07',
    description: '小智哥商家端Web管理系统开发，前端（主2人，资源灵活支撑）'
  },
  {
    name: 'Pixelmon前端解决方案',
    date: '2019/08',
    description: '组件库、物料、模板',
    url: 'https://github.com/1ziton/pixelmon'
  },
  {
    name: '可视化地图排班工具',
    date: '2019/10',
    description:
      '基于地图的可视化运单操作，运单定位打点，地图工具框选，选择分配师傅，实时预约、分配、取消分配等，使得运单分配更合理和高效'
  },
  {
    name: '公司10月开始欠薪',
    date: '一智通倒闭过程',
    description:
      '2019年10月开始欠经理工资，11月开始欠员工工资，2020年1月4号强制关门停工，提前春节放假，后来CEO陆续说推迟几次时间说复工，大概有4次变更复工时间。最后一次是2020年3月16日，3月13日晚，CEO微信群说没钱，不开工了，工资也不发。将近200人劳动仲裁'
  },
  {
    name: '请偿还劳动人民的血汗钱啊！！！',
    date: 'End',
    description:
      '善良的建议：如果一家公司延迟发工资了，并且不是第一次，就趁早离职'
  }
];

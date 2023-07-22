import dayjs from 'dayjs';

const qualityCategory = ['视频类', '图文类', '纯文本'];
const qualityName = ['历史导入', '内容版权', '敏感内容', '商业品牌'];

const serviceName = [
  '漏斗分析',
  '用户分布',
  '资源分发',
  '用户画像分析',
  '事件分析',
];

const serviceDescriptions = [
  '用户行为分析之漏斗分析模型是企业实现精细化运营、进行用户行为分析的重要数据分析模型。 ',
  '快速诊断用户人群，地域细分情况，了解数据分布的集中度，以及主要的数据分布的区间段是什么。',
  '移动端动态化资源分发解决方案。提供稳定大流量服务支持、灵活定制的分发圈选规则，通过离线化预加载。  ',
  '用户画像就是将典型用户信息标签化，根据用户特征、业务场景和用户行为等信息，构建一个标签化的用户模型。 ',
  '事件分析即可进行筛选、分组、聚合的灵活多维数据分析。详情请点击卡片。',
];

const rulesName = [
  '内容屏蔽规则',
  '内容置顶规则',
  '内容加权规则',
  '内容分发规则',
  '多语言文字符号识别',
];

const rulesDescription = [
  '用户在执行特定的内容分发任务时，可使用内容屏蔽规则根据特定标签，过滤内容集合。  ',
  '该规则支持用户在执行特定内容分发任务时，对固定的几条内容置顶。',
  '选定内容加权规则后可自定义从不同内容集合获取内容的概率。',
  '内容分发时，对某些内容需要固定在C端展示的位置。',
  '精准识别英语、维语、藏语、蒙古语、朝鲜语等多种语言以及emoji表情形态的语义识别。',
];
const getQualityCard = () => {
  // const { list } = Mock.mock({
  //   'list|10': [
  //     {
  //       title: () =>
  //         `${qualityCategory[Math.floor(Math.random() * qualityCategory.length)]}-${qualityName[Math.floor(Math.random() * qualityName.length)]}`,
  //       time: () =>
  //         dayjs()
  //           .subtract(Math.floor(Math.random() * 30), 'days')
  //           .format('YYYY-MM-DD HH:mm:ss'),
  //       qualityCount: () => Math.floor(Math.random() * (500 - 100 + 1)) + 100,
  //       randomCount: () => Math.floor(Math.random() * 101),
  //       duration: () => Math.floor(Math.random() * 201),
  //     },
  //   ],
  // });
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      title: () =>
        `${
          qualityCategory[Math.floor(Math.random() * qualityCategory.length)]
        }-${qualityName[Math.floor(Math.random() * qualityName.length)]}`,
      time: () =>
        dayjs()
          .subtract(Math.floor(Math.random() * 30), 'days')
          .format('YYYY-MM-DD HH:mm:ss'),
      qualityCount: Math.floor(Math.random() * (500 - 100 + 1)) + 100,
      randomCount: Math.floor(Math.random() * 101),
      duration: Math.floor(Math.random() * 201),
    });
  }
  return list;
};

const getServiceCard = () => {
  // const { list } = Mock.mock({
  //   'list|10': [
  //     {
  //       icon: () => Mock.Random.natural(0, serviceName.length - 1),
  //       title: function () {
  //         return serviceName[this.icon];
  //       },
  //       description: function () {
  //         return serviceDescriptions[this.icon];
  //       },
  //       status: () => Mock.Random.natural(0, 2),
  //     },
  //   ],
  // });
  const list = [];
  const icon = Math.floor(Math.random() * serviceName.length);
  for (let i = 0; i < 10; i++) {
    list.push({
      icon,
      title: serviceName[icon],
      description: serviceDescriptions[icon],
      status: Math.floor(Math.random() * 3),
    });
  }
  return list;
};

const getRulesCard = () => {
  // const { list } = Mock.mock({
  //   'list|10': [
  //     {
  //       index: () => Mock.Random.natural(0, rulesName.length - 1),
  //       title: function () {
  //         return rulesName[this.index];
  //       },
  //       description: function () {
  //         return rulesDescription[this.index];
  //       },
  //       status: () => Mock.Random.natural(0, 1),
  //     },
  //   ],
  // });
  const list = [];
  for (let i = 0; i < 10; i++) {
    const index = Math.floor(Math.random() * rulesName.length);
    const title = rulesName[index];
    const description = rulesDescription[index];
    const status = Math.floor(Math.random() * 2);
    list.push({ index, title, description, status });
  }
  return list;
};

// setupMock({
//   setup: () => {
//     Mock.mock(new RegExp('/api/cardList'), () => {
//       return {
//         quality: getQualityCard(),
//         service: getServiceCard(),
//         rules: getRulesCard(),
//       };
//     });
//   },
// });

export const cardMockList = {
  quality: getQualityCard(),
  service: getServiceCard(),
  rules: getRulesCard(),
};

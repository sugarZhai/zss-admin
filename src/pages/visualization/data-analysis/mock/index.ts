import { randomNumber } from '@/utils/index';

const mockLine = (name) => {
  const result = new Array(12).fill(0).map(() => ({
    y: randomNumber(20, 100),
  }));
  return result.map((item, index) => ({
    ...item,
    x: index,
    name,
  }));
};

const mockPie = () => {
  return new Array(3).fill(0).map((_, index) => ({
    name: ['纯文本', '图文类', '视频类'][index],
    count: randomNumber(20, 100),
  }));
};
const getTimeLine = (name) => {
  const timeArr = new Array(12).fill(0).map((_, index) => {
    const time = index * 2;
    return time < 9 ? `0${time}:00` : `${time}:00`;
  });
  return new Array(12).fill(0).map((_, index) => ({
    name,
    time: timeArr[index],
    count: randomNumber(1000, 5000),
    rate: randomNumber(0, 100),
  }));
};
export const overviewList = (params) => {
  const { type } = params;
  const chartList = () => {
    if (type === 'pie') {
      return mockPie();
    } else if (type === 'line') {
      return [...mockLine('类目1'), ...mockLine('类目2')];
    }
    return mockLine('类目1');
  };
  return {
    count: randomNumber(1000, 10000),
    increment: Math.random() < 0.5,
    diff: randomNumber(100, 1000),
    chartType: type,
    chartData: chartList(),
  };
};
// setupMock({
//   setup: () => {
// Mock.mock(new RegExp('/api/data-analysis/overview'), (params) => {
//   const { type } = qs.parseUrl(params.url).query;
//   return Mock.mock({
//     count: () => randomNumber(1000, 10000),
//     increment: () => Math.random() < 0.5,
//     diff: () => randomNumber(100, 1000),
//     chartType: type,
//     chartData: () => {
//       if (type === 'pie') {
//         return mockPie();
//       } else if (type === 'line') {
//         return [...mockLine('类目1'), ...mockLine('类目2')];
//       }
//       return mockLine('类目1');
//     },
//   });
// });

// Mock.mock(new RegExp('/api/data-analysis/content-publishing'), () => {
//   return [
//     ...getTimeLine('纯文本'),
//     ...getTimeLine('视频类'),
//     ...getTimeLine('图文类'),
//   ];
// });

// Mock.mock(new RegExp('/api/data-analysis/author-list'), () => {
//   return Mock.mock({
//     'list|8': [
//       {
//         'id|+1': 1,
//         author: () =>
//           Mock.Random.pick([
//             '用魔法打败魔法',
//             '王多鱼',
//             'Christopher',
//             '叫我小李好了',
//             '陈皮话梅糖',
//             '碳烤小肥羊',
//           ]),
//         time: function () {
//           return new Array(12).fill(0).map((_, index) => {
//             const time = index * 2;
//             return time < 9 ? `0${time}:00` : `${time}:00`;
//           })[this.id % 12];
//         },
//         contentCount: () => Mock.Random.natural(1000, 5000),
//         clickCount: () => Mock.Random.natural(5000, 30000),
//       },
//     ],
//   });
// });
//   },
// });

const authors = [
  '用魔法打败魔法',
  '王多鱼',
  'Christopher',
  '叫我小李好了',
  '陈皮话梅糖',
  '碳烤小肥羊',
];

export const publishingList = [
  ...getTimeLine('纯文本'),
  ...getTimeLine('视频类'),
  ...getTimeLine('图文类'),
];
export const generateList = () => {
  const list = [];

  for (let i = 0; i < 8; i++) {
    const id = i + 1;
    const author = authors[randomNumber(0, authors.length - 1)];
    const time = new Array(12).fill(0).map((_, index) => {
      let t: any = index * 2;
      t = t < 10 ? `0${t}:00` : `${t}:00`;
      return t;
    })[id % 12];

    const contentCount = randomNumber(1000, 5000);
    const clickCount = randomNumber(5000, 30000);

    list.push({ id, author, time, contentCount, clickCount });
  }

  return list;
};

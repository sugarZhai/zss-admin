import defaultSettings from '../settings.json';
import { generatePermission } from '@/routes';
export interface GlobalState {
  settings?: typeof defaultSettings;
  userInfo?: {
    name?: string;
    avatar?: string;
    job?: string;
    organization?: string;
    location?: string;
    email?: string;
    jobName: string;
    organizationName: string;
    locationName: string;
    introduction: string;
    personalWebsite: string;
    verified: boolean;
    phoneNumber?: any;
    accountId?: any;
    registrationTime: '2023-07-26 12:22:34';
    permissions: Record<string, string[]>;
  };
  userLoading?: boolean;
  messageList?: any;
  lastNewsList?: any;
  myTeamList?: any;
}
const newsList = () =>
  new Array(8).fill(null).map((_item, index) => ({
    id: index,
    title: '王多鱼审核了图文内容： 2021年，你过得怎么样？',
    description:
      '新华网年终特别策划：《这一年，你过得怎么样？》回访那些你最熟悉的“陌生人”带你重温这难忘的2021年回顾我们共同记忆中的生动故事！',
    avatar:
      '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  }));
//我的团队
const teamList = () =>
  new Array(4).fill(null).map((_, index) => ({
    name: [
      '火山引擎智能应用团队',
      '企业级产品设计团队',
      '前端/UE小分队',
      '内容识别插件小分队',
    ][index],
    avatar: [
      '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
      '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
    ][index],
    members: Math.floor(Math.random() * 1000) + 1,
  }));

const initialState: GlobalState = {
  settings: defaultSettings,
  userInfo: {
    name: '翟爽爽',
    avatar:
      'https://lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
    email: 'wangliqun@email.com',
    job: 'frontend',
    jobName: '前端开发工程师',
    organization: 'Frontend',
    organizationName: '前端',
    location: 'beijing',
    locationName: '北京',
    introduction: '王力群并非是一个真实存在的人。',
    personalWebsite: 'https://www.arco.design',
    verified: true,
    phoneNumber: 17766236789,
    accountId: 12345678,
    registrationTime: '2023-07-26 12:22:34',
    permissions: generatePermission('admin'),
  },
  messageList: [
    {
      id: 1,
      type: 'message',
      title: '郑曦月',
      subTitle: '的私信',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
      content: '审批请求已发送，请查收',
      time: '今天 12:30:01',
    },
    {
      id: 2,
      type: 'message',
      title: '宁波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content:
        '此处 bug 已经修复，如有问题请查阅文档或者继续 github 提 issue～',
      time: '今天 12:30:01',
    },
    {
      id: 3,
      type: 'message',
      title: '宁波',
      subTitle: '的回复',
      avatar:
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
      content: '此处 bug 已经修复',
      time: '今天 12:20:01',
    },

    {
      id: 4,
      type: 'todo',
      title: '域名服务',
      content: '内容质检队列于 2021-12-01 19:50:23 进行变更，请重新',
      tag: {
        text: '未开始',
        color: 'gray',
      },
    },
    {
      id: 5,
      type: 'todo',
      title: '内容审批通知',
      content: '宁静提交于 2021-11-05，需要您在 2011-11-07之前审批',
      tag: {
        text: '进行中',
        color: 'arcoblue',
      },
    },
    {
      id: 6,
      type: 'notice',
      title: '质检队列变更',
      content: '您的产品使用期限即将截止，如需继续使用产品请前往购…',
      tag: {
        text: '即将到期',
        color: 'red',
      },
    },
    {
      id: 7,
      type: 'notice',
      title: '规则开通成功',
      subTitle: '',
      avatar: '',
      content: '内容屏蔽规则于 2021-12-01 开通成功并生效。',
      tag: {
        text: '已开通',
        color: 'green',
      },
    },
  ],
  lastNewsList: newsList(),
  myTeamList: teamList(),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'update-settings': {
      const { settings } = action.payload;
      return {
        ...state,
        settings,
      };
    }
    case 'update-userInfo': {
      const { userInfo = initialState.userInfo, userLoading } = action.payload;
      return {
        ...state,
        userLoading,
        userInfo,
      };
    }
    default:
      return state;
  }
}

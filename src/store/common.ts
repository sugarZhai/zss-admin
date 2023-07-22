import { generatePermission } from '@/routes';

const defaultState = {
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
  isLogin: false,
};

const commonReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'set_user_Info':
      return {
        ...state,
        userInfo: action.data,
        isLogin: action.data ? true : false,
      };
    default:
      return state;
  }
};

export default commonReducer;

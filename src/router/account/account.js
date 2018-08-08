import { Content } from 'layout/'

import { Account } from 'views/'

export default {
  path: 'manage',
  name: '用户管理',
  icon: 'inbox',
  component: Content,
  redirect: '/account/manage/list',
  children: [{
    path: 'list',
    name: '用户列表',
    icon: 'reorder',
    component: Account.List
  }, {
    path: 'reset-pw',
    name: '重置密码',
    icon: 'reorder',
    component: Account.ResetPassword
  }, {
    path: 'update-info',
    name: '修改信息',
    icon: 'reorder',
    component: Account.UpdateInfo
  }]
}

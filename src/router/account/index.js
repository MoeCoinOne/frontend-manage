import { Home } from 'layout/'

import account from './account'

export default {
  path: '/account',
  name: '用户相关',
  icon: 'inbox',
  component: Home,
  redirect: '/account/manage',
  children: [account]
}

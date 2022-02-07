/**
 * 环境配置封装
 * 获取当前环境变量
 */

const env = import.meta.env.MODE || 'prod'
const Envconfig = {
  development: {
    baseApi: '/',
    mockApi: 'http://yapi.situdata.com/mock/733'
  },
  test: {
    baseApi: '/',
    mockApi: 'http://yapi.situdata.com/mock/733'
  },
  prod: {
    baseApi: '/',
    mockApi: 'http://yapi.situdata.com/mock/733'
  },
}

export default {
  env,
  mock: true,
  namespace: 'manager',//设定一个可配置的命名空间，可以本地存储时新增属性到此
  ...Envconfig[env]//将对应的环境变量解构出来(包括：baseApi，mockApi)
}
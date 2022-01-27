/**
 * 环境配置封装
 */

const env = import.mate.MODE || 'prod'
const Envconfig = {
  dev: {
    baseApi: '/',
    mocApi: ''
  },
  test: {
    baseApi: '/',
    mocApi: ''
  },
  prod: {
    baseApi: '/',
    mocApi: ''
  },
}

export default {
  env,
  mock: true,
  ...Envconfig[env]//将对应的环境变量解构出来
}
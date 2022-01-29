/**
 * axios二次封装
 */
import axios from 'axios'
import config from '../config'
import router from '../router'
import { ElMessage } from 'element-plus'

const TOKEN_ERRORINFO = '登陆状态已失效，请重新登陆'
const NET_ERROR = '网络异常，请检查网络连接'

/**
 * 创建axios实例对象，添加全局配置
 * baseURL：指向当前环境的地址(来自config文件中的配置，config文件中统一维护环境的地址)
 * timeout：超时时间8s
 */
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000
})

/**
 * 请求拦截器
 * 对于每次请求前进行拦截，动态给每次请求添加token
 */
service.interceptors.request.use((req) => {
  // todo
  const headers = req.headers
  if (!headers.Authorization) headers.Authorization = 'Bear amy'
  return req
})


/**
 * 响应拦截器
 * 对每次请求后响应拦截，根据接口响应状态码进行对应的操作
 * 
 * 1000-请求正常，返回响应数据
 * 401-token失效，弹出提示信息，退出到登陆页，控制台返回错误信息
 * 其他状态码-弹出错误提示，控制台返回报错信息（如果没有返回信息，则显示默认提示：网络异常）
 * 
 * 其他未得到响应的请求，在回调函数做网络错误处理
 */
service.interceptors.response.use(
  (res) => {
    if (res) {
      const { code, data, msg } = res.data
      if (code === 1000) {
        return data
      } else if (code === 401) {
        ElMessage.error(TOKEN_ERRORINFO)
        setTimeout(() => {
          router.push('/login')
        }, 1500);
        return Promise.reject(TOKEN_ERRORINFO)
      } else {
        console.log(msg);
        ElMessage.error(msg || NET_ERROR)
        return Promise.reject(msg || NET_ERROR)
      }
    }
  },
  (err) => {
    ElMessage.error(NET_ERROR)
    return Promise.reject(NET_ERROR)
  })

/**
 * 配置请求的核心函数
 * service 是一个axios实例对象，axios实例对象是promise结构的
 * @param {*object} options 配置选项
 * options.method指定请求方法，并且设置一个默认请求方法get请求，因get/post请求参数值不同，对get请求参数做单独处理，日常请求统一用“data”作为参数字段
 * 对生产环境的访问地址做处理，保证一定为baseURL，不是mock地址
 * 对非生产环境的访问地址处理，开发环境或测试环境开启mock，开启mock时赋值为mock地址，否则赋值为base地址
 * 
 * service的配置还包括method,url,data
 * service({
 *  method:'get',
 *  url:'/',
 *  data:{}
 * }}
*/
function request (options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }

  if (config.env === 'prod') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}

/**
 * 对request方法封装，将多个方法追加到request中
 * request是个构造方法，构造方法可追加静态属性
 */
['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
  request[item] = (url, data, options) => {
    return request({
      url,
      method: item,
      data,
      ...options
    })
  }
})

export default request
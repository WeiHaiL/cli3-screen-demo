import Config from './config'
import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5'
import { getNowFormatDate } from '@/libs/utils'
// axios.defaults.timeout = 10000 //设置请求时间
// axios.defaults.baseURL = baseUrl //设置默认接口地址
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
let request = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production' ? Config.baseUrl : '/szxc_jshc',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  withCredentials: true,
  transformRequest(data) {
    return qs.stringify(data)
  },
})
request.interceptors.request.use(
  (cfg) => {
    let reqdata = JSON.stringify(cfg.data)
    let timestamp = getNowFormatDate()
    let sign = md5(
      Config.secret + reqdata + timestamp + Config.secret,
    ).toUpperCase()
    Object.assign(cfg, {
      data: {
        sign: sign,
        timestamp: timestamp,
        data: reqdata,
      },
    })
    return cfg
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    let res = response.data
    if (res.success || response.statusText == 'OK') {
      return res
    } else {
      return Promise.reject(res)
    }
  },
  (error) => {
    if (!error.response) {
      // alert('服务器响应超时，请稍后重试')
    } else {
      // alert('服务器出现错误，请稍后重试')
    }
    return Promise.reject(error)
  },
)
export function fetch(url, params = {}) {
  return new Promise((resolve, reject) => {
    request
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
//   /**
//    * 封装post请求
//    * @param url
//    * @param data
//    * @returns {Promise}
//    */
export function post(url, data, sign) {
  return new Promise((resolve, reject) => {
    request.post(url, data, sign).then(
      (response) => {
        resolve(response)
      },
      (err) => {
        reject(err)
      },
    )
  })
}

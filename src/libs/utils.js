// import Cookies from 'js-cookie'

// export const TOKEN_KEY = 'token'

// export const setToken = token => {
//   Cookies.set(TOKEN_KEY, token, {
//     expires: 1
//   })
// }

// export const getToken = () => {
//   const token = Cookies.get(TOKEN_KEY)
//   if (token) return token
//   else return false
// }
export const getNowFormatDate = () => {
  let date = new Date()
  let seperator1 = '-'
  let seperator2 = ''
  let month = date.getMonth() + 1
  let strDate = date.getDate()
  if (month >= 1 && month <= 9) month = '0' + month
  if (strDate >= 0 && strDate <= 9) strDate = '0' + strDate
  let currentdate =
    date.getFullYear() +
    seperator1 +
    month +
    seperator1 +
    strDate +
    date.getHours() +
    seperator2 +
    date.getMinutes() +
    seperator2 +
    date.getSeconds()
  return currentdate
}
export const getRequest = () => {
  // 获取url参数
  let url = window.location.search
  let theRequest = {}
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}

export const distance = (lat1, lng1, lat2, lng2) => {
  let radLat1 = (lat1 * Math.PI) / 180.0
  let radLat2 = (lat2 * Math.PI) / 180.0
  let a = radLat1 - radLat2
  let b = (lng1 * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0
  let s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
      )
    )
  s = s * 6378.137 // EARTH_RADIUS;
  s = Math.round(s * 10000) / 10
  return s // 返回米
}

// 判断当前时间是否在d1和d2之间
export const nowInDateBetwen = (d1, d2) => {
  let dateBegin = new Date(d1.replace(/-/g, '/')) // 将-转化为/，使用new Date
  let dateEnd = new Date(d2.replace(/-/g, '/')) // 将-转化为/，使用new Date
  let dateNow = new Date() // 获取当前时间

  let beginDiff = dateNow.getTime() - dateBegin.getTime() // 时间差的毫秒数
  let beginDayDiff = Math.floor(beginDiff / (24 * 3600 * 1000)) // 计算出相差天数

  let endDiff = dateEnd.getTime() - dateNow.getTime() // 时间差的毫秒数
  let endDayDiff = Math.floor(endDiff / (24 * 3600 * 1000)) // 计算出相差天数
  if (endDayDiff < 0) {
    // 已过期
    return -1
  }
  if (beginDayDiff < 0) {
    // 没到开始时间
    return 0
  }
  return 1
}
export const checkTel = (val) => {
  let isMobileNum = false
  if (val && typeof val === 'string') {
    val = val.replace(/(^\s*)|(\s*$)/g, '')
    let strCheck = /^1[345789]\d{9}$/
    if (strCheck.exec(val)) {
      isMobileNum = true
    }
  }
  return isMobileNum
}
export const checkIdcard = (val) => {
  let isIdcard = false
  if (val && typeof val === 'string') {
    val = val.replace(/(^\s*)|(\s*$)/g, '')
    let strCheck = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    if (strCheck.exec(val)) {
      isIdcard = true
    }
  }
  return isIdcard
}
/**
 * @description 绑定事件 on(element, event, handler)
 */
export const on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * @description 解绑事件 off(element, event, handler)
 */
export const off = (function() {
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

export const numFormat = (number) => {
  // 格式化数字 每三位逗号分隔
  if (number < 1000) {
    return number
  }
  let num = String(number || 0)
  let result = ''
  while (num.length > 3) {
    result = ',' + num.slice(-3) + result
    num = num.slice(0, num.length - 3)
  }
  if (num) {
    result = num + result
  }
  return result
}
export const formatNumber = (num) => {
  if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(num)) {
    return num
  }
  let a = RegExp.$1
  let b = RegExp.$2
  let c = RegExp.$3
  let re = new RegExp().compile('(\\d)(\\d{3})(,|$)')
  while (re.test(b)) {
    b = b.replace(re, '$1,$2$3')
  }
  return a + '' + b + '' + c
}

export const fontSize = (res)=> {
    let clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = (clientWidth / 1920);
    return res * fontSize;
}
export const dateFormat = (stamp, format) => {
  let d = new Date(stamp)
  let month = d.getMonth() + 1
  const date = d.getDate()
  const hours = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()
  const numberFormat = number => `0${number}`.slice(-2)
  format = format.replace(/yyyy|YYYY/, d.getFullYear())
  format = format.replace(/yy|YY/, d.getYear())
  format = format.replace(/MM/, numberFormat(month))
  format = format.replace(/M/, month)
  format = format.replace(/dd/, numberFormat(date))
  format = format.replace(/d/, date)
  format = format.replace(/hh|HH/, numberFormat(hours))
  format = format.replace(/h|H/, hours)
  format = format.replace(/mm/, numberFormat(minutes))
  format = format.replace(/m/, minutes)
  format = format.replace(/ss/, numberFormat(seconds))
  format = format.replace(/s/, seconds)
  return format
}
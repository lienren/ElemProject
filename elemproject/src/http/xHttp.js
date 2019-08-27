import axios from 'axios'
import wait from './delay'
import { Notification } from 'element-ui'

// 通用接口业务成功判定条件
const DEF_VALIDATOR = res => res.code === '000000'
// 通用接口业务失败处理
const DEF_FAIL_HANDLING = res => {
  Notification.error({ title: '错误', message: res.message || '传输异常，请稍后再试！' })
}
// 通用接口异常处理
const DEF_EXCEPTION_HANDLING = () => {
  Notification.error({ title: '错误', message: '传输异常，请稍后再试！' })
}
// 默认接口延迟0毫秒
const DEF_DELAY = 0

function requestUrl (url) {
  return url
}

async function send (url, method, body, options, load, loadMsg, loadID, validator, delay, defFail, defEx) {
  const opts = { ...options }
  let dialogLoading = null
  // 生成请求url
  url = requestUrl(url)
  if (load) {
    if (loadID && loadID.startsWith('.')) {
      // 目标loading
      dialogLoading = window.$globalHub.$loading({ target: loadID })
    } else if (loadID === 'fullscreen') {
      // 全屏loading
      dialogLoading = window.$globalHub.$loading({ fullscreen: true })
    } else {
      window.$globalHub.$store.commit('UPDATE_BTNLOADINGSTR', { str: loadMsg, id: loadID })
    }
  }

  opts.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authentication: '',
    ...opts.headers
  }
  return axios({ method, url, data: body, ...opts })
    .then(async res => {
      const obj = res.data
      // 避免loading动画一闪而过，增加0.3秒延迟
      let time = load ? delay : 0
      if (delay > DEF_DELAY) {
        time = delay
      }
      await wait(time)
      if (load) {
        window.$globalHub.$store.commit('UPDATE_BTNLOADINGSTR', null)
        dialogLoading && dialogLoading.close()
      }
      // 验证接口结果
      if (validator(obj)) {
        return obj
      } else {
        if (defFail) {
          // 通用业务失败处理
          DEF_FAIL_HANDLING(obj)
        } else {
          // 返回前台处理
          return obj
        }
      }
    })
    .catch(error => {
      let errorMsg = ''
      try {
        if (error.response) {
          errorMsg = JSON.stringify(error.response)
        } else if (error.request) {
          errorMsg = JSON.stringify(error.request)
        } else {
          errorMsg = JSON.stringify(error.message)
        }
      } catch (e) {}
      if (load) {
        window.$globalHub.$store.commit('UPDATE_BTNLOADINGSTR', null)
        dialogLoading && dialogLoading.close()
      }
      // 接口异常处理
      if (defEx) {
        // 通用异常处理
        DEF_EXCEPTION_HANDLING()
      } else {
        // 返回前台处理
        return Promise.reject(new Error(errorMsg))
      }
    })
}

export default {
  /**
   * 调用Get接口
   * @param url 接口地址
   * @param options axios的options设置（参考https://github.com/mzabriskie/axios）
   * @param load  是否展示loading (true：默认，展示全屏loading框，false：不展示，btn：展示按钮loading)
   * @param loadMsg loading展示文字
   * @param loadID loading按钮标识（用以多个loadingBtn的情况，默认为null）
   * @param validator 业务成功逻辑判断
   * @param delay 接口延迟时间，默认300
   * @param defFail 是否使用默认业务失败处理
   * @param defEx 是否使用默认接口失败处理
   */
  get (
    url,
    {
      options = null,
      load = true,
      loadMsg = '加载中...',
      loadID = null,
      validator = DEF_VALIDATOR,
      delay = DEF_DELAY,
      defFail = true,
      defEx = true
    } = {}
  ) {
    return send(url, 'get', null, options, load, loadMsg, loadID, validator, delay, defFail, defEx)
  },
  /**
   * 调用Post接口
   * @param url 接口地址
   * @param body 接口参数
   * @param options axios的options设置（参考https://github.com/mzabriskie/axios）
   * @param load  是否展示loading (true：默认，展示全屏loading框，false：不展示，btn：展示按钮loading)
   * @param loadMsg loading展示文字
   * @param loadID loading按钮标识（用以多个loadingBtn的情况，默认为null）
   * @param validator 业务成功逻辑判断
   * @param delay 接口延迟时间，默认300
   * @param defFail 是否使用默认业务失败处理
   * @param defEx 是否使用默认接口失败处理
   */
  post (
    url,
    body,
    {
      options = null,
      load = true,
      loadMsg = '加载中...',
      loadID = null,
      validator = DEF_VALIDATOR,
      delay = DEF_DELAY,
      defFail = true,
      defEx = true
    } = {}
  ) {
    return send(url, 'post', body, options, load, loadMsg, loadID, validator, delay, defFail, defEx)
  },
  getRequestUrl (url) {
    return requestUrl(url)
  }
}

/*
 * @Author: Lienren
 * @Date: 2019-08-10 14:11:58
 * @Last Modified by: Lienren
 * @Last Modified time: 2019-08-27 13:51:16
 */
import Vue from 'vue'

export default {
  getPlayGroup (body, op = {}) {
    return Vue.$api.xHttp.post(`http://manage.youngplay.net/youngplay/getPlayGroup`, body, op)
  },
  getPlayGroupDetail (body, op = {}) {
    return Vue.$api.xHttp.post(`http://manage.youngplay.net/youngplay/getPlayGroupDetail`, body, op)
  },
  getAttr (body, op = {}) {
    return Vue.$api.xHttp.post(`http://manage.youngplay.net/youngplay/getAttr`, body, op)
  },
  getPlayParentChild (body, op = {}) {
    return Vue.$api.xHttp.post(`http://manage.youngplay.net/youngplay/getPlayParentChild`, body, op)
  },
  getPlayParentChildDetail (body, op = {}) {
    return Vue.$api.xHttp.post(`http://manage.youngplay.net/youngplay/getPlayParentChildDetail`, body, op)
  }
}

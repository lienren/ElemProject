// 该模块的初始状态
const state = {
  userInfo: null,
  loginDialogIsShow: false,
  btnLoadingStr: null,
  btnLoadingID: null,
  showMask: false
}
// getters
const getters = {
  userInfo: state => state.userInfo,
  loginDialogIsShow: state => state.loginDialogIsShow
}
// 相关的 mutations
const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_LOGINDIALOGISSHOW: (state, isshow) => {
    state.loginDialogIsShow = isshow
  },
  UPDATE_BTNLOADINGSTR (state, load) {
    if (load) {
      state.btnLoadingStr = load.str
      state.btnLoadingID = load.id
      state.showMask = !!load.str
    } else {
      state.btnLoadingStr = null
      state.btnLoadingID = null
      state.showMask = false
    }
  }
}
const actions = {}
export default {
  state,
  mutations,
  getters,
  actions
}

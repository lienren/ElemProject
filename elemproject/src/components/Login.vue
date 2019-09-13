<template>
  <div class="dmc-login-wrap">
    <div class="ms-login">
      <el-form :model="loginModel" ref="loginModel" label-width="0" @keyup.native.enter="BLL.login">
        <h3>用户登录</h3>
        <el-form-item label></el-form-item>
        <el-form-item label>
          <el-input placeholder="请填写登录手机号" v-model="loginModel.phone" :maxlength="11">
            <template slot="prepend">
              <i class="el-icon-phone"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label>
          <el-input placeholder="请填写收到的验证码" v-model="loginModel.smsCode" :maxlength="6">
            <template slot="prepend">
              <i class="el-icon-message"></i>
            </template>
            <el-button
              slot="append"
              class="btn-send-code"
              type="primary"
              :disabled="!!BLL.disabledPhone()"
              @click="BLL.send()"
              :loading="sendBtnLoading.state"
            >
              <span>{{countdown.txt}}</span>
            </el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="btn-login"
            type="primary"
            @click="BLL.login()"
            :disabled="!!BLL.disabled()"
            :loading="loading.state"
          >
            <span>{{loading.str}}</span>
          </el-button>
          <el-button
            @click="BLL.close()"
            type="text"
            style="color:#777;width:100%;text-align:center;margin:0;"
          >再去逛一逛</el-button>
        </el-form-item>
        <el-form-item>
          <p class="text-tip">陕ICP备19010059号 西安崇越企业管理咨询有限公司</p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import BLL from './Login.js'

export default {
  components: {},
  data () {
    return {
      loginModel: {
        phone: '',
        smsCode: ''
      },
      loginStr: '登 录',
      countdown: {
        timeoutCount: 0,
        timeinterval: null,
        txt: null
      },
      imgCodeText: ''
    }
  },
  computed: {
    loading () {
      return { state: false, str: this.loginStr }
    },
    sendBtnLoading () {
      return { state: false }
    }
  },
  created () {
    // 初始化
    this.BLL = new BLL(this)
  },
  beforeDestroy () { },
  mounted () {
    this.$nextTick(() => {
    })
  },
  methods: {
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  @import "./iLogin.less";
</style>

// 验证码默认参数
const countdownDefaultData = {
  timeoutCount: 60,
  txt: '发送验证码'
}

// endregion
export default class {
  constructor (vm) {
    this.vm = vm
    this.vm.countdown = { ...countdownDefaultData }
  }

  errMsg () {
    if (!this.vm.$utils.Validate.chkFormat(this.vm.loginModel.phone, 'phone')) {
      return '请输入正确的手机号'
    }
    if (!this.vm.$utils.Validate.chkFormat(this.vm.loginModel.smsCode, 'code')) {
      return '请输入正确的验证码'
    }
    return null
  }

  disabled () {
    if (!this.vm.loginModel.phone) {
      return '请输入手机号'
    } else if (this.vm.loginModel.phone.length !== 11) {
      return '请完整输入11位手机号'
    } else if (this.vm.loginModel.smsCode.length !== 6) {
      return '请完整输入6位验证码'
    }
    return null
  }

  disabledPhone () {
    if (this.vm.countdown.txt !== countdownDefaultData.txt) {
      return '验证码已发送，请耐心等待'
    } else if (!this.vm.loginModel.phone) {
      return '请输入手机号'
    } else if (this.vm.loginModel.phone.length !== 11) {
      return '请完整输入11位手机号'
    }
    return null
  }

  countDown () {
    if (this.vm.countdown.timeoutCount > 0) {
      this.vm.countdown.txt = this.vm.countdown.timeoutCount-- + 's后获取'
    } else {
      clearInterval(this.vm.countdown.timeinterval)
      this.vm.countdown = { ...countdownDefaultData }
    }
  }

  async send () {
    if (this.disabledPhone()) {
      this.vm.$message.error(this.disabledPhone())
      return
    }
    if (!this.vm.$utils.Validate.chkFormat(this.vm.loginModel.phone, 'phone')) {
      this.vm.$message.error('请正确输入11位手机号')
      return
    }
    this.vm.countdown.txt = '发送中'

    this.vm.$notify({
      title: '成功',
      message: '短信验证码已发送',
      type: 'success'
    })

    // 倒计时
    this.countDown()
    this.vm.countdown.timeinterval = setInterval(() => {
      this.countDown()
    }, 1000)
  }

  // 平台登录
  async login () {
    if (this.disabled() || this.errMsg()) {
      this.vm.$message.error(this.disabled() || this.errMsg())
      return
    }

    console.log('this.vm:', this)
    this.vm.$emit('login-success')
  }

  close () {
    this.vm.$emit('login-close')
  }
}

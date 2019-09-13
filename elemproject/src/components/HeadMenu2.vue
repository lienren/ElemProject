<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col :span="4">
            <div style="width:80px;cursor: pointer;" @click="toHome">
              <img src="../assets/images/logo2.png" style="width:100%;" />
            </div>
          </el-col>
          <el-col :span="20">
            <div style="line-height:24px;">
              <el-link
                style="font-size:15px;"
                class="link"
                :underline="false"
                href="/search"
                target="_self"
              >去团建</el-link>
              <el-link
                style="font-size:15px;"
                class="link"
                :underline="false"
                href="/search2"
                target="_self"
              >萌马童游</el-link>
              <el-link
                style="font-size:15px;"
                class="link"
                :underline="false"
                href="/search3"
                target="_self"
              >找场地</el-link>
              <el-link
                style="font-size:15px;"
                class="link"
                :underline="false"
                href="/search4"
                target="_self"
              >案例</el-link>
              <el-link
                style="font-size:15px;"
                class="link"
                :underline="false"
                href="/search5"
                target="_self"
              >活动</el-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="6">&nbsp;</el-col>
          <el-col :span="10">
            <div style="margin-top:0px;">
              <el-input size="mini" placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div style="text-align:right;line-height:24px;font-size:13px;">
              <el-link class="link" :underline="false" target="_self" @click="LoginDialogIsShow=true">登录/注册</el-link>
              <el-link class="link" :underline="false" target="_self" @click="toMsg">橙主入驻</el-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div v-if="LoginDialogIsShow" class="login-contain">
      <Login @login-close="LoginDialogIsShow=false" @login-success="LoginDialogIsShow=false"></Login>
    </div>
  </div>
</template>

<script>
import Login from '../components/Login.vue'
export default {
  components: {
    Login
  },
  data () {
    return {
      LoginDialogIsShow: false
    }
  },
  computed: {
  },
  created () { },
  beforeDestroy () { },
  mounted () {
    this.$nextTick(() => {
    })
  },
  methods: {
    toHome () {
      this.$router.push({ path: `/` })
    },
    toMsg () {
      this.$message({
        message: '橙主入驻功能正在开发中，尽情期待...',
        type: 'warning'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .link {
    color: #666;
    margin-right: 15px;
  }

  .login-contain {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1002;
  }
</style>

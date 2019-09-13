<template>
  <div>
    <el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="6">
            <div style="width:80px;margin:0 auto;cursor: pointer;" @click="toHome">
              <img src="../assets/images/logo.png" style="width:100%;" />
            </div>
          </el-col>
          <el-col :span="18">
            <div style="line-height:22px;">
              <el-link style="font-size:15px;" class="link" :underline="false" href="/search" target="_self">去团建</el-link>
              <el-link style="font-size:15px;" class="link" :underline="false" href="/search2" target="_self">萌马童游</el-link>
              <el-link style="font-size:15px;" class="link" :underline="false" href="/search3" target="_self">找场地</el-link>
              <el-link style="font-size:15px;" class="link" :underline="false" href="/search4" target="_self">案例</el-link>
              <el-link style="font-size:15px;" class="link" :underline="false" href="/search5" target="_self">活动</el-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <div style="text-align:right;line-height:18px;font-size:13px;">
          <el-link class="link" :underline="false" href="#" target="_self">登录/注册</el-link>
          <el-link class="link" :underline="false" href="#" target="_self">橙主入驻</el-link>
        </div>
      </el-col>
    </el-col>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
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
    }
  }
}
</script>

<style lang="less" scoped>
  .link {
    color: #fff;
    margin-right: 15px;
  }
</style>

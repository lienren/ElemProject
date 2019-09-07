<template>
  <div>
    <el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="4">
            <div style="width:60px;cursor: pointer;" @click="toHome">
              <img src="../assets/images/logo2.png" style="width:100%;" />
            </div>
          </el-col>
          <el-col :span="20">
            <div style="line-height:18px;font-size:13px;">
              <el-link class="link" :underline="false" href="/search" target="_blank">去团建</el-link>
              <el-link class="link" :underline="false" href="/search2" target="_blank">萌马童游</el-link>
              <el-link class="link" :underline="false" href="/search3" target="_blank">找场地</el-link>
              <el-link class="link" :underline="false" href="/search4" target="_blank">案例</el-link>
              <el-link class="link" :underline="false" href="/search5" target="_blank">活动</el-link>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="6">&nbsp;</el-col>
          <el-col :span="10">
            <div style="margin-top:-4px;">
              <el-input size="mini" placeholder="请输入内容">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </div>
          </el-col>
          <el-col :span="8">
            <div style="text-align:right;line-height:18px;font-size:13px;">
              <el-link class="link" :underline="false" href="#" target="_blank">登录/注册</el-link>
              <el-link class="link" :underline="false" href="#" target="_blank">橙主入驻</el-link>
            </div>
          </el-col>
        </el-row>
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
    color: #666;
    margin-right: 15px;
  }
</style>

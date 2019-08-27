<template>
  <div>
    <div class="page-items">
      <img src="../assets/images/qcode.jpg" style="width:100%;" />
    </div>
    <div class="page-items">
      <el-row :gutter="40">
        <el-col :span="16">
          <el-row :gutter="10">
            <el-col :span="4">
              <div>&nbsp;</div>
            </el-col>
            <el-col :span="4">
              <div class="bottom-home-menu">首页</div>
            </el-col>
            <el-col :span="4">
              <div class="bottom-first-menu bottom-menu" @click="toSearch">团建</div>
              <div class="bottom-menu" @click="toSearch">旅行团建</div>
              <div class="bottom-menu" @click="toSearch">培训团建</div>
              <div class="bottom-menu" @click="toSearch">主题团建</div>
              <div class="bottom-menu" @click="toSearch">定制团建</div>
            </el-col>
            <el-col :span="4">
              <div class="bottom-first-menu bottom-menu">场地</div>
              <div class="bottom-menu" @click="toSearch">旅行团建</div>
              <div class="bottom-menu" @click="toSearch">培训团建</div>
              <div class="bottom-menu" @click="toSearch">主题团建</div>
              <div class="bottom-menu" @click="toSearch">定制团建</div>
            </el-col>
            <el-col :span="4">
              <div class="bottom-first-menu bottom-menu">萌马童游</div>
              <div class="bottom-menu" @click="toSearch">旅行团建</div>
              <div class="bottom-menu" @click="toSearch">培训团建</div>
              <div class="bottom-menu" @click="toSearch">主题团建</div>
              <div class="bottom-menu" @click="toSearch">定制团建</div>
            </el-col>
            <el-col :span="4">
              <div class="bottom-first-menu bottom-menu" @click="toSearch">关于我们</div>
              <div class="bottom-menu" @click="toSearch">旅行团建</div>
              <div class="bottom-menu" @click="toSearch">培训团建</div>
              <div class="bottom-menu" @click="toSearch">主题团建</div>
              <div class="bottom-menu" @click="toSearch">定制团建</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row :gutter="20">
            <el-col :span="12">
              <div style="width:120px;margin:0 auto;cursor: pointer;" @click="toHome">
                <img src="../assets/images/logo2.png" style="width:100%;" />
              </div>
            </el-col>
            <el-col :span="12">
              <div style="width:32px;margin-bottom:10px;">
                <img src="../assets/images/phone.jpg" style="width:100%;" />
              </div>
              <div style="font-size:24px;font-style:italic;color:#666;">029-888-888</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
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
      this.$router.push({ path: `/index` })
    },
    toSearch () {
      this.$router.push({ path: `/search` })
    }
  }
}
</script>

<style lang="less" scoped>
  .link {
    color: #fff;
    margin-right: 15px;
  }

  .page-items {
    margin-bottom: 40px;

    .bottom-home-menu {
      font-size: 18px;
      line-height: 45px;
      color: #f57021;
    }

    .bottom-menu {
      font-size: 12px;
      line-height: 30px;
      color: #666;
      cursor: pointer;
    }

    .bottom-first-menu {
      font-size: 16px;
      line-height: 40px;
      width: 70px;
      border-top: solid 2px #f57021;
    }
  }
</style>

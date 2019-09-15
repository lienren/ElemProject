<template>
  <div v-if="isLoader" class="main-page">
    <div class="page-items" style="padding-top:10px;height:20px;width:1152px;margin:0 auto 30px;">
      <headMenu></headMenu>
    </div>
    <div class="page-items">
      <el-row>
        <el-col :span="6">
          <div
            :style="{width:'100%',height:'225px',background:`url(`+infoImgs[1]+`) center center no-repeat`, backgroundSize: 'cover'}"
          ></div>
          <div
            :style="{width:'100%',height:'225px',background:`url(`+infoImgs[2]+`) center center no-repeat`, backgroundSize: 'cover'}"
          ></div>
        </el-col>
        <el-col :span="12">
          <div
            :style="{width:'100%',height:'450px',background:`url(`+infoImgs[0]+`) center center no-repeat`, backgroundSize: 'cover'}"
          ></div>
        </el-col>
        <el-col :span="6">
          <div
            :style="{width:'100%',height:'225px',background:`url(`+infoImgs[3]+`) center center no-repeat`, backgroundSize: 'cover'}"
          ></div>
          <div
            :style="{width:'100%',height:'225px',background:`url(`+infoImgs[4]+`) center center no-repeat`, backgroundSize: 'cover'}"
          ></div>
        </el-col>
      </el-row>
    </div>
    <div class="page">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="page-items">
            <div style="margin-bottom:20px;">
              <share :config="shareConfig">分享</share>
            </div>
            <h2 style="margin-bottom:20px;">{{info.title}}</h2>
            <div style="margin-bottom:20px;">
              <el-tag
                style="margin-right:5px;"
                type="info"
                size="mini"
                v-for="(item, index) in infoTags"
                :key="index"
              >{{item}}</el-tag>
            </div>
            <div style="margin-bottom:20px;">
              <div style="color:#f57021;font-size: 1.5em;margin-bottom:10px;">
                <span>¥{{parseInt(info.price/100)}}</span>
                <span style="font-size:12px;">/人起</span>
              </div>
              <div style="font-size:12px;">（可接纳{{info.minPeopleNum}}-{{info.maxPeopleNum}}人）</div>
            </div>
          </div>
          <div class="page-items">
            <div
              :class="['sel', selectPackageIndex===index?'active':'']"
              v-for="(item, index) in info.packAge"
              :key="index"
              @click="selectPackage(index, item.price)"
            >
              <div style="margin-bottom:10px;">{{item.title}}</div>
              <div style="margin-bottom:10px;">{{item.remark}}</div>
              <div style="font-size: 1.2em;">
                <span>¥{{item.price}}</span>
                <span style="font-size:12px;">&nbsp;{{item.unit}}</span>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="page-items">
            <el-form :inline="true" label-position="left" label-width="60px">
              <el-form-item label="人数">
                <el-input-number v-model="selNum" :min="1" :max="100000"></el-input-number>
              </el-form-item>
              <el-form-item label="日期">
                <el-date-picker
                  v-model="selDate"
                  type="date"
                  placeholder="选择日期"
                  value-format="yyyy-MM-dd"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </el-form-item>
            </el-form>
          </div>
          <div class="page-items">
            <div style="font-size: 1.5em;margin-bottom:10px;">
              <span style="font-size:12px;margin-right:20px;">合计</span>
              <span style="color:#f57021;">¥{{sumPrice}}</span>
              <span style="font-size:12px;margin-right:100px;">元</span>
              <el-button
                type="primary"
                style="background:#f57021;border:solid 1px #f57021;"
                @click="submitOrder"
              >立即预定</el-button>
            </div>
          </div>
          <div class="page-items">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="位置" name="first"></el-tab-pane>
              <el-tab-pane label="产品说明" name="second"></el-tab-pane>
              <el-tab-pane label="费用说明" name="third"></el-tab-pane>
              <el-tab-pane label="行程安排" name="fourth"></el-tab-pane>
            </el-tabs>
            <h2 id="first" style="margin-bottom: 10px;">位置</h2>
            <div v-html="info.r1" style="margin-bottom: 40px;"></div>
            <h2 id="second" style="margin-bottom: 10px;">产品说明</h2>
            <div v-html="info.r2" style="margin-bottom: 40px;"></div>
            <h2 id="third" style="margin-bottom: 10px;">费用说明</h2>
            <div v-html="info.r3" style="margin-bottom: 40px;"></div>
            <h2 id="fourth" style="margin-bottom: 10px;">行程安排</h2>
            <div v-html="info.r4" style="margin-bottom: 40px;"></div>
          </div>
        </el-col>
        <el-col :span="6">
          <div v-if="infoBusinessUser.busHeadImg">
            <el-card shadow="hover" style="border-top:2px solid #f57021;">
              <div style="padding: 14px;">
                <el-row>
                  <el-col :span="10">
                    <div style="width:65px;">
                      <img :src="infoBusinessUser.busHeadImg" style="width:100%;border-radius: 50%;" />
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="manager-name">{{infoBusinessUser.busName}}</div>
                    <div class="manager-title">{{infoBusinessUser.busTitle}}</div>
                  </el-col>
                </el-row>
              </div>
              <div style="padding: 14px;">
                <div class="title4">{{infoBusinessUser.busPhone}}</div>
                <div class="title5">{{infoBusinessUser.busContent}}</div>
              </div>
              <div style="padding:0 14px;">
                <el-button
                  type="primary"
                  style="width:100%;background:#f57021;border:solid 1px #f57021;"
                >欢迎咨询</el-button>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <div>
        <footMenu></footMenu>
      </div>
    </div>
  </div>
</template>

<script>
import headMenu from '../components/HeadMenu2'
import footMenu from '../components/FootMenu'
import api from '../api/yp'

export default {
  components: {
    headMenu,
    footMenu
  },
  data () {
    return {
      isLoader: false,
      id: 0,
      info: {},
      infoImgs: [],
      infoTags: [],
      infoBusinessUser: {},
      selectPackageIndex: 0,
      selectPackagePrice: 0,
      selNum: 1,
      selDate: '',
      activeName: 'first',
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() + 24 * 3600000 <= Date.now()
        }
      },
      shareConfig: {}
    }
  },
  computed: {
    height () {
      return this.$utils.Common.getWidthHeight().height - 180
    },
    sumPrice () {
      return this.selNum * this.selectPackagePrice
    },
    userInfo () {
      return this.$store.state.global.userInfo
    }
  },
  created () {
    this.id = this.$route.query.id
  },
  beforeDestroy () { },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.getPlayGroupDetail(this.id)
    },
    async getPlayGroupDetail (groupid) {
      if (!groupid || groupid === 0 || groupid === '0') {
        return
      }
      const result = await api.getPlayGroupDetail({
        id: groupid
      })

      if (result) {
        this.info = result.data

        if (this.info.subImg && this.info.subImg.length > 0) {
          this.info.subImg = JSON.parse(this.info.subImg)
        }
        this.infoImgs = []
        this.infoImgs.push(this.info.masterImg)
        this.infoImgs = this.infoImgs.concat(this.info.subImg)

        if (this.info.tags && this.info.tags.length > 0) {
          this.info.tags = this.info.tags[0] === ',' ? this.info.tags.substring(1) : this.info.tags
          this.info.tags = this.info.tags[this.info.tags.length - 1] === ',' ? this.info.tags.substring(0, this.info.tags.length - 1) : this.info.tags
          this.infoTags = this.info.tags.split(',')
        }

        this.selectPackageIndex = 0
        this.selectPackagePrice = 0
        if (this.info.packAge && this.info.packAge.length > 0) {
          this.info.packAge = JSON.parse(this.info.packAge)

          if (this.info.packAge.length > 0) {
            this.selectPackagePrice = parseInt(this.info.packAge[0].price)
          }
        }

        this.shareConfig = {
          url: window.location.href,
          source: window.location.href,
          title: this.info.title,
          description: this.info.title,
          sites: ['qzone', 'qq', 'weibo', 'wechat', 'douban']
        }

        this.isLoader = true

        this.getBusinessUser()
      }
    },
    async getBusinessUser () {
      if (this.info.busUserId && this.info.busUserId > 0) {
        let result = await api.getBusinessUser({
          current: 1,
          pageSize: 99999999,
          total: 0
        })

        if (result) {
          result = result.data && result.data.list ? result.data.list : []
          this.infoBusinessUser = result.find(f => { return f.id === this.info.busUserId })

          if (!this.infoBusinessUser && result.length > 0) {
            this.infoBusinessUser = result[0]
          }
        }
      }
    },
    selectPackage (index, price) {
      this.selectPackageIndex = index
      this.selectPackagePrice = parseInt(price)
    },
    async submitOrder () {
      if (!this.userInfo) {
        if (!this.$store.state.global.loginDialogIsShow) {
          this.$store.commit('SET_LOGINDIALOGISSHOW', true)
        }
        return
      }

      if (this.selDate === '') {
        this.$message.error('请选择日期！')
        return
      }

      if (this.info.packAge.length === 0 || !this.info.packAge[this.selectPackageIndex]) {
        this.$message.error('请选择一个套餐！')
        return
      }

      await api.addOrder({
        otype: 1,
        opeopleNum: this.selNum,
        oprice: parseInt(this.sumPrice * 100),
        oselectTime: this.selDate,
        userId: this.userInfo.userId,
        userPhone: this.userInfo.userPhone,
        userName: this.userInfo.userName,
        oprojectId: this.id,
        oprojectName: this.info.title,
        oprojectPageAge: JSON.stringify(this.info.packAge[this.selectPackageIndex]),
        oprojectBusUserId: this.infoBusinessUser.id ? this.infoBusinessUser.id : 0,
        oprojectBusUserName: this.infoBusinessUser.busName ? this.infoBusinessUser.busName : '',
        oprojectBusUserInfo: JSON.stringify(this.infoBusinessUser)
      })

      this.selNum = 1
      this.selDate = ''

      this.$message({
        message: '您的需求已提交成功，我们的客户经理稍后会联系您！',
        type: 'success'
      })
    },
    addFavorite () {
      try {
        window.external.AddFavorite(location.href, this.info.title)
        this.$message({
          message: '已收藏成功！',
          type: 'success'
        })
      } catch (e) {
        try {
          window.sidebar.addPanel(location.href, this.info.title, '')
          this.$message({
            message: '已收藏成功！',
            type: 'success'
          })
        } catch (e) {
          this.$message.error('加入收藏失败，请使用Ctrl+D进行添加!')
        }
      }
    },
    handleClick (tab, event) {
      const returnEle = document.querySelector(`#${this.activeName}`)
      if (returnEle) {
        returnEle.scrollIntoView(true)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .main-page {
    max-width: 1920px;
    margin: 0 auto;
    background: url("../assets/images/header_bg.jpg") repeat-x;
    background-size: 293px 50px;
  }

  .page {
    width: 1152px;
    margin: 0 auto;
  }

  .page-items {
    margin-bottom: 40px;
    .title {
      font-size: 28px;
      margin-bottom: 20px;
    }

    .title1 {
      font-size: 12px;
      width: 100%;
    }

    .title2 {
      font-size: 14px;
      font-weight: bold;
      width: 100%;
      margin-bottom: 10px;
    }

    .title3 {
      font-size: 10px;
      width: 100%;
    }

    .sel {
      float: left;
      margin-right: 10px;
      width: 150px;
      min-height: 130px;
      background: #ffefe6;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;

      div {
        font-size: 12px;
      }

      &.active {
        background: #ffefe6 url("../assets/images/select1.jpg") top right
          no-repeat;
        background-size: contain;
      }
    }
  }

  .title4 {
    color: #999;
    margin-bottom: 10px;
    font-style: italic;
  }
  .title5 {
    color: #999;
    font-size: 14px;
  }

  .manager-name {
    color: #f57021;
    margin-bottom: 5px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
</style>

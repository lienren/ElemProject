<template>
  <div class="main-page">
    <div class="page-carousel">
      <el-carousel height="500px" :interval="interval">
        <el-carousel-item v-for="(item, index) in bigBannerLink" :key="index">
          <div class="carousel-item">
            <div
              class="carousel-item-img"
              :style="{background:`url(${item.imgUrl}) top center no-repeat`}"
              @click="toDetail(item.url)"
            ></div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="page">
      <div class="page-items" style="padding-top:20px;height:503px;">
        <headMenu></headMenu>
        <div class="page-search">
          <div class="sorts">
            <span :class="[searchSelectIndex===0?'active':'']" @click="searchSelectIndex=0">团建</span>
            <span :class="[searchSelectIndex===1?'active':'']" @click="searchSelectIndex=1">萌马童游</span>
            <span :class="[searchSelectIndex===2?'active':'']" @click="searchSelectIndex=2">场地</span>
            <span :class="[searchSelectIndex===3?'active':'']" @click="searchSelectIndex=3">案例</span>
            <span :class="[searchSelectIndex===4?'active':'']" @click="searchSelectIndex=4">活动</span>
          </div>
          <el-form label-width="0">
            <el-form-item label>
              <el-input placeholder="点击输入" v-model="searchText">
                <el-button
                  slot="append"
                  style="width:100px;background: #f57021;border: solid 1px #f57021;color:#fff;"
                  @click="toSearchText"
                >
                  <span>搜 索</span>
                </el-button>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="page-items">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="title">为你推荐</div>
            <el-row :gutter="20">
              <el-col
                v-for="(item, index) in bannerLink"
                :key="index"
                :span="12"
                style="margin-bottom: 20px;"
              >
                <div @click="toDetail(item.url)">
                  <img :src="item.imgUrl" style="width:100%;" />
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">
              <div slot="header" class="clearfix">
                <span>免费定制专属方案</span>
              </div>
              <div class="sorts" style="font-size:16px;text-align:center;">
                <span :class="[orderSelectIndex===0?'active':'']" @click="orderSelectIndex=0">团建</span>
                <span :class="[orderSelectIndex===1?'active':'']" @click="orderSelectIndex=1">萌马童游</span>
                <span :class="[orderSelectIndex===2?'active':'']" @click="orderSelectIndex=2">场地</span>
                <span :class="[orderSelectIndex===3?'active':'']" @click="orderSelectIndex=3">案例</span>
                <span :class="[orderSelectIndex===4?'active':'']" @click="orderSelectIndex=4">活动</span>
              </div>
              <div>
                <el-form label-position="left" size="small" label-width="60px">
                  <el-form-item label="人数">
                    <el-input-number v-model="orderPeopleNum" :min="1" :max="100000"></el-input-number>
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
                  <el-form-item>
                    <el-button
                      type="primary"
                      style="width:100%;background:#f57021;border:solid 1px #f57021;"
                      @click="submitOrder"
                    >提交需求</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="page-items">
        <div class="title">团建推荐</div>
        <div class="sorts">
          <span v-for="(item, index) in groupAttrListZero" :key="index" @click="toSearch">{{item}}</span>
          <span class="more" @click="toSearch">更多</span>
        </div>
        <el-row :gutter="20">
          <el-col v-for="(item, index) in groupList" :key="index" :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <div @click="toGroupDetail(item.id)">
                <img :src="item.masterImg" style="width:100%;height:auto;" />
                <div style="padding: 14px;">
                  <div
                    class="title2"
                    style="display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;"
                  >{{item.subTitle}}</div>
                  <div
                    class="title1"
                    style="display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;"
                  >{{item.title}}</div>
                  <div class="title3">{{item.price/100}}元/人起</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="page-items">
        <div class="title">找场地</div>
        <div class="sorts">
          <span v-for="(item, index) in siteAttrListZero" :key="index" @click="toSearch3">{{item}}</span>
          <span class="more" @click="toSearch3">更多</span>
        </div>
        <el-row :gutter="20">
          <el-col v-for="(item, index) in siteList" :key="index" :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <div @click="toSiteDetail(item.id)">
                <img :src="item.masterImg" style="width:100%;height:auto;" />
                <div style="padding: 14px;">
                  <div
                    class="title2"
                    style="display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;"
                  >{{item.subTitle}}</div>
                  <div
                    class="title1"
                    style="display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;"
                  >{{item.title}}</div>
                  <div class="title3">{{item.price/100}}元/人起</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="page-items">
        <div class="title">萌马童游</div>
        <div class="sorts">
          <span v-for="(item, index) in pcAttrListZero" :key="index" @click="toSearch2">{{item}}</span>
          <span class="more" @click="toSearch2">更多</span>
        </div>
        <el-row :gutter="20">
          <el-col v-for="(item, index) in pcList" :key="index" :span="12">
            <div
              :style="{marginBottom:'20px',width:'100%',height:'180px',background:`url(`+item.masterImg+`) center center no-repeat`, backgroundSize: 'cover'}"
              @click="toPCDetail(item.id)"
            ></div>
          </el-col>
        </el-row>
      </div>
      <div class="page-items">
        <div class="title">活动服务</div>
        <div class="sorts">
          <span
            v-for="(item, index) in activityAttrListZero"
            :key="index"
            @click="toSearch5"
          >{{item}}</span>
          <span class="more" @click="toSearch5">更多</span>
        </div>
        <el-row :gutter="20">
          <el-col v-for="(item, index) in activityList" :key="index" :span="6">
            <div
              :style="{marginBottom:'20px',width:'100%',height:'300px',background:`url(`+item.masterImg+`) center center no-repeat`, backgroundSize: 'cover'}"
              @click="toActivityDetail(item.id)"
            ></div>
          </el-col>
        </el-row>
      </div>
      <div class="page-items">
        <div class="title">案例</div>
        <div class="sorts">
          <span v-for="(item, index) in caseAttrListZero" :key="index" @click="toSearch4">{{item}}</span>
          <span class="more" @click="toSearch4">更多</span>
        </div>
        <el-row :gutter="20">
          <el-col v-for="(item, index) in caseList" :key="index" :span="6">
            <div
              :style="{marginBottom:'20px',width:'100%',height:'190px',background:`url(`+item.masterImg+`) center center no-repeat`, backgroundSize: 'cover'}"
              @click="toCaseDetail(item.id)"
            ></div>
          </el-col>
        </el-row>
      </div>
      <div class="page-items">
        <div class="title" style="margin-bottom:30px;">我们承诺</div>
        <div>
          <img src="../assets/images/cl.jpg" style="width:100%;" />
        </div>
      </div>
      <div class="page-items">
        <div class="title">看看橙友怎么说</div>
        <div style="margin-bottom:30px;">
          <el-row :gutter="50">
            <el-col :span="12">
              <div>
                <el-row :gutter="30">
                  <el-col :span="12">
                    <div>
                      <img src="../assets/images/banner6.jpg" />
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div>
                      <div class="user-name">池塘边的萤火虫 / 用户</div>
                      <div class="user-title">西安思创合壹 行政主管</div>
                      <div
                        class="user-remark"
                      >第一次接触橙汇玩，在古北水镇做的特色寻宝活动，教练带活动给力，平时很闷的程序员哥哥们都玩得很嗨；年会也选择了百场汇做重返校园的主题，对接的过程中餐有一些问题，场地也及时解决了，橙汇玩让我们很省心。</div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="12">
              <div>
                <el-row :gutter="30">
                  <el-col :span="12">
                    <div>
                      <img src="../assets/images/banner6.jpg" />
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div>
                      <div class="user-name">池塘边的萤火虫 / 用户</div>
                      <div class="user-title">西安思创合壹 行政主管</div>
                      <div
                        class="user-remark"
                      >第一次接触橙汇玩，在古北水镇做的特色寻宝活动，教练带活动给力，平时很闷的程序员哥哥们都玩得很嗨；年会也选择了百场汇做重返校园的主题，对接的过程中餐有一些问题，场地也及时解决了，橙汇玩让我们很省心。</div>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="title-sub">橙汇玩 期待为更多客户提供优质服务（部分合作伙伴）</div>
        <div>
          <el-row>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
            <el-col :span="4" style="margin-bottom:10px;">
              <img src="../assets/images/banner7.jpg" />
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="page-items">
        <div class="title">资深顾问团队</div>
        <div style="font-size:18px;color:#999;margin-bottom:30px;">为您提供产品咨询，价格咨询，方案定制等服务。</div>
        <div>
          <el-row :gutter="20">
            <el-col v-for="(item, index) in businessUserList" :key="index" :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <el-row>
                    <el-col :span="10">
                      <div style="width:65px;">
                        <img :src="item.busHeadImg" style="width:100%;border-radius: 50%;" />
                      </div>
                    </el-col>
                    <el-col :span="14">
                      <div class="manager-name">{{item.busName}}</div>
                      <div class="manager-title">{{item.busTitle}}</div>
                    </el-col>
                  </el-row>
                </div>
                <div style="padding: 14px;">
                  <div class="title4">{{item.busPhone}}</div>
                  <div class="title5">{{item.busContent}}</div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>
      <div>
        <footMenu></footMenu>
      </div>
    </div>
  </div>
</template>

<script>
import headMenu from '../components/HeadMenu'
import footMenu from '../components/FootMenu'
import api from '../api/yp'

const orderType = [1, 4, 3, 5, 2]

export default {
  components: {
    headMenu,
    footMenu
  },
  data () {
    return {
      fit: 'fill',
      interval: 5000,
      bigBannerLink: [],
      bannerLink: [],
      groupList: [],
      groupAttrList: [],
      groupAttrListZero: [],
      pcList: [],
      pcAttrList: [],
      pcAttrListZero: [],
      siteList: [],
      siteAttrList: [],
      siteAttrListZero: [],
      caseList: [],
      caseAttrList: [],
      caseAttrListZero: [],
      activityList: [],
      activityAttrList: [],
      activityAttrListZero: [],
      searchText: '',
      searchSelectIndex: 0,
      businessUserList: [],
      orderSelectIndex: 0,
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() + 24 * 3600000 <= Date.now()
        }
      },
      selDate: '',
      orderPeopleNum: 1
    }
  },
  computed: {
    height () {
      return this.$utils.Common.getWidthHeight().height - 180
    },
    userInfo () {
      return this.$store.state.global.userInfo
    }
  },
  created () { },
  beforeDestroy () { },
  mounted () {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    init () {
      this.getIndexBigBannerLink()
      this.getIndexBannerLink()
      this.getPlayGroup()
      this.getPlayPC()
      this.getPlaySite()
      this.getPlayCase()
      this.getPlayActivity()
      this.getBusinessUser()
    },
    toDetail (url) {
      window.location.href = url
    },
    toSearch () {
      this.$router.push({ path: `/search` })
    },
    toSearch2 () {
      this.$router.push({ path: `/search2` })
    },
    toSearch3 () {
      this.$router.push({ path: `/search3` })
    },
    toSearch4 () {
      this.$router.push({ path: `/search4` })
    },
    toSearch5 () {
      this.$router.push({ path: `/search5` })
    },
    toGroupDetail (id) {
      this.$router.push({ path: `/detail?id=${id}` })
    },
    toPCDetail (id) {
      this.$router.push({ path: `/detail2?id=${id}` })
    },
    toSiteDetail (id) {
      this.$router.push({ path: `/detail3?id=${id}` })
    },
    toCaseDetail (id) {
      this.$router.push({ path: `/detail4?id=${id}` })
    },
    toActivityDetail (id) {
      this.$router.push({ path: `/detail5?id=${id}` })
    },
    toSearchText () {
      switch (this.searchSelectIndex) {
        case 0:
          this.toSearch()
          break
        case 1:
          this.toSearch2()
          break
        case 2:
          this.toSearch3()
          break
        case 3:
          this.toSearch4()
          break
        case 4:
          this.toSearch5()
          break
      }
    },
    async getIndexBigBannerLink () {
      const result = await api.getIndexBigBannerLink()

      if (result && result.data) {
        this.bigBannerLink = result.data
        this.bigBannerLink = this.bigBannerLink.filter(f => {
          return f.url
        })
        if (!this.bigBannerLink) {
          this.bigBannerLink = []
        }
      }
    },
    async getIndexBannerLink () {
      const result = await api.getIndexBannerLink()

      if (result && result.data) {
        this.bannerLink = result.data
      }
    },
    async getAttr (attrType) {
      const result = await api.getAttr({
        attrType
      })

      if (result) {
        return result.data.list
      }

      return []
    },
    async getPlayGroup () {
      const attrs = await this.getAttr(1)

      attrs.forEach(item => {
        this.groupAttrList.push({
          id: item.id,
          attrName: item.attrName,
          isCheck: item.isCheck,
          options: item.attrValues ? item.attrValues.map(m => {
            return m.attrValue
          }) : [],
          selectItems: item.isCheck === 1 ? [] : '',
          defaultItems: item.isCheck === 1 ? [] : ''
        })
      })

      if (this.groupAttrList.length > 0) {
        this.groupAttrListZero = []
        this.groupAttrListZero = this.groupAttrListZero.concat(this.groupAttrList[0].options)
      }

      const result = await api.getPlayGroup({
        current: 1,
        pageSize: 4,
        total: 0
      })

      if (result) {
        this.groupList = result.data.list || []
      }
    },
    async getPlayPC () {
      const attrs = await this.getAttr(4)

      attrs.forEach(item => {
        this.pcAttrList.push({
          id: item.id,
          attrName: item.attrName,
          isCheck: item.isCheck,
          options: item.attrValues ? item.attrValues.map(m => {
            return m.attrValue
          }) : [],
          selectItems: item.isCheck === 1 ? [] : '',
          defaultItems: item.isCheck === 1 ? [] : ''
        })
      })

      if (this.pcAttrList.length > 0) {
        this.pcAttrListZero = []
        this.pcAttrListZero = this.pcAttrListZero.concat(this.pcAttrList[5].options)
      }

      const result = await api.getPlayParentChild({
        current: 1,
        pageSize: 4,
        total: 0
      })

      if (result) {
        this.pcList = result.data.list || []
      }
    },
    async getPlaySite () {
      const attrs = await this.getAttr(3)

      attrs.forEach(item => {
        this.siteAttrList.push({
          id: item.id,
          attrName: item.attrName,
          isCheck: item.isCheck,
          options: item.attrValues ? item.attrValues.map(m => {
            return m.attrValue
          }) : [],
          selectItems: item.isCheck === 1 ? [] : '',
          defaultItems: item.isCheck === 1 ? [] : ''
        })
      })

      if (this.siteAttrList.length > 0) {
        this.siteAttrListZero = []
        this.siteAttrListZero = this.siteAttrListZero.concat(this.siteAttrList[5].options)
      }

      const result = await api.getPlaySite({
        current: 1,
        pageSize: 4,
        total: 0
      })

      if (result) {
        this.siteList = result.data.list || []
      }
    },
    async getPlayCase () {
      const attrs = await this.getAttr(5)

      attrs.forEach(item => {
        this.caseAttrList.push({
          id: item.id,
          attrName: item.attrName,
          isCheck: item.isCheck,
          options: item.attrValues ? item.attrValues.map(m => {
            return m.attrValue
          }) : [],
          selectItems: item.isCheck === 1 ? [] : '',
          defaultItems: item.isCheck === 1 ? [] : ''
        })
      })

      if (this.caseAttrList.length > 0) {
        this.caseAttrListZero = []
        this.caseAttrListZero = this.caseAttrListZero.concat(this.caseAttrList[0].options)
      }

      const result = await api.getPlayCase({
        current: 1,
        pageSize: 4,
        total: 0
      })

      if (result) {
        this.caseList = result.data.list || []
      }
    },
    async getPlayActivity () {
      const attrs = await this.getAttr(2)

      attrs.forEach(item => {
        this.activityAttrList.push({
          id: item.id,
          attrName: item.attrName,
          isCheck: item.isCheck,
          options: item.attrValues ? item.attrValues.map(m => {
            return m.attrValue
          }) : [],
          selectItems: item.isCheck === 1 ? [] : '',
          defaultItems: item.isCheck === 1 ? [] : ''
        })
      })

      if (this.activityAttrList.length > 0) {
        this.activityAttrListZero = []
        this.activityAttrListZero = this.activityAttrListZero.concat(this.activityAttrList[0].options)
      }

      const result = await api.getPlayActivity({
        current: 1,
        pageSize: 4,
        total: 0
      })

      if (result) {
        this.activityList = result.data.list || []
      }
    },
    async getBusinessUser () {
      const result = await api.getBusinessUser({
        current: 1,
        pageSize: 4,
        total: 0
      })

      if (result) {
        this.businessUserList = result.data && result.data.list ? result.data.list : []
      }
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

      await api.addOrder({
        otype: orderType[this.orderSelectIndex],
        opeopleNum: this.orderPeopleNum,
        oselectTime: this.selDate,
        userId: this.userInfo.userId,
        userPhone: this.userInfo.userPhone,
        userName: this.userInfo.userName
      })

      this.orderPeopleNum = 1
      this.selDate = ''

      this.$message({
        message: '您的需求已提交成功，我们的客户经理稍后会联系您！',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .page-carousel {
    width: 100%;
    min-width: 1280px;
    height: 500px;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .carousel-item {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .carousel-item-img {
      max-width: 1920px;
      height: 100%;
      margin: 0 auto;
      background-size: 1920px 500px;
    }
  }
  .main-page {
    max-width: 1920px;
    min-width: 1280px;
  }

  .page {
    width: 1152px;
    margin: 0 auto;
    z-index: 1;
  }

  .page-items {
    margin-bottom: 40px;
    .title {
      font-size: 28px;
      margin-bottom: 20px;
    }
    .title-sub {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .sorts {
      margin-bottom: 20px;
      span {
        cursor: pointer;
        margin-right: 15px;
        &.active {
          color: #f57021;
          font-weight: bold;
        }

        &.more {
          position: relative;
          float: right;
          padding-right: 10px;
          color: #666;
        }
        &.more::after {
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -4px;
          width: 8px;
          height: 8px;
          content: "";
          border-top: solid 1px #666;
          border-right: solid 1px #666;
          transform: rotate(45deg);
          -ms-transform: rotate(45deg); /* IE 9 */
          -moz-transform: rotate(45deg); /* Firefox */
          -webkit-transform: rotate(45deg); /* Safari 和 Chrome */
          -o-transform: rotate(45deg); /* Opera */
        }
      }
    }

    .title1 {
      font-size: 14px;
      text-align: center;
      width: 100%;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .title2 {
      font-size: 12px;
      text-align: center;
      width: 100%;
    }

    .title3 {
      font-size: 16px;
      text-align: center;
      width: 100%;
      color: #f57021;
    }

    .user-name {
      padding-top: 5px;
      font-size: 17px;
      margin-bottom: 5px;
    }
    .user-title {
      font-size: 13px;
      margin-bottom: 15px;
    }
    .user-remark {
      font-size: 13px;
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

    .bottom-home-menu {
      font-size: 18px;
      line-height: 45px;
      color: #f57021;
    }

    .bottom-menu {
      font-size: 12px;
      line-height: 30px;
      color: #666;
    }

    .bottom-first-menu {
      font-size: 16px;
      line-height: 40px;
      width: 70px;
      border-top: solid 2px #f57021;
    }
  }

  .page-search {
    position: absolute;
    width: 500px;
    height: 110px;
    left: 50%;
    top: 45%;
    margin-left: -250px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 20px;

    .sorts {
      margin-bottom: 10px;
    }
  }
</style>

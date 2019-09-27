<template>
  <div class="main-page">
    <div class="page">
      <div
        class="page-items"
        style="padding-top:10px;height:20px;margin-bottom:80px;"
        @click="attrSelectShow=false"
      >
        <headMenu></headMenu>
      </div>
      <div class="page-items" style="margin-bottom: 20px;">
        <img src="../assets/images/cd_header.jpg" style="width:100%;height:auto;" />
      </div>
      <div class="page-items">
        <el-row :gutter="20">
          <el-col :span="16">
            <img src="../assets/images/cd_banner.jpg" style="width:100%;height:auto;" />
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">
              <div slot="header" class="clearfix">
                <div
                  style="text-align: center;font-weight:bold;font-size:18px;font-style:italic;"
                >免费定制专属方案</div>
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
      <div class="page-items" style="margin-bottom: 20px;">
        <div style="padding:10px 70px;">
          <div style="font-size:12px;margin-bottom:20px;color:#666;">可筛选条件</div>
          <div style="margin-bottom:20px;">
            <el-row :gutter="10">
              <el-col :span="4">
                <el-row>
                  <el-col :span="6">
                    <img src="../assets/images/cd_1.jpg" style="width:30px;height:30px;" />
                  </el-col>
                  <el-col :span="12">
                    <div
                      :class="['attr-header',checkAttrValue(attrSelectName, '培训演讲')?'active':'']"
                      @click="selectAttr(attrSelectName, '培训演讲')"
                    >培训演讲</div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-row>
                  <el-col :span="6">
                    <img src="../assets/images/cd_2.jpg" style="width:30px;height:30px;" />
                  </el-col>
                  <el-col :span="12">
                    <div
                      :class="['attr-header',checkAttrValue(attrSelectName, '团队拓展')?'active':'']"
                      @click="selectAttr(attrSelectName, '团队拓展')"
                    >团队拓展</div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-row>
                  <el-col :span="6">
                    <img src="../assets/images/cd_3.jpg" style="width:30px;height:30px;" />
                  </el-col>
                  <el-col :span="12">
                    <div
                      :class="['attr-header',checkAttrValue(attrSelectName, '年会')?'active':'']"
                      @click="selectAttr(attrSelectName, '年会')"
                    >年会</div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-row>
                  <el-col :span="6">
                    <img src="../assets/images/cd_4.jpg" style="width:30px;height:30px;" />
                  </el-col>
                  <el-col :span="12">
                    <div
                      :class="['attr-header',checkAttrValue(attrSelectName, '轰趴')?'active':'']"
                      @click="selectAttr(attrSelectName, '轰趴')"
                    >轰趴</div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-row>
                  <el-col :span="6">
                    <img src="../assets/images/cd_5.jpg" style="width:30px;height:30px;" />
                  </el-col>
                  <el-col :span="12">
                    <div
                      :class="['attr-header',checkAttrValue(attrSelectName, '亲子出行')?'active':'']"
                      @click="selectAttr(attrSelectName, '亲子出行')"
                    >亲子出行</div>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="4">
                <el-row>
                  <el-col :span="6">
                    <img src="../assets/images/cd_6.jpg" style="width:30px;height:30px;" />
                  </el-col>
                  <el-col :span="12">
                    <div
                      :class="['attr-header',checkAttrValue(attrSelectName, '公司聚会')?'active':'']"
                      @click="selectAttr(attrSelectName, '公司聚会')"
                    >公司聚会</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
          <div>
            <el-row :gutter="10">
              <el-col
                v-for="(option, index) in attrOptionList"
                :key="index"
                :span="3"
                style="margin-bottom: 20px;"
              >
                <div
                  :class="['key-word', checkAttrValue(attrSelectName, option)?'active':'']"
                  @click="selectAttr(attrSelectName, option)"
                >{{option}}</div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class="page-items" @click="attrSelectShow=false">
        <el-row :gutter="20" style="margin-bottom:20px;">
          <el-col
            v-for="(item, index) in filterSiteList"
            :key="index"
            :span="6"
            style="margin-bottom:15px;"
          >
            <el-card :body-style="{ padding: '0px' }">
              <div @click="toSiteDetail(item.id)">
                <img :src="item.masterImg" style="width:100%;" />
                <div style="padding: 14px;">
                  <div
                    class="title1"
                    style="display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;"
                  >{{item.subTitle}}</div>
                  <div
                    class="title2"
                    style="display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;"
                  >{{item.title}}</div>
                  <div class="title3">
                    <el-row>
                      <el-col :span="14" style="padding-top:3px;">适合{{item.peopleNum}}人</el-col>
                      <el-col
                        :span="10"
                        style="font-size:16px;color:#f57021;text-align:right;"
                      >¥{{parseInt(item.price/100)}}/人起</el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div style="text-align:center;">
          <!--<el-pagination layout="prev, pager, next" :total="1000"></el-pagination>-->
        </div>
      </div>
      <div @click="attrSelectShow=false">
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
      siteList: [],
      filterSiteList: [],
      attrList: [],
      attrSelectShow: false,
      attrSelectLeft: -5,
      attrSelectName: '',
      attrOptionList: [],
      selectAttrList: [],
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
    checkAttrValue () {
      // eslint-disable-next-line no-unused-expressions
      this.selectAttrList

      return (attr, attrValue) => {
        const find = this.selectAttrList.find(f => {
          return f && f.attr === attr && f.attrValue === attrValue
        })

        return find
      }
    },
    checkAttr () {
      // eslint-disable-next-line no-unused-expressions
      this.selectAttrList

      return attr => {
        const find = this.selectAttrList.find(f => {
          return f && f.attr === attr
        })

        return find
      }
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
      this.getPlaySite()
      this.getAttr(3)
    },
    toSiteDetail (id) {
      this.$router.push({ path: `/detail3?id=${id}` })
    },
    async getAttr (attrType) {
      const result = await api.getAttr({
        attrType
      })

      if (result) {
        result.data.list.forEach(item => {
          if (item.attrName !== '首页类型') {
            this.attrList.push({
              id: item.id,
              attrName: item.attrName,
              isCheck: item.isCheck,
              options: item.attrValues ? item.attrValues.map(m => {
                return m.attrValue
              }) : [],
              selectItems: item.isCheck === 1 ? [] : '',
              defaultItems: item.isCheck === 1 ? [] : ''
            })
          }
        })

        this.selectAttrIndex(this.attrList[3], 3)
      }
    },
    async getPlaySite () {
      const result = await api.getPlaySite({
        current: 1,
        pageSize: 99999999,
        total: 0
      })

      if (result) {
        this.siteList = result.data.list || []
        this.filterSite()
      }
    },
    selectAttrIndex (item, index) {
      const notShowKeys = ',培训演讲,团队拓展,年会,轰趴,亲子出行,公司聚会,'
      item.options = item.options.filter(f => {
        return notShowKeys.indexOf(`,${f},`) === -1
      })

      this.attrSelectShow = true
      this.attrSelectName = item.attrName
      this.attrOptionList = item.options
      this.attrSelectLeft = index * 95 - 5
    },
    selectAttr (attr, attrValue) {
      let exist = false
      for (let i = 0, j = this.selectAttrList.length; i < j; i++) {
        if (this.selectAttrList[i] && this.selectAttrList[i].attr === attr && this.selectAttrList[i].attrValue === attrValue) {
          this.selectAttrList.splice(i, 1)
          exist = true
        }
      }

      if (!exist) {
        this.selectAttrList.push({
          attr,
          attrValue
        })
      }

      this.filterSite()
    },
    filterSite () {
      if (this.selectAttrList.length === 0) {
        this.filterSiteList = JSON.parse(JSON.stringify(this.siteList))
        return
      }

      this.filterSiteList = []
      for (let i = 0, j = this.siteList.length; i < j; i++) {
        this.selectAttrList.forEach(f => {
          const find = JSON.parse(this.siteList[i].attrs).find(f1 => {
            return f1.key === f.attr && f1.val === f.attrValue
          })

          if (find) {
            const findFilter = this.filterSiteList.find(f => {
              return f.id === this.siteList[i].id
            })

            if (!findFilter) {
              this.filterSiteList.push(this.siteList[i])
            }
          }
        })
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
        otype: 3,
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
  .attr-header {
    text-align: center;
    font-size: 16px;
    background: linear-gradient(180deg, #fff 50%, #ffdfcc 50%);
    line-height: 30px;
    cursor: pointer;

    &.active {
      color: #f57021;
      font-weight: bold;
    }
  }

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
    position: relative;
    margin-bottom: 40px;
    .title {
      font-size: 28px;
      margin-bottom: 20px;
    }
    .title-sub {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .search-condition {
      border: solid 1px #ccc;
      color: #f57021;
      width: 80px;
      height: 25px;
      line-height: 25px;
      font-size: 14px;
      text-align: center;
      float: left;
      margin-right: 15px;
      cursor: pointer;
      margin-bottom: 10px;

      &:hover {
        border: solid 1px #f57021;
        background: #f57021;
        color: #fff;
      }

      &.active {
        border: solid 1px #f57021;
        background: #f57021;
        color: #fff;
      }
    }

    .search-condition-list {
      position: absolute;
      left: -5px;
      top: 60px;
      z-index: 99999;
      border: solid 1px #ccc;
      padding: 15px 20px 0;
      width: 500px;
      background: #fff;
      font-size: 14px;

      &.none {
        display: none;
      }
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
  }
</style>

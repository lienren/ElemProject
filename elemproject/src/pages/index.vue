<template>
  <div class="main-page">
    <div class="page">
      <div class="page-items" style="padding-top:20px;height:403px;">
        <headMenu></headMenu>
      </div>
      <div class="page-items">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="title">为你推荐</div>
            <el-row :gutter="20">
              <el-col :span="12" style="margin-bottom: 20px;">
                <div @click="toDetail(1)">
                  <img src="../assets/images/banner1.jpg" style="width:100%;" />
                </div>
              </el-col>
              <el-col :span="12" style="margin-bottom: 20px;">
                <div @click="toDetail(1)">
                  <img src="../assets/images/banner1.jpg" style="width:100%;" />
                </div>
              </el-col>
              <el-col :span="12">
                <div @click="toDetail(1)">
                  <img src="../assets/images/banner1.jpg" style="width:100%;" />
                </div>
              </el-col>
              <el-col :span="12">
                <div @click="toDetail(1)">
                  <img src="../assets/images/banner1.jpg" style="width:100%;" />
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
                <span class="active">团建</span>
                <span>亲子</span>
                <span>场地</span>
                <span>活动</span>
              </div>
              <div>
                <el-form label-position="left" size="small" label-width="60px">
                  <el-form-item label="人数">
                    <el-input-number v-model="num" :min="1" :max="100000"></el-input-number>
                  </el-form-item>
                  <el-form-item label="手机号">
                    <el-input placeholder="请输入手机号"></el-input>
                  </el-form-item>
                  <el-form-item label="验证码">
                    <el-input placeholder="请输入验证码">
                      <el-button slot="append">短信验证</el-button>
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      type="primary"
                      style="width:100%;background:#f57021;border:solid 1px #f57021;"
                      @click="toSearch"
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
                  <div class="title1">{{item.title}}</div>
                  <div class="title2">{{item.subTitle}}</div>
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
          <span>旅行团建</span>
          <span>培训团建</span>
          <span>主题团建</span>
          <span>定制团建</span>
          <span class="more">更多</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <div @click="toDetail(1)">
                <img src="../assets/images/banner2.jpg" class="image" />
                <div style="padding: 14px;">
                  <div class="title1">【怒放的生命】</div>
                  <div class="title2">来自乡野的呼唤1天一夜</div>
                  <div class="title3">698元/人起</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <div @click="toDetail(1)">
                <img src="../assets/images/banner2.jpg" class="image" />
                <div style="padding: 14px;">
                  <div class="title1">【怒放的生命】</div>
                  <div class="title2">来自乡野的呼唤1天一夜</div>
                  <div class="title3">698元/人起</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <div @click="toDetail(1)">
                <img src="../assets/images/banner2.jpg" class="image" />
                <div style="padding: 14px;">
                  <div class="title1">【怒放的生命】</div>
                  <div class="title2">来自乡野的呼唤1天一夜</div>
                  <div class="title3">698元/人起</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card :body-style="{ padding: '0px' }">
              <div @click="toDetail(1)">
                <img src="../assets/images/banner2.jpg" class="image" />
                <div style="padding: 14px;">
                  <div class="title1">【怒放的生命】</div>
                  <div class="title2">来自乡野的呼唤1天一夜</div>
                  <div class="title3">698元/人起</div>
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
            <div style="margin-bottom:20px;" @click="toPCDetail(item.id)">
              <img :src="item.masterImg" style="width:100%;" />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="page-items">
        <div class="title">活动服务</div>
        <div class="sorts">
          <span>旅行团建</span>
          <span>培训团建</span>
          <span>主题团建</span>
          <span>定制团建</span>
          <span class="more">更多</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="6">
            <div style="margin-bottom:20px;" @click="toDetail(1)">
              <img src="../assets/images/banner4.jpg" style="width:100%;" />
            </div>
          </el-col>
          <el-col :span="6">
            <div style="margin-bottom:20px;" @click="toDetail(1)">
              <img src="../assets/images/banner4.jpg" style="width:100%;" />
            </div>
          </el-col>
          <el-col :span="6">
            <div style="margin-bottom:20px;" @click="toDetail(1)">
              <img src="../assets/images/banner4.jpg" style="width:100%;" />
            </div>
          </el-col>
          <el-col :span="6">
            <div style="margin-bottom:20px;" @click="toDetail(1)">
              <img src="../assets/images/banner4.jpg" style="width:100%;" />
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="page-items">
        <div class="title">案例</div>
        <div class="sorts">
          <span>旅行团建</span>
          <span>培训团建</span>
          <span>主题团建</span>
          <span>定制团建</span>
          <span class="more">更多</span>
        </div>
        <el-row :gutter="20">
          <el-col :span="6">
            <div style="margin-bottom:20px;" @click="toDetail(1)">
              <img src="../assets/images/banner5.jpg" style="width:100%;" />
            </div>
          </el-col>
          <el-col :span="6">
            <div style="margin-bottom:20px;" @click="toDetail(1)">
              <img src="../assets/images/banner5.jpg" style="width:100%;" />
            </div>
          </el-col>
          <el-col :span="6">
            <div style="margin-bottom:20px;" @click="toDetail(1)">
              <img src="../assets/images/banner5.jpg" style="width:100%;" />
            </div>
          </el-col>
          <el-col :span="6">
            <div style="margin-bottom:20px;" @click="toDetail(1)">
              <img src="../assets/images/banner5.jpg" style="width:100%;" />
            </div>
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
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <el-row>
                    <el-col :span="12">
                      <div style="width:65px;">
                        <img src="../assets/images/banner8.jpg" style="width:100%;" />
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="manager-name">ChengSi</div>
                      <div class="manager-title">资深顾问</div>
                    </el-col>
                  </el-row>
                </div>
                <div style="padding: 14px;">
                  <div class="title4">029-8888888</div>
                  <div class="title5">擅长团建方案，经验丰富，参与执行过多次大型团建活动，对客户的要求百分百投入，注重细节善于变通。</div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <el-row>
                    <el-col :span="12">
                      <div style="width:65px;">
                        <img src="../assets/images/banner8.jpg" style="width:100%;" />
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="manager-name">ChengSi</div>
                      <div class="manager-title">资深顾问</div>
                    </el-col>
                  </el-row>
                </div>
                <div style="padding: 14px;">
                  <div class="title4">029-8888888</div>
                  <div class="title5">擅长团建方案，经验丰富，参与执行过多次大型团建活动，对客户的要求百分百投入，注重细节善于变通。</div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <el-row>
                    <el-col :span="12">
                      <div style="width:65px;">
                        <img src="../assets/images/banner8.jpg" style="width:100%;" />
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="manager-name">ChengSi</div>
                      <div class="manager-title">资深顾问</div>
                    </el-col>
                  </el-row>
                </div>
                <div style="padding: 14px;">
                  <div class="title4">029-8888888</div>
                  <div class="title5">擅长团建方案，经验丰富，参与执行过多次大型团建活动，对客户的要求百分百投入，注重细节善于变通。</div>
                </div>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card :body-style="{ padding: '0px' }">
                <div style="padding: 14px;">
                  <el-row>
                    <el-col :span="12">
                      <div style="width:65px;">
                        <img src="../assets/images/banner8.jpg" style="width:100%;" />
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <div class="manager-name">ChengSi</div>
                      <div class="manager-title">资深顾问</div>
                    </el-col>
                  </el-row>
                </div>
                <div style="padding: 14px;">
                  <div class="title4">029-8888888</div>
                  <div class="title5">擅长团建方案，经验丰富，参与执行过多次大型团建活动，对客户的要求百分百投入，注重细节善于变通。</div>
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

export default {
  components: {
    headMenu,
    footMenu
  },
  data () {
    return {
      num: 1,
      groupList: [],
      groupAttrList: [],
      groupAttrListZero: [],
      pcList: [],
      pcAttrList: [],
      pcAttrListZero: []
    }
  },
  computed: {
    height () {
      return this.$utils.Common.getWidthHeight().height - 180
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
      this.getPlayGroup()
      this.getPlayPC()
    },
    toDetail (id) {
      this.$router.push({ path: `/detail?id=${id}` })
    },
    toSearch () {
      this.$router.push({ path: `/search` })
    },
    toSearch2 () {
      this.$router.push({ path: `/search2` })
    },
    toGroupDetail (id) {
      this.$router.push({ path: `/detail?id=${id}` })
    },
    toPCDetail (id) {
      this.$router.push({ path: `/detail2?id=${id}` })
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
        this.pcAttrListZero = this.pcAttrListZero.concat(this.pcAttrList[3].options)
      }

      const result = await api.getPlayParentChild({
        current: 1,
        pageSize: 4,
        total: 0
      })

      if (result) {
        this.pcList = result.data.list || []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .main-page {
    width: 1280px;
    margin: 0 auto;
    background: url("../assets/images/index_bg.jpg") no-repeat;
    background-size: contain;
  }

  .page {
    width: 1024px;
    margin: 0 auto;
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
        margin-right: 10px;
        &.active {
          color: #f57021;
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
      font-size: 18px;
      text-align: center;
      width: 100%;
    }

    .title2 {
      font-size: 14px;
      text-align: center;
      width: 100%;
      margin-bottom: 10px;
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
</style>

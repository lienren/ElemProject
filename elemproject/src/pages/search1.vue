<template>
  <div class="main-page">
    <div class="page">
      <div class="page-items" style="padding-top:15px;height:20px;" @click="attrSelectShow=false">
        <headMenu></headMenu>
      </div>
      <div class="page-items" style="margin-bottom: 20px;">
        <div style="font-size:12px;margin-bottom:10px;color:#666;">可筛选条件</div>
        <div>
          <el-row :gutter="10">
            <div
              v-for="(item, index) in attrList"
              :key="index"
              :class="['search-condition', checkAttr(item.attrName)?'active':'']"
              @click="selectAttrIndex(item, index)"
            >{{item.attrName}}</div>
          </el-row>
        </div>
        <div
          :class="['search-condition-list',attrSelectShow?'':'none']"
          :style="{'left':attrSelectLeft+'px'}"
        >
          <el-row :gutter="10">
            <el-col
              v-for="(option, index) in attrOptionList"
              :key="index"
              :span="6"
              style="margin-bottom: 10px;"
            >
              <div
                :class="['key-word', checkAttrValue(attrSelectName, option)?'active':'']"
                @click="selectAttr(attrSelectName, option)"
              >{{option}}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-button
              style="float:right;"
              type="text"
              icon="el-icon-close"
              @click="attrSelectShow=false"
            ></el-button>
          </el-row>
        </div>
      </div>
      <div class="page-items" @click="attrSelectShow=false">
        <el-row :gutter="20" style="margin-bottom:20px;">
          <el-col
            v-for="(item, index) in filterGroupList"
            :key="index"
            :span="6"
            style="margin-bottom:15px;"
          >
            <el-card :body-style="{ padding: '0px' }">
              <div @click="toGroupDetail(item.id)">
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
                      <el-col
                        :span="14"
                        style="padding-top:3px;"
                      >{{item.strokeDay}}天/适合{{item.minPeopleNum}}~{{item.maxPeopleNum}}人</el-col>
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
      groupList: [],
      filterGroupList: [],
      attrList: [],
      attrSelectShow: false,
      attrSelectLeft: -5,
      attrSelectName: '',
      attrOptionList: [],
      selectAttrList: []
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
      this.getAttr(1)
    },
    toGroupDetail (id) {
      this.$router.push({ path: `/detail?id=${id}` })
    },
    async getAttr (attrType) {
      const result = await api.getAttr({
        attrType
      })

      if (result) {
        result.data.list.forEach(item => {
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
        })
      }
    },
    async getPlayGroup () {
      const result = await api.getPlayGroup({
        current: 1,
        pageSize: 99999999,
        total: 0
      })

      if (result) {
        this.groupList = result.data.list || []
        this.filterGroup()
      }
    },
    selectAttrIndex (item, index) {
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

      this.filterGroup()
    },
    filterGroup () {
      if (this.selectAttrList.length === 0) {
        this.filterGroupList = JSON.parse(JSON.stringify(this.groupList))
        return
      }

      this.filterGroupList = []
      for (let i = 0, j = this.groupList.length; i < j; i++) {
        this.selectAttrList.forEach(f => {
          const find = JSON.parse(this.groupList[i].attrs).find(f1 => {
            return f1.key === f.attr && f1.val === f.attrValue
          })

          if (find) {
            this.filterGroupList.push(this.groupList[i])
          }
        })
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

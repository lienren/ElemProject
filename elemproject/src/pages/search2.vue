<template>
  <div class="main-page">
    <div class="page">
      <div class="page-items" style="padding-top:15px;height:20px;">
        <headMenu></headMenu>
      </div>
      <div class="page-items">
        <div style="font-size:12px;margin-bottom:10px;color:#666;">可筛选条件</div>
        <div>
          <el-popover
            v-for="(item, index) in attrList"
            :key="index"
            placement="bottom-start"
            width="900"
            trigger="click"
          >
            <div>
              <el-row :gutter="10">
                <el-col
                  v-for="(option, optionIndex) in item.options"
                  :key="optionIndex"
                  :span="2"
                  style="margin-bottom: 10px;"
                >
                  <div
                    :class="['key-word', checkAttrValue(item.attrName, option)?'active':'']"
                    @click="selectAttr(item.attrName, option)"
                  >{{option}}</div>
                </el-col>
              </el-row>
            </div>
            <div
              slot="reference"
              :class="['search-condition', checkAttr(item.attrName)?'active':'']"
            >{{item.attrName}}</div>
          </el-popover>
          <div class="clearfix"></div>
        </div>
      </div>
      <div class="page-items">
        <el-row :gutter="20" style="margin-bottom:20px;">
          <el-col
            v-for="(item, index) in filterPCList"
            :key="index"
            :span="6"
            style="margin-bottom:15px;"
          >
            <el-card :body-style="{ padding: '0px' }">
              <div @click="toPCDetail(item.id)">
                <img :src="item.masterImg" style="width:100%;" />
                <div style="padding: 14px;">
                  <div class="title1">{{item.subTitle}}</div>
                  <div class="title2">{{item.title}}</div>
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
      pcList: [],
      filterPCList: [],
      attrList: [],
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
      this.getPlayPC()
      this.getAttr(4)
    },
    toPCDetail (id) {
      this.$router.push({ path: `/detail2?id=${id}` })
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
    async getPlayPC () {
      const result = await api.getPlayParentChild({
        current: 1,
        pageSize: 99999999,
        total: 0
      })

      if (result) {
        this.pcList = result.data.list || []
        this.filterPC()
      }
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

      this.filterPC()
    },
    filterPC () {
      if (this.selectAttrList.length === 0) {
        this.filterPCList = JSON.parse(JSON.stringify(this.pcList))
        return
      }

      this.filterPCList = []
      for (let i = 0, j = this.pcList.length; i < j; i++) {
        this.selectAttrList.forEach(f => {
          const find = JSON.parse(this.pcList[i].attrs).find(f1 => {
            return f1.key === f.attr && f1.val === f.attrValue
          })

          if (find) {
            this.filterPCList.push(this.pcList[i])
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .main-page {
    width: 1280px;
    margin: 0 auto;
    background: url("../assets/images/header_bg.jpg") repeat-x;
    background-size: 293px 50px;
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

    .search-condition {
      border: solid 1px #ccc;
      color: #f57021;
      width: 80px;
      height: 25px;
      line-height: 25px;
      font-size: 13px;
      text-align: center;
      float: left;
      margin-right: 15px;
      cursor: pointer;

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

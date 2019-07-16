<template>
  <div class="dashboard-contain">
    <div>Hello world!</div>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        myChart: null
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
      })
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .contain {
    background-color: #fff;
  }
</style>

<template>
  <div class="header">
    <router-link tag='i' to="/" class="iconfont icon-fanhui header-back"></router-link>
    <h2>标题</h2>
  </div>
</template>

<script>
  export default {
    name:'WeekHeader',
    props:['title'],
    data() {
        return {}
    }
  }
</script>

<style lang='stylus' scoped>
  .header
    position:relative
    background:#00bcd4
    line-height:.86rem
    color:#fff
    text-align:center
    .header-back
      position:absolute
      left:0
      top:0
      width:.8rem
      color:#fff
    h2
      text-align:center
      font-size:.32rem
</style>

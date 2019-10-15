<template>
    <div class="header">
        <i class="iconfont icon-fanhui header-back"></i>
        <div class="header-input">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="输入城市/景点/游玩主题">
        </div>
        <router-link tag="div" to='/city' class="header-right">
            <span>长沙</span>
            <i class="iconfont icon-jiantou"></i>
         </router-link>
    </div>
</template>
<script>
export default {
    name:'Header'
}
</script>
<style lang="stylus" scoped>
.header
    display:flex
    height .88rem
    line-height:.88rem
    background-color:#00bcd4
    color:#fff
    .header-back
        width:.88rem
        text-align:center
    .header-input
        padding-left:.1rem
        flex:1
        background-color:#fff
        height:.64rem
        line-height:.64rem
        margin-top:.1rem
        border-radius .1rem
        .icon-sousuo
            color:#ccc
            vertical-align:middle
        input
            width:80%
            vertical-align:middle
            font-size:.26rem
    .header-right
        padding:0 .15rem
        .icon-jiantou
            font-size:.26rem
</style>

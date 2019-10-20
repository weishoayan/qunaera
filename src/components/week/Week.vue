<template>
  <div class="week">
    <week-header></week-header>
    <week-list :weekInfo="weekInfo"></week-list>
  </div>
</template>

<script>

  import {getWeeks} from '@/api'
  import  WeekHeader from　'./base/Header'
  import  WeekList from　'./base/List'

  export default {
    name:'Week',
    components:{
      WeekHeader,
      WeekList
    },
    data(){
      return {
        weekInfo:[],
      }
    },//activated
    activated(){
        this.getData()
    },
    methods:{
      async getData(){
        let res = await getWeeks(this.$route.params.id)
        let {weekInfo} = res.data.data
        this.weekInfo = weekInfo
      }
    }
  }
</script>

<style lang='stylus' scoped>

</style>

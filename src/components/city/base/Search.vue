<template>
  <div class="search">
    <input
      type="text"
      class='header-input'
      placeholder='请输入城市名和拼音'
      v-model="keyword">
      <div class="search-content" v-show="keyword" ref="wrapper">
        <ul>
          <li class='search-item border-bottom'
              v-for="city in Cityfilter"
              :key="city.id"
              @click="handleClick(city.name)">{{city.name}}</li>
          <li v-if="isShow" class='search-item border-bottom'>未匹配到数据</li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    name:'CitySearch',
    props:['cities'],
    data(){
      return {
        keyword:''
      }
    },
    computed:{
      Cityfilter(){
        const result = [];
        for (const key in this.cities) {
         // let ketword = this.keyword
          this.cities[key].forEach((item,index) => {
              if (item.name.includes(this.keyword)||item.spell.includes(this.keyword)) {
                result.push(item)
              }
          });
        }
        return result
      },
      isShow(){
        return !this.Cityfilter.length
      }
  }
  ,created(){
      //console.log(this.cities)
  },
  methods:{
      handleClick(){}
    }
  }
</script>

<style lang='stylus' scoped>
.border-bottom::before
  border-color:#aaa
.search
  position:relative
  height:.72rem
  padding:0.1rem
  background-color:#00bcd4
  .header-input
    width:100%
    height:100%
    border-radius:.1rem
    text-align:center
  .search-content
    position:fixed
    z-index:20
    overflow:hidden
    top:1.78rem
    left:0
    right:0
    bottom:0
    background-color:#ccc
    .search-item
      line-height:.8rem
      padding-left:.2rem
      background-color:#fff
</style>

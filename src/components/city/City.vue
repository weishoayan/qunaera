<template>
  <div>
    <city-heared></city-heared>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <!-- <city-alphabet :cities="cities"></city-alphabet> -->
  </div>
</template>

<script>
import CityHeared from "./base/Header";
import CitySearch from "./base/Search";
import CityList from "./base/List";
// import CityAlphabet from "./base/Alphabet";
import {getCity} from '../../api/index'
export default {
  name: "City",
  data() {
    return {
      cities:[],
      hotCities:[]
    };
  },

  components: { CityHeared, CitySearch , CityList , //CityAlphabet 
  },

  created() {
      this.getCity()
  },

  methods: {
      getCity(){
          getCity().then(res=>{
              console.log(res.data.data)
              this.cities = res.data.data.cities
              this.hotCities = res.data.data.hotCities
          })
      }
  }
};
</script>
<style lang="stylus" scoped>
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
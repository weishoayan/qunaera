<template>
  <div>
    <city-heared></city-heared>
    <city-search :cities="cities"></city-search>
  </div>
</template>

<script>
import CityHeared from "./base/Header";
import CitySearch from "./base/Search";
import {getCity} from '../../api/index'
export default {
  name: "City",
  data() {
    return {
      cities:[],
      hotCities:[]
    };
  },

  components: { CityHeared, CitySearch },

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
<style lang="stylus" scoped></style>
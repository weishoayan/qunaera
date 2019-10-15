<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-nav :iconList="iconList"></home-nav>
        <home-favourite :recommendList="recommendList"></home-favourite>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './base/Header'
import HomeSwiper from './base/Swiper'
import HomeNav from './base/Nav'
import HomeFavourite from './base/Favourite'
import HomeWeekend from './base/Weekend'
import {getHome} from '../../api/index'
export default {
    name:'Home',
    data(){
        return {
            iconList:[],
            recommendList:[],
            swiperList:[],
            weekendList:[]
        }
    },
    components:{HomeHeader,HomeSwiper,HomeNav,HomeFavourite,HomeWeekend},
    created(){
        this.getQuery()
    },
    methods:{
        getQuery(){
            getHome().then(res=>{
                console.log(res.data.data)
                this.iconList=res.data.data.iconList
                this.recommendList=res.data.data.recommendList
                this.swiperList=res.data.data.swiperList
                this.weekendList=res.data.data.weekendList
            })
        }
    }
}
</script>
<style lang="">
    
</style>
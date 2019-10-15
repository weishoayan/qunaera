<template>
    <div class="swiper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swipe-img" 
                    :src="item.imgUrl" 
                    :alt="item.desc" style="opacity: 1;">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import {getHome} from '../../../api/index'
export default {
    name:'HomeSwiper',
    props:['swiperList'],
    data(){
        return {
            // imgList:[],
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop:true,
                autoplay:true
            }
        }
    },
}
</script>
<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
    background-color:#fff
.swiper
    height:2.19rem
    .swipe-img
        width:100%
    
</style>
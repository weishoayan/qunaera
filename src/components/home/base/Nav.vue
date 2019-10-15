<template>
    <swiper :options="swiperOption" ref="mySwiper" >
                <!-- slides -->
                <swiper-slide v-for="(imgs,index) in filterImgs" :key="index">
                    <div class="nav">
                        <div class="item" v-for="item in imgs" :key="item.id">
                            <img :src="item.imgUrl" :alt="item.desc" >
                            <span class="item-desc">{{item.desc}}</span>
                        </div>
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
        
</template>
<script>
import {getHome} from '../../../api/index'
export default {
    name:'HomeNav',
    props:['iconList'],
    data(){
        return{
            // iconList:this.$props.iconList,
            swiperOption: {
                // some swiper options/callbacks
                // 所有的参数同 swiper 官方 api 参数
                pagination: {
                    el: '.swiper-pagination'
                },
            }
        }
    },
    computed:{
        filterImgs(){
            let imgs = []
            this.$props.iconList.forEach((item,index)=>{
                let page = ~~(index/8)
                if (!imgs[page]) {
                    imgs[page] = []
                }
                imgs[page].push(item)
            })
            return imgs
        }
    },
}
</script>
<style lang="stylus" scoped>
.nav
    display:flex
    flex-wrap:wrap
    height:3.7rem
    .item
        display:flex
        flex-direction:column
        align-items:center
        width:25%
        height:50%
        text-align:center
        .item-desc
            width:100%
        img
            margin-top:.2rem
            width:1.1rem
</style>
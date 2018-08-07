<template>
	<div id="home">
		<h1>首页</h1>
		<Banner :data="bannerData"/> 
        <Hot :datas="hotData" />
	</div>
</template>

<script>
import {getHomeBannerData,getHomeHotData} from '../../services/goodsService.js'
import Banner from '@/components/home/index/banner.vue'
import Hot from '@/components/home/index/hot.vue'
export default {
    data(){
        return {
           bannerData: [],
           hotData:{}
        }
    },
    components:{
        Banner,
        Hot
    },
    mounted(){
        getHomeBannerData().then(({data1,data2})=>{
             this.bannerData = [data1,data2]
        }),
        getHomeHotData().then(result=>{
            this.hotData = result
        })
    }
}
</script>

<style>
</style>
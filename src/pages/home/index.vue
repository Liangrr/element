<template>
	<div id="home">
		<h1>首页</h1>
		<Banner :data="bannerData"/>  
	</div>
</template>

<script>
import {getHomeBannerData} from '../../services/goodsService.js'
import Banner from '@/components/home/index/banner.vue'
export default {
    data(){
        return {
           bannerData: [],
        }
    },
    components:{
        Banner,
    },
    mounted(){
        getHomeBannerData().then(({data1,data2})=>{
             this.bannerData = [data1,data2]
        })
    }
}
</script>

<style>
</style>
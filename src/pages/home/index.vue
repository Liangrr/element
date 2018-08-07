<template>

	<div id="home">
		<Head></Head>
	
		<app-nav></app-nav>

		<Banner :data="bannerData"/> 
        <Hot :datas="hotData" />

	</div>
</template>

<script>

import Location from '@/components/home/index/banner.vue';
import Goodlist from '@/components/home/index/goodlist.vue';
import Hot from '@/components/home/index/hot.vue';

import AppNav from '@/components/common/appNav.vue';
import Head from '@/components/common/header.vue';

import {getHomeBannerData,getHomeHotData} from '../../services/goodsService.js'
import Banner from '@/components/home/index/banner.vue'

export default {
	components:{
		Location,
		Goodlist,
		Hot,
		AppNav,
		Head,
		Banner,
	},
    data(){
        return {
           bannerData: [],
           hotData:{}
        }
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
<template>

<page id="home">
        <Head></Head>
		<Banner :data="bannerData"/> 
        <Hot :datas="hotData" />
        <app-nav></app-nav>
        <Goodlist :listData="goodLists"/>
</page>
</template>

<script>

import Location from '@/components/home/index/banner.vue';
import Goodlist from '@/components/home/index/goodlist.vue';
import Hot from '@/components/home/index/hot.vue';

import AppNav from '@/components/common/appNav.vue';
import Head from '@/components/common/header.vue';

import {getHomeBannerData,getHomeHotData,getHomeGoodListData} from '../../services/goodsService.js'
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
           hotData:{},
           goodLists: [],
        }
    },
    mounted(){
        getHomeBannerData().then(({data1,data2})=>{
             this.bannerData = [data1,data2]
        }),
        getHomeHotData().then(result=>{
            this.hotData = result
        })
        getHomeGoodListData().then(result=>{
            this.goodLists.push(result)
            console.log(result)
        })
    }
}

</script>

<style>
</style>
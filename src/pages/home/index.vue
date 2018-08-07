<template>
	<div id="home">
		<Search></Search>
	
		<app-nav></app-nav>

		<h1>首页</h1>
		<Banner :data="bannerData"/>  
	</div>
</template>

<script>

import Location from '@/components/home/index/banner.vue';
import Goodlist from '@/components/home/index/goodlist.vue';
import Hot from '@/components/home/index/hot.vue';

import AppNav from '@/components/common/appNav.vue';
import Header from '@/components/common/header.vue';
import Search from '@/components/common/search.vue';

import {getHomeBannerData} from '../../services/goodsService.js'
import Banner from '@/components/home/index/banner.vue'

export default {
	components:{
		Location,
		Goodlist,
		Hot,
		AppNav,
		Header,
		Search,
		Banner,
	},
    data(){
        return {
           bannerData: [],
        }
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
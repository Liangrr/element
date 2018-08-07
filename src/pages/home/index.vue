<template>
	<div>
		<!--<Banner :data="bannerData"/>-->  
		<app-nav></app-nav>
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
    data(){
        return {
           bannerData: [],
        }
    },
    components:{
        Banner,
        Location,
		Goodlist,
		Hot,
		AppNav,
		Header,
		Search,
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
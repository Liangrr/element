<template>

<page id="home" ref="page" @onScroll="homePageScroll">
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
           count:8,
           page:1,
           counts:0,
           bool:false,
        }
    },
    methods:{
        requestGoodList(){
            getHomeGoodListData(this.counts).then(result=>{
                this.goodLists = [...this.goodLists,...result]
                this.$nextTick(()=>{
                    this.$refs.page.refreshDOM()
                     this.page++,
                     this.counts=this.page*this.count
                     this.bool = false;
                })
            })
        },
         homePageScroll(y){
            if(y<50 && (!this.bool)){
                console.log(1)
                this.bool=true;
                this.requestGoodList(this.count)
                console.log(y)
            }   
        }
    },
    mounted(){
        getHomeBannerData().then(({data1,data2})=>{
             this.bannerData = [data1,data2]
        }),
        getHomeHotData().then(result=>{
            this.hotData = result
        })
        this.requestGoodList()
    }
}

</script>

<style>
</style>
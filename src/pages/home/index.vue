<template>

<page id="home" ref="page" @onScroll="homePageScroll">
        <Head></Head>
		<Banner :data="bannerData"/> 
        <Hot :datas="hotData" />
        <ul class="nav">
			<li v-for="(item,index) in navData" :key="index" @click="navAction(index)">{{item}}</li>
		</ul>
		<!--<app-nav v-show='isShow' class="appnav"></app-nav>-->
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
		AppNav,
		Hot,
		Head,
		Banner,
	},
    data(){
        return {
           navData:['综合排序','距离最近','品质联盟','筛选'],
           bannerData: [],
           hotData:{},
           goodLists: [],
           count:8,
           page:1,
           counts:0,
           bool:false,
           isShow:false,
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
            if(y.disY<50 && (!this.bool)){
                this.bool=true;
                this.requestGoodList(this.count)
            }
            if (y.scrollY<=-350) {
            	this.isShow = true;
            	
            }else if(y.scrollY>-350){
            	this.isShow = false;
            }
        },
        navAction(index){
        	
        }
    },
    mounted(){
        getHomeBannerData().then(({data1,data2})=>{
             this.bannerData = [data1,data2]
        }),
        getHomeHotData().then(result=>{
            this.hotData = result
        });
        this.requestGoodList();
    }
}

</script>

<style scoped>
.nav{
	width: 100%;
	height: 30px;
	line-height: 30px;
	border-top: 1px solid #ccc;
	border-bottom: 1px solid #ccc;
	background-color: white;
	position: relative;
	z-index: 10;
	display: flex;
}
.nav li{
	flex: 1;
	text-align: center;
	font-size: 12px;
}
/*.appnav{
	width: 100%;
	position: fixed;
	top: 50px;
	left: 0;
}*/
</style>
<template>
<div>
	<search class='search' v-show='isShowSearch'></search>
	<app-nav class='appnav' v-show='isShowAppNav'></app-nav>
    <page id="home" ref="page" @onScroll="homePageScroll">
    		<Head></Head>
            <Banner :data="bannerData"/> 
            <Hot :datas="hotData" />
            <div class="home-box">
                <span class="box left"></span>
                <p class="box right">推荐商家</p>
                <span></span>
            </div>
			<ul class="nav">
				<li v-for="(item,index) in navData" :key="index" @click="navAction(index)">{{item}}</li>
			</ul>
            <Goodlist :listData="goodLists"/>
        
    </page>
    <div class="back-top" @click="backTopAction()" v-show="isLoad">↑</div>
</div>

</template>

<script>

import Location from '@/components/home/index/banner.vue';
import Goodlist from '@/components/home/index/goodlist.vue';
import Hot from '@/components/home/index/hot.vue';

import Search from "@/components/common/search.vue";
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
		Search,
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
           isLoad:false,
           isShowSearch:false,
           isShowAppNav:false,
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
//      	这个是滚动到disY(滚动scroll.y与scroll.maxScrollY的差)的时候请求数据
            if(y.disY<50 && (!this.bool)){
                this.bool=true;
                this.requestGoodList(this.count);
                this.isLoad = true
            }
//          这个是当搜索框滚动y值小于50时显示固定在顶部
            if(y.scrollY<-40){
            	this.isShowSearch = true
            }else{
            	this.isShowSearch = false;
            }
//          这个是当appnav滚动y值小于50时显示固定在顶部
            if(y.scrollY<-329){
            	this.isShowAppNav = true
            }else{
            	this.isShowAppNav = false;
            }
        },
        backTopAction(){
            this.isLoad = true
            this.$refs.page.scrollTop()
        },
        navAction(index){
			this.$refs.page.toAppNav();
		},
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
.search{
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 99;	
}
.appnav{
	width: 100%;
	position: absolute;
	top: 44px;
	left: 0;
	z-index: 99;
}
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

.home-box{
    width:100%;
    height:40px;
    display: flex;
    justify-content:center;
    align-items: center;
}
.home-box p{
    width:70px;
    height:20px;
    text-align:center;
    line-height:20px;
    color:#000;
    font-size:13px;
}
span{
    display: inline-block;
    height:1px;
    background: #bfbfbf;
    width:16px;
}
.back-top{
    width:36px;
    height:36px;
    background: #fff;
    position:absolute;
    bottom:70px;
    right:13px;
    border-radius:50%;
    border:1px solid #e6e6e6;
    line-height:36px;
    text-align:center;
    color:#999;
}
</style>
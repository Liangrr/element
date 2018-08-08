<template>
<div>
    <page id="home" ref="page" @onScroll="homePageScroll">
            <Head></Head>
            <Banner :data="bannerData"/> 
            <Hot :datas="hotData" />
            <div class="home-box">
                <span class="box left"></span>
                <p class="box right">推荐商家</p>
                <span></span>
            </div>
            <app-nav></app-nav>
            <Goodlist :listData="goodLists"/>
        
    </page>
    <div class="back-top" @click="backTopAction()">↑</div>
</div>

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
            if(y<50 && (!this.bool)){
                this.bool=true;
                this.requestGoodList(this.count)

                this.isLoad = true
            } 
        },
        backTopAction(){
           console.log(this.$refs.page.scrollTop)
            
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
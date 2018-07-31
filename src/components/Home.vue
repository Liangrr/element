<template>
<div>
    <div id="home" class="page">
        <header class="header" >
            <router-link class="header-btn header-btn-left"
                to="/home/location">
                {{place}}
            </router-link>
            <h1 class="title">首页</h1>
            <span class="header-btn header-btn-right" >更多</span>
        </header>
        
        <ul>
            <li v-for="(item, index) in goodlist" @click="goodsAction(index)">
                <router-link  :to="{name:'goods1',params:{dataSource:obj}}">
                	{{item.name}}
            	</router-link>
            </li>
        </ul>
        
    </div>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
    	<router-view></router-view>
    </transition>
</div>
</template>

<script>
import Loca from './Location.vue';

export default {
    data(){
        return {
			goodlist:[
			{'name':'上衣','price':'999','brand':'阿玛尼'},
			{'name':'下装','price':'888','brand':'KiTon'},
			{'name':'外套','price':'1080','brand':'阿迪达斯'},
			{'name':'鞋子','price':'599','brand':'耐克'},
			],
            place:'定位...',
			obj:{},
        }
    },
    components:{
    	Loca,	
    },
    methods:{
    	listener(result){
            this.place = result;
	    },
//	    点击商品获得属性传给对象,然后再通过路由传值传给其他界面
	    goodsAction(index){
	    	let value = this.goodlist[index];
	    	this.obj.goods = value;
	    }
    },
    activated(){
//  	非父子间传值,获取定位传过来的地址
        this.$center.$on('send-location',this.listener)
    },
}
</script>

<style scoped>
#home{
    background: papayawhip;
    padding-top: 44px;
}
.header{
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
	background-color: dodgerblue;
}
.title{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 44px;
    font-size: 18px;
}
.header-btn{
    position: absolute;
    top: 0;
    height: 44px;
    line-height: 44px;
    padding: 0 10px;
    color: #ddd;
    font-size: 14px;
}
.header-btn-left{
    left: 10px;
}
.header-btn-right{
    right: 10px;
}
ul li{
	padding-left: 20px;
	height: 40px;
	line-height: 40px;
}

</style>

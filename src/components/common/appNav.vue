<template>
<div>
	<div id="appNav">
		<transition name="fade">
	    <div class="small-cover" v-show="isShow" @click="sortAction"></div>
	    </transition>
		
		<ul class="nav">
			<li @click="sortAction">{{sort}}</li>
			<li v-for="(item,index) in outsideSort" >{{item.name}}</li>
			<li @click="selectAction">筛选</li>
		</ul>
		<ul class="sort" v-show="isShow">
			<li v-for="(item,index) in insiteSort">{{item.name}}</li>
		</ul>
		<div class="select">
			<p>商家服务(可多选)</p>
			<ul class="service">
				<li></li>
			</ul>
			<p>优惠活动(单选)</p>
			<ul class="discount">
				<li></li>
			</ul>
			<p>人均消费</p>
			<ul class="consume">
				<li></li>
			</ul>
		</div>
	</div>
</div>
</template>

<script>
import {getAppNavData,getScreenData} from '@/services/goodsService.js';

export default{
	data(){
		return{
			sort:'',
			insiteSort:'',
			outsideSort:'',
			isShow:false,
		}
	},
	methods:{
		sortAction(){
			this.isShow = !this.isShow;
		},
		selectAction(){
			
		}
	},
	mounted(){
		getAppNavData().then(result=>{
//			console.log(result)
//			综合排序
			this.sort = result.inside_sort_filter[0].name;
			this.insiteSort = {...result.inside_sort_filter};
			this.outsideSort = {...result.outside_sort_filter};
		}),
		getScreenData().then(result=>{
			console.log(result)
		})
	}
}
</script>

<style scoped="scoped">
.small-cover{
    width: 100%;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
}
.fade-enter-active{
    animation: fadeIn 200ms;
}
.fade-leave-active{
    animation: fadeOut 200ms;
}
#appNav{
	width: 100%;
	position: absolute;
	top: 50px;
	left: 0;
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
	font-size: 14px;
}
.sort{
	position: relative;
	z-index: 10;
	background-color: white;
}
.sort li{
	height: 40px;
	line-height: 50px;
	text-align: left;
	padding-left: 5%;
	font-size: 14px;
}
.select{
	width: 100%;
	font-size: 12px;
	padding: 10px;
	color: #666;
	box-sizing: border-box;
	background-color: white;
}
.select>p{
	height: 30px;
	line-height: 30px;
}

</style>
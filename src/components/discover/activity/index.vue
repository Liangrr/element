<template>
<div class="activity">
	<div class="activity_header">
		<h3 ><i class="iconfont icon-noun__cc"	></i>限时好礼</h3>
	</div>
	<p class="activity_sub_title">金钱换豪礼</p>
	<div class="activity_body">
		<div class="discover_food" v-for="(item,index) in findGoods">
			<span>{{item.corner_marker}}</span>
			<img :src="item.imageUrl"/>
			<p>{{item.title}}</p>
			<div><span>{{item.original_price}}元</span></div>
		</div>
	</div>
</div>

</template>

<script>
import {getActivityData} from '@/services/discoverService.js';
export default{
	data(){
		return{
			findGoods:[],
		}
	},
	mounted(){
		getActivityData().then(result=>{
			this.findGoods.push(...result);
		})
	}
}
</script>

<style scoped>
.activity{
	width: 100%;
}
.activity_header{
	text-align: center;
}
.activity_header h3{
	height: 35px;
	line-height: 45px;
	font-size: 16px;
}
.activity_header h3 i.iconfont{
	color: red;
}
.activity_sub_title{
	text-align: center;
	font-size: 12px;
	color: #999;
	height: 30px;
	line-height: 10px;
}
.activity_body{
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	box-sizing: border-box;
}
.discover_food{
	width: 30%;
	position: relative;
}
.discover_food>span{
	font-size: 12px;
	color: white;
	background-color: black;
	position: absolute;
}
.discover_food>img{
	width: 100%;
}
.discover_food>p{
	font-size: 14px;
}
.discover_food>div>span{
	font-size: 12px;
	color: #ff5339;
	line-height: 30px;
}
</style>
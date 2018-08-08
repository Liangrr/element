<template>
<div>
	<div id="appNav">

		<ul class="nav">
			<li v-for="(item,index) in navData" :key="index" @click="navAction(index)">{{item}}</li>
		</ul>
		<!--显示综合排序详情-->
		<ul class="sort" v-show="selectIndex==0">
			<li v-for="(item,index) in insiteSort" :key="index">{{item.name}}</li>
		</ul>
		<!--显示筛选详情-->
		<div class="select" v-show="selectIndex==3">
			<p>商家服务(可多选)</p>
			<ul class="service">
				<li v-for="(item,index) in serviceData" :key="index">{{item.name}}</li>
			</ul>
			<p>优惠活动(单选)</p>
			<ul class="discount">
				<li v-for="(item,index) in discountData" :key="index">{{item.name}}</li>
			</ul>
			<p>人均消费</p>
			<ul class="consume">
				<li v-for="(item,index) in consumeData" :key="index">{{item.description}}</li>
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
			navData:['综合排序','距离最近','品质联盟','筛选'],
			selectIndex:-1,
//			筛选请求的数据
			discountData:'',
			consumeData:'',
			serviceData:'',
		}
	},
	methods:{
		navAction(index){
			if(this.selectIndex == index){
				this.selectIndex = -1;
			}else{
				this.selectIndex = index;	
			}
		},
		
	},
	mounted(){
		getAppNavData().then(result=>{
//			综合排序
			this.sort = result.inside_sort_filter[0].name;
			this.insiteSort = {...result.inside_sort_filter};
			this.outsideSort = {...result.outside_sort_filter};
		}),
		getScreenData().then(result=>{
			this.discountData = [...result.activity_types];
			this.consumeData = [...result.average_costs];
			this.serviceData = [...result.supports]
		})
	}
}
</script>

<style scoped="scoped">

#appNav{
	width: 100%;
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
.sort{
	position: relative;
	font-size: 12px;
	z-index: 10;
	background-color: white;
}
.sort li{
	height: 40px;
	line-height: 50px;
	text-align: left;
	padding-left: 5%;
	font-size: 12px;
}
.select{
	width: 100%;
	font-size: 12px;
	padding: 10px;
	color: #666;
	box-sizing: border-box;
	background-color: white;
	position: absolute;
	z-index: 10;
}
.select>p{
	height: 30px;
	line-height: 30px;
}
.select>ul{
	width: 100%;
	text-align:center;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
}
.select>ul>li{
	width: 30%;
	margin-right: 3%;
    background: #fafafa;
	margin-bottom: 10px;
    height: 30px;
    line-height: 30px;
}
.active{
	display: block;
}
</style>
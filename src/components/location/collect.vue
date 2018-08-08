<template>
<div>
	<div id="collect">
		<div class="header">
			<i class="iconfont icon-zuo" @click="backAction"></i>
			<p>选择收获地址</p>
		</div>
		<div class="nav">
			<div class="nav_l"><span>{{$store.state.city}}</span><i class="iconfont icon-plus-select-down"></i></div>
			<div class="nav_r">
				<i class="iconfont icon-sousuo"></i>
				<input type="search" placeholder="请输入地址"/>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import {getCityData} from '@/services/cityService.js';
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			backAction(){
				this.$router.back();
			},
		},
		mounted(){
			getCityData().then(result=>{
				// this.$store.commit('changeCity',result.name)
				this.$store.state.city = result.name
			})
		}
	}
</script>

<style scoped="scoped">
#collect{
	width: 100%;
}
.header{
	width: 100%;
	height: 44px;
	line-height: 44px;
	background: #0af; 
	color: white;
	text-align: center;
}
.header>i.iconfont{
	font-size: 22px;
	position: absolute;
	left: 10px;
}
.header>p{
	font-size: 18px;
}
.nav{
	width: 100%;
	height: 50px;
	padding: 10px;
	box-sizing: border-box;
	background-color: #f4f4f4;
	display: flex;
}
.nav_l{
	width: 18%;
	height: 100%;
	line-height: 28px;
	text-align: center;
}
.nav_l>span,.nav_l>i.iconfont{
	font-size: 12px;
}
.nav_l>span{
	width: 40px;
	display: inline-block;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.nav_l>i.iconfont{
	float: right;
	line-height: 32px;
}
.nav_r{
	width: 80%;
	height: 100%;
	padding-left: 10px;
	box-sizing: border-box;
	position: relative;
}
.nav_r>i.iconfont{
	position: absolute;
	left: 15px;
	top: 6px;
	color: #999;
}
.nav_r>input{
	width: 100%;
	padding-left: 25px;
	box-sizing: border-box;
	height: 30px;
	border: none;
}
</style>
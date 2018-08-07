<template>
	<div id="header">
		<div class="locat" @click="locatAction()">
			<i class="iconfont icon-location"></i><h4>{{$store.state.city}}</h4>
		</div>
		<Search></Search>
	</div>
</template>

<script>
import Search from './search.vue';
export default{
	components:{
		Search
	},
	methods:{
//		定位的事件
		locatAction(){
			this.$router.push(
                {path: '/collect'}
            )
		}
	}
}
</script>

<style >
#header{
	width: 100%;
    background: #0af; 
}
.locat{
	width: 100%;
	height: 40px;
	line-height: 50px;
	box-sizing: border-box;
    padding:0 15px;
}
.locat>h4,.locat>i{
	color: white;
}
.locat>i{
	float: left;
	margin-right: 5px;
}
</style>
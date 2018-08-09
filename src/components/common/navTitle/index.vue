<template>
<div>
	<div class="title">
		<i class="iconfont icon-zuo" @click='backAction()'></i><h4>{{$store.state.title}}</h4>
	</div>
</div>
</template>

<script>
export default{
	methods:{
		backAction(){
			this.$router.back();
		}
	},
}

</script>

<style scoped>
.title{
	width: 100%;
    background: #0af; 
    height: 50px;
    line-height: 50px;
	box-sizing: border-box;
    padding:0 15px;
    text-align: center;
}
.title>h4,.title>i{
	color: white;
}
.title>i{
	float: left;
	margin-right: 5px;
}
</style>
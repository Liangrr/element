<template>
    <div>
    	<div class="title">
			<i class="iconfont icon-zuo" @click='backAction()'></i><h4>{{$store.state.shopTitle}}</h4>
		</div>
        <div class="categories">
            <div class="categoriesList" v-for="item in data" :key="item.id">{{item.name}}</div>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data : Array
    },
    methods:{
    	backAction(){
    		this.$router.back();
    	}
    },
    mounted(){

    }
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
.categories{
	float: left;
	margin-top: -1px;
    width: 90%;
    overflow-x: auto;
    white-space: nowrap;
}
.categoriesList{
    text-align: center;
    background: #0af;
    color: #fff;
    padding: 8px 10px;
    display: inline-block;
    font-size: 14px;
}
</style>

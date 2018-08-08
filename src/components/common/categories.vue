<template>

    <div>
    	<div class="title">
			<i class="iconfont icon-zuo" @click='backAction()'></i><h4>{{$store.state.shopTitle}}</h4>
		</div>
        <div class="categories">
            <div class="categoriesList" v-for="item in data" :key="item.id">{{item.name}}</div>
        </div>
        <div class="categoriesPull" @click="dropDown()">
            <button class="drop"><span class="iconfont icon-plus-select-down"></span></button>
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
	width: 90%;
	margin-top: -1px;
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
.categoriesPull{
    position: absolute;
    top: 0;
    right: 0;
}
.categoriesPull > button{
    padding: 8px 10px;
    border: 0;
    background: #0af;
    color: #fff;
    outline: none;
}
</style>

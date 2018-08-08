<template>

    <div>
    	<nav-title></nav-title>
    	
        <div class="categories">
            <div class="categoriesList" v-for="item in data" :key="item.id">{{item.name}}</div>
        </div>
        <div class="categoriesPull" @click="dropDown()">
            <button class="drop"><span class="iconfont icon-plus-select-down"></span></button>
        </div>
    </div>
</template>

<script>
import NavTitle from '@/components/common/navTitle/index.vue';

export default {
    props:{
        data : Array
    },
    components:{
    	NavTitle
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
	float: left;
	width: 90%;
	margin-top: -2px;
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
    top: 50px;
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

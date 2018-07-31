<template>

    <div id="location" class="page subpage">
    	<div class="head">
        	<button id="back" @click="backAction()">返回</button>
        	<h3>定位页面</h3>
        	<button id="more">更多</button>
    	</div>
        
        <ul>
            <li v-for="(city, index) in cityList" @click="locaAction(index)">
                {{city}}
            </li>
        </ul>
        <h4>您的定位是:{{place}}</h4>
    </div>

</template>

<script>
export default {
    data(){
        return {
            cityList: ['北京', '上海','深圳','广州','香港','澳门','杭州'],
            place:'???',
        }
    },
    methods: {
        backAction(){
            //访问路由对象：
            //操作路由对象，执行返回上一页
            this.$router.back();
        },
        locaAction(index){
        	let val = this.cityList[index]
        	this.place = val;
        	this.$center.$emit('send-location',val);
        	this.$router.back();
        }
    }
}
</script>

<style>

#location{
	text-align: center;
}
.head{
	width: 100%;
	height: 44px;
	line-height: 44px;
	position: relative;
	background-color: dodgerblue;
}
.head button{
	width: 50px;
	height: 26px;
	position: absolute;
	top: 10px;
}
#back{
	left: 10px;
}
#more{
	right: 10px;
}
#location ul li{
	float: left;
}
#location h4{
	display: block;
	clear:both;
	width: 100%;
	height: 40px;
}
</style>

<template>

	<div id="goods" class="page subpage">
		<div class="head">
			<button id="back" @click="backAction()">返回</button>
        	<h3>商品详情</h3>
		</div>
		<div class="detail">
			<h4>商品详情:</h4>
			<table>
				<tr v-for="item in goodsDetail">
					<td >名字:{{item.name}}</td>
					<td>价格:{{item.price}}</td>
					<td>牌子:{{item.brand}}</td>
				</tr>
			</table>
		</div>
		
    </div>

</template>

<script>
export default {
    data(){
        return {
//      	获取路由传值
        	goodsDetail:this.$route.params.dataSource
        }
    },
    methods: {
        backAction(){
            //访问路由对象：
            //操作路由对象，执行返回上一页
            this.$router.back();
        }
    }
}
</script>

<style>

#goods{
	width:100%;
	position: absolute;
	left: 0;
	bottom: 49px;
	text-align: center;
}
#back{
	width: 50px;
	height: 26px;
	position: absolute;
	left: 10px;
	top: 10px;
}
.detail h4{
	float: left;
	padding-left: 20px;
	padding-top: 10px;
}
.detail table tr{
	height: 40px;
	line-height: 40px;
}
.detail table tr td{
	padding-left: 5px ;
}

</style>
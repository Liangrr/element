<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
			<li v-for="(item,index) in data[0]" :key="index" @click="goCate(item.id)">
				<img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg" alt="" >
				{{item.name}}
			</li>
		</div>
        <div class="swiper-slide">
			<li v-for="(item,index) in data[1]" :key="index">
				<img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg" alt="">
				{{item.name}}
			</li>
		</div>
    </div>
    <div class="swiper-pagination"></div>
</div>
</template>

<script>
export default {
    props:{
        data:Array,
    },
    data(){
        return {

        }
	},
	methods : {
		//跳转美食界面
		goCate(itemId){
			this.$store.state.Cate = itemId;
			this.$router.push(
                {path: '/Cate'}
            )
		}
	},
	mounted(){
		var mySwiper = new Swiper ('.swiper-container',{
			// loop:true,
			pagination: '.swiper-pagination',
		})
	}
}
</script>

<style scoped>
.swiper-container{
	width:100%;
	height:130px;
	padding-bottom:10px;

}
img{
	width:40px;
	height:40px;
	margin:0 auto;
}
.swiper-slide{
	width:100%;
	width:100%;
}
li{
	width:20%;
	height:62px;
	color:#666;
	font-size:10px;
	float:left;
	text-align:center;
}
</style>

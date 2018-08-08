<template>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
			<li v-for="item in data[0]" :key="item.id" @click="goCate(item.id)">
				<img :src="item.imageUrl"/>
				{{item.name}}
			</li>
		</div>
        <div class="swiper-slide">
			<li v-for="item in data[1]" :key="item.id" @click="goCate(item.id)">
				<img :src="item.imageUrl"/>
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
		//跳转商品品种界面
		goCate(cateId){
//			把商品品种存起来
			this.$store.commit('changeCate',{
				cateId
			})
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

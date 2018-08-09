<template>
<div class="platform">
	<img src="https://fuss10.elemecdn.com/2/9f/cedf0f9959a7e699f81dba18d0aa6gif.gif"/>
	<div class="parts">
		<div class="parts_l" >
			<div class="content">
				<p :style="{color:platData1.title_color}">{{platData1.title}}</p>
				<p>{{platData1.subtitle}}</p>
			</div>
			<img :src="platData1.imageUrl"/>
		</div>
		<div class="parts_r">
			<div class="parts_r_t">
				<div>
					<p :style="{color:platData2.title_color}">{{platData2.title}}</p>
					<p>{{platData2.subtitle}}</p>
				</div>
				<img :src="platData2.imageUrl"/>
			</div>
			<div class="parts_r_b">
				<div>
					<p :style="{color:platData3.title_color}">{{platData3.title}}</p>
					<p>{{platData3.subtitle}}</p>
				</div>
				<img :src="platData3.imageUrl"/>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import {getPlatformData} from '@/services/discoverService.js';

export default {
	data(){
		return{
			platData1:'',
			platData2:'',
			platData3:'',
		}
	},
	mounted(){
		getPlatformData().then(result=>{
			this.platData1 = result[0];
			this.platData2 = result[1];
			this.platData3 = result[2];
		})
	}
}
</script>

<style scoped>
.platform{
	width: 100%;
	border-bottom: 10px solid #f4f4f4;
}
.platform>img{
	width: 100%;	
}
.parts{
	width: 100%;
	display: flex;
}
.parts>div{
	flex: 1;
	height: 40vw;
}
.parts_l{
	width: 100%;
	position: relative;
}
.parts_l .content{
	width: 50%;
	height: 100%;
}
.parts>div{
	padding: 10px;
	box-sizing: border-box;
}
.parts div>p:nth-child(2){
	font-size: 12px;
}
.parts_l>img{
	width: 40%;
	position:absolute;
	right: 10px;
	top: 40%;
}
.parts_r{
	width: 50%;
	height: 100%;
}
.parts_r>div{
	position: relative;
	width: 100%;
	height: 50%;
	padding-top: 8%;
	box-sizing: border-box;
}
.parts_r .parts_r_t{
	border-bottom: 1px solid #ccc;
}
.parts_r .parts_r_t>img,.parts_r .parts_r_b>img{
	position: absolute;
	right: 10px;
	top: 17%;
	width: 25%;
}

</style>
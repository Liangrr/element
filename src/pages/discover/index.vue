<template>
	<div id="discover">
		<nav-title></nav-title>
	</div>
</template>

<script>
import NavTitle from '@/components/common/navTitle/index.vue';
export default{
	components:{
		NavTitle,
	},
	mounted(){
		this.$store.commit('changeTitle',{title:'发现'})
	}
}
</script>

<style>
</style>
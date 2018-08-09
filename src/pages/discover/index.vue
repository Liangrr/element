<template>
	<div id="discover">
		<nav-title></nav-title>
		<platform></platform>
		<activity></activity>
	</div>
</template>

<script>
import NavTitle from '@/components/common/navTitle/index.vue';
import Platform from '@/components/discover/platform/index.vue';
import Activity from '@/components/discover/activity/index.vue';

export default{
	components:{
		NavTitle,
		Platform,
		Activity,
	},
	mounted(){
		this.$store.commit('changeTitle',{title:'发现'})
	}
}
</script>

<style scoped>
#discover{
	width: 100%;
}

</style>
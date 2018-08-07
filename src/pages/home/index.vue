<template>
	<div id="home">
	
		<app-nav></app-nav>
	</div>
</template>

<script>
import Location from '@/components/home/index/banner.vue';
import Goodlist from '@/components/home/index/goodlist.vue';
import Hot from '@/components/home/index/hot.vue';

import AppNav from '@/components/common/appNav.vue';
import Header from '@/components/common/header.vue';
import Search from '@/components/common/search.vue';

export default {
	components:{
		Location,
		Goodlist,
		Hot,
		AppNav,
		Header,
		Search,
	},
	
}
</script>

<style>
</style>
<template>
  <div id="app">
    
	    <nav class="tabs">
	      <router-link class="tab" :to="{name: 'home'}">首页</router-link>
	      <router-link class="tab" :to="{name: 'discover'}">发现</router-link>
	      <router-link class="tab" :to="{name: 'order'}">订单</router-link>
	      <router-link class="tab" :to="{name: 'mine'}">我的</router-link>
	    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, #app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.tabs{
  width: 100%;
  height: 49px;
  /*background:#0085ff;*/
 	border-top: 1px solid #ccc;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
}
.tabs .tab{
  flex: 1;
  text-align: center;
  line-height: 49px;
  font-size: 14px;
}
.tabs .tab.router-link-active{
  font-size: 16px;
  font-weight: bold;
  color: lightcoral;
}
.page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
  background: #fff;
}
.page.subpage{
  bottom: 0;
  z-index: 5;
}
.slideInRight, .slideOutRight{
    animation-duration: 300ms;
}
</style>

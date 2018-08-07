<template>
  <div id="app">
    <router-view/>
    
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
  background-color: white;
}
.tabs{
  width: 100%;
  height: 49px;
  line-height: 49px;
 	border-top: 1px solid #ccc;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 99;
  background-color: white;
  display: flex;
}
.tabs .tab{
  flex: 1;
  text-align: center;
}
</style>

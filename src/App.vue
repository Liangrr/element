<template>
  <div id="app">
    <router-view/>
    
	    <nav class="tabs">
          <router-link class="tab" :to="{name: 'home'}">
          	<i id="ele" class="iconfont icon-element"></i>
          	<span>首页</span>
          </router-link>
          <router-link class="tab" :to="{name: 'discover'}">
          	<i class="iconfont icon-faxian"></i>
          	<span>发现</span>
          </router-link>
          <router-link class="tab" :to="{name: 'order'}">
          	<i class="iconfont icon-dingdan"></i>
          	<span>订单</span>
          </router-link>
          <router-link class="tab" :to="{name: 'mine'}">
          	<i class="iconfont icon-wode"></i>
          	<span>我的</span>
          </router-link>
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
.tab>i.iconfont{
	font-size: 20px;
	height: 20px;
	line-height: 30px;
}
.tab span{
	display: block;
	font-size: 12px;
}

.iScrollVerticalScrollbar{
    width:4px !important;
}
.iScrollIndicator{
    background: rgba(0, 0, 0, 0.3) !important;
}
#ele{
	height: 20px;
	line-height: 25px;
	font-size: 36px;
	background-color: transparent;
}
</style>

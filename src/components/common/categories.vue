<template>
    <div>
    	<nav-title></nav-title>
    	
        <div class="categories">
            <div class="categoriesList" v-for="item in data" :key="item.id">{{item.name}}</div>
        </div>
        <div class="categoriesPull" @click="dropDown()">
            <button class="drop"><span class="iconfont icon-plus-select-down"></span></button>
        </div>
        <Selection v-show="isShow"></Selection>
    </div>
</template>
<script>

import Selection from '@/components/common/categories/selection.vue'
import NavTitle from '@/components/common/navTitle/index.vue';

export default {
    components : {
        Selection,
        NavTitle
    },
    props:{
        data : Array
    },
    data(){
        return{
            isShow : false,
        }
    },
    methods : {
        dropDown(){
            this.isShow = true;
            console.log(this.isShow)
        },
        backAction(){
    		this.$router.back();
        },
    },
    created(){
        this.$center.$on('show',(result)=>{
             this.isShow = result
        })
    }
}  

</script>

<style scoped>
.title {
  width: 100%;
  background: #0af;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  padding: 0 15px;
  text-align: center;
}
.title > h4,
.title > i {
  color: white;
}
.title > i {
  float: left;
  margin-right: 5px;
}
.categories {
  width: 100%;
  float: left;
  margin-top: -1px;
  overflow-x: auto;
  white-space: nowrap;
}
.categoriesList {
  text-align: center;
  background: #0af;
  color: #fff;
  padding: 8px 10px;
  display: inline-block;
  font-size: 14px;
}
.categoriesPull {
  position: absolute;
  top: 49px;
  right: 0;
}
.categoriesPull > button {
  padding: 7px 10px 8px 10px;
  border: 1px solid #0af;
  background: #0af;
  color: #fff;
  outline: none;
}
</style>

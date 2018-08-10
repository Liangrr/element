<template>
<div>
    <div id="startSearch">
        <div class="seekHead">

            <b class="iconfont icon-zuo leftArrow" @click="backAction()"></b>

            <p>
                <span class="iconfont icon-sousuo"></span>
                <input type="text" placeholder="输入商家、商家名称">
            </p>
            <button>{{seek}}</button>
        </div>
    </div>

    <div class="history" >
        <p><span class="history_left">历史搜索</span><span class="iconfont icon-noun__cc history_right"></span></p>
    </div>

    <div class="nearby">
        <li v-for="(item,index) in searchData" :key="index" class="nearbyList" @click="saveTheHistory(item.search_word)">
            {{item.search_word}}
        </li>
    </div>

</div>
</template>

<script>
import { getHstSearchWordsData } from '../../../services/goodsService.js'
    
export default {
    data() {
        return {
            seek: "搜索",
            historical : '',
            searchData : []
        }
    },
    methods : {
        saveTheHistory(itemSearch_word){
            this.historical = itemSearch_word;
        },
        backAction(){
            this.$router.back()
        }
    },
    mounted(){
        getHstSearchWordsData().then(response=>{
            this.searchData = response;
        })
    }
};
</script>

<style scoped>
#startSearch {
    padding: 5px;
    box-sizing: border-box;
    
}
.seekHead{
    padding: 5px;
}
.seekHead > .leftArrow {
    float : left;
    display: inline-block;
    padding: 5px 15px 0 0px;
    font-size: 20px;
    color: #999;
}
.seekHead p {
    width: 70%;
    background: #f8f8f8;
    float: left;
    padding: 5px;
}
.seekHead  > p > input {
    border: 0;
    width: 90%;
    background: #f8f8f8;
    outline:none;
}
.seekHead > button{
    background: #fff;
    border: 0;
    font-weight: 700;
    padding: 2px 12px;
    font-size: 17px;
    color: #333;
}
.history{
    box-sizing: border-box;
    padding: 10px 16px;
    height: 50px;
}
.history_left{
    float: left;
    font-weight: 700;
    font-size: 17px;
    color: #666;
}
.history_right{
    float: right;
}
.nearbyList{
    padding: 5px 8px;
    background: #f7f7f7;
    color: #666;
    float: left;
    margin: 10px;
}
</style>

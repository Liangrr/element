<template>
    <div id="hot">
        <div class="hot-left" @click="goSetMeal()">
            <p class="left-1">品质套餐</p>
            <p class="left-2">搭配齐全吃的好</p>
            <p class="left-3">立即抢购></p>
            <img src="//fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
        </div>
        <div class="hot-right">
            <p class="left-1 right-1">{{datas.name}}</p>
            <p class="left-2">{{datas.description}}</p>
            <p class="left-3"><span>{{datas.population}}</span> 正在抢></p>
            <img src="//fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
        </div>
    </div>
</template>

<script>
export default {
    props: {
        datas:Object
    },
    methods : {
        goSetMeal(){
            this.$router.push(
                {path : '/SetMeal'}
            )
        }
    }
}
</script>

<style scoped>
#hot{
    width:100%;
    height:110px;
    display:flex;
    box-sizing:border-box;
    padding:0 8px;
}
.hot-left,.hot-right{
    background:#fff;
    width:50%;
    height:105px;
    margin:0 2px;
    padding-left:10px;
    background: #f7f7f7;
    position:relative;
    padding-top:5px;
}
.left-1{
    color:#333;
    font-size:16px;
    font-weight:bold
}
.left-2{
    color:#777;
    font-size:12px;
    padding-bottom:4px;
}
.left-3{
    color:#af8260;
    font-size:12px;
}
img{
    display: block;
    width:100px;
    height:65px;
    position:absolute;
    bottom:-2px;
    right:0px;
}
.right-1{
    color:#e81919;
}
.left-3 span{
    color:#e81919
}
</style>

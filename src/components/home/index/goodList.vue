<template>
    <nav id="goodlist">
        <li class="list" v-for="(item,index) in listData[0]" :key="index" ref='list'>
            <div class="box-left">
                <img src="//fuss10.elemecdn.com/0/35/11f89c92c5e17dd0aa4b0384c9959jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="">            
            </div>
            <p class="shopname"><span>品牌</span>{{item.name}}</p>
            <p class="order">月售163单</p>
            <p class="nav">
                <ul class="ul-left">
                    <li class="li-left">￥20起送</li>
                    <li>配送费6元</li>
                </ul>
                <ul class="ul-right">
                    <li class="li-left">1.74km</li>
                    <li>36分钟</li>
                </ul>
            </p>
            <p class="discover"><span>汉堡</span>口碑人气好店</p>
            <p class="activity item-1"><span>首</span>新用户首单减17元</p>
            <p class="activity item-2"><span>减</span>满28减5元，满50减13元</p>
            <div class="box">12个活动</div>
         </li>
    </nav>
</template>

<script>
export default {
    data(){
        console.log(this.listData)
        return {

        }
    },
    props:{
        listData:Array,
    },
}
</script>

<style scoped>
.list{
    width:100%;
    height:120px;
    background:#fff;
    margin-top:10px;
    position:relative;
    padding-left:75px;
    padding-top:10px;
    border:1px solid #eee;
    border-left:0;
    border-right:0;
}
.box-left{
    width:58px;
    height:58px;
    position:absolute;
    top:8px;
    left:8px;
}
img{
    width:100%;
    height:100%;
}
.shopname{
    font-size:13px;
    color:#333;
    font-weight:bold;
}
.shopname span{
    font-size:11px;
    background:#fff100;
    color:#6f3f15;
    margin-right:5px;
}
.order{
    color:#666;
    font-size:11px;
    padding-left:50px;
}

.ul-left{
    display: inline-block;
    color:#666;
    font-size:11px;
}
.ul-right{
    display: inline-block;
    color:#666;
    font-size:11px;
    margin-left:20px;
}
.list .nav li{
    display: inline-block;
    padding:0 5px;
}
.ul-left li:nth-child(1){
    padding-left:0;  
}
.li-left{
    border-right:1px solid #ccc;
}
.discover{
     color:#666;
    font-size:11px;
    padding: 2px 0;
}
.discover span{
    border:1px solid #ccc;
    display: inline-block;
    width:25px;
    height:11px;
    line-height:11px;
    text-align:center;
    margin-right:8px;
}
.activity{
    color:#666;
    font-size:11px;
    margin:3px 0;
}
.activity span{
    border:1px solid #ccc;
    display: inline-block;
    width:12px;
    height:12px;
    line-height:12px;
    text-align:center;
    color:#fff;
    margin-right:5px;
    font-size:5px;
}
.item-1 span{
    background:rgb(112, 188, 70);
}
.item-2 span{
    background: rgb(240, 115, 115);
}
.box{
    position:absolute;
    bottom:25px;
    right:60px;
    width:80px;
    height:20px;
    color:#999;
    font-size:8px;
}
</style>

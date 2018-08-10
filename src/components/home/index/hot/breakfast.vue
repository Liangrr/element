<template>
    <page class="page" id="aaa">
        <div class="breakfast" v-for="(item,index) in breakfastData" :key="index">
            <div class="merchant">
                <p>
                    <b class="iconfont icon-shangjia"></b>
                    <span>{{item.restaurant_name}}</span>
                    <span>评价{{item.restaurant_rating}}分</span>
                    <span>配送费约5元</span>
                </p>
            </div>
            <div class="foodstuff">
                <div class="img">
                    <img src="//fuss10.elemecdn.com/f/12/ea83ebd10afa088adb9d94e7ebad7jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
                </div>
                <div class="datum">
                    <h3>{{item.name}}</h3>
                    <p>仅剩{{item.stock}}份</p>
                    <div class="progress"> <p></p> </div>
                    <p class="price"><span>￥</span><span>{{item.price}}</span> <span>￥{{item.original_price}}</span></p>
                    <button>马上抢</button>
                </div>
            </div>
        </div>
    </page>
</template>

<script>
import { getPurchaseData } from '@/services/purchase.js'
export default {
    data(){
        return {
            type : 1,
            breakfastData : []
        } 
    },
    mounted(){
        getPurchaseData(this.type).then(resopnse => {
            
            this.breakfastData = resopnse;
            console.log(this.breakfastData)
        })
    }
}
</script>

<style scoped>
#aaa{
    width: 100%;
    position: absolute;
    top: 50px;
    left: 0;
}
.breakfast{
    padding: 0 10px;
    border-bottom: 5px solid #f5f5f5;
}
.breakfast > .merchant{
    padding: 10px 0;
    border-bottom: 1px dashed #ddd;
}
.merchant > p {
    display: flex;
}
.merchant > p > b{
    font-size: 12px;
    color: #aaa;
}
.merchant > p > span{
    font-size: 10px;
    color: #666;
    padding: 0 4px;
}
.merchant > p > span:nth-child(2){
    width : 60%;
}
.merchant > p > span:nth-child(3){
    border-right: 1px solid #ddd;
}
.foodstuff{
    padding: 10px 0;
}
.foodstuff > .img{
    float: left;
}
.foodstuff > .datum{
    display: inline-block;
    padding: 0 10px;
}
.foodstuff > .datum > h3{
    width: 200px;
    height: 26px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
}
.foodstuff > .datum > p:nth-child(2){
    font-size: 10px;
    color: #ff3618;
}
.progress{
    width: 120px;
    height: 6px;
    background: #ddd;
    margin: 5px 0;
    border-radius: 6px;
}
.progress > p {
    width: 90px;
    height: 6px;
    background: #ff3618;
    border-radius: 6px;
}
.datum {
    position: relative;
}
.datum > .price > span:nth-child(1){
    font-size: 12px;
    color: #ff3618;
}
.datum > .price > span:nth-child(2){
    font-size: 20px;
    color: #ff3618;
}
.datum > .price > span:nth-child(3){
    padding: 0 5px;
    font-size: 12px;
    color: #666;
    text-decoration: line-through;
}
.datum > button{
    width: 80px;
    padding: 8px 10px;
    font-weight: 700;
    color: #fff;
    background-image: linear-gradient(to bottom right,#ff5339,#ff3618);
    border: 0;
    border-radius: 5px;
    outline: none;
    position: absolute;
    right: -40px;
    bottom: 5px;
}
</style>


<template>
<div class="Merchant">

    <div v-for="(item,index) in alldata" :key="index">
        <div class="restaurant">
            <img src="https://fuss10.elemecdn.com/3/58/a93fd92d242a7352e9fdb64b7d2eapng.png?imageMogr/format/webp/thumbnail/!40x40r/gravity/Center/crop/40x40/" alt="">
            <span>{{item.restaurant.name}}</span>
            <!-- <ul>
                <li>{{item.restaurant.recommend_reasons.name}}</li>
            </ul> -->
            <span>评分{{item.restaurant.rating}}</span>
            <span>月售{{item.restaurant.recent_order_num}}</span>
        </div>

        
        <div v-for="(it,i) in item.foods" :key="i" class="foods">
            <img src="https://fuss10.elemecdn.com/3/04/8ab5ac5ff156ee0d7e53cad75aed7jpeg.jpeg?imageMogr/format/webp/thumbnail/!100x100r/gravity/Center/crop/100x100/" alt="">
            <ul class="foodsBetails">
                 <li><p class="title">{{it.name}}</p></li>
                 <li><span>{{it.description}}</span></li>
                 <li><b>￥{{it.price}}</b> <span>{{it.discount_activity}}</span></li>
            </ul>
        </div>
    </div>




</div>
</template>

<script>
import {getfoodsData , getrestaurantData,getAllData} from '@/services/mealService.js'
export default {
    data(){
        return {
            // restaurantData : [],
            // foodsData : [],
            alldata:[]
        }
    },
    mounted(){
        getAllData().then((result)=>{
            this.alldata.push(...result)
            console.log(this.alldata)
        })
    },
    methods : {

    }
}
</script>

<style scoped>
.restaurant{
    padding: 12px;
    display: flex;
}
.restaurant > span:nth-child(2) {
    color: #666;
    width: 57%;
    padding: 0 10px;
}
.restaurant > span:nth-child(3),span:nth-child(4){
    font-size: 10px;
    color : #aaa;
    padding: 3px;
    text-align: right;
}
.foods{
    padding: 12px;
    display: flex;
    position: relative;
}
.foodsBetails{
    display: block;
    padding: 0 10px;
}
.foodsBetails > li > p{
    font-size: 16px;
    padding-bottom:  5px;
}
.foodsBetails > li > span:nth-child(1){
    display: block;
    font-size: 10px;  
    width: 200px; 
    height: 30px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #666;
    
}
.foodsBetails > li >b{
    position: absolute;
    left: 20;
    bottom: 15px;
    color: #c33;
}
.foodsBetails > li > span:nth-child(2){
    position: absolute;
    font-size: 10px;
    padding: 0 2px;
    color: #666;
    left: 180px;
    bottom: 15px;
}
</style>

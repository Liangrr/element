<template>
    <nav id="goodlist">
        <li class="list" v-for="(item,index) in listData" :key="index" ref='list' @click="locataionAction()">
            <div class="box-left">
                <img :src="item.img" alt="">            
            </div>
            <p class="shopname"><span>品牌</span>{{item.name}}</p>
            <p class="order">{{item.rating}} 月售{{item.recent_order_num}}单</p>
            <p class="nav">
                <ul class="ul-left">
                    <li class="li-left">￥{{item.float_minimum_order_amount}}起送</li>
                    <li>配送费{{item.float_delivery_fee}}元</li>
                </ul>
                <ul class="ul-right">
                    <li class="li-left">{{item.distance | distances}}</li>
                    <li>{{item.order_lead_time}}分钟</li>
                </ul>
            </p>
            <p class="discover"><span>{{item.flavors}}</span>{{item.reason}}</p>
            <p class="activity item-1" v-for="items in item.arr1" :key="items.id">
                <span :style="{background:'#'+items.icon_color}">{{items.icon_name}}</span>{{items.description}}
            </p>
            <p v-show="show" class="activity item-2" v-for="(val,ite) in  item.arr2" :key="ite" v-if="isList==index"><span :style="{background:'#'+val.icon_color}">{{val.icon_name}}</span>{{val.description}}</p>
            <div class="box" @click.stop="showActive(index)">12个活动</div>
         </li>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            show:false,
            isList:null,
        }
    },
    props:{
        listData:Array,
    },
    methods:{
        locataionAction(){
            this.$router.push('/detail')
        },
        showActive(index){
            this.isList = index
            if(this.show == false){
                this.show = true;
            }else if(this.show== true){
                this.show = false;
            }
        }
    }
}
</script>

<style scoped>
.list{
    width:100%;
    padding-bottom:15px;
    background:#fff;
    position:relative;
    padding-left:75px;
    padding-top:10px;
    border-top:1px solid #eee;
}
.box-left{
    width:58px;
    height:58px;
    position:absolute;
    top:10px;
    left:8px;
    border:1px solid #fafaf9;
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
    padding:0 1px;
    height:11px;
    line-height:11px;
    text-align:center;
    margin-right:8px;
}
.activity{
    color:#666;
    font-size:11px;
    width:160px;
    margin:3px 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
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
    top:86px;
    right:60px;
    width:80px;
    height:20px;
    color:#999;
    font-size:8px;
}
.box::after{
    content:"";
    border-style:solid;
    border-width:4px;
    border-color:#a7a7a7 transparent transparent transparent ;
    position:absolute;
    right:27px;
    top:5px;
}
</style>

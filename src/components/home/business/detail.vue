<template>
<div>
    <div class="detail-nav top" v-show="openShow">
           <li v-for="(item,index) in titles" :key="item.id" @click="showAction(index)" :class="{'cur':courId==index}"><span>{{item.name}}</span></li>
    </div>
     <div class="scroll-nav hidden" v-show="isLoads">
        <div class="sidebar">
            <li class="center">热销</li>
            <li class="center">优惠</li>
            <li>主食</li>
            <li>饮料</li>
            <li>套餐</li>
            <li>配餐</li>
            <li>大牌半价套餐</li>
            <li>买一送一（5折特惠）</li>
            <li>美食天天5折享</li>
            <li>饿了么专享套餐</li>
            <li>饮料</li>
            <li>套餐</li>
            <li>配餐</li>
            <li>饮料</li>
            <li>套餐</li>
            <li>配餐</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </div>
    </div>
    <page id="detail" ref="page">
        <div class="detail-header">
            <span @click="backHomtAction()">&lt;</span>
            <img src="//fuss10.elemecdn.com/1/2a/05f654faecf9388fae8331a2b1b5apng.png?imageMogr/format/webp/thumbnail/150x/" alt="">
        </div>
       <h3 class="title">
           <span>1号粥店(钟屋店)</span>
       </h3>
       <div class="details">
           <span>评价4.6</span>
           <span>月售1508单</span>
           <span>蜂鸟快送约32分钟</span>
       </div>
       <div class="price">
           <p class="price-left">
               共
               <span class="per">￥18</span>
               <span>店铺</span>
           </p>
           <p class="price-right">领取</p>
       </div>
       <div class="active">
           <span class="act-left">首单</span>
           <span class="act-center">新用户下单立减17元(不与其它活动同享)</span>
           <span class="act-right">14个优惠</span>
       </div>
       <div class="announcement">
           <span>公告:1号粥店倾心为你熬粥<b>♡</b>纯天然健康养生粥用心服务每一位顾客</span>
       </div>
       <ul class="detail-nav">
           <li v-for="(item,index) in titles" :key="index" @click="showAction(index)" :class="{'cur':courId==index}"><span>{{item.name}}</span></li>
       </ul>

<!--  点餐的详情页面  -->
       <keep-alive>
            <div class="showMessage-1" v-show="courId==0">
                <h4>商家推荐</h4>
                <ul class="scroll">
                        <li>
                            <img src="//fuss10.elemecdn.com/6/86/01eb17f3fe4313a255bc9a1eefb54jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
                            <p class="goods">香菇瘦肉+炸鸡+汉堡</p>
                            <p class="evaluate">月售79 好评率100%</p>
                            <p class="per"><span>￥</span>16</p>
                            <div class="add">+</div>
                        </li>
                        <li>
                            <img src="//fuss10.elemecdn.com/6/86/01eb17f3fe4313a255bc9a1eefb54jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
                            <p class="goods">香菇瘦肉+炸鸡+汉堡</p>
                            <p class="evaluate">月售79 好评率100%</p>
                            <p class="per"><span>￥</span>16</p>
                            <div class="add">+</div>
                        </li>
                        <li>
                            <img src="//fuss10.elemecdn.com/6/86/01eb17f3fe4313a255bc9a1eefb54jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
                            <p class="goods">香菇瘦肉+炸鸡+汉堡</p>
                            <p class="evaluate">月售79 好评率100%</p>
                            <p class="per"><span>￥</span>16</p>
                            <div class="add">+</div>
                        </li>
                        <li>
                            <img src="//fuss10.elemecdn.com/6/86/01eb17f3fe4313a255bc9a1eefb54jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
                            <p class="goods">香菇瘦肉+炸鸡+汉堡</p>
                            <p class="evaluate">月售79 好评率100%</p>
                            <p class="per"><span>￥</span>16</p>
                            <div class="add">+</div>
                        </li>
                        <li>
                            <img src="//fuss10.elemecdn.com/6/86/01eb17f3fe4313a255bc9a1eefb54jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
                            <p class="goods">香菇瘦肉+炸鸡+汉堡</p>
                            <p class="evaluate">月售79 好评率100%</p>
                            <p class="per"><span>￥</span>16</p>
                            <div class="add">+</div>
                        </li>
                        <li>
                            <img src="//fuss10.elemecdn.com/6/86/01eb17f3fe4313a255bc9a1eefb54jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
                            <p class="goods">香菇瘦肉+炸鸡+汉堡</p>
                            <p class="evaluate">月售79 好评率100%</p>
                            <p class="per"><span>￥</span>16</p>
                            <div class="add">+</div>
                        </li>
                        <li>
                            <img src="//fuss10.elemecdn.com/6/86/01eb17f3fe4313a255bc9a1eefb54jpeg.jpeg?imageMogr/format/webp/thumbnail/240x/" alt="">
                            <p class="goods">香菇瘦肉+炸鸡+汉堡</p>
                            <p class="evaluate">月售79 好评率100%</p>
                            <p class="per"><span>￥</span>16</p>
                            <div class="add">+</div>
                        </li>
                </ul>
                <div class="big-box">
                    <div class="scroll-nav">
                        <div class="sidebar">
                            <li class="center">热销</li>
                            <li class="center">优惠</li>
                            <li>主食</li>
                            <li>饮料</li>
                            <li>套餐</li>
                            <li>配餐</li>
                            <li>大牌半价套餐</li>
                            <li>买一送一（5折特惠）</li>
                            <li>美食天天5折享</li>
                            <li>饿了么专享套餐</li>
                             <li>饮料</li>
                            <li>套餐</li>
                            <li>配餐</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </div>
                    </div>
                    <div class="shop-goods">
                        <div class="shop-box">
                            <p class="hot-title">
                                <span>热销</span>
                                大家喜欢吃,才是真好吃。
                            </p>
                            <div class="main" v-for="item in listData" :key="item.id">
                                <img :src="item.image_path" alt="">
                                <div class="main-right">
                                    <h5>{{item.name}}</h5>
                                    <p class="item-1">份</p>
                                    <p>月售{{item.rating_count}}份<span>好评率{{item.satisfy_rate + '%'}}</span></p>
                                    <p class="shop-discount"><b>1.7折</b>每单限1份优惠</p>
                                    <p><strong class="true">￥1</strong><span class="false">￥6</span></p>
                                    <div class="add shop-add">+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </keep-alive>
<!--  评价的详情页面  -->
        <keep-alive>
            <div class="showMessage-2" v-show="courId==1">
                <ul class="grade">
                        <li>4.2</li>
                        <li class="detail-li">商家评分</li>
                        <li class="detail-li">味道<br/><span>3.9</span></li>
                        <li class="detail-li">包装<span>4.3</span></li>
                        <li class="detail-li">配送<span>4.1</span></li>
                </ul>
                <p class="blank"></p>
                <div class="comment">
                    <ul class="comment-nav">
                        <li>
                            <a href="#">全部71</a>
                            <a href="#">满意64</a>
                            <a href="#">不满意2</a>
                            <a href="#">有图2</a>
                        </li>
                        <li><span></span>只看有内容的评论</li>
                    </ul>
                </div>
            </div>
        </keep-alive>
<!--  商家的详情页面  -->
       <keep-alive>
            <div class="showMessage-3" v-show="courId==2">
                <div class="send-message">
                    <h5>配送信息</h5>
                    <p>由蜂鸟快送提供配送，约28分钟送达，距离1.3km</p>
                    <p>配送费￥2.5</p>
                </div>
                <p class="blank"></p>
                <div class="serve">
                    <h5>活动与服务</h5>
                    <p><span>满减</span>满28减少16，满40减20，满58减26，满88减35</p>
                    <p><span class="type-2">满赠</span>满40元赠送晨光牛奶1份</p>
                    <p><span class="type-3">首单</span>新用户下单立减17元(不与其它活动同享)</p>
                    <p><span>折扣</span>单品折扣</p>
                    <p><span>折扣</span>单品折扣</p>
                    <p><span>折扣</span>单品折扣</p>
                    <p><span>折扣</span>单品折扣</p>
                    <p><span>折扣</span>单品折扣</p>
                </div>
                <p class="blank"></p>
                <div class="shops">
                    <h5>商家实景</h5>
                    <img src="//fuss10.elemecdn.com/3/01/dfa8cab3676a03c327c4ed3598900jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/" alt="">
                    <img src="//fuss10.elemecdn.com/5/60/d26e9ed43a71c5cd412796d0c6626jpeg.jpeg?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/" alt="">
                </div>
                <p class="blank"></p>
                <ul class="shop-message">
                    <li>
                        <h5>商家信息</h5>
                        <p>1号粥店隶属于深圳市一然轩餐饮管理有限公司倾力打造的餐饮连锁品牌，把美味与实惠呈现给每一位用户。相信未来，1号粥在众多用户的拥护下，会越来越好......</p>
                    </li>
                    <li class="item">
                        <span  class="left">品类</span>
                        <span class="right">简餐，包子粥店</span>
                    </li>
                    <li class="item">
                        <span class="left">商家电话</span>
                        <span class="right">13590324223></span>
                    </li>
                    <li class="item">
                        <span class="left">地址</span>
                        <span class="alone">深圳市宝安区航城街道钟屋社区钟屋新村南五巷8号102</span>
                    </li>
                    <li class="item">
                        <span class="left">营业时间</span>
                        <span class="right">06:00-02:00</span>
                    </li>
                </ul>
                <p class="blank"></p>
                <div class="last">
                    <h5>营业资质</h5>
                    <span>></span>
                </div>
                <p class="blank"></p>
            </div>
        </keep-alive>
    </page>
</div>
</template>

<script>
import {getGoodListDetailData} from '../../../services/goodsService.js'
export default {
    data(){
        return{
            titles:[{id:'001',name:'点餐'},{id:'002',name:'评价'},{id:'003',name:'商家'}],
            courId:0,
            openShow:false,
            isLoads:false,
            distance:null,
            listData:[],
        }
    },
    methods:{
        backHomtAction(){
            this.$router.back('/home')
        },
        showAction(index){
            this.courId = index
            if(!this.courId==0){
                this.isLoads = false;
            }else if(this.courId==0 && this.openShow==true){
                this.isLoads = true;
            }
        },
    },
    created(){
        this.$center.$on('distance',(result)=>{
            if(result < -215){
                this.openShow = true;
            }else{
                this.openShow = false;
            }
            if(result < -384 && this.courId==0 && this.openShow==true){
                this.isLoads = true;
            }else{
                this.isLoads = false;
            }
        })
    },
    mounted(){
        getGoodListDetailData().then((result)=>{
            this.listData = result
        })
    }
}
</script>

<style scoped>
.detail-header{
    width:100%;
    height:85px;
    background: rgba(119,103,137,.43);
    position:relative
}
.detail-header span{
    font-size:25px;
    color:#fff;
    margin-left:5px;
    display: block;
}
.detail-header img{
    display: block;
    width:65px;
    height:65px;
    position:absolute;
    left:50%;
    top:33px;
    transform: translateX(-50%);
    box-shadow: 0 0 0.4vw 0 rgba(0,0,0,.2);
    border-radius: 5px;
}
.title{
    width:100%;
    margin-top:20px;
    text-align:center;
    position:relative;
    font-size:18px;
    color:#434343;
}
.title span::after{
    content: "";
    border-style: solid;
    border-width: 5px;
    border-color: transparent transparent transparent rgba(0,0,0,.67);
    position: absolute;
    top:10px;;
    left:232px;
}
.details{
    display: flex;
    justify-content: center;
}
.details span{
    font-size:10px;
    color:#666;
    padding:5px 3px;
}
.price{
    display: flex;
    justify-content:center;
}
.price p{
    height:20px;
    background: #fff4f4;
    color: #5c1603;
    font-size:11px;
    line-height:20px;
    text-align:center
}
.price .per{
   color:#6a2917;
   font-weight:bold;
   font-size:12px;
}
.price-left{
    width:90px;
    border-radius:0 5px 5px 0;
}
.price-right{
    width:30px;
    border-radius:5px 0 5px 0;
}
.active{
    display: flex;
    justify-content: center;
}
.active span{
    font-size:10px;
    margin:7px 2px;
    color:#4a4a4a;
}
.active .act-left{
    padding:0 3px;
    background: #70bc46;
    color:#fff
}
.active .act-right{
    color:#b2b2b2;
    display: block;
    position:relative;
}
.active .act-right::after{
    content: "";
    border-style: solid;
    border-width: 3px;
    border-color: #b0b0b0 transparent transparent transparent;
    position: absolute;
    top:5px;;
    right:-10px;
}
.announcement{
    display: flex;
    width:100%;
    justify-content: center;
}
.announcement span{
    width:80%;
    color:#b2b2b2;
    font-size:10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.announcement span b{
    color:red;
    font-size:12px;
}
.detail-nav{
    display: flex;
    width:100%;
    border-bottom:1px solid #ebebeb;
}
.detail-nav li{
    flex:1;
    text-align:center;
    height:38px;
    line-height:38px;
    font-size:13px;
    color:#666;
}
.cur{
    color:#45a6ff !important;
    font-weight:bold;
}
.cur span{
    padding-bottom:9px;
    border-bottom:2px solid #45a6ff;
}

/*  点餐页面的详情样式   */
.showMessage-1 h4{
    margin:10px 0 2px 10px;
    font-size:14px;
    color:#4e4e4e;
}
.scroll{
    overflow-x:scroll;
    white-space:nowrap;
    padding-left:10px;
}
.scroll::-webkit-scrollbar{width:0 !important}
.scroll li{
    display: inline-block;
    margin-right:3px;
    list-style:none;
    width:105px;
    height:160px;
    position:relative
}
.scroll li img{
    width:100%;
}
.goods{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size:13px;
    color:#535353;
}
.evaluate{
    font-size:10px;
    color:#535353;
}
.scroll .per{
    font-size:15px;
    color:#ff7561;
    margin:5px 0;
}
.scroll .per span{
    font-size:14px
}
.add{
    position:absolute;
    bottom:4px;
    right:2px;;
    width:20px;
    height:20px;
    background: #2396ff;
    border-radius: 50%;
    text-align:center;
    line-height:20px;
    color:#fff;
}
.big-box{
    display: flex;
}
.scroll-nav{
    height:500px;
    overflow: hidden;
    width:18%;
    box-sizing:border-box;
}
.sidebar{
    width:100%;
    background: #f8f8f8;
    padding-left:3px;
    height:800px;
    overflow-y: auto;
}
.sidebar::-webkit-scrollbar{width:0 !important}
.sidebar li{
    padding:17px 0;
    height:11px;
    font-size:11px;
    color:#666;
    line-height:11px;
}
.sidebar .center{
    text-align:center;
}
.shop-goods{
    width:81%;
    padding-left:10px;
    height:800px;
    overflow: hidden;
}
.main{
    position:relative;
    display: flex;
    padding-top:10px;
    font-family: '微软雅黑';
}
.main img{
    width:80px;
    height:80px;
    display: block;
    margin-right:10px;
}
.hot-title{
    font-size:10px;
    height:24px;
    padding-top:15px;
    border-bottom:1px solid #ccc;
}
.hot-title span{
    font-size:12px;
    font-weight:bold;
    margin-right:5px;
}
.main p{
    font-size:10px;
    color:#999;
    padding:1px 0;
}
.main p span{
    display: inline-block;
    padding-left:5px;
}
.main h5{
    padding-bottom:3px;
}
.main .shop-discount{
    color:#ff7763;
}
.main .shop-discount b{
    font-weight:normal;
    border:1px solid #eaebf1;
    margin-right:3px;
}
.main .item-1{
    color:#b2b2b2;
}
.shop-add{
    right:13px;
    bottom:0;
}
.true{
    color:#ff7763;
    font-size:14px;
    font-weight:normal;
}
.false{
    text-decoration: line-through;
    font-size:12px;
}
.main-right h5{
    color:#3f3f3f;
    font-weight: 700;
}

/* 评论的详情页面   */
.grade{
    height:60px;
    padding:10px 0;
}
.grade .detail-li{
    height:100%;
    text-align:center;
    float:left;
    width:55px;
    color:#858585;
    font-size:10px;
    padding-top:16px;
}
.grade li:nth-child(1){
    height:100%;
    color:#ff6000;
    font-size:32px;
    font-weight:500;
    width:90px;
    line-height:60px;
    float:left;
    text-align:center;
}
.grade li span{
    font-size:15px;
    display:block;
    color:#666;
    padding-top:3px;
    
}
.comment{
    padding-left:10px;
}
.comment-nav li a{
    color:#6d7885;
    font-size:10px;
    padding:5px 8px;
    background: #ebf5ff;
    margin-right:3px;
    border-radius:2px;
}
.comment-nav li{
    width:100%;
    height:40px;
    border-bottom:1px solid #ccc;
    color:#666;
    font-size:12px;
    line-height:40px;
}
.comment-nav li span{
    display: inline-block;
    width:8px;
    height:8px;
    margin:0 5px 0 15px;
    border-radius: 50%;
    background: #e8e8e8;
}




/* 商家详情页面的样式 */
.showMessage-3 .send-message{
    height:85px;
    padding:10px 0 0 13px;
}
.send-message h5,.server h5{
    padding-bottom:10px;
}
.showMessage-3 p{
    font-size:11px;
    color:#787878;
    padding:3px 0;
}
.blank{
    width:100%;
    height:8px;
    background:#f5f5f5;
}
.serve{
    height:250px;
    padding:10px 0 0 13px;
}
h5{
    padding-bottom:10px;
}
.serve span{
    color:#fff;
    background: #f17b7b;
    padding:0 2px;
    margin-right:5px;
    border-radius: 2px;
}
.serve .type-2{
    background: #3cc791;
}
.serve .type-3{
    background: #77bf4f;
}
.shops{
     padding:10px 0 0 13px;
     height:90px;
}
.shops h5{
     padding-bottom:5px;
}
.shops img{
    display: inline-block;
    width:60px;
    height:60px;
    margin-right:3px;
}
.shop-message{
    padding:10px 0 0 13px;
}
.shop-message p{
    font-size:12px;
    color:#666;
    padding-bottom:12px;
    border-bottom:1px solid #ccc;
}
.shop-message .item{
    height:40px;
    border-bottom:1px solid #ccc;
    display: flex;
    justify-content: space-between;
}
.shop-message li:nth-child(5){
    border-bottom:none;
}
.shop-message li .left{
   font-weight:bold;
   color:#a1a1a1;
    font-size:12px;
    line-height:40px;
}
.shop-message li .right{
    padding-right:10px;
    color:#666;
     font-size:11px;
     line-height:40px;
}
.shop-message li .alone{
    width:65%;
    text-align:right;
    color:#666;
    font-size:10px;
    padding-right:10px;
    padding-top:8px;
}
.last{
    height:18px;
    padding:13px;
    display: flex;
    justify-content:space-between;
}
.last span{
    color:#ccc;
}
.shop-box{
    overflow: auto;
    height:1000px;
}
.shop-box::-webkit-scrollbar{width:0 !important}

/*吸顶的样式*/
.hidden{
    width:60px;
    position:absolute;
    top:38px;
    left:0;
    background: #fff;
    z-index:99;
}
.top{
    position:absolute;
    top:0;
    left:0;
    z-index:99;
    background:#fff;
}
</style>
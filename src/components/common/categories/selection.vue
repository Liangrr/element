<template>
    <div class="selection" v-show="isShow">
        <!-- 蒙版 -->
        <div class="masking">
            <!-- <h1>asasda</h1> -->
        </div>

        <div class="ListBox">
            <div class="tltle">
                <h4>请选择分类</h4>
                <span @click="shut()">X</span>
            </div>

            <div>
                <ul class="taxon_Left">
                    <li v-for="(item,index) in dropDownData" :key="index" @click="variety(index)">{{item.title}}<span>{{item.count}}</span></li>
                </ul>
                <ol class="taxon_Right">
                    <li v-for="(item,index) in singleData" :key="index">
                        <img src="//fuss10.elemecdn.com/8/64/4e1323e3a11137d7478d2c83095d4png.png?imageMogr/format/webp/thumbnail/!40x40r/gravity/Center/crop/40x40/">
                        <span class="Name">{{item.name}}</span>
                        <span class="Count">{{item.count}}</span>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>
<script>
import {getSeleCtionData} from '../../../services/goodsService.js'
//
export default {
    data(){
        return {
            isShow : true,
            dropDownData : [],
            varietyData : [],
            singleData : []
        }
    },
    methods : {
        variety(index){
            this.singleData = this.varietyData[index]
            console.log(this.singleData)
        },
        shut(){
            this.isShow = false;
            this.$center.$emit('show',false)
        }
    },
    mounted(){
        getSeleCtionData().then(response => {
            this.dropDownData = response;
            this.dropDownData.shift()
            for(var i = 0;i<response.length;i++){
               let obj =  response[i].son_name.map(item=>{
                //    console.log(item)
                    return{
                        name: item.name,
                        count : item.count,
                        image_url : item.image_url
                    }
                })
               this.varietyData.push(obj)
               this.singleData.push(obj[1])
            }
        })
    }
}
</script>

<style scoped>
.masking{
    width: 100%;
    background: seagreen;
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
}
.ListBox{
    width: 100%;
    height: 70%;
    background: #fff;
    position: absolute;
    top: 0px;
    left: 0;
    bottom: 0;
}
.tltle{
    height: 4%;
    padding: 13px;
    background: #f8f8f8;
    border-bottom: 1px solid #f1f1f1;
}
.tltle > h4{
    color: #333;
    float: left;
}
.tltle > span{
    font-size: 18px;
    color: #666;
    float: right;
}
.taxon_Left{
    width: 40%;
    height: 90%;
    position: absolute;
    top: 10%;
    left: 0;
    bottom: 0;
    overflow: auto;
}
.taxon_Left > li{
    width: 100%;
    padding: 14px;
    background: #f8f8f8;
    color: #666;
    box-sizing: border-box;
    font-size: 13px;
}
.taxon_Left > li > span {
    display: inline-block;
    font-size: 10px;
    padding:0 4px;
    border:1px solid #ccc;
    float: right;
    border-radius: 8px;
}
.taxon_Right{
    width: 60%;
    height: 90%;
    position: absolute;
    top: 10%;
    right: 0;
    bottom: 0;
    overflow: auto;
}
.taxon_Right > li {
    display: flex;
    padding: 5px 10px;
    color: #666;
}
.Name{
    line-height: 40px;
    padding: 0 10px;
    flex: 1;
    font-size: 13px;
}
.Count{
    line-height: 40px;
    font-size: 10px;
    text-align: right;
}
</style>

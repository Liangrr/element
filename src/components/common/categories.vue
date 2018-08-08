<template>
    <div class="categoriesBox">
        <div class="categories">
            <div class="categoriesList" v-for="item in data" :key="item.id">{{item.name}}</div>
        </div>
        <div class="categoriesPull" @click="dropDown()">
            <button class="drop"><span class="iconfont icon-plus-select-down"></span></button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data : Array
    },
    methods : {
        dropDown(){
            alert(1)
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
.categoriesBox{
    position: relative;
}
.categories{
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
}
.categoriesList{
    text-align: center;
    background: #0af;
    color: #fff;
    padding: 8px 10px;
    display: inline-block;
}
.categoriesPull{
    position: absolute;
    top: 0;
    right: 0;
}
.categoriesPull > button{
    padding: 8px 10px;
    border: 0;
    background: #0af;
    color: #fff;
    outline: none;
}
</style>

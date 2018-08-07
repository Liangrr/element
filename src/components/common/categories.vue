<template>
    <div>
        <div class="categories">
            <div class="categoriesList" v-for="item in data" :key="item.id">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data : Array
    },
    mounted(){
        
    }
}
</script>

<style scoped>
.categories{
    width: 90%;
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
</style>

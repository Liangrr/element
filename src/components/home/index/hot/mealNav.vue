<template>
    <div class="mealNav">
        <div class="mealNavList aa" v-for="(item,index) in MealNavData" :key="index">
            {{item.name}}
        </div>
    </div>
</template>

<script>
import {getMealNavData} from '@/services/mealService.js'
export default {
    data(){
        return {
            MealNavData : []
        }
    },
    mounted(){
        getMealNavData().then(response => {
            this.MealNavData = response;
        })
    }
}
</script>

<style scoped>
.mealNav{
    width:100%;
    overflow-x: auto;
    white-space: nowrap;
}
.mealNavList{
    display: inline-block;
    text-align: center;
    padding: 8px 10px;
    align-self: auto;
    color: #333;
}
</style>

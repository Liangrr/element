<template>
    <page class="setmeal page" >
        <MealNav></MealNav>
        <Merchant></Merchant>
    </page>
</template>

<script>
import MealNav from './mealNav.vue';
import Merchant from './merchant.vue';
export default {
    components : {
        MealNav,
        Merchant
    },
    
}
</script>

<style>

</style>

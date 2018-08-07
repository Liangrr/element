<template>
    <div id="cate">
        <Categories :data="categoriesData"></Categories>
    </div>
</template>

<script>
import axios from 'axios'
import Categories from '@/components/common/categories.vue'
export default {
    components : {
        Categories
    },
    data(){
        return {
            categoriesID : this.$route.query.itemId,
            categoriesData : []
        }
    },
    mounted(){
        const SIFT_FACTORS_API = '/restapi/shopping/v2/foods_page/sift_factors';
            return new Promise((resolve,reject) => {
                axios.get(SIFT_FACTORS_API,{
                    params : {
                        entry_id : this.categoriesID,
                        longitude : 114.085947,
                        latitude : 22.547,
                        terminal : 'h5'
                    }
                })
                .then(response => {

                    let data = response.data.map(item =>{
                        return {
                            name : item.name,
                            id : item.id
                        }
                    })
                    this.categoriesData = data;
                })
                .catch(error => {
                    console.log('失败')
                })
            })
        }
    }
</script>

<style>

</style>

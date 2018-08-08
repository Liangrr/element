<template>
    <div id="cate">
        <keep-alive>
            <Categories :data="categoriesData"></Categories>
        </keep-alive>
    </div>
</template>

<script>
import axios from "axios";
import Categories from "@/components/common/categories.vue";
import { getSiftFactorsData } from "@/services/categories.js";
export default {
  components: {
    Categories
  },
  data() {
    return {
    //   categoriesID : this.$store.state.Cate,
      categoriesID : sessionStorage.getItem('itemId'),
      categoriesData: []    
    };
  },
  mounted() {
        getSiftFactorsData(this.categoriesID).then(response => {
            let data = response.data.map(item => {
                return {
                name: item.name,
                id: item.id
                };
            });
            
             this.categoriesData = data;
        });
    }
}
</script>

<style>
</style>

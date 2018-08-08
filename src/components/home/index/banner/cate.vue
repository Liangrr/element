<template>
    <div id="cate">
        <Categories :data="categoriesData"></Categories>
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
      categoriesID : this.$store.state.cateId || 20004689 ,
      categoriesData: []
    };
  },
  mounted() {
        getSiftFactorsData(this.categoriesID).then(response => {
            this.categoriesData = response;
            
        });
    }
}
</script>

<style>
</style>

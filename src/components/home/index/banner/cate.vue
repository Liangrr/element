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
      categoriesID : sessionStorage.getItem('itemId'),
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

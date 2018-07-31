<template>
<div id="detail" class="page subpage">
    <h1>{{name}}详情页</h1>
</div>
</template>

<script>
import tmp from '../tmp.js'
export default {
    data(){
        return {
            name: ''
        }
    },
    created(){
        //父页面传值给子页面
        // 方式1：值不传也可以进入页面
        // let item = sessionStorage.getItem('goods');
        // console.log(item);

        // 方式2：适合传多个值的对象
        // this.name = tmp.getGoodsItem();


        // 方式3：适合传简单的数据，值必须传入才能进入页面
        this.name = this.$route.params.itemname;

        // 方式4：适合传简单的数据， 值不传也可以进入页面
        this.name = this.$route.query.title;

    }
}
</script>

<style>

</style>

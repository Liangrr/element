<template>
    <div id="search" @click="goGtartSearch">
        <p>
            <b class="iconfont icon-sousuo"></b>
            <span>{{seekHint}}</span>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            seekHint : '搜索饿了么商家、商家名称'
        }
    },
    methods : {
        goGtartSearch(){
            this.$router.push(
                {path: '/startSearch'}
            )
        }
    }
}

</script>

<style scoped>
#search{
    width: 100%;
    height: 54px;
    background: #0af;   
    padding: 6px 14px;
    box-sizing: border-box;
    margin-top: -1px;
}
#search > p {
    width: 100%;
    height: 100%;
    text-align: center;
    background: #fff;
    line-height: 40px;
    color: #999;
}
</style>
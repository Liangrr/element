<template>
<div class="page" ref="page">
    <div class="page-wrap" >
        <slot/>
        
    </div>
</div>
</template>

<script>
export default {
    props: {
        onScroll: Function
    },
    methods: {
        refreshDOM(){
            this.scroll.refresh();
        },

        scrollTop(){
            this.scroll.scrollTo(0, 0, 200);
        },
        toAppNav(){
        	this.scroll.scrollTo(0,-330,100)
        }
    },
    mounted(){
        //创建滚动视图，让页面可以滚动
        let scroll = new IScroll(this.$refs.page, {
            //判断外部是否需要监听正在滚动的位置
            probeType: 3,
            scrollbars:true,
            fadeScrollbars:true,
            mouseWheel: true, //鼠标滚轮滚动
            interactiveScrollbars: true, 
            preventDefault:false //阻止冒泡
        });
        this.scroll = scroll;
        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
        })
        scroll.on('scroll', ()=>{
            let y = scroll.y  
            this.$center.$emit('distance',y)
            let disY = scroll.y-scroll.maxScrollY;
//          每时每刻的y值
            let scrollY = scroll.y;
//          这里滚动事件传一个对象
            this.$emit('onScroll',{disY,scrollY})
            // console.log(scroll.y)
        })
       
    }
}
</script>

<style scoped>
.page{
  width: 100%;
  position: absolute;
  top:0;
  left: 0;
  bottom: 49px;
  overflow: hidden;
}

</style>
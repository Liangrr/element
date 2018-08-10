export default {
    install(Vue){
        //goodList中距离千米的过滤器
        Vue.filter('distances',(value)=>{
            if(value > 1000){
               var distance = (value/1000).toFixed(2)
               return distance + 'km'
            }else if(value < 1000){
                return value + 'm'
            }
        })
    }
}
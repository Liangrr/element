
import axios from 'axios';
import API from '@/api/index.js';


/*
	请求搜索数据
	纬度 ： latitude
	经度 ： longitude
*/	
export function getHstSearchWordsData(){
	return new Promise((resolve,reject) =>{
		axios.get(API.HOT_SEARCH_WORDS_API,{
			params : {
				latitude : 22.547,
				longitude : 114.085947
			}
		})
		.then (response => {
			let data = response.data.map(item =>{
				return {
					search_word : item.search_word
				}
			})
			resolve(data);
        })
        .catch(error=>{
        	console.log('失败');
    	})
	})
}
//获得推荐商家
export function getAppNavData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.APPNAV_API)
		.then(response=>{
//			获得数据
	        resolve(response.data);
		})
		.catch(error=>{
        	console.log('失败');
    	})
	})
}

export function getScreenData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.SCREEN_API)
		.then(response=>{
//			获得数据
	        resolve(response.data);
		})
		.catch(error=>{
			console.log('失败');
		})
	})
}

//轮播图
export function getHomeBannerData(){
    return new Promise((resolve, reject)=>{
        axios.get('restapi/shopping/openapi/entries', {
			params: {
				latitude : 22.631798,
				longitude : 113.836897,
				templates : ['main_template', 'favourable_template', 'svip_template'],
				terminal : 'h5'
			}
		})
        .then(response=>{
            let data = []
            let data1 = []
            let data2 = [] 
            data = response.data[0].entries.map(item=>{
//          	采用字符串拼接,把条件都拼接好
            	let str = item.image_hash;
            	str = 'https://fuss10.elemecdn.com/'
            	+str[0]+'/'+str.substring(1,3)+'/'+str.substring(3,str.length)
            	+'.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/';
                return {
					name : item.name,
					id : item.id,
					imageUrl:str,
				}
            })
            
                for(let i = 0 ; i < data.length; i++){
                    if(i <= 9 ){
                        data1.push(data[i])
                    }
                    if(i > 9){
                        data2.push(data[i])
                    }
                }
			resolve({
                data1,data2
            })
        })
        .catch(error=>{
            console.log('失败')
            })
        })
    }

//hot的数据请求
export function getHomeHotData(){
    return new Promise((resolve, reject)=>{
        axios.get('restapi/shopping/openapi/entries?latitude=22.631798&longitude=113.836897&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5')
        .then(response=>{
            var hotData = response.data[1].entries[0]
                var hotDatas = {
                    name: hotData.name,
                    description: hotData.description,
                    population: JSON.parse(hotData.more).population,
                }
                resolve(hotDatas)
            })
        })
        .catch(error=>{
            console.log('失败')
            })
   }

//商店列表数据
export function getHomeGoodListData(count){
    return new Promise((resolve, reject)=>{
        axios.get('restapi/shopping/v3/restaurants?latitude=22.648565&longitude=113.830707&offset='+count+'&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5')
        .then(response=>{
            
            let goodsList = response.data.items.map(item=>{
//          	采用字符串拼接,把条件都拼接好
                let str = item.restaurant.image_path;
                let ends = '';
                if(str.endsWith('png'))
                    ends = '.png'
                if(str.endsWith('jpeg'))
                    ends = '.jpeg'
            	str = 'https://fuss10.elemecdn.com/'
            	+str[0]+'/'+str.substring(1,3)+'/'+str.substring(3,str.length)
                +ends+'?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/';
                let arr = item.restaurant.activities
                let arr1 = []
                let arr2 = []
                for(var i = 0 ; i < arr.length ; i++){
                    if(i < 2){
                        arr1.push(arr[i])
                    }
                    if(i >= 2){
                        arr2.push(arr[i])
                    }
                }
                return {
                    img: str,
                    id:item.restaurant.id,
                    name:item.restaurant.name,
                    reason: item.restaurant.recommend.reason,
                    flavors: item.restaurant.flavors[0].name,
                    rating:item.restaurant.rating,//评分
                    recent_order_num:item.restaurant.recent_order_num,//月售
                    float_minimum_order_amount:item.restaurant.float_minimum_order_amount,//起送
                    float_delivery_fee:item.restaurant.float_delivery_fee,//配送费
                    arr1,
                    arr2,
                    distance:item.restaurant.distance,//距离
                    order_lead_time:item.restaurant.order_lead_time,//配送时间
                    // support_tags:item.restaurant.support_tags
                }
            })
            resolve(goodsList)
            console.log(goodsList)
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}
//轮播里的下拉分类数据
export function getSeleCtionData(){
    return new Promise((resolve , reject) => {
        axios.get(API.SELECTION_API,{
            params : {
				latitude : 22.54286,
				longitude : 114.059563
			}
        })
        .then(response =>{
            let data = response.data.map(item =>{
                return {
                    title : item.name,
                    count : item.count,
                    son_name : item.sub_categories
                }
            })
            resolve(data)
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}



//获得商家详情数据的
export function getGoodListDetailData(){
    return new Promise((resolve, reject)=>{
        axios.get('shopping/v2/menu?restaurant_id=1334126')
        .then(response=>{
                console.log(response)
        })
        .catch(error=>{
            console.log('失败')
        })
    })
}


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
                return {
					name : item.name,
					id : item.id
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
                    return {
                        name: item.restaurant.name,

                        
                    }
               })
            resolve(goodsList)
            })
        })
        .catch(error=>{
            console.log('失败')
            })
    }


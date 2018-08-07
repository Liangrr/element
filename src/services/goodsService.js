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
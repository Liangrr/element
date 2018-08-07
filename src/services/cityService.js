import axios from 'axios';
import API from '@/api/index.js';

//获得推荐商家
export function getCityData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.CITY_API)
		.then(response=>{
//			console.log(response)
//			获得数据
	        resolve(response.data);
		})
		.catch(error=>{
        	console.log('失败');
    	})
	})
}
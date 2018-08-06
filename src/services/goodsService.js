import axios from 'axios';
import API from '@/api/index.js';


//轮播图
export function getBannerData(){
	return new Promise((resolve,reject)=>{
		axios.get('',{
			params:{
				__t: new Date().getTime(),
			}
		})
		.then(response=>{
			
	        resolve(response);
		})
		.catch(error=>{
        	console.log('失败');
    	})
	})
}
import axios from 'axios';
import API from '@/api/index.js';

//获得平台数据请求
export function getPlatformData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.PLATFORM_API)
		.then(response=>{
			let data = response.data[1].map(item=>{
				let str = item.main_pic_hash;
                let ends = '';
                if(str.endsWith('gif'))
                    ends = '.gif'
                if(str.endsWith('png'))
                    ends = '.png'
                if(str.endsWith('jpeg'))
                    ends = '.jpeg'
                    
            	str = 'https://fuss10.elemecdn.com/'
            	+str[0]+'/'+str.substring(1,3)+'/'+str.substring(3,str.length)
            	+ends+'?imageMogr/format/webp/';
                
				return {
					title:item.title,
					subtitle:item.subtitle,
					imageUrl:str,
					title_color:item.title_color,
				}
			})
	        resolve(data);
		})
		.catch(error=>{
        	console.log('失败');
    	})
	})
}

export function getActivityData(){
	return new Promise((resolve,reject)=>{
		axios.get(API.ACTIVITY_API)
		.then(response=>{
			let data = response.data.map(item=>{
				let str = item.image_hash;
	            let ends = '';
				if(str.endsWith('jpeg'))
	                ends = '.jpeg'
				str = 'https://fuss10.elemecdn.com/'
            	+str[0]+'/'+str.substring(1,3)+'/'+str.substring(3,str.length)
            	+ends+'?imageMogr/format/webp/';
            	return {
            		corner_marker:item.corner_marker,
            		imageUrl:str,
            		original_price:item.original_price,
            		points_required:item.points_required,
					title:item.title,
				}
			})
	        resolve(data);
		})
		.catch(error=>{
        	console.log('失败');
    	})
	})
}

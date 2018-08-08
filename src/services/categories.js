import axios from 'axios';
import API from '@/api/index.js';


export function getSiftFactorsData(categoriesID){
    return new Promise((resolve,reject) => {
        axios.get(API.SIFT_FACTORS_API,{
            params : {
                entry_id : categoriesID,
                longitude : 114.085947,
                latitude : 22.547,
                terminal : 'h5' 
            }
        })
        .then(response=>{
        	let data = response.data.map(item => {
                return {
	                	name: item.name,
	                	id: item.id
	                }
	           })
            resolve(data);
        })
        .catch(error => {
            console.log('失败')
        })
    })
}
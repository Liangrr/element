import axios from 'axios';
import API from '@/api/index.js';


//品质套餐导航数据
export function getMealNavData(){
    return new Promise((resolve,reject) => {
        axios.get(API.MEAL_NAV_API,{
            params : {
                type : 'quality_meal',
                latitude : 22.54286,
                longitude : 114.059563,

            }
        })
        .then(response => {
            console.log(response)
            let data = response.data.tabs.map(item => {
                return {
                    name : item.name,
                    sift_factor : item.params.sift_factor
                }
            })
            resolve(data);
        })
        .catch(error=>{ 
            console.log('失败')
        })
    })
}
import axios from 'axios';
import API from '@/api/index.js';

export function getPurchaseData(type){
    type ? type : 1
    return new Promise((resolve,reject) => {
        axios.get(API.PURCHASE_API,{
            params : {
                type : type,
                offset : 0,
                latitude : 22.63404,
                longitude : 113.8337
            }
        })
        .then(response => {
            let data = response.data.foods.map(item => {
                return {
                    restaurant_name : item.restaurant_name,
                    restaurant_rating : item.restaurant_rating,
                    restaurant_id : item.restaurant_id,
                    name : item.name,
                    stock : item.stock,
                    price : item.price,
                    original_price : item.original_price,
                    image_hash : item.image_hash
                }
            })
            resolve(data);
        })
        .catch(error => {
            console.log('失败')
        })
    })
}

export function getPopulationData(){
    return new Promise((resolve,reject) => {
        axios.get(API.POPULATION_API,{
            params : {
                latitude : 22.63404,
                longitude : 113.8337,
                limit : 20
            }
        })
        .then(response => {
            let data = response.data.map(item => {
                return {
                    population : item.population
                }
            })
            resolve(data);
        })
        .catch(error => {
            console.log('失败')
        })
    })
}

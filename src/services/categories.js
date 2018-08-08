import axios from 'axios';


export function getSiftFactorsData(categoriesID){
    const SIFT_FACTORS_API = '/restapi/shopping/v2/foods_page/sift_factors';
    return new Promise((resolve,reject) => {
        axios.get(SIFT_FACTORS_API,{
            params : {
                entry_id : categoriesID,
                longitude : 114.085947,
                latitude : 22.547,
                terminal : 'h5' 
            }
        })
        .then(response=>{
            resolve(response);
            // console.log(categoriesID)
        })
        .catch(error => {
            console.log('失败')
        })
    })
}
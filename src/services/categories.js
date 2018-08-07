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
            // 			获得数据
            // console.log(this.$store.state.Cate)
            resolve(response);
            console.log(categoriesID)
        })
        // .then(response => {
        //     let data = response.data.map(item =>{
        //         return {
        //             name : item.name,
        //             id : item.id
        //         }
        //     })
        //     this.categoriesData = data;
        // })
        .catch(error => {
            console.log('失败')
            console.log(categoriesID)
        })
    })
}
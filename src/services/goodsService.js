import axios from 'axios'
import API from '@/api/index.js'
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

 //    imgData:[
		// 		{src:'https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg'},
		// 		{src:'ttps://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg'},
		// 		{src:'ttps://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg'},
		// 		{src:'https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg'}
		// 	]

//轮播图
export function getHomeBannerData(){
    return new Promise((resolve, reject)=>{
        axios.get('restapi/shopping/openapi/entries?latitude=22.631798&longitude=113.836897&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5')
        .then(response=>{
            let data = []
            let data1 = []
            let data2 = []
            data = response.data[0].entries.map(item=>{
                return item.name
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
                data1,
                data2
            })
        })
        .catch(error=>{
            console.log('失败')
            })
        })
    }


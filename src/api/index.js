/*
接口功能：
接口参数：latitude ： 纬度
        longitude ： 经度
*/
const HOT_SEARCH_WORDS_API = '/restapi/shopping/v3/hot_search_words';

/*
接口功能：首页轮播图数据接口
接口参数：
*/
//'https://h5.ele.me/restapi/shopping/openapi/entries?latitude=22.631798&longitude=113.836897&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5'

/*
接口功能：首页列表数据接口
接口参数：
*/
//'https://h5.ele.me/restapi/shopping/v3/restaurants?latitude=22.631798&longitude=113.836897&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'


/*
接口功能：首页综合排序的数据、距离最近、品质联盟数据接口
接口参数：
*/
const APPNAV_API = '/restapi/shopping/v1/restaurants/outside_filter/attributes?latitude=22.631798&longitude=113.836897&terminal=h5';
/*
接口功能：首页筛选数据接口
接口参数：
*/
const SCREEN_API = '/restapi/shopping/v1/restaurants/filter-bar/attributes?latitude=22.547&longitude=114.085947&terminal=h5';
/*
接口功能：定位城市数据接口
接口参数：
*/
const CITY_API = '/restapi/bgs/poi/reverse_geo_coding?latitude=22.547&longitude=114.085947';

export default {
	APPNAV_API,
    SCREEN_API,
    HOT_SEARCH_WORDS_API,
	CITY_API    
}
